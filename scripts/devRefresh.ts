// project-root/script/devRefresh.ts

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Subject } from '../src/models/Subject';
import { Page } from '../src/models/Page';
import slugify from 'slugify';

dotenv.config();

if (process.env.NODE_ENV === 'production') {
  console.error('❌ Refusing to refresh in production.');
  process.exit(1);
}

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

  await Subject.deleteMany({});
  await Page.deleteMany({});

  const insertedSubjects = await Subject.insertMany(subjects);
  const subjectMap = Object.fromEntries(insertedSubjects.map((s) => [s.title, s._id]));

  const preppedPages = pages.map((page) => ({
    ...page,
    subjectId: subjectMap[page.subjectTitle],
    slug: slugify(page.title, { lower: true }),
  }));

  await Page.insertMany(preppedPages);

  console.log('🔁 Dev refresh complete.');
  process.exit(0);
};

run();
