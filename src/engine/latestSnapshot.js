export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 52,
  "lastUpdated": "2026-04-10",
  "lastSyncedAt": "2026-04-10T14:40:58.162Z",
  "warDay": 42,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-10",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 14,
    "summary": "A ceasefire is threatened by ongoing Israeli attacks on Lebanon and Hezbollah rocket fire, indicating it is not active or has collapsed."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.95
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 48,
    "oilDisruption": 85
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
      "text": "Institute for the Study of War publishes an 'Iran Update Special Report'.",
      "severity": "info",
      "latestSinceUpdate": 52
    },
    {
      "date": "Recent",
      "text": "U.S. Senator Vance departs for talks in Pakistan amidst the Iran war.",
      "severity": "info",
      "latestSinceUpdate": 52
    },
    {
      "date": "Recent",
      "text": "Israel conducts bombing operations in Lebanon.",
      "severity": "critical",
      "latestSinceUpdate": 52
    },
    {
      "date": "Recent",
      "text": "Hezbollah launches rocket barrages at northern Israel, including Karmiel.",
      "severity": "critical",
      "latestSinceUpdate": 52
    },
    {
      "date": "Recent",
      "text": "Iran warns of 'strong responses' as Israeli attacks on Lebanon threaten a ceasefire.",
      "severity": "warning",
      "latestSinceUpdate": 52
    },
    {
      "date": "Recent",
      "text": "A U.S. drone disappears over the Strait of Hormuz.",
      "severity": "warning",
      "latestSinceUpdate": 52
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
