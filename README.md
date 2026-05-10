# KMP Master v9.0 — Final Build (23 assets sidebar)

**Status:** v9.0 · 10/69 datasets · 458K trades · 23 assets sidebar
**Total HTML:** 110 pages

## Sidebar Tree (23 assets)
```
Crypto (2):       BTC · ETH
Metals (3):       XAU · XAG · XPT
Energy (3):       USOIL · UKOIL · XNGUSD
Forex Major (7):  EUR · GBP · JPY · AUD · CAD · CHF · NZD
Forex Cross (3):  EURJPY · GBPJPY · EURGBP
Indices (5):      US500 · USTEC · DE30 · JP225 · UK100
```

## Deploy
```bash
cd ~/Downloads
unzip -o KMP_v9_complete_website.zip
cd ~/Documents/kmp-master
git pull
git rm -rf strategy.html ea-source.html research-comparison.html research-references.html 2>/dev/null
cp -rf ~/Downloads/KMP_v9_complete_website/* ./
git add -A
git commit -m "v9.0 complete · 23 assets sidebar · 10/69 v4.1 active · removed 4 unused pages"
git push
```
