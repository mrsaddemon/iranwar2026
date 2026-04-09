export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 40,
  "lastUpdated": "2026-04-09",
  "lastSyncedAt": "2026-04-09T22:08:45.441Z",
  "warDay": 41,
  "summary": "The US-Iran conflict continues on War Day 41 with ongoing Israeli strikes in Lebanon, stalled Strait of Hormuz shipping, and complex ceasefire negotiations.",
  "lastNarrativeUpdate": "2026-04-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "Ceasefire talks are underway between the US and Iran, and Israel and Lebanon, but Iran deems the current framework unreasonable, and the Strait of Hormuz remains closed despite a declared ceasefire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
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
    "nuclearIndex": 60,
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
      "date": "Apr 09",
      "text": "Iran accuses US of violating deal framework and calls ceasefire 'unreasonable'.",
      "severity": "warning",
      "latestSinceUpdate": 40
    },
    {
      "date": "Apr 09",
      "text": "Israel agrees to direct negotiations with Lebanon amidst US preparations for Iran ceasefire talks.",
      "severity": "info",
      "latestSinceUpdate": 40
    },
    {
      "date": "Apr 09",
      "text": "Beirut attack death toll rises to at least 303 as Israel continues strikes.",
      "severity": "critical",
      "latestSinceUpdate": 40
    },
    {
      "date": "Apr 09",
      "text": "Strait of Hormuz shipping traffic is effectively at a standstill with Iran controlling access despite a ceasefire.",
      "severity": "critical",
      "latestSinceUpdate": 40
    },
    {
      "date": "Apr 09",
      "text": "Trump warns Iran against taxing tankers transiting the Strait of Hormuz.",
      "severity": "warning",
      "latestSinceUpdate": 40
    },
    {
      "date": "Apr 09",
      "text": "Israeli military reports killing the nephew of Hezbollah chief Naim Qassem.",
      "severity": "warning",
      "latestSinceUpdate": 40
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
      "perspective": "US/Israel",
      "headline": "Ceasefire agreed, but tested",
      "summary": "The US and Israel agreed to a ceasefire with Iran, aiming to de-escalate the Middle East conflict. However, the agreement is immediately being tested by ongoing regional actions.",
      "tone": "strained",
      "latestSinceUpdate": 25
    },
    {
      "perspective": "Iran",
      "headline": "US violating ceasefire, Hormuz control asserted",
      "summary": "Iran accuses the US of violating the ceasefire framework, deeming the agreement 'unreasonable' given the circumstances. Iran is also asserting its control over the Strait of Hormuz despite the ceasefire.",
      "tone": "defiant",
      "latestSinceUpdate": 25
    },
    {
      "perspective": "Lebanon/Hezbollah",
      "headline": "Heavy Israeli strikes despite ceasefire",
      "summary": "Lebanon has suffered significant casualties from large-scale Israeli strikes, with reports of 182-254 killed. This comes despite a recently agreed ceasefire, raising questions about its effectiveness.",
      "tone": "anxious",
      "latestSinceUpdate": 25
    }
  ]
});

export default LATEST_SNAPSHOT;
