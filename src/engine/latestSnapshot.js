export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1430,
  "lastUpdated": "2026-07-23",
  "lastSyncedAt": "2026-07-23T18:53:11.060Z",
  "warDay": 146,
  "summary": "The Middle East continues to be the focal point of international attention due to ongoing conflict.",
  "lastNarrativeUpdate": "2026-07-23",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
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
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 70,
    "oilDisruption": 75,
    "tradeImpact": 67,
    "sanctionsPressure": 65,
    "globalPressure": 82,
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
      "perspective": "US Stance",
      "headline": "US warns Iran on Hormuz, continues strikes",
      "summary": "US officials warn Iran's demands over the Strait of Hormuz are a dangerous precedent, while the US continues military strikes and threatens further heavy attacks in response to Iranian actions and troop deaths.",
      "tone": "defiant",
      "latestSinceUpdate": 1422
    },
    {
      "perspective": "Iranian Actions",
      "headline": "Iran continues attacks, avoids Israel",
      "summary": "Iran continues its attacks and makes demands regarding the Strait of Hormuz, while reportedly avoiding direct attacks on Israel due to fears of retaliatory strikes on its leadership.",
      "tone": "defiant",
      "latestSinceUpdate": 1422
    },
    {
      "perspective": "Regional Stability",
      "headline": "Lebanese army deploys in pilot zone",
      "summary": "The Lebanese army has deployed in a southern 'pilot zone' following an Israeli withdrawal, indicating a localized de-escalation in that specific area amidst broader regional tensions.",
      "tone": "strained",
      "latestSinceUpdate": 1422
    }
  ]
});

export default LATEST_SNAPSHOT;
