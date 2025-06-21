// src/config/congif.ts

import dotenv from 'dotenv';

dotenv.config(); // Load .env into process.env

function getEnv(key: string, required = true): string {
  const value = process.env[key];
  if (required && (value === undefined || value === '')) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value!;
}

export const config = {
  app: {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT || '3000', 10),
    appUrl: getEnv('APP_URL'),
  },
  db: {
    url: getEnv('DATABASE_URL'),
  },
  auth: {
    jwtSecret: getEnv('JWT_SECRET'),
    tokenExpiresIn: process.env.TOKEN_EXPIRES_IN || '1d',
    bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS || '12', 10),
  },
  seed: {
  signingKey: getEnv('SEED_SIGNING_KEY'),
  force: process.env.SEED_FORCE === 'true',
},
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    folder: process.env.LOG_FOLDER || './logs',
  },
  smtp: {
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
};
