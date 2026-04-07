export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2,
  "lastUpdated": "2026-04-07",
  "warDay": 38,
  "summary": "Amidst a US deadline for Iran, US-Israeli forces have conducted strikes on Iranian infrastructure, while Iran, supported by regional proxies, continues to reject threats and engage in hostilities.",
  "lastNarrativeUpdate": "2026-04-07",
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 75,
    "escalationLevel": 90,
    "oilDisruption": 85
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
      "text": "Trump's deadline for Iran approaches, with threats of severe consequences if unmet.",
      "severity": "critical",
      "latestSinceUpdate": 2
    },
    {
      "date": "Apr 07",
      "text": "US-Israeli forces conducted strikes on Iranian infrastructure, including Kharg Island.",
      "severity": "warning",
      "latestSinceUpdate": 2
    },
    {
      "date": "Apr 07",
      "text": "Hezbollah and Houthis joined Iran in strikes against Israel.",
      "severity": "warning",
      "latestSinceUpdate": 2
    },
    {
      "date": "Apr 07",
      "text": "Brent oil slides as Pakistan urges Iran to open the Strait of Hormuz.",
      "severity": "info",
      "latestSinceUpdate": 2
    },
    {
      "date": "Apr 07",
      "text": "An Israeli strike killed a Christian party official in Lebanon, exacerbating internal divides.",
      "severity": "warning",
      "latestSinceUpdate": 2
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
