export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1141,
  "lastUpdated": "2026-07-02",
  "lastSyncedAt": "2026-07-02T20:10:30.606Z",
  "warDay": 125,
  "summary": "The ongoing conflict in the Middle East remains the primary focus of international observers.",
  "lastNarrativeUpdate": "2026-07-02",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 5,
    "summary": "No active ceasefire or de-escalation agreement is currently reported."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
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
    "nuclearIndex": 10,
    "escalationLevel": 70,
    "oilDisruption": 55,
    "tradeImpact": 52,
    "sanctionsPressure": 65,
    "globalPressure": 79,
    "allianceInfluence": 68
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [],
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
      "perspective": "US/Allies",
      "headline": "Diplomacy Stalls Amidst Retaliatory Strikes",
      "summary": "The US continues diplomatic efforts in Doha to de-escalate tensions and secure shipping routes in the Strait of Hormuz, while responding to Iranian military actions. Efforts are also underway with Gulf allies to establish alternative shipping routes.",
      "tone": "strained",
      "latestSinceUpdate": 1133
    },
    {
      "perspective": "Iran",
      "headline": "Sovereignty and Readiness for Conflict",
      "summary": "Iran asserts its control over the Strait of Hormuz, rejecting external intervention, and declares readiness for war while engaging in talks. The Revolutionary Guards claim successful retaliatory strikes against US military sites.",
      "tone": "defiant",
      "latestSinceUpdate": 1133
    },
    {
      "perspective": "Regional Stability",
      "headline": "Escalation Risk High as Talks Fail",
      "summary": "The failure of Doha talks to achieve a breakthrough, coupled with continued military engagements involving the US, Iran, and Israel, signals a high risk of further regional escalation. The situation in the Strait of Hormuz remains a critical flashpoint.",
      "tone": "anxious",
      "latestSinceUpdate": 1133
    }
  ]
});

export default LATEST_SNAPSHOT;
