export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 809,
  "lastUpdated": "2026-05-29",
  "lastSyncedAt": "2026-05-29T11:50:45.584Z",
  "warDay": 91,
  "summary": "US and Iran are engaged in tentative truce negotiations, with a potential 60-day deal awaiting Trump's approval, even as both sides continue to exchange strikes and Israel escalates attacks on Hezbollah.",
  "lastNarrativeUpdate": "2026-05-29",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "A tentative 60-day truce agreement between the US and Iran is awaiting President Trump's approval, with ongoing strikes complicating its implementation."
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
        "precision": 0.6,
        "aggression": 0.7
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
      "date": "May 28",
      "text": "US and Iran reach tentative agreement on a 60-day truce, pending President Trump's approval.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 809
    },
    {
      "date": "May 28",
      "text": "Oil price drops 20% from its 2026 peak on optimism over US-Iran ceasefire talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxNV05jSjE0MGtuY1dIUUhSekpqZW5tR2dYN3ZqQXMzVkxfS1FvZ1pab3ZKNzVqTF9NT1ZRRVlpd1ZLcU5rZ214ZlNEa1g4Z08tN3BXNUJYUEVNaUhaZkpWVDN1a3BkSm5zQzBhQlByaU9oQ3BvNVptOVlGMjhybXkxQW8xU0hBZndGbWkzbmdTbG9IZUdhSDJzX3JtbngtTzDSAaQBQVVfeXFMUHBjTTlGS0x0amN2WFpyZ2V2MmJtWGN6TmlPenViX1JpMUtkU1B6UUxTQjYyQm1XbG9zNEhLZXA5ODFEeXhlNEVHZEVQYUFvSmtmSk9jN3VuOEJYbXhvT3pJYlBKVWdxR24wejBKQjQzLVdFeEpYbC1OZDExbW80OWN1eFAwcWpoZi1wWmtXRHI5d3NoWkxtTkllYTBjU2IwOFZjSnc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 809
    },
    {
      "date": "May 28",
      "text": "US and Iran exchange new strikes despite ongoing deal discussions.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 809
    },
    {
      "date": "May 28",
      "text": "Israel strikes Beirut and southern Lebanon, widening attacks on Hezbollah.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNUXdrc3JheHlJVnU3Nlc0Sm1XSnpWQm05cHFpVktvbmxOaEkzMFpWNUNtbUZEYVhwSUNMVTBfUGtBSjI0d00zOWNnVTh5UGd0WmROckRSbGdxLWVjRlpYREJvcEVLQWdRNHpHOTVhckJMOF9zQl80UWkyeDdNcXg3dWhwUFk5MEQ5bENkMk0tcFR4anBGQkY2Nzd6ZVczZ1RHWUw1cEdOalNXQjBjWFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 809
    },
    {
      "date": "May 28",
      "text": "A soldier is killed in a Hezbollah drone attack against Israel.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxOTHc1MlUxWnFvbGhpMDRydGVXYWdzZWtrRkFlaUkwc0lPU0pyUW5NM0ZsNjV3RC1NdnJtUzdYZFdleU81eXVwZlRrdzJtTUVicEFTdk1lZ2ttNTBwTmJ4anlpbzZnX1laa3lYUlhnd0xGQzBrYlpvNk0zYXR6cVpTaGxhVnVfb0xMU1dxOG5nNnVGak1UaVZ1aS1sd1lyZ3ZMTHZOXzU4MlU4QkhHdlhpMnNB0gG3AUFVX3lxTE5NeDZZX0hZeXdlckhDdjBiZ3RkdEt6dXZEUHZGNklmbjU4b0lvTldWaWY2U0tPYjkyeHFZdEM1NjBmMnM0VGdwSVVjS1Q2NERqamZ0YkxTUHdSRmhBMlIyWjlKS2RuaURCSWFramprTjFORXVTTFNBT1RNUWNBWEo0RTNta0U2QXdCMkl3VlZLX2NlYllLeWU2OTRUZUJzVzk0bDZMRHVyT19JU0tsdGtWYjRHUUJacw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 809
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
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
