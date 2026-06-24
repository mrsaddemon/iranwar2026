export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1055,
  "lastUpdated": "2026-06-24",
  "lastSyncedAt": "2026-06-24T20:00:27.666Z",
  "warDay": 117,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-24",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 5,
    "summary": "Despite reports of a US-Iran roadmap for a final deal and a lull in some fighting, active military operations continue in Lebanon and skepticism remains regarding a lasting agreement."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.4
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
    "escalationLevel": 48,
    "oilDisruption": 30,
    "tradeImpact": 22,
    "sanctionsPressure": 54,
    "globalPressure": 55,
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
      "date": "Jun 23",
      "text": "US launches new strikes on Iran, targeting missile sites and boats.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9WaDJGdEZ0YndpVVJXUlUydGhtZnZWVUFDdnR6MUdTSmhQNVMyZmRKUGMxZC0yTUNNTGw1Q2Q1M3VsNWVacFJ2X3cwd1BiOTd4b1BSYWxBM1Bodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1055
    },
    {
      "date": "Jun 23",
      "text": "Israel conducts strikes in Iran, IDF says.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1055
    },
    {
      "date": "Jun 23",
      "text": "Israel moves deeper in Lebanon and reportedly traps Hezbollah fighters underground in southern Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPX200Zzhvc01oMWR1S3hFVnRJc2J6SU9CLS14aG1lMjY1U290ZHk4Qk94Ty1NZjd0U1FCVldpRlp5ZnM0cVlXa2R0ZWxZeV94eWp1Mkx2VlRGTkNiYWdqaFBKT1lrSXNJQTU1VjBUWXVMUndKd2hPZHIxaXdMVHFDY1pVVUZ5UkpHemR5RG5MeG9Zdjk2eWFZaFBFSnNFUWxXTW9JQ1c5Z01SVDIydE9wLWJMTmw1S083em9aWnUxRdIBxAFBVV95cUxOT1lnSWQ5SG1ld25mc3pTUTBNelpxWFYwQ0xfRDF6Wk82SHRGVWZBeGlpQmJ6dFhaVF80QTBlbmxqUnNtZkdUYjkzbHgteU1pdXBkT0MxU3d4MzhXR19kNVNMMThtNkJHNkdYN0dXUzFVUHBFdEk4OHE2QWVRbmwzS0FGZ2hYVlRVSWl3Nk5VN1R3NU43LTlTb2xSUEg3LXItSDRpYzhPRDBneXROVlJKRmJsUlJKZTU1MGxjYTM2dE9RQzRY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1055
    },
    {
      "date": "Jun 23",
      "text": "Israeli troops kill two in south Lebanon after a lull in fighting.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE44aEZLRjFyQm1kZm93VXJ2b2psQmZjWmhnejdBS2Nla1lzM1JjYUdIRDFRTFpoQl85YnZBdEhOcU00bGg1QUpXMjVic2FqNmRxeVoxc2FEYUswUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1055
    },
    {
      "date": "Jun 23",
      "text": "US Senate approves Iran war powers resolution, directing Trump to remove forces and breaking with his administration.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMicEFVX3lxTE1KelU2dVZZMXhTaFVmaklBaUJ2WVBzdmpEdmFneE9pN0FMemNYQWVHbGNnbkhzS1VTQnBhaHlTZTV1Nl9iSGRXdTZNSm5DTnQ1SWtJZXhUN3JNeF80RU5tMGRJUE8zT2ctNHJTWWdtanE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1055
    },
    {
      "date": "Jun 23",
      "text": "U.S. and Iran reportedly agree on a roadmap for a final deal and plan to end military operations in Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxPcG5zd2Vka1BqZDlWMjNVaEZwWk9EN1ZkU1ctTFVaOEtCMXdEdzNTM252ZmFNa2M3SF9HNUk0VHhpS29zN2MzelRtWnc0eDJCSVdQVTg1SUFwVlZndHp1UEpsZ0NYU2xoRHpRZjVfcUZiT25vUklzY1FFVjJVZkpiN1lORGJTbF80bUJGb2NvZlI1dGVhWFRyaVE5WVozMFl5VkZyZ01B0gGrAUFVX3lxTFBMNllIcW9fMUJSbUQ2aGlId05nZW9yX0ZEQnlmUE5JcmZCSkItRmpMQzFfNThFeHdZLVVwSmhyWmFucWctc3VzaEJmYTEzQ0JjSHpQRW9UNXZwbnZLZi13cndzSkcyanQ5N2VtSEhrdWJ6ZkxQdmdnZkhULUUzQ2ZFRHNXOXVaYkZRVUR1MWRhbTJyc1RxemFMZENidGxOMTVzcmFicnRJR3pfSQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1055
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
      "perspective": "US/Mediators",
      "headline": "Progress in US-Iran talks and efforts to secure shipping lanes",
      "summary": "Mediators report encouraging progress in US-Iran talks, with a mechanism being developed to ensure the Strait of Hormuz remains open. Vance is actively involved in peace talks following Iran's actions.",
      "tone": "strained",
      "latestSinceUpdate": 1038
    },
    {
      "perspective": "Iran",
      "headline": "Defiance over Hormuz closure amid Israeli actions",
      "summary": "Iran temporarily closed the Strait of Hormuz in response to Israeli strikes in Lebanon, asserting control over the vital waterway. Tehran stated the Strait is not a 'personal casino' for others.",
      "tone": "defiant",
      "latestSinceUpdate": 1038
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Continued conflict despite ceasefire declarations",
      "summary": "Despite US-brokered ceasefire agreements, Israel and Hezbollah have continued to exchange strikes and engage in military operations. The IDF reported capturing a Hezbollah drone factory in south Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 1038
    }
  ]
});

export default LATEST_SNAPSHOT;
