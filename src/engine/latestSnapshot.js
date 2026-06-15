export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 978,
  "lastUpdated": "2026-06-15",
  "lastSyncedAt": "2026-06-15T23:20:19.877Z",
  "warDay": 108,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-15",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.6,
    "durationDays": 1,
    "summary": "A tentative agreement between the U.S. and Iran to cease military operations and reopen the Strait of Hormuz is in effect, but its stability is threatened by ongoing Israeli-Hezbollah conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.4
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 48,
    "oilDisruption": 20,
    "tradeImpact": 15,
    "sanctionsPressure": 54,
    "globalPressure": 53,
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
      "date": "Jun 15",
      "text": "U.S. and Iran reach framework agreement for peace and to reopen the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTFBTTHBYQ1FMM3d4UGFxYnlsMVVVR014REs4S0IzaEpNeUZRSEpuZU5WcTFLR3dkdjhkcGVKVFc2NUdFZnJ1Q1FTWExBbno5SlR3SXpQOGR4NWdWWG8zRHFBWTFpWERDNFR0NF9DU0E3MEJ5QUVEb0dB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 978
    },
    {
      "date": "Jun 15",
      "text": "Israeli military strikes Hezbollah targets in Beirut, prompting U.S. warnings not to jeopardize the Iran deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBaZVE2UC11VHhpR2ZqaHlpQ2M4dlBxc1VPX2M1ekdRRXN6blAzcXdHbE5EV2JOYkkyU2lpWmRNeEgzYVVsd0tIYmthcTg3Z1FnSFppSEZnWVB0UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 978
    },
    {
      "date": "Jun 15",
      "text": "Netanyahu states Israeli forces will remain in a Lebanon 'buffer zone' as long as deemed necessary.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi2gFBVV95cUxNbDM0RlFqaTJYeVVQU3djemlFYmlMeHdjSW5uYl8ybmFvVEVScGUwWGYtb1NVbUx4YVFxSE81WmllQmJWanF2V3kzOFZVNC10MkRveU1YN2ttRmVwY0NqSWphS1RkS040cUp2WUQySHRSelplRHU5WXg2Um4tWlJEZk1wQTdFSzNpVFFKQXUtZDhiY3RTZFNpdTUydGFNSHhEWThscnc3T3RaUFVTbWFYaDFScWNjX0dyY0d6Sm9oVkdlcGRSSTB3NHExQS1zeTlnX0paUS1lZ3R3Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 978
    },
    {
      "date": "Jun 15",
      "text": "IDF reports killing senior Hezbollah commander Ali Musa Daqduq.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiUkFVX3lxTE1uY3AzcjNmVDB3U3lpbjV1aEtQNWFPYVY1ZU5qOFowQVhPUlFkRmE0VXBJVm9KSl9GZkVNUURJN21YOEdoLWxZWC1oZ2VSLUFicEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "ایران اینترنشنال",
      "latestSinceUpdate": 978
    },
    {
      "date": "Jun 15",
      "text": "U.S. military prepares plans to secure Iran's nuclear materials if a deal is reached, but Trump paused a ground mission.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTFB4cWZMcjNVMnRkWlJ6eGlEV3ZndVBtRFZadXg1aUxUYnNpZGdZb3hrZGJzS0FYVzFRUkRUT0wyLW40Q3ktN3lhUG1mcm9KOEU0ZTZ2RVNOZmFWRDc2RHhMOWUwQWt2SWJqWjdIOThNbkkxUFRGMzhid3p5TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 978
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "US Perspective",
      "headline": "Deal Secured, Strait Open, Israel Warned",
      "summary": "The US has successfully brokered a peace deal with Iran, leading to the reopening of the Strait of Hormuz. President Trump has warned Israel against actions that could jeopardize this agreement.",
      "tone": "strained",
      "latestSinceUpdate": 973
    },
    {
      "perspective": "Iranian Perspective",
      "headline": "Peace Deal Reached, US Responsible for Israeli Aggression",
      "summary": "Iran confirms a peace deal with the US, including arrangements for the Strait of Hormuz, while holding the US responsible for Israeli strikes in Beirut. Iran asserts its ability to control the Strait.",
      "tone": "defiant",
      "latestSinceUpdate": 973
    },
    {
      "perspective": "Israeli Perspective",
      "headline": "Targeting Hezbollah Amid Regional Tensions",
      "summary": "Israel continues to strike Hezbollah targets in Beirut, asserting its security interests amidst a fragile US-Iran peace agreement. These actions have drawn condemnation from the US.",
      "tone": "defiant",
      "latestSinceUpdate": 973
    }
  ]
});

export default LATEST_SNAPSHOT;
