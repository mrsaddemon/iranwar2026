export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 543,
  "lastUpdated": "2026-05-07",
  "lastSyncedAt": "2026-05-07T11:57:31.239Z",
  "warDay": 69,
  "summary": "Negotiations between the US and Iran are ongoing to end the war, while Israel has launched air strikes on Beirut, violating a previous ceasefire, and tensions remain high around the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-07",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 30,
    "summary": "The Lebanon ceasefire has collapsed following Israeli air strikes on Beirut and Hezbollah rocket fire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "May 06",
      "text": "US states the offensive phase of the Iran war is over and Tehran will not control Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQdmRpRkhuTGluWFQ4endRY0lSaW1BVG1KTDdOLTZEQVc1QXlmaXd5Q2ZsMlJNa3cyMHEwR05HZFRRUFBDS0syaWRPdGdBel9fRkdqNzk1anNuN2JvdW9Id19KZURKVjkzb2V4bE9lczBwU3lHSjMzS2k2TXZDRlFxbFFLbUx3NDVhVVJ6T0E4cjBGTHJrOUtYS3JwVDNCRGhWNm04SnNwTmY4N0g1T1VTSzhTdXJvT2fSAbwBQVVfeXFMT1gzTVdUbGZIZE9vVU9PelBYSkNYQzdJcGJ5WUdqQlhTeGdEMkZOZmZQbVo2UDF6ZWpYNDJlb1JodlhId2dnVTdBNUhZSG9SQ09iMy1ES2VCRkJQNDVUbUFuNVNuNUtfRlc5SFVuMmlwWUUzdEp5UmtVZjRsVkZmLUdUVElLUTdnc0tScy04RmxjNlhsRXJvLUE2UlcyRHJ4UlV0WWZTdE1XWXlKcTZqdVltWmRvWlRsa0hvcW0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 543
    },
    {
      "date": "May 06",
      "text": "Iran is reviewing a US proposal, with sources indicating movement toward a memo to end the war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxPU0NNTnM1Vkp6QkQzNWF0dVZGUF9xNUZXYnp2Yms0TS1IZU5lLWVsem5MUmpZM2RTQlNSbVBmUWRLenNnSnZtRm10Q21GVjhYcHVMamt3ZEp3YWF4aWRnNkJYYVRGMVJCazZwbjNuY3BUNnJmaWJ0MzE3WHMtLWo1Q0p5UkI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 543
    },
    {
      "date": "May 06",
      "text": "Israel launched an air strike on Beirut, marking the first such strike since the Lebanon ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxPTUU2emZXNHZiQ3V3dHVuMklCOHI3TzZRWTZRM2laZEZwZFdvcm14Qm1SaTJhbWhDcUdYZklQNnpBZ0laZmRZODhGbXF0NTNXUWV0aElZNVJDNG5EWmNQOHFFVjJTS0hnRTZLekhoUDhDUkxZX2dIUWVCa3pvcVJ6UFVwN29YQ2pxM1ZuTjJlRDBOOTRMYnoyY0VmZ00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "DW.com",
      "latestSinceUpdate": 543
    },
    {
      "date": "May 06",
      "text": "The US military attacked an Iranian-flagged tanker attempting to breach a naval blockade.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxQZTR1aVI5WkV2VFlBMUl2OC1JVkxvTXhzcVljWDNzdVctSk1rV3YtNjhsX1BhQXl1QlVLSUFtMTdSZjhQSkZHZDJrNDRLVWt6WVpfOXh5b0ZMUlQ0S2lDSE9oTmkwdjBEX2dKRnpWNlFLNWstcWlYLVRkZGdlRDlKd0FPWndiQdIBiwFBVV95cUxQUnl5Zmttc3NNTHdkWlIwQ3d0NWdRc1hvVVRpWEdEYWQ1TkhjZV9BZXVNbDdvbmNtQ3UxdzNHTnZVdkRQVEJXY291ZGZnTHc2bjBJTURib20tZGdhYVJwN3oyMzMzYVpyQVNoTXNhaGpWd1JpN1FOSVdNdW1EUnVUV1pnY3BsOTFOSnp3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 543
    },
    {
      "date": "May 06",
      "text": "Hezbollah fired a rocket barrage at IDF soldiers.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxPTzdfUTQ0NVBQdzlDT1pjcEJvYWs2akJoaVYtM3JyYWZQZkMxWmZYV296MmJnVnRSUDhQNk9sVDNhd09SUS1Nd2lBSlZsZ3lOZ2FVc1dwc21iZHZPRmJscHNfMXc3TS1EZkFqU3l5NmtQOThFeGZkUnNYV09MOFFhUndBcjFMdm9pUDRB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "JNS.org",
      "latestSinceUpdate": 543
    },
    {
      "date": "May 06",
      "text": "Israel carried out a strike targeting a commander of Hezbollah's elite force.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxOU0NzNnBsd0NhQ1AtUndrbXQtNWRKdkRYV2lUb09XWWFRV0lXcVRVTjYzd3Q3VjFGcWxwelIzN3p4ekd3ZEF4OUJjM2N1Q19paWNiUnZKbFh0THpFbnB5T0JIdEEtRHBhQXg4dnY1Z0t0ZW1YWDZpRTltV0pBUEdoYzBqWTRsS2tmVlE3UnlJZ2JtZTlaQTVyc2tpcWhGR2lCZDF1eFh6Q3FWQldhdGtxbkl6UUlrNjQ5UDlR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 543
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
