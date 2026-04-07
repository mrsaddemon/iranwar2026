export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 6,
  "lastUpdated": "2026-04-07",
  "lastSyncedAt": "2026-04-07T23:09:20.260Z",
  "warDay": 39,
  "summary": "A two-week ceasefire has been agreed upon between the US and Iran, contingent on Iran opening the Strait of Hormuz, following US-Israeli strikes and threats amidst ongoing regional conflict involving proxies.",
  "lastNarrativeUpdate": "2026-04-07",
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
        "militaryPower": 85
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
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 80,
    "oilDisruption": 75
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
      "text": "Trump issues threat to 'wipe out a whole civilization' against Iran.",
      "severity": "critical",
      "latestSinceUpdate": 6
    },
    {
      "date": "Apr 07",
      "text": "Trump agrees to a two-week ceasefire with Iran to negotiate a 10-point peace deal.",
      "severity": "info",
      "latestSinceUpdate": 6
    },
    {
      "date": "Apr 07",
      "text": "US-Israeli forces conduct strikes on Iranian infrastructure, including Kharg Island.",
      "severity": "warning",
      "latestSinceUpdate": 6
    },
    {
      "date": "Apr 07",
      "text": "Hezbollah and Houthi forces join Iran in strikes against Israel.",
      "severity": "warning",
      "latestSinceUpdate": 6
    },
    {
      "date": "Apr 07",
      "text": "Ceasefire agreement is made conditional on Iran opening the Strait of Hormuz.",
      "severity": "info",
      "latestSinceUpdate": 6
    },
    {
      "date": "Apr 07",
      "text": "UN chief decries 'incendiary rhetoric' amid escalating threats.",
      "severity": "info",
      "latestSinceUpdate": 6
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
