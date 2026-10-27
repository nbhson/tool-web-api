# Plan — tool-web-api

Bộ 5 demo Web API tĩnh: Clipboard, Share, Media Capture, Web Animation, View Transitions.

## Baseline audit (00:44, 28-10-2026)
- Không có build/test/lint (static HTML/JS/CSS)
- 5 thư mục demo; riêng `5_view-transitions-API` có README + style.css, 4 demo còn lại thiếu style.css/README

## Roadmap
### P0
- [ ] Review từng demo: JS có lỗi runtime rõ ràng không, API dùng đúng chuẩn hiện hành

### P1 (chất lượng)
- [x] Chuẩn hoá: mỗi demo có README ngắn (cách chạy, browser support), error handling khi API không khả dụng (permission denied)
  - 1_clipboard: thêm guard `navigator.clipboard` + `.catch()` cho cả write/read
  - 2_share: thêm guard `navigator.share` + xử lý `AbortError`
  - 3_media-capture: thêm `.catch()` hiển thị alert khi getUserMedia lỗi
  - 4_web-animation: thêm null-check element trước `.animate()`
- [ ] Tách style.css dùng chung hoặc inline nhất quán

### P2
- [x] Root README: index link tới 5 demo (bảng demo/API/browser support + cách chạy)
- [ ] Kiểm tra cross-browser notes

## Self-review log
- _0:44_ Audit lần 1: đã liệt kê cấu trúc.
- _1:40_ P2: root README + 4 README demo; thêm error handling cho cả 4 demo còn lại (demo 5 đã có sẵn guard `startViewTransition`).
