export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1866,
  "lastUpdated": "2026-08-15",
  "lastSyncedAt": "2026-08-15T23:59:52.539Z",
  "warDay": 169,
  "summary": "Tensions are escalating in the Strait of Hormuz following alleged Iranian attacks on UAE tankers and US declarations regarding the waterway, while conflict intensifies between Israel and Hezbollah in southern Lebanon.",
  "lastNarrativeUpdate": "2026-08-15",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire or de-escalation efforts are reported amidst ongoing hostilities."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
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
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
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
      "date": "Aug 14",
      "text": "A US carrier group is headed to the Middle East to replace the USS Lincoln.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE50bHFXRTNsVkRFU3JmVVZjWExoWDlwZEdkLVJYNENoLWUtRlNBMkRFUjAzVTBNZzdpaHdKd1lpRTZTeXEtbF92MndpVlpZdl9RSUMzd2U3WG1TaFlPS2dIbTVrVXBSLVUtWTFsQUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "cnn.com",
      "latestSinceUpdate": 1866
    },
    {
      "date": "Aug 14",
      "text": "Former President Trump states he will declare the Strait of Hormuz US territory 'pretty soon'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxPN1Z2Sm96LU1TSUlmX0dRTldvbUtpcWxNZTQ0VjZsZ3pSdjNLS3JFNG9CaTdOcURIcV8tMUtWckZMQkJ5SVBVOERmQzFwd0RFMzNicGw4Z0ppTFNmaG9sUVk4SDRZZVJ1VkM1Qm5CQTFUSXdQN2w5c2NlX3NDVGhzVVJZTVpTNkdlRFFpVm5hS0RHV2JmQkVsRGNkbl9CRWR3MnoxTNIBqgFBVV95cUxNZHNkaTRJNnF5RU1Ua1d1VFRLZEVyb245dnVPSU9Fei1Jb01jYVFVSHRseVBNc0wzMEtxWHNHUlVlUDJfVnhQMXdCQnlNSUNCS1AzZklidlRpYVVHYkI0cHpveUhxU3AxdFZGemNmenFEM3V2VWFhbzBxQnlsY1ZOMkQ2MUtRWWc2MEhkUDJWaDRMY2E4T3NqSi1nU013TGdpM0ZXb2EyNl9ZQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1866
    },
    {
      "date": "Aug 14",
      "text": "The UAE accuses Iran of attacking an ADNOC vessel in the Strait of Hormuz and urges the waterway's reopening.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxNbEFoM0Z1VnBsRUlGMUtsU3pXUWd6WUVvVW84ak5jbVpIZ25ld1VfR3RITUJ4MEx1ZTRJaGdXSDRadGVRNThPMzFlOVNsNWo4QzV2eTMzVmoxb1RDSE5QNXZkQ1d3bl9oSk85SUFxNEgxU1N6ME9UWHJ6dENMZmk1LWhacTJreTc4VlgtaGRxaFVQbFltR2UwMVN3Z1V3WUJLeHdDNy0wU0NldXRLaVA0NVY5WTZLQ1NOQjJQQWFHSjMtMk9icXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1866
    },
    {
      "date": "Aug 14",
      "text": "Iran reportedly attacks a third UAE tanker within a week.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxPS3VQZHZGdDlJX2N0TlNubVV2QW9UdnUwMW1sTk1iUExtcFlQYlUtQ2dHMHNnaUkxbUJ6YnpscVd4WUFlZmd3WXJPbm1ZQjN2TGRzVDY4aUFCZ1ZlSk9KNFgxd3NJYlpGODNwOWVOSW93RUJVRGljcG9EblpDWTRPZUlxWlp0YkXSAYwBQVVfeXFMT1A3V3BJZlZWWFBYNnFlcVhqaVJYRjZFUVJORkxOTjRmVG91cmZGU0VTOVlKSWs4VENKR3hVZ3lhdV9GaW10QjB6RmtJb1J2cXVaRHQtelNCMmZMOGkzOGV0ZEduWEV5WFRmV2EyZzBnUS1sTmVxb1g4OVJyZy1XTTRkdGd4VnBPMzd3a0M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1866
    },
    {
      "date": "Aug 14",
      "text": "Eleven people are killed in Israeli strikes on southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBCRDVFUWZWd2tFVmZ6bm5fUld6aVBfSkhFTzZZYUhyYjl4M1pnc3pfUl82cTEtelV5cGxBem9JcWJQeXhxdVRtbWQxdFlSMXlsQUpOdUtwTzFRQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "bbc.com",
      "latestSinceUpdate": 1866
    },
    {
      "date": "Aug 14",
      "text": "Three IDF troops are seriously wounded by a Hezbollah attack.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAJBVV95cUxPRENXRjk3a1FqZ3k2eWp1eWkycUxmV1Vkay0wUkZ5dXYzbXRIM1dQa3MyRDgyOFFFYWt3U3UyYUFiUzFacjJJVFF4eVR4amV3cDUtQ0NzLXhkV1ZZRzNUczJpU2RpOU9uU25pNXZvOVJ4cG1VWkdRSGlRdUVKdDlDc2Z1M3ZhcDV3cVNGdVJNa0s0dS1DQ2stZ0VONWtpVjRDdUNsa0ZNb3lGU21wWU8yWWJmSkp5dFpkWEM5TmFsWEJGMVl4QXNrLTFCLUxrYWJiN21VcURZVng5eVFEVXlrRUt5WDE3aVp1UU5aU2tQTEptZ1BYQkNQUzIzNV9LS1pDSXZxaDZxNFZDXzJEbmNkbW9YNFd3LXR5aTlsNnVTMzZCdVdY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Haaretz",
      "latestSinceUpdate": 1866
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
