# KMP Master v9.0 — 66 datasets · 2.15M trades + 📖 Thai User Guide

**Status:** v9.0 · 66/69 datasets (95.7%) · 2,154,570 trades · 22/23 assets · EA v4.1
**Total HTML:** 111 pages (added user-guide.html)

## 📖 NEW: คู่มือการใช้งานภาษาไทย

ไฟล์ใหม่: `user-guide.html` — คู่มือครบ 8 ส่วน:
1. **ภาพรวมโครงการ KMP Master** — อธิบายเป้าหมาย/ประเภทข้อมูล/timeframes
2. **คำศัพท์ trading ที่ต้องเข้าใจก่อน** — R-Multiple, ATR, RR, WR, EV, PF, Sample Size, MFE/MAE, ICT
3. **การอ่านค่าตัวเลขสำคัญ** — Pattern Card, WR Pill, Tier, SL/TP Heatmap, Path Trajectory, Time Decay
4. **คู่มือแต่ละหน้า** — index, patterns, tier, optimal-tpsl, cross, time, edge, reference (10 หน้าหลัก)
5. **Sidebar Navigation** — 4 ระดับ + คลิก + badges + search
6. **10 Sections ในหน้า Dataset** — pattern dist, top, worst, entry quality, context, SL/TP, time decay, trajectory, grid, key findings
7. **Workflow การเลือก Pattern เพื่อใช้จริง** — 7 ขั้นตอน + checklist
8. **ข้อจำกัด · ข้อควรระวัง · FAQ** — 4 caveats + 7 FAQ

## Updates
- ✅ Updated all hero/KPI numbers across 3 main pages
- ✅ Added v9.0 status section in reference.html
- ✅ Added User Guide link to ALL 109 sidebars
- ✅ Added prominent welcome card on homepage
- ✅ Updated preface.html v9.0 description
- ✅ Inline JS in 111/111 files

## Active Data (22/23 assets · 66/69 datasets)
- Crypto (2/2) ✓: BTC, ETH = 265,005
- Metals (3/3) ✓: XAU, XPT, XAG = 270,476
- Energy (3/3) ✓: USOIL, UKOIL, XNG = 260,770
- Forex Major (7/7) ✓: EUR, JPY, GBP, AUD, CAD, CHF, NZD = 702,219
- Forex Cross (3/3) ✓: EURGBP, EURJPY, GBPJPY = 305,521
- Indices (4/5): DE30, US500, JP225, UK100 = 350,579 (เหลือ USTEC)
- **Total: 2,154,570 trades**

## Deploy
```bash
cd ~/Downloads
unzip -o KMP_v9_66datasets_website_v2.zip
cd ~/Documents/kmp-master
git pull
cp -rf ~/Downloads/KMP_v9_66datasets_website/* ./
git add -A
git commit -m "v9.0 · 66 datasets · +Thai User Guide · 2.15M trades · audit complete"
git push
```

After deploy: Ctrl+Shift+R · เปิด https://keemptn-afk.github.io/kmp-master/user-guide.html
