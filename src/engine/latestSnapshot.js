export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1935,
  "lastUpdated": "2026-08-17",
  "lastSyncedAt": "2026-08-17T13:46:34.113Z",
  "warDay": 171,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-08-17",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "The US-Iran agreement has expired, and the US-led Lebanon deal has been rejected by Hezbollah while Israel escalates attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.95
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "text": "US-Iran agreement expires, with Trump threatening Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9HMS1FenJqYXZEVWlWMHdLX0lUSzdnMmdNVG9rakl3ck5wVGNCVEJHZWc0TlM3dnpvS2lxYldUR1lBek1WUWhOc2ZpbTFZM0w1M1pPOER6czIyWUhTdkl3SmpSMlptTnZUZWU1aXNB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1935
    },
    {
      "date": "Aug 17",
      "text": "Iran claims control of the Strait of Hormuz; Israel bombs Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNQzlkS0EwWUsxSGYtSjNaal92eVBWNjhwcnhzdS10VXNRd1NTdnZ6OFNxZ2xXdWZ4NWtwZ2pQcWdnbmJ3M3hrU0E1RVppcjR1WU8ydjlRdm91UVJjVDNndk0zSUR0a2VNZ0NNZmp1MkNBNHVpaGpwUy1VdTJnbzBQX2JZeDdwTXd2NEpZN3RhNzY2OWZGR052eUYxTzZ2emVfSWNCZ2VKTFc5X0MxU1JHdjNJVTbSAboBQVVfeXFMTTBCVzhpTmo0MFR2eXFDWktoY0pfVVVoeUVPcU9heS1FaVdwTEJsdDB0eU9HWkhKMkM4YzdJb0hoT2ljdl9vTXlMNFRkdFJQcmJRWDEtajh2VDMyLWpNYXRtd0NyUTJkUnVKZ09CRUVYSVQ5Z1IxUklWUnNYNE9zelpmUEZTNnE3SWY0X0VSYkpaNldjcjZPQkYzNmRlVUtWLUpYSUhmelpRRGxmOWRVcDR2NzY3WjR3WUVB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1935
    },
    {
      "date": "Aug 17",
      "text": "Middle Eastern airlines face $4.3bn loss in 2026 due to Iran war.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxQWGJOWUs3azVwVUgtM3hHaW8xNTJFcFZReHJiUlRKeVM2c0lIY1YyOTBHQXdBUExMZDdLVXRURDFua0Y4b3RBYjBDZTR3Q0VIX2JRMF9KbTZzUlRzWXVTRDBycUVYZEdzRHpWTGxoWml4NVdLVWcyaFRlUE8yVmh0YXdRcmlDaXBxRFpLVnpuczY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Middle East Eye",
      "latestSinceUpdate": 1935
    },
    {
      "date": "Aug 16",
      "text": "Jared Kushner meets regional leaders amidst multiple Middle East conflicts.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE40V2dqMUJIcWdndGVfSXlVeDRKbmkzU3hrTTRyeXBrSWR3NGtUNzNkSm54X19kcDNBNzJBaVV0NEJTNVdLVVRrUlNHLXZETnFwMEIyekJhOTduVWxZQWZyVW5WQ0xua1ByTDc0OG1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1935
    },
    {
      "date": "Aug 17",
      "text": "CENTCOM chief meets troops on USS Abraham Lincoln amid morale concerns.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPb2FwQzRGRnQwTjFNbTRBTHNFY3JtRTRNZkZ5T1VYbFBlbzVhNnZqTTlrWEZaN3VzTWpySWVhOFdNNmhmTzdpWnZkY1NVNzFOWUxvakM4RkJmU1JMSWlpN3BTNFA3UHdUbXNiSjVDbjJWdjhQa0p3WFUyNGRXNzZzS3k2SnBWNlRsN1hCN0swYVR4MW5GbDFXM3VZSGF0QjlHbXZyMVZibFdyd3c2Q1Bv?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1935
    },
    {
      "date": "Aug 17",
      "text": "Israel strikes Lebanon, killing 11, as US prepares fresh Iran sanctions.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxNRXhvNkxYc1FyX0YxVzZZTXBLeW9GVnhVT21GNjlrbmhQSTZpZkdxVmhubVZPcTIxeEVwLUZnMUdiTUYwc3BERmxoWXBNVm5BNGxQOWVwcldhcDFWMC16aXdKVjJrUzlmNVV6SXVtV3dsLVpOcGgzWm1SNkZ1MTBiOGdVaWpJYzlvMEVlOQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Japan Times",
      "latestSinceUpdate": 1935
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
