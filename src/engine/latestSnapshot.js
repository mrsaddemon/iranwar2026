export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1355,
  "lastUpdated": "2026-07-18",
  "lastSyncedAt": "2026-07-18T14:10:45.291Z",
  "warDay": 141,
  "summary": "The conflict between the United States and Iran has intensified, marked by a seventh consecutive night of US strikes and Iranian threats of wider regional engagement, with infrastructure damage reported in Kuwait and Lebanon.",
  "lastNarrativeUpdate": "2026-07-18",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No ceasefire is active as conflict between the US and Iran continues to escalate."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
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
      "date": "Jul 17",
      "text": "US and Iran widen attacks with no sign of de-escalation.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9CRTdoVUhnVjkxYTZVWXJCdXRnWXVSZGkyeXJiOEg0MzRzYk9JWkQtbDFPZ3BxSVZMdTVxOG92aEg4YXo1dVdMcG1QNVFVSWJtT0dCU0xFUTY4ekZTYnJzV0szUC10UTlEY1JHRlRB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1355
    },
    {
      "date": "Jul 17",
      "text": "Bridges and water plants in Iran hit by strikes for the seventh consecutive day.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1355
    },
    {
      "date": "Jul 17",
      "text": "US attacks this month have resulted in 50 killed and 500 wounded in Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxOeExZQjNOMmxmMDk3OW92dGEzamZjRGZBZDJZR09Ha3hXaU0yX09LUFRybFRqdkhCWlA4XzFXMUZWb0xCS2FlV3prZWo3RHJCVVVYbmI4NXNLWU1jX2RxRld5THF3TldPTkVVdEJRXzZPQWthNkxNdllHeXpzZmxsUnFkZXpXZVlXLWl1SXp6Z2xXOUFmY2VJTG9mQlFYMExLU0tNSlFiUEFTclM2M1JZd29uQWEwNklQSEHSAb8BQVVfeXFMTllkczI1VmJNZG1JbUV1MnNEeTRZWFhycHFRSjh4RU5WcW1PU2hTU0FiS3JxTGpwUVc3VWNWaU1Wd2poNVFhS19TVWo3N0V3VGx0UFJhZHpfVDJGdGtBSEYtMHFIel9NQ0FyMGp3X1lrTkNDTlluZWFha0R0TWUtdDZnWDBaNm1RUGQxMmx0Z3VFU3J1azlLTEhUS0RjWW5NaUNTNDYxZ3dDRXRVMWxZSjR6UUVMdmlSSEhUV2RqV00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1355
    },
    {
      "date": "Jul 17",
      "text": "US and Iran trade strikes over the Strait of Hormuz, with Kuwait reporting infrastructure damage.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1355
    },
    {
      "date": "Jul 17",
      "text": "Iran instructs Hezbollah and allies to prepare for a wider conflict, potentially involving Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQRXBsVjMxOWtPTnVMLThiZWZ3VmY1ZmZySXpPN3BkZGp5c1RoNWxMMzNPTEpwUmtBSUljN3FBM2tEblc3cUFxU0hTS3BOMFBQTUZVUDBOaDQxUll2MnFNODVRcngtVkhlZjd4cEpVVGoycTY3ZDdWZTZOSUx3c3BaN1hfUGpQV2JmTVNxUENGRUFGSkVKUjBRZHF6dDQ1WXF5RlRDSnp3RXdlM2RPQ2NyYmZsZEJMUGR6WGUydFREa9IBxAFBVV95cUxPVWE3ak9DRkM3LXltUFpOeHdjV1JoZWZRUnI0cUhlbFVhdDdLcTduQmxSczQ5cVk3T2VMRlpRb1RoajNyM1hRb2RZMzdISFZFYjFNSGdURU1ncjNvQVo3TWxldmotRmRLUE5fMjJ6SFQzZWpvVm5WczZDY2lhZWp3NExoXzA3OW5QVURVR19iQUYzNXdjR3p3bjJOU0p5YzlUdEwtZzh3c011UmRJbFBCS2N5QWlJUE0xMnV4MFE4RVBDV0Fr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1355
    },
    {
      "date": "Jul 17",
      "text": "Israeli army destroys three schools in southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxNbW1ReVZ4eDRZTktQZEdjRm52YUdhWE04Zk5xVUNjcXkxTFJpdjl4WDJFUTZKdUZDNDNGWGZINDFPdjgwc0V4bzNzV3hWTkZNalpibS1vaW8yWmplNzhXQnVERVpnUFdDb2R1VndkUWpSZTJsekJJZkZ5cFpnWS1tWGxnR3F2dEw5dFNzV0RqU3p2N0F3M1prRXhaeTZ4eW1pZkdramxuVXU0QWc0Z0l30gG0AUFVX3lxTE9xQzZHMlRZUFlHaUVIN1N0bXV1U0ZhSFYwSU9MZ2dYVTk3eWRqMFV1aUo0dXpuc2tkLUhUZTRiZzBJMWtUOEZ2a1pjZWNhZ2VCODJ3MV9CelVPUGVTTDBTMUVON1ZsM09XU3MtRk9YUVp4cGh2OS1iWm42TG1lSUZsZVhMNG5JTmFtRkE0SEVKREZHRWtlamtUNWtVZzl4ZVVJTnkzMFYxNFpyR3NNc2FfU2NxcA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1355
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
      "perspective": "Iran's Stance",
      "headline": "Iran Punishes Aggressors, Prepares for Wider Conflict",
      "summary": "Iran claims its attack on a U.S. base was punitive and states it 'never welcomed war', while also threatening Arab neighbors and preparing allies like Hezbollah for a wider regional conflict that could involve Israel.",
      "tone": "defiant",
      "latestSinceUpdate": 1347
    },
    {
      "perspective": "US Military Action",
      "headline": "US Expands Strikes and Blockade Amid Escalation",
      "summary": "The United States has launched seven consecutive nights of strikes against Iran, expanding targets to include infrastructure like airports and bridges, and resuming a blockade in response to Iranian attacks in the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 1347
    },
    {
      "perspective": "Regional Instability",
      "headline": "Hormuz Crisis Deepens, Wider Conflict Feared",
      "summary": "Concerns are rising over the security of oil tankers in the Strait of Hormuz, with reports of Iran stopping ships and warnings from a maritime risk CEO of a 'worst case scenario', alongside fears of a wider regional conflict involving Israel and Hezbollah.",
      "tone": "anxious",
      "latestSinceUpdate": 1347
    }
  ]
});

export default LATEST_SNAPSHOT;
