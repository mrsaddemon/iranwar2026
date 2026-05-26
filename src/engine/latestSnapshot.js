export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 781,
  "lastUpdated": "2026-05-26",
  "lastSyncedAt": "2026-05-26T00:16:53.166Z",
  "warDay": 88,
  "summary": "US forces conducted self-defense strikes in southern Iran while Israel intensified attacks on Hezbollah in Lebanon, amidst ongoing, yet uncertain, discussions for a US-Iran peace deal.",
  "lastNarrativeUpdate": "2026-05-26",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 14,
    "summary": "Despite ongoing discussions, no ceasefire or de-escalation agreement is currently in effect, with military actions continuing."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 75,
    "oilDisruption": 40,
    "tradeImpact": 42,
    "sanctionsPressure": 62,
    "globalPressure": 72,
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
      "date": "May 26",
      "text": "US military conducted 'self-defence strikes' against targets in southern Iran, near the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxQNW51NkF2dmtJcC1BX1NScWxJNUtMVWJTcWJ5REVXaGhjQUNidUVsWU5mYjBCQXMwVVJ3ckhtSnJtckIyY19CcmpSV3o2RjV5elRjbnJIOEw5V21YSmUydFFFS1ZIcTVoU1gtN3lXOHJwd2NNdHdBbkRGN2lKcWM1bThVSWZCT2hQbmRHbnRQWnhINWxEM0lrZDRDYjhXSWdtVmtxQVlXWFNzZE15RUR3UTBlTXZTOEQxV25BTmN5VDJxVDdEVTN5cG9IeFE1M2NId0xR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 781
    },
    {
      "date": "May 26",
      "text": "Israel launched strikes on Hezbollah sites in south Lebanon, with Netanyahu vowing to intensify attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxQMHZ6T3ItVElkd1cyWVlNX3VOM05DeUY3bEJGb3QwT1R0SGFQejVzUVI4Z19DZlhwYjNDQ0FVMlBlekEzMkhNYXNDY3lySzZzNUNPUy1uWWpkMl92NGhhNXFfUEViZXZMeDhMbTAxSTZPY3NvMTJ3c2t1cjc1THJxeTU2ZEl2VUtrSTNvbWdhSV9iVEllVXh2bHhKRmhmVW5JYndlemFyblU1bk14bUMzUjBJNVd5SzhXQzZSTy1UYTVIbnhLTnc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 781
    },
    {
      "date": "May 26",
      "text": "A soldier was killed in south Lebanon by a Hezbollah drone, and another seriously wounded.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxQRVVDc05SZ1VYcjMxb3BjQzdWdVdTTEk2c3ctSm5nb1hJNnNHVlFKMFp1RjNNd2swTU93azBWQnZENENEX2RxYXljeGdQMkhLM1g4NnZzVzlJRmtlWGExSUxNSU5xRW8zUXJkZXN6WlhTRjl3cEZvNUNhOUVKY0dWX3ZTQ0dCaHNZQU1NZEhCMG4xM1dSS3dZLTVWSkUtanJKWEhzc2hwbW1fX3fSAbABQVVfeXFMTi1Ma09FTUlxUUs3RDYwVmlFRWItM3hKQzdxS3lIdUU1OUNRRkxoeHRVeGxWeUVLS2lTLUhULWZrREt0Z1JDUWFrVnFDZ3BNQ2VWNWN2SjFUcWRhQV9nSW11LTJINE5heHRWbHZCd2Z0UlFLdU1EeE4xRHFuOHFiam1Jbkdlcm84VjZFVEQweDFvRzFTbFFLWk1DV2lVYjB2OVpEX0NPcGNoaEtmbko0NEI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 781
    },
    {
      "date": "May 26",
      "text": "Reports indicate mixed signals on a potential US-Iran peace deal, with some officials suggesting it's nearer but could take days, while others play down hopes for an imminent breakthrough.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxQZ29QTUp4cGNUdUhvZTRtd3UzQWtTMTc3QUpjb1ZSZ0g0R00wdkVlaVprcFVDdTVjWVZnMDRGWG1wZ3BoNVNTQWMwdFJSYV9qUXhKdmxPSC1iSkFJWUVVSUIteW14NmtneHJTS1BHV3BBUVBiVnhST1JOT1JjRWJrRXJ6S0Z1OEJnNjFIQ1pNTm5ScWs3dXZLejJ2dWhvZ9IBowFBVV95cUxQXzJRZHZUSmxMaTVwN0NrVHdUT3U5Tk84ZWQtMVZhY3d3OHJEdzBqbzVPSEl1RUEwbVZuZWtrWjBWeDdiTmRreTVQYk1wVUZsQ053WW1pUFVTalFMUHQ4LXBLdTV1Z3p3eV95c2JILV91RkRLazlLbVVaejcwQ3ZFQWZ1Y0JHVWdMYUtRY1ZUSE11UUhKOGJ4X3hReFBuWUlFMnJR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 781
    },
    {
      "date": "May 26",
      "text": "Pakistan's army chief Asim Munir held 'high-level' talks during a visit to Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNb3RKeWxZZmhWX05WV2NybDlvb3BDd3daTXJqQWdfUk9IbWV6ZVFNYW1IVklsX0lVTExTRzh3MFJnRXdVR3VkbThIV215NkJYbm5STXRkUUprekJiS3BRQlliOUl5LUJFTXVnNEMyd2J0N1V5cFQ3M0V1ejZZcEFPLUo4ZnloTHlNVUNUYS1FckFlemxBS0NjVF8zd2pUaFJqRXZSQU44MGQyYl96cExGS2lhNzhWYXg3YWJzRkQtTQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Firstpost",
      "latestSinceUpdate": 781
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
