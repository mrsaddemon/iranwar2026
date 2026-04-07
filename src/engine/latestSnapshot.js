export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 5,
  "lastUpdated": "2026-04-07",
  "lastSyncedAt": "2026-04-07T22:24:48.686Z",
  "warDay": 39,
  "summary": "A direct conflict between the US and Iran is escalating, with US-Israeli strikes on Iranian infrastructure, threats regarding the Strait of Hormuz, and regional allies like Hezbollah and Houthis joining Iran in strikes against Israel.",
  "lastNarrativeUpdate": "2026-04-07",
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.95
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 70,
    "escalationLevel": 90,
    "oilDisruption": 95
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
      "text": "US President Trump threatens 'a whole civilization will die tonight' ahead of his Iran deadline.",
      "severity": "critical",
      "latestSinceUpdate": 5
    },
    {
      "date": "Apr 07",
      "text": "US-Israeli forces conduct strikes targeting Iranian infrastructure, including facilities related to AI learning.",
      "severity": "critical",
      "latestSinceUpdate": 5
    },
    {
      "date": "Apr 07",
      "text": "Iran maintains its stance on controlling the Strait of Hormuz amidst US demands for its reopening.",
      "severity": "warning",
      "latestSinceUpdate": 5
    },
    {
      "date": "Apr 07",
      "text": "Lebanon’s Hezbollah and Yemen’s Houthis join Iran in launching strikes against Israel.",
      "severity": "critical",
      "latestSinceUpdate": 4
    },
    {
      "date": "Apr 07",
      "text": "US military strikes targets on Iran's Kharg Island.",
      "severity": "critical",
      "latestSinceUpdate": 5
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
