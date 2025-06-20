// project-root/scripts/seedAll.ts

import mongoose from 'mongoose';
import { Subject } from '../src/models/Subject';
import { Page } from '../src/models/Page';
import slugify from 'slugify';

const subjects = [
  { title: 'Oral Traditions', description: 'Spoken knowledge', slug: 'oral-traditions' },
  { title: 'Spiritual Practices', description: 'Rituals and rites', slug: 'spiritual-practices' },
];

const pages = [
  {
    title: 'Griot Traditions',
    content: 'Their songs echo identity and memory.',
    subjectTitle: 'Oral Traditions',
    media: [],
  },
];

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI as string);

  // Clear and seed Subjects
  await Subject.deleteMany({});
  const insertedSubjects = await Subject.insertMany(subjects);

  // Create a title-to-ID map
  const subjectMap = Object.fromEntries(
    insertedSubjects.map((s) => [s.title, s._id])
  );

  // Link and slugify pages
  const preppedPages = pages.map((page) => ({
    ...page,
    subjectId: subjectMap[page.subjectTitle],
    slug: slugify(page.title, { lower: true }),
  }));

  // Clear and seed Pages
  await Page.deleteMany({});
  await Page.insertMany(preppedPages);

  console.log('✅ Database seeded cleanly.');
  process.exit(0);
};

run();
