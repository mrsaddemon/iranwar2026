export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 975,
  "lastUpdated": "2026-06-15",
  "lastSyncedAt": "2026-06-15T13:23:00.357Z",
  "warDay": 108,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-15",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.6,
    "durationDays": 3,
    "summary": "A tentative deal between the U.S. and Iran to end the war and reopen the Strait of Hormuz is in effect, but its stability is threatened by ongoing Israeli military actions in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
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
    "nuclearIndex": 55,
    "escalationLevel": 40,
    "oilDisruption": 20,
    "tradeImpact": 14,
    "sanctionsPressure": 57,
    "globalPressure": 57,
    "allianceInfluence": 68
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
      "date": "Jun 14",
      "text": "U.S. and Iran reach a tentative deal to end the Mideast war and reopen the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxORjlqRlNIOWFfNUJULW9jVHdCZzlZS0xaUXhuNXVhZDhkUmJveHI0eFh1cGhZM3ZQWFNMRXdkclVzT2k5N05INGJfQVNQSkcyYTRFRy1YbVdLbGxfSnZRQ0NqNTlCUFZaYTlHZFFCR1NQclN2eFhqNlBHSEtwdWoxQWRyN2xMZDhaaG52Q1pJSWJ5NG1LS1lQN0ZhS0d0UllPSjVaOVR2VXAyOHZvVi1JQlNPckVrc2ZMcWJPWW93?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 975
    },
    {
      "date": "Jun 14",
      "text": "Israeli military strikes Hezbollah targets in Beirut suburbs, killing at least three.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBaZVE2UC11VHhpR2ZqaHlpQ2M4dlBxc1VPX2M1ekdRRXN6blAzcXdHbE5EV2JOYkkyU2lpWmRNeEgzYVVsd0tIYmthcTg3Z1FnSFppSEZnWVB0UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 975
    },
    {
      "date": "Jun 14",
      "text": "Trump calls for restraint from Israel, warning against actions that could jeopardize the U.S.-Iran deal.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 975
    },
    {
      "date": "Jun 14",
      "text": "U.S. military prepared plans to secure Iran's nuclear materials if a deal is reached, but Trump paused the ground mission.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTFB4cWZMcjNVMnRkWlJ6eGlEV3ZndVBtRFZadXg1aUxUYnNpZGdZb3hrZGJzS0FYVzFRUkRUT0wyLW40Q3ktN3lhUG1mcm9KOEU0ZTZ2RVNOZmFWRDc2RHhMOWUwQWt2SWJqWjdIOThNbkkxUFRGMzhid3p5TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 975
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
