export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1228,
  "lastUpdated": "2026-07-09",
  "lastSyncedAt": "2026-07-09T22:57:59.631Z",
  "warDay": 132,
  "summary": "The US and Iran are engaged in renewed tit-for-tat strikes following President Trump's declaration that the ceasefire is over, while Israel continues operations against Hezbollah in Lebanon.",
  "lastNarrativeUpdate": "2026-07-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 1,
    "durationDays": 60,
    "summary": "The ceasefire agreement between the US and Iran has been declared 'over' by President Trump, leading to renewed hostilities."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "date": "Jul 09",
      "text": "US and Iran trade strikes for a second consecutive day after President Trump declared the ceasefire 'over'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxPbUJvWmM1dG1ldjh4TmdlYUJyTVRiWjhIVUFqcEJIVzcwdVJOb2c0ZlU2V3gxaktFWU9acnkzMGNDUHcwTEtPR2lJQVpaYjd1SU50UWpWUEdLNXBzWWZQbC1LcFBmMjNSRGRQMnRWYTAtRVJydTEwZ1dHMVlfdDVQNl9DMVNxVnlX?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1228
    },
    {
      "date": "Jul 09",
      "text": "Iran reports explosions across its southern regions and states it hit U.S. military targets in the Gulf, while burying its slain leader Khamenei.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOU0l1cEJNcjlUQjVYcXFjUVViTThKdnVqSGJMTUpEM2Jqem5HUGJyN1VvcEtyQUdrUnFBYWFhNXB3aEFUX2RmRHhCbXJxQ1JhX1Y1RXVyZUp3TXFlY1RFRXpLMWxHQnlQa3Q2OU1wekRWOEY4dGVzNVhQMnhYd1gyVEM0c080bUdGY01KNGJ2RW05MnlQMER1Q21EeUNfME1TVTh2aFk3TFZqMnpnOFowUzhmMWpXdUVHTmJtaXE1VkU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1228
    },
    {
      "date": "Jul 09",
      "text": "Israel continues operations in Lebanon, destroying Hezbollah tunnels and capturing militants, affirming its presence in the security zone until Hezbollah is disarmed.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1228
    },
    {
      "date": "Jul 09",
      "text": "The dispute over the Strait of Hormuz is cited as a factor in the latest cycle of US-Iran fighting.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxPNTNGMWh4a2Vpd3VvX202NjR5NEJNTVZ2ZmR3cTdKVjZFYlFnZWh1MHFvUTdXMzZ4X3NFcXJySi1RTFFUWnNKd2c0QmVObm8zbkJoVzJqeS1YUmdZcDNvUFY3Ml80UFpTb3gtMzBRYTItS3ZnODFsdkJMWENjS29Qdl9UOS1NWDZCUzgxR0prTHQyS2EwMzZVZnZfUWVZcUNlOEFCUGN2dVFPUnpw0gGyAUFVX3lxTE5RWVFYdS1wNkYtYnktZUdxLUk2a3dyZjc0YlVHVWdUZ2RDcVItYlhVelFlVm1kcGtadk5TVUxoamJYekVWQXFJRXpYSHRuSDNWU2VVNjhzaHVCMndTbEJNRGpSVXF2SllYTTc5UnJldkl5RWQyUlV0SGxzem9nTHlYckxRMlZJdlFKQzhLU2RZX2VpbkFyU0xTeGJQczNiQksxeDlIclZ6SXdnVVM0SHBHbHc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1228
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
      "perspective": "US Policy",
      "headline": "Trump's Desire to Exit Iran War Contradicted by Renewed Hostilities",
      "summary": "Despite President Trump's stated desire to leave the Iran war behind, recent events indicate a shift to a direct confrontation over the Strait of Hormuz, with the ceasefire declared 'over'. The US has initiated new strikes and economic measures.",
      "tone": "strained",
      "latestSinceUpdate": 1220
    },
    {
      "perspective": "Iranian Response",
      "headline": "Iran Retaliates to US Strikes, Targets Gulf Arab States",
      "summary": "Following US airstrikes, Iran has responded by firing back at three Gulf Arab states, including Kuwait and Bahrain. This marks a direct escalation in the conflict, with Iran's actions seen as retaliation for US military and economic pressure.",
      "tone": "defiant",
      "latestSinceUpdate": 1220
    },
    {
      "perspective": "Regional Stability (Lebanon)",
      "headline": "IDF Prepares for Renewed Hezbollah Conflict Amidst Truce Violations",
      "summary": "The IDF has reported hitting a Hezbollah cell in south Lebanon and is preparing for a possible resumption of fighting, warning of further attacks if the truce is violated. Lebanese political figures are urging Hezbollah to submit to state authority.",
      "tone": "anxious",
      "latestSinceUpdate": 1220
    },
    {
      "perspective": "Global Economy",
      "headline": "IMF Forecasts Slower Global Economic Output for 2026",
      "summary": "The International Monetary Fund (IMF) has indicated a slower global economic output for 2026. This forecast comes amidst heightened geopolitical tensions, which could further impact energy markets and trade routes.",
      "tone": "skeptical",
      "latestSinceUpdate": 1220
    }
  ]
});

export default LATEST_SNAPSHOT;
