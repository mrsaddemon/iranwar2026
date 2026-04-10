export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 63,
  "lastUpdated": "2026-04-10",
  "lastSyncedAt": "2026-04-10T23:47:30.914Z",
  "warDay": 42,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-10",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "Ongoing negotiations between the US and Iran are complicated by continued hostilities between Israel and Hezbollah, threatening any broader de-escalation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.88,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.78
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
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
      "text": "Trump issues warning to Iran ahead of high-stakes negotiations in Pakistan.",
      "severity": "warning",
      "latestSinceUpdate": 63
    },
    {
      "date": "Apr 09",
      "text": "Iranian delegation arrives in Pakistan for talks with the US.",
      "severity": "info",
      "latestSinceUpdate": 63
    },
    {
      "date": "Apr 09",
      "text": "Iran warns of 'strong responses' as Israel's attacks on Lebanon threaten ceasefire.",
      "severity": "warning",
      "latestSinceUpdate": 63
    },
    {
      "date": "Apr 09",
      "text": "Vance heads to peace talks as Lebanon impasse threatens cease-fire.",
      "severity": "info",
      "latestSinceUpdate": 63
    },
    {
      "date": "Apr 09",
      "text": "Trump warns of fresh Iran strikes if talks fail; Lebanon and Israel agree to meet in US.",
      "severity": "critical",
      "latestSinceUpdate": 63
    },
    {
      "date": "Apr 10",
      "text": "Trump criticizes Iran for not allowing more oil through Strait of Hormuz, stating it's 'Not the agreement we have'.",
      "severity": "warning",
      "latestSinceUpdate": 63
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
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
