export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 15,
  "lastUpdated": "2026-04-08",
  "lastSyncedAt": "2026-04-08T12:45:49.221Z",
  "warDay": 40,
  "summary": "A two-week ceasefire has been agreed upon between the US, Israel, and Iran, though Israel continues strikes in Lebanon, and the US has conducted strikes on Kharg Island amidst Trump's ultimatum.",
  "lastNarrativeUpdate": "2026-04-08",
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
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 75,
    "oilDisruption": 80
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
      "text": "US, Israel, and Iran agree to a two-week ceasefire ahead of Trump's deadline.",
      "severity": "info",
      "latestSinceUpdate": 13
    },
    {
      "date": "Apr 07",
      "text": "Israel strikes southern Lebanon after the US-Iran ceasefire agreement.",
      "severity": "warning",
      "latestSinceUpdate": 15
    },
    {
      "date": "Apr 07",
      "text": "Israel strikes central Beirut without warning, stating the Iran ceasefire does not apply there.",
      "severity": "critical",
      "latestSinceUpdate": 15
    },
    {
      "date": "Apr 07",
      "text": "Hezbollah reportedly pauses attacks, but Israel states operations in Lebanon continue.",
      "severity": "warning",
      "latestSinceUpdate": 15
    },
    {
      "date": "Apr 07",
      "text": "U.S. strikes Kharg Island as Trump raises Iran threats to 'apocalyptic levels'.",
      "severity": "critical",
      "latestSinceUpdate": 15
    },
    {
      "date": "Apr 08",
      "text": "The US-Iran ceasefire is admitted to be fragile by Vance.",
      "severity": "warning",
      "latestSinceUpdate": 15
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
