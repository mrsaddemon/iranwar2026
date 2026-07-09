export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1227,
  "lastUpdated": "2026-07-09",
  "lastSyncedAt": "2026-07-09T21:48:44.161Z",
  "warDay": 132,
  "summary": "US and Iran are engaged in a second day of tit-for-tat strikes following President Trump's declaration that the ceasefire is over, while Israel continues operations against Hezbollah in Lebanon.",
  "lastNarrativeUpdate": "2026-07-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 60,
    "summary": "The previously established ceasefire between the US and Iran has been declared over by President Trump, leading to renewed military engagements."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "date": "Jul 09",
      "text": "US and Iran trade strikes for second day after Trump said ceasefire is ‘over’.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxPbUJvWmM1dG1ldjh4TmdlYUJyTVRiWjhIVUFqcEJIVzcwdVJOb2c0ZlU2V3gxaktFWU9acnkzMGNDUHcwTEtPR2lJQVpaYjd1SU50UWpWUEdLNXBzWWZQbC1LcFBmMjNSRGRQMnRWYTAtRVJydTEwZ1dHMVlfdDVQNl9DMVNxVnlX?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1227
    },
    {
      "date": "Jul 09",
      "text": "Blasts reported across southern Iran after Tehran attacks GCC states.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOazFrLXladEhrcG51TllsZHBwdDd0Y2hPTWo3eXNEYkxXX0J1cDlfUk94eURqb29qR20wMU93a3BCN3E5d21OUEVUOU5meF8yNm9uNngtUi1adEJEYVFCUksyeG1EVGtTU0dncU55NHEwQzV5bWRLSGhBUUpGOFhfZGRTemktaW1rREhpb1lDTWRKc2dPNV9jOUt0VG44ZzBhT3BEWENyMHRvOXpIcFBmT3dPcHRwN1doc3QxWtIBwgFBVV95cUxNajNoV2lYTU9GUnM5bmRJcVB1Uno1VDZMbXdsRHo2anF1Vk0taFRuVjVVUHVuSkVWYkhjS3owUFBwR1JMR2ROdEEycVlmdTNndEJ2am8tNUY2TlNEQ21lbXpNdG1SZW4wYkF0bmI2YTNYWEZrakZWV1lDUjVORFI4bTZVUTRBUjRQdDhvVVNyWE82eDdoazdKVzI1VEFPV2NzaFU0WGNGNFRpT1djbFd5NzFfZTd0VHM2Yl9MdGtvWW1zQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1227
    },
    {
      "date": "Jul 09",
      "text": "Iran says it hits U.S. military targets in Gulf, vows retaliation as peace, ceasefire stall.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxQYWlVcGh4SkRwb2h1UGwzeXNMRklydEpSWGxUSTVqWUFjQVNRdDZyN1Bpang1ZVVoLVliczlOWGVZN3d3VGdKZVlwbHQ1MnQ2NHFWTVZVTTdnUlZpbkZydVhvR0t4eVZTc250UF8wSDNYRlc4VzFPRmUwVEJBUDFIUEtDS19vMEU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1227
    },
    {
      "date": "Jul 09",
      "text": "Khamenei's funeral ceremony underway in Mashhad.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi0gJBVV95cUxPSVJlMWdiY2QwZlFPVFpWdk1lME1TdFRYdkU2bkZxcnN0dlBoUGpkLTVUYXNsVkVmMUhOSnpGYWdUTlZweHh3MmxLcmEwRkEyQllMTFdTal9nbHNjNTloaHJoSmJkWV9rRko4TVJvclpQMmFwaVJfVnJwbzhMdTlzOVRoWGVZZ1hkTmpta2xnSy1LaG9DRVFhYkhDRk5ZbHJ2Q01KX0tDTEFkS3l1d1B0M21OMEhibWQ2Y3Ewdlg0MGZZRDRsWmNnV3E2TjgxSExVNG1ndTlOc0xSYnY3S2hYU0t6cjBFR2hVVGlSanVINlZtZXJ3dVF5Q0JYVldNYTBUMUNiNFprTDBOWjhHcjN2OGExenRjVDFyVUx0SldQdjZxZ2ZReXJfMmp2NDF3WHltdGcyWDhhZUYzZktQdkFxSDloVlo3VF9oaEV5ZjRDUE5OUdIB1wJBVV95cUxPR1dnekhmdkhiaTkxZW51RGVZNVpXR0pGbms4RkswTnVXZGF5RW9rS1pLcUhhdTI1aEtKcmp1YWtTZE9Gck1jMXQtenhfR0tiei1fTURUVWJ1WGVKeDVhTC1uVUVSbDU0QVdEeUlnVW1sXzFVQ0ZZdkJGQ3Jpa01sOVd6UnRVenFXZ2VPajc2eW1RSWduRE0tVldVMFpFeGt3WXhIdDdqUzZYcFZQWVFEdGpxWE5qU3RPQmxHcjlDMEhtWGdCNkEyaTdlX1R2LWtocTZpR0RkYldqb0k2c1dWRzRXbXEzYkx6MDBZS3B1NnAydWRyWjVrbHBTdDYtbWZQZkNiNGFmbVdJdE9xV1ZDTHplOWZTYU90eHR5cFBxUmFfdjVpalFLc3YwLVhIZHRJZnpYbGstUGcyaGUxWVRNT0h4ek92YkxLYi1ITzV6UkFNLTl4UjBN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of India",
      "latestSinceUpdate": 1227
    },
    {
      "date": "Jul 09",
      "text": "Israel destroys more Hezbollah tunnels and hunts militants in Lebanon security zone.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE9UcGhZSXktWEhYU25yb25ZNXZoU1ViMkdlRlYtOXB3b25qWEhuTS1MazIyMmhJVU5lMkVHdHFMd1RWcDVfNy1qdGdZV2VVQ2I4OTBkRlRn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Ynetnews",
      "latestSinceUpdate": 1227
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
      "perspective": "US Policy",
      "headline": "Trump's Desire to Exit Iran War Contradicted by Renewed Hostilities",
      "summary": "Despite President Trump's stated desire to leave the Iran war behind, recent events indicate a shift to a direct confrontation over the Strait of Hormuz, with the ceasefire declared 'over'. The US has initiated new strikes and economic measures.",
      "tone": "strained",
      "latestSinceUpdate": 1220
    },
    {
      "perspective": "Iranian Response",
      "headline": "Iran Retaliates to US Strikes, Targets Gulf Arab States",
      "summary": "Following US airstrikes, Iran has responded by firing back at three Gulf Arab states, including Kuwait and Bahrain. This marks a direct escalation in the conflict, with Iran's actions seen as retaliation for US military and economic pressure.",
      "tone": "defiant",
      "latestSinceUpdate": 1220
    },
    {
      "perspective": "Regional Stability (Lebanon)",
      "headline": "IDF Prepares for Renewed Hezbollah Conflict Amidst Truce Violations",
      "summary": "The IDF has reported hitting a Hezbollah cell in south Lebanon and is preparing for a possible resumption of fighting, warning of further attacks if the truce is violated. Lebanese political figures are urging Hezbollah to submit to state authority.",
      "tone": "anxious",
      "latestSinceUpdate": 1220
    },
    {
      "perspective": "Global Economy",
      "headline": "IMF Forecasts Slower Global Economic Output for 2026",
      "summary": "The International Monetary Fund (IMF) has indicated a slower global economic output for 2026. This forecast comes amidst heightened geopolitical tensions, which could further impact energy markets and trade routes.",
      "tone": "skeptical",
      "latestSinceUpdate": 1220
    }
  ]
});

export default LATEST_SNAPSHOT;
