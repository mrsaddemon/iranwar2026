export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1275,
  "lastUpdated": "2026-07-13",
  "lastSyncedAt": "2026-07-13T01:07:52.430Z",
  "warDay": 136,
  "summary": "The United States and Iran are engaged in direct military strikes following a ship attack in the Strait of Hormuz, while Israel also conducted strikes in Iran and maintains a presence in Lebanon amidst a ceasefire.",
  "lastNarrativeUpdate": "2026-07-13",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A ceasefire is active in Lebanon, allowing some tourism, but the IDF remains present and Hezbollah is regrouping, indicating its fragility."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
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
      "date": "Jul 11",
      "text": "US launches new strikes across Iran after ship attack in Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBYMVlvZWhZemtQSGdfTzNxam9JME9jc3RlNy1rUDNIT1lzM0l6ZHlFWGQyU3FpV2JNVXlDRUlMbEVhWi13bHZTSHdfS0VvWkhmTksyY041b19tLUNHajB6RkVHaloxdnBEX0dheGln?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1275
    },
    {
      "date": "Jul 11",
      "text": "Iran targets Gulf States and claims the Strait of Hormuz is closed following intense U.S. strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxQZkg3Y2hLME44SkItWjB5OXdQTlB4NFNhSnZObFBQbzMtV3ZxZnNHZmk1WHJ0RmV0RnY5R2Z4VTJLc1JxYTNjeWdfdWFrNkYyMnNzX1lORzFHTlRwQjduWGMyaWlzSGJndDgzU3h0Y2NPQjU0OXBwNHlpMElvY05XS2luQkhVdmh0NUVsaEpNS2ZDdWNHSUZ3Z3VTMzZJUjBuNmgySkRSei1MdC1xUGpTVmFPbUtsNWNHdWJUSTlrUWJOZ0Y0Y1plcjNINkE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1275
    },
    {
      "date": "Jul 11",
      "text": "US military states the Strait of Hormuz remains open, despite Iran's claims.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxPdTRGX25BSEZSVU82ZTc0UWFILWRQZlctMWo1TjlzZ3lFV2c5SUd2Tl9yQjlXd3F6Q3BMdXdfZDZtYml3OC0yamRQZW9Zb1M5bmgtci1wazlqWUo3cmpoSUhhLTd2aEltYlNxME9nal9YMjZsdE5veEg0UGZTcFZvRHFjaHJtelhjUzZrM3FtdUxLY25hbk5QSmQ2dEozYkFmY25tTTNCaGVta2c0Ymc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 1275
    },
    {
      "date": "Jul 11",
      "text": "Israel conducts strikes in Iran, according to the IDF.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1274
    },
    {
      "date": "Jul 11",
      "text": "IDF prepares for a long stay in Lebanon as Hezbollah regroups under a ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE9fNnJZX1dsQXM1b01QbXByazJEZFdoRW1xbTl5S2NHV0I2ZDk2YV9nRU5uRjQycVNRTWVDNnZlZmhpeUMza2VWblBNeW93TTk4V09VS2dn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Ynetnews",
      "latestSinceUpdate": 1275
    },
    {
      "date": "Jul 11",
      "text": "Survivors claim generals ignored warnings before an Iranian attack that killed 6 U.S. troops.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi1gFBVV95cUxQRWt5dzlReFlGS2NnSUJWX0loQm8yZUwwWkZWcTNBdWhULXg5RThSSHVaLVJCbjhna0dpU3ptLUFFRjdCR095WkFkcEFsY0VoYjBEcGVIUEh0Vk93OE9kR29WTDd1dlJGVW9xblVGSVBNTTZBZHc0RWdvSHppa0FqMkR2cEpxRUlqa2ZYMmtsVjM4Yk1HM2hxdjhVS09kbkthTkFOblp5emN2eW1nV3Z0RFN5R09WOGhFR0dSM0dURllHbXdnVzZhLThPVkF3SVMyMEtPeGxB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1275
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "headline": "Holding Iran Accountable Amid Strait Tensions",
      "summary": "The United States is conducting strikes to hold Iranian forces accountable for attacks on shipping and to ensure freedom of navigation in the Strait of Hormuz. President Trump has agreed to talks but declared a previous ceasefire 'over'.",
      "tone": "defiant",
      "latestSinceUpdate": 1275
    },
    {
      "perspective": "Iranian",
      "headline": "Retaliation and Strait Closure Claims",
      "summary": "Iran claims to have closed the Strait of Hormuz and is targeting Gulf states in response to intense US and Israeli strikes. Iranian forces continue to engage in exchanges with US military.",
      "tone": "defiant",
      "latestSinceUpdate": 1275
    },
    {
      "perspective": "Israeli",
      "headline": "Strikes in Iran and Lebanon Presence",
      "summary": "Israel has conducted strikes in Iran and is preparing for a prolonged presence in Lebanon to counter Hezbollah, despite a local ceasefire. This comes as a Hezbollah lair was reportedly unearthed.",
      "tone": "strained",
      "latestSinceUpdate": 1275
    }
  ]
});

export default LATEST_SNAPSHOT;
