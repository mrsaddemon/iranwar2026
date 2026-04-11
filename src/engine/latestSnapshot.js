export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 78,
  "lastUpdated": "2026-04-11",
  "lastSyncedAt": "2026-04-11T12:25:04.525Z",
  "warDay": 43,
  "summary": "Peace talks between Iranian and US delegations are underway in Pakistan amidst a fragile regional ceasefire, ongoing hostilities involving Hezbollah, and continued closure of the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-04-11",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 3,
    "summary": "A shaky ceasefire is reported to be holding in some areas, though violations by Hezbollah and rejections by Israel complicate peace efforts."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
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
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
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
      "text": "Iranian delegation arrives in Pakistan for talks with US.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 78
    },
    {
      "date": "Apr 09",
      "text": "Trump warns Iran ahead of high-stakes talks in Pakistan.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 78
    },
    {
      "date": "Apr 10",
      "text": "Iran's speaker states negotiations with U.S. require Lebanon ceasefire and asset release.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 78
    },
    {
      "date": "Apr 10",
      "text": "Hezbollah launches rockets at Israel.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 78
    },
    {
      "date": "Apr 11",
      "text": "Strait of Hormuz remains closed; U.S. says Iran unable to find mines it planted.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 78
    },
    {
      "date": "Apr 11",
      "text": "U.S. official states no agreements have been made in Iran peace talks yet as shaky ceasefire holds.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 78
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
