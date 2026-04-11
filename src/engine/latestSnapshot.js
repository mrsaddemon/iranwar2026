export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 68,
  "lastUpdated": "2026-04-11",
  "lastSyncedAt": "2026-04-11T07:26:46.395Z",
  "warDay": 43,
  "summary": "The Middle East conflict continues with Israel striking Beirut and rejecting a ceasefire in Lebanon, while Iran tests a separate truce and peace talks involving the US and Iran are underway in Pakistan amidst the closure of the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-04-11",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2026,
    "summary": "A partial ceasefire with Iran is in place but is being tested and does not apply to Israel's conflict in Lebanon, where fighting continues."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
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
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 90
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Apr 09",
      "text": "Netanyahu states there is no ceasefire in Lebanon as Israel continues talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 68
    },
    {
      "date": "Apr 11",
      "text": "Iranian delegation arrives in Pakistan for peace talks with the US, with Vance en route.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 68
    },
    {
      "date": "Apr 11",
      "text": "Trump warns of fresh strikes if Iran peace talks fail.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 68
    },
    {
      "date": "Apr 11",
      "text": "The Strait of Hormuz remains closed, with reports that Iran is unable to find mines it planted.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 68
    },
    {
      "date": "Apr 11",
      "text": "Israel strikes central Beirut, killing at least 182, stating an Iran truce does not apply there.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 68
    },
    {
      "date": "Apr 11",
      "text": "Trump states the US military is 'loading up and resting' as Iran tests a ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 68
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (19 headlines)"
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
      "perspective": "US Diplomacy & Pressure",
      "headline": "US pushes for negotiation while maintaining military readiness.",
      "summary": "The US, through envoy Vance, is actively engaged in peace talks with Iran, while President Trump warns Iran against failing negotiations and highlights US military readiness. Trump also criticizes Iran's actions regarding the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran engages in talks amidst Strait of Hormuz closure and ceasefire tests.",
      "summary": "An Iranian delegation is participating in peace talks, but the Strait of Hormuz remains closed or has low traffic, and Iran is reported to be testing the ceasefire. Iran is also reportedly unable to find mines it planted in the Strait.",
      "tone": "defiant",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "Israeli-Lebanese Front",
      "headline": "Continued conflict in Lebanon despite ongoing talks.",
      "summary": "Israel and Lebanon have agreed to meet for talks, but Israel states there is no ceasefire in Lebanon, and both sides continue to trade strikes, further threatening any broader de-escalation.",
      "tone": "anxious",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "US Military Internal",
      "headline": "Disquiet and unpreparedness claims within US military.",
      "summary": "Survivors of a deadly attack on a US military outpost in Kuwait dispute the Pentagon's account, claiming the unit was unprepared, contributing to growing disquiet within the military.",
      "tone": "skeptical",
      "latestSinceUpdate": 64
    }
  ]
});

export default LATEST_SNAPSHOT;
