export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2277,
  "lastUpdated": "2026-08-26",
  "lastSyncedAt": "2026-08-26T02:10:37.602Z",
  "warDay": 180,
  "summary": "Tensions remain high with new US sanctions against Iran, ongoing disputes over the Strait of Hormuz following a tanker strike, and continued Israeli military actions in Syria and Lebanon.",
  "lastNarrativeUpdate": "2026-08-26",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 15,
    "summary": "No ceasefire is active; regional conflicts and economic pressures continue."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 55
      },
      "behavior": {
        "precision": 0.45,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 75,
    "oilDisruption": 75,
    "tradeImpact": 68,
    "sanctionsPressure": 62,
    "globalPressure": 78,
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
      "date": "Aug 23",
      "text": "US announces new sanctions against Iran, with Bessent promising an 'economic D-Day'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPeHFWSVQxMEZ1OUctZkFoeXpZT0FfajFEeG5xVjBfVE9majl4dUYzUFRuVjYxWmRNZlUwanBvTHFDeTRtc3RkUnhiSnhNa1lpbzRaXzZMWG1PRElxZjlZclVPUEpfQWN5YjE3Q09aNHJkWm5BblRYSkE3eWdQR3M5MnVuVzhYcHdRTzlqdFJZRDJWNDd0S1JQdXIySVFlMjZYTEgzVmFJVDU1ejZ0UGhzcS1WU2RLV0JhNC1R0gHAAUFVX3lxTE9pYi1jaGFBc1VzOF9xRnlMQnpna01fWEpnNDRDY2ZfSWNMSHVZM0ZtUG9JZEQ1VEE1YURqUXNVVTJGRERzWElLZkFIOExJbzJaVm5Gc211aGtVZE83STFxeVZpUlFJQ0EwcUNERVUwcmtRSE9mWWx3eVNzcGJteHdUcGNuU2RpSS04ZjZXQjN1YU9rYU5XUFFKWTdqcUc0QnNiYXotaUdOZ1RabkdlOFJIYzJaTllRcUViRjBfLUR6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2277
    },
    {
      "date": "Aug 23",
      "text": "Iran states an Oman deal on Hormuz does not mean the strait is open, despite Trump's claim of cleared mines.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE11U283WFBPdlU5OTRhNHRnLXFLRF9pSm5rcXBlenJ3WGhQVzRaTWVDQzFaQ091UnZoUHV0MDNpdTJBTnVDOE8wcVRQSmVhU3NBY2pZeTluaEltaUhUMFFrTHJHb0VpdkRlTWNmN25nLXpPcGhxRERJ0gF8QVVfeXFMTjRybTlMLURxREVpSUJJVjJENHFEbkNaam5QQnB0bkxuR0w0SzNud0JJMktPN3JFUHJJS0ZKRVd5RjRrWDlEUlFWYnZteHNncVlEVWdyWUJ5SE1OTUQwZS1CS09XbmpuRWZhNVh6RkFHVzEtSUtxTjNWOTRCQg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2277
    },
    {
      "date": "Aug 23",
      "text": "A new tanker strike occurred near the Strait of Hormuz, with Iran vowing retaliation for the U.S. economic offensive.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2277
    },
    {
      "date": "Aug 23",
      "text": "Israel strikes southern Syria; Damascus condemns the attack.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxNdUlteHpodFpvY0RlTjBQVWdHWmFhTTAtU0VzVlRuY3hYRTA3NEFBSHcwN3pIR1ROYnBWVmFxWDVPTmVRcXZSaUM0YURHZHBmUDg0ekNFTDJ3NTd0S2NiR3loeDlXTlUzNzI1TjlKai1uNzh5TWRPeHJzd1UzNmM4TGRYLW1ET3ZnQ3hmeWNTNWF5ZVVReUtqTGFLdEtqVXZJWEw4RXk2TjE4YkFO?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2277
    },
    {
      "date": "Aug 23",
      "text": "Reports indicate Iran is smuggling weapons to Hezbollah through Syria, further dividing Israeli officials.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiXEFVX3lxTE5BTWhnR2M0Y3JJRDRwaFV5TjN4WXNJZVljeGI4NWlveDhVbldBQjB0ZW9DblZ2bHRzVHV6bWZ4RXF6R2VYc3Q5ZkdySE9NVHdTazZOWHotZE1pbnd5?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 2277
    },
    {
      "date": "Aug 23",
      "text": "The U.S. withdraws from military exercises with South Korea scheduled for next month.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxNbVVFV01JMlVwYUZVM2ZEcjhlbVZKMkEzUHdHcnpEdTZKQm9QVnBNS2RnblN6UWcyT1NHVW95a2hCUjBzT1FrcUVwV1Z0RDNOOW5kY19rOWlEbldrRU9Bb3psZWoyS1hwc1lmaGlHZmhzNVd2QjVZaTJpRDViUHRXZUgyMXNJa0ZiTjhjcmUwZ2RPVlNuSkNtVFlHaEdqNVFuMUVBcTlpT3JGT1pXelhScnFn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 2277
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
      "perspective": "Iran",
      "headline": "US Sanctions: A Declaration of War",
      "summary": "Iran views US sanctions as an act of war against all nations, indicating a strong stance against economic pressure. Despite this, Iran has granted passage to Iraqi oil tankers through the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 2160
    },
    {
      "perspective": "United States",
      "headline": "Hormuz as 'American Territory', Economic Pressure on Iran",
      "summary": "President Trump asserts the Strait of Hormuz as 'American territory' and threatens Iran's trade partners, signaling a shift towards economic pressure. The US military continues to facilitate oil transit through the strait.",
      "tone": "defiant",
      "latestSinceUpdate": 2160
    },
    {
      "perspective": "Israel",
      "headline": "Retaliation Against Iran for Hezbollah",
      "summary": "Former Prime Minister Bennett advocates for Israeli strikes on Iran in response to Hezbollah attacks. This perspective suggests a direct link between Hezbollah's actions and Iran, calling for escalated military response.",
      "tone": "strained",
      "latestSinceUpdate": 2160
    },
    {
      "perspective": "Hezbollah/Lebanon",
      "headline": "Force Only Way to Compel Israeli Withdrawal",
      "summary": "Hezbollah's Nawaf Moussawi states that only force can compel Israel to leave Lebanon, indicating a continued commitment to military confrontation. Efforts to tame Hezbollah within Lebanon are reportedly stalling amid the Israel War.",
      "tone": "defiant",
      "latestSinceUpdate": 2160
    }
  ]
});

export default LATEST_SNAPSHOT;
