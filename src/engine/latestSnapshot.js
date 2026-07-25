export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1449,
  "lastUpdated": "2026-07-25",
  "lastSyncedAt": "2026-07-25T01:13:50.722Z",
  "warDay": 148,
  "summary": "The ongoing conflict in the Middle East remains the primary focus of international observers on War Day 148.",
  "lastNarrativeUpdate": "2026-07-25",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No active ceasefire or de-escalation efforts are currently reported."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
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
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 75,
    "oilDisruption": 65,
    "tradeImpact": 60,
    "sanctionsPressure": 62,
    "globalPressure": 76,
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
      "date": "Jul 25",
      "text": "International observers continue to monitor the ongoing conflict in the Middle East.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "International Observers",
      "latestSinceUpdate": 1449
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
      "perspective": "International Focus",
      "headline": "Middle East Conflict Dominates Global Attention",
      "summary": "The protracted conflict in the Middle East continues to draw significant international attention, with observers monitoring developments closely. The ongoing situation underscores regional instability and its broader implications.",
      "tone": "neutral",
      "latestSinceUpdate": 1449
    }
  ]
});

export default LATEST_SNAPSHOT;
