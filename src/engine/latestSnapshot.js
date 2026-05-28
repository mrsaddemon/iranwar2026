export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 800,
  "lastUpdated": "2026-05-28",
  "lastSyncedAt": "2026-05-28T08:34:12.468Z",
  "warDay": 90,
  "summary": "The conflict continues with direct US strikes on Iranian military sites, Iranian retaliation, and Israel expanding operations into southern Lebanon against Hezbollah.",
  "lastNarrativeUpdate": "2026-05-28",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 3,
    "summary": "No ceasefire is currently active; direct military engagements are ongoing."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 85,
    "oilDisruption": 75,
    "tradeImpact": 69,
    "sanctionsPressure": 64,
    "globalPressure": 81,
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
      "date": "May 26",
      "text": "US conducts new strikes against Iranian military sites.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxQSzRGUk1INGZtNlZFWDhxRWRJQzN1eVIwQzFGc3N2TUo4aVhjNlZLVzV3Q0EwRGxhWHpxTy01RDcwS3JqREdnaGhVSldjSXo1NHlxMWZxdEJLRmxSWW80ZTM0YXlMRzlORDMzT3FWMVE2UnVpQUZoQTFjNmhKUU4wTWduRTRoODNUUFMtQlF1OW9OS09NbGFOd09vU3NqT1hZYWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 800
    },
    {
      "date": "May 26",
      "text": "Iran retaliates after US strikes, reportedly targeting an American base.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 800
    },
    {
      "date": "May 26",
      "text": "Kuwait is reportedly targeted by missiles and drones.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxPMjBheDJiTHNmOFdRbzJvVlBiZFYtNk9iOGl5UUxCVFMzQ2REMV9HNFZvOU1XcWVLSzUxNjdXdE5ZR3FoZWd2VkFnQzRxZ2hYanpqdkEwTmNIZVFVaklBdnV6d0dmR0hSNnlQbFY2b0FiTG96MUJwY2otYzJMcUItb1RCUUF3bXRldk91TkJkUk5BWnQxbXBzZ3BjQTllandyLXVwaDA3ck9pT1VzUW1hRzZiaFZfQ0hnN3RpMTJJVERKQdIBxwFBVV95cUxPQzBmc1RFR0xDQXFYVmw5RTVGTVBZakRhUGJ4S1lKTDVNOURsWmNSS0hMMVRmeG9OT0Y3TzF3TndBYnRtTGNYZVVOaVdEUExqOGJBdUVEem1uT3ZFYW12dWhqbmxVVFlSc3NIU0UzSE0tTjEtWGl2RHVneUtHb0hMTENadFY0SWdNWUZkdTc4NExhQW5CMV9hNkNuQlpBV21mTHQ1WWhQaDdaa3JmZERxS01BLWpNSmYwdU5kMExsTXR2c2dQT0pJ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 800
    },
    {
      "date": "May 27",
      "text": "Israel begins strikes on southern Lebanon following evacuation orders.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1kYzFJdldyZ01IUWdFLTNOU2lDNFkwTjIwbzRnN0xudjg4T3k2RzlkdW1KTy1mZUpMVUVTZWxTQ241N1REcGt3anhyNzQ1eWpFM0ppUlBIVHR0QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 800
    },
    {
      "date": "May 27",
      "text": "A soldier is killed in a Hezbollah drone attack as Israel widens strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxOTHc1MlUxWnFvbGhpMDRydGVXYWdzZWtrRkFlaUkwc0lPU0pyUW5NM0ZsNjV3RC1NdnJtUzdYZFdleU81eXVwZlRrdzJtTUVicEFTdk1lZ2ttNTBwTmJ4anlpbzZnX1laa3lYUlhnd0xGQzBrYlpvNk0zYXR6cVpTaGxhVnVfb0xMU1dxOG5nNnVGak1UaVZ1aS1sd1lyZ3ZMTHZOXzU4MlU4QkhHdlhpMnNB0gG3AUFVX3lxTE5NeDZZX0hZeXdlckhDdjBiZ3RkdEt6dXZEUHZGNklmbjU4b0lvTldWaWY2U0tPYjkyeHFZdEM1NjBmMnM0VGdwSVVjS1Q2NERqamZ0YkxTUHdSRmhBMlIyWjlKS2RuaURCSWFramprTjFORXVTTFNBT1RNUWNBWEo0RTNta0U2QXdCMkl3VlZLX2NlYllLeWU2OTRUZUJzVzk0bDZMRHVyT19JU0tsdGtWYjRHUUJacw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 800
    },
    {
      "date": "May 27",
      "text": "IDF announces plans to invade deeper into Lebanon, operating beyond the Yellow Line to deter Hezbollah drones.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1yRDI1bG8tVDRPZklCTWpwVlN5SDFVV2s1cWZISjFvb0t6bmtMcDNRWkdqN3poUUlMaVRZLXpkZXdIdm1SSUlmTFZHRWI4SzJuXzUwc1h3U2dmOFlrVDYzUlZiWlJuTXdWVm1QbW1n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 800
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
      "perspective": "US Policy",
      "headline": "US Balances Strikes with Diplomacy Amidst Iranian Threats",
      "summary": "The US continues to conduct military strikes against Iranian targets, citing threats, even as peace talks are underway. Officials report some progress on a potential deal, but the military actions suggest a strategy of pressure.",
      "tone": "strained",
      "latestSinceUpdate": 798
    },
    {
      "perspective": "Iranian Response",
      "headline": "Iran Threatens Retaliation, Maintains Suspicion of US Intentions",
      "summary": "Iran's IRGC has threatened retaliation following US strikes, with forces reportedly 'lying in wait.' Tehran expresses 'resolute support' for Hezbollah and harbors 'deep suspicion' of US motives despite considering a peace agreement.",
      "tone": "defiant",
      "latestSinceUpdate": 798
    },
    {
      "perspective": "Israeli Actions",
      "headline": "Israel Expands Operations in Lebanon, Straining Ceasefire",
      "summary": "Israel is moving deeper into southern Lebanon, issuing evacuation orders and targeting Hezbollah cells. These actions are straining the existing ceasefire and are perceived by some as an attempt to influence broader regional dynamics.",
      "tone": "strained",
      "latestSinceUpdate": 798
    },
    {
      "perspective": "Economic & Global Impact",
      "headline": "Conflict Drains US Budgets, Maintains Oil Price Pressure",
      "summary": "Ongoing war spending is reportedly straining US military budgets, leading to cancelled trainings and delayed maintenance. The conflict's continuation, particularly around the Strait of Hormuz, contributes to sustained high oil prices.",
      "tone": "anxious",
      "latestSinceUpdate": 798
    }
  ]
});

export default LATEST_SNAPSHOT;
