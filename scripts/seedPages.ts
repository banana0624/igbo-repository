// scripts/seedPages.ts

// scripts/seedPages.ts

import mongoose from 'mongoose';
import slugify from 'slugify';
import { Page } from '../src/models/Page.js';
import { Subject } from '../src/models/Subject';

const pagesData = [
  {
    title: 'Griot Traditions',
    content: 'Their songs echo identity and memory.',
    media: [
      {
        url: '/media/griot1.jpg',
        type: 'image',
        caption: 'A griot performing in Mali',
        position: 1,
      },
    ],
    subjectTitle: 'Oral Traditions',
  },
  {
    title: 'Ancestral Rites',
    content: 'A sacred dance passed from elder to child.',
    media: [],
    subjectTitle: 'Spiritual Practices',
  },
];

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI as string);

  const subjects = await Subject.find({});
  const pages = pagesData.map((page) => {
    const subject = subjects.find((s) => s.title === page.subjectTitle);
    if (!subject) throw new Error(`Subject not found: ${page.subjectTitle}`);

    return {
      ...page,
      slug: slugify(page.title, { lower: true }),
      subjectId: subject._id,
    };
  });

  await Page.insertMany(pages);
  console.log('✅ Pages seeded with slugs and linked subjects.');
  process.exit(0);
};

run();
