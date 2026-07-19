export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1366,
  "lastUpdated": "2026-07-19",
  "lastSyncedAt": "2026-07-19T04:29:49.385Z",
  "warDay": 142,
  "summary": "The Middle East conflict continues, remaining a central focus for international observers.",
  "lastNarrativeUpdate": "2026-07-19",
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
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
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
    "nuclearIndex": 10,
    "escalationLevel": 65,
    "oilDisruption": 55,
    "tradeImpact": 51,
    "sanctionsPressure": 60,
    "globalPressure": 71,
    "allianceInfluence": 46
  },
  "alliance": {
    "russiaIntelSupport": false,
    "chinaEconomicSupport": false,
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
      "headline": "US Retaliates Against Iran for Troop Deaths and Maritime Attacks",
      "summary": "The United States is conducting sustained retaliatory strikes against Iran to punish for the killing of American troops and deter further aggression. Concurrently, the US is addressing Iranian maritime threats in the Strait of Hormuz by revoking oil sales permits.",
      "tone": "defiant",
      "latestSinceUpdate": 1365
    },
    {
      "perspective": "Iranian",
      "headline": "Iran Prepares for Wider Conflict Amid US Strikes and Regional Tensions",
      "summary": "Iran is escalating its actions in response to perceived aggression, including attacks on shipping and preparing regional allies for a broader confrontation with the US and Israel. This comes as the US launches multiple nights of strikes against Iranian targets.",
      "tone": "defiant",
      "latestSinceUpdate": 1365
    },
    {
      "perspective": "Regional (Israel/Hezbollah)",
      "headline": "Israel Intensifies Strikes in Southern Lebanon Amid Border Escalation",
      "summary": "Israel is actively engaging Hezbollah targets in southern Lebanon, responding to drone incursions and planted explosives, and has destroyed infrastructure. This indicates a heightened state of conflict along the border, with potential for wider regional involvement.",
      "tone": "strained",
      "latestSinceUpdate": 1365
    }
  ]
});

export default LATEST_SNAPSHOT;
