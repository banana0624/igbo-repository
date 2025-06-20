// project-root/scripts/seedUsers.ts

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import crypto from 'crypto';
import { User } from '../src/models/User';
import { rolePermissions, can } from '../src/auth/permissions/rolePermissions';
import { allowedSeedAction, allowedSeedRoles, isForceEnabled } from './seedConfig';

type Role = keyof typeof rolePermissions;

const lifecycleTag = `seeded:${new Date().toISOString()}`;

const users = [
  {
    fullName: 'Admin One',
    email: 'admin@example.com',
    password: 'secureAdmin123',
    role: 'admin',
    meta: { source: 'core', tag: lifecycleTag }
  },
  {
    fullName: 'Theo Contributor',
    email: 'theo@example.com',
    password: 'narrateAndPreserve',
    role: 'contributor',
    meta: { source: 'demo', tag: lifecycleTag }
  },
  {
    fullName: 'Aruna Researcher',
    email: 'aruna@example.com',
    password: 'insightExplorer',
    role: 'researcher',
    meta: { source: 'demo', tag: lifecycleTag }
  }
];

const isValidRole = (role: string): role is Role => role in rolePermissions;

const testPassword = async () => {
  const plainText = 'narrateAndPreserve';
  const hash = await bcrypt.hash(plainText, 10);
  const matches = await bcrypt.compare(plainText, hash);

  console.log(`🔐 Original: ${plainText}`);
  console.log(`🧾 Hash: ${hash}`);
  console.log(`✅ Match? ${matches}`);
};

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);

    const skippedUsers: any[] = [];

    const hashedUsers = await Promise.all(
      users.map(async (user) => {
        const { password, ...rest } = user;

        if (!isValidRole(user.role)) {
          skippedUsers.push({
            ...rest,
            reason: `Invalid role: ${user.role}`,
            timestamp: new Date().toISOString()
          });
          return null;
        }

        const role = user.role as Role;
        const passwordHash = await bcrypt.hash(password, 10);

        const canSeedAudit =
          can(role, allowedSeedAction) ||
          allowedSeedRoles.includes(role) ||
          isForceEnabled;

        if (!canSeedAudit) {
          skippedUsers.push({
            ...rest,
            reason: `Permission denied for '${role}' on action '${allowedSeedAction}'`,
            timestamp: new Date().toISOString()
          });
          return null;
        }

        return {
          ...rest,
          passwordHash,
          audit: {
            role,
            canSeed: can(role, allowedSeedAction),
            allowedByRoleGroup: allowedSeedRoles.includes(role),
            forced: isForceEnabled,
            seededAt: new Date().toISOString()
          }
        };
      })
    );

    const filteredUsers = hashedUsers.filter(Boolean) as Exclude<typeof hashedUsers[number], null>[];

    await User.deleteMany({});
    await User.insertMany(filteredUsers);

    const dateFolder = new Date().toISOString().split('T')[0];
    const reportDir = `./seed-reports/${dateFolder}`;
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    const timestamp = Date.now();
    const reportPath = `${reportDir}/seed-report-${timestamp}.json`;
    const successContent = JSON.stringify(filteredUsers, null, 2);
    fs.writeFileSync(reportPath, successContent, 'utf-8');

    let skippedPath: string | null = null;
    if (skippedUsers.length > 0) {
      skippedPath = `${reportDir}/skipped-${timestamp}.json`;
      fs.writeFileSync(skippedPath, JSON.stringify(skippedUsers, null, 2), 'utf-8');
      console.log(`⚠️ Skipped ${skippedUsers.length} user(s). Details written to ${skippedPath}`);
    }

    const hash = crypto.createHash('sha256').update(successContent).digest('hex');
    fs.writeFileSync(`${reportPath}.sha256.txt`, hash, 'utf-8');

    const changelogEntry = {
      timestamp: new Date().toISOString(),
      seedId: `${timestamp}-${hash.slice(0, 8)}`,
      seededCount: filteredUsers.length,
      skippedCount: skippedUsers.length,
      seededNames: filteredUsers.map((u) => u.fullName),
      skippedNames: skippedUsers.map((u) => u.fullName),
      reportPath,
      skippedPath,
      hash
    };

    // 🛡️ Ensure changelog path exists before appending
    const changelogPath = './seed-reports/changelog.log';
    const changelogDir = changelogPath.split('/').slice(0, -1).join('/');
    if (!fs.existsSync(changelogDir)) {
      fs.mkdirSync(changelogDir, { recursive: true });
    }

    fs.appendFileSync(changelogPath, JSON.stringify(changelogEntry) + '\n');

    const seededNames = changelogEntry.seededNames.join(', ') || 'None';
    const skippedNames = changelogEntry.skippedNames.join(', ') || 'None';

    console.log(`\n📦 Seed Summary:`);
    console.log(`✅ Seeded: ${filteredUsers.length} user(s) → ${seededNames}`);
    console.log(`⚠️ Skipped: ${skippedUsers.length} user(s) → ${skippedNames}`);
    console.log(`📚 Changelog appended: ${changelogPath}`);

    console.log(`\n📝 Seed report written to: ${reportPath}`);
    console.log(`🔐 SHA256 signature saved: ${hash}`);
    console.log('🎉 Users seeded successfully.');

    await testPassword();
  } catch (err) {
    console.error('🚨 Seeding failed:', err);
  } finally {
    process.exit(0);
  }
};

run();
