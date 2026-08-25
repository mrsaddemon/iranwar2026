export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2247,
  "lastUpdated": "2026-08-25",
  "lastSyncedAt": "2026-08-25T05:50:48.147Z",
  "warDay": 179,
  "summary": "The US has announced new sweeping sanctions against Iran, prompting warnings of a harsh response from Tehran, while oil continues to move through the Strait of Hormuz amid regional tensions and US military re-prioritizations.",
  "lastNarrativeUpdate": "2026-08-25",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 30,
    "summary": "No active ceasefire or de-escalation efforts are reported; tensions remain high with new sanctions and military actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 70,
    "oilDisruption": 60,
    "tradeImpact": 56,
    "sanctionsPressure": 61,
    "globalPressure": 74,
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
      "date": "Aug 23",
      "text": "US announces sweeping new set of sanctions against Iran, with Bessent promising an 'economic D-Day'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxOdWlpbWFSejVVVWVhNFBVQ3M0RkpXN1FzQWpzVnhMWFRWUmlPOTNYRVlBMW41RWw3VnhIUGVvZ21pNlBTSERnYnk4UmpFc1N3ejFjN0tJUTVCc0pDUW1JRkhkbTNycWcxbGhVUUxnQkRLb2Y3Y0tVY1pFRk9zYTAxYXptdGVoUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 2247
    },
    {
      "date": "Aug 23",
      "text": "Iran warns of a harsh response to anticipated US sanctions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxNY2JoQ0VHWjRHSW9xVVVFQ0J4eUN0RC1pRFdSU0hUajg2dDU0SU9vMDcwd3g4TVFmeWF4VDNTLUlyUld3Z19KU092SjlmdDVfYi1fNXdsLWx5TFhxaloyZEk4QnpJalNtZzhESWtGeHlzcDNwbnJfcUNUM0hNOTVlejBYNXA2Q05XNEZRNGVYVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Chicago Tribune",
      "latestSinceUpdate": 2247
    },
    {
      "date": "Aug 23",
      "text": "Israel strikes southern Syria; Damascus condemns the attack.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxNdUlteHpodFpvY0RlTjBQVWdHWmFhTTAtU0VzVlRuY3hYRTA3NEFBSHcwN3pIR1ROYnBWVmFxWDVPTmVRcXZSaUM0YURHZHBmUDg0ekNFTDJ3NTd0S2NiR3loeDlXTlUzNzI1TjlKai1uNzh5TWRPeHJzd1UzNmM4TGRYLW1ET3ZnQ3hmeWNTNWF5ZVVReUtqTGFLdEtqVXZJWEw4RXk2TjE4YkFO?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2247
    },
    {
      "date": "Aug 23",
      "text": "TotalEnergies reports profitably moving heavily discounted oil through the Strait of Hormuz, despite US claims that trackers can't find it.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxNMlpTanlXRFd4X0JwM2o1eG05R0JFQTcwVG5CZHBlMzBLU0JCcWtsaFJLUnl0ZzRhVW9BZkNnN1ppQ25rVmZzV3pZYS1mSFRybThxcDlWcnRnRW9nUjNPT2VWcWh3X0VCUGdFWkNwdFU2eUFqZTBELUdKbWZYU2NFWkQzRDZyRXd5M0k0SG1LM1lmNHF5VnctdUhfdHBsY3ZRT3J0UWVfdzBLZHdsa3VSdmRQN3ZKZWxjMlI1OUVQZGJGQ29USU9Da1pPRk4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2247
    },
    {
      "date": "Aug 23",
      "text": "Hezbollah states new US sanctions 'will not deter' its fight against Israel, as Iran is reported to be smuggling weapons to Hezbollah through Syria.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxNZV9UZnlGYlZiR2hqd1A5SDdEcDN1U2RHdWhvODlyQTZtWk43V0l3RE1HVnhxMFlaTF9ZVEtwVm1zdEEwWmFIX2JTbENkZDRxWWoyUTNCdHpVYjdLdGx1MkdUQjZNN1ppNlVnTUhRTENpRk41S0d6SkwzZHU0ZGZ3eVppVV9LbGE1U2sxdXItSWZuSzhpLXFuaEZ5bHZXbEXSAaQBQVVfeXFMTnlQeVVQZDJKVjRoejZVVW1uVjU5UXRhdzVfR1lxVS1rUmZOMWVvd2hLN0dmNzBCQ0EzeXhmTm5GYW0zcGotNXo5OXVTQ3ZlZkk4NzN4c3FLeDRrTV95Z19xX0ZIbXdpc3RUelpsT3JQTUdZcVNxRmFyNm9pWXNmLWROQ2YwRHhjN0FYY1lyMEZvcUhiWkRkUmthaXBUWWlyVUdpeDU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2247
    },
    {
      "date": "Aug 23",
      "text": "US Marines cancel a drill with South Korea and withdraw from military exercises, citing Iran War demands.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2247
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
