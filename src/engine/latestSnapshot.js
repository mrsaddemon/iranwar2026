export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2419,
  "lastUpdated": "2026-09-14",
  "lastSyncedAt": "2026-09-14T22:32:49.715Z",
  "warDay": 199,
  "summary": "The Iran war continues with US-Israeli strikes on Tehran causing civilian harm, regional risks widening to include attacks on Saudi energy infrastructure and Israeli operations against Hezbollah in Lebanon, while oil prices remain above $100 due to Strait of Hormuz disruptions.",
  "lastNarrativeUpdate": "2026-09-14",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is active; the conflict remains ongoing with active military engagements."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
    "allianceInfluence": 46
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
      "date": "Sep 11",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighbourhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2419
    },
    {
      "date": "Recent",
      "text": "Oil prices rise after Saudi Arabia shuts down a critical pipeline bypassing the Strait of Hormuz, which was subsequently attacked.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxOcWFrNEdSMHhodEJrS2thdWhURmpWejhTNHljZTZEVFpnVUp6cDV2Z202cTA5WVlINW43YVhWeXNjNnRLWFVDVWFlT3BxYk83eGlBWGRzZUVOVTJKbGE5Zl9XelpCOFpLUVRsajFMU1M0WmxaMWo5eVhHeElnZmFpQ2c1U1F3MUFKbks4ag?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2419
    },
    {
      "date": "Recent",
      "text": "Israel destroys a major underground Hezbollah base in Southern Lebanon amidst ongoing efforts to block encroachment.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE5oYjE5VldLLW45VXA4WFN4OXdfaHl6QkhDZGpVX05ZcmJXRzZMRlo2V2RoLWxrRVNLM2pPZndFQ01UOFpSQ2lzWHI4STZDS3EyX2MtMWkyMWFlQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 2419
    },
    {
      "date": "Recent",
      "text": "U.S. military is on high alert as Iran and its allies target energy supply infrastructure.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxOODdQNHB0ZTJpOGFZOTRDcUplRWNJRXpBREdzTWJseW5Za0YyQUQwNDhCeEE3dVBBR25sUk1NdTg1WjVyOEYzUUc1TFpTZlRJaGVSTHluWkRfbUFrMlQ5eG1yTGFNTTBBN3RCOWdvM0hIUnBpdDE5UXJicHU0YVktMks4azUydG1RbXdMVmtCNA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2419
    },
    {
      "date": "Recent",
      "text": "A U.S. Air Force officer was shot down in Iran and subsequently rescued by nearly 100 troops in enemy territory.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2419
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
      "headline": "Israel Targets Hezbollah, US Accuses Iran of Saudi Attack",
      "summary": "Israel reports successful destruction of major Hezbollah underground bases in Lebanon, indicating ongoing efforts against the group. Concurrently, former US President Trump suggests Iran was likely responsible for a recent attack on Saudi Arabia, raising questions about regional accountability.",
      "tone": "defiant",
      "latestSinceUpdate": 2415
    },
    {
      "perspective": "Iran/Allies",
      "headline": "Tehran Hit by US-Israeli Strikes, Iran Ship Attacked",
      "summary": "Investigations reveal significant civilian harm from US-Israeli strikes on Tehran neighborhoods, highlighting the human cost of the conflict. An Iranian commercial vessel was struck in the Strait of Hormuz, leading to postponed regional talks and increased maritime tensions.",
      "tone": "strained",
      "latestSinceUpdate": 2415
    },
    {
      "perspective": "Global/Economic",
      "headline": "Middle East Conflict Escalates, Oil Prices Surge",
      "summary": "Escalating conflict in the Middle East, including a Saudi pipeline shutdown and a ship strike in Hormuz, has driven oil prices higher. Diplomatic talks regarding the Strait of Hormuz and Israel-Lebanon have been postponed amidst rising tensions, indicating a worsening geopolitical climate.",
      "tone": "anxious",
      "latestSinceUpdate": 2415
    }
  ]
});

export default LATEST_SNAPSHOT;
