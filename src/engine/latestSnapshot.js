export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 865,
  "lastUpdated": "2026-06-04",
  "lastSyncedAt": "2026-06-04T09:04:05.150Z",
  "warDay": 97,
  "summary": "The Iran war continues with Iranian attacks on Kuwait and Bahrain, while the US brokers a fragile Israel-Lebanon ceasefire amidst domestic political divisions regarding the conflict.",
  "lastNarrativeUpdate": "2026-06-04",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "Israel and Lebanon have agreed to a renewed ceasefire, but its implementation is uncertain due to Hezbollah's rejection and ongoing attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Jun 03",
      "text": "Iran launches deadly attack on Kuwait airport, injuring several.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxNWmVQTjduVEoyLVF3Ym84c25PRXR5dmFoMjlXUy10N3NMYjlEbWxoS0JtSW9Oc280eXRqWVNDOEZZLW1OWXRFdEVwUFl2NXNjSWVTdjNjOXpBcXZ1QUVjZEpiREZEM25YUlVlR1M0UTBUWVF0cVZGaUE4dzQ1cVZvTWFaREh0czBnX2Y5YXY1Mi1Ic3BOSGpRTXROMFhoSWtYU0dDYw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 865
    },
    {
      "date": "Jun 03",
      "text": "Israel attack injures several after new Lebanon ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxNci1FMmVzUHVBVFpfSlNBQ2ozZUhXdk9wWllHM3FfM1IxVVc2cDNwdi1PaVJ6aldDY3JzYlhocTk0V3N6VUU1cHFPVzFaUVhsLWxNNnQweTlwaGMzdV9XZjRPbUpWakk0NV9XU1VOa1ZVWXp0VzJ2R25odmJOd1ZYZHpOYVhWUVEyb2dpOGRlTnpSU1NWSGpfZjZodjNxTWwySl9sdVFTczBib0d5NHBvR3UzU3dhQdIBuwFBVV95cUxPRzF6SWJmbE5YVktwdmw5UnZtNnNUalRzX05ac0Q3QjE2V2NIRGdCT1B3UFlBMlhLN29WWEdNblUwMTQySXBBemxyakQwcEx5LW5MdlpLbldpeDZIVmxrcTJCU1lZYkJQVjlNcXNUcVNleVhKYnVGNHVKMzBLNVEwODhJYl9nZDZ4V1J4bDdhMW1hWWlneXM3dk1wcjJ1eEo5cjVLME9KWmJGQU94Tm9qS1NCYllmelpCTFRr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 865
    },
    {
      "date": "Jun 03",
      "text": "US House votes for measure that would end Iran war, in a blow to Trump.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxOaXZBVGtQRWNUQXJnZ1ZIRy1ESnlmMTR6MXZMeGotWEJEV0JwTnJmVXdHYUJZazB3cjhrU2FLN0gyMk0tUlNPZDVYYUpLMzhhTUZFam9aLWpNWjNManFDVzFVTGFudDBCQnJja0V4YXFLNldHRUtvYTZBdVR5eTlZaHFKb1dHSjBHSXNMRHpZR3JGY21Kb1NONEJ3ckoxR3N4d3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 865
    },
    {
      "date": "Jun 02-03",
      "text": "Iranian attacks on Kuwait airport and Bahrain are condemned by Middle East countries.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxPYjlDZ2xvU3ltT2EySXRxSi1adFRtRVF3RTlJZXlJNUNRZW5DdjhlN1NoeWR5dHE3Wi0zRWR4OUxsQzZhZERRd0ZLc01mdEpBNTZNd0Z5cHo3cGhpN3htRkliUGFfLXNMZ09kTXlmRTVOQXNGbG1pX1lfcm50OTB5ODVZbjM2ZHBOU0N0d3RR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 865
    },
    {
      "date": "Jun 02-03",
      "text": "Israel and Lebanon agree to renew ceasefire, but Hezbollah rejects the agreement.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFB5N3JBTXdxaG5jOU15NXJGSkQ4dk1SNkN3ZEpwVFBvQ1ZISjQ0VURDLXdoN1ZpMk5hUHlTTUFEd3NUZVFmZFVsVGt4Y3BNTGZRS0dsNGRBTWpGUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 865
    },
    {
      "date": "Recent",
      "text": "Trump broadens U.S. military footprint in the region.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxNVlo4blVxcW56cWswcGlyUUU4TktibnJQaVhHS3ZVZ0FYc1lyc1o1ZTd2cURqVDFfQ2ZTYWtaTG1zbmFrLTJLV3BLTU8wbXdsWDhlcmpmNzIwd1o1TXpwWEVGczc3alREYTJxRWRJOVNtZk5KaS1icUxteWZOY2xCRWZR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 865
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
      "perspective": "Iran's Stance",
      "headline": "Iran Continues Strikes Amidst Stalled US Negotiations",
      "summary": "Iran's Foreign Minister states contact with the US is maintained but negotiations show no progress, as Iran launches aggressive strikes against neighbors and US assets, framing them as responses to regional dynamics.",
      "tone": "defiant",
      "latestSinceUpdate": 863
    },
    {
      "perspective": "US Response & Internal Division",
      "headline": "US Counters Iranian Aggression While Congress Rebukes Executive Power",
      "summary": "The US condemns Iran's aggressive strikes and actively counters missile and drone attacks, while the House of Representatives passes a war powers resolution, signaling internal political division regarding military engagement.",
      "tone": "strained",
      "latestSinceUpdate": 863
    },
    {
      "perspective": "Israel-Hezbollah Volatility",
      "headline": "Fragile Truce Holds Amidst Hezbollah Provocations",
      "summary": "A partial truce between Israel and Hezbollah is in place, contingent on Hezbollah ceasing attacks, but recent rocket launches by Hezbollah are testing the U.S.-mediated deal, maintaining high regional tension.",
      "tone": "anxious",
      "latestSinceUpdate": 863
    }
  ]
});

export default LATEST_SNAPSHOT;
