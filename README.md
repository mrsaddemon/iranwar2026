# 2026 Iran War Strategic Simulation

A real-time, probabilistic conflict simulation dashboard modeling the ongoing US-Israel-Iran war that began February 28, 2026. Built for educational scenario exploration, not prediction.

**[Live Demo](https://iranuswarsim.mrsaddemon.workers.dev/)** | **[war.limboidtech.com](https://war.limboidtech.com)**

![Simulation Dashboard](https://img.shields.io/badge/Status-LIVE-brightgreen) ![Auto Updates](https://img.shields.io/badge/News_Updates-Every_4hrs-blue) ![License](https://img.shields.io/badge/License-Educational-orange)

---

## What Is This?

A next-generation strategic simulation dashboard that helps users understand **how conflicts escalate** through probabilistic modeling. It is calibrated to real-world conditions using live news data and models escalation dynamics, diplomatic channels, economic impacts, and nuclear risk.

This is **NOT** a game for destruction. It is a strategic, educational scenario-exploration tool.

### Key Features

- **Real-time tick-based simulation** (1 tick = 1 day) with probabilistic action selection
- **Play as any country** (USA, Israel, or Iran) with strategic decision-making
- **Target selection system** - choose specific targets (military bases, carriers, oil infrastructure, air defenses, leadership)
- **7 war conclusion types** - ceasefire, regime collapse, military capitulation, coalition withdrawal, nuclear exchange, frozen conflict, regional conflagration
- **Nuclear strike system** with detailed 4-page chain reaction outcomes (retaliation chains, world response, post-nuclear Earth timeline)
- **Russia/China alliance modifiers** - satellite intelligence, S-400 air defense, Chinese economic lifeline, UNSC veto shield
- **News-calibrated parameters** - auto-updates every 4 hours from live sources via Gemini AI
- **Accurate Middle East map** with 15 countries/regions and animated military operations

---

## Screenshot

<img width="1915" height="907" alt="image" src="https://github.com/user-attachments/assets/fd497453-4691-4e34-a203-286be37fb984" />


---

## Simulation Engine

### Actors

| Country | Starting Power | Strategy | Key Advantage |
|---------|---------------|----------|---------------|
| **USA** | 97 | Precision strikes, naval dominance | 2 carrier groups, 120+ aircraft, Tomahawks |
| **Israel** | 85 | Multi-front ops (Iran + Lebanon) | Iron Dome, Arrow-3, F-35s |
| **Iran** | 55 | Asymmetric warfare | Missiles, Shahed drones, Hormuz blockade |

### Alliance Support (Russia/China)

| Factor | Effect | Real-World Basis |
|--------|--------|-----------------|
| Russian Satellite Intel | Iran strikes +15% damage | CNN confirmed Mar 6, 2026 |
| Chinese Economic Lifeline | Iran economy degrades 50% slower | China buys 90% of Iran's oil |
| S-400 Air Defense | Airstrikes vs Iran -20% effective | Deployed near Isfahan, tested Jul 2025 |
| Mosaic Defense Doctrine | Iran stability degrades 40% slower | Decentralized C2 structure |
| UNSC Veto Shield | Blocks force authorization | Russia+China+France vetoed Apr 2-3 |

### War Conclusions

The simulation can end 7 ways:

1. **Ceasefire** - Both sides propose terms + escalation drops below 45
2. **Iranian Regime Collapse** - Internal stability and economy both collapse
3. **Iranian Military Capitulation** - Military power, missiles, and drones all destroyed
4. **US Coalition Withdrawal** - US domestic pressure forces pullout
5. **Nuclear Exchange** - Nuclear weapons used (catastrophic, detailed 4-page outcome)
6. **Frozen Conflict** - 365+ days with no resolution, moderate escalation
7. **Regional Conflagration** - Oil, trade, and global pressure all maxed out

### Nuclear Strike Outcomes

Each attacker produces a unique chain reaction:

| Attacker | Can Opponent Nuke Back? | Key Chain Reaction |
|----------|------------------------|-------------------|
| **USA fires** | No (Iran has no nukes) | Iran conventional barrage, Hezbollah all-out, Houthis strike, NATO fractures |
| **Israel fires** | 12% chance Pakistan retaliates | Nuclear ambiguity broken, Arab world unites, possible South Asian nuclear exchange |
| **Iran fires** | 65% intercepted by Arrow-3 | Massive US+Israel retaliation regardless, Iran destroyed as state |

Outcomes include: specific cities hit with yields, retaliation chains, 6 countries' responses (Russia, China, Pakistan, India, NATO, GCC), nuclear winter analysis, fallout zones, refugee crisis, famine projections, and a timeline from Hour 0 to Year 5.

---

## Data Sources

Starting parameters are calibrated from:

| Source | Data Type |
|--------|-----------|
| [Global Firepower](https://www.globalfirepower.com/) | Military power indices (60+ factors per country) |
| [SIPRI](https://www.sipri.org/) | Arms transfers, military expenditure, nuclear forces |
| CNN, Al Jazeera, Reuters | Real-time conflict reporting |
| [Soufan Center](https://thesoufancenter.org/) | Iranian military strategy analysis |
| [CSIS](https://www.csis.org/) | Missile inventories, defense capabilities |
| US Intelligence Assessments | Iran capability estimates (Apr 2, 2026 assessment) |

### Auto-Update System

Every 4 hours, a GitHub Actions workflow:
1. Fetches latest war headlines from Google News RSS (free)
2. Fetches oil prices from Yahoo Finance (free)
3. Sends to **Gemini Flash AI** (free tier) for interpretation
4. Updates simulation starting parameters
5. Rebuilds and deploys to Cloudflare Workers

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| Map | HTML5 Canvas (custom renderer) |
| Simulation | Pure JavaScript probabilistic engine |
| Styling | CSS with glassmorphism + dark theme |
| Hosting | Cloudflare Workers (global CDN) |
| Auto-updates | GitHub Actions + Gemini AI + Google News RSS |

---

## Run Locally

```bash
# Clone
git clone https://github.com/mrsaddemon/iranwar2026.git
cd iranwar2026

# Install
npm install

# Dev server
npm run dev
# Open http://localhost:3000

# Build portable version
npm run build
# Open dist/index.html in any browser
```

---

## Project Structure

```
iranwar2026/
├── src/
│   ├── engine/
│   │   ├── SimulationEngine.js   # Core tick-based simulation
│   │   ├── actors.js             # Country profiles, actions, targets
│   │   ├── events.js             # Event generation system
│   │   └── nuclear.js            # Nuclear escalation + strike outcomes
│   ├── components/
│   │   ├── MapCanvas.jsx         # Interactive Middle East map (Canvas)
│   │   ├── TopBar.jsx            # Date, war day, nuclear index, controls
│   │   ├── LeftPanel.jsx         # Force status (USA/ISR/IRN metrics)
│   │   ├── RightPanel.jsx        # Live event feed
│   │   ├── BottomPanel.jsx       # Predictions + key indicators
│   │   ├── PlayerControls.jsx    # Command center + target picker
│   │   ├── WarConclusion.jsx     # War ending overlay (7 types + nuclear)
│   │   └── NuclearIndex.jsx      # Nuclear risk indicator bar
│   ├── styles/
│   │   └── global.css            # Dark theme + glassmorphism
│   ├── App.jsx                   # Main shell + state management
│   └── main.jsx                  # Entry point
├── scripts/
│   └── update-from-news.mjs      # Gemini-powered news updater
├── .github/workflows/
│   └── update-and-deploy.yml     # 4-hour auto-update cron
├── dist/                          # Portable build (open index.html)
└── package.json
```

---

## Environment Variables (for auto-updates)

Set these as GitHub Secrets:

| Variable | Purpose | How to Get |
|----------|---------|-----------|
| `GEMINI_API_KEY` | AI news interpretation | Free at [aistudio.google.com/apikey](https://aistudio.google.com/apikey) |
| `CLOUDFLARE_API_TOKEN` | Auto-deploy | [dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account | Dashboard URL or API |

---

## Disclaimer

This is a **probabilistic simulation for educational purposes only**. It does not predict real-world outcomes. All scenarios are modeled using publicly available data and simplified probabilistic models. The simulation is designed to help users understand escalation dynamics and explore "what-if" scenarios safely.

Nuclear scenarios are included as strategic risk education, not to promote or trivialize nuclear weapons use.

---

## Credits

Built by [lmbdTech](https://www.youtube.com/@lmbdTech)

- [YouTube](https://www.youtube.com/@lmbdTech)
- [Instagram](https://www.instagram.com/lmbdtech/)

---

*Data updates every 4 hours from live news sources. Last calibrated from CNN, Al Jazeera, CNBC, Soufan Center, CSIS, and US intelligence assessments.*
