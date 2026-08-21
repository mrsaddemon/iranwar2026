export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2096,
  "lastUpdated": "2026-08-21",
  "lastSyncedAt": "2026-08-21T16:15:04.547Z",
  "warDay": 175,
  "summary": "The Iran War continues on Day 175 with the US imposing new sanctions and economic pressure on Iran, while military actions persist in the region and oil transport through the Strait of Hormuz is actively managed.",
  "lastNarrativeUpdate": "2026-08-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire is currently active; military and economic hostilities are ongoing."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
    "escalationLevel": 90,
    "oilDisruption": 75,
    "tradeImpact": 70,
    "sanctionsPressure": 68,
    "globalPressure": 89,
    "allianceInfluence": 73
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Aug 20",
      "text": "US imposes new sanctions on Hezbollah and threatens economic pressure on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBFRllmQTRnUUJ2Qk9iUUF0LU9jU0dQRjdSaGUyTlVkMFg0eXFvdVVmMGhHN3pncnFxLU5XYTlaQVFqa1FFNEwzUkRyVlhQdWhPV2V3TVEydTFUdFFNYnBKcEVUQzF5TE9TSjNtV19B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2095
    },
    {
      "date": "Aug 20",
      "text": "More than 750 US service members have been wounded since the start of the Iran War.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxOaXROaW5CZXFmcURNMzN0aWFmTm9xNlZGaG55cTE1LXFUOHp4UGdxRDFtY0xzYUtBbk92NGgtZVhici1rU1pqZGg5Q3V1dXd5V3pqUnNIZEZGclFvRXRMUzhpemdGaER4bmFpaDlJSEtZM2Uyc3puSk1FR29Ma0JnTVln?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2096
    },
    {
      "date": "Aug 20",
      "text": "Israel pounds Gaza and steps up warnings over Syria after an airbase bombing.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxQLTlfMHNQWDJxLTRQUnk3S3BmSThwcFNFWTY4dHhTaVZlaENYcFliSkRTVFMzRVliRkgweUxUVThXN0ZfU2Q0Rl9WVXBCZkxBQXZPcUlkeVNKa2kwcFQzM3FVakJMRlQ2N1FBZ3hVUGNXb25ySko1UFVEQjZqU3dfekJUdVBYMFVkQ3RiSm1mMTZFUTFsNFhidHNxY0lsbnVCeTNJOUh0eEQ5dVRMM3VtajlWWlFxOFhfRTFjdXlTWjNtLUhi?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2096
    },
    {
      "date": "Aug 20",
      "text": "President Trump threatens Iran’s trade partners and unleashes 'economic D-Day' on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxOX0YxejNNS1poTHVOcXNPenhxM2c4RmxRb2dtVnVpMHpZMGw1OHBCbDRxWWpmOWxiLVh4QjJkc3JsUVd2UTZseXBGd3lzM1Q5bkpiLXhkMWhlZmJMZHNaV0lTZ0tra0dGclg3T1lTaERzaUJ3WUswQ0dKM3lvX2RGbkotQTZTb3V2VDBWTEY0aVpKQ1RldlE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2096
    },
    {
      "date": "Aug 20",
      "text": "U.S. military states it aided passage of 660 million barrels of oil through Strait of Hormuz since May.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxPU2tmbVlWOHdGT19tdnFrRnRSMzY4ZzJtUTNhV0xHVlZlOERZVGJtaHlMR3ZVT2IySVJfamFjS3JBUFlXZ1QxUnF4VzJWdnNacDEyeGp2a3p0a0pGS3RINTZZNTJIQ1FFX0hhWlBENWFSM2VPMlhvX21rOWZEalR6Ump2dFdrZEE4bkxZTWxneFXSAZYBQVVfeXFMTlByT2dSRUliWjY3SG9jU1MyNzkyVDJsNHhERkExdU8wSzAwcXR4YXVtMWY3dld3bzByRWVndFB1TnV0LU54eWZQNDduTmFaaG5jNl9QdFhaeXA5aWd0eGlTc3lRVUI3VnYzRG1kZnhNQm1fT0J0NVJ5WGRiTzNZT0FWMDZydFhsVG1UT0c0eWk4WVVqa09R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2096
    },
    {
      "date": "Aug 20",
      "text": "Former Israeli PM Bennett suggests Israel should strike Iran to retaliate for Hezbollah attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxOVm5RWHRhUm1XZV9BTno5Ym9IUnJRQ1k2R0M3RW9sb0xRYlhzU1JfaW1RRzlWRUYxdFQ2TmE2X2o5M1R2WDNhNVBJWXVvdDF1cTVyZFVZTWdmdTZwSWluZ1JRR0x1MWtMOEFETFpmSzVJdEw5UDllNXVwZFV3SkUwd0dRa0hxYTB0LS1aNUJFNjIwWTNsWEMySXhZZy1zMUtz0gGmAUFVX3lxTE01TTIwbzBrenNMcmp6eV9ZN1BoY1A5Q2Y4VkNTVG4yeWhPSlFMU01uWTZoLURQRUI4REpVaHBkZXgtWmNYRHFfOFdXVlpNV1pxZExRNmFyczJvbnM5VEJGUkdTN2gyYzk2MGRoakVrOHlMVHFmc0taRlV5S3lZWktwRkJhUlRKS19HUU01ckgyOHJacktLc1VQdGs4MlpYQkZMbGpyOGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2096
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
