export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 719,
  "lastUpdated": "2026-05-20",
  "lastSyncedAt": "2026-05-20T22:55:28.608Z",
  "warDay": 82,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-20",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 7,
    "summary": "A fragile ceasefire is currently in effect between the US and Iran, but its continuation is uncertain amidst ongoing negotiations and threats of renewed conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
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
      "date": "May 20",
      "text": "Trump states Iran attack was held off upon Gulf states’ request.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNQ3BDQ1VQdWtIeDFYbkN6aFNpdDdsdEszTkl3aEN6b2pma05MOFNnZHRSNzdFZmJrQzAzY0ZTTEZXVDhfWXQ0b1J4TW95V25KbFEtdXBlaUo3a1R3OGdmQWZIaFJ1N3FxOV9FRnhMZlNPUzBZbXNzZHZxUzRQaldBcDlKQURGVHlLaXV0YlB3ZEVvVEttTjRLd0NKc2E2Nk5zYS05eDE0MWNibldKX3Q5QUZFWWMtM2NrR2JfNNIBwgFBVV95cUxPcWRGdWhXT2FIMENnaGR6Q1JLeV9qc3NFY1hkcmNYNXBTLXl4eFQ0aUhsVEFrOVFSV2tUd2lFRDNGUFZTSlQxWXd1WFVnVFhnV0FRYjdXVTNtQVdpQk1fdl9FOHowYktWUXlsOXVYbkVxNFRDQ2hHUFZDblNqSnQtRmdlMmF6X1FfU19VcHowYzcwaThhUktzNnlieHljWTUtS3ZPMFRrRDNsa2dFQmtvMDdaeGEzOUFUcUg3enViZmJfdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 719
    },
    {
      "date": "May 20",
      "text": "Iran is reportedly examining a U.S. proposal, with Trump indicating talks are in 'final stages'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi0gFBVV95cUxNcGU2eXZBbFEydDVJQlA3M09Md1NuVXBObjdNazNiUGZSMnc2eTUtSUlyUnh0T2tZT0hBMTg0dTNNUUVvbFU0RzJYRHNRVElqSTlaeThLY2N4aU9rX0lMRDVhdGYtQnA0NExKRFRWZUtOOUFoVzd2a2owOWpMQjFWQzFqdC0wY2RxQ0xaemVCM2syUXN4c010YXFmYlAtZjlxNDMxWU9iUWVmVkhnWElRTUhrVVpfMmV5N3VEQVRFYzhlVGhSMmxsRlowT0hBaU9zRWfSAdgBQVVfeXFMTkZuUnFPZDZRdWlMNzA5ZHhBV3A0TzJmbGswRDhoSHZ1Z1hETTY2ZHo3Q0E1c0s2STdMbFpDU1lET2ZjQU81SkZnaGZ5RjZqMFlaSnd6RksxSEtWZGlQQjR6THR3TXpsMXg2N1VKam50Z1UzeWkxS1lILW9vRmN3a2laYnNIN3pPSjJhcVhzNEh1ZGF2SHBUeGZPRnVCTF85c25HWEc5dzJMdVdZbHFuN3FiRHE2Umo5aTBoY05QSkF5UnFhWDVCM0VjM182SWVtUE5FYVZYLVZk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 719
    },
    {
      "date": "May 20",
      "text": "Trump warns of potential attacks in ‘two or three days’ if no deal is reached with Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQbTlFd3h6a0dEY2xzZDhJR0pOcFBpSGU1VkZHM1dPbnJPNmZnbU95TG5LSm81MFZwZjY4NnM4QURoY2RFajltcE1OZlA4MVJhX1M4bHhpTGg5ZWJ6SFItUVN1bENBdF93dGxnUFFVYVk0ekZ1bGFEbnlLTUhlQnd1NkdhaW5JWVQtdWJjb1F1ZVhPRVR0WGVWalFsQ1BmUG5CdU5pQW9sY19mR2ZESUhwc2dqbGRVQ3NmZU53dkdnb9IBxAFBVV95cUxPSFZwME9HOGd5YnpZSHI3Zm5lX0FIMm1HV1hJeURJVWE4SUFjQjZ6V3I3WlBZTnEtS2JQSUw0OFNEQlN5TlBZdVhvZTVZOExkUDlyMGdFcVFYN09aSFFHRGJ5VWZpM2hXYW4yZ3lzOGFTMlJ0MHRRSUJkbFNacTYtaC1EYnV0Mi1KaXJlcTRsZ0ZZWld6eGxhVHp1dlk4OUluQmVIV0hYX3p1Q1lyN0EtbDNueDZ1YnVsVTNHOWdtOTMxRGVa?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 719
    },
    {
      "date": "May 20",
      "text": "Iran threatens to fire hundreds of missiles daily at Israel if war resumes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiakFVX3lxTFA0S1RNSUhLbXVGV19EWHk3eGYxdjRfeGRIT2t2ZEtVWlppLVZ4aWV6b2pZNlpKb3R1TUl3WXRYNFh3bjBRUGdGNmt0cXpDZFltRzE4N3lEZnlTT1VudE1KaS1qNmJEclllT0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 719
    },
    {
      "date": "May 20",
      "text": "UAE announces a new pipeline to bypass the Strait of Hormuz is nearly 50% complete.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxNc0ZTZVRzRmZkdVBYV0hJNFdKRzMtb2VXSFlSalo2VFdybDRRRjNNZFl0b3hZc1prSnFOMWNmV0h6Z2tLMmhjOVA2U3NGSjhISTZMdExlWTlmb1BSNWRHXzN0SF8yM0c1TDJ6Q1owVHNiVzZlU2lOZ0FmY3hrVHlIQlRn0gGHAUFVX3lxTE0xVWZqRjQyekdCX1NBZ3VOZlloU1JNQXFhY3VJZkc5RUZ0bEV1Y3AtSFZLMzRYRE5HY0ZOWVIzQWZWTS1kM3FwZEZndzVJTHdZcmlHekc2aEFsbFYzUktNc091ZElTTThxQzYzdHY0eHZETFY3anZUa295NE1vZ3QtVnEtZTBFVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 719
    },
    {
      "date": "May 20",
      "text": "Iran claims to have established a ‘controlled maritime zone’ in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPNTJLV2NaMTBMZE9CZy1IVUMycy02dHRTcS03c2VIMmJTOEhvUUZuRGdLeWFwczBLWXBhV1NaUWJZazNuNjBNMFgycTJMRTJ3WHF6MHFrV2ZZa054YzVmTVpfa3EyR0dRM25ldEhxUGhhQjNUSWlfVDhUWmNMcEFpdTZfdFJJWkg2aGhLc1RNMFp4OUwydWJIdzFfd3VUTmZJTmNyS1FWUWlLb1g1bU9PS2JIQzRIbksyenNncGNR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 719
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
      "perspective": "US Policy",
      "headline": "US warns Iran of imminent attacks, maintains readiness.",
      "summary": "US officials, including former President Trump and Senator JD Vance, have issued strong warnings to Iran, indicating a readiness for military action if a deal is not reached or if conflict resumes. Trump stated attacks could occur in 'two or three days' if no agreement is made.",
      "tone": "defiant",
      "latestSinceUpdate": 711
    },
    {
      "perspective": "Iranian Response",
      "headline": "Iran threatens 'new fronts' and massive missile retaliation.",
      "summary": "Iran has warned of opening 'new fronts' in response to potential conflict and threatened to fire hundreds of missiles daily at Israel if war resumes. This indicates a strong defensive and retaliatory posture from Tehran.",
      "tone": "defiant",
      "latestSinceUpdate": 711
    },
    {
      "perspective": "Israeli Security",
      "headline": "Israel prepares for Iran war, faces Hezbollah drone threat.",
      "summary": "Israel is reportedly preparing for a renewal of war with Iran while simultaneously dealing with significant challenges from Hezbollah drones, which are restricting military operations in southern Lebanon. The death toll from Israeli strikes in Lebanon has surpassed 3,000.",
      "tone": "strained",
      "latestSinceUpdate": 711
    },
    {
      "perspective": "Global Energy/Trade",
      "headline": "Strait of Hormuz incidents raise oil disruption fears.",
      "summary": "Incidents involving ships in the Strait of Hormuz, including a vessel meeting a 'hail of bullets,' and Chinese tankers exiting with crude oil, highlight the vulnerability of the critical waterway. This has led to blunt warnings from energy executives and concerns about global oil prices and supply disruptions.",
      "tone": "anxious",
      "latestSinceUpdate": 711
    }
  ]
});

export default LATEST_SNAPSHOT;
