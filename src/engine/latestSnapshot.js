export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 225,
  "lastUpdated": "2026-04-18",
  "lastSyncedAt": "2026-04-18T12:26:57.485Z",
  "warDay": 50,
  "summary": "The Strait of Hormuz has seen renewed restrictions imposed by Iran, citing US 'breaches of trust' and 'piracy', while the US military continues to enforce a naval blockade against Iran, and a fragile 10-day ceasefire between Israel and Lebanon is threatened by ongoing hostilities.",
  "lastNarrativeUpdate": "2026-04-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A 10-day ceasefire between Israel and Lebanon was agreed upon, but reports of Israeli strikes and Hezbollah rocket launches indicate its fragility and partial violation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
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
      "date": "Apr 17",
      "text": "Iran’s Military Says It Has Reimposed ‘Strict Control’ of Strait of Hormuz",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTE1PclNJckZUN0o5SXVGa1REVkhfVG9wZUx6T2E4Z1R0SkpmWW9MdE5fU2RaaEhpaGt2dk9Ucm5lLURRV085S3hfb1hWSl9TdjRKc2t4WFZqSHcxeTNqbjI4UHVDczlINHRpcktodGFCLS1ZN3pDN0ZuZ2dn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 225
    },
    {
      "date": "Apr 17",
      "text": "Iranian gunboats fire on tanker in Strait of Hormuz as Iran reimposes restrictions",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxPcnhNWURXRlA0ekNQTmNoOExNeTUzaTVja3dCdzVrRF9ORjRtSy1YclE0U3FUZlQ5Q1otLW9oa3I1V3RBVE1OcVoxYjVTeEZBRVN2T2paVm1ac0NJLXcyUmpURWwyMnllREIxMXZJY3AzRkhUQzM5bjdfMDZybGlEVUhfTDdsZ0F3dmhJ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Newsday",
      "latestSinceUpdate": 225
    },
    {
      "date": "Apr 17",
      "text": "US forces turn 23 vessels back to Iran, enforcing blockade, military says",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQRGZDcnB1c0VnSDBkYU1XYzNES3N0cVBKRE1mX1lOc0FjNWs3ck5BZWdzQnlPRTZ2ZFhkektJR1lhS1ZHN014VGtXMGdpczA1ZWlxdEpDcXVUcDhWcmxjZzhMMVdkMlRKRGxybWpfLWd0eW5QcUhfYWtqNlgxVmtxYTBGTlMxbDhJY05EdVB0eEdvSE1DZjhTNnFIb3h2aThtZTlTU21MeklXa1RDd0lUMmdPcGRHVEJFZEppOVhocw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 225
    },
    {
      "date": "Apr 17",
      "text": "US military will target Iran-linked ships worldwide, broadening scope beyond blockade",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxOSGJ6d0VPLVh3QXMyeVVEdDhhT3BSQ1ZGc1l2VFpFN2dtVndYNlJTdDdvTHQ5Nko2aEdYRUtmcUlYXzdVTkNRQmJzZThEWVp2MmRYZm9XUG84QU5IQVZnZGtWbzVzazVCamZJZWxCNzhHRUhva00zckwxWEZuak9zQ0xHWS1mSXNtM29JZnh2WVBzRTZt?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 225
    },
    {
      "date": "Apr 17",
      "text": "Israel and Lebanon agree to a 10-day ceasefire",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxOczFQSjR1cG9GRUhvaXBtaWl6VGZZQjlEdGp6OXMydzVRR3NHUE9IVl9MYWZVNXdhQW83bjRaU2dUYThKMlJZWTZHcEpzQnNmUGdNSWYyUUJkT0JJRDJUcWJCSEJ6S1N1UzF4UVU1N2JITjMybU16Njg1UzNjcW93Y0JKODlRNU9DOWxTMUlSQ1pMRjM2UUJNZloweWdVRjl3UFR1MERB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 225
    },
    {
      "date": "Apr 17",
      "text": "Hezbollah launches rockets at Israel",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxPc3Ztakk5YnFMcXozdEdSaXRxU1RQYnZNTm5rMm1mWktkNzctVzRqQ0tNekRvb2VtTkJjYmdVTHJKeDFxRWZfQ1pSV1BiYThkaDI2cEc5d2cyek9wbVU4NEl0bGpNQUMxb2c3SEROUHAzZFhTaHBZR0REcjBQMTlpTUYyMXdRSW9KOXY5VFVRWFJfQ1o4V09ITGdyV3Q0U05nYk9qWTdNeTBwYkdCR0lycEFmekNWVUlCdFZ0dlFaY3RtMmQ2ZnFtcU5XVTRiamRIbEFr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 225
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
