export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2073,
  "lastUpdated": "2026-08-20",
  "lastSyncedAt": "2026-08-20T23:33:22.628Z",
  "warDay": 174,
  "summary": "The US has intensified economic pressure on Iran, including new sanctions and trade restrictions, while military tensions persist in the region with ongoing US Navy operations in the Strait of Hormuz and Israeli strikes in Lebanon.",
  "lastNarrativeUpdate": "2026-08-20",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire or de-escalation efforts are reported amidst ongoing conflict and economic pressure."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 50,
    "escalationLevel": 80,
    "oilDisruption": 75,
    "tradeImpact": 68,
    "sanctionsPressure": 63,
    "globalPressure": 80,
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
      "date": "Aug 19",
      "text": "UAE suspends all trade and financial transactions with Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBISmhtaW9HT3BxYllQQmZvYjhwTHBKRG5LSFlBSFFLajl4QTBZVTlheU9uM244UVZ6UDVsTUxSbVdMNmgwSlN1T192UDFhTURxV2Z5ZWhqX1lTSnpuaV96US1IUjdkLUd0TlBNMHdn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2072
    },
    {
      "date": "Aug 19",
      "text": "Trump announces 'crushing economic operation' on Iran with talks in limbo, warning nations against throwing Tehran a lifeline.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE96dTlXTXdLdkJfWHpuYUtTRlp1dDh5SEd2a2F6ZUxwcTJCa3kxRXhqaUE1aHhmWTFxOG9Zd21SQzBsalAyRjN1czlieHlXT1lIT1MtcnFDM0tTX1dCeDJqRHdJTXZZYjVHLXRndEJlZ1N6akkyMWRmR2Z5TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2073
    },
    {
      "date": "Aug 19",
      "text": "Israel strikes Lebanon as U.S. prepares fresh Iran sanctions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxNRXhvNkxYc1FyX0YxVzZZTXBLeW9GVnhVT21GNjlrbmhQSTZpZkdxVmhubVZPcTIxeEVwLUZnMUdiTUYwc3BERmxoWXBNVm5BNGxQOWVwcldhcDFWMC16aXdKVjJrUzlmNVV6SXVtV3dsLVpOcGgzWm1SNkZ1MTBiOGdVaWpJYzlvMEVlOQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Japan Times",
      "latestSinceUpdate": 2073
    },
    {
      "date": "Aug 19",
      "text": "US hits Hezbollah with more sanctions, stating Iran controls it.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxQQ1gzeHdiQlpnSVZlNWJibTFMbzdBYXF2Z0ZJSmVzRXk3RHRzdlZUMXJrUUJPLXNQN2djWVBKTnluVlFUUmNUR1dfRkt2bjFyZldRbGpIcHJGQ0ZEeFdoenhlcHVMRTBXaUhSbTBHLTVCbC1lQ3JhMUlYak1EWEx0cWZ6S3hEbG9BcUphN2JiUEhSOVdkN1BwUkhLamkzMXBySkczY2Q3dVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2073
    },
    {
      "date": "Aug 19",
      "text": "U.S. conducting stealth operation to transport oil through Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMia0FVX3lxTFB6cnBGdDhxTW9hTE5vaXdadmx4NVFFb1lsc2ZRRWlGZTd3MnVJamt1Q0VpSzBHblBIMHlqTVhUN2pvaGc2RVBiRlJHOTJwTnpCT0h0bUwzREgwb3h6VTNHc3lMaFpzbmt1di04?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 2073
    },
    {
      "date": "Aug 19",
      "text": "More than 750 US service members wounded since start of Iran War.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxOaXROaW5CZXFmcURNMzN0aWFmTm9xNlZGaG55cTE1LXFUOHp4UGdxRDFtY0xzYUtBbk92NGgtZVhici1rU1pqZGg5Q3V1dXd5V3pqUnNIZEZGclFvRXRMUzhpemdGaER4bmFpaDlJSEtZM2Uyc3puSk1FR29Ma0JnTVln?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2073
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
      "perspective": "US/Western",
      "headline": "Iran's Aggression Prompts Sanctions, Deconfliction Efforts",
      "summary": "The US is responding to Iran's escalating actions, including missile launches and Strait of Hormuz incidents, with fresh sanctions and diplomatic efforts to deconflict regional tensions. There is also consideration for adjusting the US military footprint in the Gulf post-conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 1998
    },
    {
      "perspective": "Iranian",
      "headline": "Defiance Amidst US Pressure and Regional Strikes",
      "summary": "Iran continues to assert its regional influence, including missile launches and claims over the Strait of Hormuz, in defiance of US pressure and sanctions. The nation is responding to US-Israel strikes and perceived threats to its sovereignty.",
      "tone": "defiant",
      "latestSinceUpdate": 1998
    },
    {
      "perspective": "Israeli/Regional",
      "headline": "Escalation in Lebanon and Iran Amidst Regional Instability",
      "summary": "Israel has escalated attacks in southern Lebanon despite a ceasefire, citing ongoing security concerns and threats from groups like Hezbollah. The broader West Asia conflict sees US-Israel strikes hitting Iran, contributing to regional instability.",
      "tone": "strained",
      "latestSinceUpdate": 1998
    }
  ]
});

export default LATEST_SNAPSHOT;
