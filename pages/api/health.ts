import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDB();
    res.status(200).json({ status: "Connected to MongoDB" });
  } catch (error) {
    res.status(500).json({ status: "Connection failed", error });
  }
}
