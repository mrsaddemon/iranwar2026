export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 44,
  "lastUpdated": "2026-04-10",
  "lastSyncedAt": "2026-04-10T04:14:27.854Z",
  "warDay": 42,
  "summary": "The Middle East conflict continues with Israel attacking Lebanon and Hezbollah launching rockets, while Iran reports stopping shipping in the Strait of Hormuz amidst ongoing ceasefire talks and US warnings.",
  "lastNarrativeUpdate": "2026-04-10",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.93,
    "durationDays": 14,
    "summary": "Ceasefire talks between Israel and Lebanon are underway, but ongoing Israeli strikes against Hezbollah threaten their progress and no active ceasefire is in effect."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
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
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 38,
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
      "date": "Apr 08",
      "text": "Israel attacks Lebanon on Day 40 of the Middle East conflict.",
      "severity": "critical",
      "latestSinceUpdate": 44
    },
    {
      "date": "Apr 08",
      "text": "Iran states shipping has been stopped in the Strait of Hormuz.",
      "severity": "critical",
      "latestSinceUpdate": 44
    },
    {
      "date": "Apr 09",
      "text": "Hezbollah launches rockets at Israel.",
      "severity": "critical",
      "latestSinceUpdate": 44
    },
    {
      "date": "Apr 09",
      "text": "Israel agrees to hold ceasefire talks with Lebanon despite ongoing strikes.",
      "severity": "warning",
      "latestSinceUpdate": 44
    },
    {
      "date": "Apr 09",
      "text": "Trump warns Iran against collecting tolls in the Strait of Hormuz.",
      "severity": "warning",
      "latestSinceUpdate": 44
    },
    {
      "date": "Apr 09",
      "text": "Automatic U.S. military draft registration is planned by December.",
      "severity": "info",
      "latestSinceUpdate": 44
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
