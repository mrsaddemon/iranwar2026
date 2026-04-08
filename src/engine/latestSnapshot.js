export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 23,
  "lastUpdated": "2026-04-08",
  "lastSyncedAt": "2026-04-08T22:54:32.677Z",
  "warDay": 40,
  "summary": "A fragile ceasefire between the US, Israel, and Iran is being tested by ongoing Israeli airstrikes in Lebanon and Iranian accusations of violations.",
  "lastNarrativeUpdate": "2026-04-08",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "A ceasefire agreement between the US, Israel, and Iran is active but highly fragile, facing immediate tests from Israeli strikes and Iranian accusations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
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
        "precision": 0.3,
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
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 30
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
      "text": "US, Israel, and Iran agree to a ceasefire before Trump's deadline.",
      "severity": "info",
      "latestSinceUpdate": 23
    },
    {
      "date": "Apr 08",
      "text": "Israel launches a large wave of airstrikes across Lebanon, killing at least 254.",
      "severity": "critical",
      "latestSinceUpdate": 23
    },
    {
      "date": "Apr 08",
      "text": "Iran accuses the US of violating parts of the ceasefire deal framework, calling it 'unreasonable'.",
      "severity": "warning",
      "latestSinceUpdate": 23
    },
    {
      "date": "Apr 08",
      "text": "US military states readiness to resume Iran fighting if diplomacy fails.",
      "severity": "warning",
      "latestSinceUpdate": 23
    },
    {
      "date": "Apr 08",
      "text": "Oil prices plunge and shares jump following news of the US-Iran ceasefire plan.",
      "severity": "info",
      "latestSinceUpdate": 23
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
