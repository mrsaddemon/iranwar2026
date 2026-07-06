export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1189,
  "lastUpdated": "2026-07-06",
  "lastSyncedAt": "2026-07-06T09:46:03.071Z",
  "warDay": 129,
  "summary": "The region is experiencing active conflict with US-Iran and Israel-Iran/Lebanon exchanges of strikes, ongoing diplomatic efforts regarding the Strait of Hormuz, and the funeral of Ali Khamenei in Iran.",
  "lastNarrativeUpdate": "2026-07-06",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 60,
    "summary": "No active ceasefire is in effect, despite ongoing diplomatic efforts to de-escalate specific issues."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 85,
    "oilDisruption": 70,
    "tradeImpact": 66,
    "sanctionsPressure": 64,
    "globalPressure": 81,
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
      "date": "Jul 02",
      "text": "Millions expected in Tehran for funeral of Ali Khamenei.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNREl1YVRDbjhlc2lVdzRGTVpWdXpKc3FDaERlUkh1ajRrVllZazM4WW8yZ2QwZEU3QlZnNXlVT0ZCNmFpOTRoQ0lPejRuSzdCb25FbFcxV0lWMDNoYXpQSXdOVXhPREp0OUZZbko1ZzVwYTlxMDNiU3pwSkt1dDBkZDJKOGYxMXhSUWNpNmIybXlxU3drMzNCS3FYQThmNE1GRlM0ZWNNYUtubzdIbXZqQWRrbnkzSmRNRlHSAb8BQVVfeXFMTjRTWWZva1RnMDg4U1EwSXk0X0VLdHB0NlFWdXVPcnhsd0VsVHNYV3lVWkVxYzZUbW5KcHVmOWwzRHlGbnJxMjdaYVk1S1o4T3ltSVNmQURJeDF5VUozVlR0Q0dKVkd6SG9VZHdBWlo0MER2VUVCV1pOb0stU3B6ano2eUlXS3ZIZ1hzRkd4T091MTAxdWZseDhtYVBoUlljNXFXLUp1UWtuUEdXTDg4MWVsNTFHQ1VRS1R3SVRKSEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1189
    },
    {
      "date": "Jul 02",
      "text": "Day one of Khamenei funeral ends, Israel bombs Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxQZ0xNSk5zYk8xX2d2LUVtRHYzMFVlNHpLcm80OXBwbnNXam12MWREWUh2Rl9MSWpPVFEwc0xqVk9VNGgxc2RWR1diSWIySk1uY3lncmpQLTV3ak1RYWFDVHZsYWdJV0VCdDVTRkpzZ2wzZXFLN2dxN1JOZkJucVdOX3hvbEQ1UmE3emhoVmxjdjNQUVlLbHBhQzhURnRQQU1NSmhZbGY4ZHp5YkMzV2dMYzVscnA2QWt10gG-AUFVX3lxTE9ZX3BIdmRlRWswdTRDVllmRW9ZTWtLRHRMeVlKc1MtYi0yX2k5VXFfVUdodFBzbHlZLUx4Q1h5NFJNSXM4ZXJkWmNxOEc1ODFrS0JpZ2t6M3hNeXNDWFV4ak9LYU5EdnB0UFZCS3JTbndyektUajdobGdocC1SOGkwdXhPTGdDQ2c1RS1CVVp2dnJybjVIc0VzclBqbng2b1V5TTVCeEh0SlNGQWpHY1hfSnRyMDZjcTl5d0RYNHc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1189
    },
    {
      "date": "May 28",
      "text": "US and Iran reach tentative agreement though Trump hasn’t signed off on it.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMicEFVX3lxTE9nU2JJbWg5ZjRFYUNaaVV2b19hT25aeWtFZER1Tkhyby1yNU16d3FwNVVZblBBemQ4eTVwMWNTYVY1NzNIRnpzU193WFdjUzhYakhsNmxSTkpkbnJCSGsxcU9YeENCQ1RWR2kwdFl0bGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1189
    },
    {
      "date": "Recent",
      "text": "Israel conducts strikes in Iran, IDF says.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPY1ZJZk90Wld1cXluZE45NDJSUERIRW82aGJ0TWZCbkVjNkNuOU8wODNyZGpLbnl4ODk4M2JPNnpLbHBnUE1MZ1RIXy1XdGhGNmJBOTZuaVhpU0ZHa2RJLUNCTnYtMkpPRUxTZmktSHJ3SWUwdVVmdTNWTEdUT2RiZUVyNW5JdThEYl9sMFAzWUEyZjlMLWsyUWUydFViZjh5QjM3dWk4QTZKV3V1bTZUQjdGU1VXNmlJbTAwctIBwgFBVV95cUxNZXJGWHhNdExYZEloUFlYbE9JMEwtbVJxUFBjd1ZzS1Fidk4yOWhMSkpoOUxOaklkelpWN25kRm1fM2FBaGhHT3ptanBqc2hRTGlSZmhGamxnR0YwZ0RDSy1uSk9MUDhwZEJVajJvbXZjMTRzRV9FQjQ5LUZyY0xYcXkyNFlmU0sycWU1TlFZRW82Yjd1NkxaYTJEbjFwajl4SGNwZE41c0tucFlsSnZZWkswVldSd0k1eDVMZ1dKZkF2UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1189
    },
    {
      "date": "Recent",
      "text": "Iran Targets Neighbors as U.S. Condemns ‘Aggressive’ Strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxQeERDdWlJbmtObWhLd0JWVG1LNXlzanlYZEpralU4OE5WWm9ZU0pjVmxTVlhvQ1Q2dTBlV0E5UWlGZEt0a3JPMkNRN2ZuLVQ3dUIzQllZNTR3MlFJbWk3azBhMTZRZDVCS0NtYk1XNEgzLWVINTJnQVdxajg4Rm1jLQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1189
    },
    {
      "date": "Recent",
      "text": "US and Iran exchange strikes as Israel intensifies attacks on southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNUXdrc3JheHlJVnU3Nlc0Sm1XSnpWQm05cHFpVktvbmxOaEkzMFpWNUNtbUZEYVhwSUNMVTBfUGtBSjI0d00zOWNnVTh5UGd0WmROckRSbGdxLWVjRlpYREJvcEVLQWdRNHpHOTVhckJMOF9zQl80UWkyeDdNcXg3dWhwUFk5MEQ5bENkMk0tcFR4anBGQkY2Nzd6ZVczZ1RHWUw1cEdOalNXQjBjWFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1189
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
      "headline": "Mourning Khamenei Amidst Foreign Strikes and Truce Talks",
      "summary": "Iran is focused on the funeral of its leader Ali Khamenei, while simultaneously responding to US and Israeli military actions. Despite threats to halt talks, Iran has engaged in a truce MoU with the US.",
      "tone": "strained",
      "latestSinceUpdate": 1187
    },
    {
      "perspective": "Israel",
      "headline": "Asserting Control and Striking Regional Threats",
      "summary": "Israel continues its military operations, conducting strikes in Iran and Lebanon, and asserting control over Hezbollah's tunnel networks. The government also notes requests for annexation from some Lebanese Christian villages.",
      "tone": "defiant",
      "latestSinceUpdate": 1187
    },
    {
      "perspective": "United States",
      "headline": "Retaliation, Maritime Security, and Diplomatic Engagement",
      "summary": "The US has engaged in retaliatory strikes against Iranian military sites and secured the Strait of Hormuz for oil traffic. Concurrently, it has pursued diplomatic channels, reaching a 60-day truce MoU with Iran.",
      "tone": "neutral",
      "latestSinceUpdate": 1187
    },
    {
      "perspective": "Global Energy Market",
      "headline": "Hormuz Reopens, Output Rises, Prices Stabilize",
      "summary": "The reopening of the Strait of Hormuz and increased oil output by OPEC+ allies have led to a recovery in oil traffic. This has resulted in oil prices hovering near pre-conflict levels, easing immediate supply concerns.",
      "tone": "neutral",
      "latestSinceUpdate": 1187
    }
  ]
});

export default LATEST_SNAPSHOT;
