export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 27,
  "lastUpdated": "2026-04-09",
  "lastSyncedAt": "2026-04-09T05:42:35.828Z",
  "warDay": 41,
  "summary": "A fragile ceasefire is in effect for the Iran war, though it is being tested by continued Israeli strikes on Lebanon, an ongoing impasse in the Strait of Hormuz, and accusations of violations from Iran, while the US maintains a military presence in the region.",
  "lastNarrativeUpdate": "2026-04-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "A ceasefire has been declared, but its effectiveness is highly uncertain due to ongoing Israeli strikes in Lebanon, Iran's actions in the Strait of Hormuz, and accusations of violations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
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
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
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
      "text": "Iran accuses US of violating parts of deal framework, says ceasefire is ‘unreasonable’",
      "severity": "warning",
      "latestSinceUpdate": 27
    },
    {
      "date": "Apr 08",
      "text": "Day 40 of Middle East conflict — Israel attacks Lebanon, Iran says shipping stopped in Strait of Hormuz",
      "severity": "critical",
      "latestSinceUpdate": 27
    },
    {
      "date": "Apr 08",
      "text": "Live updates: Iran war ceasefire begins, though some new attacks hit Gulf; Trump and Netanyahu say Lebanon not included in ceasefire",
      "severity": "warning",
      "latestSinceUpdate": 27
    },
    {
      "date": "Apr 08",
      "text": "Iran War Live Updates: Cease-Fire Tested by Confusion Over Strait and Strikes on Lebanon",
      "severity": "critical",
      "latestSinceUpdate": 27
    },
    {
      "date": "Apr 08",
      "text": "Iran Tightens Its Grip on Hormuz Despite Cease-Fire",
      "severity": "critical",
      "latestSinceUpdate": 27
    },
    {
      "date": "Apr 08",
      "text": "Middle East crisis live: Red Cross ‘outraged’ as Israeli strikes on Lebanon kill at least 254; strait of Hormuz impasse continues",
      "severity": "critical",
      "latestSinceUpdate": 27
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
