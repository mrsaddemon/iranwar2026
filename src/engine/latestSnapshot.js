export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 777,
  "lastUpdated": "2026-05-25",
  "lastSyncedAt": "2026-05-25T19:06:08.740Z",
  "warDay": 87,
  "summary": "Negotiations for a US-Iran peace deal are reportedly nearing completion amidst continued military actions by Israel against Hezbollah in Lebanon and US preparations for potential strikes against Iran.",
  "lastNarrativeUpdate": "2026-05-25",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.2,
    "durationDays": 14,
    "summary": "Despite ongoing negotiations for a peace deal, no formal ceasefire or de-escalation is currently active between the primary belligerents."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
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
    "nuclearIndex": 20,
    "escalationLevel": 75,
    "oilDisruption": 55,
    "tradeImpact": 53,
    "sanctionsPressure": 62,
    "globalPressure": 74,
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
      "date": "May 25",
      "text": "Reports emerge on the lives behind 13 US troop deaths tied to the Iran war, with suggestions of preventable circumstances.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9uWldZWGRwTXNGZzc2LW1KM2VlU2o4OFlCYVdCX25vQUxzNUJuRXJTbEoyenVpRlZOTGZxLS0yMTYxSi1zSk1iSXkwOW90THlJNWtUcXo2OXl6QWVKaVFxX3ZpZWRRRDQzbGJNVHVB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "the-independent.com",
      "latestSinceUpdate": 777
    },
    {
      "date": "May 25",
      "text": "US officials indicate a US-Iran peace deal is nearer but could take days to finalize, while Iran states a deal is not imminent.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBkWjgzM3RoM2NUVE5tdF9xeVFnMVNnWl9lQXFVZThFcUlQZGdUQ2RYNUhVWXhKT3kyTnZ6Ui13TzlQbmRwV2txa3pxWVhYRlV2eFU2LXZMdGZXdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 777
    },
    {
      "date": "May 25",
      "text": "Israel strikes south Lebanon, with Hezbollah reaffirming Iran's continued support for the group.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQUndkalFsMXhNczBYVDJNMlpkT3dXX3ltcEU4cmVselkyUVFwQ2Q4QWsyd3B3cGlSU0NVcTVQLTBzdjZFYmF6Zm1pR2k0aDJ4VGRpbmFzNm1QZm1DLVNnLXdLR2YwTW1DNWxrcm5YSGd2REY0eEtCeUFJeElfS0NXWHhxaXF1T09zOXFSQlR6VDhsNTBDTmJmc01iLVctb0pGc3N5OXdUYU9JRTYzSHE5dzlzRl9sdk3SAbwBQVVfeXFMUC1LLWlNRDF3RVV3QnVoamNaenVYUFQ0V21kWnhTajhkRFFOZXdfZkhqYWNqRTQyb2VjNExLYm5hQ2JjYUNQc1JCb2UxMEV0d3htdHp0YWRUQUpGZEc2YU04Q1ZHT3BZVGdoSzVyek1keGEzWDlya1l2VW5qZUx6T1hOZGpsSXl4SlNNVUFNY1F2dS11ZXprZ2hEQmtwMXltOWJoZTduVkxHLUhPU0N5X3h4Nm5FMFJyeUsxNTc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Firstpost",
      "latestSinceUpdate": 777
    },
    {
      "date": "May 25",
      "text": "Israel launches an air strike on Beirut, coinciding with a US statement confirming an attack on an Iranian-flagged ship.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 777
    },
    {
      "date": "May 25",
      "text": "A soldier is killed and another seriously wounded in south Lebanon by a Hezbollah drone attack.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxQRVVDc05SZ1VYcjMxb3BjQzdWdVdTTEk2c3ctSm5nb1hJNnNHVlFKMFp1RjNNd2swTU93azBWQnZENENEX2RxYXljeGdQMkhLM1g4NnZzVzlJRmtlWGExSUxNSU5xRW8zUXJkZXN6WlhTRjl3cEZvNUNhOUVKY0dWX3ZTQ0dCaHNZQU1NZEhCMG4xM1dSS3dZLTVWSkUtanJKWEhzc2hwbW1fX3fSAbABQVVfeXFMTi1Ma09FTUlxUUs3RDYwVmlFRWItM3hKQzdxS3lIdUU1OUNRRkxoeHRVeGxWeUVLS2lTLUhULWZrREt0Z1JDUWFrVnFDZ3BNQ2VWNWN2SjFUcWRhQV9nSW11LTJINE5heHRWbHZCd2Z0UlFLdU1EeE4xRHFuOHFiam1Jbkdlcm84VjZFVEQweDFvRzFTbFFLWk1DV2lVYjB2OVpEX0NPcGNoaEtmbko0NEI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 777
    },
    {
      "date": "May 25",
      "text": "The U.S. prepares for new military strikes against Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxOd0YydWZGVkNndld4N2RMN3pCNTB6U0lud2o1SlBBVDd6UjNPeUlYb2taRTl0UVBBY1ZmcEM2cUdPRVRoOFY2YnJZdGxYNHkzb0JCd0dTVWZqVVh5Z3ZnT2FvZk9maG4wbkFkdWQ4dEliMlBIemJsSlVQaTNkUXM5YdIBhgFBVV95cUxPbmoxbmJHMzhBdmdIYnVOaVNUME9GbktiTDdwazVqNVViUUtvYzRfUHVyWjNHMTVaNkxEYUpPcFNLcDF0Q25hSlcwaG9EYkFzN0c1eWZoLWtCMWFFYnNEZm5XRTFQYU9CR3hCNVVWYkE5ellhRHhCcGxmbVRzV3FiQk43UDdKQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 777
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
      "headline": "Trump touts Iran breakthrough, but also weighs new strikes.",
      "summary": "The Trump administration indicates significant progress on an agreement with Iran, suggesting the Strait of Hormuz will open. However, reports also suggest the US is weighing new strikes for a 'decisive' victory.",
      "tone": "strained",
      "latestSinceUpdate": 772
    },
    {
      "perspective": "Iran",
      "headline": "Iran accuses US of ceasefire violation amidst peace talks.",
      "summary": "Tehran claims the US violated a ceasefire and targeted ships, even as negotiators have agreed to broad principles of a peace deal. Iran maintains its substantial missile capabilities.",
      "tone": "defiant",
      "latestSinceUpdate": 772
    },
    {
      "perspective": "Israel/Lebanon",
      "headline": "Israel strikes Lebanon after Hezbollah drone attack, issues evacuations.",
      "summary": "Following a Hezbollah drone attack that killed a soldier, Israel conducted strikes in southern Lebanon and issued evacuation orders. The fate of the conflict is seen as resting with outside powers.",
      "tone": "anxious",
      "latestSinceUpdate": 772
    },
    {
      "perspective": "Global Markets",
      "headline": "Oil prices fall on signs of US-Iran deal progress.",
      "summary": "Global oil prices have fallen significantly, reacting positively to news of constructive talks between the US and Iran. This indicates market optimism for a potential resolution and reduced supply disruption risks.",
      "tone": "neutral",
      "latestSinceUpdate": 772
    }
  ]
});

export default LATEST_SNAPSHOT;
