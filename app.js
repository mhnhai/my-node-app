// app.js - server Express mẫu để tập với PM2
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // in ra process.pid để thấy request được xử lý bởi tiến trình nào
  res.json({ message: 'Xin chao tu PM2!', pid: process.pid });
});

app.listen(PORT, () => {
  console.log(`Server chay o port ${PORT}, PID: ${process.pid}`);
});
