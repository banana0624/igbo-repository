// src/models/Media.ts

import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  pageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Page', required: true },
  url: { type: String, required: true },
  type: { type: String, enum: ['image', 'audio'], required: true },
  caption: String,
  position: Number,
});

export const Media = mongoose.model('Media', mediaSchema);
