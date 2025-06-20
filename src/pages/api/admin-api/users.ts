// /pages/api/admin-api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db'; // your DB connection

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await db.query(`
      SELECT u.id, u.username, u.email, u.role, u.login_attempts, u.created_at,
        JSON_ARRAYAGG(r.name) AS roles
      FROM users u
      LEFT JOIN user_roles ur ON u.id = ur.user_id
      LEFT JOIN roles r ON ur.role_id = r.id
      GROUP BY u.id
    `);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
}
