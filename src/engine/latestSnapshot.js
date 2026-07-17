export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1345,
  "lastUpdated": "2026-07-17",
  "lastSyncedAt": "2026-07-17T22:27:23.061Z",
  "warDay": 140,
  "summary": "The US continues its seventh consecutive night of strikes against Iran, which has retaliated against a US base in Qatar and escalated attacks on shipping in the Strait of Hormuz, raising fears of a wider regional conflict involving Hezbollah and Israel.",
  "lastNarrativeUpdate": "2026-07-17",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No ceasefire is currently active amidst escalating conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Jul 16",
      "text": "US launches 7th consecutive night of strikes on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOd3lSdFRQZlgtMENkT0RZVFRRcXhQcTNEWm1mVUFacjdZX0F2VXRQbGh1TnFyejFYcldIVWFkdjZZdXJsZk93dGlwMWhCNVpqMmN1NGhFMGtEQlVmQW1Ba3RPTEdTRVdqTTByamhubG5tWFgxb1p5NjdweFF3N3dIX3E2MzhfLVBKVzZZM1pOcWhxcnhIcVR0Z1JqdEVVWExzTDlheTJxOV9iZmtRY0poOFNDNnNGTDNKOWFGakJlc9IBxAFBVV95cUxOUTBWOUczSEhTSVBKdlVkeERTdE1uYTFwUEI4OGVxZkhQUjVBMXhSR0xFdktMcTk0MFUzUU51YnZJYk9jYWMtemkwcXE2Nmg3c2FfamhJZ2RoaGxTcGV3bEtaazZ0bkJSZnpMV1BHVFcyNFlfWndMYWZnS2hpdWZSNElELXItdTh6SXNaT09GQjZqcjlXRTNhdV9GOElvbXhKX0l6R2tkTEM3dXFrZUtNN1lZRHI3R2dLZHRXeWdncjBHOUJP?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1345
    },
    {
      "date": "Jul 16",
      "text": "Iran Guards say attack on U.S. base in Qatar meant to 'punish aggressor'.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1345
    },
    {
      "date": "Jul 16",
      "text": "Iran threatens to lash out at Arab neighbors as US ramps up strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTE5jTVhZd0FfWURfdTk2dk1XM0NKMDdlNG1OeW5FSVd0Y3lGTHJmcjBmRVllTGJPbjIwWkFKRUFVOF9uN0MyRUc0LUxrYWJWd1czeWtSZ05iVUxMZVpSOEN5Z1pVZE5CUjVTbDE0OHJISGtudmVtN2JOYnkyV2UzUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1345
    },
    {
      "date": "Jul 16",
      "text": "US expands Iran strikes, hitting airport, bridges and communications tower.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTFB0V2lEMjl3REM1d2VhZEEyMmZyRG9LMHZOSk8wUXotakwyRDkzVkphQjBvRVF2M0NtX1pfNmZLSXF6OGpkakFnRTJ6N3VjTy1DcFdKQ1Jn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Ynetnews",
      "latestSinceUpdate": 1345
    },
    {
      "date": "Jul 16",
      "text": "Oil tankers face 'worst case scenario' in Hormuz as Iran steps up attacks on ships.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxPc2ZkclBjdExUQmlrZURuWWltMFBvUmFEN3VVSkZDT0Y0ckZUZXRCU2pFV2NKeWUtek5IQ3Z5dUVkQzFOSHczUFVDT19fc0FBTUZWNGVRZUJVY216Rk05RkwyVklqTXlxTzZVczIyYjZINlRTZVpmVmFyRkVzcHpfallaeDRWR2tNeVVvdDZBYkttRjFUNHI00gGcAUFVX3lxTFBtUFFBeloxLXJKUXdIWkJTSHBoWERCNkV3WlN4OWFuaWIxQWJlWnBjcVYyUng0VDdkc21rMk90czUzdnd2ekJEOVUwbWFTLU9ja25LTDRteEJpaXhXVnVHTWFFZXlLNWlvODRIRUxlYW0zcWFwSzBxSWJSSUFYQnFQSFRKMy1kN1JTZ09GcE1WRnZlczV5ZVlxd2FweQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1345
    },
    {
      "date": "Jul 16",
      "text": "Strait of Hormuz Tanker Traffic Erodes Further as Oil Prices Rise.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxNZk9iNXJ3ZzktdVpINVZWV3FVeVZtUVlkWGl6VW9oMm0xdlVlOGpQZmVTWmtQT0dwcnZPNzZpYXlCVnRtbUNSdHRMZk5EczM1OHRfYVRWQnl3VGI2TkMxaGhtWGxMa0xJV2tMSlVaOXRmcEhTYkNuOTk5WEE3d1ZVZQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1345
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
      "perspective": "US Strategic Interests",
      "headline": "Protecting Hormuz, Expanding Strikes",
      "summary": "The US states its ongoing strikes are defensive measures aimed at protecting vessels in the Strait of Hormuz, despite expanding its campaign against Iranian targets. This reflects a strategy to secure vital shipping lanes and deter Iranian actions.",
      "tone": "defiant",
      "latestSinceUpdate": 1331
    },
    {
      "perspective": "Iranian Response",
      "headline": "Countering Aggression, Claiming Targets",
      "summary": "Iran asserts its right to respond to US aggression, claiming successful counter-strikes against US assets in the region, such as the Fifth Fleet in Bahrain. This narrative emphasizes Iran's capability and resolve to retaliate.",
      "tone": "defiant",
      "latestSinceUpdate": 1331
    },
    {
      "perspective": "Global Energy Security",
      "headline": "Bypassing Chokepoints Amid Conflict",
      "summary": "Major oil companies are actively exploring alternative pipeline routes to bypass the Strait of Hormuz, signaling significant concerns over supply chain stability amidst the escalating conflict. This highlights the economic impact and efforts to mitigate disruption.",
      "tone": "anxious",
      "latestSinceUpdate": 1331
    },
    {
      "perspective": "Regional Stability",
      "headline": "Containing Proxy Conflicts",
      "summary": "Regional actors like Syria are working to interdict arms shipments to non-state actors such as Hezbollah, indicating efforts to prevent wider destabilization. This suggests a complex interplay of state and non-state actors in the broader conflict zone.",
      "tone": "strained",
      "latestSinceUpdate": 1331
    }
  ]
});

export default LATEST_SNAPSHOT;
