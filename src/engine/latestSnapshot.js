export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1666,
  "lastUpdated": "2026-08-08",
  "lastSyncedAt": "2026-08-08T19:37:08.294Z",
  "warDay": 162,
  "summary": "The Middle East conflict is intensifying with Iranian-backed proxy attacks on Saudi Arabia, direct US strikes in response to soldier killings, and escalating rhetoric from the US and Iran, while diplomatic efforts for Hezbollah disarmament are also noted.",
  "lastNarrativeUpdate": "2026-08-08",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 60,
    "summary": "No active ceasefire is in effect amidst ongoing conflict and escalating threats."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
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
    "nuclearIndex": 30,
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
      "text": "Iranian-backed proxies targeted Saudi Arabia, widening conflict in the Middle East.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE11OFNkTG1PNmRQOXdaM3ZBRVBzR1FQWnE3WV82SHBaZVI0Q3B6eGxjcUoweEVmRnRTVHloTVFiajNCU3htZU9tckhNeTVNU2VwVkFveGhpZ2NBV2lQQ2dXcF91aTFjal82NnAxUVB3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1666
    },
    {
      "date": "Aug 07",
      "text": "Trump’s top general, Dan Caine, is reportedly seeking an 'off-ramp' from the Iran war due to limited US military options.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxNeHJydUExaTBnUDVITW9LOE1mUjBJN1ppaVp4SFo2LXZTLVFOeWpsTmZKelJjZUJPTl9ua1JhaDJUZ0hwNUZPT0hUT2Ric3lzWE41TzI2aGFCUldzbnNCejV3NEVKc3NKeXU5eGJpdXFsTGtaRThuQzdRZUEtMTRsWQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1666
    },
    {
      "date": "Recent",
      "text": "US launched strikes after the killing of soldiers in Jordan.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxOeExZQjNOMmxmMDk3OW92dGEzamZjRGZBZDJZR09Ha3hXaU0yX09LUFRybFRqdkhCWlA4XzFXMUZWb0xCS2FlV3prZWo3RHJCVVVYbmI4NXNLWU1jX2RxRld5THF3TldPTkVVdEJRXzZPQWthNkxNdllHeXpzZmxsUnFkZXpXZVlXLWl1SXp6Z2xXOUFmY2VJTG9mQlFYMExLU0tNSlFiUEFTclM2M1JZd29uQWEwNklQSEHSAb8BQVVfeXFMTllkczI1VmJNZG1JbUV1MnNEeTRZWFhycHFRSjh4RU5WcW1PU2hTU0FiS3JxTGpwUVc3VWNWaU1Wd2poNVFhS19TVWo3N0V3VGx0UFJhZHpfVDJGdGtBSEYtMHFIel9NQ0FyMGp3X1lrTkNDTlluZWFha0R0TWUtdDZnWDBaNm1RUGQxMmx0Z3VFU3J1azlLTEhUS0RjWW5NaUNTNDYxZ3dDRXRVMWxZSjR6UUVMdmlSSEhUV2RqV00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1666
    },
    {
      "date": "Recent",
      "text": "Trump threatens 'heavy attacks' on Pickaxe Mountain and warns of an 'unprecedented massive attack' on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxORlZ5bEhMQlpYV2JLZTRpUkJTblJYa0VGeFhhblVfUkp1TDIzMFl6ZnlIZ2gxbDZJUXBpQmdZXzc0RjQtRmU1cjhXblRCN3lwbG5YNThjR0xLMnRJTklldUNYYzlrLXRjeUJDM0dPTjFBcVZQdUQyU1VZbmtYQ1ZfSld3cUppa1ZaVk4yWVNCYnFpbEJZVkxFaHdjcDVoMWplN2tRV3pTaWJodV9zZGloY0JRYjVTSXpMbUpV0gHAAUFVX3lxTE5Sb3VwbFB3cUlwMkoxU3VEZjBEUjBLZkxyVDFpNUp1WG5PektuUGw4Z1hTWEUzbE14dEd5X3RWMmxiRG4weVJoWHY2emd1N0NFSFY4QzlwZmQ4Q0s3d2NudG9CNTZjRUZxSDMxV0QwaEkxOF9qaTZ2cGJtOFRZVHJSYTR5TTc5b3NWMkJWbThFRnNJdUxJNExpa1M4NlFLN2dWVzJKX25RV2U0a0kwam15Wm8xZU1lTHJpUHVfNkZ1OA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1666
    },
    {
      "date": "Recent",
      "text": "Iran makes new Strait of Hormuz demands after a UAE ship was reportedly targeted by an airstrike.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxONHBEUUlsdUlIcC1vM0pPSm9IUk9fdnRseE15OXFhN3FRTHRqa0dEcmR4aXVjMmJMLVEyMzNsWDlnaFFLRkRKRkQyb24tTC1MNjBGMVcwa2cyeXczemdMY3AtX2x4TENBWmc4S0Nqbm5COEd6NmVhNEN4MjVPajdrd3UyQ0FsRXoxU0JTdm1BTTBCRjVzcmZ3WTJVNVZ1Y3JFV3owRzBGQXNIVXBiSUVKZ2FJZUpxeUdJZzNFaWhR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "apnews.com",
      "latestSinceUpdate": 1666
    },
    {
      "date": "Recent",
      "text": "Lebanon and Israel agreed on a shortlist of countries to verify Hezbollah disarmament, though the US and Israel vetoed France for the role.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi7wFBVV95cUxOcUphMzktVWJPb090LUxONXVSZWF3M3pKclNyQjJJenJVLS1WWnVFV1dBckpNTXhULUxYTlE2dXZkMWZoc21uMm1pSndXYi1ZMy1ybVU2eWx4c3l6Z3pPOUVsRG0xeVRsdGdQY1RHMWtreHJ5dTFyNFM1eWduQmZfZEJhazFTak5icnBxakhpTVZxd3hMSG1rSEQybjRtUkxLV0VNdkUtVnhfQndVVmFKeEZvNFNtYXFuMjlWT2x5OHl3amlYbUhNMU80NWptWl9XVmRjejAxajVEckdHUGk4bnBHOWNzUXlUTW5BQ1FFc9IB9AFBVV95cUxNNlVPQzJYbEtTcWlfejFaRjRKY00zY0RiT0lIUzhmbXhMVVBpNVFZdWJORVJ4QkEzRFRjQThXVmZfWWFISXZPZV9OSE1pczFDRTdSMlNXUVhucFBIaXVsalNKRkNpTUgyZUpNM2dvVEkzcWZqNE0waFd5dVpLUExGUC1FMGVwVm5XNkpwT081eXQ2Y05DZjV0UUFpYXVKMklpMHBaQmI5RU1tWHhnWUI5YkRlQkozWV9mU2E3XzV5dEQwb3BFWmU2S3lOcTJDVWo1UDhiVnRaeEhuVVZxbXBfazZJLURDNkFfSTBKV1ZweEtZTkJ3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "India Today",
      "latestSinceUpdate": 1666
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
