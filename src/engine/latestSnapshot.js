export const LATEST_SNAPSHOT = Object.freeze({
  "lastUpdated": "2026-04-07",
  "warDay": 38,
  "summary": "The US and Israel have conducted strikes on Iranian infrastructure, prompting Iran to warn of retaliation, while Trump has issued an ultimatum amidst escalating regional conflict involving proxies and concerns over the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-04-07",
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.95
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 63
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
      "text": "Trump threatens 'a whole civilization will die tonight' ahead of Iran deadline.",
      "severity": "critical"
    },
    {
      "date": "Apr 07",
      "text": "US and Israeli forces strike Iranian infrastructure, including Kharg Island and AI learning facilities.",
      "severity": "critical"
    },
    {
      "date": "Apr 07",
      "text": "Iran warns of 'devastating' retaliation after Trump's threats and US-Israeli strikes.",
      "severity": "critical"
    },
    {
      "date": "Apr 07",
      "text": "Lebanon’s Hezbollah and Yemen’s Houthis join Iran in strikes on Israel.",
      "severity": "warning"
    },
    {
      "date": "Apr 07",
      "text": "Brent Oil slides as concerns rise over the Strait of Hormuz, with Pakistan urging its opening.",
      "severity": "warning"
    },
    {
      "date": "Apr 07",
      "text": "IDF admits overestimating damage to Hezbollah, believes Iran can sustain missile fire.",
      "severity": "info"
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
      "perspective": "US/Israel Stance",
      "headline": "Trump's Ultimatum and Strikes on Iran",
      "summary": "The US, backed by Israel, has issued a severe ultimatum to Iran, conducting strikes on key infrastructure including Kharg Island. This aggressive posture aims to counter Iran's progress and military capabilities, with threats of widespread destruction if demands are not met.",
      "tone": "defiant"
    },
    {
      "perspective": "Iranian/Allies Response",
      "headline": "Iran Vows Retaliation Amidst Proxy Support",
      "summary": "Iran has rejected a temporary ceasefire and warned of 'devastating' retaliation following US-Israeli attacks. Regional allies like Hezbollah and the Houthis have joined in strikes against Israel, signaling a unified front against perceived aggression.",
      "tone": "defiant"
    },
    {
      "perspective": "Global/Economic Impact",
      "headline": "Strait of Hormuz Tensions Escalate Oil Concerns",
      "summary": "The escalating conflict, particularly around the Strait of Hormuz, is causing significant global concern, impacting oil prices. International calls for de-escalation highlight the potential for broader economic disruption and regional instability.",
      "tone": "anxious"
    }
  ]
});

export default LATEST_SNAPSHOT;
