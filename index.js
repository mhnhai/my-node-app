// index.js - server Node.js tối giản
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Xin chao tu Git repository dau tien!\n');
});

server.listen(3000, () => {
  console.log('Server chay tai http://localhost:3000');
});
