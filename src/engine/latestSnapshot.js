export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 20,
  "lastUpdated": "2026-04-08",
  "lastSyncedAt": "2026-04-08T20:01:56.708Z",
  "warDay": 40,
  "summary": "A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.",
  "lastNarrativeUpdate": "2026-04-08",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "Ceasefire language is present across the source mix, but the model should still treat it as reversible under renewed violations or proxy attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.3,
        "aggression": 0.9
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
      "date": "Apr 08",
      "text": "\"Iran war 2026\"",
      "severity": "info",
      "latestSinceUpdate": 20
    },
    {
      "date": "Apr 08",
      "text": "How Trump Took the U.S. to War With Iran",
      "severity": "info",
      "latestSinceUpdate": 20
    },
    {
      "date": "Apr 08",
      "text": "Day 39 of Middle East conflict — US, Israel, Iran agree to ceasefire before Trump’s deadline",
      "severity": "info",
      "latestSinceUpdate": 20
    },
    {
      "date": "Apr 08",
      "text": "Live updates: Iran accuses US of violating parts of deal framework, says ceasefire 'unreasonable'",
      "severity": "info",
      "latestSinceUpdate": 20
    },
    {
      "date": "Apr 08",
      "text": "\"Iran Israel strikes\"",
      "severity": "info",
      "latestSinceUpdate": 20
    },
    {
      "date": "Apr 08",
      "text": "Iran War Live Updates: U.S.-Iran Cease-Fire Shaky as Israel Strikes Lebanon and Confusion Grows Over Strait",
      "severity": "info",
      "latestSinceUpdate": 20
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
      "status": "unavailable"
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
      "perspective": "US/Israel Stance",
      "headline": "Ceasefire Holds, But Deterrence Stays Forward",
      "summary": "From the US-Israel perspective, the current pause is useful but provisional. The priority remains keeping pressure on Iran and proxy networks while preserving freedom to respond if the ceasefire is violated.",
      "tone": "strained",
      "latestSinceUpdate": 8
    },
    {
      "perspective": "Iranian/Allies Response",
      "headline": "Pause Accepted Without Surrendering Leverage",
      "summary": "Iranian and allied framing casts the ceasefire as proof that escalation pressure produced a tactical pause without forcing strategic retreat. At the same time, they continue signaling that readiness remains in place if pressure resumes.",
      "tone": "defiant",
      "latestSinceUpdate": 8
    },
    {
      "perspective": "Global/Economic Impact",
      "headline": "Risk Premium Falls, But Confidence Is Still Thin",
      "summary": "Global observers see the ceasefire as a meaningful reduction in immediate danger, not a durable resolution. Energy, shipping, and diplomacy remain cautious because Lebanon, proxy fronts, and Hormuz-related pressure could still unravel the pause.",
      "tone": "anxious",
      "latestSinceUpdate": 8
    }
  ]
});

export default LATEST_SNAPSHOT;
