export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 798,
  "lastUpdated": "2026-05-28",
  "lastSyncedAt": "2026-05-28T00:07:32.445Z",
  "warDay": 90,
  "summary": "The US has renewed strikes against Iranian military sites despite ongoing peace talks, while Israel continues operations against Hezbollah in southern Lebanon, straining regional ceasefire efforts.",
  "lastNarrativeUpdate": "2026-05-28",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 15,
    "summary": "The Israel-Lebanon ceasefire is strained by ongoing IDF operations, and US strikes on Iran indicate a collapse of any broader de-escalation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
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
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "date": "May 28",
      "text": "US carries out new strikes against Iranian military sites.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxQSzRGUk1INGZtNlZFWDhxRWRJQzN1eVIwQzFGc3N2TUo4aVhjNlZLVzV3Q0EwRGxhWHpxTy01RDcwS3JqREdnaGhVSldjSXo1NHlxMWZxdEJLRmxSWW80ZTM0YXlMRzlORDMzT3FWMVE2UnVpQUZoQTFjNmhKUU4wTWduRTRoODNUUFMtQlF1OW9OS09NbGFOd09vU3NqT1hZYWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 798
    },
    {
      "date": "May 26",
      "text": "Iran's IRGC threatens retaliation after US strikes on launch sites and boats.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE1uWVBMM2w2ZVhhWGFBV0lNRDlUTFMtOWU2cHBhY0prUVpBSW1kYVU4TzdSbWFXS0JSTlNNUFRZYmdpdHQzVXB2X0VpTTFoVE1jc3VjVEpWNUstem0xdk13ZlIzYUgzbEFmejZpS0d1V1hZT0wzYjJvYQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 798
    },
    {
      "date": "May 28",
      "text": "Israel issues evacuation orders and moves deeper into southern Lebanon against Hezbollah.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1kYzFJdldyZ01IUWdFLTNOU2lDNFkwTjIwbzRnN0xudjg4T3k2RzlkdW1KTy1mZUpMVUVTZWxTQ241N1REcGt3anhyNzQ1eWpFM0ppUlBIVHR0QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 798
    },
    {
      "date": "May 28",
      "text": "US-Iran peace talks are strained amidst renewed US military action.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 798
    },
    {
      "date": "May 28",
      "text": "US Navy is guiding ships through the Strait of Hormuz amid regional tensions.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 798
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
