export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 7,
  "lastUpdated": "2026-04-07",
  "lastSyncedAt": "2026-04-07T23:55:42.778Z",
  "warDay": 39,
  "summary": "Trump has agreed to a two-week ceasefire with Iran, contingent on the reopening of the Strait of Hormuz, amidst ongoing US-Israeli strikes on Iranian infrastructure and regional involvement by Hezbollah and Houthis.",
  "lastNarrativeUpdate": "2026-04-07",
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.65
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.88,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 63
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.78
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
      "text": "Trump agrees to two-week ceasefire with Iran, subject to Strait of Hormuz reopening.",
      "severity": "info",
      "latestSinceUpdate": 7
    },
    {
      "date": "Apr 07",
      "text": "US-Israeli forces conduct strikes on Iranian infrastructure, including Kharg Island.",
      "severity": "warning",
      "latestSinceUpdate": 6
    },
    {
      "date": "Apr 07",
      "text": "Hezbollah and Houthis join Iran in strikes against Israel.",
      "severity": "critical",
      "latestSinceUpdate": 7
    },
    {
      "date": "Apr 07",
      "text": "Israeli strike kills Christian party official in Lebanon, deepening regional divides.",
      "severity": "warning",
      "latestSinceUpdate": 7
    },
    {
      "date": "Apr 07",
      "text": "UN chief expresses concern over 'incendiary rhetoric' as deal deadline approaches.",
      "severity": "info",
      "latestSinceUpdate": 7
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
      "perspective": "US/Israel Stance",
      "headline": "Trump's Ultimatum and Strikes on Iran",
      "summary": "The US, backed by Israel, has issued a severe ultimatum to Iran, conducting strikes on key infrastructure including Kharg Island. This aggressive posture aims to counter Iran's progress and military capabilities, with threats of widespread destruction if demands are not met.",
      "tone": "defiant",
      "latestSinceUpdate": 1
    },
    {
      "perspective": "Iranian/Allies Response",
      "headline": "Iran Vows Retaliation Amidst Proxy Support",
      "summary": "Iran has rejected a temporary ceasefire and warned of 'devastating' retaliation following US-Israeli attacks. Regional allies like Hezbollah and the Houthis have joined in strikes against Israel, signaling a unified front against perceived aggression.",
      "tone": "defiant",
      "latestSinceUpdate": 1
    },
    {
      "perspective": "Global/Economic Impact",
      "headline": "Strait of Hormuz Tensions Escalate Oil Concerns",
      "summary": "The escalating conflict, particularly around the Strait of Hormuz, is causing significant global concern, impacting oil prices. International calls for de-escalation highlight the potential for broader economic disruption and regional instability.",
      "tone": "anxious",
      "latestSinceUpdate": 1
    }
  ]
});

export default LATEST_SNAPSHOT;
