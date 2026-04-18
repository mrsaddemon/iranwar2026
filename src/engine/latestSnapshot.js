export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 235,
  "lastUpdated": "2026-04-18",
  "lastSyncedAt": "2026-04-18T20:49:19.489Z",
  "warDay": 50,
  "summary": "Iran has reimposed restrictions on the Strait of Hormuz, citing a US naval blockade and firing on ships, while Israel has conducted strikes in Lebanon, violating a ceasefire.",
  "lastNarrativeUpdate": "2026-04-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 5,
    "summary": "The Israel-Lebanon ceasefire has collapsed following confirmed Israeli strikes against Hezbollah and subsequent warnings from Iran."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
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
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
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
    "allianceInfluence": 46
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
      "text": "Iran fully closes the Strait of Hormuz, citing a US blockade and reports of firing on ships.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxOaWhWNHdua3F2cEE3RVNzZFNHV1o5N0RsOFFybkxtOThyWm5BZ2MzNXRsYTFuVnJHREp1LVotYWJidXc1T2NqM0RzM2NMQmtNdXlyQ1ViZ0RhaEJRckJIVDY2bURJZXpfMW5hZTlWT0F4VGlsdUVRYnlOYlVXNERxWG9IeUN4S2ZZUmJGUkJkUzAwY1FsQ1c3NVFRQWo5N0Rq?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 235
    },
    {
      "date": "Apr 17",
      "text": "The IRGC states the Strait of Hormuz will remain closed until the US blockade is lifted.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPX3BZbTNiYm9PQUVrYUdkbURCY0t1Y2pya1RhRVBDblE1a29SLW95RDljZmJFelF4Y1dIbll1cXNEZE8xOUlpMVZzRm9hQXJ4RDVHb1V4X2lGeUx2dVVGVFc4RmpxSGlETlI4bVRFMnlBMXJjREF5QjVWRDdvcUdzMFpGeUVDMFRSUi1oOVJrNDFGMXJ4TUJ1VGJ4UGxDZUlnSHhGb1lXcFRIY0xJS1NnRFZvelBGSlFKT25MYtIBwgFBVV95cUxPMlo1TmZCR0l1RWR1UXZHcHh0Tk9qakZoa3prZmkzcHNLcFNPUHZRU3lGcXBwNVoxYkRBSzhvQXlCYXNTQVBvMS0zOHU4QkEzRDQ0MXpZMDZ3RWJQTkdFWThMUUY1Nno4SXBhTGFlMHVUZUlfS2FpdDU5Ym55X2hxbElPYnRTdmlwVXdvSk4wTTNNUjc1XzhtUXV0ZTl5M2xHaDJUU1BwMnYzM3lucGRGeU5Dd2RReS1RZFdhbEhYbkh6UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 235
    },
    {
      "date": "Apr 17",
      "text": "The IDF confirms carrying out strikes against Hezbollah in Lebanon, stating operatives violated the ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi5wFBVV95cUxQZmxOSkpPTmxrVTVrQUpGWDVhcG44WGFtVHAwcWFBT19lQ2tsbV92SmFlM3djRk03c0xUOWlwMEhWLVZVVnFuRkJSSHp0R0YxNGpGWWdYY1hzTlpubU8ybk1kUjBBUHFCeC1VTjZacEhMc2E4b1BHTkd0VW8wWkdFWlBMQ2dUdk01bExNbjhFTVdodkJzSHNpaFlhT2JWcmM4S2poeU55d0NZdVJjWFRHSkRPazNQSDlLUkJWcGczcTB3V3hCdDdJMTNiZU1Hd0dfNDJ6RVJFWnlCZGkwZDF4eHBXMktaSGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 235
    },
    {
      "date": "Apr 17",
      "text": "Israeli strikes in Lebanon kill 4 Lebanese medics.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8AJBVV95cUxPZG4tS3g4YTJ2TnB2LU51V0JEZzJvYl9LTnhLS1FNRGlSRWRUUW9hOXhONFJ6WEk0S2ZteW40VUZ3UnotOHJQNldJM2IzWW1WRUgyRDVNd2hvU3FZN0RXamdER3ZqaEp3Y2V6NFZFUlZ5RHhlRS00blpybGVoSEJpTG5GX01UV1ZWV1F5Y3g0UWFpVkIxalEzdklWamhsT2Fxb3M1ZGVZNjBRWlFQeGlnRE5rZG9JMWJVMEhUanZSTVA1N1g1Q2NoMFdOOFZxa2NyRV9aRnpJZk5xaFlJVnpVYmJEdDdDSWFwSUZrRjYxbUVxa0dTRDNjYWs5VU5wVjBfOUI2ajBkeUt1Wm4wNVR6Vmp1TVNobkprSlFBWWY4T3hZemhPai05dFRiQ2NNS2dYRXUtYjgtaVhZMVBxN1NvYkhyUDZOQXEzQ3B2dGR2a1p3M3ZoTFZMVDhwMGhLVTcwMDdlZE1ja1Z5ZnBYMUJ6dg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Deccan Herald",
      "latestSinceUpdate": 235
    },
    {
      "date": "Apr 17",
      "text": "The US is reportedly preparing to start boarding Iran-linked ships in the coming days.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQeno2aWF1ME02ZDdTSFAtM3Q0N29WNjAzV3JDLXEyQXM0aVdkaGc3WDhNUm1qSkY1X2ZFeS1CVldnMk5JYm5tcFZNQVg4eXNMNm1ZMkhTR3ZhV0RyZW1oc2kzVWZ2bWRodFlpYWQ4V244Q0VUR2tLa1pIV05yd1JXa1RMeXZKeWRXUnIyeHl3ZkZITURkWHRlbjFTcGNRSC12VlNZdjU3RmZ1Vmw2Tkg2U3ZQSTktWmM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "WSJ (via Google News RSS)",
      "latestSinceUpdate": 235
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
