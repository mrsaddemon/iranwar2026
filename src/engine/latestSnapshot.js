export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 799,
  "lastUpdated": "2026-05-28",
  "lastSyncedAt": "2026-05-28T04:44:11.601Z",
  "warDay": 90,
  "summary": "Direct exchanges of strikes between the US and Iran have resumed, while Israel has intensified operations in southern Lebanon, raising concerns over regional stability and maritime security in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-28",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 3,
    "summary": "No ceasefire is active as US and Iran exchange strikes and peace deal prospects fade."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 80,
    "oilDisruption": 75,
    "tradeImpact": 68,
    "sanctionsPressure": 63,
    "globalPressure": 80,
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
      "date": "May 26",
      "text": "Prospects fade for imminent end to Iran war as attacks restart.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTE1oNVZ3cG9SZTZkdWRhX0liS3BTYU41VFJuRTQyOUNxV3laM1o5LVhxWDRIWWd2RGo3M0d0Vlk0cGhTV1VlWWhBNmloTXBJWUNYTmxTN3ZISUVqRnZZeWxNYTdRVWpGVFB2eXV1czEwenVZbjg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 799
    },
    {
      "date": "May 27",
      "text": "US military carries out new strikes in Iran, followed by Iranian retaliation claims.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMicEFVX3lxTE5TbG1TWkZSM3lmMFJmNzBPWnVWaVM4TS1LR1dUanZqZllqNkhfMmtFZWRDQ0kycjItR0plTU9uNG1lRm1ObG82WHBVMi1kUUQwbWpKRWFxM3Vuakc1T3NXel80RHFsY2JLSnlWckpJU3o?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 799
    },
    {
      "date": "May 27",
      "text": "Kuwait targeted by missiles and drones amidst regional escalation.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 799
    },
    {
      "date": "May 27",
      "text": "Israel intensifies attacks on southern Lebanon, issuing evacuation orders.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNUXdrc3JheHlJVnU3Nlc0Sm1XSnpWQm05cHFpVktvbmxOaEkzMFpWNUNtbUZEYVhwSUNMVTBfUGtBSjI0d00zOWNnVTh5UGd0WmROckRSbGdxLWVjRlpYREJvcEVLQWdRNHpHOTVhckJMOF9zQl80UWkyeDdNcXg3dWhwUFk5MEQ5bENkMk0tcFR4anBGQkY2Nzd6ZVczZ1RHWUw1cEdOalNXQjBjWFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 799
    },
    {
      "date": "May 27",
      "text": "Three oil and LNG tankers exit Strait of Hormuz with transponders off.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxNNWxXdlJKT0l4US1ZM2pFVHFrd2pZRVBCR0MzMURRMVBGY2E2NlpBSENsQWJodGdpRXFrYlN2eDB5ZlNVZ3dOWi1NUkctd3o4Y1cwazlYRFpvMmNIcnI0dDl5aHQxQUpPNFp3cExWaXdkYkRQcjkxQWF0V2U2c09ZMXRZMHJYSmV5V2NQYmxod0p3UUhwV2MxUjN5M1lfa0hKYzRHWGkzeThsczA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 799
    },
    {
      "date": "May 27",
      "text": "U.S. Navy is guiding ships through Strait of Hormuz amid heightened tensions.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 799
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (16 headlines)"
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
      "perspective": "US Policy",
      "headline": "US Balances Strikes with Diplomacy Amidst Iranian Threats",
      "summary": "The US continues to conduct military strikes against Iranian targets, citing threats, even as peace talks are underway. Officials report some progress on a potential deal, but the military actions suggest a strategy of pressure.",
      "tone": "strained",
      "latestSinceUpdate": 798
    },
    {
      "perspective": "Iranian Response",
      "headline": "Iran Threatens Retaliation, Maintains Suspicion of US Intentions",
      "summary": "Iran's IRGC has threatened retaliation following US strikes, with forces reportedly 'lying in wait.' Tehran expresses 'resolute support' for Hezbollah and harbors 'deep suspicion' of US motives despite considering a peace agreement.",
      "tone": "defiant",
      "latestSinceUpdate": 798
    },
    {
      "perspective": "Israeli Actions",
      "headline": "Israel Expands Operations in Lebanon, Straining Ceasefire",
      "summary": "Israel is moving deeper into southern Lebanon, issuing evacuation orders and targeting Hezbollah cells. These actions are straining the existing ceasefire and are perceived by some as an attempt to influence broader regional dynamics.",
      "tone": "strained",
      "latestSinceUpdate": 798
    },
    {
      "perspective": "Economic & Global Impact",
      "headline": "Conflict Drains US Budgets, Maintains Oil Price Pressure",
      "summary": "Ongoing war spending is reportedly straining US military budgets, leading to cancelled trainings and delayed maintenance. The conflict's continuation, particularly around the Strait of Hormuz, contributes to sustained high oil prices.",
      "tone": "anxious",
      "latestSinceUpdate": 798
    }
  ]
});

export default LATEST_SNAPSHOT;
