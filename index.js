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

app.listen(PORT, () => console.log(`Server chay tai http://localhost:${PORT}`));
