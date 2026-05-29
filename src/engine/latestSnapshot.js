export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 813,
  "lastUpdated": "2026-05-29",
  "lastSyncedAt": "2026-05-29T22:15:19.167Z",
  "warDay": 91,
  "summary": "The US and Iran are engaged in ongoing negotiations for a ceasefire and the reopening of the Strait of Hormuz, despite continued exchanges of strikes, while Israel intensifies its military actions in southern Lebanon and holds talks with Lebanon.",
  "lastNarrativeUpdate": "2026-05-29",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "Negotiations for a 60-day truce and ceasefire extension are ongoing between the US and Iran, but active strikes continue from both sides."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
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
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "date": "May 29",
      "text": "US and Iran exchange strikes as Israel intensifies attacks on southern Lebanon",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNUXdrc3JheHlJVnU3Nlc0Sm1XSnpWQm05cHFpVktvbmxOaEkzMFpWNUNtbUZEYVhwSUNMVTBfUGtBSjI0d00zOWNnVTh5UGd0WmROckRSbGdxLWVjRlpYREJvcEVLQWdRNHpHOTVhckJMOF9zQl80UWkyeDdNcXg3dWhwUFk5MEQ5bENkMk0tcFR4anBGQkY2Nzd6ZVczZ1RHWUw1cEdOalNXQjBjWFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 813
    },
    {
      "date": "May 29",
      "text": "US military launches another strike on Iran as potential deal stalls",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxPZm96OTJkNENIbjhibTlaT0lpOVlhdXBVdWpYd0h0cXdxa2ZHVXMyWUV3RWswLTZsZ25MZUFwRm14NUJkbVNKLVZ2OS1tOFZkd2RyTnliZWxFT3ZKcE1JUTYwa1h1dXE2TldTT0d5RldSN2Y1TUk2RjRQSXpkSXFUY3FCYUllbHBNU21PSURzQ29aSlRwXzB6UnpudEJ0VnFEbzVjVFlNcTNFOTdGRnltbkhhd01mMTg3MmFCNnA2RFBjc3BW?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Euronews.com",
      "latestSinceUpdate": 813
    },
    {
      "date": "May 29",
      "text": "Iran says it targeted American base after fresh US strikes",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 812
    },
    {
      "date": "May 29",
      "text": "Israeli troops push deeper into Lebanon as the two sides start military talks at the Pentagon",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi6wFBVV95cUxPYktwTERPQUx5Yk9XZllSX1QxckpTakQ4cXRqSTZ2a3Y0OXdRZHNna1hKcGJwVVBvQlRDQkV0VU9hUFlUZ3I1bFpMRnlRZTltRjkySmZCS2hJR2xQRXVPN09SSG84WWp0dndZWURaUHRWRk1FU250YTItRjFSVEswQWdZcWltOXROX3diVXczcE9CbVpXX0I3WDc5Q2NaemZMakI3Wm4wOHZWem0xeXZXWnlhdkdtUGtKMHJRWERDZ1FzR1NZUTFXaHJWZ05LbDFpb2pWN0h0TjdtQmZNMzFKWElXaUxiZGl5bXVF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 813
    },
    {
      "date": "May 29",
      "text": "U.S. Officials Say They Are Closing In on Arrangement to Reopen Strait of Hormuz",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE1fcnhwNnhKV0lpWUV1WGdIUkltT1RpQXBKTnk5T05IRmpBcXZoc1dxcjkxVWNmWnVHVGk2LWlVYWMzTmRUS0tydERZRlRtdjFWbGJTa1ktMXcwRTU1MDdRMXFDVzAzb0VHLVhfMXd4STVvRDMyeGRR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 813
    },
    {
      "date": "May 29",
      "text": "US and Iranian negotiators reach tentative deal to extend ceasefire and start new nuclear talks",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxQZkpNTFpBTDhFTFczZnNxSVpaSDRnYnZiX2pKSmFIWTFJZVh0ZG5Ka2o1SmxjVHl0MzVoTEVIZUMySGRmYWdPbGcyNVEwRWJCdGdHQTNIbXNadWJCMV9IeVB3TVh2S21NUEZoXzhTNWxjdTdmSFdTSUFwQ2w4UWQ4aVBqMHdwQ24yQ0xIS05rNUc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 813
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
