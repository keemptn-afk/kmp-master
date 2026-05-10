# KMP Master v9.0 — 15 datasets active

**Status:** v9.0 · 15/69 datasets · 558,794 trades · EA v4.1
**Total HTML:** 110 pages · ZIP includes inline JS (sidebar bug fixed)

## Active Data (5 assets × 3 TFs)

| Asset | M15 | H1 | H4 | Total |
|-------|-----|----|----|-------|
| BTC/USD | 100,599 | 24,235 | 6,340 | 131,174 |
| ETH/USD | 103,040 | 24,342 | 6,449 | 133,831 |
| EUR/USD | 79,150 | 18,405 | 4,674 | 102,229 |
| USD/JPY | 76,937 | 17,783 | 4,639 | 99,359 |
| XAU/USD | 70,805 | 16,746 | 4,650 | 92,201 |
| **Total** | 430,531 | 101,511 | 26,752 | **558,794** |

## Sidebar — 23 assets total
Crypto · Metals (XAU/XAG/XPT) · Energy · Forex · Cross · Indices

## Sidebar bug — FIXED
- JS embedded inline in HTML (no external app.js)
- Direct click handler attachment (not delegation)
- No more cache issues

## Asset names — match Exness Pro
USTEC · US500 · DE30 · JP225 · UK100 (Exness symbols prominent)

## Deploy
```bash
cd ~/Downloads
unzip -o KMP_v9_15datasets_website.zip
cd ~/Documents/kmp-master
git pull
cp -rf ~/Downloads/KMP_v9_15datasets_website/* ./
git add -A
git commit -m "v9.0 · 15 datasets active · 558K trades · sidebar inline JS · Exness names"
git push
```

After deploy: Ctrl+Shift+R once to ensure fresh HTML.
