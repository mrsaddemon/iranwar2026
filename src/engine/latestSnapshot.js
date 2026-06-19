export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1007,
  "lastUpdated": "2026-06-19",
  "lastSyncedAt": "2026-06-19T20:41:36.302Z",
  "warDay": 112,
  "summary": "The US and Iran have released an official agreement, lifting the blockade of Iranian ports, while Israel and Hezbollah have agreed to a renewed ceasefire after intensified fighting delayed US-Iran talks.",
  "lastNarrativeUpdate": "2026-06-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 5,
    "summary": "Israel and Hezbollah have agreed to renew a ceasefire following recent clashes, though the situation remains delicate and has impacted broader US-Iran diplomatic efforts."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.4
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 40,
    "oilDisruption": 30,
    "tradeImpact": 21,
    "sanctionsPressure": 53,
    "globalPressure": 52,
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
      "date": "Jun 19",
      "text": "US releases official agreement with Iran, lifting the blockade of Iranian ports as part of the deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPVks0MkhBQW1EOGdhbjd5WlVwTWNuQWlyQ1h3WWF5dGZyN3Bfc0VQMi1rRHY3bFlRd1V5dDltWE50bndDakVTeGgzWlZwMDFWWEFnYUJRcjYtQWpiTHNVOVBJV3pWTlFMeEJzbHVTbXcxQm9nNHcxSFJZQ3FQakttRXJWUnpaZklhVENwUjZVaXlqUENfWVFvcDVENTExTEZveTBDZDRYVWk5T2VSTEpVRlRVdUlNZEpBc29n0gHAAUFVX3lxTE1NSm5IcWVqNmlDOWN1anAxMzlCSEF1d2JpcGQ4T1JRUmVqc2lrRnFOUURUaTNpWi14V2tJVHBQSDVDX0VXTEVvMGRuMl9uT1dGWjNvWE9nSWxVaGZZN2ZSWlZ3dFI3NjhyaGFKMllPRlp1dVowbEF4OFpTeUlFeWxFdHdHeHFoQ0dMSkdzMjR3N05WUFZQeGx3cnF3UXV5ZmpvOXNDZEJfbDdXSmVsOTdpWlpoZENEYVRRWnJmbnQ3TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1007
    },
    {
      "date": "Jun 19",
      "text": "Israel and Hezbollah agree to renew a ceasefire after intensified fighting threatened US-Iran talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxQZUlabWgwdElDRVdLdjVrdWdtbmZIYzh4V3NTT3BGTFpiWnFJU2w0NnF1RU1ha3lRUnlXY0xlSDlHUElSTTBnY3UzNXVERC1Hd3Q4RkQtQ1F1cl9OS0tLaW9LRzM2M0hibnlKWlA3SlZmcGZFYlloR3NESmNrMTdpaDBVRzRqT2paREplcV9wX194Wk1yb0hQSG8zdE9YeXR6cGM3Z0djS2tUOGNpVDR0aQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1007
    },
    {
      "date": "Jun 19",
      "text": "US-Iran talks in Switzerland are postponed as Israel and Hezbollah enter a ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxQb09GUkZhOTJSUnMxVUtrTDRjTWRmWWJBZExCaVlCVzAxbHc0azJjRS12bW5KdXVHdkhyWmRJVm8tRHVnVjJ3MTU1YkVMQlRBUm5KMXpYbWM2TV9DeHlhR0xjVk80cGNXY0RaaXp2c2hYWnoyR3I0T2tRMEpoUVg5bzkyMkRpaHZTM29oOUM3S2JzLXJJZnJIV19Tb1JmRFREZ3JEYVVRT2VUNjNu?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1007
    },
    {
      "date": "Jun 19",
      "text": "Oil tanker traffic in the Strait of Hormuz jumps, but Iran floats 'insurance fees' and asserts control, leading to a turbulent environment.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxObFJiaThpOURJUG85MUp5NGZrdUNEU1oxYTQzLWlUYmNKaEtvMDZ4TVhDRzFxUi1QT29pUlFjTVh5VlVYUlpVTldWaW9QYXk2UVVYNXgzY3paVmJYZzNYd2xJazkzaVJtaDluMklyMzh6X0c2ZUFKaEpLTGNCY3JFYndUSHZUY0Y1c00wNGtUU21hUXZYNVB2TVBDQ1YwQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Spokesman-Review",
      "latestSinceUpdate": 1007
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
      "perspective": "US Diplomacy",
      "headline": "US brokers initial deal, expects full ceasefire",
      "summary": "The US, led by Trump, has brokered an initial agreement with Iran to end the conflict, with expectations for a complete ceasefire across all fronts, including Lebanon and Hezbollah. This move aims to de-escalate regional tensions.",
      "tone": "neutral",
      "latestSinceUpdate": 1001
    },
    {
      "perspective": "Israeli Opposition",
      "headline": "Israel defies deal, continues Lebanon strikes",
      "summary": "Israel has reacted critically to the US-Iran deal, continuing its strikes on southern Lebanon and issuing new occupation maps. This indicates a continued pursuit of its military objectives despite the broader diplomatic efforts.",
      "tone": "defiant",
      "latestSinceUpdate": 1001
    },
    {
      "perspective": "Iranian/Hezbollah Expectations",
      "headline": "Iran, Hezbollah anticipate benefits amid murky terms",
      "summary": "Iran and Hezbollah anticipate significant financial benefits from the deal once fully sealed, with Hezbollah expecting a major cash injection. However, the terms of the ceasefire remain murky, leading to ongoing disputes.",
      "tone": "strained",
      "latestSinceUpdate": 1001
    },
    {
      "perspective": "Global Economic Relief",
      "headline": "Strait of Hormuz reopening brings economic relief",
      "summary": "The reopening of the Strait of Hormuz following the interim deal between Iran and the U.S. brings immediate relief for the global economy. This development eases concerns over oil transit and supply disruptions.",
      "tone": "neutral",
      "latestSinceUpdate": 1001
    }
  ]
});

export default LATEST_SNAPSHOT;
