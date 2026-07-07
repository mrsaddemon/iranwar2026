export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1200,
  "lastUpdated": "2026-07-07",
  "lastSyncedAt": "2026-07-07T13:37:43.788Z",
  "warDay": 130,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-07",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 60,
    "summary": "No formal ceasefire is active, though both Israel and Iran have reportedly stepped back from immediate threats."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Jul 07",
      "text": "Iran warns US against continued threats, stating talks will not commence under duress.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1200
    },
    {
      "date": "Jul 07",
      "text": "Tanker struck by projectile and set ablaze in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxOT2tfRFIyMHM3Y3R0UHRSQ0xwNEdNX2pjVUV5QkFGZk4yLUpVeU9RN0RHLXpUYU5UMzVIZkNwOWV4Q2dKTnJYZVl6UzZadkxHYUVYNmUzYWxoUEo1S2pPRUkxWmFsMHhadUYyams3ME5TOTlVSHhuTmgtRVA4NGo1NlJIOF9ZOUU2dGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1200
    },
    {
      "date": "Jul 07",
      "text": "Iran’s Revolutionary Guard fires missiles at ships near Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1200
    },
    {
      "date": "Jul 07",
      "text": "Israel conducts strikes in Iran and Lebanon, targeting Hezbollah.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPY1ZJZk90Wld1cXluZE45NDJSUERIRW82aGJ0TWZCbkVjNkNuOU8wODNyZGpLbnl4ODk4M2JPNnpLbHBnUE1MZ1RIXy1XdGhGNmJBOTZuaVhpU0ZHa2RJLUNCTnYtMkpPRUxTZmktSHJ3SWUwdVVmdTNWTEdUT2RiZUVyNW5JdThEYl9sMFAzWUEyZjlMLWsyUWUydFViZjh5QjM3dWk4QTZKV3V1bTZUQjdGU1VXNmlJbTAwctIBwgFBVV95cUxNZXJGWHhNdExYZEloUFlYbE9JMEwtbVJxUFBjd1ZzS1Fidk4yOWhMSkpoOUxOaklkelpWN25kRm1fM2FBaGhHT3ptanBqc2hRTGlSZmhGamxnR0YwZ0RDSy1uSk9MUDhwZEJVajJvbXZjMTRzRV9FQjQ5LUZyY0xYcXkyNFlmU0sycWU1TlFZRW82Yjd1NkxaYTJEbjFwajl4SGNwZE41c0tucFlsSnZZWkswVldSd0k1eDVMZ1dKZkF2UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1200
    },
    {
      "date": "Jul 07",
      "text": "House approves war powers resolution to halt military action against Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxPMnR3dXhONnF2YWJ2MDY1TGhPVnJzMVVCRVJ6YzI4MmNGUzI5Mk5La1UxRDEyRmhEbkQxQ0tnVnVQb0lhUlgtNnhOYXBUU1lJREZIamt3SkFjUDh4akxaWU9YWmtUN0llYjN1MzdFM0J6RUJlSXNUekJqaWlxYjhCWDFJREVldkU5aTAyRlJldw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1200
    },
    {
      "date": "Jul 07",
      "text": "Israel and Iran step back from threats after a day of tension.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1200
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
