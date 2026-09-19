export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2452,
  "lastUpdated": "2026-09-19",
  "lastSyncedAt": "2026-09-19T21:30:39.333Z",
  "warDay": 204,
  "summary": "The ongoing conflict in the Middle East continues to be the primary focus for international observers.",
  "lastNarrativeUpdate": "2026-09-19",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or de-escalation agreement is currently in effect."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 55
      },
      "behavior": {
        "precision": 0.3,
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 65,
    "oilDisruption": 70,
    "tradeImpact": 62,
    "sanctionsPressure": 60,
    "globalPressure": 74,
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
      "perspective": "US/Western Critical",
      "headline": "US Losing Iran War, Facing War Crimes Allegations",
      "summary": "Reports indicate the U.S. is losing the Iran war by nearly every metric, with troop deaths exceeding official counts. Investigations into US-Israeli strikes on Tehran reveal devastating civilian harm, leading to a U.N. report suggesting potential U.S. war crimes.",
      "tone": "anxious",
      "latestSinceUpdate": 2446
    },
    {
      "perspective": "Iran/Allies Defiant",
      "headline": "Iran Strikes US Targets, Houthis Emerge as 'New Hezbollah'",
      "summary": "Iran claims strikes on an oil tanker in the Strait of Hormuz and has damaged hundreds of US military buildings and dozens of aircraft. The Houthis are described as a powerful 'new Hezbollah,' indicating growing regional proxy strength.",
      "tone": "defiant",
      "latestSinceUpdate": 2446
    },
    {
      "perspective": "US Administration",
      "headline": "Trump Considers Escalation, Threatens Annihilation",
      "summary": "President Trump is weighing a return to large-scale Iran strikes, stating he has a 'big decision coming up.' He has also threatened to 'annihilate' the Iranian regime, signaling a potential for significant escalation.",
      "tone": "defiant",
      "latestSinceUpdate": 2446
    },
    {
      "perspective": "Regional Stability (Lebanon/Israel)",
      "headline": "Hezbollah Weakening Amid IDF Operations and Normalization Talks",
      "summary": "The IDF has captured the Ali Taher Ridge in southern Lebanon, coinciding with reports of Hezbollah's weakening. Discussions around a fragile path to Israel-Lebanon normalization are ongoing, despite regional tensions.",
      "tone": "strained",
      "latestSinceUpdate": 2446
    }
  ]
});

export default LATEST_SNAPSHOT;
