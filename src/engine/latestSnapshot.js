export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2075,
  "lastUpdated": "2026-08-21",
  "lastSyncedAt": "2026-08-21T02:00:00.000Z",
  "warDay": 175,
  "summary": "The conflict nears six months with the US imposing new economic sanctions on Iran, which has responded by threatening to keep the Hormuz Strait closed, while Israel continues strikes in Gaza.",
  "lastNarrativeUpdate": "2026-08-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is in effect, with ongoing military actions and stalled diplomatic efforts."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Aug 19",
      "text": "UAE suspends all trade and financial transactions with Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBISmhtaW9HT3BxYllQQmZvYjhwTHBKRG5LSFlBSFFLajl4QTBZVTlheU9uM244UVZ6UDVsTUxSbVdMNmgwSlN1T192UDFhTURxV2Z5ZWhqX1lTSnpuaV96US1IUjdkLUd0TlBNMHdn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2072
    },
    {
      "date": "Aug 19",
      "text": "Trump announces 'crushing economic operation' on Iran and threatens its trade partners, with talks in limbo.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE96dTlXTXdLdkJfWHpuYUtTRlp1dDh5SEd2a2F6ZUxwcTJCa3kxRXhqaUE1aHhmWTFxOG9Zd21SQzBsalAyRjN1czlieHlXT1lIT1MtcnFDM0tTX1dCeDJqRHdJTXZZYjVHLXRndEJlZ1N6akkyMWRmR2Z5TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2075
    },
    {
      "date": "Aug 19",
      "text": "Iran states the Hormuz Strait will remain shut until the U.S. meets interim deal conditions.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixwFBVV95cUxOSENtbzRKbGs1djM0OE56Z0w0ODhCSVBFdHBXeTFqUGo2dzVPZ25GQkhGUTNXQTFtY0tNNDFrTnlSN2ZtQ282M2pSbWZrMncwUGFOcEtyaTB6TXNLNDR4Y0gtMEloYUU2S185bVBjeEpnYTBEUF9peWhzeEV0NVR5TVU3d3psNnc2VHdzYTJ5ZlhUM3dVbXh0SlFQZmhUQl9wbzQ4WG5ETXp4UjZyeWRmV2FyekpaYTFiZ0djY1E5LTY0aXI4WjZn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2075
    },
    {
      "date": "Aug 19",
      "text": "Israel pounds Gaza, with mediators stating these strikes undermine efforts to end the conflict.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxPUGViZ2w0cXVmUjBqbEFKeEFsdUY1YWNiWlBobmpkejVKWng5N3lINFFZOGdNQ2JzaV90bXBFQVpLaWVDRXZOMmQtOXA0d09XNEZmdExMbFFPZGNsaTc3QUVKQktwOU5DNnliZ0dDdVFNaGdsUVNyOWdHRkh1VFBjQkNfUklTZTRZMzhDb05xaHZUNGdURlZxSUJBZ3RCVHZtbThfaFRObk1SM0VYX3ZZS09jelpvOGMzSVktZDNocEpKOVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2075
    },
    {
      "date": "Aug 19",
      "text": "Bennett suggests Israel should strike Iran to retaliate for Hezbollah attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxOVm5RWHRhUm1XZV9BTno5Ym9IUnJRQ1k2R0M3RW9sb0xRYlhzU1JfaW1RRzlWRUYxdFQ2TmE2X2o5M1R2WDNhNVBJWXVvdDF1cTVyZFVZTWdmdTZwSWluZ1JRR0x1MWtMOEFETFpmSzVJdEw5UDllNXVwZFV3SkUwd0dRa0hxYTB0LS1aNUJFNjIwWTNsWEMySXhZZy1zMUtz0gGmAUFVX3lxTE01TTIwbzBrenNMcmp6eV9ZN1BoY1A5Q2Y4VkNTVG4yeWhPSlFMU01uWTZoLURQRUI4REpVaHBkZXgtWmNYRHFfOFdXVlpNV1pxZExRNmFyczJvbnM5VEJGUkdTN2gyYzk2MGRoakVrOHlMVHFmc0taRlV5S3lZWktwRkJhUlRKS19HUU01ckgyOHJacktLc1VQdGs4MlpYQkZMbGpyOGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2075
    },
    {
      "date": "Aug 19",
      "text": "U.S. is conducting a stealth operation to transport oil through Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMia0FVX3lxTFB6cnBGdDhxTW9hTE5vaXdadmx4NVFFb1lsc2ZRRWlGZTd3MnVJamt1Q0VpSzBHblBIMHlqTVhUN2pvaGc2RVBiRlJHOTJwTnpCT0h0bUwzREgwb3h6VTNHc3lMaFpzbmt1di04?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 2075
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
      "perspective": "US Administration",
      "headline": "Economic Pressure on Iran Intensifies Amidst Stalled Talks",
      "summary": "The US is implementing a 'crushing economic operation' against Iran, threatening its trade partners, while signaling a willingness to reopen talks 'at some point'. The Pentagon is also considering a reduced military presence in the Gulf post-conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    },
    {
      "perspective": "Iran",
      "headline": "Iran Dismisses US Economic Warfare, Demands Conditions for Hormuz Reopening",
      "summary": "Iran dismisses Trump’s 'economic D-Day' as a distraction and asserts that the Hormuz Strait will remain closed until the U.S. meets interim deal conditions. Tehran also claims the war will be over 'very soon'.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    },
    {
      "perspective": "Israel",
      "headline": "Israel Continues Gaza Strikes, Considers Retaliation Against Iran",
      "summary": "Israel continues to pound Gaza, actions which mediators say undermine peace efforts. A former Israeli official suggests striking Iran in retaliation for Hezbollah attacks.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Affirms Force as Sole Means to Compel Israeli Withdrawal",
      "summary": "Hezbollah's Nawaf Moussawi states that only force can compel Israel to leave Lebanon, indicating a continued stance of resistance.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    }
  ]
});

export default LATEST_SNAPSHOT;
