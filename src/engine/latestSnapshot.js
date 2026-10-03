export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2526,
  "lastUpdated": "2026-10-03",
  "lastSyncedAt": "2026-10-03T01:51:46.464Z",
  "warDay": 218,
  "summary": "The Iran war shows signs of significant escalation with increased US military deployments, reported US-Israeli strikes on Tehran, and attacks on oil tankers in the Hormuz Strait, while US forces complete their withdrawal from Iraq.",
  "lastNarrativeUpdate": "2026-10-03",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is reported; signals indicate ongoing conflict and escalation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 64,
    "globalPressure": 82,
    "allianceInfluence": 51
  },
  "alliance": {
    "russiaIntelSupport": false,
    "chinaEconomicSupport": false,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Oct 01",
      "text": "US deploys a new aircraft carrier and 10,000 troops to the Middle East, signaling potential escalation.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxOX09XQVdqYXN0MXFCR1d5aVVqWHkxdmxfdjVKUDdaS1AtVmlKSjJ0MTMtdHU0aXVHVVMxQ29CR0R4U0dTb0piRDdkNFpKdlBRdmJUZVN4X3dkc3NzNkNiNHp6U1ZzWUxVWFl1azNpM2IzS29QcTBraGJYOW1WWGpXV3NPTUFOa1RsRU9VNGc4S1U4UzNKeFVmNjBHc3lhdFVjZHlfQThGS0NlOWNrdlZ5TWV6eEbSAboBQVVfeXFMTS1xSlkwb3lQU0hEQWgweTZ3dll0NlVYSEpQeUpoN3BVR05FWTMxN0ZwSUdTaTFVMVNWcDl1bU54alhDa0JUSHViRDNfSDVSQUdCaU1IQ1FCdTl0aGRLMF8yTGZpbjhPOUNhMjhIWUlTczRJNHpKU19ZSnBoeVlNWFIwZGI2YTRxZHZSbXB3WUlFN1Q3X2Z0QTJPdzd6QVhwajVJR2RmNzFGd1VSbFJyeml6Y3ZqSnloLTBB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2526
    },
    {
      "date": "Oct 01",
      "text": "A Houthi missile was foiled, but injured a Saudi resident, according to Riyadh.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxNUC1tREkzTk9ydXdTMXFqZzAzMzlCZWN2N2RnVG5WM0V3Z3ZBblk0SkI4bkJ2ZXhmQXBsZFFVajMwVWdNRi1SUmNfRWJwZENIcEZtM1BaZVU2blVWLXhkMUhtdXI0SklvQm1vU1BEVXJlZFg5TDQwcU5EeGpqME9Yalk4RFUxSWJtZ3pyTmxRM2hZaFRNZUI0ZEVhWE9IdmdOalB4LWs0cXlkU29GLV90dFNTbzFXNGxlNUhTV3hB0gHDAUFVX3lxTE81ZkY5SzJvZG1CTnB0NzcyT1FleFBfZUIzanRrSjROcXZUd1JVakZQV3Fhc0U1SXRQMllyZkZrN2ppSU02NmZlT3pXMWlFelRNQU9MX0dRRmJRTGJRa1JyMDdkTy1FZHhsd2xLRVR4Y25UeVJ1QV9uY3UydUJsQUdtSS1nR1lqRTlZZmZ3ZEVhRERtdE5SekFHQVZubjFMODNld2lETXc0Q0tvUDE4VTlQTmR2U3pqREJBczBpSE9QNjg4cw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2526
    },
    {
      "date": "Recent",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighbourhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2526
    },
    {
      "date": "Recent",
      "text": "US sends a third aircraft carrier to the Middle East amid a stalemate in the Iran war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikgFBVV95cUxOeG1vM25faW5LcklvY082VWw2bHJ2MFdzR1NRekV1TzI2SzloOTFrZGhPTEVyWlY4bGpiRXprNWVhTUxqbF8zc3pxNGFFZzJIalNteWs5UV9oWkI3V1dBX2hjckVwejBiZmtSVnFTUUVVeFdGS19nZE9kOVB4OTUwUUcxOWZzY25FWXJPNXg3WGprdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "theguardian.com",
      "latestSinceUpdate": 2526
    },
    {
      "date": "Recent",
      "text": "Trump warns Iran of fresh strikes if Tehran is involved in a FlyDubai plane incident.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxQMW5QNEJrTlJLWi1DUTYyWURFTFJRRVBDYWRTVkZMM3FSVjY3RlA1emhJdmJmMmlHNlFmQ2Z3ZHNmYjVmUHpFbGZJeGZLOTFXbHA0dTJoUE9Jcjk4dGc0MS1VSncxYlhkX2xwRThNU09fcFNLdnB6SzFvLWNzWXlxWmJIZE44Y1VG?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 2526
    },
    {
      "date": "Tuesday",
      "text": "Three oil tankers were hit by projectiles in the Hormuz Strait, Marisks reports.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNMGxqUHRGWUpFZWo3eVZkQ1NnR2NZM05rLWhoWHNOOE5IaGhwSjk4QlNXRi16Q1BGYVlMc2VPWUh6dm55bHluMjg5WGxvY0dfcmdNcDJIaGc5UjFwaXVpZlFTd21VZDU5dkdpZUtteEtQVll0M09hVHRPMG4wZU56UlNMMjIxREx3dmJZOVNFZjE3R0ZrQ3Q0R0VaazBjWk9LcS1UOWR2S1BfRmc2M1FIeU1Qa3liNHZRcFJINWtYQ1c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2526
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
    },
    {
      "source": "GDELT",
      "status": "no recent items"
    },
    {
      "source": "ACLED",
      "status": "skipped (credentials not configured)"
    },
    {
      "source": "World Bank",
      "status": "ok (3 country baselines)"
    },
    {
      "source": "Our World in Data",
      "status": "ok (3 country baselines)"
    },
    {
      "source": "Liveuamap",
      "status": "skipped (not configured)"
    },
    {
      "source": "IEA",
      "status": "skipped (API key or dataset URL not configured)"
    }
  ],
  "narratives": [
    {
      "perspective": "US/Israel",
      "headline": "Iran 'Ready to Fold Up' as Israel Conquers Enemies",
      "summary": "US President Trump suggests Iran is on the verge of collapse and warns of further strikes. A pro-Israel commentator asserts Israel is successfully conquering its enemies, implying military dominance.",
      "tone": "defiant",
      "latestSinceUpdate": 2526
    },
    {
      "perspective": "Iran/Allies",
      "headline": "Hezbollah Strengthens as US Exits Iraq",
      "summary": "Hezbollah has significantly increased its weapons arsenal, largely supplied by Iran, with its leadership vowing continued resistance against Israel. The withdrawal of US troops from Iraq is celebrated by Iran and its allies as a strategic victory.",
      "tone": "defiant",
      "latestSinceUpdate": 2526
    },
    {
      "perspective": "International/Concerned",
      "headline": "Escalation Amid Stalemate and Civilian Harm",
      "summary": "The deployment of a third US aircraft carrier highlights a stalemate in the Iran war, while investigations reveal significant civilian harm from US-Israeli strikes in Tehran. The US withdrawal from Iraq creates a security vacuum, raising regional instability concerns.",
      "tone": "anxious",
      "latestSinceUpdate": 2526
    }
  ]
});

export default LATEST_SNAPSHOT;
