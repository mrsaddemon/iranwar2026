export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 335,
  "lastUpdated": "2026-04-24",
  "lastSyncedAt": "2026-04-24T12:08:21.191Z",
  "warDay": 56,
  "summary": "A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.",
  "lastNarrativeUpdate": "2026-04-24",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 21,
    "summary": "Ceasefire language is present across the source mix with a reported duration around 21 days, but the model should still treat it as reversible under renewed violations or proxy attacks."
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
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.3,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 38,
    "oilDisruption": 62,
    "tradeImpact": 35,
    "sanctionsPressure": 49,
    "globalPressure": 52,
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
      "date": "Apr 24",
      "text": "Who will blink first as the Iran war hits the world economy?",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTE8xMFpEVE1UeU5HUWxHOFlnbW9qbDNqWFdvTjJqNDlWSjdYX2RVQzF0OW9ZbmFpdXlleWpaTEpxWE1ZYXRXTmtMLXFZX3ZOUm5DdWw4bEs0a1Z0d2xialg5aHlnQWswRWpRREo0cWZ1aVNtRDM0QXE4UFh4YlhTQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 332
    },
    {
      "date": "Apr 24",
      "text": "Iran War, April 23, 2026: Cease-Fire Between Israel and Lebanon Extended by Three Weeks, Trump Says",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMia0FVX3lxTFB4UkN3UnZ4bXVpSDJtX0JaOUl5OV9PRF82MnlxNXdxYzJyNEFGWWljTlNuSmxkT1pKcWJmMGxIMTFIYjNzd3NERU5VQ3ozMUZJRDI4TjNnVXpRZzZHd0g3cC1JRHJ2WHFsVEpF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "WSJ",
      "latestSinceUpdate": 334
    },
    {
      "date": "Apr 24",
      "text": "Iran War Live Updates: Trump Says Israel and Lebanon Agree to Extend Cease-Fire; Latest Strait of Hormuz News",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTE1VX3dLODlDY3RiRk94UExOYUd6YVVSZU9ibGJkNzBUSmRKUXFLY1NYeG5Ic3pCZHJXdmwxb0ZabkNXQWdkMF9kV2NGYTduRkNleXQ4TkMyRl9YeHhZby14ODhjZEpJZ2UxQ2hSc0hiQTF3bHM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 335
    },
    {
      "date": "Apr 24",
      "text": "Iran Update Special Report, April 22, 2026",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxPRVh4ZVdVcU1FVUluVHVlZkdkT1pRWWhmM1U2bDcwN0p6b09Pb2V1UXhTRy1hSXhwdDlneVFYdktzUHY3T3lZX3ZrTEdyOWN1Ynk2dFh5blF4MW0ySFc1Z01tSmdsUlFNMTlkRTJhakV2dEFkZFE2aUY1NXkwb2RsdXU3RkREbVFxdDNEOHBqWFd4YURsU2c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 332
    },
    {
      "date": "Apr 24",
      "text": "Iran war updates: Israel attacks increase in Lebanon; ships taken in Hormuz",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 332
    },
    {
      "date": "Apr 24",
      "text": "Satellite Data Reveal Scope and Scale of US-Israeli Strikes on Iran",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxQWDhqTHBrY2Z2dTJDY0VVdFROLTJfczhCcmdZT3d2YW5TUk1ndDFpUDVPbE1VYk1JTkRXaFU5aUlneWlqU1RtaGhDRW1OalVXQlhqM0RmM2d4Vl9QWTEtbjhoNVdkLTFvZ1hNRk5PUE5Ram42MEliSXNaZ1kzclk4UWJRQ1ZYVF9WRGZV?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Bloomberg.com",
      "latestSinceUpdate": 332
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
      "perspective": "US/Israel",
      "headline": "Defensive Strikes and Maritime Enforcement",
      "summary": "The US and Israel are conducting strikes on Iran and taking measures to secure the Strait of Hormuz, responding to perceived threats and maintaining regional stability. The extension of the Israel-Lebanon ceasefire is seen as a diplomatic success.",
      "tone": "defiant",
      "latestSinceUpdate": 330
    },
    {
      "perspective": "Iran",
      "headline": "Facing Aggression and Blockade Threats",
      "summary": "Iran is under attack from US and Israeli forces and faces direct military threats regarding its activities in the Strait of Hormuz. The 'shoot and kill' order and naval blockade are viewed as significant escalations against Iranian sovereignty.",
      "tone": "strained",
      "latestSinceUpdate": 330
    },
    {
      "perspective": "Global Economy",
      "headline": "Oil Market Volatility Amid Strait Tensions",
      "summary": "Escalating tensions in the Strait of Hormuz, a critical oil transit choke point, are directly impacting global oil prices. The risk of supply disruption remains high, despite a localized ceasefire in the Levant.",
      "tone": "anxious",
      "latestSinceUpdate": 330
    }
  ]
});

export default LATEST_SNAPSHOT;
