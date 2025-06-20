// project-root/scripts/clearDb.ts

import mongoose from 'mongoose';
import { Subject } from '../src/models/Subject';
import { Page } from '../src/models/Page';

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI as string);
  await Subject.deleteMany({});
  await Page.deleteMany({});
  console.log('🧹 All documents removed.');
  process.exit(0);
};

run();
