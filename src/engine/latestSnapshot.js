export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 999,
  "lastUpdated": "2026-06-18",
  "lastSyncedAt": "2026-06-18T21:14:19.657Z",
  "warDay": 111,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 1,
    "summary": "An initial agreement between the US and Iran aims to end the conflict, but its terms are contested, and Israeli military actions continue in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.3
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 45,
    "oilDisruption": 30,
    "tradeImpact": 22,
    "sanctionsPressure": 54,
    "globalPressure": 54,
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
      "date": "Jun 18",
      "text": "US and Iran sign an initial agreement to end the conflict, with tougher talks expected to follow.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxPOTBtUnVpSk00dUI4alhrVGxNYWRLbkttcl9OV2ZWZVhIQW9nYTQtd2RmNm9iMkE1NUloZEpwQ3VJeEhJanZwanBMOEdpNTR1bEpXcTVldnRhc3RqT3FfM3U0MkVWZXJRektyVGxRdnA2R1lQWm9JY3hSRTh6Y2Vybkd3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 999
    },
    {
      "date": "Jun 18",
      "text": "Israel launches fresh strikes on Lebanon and publishes an expanded occupation map despite the US-Iran deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxPbTJ4V2NMM1hEMlJjU0F2bE5GYUdoWHBlS0pFbi0tdDZKc0U4SkpERFpmQUk1bjBzdUR2NjBPX2Q5M040dDNSZmFldGxTX0Ftd0JZV2hIYVVQWkJpd1EtQURvVUY4bEFWT0NMczRMUzI3RUl3cjFKZl9reGlqcXA3SGFOZU9MMTNqQnBuaUlHbXlDTExFMzNhNGR5enF1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBC",
      "latestSinceUpdate": 999
    },
    {
      "date": "Jun 18",
      "text": "Israeli attacks on southern Lebanon kill three people despite the recently signed US-Iran deal.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxPRmRYSFFlOTJnelNXMDFWenltYXpzSkh5b3BrYUNJRTVNYXNSU3FlVmlRM0t4eXhhbnp2eHlmWUxoMVZnNzFYRGZqLTNkSXE3VG9RNGR2aDVPYl9uakxaX2pJbFI1RlRHWFgzZ29fMGFnZ0hyMFZqREFJdkQzVGJQVHRUeDNDcGd6X1RVdlZQRDlmcVg5S3ZvNmhRWGxLZEZWRWdzSUg3bm1ZLXpF0gGyAUFVX3lxTFBTQnVqcFBDQ1M5VDloX3M1eUVudDlIYWxDQnZIQW51ZXdnR05vaGxveV9WajM5T0FtcHdMMmNNUm9NTFY1NE5yLW9DeTBXQWxmLTFRTThHSS1HY3NpV19BdEJKa2dOTk1JRHhReFRBNnBWUTNmaFgweWdkdzg5RGkzSEZrNEhmM3lzNkE1MDlaVFYxdEl5NTl0TlU4TzdjUnJPRUlfNUxWMVI1cG90eXk4UEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 999
    },
    {
      "date": "Jun 18",
      "text": "The Strait of Hormuz sees increased shipping activity, including Iranian and Saudi Arabian tankers, following the US-Iran deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE9FTV9MWkNyMUhBN0gtNU8ydmhRSEVDZE5HcVEzZHAzWkJOVEVPZHpuUFRLNWlsNktjWlJXV2pldTBQcFd0ZzhpLWl2amtZY0RDRGZtTHh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 999
    },
    {
      "date": "Jun 18",
      "text": "The US, Iran, and Hezbollah are reportedly sparring over the murky terms of the ceasefire deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxQcGxOLWVERXRLS3M5VExBNDRhZVpNSmZEVFBSazl2MnVxTFpyMmtJdXRseTJUOXl0dXdtRUJ6V21NX1FtamkxNjQ4NGdmSVpMU2kwVzh5cHVyZ25TMkg1VjAxX1pJYjExNXc3X1B4cHl2ek5lRzRyNW9ST2V0c3JyWkdOd0Fka1FBajFXa3ZMeTdES1VqcDFoQg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "DW",
      "latestSinceUpdate": 999
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
      "perspective": "US Diplomacy",
      "headline": "US Brokers Iran Deal Amid Regional Tensions",
      "summary": "The US, led by Trump, has brokered an initial agreement with Iran to end the conflict and reopen shipping lanes. This effort comes despite immediate challenges regarding the deal's implementation and continued Israeli military actions.",
      "tone": "strained",
      "latestSinceUpdate": 993
    },
    {
      "perspective": "Iranian Assertiveness",
      "headline": "Iran Sets Conditions, Asserts Hormuz Control",
      "summary": "Iran has signed a deal with the US but immediately set conditions for Israeli withdrawal from Lebanon and asserted its right to charge transit fees in the Strait of Hormuz. Iranian tankers have also moved past a US blockade, signaling renewed assertiveness.",
      "tone": "defiant",
      "latestSinceUpdate": 993
    },
    {
      "perspective": "Israeli Autonomy",
      "headline": "Israel Continues Lebanon Strikes Despite US Criticism",
      "summary": "Israel continues its military operations in Lebanon, launching fresh strikes despite US criticism. This indicates a continued focus on its security objectives, seemingly independent of the US-Iran agreement's immediate implications.",
      "tone": "defiant",
      "latestSinceUpdate": 993
    },
    {
      "perspective": "Global Shipping Concerns",
      "headline": "Hormuz Reopening Met with Wary Disbelief",
      "summary": "Shipowners are observing the reopening of the Strait of Hormuz with 'wary disbelief' following the US-Iran agreement. This highlights ongoing uncertainty about maritime security and potential new transit costs imposed by Iran.",
      "tone": "anxious",
      "latestSinceUpdate": 993
    }
  ]
});

export default LATEST_SNAPSHOT;
