export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2040,
  "lastUpdated": "2026-08-20",
  "lastSyncedAt": "2026-08-20T03:05:11.257Z",
  "warDay": 174,
  "summary": "The ongoing conflict sees the U.S. imposing severe economic sanctions on Iran amid continued naval tensions in the Strait of Hormuz, while Israel conducts strikes in Gaza and Lebanon, and Iran considers retaliatory actions against U.S. assets.",
  "lastNarrativeUpdate": "2026-08-20",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire or de-escalation efforts are reported amidst ongoing military and economic hostilities."
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
        "aggression": 0.9
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
    "nuclearIndex": 40,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Aug 18",
      "text": "U.S. announces 'crushing economic operation' and 'economic D-Day' on Iran, warning nations against support.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE96dTlXTXdLdkJfWHpuYUtTRlp1dDh5SEd2a2F6ZUxwcTJCa3kxRXhqaUE1aHhmWTFxOG9Zd21SQzBsalAyRjN1czlieHlXT1lIT1MtcnFDM0tTX1dCeDJqRHdJTXZZYjVHLXRndEJlZ1N6akkyMWRmR2Z5TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2040
    },
    {
      "date": "Aug 18",
      "text": "Strait of Hormuz naval blockade continues, with U.S. conducting stealth operations to transport oil.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMia0FVX3lxTFB6cnBGdDhxTW9hTE5vaXdadmx4NVFFb1lsc2ZRRWlGZTd3MnVJamt1Q0VpSzBHblBIMHlqTVhUN2pvaGc2RVBiRlJHOTJwTnpCT0h0bUwzREgwb3h6VTNHc3lMaFpzbmt1di04?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 2040
    },
    {
      "date": "Aug 18",
      "text": "Israel pounds Gaza and strikes Lebanon, while considering strikes on Iran for Hezbollah attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxNRXhvNkxYc1FyX0YxVzZZTXBLeW9GVnhVT21GNjlrbmhQSTZpZkdxVmhubVZPcTIxeEVwLUZnMUdiTUYwc3BERmxoWXBNVm5BNGxQOWVwcldhcDFWMC16aXdKVjJrUzlmNVV6SXVtV3dsLVpOcGgzWm1SNkZ1MTBiOGdVaWpJYzlvMEVlOQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Japan Times",
      "latestSinceUpdate": 2040
    },
    {
      "date": "Aug 18",
      "text": "Iran weighs strikes on U.S. military assets in Europe if Washington escalates conflict.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2040
    },
    {
      "date": "Aug 18",
      "text": "Houthis claim attacks on eight Saudi oil tankers.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPUDg3LU9wQW5ZOTJ4NmdGeC1LeWFKWC1lQV9wUWNnS1VXbWNDQ21RaDZOOGRHM29rMTJsTG8yZ1dFM0wxMXZvNDZlcXBGcTk1SE5ja3JydFBNdzdVTVhsWGpvbHBrcjBxd256MnBMU1pTUkZMZ2lDMC1DNUVKSGIydUZfdndORXEzVUhxenhMOHVZVjV0T2pZVw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 2040
    },
    {
      "date": "Aug 18",
      "text": "U.K. condemns Israeli E1 settlement tender as 'unacceptable and destructive'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMigwJBVV95cUxQM1NlM1hmeFF5S3B2ejIxX2poWk1aZlRUY05EZFNGVndJZzV6emc5cjl0aTJMZmZacTUydEVFYlkxMDVsTGozb1JwMFA5YjFWT0ZPYVk4ZzFQUlFTazFrS2V4NmxQWE5kLWRJeDVFTlRxM0ZPdkpQWEgtYXhHX2djc3VWN3U5V0FCeUdMSml0TENKSmNwT1VKcHZROGJMcGRoNTl6Y0RRR2ZMV041VUp1STdtaExNX3l0bjItbzdzVDRyV0VNUnVaVGpkam1jZVhtZVJzbTNqMWkwLTJYVDRPTzNmcTN3THRZMU5ONFVSdHlTOC1weDVkYm5td1R1WXdXNUZR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Haaretz",
      "latestSinceUpdate": 2040
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
      "perspective": "US/Western",
      "headline": "Iran's Aggression Prompts Sanctions, Deconfliction Efforts",
      "summary": "The US is responding to Iran's escalating actions, including missile launches and Strait of Hormuz incidents, with fresh sanctions and diplomatic efforts to deconflict regional tensions. There is also consideration for adjusting the US military footprint in the Gulf post-conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 1998
    },
    {
      "perspective": "Iranian",
      "headline": "Defiance Amidst US Pressure and Regional Strikes",
      "summary": "Iran continues to assert its regional influence, including missile launches and claims over the Strait of Hormuz, in defiance of US pressure and sanctions. The nation is responding to US-Israel strikes and perceived threats to its sovereignty.",
      "tone": "defiant",
      "latestSinceUpdate": 1998
    },
    {
      "perspective": "Israeli/Regional",
      "headline": "Escalation in Lebanon and Iran Amidst Regional Instability",
      "summary": "Israel has escalated attacks in southern Lebanon despite a ceasefire, citing ongoing security concerns and threats from groups like Hezbollah. The broader West Asia conflict sees US-Israel strikes hitting Iran, contributing to regional instability.",
      "tone": "strained",
      "latestSinceUpdate": 1998
    }
  ]
});

export default LATEST_SNAPSHOT;
