export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 104,
  "lastUpdated": "2026-04-12",
  "lastSyncedAt": "2026-04-12T05:47:47.033Z",
  "warDay": 44,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-12",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "A fragile US-Iran ceasefire was reported for oil tankers in Hormuz, but peace talks failed, and military tensions remain high."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 68,
    "escalationLevel": 48,
    "oilDisruption": 90
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
      "date": "Apr 12",
      "text": "US-Iran peace talks ended after 21 hours without a deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxPY3YtWWJnVW54ZDFoaFBUM2hBZXQzT0tsV3d2MnZEbVlSX0Zsck5hWnd5bndqYmVEckwwTW83dGpQSm0zZzZ4X1ljSmI5V1FQc2s3aVcxYW9vQzI1cGVxNFFtY19HNEhZbHo2VEtYRW03YmlDMklSc1drUFJIMTlwYllxcFd5U3VHZGE3Ny11Nk93VmFUZC1PcUVLcUJmNHRtMnBvNTRaWldWOVpCQmJqRHhCaHpHdE8xTzRTb19PUVlHajFRSzJJWThYQ0w?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 104
    },
    {
      "date": "Apr 12",
      "text": "US naval destroyers crossed the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikgFBVV95cUxQckk5TlROc0hKRHM2SjRlNnhCTnFTMzRDUVJrazNscmVuQzZKNndzbHNNN0xjN0JWZWRpeGJMcFpNVGktbmlfaC1wME54NWduV1hUeHBLNElFYVdNZjB6ejA3eGttMTlOSlFmMEtmZGFyX0hlLWNra0VmODQyQkZ3TUxCU3JhazRrcEppOFlCanh0QdIBlwFBVV95cUxNVjhSTFE5SGU1aERuZU1zZkdxQmpONGk5cGNVR0ctVnFyNlI2S1Y3Umxic1Zhc1A1ZllhejVWZG03WlZYek5teTV3dC1GZ3JYMVJBUGZSWHRnMUdDM29nZVduMV9tN3FOLURkRXQ2ZFM3NFBRcHY3NE1MYnQ0dHd3eFRiSUo2MWM3TDNtRjlrMlRHdjE0eFVv?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 104
    },
    {
      "date": "Apr 12",
      "text": "Iran threatened US warships in the Strait of Hormuz, issuing a 'last warning'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxNNkdJVnpXa1phTS1YU25xS3RmVFowU2lCaDVwcmhlTlY0akNRUE1mOG1INU5UbFpPWFB3NXNqdUZUeEw2bGptaGZzcFNOWlZ1UWQyUGRjMzA1Rm9lZjB0LVd6bXQ2dG93YmFtMXU4NXV3OXJxbWh1YnZiMzVwUi03cXlEdUtzMWRQVzdjNjZuczVFaFVYajFacFpaaThNZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fortune",
      "latestSinceUpdate": 104
    },
    {
      "date": "Apr 12",
      "text": "Oil tankers exited the Strait of Hormuz amid reports of a fragile US-Iran ceasefire.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxQWXk1M1JtR28yZ2RhWlVoQ3dvQW1RcHozYUVUdHBsVVBHYmRNaFNaVFdLNlZOekJNejVkMWx6RUNRRHdpdlkwcHp6Wngtb0swRFFtS3ljdTI0RWYzblNiTDBSZWdQV1gzSmo3ZFFKQ08yX1p5RGtyQkNTNEROVWZoT0t1RVBZN2J0cERWczdmNUZZVjJEV0RfUlV3MU02Q1U0cS1EcEktWWQ4aXRK0gGyAUFVX3lxTE9HVmMzbzh5SlYtdDIyUDliT0U3bDBPRDBJM25ad2ZpSmFkV0ZLZ0RHQjZmR1VYS0pFa3FxOFZFMUc5QXVDVXhlZnhaNG9HSjdFdDExaUtJSzRtaHJhZU5TMnFkYldpNlpVT0Y3bnMySktYQWUzNWFJR253a3Rmd21lYXNGNWtvTFdOMkl0UVJqV0FmV1pvV0U3UHp5ZGw5eWZWendoN01UWEs5dHZUQ3k0dEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 104
    },
    {
      "date": "Apr 12",
      "text": "Beirut continues to recover from deadly Israeli attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiV0FVX3lxTE9fZW1BbDZIUjBLVU9nWUMwS24wRkZvbG91UHJ3N2JKOE1lVEZwTERxdC1aUWpqZ3FwTldzZWVoU1NXekViazJzUVBNaDdjWHRTX3g0djJmRQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 104
    },
    {
      "date": "Apr 12",
      "text": "Israeli military struck Hezbollah targets in Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE1WWXNJZ0ZQbzhLRDVCeWJLZEhaWGlVaDBmaUlLT3hUN3l0TWVTemZYZlpHQ1VGdmt2UTZEM3AwMmxkTTNaeG1RVk5ZWm1kcVlidTB4WTVB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 104
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
      "perspective": "United States",
      "headline": "Trump's Firm Stance on Iran Negotiations",
      "summary": "President Trump maintains a strong military presence near Iran, warning of further strikes if negotiations fail and asserting readiness for future conquests. He emphasizes that the military will remain until a 'real agreement' is honored.",
      "tone": "defiant",
      "latestSinceUpdate": 103
    },
    {
      "perspective": "Iran",
      "headline": "Diplomacy Amidst Strait of Hormuz Threats",
      "summary": "Iran engaged in direct talks with the U.S. in Pakistan but also issued stern warnings to American warships in the Strait of Hormuz, signaling a dual approach of negotiation and deterrence. The delegation arrived for talks, but no agreement was reached.",
      "tone": "strained",
      "latestSinceUpdate": 103
    },
    {
      "perspective": "Israel",
      "headline": "Continued Offensive Against Hezbollah",
      "summary": "Israel continues its military operations against Hezbollah, rejecting ceasefire calls and asserting its intent to counter perceived threats from the group and Hamas. Netanyahu insists Israel 'will deal with' Hamas and Hezbollah's plans to invade Galilee.",
      "tone": "defiant",
      "latestSinceUpdate": 103
    }
  ]
});

export default LATEST_SNAPSHOT;
