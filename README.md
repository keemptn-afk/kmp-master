# KMP Master Research Document · v4 data + EA v3.1

ระบบ KMP Pattern Harvester · **EA v3.1 = 177 trading patterns × 18 categories** · 93 CSV columns/trade · v4 data = 80 patterns × 9 datasets · 248,875 trades

## 🌐 Live Website

หลัง deploy เปิดที่: `https://[username].github.io/kmp-master/`

## ⭐ What's New in v3.1 (latest)

- **Execution metadata** — 3 new CSV fields: `intended_entry_price`, `spread_at_entry_pts`, `spread_at_exit_pts`
- **Slippage analysis** — `entry_price` now = ACTUAL broker fill (was intended) · slippage = entry_price − intended_entry_price
- **WeekendMode AUTO** — auto-detect from broker session info: BTC 24/7 = count weekend hours · EUR/XAU = skip weekend (count trading hours only)
- **DEAL_ENTRY_IN handler** — captures actual fill price for slippage research
- **Phase 1+2+3 default = true** — all 177 patterns active by default
- **Academic standards preserved** — no pattern threshold tuning · all detection logic = literature

## 🧬 What's New in v3.0 EA

- **+97 patterns** in 12 new categories (G-R) — Phase 2 + Phase 3
- **Total 177 patterns** in 18 categories (was 80 in v4 data)
- **+ Ichimoku indicator** (Tenkan/Kijun/Senkou A/B/Chikou)
- **+3 path checkpoints** (120h, 168h, 240h) → 9 milestones total
- **Time-stop** extended 168h → 240h (10 days = 2 trading weeks)
- **Independent phase toggles** — InpEnablePhase1/2/3
- **7-layer integrity audit** passed · zero errors in detection logic

## 📂 Site Structure (30 pages)

```
index.html                  Landing · KPIs · status
preface.html                Glossary · methodology · purpose
patterns-encyclopedia.html  All 177 patterns searchable
ea-architecture.html        Source code structure · 28 files
tracking-system.html        93-col CSV schema · 5 phases
phase3.html                 Cat K-R details (52 new patterns)

patterns.html               Tier rankings (v4 data)
tier.html                   Pattern tier system
edge.html                   Edge analysis · vol profiles
cross.html                  Cross-pattern confluence
time.html                   Time decay analysis
optimal-tpsl.html           SL/TP optimization

crypto.html, btc.html       BTC hub + per-TF reports
metals.html, xau.html       XAU hub + per-TF reports
forex.html, eur.html        EUR hub + per-TF reports

strategy.html               Trading strategy modules
future.html                 v4 → v6 roadmap · Phase 4-8
reference.html              Sources · changelog
```

## 🚀 Deployment

ดู `DEPLOY_GUIDE_TH.md` · สอน push ขึ้น GitHub Pages step-by-step

## 📜 Changelog

- **EA v3.1** (2026-05-07) · Execution metadata + Weekend AUTO + Slippage tracking
- **EA v3.0** (2026-05-06) · 177 patterns · Phase 3 build
- **EA v2.01** (2026-05-04) · 125 patterns (Phase 2)
- **Website v3** (2026-05-07) · multi-page · 30 pages · sidebar nav
- **Website v4 data** (2026-05-06) · 9 datasets · 248K trades documented
