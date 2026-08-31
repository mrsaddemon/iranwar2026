export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2319,
  "lastUpdated": "2026-08-31",
  "lastSyncedAt": "2026-08-31T23:44:31.839Z",
  "warDay": 185,
  "summary": "The US and Iran have resumed military strikes, leading to increased oil prices, while Iran pledges to stand firm against sanctions and Hezbollah shifts to low-intensity guerrilla warfare.",
  "lastNarrativeUpdate": "2026-08-31",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is active as military attacks between the US and Iran have resumed."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
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
      "date": "Aug 31",
      "text": "US and Iran trade strikes after first known US attack in weeks, marking a major military escalation.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE0wR1VYOXlxY0JNeElMalZOaEw0VDcycU9GeDBFLUdEQ2x4NjRuSjQzd0drUUtfVDRIR2hzenZjY2lRU2ZvbzVUeWVzYUQxc2QwcS1pWW5HX2EzUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "the-independent.com",
      "latestSinceUpdate": 2319
    },
    {
      "date": "Aug 31",
      "text": "U.S. strikes Iranian rocket launchers on the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNOGhwcUVGWm1hTHB5UWs3blpsTXlDc1gtZWJxUUNUakF6Y1FPMGc3U0MyYVlmYkJvX25LWnJjUS1fOHlfOEJ4TDlmcjdOcThhYnRVenNGSlhQUzNXSUV2R1pzQUNRM3k2TGxVMjd0Q1pFY2J2SDYwbXU3cVJxZ3ZVSV9OZnFaNzFFT3E2c3hkSjM0T1MxaUFaWnF0MG93RDBWaVdWRDBTZkROdlJtTzBGd1VObGxPTGt6NjNOQkM1UUVBRU9oRFQ4SlZibkxrV3JhV1RLTHNHV2ZGaFVhTEHSAeMBQVVfeXFMTXdQZm9CQ2R5N0hjeV9tX1M3R2RJazR6UWs3NUcwb204MDlZOEs4RmRjMTgxbzVtRkxzTWtyZTFsMVVPQ1lwaEtSMFlpbEVfVW0wYjdGX29EYkFlckFkRUhJX243a3ZCaUc1d0EyMEhqTGZiMXlBSU16ZndoTHc5cUM4LTNqTU5kVDRGNFpjV3hVZ0tCUXY4NndzUk5wMGhpdTNOWGtISlRlRGhoa3VuQUhzYzZpZVlvbUc5V2JVeWYwaEN5TmR4Y2xhUjJWVkxKSWR3ZER3T0VWb0t2RElvbThiYTg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "the-independent.com",
      "latestSinceUpdate": 2319
    },
    {
      "date": "Aug 31",
      "text": "US strikes Iran on Larak Island, with Israel noted as carrying long-term risk.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1KbnB3T25OeFpwTzJ4NFpkN1ZNRE5JanoySWxTNWRtQ0VsRVJhOXZRTlJYTDJSbDNiVjBNT0gxN3VxRU5aUkxLcS04OVRlR1I1a05hNTg2SlQzdlVmWTRBOFJsYTBhaGI0X045NHB3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "the-independent.com",
      "latestSinceUpdate": 2319
    },
    {
      "date": "Aug 31",
      "text": "Iran pledges to stand firm against ‘unjust’ US sanctions.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxOSGJTQWRjaXhjYlZqdHpCb0tKQzJod3J0dDNLOWFhMENtOUpXdmFMWUF4bmJBNGs4UDVVbW9HbFhpRHdKVlZsVzFkZ3FGejNNSExlSHMwc3ptNzBJUUpQR2x6WXFDM2hxSzBad3Z5a1V6Ti1CT3dmdTBPcC1DODlSekE5Xy1nSUV4NjQ4d1pNZEpIYmhpVDJ3OWo2THdtcVo3VlE0MnFkWUhQNm5DQnJQREJ30gG3AUFVX3lxTE50LVdSTjA4THVkSmM4UDhLaEIwSG1oSV9DZEpPT1lQd29va3RYeWVXNWNubDluYkpHcHBoRHBsYU9HYzQwSDAxYS1TWTNYZXlqMUdLUkdGN2JnNUlwdWZsbEZncDNSMGVWamhQcmJNcE95c1BoWlBydml4UHk0UWhEWGlnWkFkVHJ0U0dFMmgySkhuT3VTcVo4c2ZMV0tkR1Vkb19mZTV2cTRjRDhRRjFYY3FZNXRNUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "the-independent.com",
      "latestSinceUpdate": 2319
    },
    {
      "date": "Aug 31",
      "text": "Oil prices rise by more than 2.5% and stocks fall as US and Iran resume military attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxQSGRJUGVDenVxZzdzdXZ4aTJudWV6LS1adkVVMmVUNnc1QnMyNVNsLThHcG44U2p6SWoxYm9LbjJnUGdkZDAzTENhSDR2OW90cWV2aDJNZWpKRllRNUhselE2djRhQlI3ejVmUUl6cFNnVDN1UmU4QXVadDNmQloya3daeWVHSmtGNDh4QWktSk1fenV3czlkbnhwNjJ3VzNXWEhZelFCRTIzaWpR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "the-independent.com",
      "latestSinceUpdate": 2319
    },
    {
      "date": "Aug 31",
      "text": "Hezbollah chief vows no ‘surrender’ and rejects Israel-Lebanon deal, shifting to low-intensity guerrilla warfare.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxNQUFNTURkVFFnSkZuTzFaeTlzU2VtMml5TGY1ZEdTTEVhTFBROGxxU0FLZ3llWk5FYnEyRlNIaVRvS0x2ZWdLcmlnM0ZzRFFvcVZjd3p4ckJvenoyQWhmUDNOUWxhUXlFMktMY0JiZ2dXRlBQelpyMm5fUDZpUHlJWGNMTkE1dllIQndfNHpZUjhsSFpOY1MyOFZKZnA4NlZ1WTBoazRrb9IBrAFBVV95cUxQWGJHUmQ1cGRKb0FyaXpNa2FwZFZ5Q3pUWTNCdTdVVjR5TkhhVm0yRldWaGJVdEoxZW9POVVUSHZNSWFtaW5MdTRjTkl1MzZvaGswNWJ5QXVvWEJEY1hSSVFKUTRiMS1PZW41QklsUGE3bUthSlJ1cmY0LUc1YlJzZXdRTENUMGNnN3Vvamx4eTRPSXJnWXZnU29iMGVVci1hR1ZUM01hUlJtWWxs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "the-independent.com",
      "latestSinceUpdate": 2319
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
      "perspective": "Iran",
      "headline": "Iran Defies Sanctions, Calls for Global Pushback",
      "summary": "Iran pledges to stand firm against ‘unjust’ US sanctions and calls for global pushback, stating that diplomacy 'isn't impossible' despite the ongoing conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 2309
    },
    {
      "perspective": "United States",
      "headline": "US Gains Hormuz Upper Hand Amid Budget Strain",
      "summary": "The US has gained the upper hand in the Strait of Hormuz, now a top concern, though the war is rapidly draining the US navy budget after six months of conflict.",
      "tone": "strained",
      "latestSinceUpdate": 2309
    },
    {
      "perspective": "Regional/Market",
      "headline": "Markets Accustomed to Stalemate as Region Transforms",
      "summary": "Six months into the Iran war, markets have become accustomed to a stalemate with no end in sight, transforming the region and its relationship with the U.S.",
      "tone": "anxious",
      "latestSinceUpdate": 2309
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Rejects Regional Deal, Maintains Stance",
      "summary": "Hezbollah rejects overtures for a Lebanon-Israel deal and refuses to withdraw from strategic positions, maintaining its stance against 'surrender' in the region.",
      "tone": "defiant",
      "latestSinceUpdate": 2309
    }
  ]
});

export default LATEST_SNAPSHOT;
