export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2615,
  "lastUpdated": "2026-10-19",
  "lastSyncedAt": "2026-10-19T23:06:58.198Z",
  "warDay": 234,
  "summary": "Tensions in the Middle East are escalating with warnings of a renewed Iran war from Israeli and US leaders, while Iran issues warnings, prepares for conflict, and proposes conditions for a ceasefire and Strait of Hormuz reopening amidst recent maritime incidents.",
  "lastNarrativeUpdate": "2026-10-19",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.81,
    "durationDays": 7,
    "summary": "Iran has proposed a seven-day ceasefire and conditions for reopening the Strait of Hormuz, but no agreement is active."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
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
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 58,
    "escalationLevel": 38,
    "oilDisruption": 80,
    "tradeImpact": 48,
    "sanctionsPressure": 51,
    "globalPressure": 58,
    "allianceInfluence": 62
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": false,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Oct 19",
      "text": "Israeli experts warn a renewed Iran war is only a matter of time.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxOR3AwS1dEYnBaTk1ZamFqRU5zUk1jY0laa01MUktpREM1ZUd5b21GbnlaYzZwVGVLaGVMVDM3VnBoTFNXQWNlMTN6MEFhb201VlY0Uk15TFd5eGxpTnZaQkJKejAwVl91T1Rqa2FMX3JhU3FNRXppUWc0ZkVFYTR1M1JyUE1ZRHBzOFFqQTV0U0NmelgyZUhVOFYzRdIBoAFBVV95cUxPZG5uN1pKTkVoWF9VOThPLVZrS0xIUGFqYTg5a1hoc25adEh3UG14U2RGVzRGQ285dVZFREhCMHRrS2tDTEY5SDR1di1sZHQzWE5BZkNlWG9LamJxQzZJVkFiblNnZ1Nfa2lVdEh4OFJwWm96djlMNWlIZ0tSNW5Md3ZRQTl6RE5HRHp5cXhBMS1nMXVCcDl2UHp6ZzZOZmxw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2615
    },
    {
      "date": "Oct 19",
      "text": "US and Israel threaten renewed Iran strikes; Tehran warns of response.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiUkFVX3lxTE1zNl9zdG1hb2kzUnMxdnIwNDN6MjZtTHdYcEpnOGhyU2JaVnVzTm9jVWwzUVJSYWI5VmZla0FqMVlJaWZOdGxnWjdFMVQxZDRGTFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Iran International",
      "latestSinceUpdate": 2615
    },
    {
      "date": "Oct 19",
      "text": "Iran says Strait of Hormuz reopening, seven-day ceasefire conditions still on the table.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxOM3NTZE9fMEQ3MjZJZW1kbXZ0OE9RUlZTRkpUaTVQYmgtRE9GU3pKdVJmVFhZSUZBM3FrNjF0Q1VPdlU0MGFfZVBsQzhtTWszTWpvOThSNkpnaUJpaDZtUFNmYURteUJGZHdtNlpyVzNmRmJ6WHliZ19vWW1kYTNENE1BX3lUWTFrSHlZZW1uSGVvNWRETURlYXdBcXVyVUdj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2615
    },
    {
      "date": "Oct 19",
      "text": "A 'violating' vessel is on fire in Hormuz after a sea mine blast.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNeXpSZEVqaUJfWndWbXFQaXBHMmFIQ1pDeUs5TzJZQm85NDVDZlNWZG4zbEs5aVVDZFNwSnFlVDhpNEZTQllpTTRyRVJTdnJySl9yWjZWcVdWa29GTlhJS3FqQW1NSnQ2NWtCZHNia3RtTWhZc0V5NjRtdFZFS0M5dkgwc3dYV29sQWViaEsxRS1aYnVydnZ3eWNMWEpLb3ZTU3VaYUhPT1lwUE5sWmE3T3RTV1pTam04aDdGNHFfdlXSAcYBQVVfeXFMT2luSjM1c3BIVEhRRWRLQ3Y0N0d1MmhHWVBiYm9GMXBXR3hHZ0gwSk5pWjdacV9PVnVHd013NC1mWmRZNEJyMFF5YzJ2RERIbFlSLUU5MTFCZ0s1VU9BYXNHRzgwT2J0R2RTMGRNa0YyYUxOejVUVkczMHNwWkh0aFFWbV9TZC0wQkdRTmpPZ2xEX3JKRUVwdXJWYzNpQ2pHUFB0RDI3VW1reWc1MjFsU3lEWDVyalppR2NkUmxnM1ExYlR1OER3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2615
    },
    {
      "date": "Oct 19",
      "text": "Russian diplomat condemns U.S.-Israel attacks during Tehran visit.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2615
    },
    {
      "date": "Oct 19",
      "text": "Hezbollah funding plan indicates a new challenge to Lebanon’s government.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxQVnNfYmowcmJwU3BJMUJxcUFCMUZWYnppMFFPTXc1MHE5Q1NuNzJNVmZqLXlCMjN4WUxjQm5UdTdPQ0JjVTJVSEJGZnV0QnY4eW5fT1VRcHVpdWwyTUZNSHBBVkhsclRQY0VWWTVDQS1HUTEwc2tCV1VQUVdHVjVEaURuRFNLYWU2UGp1Y1FCTlI1NE1zbVZzaVlTTkhad1pPRzFsS3B1b2dVdlJZMXN1b25tSdIBuAFBVV95cUxQUEg2b1cyUElnbGV6d2x4WEhuWklCYnA0LXFvVjJzME43djNGcmRmU3NteEExN0Rqdmlzc3dCOUNaUjFZMVpBaHgyNndGQk00ampWdHMtUmpyQnVIbVFuaHJDNEtxYnZrTXM0SVJIUDM5bG5ubzgzREp1bzIxOWlqcWtIVU1adlhRb2hweEdFMWFwVnh3alhUcU16NWd1RndPeXJIbnVIaGNISjJZVjB0TjZPMTFhbTR3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2615
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
      "perspective": "Iran's Defiance",
      "headline": "Confident Iran Threatens Retaliation Amidst Escalation",
      "summary": "Iran projects increased confidence after six months of conflict with the U.S., asserting a 'new operational plan' for renewed attacks and threatening severe retaliation against Israel. Reports suggest Iran's precision strikes have impacted Gulf infrastructure.",
      "tone": "defiant",
      "latestSinceUpdate": 2611
    },
    {
      "perspective": "US/Coalition Concern",
      "headline": "US Military Leaders Warn Against Extended Iran Operations",
      "summary": "Military leaders have cautioned against extending operations in the Iran war, as US-Iran strikes raise fears of broader conflict across the Middle East. Washington is reportedly considering the deployment of MOABs against Iranian nuclear facilities.",
      "tone": "anxious",
      "latestSinceUpdate": 2611
    },
    {
      "perspective": "Regional Instability",
      "headline": "Hormuz Shipping Under Record Attack, Lebanon Tensions Mount",
      "summary": "The Strait of Hormuz is experiencing record-high ship attacks, with vessels reported hit and on fire, signaling significant oil disruption risks. Concurrently, Hezbollah's challenge to Beirut's authority is escalating tensions in Lebanon.",
      "tone": "strained",
      "latestSinceUpdate": 2611
    }
  ]
});

export default LATEST_SNAPSHOT;
