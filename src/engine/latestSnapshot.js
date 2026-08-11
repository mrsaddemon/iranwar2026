export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1739,
  "lastUpdated": "2026-08-11",
  "lastSyncedAt": "2026-08-11T16:30:00.000Z",
  "warDay": 165,
  "summary": "Diplomatic deadlock persists between the U.S. and Iran over war reparations and the reopening of the Strait of Hormuz, while regional military actions and peace talks continue.",
  "lastNarrativeUpdate": "2026-08-11",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 7,
    "summary": "No active ceasefire is in effect, despite reports of potential peace arrangements."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
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
    "nuclearIndex": 60,
    "escalationLevel": 75,
    "oilDisruption": 85,
    "tradeImpact": 75,
    "sanctionsPressure": 62,
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
      "date": "Aug 10",
      "text": "Trump states he would require compensation from Iran as a condition for talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5xcnRIaENDM0VobHdzWGIteUx1Y1pwYU42VUlVdzhMUDRvMGV3MWZ2cEppX0NnV29nSE5ZWTFWS3dGd0ZNYjByWldRM3VERU10ZFBaUnY5X2VmTDJ6ekgxNUV4RUJ2U3ZYemZhS0NB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1736
    },
    {
      "date": "Aug 10",
      "text": "Iran demands U.S. pay for war damage before agreeing to reopen the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxOMXVhMHlqUEtqTDctWTJpYWFoamFyZHVHWE4xUWtkMnFVN0pmYTVtdXBuSXZVUmtFMEJ1UHgtRjlSak5sUnNpM1pDZUFqc1lUYV9FYS15WGN5VDg1RzYyZ19wOVNZSUx1bENuaDJ5QWsybVBTZzZsa2RScDRmd05BWDJqcTdTRGN0X0dVU0dPRm9sOEQyZHdERmlWNk8xSmIzdndQVEl1Sk1yeXRDR21FQkJn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1738
    },
    {
      "date": "Aug 10",
      "text": "U.S. military fires at a Panama-flagged ship near Iran.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1739
    },
    {
      "date": "Aug 10",
      "text": "U.S. assesses Iran’s priority has shifted from nuclear weapons to the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxQaEIwYko4Q0VxaDhpZVpVT0V0OTRhTmNuVDBtS29MNjdXVTRFQ1gxVW9kVlZMdG90dG03dHJxcU9PQzV2SlIxY0diVGUwVVlCRUc2NXgyaTVNSDI1dWl5dkJlQ3d0aUc4b0hKRnVyUEJXRmlkQWRzMjVkNmxqUVROTXptclRsNDJHdUdXa25Ib0NwejI3ekw4d0JVQnFUel9OTFVqT2xYT1BmTER2YUtFM2xCbDRzbWhVU0ZKZGQ4WVg5NEI3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "nbcnews.com",
      "latestSinceUpdate": 1738
    },
    {
      "date": "Aug 10",
      "text": "Israel's 'pilot zones' are reported to challenge Lebanese sovereignty.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxORm0yTjAxVktJdEVpbTZBSjNfOUFpYXF2YUlLTHM1b01kbUowSDk1cGZGcjBoNjBfbVJSM0NfLV90LTJzeXlGMFhtUjlpTTZFV2ZSY1dpUW9EUE9jd1U3Vk83alVBbDZwWVRDa3VlUTNiU251LWpRQlNUWVgwdmQzLTV6SThGY3VlX2piZzBSXzVrdGZGUnhv?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Middle East Eye",
      "latestSinceUpdate": 1738
    },
    {
      "date": "Aug 10",
      "text": "Pakistan states the U.S. and Iran are close to a 'peace arrangement or a deal'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxQdFJmRllSZWd4dDRyLWZ3ZWU2NWVqRk9BekR5c0xkZG14Q3BKQmt1SnF4Q2VOX19IaWU1dUFTYXU4WTdENnBPWEk2cG1QU05WZHNnWWFPUWs4VFZadURZeTVnZG9kcEpTQ0lWVklCcUdfcUFoY0tFTjBrYXkwNUJXYTV3T1QwYlF0cGNUWkNXWnBnVmY5TXpOc1ZOMV9Udw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1739
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
      "perspective": "US/Trump Administration",
      "headline": "Trump Demands Compensation, Shifts to Economic Pressure",
      "summary": "The US administration, led by Trump, is demanding compensation from Iran for past conflicts and is signaling a shift towards economic pressure. Negotiations with Tehran are described as only 'semi-negotiating' as military options appear limited.",
      "tone": "defiant",
      "latestSinceUpdate": 1726
    },
    {
      "perspective": "Iran",
      "headline": "Iran Conditions Hormuz Reopening on US Concessions",
      "summary": "Iran is demanding concessions from the US and states that the Strait of Hormuz will remain closed until the US 'corrects' its behavior. Tehran is also reportedly nearing a separate deal with Oman regarding the strait.",
      "tone": "defiant",
      "latestSinceUpdate": 1726
    },
    {
      "perspective": "Israel",
      "headline": "Israel Prepares for Unilateral Strikes Amidst Regional Tensions",
      "summary": "Israel is reportedly preparing for possible unilateral strikes on Iran and has warned that Tehran's attacks are coming close. The nation also defended its Beirut strikes as precise while engaging in talks with Lebanon.",
      "tone": "strained",
      "latestSinceUpdate": 1726
    }
  ]
});

export default LATEST_SNAPSHOT;
