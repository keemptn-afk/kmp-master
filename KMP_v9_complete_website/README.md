# KMP Master v9.0 — Final Build

**Status:** v9.0 · 10/69 datasets · 458K trades · EA v4.1
**Total HTML:** 110 pages

## Layout
- 7 main pages (index, preface, future, reference, ea-architecture, tracking-system, patterns-encyclopedia, phase3)
- 6 aggregators (patterns, tier, optimal-tpsl, cross, time, edge)
- 6 landings (crypto, metals, energy, forex, forex-cross, indices)
- 23 asset hubs (BTC, ETH, XAU, XAG, XPT, USOIL, UKOIL, XNG, EUR, GBP, JPY, AUD, CAD, CHF, NZD, EURJPY, GBPJPY, EURGBP, US500, USTEC, DE30, JP225, UK100)
- 69 dataset pages:
  - 10 with new v4.1 data (BTC/ETH/EUR/JPY/XAU × M15+H4)
  - 38 with v3.1 data + "Awaiting v4.1 re-harvest" banner
  - 21 placeholder ("Pending harvest")

## Removed in v9.0
- strategy.html (71 KB — outdated)
- ea-source.html (37 KB — outdated)
- research-comparison.html (54 KB — outdated)
- research-references.html (40 KB — outdated)

## Deploy

```bash
cd ~/Downloads
unzip -o KMP_v9_complete_website.zip
cd ~/Documents/kmp-master
git pull
git rm -rf strategy.html ea-source.html research-comparison.html research-references.html 2>/dev/null
cp -rf ~/Downloads/KMP_v9_complete_website/* ./
git add -A
git commit -m "v9.0 complete · 23 assets · 10/69 v4.1 active · 38 v3.1 banner · 21 pending · removed 4 unused pages"
git push
```
