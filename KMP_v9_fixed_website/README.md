# KMP Master v9.0 — Sidebar Fixed + Exness Names

## Fixes in this build

### 1. Sidebar bug — fixed properly
- Removed buggy inline `forceClose()` script from 109 HTML files
  (it was closing menus on every visibilitychange — fighting with click handlers)
- App.js now uses pure event delegation
- Cache version bumped to v9.1 (forces browser to reload app.js)

### 2. Asset names — match Exness Pro symbols
| Display now | Old | Why |
|------------|-----|-----|
| USTEC (Nasdaq 100) | NASDAQ-100 | Exness uses USTEC symbol |
| US500 (S&P 500) | S&P 500 | Exness uses US500 |
| DE30 (DAX) | DAX (DE30) | Exness uses DE30 (even though actual index is DAX 40 now) |
| JP225 (Nikkei 225) | Nikkei 225 | Exness uses JP225 |
| UK100 (FTSE 100) | FTSE 100 | Exness uses UK100 |

User can now copy the prefix (e.g. "USTEC") into Exness Pro search and find the symbol immediately.

## Active Data (unchanged from previous build)
- 5 M15 datasets · 430,531 trades
- BTC · ETH · EUR · JPY · XAU all M15

## Deploy

```bash
cd ~/Downloads
unzip -o KMP_v9_fixed_website.zip
cd ~/Documents/kmp-master
git pull
cp -rf ~/Downloads/KMP_v9_fixed_website/* ./
git add -A
git commit -m "v9.0 fixed · sidebar bug · Exness symbol names · cache bump"
git push
```

After deploy, **clear browser cache** (Ctrl+Shift+R) to load new app.js v9.1.
