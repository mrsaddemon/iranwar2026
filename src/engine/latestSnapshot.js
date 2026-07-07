export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1204,
  "lastUpdated": "2026-07-07",
  "lastSyncedAt": "2026-07-07T21:56:21.682Z",
  "warDay": 130,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-07",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 60,
    "summary": "No active ceasefire is reported amidst ongoing military engagements between multiple parties."
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.95
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 38,
    "oilDisruption": 85,
    "tradeImpact": 52,
    "sanctionsPressure": 49,
    "globalPressure": 56,
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
      "text": "US military launches new wave of strikes against Iran in retaliation for attacks on commercial vessels.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxORjNtd1V3TWhyd0hDQzlLOGJQUlhobGw3VTlJYnp0a3Ayak9tdEIzSXFJekhiNXFiRnZjSEZxN1dFczZtUVRWM0REcnRCSDZnVW9aUkFpeDhRUWhlSnM2YTFzRXMzdTlielRWOU96c1BBaDIxSlFFbnVpazF4M01TUGxFY2RzSnVnQ21UV29YOFk4c3VIeDhTZ3JpX1VHcXhEb0ZlQ0x5SF9pYVdobzZ0dmdxQlRNZnc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1204
    },
    {
      "date": "Jul 06",
      "text": "Iran-backed forces strike two tankers in Strait of Hormuz, prompting US to revoke oil waivers and launch retaliatory strikes.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1204
    },
    {
      "date": "Jul 05",
      "text": "Israel conducts strikes in Iran and Lebanon; Iran targets neighbors and threatens to halt talks with the U.S.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPY1ZJZk90Wld1cXluZE45NDJSUERIRW82aGJ0TWZCbkVjNkNuOU8wODNyZGpLbnl4ODk4M2JPNnpLbHBnUE1MZ1RIXy1XdGhGNmJBOTZuaVhpU0ZHa2RJLUNCTnYtMkpPRUxTZmktSHJ3SWUwdVVmdTNWTEdUT2RiZUVyNW5JdThEYl9sMFAzWUEyZjlMLWsyUWUydFViZjh5QjM3dWk4QTZKV3V1bTZUQjdGU1VXNmlJbTAwctIBwgFBVV95cUxNZXJGWHhNdExYZEloUFlYbE9JMEwtbVJxUFBjd1ZzS1Fidk4yOWhMSkpoOUxOaklkelpWN25kRm1fM2FBaGhHT3ptanBqc2hRTGlSZmhGamxnR0YwZ0RDSy1uSk9MUDhwZEJVajJvbXZjMTRzRV9FQjQ5LUZyY0xYcXkyNFlmU0sycWU1TlFZRW82Yjd1NkxaYTJEbjFwajl4SGNwZE41c0tucFlsSnZZWkswVldSd0k1eDVMZ1dKZkF2UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1204
    },
    {
      "date": "Jul 04",
      "text": "IDF warns of attacking Hezbollah if truce violated, preparing for potential resumption of fighting.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1204
    },
    {
      "date": "Jul 03",
      "text": "Millions attend Khamenei's funeral in Iran.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1204
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
