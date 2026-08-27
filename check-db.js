// Thử một truy vấn nhỏ để chắc chắn kết nối được
const { pool } = require('./db');

async function test() {
  const result = await pool.query('SELECT NOW()');
  console.log('✅ Kết nối Postgres cloud OK:', result.rows[0].now);
}

test().catch((err) => console.error('❌ Lỗi kết nối:', err.message));
