export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 13,
  "lastUpdated": "2026-04-08",
  "lastSyncedAt": "2026-04-08T11:16:46.613Z",
  "warDay": 40,
  "summary": "A two-week ceasefire has been agreed between the US, Israel, and Iran following intense conflict and US strikes, though Israel continues military operations against Hezbollah in Lebanon and safe transit through the Strait of Hormuz has been secured.",
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
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 75,
    "oilDisruption": 70
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
      "text": "Trump warns 'whole civilization will die' if no deal by deadline, raising threats to 'apocalyptic levels'.",
      "severity": "critical",
      "latestSinceUpdate": 13
    },
    {
      "date": "Apr 07",
      "text": "US strikes Kharg Island as part of military actions against Iran.",
      "severity": "critical",
      "latestSinceUpdate": 13
    },
    {
      "date": "Apr 08",
      "text": "Israel halts strikes in Iran but continues fighting Hezbollah in southern Lebanon.",
      "severity": "warning",
      "latestSinceUpdate": 13
    },
    {
      "date": "Apr 08",
      "text": "Iran agrees to safe transit through the Strait of Hormuz.",
      "severity": "info",
      "latestSinceUpdate": 13
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
