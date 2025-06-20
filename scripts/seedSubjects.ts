// project-root/script/seedSubjects.ts

import mongoose from 'mongoose';
import slugify from 'slugify';
import { Subject } from '../src/models/Subject'; // No .js needed in TS


const subjects = [
  {
    title: 'Oral Traditions',
    description: 'Stories, songs, and genealogies passed through spoken word.',
  },
  {
    title: 'Spiritual Practices',
    description: 'Rituals, rites, and belief systems rooted in ancestry.',
  },
  {
    title: 'Textile Arts',
    description: 'Symbolism and identity woven into fabric and fashion.',
  },
  {
    title: 'Culinary Heritage',
    description: 'Flavors and methods shaped by generations of memory.',
  },
];

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI as string);

  const subjectsWithSlugs = subjects.map((subject) => ({
    ...subject,
    slug: slugify(subject.title, { lower: true }),
  }));

  await Subject.insertMany(subjectsWithSlugs);

  console.log('✅ Subjects seeded successfully.');
  process.exit(0);
};

run();
