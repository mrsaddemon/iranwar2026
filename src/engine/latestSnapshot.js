export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 371,
  "lastUpdated": "2026-04-26",
  "lastSyncedAt": "2026-04-26T04:33:36.172Z",
  "warDay": 58,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-26",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 5,
    "summary": "A ceasefire extension in Lebanon appears to have collapsed amid continued Israeli and Hezbollah attacks, while US-Iran peace talks remain stalled."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
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
      "date": "Apr 24",
      "text": "Trump cancels dispatch of envoys for Iran peace talks",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE9EZkM3NURlaHh0ZGtEdDZxSGNDQjcwRUlQc0JkUG1WNDFGMzFrX1M0Z0JmR21kS25NU3JqSWJseEszMllWelMxc09lNV9oZ3k5R2VqOFBndlRHWmZ1ZVJlclJuUG9lQ0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 371
    },
    {
      "date": "Apr 25",
      "text": "Israel increases attacks in Lebanon, killing four",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 371
    },
    {
      "date": "Apr 25",
      "text": "Ships reportedly taken in the Strait of Hormuz",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMicEFVX3lxTFBSVVBIN2MtMHBFYy0yR1V4NVd0R0NZc1RUWW91LW9qTXBuRV9NN1lXZzRSc05nYk9oWUlHbFV3VDRoZTNacU9sck9uUkpPOWNPU1lMcE1PUzltX25IMDdvdmZoVTNwLVpfWVdlbFQwUlk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Financial Times",
      "latestSinceUpdate": 371
    },
    {
      "date": "Apr 25",
      "text": "US military developing plans to target Iran’s Strait of Hormuz defenses",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxQRlFxaDZ4TXFXaTNSbGhWQXZjR0M3MDltLWtVYW5vUDBzTkc5eXVyNlI2ek9Ga1BBUEduUlZwMzhITnlMcnBTQUFLVlYzTHFPVTZHbGFYb2ZrNWJrR0hKNzZRQS1qOFVjWVFkSDAxMW9kVFpOZWVaa2FLYWlONWJQbzU2ZVh3cjVXMDVwUTBOdlRmUUpQZWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 371
    },
    {
      "date": "Apr 25",
      "text": "Iran threatens response to continued U.S. blockade",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 371
    },
    {
      "date": "Apr 25",
      "text": "US military may have used half of its most expensive missiles",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxOemRRb2I3NGdaeWRVaUhRQWhpbWk1UWVhMmNxMTRDQTBHWGI4SDRiNWhfRV9Vd0puaW1aODN0QlRPNVRiX01rZWRMblVXRHNTQzVWa3pFYmFOc09acm9TMUU1dmoyT3FfOGxSakVkNXFZTlNtUklxVjI4Yy1Ubms0dmN1NkJOVFFNV3gtTHktbGFzQ1oyVmpfSGZadjBCcEk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fortune",
      "latestSinceUpdate": 371
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
      "perspective": "US Diplomatic Stance",
      "headline": "Trump Halts Iran Talks, Citing Strong US Position",
      "summary": "President Trump has canceled plans to send envoys for peace talks with Iran, stating the U.S. holds a strong negotiating position. This move follows Tehran's refusal of direct talks, contributing to ongoing uncertainty in the Middle East conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 370
    },
    {
      "perspective": "Iranian Resistance",
      "headline": "Iran Rejects Direct Talks, Threatens Retaliation Amid Blockade",
      "summary": "Iran has refused direct talks with the U.S., maintaining a firm stance amidst the ongoing conflict and a U.S. blockade. The Iranian Armed Forces Command has threatened a strong response if the blockade persists, following reports of significant damage to U.S. bases.",
      "tone": "defiant",
      "latestSinceUpdate": 370
    },
    {
      "perspective": "Lebanon Front Escalation",
      "headline": "Israel Escalates Attacks in Lebanon, Hezbollah Remains Defiant",
      "summary": "Israel has intensified its strikes in southern Lebanon, killing four and escalating breaches of a nominal ceasefire. Hezbollah has expressed defiance, questioning the effectiveness of any ceasefire amidst continued cross-border attacks.",
      "tone": "strained",
      "latestSinceUpdate": 370
    },
    {
      "perspective": "Global Oil Market",
      "headline": "Hormuz Standoff Threatens Global Oil Supply and Demand",
      "summary": "The ongoing standoff in the Strait of Hormuz, marked by ship seizures, continues to pose a significant threat to global oil supplies. Analysts warn of a potential 'Billion-Barrel Hormuz Oil Shock' that could severely impact demand and market stability.",
      "tone": "anxious",
      "latestSinceUpdate": 370
    }
  ]
});

export default LATEST_SNAPSHOT;
