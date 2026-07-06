export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1193,
  "lastUpdated": "2026-07-06",
  "lastSyncedAt": "2026-07-06T20:29:21.246Z",
  "warDay": 129,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-06",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 60,
    "summary": "No active ceasefire is in effect, with ongoing strikes and warnings of truce violations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 58,
    "escalationLevel": 38,
    "oilDisruption": 40,
    "tradeImpact": 20,
    "sanctionsPressure": 49,
    "globalPressure": 48,
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
      "date": "July 06",
      "text": "Millions attend the funeral of Iran's leader Ali Khamenei.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1193
    },
    {
      "date": "July 06",
      "text": "Israel conducts strikes in Gaza and Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPY1ZJZk90Wld1cXluZE45NDJSUERIRW82aGJ0TWZCbkVjNkNuOU8wODNyZGpLbnl4ODk4M2JPNnpLbHBnUE1MZ1RIXy1XdGhGNmJBOTZuaVhpU0ZHa2RJLUNCTnYtMkpPRUxTZmktSHJ3SWUwdVVmdTNWTEdUT2RiZUVyNW5JdThEYl9sMFAzWUEyZjlMLWsyUWUydFViZjh5QjM3dWk4QTZKV3V1bTZUQjdGU1VXNmlJbTAwctIBwgFBVV95cUxNZXJGWHhNdExYZEloUFlYbE9JMEwtbVJxUFBjd1ZzS1Fidk4yOWhMSkpoOUxOaklkelpWN25kRm1fM2FBaGhHT3ptanBqc2hRTGlSZmhGamxnR0YwZ0RDSy1uSk9MUDhwZEJVajJvbXZjMTRzRV9FQjQ5LUZyY0xYcXkyNFlmU0sycWU1TlFZRW82Yjd1NkxaYTJEbjFwajl4SGNwZE41c0tucFlsSnZZWkswVldSd0k1eDVMZ1dKZkF2UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1193
    },
    {
      "date": "May 30",
      "text": "US defense secretary warns military is ready to resume combat in the Gulf if needed.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMidEFVX3lxTFB1QXlGRWt2N1daSW9BM01MUW1VNmJtNElYdXFxRU52UEVWaGwxQmJCZE5wb1pQTzg1SjlYTFJsYndEX29saWxjLWItUlE0WU5XOTQ3VVRMZ1dJY3VvYlVna3RIc1lEajZZT2txdk8zYkxOQnk4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1193
    },
    {
      "date": "July 06",
      "text": "Israel conducts strikes in Iran, according to IDF.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1193
    },
    {
      "date": "July 06",
      "text": "Iran targets neighbors with strikes, drawing US condemnation.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1193
    },
    {
      "date": "July 06",
      "text": "OPEC+ approves a fifth consecutive oil output increase as Strait of Hormuz shipping recovers.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMib0FVX3lxTE5tVXltSHVDWGlLb1VMMFNCXzVrcnYzTXlnTzctYW92bHQwYUFlVzZEZ01lc0dYZUtzZW1BN2tYWjFNT2tRWVpUNUNIQzM0TkFkc3ZhdEZlX1RLSjNjSjQwVlliYUxyRHZHTWRWaUo2Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "qz.com",
      "latestSinceUpdate": 1193
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
      "status": "unavailable"
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
