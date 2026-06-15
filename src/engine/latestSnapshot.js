export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 977,
  "lastUpdated": "2026-06-15",
  "lastSyncedAt": "2026-06-15T21:25:35.670Z",
  "warDay": 108,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-15",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.6,
    "durationDays": 1,
    "summary": "A tentative agreement to end the US-Iran war and reopen the Strait of Hormuz has been reached, but ongoing Israeli-Hezbollah conflict threatens its stability."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.4
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
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
      "text": "U.S. and Iran reach framework agreement for peace, including reopening the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 977
    },
    {
      "date": "Jun 15",
      "text": "Trump claims the Strait of Hormuz will be 'permanently toll-free' under the agreement.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 977
    },
    {
      "date": "Jun 15",
      "text": "Israeli military strikes Hezbollah targets in Beirut, killing senior commander Ali Musa Daqduq.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBaZVE2UC11VHhpR2ZqaHlpQ2M4dlBxc1VPX2M1ekdRRXN6blAzcXdHbE5EV2JOYkkyU2lpWmRNeEgzYVVsd0tIYmthcTg3Z1FnSFppSEZnWVB0UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 977
    },
    {
      "date": "Jun 15",
      "text": "Trump faults Israel's Beirut strike and urges a stand-down, warning against jeopardizing the US-Iran deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE00bzAyQUpFVVFHOWtkLWtJTzk0NlEtTGMzQWhkclpfY1JEcUhkTWExbXhvWmlqX3JYT1g3ajlLNUdUcktGTTVKSzZqR2pXcTE3Q0ZLUk81RGdrOHJzU3VfUkxYUzNMRnEwWmlYbm1oSEp0U3VlSjUtSndOUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 977
    },
    {
      "date": "Jun 15",
      "text": "U.S. military is making plans to secure Iran's nuclear materials if the deal is reached.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTFB4cWZMcjNVMnRkWlJ6eGlEV3ZndVBtRFZadXg1aUxUYnNpZGdZb3hrZGJzS0FYVzFRUkRUT0wyLW40Q3ktN3lhUG1mcm9KOEU0ZTZ2RVNOZmFWRDc2RHhMOWUwQWt2SWJqWjdIOThNbkkxUFRGMzhid3p5TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 977
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
