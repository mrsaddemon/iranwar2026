export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1027,
  "lastUpdated": "2026-06-21",
  "lastSyncedAt": "2026-06-21T17:07:57.790Z",
  "warDay": 114,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-21",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 7,
    "summary": "A ceasefire between Israel and Hezbollah is claimed by the US but remains fragile with reports of continued strikes and IDF operations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.3,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Jun 21",
      "text": "Iran announces the closure of the Strait of Hormuz, citing Israeli ceasefire violations in Lebanon.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1027
    },
    {
      "date": "Jun 21",
      "text": "US-Iran peace talks begin in Switzerland with US envoy Vance present.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1027
    },
    {
      "date": "Jun 21",
      "text": "Israel and Hezbollah reportedly continue strikes despite claims of a ceasefire agreement.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBwNjdCeHBnM3dhMmtPUDV0OEw4UHJ1T3gxV3IySy1mWkdHcl96emxtTExkZjBKTkpzRjBEejdJWnlBRjdRR29DYUxaUlVpenFLYkFhRHkyQnZodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1027
    },
    {
      "date": "Jun 21",
      "text": "The IDF captures a Hezbollah drone factory and launch site hidden inside a south Lebanon mountain.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOdTR4NjRud0F2U0J0NXZGZDQwM3hVNmtJODVnRjN3eVJMTTltV1U1MHlGVFVwSHJwMUxMTWJnaWszMm5Jc3BuZ3NhaHRiQkNIM3NUd0YyN0JoYWQyczd6OUlyNmVBQ1kzaFVIWGV2T2R3X200RnNKN3A5UTRraHhWSHNsdGV3amhKQ1ZpTElBNU5QS3haaFJwenZwUGhoUHhtczJpRWJBNTBjc3A2RlA3OUdXUnlGbmRlTW0weA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1027
    },
    {
      "date": "Jun 21",
      "text": "The U.S. claims the Israel-Hezbollah ceasefire is back on, while the U.S. military lifts a blockade.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTE5mbTdyZDlhemhJcF82dVJRRkM5amlNM1JoMUxNdXZPWm9qR1ZyOFlnOVJFMVNCNFpnUWh0RHcwZk5hSUdZeER1Z0pjR3NpWXJmb0hhbVViMVJ1NlYzNk5hc3Z6dlJ4ZDJhcHQwYUNzbE1KT1RTRjZlOHJB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 1027
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
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
      "perspective": "Iran",
      "headline": "Hormuz Closure Over Ceasefire Violations",
      "summary": "Iran asserts its right to close the Strait of Hormuz in response to perceived ceasefire violations and continued Israeli aggression in Lebanon, while engaging in peace talks.",
      "tone": "defiant",
      "latestSinceUpdate": 1022
    },
    {
      "perspective": "United States",
      "headline": "US Denies Hormuz Closure, Pushes for Peace",
      "summary": "The US denies Iran's claims of a closed Strait of Hormuz, actively monitors the waterway, and dispatches a negotiator to Switzerland to accelerate peace talks between the parties.",
      "tone": "strained",
      "latestSinceUpdate": 1022
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Fighting Persists Despite Ceasefire Attempts",
      "summary": "Despite multiple attempts at de-escalation, fighting persists between Israel and Hezbollah in Lebanon, marked by recent Israeli strikes and Hezbollah attacks.",
      "tone": "anxious",
      "latestSinceUpdate": 1022
    }
  ]
});

export default LATEST_SNAPSHOT;
