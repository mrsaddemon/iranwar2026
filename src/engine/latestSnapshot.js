export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 38,
  "lastUpdated": "2026-04-09",
  "lastSyncedAt": "2026-04-09T20:35:49.546Z",
  "warDay": 41,
  "summary": "A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.",
  "lastNarrativeUpdate": "2026-04-09",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "Ceasefire language is present across the source mix with a reported duration around 14 days, but the model should still treat it as reversible under renewed violations or proxy attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.65
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 82
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 12,
    "escalationLevel": 38,
    "oilDisruption": 62
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
      "text": "\"Iran war 2026\"",
      "severity": "info",
      "latestSinceUpdate": 38
    },
    {
      "date": "Apr 09",
      "text": "What we know about the two-week ceasefire between the US and Iran",
      "severity": "info",
      "latestSinceUpdate": 38
    },
    {
      "date": "Apr 09",
      "text": "Iran Update Special Report, April 8, 2026",
      "severity": "info",
      "latestSinceUpdate": 38
    },
    {
      "date": "Apr 09",
      "text": "Live updates: Israel says it will begin direct negotiations with Lebanon as US prepares for Iran ceasefire talks",
      "severity": "info",
      "latestSinceUpdate": 38
    },
    {
      "date": "Apr 09",
      "text": "\"Iran Israel strikes\"",
      "severity": "info",
      "latestSinceUpdate": 38
    },
    {
      "date": "Apr 09",
      "text": "Israel to hold talks with Lebanon as Beirut attack death toll rises to at least 303",
      "severity": "info",
      "latestSinceUpdate": 38
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
