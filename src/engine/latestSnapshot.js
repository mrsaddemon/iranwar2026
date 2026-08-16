export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1905,
  "lastUpdated": "2026-08-16",
  "lastSyncedAt": "2026-08-16T19:58:36.109Z",
  "warDay": 170,
  "summary": "The US-Iran ceasefire is reportedly nearing its end amidst escalating tensions, including Israeli strikes in Lebanon, threats regarding the Strait of Hormuz, and an Iranian bounty on US soldiers.",
  "lastNarrativeUpdate": "2026-08-16",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 7,
    "summary": "The US-Iran ceasefire is reportedly nearing its end, while Israeli strikes in Lebanon have killed 11 people, violating a June ceasefire."
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.3,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Aug 15",
      "text": "Shipping faces more disruptions in the Middle East due to ongoing conflict.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5jZlpLZGNVVU9BX2JPcU13ZWt1SXZPLWZmaUdhR05fcWdmUmtZMHRTNFZNdUllN2g3MHU0ejRidWVqSVRtUkRwSnlmOFI0U3BPX1FGaXEyQTl1VjVhNTh4Y1BRbU5kUGhvU2JfN1lR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1904
    },
    {
      "date": "Aug 15",
      "text": "Former President Trump states he will declare the Strait of Hormuz US territory 'pretty soon'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxPN1Z2Sm96LU1TSUlmX0dRTldvbUtpcWxNZTQ0VjZsZ3pSdjNLS3JFNG9CaTdOcURIcV8tMUtWckZMQkJ5SVBVOERmQzFwd0RFMzNicGw4Z0ppTFNmaG9sUVk4SDRZZVJ1VkM1Qm5CQTFUSXdQN2w5c2NlX3NDVGhzVVJZTVpTNkdlRFFpVm5hS0RHV2JmQkVsRGNkbl9CRWR3MnoxTNIBqgFBVV95cUxNZHNkaTRJNnF5RU1Ua1d1VFRLZEVyb245dnVPSU9Fei1Jb01jYVFVSHRseVBNc0wzMEtxWHNHUlVlUDJfVnhQMXdCQnlNSUNCS1AzZklidlRpYVVHYkI0cHpveUhxU3AxdFZGemNmenFEM3V2VWFhbzBxQnlsY1ZOMkQ2MUtRWWc2MEhkUDJWaDRMY2E4T3NqSi1nU013TGdpM0ZXb2EyNl9ZQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1904
    },
    {
      "date": "Aug 15",
      "text": "Israel conducts strikes on southern Lebanon, killing at least 11 people, the deadliest since the June ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxNNGMzYVlleE9RcTFadDNuX2dKNWpRZkd2MU1rbDFGZy1WTHpUN3BEVzlqSGJQRmRPUHpRZGcxU0tWSGRHbDFhMGJvZzVnLWhXMTdoQ1FqTEVObXVyV2taekp0VEhIUlNuR29CaUMxZGd0YlAwQmM1cjBFZnZTNlVIX3BORjBUZ1pTenlJRjN4cl83amtwaUlkUkhjZnZheDJEOUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Telegraph",
      "latestSinceUpdate": 1905
    },
    {
      "date": "Aug 15",
      "text": "Hezbollah chief rejects a US-led Lebanon-Israel deal, calling it a humiliation for the nation.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxPa2twdmg3eDBpM05Hd3piS251eU5oYkxxNTFyc1NkdlZ4bFM0a2drbi0tTzVLbEhENncwQmhpakdUOU9GZFlJWWlRR1BSOWptN0xMU0RGdDJHbkNxWHlhR193d2NKWTBGV2EzUFM5bm5ZRmlwZC1NNjRmemZzaF9FVVh2Q2xyMjd1a0hwMVA1RWxQTE5zRzN5REduWWpJRzlsOURFMW9MaWoyQdIBrwFBVV95cUxNM0lvdDl0UWJMZ3FEMHExdko0WXQtcU9PSmsta2lQT2RRQTNfRUJENU5WN0NFOUtPeTVNWDJvLWNXMktrcThPaVFDNTdUYlNBbGVPMWZFbklLbWVqUjkxX01xMXFiWUkyczZqSnJGNTBSa05BTUkzaG5xTEVoMlQwN2VqYnloZVpkV005dnFndHdQWEFfMVY0eWZNdTlmYWRncTlfUGhQSGpWUzdJTHVR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1905
    },
    {
      "date": "Aug 15",
      "text": "Iran offers a $30,000 bounty for killing or capturing US soldiers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxOcUFVOVduVlZTWFpDYURxYjROVWdvd0pIX0tZRGItN2NaRlpWZy1DYTA5NERsOTJNRFBjYVl2VFZZdzRYWkZCZGFTYW9nOEM3UWx0XzdNZzJBRE11VFhhNms2aDRqcEFzaGE5QjZkcVlCWGt4UzVnMnh0cTBYQW9Qc1dZc0luTjBiSldoY0ZGZDRDbGFsOEVEcW5ZVkR1ZFVEM0JIeV9PTmdZNFF4LVlXWQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 1905
    },
    {
      "date": "Aug 15",
      "text": "The U.S. military has lost approximately 25% of its Reaper drones, depleting its arsenal in the Iran war.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi0gFBVV95cUxNR2swcWNKLTdQX01uTFVzYmpGSGU4Q2VZcWZxWHFPLXk2aXVJQjBsVW9QNGVpdDVJLTk0blY2a1RJV1dGMlYxVlBETTdoY3BKNHB0SnBUcHM3X0NSSUtlMGtkOHpXUi1qZ3dTdm15ME5GOXQzM2lBRzBvQTJlNC1YaVJUMF9jUUw3cEt4WW04U1QyaWpqSU82OGxUZVU3X1lNdlRhVG9tbHlkV0NKVC1oa3RXRlBvRzJxMzhxbERvcGs2bWFFRl9Wdm9XWk00bkRuTXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1905
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
