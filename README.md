# KMP Master v9.0 — 51 datasets · 1.65M trades

**Status:** v9.0 · 51/69 datasets · 1,651,135 trades · 17 assets active · EA v4.1
**Total HTML:** 110 pages · sidebar inline JS

## Active (17 assets × 3 TFs = 51 datasets)

| Asset      | M15     | H1      | H4     | Total   |
|------------|---------|---------|--------|---------|
| BTC/USD    | 100,599 | 24,235  | 6,340  | 131,174 |
| ETH/USD    | 103,040 | 24,342  | 6,449  | 133,831 |
| EUR/USD    | 79,150  | 18,405  | 4,674  | 102,229 |
| USD/JPY    | 76,937  | 17,783  | 4,639  | 99,359  |
| **AUD/USD**| 74,264  | 18,036  | 4,882  | 97,182  |
| **USD/CAD**| 81,715  | 18,598  | 4,778  | 105,091 |
| **USD/CHF**| 77,257  | 18,508  | 4,679  | 100,444 |
| XAU/USD    | 70,805  | 16,746  | 4,650  | 92,201  |
| XPT/USD    | 69,457  | 16,485  | 4,619  | 90,561  |
| **XAG/USD**| 67,224  | 16,073  | 4,417  | 87,714  |
| DE30 (DAX) | 66,253  | 16,207  | 4,311  | 86,771  |
| US500      | 68,857  | 16,934  | 4,934  | 90,725  |
| JP225      | 65,875  | 15,784  | 4,768  | 86,427  |
| **UK100**  | 65,926  | 16,524  | 4,206  | 86,656  |
| UKOIL      | 61,022  | 15,156  | 4,303  | 80,481  |
| USOIL      | 68,188  | 16,456  | 4,705  | 89,349  |
| XNGUSD     | 68,746  | 17,550  | 4,644  | 90,940  |
| **Total**  | 1,265,313| 304,222 | 81,098 | **1,651,135** |

## Class breakdown
- Crypto: 265,005 (BTC + ETH) ✓ ครบ
- Metals: 270,476 (XAU + XPT + XAG) ✓ ครบ
- Energy: 260,770 (USOIL + UKOIL + XNG) ✓ ครบ
- Forex: 504,305 (EUR + JPY + AUD + CAD + CHF) ⋯ NZD + GBP เหลือ
- Indices: 350,579 (DE30 + US500 + JP225 + UK100) ⋯ USTEC เหลือ
- Cross: 0 (เหลือทั้ง 3 ตัว)

## Deploy
```bash
cd ~/Downloads
unzip -o KMP_v9_51datasets_website.zip
cd ~/Documents/kmp-master
git pull
cp -rf ~/Downloads/KMP_v9_51datasets_website/* ./
git add -A
git commit -m "v9.0 · 51 datasets · +AUD +CAD +CHF +XAG +UK100 · 1.65M trades · 5 classes"
git push
```

After deploy: Ctrl+Shift+R once.
