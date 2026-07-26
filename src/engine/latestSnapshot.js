export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1466,
  "lastUpdated": "2026-07-26",
  "lastSyncedAt": "2026-07-26T01:10:23.166Z",
  "warDay": 149,
  "summary": "Direct strikes between Iran and Israel have occurred for the first time since an April ceasefire, while regional conflicts involving Saudi Arabia and Houthis continue, and US military actions in Iran have seen both escalation and recent abatement.",
  "lastNarrativeUpdate": "2026-07-26",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 14,
    "summary": "The April ceasefire between Iran and Israel has collapsed following direct strikes, and a ceasefire deal in Lebanon is being violated by Israeli actions."
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
        "militaryPower": 80
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
        "precision": 0.6,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "date": "Jul 24",
      "text": "Escalation in Iran war nears 2-week mark",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAtQk51ZFI1R2hJeUhnTTJlazk2WGstSFNLeEhfbVY2TXhER0tBVjZpemxQWTlyTDQzdFRiZlJQSHZ1YXVIWDJvUTh0ZzkwNDg2RmxBOTdLRGNSVUhaRm9DZzJUZm0xY3U5WGxQZThR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1466
    },
    {
      "date": "Jul 24",
      "text": "U.S.-Iran Strikes Abate, but Supporters of Both Sides Exchange Attacks",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxPdC1NV0I2aXEwczAtZVE4Y3FWNW1OVFRWT0k3M05xZ0d5V1FLZXNvWlJUVThTQXF4MnU0bndRMnBrV0J0b2d4ZF9FRl9CQzQxUGhxRmI5SHhYWnRkUmljVTc0ZUtCZlc3NEJtUEFreGg0U3ZOb0tQLXYtOURYLW1kdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1466
    },
    {
      "date": "Jul 24",
      "text": "Saudi Arabia, Houthis trade attacks as conflict spreads",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNdDVPSWhRMm50Mng1UHBhbG5qRXV3eHFwX0dObEFENW1CcUduQ0o4a3dtNDlpcGNMRHpsZS1kTkJEYTZxM3VsTTRoSnR4UW15R0ZLa29IaEJJRlNwa1FLV2RhWmZ0cUtLZXhxcmZVeVhKdEJMNWdCT1gtNnU1amVQVDdnMDhUVUM3dk1GTldsY3Z5UjNXNXJnWksydzFfSnBMRUduQVdXemV6S0VCZVkySi0tLTRGTHpLY2fSAb8BQVVfeXFMTjJkVDJwTWlHRC1SVXdRNnFXZTJJWXVzR1Jib2F4dnJVMXVrZFBucDhLME00Ri1wdzFoM3dMYllLTGIxR2hTa0UtSXNXSm1CM2lfcVkzc2pvT0pUT1U3S0xTNjRseTVmZFVHbVBsUms0TXZNOUZydVA5T2NqWG5jNjI4ZUpSb0ZSOUk4dVRtTHFXWHhuNVRjUTliR0ZDVzVNRC1rME51NDdrWVpKUDlSRW10cS1Fc1R0SFI4RnZGM2M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1466
    },
    {
      "date": "Jul 24",
      "text": "Trump warns of unprecedented ‘massive attack’ on Iran",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOQVI2TFJjMFduMWRzZ1B6dEYtWWVTcHYyWFJ6NjVaNlpzaWxleklxUmNRMVFfMzlCNjhhU21mMmNoTk9zTjZ2NGZZbGxNR3FXYzQyM29uc3N1bkNXLURCTmwtNHF5RU5xNHVNQWlnR0hYanhOeXV1SzgyN1dVam5vZElpZ2NENktUTUFhX2RLdi15UXBZZTRWUkZNT3Q5bW9melEtN0R1Z0ZPeldvOFl5WS10czRjbVE0TXpWR2RIZ9IBxAFBVV95cUxOYTJ6dmJvYTV3RkFscUNkQVNjMEVLZUN5TGVydTVEd2VHeXp3YkU1blpTX1Vrb2Q1SVBUaTVYSm4wV2VjUWlsMmwzZWRKYkpiaEdSSEpGaUVlSEpuRzMzX09nczZ5RGVqTWgzRGpCQ09rWEpPQjduQnJkdVZOanFldk84aHZyZEc5UE5LU1dkUnpxUDlVUEtBTmtQZUVhaW9hWVp6d2xuYm55a0ZsUnU1ak5RMFFyejU2ZEdRdlVpSDh5dEh1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1466
    },
    {
      "date": "Jul 24",
      "text": "Katz: Iran will face a 'crushing blow' if it strikes Israel first",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE82S1NwSG9sbmpvUE9Tek1wMWZIZ0h0XzIwRFk1SnFHYlVxVEU0MTU0U092OVJ1MkV5a0xMOFl5dWlpT0E2Vmx0UFE1UE85enQwLXRIUFl1U3FyOUxWUWExcUZQaXJQUjlOVWNzTUZB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 1466
    },
    {
      "date": "Jul 24",
      "text": "Iran and Israel Exchange Strikes for First Time Since April Cease-Fire",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMidEFVX3lxTE4yaFRvZG5JOHJaV2ZsSllxcUx6WG9HSEdWVC1sQlVDZlRIUmxxb18xVWNmOEZCd0xKa3lraG80ZGw4NnVHcE5vODRwZzVNVkV4V3JscldjQUt0dU9zQ2swZjExcG9IR2E2dG5hb29HekFnYV8x?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1466
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (16 headlines)"
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
      "perspective": "International Focus",
      "headline": "Middle East Conflict Dominates Global Attention",
      "summary": "The protracted conflict in the Middle East continues to draw significant international attention, with observers monitoring developments closely. The ongoing situation underscores regional instability and its broader implications.",
      "tone": "neutral",
      "latestSinceUpdate": 1449
    }
  ]
});

export default LATEST_SNAPSHOT;
