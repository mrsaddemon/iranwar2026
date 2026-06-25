export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1062,
  "lastUpdated": "2026-06-25",
  "lastSyncedAt": "2026-06-25T13:07:45.646Z",
  "warDay": 118,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 5,
    "summary": "Peace talks between Iran and the US are strained, and a truce in Lebanon has been violated, despite ongoing diplomatic discussions."
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "text": "US launches new strikes on Iran, targeting missile sites and boats.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9WaDJGdEZ0YndpVVJXUlUydGhtZnZWVUFDdnR6MUdTSmhQNVMyZmRKUGMxZC0yTUNNTGw1Q2Q1M3VsNWVacFJ2X3cwd1BiOTd4b1BSYWxBM1Bodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1062
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
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxQOF80czFQcXBRYXkxVXBiV0lDaXJwVUIxLVpvcHMyckk5bEozX1dydW9nd1dtakVmR0l2ZEg1RkpLSXdBak5lRkR1VDlDaVBsVkdTXzJ3YmJycnMzaXEteEFZWTUxVmdFdmpmc2FEWEp0djRsc1BOMS1TVlg4cEZnT1A1OExOZkwzdXJIU0std0ZvcTR4V2Q4dmN0UkpwWllJcjJiSU1vamxaQzlmU2FhdDdORGRmSFpK0gG-AUFVX3lxTE1JbnpSb0c3N2hscW9FTkg1eHEzR2JrOE15LWRmTlNNZnZzUmI0SlNQTFlVdWxsWF9YSVpBdldzZTNfX2pDb1B3VENTcHQtNk1kYkNQOVZWZzRvc01aSUhiUm5waXd1aVJaLTEtVkZxa0RJMjI5S0V0ZlNkTHBic1p5Um5WQ29FNzRWNEFjb0ExU3JUMWhfVGF5a0dFOHFqQzVqMGVDdGVUWDVBUE5DNjE0YnMxOXNxZjlEcUtoalE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1061
    },
    {
      "date": "Jun 25",
      "text": "US Senate joins House in voting to halt Iran war, rebuking Trump.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxQNmhxUVNibG82ZUN6NG5vUGVEb3c3X3ExNXJKYjFwYzZCYi03ZGFjX2JNZ1VyNzRzSzF5U3V4LVhIUGM4U0lrZzY4SmhBeGZuVHlqLWxsQ3hPRk5aYVZtT2ZPUk84LUl2LWw1WEl5ai1OS3ZFcGlKTmpEZmVPeG5rT1QwOFVoY25iS2NXRjBPTnQtNnBxYkNpQXFVT1hKTEJYbGJpSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1062
    },
    {
      "date": "Jun 25",
      "text": "Israel moves deeper in Lebanon; Iran peace talks strained.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPX200Zzhvc01oMWR1S3hFVnRJc2J6SU9CLS14aG1lMjY1U290ZHk4Qk94Ty1NZjd0U1FCVldpRlp5ZnM0cVlXa2R0ZWxZeV94eWp1Mkx2VlRGTkNiYWdqaFBKT1lrSXNJQTU1VjBUWXVMUndKd2hPZHIxaXdMVHFDY1pVVUZ5UkpHemR5RG5MeG9Zdjk2eWFZaFBFSnNFUWxXTW9JQ1c5Z01SVDIydE9wLWJMTmw1S083em9aWnUxRdIBxAFBVV95cUxOT1lnSWQ5SG1ld25mc3pTUTBNelpxWFYwQ0xfRDF6Wk82SHRGVWZBeGlpQmJ6dFhaVF80QTBlbmxqUnNtZkdUYjkzbHgteU1pdXBkT0MxU3d4MzhXR19kNVNMMThtNkJHNkdYN0dXUzFVUHBFdEk4OHE2QWVRbmwzS0FGZ2hYVlRVSWl3Nk5VN1R3NU43LTlTb2xSUEg3LXItSDRpYzhPRDBneXROVlJKRmJsUlJKZTU1MGxjYTM2dE9RQzRY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1062
    },
    {
      "date": "Jun 25",
      "text": "Israeli fire kills two in Lebanon as Hezbollah slams truce ‘violation’.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxQR0RUWVRfSHpFWHdJOW1vUkpCUzQ4Y0R6b2tGTDl6cG1CY3VOTnd2MWNBX0lxcWJMcXY4YTd2V1hxZGJaWmZ1b1ZjSXNreUkwV3RPVXNyelpUOFB2MGZ0ZmRheUxnZDhpR015czMxMHM2c0J4TnNrUlF5Rm5MTHFLYTJkOENsa3F1R2lRdnFPSkJJV1ljRFZjdWF5b1ZvcTVnMU1yQkltYUJwWjdIWWfSAbMBQVVfeXFMTlVIbVpkYUVFNWJOZTJnVllRTG81X0NmNzA0a0xCMHEweDB1YnFna3Vfa0dIdWwyekJ0NE11YndjQmY1eVlKTUQ4LTgxeldCMGRRd1ViNWs5Z1oyUi1EUVUxdUFMZ3puWGV1QXRwWTFzeXV2STZOcGFabEJpSEl2UG9zQnBQSS1IX3k2NVBjUDk0b3lGS3JDa2hrZmZpRXFpMlhqcTltYm1uTHNlZ3daSVZzdEU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1062
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
