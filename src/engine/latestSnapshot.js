export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 974,
  "lastUpdated": "2026-06-15",
  "lastSyncedAt": "2026-06-15T07:02:23.098Z",
  "warDay": 108,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-15",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 3,
    "summary": "A peace deal between the U.S. and Iran has been reached, including an immediate end to military operations and the reopening of the Strait of Hormuz, though Israeli strikes in Beirut raise concerns about its stability."
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
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.2
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 30,
    "oilDisruption": 15,
    "tradeImpact": 8,
    "sanctionsPressure": 55,
    "globalPressure": 52,
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
      "date": "Jun 15",
      "text": "U.S. and Iran confirm a peace deal has been reached, including an immediate end to military operations.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQNEFmTFFKRUowR2l3c1Y5cFJlSGFjWDgzeDljakxTUERYa196SWRqMkx0eWhPYTdud1h5dEVvRzU5dkxRNUxIWjBUUElfRGhQQ25pU3ZJLXNlMTNqZWFaRmlaa05qRXJick9SVGVKSjJQanJuSzRLYzBnWU51UVRETVd6MGFMY2R4aHU1M1J3ZWl6ZnoxY2hJVndKMTJNMWxMYmJ3bm1OdFBEb0NWOEFCdENkOXRtX2tRb090ZlMyONIBxAFBVV95cUxPRlpGX2ZCbWxibFBiaWdVSzFnZjdqMDN0d1dVNk1nT3MxTFE1ZDlGS1hhZ1BXZ3ZkN0RDRWs3Tk1rVnNDbXJ0dkNsUHFjUDNsVEtHNXZiNGFuUVFFdk54SVIya0MzRG84Uy04RkNXWGJiT1FYWVJ3QzNjRmVrcVhfOUJ4MHRheVR1ckpGZmVHZTNMbzlTY2JFY3p5R2FKeXcybFIwODMzOGRHeXUzSC1yS0IxeDZIeG5PYXJUdUprT3M4bHNI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 974
    },
    {
      "date": "Jun 15",
      "text": "Trump authorizes the removal of the Navy blockade of the Strait of Hormuz as part of the deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTE1lN3kxUnRDcG5rNVdsdGtnSDE3dWZuZVhlVWp2N2dkM0VZeGNDX0dXSmdtdFRjUFBEWEdRelktYmRUU25tUmFjUEVqWnQ2Z21iRzlIbjFrSl9fS3FSMVRWNDluOWdCQTRuWTZEOFBNQms2WG1wNkRQRWpoZlJGUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 974
    },
    {
      "date": "Jun 15",
      "text": "Israeli military strikes Hezbollah targets in Beirut suburbs, escalating fighting with the group.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBaZVE2UC11VHhpR2ZqaHlpQ2M4dlBxc1VPX2M1ekdRRXN6blAzcXdHbE5EV2JOYkkyU2lpWmRNeEgzYVVsd0tIYmthcTg3Z1FnSFppSEZnWVB0UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 974
    },
    {
      "date": "Jun 15",
      "text": "Trump condemns Israeli strikes in Beirut, warning they threaten the newly reached U.S.-Iran peace deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTE5ZMkJzclp6eXBUU1dnMDVfRWZnYTBSNVRiSEhFZFVyU2RpdGVIa3JDeXNkRXhoN1ZQcklLU3dSN3RVOHBQQk1NQ253SFZiV0VxRHJ3OTQzM3NRYS1FVm56M1FUOUdjM2ZxYzJhdXhEcHBqT2taV3UwY3p3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 974
    },
    {
      "date": "Jun 15",
      "text": "U.S. military making plans to secure Iran's nuclear materials if the deal is reached.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTFB4cWZMcjNVMnRkWlJ6eGlEV3ZndVBtRFZadXg1aUxUYnNpZGdZb3hrZGJzS0FYVzFRUkRUT0wyLW40Q3ktN3lhUG1mcm9KOEU0ZTZ2RVNOZmFWRDc2RHhMOWUwQWt2SWJqWjdIOThNbkkxUFRGMzhid3p5TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 974
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
