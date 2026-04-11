export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 70,
  "lastUpdated": "2026-04-11",
  "lastSyncedAt": "2026-04-11T08:05:21.261Z",
  "warDay": 43,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-11",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2026,
    "summary": "Ceasefire talks are underway between Iran and the US, and Israel and Lebanon, but Israel has rejected a ceasefire with Hezbollah and continues strikes in Beirut, while Iran tests the ceasefire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 95
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
      "date": "Apr 11",
      "text": "Iranian delegation arrives in Pakistan for talks with US, with Vance en route.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 70
    },
    {
      "date": "Apr 11",
      "text": "Israel to hold ceasefire talks with Lebanon next week, but rejects a ceasefire with Hezbollah.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 70
    },
    {
      "date": "Apr 11",
      "text": "Israel strikes central Beirut, killing at least 182, stating an Iran truce does not apply there.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 70
    },
    {
      "date": "Apr 11",
      "text": "Iran warns of 'strong responses' as Israeli attacks on Lebanon threaten ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 70
    },
    {
      "date": "Apr 11",
      "text": "Strait of Hormuz remains closed, with Iran reportedly unable to reopen it due to lost track of planted mines.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 70
    },
    {
      "date": "Apr 11",
      "text": "US military expresses disquiet and concerns over preparedness following a deadly Iranian attack in Kuwait.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 70
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
