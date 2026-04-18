export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 222,
  "lastUpdated": "2026-04-18",
  "lastSyncedAt": "2026-04-18T10:10:58.364Z",
  "warDay": 50,
  "summary": "The Strait of Hormuz remains a flashpoint with Iran claiming control amid a continued US blockade, while a fragile Israel-Lebanon ceasefire is threatened by recent strikes and US statements.",
  "lastNarrativeUpdate": "2026-04-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 7,
    "summary": "The Israel-Lebanon ceasefire is active but highly fragile, threatened by recent Israeli strikes and US statements regarding its potential non-extension."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
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
      "text": "Iran claims Strait of Hormuz shut down again over US 'piracy'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPX3BZbTNiYm9PQUVrYUdkbURCY0t1Y2pya1RhRVBDblE1a29SLW95RDljZmJFelF4Y1dIbll1cXNEZE8xOUlpMVZzRm9hQXJ4RDVHb1V4X2lGeUx2dVVGVFc4RmpxSGlETlI4bVRFMnlBMXJjREF5QjVWRDdvcUdzMFpGeUVDMFRSUi1oOVJrNDFGMXJ4TUJ1VGJ4UGxDZUlnSHhGb1lXcFRIY0xJS1NnRFZvelBGSlFKT25MYtIBwgFBVV95cUxPMlo1TmZCR0l1RWR1UXZHcHh0Tk9qakZoa3prZmkzcHNLcFNPUHZRU3lGcXBwNVoxYkRBSzhvQXlCYXNTQVBvMS0zOHU4QkEzRDQ0MXpZMDZ3RWJQTkdFWThMUUY1Nno4SXBhTGFlMHVUZUlfS2FpdDU5Ym55X2hxbElPYnRTdmlwVXdvSk4wTTNNUjc1XzhtUXV0ZTl5M2xHaDJUU1BwMnYzM3lucGRGeU5Dd2RReS1RZFdhbEhYbkh6UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 222
    },
    {
      "date": "Apr 17",
      "text": "Iran's military states it has reimposed 'strict control' of Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 222
    },
    {
      "date": "Apr 17",
      "text": "US military confirms halting economic trade with Iran by sea.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 222
    },
    {
      "date": "Apr 17",
      "text": "Strait of Hormuz opens for commercial ships, but US blockade on Iran continues.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxPQmw1b29EY1BkaUNWaXlTZU83UXRSUnRnbVRxaFVDY2Z4b1RjNUU3amgwT0ZuSVlic1N2eTh6UnpvbTA2Nk92SFlzRXVuWVF6V3M1NWNUODVFaFdPZzlJYTlJVTVqWGdNYkg0c3pQWFRnNExFaExTTXZ0cUtaRE10Nk82X3l2d21BZU5rX3JwTUJ6eE0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 222
    },
    {
      "date": "Apr 17",
      "text": "Israel strikes kill 4 Lebanese medics, threatening the Lebanon ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8AJBVV95cUxPZG4tS3g4YTJ2TnB2LU51V0JEZzJvYl9LTnhLS1FNRGlSRWRUUW9hOXhONFJ6WEk0S2ZteW40VUZ3UnotOHJQNldJM2IzWW1WRUgyRDVNd2hvU3FZN0RXamdER3ZqaEp3Y2V6NFZFUlZ5RHhlRS00blpybGVoSEJpTG5GX01UV1ZWV1F5Y3g0UWFpVkIxalEzdklWamhsT2Fxb3M1ZGVZNjBRWlFQeGlnRE5rZG9JMWJVMEhUanZSTVA1N1g1Q2NoMFdOOFZxa2NyRV9aRnpJZk5xaFlJVnpVYmJEdDdDSWFwSUZrRjYxbUVxa0dTRDNjYWs5VU5wVjBfOUI2ajBkeUt1Wm4wNVR6Vmp1TVNobkprSlFBWWY4T3hZemhPai05dFRiQ2NNS2dYRXUtYjgtaVhZMVBxN1NvYkhyUDZOQXEzQ3B2dGR2a1p3M3ZoTFZMVDhwMGhLVTcwMDdlZE1ja1Z5ZnBYMUJ6dg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Deccan Herald",
      "latestSinceUpdate": 222
    },
    {
      "date": "Apr 17",
      "text": "US military threatens to strike Iran's power plants and energy industry if ordered.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOaEItbU9FVnJLN1l1RktWRkdtZGZiNGk1US1JTm0zRWN3MTNTNmpPVmJQYmV1bUxkRTV5WXBqVnVJWnhlM2tQbU54cXRMbF9IR0NyLW5STnV5WWl4MnM0bkJTdjhMejJwZHhuWXYwUVJaN0RZektTNHRTemtNbUdfSWpVV3dKZnFPMmdOeVVvR200c2swZFNVeHdEUnhGX0tHUGNtVDRxVHRBYTM2eG43bnJpMGlCQTAzLUVuaWwtbTc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 222
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
