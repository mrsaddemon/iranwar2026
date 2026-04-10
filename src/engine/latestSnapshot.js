export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 45,
  "lastUpdated": "2026-04-10",
  "lastSyncedAt": "2026-04-10T06:10:26.169Z",
  "warDay": 42,
  "summary": "The US-Iran war continues with ongoing Israeli strikes on Lebanon, Hezbollah rocket attacks, and US concerns over Iran's handling of the Strait of Hormuz, threatening ceasefire talks.",
  "lastNarrativeUpdate": "2026-04-10",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "Ceasefire talks between the US and Iran are ongoing but severely threatened by Israeli actions in Lebanon and Iran's control over the Strait of Hormuz."
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
    "nuclearIndex": 60,
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
      "date": "Apr 08",
      "text": "Institute for the Study of War releases a special report on the Iran war.",
      "severity": "info",
      "latestSinceUpdate": 45
    },
    {
      "date": "Apr 10",
      "text": "Hezbollah launches rockets at Israel, prompting Israeli vows to continue fighting.",
      "severity": "critical",
      "latestSinceUpdate": 45
    },
    {
      "date": "Apr 10",
      "text": "Israeli attacks on Lebanon threaten ongoing US-Iran ceasefire talks.",
      "severity": "warning",
      "latestSinceUpdate": 45
    },
    {
      "date": "Apr 10",
      "text": "Trump questions Iran's handling of the Strait of Hormuz, casting doubt on ceasefire viability.",
      "severity": "critical",
      "latestSinceUpdate": 45
    },
    {
      "date": "Apr 10",
      "text": "Iran warns of 'strong responses' amidst regional tensions.",
      "severity": "warning",
      "latestSinceUpdate": 45
    },
    {
      "date": "Apr 10",
      "text": "US military to remain near Iran, with Trump threatening action if Tehran fails to comply with a deal.",
      "severity": "warning",
      "latestSinceUpdate": 45
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
