export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1255,
  "lastUpdated": "2026-07-11",
  "lastSyncedAt": "2026-07-11T21:26:17.169Z",
  "warDay": 134,
  "summary": "International observers remain focused on the ongoing conflict in the Middle East.",
  "lastNarrativeUpdate": "2026-07-11",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 2,
    "summary": "No active ceasefire or de-escalation efforts are currently reported in the region."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.4
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 65,
    "oilDisruption": 50,
    "tradeImpact": 48,
    "sanctionsPressure": 60,
    "globalPressure": 70,
    "allianceInfluence": 46
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
      "date": "Jul 11",
      "text": "The conflict in the Middle East continues to be the primary focus of international attention.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "General Assessment",
      "latestSinceUpdate": 1255
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "no recent items"
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
      "perspective": "United States",
      "headline": "US Demands Open Strait, Continues Negotiations Amid Strikes",
      "summary": "The US maintains its right to respond to Iranian aggression while seeking to continue negotiations and ensure freedom of navigation in the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 1241
    },
    {
      "perspective": "Iran",
      "headline": "Iran Retaliates, Mourns Leader, Defies US Demands",
      "summary": "Iran asserts its right to retaliate against US strikes, mourns its leader, and views US demands as provocative amidst ongoing conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 1241
    },
    {
      "perspective": "Israel",
      "headline": "Israel Targets Hezbollah, Signals Readiness for Iran Action",
      "summary": "Israel continues its operations against Hezbollah in Lebanon and signals readiness to act against Iran, viewing the ceasefire's collapse as a critical development.",
      "tone": "anxious",
      "latestSinceUpdate": 1241
    }
  ]
});

export default LATEST_SNAPSHOT;
