export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 12,
  "lastUpdated": "2026-04-08",
  "lastSyncedAt": "2026-04-08T09:36:43.253Z",
  "warDay": 40,
  "summary": "A provisional two-week ceasefire has been agreed between the US, Israel, and Iran, leading to the reopening of the Strait of Hormuz, though Israeli air strikes continue in Lebanon.",
  "lastNarrativeUpdate": "2026-04-08",
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
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.4
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 65,
    "oilDisruption": 35
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
      "date": "Apr 07",
      "text": "US, Israel, Iran agree to provisional ceasefire before Trump’s deadline.",
      "severity": "info",
      "latestSinceUpdate": 12
    },
    {
      "date": "Apr 07",
      "text": "Tehran announces reopening of the Strait of Hormuz.",
      "severity": "info",
      "latestSinceUpdate": 12
    },
    {
      "date": "Apr 07",
      "text": "Trump pauses Iran strikes for two weeks to negotiate a 10-point peace deal.",
      "severity": "info",
      "latestSinceUpdate": 12
    },
    {
      "date": "Apr 07",
      "text": "Israel states ceasefire does not include Lebanon as air strikes continue.",
      "severity": "warning",
      "latestSinceUpdate": 12
    },
    {
      "date": "Apr 07",
      "text": "Israeli strike kills Christian party official in Lebanon, sharpening divides over Hezbollah.",
      "severity": "critical",
      "latestSinceUpdate": 12
    },
    {
      "date": "Apr 06",
      "text": "U.S. conducts strikes on Kharg Island prior to ceasefire agreement.",
      "severity": "warning",
      "latestSinceUpdate": 12
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
      "perspective": "US Perspective",
      "headline": "Trump Secures Ceasefire, Seeks Peace Deal",
      "summary": "Trump's administration has secured a two-week ceasefire with Iran, aiming to negotiate a comprehensive peace deal and de-escalate tensions, while maintaining an ultimatum regarding Iranian actions.",
      "tone": "neutral",
      "latestSinceUpdate": 8
    },
    {
      "perspective": "Iranian Perspective",
      "headline": "Iran Agrees to Talks, Demands Strait Reopening",
      "summary": "Iran has agreed to a temporary ceasefire and talks, contingent on the reopening of the Strait of Hormuz, following significant US military actions and threats.",
      "tone": "strained",
      "latestSinceUpdate": 8
    },
    {
      "perspective": "Israeli Perspective",
      "headline": "Israel Continues Strikes Despite Ceasefire",
      "summary": "Israel continues its strikes against Iranian infrastructure and related targets, asserting its security interests despite the broader US-Iran ceasefire announcement.",
      "tone": "defiant",
      "latestSinceUpdate": 8
    },
    {
      "perspective": "Regional Allies Perspective",
      "headline": "Hezbollah, Houthis Join Iran in Strikes",
      "summary": "Hezbollah and Houthi forces have joined Iran in striking Israel, indicating a unified front against Israeli actions and continued regional involvement.",
      "tone": "defiant",
      "latestSinceUpdate": 8
    }
  ]
});

export default LATEST_SNAPSHOT;
