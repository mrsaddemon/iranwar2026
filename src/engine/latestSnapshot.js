export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 18,
  "lastUpdated": "2026-04-08",
  "lastSyncedAt": "2026-04-08T18:56:11.756Z",
  "warDay": 40,
  "summary": "A two-week ceasefire between the US and Iran is in effect but highly fragile, with Israel launching heavy airstrikes in Lebanon and conflicting reports emerging regarding the closure of the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-04-08",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A two-week ceasefire was reportedly agreed upon by the US and Iran, but its terms are disputed, and Israel has launched significant strikes in Lebanon, rendering it highly fragile."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
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
      "text": "US, Israel, and Iran reportedly agree to a two-week ceasefire before Trump's deadline.",
      "severity": "info",
      "latestSinceUpdate": 18
    },
    {
      "date": "Apr 08",
      "text": "Israel launches its heaviest airstrikes of the war in Lebanon, killing 254, following the ceasefire agreement.",
      "severity": "critical",
      "latestSinceUpdate": 18
    },
    {
      "date": "Apr 08",
      "text": "Iran claims closure of the Strait of Hormuz in response to Israeli attacks; the White House denies these reports.",
      "severity": "warning",
      "latestSinceUpdate": 18
    },
    {
      "date": "Apr 08",
      "text": "Confusion grows over the specific terms and validity of the US-Iran ceasefire agreement.",
      "severity": "warning",
      "latestSinceUpdate": 18
    },
    {
      "date": "Apr 08",
      "text": "Hezbollah reportedly pauses its attacks amidst the ongoing Israeli airstrikes in Lebanon.",
      "severity": "info",
      "latestSinceUpdate": 18
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
