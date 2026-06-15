export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 973,
  "lastUpdated": "2026-06-15",
  "lastSyncedAt": "2026-06-15T01:42:22.090Z",
  "warDay": 108,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-15",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.6,
    "durationDays": 3,
    "summary": "A peace deal between the US and Iran has been reached, but its stability is threatened by ongoing Israeli military actions in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 48,
    "oilDisruption": 30,
    "tradeImpact": 22,
    "sanctionsPressure": 54,
    "globalPressure": 55,
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
      "date": "Jun 12",
      "text": "US and Iran confirm a peace deal is reached, including arrangements for reopening the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQNEFmTFFKRUowR2l3c1Y5cFJlSGFjWDgzeDljakxTUERYa196SWRqMkx0eWhPYTdud1h5dEVvRzU5dkxRNUxIWjBUUElfRGhQQ25pU3ZJLXNlMTNqZWFaRmlaa05qRXJick9SVGVKSjJQanJuSzRLYzBnWU51UVRETVd6MGFMY2R4aHU1M1J3ZWl6ZnoxY2hJVndKMTJNMWxMYmJ3bm1OdFBEb0NWOEFCdENkOXRtX2tRb090ZlMyONIBxAFBVV95cUxPRlpGX2ZCbWxibFBiaWdVSzFnZjdqMDN0d1dVNk1nT3MxTFE1ZDlGS1hhZ1BXZ3ZkN0RDRWs3Tk1rVnNDbXJ0dkNsUHFjUDNsVEtHNXZiNGFuUVFFdk54SVIya0MzRG84Uy04RkNXWGJiT1FYWVJ3QzNjRmVrcVhfOUJ4MHRheVR1ckpGZmVHZTNMbzlTY2JFY3p5R2FKeXcybFIwODMzOGRHeXUzSC1yS0IxeDZIeG5PYXJUdUprT3M4bHNI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 973
    },
    {
      "date": "Jun 12",
      "text": "Crude oil futures drop after Trump promises an Iran deal will be signed Friday, leading to the Strait of Hormuz opening.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE5haEM4X1FiUnFNQmNfaWRyNDF4Wkt4X1FycGt0UVJYcWdib21PTmk2UlA2R0ZLeUU2Qlo3N3B3WnJJR2x5UkNHc2ZVUW1vTlNCendkNmU2VmFCOVNXaE54SlQ3cnZjcGhUR1UzaXB1QmZHejhqUTRRaC1zOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 973
    },
    {
      "date": "Jun 12",
      "text": "Israel strikes Beirut suburbs, with military saying Hezbollah targets were hit and at least three killed.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxQOVpQanNKWGRXX2lLcXQySlpYZnc1R3VrdGp0MWpDUk1kRE85RnZGU01wZ1h1YlozNm1pWDdZZGc4SnJMd0tCWTI0Mzl1VnV3ZW5RUkhGUW5OZFR3aFo5d25sZU1wcmVfXzJjUVFBajAzZDR2emlQak1OU0RJSVA5VXJud3J1bGdhZkNmektidzA4WjRxVjg1WFhFQUR5aTBMdFV3Z1poY3MtLTNGcUM5Q0dGbGHSAboBQVVfeXFMUEhiTEZDaXU3UXVyaXBpNjNPNUpYUHJSMk1ISzd1eFh2NTFaajhDQWl5THJnUVFEQWZfd0kzOUZMTUFQRmlDc1c1a1ZPY1RxandhcTN6YVdzX3FUdkRDTnh0QXo5RjhWeE9Od2dndHdnYnN4Vm9sLWVQVUlCbXJXMkRybHlmM1lXRy1Od0ZRbFZ6LXJ1UGh2NWN2VXhhRjRIUkdLd3lRemRSV1lSblFzQTF0RHdDMkxKUWd3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 973
    },
    {
      "date": "Jun 12",
      "text": "Trump condemns Israeli strikes in Beirut, warning that attacks threaten the newly reached US-Iran peace deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTE5ZMkJzclp6eXBUU1dnMDVfRWZnYTBSNVRiSEhFZFVyU2RpdGVIa3JDeXNkRXhoN1ZQcklLU3dSN3RVOHBQQk1NQ253SFZiV0VxRHJ3OTQzM3NRYS1FVm56M1FUOUdjM2ZxYzJhdXhEcHBqT2taV3UwY3p3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 973
    },
    {
      "date": "Recent",
      "text": "US military made plans for a ground mission to secure Iran’s uranium if a deal was reached, but Trump paused it.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxOa0V0ay1reHR2RFF3YjFjejU0YVVqSTR6TWNBVTlQb2FJNDFEeGFxeVBHTjFQMTNhQ1hURVBtSXNHZEFUTm1jN0x6YUJlY2Flajd4TGJwTzhLc0tsVllESHJ1T2JNQ0RiQS0tVnFtcUtCRldoV2h3NFByUHhhVWRqR3hZVEE0djlIQkJF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 973
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
