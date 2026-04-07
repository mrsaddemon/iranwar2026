export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 3,
  "lastUpdated": "2026-04-07",
  "lastSyncedAt": "2026-04-07T21:28:12.272Z",
  "warDay": 39,
  "summary": "The conflict involving Iran, Israel, and the US has intensified with direct US-Israeli strikes on Iranian infrastructure, Iran's rejection of a US ultimatum, and joint retaliatory actions by Iran, Hezbollah, and Houthis against Israel, amidst rising tensions in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-04-07",
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
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
    "nuclearIndex": 65,
    "escalationLevel": 85,
    "oilDisruption": 80
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Apr 07",
      "text": "US President issues an ultimatum to Iran, threatening severe consequences if demands are not met.",
      "severity": "critical",
      "latestSinceUpdate": 3
    },
    {
      "date": "Apr 07",
      "text": "US-Israeli forces conduct strikes on Iranian infrastructure, including Kharg Island and AI learning facilities.",
      "severity": "critical",
      "latestSinceUpdate": 3
    },
    {
      "date": "Apr 07",
      "text": "Iran, Hezbollah, and Yemen's Houthis launch joint strikes against Israel.",
      "severity": "critical",
      "latestSinceUpdate": 3
    },
    {
      "date": "Apr 07",
      "text": "Iran rejects a temporary ceasefire proposal amidst escalating tensions.",
      "severity": "warning",
      "latestSinceUpdate": 3
    },
    {
      "date": "Apr 07",
      "text": "Russia and China block a UN resolution concerning the Strait of Hormuz.",
      "severity": "info",
      "latestSinceUpdate": 3
    },
    {
      "date": "Apr 07",
      "text": "An Israeli strike kills a Christian party official in Lebanon, further escalating regional divides.",
      "severity": "warning",
      "latestSinceUpdate": 3
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
