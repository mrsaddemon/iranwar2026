export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1546,
  "lastUpdated": "2026-08-01",
  "lastSyncedAt": "2026-08-01T04:40:50.840Z",
  "warDay": 155,
  "summary": "The conflict in the Middle East continues to be the primary focus of international attention.",
  "lastNarrativeUpdate": "2026-08-01",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 21,
    "summary": "No active ceasefire or de-escalation efforts are currently reported."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 70,
    "oilDisruption": 60,
    "tradeImpact": 56,
    "sanctionsPressure": 65,
    "globalPressure": 80,
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
      "perspective": "US/Israel",
      "headline": "US and Israel Intensify Strikes on Iran, Target Hezbollah",
      "summary": "The US is planning and executing fresh, heavy strikes on Iran, often in coordination with Israel, while also targeting Hezbollah infrastructure. President Trump is reportedly pressuring Israel regarding a Hamas disarmament deal amidst the widening conflict.",
      "tone": "strained",
      "latestSinceUpdate": 1545
    },
    {
      "perspective": "Iran",
      "headline": "Iran Vows Retaliation, Threatens Hormuz Passage Amid US Strikes",
      "summary": "Iran has vowed to make the US 'pay the price' for civilian casualties and has responded to US strikes by attacking tankers in the Strait of Hormuz, declaring passage 'not feasible.' Iranian leadership urges citizens to stand firm against the enemy as strikes intensify.",
      "tone": "defiant",
      "latestSinceUpdate": 1545
    },
    {
      "perspective": "Regional Impact",
      "headline": "Hezbollah Adapts Tactics as Regional Conflict Widens",
      "summary": "Hezbollah is increasingly employing FPV drones, requiring Israeli overmatch, while the IDF continues to destroy its tunnel networks in South Lebanon. Iraq has denied prior knowledge of US-Saudi attacks, highlighting the complex regional dynamics of the escalating conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 1545
    }
  ]
});

export default LATEST_SNAPSHOT;
