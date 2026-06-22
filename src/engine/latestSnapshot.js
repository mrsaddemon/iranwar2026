export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1034,
  "lastUpdated": "2026-06-22",
  "lastSyncedAt": "2026-06-22T13:13:26.531Z",
  "warDay": 115,
  "summary": "US-Iran peace talks are underway in Switzerland with reported progress, while Iran has closed the Strait of Hormuz citing Israeli strikes in Lebanon and ceasefire violations, though oil flow continues despite warnings.",
  "lastNarrativeUpdate": "2026-06-22",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 1,
    "summary": "A ceasefire between Israel and Hezbollah is claimed to be back on by the U.S., but Iran cites ongoing Israeli strikes and violations as reasons for its actions, indicating extreme fragility."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Jun 22",
      "text": "Iran and US make ‘encouraging progress’ in crucial talks, mediators say.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxOcG5XRXhqYllSMDk1cko0aTRtX2dLWTFEVjMxYjhBVUh0WVZueEN4NEtLMUowNkVwNE1SRHFEUE5PMUhVY2o2MGJUbjEwMTlUalZrVzQtOUdxZG96YXFjc1c4LUFnaGtiMDFIeVdEaThKakJsdEJiVXZaX3ZHMFNDRk5R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1034
    },
    {
      "date": "Jun 22",
      "text": "Iran announces closure of the Strait of Hormuz over Israeli strikes in Lebanon and ceasefire violations.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQUHFHQURrcjZ2R1g4MkZTcmNqU2lsOFpDNzlUeE4tcFl2eWd5bFkxTEdPcFV6clh1NTFjMkFBTW9qWGhzRW14Y25HdmRseVItckNBLW11M3o4MGtHWExoZUZCNGpHWlFxa0ZUMEU4Z3VHT1NvZmFqbThiQWdrRUJhMXBod1JVb3lYdjNqTEVodGREamkwQ1c3ZThjMkktUDQ4Mm9pVklNMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1034
    },
    {
      "date": "Jun 22",
      "text": "Vance lands in Switzerland as US-Iran talks begin amidst Hormuz closure.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBFbVh2NGR4RU1xWVVYUExYN0FlNF8zRjFKenhqQlZnWk5OVkFJbzFlRHdJcUxwS1JiUFJoQ1dsUXFLN0tjMDVELUM3SHdVTjNMUTdLSXJBMGRKUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1034
    },
    {
      "date": "Jun 22",
      "text": "Oil is reported to be flowing through the Strait of Hormuz despite Iran’s warnings and closure claims.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1034
    },
    {
      "date": "Jun 22",
      "text": "IDF captures Hezbollah drone factory and launch site hidden inside south Lebanon mountain.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOdTR4NjRud0F2U0J0NXZGZDQwM3hVNmtJODVnRjN3eVJMTTltV1U1MHlGVFVwSHJwMUxMTWJnaWszMm5Jc3BuZ3NhaHRiQkNIM3NUd0YyN0JoYWQyczd6OUlyNmVBQ1kzaFVIWGV2T2R3X200RnNKN3A5UTRraHhWSHNsdGV3amhKQ1ZpTElBNU5QS3haaFJwenZwUGhoUHhtczJpRWJBNTBjc3A2RlA3OUdXUnlGbmRlTW0weA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1034
    },
    {
      "date": "Jun 22",
      "text": "U.S. claims Israel-Hezbollah ceasefire is back on, while Iran and US agree on roadmap to end military operations in Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTE5mbTdyZDlhemhJcF82dVJRRkM5amlNM1JoMUxNdXZPWm9qR1ZyOFlnOVJFMVNCNFpnUWh0RHcwZk5hSUdZeER1Z0pjR3NpWXJmb0hhbVViMVJ1NlYzNk5hc3Z6dlJ4ZDJhcHQwYUNzbE1KT1RTRjZlOHJB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 1034
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
      "perspective": "Iran",
      "headline": "Hormuz Closure and Talks",
      "summary": "Tehran asserts its right to close the Strait of Hormuz in response to alleged Israeli ceasefire violations in Lebanon, while simultaneously engaging in peace talks with the U.S. in Switzerland.",
      "tone": "defiant",
      "latestSinceUpdate": 1032
    },
    {
      "perspective": "US/International",
      "headline": "Diplomacy Amidst Escalation",
      "summary": "The U.S. is mediating peace talks between Iran and the U.S. in Switzerland, while monitoring the Strait of Hormuz and confirming a fragile ceasefire between Israel and Hezbollah.",
      "tone": "strained",
      "latestSinceUpdate": 1032
    },
    {
      "perspective": "Israel",
      "headline": "Ceasefire and Continued Operations",
      "summary": "Israel has agreed to a ceasefire with Hezbollah and committed to limiting actions in Lebanon, even as its forces continue operations against Hezbollah infrastructure.",
      "tone": "neutral",
      "latestSinceUpdate": 1032
    }
  ]
});

export default LATEST_SNAPSHOT;
