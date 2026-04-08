export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 11,
  "lastUpdated": "2026-04-08",
  "lastSyncedAt": "2026-04-08T06:57:27.162Z",
  "warDay": 40,
  "summary": "The United States, Israel, and Iran have agreed to a two-week ceasefire following significant US strikes on Iranian infrastructure and escalating threats, while regional tensions persist in Lebanon.",
  "lastNarrativeUpdate": "2026-04-08",
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
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
      "latestSinceUpdate": 11
    },
    {
      "date": "Apr 07",
      "text": "President Trump suspends US attacks on Iran as part of the ceasefire agreement.",
      "severity": "info",
      "latestSinceUpdate": 11
    },
    {
      "date": "Apr 06",
      "text": "US forces conducted strikes on Iranian infrastructure, including Kharg Island, prior to the ceasefire agreement.",
      "severity": "warning",
      "latestSinceUpdate": 11
    },
    {
      "date": "Apr 07",
      "text": "An Israeli strike killed a Christian party official in Lebanon, exacerbating internal divides over Hezbollah.",
      "severity": "warning",
      "latestSinceUpdate": 11
    },
    {
      "date": "Apr 06",
      "text": "Lebanon’s Hezbollah and Yemen’s Houthis reportedly joined Iran in strikes on Israel.",
      "severity": "critical",
      "latestSinceUpdate": 11
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
