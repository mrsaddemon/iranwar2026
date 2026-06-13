export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 959,
  "lastUpdated": "2026-06-13",
  "lastSyncedAt": "2026-06-13T20:55:21.219Z",
  "warDay": 106,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-13",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 1,
    "summary": "A US-Iran deal is announced for Sunday signing, but active conflict persists between Israel and Hezbollah."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 58,
    "escalationLevel": 38,
    "oilDisruption": 60,
    "tradeImpact": 34,
    "sanctionsPressure": 49,
    "globalPressure": 52,
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
      "date": "Jun 12",
      "text": "Trump announces US-Iran deal to be signed Sunday, aiming to reopen Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQNFFWVF9EQWtHZGhrdUx4SHB1ZHQ3b05YTEYzODVmbXRqV2J0ODBsN1hQSDVzbFJqNEw2Z3BPLVZjRnVkYmtOR1BLVno2bUtxR3hELWl4ZnlhbklQejJzRnRiZkh3RmREcWZ6U09zWEIyenFST2JmODNvdmppeURLRVk4M2VMZDQ4b0RWamtPSzBmbHBJZk5RVjdmcDVNTHNzemNQMG5ZUkJQS0xMb1JUWkxGa1B1eVh2anRtdm5VOG7SAcYBQVVfeXFMUEhRTVF3c2tEUFNmSWhpSTVHYV9lQXo2ZHpTRU9yXzBhbGozam4xd1VyUW16Y2N1a3lwYzFabkV4X1ZKZFk0LXRvNXh6R2MxUktrVHNmNktxYWVjNjN5X3JkaDFiME1xWWRKT09UREw2eGJ0RTA5MzdNdEVYajNlTlRCaENwRTY5czFBeVQza2lqVG13LXR0WXZya2lZYmhmclV4R21jLVU4b1dCeW9WS2hFalk1VjdudS0wa0NVbkVWd1ZyRmlR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 959
    },
    {
      "date": "Jun 12",
      "text": "Trump calls off latest threats to strike Iran, citing a breakthrough in talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxNNUxSdXNaSUpKdFBPUU45bTNwSU43cFRxY1VEY2UzcnFoZ0FmRXhjdUdmZVNaSk9WN3VodGJsS21VbzcwdXdoelhHcTFUSWtVUW9LRVhMUXZ4SmlNWEs4OUhwbWdjRVpLY2dNZHZLbk1pZmgzZE04cUhuNmtPZEJicXZjWVVMUjRqRld6R3FDVy03OFFGNTFKcTdaY1ktUEJLamNPMDA1azgzZ00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 959
    },
    {
      "date": "Jun 12",
      "text": "Israel carries out air strikes on Lebanon, killing 12, as Netanyahu urges fight against Hezbollah.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxQMjJkdEg0d3BTbzVnTzZIaVQzR1UzRUtFRnRTOHhUd1FWQUFjdWVFODdtYWlCNWdCNkJ5VFRKQm5XVEFSWlRWckFkUkJPMjd0NkFYY1Bmd0FKc1RrLU0zRlFvYUR5ZlFfRzcydFNWQ1FVdHZNVmhUNUVpd2liTll4eDZRLVlLNXZuUU1FVFdfTzI5UHdBMXhCTE5PbjVDaVROUDRUa0E3eWJUUE5CalU4SlpwUkxCTmtCVVhpUUVCM1FSUThu?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 959
    },
    {
      "date": "Jun 12",
      "text": "Hezbollah drone strikes military zone in northern Israel, no injuries reported.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNZjJQZHBvcHZvbExucVNsS2FNdkRvcEVMaTZMdXduXzhEdi03eEhReDNCUm44Q3ZfV2o5cmR6VENCV0t6RU96QnVOdTVJNVdqZ3hiTkx1RDlOOUJnNUJWT1EzRzFBcDBrVDJWZjdyMk9POFdSOHJkdzZlZ3MtQWtXSG5UbnV6RUQwaDl5M0FuenVSYWpmbjRIY0hXX2RmdHlxVXNmQzZrZWZxVDgtbmd2cWRJNTA0VHBOZGtCdHd0Zmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 959
    },
    {
      "date": "Recent",
      "text": "US military prepared ground mission to capture Iran's uranium, but Trump paused it.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxOa0V0ay1reHR2RFF3YjFjejU0YVVqSTR6TWNBVTlQb2FJNDFEeGFxeVBHTjFQMTNhQ1hURVBtSXNHZEFUTm1jN0x6YUJlY2Flajd4TGJwTzhLc0tsVllESHJ1T2JNQ0RiQS0tVnFtcUtCRldoV2h3NFByUHhhVWRqR3hZVEE0djlIQkJF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 959
    },
    {
      "date": "Recent",
      "text": "Trump and Hegseth broadcast US military strikes before they happen.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 959
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
      "perspective": "US Administration",
      "headline": "Trump Touts Deal Progress, Cancels Strikes",
      "summary": "President Trump claims significant progress in talks with Iran, leading to the cancellation of planned strikes and signaling a potential de-escalation of direct conflict. This narrative emphasizes diplomatic breakthroughs.",
      "tone": "neutral",
      "latestSinceUpdate": 950
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran Denies Deal Finalized, Warns on Hormuz",
      "summary": "Iran acknowledges ongoing negotiations but denies a deal is finalized, maintaining a defiant posture regarding the Strait of Hormuz and leveraging Lebanon as a strategic asset. This perspective highlights caution and continued leverage.",
      "tone": "defiant",
      "latestSinceUpdate": 950
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Israel Escalates Against Hezbollah Amidst Talks",
      "summary": "Israel continues military action against Hezbollah in Lebanon, with the IDF poised for further offensives, indicating persistent regional tensions despite US-Iran diplomatic efforts. This narrative focuses on ongoing localized conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 950
    },
    {
      "perspective": "International Mediation",
      "headline": "Pakistan Claims US-Iran Deal Text Agreed",
      "summary": "Pakistan's Prime Minister asserts that a 'final text' of a US-Iran deal has been reached, suggesting international efforts to broker an agreement are advancing. This perspective offers a more optimistic view of the diplomatic process.",
      "tone": "neutral",
      "latestSinceUpdate": 950
    }
  ]
});

export default LATEST_SNAPSHOT;
