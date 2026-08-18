export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1988,
  "lastUpdated": "2026-08-18",
  "lastSyncedAt": "2026-08-18T20:07:30.308Z",
  "warDay": 172,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-08-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 60,
    "summary": "A ceasefire in southern Lebanon appears to be in effect but is being violated by both Israeli strikes and Hezbollah attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
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
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Aug 17",
      "text": "Deadline to reach US-Iran deal expires, Trump threatens Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9HMS1FenJqYXZEVWlWMHdLX0lUSzdnMmdNVG9rakl3ck5wVGNCVEJHZWc0TlM3dnpvS2lxYldUR1lBek1WUWhOc2ZpbTFZM0w1M1pPOER6czIyWUhTdkl3SmpSMlptTnZUZWU1aXNB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1988
    },
    {
      "date": "Aug 17",
      "text": "UAE detects two missiles launched from Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPeFNEVEs5RGt0eGdpRzhOOTJFeGVVWTgzY0dXcW81aDZRLXM2U2pkUnI3czFzN09peXp3N3NySnRHT0ZDaFZOZ3JtVG4xb1pjeFJpanVpRlJROEgwSEdJNERFdWh2WG5iM09zYWdsV0JQLUdJQTQ4VHJHY1pxUFJSaGU1TkRnNjgwLUcyWFpNYlpMclVqN0xJWHhTLWZPdHE5djRKaF9oWHJhZllHaWJyUEFLQzBUeUxTUmhxSXBZZ9IBxAFBVV95cUxNcGxjek5ZME81SDl1ZmgwNEpDa3Zqdmh5V3NSSHpURmNTclVRcDFESFJXby1YM2pNUGI2LVc3dDdfMzhoX0VSdG5iQ2djREFhYXhmUWowWkM4VzNRcWs5dDhUYVFHR2dDd2FmZ1FLZUtYRmtLZ2g5SklRUkRaYTZNOWVSYm0tU1p6dlpXTXd1WDlWcEJOc0VrYnd3SEV5SFJnVVlyVWdwYk1tcGxaR2QyMHNKcXkzSnZES2FmRkttcFp0U19F?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1985
    },
    {
      "date": "Aug 17",
      "text": "Israel strikes Lebanon as U.S. prepares fresh Iran sanctions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxNRXhvNkxYc1FyX0YxVzZZTXBLeW9GVnhVT21GNjlrbmhQSTZpZkdxVmhubVZPcTIxeEVwLUZnMUdiTUYwc3BERmxoWXBNVm5BNGxQOWVwcldhcDFWMC16aXdKVjJrUzlmNVV6SXVtV3dsLVpOcGgzWm1SNkZ1MTBiOGdVaWpJYzlvMEVlOQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Japan Times",
      "latestSinceUpdate": 1988
    },
    {
      "date": "Aug 17",
      "text": "Trump posts map labeling Strait of Hormuz as US territory.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxNaXdqczQxZDJIUFd5QW5MQ3pkXzBKMmFqOGhFdWI4ckdTQUE0cnVOV1p3WTZTU0tFN0Iydk9Mai03MU1QQTlZLVN2YVJ2MTlOWXh5TkpBeDlDaWQzM21YVDk5aVNVYkNubzVZY0NKZWxZTFFSUHNLazBBcTdoYXlSa0V3cXR2WkNuLWNya2dRUy1GRlhJOS1pM09iSHNsVkVmTEdQcFZlZHdqUXRpUkVj0gG0AUFVX3lxTE0tOTZacnBzS0Q5VlJkWXdBdjZuNjFXN3NoTTZpQWMteHg2eFAyS1NSRUtyMFpJTHhkQXZfdlJOVVR2T2RzdEJqeU1FeDFxbGdYM0NkazlDWmNSd3UtRERha3VRV2pmVW5IVnhyVlRLMWxZeXRiMEVONy02c3pJZ1VxOGdmdFlUTUlDNDZ3M09kOWthNFVwTndPTzlDTF9tLWhMdUNHMGlKN2FTc1NMOUt4RGZvTA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1988
    },
    {
      "date": "Aug 17",
      "text": "Saudi Arabia resumes oil loadings, sales from inside Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxQMWV0X21ESGRmUGFXQVQtSXNBRGhkdU5fM1hDNjhwaFhFTktWM3lVXzliRmdma093bTh5LWVmck9JNnYwWnNBUnRJcmxPS25KWGVsTHVGeGd1SE52SjF6LWNHcF9yTTJzX21qRzZvM1NMSk9lWjE0cW41c3hmbU9iT3NsMUF2SlpMWm9Xbnp0Q2pBNWJNUjQ2Y3NNSzZ4RjRsTURxS2NtMFFGOWdJaFlSUEJ3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1988
    },
    {
      "date": "Aug 17",
      "text": "Israeli strikes kill 11 in south Lebanon after Hezbollah wounds 3 IDF soldiers in attack.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPT1ZKX0ZEbHRQMERUcWlMNzZYS2U5NGxFamRaS2dpQUFURk50b1VvN3ZVbm1acjdUYXR6UC03OTJBb0x2VGs1bVN2ZXMwVVVaWTRsb2tYTTZYWFNBbVFLb2FaUlJfUklqNzBwSWNSdVpJeFhoV2ZQTFRnS2tMMEtkenowUFdFMkVwelRiRWpjcGc0Z0pOUGdGT2UtSjQxX0hIVFNlbWJjOGN1MGl6aGJpZW9WOHU5bXlrYXfSAb8BQVVfeXFMT2RwX3hnaDZnanQyWWJlclZ1ZUdTTUJINl9tQnpzR292bDlfMnNlZjZuOVJZRkZJakV1SDg0Nmg4ang4anJlZXVqcVp0eXFrRy1xenJDZjhNall4TXBYTVpycm5FeXNfZzc4T04zMjZYcDV5LWpHb3d3Z3kyZGJReDNBWHZRc0Rsak5PRWlRQUU1TVJYQmZ4SFB6TW44d0dTdG9kZ0Nta2NMLTQxRXhNamNIS1hrWURMRmRaRVBieGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1988
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
