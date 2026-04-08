export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 19,
  "lastUpdated": "2026-04-08",
  "lastSyncedAt": "2026-04-08T19:37:32.466Z",
  "warDay": 40,
  "summary": "A fragile ceasefire between the US, Israel, and Iran is in jeopardy on War Day 40, as Israel conducts extensive strikes in Lebanon and Iran threatens to halt Strait of Hormuz traffic.",
  "lastNarrativeUpdate": "2026-04-08",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "A ceasefire agreed between the US, Israel, and Iran is highly fragile, with immediate violations by Israel and accusations of framework breaches by Iran, alongside a dispute over the agreed terms."
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
      "date": "Apr 07",
      "text": "US, Israel, and Iran reportedly agree to a ceasefire before Trump’s deadline.",
      "severity": "info",
      "latestSinceUpdate": 19
    },
    {
      "date": "Apr 08",
      "text": "Iran accuses the US of violating parts of the ceasefire deal framework and calls the ceasefire 'unreasonable'.",
      "severity": "warning",
      "latestSinceUpdate": 19
    },
    {
      "date": "Apr 08",
      "text": "Israel launches sprawling attacks on Lebanon, killing at least 254 people, after the ceasefire was declared.",
      "severity": "critical",
      "latestSinceUpdate": 19
    },
    {
      "date": "Apr 08",
      "text": "Iran announces it is halting Strait of Hormuz traffic, making it a major flash point.",
      "severity": "critical",
      "latestSinceUpdate": 19
    },
    {
      "date": "Apr 08",
      "text": "The White House states that the ceasefire plan published by Iran is not the one approved by the US.",
      "severity": "warning",
      "latestSinceUpdate": 19
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
