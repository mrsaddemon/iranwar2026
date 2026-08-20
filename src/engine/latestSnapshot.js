export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2054,
  "lastUpdated": "2026-08-20",
  "lastSyncedAt": "2026-08-20T12:15:33.961Z",
  "warDay": 174,
  "summary": "The US has initiated a 'crushing economic operation' against Iran, while regional military tensions remain high with Israel striking Gaza and Lebanon, and increased activity reported in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-08-20",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is in effect, with ongoing military actions and economic pressure."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
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
        "precision": 0.4,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 85,
    "oilDisruption": 75,
    "tradeImpact": 69,
    "sanctionsPressure": 64,
    "globalPressure": 81,
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
      "date": "Aug 20",
      "text": "UAE suspends all trade and financial transactions with Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBISmhtaW9HT3BxYllQQmZvYjhwTHBKRG5LSFlBSFFLajl4QTBZVTlheU9uM244UVZ6UDVsTUxSbVdMNmgwSlN1T192UDFhTURxV2Z5ZWhqX1lTSnpuaV96US1IUjdkLUd0TlBNMHdn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2052
    },
    {
      "date": "Aug 20",
      "text": "Israel pounds Gaza amid ongoing conflict.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2054
    },
    {
      "date": "Aug 17",
      "text": "US-Iran deal deadline expires, with Trump announcing a 'crushing economic operation' on Iran and threatening Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE96dTlXTXdLdkJfWHpuYUtTRlp1dDh5SEd2a2F6ZUxwcTJCa3kxRXhqaUE1aHhmWTFxOG9Zd21SQzBsalAyRjN1czlieHlXT1lIT1MtcnFDM0tTX1dCeDJqRHdJTXZZYjVHLXRndEJlZ1N6akkyMWRmR2Z5TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2054
    },
    {
      "date": "Aug 17",
      "text": "Israel strikes Lebanon as the U.S. prepares fresh Iran sanctions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxNRXhvNkxYc1FyX0YxVzZZTXBLeW9GVnhVT21GNjlrbmhQSTZpZkdxVmhubVZPcTIxeEVwLUZnMUdiTUYwc3BERmxoWXBNVm5BNGxQOWVwcldhcDFWMC16aXdKVjJrUzlmNVV6SXVtV3dsLVpOcGgzWm1SNkZ1MTBiOGdVaWpJYzlvMEVlOQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Japan Times",
      "latestSinceUpdate": 2054
    },
    {
      "date": "Aug 20",
      "text": "Increased traffic reported in the US-controlled Strait of Hormuz corridor, with the U.S. Navy assisting oil transport.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2054
    },
    {
      "date": "Aug 20",
      "text": "Hezbollah FPV drone reportedly chases Israeli soldiers.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2053
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
