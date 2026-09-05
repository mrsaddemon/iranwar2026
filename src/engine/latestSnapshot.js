export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2351,
  "lastUpdated": "2026-09-05",
  "lastSyncedAt": "2026-09-05T12:59:57.082Z",
  "warDay": 190,
  "summary": "The Middle East continues to be characterized by ongoing conflict, drawing international attention.",
  "lastNarrativeUpdate": "2026-09-05",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or formal truce is currently reported in the region."
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
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 70,
    "oilDisruption": 75,
    "tradeImpact": 67,
    "sanctionsPressure": 61,
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
      "perspective": "US/Trump Administration",
      "headline": "Trump asserts strong stance against Iran, preventing energy crisis",
      "summary": "The Trump administration claims its military actions and diplomacy have prevented a wider energy crisis during the Iran conflict. President Trump has threatened further strikes and suggested renaming the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 2348
    },
    {
      "perspective": "Iran",
      "headline": "Iran retaliates for US strikes, seeks to break Hormuz stalemate",
      "summary": "Iran views its recent actions, including firing on Gulf neighbors, as retaliation for US strikes, particularly after a wedding was reportedly hit. Iran aims to challenge and break the current stalemate in the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 2348
    },
    {
      "perspective": "Regional/International Concern",
      "headline": "Fears of renewed war and shipping disruption grow",
      "summary": "International observers express significant concern over escalating US-Iran hostilities, the impact on critical Gulf shipping routes, and the ongoing Israel-Hezbollah conflict. Some nations, like South Korea, are pushing back against calls for military deployment.",
      "tone": "anxious",
      "latestSinceUpdate": 2348
    }
  ]
});

export default LATEST_SNAPSHOT;
