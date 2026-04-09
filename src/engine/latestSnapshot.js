export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 36,
  "lastUpdated": "2026-04-09",
  "lastSyncedAt": "2026-04-09T18:12:32.698Z",
  "warDay": 41,
  "summary": "The Middle East conflict continues on Day 41 with Israeli attacks on Lebanon threatening a shaky U.S.-Iran ceasefire, while Iran asserts control over the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-04-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 5,
    "summary": "A shaky U.S.-Iran ceasefire is in effect but is threatened by ongoing Israeli attacks on Lebanon and accusations of violations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.4,
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
    "nuclearIndex": 20,
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
      "date": "Apr 08",
      "text": "Israel launched attacks on Lebanon, resulting in a death toll of at least 303 in Beirut.",
      "severity": "critical",
      "latestSinceUpdate": 36
    },
    {
      "date": "Apr 08",
      "text": "Iran announced it has stopped shipping in the Strait of Hormuz, controlling access after a ceasefire.",
      "severity": "critical",
      "latestSinceUpdate": 36
    },
    {
      "date": "Apr 09",
      "text": "Israel expressed readiness to begin direct negotiations with Lebanon for a ceasefire.",
      "severity": "info",
      "latestSinceUpdate": 36
    },
    {
      "date": "Apr 09",
      "text": "Iran accused the U.S. of violating the ceasefire as Israeli attacks on Lebanon continued.",
      "severity": "warning",
      "latestSinceUpdate": 36
    },
    {
      "date": "Apr 09",
      "text": "A new rule change will automatically register eligible men for the U.S. military draft pool.",
      "severity": "info",
      "latestSinceUpdate": 36
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
