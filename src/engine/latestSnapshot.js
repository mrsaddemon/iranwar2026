export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1061,
  "lastUpdated": "2026-06-25",
  "lastSyncedAt": "2026-06-25T10:50:01.890Z",
  "warDay": 118,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 5,
    "summary": "Discussions for deconfliction are underway between Lebanon and Israel, but a truce in Lebanon has been violated, and Iran peace talks are strained."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 20,
    "tradeImpact": 15,
    "sanctionsPressure": 54,
    "globalPressure": 53,
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
      "date": "Jun 25",
      "text": "US and Iran exchange strikes as Israel intensifies attacks on southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNUXdrc3JheHlJVnU3Nlc0Sm1XSnpWQm05cHFpVktvbmxOaEkzMFpWNUNtbUZEYVhwSUNMVTBfUGtBSjI0d00zOWNnVTh5UGd0WmROckRSbGdxLWVjRlpYREJvcEVLQWdRNHpHOTVhckJMOF9zQl80UWkyeDdNcXg3dWhwUFk5MEQ5bENkMk0tcFR4anBGQkY2Nzd6ZVczZ1RHWUw1cEdOalNXQjBjWFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1061
    },
    {
      "date": "Jun 25",
      "text": "Israel conducts strikes in Iran, IDF says.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1060
    },
    {
      "date": "Jun 25",
      "text": "Iran warns ships it's 'unacceptable and dangerous' to transit the Strait of Hormuz without their approval.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxQOF80czFQcXBRYXkxVXBiV0lDaXJwVUIxLVpvcHMyckk5bEozX1dydW9nd1dtakVmR0l2ZEg1RkpLSXdBak5lRkR1VDlDaVBsVkdTXzJ3YmJycnMzaXEteEFZWTUxVmdFdmpmc2FEWEp0djRsc1BOMS1TVlg4cEZnT1A1OExOZkwzdXJIU0std0ZvcTR4V2Q4dmN0UkpwWllJcjJiSU1vamxaQzlmU2FhdDdORGRmSFpK0gG-AUFVX3lxTE1JbnpSb0c3N2hscW9FTkg1eHEzR2JrOE15LWRmTlNNZnZzUmI0SlNQTFlVdWxsWF9YSVpBdldzZTNfX2pDb1B3VENTcHQtNk1kYkNQOVZWZzRvc01aSUhiUm5waXd1aVJaLTEtVkZxa0RJMjI5S0V0ZlNkTHBic1p5Um5WQ29FNzRWNEFjb0ExU3JUMWhfVGF5a0dFOHFqQzVqMGVDdGVUWDVBUE5DNjE0YnMxOXNxZjlEcUtoalE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1061
    },
    {
      "date": "Jun 25",
      "text": "Global oil prices fall to lowest level since before the US-Iran war as Strait of Hormuz shipping ramps up.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxOYTRyTGFMT0FnbFM3OE13em1sbURITEpySU5vU0NBaVhCRnhrVGJHLXF4cXJ3Uk9fUEphUmtlZ2llT3FfN3Q2LXBwSy1Jc3JHNFJkclNHLVk0anRUa3hHVW1ZVlEwWnpIMm1CWFJlZGF0VzBzeGpXalJTcVdIeU9ja0pB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1061
    },
    {
      "date": "Jun 24",
      "text": "US Senate joins House in voting to halt Iran war, rebuking Trump.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxQNmhxUVNibG82ZUN6NG5vUGVEb3c3X3ExNXJKYjFwYzZCYi03ZGFjX2JNZ1VyNzRzSzF5U3V4LVhIUGM4U0lrZzY4SmhBeGZuVHlqLWxsQ3hPRk5aYVZtT2ZPUk84LUl2LWw1WEl5ai1OS3ZFcGlKTmpEZmVPeG5rT1QwOFVoY25iS2NXRjBPTnQtNnBxYkNpQXFVT1hKTEJYbGJpSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1061
    },
    {
      "date": "Jun 24",
      "text": "Israel moves deeper in Lebanon and says it has trapped Hezbollah fighters underground.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1061
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
