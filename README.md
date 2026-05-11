# KMP Master v9.0 — Final (M15 only)

**Status:** v9.0 · 5/69 datasets · 430,531 trades · 23 assets sidebar

## Active Data (5 M15 only)
- BTCUSD M15: 100,599 trades
- ETHUSD M15: 103,040 trades
- EURUSD M15: 79,150 trades
- USDJPY M15: 76,937 trades
- XAUUSD M15: 70,805 trades
- **Total: 430,531 trades**

## Why H4 was removed
H4 data was harvested with different EA config than M15 → not directly comparable.
Will be re-harvested with consistent EA v4.1 config.

## Sidebar — 23 Assets
Crypto · Metals (XAU/XAG/XPT) · Energy · Forex · Cross · Indices

## Sidebar Bug Fix
Changed from per-element click listeners to **event delegation** — menus now expand on first click.

## Deploy
```bash
cd ~/Downloads
unzip -o KMP_v9_M15_only_website.zip
cd ~/Documents/kmp-master
git pull
git rm -rf strategy.html ea-source.html research-comparison.html research-references.html 2>/dev/null
cp -rf ~/Downloads/KMP_v9_M15_only_website/* ./
git add -A
git commit -m "v9.0 · M15 only · sidebar bug fixed · 23 assets · 430K trades"
git push
```
