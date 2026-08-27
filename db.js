// db.js
require('dotenv').config();
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('Missing DATABASE_URL in .env');
}

const isLocal =
  connectionString.includes('localhost') ||
  connectionString.includes('127.0.0.1');

const pool = new Pool({
  connectionString,
  // Neon/cloud cần SSL; Postgres local thường không hỗ trợ
  ssl: isLocal ? false : { rejectUnauthorized: false },
});

module.exports = pool;
