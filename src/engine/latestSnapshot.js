export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2761,
  "lastUpdated": "2026-11-21",
  "lastSyncedAt": "2026-11-21T22:07:37.086Z",
  "warDay": 267,
  "summary": "The conflict continues with increased tensions in the Strait of Hormuz, potential US strikes on Iran, and ongoing Israeli military actions against Hezbollah, while the US President signals a desire for a permanent deal but warns of delayed action.",
  "lastNarrativeUpdate": "2026-11-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 3,
    "summary": "No ceasefire or de-escalation efforts are currently reported; conflict activities are ongoing."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 64,
    "globalPressure": 82,
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
      "text": "Trump indicates desire for a 'permanent' deal with Iran but warns next move may not come until 2027.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxNTGgwZTZaQWNtSzNpRDhQajRHRHFFTDhiVXczZmUtaFJiMVdTMFcwN1dWV053c1lGY2hiUnJrNnc3X1JoREFHLWNYTG52bVk5cXhMSDlCU2NkcDVCeWhQamZsX3JXdVBYdzJSdWQ1NDlKaTE4ZzIxc3U1SE1lcnhjdm45TmtHVzBMTmI4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2761
    },
    {
      "date": "Recent",
      "text": "Riyadh tower reportedly hit by Houthi attack, according to Saudi authorities.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNX3hoU3p6VWJpUkhrbEFfRUFuRzVhRGRtTkxWNGpQTTNialpfMGQweVA3UmlMbm85SjNiamZLLXprQlVMTGhtUmFfdFNmVVVhbERCSGZyb3h5dnptMER2WjVzeGlpNHJ1amtMOWtiSXZYSURqdGs5MWtiWnAtSER3UDJESEZ1a2NrZjBIYXNZb1RQQzl0X2tPTmpnbVd1LUEzRXdOeUJyOHd3Z0J2N3Z1Z0dfTGpjZDBFQ25BUmh0WdIBxAFBVV95cUxNeWVFLUZJMlkxRGZGNHRWNkZidXAwNk1jTElnX3o5d3pHRC03dENuSG4wdjhWY1A1ejhIMnk1MTBLRlg5LW9CQ0xqV0hZdWxNcTRMVkRnSm1aaFpsbTV2WmNUZzRrNTM2OVNpckhXX2VKNDh2MWV6R3RFeDNtc2dTTFR4bFhjbUJlbldiUHJYbjA3T1liWWpVa19qV2N3OHZZWXFTVjF0eGdyVWs5bUNFckRxM19GSk92SUZaT1RpYkYxR1NY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2761
    },
    {
      "date": "Recent",
      "text": "Trump weighs new strikes on Iran as Israel presses for action.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxPVVhsMGFnUEhueFlmbkpjTEdvbU1LVkxiUk8wVzhQMUZ2QlNfYUo2Nmh4N3dVSzI5ZXByTHpmdU9FNE9HaTloeTBGQU51cHNEbkZ0VEZJZFgxVWdoMFJKdDJkQk00a0Q0VXJlRmQ0RlJKX2RBalV4cy1ZaVVkeFE3bQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 2761
    },
    {
      "date": "Recent",
      "text": "Tankers hit in Strait of Hormuz as Iran tightens grip on shipping.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxPT25tR284UTNyRzU1TFlqY2E2MzVHSE1OSEFmdHdpc0g5UHJjd3FORUcwVHlwODRtTHMxX1d6YXdxY0trYk42b1FqMmJOaEFIRDVKY3Q2TFFOeEJ4OUFqakhaYmN1UlpNYU55R1lrVUxVMnhyYTdVSjBiY0FhTHZZT1pzRmRMbjFnUE9ZSUlPVVZoNzEzdkRXbW1JSVdfX3A0dExHYl9pQ0dDWVXSAbABQVVfeXFMTXdLRTZWdnFuc1hSNkhCUC0tRUh3a1dLMW5KTG5kSmFwaW8yQW1aVGNyV3dKT0x4YlVDMnhJTkk1eTZzWHFMZ2Q4ZnplVzRSUWRGY3NCVTl6eHlUekcxNVZCdDNkblJ2bWh0MGdPQ1U3UWhsSHlPQ1hQM2JMZk1Fc24wWF92ME1xLWpvUk1SZnViX0MwZUtWNmotakI4dGlZNzd0amZVZ3FGQ25CS2RmRmI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2761
    },
    {
      "date": "Recent",
      "text": "Strait of Hormuz attacks have increased to highest level since Iran war began.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2761
    },
    {
      "date": "Recent",
      "text": "Iran claims US radar targeted in attacks on Bahrain bases.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxPTlptbkY5QlNoN2RFRUVGNjR5ejNtdU5Gajg4cm83SlJGRWpqT0dUZlhmM1YxdDREUzRQeFVnMmdJbkxIejNJaG5ldVdVQVVRWW51ZzU3ZGR1b0NudUFDeVBBcGtmamt2VlRjNUNOdHdHazNzYTNsUHpNa3F3VW52ODVCeXZoNHp3QmZydVhrdVlIMlJQcHAtZFVOV1FDOE1CMWtROXExZEM3Z2vSAbABQVVfeXFMUEVWQk9oeDRnbTRxZG9zc1o2SFp2WC1pRThTNXVIR2pkbmw3QWlLX1NiN1JkUlFLenM2YzIzNjlaQ0htZmp0dGd6TVJ0RGNIZ0VKai01RWZVd0VKeE9ZYTBEcWV6TmJsNDBGT2tUX2p1YUZNdTlhMUxDS0MzUUlidm9GN0xCZ1F4SGNvVnBNYzZuaUl5NURJQVpXMmx4TjlxcURWZENadlp5cVhtTUhuNHg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2761
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "US/Trump",
      "headline": "Trump Considers New Strikes, Sees War Continuing",
      "summary": "President Trump suggests the Iran war will extend into 2027 and is reportedly weighing new strikes, stating that Iran is unwilling to agree to terms acceptable to him.",
      "tone": "defiant",
      "latestSinceUpdate": 2758
    },
    {
      "perspective": "Israel",
      "headline": "Israel Presses for Action, Warns of Chemical Weapons",
      "summary": "Israel is actively pressing the US for renewed strikes on Iran, with its spy chief visiting the US, and has issued warnings regarding potential chemical weapons use. Israeli forces have also struck Hezbollah strongholds in Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 2758
    },
    {
      "perspective": "Iran",
      "headline": "Iran Intensifies Hormuz Attacks, Claims US Drone Downed",
      "summary": "Iran has grown more aggressive in the Strait of Hormuz, maintaining unrelenting attacks on ships despite increased oil traffic, and claims to have downed a US drone after a US strike on IRGC Qeshm.",
      "tone": "defiant",
      "latestSinceUpdate": 2758
    },
    {
      "perspective": "Regional/Hezbollah",
      "headline": "Hezbollah Shifts Tactics Amid Incursion Fears",
      "summary": "Hezbollah is reportedly shifting to guerrilla tactics and drone warfare in anticipation of a potential Israeli incursion, while Lebanon has charged several members with recruitment and arming others.",
      "tone": "strained",
      "latestSinceUpdate": 2758
    }
  ]
});

export default LATEST_SNAPSHOT;
