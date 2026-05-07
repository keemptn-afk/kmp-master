# 🚀 KMP Master Website — Deploy Guide

คู่มือการ deploy เว็บไซต์ขึ้น **GitHub Pages** เพื่อให้เปิดได้จาก URL ตลอดชีพ · ฟรี

---

## 📋 สรุปสั้น

```
1. สมัคร GitHub.com               (3 นาที)
2. ติดตั้ง GitHub Desktop          (3 นาที)
3. สร้าง repository ใหม่           (2 นาที)
4. ลาก folder website เข้าไป       (1 นาที)
5. Push code                       (1 นาที)
6. เปิด GitHub Pages settings      (2 นาที)
7. รอ 1-2 นาที → ได้ URL!         

รวม: 12-15 นาที · ครั้งเดียว
```

---

## ขั้นตอน 1 — สมัคร GitHub

1. ไป **https://github.com/signup**
2. กรอก:
   - Email
   - Password
   - Username (เลือกชื่อที่ต้องการให้อยู่ใน URL)
     - ตัวอย่าง: ถ้าใช้ `keem` → URL จะเป็น `https://keem.github.io/...`
3. ยืนยัน email
4. เลือก plan **Free**

---

## ขั้นตอน 2 — ติดตั้ง GitHub Desktop

GUI app · drag & drop · ไม่ต้องเรียน command line

1. ไป **https://desktop.github.com**
2. Download (Windows/Mac)
3. ติดตั้ง
4. เปิด app → **Sign in to GitHub.com** → ใส่ username/password

---

## ขั้นตอน 3 — สร้าง Repository

ใน GitHub Desktop:

1. คลิก **File → New repository...**
2. กรอก:
   - **Name:** `kmp-master` (หรือชื่ออื่นที่ต้องการ)
   - **Description:** `KMP Pattern Harvester Research`
   - **Local path:** เลือก folder ที่ต้องการเก็บไฟล์ในเครื่อง (เช่น `Documents/`)
   - **Initialize this repository with a README:** ✓ ติ๊ก
3. คลิก **Create repository**

---

## ขั้นตอน 4 — เพิ่มไฟล์เว็บไซต์

1. แตก ZIP `kmp-master-website.zip` ที่ผมส่งมา
2. **Copy ไฟล์ทั้งหมดในนั้น** (index.html, btc-h4.html, ...) **ไปวางใน folder ที่ GitHub Desktop ใช้** (จากขั้นตอน 3)
3. กลับไปที่ GitHub Desktop → จะเห็น **Changes** ปรากฏขึ้น (~22 ไฟล์)
4. ใส่ commit message: `Initial KMP Master upload`
5. คลิก **Commit to main**
6. คลิก **Publish repository** (มุมขวาบน)
7. ติ๊ก **Keep this code private** ออก (ต้องเป็น public สำหรับ GitHub Pages ฟรี)
8. คลิก **Publish repository**

---

## ขั้นตอน 5 — เปิด GitHub Pages

1. ไปที่ **https://github.com/[username]/kmp-master**
   (เปลี่ยน `[username]` เป็น username ของคุณ)
2. คลิก **Settings** (tab ด้านบน)
3. ในเมนูซ้าย คลิก **Pages**
4. ใน **Source** เลือก:
   - Branch: **main**
   - Folder: **/ (root)**
5. คลิก **Save**
6. รอ 1-2 นาที
7. หน้าเดิมจะแสดง:
   ```
   ✅ Your site is live at https://[username].github.io/kmp-master/
   ```

---

## 🎉 เปิด URL ของคุณ

ตัวอย่าง URL:
```
https://keem.github.io/kmp-master/
```

- ✅ Bookmark URL นี้ไว้
- ✅ Share ให้ตัวเองในมือถือ
- ✅ เปิดได้ทุกอุปกรณ์ ทุกที่
- ✅ ไม่ต้องดาวน์โหลดอะไร

---

## 🔄 การอัปเดตในอนาคต

เมื่อ Claude ส่งไฟล์ใหม่ให้ (เช่น เมื่อ XAU M15 มา):

```
1. ผมส่ง ZIP ของไฟล์ที่อัปเดต
2. คุณแตก ZIP
3. Copy ไฟล์ทับ folder เดิม (กดยืนยัน Replace)
4. เปิด GitHub Desktop
5. Changes จะปรากฏอัตโนมัติ
6. ใส่ commit message: "Update XAU M15 data"
7. คลิก Commit to main
8. คลิก Push origin
9. รอ 1-2 นาที → URL update อัตโนมัติ
```

---

## 🔒 Privacy (ความเป็นส่วนตัว)

### Public repository (default · ฟรี)
- ✅ URL ทำงาน
- ⚠️ ใครก็เปิดเจอได้ถ้ารู้ URL
- 💡 แต่ถ้าไม่บอก URL ใคร = effectively private

### Private repository
- 🔒 100% ส่วนตัว
- 💳 ต้องสมัคร GitHub Pro ($4/month)
- คลิก **Settings → General → Change visibility**

### Password protect (ฟรี · ผ่าน Cloudflare)
- มีวิธีแต่ซับซ้อน · บอกผมถ้าต้องการ

---

## 🆘 ปัญหาที่อาจเจอ

### ❓ "404 Page Not Found"
- รอ 2-5 นาที (deployment ยังไม่เสร็จ)
- ตรวจสอบว่า `index.html` อยู่ที่ root ของ repo (ไม่ใช่ใน sub-folder)
- ตรวจ Settings → Pages → Source ว่าเลือก main / (root)

### ❓ "หน้าโหลดได้แต่ไม่มี style"
- ตรวจว่า folder `assets/` ถูก upload แล้ว
- เช็ค Browser Console (F12) ว่ามี error ไหม

### ❓ "ตารางว่างเปล่า"
- ตรวจว่า folder `data/` ถูก upload และมีไฟล์ `master_data.json`
- Check Console สำหรับ error

### ❓ "ไม่อยาก ใช้ GitHub Desktop"
- ทางเลือก: ใช้ web upload โดยตรง
  1. ไป repo บน github.com
  2. คลิก **Add file → Upload files**
  3. ลาก folder ทั้งหมดไปวาง
  4. Commit changes
- ช้ากว่า แต่ไม่ต้องติดตั้ง app

---

## 📞 ติดต่อ Claude

เมื่อต้องการอัปเดต:

```
1. เปิดแชทใหม่ใน Claude
2. บอก URL ของเว็บไซต์
3. Upload ไฟล์ใหม่ (CSV, ภาพ, ฯลฯ)
4. อธิบายว่าต้องการเปลี่ยนอะไร
   ตัวอย่าง:
   - "อัปเดต XAU M15 ใส่เข้าเว็บ"
   - "เพิ่ม pattern P81 Z-Score"
   - "เปลี่ยนสีพื้นหลังเป็นน้ำเงินเข้ม"
5. Claude จะส่งไฟล์ใหม่ให้
6. คุณ upload ทับ → URL update
```

---

## 💾 Backup Strategy (5 layers)

1. **GitHub cloud** — Microsoft server · 99.95% uptime
2. **Git history** — ทุก version ย้อนกลับได้
3. **Local clone** — folder ในเครื่องคุณ
4. **External backup** — copy ไป Google Drive/USB
5. **Claude memory** — context ของโครงการ

ปลอดภัยมาก · พังไม่ได้ง่ายๆ

---

## ✅ Checklist หลัง Deploy

- [ ] เปิด URL ได้
- [ ] หน้า Dashboard แสดงผลถูกต้อง
- [ ] คลิก sidebar items แล้วเปลี่ยนหน้าได้
- [ ] ตาราง patterns แสดงข้อมูล (Patterns Database)
- [ ] Filter buttons ใช้งานได้
- [ ] Search box ทำงาน
- [ ] เปิดบนมือถือได้
- [ ] Bookmark URL แล้ว

---

## 🎯 สรุป

ตอนนี้คุณมี:
- 🌐 เว็บไซต์ online ตลอดชีพ
- 📊 22 หน้า ครอบคลุมข้อมูล research 100%
- 🔍 Search + filter + sort ทุกที่
- 💾 Backup 5 ชั้น
- 🔄 Update ง่าย (drag & drop)
- 📱 ใช้ได้ทุกอุปกรณ์
- 💰 ฟรีตลอดชีพ

🎉 **เริ่มใช้งานได้แล้ว!**
