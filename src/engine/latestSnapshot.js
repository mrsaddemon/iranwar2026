export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 73,
  "lastUpdated": "2026-04-11",
  "lastSyncedAt": "2026-04-11T09:08:51.422Z",
  "warDay": 43,
  "summary": "Peace talks between the US and Iran are underway in Pakistan, while Israel continues strikes in Lebanon, rejecting a ceasefire with Hezbollah amid ongoing tensions over the Strait of Hormuz closure.",
  "lastNarrativeUpdate": "2026-04-11",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2026,
    "summary": "Ceasefire talks are underway between the US and Iran in Pakistan, but Israel has rejected a ceasefire with Hezbollah, and strikes continue in Lebanon, indicating a highly fragile and partial truce."
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
      "text": "Israel to hold ceasefire talks with Lebanon.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 73
    },
    {
      "date": "Apr 09",
      "text": "Iranian delegation arrives in Pakistan for talks with US, with Vance en route.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 73
    },
    {
      "date": "Apr 10",
      "text": "Trump warns Iran ahead of high-stakes talks in Pakistan and threatens fresh strikes if talks fail.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 73
    },
    {
      "date": "Apr 10",
      "text": "Iran warns of 'strong responses' as Israel's attacks on Lebanon threaten ceasefire efforts.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 73
    },
    {
      "date": "Apr 10",
      "text": "Strait of Hormuz remains closed, with the US reporting Iran is unable to find mines it planted.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 73
    },
    {
      "date": "Apr 10",
      "text": "Israel strikes central Beirut, killing at least 182, stating that the Iran truce does not apply there.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 73
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
