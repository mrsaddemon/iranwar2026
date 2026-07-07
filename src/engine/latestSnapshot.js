export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1203,
  "lastUpdated": "2026-07-07",
  "lastSyncedAt": "2026-07-07T20:28:10.018Z",
  "warDay": 130,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-07",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 60,
    "summary": "A fragile truce appears to be in effect between Israel and Hezbollah, though violations and warnings persist from both sides."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
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
      "date": "Jul 07",
      "text": "Israel conducts strikes in Lebanon and Iran following Khamenei's funeral.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPY1ZJZk90Wld1cXluZE45NDJSUERIRW82aGJ0TWZCbkVjNkNuOU8wODNyZGpLbnl4ODk4M2JPNnpLbHBnUE1MZ1RIXy1XdGhGNmJBOTZuaVhpU0ZHa2RJLUNCTnYtMkpPRUxTZmktSHJ3SWUwdVVmdTNWTEdUT2RiZUVyNW5JdThEYl9sMFAzWUEyZjlMLWsyUWUydFViZjh5QjM3dWk4QTZKV3V1bTZUQjdGU1VXNmlJbTAwctIBwgFBVV95cUxNZXJGWHhNdExYZEloUFlYbE9JMEwtbVJxUFBjd1ZzS1Fidk4yOWhMSkpoOUxOaklkelpWN25kRm1fM2FBaGhHT3ptanBqc2hRTGlSZmhGamxnR0YwZ0RDSy1uSk9MUDhwZEJVajJvbXZjMTRzRV9FQjQ5LUZyY0xYcXkyNFlmU0sycWU1TlFZRW82Yjd1NkxaYTJEbjFwajl4SGNwZE41c0tucFlsSnZZWkswVldSd0k1eDVMZ1dKZkF2UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1203
    },
    {
      "date": "Jul 07",
      "text": "Three tankers were hit in the Strait of Hormuz, leading the US to revoke a license authorizing the sale of Iranian oil.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxOT2tfRFIyMHM3Y3R0UHRSQ0xwNEdNX2pjVUV5QkFGZk4yLUpVeU9RN0RHLXpUYU5UMzVIZkNwOWV4Q2dKTnJYZVl6UzZadkxHYUVYNmUzYWxoUEo1S2pPRUkxWmFsMHhadUYyams3ME5TOTlVSHhuTmgtRVA4NGo1NlJIOF9ZOUU2dGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1203
    },
    {
      "date": "Jul 07",
      "text": "The US House passed a war powers resolution directing the President to end hostilities with Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE81cnVNSUc5VUI0VW51ZGRjQzNwdWV6Q1d0TWxVZWsyaXFiVEt1dDAwc0dWb2huX0MyOUJnSDRZZDZrLUpaeU5iaU9JT2xIaEdmbmplNFVBV1VQVzNqVFZlbEI1X1VpOFFWRW9TSjZwbjlyUm9PMkYtR3lwdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 1203
    },
    {
      "date": "Jul 07",
      "text": "US officials are reportedly closing in on an arrangement to reopen the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1203
    },
    {
      "date": "Jul 07",
      "text": "IDF states it controls Hezbollah tunnel networks and warns of attacks if a truce is violated in south Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNYlBjdU1FYnBZbXk4YVNPLVV5VGk3cExERy1tTW5YWFBnN0hxMEtvYTRlaEhTU0VneVc2R0pYOFJhVlp6M2tMSlpRM05mdU9DaXVERXgwZ3BwVV9Yb2Z4OUxOa3BBTnV3anJRamVsX1VvdlZDX1J5ZnBBZ1NBbkRwdkY3Q3VPWUxtc3R0N2Z4ZnR1Z3V6RVRBU2o2dlFsdUE0ZFV3ZnFSVGJpRG9fZkozaVAyN03SAboBQVVfeXFMTUZxY3dBWUlzSHlnb1NQVFM4bmlJdGpCdGJMMDRVRUVUWHR2QTRhbm5Kank2LWo2d0lYQkZXYW1GZzVOVTdVWmJYb1V6RW1MV0g4WjQxUnhORERCZjNPcUt2VG9LWkQyclRzd2d5U2E1YXh6VXNxeFhoWW1makdLRHlxaWltWFN6SS1HbU1XLUQxUEVpTFRaQi1XUnV1Z2dyTlc1WXQtTWRBcEZySHFVTk9JMWdrRy1xNkFB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1203
    },
    {
      "date": "Jul 07",
      "text": "Trump warns Iran that killing US troops would trigger military action and broadens the US military footprint.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxNVlo4blVxcW56cWswcGlyUUU4TktibnJQaVhHS3ZVZ0FYc1lyc1o1ZTd2cURqVDFfQ2ZTYWtaTG1zbmFrLTJLV3BLTU8wbXdsWDhlcmpmNzIwd1o1TXpwWEVGczc3alREYTJxRWRJOVNtZk5KaS1icUxteWZOY2xCRWZR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 1203
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
      "perspective": "Iran's Defiance",
      "headline": "Iran Demonstrates Resolve Amidst Regional Conflict",
      "summary": "Iran showcased national unity with Khamenei's funeral while asserting control over the Strait of Hormuz through renewed attacks. Tehran maintains a firm stance against U.S. demands and continues regional strikes.",
      "tone": "defiant",
      "latestSinceUpdate": 1196
    },
    {
      "perspective": "Israel's Security Operations",
      "headline": "Israel Continues Proactive Strikes Against Threats",
      "summary": "Israel is actively conducting strikes in Lebanon and Iran, emphasizing its control over Hezbollah's tunnel networks. The focus remains on dismantling Hezbollah and securing its borders amidst regional instability.",
      "tone": "strained",
      "latestSinceUpdate": 1196
    },
    {
      "perspective": "U.S. Policy Division",
      "headline": "U.S. Navigates Internal Divisions on Iran Policy",
      "summary": "The U.S. administration faces internal division as the House passes a resolution to limit military action against Iran, while President Trump issues strong warnings. Diplomatic talks with Iran are threatened but continue amidst escalating tensions.",
      "tone": "anxious",
      "latestSinceUpdate": 1196
    },
    {
      "perspective": "Global Energy Market Concerns",
      "headline": "Hormuz Tensions Threaten Global Oil Supply",
      "summary": "Renewed Iranian attacks in the Strait of Hormuz are causing significant concern for global oil markets and shipping. The strategic waterway's stability is critical, with reports of increased profits for supertanker operators navigating the risks.",
      "tone": "anxious",
      "latestSinceUpdate": 1196
    }
  ]
});

export default LATEST_SNAPSHOT;
