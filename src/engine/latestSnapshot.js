export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 42,
  "lastUpdated": "2026-04-09",
  "lastSyncedAt": "2026-04-09T23:49:40.011Z",
  "warDay": 41,
  "summary": "The ongoing war involving Iran, the United States, and Israel continues with active military engagements, diplomatic efforts for a ceasefire, and heightened tensions around the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-04-09",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "Despite US efforts for Iran ceasefire talks and Israel agreeing to talks with Lebanon, active conflict continues, and key parties express unwillingness or deem a ceasefire unreasonable."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.85
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 38,
    "oilDisruption": 80
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
      "text": "The New York Times reports on how Trump took the U.S. to war with Iran.",
      "severity": "info",
      "latestSinceUpdate": 42
    },
    {
      "date": "Apr 09",
      "text": "Iran accuses the US of violating parts of a deal framework and states a ceasefire is 'unreasonable'.",
      "severity": "warning",
      "latestSinceUpdate": 42
    },
    {
      "date": "Apr 09",
      "text": "Israel announces it will begin direct negotiations with Lebanon as the US prepares for Iran ceasefire talks.",
      "severity": "info",
      "latestSinceUpdate": 42
    },
    {
      "date": "Apr 09",
      "text": "Netanyahu states there will be 'no ceasefire in Lebanon' as air raid sirens sound across Israel following Hezbollah rocket launches.",
      "severity": "critical",
      "latestSinceUpdate": 42
    },
    {
      "date": "Apr 09",
      "text": "Iran warns of 'strong responses' as Israel's attacks on Lebanon threaten ceasefire efforts.",
      "severity": "critical",
      "latestSinceUpdate": 42
    },
    {
      "date": "Apr 09",
      "text": "Trump warns Iran to 'stop now' if it is charging oil tankers fees to pass through the Strait of Hormuz.",
      "severity": "critical",
      "latestSinceUpdate": 42
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
