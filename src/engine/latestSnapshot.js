export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 62,
  "lastUpdated": "2026-04-10",
  "lastSyncedAt": "2026-04-10T22:52:22.683Z",
  "warDay": 42,
  "summary": "Peace talks involving the US and Iran are underway in Pakistan amidst a fragile ceasefire, while Israel continues military operations in Lebanon, leading to significant casualties and Hezbollah rocket fire.",
  "lastNarrativeUpdate": "2026-04-10",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A shaky, partial ceasefire is reported to be holding in some areas, but active conflict continues in Lebanon, with Israel stating the truce does not apply there."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 90
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
      "date": "Apr 09",
      "text": "Netanyahu states there is no ceasefire in Lebanon as Israel pursues talks.",
      "severity": "warning",
      "latestSinceUpdate": 62
    },
    {
      "date": "Apr 09",
      "text": "US envoy Vance heads to peace talks, and an Iranian delegation arrives in Pakistan for discussions with the US.",
      "severity": "info",
      "latestSinceUpdate": 62
    },
    {
      "date": "Apr 09",
      "text": "Iran warns of 'strong responses' as Israel's attacks on Lebanon threaten the ceasefire.",
      "severity": "warning",
      "latestSinceUpdate": 62
    },
    {
      "date": "Apr 09",
      "text": "Hezbollah launches rockets at Israel.",
      "severity": "critical",
      "latestSinceUpdate": 62
    },
    {
      "date": "Apr 09",
      "text": "Trump criticizes Iran for restricting oil flow through the Strait of Hormuz; tankers are urged not to pay tolls.",
      "severity": "warning",
      "latestSinceUpdate": 62
    },
    {
      "date": "Apr 09",
      "text": "The Strait of Hormuz remains closed or experiences low traffic.",
      "severity": "warning",
      "latestSinceUpdate": 62
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
