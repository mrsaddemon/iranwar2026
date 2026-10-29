export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2671,
  "lastUpdated": "2026-10-29",
  "lastSyncedAt": "2026-10-29T20:32:05.969Z",
  "warDay": 244,
  "summary": "The Middle East conflict continues to be the primary focus of international attention on War Day 244.",
  "lastNarrativeUpdate": "2026-10-29",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire or de-escalation agreement is currently in effect."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 75,
    "oilDisruption": 70,
    "tradeImpact": 64,
    "sanctionsPressure": 62,
    "globalPressure": 77,
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
      "perspective": "Iran's Stance",
      "headline": "Tehran Engages in Hormuz Diplomacy Amidst Energy Shock Warnings",
      "summary": "Iran is actively discussing a plan with mediators to end the war and reopen the Strait of Hormuz. Concurrently, Tehran has issued warnings of a potential global energy shock if Israel escalates its actions.",
      "tone": "strained",
      "latestSinceUpdate": 2668
    },
    {
      "perspective": "US Perspective",
      "headline": "US Warns of War Renewal, Faces Mounting Costs",
      "summary": "The United States has warned Gulf nations of a possible short, intense renewal of the Iran War following midterms. The Pentagon estimates the ongoing conflict has already cost the US military over $47 billion.",
      "tone": "anxious",
      "latestSinceUpdate": 2668
    },
    {
      "perspective": "Regional Diplomacy",
      "headline": "Gulf States Pursue Peace Deal to Avert Escalation",
      "summary": "Gulf states are actively engaged in developing a multipart peace deal aimed at preventing a renewed US-Iran conflict. This diplomatic push occurs as regional tensions remain high, with Egypt also involved in the Saudi-Houthi conflict.",
      "tone": "neutral",
      "latestSinceUpdate": 2668
    },
    {
      "perspective": "Hezbollah's Readiness",
      "headline": "Hezbollah Prepares for Regional Conflict with Iranian Support",
      "summary": "Hezbollah is reportedly preparing for a new regional war, with sources indicating financial support from Iran. The group's leadership has stated indifference to who governs Israel, signaling continued regional instability.",
      "tone": "defiant",
      "latestSinceUpdate": 2668
    }
  ]
});

export default LATEST_SNAPSHOT;
