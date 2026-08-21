export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2106,
  "lastUpdated": "2026-08-21",
  "lastSyncedAt": "2026-08-21T21:32:21.830Z",
  "warDay": 175,
  "summary": "The war involving Iran continues with new US sanctions on Hezbollah and Iran, while regional tensions remain high, particularly around the Strait of Hormuz and Gaza.",
  "lastNarrativeUpdate": "2026-08-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire or de-escalation efforts are reported amidst ongoing conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 85,
    "oilDisruption": 75,
    "tradeImpact": 69,
    "sanctionsPressure": 64,
    "globalPressure": 81,
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
      "date": "Aug 20",
      "text": "US imposes new sanctions on Hezbollah and threatens economic pressure on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBFRllmQTRnUUJ2Qk9iUUF0LU9jU0dQRjdSaGUyTlVkMFg0eXFvdVVmMGhHN3pncnFxLU5XYTlaQVFqa1FFNEwzUkRyVlhQdWhPV2V3TVEydTFUdFFNYnBKcEVUQzF5TE9TSjNtV19B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN"
    },
    {
      "date": "Aug 20",
      "text": "Iran and Oman discuss the Strait of Hormuz amid ongoing conflict.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2106
    },
    {
      "date": "Aug 20",
      "text": "Gaza mediators express concern that recent Israeli strikes undermine peace efforts.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxPUGViZ2w0cXVmUjBqbEFKeEFsdUY1YWNiWlBobmpkejVKWng5N3lINFFZOGdNQ2JzaV90bXBFQVpLaWVDRXZOMmQtOXA0d09XNEZmdExMbFFPZGNsaTc3QUVKQktwOU5DNnliZ0dDdVFNaGdsUVNyOWdHRkh1VFBjQkNfUklTZTRZMzhDb05xaHZUNGdURlZxSUJBZ3RCVHZtbThfaFRObk1SM0VYX3ZZS09jelpvOGMzSVktZDNocEpKOVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2106
    },
    {
      "date": "Aug 20",
      "text": "Former Israeli PM Bennett suggests Israel should strike Iran in retaliation for Hezbollah attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxOVm5RWHRhUm1XZV9BTno5Ym9IUnJRQ1k2R0M3RW9sb0xRYlhzU1JfaW1RRzlWRUYxdFQ2TmE2X2o5M1R2WDNhNVBJWXVvdDF1cTVyZFVZTWdmdTZwSWluZ1JRR0x1MWtMOEFETFpmSzVJdEw5UDllNXVwZFV3SkUwd0dRa0hxYTB0LS1aNUJFNjIwWTNsWEMySXhZZy1zMUtz0gGmAUFVX3lxTE01TTIwbzBrenNMcmp6eV9ZN1BoY1A5Q2Y4VkNTVG4yeWhPSlFMU01uWTZoLURQRUI4REpVaHBkZXgtWmNYRHFfOFdXVlpNV1pxZExRNmFyczJvbnM5VEJGUkdTN2gyYzk2MGRoakVrOHlMVHFmc0taRlV5S3lZWktwRkJhUlRKS19HUU01ckgyOHJacktLc1VQdGs4MlpYQkZMbGpyOGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2106
    },
    {
      "date": "Aug 20",
      "text": "US military reports aiding passage of 660 million barrels of oil through Strait of Hormuz since May.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxPU2tmbVlWOHdGT19tdnFrRnRSMzY4ZzJtUTNhV0xHVlZlOERZVGJtaHlMR3ZVT2IySVJfamFjS3JBUFlXZ1QxUnF4VzJWdnNacDEyeGp2a3p0a0pGS3RINTZZNTJIQ1FFX0hhWlBENWFSM2VPMlhvX21rOWZEalR6Ump2dFdrZEE4bkxZTWxneFXSAZYBQVVfeXFMTlByT2dSRUliWjY3SG9jU1MyNzkyVDJsNHhERkExdU8wSzAwcXR4YXVtMWY3dld3bzByRWVndFB1TnV0LU54eWZQNDduTmFaaG5jNl9QdFhaeXA5aWd0eGlTc3lRVUI3VnYzRG1kZnhNQm1fT0J0NVJ5WGRiTzNZT0FWMDZydFhsVG1UT0c0eWk4WVVqa09R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2106
    },
    {
      "date": "Aug 20",
      "text": "Hezbollah releases video showing an FPV drone chasing Israeli soldiers.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2106
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
      "headline": "Economic Pressure on Iran Intensifies Amidst Stalled Talks",
      "summary": "The US is implementing a 'crushing economic operation' against Iran, threatening its trade partners, while signaling a willingness to reopen talks 'at some point'. The Pentagon is also considering a reduced military presence in the Gulf post-conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    },
    {
      "perspective": "Iran",
      "headline": "Iran Dismisses US Economic Warfare, Demands Conditions for Hormuz Reopening",
      "summary": "Iran dismisses Trump’s 'economic D-Day' as a distraction and asserts that the Hormuz Strait will remain closed until the U.S. meets interim deal conditions. Tehran also claims the war will be over 'very soon'.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    },
    {
      "perspective": "Israel",
      "headline": "Israel Continues Gaza Strikes, Considers Retaliation Against Iran",
      "summary": "Israel continues to pound Gaza, actions which mediators say undermine peace efforts. A former Israeli official suggests striking Iran in retaliation for Hezbollah attacks.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Affirms Force as Sole Means to Compel Israeli Withdrawal",
      "summary": "Hezbollah's Nawaf Moussawi states that only force can compel Israel to leave Lebanon, indicating a continued stance of resistance.",
      "tone": "defiant",
      "latestSinceUpdate": 2075
    }
  ]
});

export default LATEST_SNAPSHOT;
