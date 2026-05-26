export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 782,
  "lastUpdated": "2026-05-26",
  "lastSyncedAt": "2026-05-26T04:37:09.470Z",
  "warDay": 88,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-26",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 14,
    "summary": "Despite ongoing peace talks between the US and Iran, active military operations by both the US and Israel indicate no ceasefire is currently in effect."
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
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 38,
    "oilDisruption": 75,
    "tradeImpact": 45,
    "sanctionsPressure": 49,
    "globalPressure": 54,
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
      "text": "US forces strike southern Iran as top Tehran officials in Qatar for talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPX200Zzhvc01oMWR1S3hFVnRJc2J6SU9CLS14aG1lMjY1U290ZHk4Qk94Ty1NZjd0U1FCVldpRlp5ZnM0cVlXa2R0ZWxZeV94eWp1Mkx2VlRGTkNiYWdqaFBKT1lrSXNJQTU1VjBUWXVMUndKd2hPZHIxaXdMVHFDY1pVVUZ5UkpHemR5RG5MeG9Zdjk2eWFZaFBFSnNFUWxXTW9JQ1c5Z01SVDIydE9wLWJMTmw1S083em9aWnUxRQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 782
    },
    {
      "date": "May 26",
      "text": "US launches fresh strikes on Iran as talks to end war proceed.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxNVngxZVRLZ1JuQXprdzRzMDIwazZnY2tvWExLS2ZlNkhEMWYxeVF4YTVldGFYSEt4dVU1NEo5bng1Sm9EUFFZNzN3bTJZR1Z1akRjd1o2emJhU0J3TGMtZVZfcWI4ejdyNWhvd1hXRmRPVkFXYmFKUWl0YVM4Q2pyeHJmQW1jSWxsaDdfVXBORmFWQjcwamxWSXFHYlE4ZDFtcGo1SlRzT3RwSHJ3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 782
    },
    {
      "date": "May 26",
      "text": "US conducts 'self-defence' strikes in Iran, Israel hits Hezbollah.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxQNW51NkF2dmtJcC1BX1NScWxJNUtMVWJTcWJ5REVXaGhjQUNidUVsWU5mYjBCQXMwVVJ3ckhtSnJtckIyY19CcmpSV3o2RjV5elRjbnJIOEw5V21YSmUydFFFS1ZIcTVoU1gtN3lXOHJwd2NNdHdBbkRGN2lKcWM1bThVSWZCT2hQbmRHbnRQWnhINWxEM0lrZDRDYjhXSWdtVmtxQVlXWFNzZE15RUR3UTBlTXZTOEQxV25BTmN5VDJxVDdEVTN5cG9IeFE1M2NId0xR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 782
    },
    {
      "date": "May 26",
      "text": "Israel launches air strike on Beirut as US says it has attacked Iranian-flagged ship.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 782
    },
    {
      "date": "May 26",
      "text": "Soldier killed in south Lebanon by Hezbollah drone, another seriously wounded.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxQRVVDc05SZ1VYcjMxb3BjQzdWdVdTTEk2c3ctSm5nb1hJNnNHVlFKMFp1RjNNd2swTU93azBWQnZENENEX2RxYXljeGdQMkhLM1g4NnZzVzlJRmtlWGExSUxNSU5xRW8zUXJkZXN6WlhTRjl3cEZvNUNhOUVKY0dWX3ZTQ0dCaHNZQU1NZEhCMG4xM1dSS3dZLTVWSkUtanJKWEhzc2hwbW1fX3fSAbABQVVfeXFMTi1Ma09FTUlxUUs3RDYwVmlFRWItM3hKQzdxS3lIdUU1OUNRRkxoeHRVeGxWeUVLS2lTLUhULWZrREt0Z1JDUWFrVnFDZ3BNQ2VWNWN2SjFUcWRhQV9nSW11LTJINE5heHRWbHZCd2Z0UlFLdU1EeE4xRHFuOHFiam1Jbkdlcm84VjZFVEQweDFvRzFTbFFLWk1DV2lVYjB2OVpEX0NPcGNoaEtmbko0NEI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 782
    },
    {
      "date": "May 26",
      "text": "US military says it carried out 'self-defense' strikes in Iran, including on missile launch sites.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxORXlFelRZR2pXWkQzZ1NEbmhudU9MTXVwNEJVSWI0QzAtQ3F2bjNwcjYwbS1iRzRoWGRTUEk1LTJkbGg1czkwaFZScV8zNW9ZUXdnZEp0NVNvYlZaTGZJYlNEazFtMzMtdDhkX3V1SlF2Umt2WkdqMEIzZUxpZmJLdl9HZjVnZ0NIMEZvU250Q2lMVGs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 782
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
      "perspective": "US/Trump Administration",
      "headline": "Progress on Iran Deal Amidst Strikes",
      "summary": "The US administration indicates progress on a potential peace agreement with Iran, with former President Trump suggesting a deal is largely negotiated, even as US forces conduct 'self-defense strikes' in Iran.",
      "tone": "strained",
      "latestSinceUpdate": 781
    },
    {
      "perspective": "Iran",
      "headline": "US Aggression and Regional Support",
      "summary": "Iran accuses the US of 'overt and covert' moves for attack and reaffirms its commitment to not abandon Hezbollah, despite US strikes within its territory.",
      "tone": "defiant",
      "latestSinceUpdate": 781
    },
    {
      "perspective": "Israel",
      "headline": "Intensifying Action Against Hezbollah",
      "summary": "Israel's leadership, including Prime Minister Netanyahu, has vowed to escalate and intensify strikes against Hezbollah in Lebanon following recent attacks.",
      "tone": "defiant",
      "latestSinceUpdate": 781
    },
    {
      "perspective": "International Observers",
      "headline": "Fragile Peace Prospects Amidst Escalation",
      "summary": "Hopes for an imminent breakthrough in a US-Iran peace deal are being played down, with ongoing military actions by both the US and Israel indicating a volatile and escalating regional conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 781
    }
  ]
});

export default LATEST_SNAPSHOT;
