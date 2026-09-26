export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2496,
  "lastUpdated": "2026-09-26",
  "lastSyncedAt": "2026-09-26T23:48:52.321Z",
  "warDay": 211,
  "summary": "An ongoing conflict in the Middle East continues to be the primary focus of international observers.",
  "lastNarrativeUpdate": "2026-09-26",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire or truce reported."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 70,
    "oilDisruption": 65,
    "tradeImpact": 59,
    "sanctionsPressure": 61,
    "globalPressure": 75,
    "allianceInfluence": 51
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
      "perspective": "Iran",
      "headline": "Tehran Seeks Dialogue Amidst Hormuz Proposals and Escalation Warnings",
      "summary": "Iran is actively pursuing diplomatic solutions, with its President addressing the UN General Assembly and proposing a deal to reopen the Strait of Hormuz if US military pressure is eased. Concurrently, Tehran warns of potential escalation to the Indian Ocean should further US or Israeli strikes occur.",
      "tone": "strained",
      "latestSinceUpdate": 2484
    },
    {
      "perspective": "Israel",
      "headline": "Israel Ready to Resume Strikes, Defends Actions Amidst Nuclear Concerns",
      "summary": "Israel maintains its readiness to resume strikes on Iran, citing the regime's efforts to rebuild its nuclear program and defending previous joint operations. These actions, however, are under investigation for civilian harm in Tehran neighborhoods.",
      "tone": "defiant",
      "latestSinceUpdate": 2484
    },
    {
      "perspective": "USA",
      "headline": "US Engages in Diplomacy While Adapting Military Operations",
      "summary": "The US is involved in discussions with Iran for a phased deal regarding the Strait of Hormuz, indicating a diplomatic track. Simultaneously, the US military is adapting its AI and targeting processes after a school strike in Iran and has identified its 19th service member casualty in the ongoing conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 2484
    }
  ]
});

export default LATEST_SNAPSHOT;
