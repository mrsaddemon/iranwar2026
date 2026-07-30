export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1523,
  "lastUpdated": "2026-07-30",
  "lastSyncedAt": "2026-07-30T11:17:59.590Z",
  "warDay": 153,
  "summary": "International observers continue to focus on the ongoing conflict in the Middle East.",
  "lastNarrativeUpdate": "2026-07-30",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 21,
    "summary": "No active ceasefire reported amidst ongoing conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.3
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
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
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
    "allianceInfluence": 46
  },
  "alliance": {
    "russiaIntelSupport": false,
    "chinaEconomicSupport": false,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Jul 30",
      "text": "General reports indicate ongoing conflict in the Middle East, though specific recent events are not detailed by configured sources.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "System Summary",
      "latestSinceUpdate": 1523
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
      "perspective": "Iranian Defiance",
      "headline": "Iran Vows Hormuz Control, Urges Firmness Against Enemy",
      "summary": "Iranian leadership asserts control over the Strait of Hormuz and calls on its citizens to resist external pressures. This stance comes amidst ongoing conflict and diplomatic discussions involving the US.",
      "tone": "defiant",
      "latestSinceUpdate": 1519
    },
    {
      "perspective": "US Engagement & Force",
      "headline": "US Engages Diplomatically While Employing Military Force",
      "summary": "The US is engaged in both diplomatic talks with Iran, expressing hopes for positive outcomes, while simultaneously conducting strikes against Iranian proxies and threatening strong military action in response to attacks. This dual approach aims to manage escalation while protecting US interests.",
      "tone": "strained",
      "latestSinceUpdate": 1519
    },
    {
      "perspective": "Regional Instability & Economic Strain",
      "headline": "Middle East Conflict Spreads, Impacting Shipping and Economies",
      "summary": "The conflict is expanding geographically, drawing in more countries and causing significant shipping risks in crucial oil routes like the Strait of Hormuz. This instability is leading to economic strain felt by citizens and raising environmental concerns.",
      "tone": "anxious",
      "latestSinceUpdate": 1519
    }
  ]
});

export default LATEST_SNAPSHOT;
