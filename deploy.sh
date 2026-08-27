#!/bin/bash
# deploy.sh - đặt trong thư mục app trên server
set -euo pipefail   # dừng ngay khi có lỗi (xem mục "Nhìn sâu hơn")

APP_NAME="my-app"
BRANCH="main"

echo "🚀 Bắt đầu deploy $APP_NAME lúc $(date)"

# 1. Kéo code mới nhất về
echo "📥 Pull code từ nhánh $BRANCH..."
git fetch origin
git reset --hard "origin/$BRANCH"   # đảm bảo server khớp CHÍNH XÁC với remote

# 2. Cài dependencies đúng theo lockfile
echo "📦 Cài dependencies..."
npm ci --omit=dev

# 3. Build (chỉ chạy nếu package.json có script "build")
if npm run | grep -q "^  build"; then
  echo "🔨 Build ứng dụng..."
  npm run build
fi

# 4. Chạy migration database
echo "🗄️  Chạy migration..."
npm run migrate

# 5. Nạp lại app KHÔNG downtime bằng PM2
echo "🔄 Reload app..."
pm2 reload "$APP_NAME" --update-env

echo "✅ Deploy xong lúc $(date)"
