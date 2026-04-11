export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 72,
  "lastUpdated": "2026-04-11",
  "lastSyncedAt": "2026-04-11T08:57:51.537Z",
  "warDay": 43,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-11",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2026,
    "summary": "Peace talks are underway between the US and Iran, but Israel's continued strikes in Lebanon and rejection of a ceasefire with Hezbollah indicate a highly fragile and partial de-escalation."
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
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
      "date": "Apr 11",
      "text": "Israel is scheduled to hold ceasefire talks with Lebanon next week.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 72
    },
    {
      "date": "Apr 11",
      "text": "An Iranian delegation has arrived in Pakistan for peace talks with the US, with US envoy Vance en route.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 72
    },
    {
      "date": "Apr 11",
      "text": "President Trump warned Iran ahead of high-stakes talks in Pakistan and threatened fresh strikes if talks fail.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 72
    },
    {
      "date": "Apr 11",
      "text": "Iran warned of 'strong responses' as Israel's attacks on Lebanon threaten the ongoing ceasefire efforts.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 72
    },
    {
      "date": "Apr 11",
      "text": "The Strait of Hormuz remains closed, with the U.S. reporting Iran is unable to find mines it planted.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 72
    },
    {
      "date": "Apr 11",
      "text": "Israel struck central Beirut, killing at least 182, after stating that the Iran truce does not apply there.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 72
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
