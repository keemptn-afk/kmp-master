# KMP Master v9.0 — 27 datasets active

**Status:** v9.0 · 27/69 datasets · 907,332 trades · 9 assets active · EA v4.1
**Total HTML:** 110 pages · sidebar bug fixed (inline JS)

## Active Data (9 assets × 3 TFs = 27 datasets)

| Asset      | M15     | H1      | H4     | Total   |
|------------|---------|---------|--------|---------|
| BTC/USD    | 100,599 | 24,235  | 6,340  | 131,174 |
| ETH/USD    | 103,040 | 24,342  | 6,449  | 133,831 |
| EUR/USD    | 79,150  | 18,405  | 4,674  | 102,229 |
| USD/JPY    | 76,937  | 17,783  | 4,639  | 99,359  |
| XAU/USD    | 70,805  | 16,746  | 4,650  | 92,201  |
| XPT/USD    | 69,457  | 16,485  | 4,619  | 90,561  |
| DE30 (DAX) | 66,253  | 16,207  | 4,311  | 86,771  |
| UKOIL      | 61,022  | 15,156  | 4,303  | 80,481  |
| US500      | 68,857  | 16,934  | 4,934  | 90,725  |
| **Total**  | 696,120 | 166,293 | 44,919 | **907,332** |

## Class breakdown
- Crypto: 265,005 (BTC + ETH)
- Metals: 182,762 (XAU + XPT)
- Energy: 80,481 (UKOIL)
- Forex: 201,588 (EUR + JPY)
- Indices: 177,496 (DE30 + US500)

## Deploy
```bash
cd ~/Downloads
unzip -o KMP_v9_27datasets_website.zip
cd ~/Documents/kmp-master
git pull
cp -rf ~/Downloads/KMP_v9_27datasets_website/* ./
git add -A
git commit -m "v9.0 · 27 datasets · +UKOIL +US500 · 907K trades"
git push
```

After deploy: Ctrl+Shift+R once for fresh HTML.
