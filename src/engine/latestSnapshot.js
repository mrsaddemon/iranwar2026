export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1012,
  "lastUpdated": "2026-06-20",
  "lastSyncedAt": "2026-06-20T09:31:29.303Z",
  "warDay": 113,
  "summary": "A preliminary US-Iran agreement has been reached, setting the stage for nuclear talks, while a fragile ceasefire between Israel and Hezbollah is in effect despite reports of Israeli strikes in Lebanon.",
  "lastNarrativeUpdate": "2026-06-20",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 7,
    "summary": "Israel and Hezbollah have agreed to a ceasefire, but reports indicate ongoing Israeli strikes in Lebanon, making the agreement fragile."
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
        "militaryPower": 80
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
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 65,
    "tradeImpact": 47,
    "sanctionsPressure": 54,
    "globalPressure": 61,
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
      "text": "A preliminary U.S.-Iran agreement to end the war has been reached, with details explained and some aspects remaining unresolved.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1012
    },
    {
      "date": "Jun 20",
      "text": "Israel and Hezbollah have agreed to a ceasefire, as confirmed by the US and officials, though more Lebanon strikes are reported.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBaWVgteWhXVktkU1V4cmU4ekdjRUJQZmNjajhCaVZaSFhhcXRkYldfbnpvU2RSaFhOeXlWNW5TQndiazVxRldSV3JxaThEeDlJWjQ3TGtXY0NIQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1012
    },
    {
      "date": "Jun 20",
      "text": "Israeli strikes have killed at least five people in Lebanon, threatening the recently agreed U.S.-Iran deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxOTC1QQWJuUjg5b0NRQWMxVlkxUjlCTnJsWEdtSFZmdTJQblBCaFlRX3lWY0RhNDVSUjVQZS1DaFcwT29kRkdUbWRiaFUtZG9jNXN2Y2lkUGtqZ1ZybzFtSGViVUJsNmZFRTlJMGg4Njh3LTJYdDUxclJ4eTg5cm8zV1p6ZkVON0k5ZDltZE1OZmJ3T3pwaXFBUmVaVUM1MmFSZEhZ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 1012
    },
    {
      "date": "Jun 20",
      "text": "Iran has imposed mandatory insurance on ships transiting the Strait of Hormuz, with fees likely to follow.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMizgFBVV95cUxNUmxSMkJzZlRKTGhXcklpcnVKd21hQ0Izd1RZWEpJeTJ4dllQYWxNMlMtMGt5TGx6MDJXZlRYbUhuSXR2cUpDNXhWQlBTWlJJNWZ4cGFZbk40aFcwLUdMOXVGdmlwZlh6aXNQYTViMWhGNko4Wnk2Nk9IX0xqVkx4blI3WVl2MmhxOXNvdmxnRThpUFlBRDNRbHRYekF0d2VZUDhZVFZXOUtnLVpudEZ1LXY5aXQzVXU4UkczaXhqU1Jld2FxaUVQY2dRYmJWdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Lloyd's List",
      "latestSinceUpdate": 1012
    },
    {
      "date": "Jun 20",
      "text": "U.S. intelligence warns that Israel is likely to undermine the Iran peace deal, according to officials.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi1gFBVV95cUxPVmF4N2JBdnBNSzhUYnc0d2tIYllaenN5OEtMTDZBS1lWRHRodldDNTZsMTNuTjlPUjMyMi1MMk5sTTF1dDY1dVd3THZHOUxSaXFzUUZUWFRLd29QaVFJMl9Xek9fdnRucjZzZDlDWDFoWkNRU2xXQVBxR1ota0l3Wmp0SThTX1pwV1p4OXRJWkRLMllwU0ZCN1V0ampwRjFqTlJXa3RPX0JoZm9wek9sWXgzVlFqbGVGdWVMQjFRd1NLaHhEUU9nSUtBbmZDbklvel9pSGZR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1012
    },
    {
      "date": "Jun 20",
      "text": "Initial talks in Switzerland for nuclear negotiations, following the U.S.-Iran deal signing, have been postponed.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxPeFRjLUpWQkxqczhQeE1SVXZvMW1JYi15Q2lTMEJxVFg0enRjX0Z1SjIzNjVybWg2Vkx5dTNyYVVETVlMWFNRdkJ1aXVmV0pxZUJ5T0NWRUJQdVBRUUZtLXhId1V0bEFwUkNiY1ZDMEN2YVBmSkY4d1lUNEt2M1NDN1dyZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1012
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
