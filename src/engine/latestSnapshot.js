export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1737,
  "lastUpdated": "2026-08-11",
  "lastSyncedAt": "2026-08-11T13:59:33.697Z",
  "warDay": 165,
  "summary": "The US and Iran are engaged in a dispute over war reparations, with both sides making demands, while the Strait of Hormuz remains a point of contention and reported missile strikes, impacting oil prices.",
  "lastNarrativeUpdate": "2026-08-11",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is reported amidst ongoing demands and conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 0,
    "escalationLevel": 80,
    "oilDisruption": 85,
    "tradeImpact": 76,
    "sanctionsPressure": 63,
    "globalPressure": 82,
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
      "date": "Aug 10",
      "text": "Trump states he would require compensation from Iran as a condition for talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5xcnRIaENDM0VobHdzWGIteUx1Y1pwYU42VUlVdzhMUDRvMGV3MWZ2cEppX0NnV29nSE5ZWTFWS3dGd0ZNYjByWldRM3VERU10ZFBaUnY5X2VmTDJ6ekgxNUV4RUJ2U3ZYemZhS0NB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1736
    },
    {
      "date": "Aug 10",
      "text": "Iran demands the U.S. pay for war damage before agreeing to reopen the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxOMXVhMHlqUEtqTDctWTJpYWFoamFyZHVHWE4xUWtkMnFVN0pmYTVtdXBuSXZVUmtFMEJ1UHgtRjlSak5sUnNpM1pDZUFqc1lUYV9FYS15WGN5VDg1RzYyZ19wOVNZSUx1bENuaDJ5QWsybVBTZzZsa2RScDRmd05BWDJqcTdTRGN0X0dVU0dPRm9sOEQyZHdERmlWNk8xSmIzdndQVEl1Sk1yeXRDR21FQkJn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1736
    },
    {
      "date": "Aug 10",
      "text": "The Strait of Hormuz is reportedly hit by a missile strike amidst ongoing conflict.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOamFyOVhnZG9PZUJlenFjNUhXd0doVTNNS2dCTm5tQU5Wc3NCV1Z4UUVhVDF6ZVZjVEtiYzZVOHVVb281V2ZwS3J1TlRxVjB2eXlHYTVLYUpIZkpfMWw4OWVyVVFvYnRoRFpGamFMRFRSTFp3TVBObDJ1VHpVM3NKM3pQZFVDaEtFcWhZMnFaUWZtbVRwbElXQnQ4OFJublpJbWxEMGxaUnowbkNT?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 1737
    },
    {
      "date": "Aug 10",
      "text": "Oil prices climb due to the stalemate and reported strike in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1737
    },
    {
      "date": "Aug 10",
      "text": "Oman-Iran talks on the Strait of Hormuz are reported to be at an advanced stage by Qatar.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQbXlESEowYVBxMnhTaGNfZFlnaDAyVGRUYmtBRFZsenUxV1FZWGpDM09DYUtLejNFOXYyZVBGN2laYVBvalJEbllOZnVDX3NlX24tT2VBUWxnX216eFFWYXRJbzl3NzM5ZE9sTk15RXRWNDc1YW1wbmZnY3lyTllmT1RaSndVZ05LVEw2a1VjSHJTb18yLU5vU1FzSktOSUxaMjdicW5IcVRVUHVXRk9HMGNaUTQ1VzRfcE1RUTcyNNIBxAFBVV95cUxQOWVLNmpzaUVWb3dFY1ltNXZIb2N4RkZRTGNKNVR5dy1wdUNmWWdzdVdkUHhFeWRDWlg4RGt3R3dWcUhZeUhZTHdrLVg0RXgza0VUaEtyWDhMeGJzWWREcUszM3AzcC1xMkNVTUlwU1dma0R5eHV0NHBxbEVMNEUzb0dGdXB4UG9vLWloSHRleDhtckVHTlVyenlycGJQNDIwVUtab2ptUi1Lb1d0X2tqZ05mSnpWazcxbUk2TVpwX2Z6Y3Jt?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1737
    },
    {
      "date": "Aug 10",
      "text": "Pakistan suggests the U.S. and Iran are close to a 'peace arrangement or a deal'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxQdFJmRllSZWd4dDRyLWZ3ZWU2NWVqRk9BekR5c0xkZG14Q3BKQmt1SnF4Q2VOX19IaWU1dUFTYXU4WTdENnBPWEk2cG1QU05WZHNnWWFPUWs4VFZadURZeTVnZG9kcEpTQ0lWVklCcUdfcUFoY0tFTjBrYXkwNUJXYTV3T1QwYlF0cGNUWkNXWnBnVmY5TXpOc1ZOMV9Udw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1737
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
