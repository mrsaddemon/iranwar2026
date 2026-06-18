export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1000,
  "lastUpdated": "2026-06-18",
  "lastSyncedAt": "2026-06-18T23:11:49.949Z",
  "warDay": 111,
  "summary": "The US and Iran have signed an initial agreement to end the conflict, leading to the lifting of the Strait of Hormuz blockade, though Israel continues strikes on Lebanon and disputes over truce terms persist.",
  "lastNarrativeUpdate": "2026-06-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 7,
    "summary": "An initial agreement between the US and Iran has led to a lifting of blockades, while Israel has committed to a truce with Lebanon, though both remain fragile due to ongoing strikes and disputes over terms."
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
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.4
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 20,
    "tradeImpact": 15,
    "sanctionsPressure": 54,
    "globalPressure": 53,
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
      "date": "Jun 18",
      "text": "US and Iran sign initial agreement to end war, with tougher talks ahead.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxPOTBtUnVpSk00dUI4alhrVGxNYWRLbkttcl9OV2ZWZVhIQW9nYTQtd2RmNm9iMkE1NUloZEpwQ3VJeEhJanZwanBMOEdpNTR1bEpXcTVldnRhc3RqT3FfM3U0MkVWZXJRektyVGxRdnA2R1lQWm9JY3hSRTh6Y2Vybkd3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1000
    },
    {
      "date": "Jun 18",
      "text": "US lifts blockade of Iranian ports, leading to more ships moving in the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1000
    },
    {
      "date": "Jun 18",
      "text": "Oil tankers move through Strait of Hormuz as interim deal between Iran and U.S. takes effect.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxPbTJ4V2NMM1hEMlJjU0F2bE5GYUdoWHBlS0pFbi0tdDZKc0U4SkpERFpmQUk1bjBzdUR2NjBPX2Q5M040dDNSZmFldGxTX0Ftd0JZV2hIYVVQWkJpd1EtQURvVUY4bEFWT0NMczRMUzI3RUl3cjFKZl9reGlqcXA3SGFOZU9MMTNqQnBuaUlHbXlDTExFMzNhNGR5enF1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBC",
      "latestSinceUpdate": 1000
    },
    {
      "date": "Jun 18",
      "text": "Israel launches fresh strikes on Lebanon despite Trump criticism and the US-Iran deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE5Bel9CaVBKVXJiT2lxdHpHa3RXZ182QWFDSjBUbVJST1lZYWhjakRJSWEtY0lUdEQzYXFZekM3SEx1eEItVGJrVXZZT1c0ZENfUjBnNDdvZTd6UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1000
    },
    {
      "date": "Jun 18",
      "text": "Israeli attacks on southern Lebanon kill three despite US-Iran deal.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxPRmRYSFFlOTJnelNXMDFWenltYXpzSkh5b3BrYUNJRTVNYXNSU3FlVmlRM0t4eXhhbnp2eHlmWUxoMVZnNzFYRGZqLTNkSXE3VG9RNGR2aDVPYl9uakxaX2pJbFI1RlRHWFgzZ29fMGFnZ0hyMFZqREFJdkQzVGJQVHRUeDNDcGd6X1RVdlZQRDlmcVg5S3ZvNmhRWGxLZEZWRWdzSUg3bm1ZLXpF0gGyAUFVX3lxTFBTQnVqcFBDQ1M5VDloX3M1eUVudDlIYWxDQnZIQW51ZXdnR05vaGxveV9WajM5T0FtcHdMMmNNUm9NTFY1NE5yLW9DeTBXQWxmLTFRTThHSS1HY3NpV19BdEJKa2dOTk1JRHhReFRBNnBWUTNmaFgweWdkdzg5RGkzSEZrNEhmM3lzNkE1MDlaVFYxdEl5NTl0TlU4TzdjUnJPRUlfNUxWMVI1cG90eXk4UEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1000
    },
    {
      "date": "Jun 18",
      "text": "Iran announces plans to bring in maritime fees for the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxQUThlbEZ0WlpCeWk5TXNSb3lnbklYZkdCYjdDTXlJTzBpMlRTZTBiay1sckV6bUMxVzBJMC1HR2R6NFZPWWxCeVdOd0hfZ1pPN203N1U1Ymx5UWZ1bzQwMGxqNjRnb1ZEc0YyX2N6VmdaZ3M4THZlbjhvdHlkRTQ0amZ1U1FaYk5GSFRDNW5QX0t2eWRUWGZ3dFdjSWl4ZjZsX1dILXFvWk5kTGNMTkpOMU1HNA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1000
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
