export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 539,
  "lastUpdated": "2026-05-07",
  "lastSyncedAt": "2026-05-07T01:18:21.916Z",
  "warDay": 69,
  "summary": "A fragile ceasefire is in effect between parties, marked by ongoing Israeli strikes on Beirut and US attacks on Iranian-flagged vessels, while diplomatic efforts for a peace deal continue.",
  "lastNarrativeUpdate": "2026-05-07",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 15,
    "summary": "A ceasefire in southern Lebanon is fraying due to ongoing Israeli strikes and missile activity, despite diplomatic efforts for a broader peace deal."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "date": "May 05",
      "text": "Trump threatens ‘much higher level’ attacks if no deal is reached with Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPQVJMYnBuUmwxaFpFSXhhNnRoTkQ4RGNIS29nbldTVHliSVlobjJnaWNlMmgzd1ViUVJlWHFDRmFkUmFYamVzSE9PMmRELUdncDVaVHpZZE03VDhiZkdHVWFnSGt2M051c3Z5bWdoZmhGQ2hwRThscEEtdjdWZk5nTHp5V2JseWNoSmhjdE5IVjN3cVNaTEZfTmx5ZkxkTWQ3NS1QZmJBVU8zQVpHSU9odU5JVWRMaUFwS2fSAb8BQVVfeXFMT2ljb0NuNjFFbUtjWFZmVks5RWNJZS0ydmRpVjhJY2d5dTBaM3FDUUg2Z0FqQ1d0bjNhOG9KSzR4bndQVGRILXRkVzhaWmdJQ1ZXb3dlZjB3eWFrSWNxR29Bd2Z6YmhKbEZXdVU3Umc2ejdSc002ZUZGV21HMVRUTUNTd2J4Z0RvRFZDbW5DMWJsVjg2SHpVRVUzZDk1YjNnMGVpa0JCMHhlTkRMcFludTBkRk9RWVFCZXlKR0hmd00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 539
    },
    {
      "date": "May 07",
      "text": "Iran is reviewing a US proposal, with both sides reportedly moving toward a memo to end the war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxPU0NNTnM1Vkp6QkQzNWF0dVZGUF9xNUZXYnp2Yms0TS1IZU5lLWVsem5MUmpZM2RTQlNSbVBmUWRLenNnSnZtRm10Q21GVjhYcHVMamt3ZEp3YWF4aWRnNkJYYVRGMVJCazZwbjNuY3BUNnJmaWJ0MzE3WHMtLWo1Q0p5UkI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 539
    },
    {
      "date": "May 07",
      "text": "Trump and Rubio insist the Iran War is over, despite reports of missiles flying during the cease-fire.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 539
    },
    {
      "date": "May 07",
      "text": "Israel launches an air strike on Beirut, marking the first such action since the Hezbollah ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1wYXVhZ1d1eFNsUkd4ZlRDbS1Qd3ZkUmVhaEFhZUJlLVdwTkotdi1keHdEQXJvNk9WOHNCb0FiZWlGNG5KTjNpRG9EX1l0OVRTaXc4Zy1BSkFJUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 539
    },
    {
      "date": "May 07",
      "text": "US military attacks an Iranian-flagged tanker attempting to breach a naval blockade in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxQZTR1aVI5WkV2VFlBMUl2OC1JVkxvTXhzcVljWDNzdVctSk1rV3YtNjhsX1BhQXl1QlVLSUFtMTdSZjhQSkZHZDJrNDRLVWt6WVpfOXh5b0ZMUlQ0S2lDSE9oTmkwdjBEX2dKRnpWNlFLNWstcWlYLVRkZGdlRDlKd0FPWndiQdIBiwFBVV95cUxQUnl5Zmttc3NNTHdkWlIwQ3d0NWdRc1hvVVRpWEdEYWQ1TkhjZV9BZXVNbDdvbmNtQ3UxdzNHTnZVdkRQVEJXY291ZGZnTHc2bjBJTURib20tZGdhYVJwN3oyMzMzYVpyQVNoTXNhaGpWd1JpN1FOSVdNdW1EUnVUV1pnY3BsOTFOSnp3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 539
    },
    {
      "date": "May 07",
      "text": "France moves an aircraft carrier group toward the Strait of Hormuz for a possible defensive mission.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPa056TVJvdEI5ZWcxRnI4aTA0SjE0bjY3NnRZcHRVRFhFSXBRUXVaQThrSVE4OVQ4Y0xuQnNxNWREcFNxMFFBMEJEOUc2ODZ0MW44Y1VNcDdaZHJGcXBmdU5lanRuY3FmZzZXMlJDakJzYmJXR0hvdzJQUnVZVkVXdlAtZFlrY0FXYnZSRjVEbjF6akNtOHpVZzBLbG9BVVgwSGZ1TmhTdzhrMFVRNlc4eXRKc1BzNjdndmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 539
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
      "perspective": "US Administration",
      "headline": "Trump Declares War Over, Pauses Operations Amid Deal Progress",
      "summary": "The US administration, led by Trump, asserts the Iran War is concluded and has paused 'Project Freedom' in the Strait of Hormuz, citing progress on a peace deal. However, this stance is contradicted by ongoing military actions and threats of escalation.",
      "tone": "strained",
      "latestSinceUpdate": 539
    },
    {
      "perspective": "Iran",
      "headline": "Iran Reviews US Peace Proposal Amidst Ongoing Tensions",
      "summary": "Iran is actively reviewing a US proposal and is reportedly moving towards a memo to end the conflict, indicating a diplomatic path forward. Despite this, reports suggest Iran has hit more US assets than publicly acknowledged, maintaining a defensive posture.",
      "tone": "anxious",
      "latestSinceUpdate": 539
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Israel Strikes Beirut as Hezbollah Deploys New Drones",
      "summary": "Israel has launched air strikes on Beirut, marking a significant escalation since the Hezbollah ceasefire, which is now described as fraying. Hezbollah is reportedly using new FPV drones, posing challenges to Israeli forces and contributing to the instability in southern Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 539
    },
    {
      "perspective": "Global Security & Energy",
      "headline": "Strait of Hormuz Tensions Drive Oil Prices Up, France Deploys Carrier",
      "summary": "Tensions in the Strait of Hormuz, fueled by US-Iran confrontations, have led to a rise in oil prices and prompted France to deploy an aircraft carrier group to the region. This highlights global concerns over maritime security and energy supply disruptions.",
      "tone": "anxious",
      "latestSinceUpdate": 539
    }
  ]
});

export default LATEST_SNAPSHOT;
