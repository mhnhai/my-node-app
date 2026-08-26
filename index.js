// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Chao mung den voi ung dung Node.js!');
});

app.get('/a', (req, res) => res.json({ message: 'Hello World' }))

app.get('/health', (req, res) => res.json({ ok: true }))

// Route mới, chỉ tồn tại trên branch feature/about
app.get('/about', (req, res) => {
  res.send('Day la trang About.');
});

app.listen(PORT, () => console.log(`Server chay tai http://localhost:${PORT}`));
