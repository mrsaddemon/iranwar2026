export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2514,
  "lastUpdated": "2026-09-30",
  "lastSyncedAt": "2026-09-30T15:50:52.665Z",
  "warDay": 215,
  "summary": "The conflict between the US, Israel, and Iran continues with ongoing military strikes, economic pressure, and attacks on shipping in the Strait of Hormuz, while ceasefire proposals have been rejected.",
  "lastNarrativeUpdate": "2026-09-30",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 1,
    "durationDays": 7,
    "summary": "Multiple ceasefire proposals have been rejected by the US, and military actions continue from all sides."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
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
      "date": "Aug 23",
      "text": "US and Iran trade barbs as MBS and UAE VP meet.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxOOGR3S3NmdVpaZUR1OGdBX0hBTU5TbTFDcDRVbThaY05EU1Q3Qk9Sa3AwNFlkT3RrU0ZZb19DYmlaZlFQa09DT3d1eGxuZFJnZVJpT1NSTkpVVy1pUEt4MmZVR1JqeWR0YWRLNUdfcFp2WjVMV1lMNVllaF9ELVF3bmhrUUhscEFwcDJVSE9feWtzYldxNGF2NGNEZUZVZm05Z0ZoamNsd2dZNVcxNWE4V0luaVZpd9IBuwFBVV95cUxPSUdtckw3eUdwd1UweVd6Tm1YWG55cXBIaTZrdVJtTWRKdmN3LWk5aGxtOTFtbFNQcVdfN3g2ekVUR0NGVHNXRXFQYjJrbjNiNUNwVUREUWp1M1laYkZQMng0SzJIcmN1RnR1bVpXU3FBbnRaaWxsQllnNmV1ZU1nMG1QT0RFR1JnUDZoaFpoc2VsbTFfMGpjUVotZ2dnR3hFVEl2Z0kyNl90enlOX2J4YUYxVXNpQlBMbDFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2514
    },
    {
      "date": "Aug 23",
      "text": "Bessent promises ‘economic D-Day’ ahead of expected Iran sanctions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE10NWduUk9rVWtZSTJ4a2k3clBvRGdIQlFLaWFyM1VqR0RDZTE2QnhfUHRleWh3T2oxR2k3Y19mVi1EcURxSllxd0lEblFoNklOSS0waGpqdGM0bjdWUm1Kamt3Tm9GaTNBbWVlMnJB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2514
    },
    {
      "date": "Sep 29",
      "text": "Trump rejects Iran ceasefire extension and threatens to bomb Oman.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2514
    },
    {
      "date": "Sep 29",
      "text": "Trump threatens Iran’s trade partners, shifting focus to economic pressure after military strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxOX0YxejNNS1poTHVOcXNPenhxM2c4RmxRb2dtVnVpMHpZMGw1OHBCbDRxWWpmOWxiLVh4QjJkc3JsUVd2UTZseXBGd3lzM1Q5bkpiLXhkMWhlZmJMZHNaV0lTZ0tra0dGclg3T1lTaERzaUJ3WUswQ0dKM3lvX2RGbkotQTZTb3V2VDBWTEY0aVpKQ1RldlE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2514
    },
    {
      "date": "Sep 29",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighbourhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "amnesty.org",
      "latestSinceUpdate": 2514
    },
    {
      "date": "Sep 29",
      "text": "Tehran expects US response to a ceasefire proposal previously rejected by Trump.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxPTWE0SmFYMGplRWp0MEtWY3Fia2dlSW1QTEQxa2hyQTBHdE9MU213SFhMRU5EaGZQaUZSV0hlLWhjWWpZMHFuSWQ0MjhlczBvbVFvSkVNRDgxT0pHN0dOd2l0WS1TNGE5OEpiWG5YODg1cDRXZnpjZXBVQ1c3SXFJTEFxYjM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2514
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
