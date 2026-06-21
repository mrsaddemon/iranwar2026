export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1025,
  "lastUpdated": "2026-06-21",
  "lastSyncedAt": "2026-06-21T13:27:15.957Z",
  "warDay": 114,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-21",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 7,
    "summary": "A ceasefire agreement is reportedly in place but is being actively violated by continued Israeli and Hezbollah strikes in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Jun 21",
      "text": "Iran announced the closure of the Strait of Hormuz, citing Israeli ceasefire violations in Lebanon.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1025
    },
    {
      "date": "Jun 21",
      "text": "US and Iranian officials, including JD Vance, began high-level negotiations in Switzerland to discuss a truce.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1025
    },
    {
      "date": "Jun 21",
      "text": "Israeli attacks continued in Lebanon, reportedly killing dozens, despite ongoing ceasefire discussions.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1025
    },
    {
      "date": "Jun 21",
      "text": "Iran's Tasnim news agency stated Hormuz would remain closed until a Lebanon ceasefire holds and oil waivers are issued.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiygFBVV95cUxPa005aHFiRnFPT0lhdUYwazVqbHV2cEhrTWJHWFVEZDhBWlpzNEtzRFptdVZsRkpwcnQ0ZVVfNXh5aE1JR202NGpWX3liaE1aeE4ybk5oRUhwLUJFWTNPOTdfMHRxMkM5bllwRDdVcXBLbUVCSDhKTEpCQS1rcERlUW9YLTBHZEQzYVRPanVKUFlpMHo1M1hpOTdvYlp6b0lUVk5OT2FXT196RjEwZ2dBRGxpNERROG5QOFVVVGlzWGcwMU1NNWE2X1FR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1025
    },
    {
      "date": "Jun 21",
      "text": "Former President Trump threatened Strait of Hormuz tolls if Iran fails to reach a nuclear deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE5EUmtNUWhEWjJjdDJoYWhFckxDTnJCLWxvVDRjX3JuU0pJWUlueW1kVDE2SC01eWxURi1mYjNKWlUzM2R6dE9ndHVLNFRIUUc2empYQUZn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1025
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
