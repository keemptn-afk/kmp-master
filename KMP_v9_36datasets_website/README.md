# KMP Master v9.0 — 36 datasets · 1.17M trades

**Status:** v9.0 · 36/69 datasets · 1,174,048 trades · 12 assets active · EA v4.1
**Total HTML:** 110 pages · sidebar inline JS

## Active (12 assets × 3 TFs = 36 datasets)
| Asset | M15 | H1 | H4 | Total |
|-------|-----|-----|------|-------|
| BTC/USD    | 100,599 | 24,235 | 6,340 | 131,174 |
| ETH/USD    | 103,040 | 24,342 | 6,449 | 133,831 |
| EUR/USD    | 79,150  | 18,405 | 4,674 | 102,229 |
| USD/JPY    | 76,937  | 17,783 | 4,639 | 99,359  |
| XAU/USD    | 70,805  | 16,746 | 4,650 | 92,201  |
| XPT/USD    | 69,457  | 16,485 | 4,619 | 90,561  |
| DE30 (DAX) | 66,253  | 16,207 | 4,311 | 86,771  |
| US500      | 68,857  | 16,934 | 4,934 | 90,725  |
| **JP225**  | 65,875  | 15,784 | 4,768 | 86,427  |
| UKOIL      | 61,022  | 15,156 | 4,303 | 80,481  |
| USOIL      | 68,188  | 16,456 | 4,705 | 89,349  |
| XNGUSD     | 68,746  | 17,550 | 4,644 | 90,940  |
| **Total**  | 898,929 | 216,083 | 59,036 | **1,174,048** |

## Class breakdown
- Crypto: 265,005 ✓ ครบ (BTC + ETH)
- Metals: 182,762 (XAU + XPT, XAG เหลือ)
- Energy: 260,770 ✓ ครบ (USOIL + UKOIL + XNGUSD)
- Forex: 201,588 (EUR + JPY, 5 ตัวเหลือ)
- Indices: 263,923 (DE30 + US500 + JP225, USTEC + UK100 เหลือ)

## Deploy
```bash
cd ~/Downloads
unzip -o KMP_v9_36datasets_website.zip
cd ~/Documents/kmp-master
git pull
cp -rf ~/Downloads/KMP_v9_36datasets_website/* ./
git add -A
git commit -m "v9.0 · 36 datasets · +JP225 · 1.17M trades"
git push
```
