export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 9,
  "lastUpdated": "2026-04-08",
  "lastSyncedAt": "2026-04-08T03:26:52.175Z",
  "warDay": 40,
  "summary": "A two-week ceasefire between the US and Iran has been announced, contingent on the reopening of the Strait of Hormuz, though Israel continues strikes in Iran and Lebanon.",
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
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
      "text": "US and Iran agree to a two-week ceasefire, delaying large-scale attacks and launching a diplomatic push.",
      "severity": "info",
      "latestSinceUpdate": 9
    },
    {
      "date": "Apr 08",
      "text": "Israel continues strikes in Iran despite the US-Iran ceasefire announcement, according to security officials.",
      "severity": "warning",
      "latestSinceUpdate": 9
    },
    {
      "date": "Apr 08",
      "text": "The Strait of Hormuz reopening is a stated condition for the US-Iran ceasefire.",
      "severity": "info",
      "latestSinceUpdate": 9
    },
    {
      "date": "Apr 08",
      "text": "Hezbollah in Lebanon and Houthi forces in Yemen join Iran in strikes against Israel.",
      "severity": "critical",
      "latestSinceUpdate": 9
    },
    {
      "date": "Apr 08",
      "text": "US military strikes Kharg Island before ordering all offensive operations in Iran to cease.",
      "severity": "warning",
      "latestSinceUpdate": 9
    },
    {
      "date": "Apr 08",
      "text": "An Israeli strike kills a Christian party official in Lebanon, exacerbating internal divides.",
      "severity": "critical",
      "latestSinceUpdate": 9
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
