# KMP Master v9.0 — 21 datasets active

**Status:** v9.0 · 21/69 datasets · 736,126 trades · 7 assets active · EA v4.1
**Total HTML:** 110 pages · sidebar bug fixed (inline JS)

## Active Data (7 assets × 3 TFs)

| Asset      | M15     | H1      | H4     | Total   |
|------------|---------|---------|--------|---------|
| BTC/USD    | 100,599 | 24,235  | 6,340  | 131,174 |
| ETH/USD    | 103,040 | 24,342  | 6,449  | 133,831 |
| EUR/USD    | 79,150  | 18,405  | 4,674  | 102,229 |
| USD/JPY    | 76,937  | 17,783  | 4,639  | 99,359  |
| XAU/USD    | 70,805  | 16,746  | 4,650  | 92,201  |
| XPT/USD    | 69,457  | 16,485  | 4,619  | 90,561  |
| DE30 (DAX) | 66,253  | 16,207  | 4,311  | 86,771  |
| **Total**  | 566,241 | 134,203 | 35,682 | **736,126** |

## Class breakdown (sidebar)
- Crypto: 265,005 (BTC + ETH)
- Metals: 182,762 (XAU + XPT, XAG pending)
- Indices: 86,771 (DE30, others pending)
- Forex: 201,588 (EUR + JPY, others pending)

## Deploy
```bash
cd ~/Downloads
unzip -o KMP_v9_21datasets_website.zip
cd ~/Documents/kmp-master
git pull
cp -rf ~/Downloads/KMP_v9_21datasets_website/* ./
git add -A
git commit -m "v9.0 · 21 datasets · +XPT +DE30 · 736K trades"
git push
```

After deploy: Ctrl+Shift+R once for fresh HTML.
