export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1672,
  "lastUpdated": "2026-08-08",
  "lastSyncedAt": "2026-08-08T22:49:44.843Z",
  "warDay": 162,
  "summary": "Tensions in the Middle East remain high with Iranian-backed proxies targeting Saudi Arabia, US launching strikes in response to soldier deaths, and Iran making new demands regarding the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-08-08",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 60,
    "summary": "No active ceasefire or de-escalation efforts are reported amidst ongoing regional conflicts and heightened tensions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 64,
    "globalPressure": 82,
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
      "date": "Aug 07",
      "text": "Iranian-backed proxies targeted Saudi Arabia, widening the conflict in the Middle East.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE11OFNkTG1PNmRQOXdaM3ZBRVBzR1FQWnE3WV82SHBaZVI0Q3B6eGxjcUoweEVmRnRTVHloTVFiajNCU3htZU9tckhNeTVNU2VwVkFveGhpZ2NBV2lQQ2dXcF91aTFjal82NnAxUVB3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1672
    },
    {
      "date": "Aug 07",
      "text": "UAE, Bahrain, and Kuwait condemned Houthi attacks on Saudi Arabia.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxNVUhhNkk2U0E1aGxlSGh2emxEVnZnZWlZRnRzLVJvY29PQXp3S1VKX3ZsRnd3bWlQdmZfZmFvMFFZaDlEX2xWVG5IWmNDdTRZVXZONTd0MFFEYW1ZLXBHRkJ4dVRRUFF6V2VSdm5TZmpqWkIzdHl4bTlkWFdwTlpqcVB3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 1672
    },
    {
      "date": "Aug 06",
      "text": "Trump threatened ‘heavy attacks’ on Pickaxe Mountain and warned of an unprecedented ‘massive attack’ on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxORlZ5bEhMQlpYV2JLZTRpUkJTblJYa0VGeFhhblVfUkp1TDIzMFl6ZnlIZ2gxbDZJUXBpQmdZXzc0RjQtRmU1cjhXblRCN3lwbG5YNThjR0xLMnRJTklldUNYYzlrLXRjeUJDM0dPTjFBcVZQdUQyU1VZbmtYQ1ZfSld3cUppa1ZaVk4yWVNCYnFpbEJZVkxFaHdjcDVoMWplN2tRV3pTaWJodV9zZGloY0JRYjVTSXpMbUpV0gHAAUFVX3lxTE5Sb3VwbFB3cUlwMkoxU3VEZjBEUjBLZkxyVDFpNUp1WG5PektuUGw4Z1hTWEUzbE14dEd5X3RWMmxiRG4weVJoWHY2emd1N0NFSFY4QzlwZmQ4Q0s3d2NudG9CNTZjRUZxSDMxV0QwaEkxOF9qaTZ2cGJtOFRZVHJSYTR5TTc5b3NWMkJWbThFRnNJdUxJNExpa1M4NlFLN2dWVzJKX25RV2U0a0kwam15Wm8xZU1lTHJpUHVfNkZ1OA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1672
    },
    {
      "date": "Recent",
      "text": "US launched strikes after the killing of soldiers in Jordan.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxOeExZQjNOMmxmMDk3OW92dGEzamZjRGZBZDJZR09Ha3hXaU0yX09LUFRybFRqdkhCWlA4XzFXMUZWb0xCS2FlV3prZWo3RHJCVVVYbmI4NXNLWU1jX2RxRld5THF3TldPTkVVdEJRXzZPQWthNkxNdllHeXpzZmxsUnFkZXpXZVlXLWl1SXp6Z2xXOUFmY2VJTG9mQlFYMExLU0tNSlFiUEFTclM2M1JZd29uQWEwNklQSEHSAb8BQVVfeXFMTllkczI1VmJNZG1JbUV1MnNEeTRZWFhycHFRSjh4RU5WcW1PU2hTU0FiS3JxTGpwUVc3VWNWaU1Wd2poNVFhS19TVWo3N0V3VGx0UFJhZHpfVDJGdGtBSEYtMHFIel9NQ0FyMGp3X1lrTkNDTlluZWFha0R0TWUtdDZnWDBaNm1RUGQxMmx0Z3VFU3J1azlLTEhUS0RjWW5NaUNTNDYxZ3dDRXRVMWxZSjR6UUVMdmlSSEhUV2RqV00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1672
    },
    {
      "date": "Recent",
      "text": "Iran made new dramatic demands around the Strait of Hormuz and demanded concessions from the US.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxPbEtKbFh3WVZpeE1xWDFaT3l0NE5rYm16Q0hDcW9QZGltMnlsVTQ4NDRESWRILWJlRXZmenhVOTdGTUw3dmhjaHNHazhhTW5TZzVWUGdNOWNxckppZlFXOGllMjJ3RjQ2ZG1YNXNtOWNnWEExS1V2b1ZwdkZhZU5qU0RDbkNVRzZjYjJ0Y0ExcEoyTzZlMzZQQTZIME1QcWpkUEdHMnYxamI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "politico.com",
      "latestSinceUpdate": 1672
    },
    {
      "date": "Recent",
      "text": "The UAE reported that a ship was targeted amidst Middle East news.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxQOHdLUWp2NDlHVUNRNUxzazJIX3lzdzlVR0tMZEJacTVUa0N1bGZocG9jV01IT2MzNU5fdmJsUTNPQV9RN0tRT3FUclpuMWFUb0RpVmpNekVSZDBlcUxsVXplQzZjYW8xeGVXVEhKTnBZOGdkOF9mNkpBUWhpWUxDV2RBQUlSOFlrVGNFY25xckY1a19XTW9zdHhqXzRMNFZsOFZuTUJn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1672
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
      "perspective": "US/Israel",
      "headline": "US and Israel Intensify Strikes on Iran, Target Hezbollah",
      "summary": "The US is planning and executing fresh, heavy strikes on Iran, often in coordination with Israel, while also targeting Hezbollah infrastructure. President Trump is reportedly pressuring Israel regarding a Hamas disarmament deal amidst the widening conflict.",
      "tone": "strained",
      "latestSinceUpdate": 1545
    },
    {
      "perspective": "Iran",
      "headline": "Iran Vows Retaliation, Threatens Hormuz Passage Amid US Strikes",
      "summary": "Iran has vowed to make the US 'pay the price' for civilian casualties and has responded to US strikes by attacking tankers in the Strait of Hormuz, declaring passage 'not feasible.' Iranian leadership urges citizens to stand firm against the enemy as strikes intensify.",
      "tone": "defiant",
      "latestSinceUpdate": 1545
    },
    {
      "perspective": "Regional Impact",
      "headline": "Hezbollah Adapts Tactics as Regional Conflict Widens",
      "summary": "Hezbollah is increasingly employing FPV drones, requiring Israeli overmatch, while the IDF continues to destroy its tunnel networks in South Lebanon. Iraq has denied prior knowledge of US-Saudi attacks, highlighting the complex regional dynamics of the escalating conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 1545
    }
  ]
});

export default LATEST_SNAPSHOT;
