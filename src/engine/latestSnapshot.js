export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1644,
  "lastUpdated": "2026-08-08",
  "lastSyncedAt": "2026-08-08T03:52:43.195Z",
  "warDay": 162,
  "summary": "A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.",
  "lastNarrativeUpdate": "2026-08-08",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 60,
    "summary": "Ceasefire language is present across the source mix, but the model should still treat it as reversible under renewed violations or proxy attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.4
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
        "militaryPower": 55
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 38,
    "oilDisruption": 60,
    "tradeImpact": 34,
    "sanctionsPressure": 49,
    "globalPressure": 52,
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
      "date": "Aug 08",
      "text": "August 5, 2026 — Houthis claim to attack Saudi oil tanker, Trump says Hormuz reopening ‘soon’",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTE5OLXlSS3NsVWFKTGpWMnhoeEJVeEJSTThJMjhtTXJHWGR2TWRmV0R6cHhrLUctVEtCOVM1bk1FUGZlWFN4bVNvMGJIQm9CTnUxMjREc2M2NGZ3Z29SNW5fLWp1MkV1Y210RGhhMHNkWFdSSVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1642
    },
    {
      "date": "Aug 08",
      "text": "Iran war latest: UAE, Bahrain and Kuwait condemn Houthi attacks on Saudi Arabia",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxNVUhhNkk2U0E1aGxlSGh2emxEVnZnZWlZRnRzLVJvY29PQXp3S1VKX3ZsRnd3bWlQdmZfZmFvMFFZaDlEX2xWVG5IWmNDdTRZVXZONTd0MFFEYW1ZLXBHRkJ4dVRRUFF6V2VSdm5TZmpqWkIzdHl4bTlkWFdwTlpqcVB3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 1644
    },
    {
      "date": "Aug 08",
      "text": "August 6, 2026 — Trump says US has ‘massive amounts’ of munitions after reports of low stockpile",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9lbjJRUV9NcV9LdlpHdnVwSThzSGlOYWZjWW9SMU5KZHB5MmI3OHQ2Z0JPaHh2alF3Ym9pTHFDUWV1OEVUUnZtS1FwQXZwVGpIZmlOUWcyTGx3ZU5FZWRaelJnY05lWm5XZ1YxS3hB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1642
    },
    {
      "date": "Aug 08",
      "text": "EXCLUSIVE: US has used 'virtually all' of its long-range precision missiles during Iran war, sources say",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxOZjVoa01lTFhQYVMtVjRxRWZKSng1YzFUTTNJOVI1T1pWZVNKc1czOWhJWHB3VDFFWnVrY3lLT1FnSVBfU1M1RFdrU2FsYVlKZXdhVm9VbF9PaEFNeGVMR0ZtNmlEeGhkWG1iang1U0kzb3hmWENGSnNXODRzdnZYaE1LYkY4Vm1hbzJEcEl1ZzZIRVBQLS1nYUYyTWdDdjZjXzN0NmtuZm5IV2FEdlBQby1UUnBqc0FF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1642
    },
    {
      "date": "Aug 08",
      "text": "Iran Warns Gulf States",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": null,
      "latestSinceUpdate": 1642
    },
    {
      "date": "Aug 08",
      "text": "Iran war updates: Trump says US in talks with Iran, hopes for ‘good things’",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNdENxTVZ4dF90R0xReVUzUlh1dG1JeEd5ZGdPRFRlTlltYjZWcWhQcWlmcDhGMzhrTlgxVThFSk1xR3BMOU1lU1AwSGJZV1Q4eXNRcWhWQVNzelEtSTVTRlhZWXYyOEFrU25NdFdpN2duQmh6YUcwWklXTllJZnduMzllUndPMjdpcWM5cG15NjdqZ1ZlZTB3a3NxZjJIeGJMMGR0UjhaWHRzeUsyTVRDUnJfQVc3UFdYWWl2S9IBwgFBVV95cUxPY0NMOHJKUmVxVG9IU3ZhNjZFd0FLZTBYNWFjdmQxYUFYS3phTE9rRjExVm9ibHY3TTNxZEZMUnc0UnZQeFktbl9YZWlhNjh0SDhISV9OX3JEaW85QVM4blZwYkZuaUNTX0xUVW5MdE5xcEVPYjkyTWJoMkhiNlc2Q3VKUFdDZkpmbVZSRmRoSkNlWU5aN0FVa1JBUnQ5dENFYmJaOERPdUpUQkZWYTl5N1BaWjc5SWtNSFR0NkNNXzR0dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "aljazeera.com",
      "latestSinceUpdate": 1643
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
      "perspective": "US/Israel",
      "headline": "US and Israel Intensify Strikes on Iran, Target Hezbollah",
      "summary": "The US is planning and executing fresh, heavy strikes on Iran, often in coordination with Israel, while also targeting Hezbollah infrastructure. President Trump is reportedly pressuring Israel regarding a Hamas disarmament deal amidst the widening conflict.",
      "tone": "strained",
      "latestSinceUpdate": 1545
    },
    {
      "perspective": "Iran",
      "headline": "Iran Vows Retaliation, Threatens Hormuz Passage Amid US Strikes",
      "summary": "Iran has vowed to make the US 'pay the price' for civilian casualties and has responded to US strikes by attacking tankers in the Strait of Hormuz, declaring passage 'not feasible.' Iranian leadership urges citizens to stand firm against the enemy as strikes intensify.",
      "tone": "defiant",
      "latestSinceUpdate": 1545
    },
    {
      "perspective": "Regional Impact",
      "headline": "Hezbollah Adapts Tactics as Regional Conflict Widens",
      "summary": "Hezbollah is increasingly employing FPV drones, requiring Israeli overmatch, while the IDF continues to destroy its tunnel networks in South Lebanon. Iraq has denied prior knowledge of US-Saudi attacks, highlighting the complex regional dynamics of the escalating conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 1545
    }
  ]
});

export default LATEST_SNAPSHOT;
