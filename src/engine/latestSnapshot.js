export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 236,
  "lastUpdated": "2026-04-18",
  "lastSyncedAt": "2026-04-18T23:59:59.000Z",
  "warDay": 50,
  "summary": "Iran has renewed restrictions on the Strait of Hormuz, citing a U.S. blockade, leading to reports of ships being fired upon and U.S. forces turning back vessels, while an Israel-Lebanon ceasefire appears to have collapsed following mutual strikes and rocket fire.",
  "lastNarrativeUpdate": "2026-04-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 5,
    "summary": "The Israel-Lebanon ceasefire has collapsed following Israeli strikes on Hezbollah and subsequent Hezbollah rocket launches."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.7
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
    "nuclearIndex": 55,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
    "allianceInfluence": 51
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
      "date": "Apr 17",
      "text": "Iran renews restrictions on Strait of Hormuz and fires on ships, citing a U.S. blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE9EQVl4S0hjYWFiVnBPOEJPNEJPVnRqeHlqNmd3dzN0aUp2czNlNHk4QlpxVnJGb1kxZ3JoX1luTUVfOFFFSTRIRVhiMU80M2gxNjZSdDBjeFM0bE1TX0RpQkRwUmVvZHM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 236
    },
    {
      "date": "Apr 17",
      "text": "U.S. military turns back 23 vessels to Iran, enforcing a blockade.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQRGZDcnB1c0VnSDBkYU1XYzNES3N0cVBKRE1mX1lOc0FjNWs3ck5BZWdzQnlPRTZ2ZFhkektJR1lhS1ZHN014VGtXMGdpczA1ZWlxdEpDcXVUcDhWcmxjZzhMMVdkMlRKRGxybWpfLWd0eW5QcUhfYWtqNlgxVmtxYTBGTlMxbDhJY05EdVB0eEdvSE1DZjhTNnFIb3h2aThtZTlTU21MeklXa1RDd0lUMmdPcGRHVEJFZEppOVhocw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 236
    },
    {
      "date": "Apr 17",
      "text": "Israel strikes Hezbollah in Lebanon, stating operatives violated the truce; Hezbollah responds with rocket launches.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxPc3Ztakk5YnFMcXozdEdSaXRxU1RQYnZNTm5rMm1mWktkNzctVzRqQ0tNekRvb2VtTkJjYmdVTHJKeDFxRWZfQ1pSV1BiYThkaDI2cEc5d2cyek9wbVU4NEl0bGpNQUMxb2c3SEROUHAzZFhTaHBZR0REcjBQMTlpTUYyMXdRSW9KOXY5VFVRWFJfQ1o4V09ITGdyV3Q0U05nYk9qWTdNeTBwYkdCR0lycEFmekNWVUlCdFZ0dlFaY3RtMmQ2ZnFtcU5XVTRiamRIbEFr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 236
    },
    {
      "date": "Apr 18",
      "text": "Peace talks approach a critical juncture amidst escalating regional tensions.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 236
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
      "perspective": "US Perspective",
      "headline": "Trump's Optimism Amidst Continued Blockade",
      "summary": "Trump expresses optimism about a peace deal and the war's progress, while the US maintains its blockade of Iranian shipping and expands its military targeting of Iran-linked vessels globally.",
      "tone": "strained",
      "latestSinceUpdate": 215
    },
    {
      "perspective": "Iran Perspective",
      "headline": "Iran's Cautious Stance on Talks and Strait Access",
      "summary": "Iran expresses caution regarding peace talks and declares the Strait of Hormuz open, warning of strong responses to Israeli attacks despite facing continued US blockade.",
      "tone": "defiant",
      "latestSinceUpdate": 215
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Fragile Israel-Lebanon Ceasefire Under Strain",
      "summary": "A ceasefire between Israel and Lebanon is in place, facilitating some returns, but has been violated by Israeli strikes and Hezbollah rocket launches, raising concerns about its durability.",
      "tone": "anxious",
      "latestSinceUpdate": 215
    }
  ]
});

export default LATEST_SNAPSHOT;
