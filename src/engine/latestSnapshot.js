export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1202,
  "lastUpdated": "2026-07-07",
  "lastSyncedAt": "2026-07-07T18:22:56.393Z",
  "warDay": 130,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-07",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 60,
    "summary": "No active ceasefire or truce is reported between the primary belligerents."
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 58,
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
      "text": "Khamenei funeral draws millions; Israel bombs Lebanon",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQQVpoTV83ckQybVhGcERsQXJRenJjd3FXdi1uclFRbGpVRkFKV2ptcVNrZE9WT0xSY2tYT01oLVNsd0ZiOEtjRVJud29jWUVpcFlxYXNHbDJSMG91OEVqTkljT2xwSHJZVjM2QUF0NGlOTXdYRGQ3bHlTaDhOY3pTajB5d2ZSem8xUlBNeXZnLTJuM1VQRTg0dXNkcFY2OWFNcElHZnlFX283ZzE5VEdXSVljdC00ZzAyRVlN0gHAAUFVX3lxTE5fOXQ0dU12MEI0bW5sNGE4T0w4SzRhTnFYMnpEaTdXQ3FSQjJackpWYzVrSzF6RUl0bGJKUW1LTVZLc01NYi1DRm15QWJXN213Y2xncDM1eUJteldrUmlBNkVmcndYUHB4cUxEMWF2aU1reTZZcjV1cDZ4cDk3SkJ6aklYRFZTa0Nhd21zV1hJb19BTXZNMmw4LUpUUmlfWnhNajZ4ci1uOC1oMzJLT0NWeWJ2emI1MGk3d192cG15bQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1202
    },
    {
      "date": "Jul 07",
      "text": "Doha says Iran 'fully responsible' for attack on Qatari tanker",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMif0FVX3lxTE1IbXhpbGtTa01XUGxjTktZODZxWEZqenk2NmkyWkxNR1o2cDNnSGNUaktwcE54Sm5LZ2lDaEJJZVpEOUdnaWVlZGtxN1NjU1c4SHc5b1N0Q2p0SnRsWmRTWGtxclZnSGxvTGE5TGpTdV9nR1hCam9YQXNiTjgzeW8?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 1202
    },
    {
      "date": "Jul 07",
      "text": "House passes war powers resolution directing Trump to end hostilities with Iran",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE81cnVNSUc5VUI0VW51ZGRjQzNwdWV6Q1d0TWxVZWsyaXFiVEt1dDAwc0dWb2huX0MyOUJnSDRZZDZrLUpaeU5iaU9JT2xIaEdmbmplNFVBV1VQVzNqVFZlbEI1X1VpOFFWRW9TSjZwbjlyUm9PMkYtR3lwdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 1202
    },
    {
      "date": "Jul 07",
      "text": "Israel conducts strikes in Iran, IDF says",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPY1ZJZk90Wld1cXluZE45NDJSUERIRW82aGJ0TWZCbkVjNkNuOU8wODNyZGpLbnl4ODk4M2JPNnpLbHBnUE1MZ1RIXy1XdGhGNmJBOTZuaVhpU0ZHa2RJLUNCTnYtMkpPRUxTZmktSHJ3SWUwdVVmdTNWTEdUT2RiZUVyNW5JdThEYl9sMFAzWUEyZjlMLWsyUWUydFViZjh5QjM3dWk4QTZKV3V1bTZUQjdGU1VXNmlJbTAwctIBwgFBVV95cUxNZXJGWHhNdExYZEloUFlYbE9JMEwtbVJxUFBjd1ZzS1Fidk4yOWhMSkpoOUxOaklkelpWN25kRm1fM2FBaGhHT3ptanBqc2hRTGlSZmhGamxnR0YwZ0RDSy1uSk9MUDhwZEJVajJvbXZjMTRzRV9FQjQ5LUZyY0xYcXkyNFlmU0sycWU1TlFZRW82Yjd1NkxaYTJEbjFwajl4SGNwZE41c0tucFlsSnZZWkswVldSd0k1eDVMZ1dKZkF2UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1202
    },
    {
      "date": "Jul 07",
      "text": "Iran Targets Neighbors as U.S. Condemns ‘Aggressive’ Strikes",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxQeERDdWlJbmtObWhLd0JWVG1LNXlzanlYZEpralU4OE5WWm9ZU0pjVmxTVlhvQ1Q2dTBlV0E5UWlGZEt0a3JPMkNRN2ZuLVQ3dUIzQllZNTR3MlFJbWk3azBhMTZRZDVCS0NtYk1XNEgzLWVINTJnQVdxajg4Rm1jLQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1202
    },
    {
      "date": "Jul 07",
      "text": "Iran threatens 'complete halt' to talks after trading strikes with U.S.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPTGcxeHZmSjcwLVpBNmxlaWQ4aG11Ynd6U3pqbGhkM09BTmxuYXBtczBhR3NGQWxVYU1WWGlVTGU1QlhHWVJOdDhWRHJoQ2hMcGZyb013NGVpR3NzQ004RUJWd2JQWDFYVG1SZUhVOUI0UldOWGdQRnRTWW5FVThLdG9LeHk2a0l3d0tZSmhnVXkxZ1hSOTNHcFcwaTJKaUxmZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1202
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
