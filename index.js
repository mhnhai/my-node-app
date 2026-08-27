// index.js
const express = require('express');
const connectDB = require('./db');
const app = express();
connectDB(); // kết nối DB trước khi nhận request
const PORT = process.env.PORT || 3000;
const APP_MESSAGE = process.env.APP_MESSAGE || 'Chao mung den voi ung dung Node.js!';

app.get('/', (req, res) => {
  res.send(APP_MESSAGE);
});

app.get('/health', (req, res) => res.json({ ok: true }))

// Route mới, chỉ tồn tại trên branch feature/about
app.get('/about', (req, res) => {
  res.send('Day la trang About.');
});

app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ ok: true, db: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server chay tai http://localhost:${PORT}`));
