// src/lib/db.ts

import mongoose from "mongoose";

const MONGODB_URI = process.env.DB_URI!;

if (!MONGODB_URI) {
  throw new Error("MongoDB connection string (DB_URI) is missing.");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "mkomigbo",
      bufferCommands: false,
    }).then((mongoose) => {
      console.log("✅ MongoDB connected");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// Prevent duplicate types in dev
declare global {
  var mongoose: typeof cached;
}
