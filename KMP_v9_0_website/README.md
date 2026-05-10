# KMP Master Patterns v9.0 — Website Deploy

**Status:** v9.0 · 10/69 datasets · 458K trades · EA v4.1
**Total HTML:** 111 pages
**Built:** 2026-05-09

## Deploy to GitHub Pages

```bash
cd ~/Downloads
unzip -o KMP_v9_0_website.zip
cd ~/Documents/kmp-master
git rm -rf *.html assets/ data/   # remove old v8.6 files
cp -rf ~/Downloads/KMP_v9_0_website/* ./
git add -A
git commit -m "v9.0 · rebuild for EA v4.1 · 23 assets x 3 TFs · 10/69 active · removed v3.x disclaimers"
git push
```

## What Changed vs v8.6

- ❌ Removed all v3.1 honest disclaimers (preliminary 2.5/5.0, suspicious cases)
- ✅ Asset list: 16 → 23 (+ 3 indices, +1 forex major, expanded crosses)
- ✅ Schema upgrade: 93 → 131 cols
- ✅ SL/TP grid: 4×4 → 20×20 (400 combos)
- ✅ v4.1 features: HTF D1 context · spread anomaly · swing distance
- ✅ 59 datasets show "Pending harvest" (placeholder for incoming data)
- ✅ 10 datasets show full v4.1 analysis (5 M15 + 5 H4 from current harvest)

## Files Layout

```
website/
├── index.html              # Overview (KPI cards + dataset grid)
├── preface.html            # Project story
├── future.html             # Roadmap
├── reference.html          # Changelog (v9.0 + EA v4.1 fixes)
├── ea-architecture.html    # EA component overview
├── tracking-system.html    # Triple-Barrier explainer
├── patterns-encyclopedia.html  # All 177 patterns reference
├── patterns.html           # Master pattern table (top 50 robust)
├── tier.html               # Tier S/A/B/C/NONE rankings
├── optimal-tpsl.html       # Best SL/TP per pattern × dataset
├── cross-asset.html        # Patterns robust in ≥3 datasets
├── time.html               # Holding-time + early-exit analysis
├── edge.html               # HTF context (v4.1 specific)
├── crypto.html, metals.html, energy.html, forex.html, cross.html, indices.html  # 6 landings
├── btc.html, eth.html, ... uk100.html  # 23 asset hubs
├── btc-m15.html, btc-h1.html, btc-h4.html, ... uk100-h4.html  # 69 dataset pages
├── assets/style.css       # 749 lines (v8.6 base + v9 additions)
├── assets/app.js          # 3.8 KB
└── data/patterns.json     # 177 pattern metadata
```
