export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1016,
  "lastUpdated": "2026-06-20",
  "lastSyncedAt": "2026-06-20T16:53:51.201Z",
  "warDay": 113,
  "summary": "Iran has announced the closure of the Strait of Hormuz, citing violations of a ceasefire between Israel and Hezbollah, even as technical talks between Iran and the US are reportedly pending.",
  "lastNarrativeUpdate": "2026-06-20",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "A ceasefire between Israel and Hezbollah was reportedly agreed upon, but immediate violations and continued strikes have rendered it fragile."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
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
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Jun 20",
      "text": "Iran announces the closure of the Strait of Hormuz, accusing Israel and the US of ceasefire violations.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1016
    },
    {
      "date": "Jun 20",
      "text": "Israel and Hezbollah continue to exchange fire in Lebanon despite reports of a renewed ceasefire agreement.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBwNjdCeHBnM3dhMmtPUDV0OEw4UHJ1T3gxV3IySy1mWkdHcl96emxtTExkZjBKTkpzRjBEejdJWnlBRjdRR29DYUxaUlVpenFLYkFhRHkyQnZodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1016
    },
    {
      "date": "Jun 20",
      "text": "Pakistan states that technical talks between Iran and the US are scheduled to begin on Sunday.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxOR25aelZYNGo5ZVFrNnBfUDQzRTd6eTBzbmUyUW40aGg1MVFqOS0tSVFRNXIwZjAyOFg0UWFSSlAyOHRVMGw1UGtaMUVWTmNWcGtpeTV4eFhacHJFc0d5dVl1THFHa2NMMV9iYmhLSmk4Skc4OTU0U1JmNkNSVWExWDBia1REZF94WTUxbjdrWWJORGdyeGctMjhuNkJQdGlmdzVNbXEzUF9YRHBJQk0xRGlmZWdETEJ2bGYtR1pB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1016
    },
    {
      "date": "Jun 20",
      "text": "The US military lifts a blockade, with Vance criticizing Israel's reaction to an Iran deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxNWDVyRkR6VWszZFAta3UzZkFoa1pUdXpBWXZKSGc5QU8zRXduQWd3dFNQLW8tOEd4Z0h6Ykx0bzRBMmZhMlZJSGJ5QUdHWFYwcGRmWjg0YVZ6cXItaGU3QVFPeHFMaUkwbnI5V0hvcXlfd01zdEM2aWVCeVpNS3BBcTlEOElXbC1mM2Y2cGxhRUVmcVpfM3ZiejJ1a2lUM2ZlYkpuTXBpZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1016
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (13 headlines)"
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
      "summary": "The US has successfully brokered a 14-point agreement with Iran, aiming to de-escalate regional tensions and set the stage for nuclear negotiations. However, the process faces challenges from ongoing regional conflicts, as evidenced by the postponement of talks due to Israeli strikes.",
      "tone": "strained",
      "latestSinceUpdate": 1010
    },
    {
      "perspective": "Regional Stability",
      "headline": "Ceasefire Holds, But Assertions Remain",
      "summary": "While a ceasefire between Israel and Hezbollah has been agreed upon, the region remains tense with Israel maintaining troops in Lebanon and having conducted recent strikes. Iran, having implemented the deal, is also asserting control over the Strait of Hormuz through new insurance requirements.",
      "tone": "skeptical",
      "latestSinceUpdate": 1010
    },
    {
      "perspective": "Economic Outlook",
      "headline": "Hormuz Traffic Up, New Fees Emerge",
      "summary": "The costs of the recent conflict are significant, impacting lives and finances, while the Strait of Hormuz, a critical oil transit point, sees increased traffic but also new Iranian fees, signaling potential future economic friction.",
      "tone": "anxious",
      "latestSinceUpdate": 1010
    }
  ]
});

export default LATEST_SNAPSHOT;
