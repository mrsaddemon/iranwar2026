export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 43,
  "lastUpdated": "2026-04-10",
  "lastSyncedAt": "2026-04-10T01:05:38.689Z",
  "warDay": 42,
  "summary": "The US and Iran are engaged in conflict, with ongoing ceasefire talks complicated by Iran's accusations and Israel's continued military actions against Hezbollah in Lebanon, while tensions persist over the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-04-10",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "Ceasefire talks are underway between the US and Iran, but active conflict in Lebanon and Iran's rejection of terms indicate a highly fragile situation with no active ceasefire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
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
      "date": "Apr 10",
      "text": "The US and Iran are at war, with ongoing ceasefire talks being prepared by the US.",
      "severity": "critical",
      "latestSinceUpdate": 43
    },
    {
      "date": "Apr 10",
      "text": "Iran accuses the US of violating parts of a deal framework and states a ceasefire is 'unreasonable'.",
      "severity": "warning",
      "latestSinceUpdate": 43
    },
    {
      "date": "Apr 10",
      "text": "Israel announces it will begin direct negotiations with Lebanon but will not halt attacks on Hezbollah.",
      "severity": "info",
      "latestSinceUpdate": 43
    },
    {
      "date": "Apr 10",
      "text": "Netanyahu rejects a ceasefire in Lebanon as Hezbollah launches rockets, triggering air raid sirens across Israel.",
      "severity": "critical",
      "latestSinceUpdate": 43
    },
    {
      "date": "Apr 10",
      "text": "Iran warns of 'strong responses' as Israeli attacks on Lebanon threaten US-Iran ceasefire talks.",
      "severity": "warning",
      "latestSinceUpdate": 43
    },
    {
      "date": "Apr 10",
      "text": "Trump warns Iran regarding its handling of ships and potential fees for passage through the Strait of Hormuz.",
      "severity": "warning",
      "latestSinceUpdate": 43
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
