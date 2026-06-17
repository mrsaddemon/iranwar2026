export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 986,
  "lastUpdated": "2026-06-17",
  "lastSyncedAt": "2026-06-17T05:04:09.797Z",
  "warDay": 110,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-17",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 2,
    "summary": "An initial deal to stop fighting has been signed between the U.S. and Iran, but its terms are contested, and Iran has continued drone activity in the Strait of Hormuz."
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
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 45,
    "tradeImpact": 33,
    "sanctionsPressure": 54,
    "globalPressure": 58,
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
      "date": "Jun 15",
      "text": "U.S. and Iran announce an initial deal to end the war and reopen the Strait of Hormuz, virtually signed by Trump and Vance.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTFBKTnRENzBwRkxWekxYZk5SWTBVVUVVaW1Vc0k1d0p2MExyXzJhdlFnWFBKSV9FT0VxWGluN0FHQk5tZm9SZ1hrVmZRd0xaZW1UdjFzdTVtOXVZNndRVVNvVkVxYUNiS3ZyMlJXYk1hVnA3amM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 986
    },
    {
      "date": "Jun 15",
      "text": "Iran warns of ‘harsh response’ over Lebanon attacks and warns Israel over deadly attacks in Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxNbHJQU1A2ckp0cTZTZnNGZEU2YTl5NVQwcmwtSk92LWhYRmd5RHRvWVNETkk2M2FiczN6QnhBWkQ5UGFCSDlEbi1tWER1d243aGtFbnJJOERIck1PTXJHNUdRNjJ3QTdSVVdrbEppVTlVaDVHM3E5Uk9ERjhsWFVlSWlTMEJWamEwRG00WGk0WU9FdjFjNlFWckZzcjRvc3hsbHVDM0ZkRTVabmhWdjdqUFp30gG3AUFVX3lxTE1rRU1UeGpwWDJvU0VtNjRHRGE4ZE5tS0lSc3pSMl9LTmk5dlJsQS1PeHE2dS1WcWxvbm9IQ2NUenNTdDdRaHYzRk5pd1BhdXp3Sk5MQ2JNamVhemYxVzNwRGtyRGJnM3M0SW9YQW9JeTh4eEdPcDlrcExnaDd3bEhtalZjcTcwTmJVbE54YVAxYWZzbDhuSlFhNTIyRTIzMnJYQTZ5WC1jWlVKZWtUcmE4UDVPVWxFMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 986
    },
    {
      "date": "Jun 15",
      "text": "Trump faults Israel's Beirut strike and urges a stand-down, threatening the U.S. deal with Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE00bzAyQUpFVVFHOWtkLWtJTzk0NlEtTGMzQWhkclpfY1JEcUhkTWExbXhvWmlqX3JYT1g3ajlLNUdUcktGTTVKSzZqR2pXcTE3Q0ZLUk81RGdrOHJzU3VfUkxYUzNMRnEwWmlYbm1oSEp0U3VlSjUtSndOUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 986
    },
    {
      "date": "Jun 16",
      "text": "Iran has fired drones at ships in the Strait of Hormuz every night since the agreement was signed on Sunday.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 986
    },
    {
      "date": "Jun 17",
      "text": "U.S., Iran, and Hezbollah spar over the murky terms of the ceasefire deal, with Iran stating the deal requires Israel to withdraw from Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxQcGxOLWVERXRLS3M5VExBNDRhZVpNSmZEVFBSazl2MnVxTFpyMmtJdXRseTJUOXl0dXdtRUJ6V21NX1FtamkxNjQ4NGdmSVpMU2kwVzh5cHVyZ25TMkg1VjAxX1pJYjExNXc3X1B4cHl2ek5lRzRyNW9ST2V0c3JyWkdOd0Fka1FBajFXa3ZMeTdES1VqcDFoQg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "DW.com",
      "latestSinceUpdate": 986
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
      "perspective": "US Administration",
      "headline": "Trump Hopes to Put War in 'Rearview Mirror' with Iran Deal",
      "summary": "The U.S. administration, led by Trump, has signed an initial deal with Iran to end the war and reopen shipping lanes, expressing a desire for de-escalation. Trump has also criticized Israel's actions in Lebanon, urging a stand-down.",
      "tone": "strained",
      "latestSinceUpdate": 986
    },
    {
      "perspective": "Iran",
      "headline": "Iran Warns of 'Harsh Response,' Demands Israeli Withdrawal",
      "summary": "Iran has warned of a 'harsh response' to attacks in Lebanon and asserts that the deal with the U.S. requires Israel to withdraw from the region. Despite the agreement, Iran has reportedly fired drones nightly in the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 986
    },
    {
      "perspective": "Israel",
      "headline": "Israel Under Pressure Amid Beirut Strikes and Withdrawal Demands",
      "summary": "Israel's actions in Lebanon, including Beirut strikes, have drawn criticism from Trump and are cited by Iran as a condition for the U.S. deal. The demand for Israeli withdrawal from Lebanon remains a contentious point.",
      "tone": "anxious",
      "latestSinceUpdate": 986
    },
    {
      "perspective": "Global Shipping/Energy",
      "headline": "Strait of Hormuz Reopening Amid Continued Drone Activity",
      "summary": "The U.S.-Iran deal aims to reopen the Strait of Hormuz, a critical shipping lane. However, Iran's continued nightly drone firings in the Strait and its assessed ability to shut it down at will introduce significant uncertainty and risk.",
      "tone": "skeptical",
      "latestSinceUpdate": 986
    }
  ]
});

export default LATEST_SNAPSHOT;
