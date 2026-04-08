export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 8,
  "lastUpdated": "2026-04-08",
  "lastSyncedAt": "2026-04-08T01:48:38.921Z",
  "warDay": 40,
  "summary": "A two-week ceasefire has been announced between the US and Iran, contingent on the reopening of the Strait of Hormuz, while Israel continues strikes against Iranian infrastructure and regional allies engage in conflict.",
  "lastNarrativeUpdate": "2026-04-08",
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
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
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 85,
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
      "date": "Apr 08",
      "text": "Trump announces a two-week ceasefire with Iran, with talks to begin.",
      "severity": "info",
      "latestSinceUpdate": 8
    },
    {
      "date": "Apr 08",
      "text": "Iran agrees to ceasefire talks, conditional on the reopening of the Strait of Hormuz.",
      "severity": "info",
      "latestSinceUpdate": 8
    },
    {
      "date": "Apr 08",
      "text": "Israel continues strikes on Iranian infrastructure despite the US-Iran ceasefire announcement.",
      "severity": "warning",
      "latestSinceUpdate": 8
    },
    {
      "date": "Apr 08",
      "text": "Lebanon’s Hezbollah and Yemen’s Houthis join Iran in strikes against Israel.",
      "severity": "warning",
      "latestSinceUpdate": 8
    },
    {
      "date": "Apr 08",
      "text": "An Israeli strike kills a Christian party official in Lebanon, deepening regional divides.",
      "severity": "warning",
      "latestSinceUpdate": 8
    },
    {
      "date": "Apr 08",
      "text": "The American military has halted all offensive operations against Iran following the ceasefire announcement.",
      "severity": "info",
      "latestSinceUpdate": 8
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
