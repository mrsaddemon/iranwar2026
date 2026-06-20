export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1015,
  "lastUpdated": "2026-06-20",
  "lastSyncedAt": "2026-06-20T15:16:26.509Z",
  "warDay": 113,
  "summary": "A US-Iran agreement has been released, but a ceasefire between Israel and Hezbollah is reportedly violated, leading Iran to close the Strait of Hormuz and postpone US-Iran talks.",
  "lastNarrativeUpdate": "2026-06-20",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "A ceasefire between Israel and Hezbollah was announced but is reportedly being violated by continued Israeli strikes in Lebanon."
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
        "aggression": 0.9
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
    "nuclearIndex": 65,
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
      "text": "The US releases an official 14-point agreement with Iran, aiming to end the war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMidkFVX3lxTE5CQ3p0cG16TzJCYXJpcEQteFZSMkxpQ1dwR3pjNFkxUElfZXJYN0R5ZlRDdzVDVUJQXzVOcHRFUGlHcW5VSmU3MGd0QWoxRGJySklOREdEXzRiZlZjNjd1Z1FWcFJLLTJBV3FsOTgwMTdIeThTYWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1015
    },
    {
      "date": "Jun 20",
      "text": "A US official states that Israel and Hezbollah have agreed to a ceasefire.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNb2hjaXJJODViakgzMExITW9TRTY1SzFPOWo0cFRNZmVsZXJ4cnEwSXN5ZFBsM2VjZ2NNdWZHaWl4LVE2a1k2RWpMUWZQY19acnFobnZYcWgwTEVOOUoxcWlwSnpRN1E2TXR6TllHNGd0UTZaallHcFp0emllU3dKTERyWlhIcW90YzR6eGN1Sk9HanNWUHd0MV9oQTF5by1YQkFydlQyRGtnQldpamdYZXl2RmtqMjBkbWhabTVPSEbSAcYBQVVfeXFMTzd1ZDFrMk9CbDNKNmRyZ2psQUlsazJHdG1hVHkwTENBTzAwbnp0UzUxRzBMY1NXZ3BMclctV1J2NGQxUGZCMGtVaFVlQzZqSHM0b0NvSkJIUDR3aFZJSF9zeW1FalZzR2xBeEFreFJQUmpZVHlxNWZVNHdNVF9PVmwzSmltQTFSeUIxNUxCU2cxbDhBZ2RIY3k1Rk5BODNlYkNOZFpiZWIxX05oczF6Z3FiaUk2YWRGMklnT2c5VDNPR2tmS0Vn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1015
    },
    {
      "date": "Jun 20",
      "text": "Lebanese state media reports continued Israeli attacks in Lebanon despite the announced ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxOMG40STJrQkMxTUlTM2J4bkNpWXJTb0daR3BXaEpNZGx5dVVzaVFsQU9xRXU0QkVlSWw0dXpmSkdYNEVBZmEzVmhma0pyTUg0TFUyMHJnOFQzRFk0Zk5PeHpvVmpVXzZLMVhpS3JoeExqNFhwdkdDSXRfeElvb0VUTGk4bFhvZExWTHFYcWItUWs0cmpNY1R0ZjlDdGZaLTlXTW5VZkVnS1g0a0dhaFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1015
    },
    {
      "date": "Jun 20",
      "text": "Iran announces the closure of the Strait of Hormuz, citing ceasefire violations and continued Israeli strikes in Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxNYWZLRUlHdXhuQXlwNkpEVUlGa2tQSEs5WmJzQUQwRFVzT3lsOG43LWNyOWNlQlFxM2VrQ2VaQVIwR0RGTWljb0JYSkFJeU9FZ3dERzdONnVrdmhXSlZpTjd4WFNnWno0OUdRV2QzbWVMSllVekxQel9PYkZhWlN0VHNkVGJyMGw4RVFkbk1lZ3ZKem14LWU0eWVn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1015
    },
    {
      "date": "Jun 20",
      "text": "Technical US-Iran talks, intended to follow the agreement signing, have been postponed in Switzerland.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1015
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
