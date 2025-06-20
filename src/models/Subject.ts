// src/models/Subject.ts

import { Schema, model, models } from 'mongoose';

const subjectSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const Subject = models.Subject || model('Subject', subjectSchema);
