export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1277,
  "lastUpdated": "2026-07-13",
  "lastSyncedAt": "2026-07-13T07:58:02.281Z",
  "warDay": 136,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-13",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.93,
    "durationDays": 10,
    "summary": "A ceasefire is reported to be active in Lebanon, allowing tourism, but the primary US-Iran conflict continues to escalate."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 38,
    "oilDisruption": 90,
    "tradeImpact": 56,
    "sanctionsPressure": 49,
    "globalPressure": 57,
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
      "date": "Jul 12",
      "text": "US launches strikes on Iran for a second night.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTFBWM2xxSUF3aEVMRDZvd3BaWU1UbnJnd1dHRUxqOS12MzhMbDljeklxNFlMYUxuRkNwQlhSejdMUkVqWWRSY1Vnb25BUi1NalVUcmZIMW1HWDE1eUc3MEEzNlNtLXZsaHdEaDVwQjZaM2U3UHc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1277
    },
    {
      "date": "Jul 12",
      "text": "Iran fires on a ship in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxOVFYzekVvMlNULUZZc3ZlUkE5RmRjYVE0ZXJMLW80SzQ5MzhLRUt0UlZRRmxXbi1sQ3Q4REVTcXZNSVg3bFVwRnNwT3FKbXVBaGZvWWhuOUVLSUZ6X2dUTHlVMGcxVlRaR25EYkVkckw5VG55ZlZObmRQRjRMQ1JqclkwVm7SAYoBQVVfeXFMT0RzeVVLZHMxdEFSczJLVFpiODNfYjJXN0gtWFNsbGlveVJfQXkxendKY2J0UkJHQ0pnMGRBVFVwWk03ZExkc2tjb0paNzQzTXlTNXhYMnR3Nkh4R3NZOTB6RjF5X05iclhwMTBoVklQQks0UTBncUFIYzhCdzNEYmdERUdMWkJYdUxn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1277
    },
    {
      "date": "Jul 12",
      "text": "Iran attacks Bahrain, Kuwait, and Jordan after US bombings.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxQbzFBN0l4LWl2SWxzSGxUd1ZRQ25Pckc1bk9tcnlOcFYwcTJqdHJjU2NhNGFGbTNTUk90ZVB5Q0ZqT00yanlWNWpNR1BUdWtOOS1ZMkRFVlJnTjRiaUJGS0NEczZOWXVldEN6OGZIbG9zcVI5LUZwd2YzemNMYWdMTkNwdjQ0T1ZwQWR4YUpYNDVBcHZhdHBuVUgtNVA2aGk0ckQxOW5ybXFuUFNtYldaaFNKRGt6NHQ1dWMtNG12cWlmZ9IBxwFBVV95cUxQbE9Tbml3V3hjSXdXaGozdWZhUDJEYWVHckpmS1lxbjgyZGtxTjFxY0dkWExIZVQ2ZHhBaTNBZ1NPWlo3WTJieHlyYS1PNzVKODdTNVB0VUQ3ZVBvcFltZ0NDVEhxLURjb0tPSlBXSFhHbkNpRWVkNnVibmpYRFZhWkFvbmt0VjZEcU92SDROLTZRY2l3aExDT1dDNDYzLVlETTdTa1o0a3UwUXY3dFdqV0J4UWptaGpRVGRMbkV1V1QxemxsQlpB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1277
    },
    {
      "date": "Jul 12",
      "text": "Oil prices rise 4% as U.S. and Iran fight for control of Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxOVXpPQW5PT21veE5mSm1GdHRGSUd6UlNmZl9VbnluTWZmUE00UURUN3dIcFVJc0IwZ3pjRUY3UFk0ZzQ3QWJvOTVKMFIyMHZsUnpMRHI5eWllRllfVGtsYzhDN0t4QlZUN0tGaGtTQXhMRG9tN0YyZTRGaV84bjRPR1E4M2VwbHdMZDJaYURWeEJTRUxqR090SGNkcWdQeVhUY3lBbk13aExiX3pNMEFv0gG0AUFVX3lxTE80Z3RnTk1BTHFySjc4N3ZmYXkyQkdEOTdNTlBNRTdhT0xadFk2d05FYUpvc0dsOENwN0hRdE5MZml1d0RpMGxwd0dxaGhlVktyQ3Z5V2RaM0ZkNWs3VHBOS05YQ3V2djNoOHNPT1NLc216RmtiM1Q2WVNjbGl3aktBRUxxRjVneHpXTTZmOWlmSUZMTEpaODBfQnA1eUNmcWQtZ2xYd1BFcV9YU2pROHJOTF9Haw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1277
    },
    {
      "date": "Jul 12",
      "text": "Concerns raised about depleted US weapon stocks amid escalating conflict.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1277
    },
    {
      "date": "Jul 12",
      "text": "Hezbollah lair unearthed in Beaufort, Lebanon; IDF prepares for long stay.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE9fNnJZX1dsQXM1b01QbXByazJEZFdoRW1xbTl5S2NHV0I2ZDk2YV9nRU5uRjQycVNRTWVDNnZlZmhpeUMza2VWblBNeW93TTk4V09VS2dn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Ynetnews",
      "latestSinceUpdate": 1277
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
      "perspective": "US/Western",
      "headline": "Holding Iran Accountable Amid Strait Tensions",
      "summary": "The United States is conducting strikes to hold Iranian forces accountable for attacks on shipping and to ensure freedom of navigation in the Strait of Hormuz. President Trump has agreed to talks but declared a previous ceasefire 'over'.",
      "tone": "defiant",
      "latestSinceUpdate": 1275
    },
    {
      "perspective": "Iranian",
      "headline": "Retaliation and Strait Closure Claims",
      "summary": "Iran claims to have closed the Strait of Hormuz and is targeting Gulf states in response to intense US and Israeli strikes. Iranian forces continue to engage in exchanges with US military.",
      "tone": "defiant",
      "latestSinceUpdate": 1275
    },
    {
      "perspective": "Israeli",
      "headline": "Strikes in Iran and Lebanon Presence",
      "summary": "Israel has conducted strikes in Iran and is preparing for a prolonged presence in Lebanon to counter Hezbollah, despite a local ceasefire. This comes as a Hezbollah lair was reportedly unearthed.",
      "tone": "strained",
      "latestSinceUpdate": 1275
    }
  ]
});

export default LATEST_SNAPSHOT;
