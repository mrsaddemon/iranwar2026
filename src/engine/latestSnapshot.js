export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 990,
  "lastUpdated": "2026-06-17",
  "lastSyncedAt": "2026-06-17T19:14:18.942Z",
  "warDay": 110,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-17",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 2,
    "summary": "A preliminary deal between the US and Iran has been signed to end the war, but its terms are murky, and hostilities continue with Israeli strikes and Iranian retaliatory attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.4
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 40,
    "tradeImpact": 29,
    "sanctionsPressure": 54,
    "globalPressure": 57,
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
      "text": "US and Iran virtually sign a preliminary agreement to end the war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTFBsS3dOOXZmUFdkN2htVW0wQjB4MzdrUlBWazE3T3hDNjZSajhKeXIyaTlodjlFNV9oWF9SeHdBcmdPYlAyaG5QeVNHeEFUeUQxeW9nZkxyb3U0LTBLb3lYVUoyR3V3MGFFbkFIb2NYcWRBZW8?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 990
    },
    {
      "date": "Jun 15",
      "text": "Terms of the US-Iran deal remain secret and murky.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 990
    },
    {
      "date": "Jun 15",
      "text": "Strait of Hormuz to reopen, and US to lift Iran sanctions under the deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxNd3hyU3FuSlhkMVRjZHJ1eEQ2VmNZMWl5Y3I3QkFTeFh4YlhQazAwdTY0dHhpMDVYYXpsWmpYMTk1clhHOVZWUlpFU2JPQU1QTkdFM0RtM2VZVlVlaldtLWQyaWJBb0ppS1dCWmNYV2hKVmwxY2Nvc2RRVHZxUWhHbkNWSzdxbHl6RVYxYm9oWmVPS2kyd3NMWFA2T05fQXp3UGpnZUxkdDRBTGE4QWg0RGZ1TjlvZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 990
    },
    {
      "date": "Jun 16",
      "text": "Iran states the initial deal requires Israel to withdraw from Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxOMU9UVU0xalpEMWRiaWd2TmRycmtVR0x4aXhhOUFEaTZpbzFRY3l0YzRqb0NxcVZDa2NDX3NscUJfeDNrbkh0bXA4OXNtaEFCU0t0X0w3Q2lfMDNlWUY2SDhDMnRrTVdVUENVQnNmWXRqZ0sydXBVVmU3aEExX3NKOEdaUFo5b0FFWUZTRl9Ia09QQy1IUlBpNW5FaUVUd1lKajRnXy1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 990
    },
    {
      "date": "Jun 16",
      "text": "US intel assesses Iran can shut down the Strait of Hormuz at will.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxPX3JKVm9LQzlXQjEyZzhpOXhjU2ZDblJsSk9HdXlJT0R5SzlMOEVVZXhQQWNtZzhJMnVhTkFmVDdRcXdTaTkteE5zUkJxMlFiUUZUVGhjeDRGRFFkbXc4azdXR1ZzbENoUnpUV0VqcElNTTRRdWFtME5paEwzSGd2SW9fTjdpSXljTnBB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 990
    },
    {
      "date": "Jun 16",
      "text": "Trump faults Israel's Beirut strike and urges a stand-down, threatening the US deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE00bzAyQUpFVVFHOWtkLWtJTzk0NlEtTGMzQWhkclpfY1JEcUhkTWExbXhvWmlqX3JYT1g3ajlLNUdUcktGTTVKSzZqR2pXcTE3Q0ZLUk81RGdrOHJzU3VfUkxYUzNMRnEwWmlYbm1oSEp0U3VlSjUtSndOUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 990
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
