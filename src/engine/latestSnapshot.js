export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 15,
  "lastUpdated": "2026-04-08",
  "lastSyncedAt": "2026-04-08T12:45:49.221Z",
  "warDay": 40,
  "summary": "A two-week ceasefire is in effect between the main parties, but it remains fragile as strikes in Lebanon, maritime pressure, and renewed ultimatums continue to test whether the pause can hold.",
  "lastNarrativeUpdate": "2026-04-08",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.79,
    "durationDays": 14,
    "summary": "A monitored two-week ceasefire is currently active, but ongoing Lebanon strikes, proxy friction, and coercive signaling keep the pause unstable."
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
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 52,
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
      "date": "Apr 07",
      "text": "US, Israel, and Iran have moved into a two-week ceasefire window, reducing the pace of direct high-intensity exchanges.",
      "severity": "info",
      "latestSinceUpdate": 15
    },
    {
      "date": "Apr 07",
      "text": "Israel continued strikes in southern Lebanon, underscoring that the broader pause remains geographically and politically fragile.",
      "severity": "warning",
      "latestSinceUpdate": 15
    },
    {
      "date": "Apr 07",
      "text": "Israeli strikes in Beirut signaled that proxy fronts could still destabilize the ceasefire even if direct US-Iran exchanges stay lower.",
      "severity": "warning",
      "latestSinceUpdate": 15
    },
    {
      "date": "Apr 07",
      "text": "Hezbollah activity appears reduced for now, but regional actors continue warning that the pause could collapse quickly after a major violation.",
      "severity": "info",
      "latestSinceUpdate": 15
    },
    {
      "date": "Apr 07",
      "text": "US pressure around Kharg Island and continuing ultimatum rhetoric have kept energy and shipping risk elevated despite the ceasefire.",
      "severity": "warning",
      "latestSinceUpdate": 15
    },
    {
      "date": "Apr 08",
      "text": "Officials have described the ceasefire as fragile, with diplomats trying to turn the pause into a more enforceable monitored framework.",
      "severity": "info",
      "latestSinceUpdate": 15
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
