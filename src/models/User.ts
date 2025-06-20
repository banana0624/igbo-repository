// src/models/User.ts

import { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },

    role: {
      type: String,
      enum: ['admin', 'moderator', 'contributor', 'viewer', 'researcher'],
      default: 'viewer',
    },

    bio: String,
    avatarUrl: String,

    verified: { type: Boolean, default: false },
    isBanned: { type: Boolean, default: false },

    metadata: {
      lastLogin: Date,
      createdVia: String, // 'invite', 'self-signup', etc.
    },
  },
  { timestamps: true }
);

export const User = models.User || model('User', userSchema);
