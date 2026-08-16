export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1903,
  "lastUpdated": "2026-08-16",
  "lastSyncedAt": "2026-08-16T19:29:17.684Z",
  "warDay": 170,
  "summary": "Tensions in the Middle East are escalating with the US-Iran ceasefire collapsing, significant Israeli strikes in Lebanon, and threats over the Strait of Hormuz leading to shipping disruptions.",
  "lastNarrativeUpdate": "2026-08-16",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 7,
    "summary": "The US-Iran ceasefire is reported to be collapsing, with significant Israeli strikes in Lebanon indicating a breakdown of previous de-escalation efforts."
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
        "precision": 0.9,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Aug 15",
      "text": "Shipping faces more disruptions in the Middle East.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5jZlpLZGNVVU9BX2JPcU13ZWt1SXZPLWZmaUdhR05fcWdmUmtZMHRTNFZNdUllN2g3MHU0ejRidWVqSVRtUkRwSnlmOFI0U3BPX1FGaXEyQTl1VjVhNTh4Y1BRbU5kUGhvU2JfN1lR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1903
    },
    {
      "date": "Aug 15",
      "text": "Trump says will declare Hormuz US territory 'pretty soon'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxPN1Z2Sm96LU1TSUlmX0dRTldvbUtpcWxNZTQ0VjZsZ3pSdjNLS3JFNG9CaTdOcURIcV8tMUtWckZMQkJ5SVBVOERmQzFwd0RFMzNicGw4Z0ppTFNmaG9sUVk4SDRZZVJ1VkM1Qm5CQTFUSXdQN2w5c2NlX3NDVGhzVVJZTVpTNkdlRFFpVm5hS0RHV2JmQkVsRGNkbl9CRWR3MnoxTNIBqgFBVV95cUxNZHNkaTRJNnF5RU1Ua1d1VFRLZEVyb245dnVPSU9Fei1Jb01jYVFVSHRseVBNc0wzMEtxWHNHUlVlUDJfVnhQMXdCQnlNSUNCS1AzZklidlRpYVVHYkI0cHpveUhxU3AxdFZGemNmenFEM3V2VWFhbzBxQnlsY1ZOMkQ2MUtRWWc2MEhkUDJWaDRMY2E4T3NqSi1nU013TGdpM0ZXb2EyNl9ZQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1903
    },
    {
      "date": "Aug 15",
      "text": "Israel Strikes Lebanon as End of US-Iran Ceasefire Looms.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxOQlQ2TTRnS1c5aHBnVlgxWUNmSWJVMXpDNFpzNEROTWNXVDFib29UdkZRTE05aHFCdTFrZHJoaHY4WUFramp4VFVodk9ZOEdyN0dpd001ZGk0ZWdGUnkwXy1OQVZ3NmtXQk13N2RoWWFaZm5XRTd1T0o3aERlYk5JUUZQN3Y5azR5bS01RUtNVzhGejUzN1NtSUFVbEdSUEhnaW1jcThCTWlHQkk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Bloomberg.com",
      "latestSinceUpdate": 1903
    },
    {
      "date": "Aug 15",
      "text": "Eleven killed in Israeli strikes on southern Lebanon, authorities say.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBCRDVFUWZWd2tFVmZ6bm5fUld6aVBfSkhFTzZZYUhyYjl4M1pnc3pfUl82cTEtelV5cGxBem9JcWJQeXhxdVRtbWQxdFlSMXlsQUpOdUtwTzFRQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1903
    },
    {
      "date": "Aug 15",
      "text": "Iran targets tankers in ‘unprovoked attacks’ in Strait of Hormuz, UAE says.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMif0FVX3lxTFBWbGN2eXRreVRtbzJ4SnZxOGZzNXkzNy1fMkNuUHFlSkx1RHJpMjFYUEJUVlFpUVRyV2V5Q013cUtaaGg4Y1VrYjZMd181dzF2LXNOX3pnZFNDajNETmJfaWh2cXZpMjdnODNzcExKWGVUSzBRUkI4YUVTOHJIZHM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1903
    },
    {
      "date": "Aug 15",
      "text": "Hezbollah chief says Lebanon-Israel deal humiliates the nation and its army.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxPa2twdmg3eDBpM05Hd3piS251eU5oYkxxNTFyc1NkdlZ4bFM0a2drbi0tTzVLbEhENncwQmhpakdUOU9GZFlJWWlRR1BSOWptN0xMU0RGdDJHbkNxWHlhR193d2NKWTBGV2EzUFM5bm5ZRmlwZC1NNjRmemZzaF9FVVh2Q2xyMjd1a0hwMVA1RWxQTE5zRzN5REduWWpJRzlsOURFMW9MaWoyQdIBrwFBVV95cUxNM0lvdDl0UWJMZ3FEMHExdko0WXQtcU9PSmsta2lQT2RRQTNfRUJENU5WN0NFOUtPeTVNWDJvLWNXMktrcThPaVFDNTdUYlNBbGVPMWZFbklLbWVqUjkxX01xMXFiWUkyczZqSnJGNTBSa05BTUkzaG5xTEVoMlQwN2VqYnloZVpkV005dnFndHdQWEFfMVY0eWZNdTlmYWRncTlfUGhQSGpWUzdJTHVR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1903
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
