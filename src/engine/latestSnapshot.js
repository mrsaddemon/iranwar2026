export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 46,
  "lastUpdated": "2026-04-10",
  "lastSyncedAt": "2026-04-10T08:01:52.275Z",
  "warDay": 42,
  "summary": "A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.",
  "lastNarrativeUpdate": "2026-04-10",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 14,
    "summary": "Ceasefire language is present across the source mix, but the model should still treat it as reversible under renewed violations or proxy attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
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
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
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
      "latestSinceUpdate": 46
    },
    {
      "date": "Apr 10",
      "text": "How Trump Took the U.S. to War With Iran",
      "severity": "info",
      "latestSinceUpdate": 46
    },
    {
      "date": "Apr 10",
      "text": "Iran Update Special Report, April 9, 2026",
      "severity": "info",
      "latestSinceUpdate": 46
    },
    {
      "date": "Apr 10",
      "text": "Iran war live: Israeli attacks on Lebanon threaten US-Iran ceasefire talks",
      "severity": "info",
      "latestSinceUpdate": 46
    },
    {
      "date": "Apr 10",
      "text": "\"Iran Israel strikes\"",
      "severity": "info",
      "latestSinceUpdate": 46
    },
    {
      "date": "Apr 10",
      "text": "Israel and Hezbollah exchange strikes as Trump criticises Iran's handling of Hormuz strait - follow live",
      "severity": "info",
      "latestSinceUpdate": 46
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
