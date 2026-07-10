export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1236,
  "lastUpdated": "2026-07-10",
  "lastSyncedAt": "2026-07-10T19:06:38.050Z",
  "warDay": 133,
  "summary": "The conflict in the Middle East continues to be a primary focus for international observers.",
  "lastNarrativeUpdate": "2026-07-10",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 2,
    "summary": "No active ceasefire or truce is currently reported in the region."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.65
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 65,
    "oilDisruption": 40,
    "tradeImpact": 41,
    "sanctionsPressure": 64,
    "globalPressure": 74,
    "allianceInfluence": 73
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
      "perspective": "US/Western",
      "headline": "Ceasefire Collapse",
      "summary": "Trump suggests the ceasefire is 'over' as the US renews strikes on Iran, with Tehran firing back at Gulf Arab states. This indicates a breakdown of previous de-escalation efforts and a return to direct conflict.",
      "tone": "strained",
      "latestSinceUpdate": 1229
    },
    {
      "perspective": "Iranian",
      "headline": "Retaliation & Resilience",
      "summary": "Iran vows retaliation and claims to have hit US military targets in the Gulf, amidst reports of explosions across its southern regions. The burial of slain leader Khamenei also occurs during this period of heightened conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 1229
    },
    {
      "perspective": "Israeli",
      "headline": "Northern Border Security",
      "summary": "Israel asserts its intent to remain in the Lebanon security zone until Hezbollah is disarmed, actively destroying tunnels and hunting militants. This highlights ongoing efforts to secure its northern border against perceived threats.",
      "tone": "defiant",
      "latestSinceUpdate": 1229
    },
    {
      "perspective": "Regional Stability",
      "headline": "Escalation Concerns",
      "summary": "Reports suggest tanker attacks risk reigniting a wider war, and the Lebanese army is deemed unlikely to effectively eliminate Hezbollah. This indicates persistent regional instability and a high potential for further escalation.",
      "tone": "anxious",
      "latestSinceUpdate": 1229
    }
  ]
});

export default LATEST_SNAPSHOT;
