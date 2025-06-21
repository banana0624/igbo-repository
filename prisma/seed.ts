// prisma/seed.ts

/**
 * Mkomigbo Seed System v0.1.0
 * Seed file: Historical base roles and permissions
 * GitHub Tracker: https://github.com/banana0624/igbo-repository/issues/seed-phase-1
 */

import { PrismaClient } from '@prisma/client'
import crypto from 'crypto'  
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const prisma = new PrismaClient()

// Define seed metadata
const SEED_VERSION = '0.1.0'
const SEED_NAME = 'base_roles_permissions'
const TIMESTAMP = new Date().toISOString()
const reportFile = path.join(__dirname, '../seeds/seed-report.json')

// Core data
const roles = [
  { name: 'admin', description: 'System administrator' },
  { name: 'moderator', description: 'Content reviewer' },
  { name: 'archivist', description: 'Cultural records manager' },
]

const permissions = [
  { action: 'create_entry', description: 'Can create entries' },
  { action: 'edit_entry', description: 'Can edit entries' },
  { action: 'delete_entry', description: 'Can delete entries' },
  { action: 'review_submissions', description: 'Can moderate submissions' },
]

// Seed function
async function main() {
  console.log(`🌱 Seeding ${SEED_NAME} @ ${TIMESTAMP}`)

  for (const role of roles) {
    const created = await prisma.role.upsert({
      where: { name: role.name },
      update: {},
      create: role,
    })

    await prisma.changelog.create({
      data: {
        entityType: 'Role',
        entityId: created.id,
        changeType: 'SEED_CREATE',
        changedBy: 'seed-script',
      },
    })
  }

  for (const perm of permissions) {
    const created = await prisma.permission.upsert({
      where: { action: perm.action },
      update: {},
      create: perm,
    })

    await prisma.changelog.create({
      data: {
        entityType: 'Permission',
        entityId: created.id,
        changeType: 'SEED_CREATE',
        changedBy: 'seed-script',
      },
    })
  }

  // Write SHA256 of seeded content
  const seedPayload = { SEED_VERSION, roles, permissions, timestamp: TIMESTAMP }
  const payloadString = JSON.stringify(seedPayload, null, 2)
  const hash = crypto.createHash('sha256').update(payloadString).digest('hex')

  fs.mkdirSync(path.dirname(reportFile), { recursive: true })
  fs.writeFileSync(reportFile, JSON.stringify({ ...seedPayload, hash }, null, 2))

  console.log(`✅ Seed complete | SHA256: ${hash}`)
}

main()
  .catch(e => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
