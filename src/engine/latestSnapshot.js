export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1486,
  "lastUpdated": "2026-07-27",
  "lastSyncedAt": "2026-07-27T15:00:00.000Z",
  "warDay": 150,
  "summary": "Ongoing conflict in the Middle East remains the primary focus of international observers.",
  "lastNarrativeUpdate": "2026-07-27",
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
      "perspective": "US/Trump",
      "headline": "Trump's Stance on Iran War",
      "summary": "President Trump has paused strikes against Iran for two days, denying munitions shortages while threatening major escalation if necessary. He faces pressure from allies like Israel to resume action.",
      "tone": "strained",
      "latestSinceUpdate": 1482
    },
    {
      "perspective": "Iran",
      "headline": "Iran's Defiant Posture Amidst Pause",
      "summary": "Iran threatens to expand the war if US strikes resume, praising Hezbollah and calling for continued jihad against Israel. Iranian media reports an oil tanker explosion in the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 1482
    },
    {
      "perspective": "Israel",
      "headline": "Israel's Push for US Escalation",
      "summary": "Israel believes the US will soon be forced to escalate strikes against Iran despite the current pause, while obstructing Hezbollah's takeover of pilot zones in Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 1482
    }
  ]
});

export default LATEST_SNAPSHOT;
