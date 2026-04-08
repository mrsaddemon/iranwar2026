export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 14,
  "lastUpdated": "2026-04-08",
  "lastSyncedAt": "2026-04-08T12:00:00.000Z",
  "warDay": 40,
  "summary": "A two-week ceasefire has been agreed between the US, Israel, and Iran following a US ultimatum, though Israeli operations in Lebanon continue and US strikes on Iranian infrastructure have occurred.",
  "lastNarrativeUpdate": "2026-04-08",
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
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
    "nuclearIndex": 70,
    "escalationLevel": 75,
    "oilDisruption": 60
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
      "text": "Trump warns of 'whole civilization will die' if no deal, US strikes Kharg Island.",
      "severity": "critical",
      "latestSinceUpdate": 14
    },
    {
      "date": "Apr 07",
      "text": "Iran agrees to safe transit through the Strait of Hormuz.",
      "severity": "info",
      "latestSinceUpdate": 14
    },
    {
      "date": "Apr 07",
      "text": "Israel states ceasefire does not include Lebanon, operations continue.",
      "severity": "warning",
      "latestSinceUpdate": 14
    },
    {
      "date": "Apr 07",
      "text": "Hezbollah pauses attacks, but also reportedly hits an Israeli warship.",
      "severity": "warning",
      "latestSinceUpdate": 14
    },
    {
      "date": "Apr 07",
      "text": "Both US and Iran claim victory after the two-week ceasefire deal.",
      "severity": "info",
      "latestSinceUpdate": 14
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
