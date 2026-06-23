export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1041,
  "lastUpdated": "2026-06-23",
  "lastSyncedAt": "2026-06-23T11:26:13.174Z",
  "warDay": 116,
  "summary": "US and Iran are engaged in crucial talks making progress towards a roadmap for a deal, even as Iran threatens to close the Strait of Hormuz and Israel and Hezbollah continue strikes despite a ceasefire.",
  "lastNarrativeUpdate": "2026-06-23",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A ceasefire agreement between Israel and Hezbollah is in effect but is frequently violated by both sides, leading to continued strikes."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "Jun 23",
      "text": "US and Iran make 'encouraging progress' in crucial talks, mediators say.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxOcG5XRXhqYllSMDk1cko0aTRtX2dLWTFEVjMxYjhBVUh0WVZueEN4NEtLMUowNkVwNE1SRHFEUE5PMUhVY2o2MGJUbjEwMTlUalZrVzQtOUdxZG96YXFjc1c4LUFnaGtiMDFIeVdEaThKakJsdEJiVXZaX3ZHMFNDRk5R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1040
    },
    {
      "date": "Jun 23",
      "text": "Iran says it is closing Strait of Hormuz over Israeli strikes in Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQUHFHQURrcjZ2R1g4MkZTcmNqU2lsOFpDNzlUeE4tcFl2eWd5bFkxTEdPcFV6clh1NTFjMkFBTW9qWGhzRW14Y25HdmRseVItckNBLW11M3o4MGtHWExoZUZCNGpHWlFxa0ZUMEU4Z3VHT1NvZmFqbThiQWdrRUJhMXBod1JVb3lYdjNqTEVodGREamkwQ1c3ZThjMkktUDQ4Mm9pVklNMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1041
    },
    {
      "date": "Jun 23",
      "text": "Conflicting statements issued over UN nuclear inspector access to Iran.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1041
    },
    {
      "date": "Jun 23",
      "text": "Israel and Hezbollah continue strikes despite ceasefire agreement.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBwNjdCeHBnM3dhMmtPUDV0OEw4UHJ1T3gxV3IySy1mWkdHcl96emxtTExkZjBKTkpzRjBEejdJWnlBRjdRR29DYUxaUlVpenFLYkFhRHkyQnZodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1041
    },
    {
      "date": "Jun 23",
      "text": "Pentagon seeks $80 billion from Congress for Iran War.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxOd1pWRFRnOWQyMVVzOXM2Ti1qUGJpY29NQ19fMldBVEhnbUJ2d3pfUFBNY1lCcEZ2QklwMzRTV1VYMndOekhNZGtKU0x5dm5XUHdKOENKRXM5bjdmZTNxSWNsNXlGT2dSMzFMUmdIY2xnRzB3RFl0RmFITF8xQThFZQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "WESH",
      "latestSinceUpdate": 1041
    },
    {
      "date": "Jun 23",
      "text": "U.S., Iran agree on roadmap for final deal and plan to end military operations in Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxPcG5zd2Vka1BqZDlWMjNVaEZwWk9EN1ZkU1ctTFVaOEtCMXdEdzNTM252ZmFNa2M3SF9HNUk0VHhpS29zN2MzelRtWnc0eDJCSVdQVTg1SUFwVlZndHp1UEpsZ0NYU2xoRHpRZjVfcUZiT25vUklzY1FFVjJVZkpiN1lORGJTbF80bUJGb2NvZlI1dGVhWFRyaVE5WVozMFl5VkZyZ01B0gGrAUFVX3lxTFBMNllIcW9fMUJSbUQ2aGlId05nZW9yX0ZEQnlmUE5JcmZCSkItRmpMQzFfNThFeHdZLVVwSmhyWmFucWctc3VzaEJmYTEzQ0JjSHpQRW9UNXZwbnZLZi13cndzSkcyanQ5N2VtSEhrdWJ6ZkxQdmdnZkhULUUzQ2ZFRHNXOXVaYkZRVUR1MWRhbTJyc1RxemFMZENidGxOMTVzcmFicnRJR3pfSQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1041
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
      "perspective": "US/Mediators",
      "headline": "Progress in US-Iran talks and efforts to secure shipping lanes",
      "summary": "Mediators report encouraging progress in US-Iran talks, with a mechanism being developed to ensure the Strait of Hormuz remains open. Vance is actively involved in peace talks following Iran's actions.",
      "tone": "strained",
      "latestSinceUpdate": 1038
    },
    {
      "perspective": "Iran",
      "headline": "Defiance over Hormuz closure amid Israeli actions",
      "summary": "Iran temporarily closed the Strait of Hormuz in response to Israeli strikes in Lebanon, asserting control over the vital waterway. Tehran stated the Strait is not a 'personal casino' for others.",
      "tone": "defiant",
      "latestSinceUpdate": 1038
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Continued conflict despite ceasefire declarations",
      "summary": "Despite US-brokered ceasefire agreements, Israel and Hezbollah have continued to exchange strikes and engage in military operations. The IDF reported capturing a Hezbollah drone factory in south Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 1038
    }
  ]
});

export default LATEST_SNAPSHOT;
