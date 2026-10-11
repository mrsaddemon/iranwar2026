export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2568,
  "lastUpdated": "2026-10-11",
  "lastSyncedAt": "2026-10-11T22:47:01.857Z",
  "warDay": 226,
  "summary": "The conflict involving Iran continues with intensified attacks in the Strait of Hormuz, a deadly attack on Riyadh airport, and increased US military readiness and casualties, while Israel conducts operations against Hezbollah.",
  "lastNarrativeUpdate": "2026-10-11",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 3,
    "summary": "No active ceasefire or de-escalation efforts are currently reported amidst ongoing hostilities."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 64,
    "globalPressure": 82,
    "allianceInfluence": 51
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
      "date": "Oct 10",
      "text": "12 killed in an attack on Riyadh airport, according to Saudi authorities.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/placeholder",
      "sourceName": "Google News",
      "latestSinceUpdate": 2568
    },
    {
      "date": "Oct 10",
      "text": "US military ordered to be ready for possible Iran strikes as Trump weighs timing.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/placeholder",
      "sourceName": "Google News",
      "latestSinceUpdate": 2568
    },
    {
      "date": "Oct 10",
      "text": "Hormuz attacks intensify as efforts to end war on Iran stall, leading to high pay for transit crews.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/placeholder",
      "sourceName": "Google News",
      "latestSinceUpdate": 2568
    },
    {
      "date": "Oct 10",
      "text": "US strikes merchant vessel in Gulf of Oman while enforcing Iran blockade.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/placeholder",
      "sourceName": "Google News",
      "latestSinceUpdate": 2568
    },
    {
      "date": "Oct 10",
      "text": "Pentagon raises official toll of US troops who died during war with Iran to 21.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/placeholder",
      "sourceName": "Google News",
      "latestSinceUpdate": 2568
    },
    {
      "date": "Oct 10",
      "text": "US military says it disabled a cargo vessel trying to run the Iran blockade.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/placeholder",
      "sourceName": "Google News",
      "latestSinceUpdate": 2568
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
      "perspective": "US War Posture",
      "headline": "US Prepares for 'Massive Bombing' Amid Rising Casualties",
      "summary": "The US is reportedly preparing for 'massive bombing' against Iran, with military forces on alert, while also pushing Israel for independent operations, amidst rising US casualties and significant military costs.\nThis indicates a potential escalation of direct US military involvement.",
      "tone": "anxious",
      "latestSinceUpdate": 2564
    },
    {
      "perspective": "Iranian Resistance & Regional Impact",
      "headline": "Iran Chokes Hormuz, Strikes Riyadh Amid Escalating Conflict",
      "summary": "Iran is actively engaged in the conflict, with attacks on Riyadh and efforts to disrupt oil exports through the Strait of Hormuz, leading to high shipping risks and increased energy prices.\nThis highlights Iran's strategy to exert pressure through regional actions and economic disruption.",
      "tone": "defiant",
      "latestSinceUpdate": 2564
    },
    {
      "perspective": "Regional Instability",
      "headline": "Israel's Expanding Footprint Fuels Regional Volatility",
      "summary": "The broader region remains volatile, with Israeli military actions in Lebanon and internal security concerns regarding Hezbollah, indicating an expanding and costly conflict footprint.\nThis suggests a widening scope of conflict beyond direct US-Iran engagements.",
      "tone": "strained",
      "latestSinceUpdate": 2564
    }
  ]
});

export default LATEST_SNAPSHOT;
