export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1021,
  "lastUpdated": "2026-06-20",
  "lastSyncedAt": "2026-06-20T23:52:35.861Z",
  "warDay": 113,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-20",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 7,
    "summary": "Multiple ceasefire agreements between Israel and Hezbollah have been violated, with fighting continuing in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
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
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "date": "Jun 19",
      "text": "Iran reportedly shuts the Strait of Hormuz, citing Israeli attacks in Lebanon and ceasefire violations.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBFbVh2NGR4RU1xWVVYUExYN0FlNF8zRjFKenhqQlZnWk5OVkFJbzFlRHdJcUxwS1JiUFJoQ1dsUXFLN0tjMDVELUM3SHdVTjNMUTdLSXJBMGRKUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1021
    },
    {
      "date": "Jun 19",
      "text": "US envoy Vance departs for Switzerland to engage in peace talks concerning the Iran war.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1021
    },
    {
      "date": "Jun 20",
      "text": "Israel and Hezbollah continue to exchange strikes in Lebanon despite previous ceasefire agreements.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBwNjdCeHBnM3dhMmtPUDV0OEw4UHJ1T3gxV3IySy1mWkdHcl96emxtTExkZjBKTkpzRjBEejdJWnlBRjdRR29DYUxaUlVpenFLYkFhRHkyQnZodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1021
    },
    {
      "date": "Jun 20",
      "text": "Vance criticizes Israel's reaction to a preliminary US-Iran agreement as the U.S. military lifts a blockade.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxNWDVyRkR6VWszZFAta3UzZkFoa1pUdXpBWXZKSGc5QU8zRXduQWd3dFNQLW8tOEd4Z0h6Ykx0bzRBMmZhMlZJSGJ5QUdHWFYwcGRmWjg0YVZ6cXItaGU3QVFPeHFMaUkwbnI5V0hvcXlfd01zdEM2aWVCeVpNS3BBcTlEOElXbC1mM2Y2cGxhRUVmcVpfM3ZiejJ1a2lUM2ZlYkpuTXBpZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1021
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (14 headlines)"
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
