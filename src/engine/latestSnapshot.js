export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 24,
  "lastUpdated": "2026-04-08",
  "lastSyncedAt": "2026-04-08T23:49:53.979Z",
  "warDay": 40,
  "summary": "A fragile ceasefire between the US, Israel, and Iran is being tested by ongoing Israeli strikes in Lebanon and Iranian actions in the Strait of Hormuz, leading to accusations of violations.",
  "lastNarrativeUpdate": "2026-04-08",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "A ceasefire agreed between the US, Israel, and Iran is highly fragile and being tested by ongoing Israeli strikes in Lebanon and Iranian actions in the Strait of Hormuz."
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
        "precision": 0.4,
        "aggression": 0.9
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
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 85
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
      "text": "US, Israel, Iran agree to ceasefire before Trump’s deadline.",
      "severity": "info",
      "latestSinceUpdate": 24
    },
    {
      "date": "Apr 08",
      "text": "Iran accuses US of violating ceasefire deal framework and calls it 'unreasonable'.",
      "severity": "warning",
      "latestSinceUpdate": 24
    },
    {
      "date": "Apr 08",
      "text": "Israeli strikes kill 254 in Lebanon, testing the ceasefire.",
      "severity": "critical",
      "latestSinceUpdate": 24
    },
    {
      "date": "Apr 08",
      "text": "Iran tightens its grip on the Strait of Hormuz despite the ceasefire.",
      "severity": "warning",
      "latestSinceUpdate": 24
    },
    {
      "date": "Apr 08",
      "text": "US military states readiness to resume Iran fighting if diplomacy fails.",
      "severity": "warning",
      "latestSinceUpdate": 23
    },
    {
      "date": "Apr 08",
      "text": "Hungary offered help to Iran after pager attack on Hezbollah.",
      "severity": "info",
      "latestSinceUpdate": 24
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
