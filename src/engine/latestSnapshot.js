export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2513,
  "lastUpdated": "2026-09-30",
  "lastSyncedAt": "2026-09-30T08:56:18.287Z",
  "warDay": 215,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-09-30",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 7,
    "summary": "A ceasefire proposal from Tehran has been rejected by Trump, and diplomatic talks remain uncertain."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 38,
    "oilDisruption": 75,
    "tradeImpact": 45,
    "sanctionsPressure": 49,
    "globalPressure": 54,
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
      "date": "Sep 30",
      "text": "Trump claims war will end ‘very soon’, gives no details",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPWlkxSG8wVkZ1Q0VFS2JDNE5WblUtN3hQU0twSnVrMFNrWmxOaDVlVS1HUGZXbVFGWkJtTkNqQTdhR281Wm9DbEpOY1BqX05PMDBSTWV2eGxOSzMwMWFJNHRJWlktV0txM1pWMEF1RG10UVk0d041dW9xNXRyenljd0l1T2Rqek9jZWVKWHgzUXowdXN4SUhfZ0VtQWRsOFdIdUlZWXdNTncxb1pwb09hYUlNcGdORWFVak5v0gHAAUFVX3lxTE0tbmZweW4xTWxhNm1QTnB4ZEpoWHhMU0RiZ09XX0wxLW1wM3hYZzNkX2ppQkgwRko5M1ROU2l0eEVlQ2Z2a2d2MWtWNm5FQjhLWUY2ZDVLSVBRZlNTb0FVRHJYZDI4UE04ZzZ2YlZwUjdBMUVoLUtYdC0xX3pISV84YUFuTWlNM3ZLMndjeTYzS0tNX0Fja0VQMjlpcWtSaUdaWXJnMDBqU3dZQldqQWxFNVRlOUVyU1l5NXo2c2UxYg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2513
    },
    {
      "date": "Sep 30",
      "text": "Iranians stagger under soaring costs of seven months of war",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxQZkZiODJvYlVSWTFTXzU5NnY5dV9vQzAya01EME94cUZRdmtITkpwTnR2UWVLX0gtY2hOX0k5bE1mbUpSSjhGMU43NDRqQkJJaWVVVmt6d1p3cmJnVGdJQkg3U0RtUTZXVDRzVUNJdnB3bDdiUmVLTDF0ZXc1a3FnTi1qMVNOZUxxeVFZR1JxbDZUaFVmT2RIWDlTN292SFBUZlVYUDZwNG0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2513
    },
    {
      "date": "Sep 30",
      "text": "UN ambassador Waltz says Iran was not negotiating ‘in good faith’ to end war",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxPSUVsMFM4WGF1c1NReGpTcWN6OXZQWFR3ZHJoR0p6MmtPYWR4N0RmSWFJcGdFMUdaemVpODhabzV0ZE5iTFlDNDVvUDAtc2IyMVVSNklTMWVXT1RqdlVTY3BMZDRuRGhjYlZybzRTQ19sT3Nld1JYQkE4Z2dTR3dDYXB3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2513
    },
    {
      "date": "Sep 30",
      "text": "US, Iran trade barbs as MBS and UAE VP meet",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxOOGR3S3NmdVpaZUR1OGdBX0hBTU5TbTFDcDRVbThaY05EU1Q3Qk9Sa3AwNFlkT3RrU0ZZb19DYmlaZlFQa09DT3d1eGxuZFJnZVJpT1NSTkpVVy1pUEt4MmZVR1JqeWR0YWRLNUdfcFp2WjVMV1lMNVllaF9ELVF3bmhrUUhscEFwcDJVSE9feWtzYldxNGF2NGNEZUZVZm05Z0ZoamNsd2dZNVcxNWE4V0luaVZpd9IBuwFBVV95cUxPSUdtckw3eUdwd1UweVd6Tm1YWG55cXBIaTZrdVJtTWRKdmN3LWk5aGxtOTFtbFNQcVdfN3g2ekVUR0NGVHNXRXFQYjJrbjNiNUNwVUREUWp1M1laYkZQMng0SzJIcmN1RnR1bVpXU3FBbnRaaWxsQllnNmV1ZU1nMG1QT0RFR1JnUDZoaFpoc2VsbTFfMGpjUVotZ2dnR3hFVEl2Z0kyNl90enlOX2J4YUYxVXNpQlBMbDFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2513
    },
    {
      "date": "Sep 30",
      "text": "Investigation into US-Israeli strikes on Tehran neighbourhoods reveals devastating civilian harm",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2513
    },
    {
      "date": "Sep 30",
      "text": "Tehran says it expects U.S. response to ceasefire proposal already rejected by Trump",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxPTWE0SmFYMGplRWp0MEtWY3Fia2dlSW1QTEQxa2hyQTBHdE9MU213SFhMRU5EaGZQaUZSV0hlLWhjWWpZMHFuSWQ0MjhlczBvbVFvSkVNRDgxT0pHN0dOd2l0WS1TNGE5OEpiWG5YODg1cDRXZnpjZXBVQ1c3SXFJTEFxYjM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2513
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
      "headline": "US-Israel Maintain Pressure on Iran Amid Regional Strikes and Intelligence Operations",
      "summary": "The US and Israel have conducted strikes on Tehran, causing civilian harm, and Israel has revealed details of a successful Mossad operation against Hezbollah. The US has also issued strong threats against Iran following the expiration of a deal deadline.",
      "tone": "strained",
      "latestSinceUpdate": 2512
    },
    {
      "perspective": "Iran",
      "headline": "Iran Defies US Threats, Claims Regional Influence and Oil Flow Stability",
      "summary": "Iran has traded barbs with the US, rejected a ceasefire proposal, and touted its actions in the Strait of Hormuz, even as oil exports rebound. The US withdrawal from Iraq is seen as shifting the balance of power in Iran's favor, despite US-Israeli strikes.",
      "tone": "defiant",
      "latestSinceUpdate": 2512
    },
    {
      "perspective": "Regional Stability",
      "headline": "US Iraq Withdrawal Shifts Regional Power, Oil Flows Stabilize Amid Tensions",
      "summary": "The US withdrawal from Iraq has created a power vacuum, raising concerns about Iran-backed militias and a shift in regional influence. Despite ongoing tensions and Iranian actions, Middle East oil exports have rebounded, and Iran's chokehold on Hormuz has reportedly broken down.",
      "tone": "anxious",
      "latestSinceUpdate": 2512
    }
  ]
});

export default LATEST_SNAPSHOT;
