export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1962,
  "lastUpdated": "2026-08-18",
  "lastSyncedAt": "2026-08-18T04:54:27.180Z",
  "warDay": 172,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-08-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.95,
    "durationDays": 60,
    "summary": "The US-Iran Memorandum of Understanding (MoU) extension was rejected by Trump, and the ceasefire has expired, leading to increased tensions and threats of escalation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.45,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 78,
    "tradeImpact": 57,
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
      "date": "Aug 17",
      "text": "US-Iran deal deadline expires, Trump rejects MoU extension and threatens Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9HMS1FenJqYXZEVWlWMHdLX0lUSzdnMmdNVG9rakl3ck5wVGNCVEJHZWc0TlM3dnpvS2lxYldUR1lBek1WUWhOc2ZpbTFZM0w1M1pPOER6czIyWUhTdkl3SmpSMlptTnZUZWU1aXNB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1962
    },
    {
      "date": "Aug 17",
      "text": "US claims control of the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPeFNEVEs5RGt0eGdpRzhOOTJFeGVVWTgzY0dXcW81aDZRLXM2U2pkUnI3czFzN09peXp3N3NySnRHT0ZDaFZOZ3JtVG4xb1pjeFJpanVpRlJROEgwSEdJNERFdWh2WG5iM09zYWdsV0JQLUdJQTQ4VHJHY1pxUFJSaGU1TkRnNjgwLUcyWFpNYlpMclVqN0xJWHhTLWZPdHE5djRKaF9oWHJhZllHaWJyUEFLQzBUeUxTUmhxSXBZZ9IBxAFBVV95cUxNcGxjek5ZME81SDl1ZmgwNEpDa3Zqdmh5V3NSSHpURmNTclVRcDFESFJXby1YM2pNUGI2LVc3dDdfMzhoX0VSdG5iQ2djREFhYXhmUWowWkM4VzNRcWs5dDhUYVFHR2dDd2FmZ1FLZUtYRmtLZ2g5SklRUkRaYTZNOWVSYm0tU1p6dlpXTXd1WDlWcEJOc0VrYnd3SEV5SFJnVVlyVWdwYk1tcGxaR2QyMHNKcXkzSnZES2FmRkttcFp0U19F?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1962
    },
    {
      "date": "Aug 17",
      "text": "Iran war pushes Middle Eastern airlines towards a projected $4.3bn loss in 2026.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxQWGJOWUs3azVwVUgtM3hHaW8xNTJFcFZReHJiUlRKeVM2c0lIY1YyOTBHQXdBUExMZDdLVXRURDFua0Y4b3RBYjBDZTR3Q0VIX2JRMF9KbTZzUlRzWXVTRDBycUVYZEdzRHpWTGxoWml4NVdLVWcyaFRlUE8yVmh0YXdRcmlDaXBxRFpLVnpuczY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Middle East Eye",
      "latestSinceUpdate": 1962
    },
    {
      "date": "Aug 16",
      "text": "Kushner meets regional leaders as multiple conflicts continue to affect the Middle East.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE40V2dqMUJIcWdndGVfSXlVeDRKbmkzU3hrTTRyeXBrSWR3NGtUNzNkSm54X19kcDNBNzJBaVV0NEJTNVdLVVRrUlNHLXZETnFwMEIyekJhOTduVWxZQWZyVW5WQ0xua1ByTDc0OG1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1962
    },
    {
      "date": "Aug 16",
      "text": "Israeli strikes kill 11 in southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBCRDVFUWZWd2tFVmZ6bm5fUld6aVBfSkhFTzZZYUhyYjl4M1pnc3pfUl82cTEtelV5cGxBem9JcWJQeXhxdVRtbWQxdFlSMXlsQUpOdUtwTzFRQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1962
    },
    {
      "date": "Aug 16",
      "text": "Brent oil rises above $90 as Iran rules out interim deal extension and threatens escalation.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTE9DeURSb2RBZ010MURVZDdZV3p4ckVPdHBtZy1BeElkRlhWbGVheERZdWplcUN1dlNkbVpITmV0bHk0aGlIejcwU2ZqbTZiUUtTN09kMVBsSzVGaEk0SG9qM3ppRk5WYWVjVmExOFo4UWtoRWtKTkswT1B30gF_QVVfeXFMT1pWTkNWTkhXLUhqMFhINFUtRjJSRFZjbXdBb0pDTTFCcXQyMndfME9ibWVkQjFPYkNtel9CWVVMYWZmam5HODN0YkhpdjJ5ZTVoQUF3UHdTXzR2QUdqNldyQkpyUWUwMzI3V3dIamExVzlYOFV6TDhvSTJDNUdSMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1962
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
