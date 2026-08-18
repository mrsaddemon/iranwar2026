export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1984,
  "lastUpdated": "2026-08-18",
  "lastSyncedAt": "2026-08-18T18:12:59.936Z",
  "warDay": 172,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-08-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "The US-Iran ceasefire has expired, and diplomatic talks have ceased, while a separate ceasefire in southern Lebanon appears fragile with ongoing Israeli strikes."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Aug 17",
      "text": "Deadline to reach US-Iran deal expires, President Trump threatens Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9HMS1FenJqYXZEVWlWMHdLX0lUSzdnMmdNVG9rakl3ck5wVGNCVEJHZWc0TlM3dnpvS2lxYldUR1lBek1WUWhOc2ZpbTFZM0w1M1pPOER6czIyWUhTdkl3SmpSMlptTnZUZWU1aXNB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1984
    },
    {
      "date": "Aug 17",
      "text": "Israeli strikes in southern Lebanon kill 11 people, according to health officials.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1984
    },
    {
      "date": "Aug 17",
      "text": "Brent oil rises above $90 as Iran rules out interim deal extension and threatens to escalate conflict.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTE9DeURSb2RBZ010MURVZDdZV3p4ckVPdHBtZy1BeElkRlhWbGVheERZdWplcUN1dlNkbVpITmV0bHk0aGlIejcwU2ZqbTZiUUtTN09kMVBsSzVGaEk0SG9qM3ppRk5WYWVjVmExOFo4UWtoRWtKTkswT1B30gF_QVVfeXFMT1pWTkNWTkhXLUhqMFhINFUtRjJSRFZjbXdBb0pDTTFCcXQyMndfME9ibWVkQjFPYkNtel9CWVVMYWZmam5HODN0YkhpdjJ5ZTVoQUF3UHdTXzR2QUdqNldyQkpyUWUwMzI3V3dIamExVzlYOFV6TDhvSTJDNUdSMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1984
    },
    {
      "date": "Aug 17",
      "text": "President Trump states no talks are taking place with Iran, as global oil prices reach highest levels since July.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1fR1lNM2lVdG9Kak5IZkdlRWgzQzNVUHVrRU85ZUZ5MzJNX2hkcktWdkt6aW9jMmhjRDhEbUxnQktEbHQxXzFMbGQyT2xtYTJmQ2E0VDU0NTRBOHpuRjNCQW0xZmlVWENybGgzVGd3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1984
    },
    {
      "date": "Aug 17",
      "text": "Iran declares preparedness for a larger war, fearing US talks were a cover for an Israeli attack.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1984
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
      "perspective": "International Community",
      "headline": "Calls for De-escalation Persist Amidst Ongoing Conflict",
      "summary": "International observers continue to emphasize the need for diplomatic solutions to prevent further regional instability. Concerns remain high regarding humanitarian impacts and the potential for wider escalation.",
      "tone": "anxious",
      "latestSinceUpdate": 1867
    },
    {
      "perspective": "Israel",
      "headline": "Security Operations Continue to Address Persistent Threats",
      "summary": "Security operations are framed as essential for national defense against ongoing threats in the region. The focus remains on neutralizing perceived dangers and ensuring long-term national security.",
      "tone": "defiant",
      "latestSinceUpdate": 1867
    },
    {
      "perspective": "Iran",
      "headline": "Regional Actors Assert Influence Amidst Geopolitical Tensions",
      "summary": "Regional actors continue to assert their influence, supporting various groups in what they describe as resistance against foreign intervention. The narrative emphasizes sovereignty and regional power dynamics.",
      "tone": "defiant",
      "latestSinceUpdate": 1867
    }
  ]
});

export default LATEST_SNAPSHOT;
