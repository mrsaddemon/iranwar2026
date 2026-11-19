export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2752,
  "lastUpdated": "2026-11-19",
  "lastSyncedAt": "2026-11-19T07:59:13.228Z",
  "warDay": 265,
  "summary": "Direct strikes between the US and Iran, alongside proxy actions involving Israel, Hezbollah, and Houthis, indicate a significant escalation of regional conflict with warnings of a broader war.",
  "lastNarrativeUpdate": "2026-11-19",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 2,
    "summary": "No active ceasefire is in effect; regional conflict is escalating."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Nov 19",
      "text": "U.S. launches strikes on Iran's Qeshm Island in Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxNbEJURjBQYXVkNTJSWEMyUlRrbFJ3NjJETGptNjYxX1JSS3lob1NOekp3WkZYcDdWVUtEaFRHYlpzUGg5d1FlNDE0QWdhMmtoUzBJb2piaWZFZWF3OFBaNjY1dTJMMldkdTVtNE1lWFJadlhpRFdFeWZYam5zN3RwWmFiSUw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2752
    },
    {
      "date": "Nov 19",
      "text": "Iran launches a third round of strikes on Bahrain, host of U.S. Navy's 5th Fleet.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTFA3RGxpNDRlLU9XRVNDenV4bWMzQU03QzRvRlc0eEN0aFF5aV9OYkg3VGZtT3M1UUNyRnpWVmFnbDdRbmRKazhsQnNmVjh2MFJUNk45dmVIaUtucWh5bW9haDR0Z2ZIZjBfMU1QVVhFc05BMlVIZnB4RUF0WQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 2752
    },
    {
      "date": "Nov 19",
      "text": "Israel targets arms shipment in Lebanon’s eastern Beqaa Valley.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxOdlJuZ3J6c3VIdGVQcmpRS2g3bzAtclU2UjFZbzhVU0NPbzRnVUhZdW9RUUtlYUxnbXlyWHBaWEZMUWhyYXVDZmpLZnEyaDc0MEVDeHlrZlhKVWNWU3NnQkFFUEVIQ09wMUdUWTEteFF0MlhFZmppSVlDSUZvQXRoRGJWUS1yc2ZCQmY3SW1MYzVjTUFyMmxmRnNmY2dkbHIwYVRBblgzVUY5YlnSAbABQVVfeXFMTVpocWxtdEU0ek1Rbi0tOUM2RUx0STFuOGllZ09rTDhmYVJFM1pORktHdjhtdkdjdjJkeUVvMEM0RzlSTVNlSUNjOWhXemRpc3dlRXV0Z05mSHJDZVd5dlFnRHpiYk1UZ1hKM2VUT3RxVmMzUVJxbkhkYzNEUXQzZG9kUDdUZ3NGSjNLZXF3eWRxaU4yejc4Vmp2WXBjN2pFTjNoZ09uWUZ5bURGd3Y3Ynk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2752
    },
    {
      "date": "Nov 19",
      "text": "Houthis target Saudi Arabia as CENTCOM chief meets with MBS.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNX3hoU3p6VWJpUkhrbEFfRUFuRzVhRGRtTkxWNGpQTTNialpfMGQweVA3UmlMbm85SjNiamZLLXprQlVMTGhtUmFfdFNmVVVhbERCSGZyb3h5dnptMER2WjVzeGlpNHJ1amtMOWtiSXZYSURqdGs5MWtiWnAtSER3UDJESEZ1a2NrZjBIYXNZb1RQQzl0X2tPTmpnbVd1LUEzRXdOeUJyOHd3Z0J2N3Z1Z0dfTGpjZDBFQ25BUmh0WdIBxAFBVV95cUxNeWVFLUZJMlkxRGZGNHRWNkZidXAwNk1jTElnX3o5d3pHRC03dENuSG4wdjhWY1A1ejhIMnk1MTBLRlg5LW9CQ0xqV0hZdWxNcTRMVkRnSm1aaFpsbTV2WmNUZzRrNTM2OVNpckhXX2VKNDh2MWV6R3RFeDNtc2dTTFR4bFhjbUJlbldiUHJYbjA3T1liWWpVa19qV2N3OHZZWXFTVjF0eGdyVWs5bUNFckRxM19GSk92SUZaT1RpYkYxR1NY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2752
    },
    {
      "date": "Nov 19",
      "text": "Analysts warn that the 'status quo' between US and Iran could break out into war.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxNbGNDR0Z2Z005TDhGUFhZRXRTU3FkWTUxUmdURHFsaTYzYTBDbF8tUjFvLVJSWUgxa25pbnBZZjFUMUd5Rks2T0VRYVpZendaTThLWUZISlA3NVIzQ25ZdjFya1dEV2NvTUdtZkx0a1dPWV90RUQxSlk5aHdUTjRvZU9sWXduVHJnOXcxZTVPRkFrSGJyZm82OG0weTNydlBIcXNtUEpDc2kycGN6d1h5ONIBtgFBVV95cUxQWnFkWE9kZXQyLXJYaFNYRlFnbUdCZ2tSck9NRlhJcmF3R0lXRGpuTlBOM3ZkQm53c0lVYmoxQ3pUTlJuQ1VJbFViX2QzV01aMkU1U2hsc2RLbjhQcFp5Z3FCQi1RbnpkQTV3UW96dG5qbnl6Z19sVjhGeFpubFJjNGlpQmlWRlZsUnRTbFc5cnNzM29JbGxJQzEtVjhJMTNwSWNYRzhqc2ZlbVpPTDdpdjlmMHdlUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2752
    },
    {
      "date": "Nov 19",
      "text": "Trump weighs new strikes on Iran as Israel presses for action and warns of chemical weapons.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxPVVhsMGFnUEhueFlmbkpjTEdvbU1LVkxiUk8wVzhQMUZ2QlNfYUo2Nmh4N3dVSzI5ZXByTHpmdU9FNE9HaTloeTBGQU51cHNEbkZ0VEZJZFgxVWdoMFJKdDJkQk00a0Q0VXJlRmQ0RlJKX2RBalV4cy1ZaVVkeFE3bQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 2752
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
      "perspective": "US/Israel",
      "headline": "US and Israel escalate pressure on Iran",
      "summary": "The US and Israel are considering and executing strikes against Iran, viewing Iranian actions as a threat to regional stability and US interests. Israel is actively pushing for more aggressive joint action and considering indefinite security zones in neighboring territories.",
      "tone": "defiant",
      "latestSinceUpdate": 2751
    },
    {
      "perspective": "Iran/Allies",
      "headline": "Iran warns US, continues retaliatory strikes",
      "summary": "Iran is engaging in retaliatory strikes against US targets and Gulf shipping, warning the US against miscalculation. Hezbollah maintains its stance against disarmament while Israel occupies Lebanese territory, indicating continued regional resistance.",
      "tone": "defiant",
      "latestSinceUpdate": 2751
    },
    {
      "perspective": "Global Concern",
      "headline": "Strait of Hormuz incidents raise global alarm",
      "summary": "The escalating tit-for-tat strikes between the US and Iran, particularly those impacting shipping in the Strait of Hormuz, are raising fears of a wider regional conflict. This situation poses significant risks to global oil trade and stability.",
      "tone": "anxious",
      "latestSinceUpdate": 2751
    }
  ]
});

export default LATEST_SNAPSHOT;
