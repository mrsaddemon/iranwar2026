export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 55,
  "lastUpdated": "2026-04-10",
  "lastSyncedAt": "2026-04-10T17:28:07.591Z",
  "warDay": 42,
  "summary": "A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.",
  "lastNarrativeUpdate": "2026-04-10",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.93,
    "durationDays": 14,
    "summary": "Ceasefire language is present across the source mix, but the model should still treat it as reversible under renewed violations or proxy attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 38,
    "oilDisruption": 62
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
      "date": "Apr 10",
      "text": "\"Iran war 2026\"",
      "severity": "info",
      "latestSinceUpdate": 54
    },
    {
      "date": "Apr 10",
      "text": "\"Iran Israel strikes\"",
      "severity": "info",
      "latestSinceUpdate": 54
    },
    {
      "date": "Apr 10",
      "text": "Iran war live: Vance departs for talks in Pakistan, as Israel bombs Lebanon",
      "severity": "info",
      "latestSinceUpdate": 54
    },
    {
      "date": "Apr 10",
      "text": "Iran warns of 'strong responses' as Israel's attacks on Lebanon threaten ceasefire",
      "severity": "info",
      "latestSinceUpdate": 55
    },
    {
      "date": "Apr 10",
      "text": "Iran War Live Updates: Vance Heads to Peace Talks as Lebanon Impasse Threatens Cease-Fire",
      "severity": "info",
      "latestSinceUpdate": 55
    },
    {
      "date": "Apr 10",
      "text": "\"Strait of Hormuz\"",
      "severity": "info",
      "latestSinceUpdate": 55
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (16 headlines)"
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
      "perspective": "US Perspective",
      "headline": "US Pushes Ceasefire Amid Iran War, Strait of Hormuz Warnings",
      "summary": "The US is engaged in conflict with Iran, seeking a ceasefire while maintaining a military presence and warning Iran against actions in the Strait of Hormuz. Domestic military readiness is being enhanced.",
      "tone": "strained",
      "latestSinceUpdate": 43
    },
    {
      "perspective": "Iranian Perspective",
      "headline": "Iran Rejects Ceasefire Terms, Warns of 'Strong Responses'",
      "summary": "Iran accuses the US of violations, finds ceasefire terms unreasonable, and warns of strong responses to Israeli actions. Tensions are high regarding potential fees for passage through the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 43
    },
    {
      "perspective": "Israeli Perspective",
      "headline": "Israel Continues Hezbollah Attacks, Open to Lebanon Talks",
      "summary": "Israel continues military operations against Hezbollah in Lebanon, rejecting a ceasefire in that theater, but is open to direct negotiations with the Lebanese government.",
      "tone": "defiant",
      "latestSinceUpdate": 43
    }
  ]
});

export default LATEST_SNAPSHOT;
