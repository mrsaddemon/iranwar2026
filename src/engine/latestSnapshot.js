export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1802,
  "lastUpdated": "2026-08-14",
  "lastSyncedAt": "2026-08-14T18:27:36.846Z",
  "warDay": 168,
  "summary": "The US is implementing an indefinite naval blockade against Iran in the Strait of Hormuz, while Iran asserts control over the strait and claims the US military is weakening, amidst reports of US drone losses and tanker attacks.",
  "lastNarrativeUpdate": "2026-08-14",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or de-escalation efforts are reported."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
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
    "nuclearIndex": 10,
    "escalationLevel": 90,
    "oilDisruption": 95,
    "tradeImpact": 85,
    "sanctionsPressure": 64,
    "globalPressure": 87,
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
      "date": "Aug 12",
      "text": "US eyes ‘indefinite’ naval blockade, vows to isolate Tehran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxPN1Z2Sm96LU1TSUlmX0dRTldvbUtpcWxNZTQ0VjZsZ3pSdjNLS3JFNG9CaTdOcURIcV8tMUtWckZMQkJ5SVBVOERmQzFwd0RFMzNicGw4Z0ppTFNmaG9sUVk4SDRZZVJ1VkM1Qm5CQTFUSXdQN2w5c2NlX3NDVGhzVVJZTVpTNkdlRFFpVm5hS0RHV2JmQkVsRGNkbl9CRWR3MnoxTNIBqgFBVV95cUxNZHNkaTRJNnF5RU1Ua1d1VFRLZEVyb245dnVPSU9Fei1Jb01jYVFVSHRseVBNc0wzMEtxWHNHUlVlUDJfVnhQMXdCQnlNSUNCS1AzZklidlRpYVVHYkI0cHpveUhxU3AxdFZGemNmenFEM3V2VWFhbzBxQnlsY1ZOMkQ2MUtRWWc2MEhkUDJWaDRMY2E4T3NqSi1nU013TGdpM0ZXb2EyNl9ZQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1802
    },
    {
      "date": "Aug 12",
      "text": "Trump insists US controls Hormuz, Iran says it could ‘prolong’ war with US.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9pbWxQa3BOTklMZFVOT0RGLW5mSmRBRFNKeWV1R2VwUXNJOV9acS1sTzVWMFEteTgyczBlSU1QeU53RFhJVkNyc1FsS2xsVEJvRlYtWnhaXzRGT2pIbkVhVWVmU29UUDNKT0RoazFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1802
    },
    {
      "date": "Aug 12",
      "text": "US CENTCOM chief pushing for renewed strikes on Iran, claims Israeli media.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxQSDJPbnFkODBmcFhzSC1lZlNKVm1xTEhNd0thMzhtQU16bmppVkhOM1VIdGU2TnlBSXFnZG9KdllZeWp3NU5ORllvZXZiVmxzeFZ6Z2V4RW1hQlAwb0FqcUFjNzZQd25ySlpaYm8waHF0R3RyVjVNcHR4bi0waW5FMDh6cklDcEoyeDdoZVR5enBHaEZUZGllcWUyN0loN2JYTHNBMWV5TXloY3NRamlKbkdHRmhGdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1802
    },
    {
      "date": "Aug 12",
      "text": "Tehran says Strait of Hormuz 'under Iran's control' after Trump threatens U.S. might 'keep it'.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1802
    },
    {
      "date": "Aug 12",
      "text": "UAE accuses Iran of attacks in Strait of Hormuz as Vance says cheap oil and gas are 'goal number one'.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1802
    },
    {
      "date": "Aug 12",
      "text": "Two UAE tankers attacked while transiting Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxOU19BM2l2RGhNUW5aWGxpdXJRU1QwVWtzekJ1ckw2bUdzWlhBSWcxX3U3T1JVblRkYW92MEhkaS1rakhweUN6MnlYc0xVbzVQcUtwdXRBbGFPUzV5T2Q5a3lmbVNqdE0zZFgyT0J3OGt6bzlwT1dWb2dtdVBieEtuOVFQXzdlNFdzUm8tU3FrV1JQS1hEUGpscjl3Q1BRczR4RlE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "apnews.com",
      "latestSinceUpdate": 1802
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
      "perspective": "US Administration",
      "headline": "Trump pivots to sanctions, claims oil flowing normally",
      "summary": "The Trump administration is reportedly pivoting back to sanctions for Iran, with claims that oil is flowing normally despite data casting doubt on US control of the Strait of Hormuz. Trump also states the Lebanon ceasefire is working.",
      "tone": "strained",
      "latestSinceUpdate": 1768
    },
    {
      "perspective": "Iran",
      "headline": "Iran demands war damages, elevates confrontational military",
      "summary": "Iran demands the U.S. pay for war damage before reopening the Strait of Hormuz. The supreme leader has elevated military veterans willing to confront the US, with an IRGC adviser stating the U.S. military is 'weaker than what we perceived'.",
      "tone": "defiant",
      "latestSinceUpdate": 1768
    },
    {
      "perspective": "International Mediators",
      "headline": "Pakistan pushes for US-Iran talks amid peace deal hopes",
      "summary": "Mediators, including Pakistan, are actively pushing for US-Iran talks, with Pakistan suggesting the two nations are close to a 'peace arrangement or a deal'.",
      "tone": "anxious",
      "latestSinceUpdate": 1768
    },
    {
      "perspective": "Skeptical Observers",
      "headline": "Iran war a 'quagmire', oil claims questioned, Lebanon ceasefire a 'prison'",
      "summary": "Commentary suggests the Iran War is a 'whole new level of quagmire for the US'. Claims by the Trump administration regarding normal oil flow are questioned, and the Lebanon ceasefire is described as a 'prison' by residents.",
      "tone": "skeptical",
      "latestSinceUpdate": 1768
    }
  ]
});

export default LATEST_SNAPSHOT;
