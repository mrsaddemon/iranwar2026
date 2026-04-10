export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 49,
  "lastUpdated": "2026-04-10",
  "lastSyncedAt": "2026-04-10T11:27:39.656Z",
  "warDay": 42,
  "summary": "The Iran war continues with ongoing strikes between Israel and Hezbollah in Lebanon, while US-Iran truce talks and Israel-Lebanon ceasefire discussions are underway.",
  "lastNarrativeUpdate": "2026-04-10",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "No active, broad ceasefire is in effect, though US-Iran truce talks and Israel-Lebanon ceasefire discussions are ongoing amidst continued strikes."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
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
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.4
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 75
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
      "text": "Israel and Hezbollah continue strikes in Lebanon amid ongoing conflict.",
      "severity": "critical",
      "latestSinceUpdate": 49
    },
    {
      "date": "Apr 10",
      "text": "US-Iran truce talks and Israel-Lebanon ceasefire discussions are being held.",
      "severity": "info",
      "latestSinceUpdate": 49
    },
    {
      "date": "Apr 10",
      "text": "Lebanon states it will only participate in talks with Israel if a ceasefire is already in place.",
      "severity": "warning",
      "latestSinceUpdate": 49
    },
    {
      "date": "Apr 10",
      "text": "Strait of Hormuz traffic is reported to be slow despite ceasefire discussions.",
      "severity": "warning",
      "latestSinceUpdate": 49
    },
    {
      "date": "Apr 10",
      "text": "US military personnel dispute Pentagon's account of a deadly attack in Kuwait, citing unpreparedness.",
      "severity": "warning",
      "latestSinceUpdate": 49
    },
    {
      "date": "Apr 10",
      "text": "Automatic US military draft registration is planned by December.",
      "severity": "info",
      "latestSinceUpdate": 49
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
