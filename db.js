// db.js (bản MongoDB)
require('dotenv').config();
const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Kết nối MongoDB Atlas thành công!');
  } catch (err) {
    console.error('❌ Không kết nối được MongoDB:', err.message);
    process.exit(1); // dừng app nếu DB hỏng - tránh chạy nửa vời
  }
}

module.exports = connectDB;
