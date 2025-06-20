// src/db/connection.ts

import { createPool } from 'mysql2/promise';

export const db = createPool({
  host: 'localhost',
  user: 'your_user',
  password: 'your_password',
  database: 'your_db'
});
