# 🚀 Hướng Dẫn Deploy FindPoise Lên Cloudflare Pages (Miễn Phí 100%)

Tài liệu hướng dẫn triển khai mã nguồn **Astro 5 SSG** lên **Cloudflare Pages** với băng thông không giới hạn và 0đ chi phí vận hành.

---

## 1. Chuẩn Bị Trước Khi Deploy
- [x] Source code Astro 5 tĩnh đã được commit vào Git repo cục bộ.
- [ ] Tạo một repository mới trên GitHub cá nhân (ví dụ: `https://github.com/[your-username]/findpoise`).
- [ ] Push toàn bộ code lên nhánh `main`:
  ```bash
  git remote add origin https://github.com/[your-username]/findpoise.git
  git branch -M main
  git push -u origin main
  ```

---

## 2. Kết Nối Cloudflare Pages

1. Đăng nhập vào [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Chọn menu bên trái: **Compute (Workers & Pages)** $\rightarrow$ **Create Application** $\rightarrow$ Tab **Pages** $\rightarrow$ **Connect to Git**.
3. Chọn tài khoản GitHub của bạn và chọn repository `findpoise`.
4. Cấu hình thông số Build:
   - **Framework preset**: Chọn `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js Version**: Thêm biến môi trường (Environment Variable) nếu cần:
     - `NODE_VERSION`: `20` hoặc `22`
5. Bấm **Save and Deploy**. Quá trình build sẽ hoàn tất trong chưa đầy 1 phút.

---

## 3. Gắn Tên Miền Chính Thức (`findpoise.com`)

1. Trong trang quản lý dự án Pages trên Cloudflare, vào tab **Custom domains**.
2. Bấm **Set up a custom domain** $\rightarrow$ Nhập: `findpoise.com` (và `www.findpoise.com`).
3. Nếu domain `findpoise.com` đã được quản lý DNS trên Cloudflare, hệ thống sẽ tự động thêm bản ghi CNAME và cấp chứng chỉ SSL tự động trong 10 giây.
4. Kiểm tra trang web hoạt động tại `https://findpoise.com`.
