export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2425,
  "lastUpdated": "2026-09-15",
  "lastSyncedAt": "2026-09-15T22:06:41.025Z",
  "warDay": 200,
  "summary": "The war between the US/Israel and Iran continues with significant US military losses, ongoing strikes causing civilian harm, and regional proxy attacks, while discussions of potential talks emerge amidst rising war costs and oil disruptions.",
  "lastNarrativeUpdate": "2026-09-15",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect, though political figures have signaled openness to future talks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 87
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.88
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 72
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.87
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 88,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 68,
    "globalPressure": 89,
    "allianceInfluence": 73
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Sep 14",
      "text": "US military losses, including dozens of aircraft and hundreds of buildings, revealed from Iran attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNR0xBM2hYamtNRV83VktFTTV3UXBqdFNHNmN5dHZ5NEdHSE1oZ0JaMHlQaUMzcnBUc0hPM0ozOFJ3MlBUZ1NQY0NBRUxVX1NqazNrUDN1LWRKQkJKWkxsSkhNYk1yc2FCMk5rcVprMDFEb3NCdG4zb1BSVlVodkVTczBDMU5fOEU3VWhzeTMzc1lfV1A3VUs5NUIyRnd5Zy1HN3hYQ2JWWVJtSEROdVY3TVYycktqeXZvSVHSAb8BQVVfeXFMTXZzNzQwLWcxNUd2QWdKbHhjQ2UxaHlTRVFVREpBUWFMVFdRM2NlOVVKVHN2YXhFWi0wTHlZLWpHQmh6aTBWSE5MaEFPeWlRMlpHN3luTmgtSkFVR1dQTk04ZkpIMGItWVpGNjBqbS1CQ192Qi1GcXlqeWczUnd6YUpkejJndUloRlRSVnctbGtTbFVnYnM2WUhlM3ZVbnByOWdnUGhmR0Ffd2RKVVFVSmV2ekxkY2RWc3RJb0U1Nms?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2425
    },
    {
      "date": "Sep 14",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighborhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2424
    },
    {
      "date": "Sep 15",
      "text": "Pentagon states Iran war costs exceed $33.4 billion, with Trump signaling openness to talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxQMXp0eWtpUmdlTkZzTzBhcTRLYkpaSE1vWEFIY09xR3JjcFhYRVhoMlVjcmJYVWdROU9WZENBNEt5NXVncjBmaXA4R1FVRExBOGNVSlVxV0FZYzl1Q3RnNGVrdEpncWFqNVZBQ2gzZnYwbF9Sa1g2Z2R4Y2Q1RHpVbTNB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2425
    },
    {
      "date": "Sep 15",
      "text": "Tanker hit in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2425
    },
    {
      "date": "Sep 15",
      "text": "Hezbollah warns of significant attack after regrouping and studying Israeli activity.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiXEFVX3lxTFBCekI0emlxWmFuNG4wZmhwRUZDMEFEcTVwdzJDVVAwcHhNZEt4SUtwaHdJMzNXS2d3UUxoRUlvdGkzRDRXMDhtNWpFQzg5OVBYUVFzenVFeVlsRC1S?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 2425
    },
    {
      "date": "Sep 15",
      "text": "Houthi attacks on Saudi pipelines send oil prices higher.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2425
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (19 headlines)"
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
      "status": "unavailable"
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
      "perspective": "Escalation & Regional Risk",
      "headline": "Iran-Israel-US Conflict Escalates Regionally",
      "summary": "The conflict between Iran, Israel, and the US is rapidly escalating with direct military actions and widening regional involvement. US-Israeli strikes on Tehran and Iranian missile attacks across the Gulf indicate a dangerous expansion of hostilities.",
      "tone": "anxious",
      "latestSinceUpdate": 2420
    },
    {
      "perspective": "Oil Market Instability",
      "headline": "Oil Markets Disrupted by Middle East Conflict",
      "summary": "The conflict is severely impacting global oil markets, with an oil tanker explosion in Hormuz and the shutdown of a critical Saudi pipeline. These events have driven oil prices beyond $100, highlighting significant supply chain vulnerabilities.",
      "tone": "anxious",
      "latestSinceUpdate": 2420
    },
    {
      "perspective": "US War Costs",
      "headline": "Iran War Strains US Military Resources",
      "summary": "The ongoing conflict in Iran is straining US military resources, leading to munitions shortages and damage to facilities. The downing of a US Air Force officer underscores the direct human cost and operational challenges faced by the US.",
      "tone": "strained",
      "latestSinceUpdate": 2420
    },
    {
      "perspective": "Lebanon Front",
      "headline": "Israel Counters Hezbollah in Southern Lebanon",
      "summary": "The situation in southern Lebanon remains tense with Israeli forces actively countering Hezbollah encroachment and destroying bases. This ongoing conflict contributes to displacement and regional instability.",
      "tone": "strained",
      "latestSinceUpdate": 2420
    }
  ]
});

export default LATEST_SNAPSHOT;
