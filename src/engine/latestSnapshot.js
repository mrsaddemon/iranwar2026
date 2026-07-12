export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1266,
  "lastUpdated": "2026-07-12",
  "lastSyncedAt": "2026-07-12T15:27:25.752Z",
  "warDay": 135,
  "summary": "Conflict in the Middle East continues to be a primary focus for international observers.",
  "lastNarrativeUpdate": "2026-07-12",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 15,
    "summary": "No active ceasefire or truce is currently reported."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
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
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 70,
    "oilDisruption": 60,
    "tradeImpact": 56,
    "sanctionsPressure": 61,
    "globalPressure": 74,
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
      "perspective": "US/Israel Stance",
      "headline": "US Demands Open Hormuz, Israel Signals Further Strikes",
      "summary": "The US is demanding Iran publicly guarantee the Strait of Hormuz remains open and free from attacks, while launching retaliatory strikes. Israel has signaled readiness for further military action against Iran with 'even greater force'.",
      "tone": "defiant",
      "latestSinceUpdate": 1258
    },
    {
      "perspective": "Iran Stance",
      "headline": "Iran Closes Hormuz, Launches Strikes on US Targets",
      "summary": "Iran's IRGC navy has declared the Strait of Hormuz closed following an attack on a ship, and Tehran has launched strikes, claiming to hit US military targets in the Gulf. This comes amidst the burial of leader Khamenei.",
      "tone": "defiant",
      "latestSinceUpdate": 1258
    },
    {
      "perspective": "International Mediation",
      "headline": "Mediators Work to De-escalate US-Iran Tensions",
      "summary": "International mediators are actively working to de-escalate the renewed tensions between the US and Iran and revive talks. Efforts are underway to prevent further escalation in the region.",
      "tone": "strained",
      "latestSinceUpdate": 1258
    },
    {
      "perspective": "Lebanon Instability",
      "headline": "Hezbollah Disarmament Fuels Lebanon Divisions",
      "summary": "Efforts to disarm Hezbollah are deepening internal divisions within Lebanon, raising fears of a potential civil war. The IDF is preparing for a prolonged presence in Lebanon as Hezbollah regroups.",
      "tone": "anxious",
      "latestSinceUpdate": 1258
    }
  ]
});

export default LATEST_SNAPSHOT;
