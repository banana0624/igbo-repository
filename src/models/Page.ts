// src/models/Page.ts

import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  content: { type: String },

  // 👇 Here's the media array, embedded directly in the page
  media: [
    {
      url: String,
      type: { type: String, enum: ['image', 'audio'] },
      caption: String,
      position: Number,
    }
  ]
});

export const Page = mongoose.model('Page', pageSchema);
