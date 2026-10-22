# Suziee Corner

Portfolio của Nguyễn Hoàng Thảo Vy (Suziee · Lily Nguyễn).

## Cấu trúc
- `index.html` – khung các trang (Home, About Me, My Projects, Conducts, Own Business, Experience, Contact, Blog, Tài liệu)
- `style.css` – giao diện, màu sắc, hiệu ứng (bìa trang Home nằm ở mục "Home cover")
- `script.js` – chuyển trang, 3 ngôn ngữ VI/EN/KO, dữ liệu, hiệu ứng động, nhạc nền
- `img/` – ảnh, slide Canva, ảnh tách nền cho bìa, video Vietland
- `docs/` – tài liệu minh chứng (PDF)

## Chạy trong Visual Studio Code
1. File → Open Folder… → chọn thư mục `suziee-corner`.
2. Cài extension **Live Server** (Ritwick Dey).
3. Chuột phải `index.html` → **Open with Live Server**.

## Sửa nội dung nhanh (trong `script.js`)
- Chữ các trang: tìm `const T = {` (đoạn chữ ở bìa Home là `'cover.p'`)
- Dự án: `const PROJECTS = [`
- Own Business: `const BUSINESSES = [`
- Thành tích: `const ACH = [`
- Màu chủ đạo: đầu `style.css`, biến `--son`, `--paper`, `--bar`
