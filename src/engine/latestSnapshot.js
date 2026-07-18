export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1351,
  "lastUpdated": "2026-07-18",
  "lastSyncedAt": "2026-07-18T09:49:06.027Z",
  "warDay": 141,
  "summary": "The Middle East conflict continues, drawing sustained international attention.",
  "lastNarrativeUpdate": "2026-07-18",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No active ceasefire or de-escalation efforts are currently reported in the region."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.3
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
  "recentEvents": [
    {
      "date": "Jul 18",
      "text": "International observers remain focused on the ongoing conflict in the Middle East.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": null,
      "latestSinceUpdate": 1351
    }
  ],
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
      "headline": "Iran Punishes Aggressors, Prepares for Wider Conflict",
      "summary": "Iran claims its attack on a U.S. base was punitive and states it 'never welcomed war', while also threatening Arab neighbors and preparing allies like Hezbollah for a wider regional conflict that could involve Israel.",
      "tone": "defiant",
      "latestSinceUpdate": 1347
    },
    {
      "perspective": "US Military Action",
      "headline": "US Expands Strikes and Blockade Amid Escalation",
      "summary": "The United States has launched seven consecutive nights of strikes against Iran, expanding targets to include infrastructure like airports and bridges, and resuming a blockade in response to Iranian attacks in the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 1347
    },
    {
      "perspective": "Regional Instability",
      "headline": "Hormuz Crisis Deepens, Wider Conflict Feared",
      "summary": "Concerns are rising over the security of oil tankers in the Strait of Hormuz, with reports of Iran stopping ships and warnings from a maritime risk CEO of a 'worst case scenario', alongside fears of a wider regional conflict involving Israel and Hezbollah.",
      "tone": "anxious",
      "latestSinceUpdate": 1347
    }
  ]
});

export default LATEST_SNAPSHOT;
