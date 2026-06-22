export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1037,
  "lastUpdated": "2026-06-22",
  "lastSyncedAt": "2026-06-22T22:56:49.008Z",
  "warDay": 115,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-22",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 7,
    "summary": "Despite progress in US-Iran talks and agreement on a roadmap to end military operations in Lebanon, Iran has closed the Strait of Hormuz citing ceasefire violations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 50,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "text": "Mediators report 'encouraging progress' in crucial US-Iran talks held in Switzerland.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxOcG5XRXhqYllSMDk1cko0aTRtX2dLWTFEVjMxYjhBVUh0WVZueEN4NEtLMUowNkVwNE1SRHFEUE5PMUhVY2o2MGJUbjEwMTlUalZrVzQtOUdxZG96YXFjc1c4LUFnaGtiMDFIeVdEaThKakJsdEJiVXZaX3ZHMFNDRk5R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1037
    },
    {
      "date": "Jun 22",
      "text": "Iran declares the Strait of Hormuz closed again, citing Israeli strikes in Lebanon and 'ceasefire violations'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQUHFHQURrcjZ2R1g4MkZTcmNqU2lsOFpDNzlUeE4tcFl2eWd5bFkxTEdPcFV6clh1NTFjMkFBTW9qWGhzRW14Y25HdmRseVItckNBLW11M3o4MGtHWExoZUZCNGpHWlFxa0ZUMEU4Z3VHT1NvZmFqbThiQWdrRUJhMXBod1JVb3lYdjNqTEVodGREamkwQ1c3ZThjMkktUDQ4Mm9pVklNMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1037
    },
    {
      "date": "Jun 22",
      "text": "Shipping stalls in the Strait of Hormuz following Iran's declaration of closure.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1037
    },
    {
      "date": "Jun 22",
      "text": "The U.S. and Iran agree on a roadmap for a final deal and a plan to end military operations in Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxPcG5zd2Vka1BqZDlWMjNVaEZwWk9EN1ZkU1ctTFVaOEtCMXdEdzNTM252ZmFNa2M3SF9HNUk0VHhpS29zN2MzelRtWnc0eDJCSVdQVTg1SUFwVlZndHp1UEpsZ0NYU2xoRHpRZjVfcUZiT25vUklzY1FFVjJVZkpiN1lORGJTbF80bUJGb2NvZlI1dGVhWFRyaVE5WVozMFl5VkZyZ01B0gGrAUFVX3lxTFBMNllIcW9fMUJSbUQ2aGlId05nZW9yX0ZEQnlmUE5JcmZCSkItRmpMQzFfNThFeHdZLVVwSmhyWmFucWctc3VzaEJmYTEzQ0JjSHpQRW9UNXZwbnZLZi13cndzSkcyanQ5N2VtSEhrdWJ6ZkxQdmdnZkhULUUzQ2ZFRHNXOXVaYkZRVUR1MWRhbTJyc1RxemFMZENidGxOMTVzcmFicnRJR3pfSQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1037
    },
    {
      "date": "Jun 22",
      "text": "Oil prices fluctuate, with reports of a previous drop below $75, amidst ongoing tensions in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1037
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (15 headlines)"
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
