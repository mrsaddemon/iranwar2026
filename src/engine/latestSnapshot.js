export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 228,
  "lastUpdated": "2026-04-18",
  "lastSyncedAt": "2026-04-18T15:10:14.301Z",
  "warDay": 50,
  "summary": "Tensions escalate in the Middle East as Iran closes the Strait of Hormuz, fires on tankers, and the US enforces a blockade, while Israel conducts strikes in Lebanon amidst a fragile ceasefire.",
  "lastNarrativeUpdate": "2026-04-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 10,
    "summary": "An existing Israel-Lebanon ceasefire is under severe threat following Israeli strikes and Hezbollah rocket launches."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Apr 18",
      "text": "Iranian gunboats fire on tanker in Strait of Hormuz as Tehran reimposes restrictions.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE9EQVl4S0hjYWFiVnBPOEJPNEJPVnRqeHlqNmd3dzN0aUp2czNlNHk4QlpxVnJGb1kxZ3JoX1luTUVfOFFFSTRIRVhiMU80M2gxNjZSdDBjeFM0bE1TX0RpQkRwUmVvZHM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 228
    },
    {
      "date": "Apr 18",
      "text": "Iran closes Strait of Hormuz again, citing US 'piracy' and blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxNZm9WRHN1VHF4X2lmVmQ3OFRLTzlUN3ZWLWtMbWhwMWV5T2JSLU9FbV8zMGE2UkFiZ2xBMEt4UG9yQWNsMHVKUnVBM1B2bGRVUU9IWnJ1TU5aYTEyTjFfMXJkMkVXRERmMEFmcC04VzU4Tk55REtrR3ZOR1h6aDhBMDhyZHp3NW1FbXZLMWNYbXNmN3JwemJ4MzN6amZGcjQy?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 228
    },
    {
      "date": "Apr 18",
      "text": "US military turns back 23 vessels, enforcing blockade against Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQRGZDcnB1c0VnSDBkYU1XYzNES3N0cVBKRE1mX1lOc0FjNWs3ck5BZWdzQnlPRTZ2ZFhkektJR1lhS1ZHN014VGtXMGdpczA1ZWlxdEpDcXVUcDhWcmxjZzhMMVdkMlRKRGxybWpfLWd0eW5QcUhfYWtqNlgxVmtxYTBGTlMxbDhJY05EdVB0eEdvSE1DZjhTNnFIb3h2aThtZTlTU21MeklXa1RDd0lUMmdPcGRHVEJFZEppOVhocw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 228
    },
    {
      "date": "Apr 18",
      "text": "Israel strikes kill 4 Lebanese medics amidst ongoing conflict.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8AJBVV95cUxPZG4tS3g4YTJ2TnB2LU51V0JEZzJvYl9LTnhLS1FNRGlSRWRUUW9hOXhONFJ6WEk0S2ZteW40VUZ3UnotOHJQNldJM2IzWW1WRUgyRDVNd2hvU3FZN0RXamdER3ZqaEp3Y2V6NFZFUlZ5RHhlRS00blpybGVoSEJpTG5GX01UV1ZWV1F5Y3g0UWFpVkIxalEzdklWamhsT2Fxb3M1ZGVZNjBRWlFQeGlnRE5rZG9JMWJVMEhUanZSTVA1N1g1Q2NoMFdOOFZxa2NyRV9aRnpJZk5xaFlJVnpVYmJEdDdDSWFwSUZrRjYxbUVxa0dTRDNjYWs5VU5wVjBfOUI2ajBkeUt1Wm4wNVR6Vmp1TVNobkprSlFBWWY4T3hZemhPai05dFRiQ2NNS2dYRXUtYjgtaVhZMVBxN1NvYkhyUDZOQXEzQ3B2dGR2a1p3M3ZoTFZMVDhwMGhLVTcwMDdlZE1ja1Z5ZnBYMUJ6dg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Deccan Herald",
      "latestSinceUpdate": 228
    },
    {
      "date": "Apr 18",
      "text": "Hezbollah launches rockets at Israel.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxPc3Ztakk5YnFMcXozdEdSaXRxU1RQYnZNTm5rMm1mWktkNzctVzRqQ0tNekRvb2VtTkJjYmdVTHJKeDFxRWZfQ1pSV1BiYThkaDI2cEc5d2cyek9wbVU4NEl0bGpNQUMxb2c3SEROUHAzZFhTaHBZR0REcjBQMTlpTUYyMXdRSW9KOXY5VFVRWFJfQ1o4V09ITGdyV3Q0U05nYk9qWTdNeTBwYkdCR0lycEFmekNWVUlCdFZ0dlFaY3RtMmQ2ZnFtcU5XVTRiamRIbEFr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 228
    },
    {
      "date": "Apr 18",
      "text": "US military announces it will target Iran-linked ships worldwide.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxOSGJ6d0VPLVh3QXMyeVVEdDhhT3BSQ1ZGc1l2VFpFN2dtVndYNlJTdDdvTHQ5Nko2aEdYRUtmcUlYXzdVTkNRQmJzZThEWVp2MmRYZm9XUG84QU5IQVZnZGtWbzVzazVCamZJZWxCNzhHRUhva00zckwxWEZuak9zQ0xHWS1mSXNtM29JZnh2WVBzRTZt?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 228
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
