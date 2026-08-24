export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2240,
  "lastUpdated": "2026-08-24",
  "lastSyncedAt": "2026-08-24T23:50:36.581Z",
  "warDay": 178,
  "summary": "The US has announced new sanctions against Iran, prompting strong defiance from Tehran, while regional tensions persist with Israeli strikes in Syria and ongoing Hezbollah activity despite a fragile ceasefire.",
  "lastNarrativeUpdate": "2026-08-24",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 30,
    "summary": "A ceasefire appears to be in effect but is being exploited by Hezbollah for arms smuggling, leading to continued force in the security zone."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 60,
    "tradeImpact": 44,
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
      "date": "Aug 23",
      "text": "US announces new sanctions against Iran, with Bessent promising an 'economic D-Day' and asking allies to join.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPeHFWSVQxMEZ1OUctZkFoeXpZT0FfajFEeG5xVjBfVE9majl4dUYzUFRuVjYxWmRNZlUwanBvTHFDeTRtc3RkUnhiSnhNa1lpbzRaXzZMWG1PRElxZjlZclVPUEpfQWN5YjE3Q09aNHJkWm5BblRYSkE3eWdQR3M5MnVuVzhYcHdRTzlqdFJZRDJWNDd0S1JQdXIySVFlMjZYTEgzVmFJVDU1ejZ0UGhzcS1WU2RLV0JhNC1R0gHAAUFVX3lxTE9pYi1jaGFBc1VzOF9xRnlMQnpna01fWEpnNDRDY2ZfSWNMSHVZM0ZtUG9JZEQ1VEE1YURqUXNVVTJGRERzWElLZkFIOExJbzJaVm5Gc211aGtVZE83STFxeVZpUlFJQ0EwcUNERVUwcmtRSE9mWWx3eVNzcGJteHdUcGNuU2RpSS04ZjZXQjN1YU9rYU5XUFFKWTdqcUc0QnNiYXotaUdOZ1RabkdlOFJIYzJaTllRcUViRjBfLUR6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2240
    },
    {
      "date": "Aug 22",
      "text": "Iran's military leader vows Tehran 'will not submit' to US economic squeeze, calling sanctions a 'declaration of war'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9pMk05V3loTHpKTHJyOFBSd2RWS0JKM3djNnZpdzFZWVN5R0loZm9kTjRleFZKSU1WMEtyOTF6Z1ZZV0JFdmhPNEFGR2J5WXo1V3lOeVlWd0E1VURWbkZLVjU4SzZkaWxDWXBkZ19n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2240
    },
    {
      "date": "Aug 22",
      "text": "Iran warns of a harsh response to anticipated US sanctions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxNY2JoQ0VHWjRHSW9xVVVFQ0J4eUN0RC1pRFdSU0hUajg2dDU0SU9vMDcwd3g4TVFmeWF4VDNTLUlyUld3Z19KU092SjlmdDVfYi1fNXdsLWx5TFhxaloyZEk4QnpJalNtZzhESWtGeHlzcDNwbnJfcUNUM0hNOTVlejBYNXA2Q05XNEZRNGVYVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Chicago Tribune",
      "latestSinceUpdate": 2240
    },
    {
      "date": "Aug 22",
      "text": "Israel strikes southern Syria; Damascus condemns attack.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxNdUlteHpodFpvY0RlTjBQVWdHWmFhTTAtU0VzVlRuY3hYRTA3NEFBSHcwN3pIR1ROYnBWVmFxWDVPTmVRcXZSaUM0YURHZHBmUDg0ekNFTDJ3NTd0S2NiR3loeDlXTlUzNzI1TjlKai1uNzh5TWRPeHJzd1UzNmM4TGRYLW1ET3ZnQ3hmeWNTNWF5ZVVReUtqTGFLdEtqVXZJWEw4RXk2TjE4YkFO?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2240
    },
    {
      "date": "Aug 22",
      "text": "Reports indicate oil is pouring through Hormuz, but trackers cannot find it, while TotalEnergies moves heavily discounted oil.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxNMlpTanlXRFd4X0JwM2o1eG05R0JFQTcwVG5CZHBlMzBLU0JCcWtsaFJLUnl0ZzRhVW9BZkNnN1ppQ25rVmZzV3pZYS1mSFRybThxcDlWcnRnRW9nUjNPT2VWcWh3X0VCUGdFWkNwdFU2eUFqZTBELUdKbWZYU2NFWkQzRDZyRXd5M0k0SG1LM1lmNHF5VnctdUhfdHBsY3ZRT3J0UWVfdzBLZHdsa3VSdmRQN3ZKZWxjMlI1OUVQZGJGQ29USU9Da1pPRk4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2240
    },
    {
      "date": "Aug 22",
      "text": "Hezbollah is reportedly exploiting a ceasefire to increase arms smuggling from Syria, with Israel stating Hezbollah continues to use force.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxNQ21mekFoVDJkaEt3TFhnRFY2VkU4S3Rjc3N5UXFNVDVVWGhKSWEtRjhtRS1CekRjVkRsSUZhZk0yOE1PU1AxdXNjWE5UNjIwWnlPVFdleWFOSVNvNXZEbThGN1I4d2JKYTh4WWw2T2tTcHJ4RlJ6QjRvbl85bDc0Y1BtZ05IM2hOelIzQkVMYW1MY0dseFRNZWdfS0MwazcwaFFaX1lzVFM4YzNtZUM1eVd1VFQxZUhLenhMendnaHRKVGs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2240
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
      "perspective": "Iran",
      "headline": "US Sanctions: A Declaration of War",
      "summary": "Iran views US sanctions as an act of war against all nations, indicating a strong stance against economic pressure. Despite this, Iran has granted passage to Iraqi oil tankers through the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 2160
    },
    {
      "perspective": "United States",
      "headline": "Hormuz as 'American Territory', Economic Pressure on Iran",
      "summary": "President Trump asserts the Strait of Hormuz as 'American territory' and threatens Iran's trade partners, signaling a shift towards economic pressure. The US military continues to facilitate oil transit through the strait.",
      "tone": "defiant",
      "latestSinceUpdate": 2160
    },
    {
      "perspective": "Israel",
      "headline": "Retaliation Against Iran for Hezbollah",
      "summary": "Former Prime Minister Bennett advocates for Israeli strikes on Iran in response to Hezbollah attacks. This perspective suggests a direct link between Hezbollah's actions and Iran, calling for escalated military response.",
      "tone": "strained",
      "latestSinceUpdate": 2160
    },
    {
      "perspective": "Hezbollah/Lebanon",
      "headline": "Force Only Way to Compel Israeli Withdrawal",
      "summary": "Hezbollah's Nawaf Moussawi states that only force can compel Israel to leave Lebanon, indicating a continued commitment to military confrontation. Efforts to tame Hezbollah within Lebanon are reportedly stalling amid the Israel War.",
      "tone": "defiant",
      "latestSinceUpdate": 2160
    }
  ]
});

export default LATEST_SNAPSHOT;
