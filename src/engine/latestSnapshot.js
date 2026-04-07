export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 4,
  "lastUpdated": "2026-04-07",
  "lastSyncedAt": "2026-04-07T21:57:49.144Z",
  "warDay": 39,
  "summary": "The Middle East conflict intensifies on Day 39 with US-Israeli strikes on Iranian infrastructure, Iran's rejection of a ceasefire, and a looming deadline from President Trump.",
  "lastNarrativeUpdate": "2026-04-07",
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.95
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.88
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
    "escalationLevel": 93,
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
      "date": "Apr 07",
      "text": "President Trump issues an ultimatum to Iran, threatening severe consequences if demands are not met by tonight's deadline.",
      "severity": "critical",
      "latestSinceUpdate": 4
    },
    {
      "date": "Apr 07",
      "text": "US and Israeli forces conduct strikes on Iranian infrastructure, including military targets on Kharg Island.",
      "severity": "critical",
      "latestSinceUpdate": 4
    },
    {
      "date": "Apr 07",
      "text": "Iran rejects a 45-day ceasefire proposal amidst escalating conflict.",
      "severity": "warning",
      "latestSinceUpdate": 4
    },
    {
      "date": "Apr 07",
      "text": "Lebanon’s Hezbollah and Yemen’s Houthis join Iran in launching strikes against Israel.",
      "severity": "critical",
      "latestSinceUpdate": 4
    },
    {
      "date": "Apr 06",
      "text": "Russia and China block a UN resolution concerning the Strait of Hormuz.",
      "severity": "info",
      "latestSinceUpdate": 4
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
