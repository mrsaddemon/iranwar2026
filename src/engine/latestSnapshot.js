export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 400,
  "lastUpdated": "2026-04-27",
  "lastSyncedAt": "2026-04-27T19:50:21.470Z",
  "warDay": 59,
  "summary": "A fragile two-week ceasefire between the U.S. and Iran is in effect, though negotiations are in flux amidst an ongoing standoff in Hormuz and active conflict between Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-04-27",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A two-week ceasefire between the U.S. and Iran is active but fragile, with negotiations ongoing and regional conflicts persisting."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.85,
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
    "nuclearIndex": 60,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Apr 27",
      "text": "Standoff in Hormuz continues, impacting shipping and trade.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 400
    },
    {
      "date": "Apr 27",
      "text": "Israel and Hezbollah engage in active battles in Lebanon.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 400
    },
    {
      "date": "Apr 27",
      "text": "U.S. and Iran reached a 2-week ceasefire, which Trump has extended.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 400
    },
    {
      "date": "Apr 27",
      "text": "Iran offers a new deal to open the Strait of Hormuz and end the US blockade, proposing to delay nuclear talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxOSzdESkNVeVVLWmJPemJPSDh3V19aOHJOQW1kXzFiMjV2aHBZMjVIU0g3d1NpZkpfZk9pUFpnU2d0NDN1dlBYLXY4Qk1vUWRMcnpQYm9tY2dxbFpnQUpFXzJLRUZWWVBCRVhUS3AyV1Nyb19LcWRObGU1b3V5WGlGZmQxZldxZ09G0gGOAUFVX3lxTE1naHVobktkbXoyWVF4QVZMYzBEdTNQd0hGd0VGbGJtZVRNWU04MW5nbnVzUmpXVUp4eWZjRE52M0JfaUhZcGJtWnBsX2J6bFlLNmY2VWlUMTNDaEpoZTczai1Db3NhakJJb0Z2dFU4MzBZU2RHTW1jMTJIQ1FRSnlzTHU2a25jbXJHQ0xSWlE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "foxnews.com",
      "latestSinceUpdate": 400
    },
    {
      "date": "Apr 27",
      "text": "Netanyahu orders the army to 'vigorously attack' Hezbollah in Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1UMjAxb3NrUFhMU0s0d3VzaGkyZjZ1NzV3aDR2OHM0bWlUVTIzNjNKOE4yMEZQSjhMdFlsOEJobXRzc1pibGE5dm5ybzFaR1lKWENWWGhJVDdSUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 400
    },
    {
      "date": "Apr 27",
      "text": "Hezbollah leader rejects disarmament and calls for Israeli withdrawal in a rare interview.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxNdHhaNW1PdVJMVjh5S2N1eUJaUHh5aU05elpsb2ZJTVFHa0JMUTJFcUxLTWZnSThETll6RU1EMXYxWGthclFmeWowZjVvRHdzVTJnYy1NT09wYzJybWF6RjZLamRFRnR3YTVjM284N0NrQXQzejlwUlRjWklzNlREZFZhbUstcUFGNEI1YlVoc3VicnlBY0FIczZZSXZBZWhhdVl0eWZWTVdPWDFOSDF2TWpQdkRIZWw1dFB6cmR3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 400
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
      "headline": "Iran Accuses US, Doubles Down on Hormuz Closure Amidst Ceasefire Offer",
      "summary": "Iran maintains its closure of the Strait of Hormuz, accusing the U.S. of undermining trust, even while offering a deal to reopen the strait in exchange for postponing nuclear talks. The foreign minister continues regional engagements despite U.S. diplomatic cancellations.",
      "tone": "defiant",
      "latestSinceUpdate": 392
    },
    {
      "perspective": "United States",
      "headline": "US Ceasefire with Iran Fragile as Trump Cancels Talks, Military Plans Hormuz Action",
      "summary": "The U.S. has entered a two-week ceasefire with Iran, but President Trump canceled envoy visits, asserting U.S. leverage. Concurrently, the U.S. military is developing plans to target Iran’s Strait of Hormuz defenses should the ceasefire collapse, and reports highlight drained U.S. weapon supplies.",
      "tone": "strained",
      "latestSinceUpdate": 392
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Israel Vows Forceful Response as Hezbollah Rejects Disarmament Amidst Escalating Clashes",
      "summary": "Israel has vowed to attack Hezbollah 'forcefully' following increased strikes in southern Lebanon and casualties. A top Hezbollah leader has rejected disarmament demands, calling for Israeli withdrawal, indicating a continued state of conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 392
    }
  ]
});

export default LATEST_SNAPSHOT;
