export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1118,
  "lastUpdated": "2026-06-30",
  "lastSyncedAt": "2026-06-30T14:46:09.017Z",
  "warDay": 123,
  "summary": "The Middle East continues to be characterized by ongoing conflict, drawing significant international attention.",
  "lastNarrativeUpdate": "2026-06-30",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 2,
    "summary": "No active ceasefire or de-escalation efforts are currently reported."
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
        "precision": 0.85,
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
    "nuclearIndex": 10,
    "escalationLevel": 65,
    "oilDisruption": 40,
    "tradeImpact": 41,
    "sanctionsPressure": 60,
    "globalPressure": 68,
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
      "perspective": "US/Western Perspective",
      "headline": "US pushes for talks while responding to Iranian strikes",
      "summary": "The US seeks to de-escalate tensions through technical talks in Qatar, despite recent tit-for-tat strikes and Iranian claims of targeting US sites. Washington maintains that talks will continue.",
      "tone": "strained",
      "latestSinceUpdate": 1114
    },
    {
      "perspective": "Iranian Perspective",
      "headline": "Iran claims successful strikes and threatens talks amid US pressure",
      "summary": "Iran's Revolutionary Guards claim to have destroyed US military sites, while Tehran threatens to halt talks after US strikes. Iran views the Strait of Hormuz situation as sensitive and complex.",
      "tone": "defiant",
      "latestSinceUpdate": 1114
    },
    {
      "perspective": "Israeli/Hezbollah Perspective",
      "headline": "Israel acts against Hezbollah as regional tensions rise",
      "summary": "Israel has destroyed Hezbollah infrastructure and warns of potential war resumption, while Hezbollah rejects US-brokered security deals as a surrender.",
      "tone": "anxious",
      "latestSinceUpdate": 1114
    }
  ]
});

export default LATEST_SNAPSHOT;
