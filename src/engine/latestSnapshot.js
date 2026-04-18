export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 217,
  "lastUpdated": "2026-04-18",
  "lastSyncedAt": "2026-04-18T05:46:20.027Z",
  "warDay": 50,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-18",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "A ceasefire between Israel and Lebanon is reported to be active, allowing thousands of Lebanese to return home, though the broader US-Iran conflict remains without a truce."
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
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
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
    "nuclearIndex": 10,
    "escalationLevel": 38,
    "oilDisruption": 80,
    "tradeImpact": 48,
    "sanctionsPressure": 49,
    "globalPressure": 55,
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
      "text": "Iran declares the Strait of Hormuz 'completely open' for commercial ships.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxPTFVqRGo4U3g4OGZ2TWs4M2FueTVCQUxiM0xiUnJUTEhuQlJqT0xMZXFhY1FKT2ZYdTZaYWVvcGU3c2tMemlZWHRpNW9MSkFJMFN6cWdjbU5xWFN0RTFkMmFrNXlzVHFuUVJzSk9tTTczN0V6My1lTzdJLV92M1pHNkJNaVd2NmwzdHNNcnpmZU9NWFplYURGZkV3OEFhOVRGeHBXc1ZaTnF6MU5DbDVtVkhLWng0OUpGWk1HRTlNbzFEQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 217
    },
    {
      "date": "Apr 18",
      "text": "U.S. President Trump states the U.S. blockade on Iran will remain in full force until a peace deal is reached.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 217
    },
    {
      "date": "Apr 18",
      "text": "U.S. military turns back ships attempting to reach Iranian ports amid the ongoing blockade.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 217
    },
    {
      "date": "Apr 18",
      "text": "U.S. military announces it will target Iran-linked ships worldwide, broadening the scope beyond the immediate blockade zone.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxOSGJ6d0VPLVh3QXMyeVVEdDhhT3BSQ1ZGc1l2VFpFN2dtVndYNlJTdDdvTHQ5Nko2aEdYRUtmcUlYXzdVTkNRQmJzZThEWVp2MmRYZm9XUG84QU5IQVZnZGtWbzVzazVCamZJZWxCNzhHRUhva00zckwxWEZuak9zQ0xHWS1mSXNtM29JZnh2WVBzRTZt?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 217
    },
    {
      "date": "Apr 17",
      "text": "Israel strikes kill 4 Lebanese medics, indicating continued conflict in the region.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 217
    },
    {
      "date": "Apr 17",
      "text": "Hezbollah launches rockets at Israel, maintaining cross-border hostilities.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxPc3Ztakk5YnFMcXozdEdSaXRxU1RQYnZNTm5rMm1mWktkNzctVzRqQ0tNekRvb2VtTkJjYmdVTHJKeDFxRWZfQ1pSV1BiYThkaDI2cEc5d2cyek9wbVU4NEl0bGpNQUMxb2c3SEROUHAzZFhTaHBZR0REcjBQMTlpTUYyMXdRSW9KOXY5VFVRWFJfQ1o4V09ITGdyV3Q0U05nYk9qWTdNeTBwYkdCR0lycEFmekNWVUlCdFZ0dlFaY3RtMmQ2ZnFtcU5XVTRiamRIbEFr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 217
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
