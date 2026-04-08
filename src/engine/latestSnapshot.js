export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 10,
  "lastUpdated": "2026-04-08",
  "lastSyncedAt": "2026-04-08T05:28:37.538Z",
  "warDay": 40,
  "summary": "A two-week ceasefire has been agreed upon between the US, Israel, and Iran following 39 days of conflict, though Israel continues to conduct strikes in Iran and Lebanon.",
  "lastNarrativeUpdate": "2026-04-08",
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 70,
    "oilDisruption": 40
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
      "text": "US, Israel, and Iran agree to a two-week ceasefire before Trump’s deadline.",
      "severity": "info",
      "latestSinceUpdate": 10
    },
    {
      "date": "Apr 07",
      "text": "Trump suspends US attacks on Iran, and Tehran agrees to the two-week ceasefire.",
      "severity": "info",
      "latestSinceUpdate": 10
    },
    {
      "date": "Apr 07",
      "text": "Oil prices plunge after the US-Iran ceasefire deal to reopen the Strait of Hormuz.",
      "severity": "info",
      "latestSinceUpdate": 10
    },
    {
      "date": "Apr 08",
      "text": "Israel continues to strike Iranian infrastructure despite the ceasefire announcement.",
      "severity": "warning",
      "latestSinceUpdate": 10
    },
    {
      "date": "Apr 08",
      "text": "An Israeli strike kills a Christian party official in Lebanon, sharpening divides over Hezbollah.",
      "severity": "warning",
      "latestSinceUpdate": 10
    },
    {
      "date": "Recent",
      "text": "U.S. conducted strikes on Kharg Island amidst heightened threats against Iran.",
      "severity": "warning",
      "latestSinceUpdate": 10
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
