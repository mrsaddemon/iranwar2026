export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 226,
  "lastUpdated": "2026-04-18",
  "lastSyncedAt": "2026-04-18T13:43:44.923Z",
  "warDay": 50,
  "summary": "The Strait of Hormuz remains a flashpoint with Iran repeatedly declaring its closure and reopening amidst a US naval blockade, while the Israel-Lebanon conflict continues with ceasefire talks proving fragile.",
  "lastNarrativeUpdate": "2026-04-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "The Israel-Lebanon ceasefire appears to have collapsed due to ongoing strikes and rocket fire, with talks deemed a failure by Hezbollah."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.95
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
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
      "date": "Apr 18",
      "text": "Iran declares Strait of Hormuz shut down again over US 'piracy'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPX3BZbTNiYm9PQUVrYUdkbURCY0t1Y2pya1RhRVBDblE1a29SLW95RDljZmJFelF4Y1dIbll1cXNEZE8xOUlpMVZzRm9hQXJ4RDVHb1V4X2lGeUx2dVVGVFc4RmpxSGlETlI4bVRFMnlBMXJjREF5QjVWRDdvcUdzMFpGeUVDMFRSUi1oOVJrNDFGMXJ4TUJ1VGJ4UGxDZUlnSHhGb1lXcFRIY0xJS1NnRFZvelBGSlFKT25MYtIBwgFBVV95cUxPMlo1TmZCR0l1RWR1UXZHcHh0Tk9qakZoa3prZmkzcHNLcFNPUHZRU3lGcXBwNVoxYkRBSzhvQXlCYXNTQVBvMS0zOHU4QkEzRDQ0MXpZMDZ3RWJQTkdFWThMUUY1Nno4SXBhTGFlMHVUZUlfS2FpdDU5Ym55X2hxbElPYnRTdmlwVXdvSk4wTTNNUjc1XzhtUXV0ZTl5M2xHaDJUU1BwMnYzM3lucGRGeU5Dd2RReS1RZFdhbEhYbkh6UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 226
    },
    {
      "date": "Apr 18",
      "text": "Iranian gunboats fire on tanker in Strait of Hormuz as Tehran reimposes restrictions.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE9EQVl4S0hjYWFiVnBPOEJPNEJPVnRqeHlqNmd3dzN0aUp2czNlNHk4QlpxVnJGb1kxZ3JoX1luTUVfOFFFSTRIRVhiMU80M2gxNjZSdDBjeFM0bE1TX0RpQkRwUmVvZHM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 226
    },
    {
      "date": "Apr 18",
      "text": "Iran declares Strait of Hormuz open, raising hopes for peace deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxQdnQxRnJlVUlxSHluWFNTeGo3UGJmbTZhYkR2ZjFWRVc2TVROYk14TVByeGNHc1pWdEJqN1FLMTBGVlV5N1Vqem10ejVZd3lWSHNBUEYxTkxrYzVlRGZINFFsSmNWLTNKbzR4eHRXbGVDYUl2YU42SXItTUdnVGc1M3RZYzVsbTdyUW9vR2pJcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 226
    },
    {
      "date": "Apr 18",
      "text": "Israel strikes kill 4 Lebanese medics.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi8AJBVV95cUxPZG4tS3g4YTJ2TnB2LU51V0JEZzJvYl9LTnhLS1FNRGlSRWRUUW9hOXhONFJ6WEk0S2ZteW40VUZ3UnotOHJQNldJM2IzWW1WRUgyRDVNd2hvU3FZN0RXamdER3ZqaEp3Y2V6NFZFUlZ5RHhlRS00blpybGVoSEJpTG5GX01UV1ZWV1F5Y3g0UWFpVkIxalEzdklWamhsT2Fxb3M1ZGVZNjBRWlFQeGlnRE5rZG9JMWJVMEhUanZSTVA1N1g1Q2NoMFdOOFZxa2NyRV9aRnpJZk5xaFlJVnpVYmJEdDdDSWFwSUZrRjYxbUVxa0dTRDNjYWs5VU5wVjBfOUI2ajBkeUt1Wm4wNVR6Vmp1TVNobkprSlFBWWY4T3hZemhPai05dFRiQ2NNS2dYRXUtYjgtaVhZMVBxN1NvYkhyUDZOQXEzQ3B2dGR2a1p3M3ZoTFZMVDhwMGhLVTcwMDdlZE1ja1Z5ZnBYMUJ6dg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Deccan Herald",
      "latestSinceUpdate": 226
    },
    {
      "date": "Apr 18",
      "text": "Iran warns it will shut Strait of Hormuz if US blockade continues.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxQU2lzZi1aTEdqN3VGWTMtU0RBYjl4dDBxN3NLZWdvbUcwRlpZZXM4SFRaLUtMSUctVllqYWRQOEF6dU5CcVRHWXZ1X1hGRnRRRVd5MmdIb0ZUcEdfMWR0azJPYms5VzRCNnJpN25INjJjaUl6bWhTTE9KTFlFSTBLLTRtdjUtb1dWdFhjUm1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The National",
      "latestSinceUpdate": 226
    },
    {
      "date": "Apr 18",
      "text": "Hezbollah launches rockets at Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxPc3Ztakk5YnFMcXozdEdSaXRxU1RQYnZNTm5rMm1mWktkNzctVzRqQ0tNekRvb2VtTkJjYmdVTHJKeDFxRWZfQ1pSV1BiYThkaDI2cEc5d2cyek9wbVU4NEl0bGpNQUMxb2c3SEROUHAzZFhTaHBZR0REcjBQMTlpTUYyMXdRSW9KOXY5VFVRWFJfQ1o4V09ITGdyV3Q0U05nYk9qWTdNeTBwYkdCR0lycEFmekNWVUlCdFZ0dlFaY3RtMmQ2ZnFtcU5XVTRiamRIbEFr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 226
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
