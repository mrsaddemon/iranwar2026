export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 721,
  "lastUpdated": "2026-05-21",
  "lastSyncedAt": "2026-05-21T04:47:58.929Z",
  "warDay": 83,
  "summary": "US and Iran are engaged in high-stakes talks regarding the ongoing conflict, with threats of military action if a deal is not reached, while regional hostilities persist between Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-05-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 3,
    "summary": "No formal ceasefire is in effect, though high-level talks between the US and Iran are reportedly in their final stages."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 80,
    "oilDisruption": 75,
    "tradeImpact": 68,
    "sanctionsPressure": 63,
    "globalPressure": 80,
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
      "text": "Trump states an Iran attack was held off upon Gulf states’ request, indicating ongoing negotiations.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNQ3BDQ1VQdWtIeDFYbkN6aFNpdDdsdEszTkl3aEN6b2pma05MOFNnZHRSNzdFZmJrQzAzY0ZTTEZXVDhfWXQ0b1J4TW95V25KbFEtdXBlaUo3a1R3OGdmQWZIaFJ1N3FxOV9FRnhMZlNPUzBZbXNzZHZxUzRQaldBcDlKQURGVHlLaXV0YlB3ZEVvVEttTjRLd0NKc2E2Nk5zYS05eDE0MWNibldKX3Q5QUZFWWMtM2NrR2JfNNIBwgFBVV95cUxPcWRGdWhXT2FIMENnaGR6Q1JLeV9qc3NFY1hkcmNYNXBTLXl4eFQ0aUhsVEFrOVFSV2tUd2lFRDNGUFZTSlQxWXd1WFVnVFhnV0FRYjdXVTNtQVdpQk1fdl9FOHowYktWUXlsOXVYbkVxNFRDQ2hHUFZDblNqSnQtRmdlMmF6X1FfU19VcHowYzcwaThhUktzNnlieHljWTUtS3ZPMFRrRDNsa2dFQmtvMDdaeGEzOUFUcUg3enViZmJfdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 721
    },
    {
      "date": "May 20",
      "text": "Iran is reportedly examining a U.S. proposal, with Trump indicating talks are in 'final stages'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi0gFBVV95cUxNcGU2eXZBbFEydDVJQlA3M09Md1NuVXBObjdNazNiUGZSMnc2eTUtSUlyUnh0T2tZT0hBMTg0dTNNUUVvbFU0RzJYRHNRVElqSTlaeThLY2N4aU9rX0lMRDVhdGYtQnA0NExKRFRWZUtOOUFoVzd2a2owOWpMQjFWQzFqdC0wY2RxQ0xaemVCM2syUXN4c010YXFmYlAtZjlxNDMxWU9iUWVmVkhnWElRTUhrVVpfMmV5N3VEQVRFYzhlVGhSMmxsRlowT0hBaU9zRWfSAdgBQVVfeXFMTkZuUnFPZDZRdWlMNzA5ZHhBV3A0TzJmbGswRDhoSHZ1Z1hETTY2ZHo3Q0E1c0s2STdMbFpDU1lET2ZjQU81SkZnaGZ5RjZqMFlaSnd6RksxSEtWZGlQQjR6THR3TXpsMXg2N1VKam50Z1UzeWkxS1lILW9vRmN3a2laYnNIN3pPSjJhcVhzNEh1ZGF2SHBUeGZPRnVCTF85c25HWEc5dzJMdVdZbHFuN3FiRHE2Umo5aTBoY05QSkF5UnFhWDVCM0VjM182SWVtUE5FYVZYLVZk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 721
    },
    {
      "date": "May 20",
      "text": "Trump warns of potential attacks in 'two or three days' if a deal with Iran is not reached.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQbTlFd3h6a0dEY2xzZDhJR0pOcFBpSGU1VkZHM1dPbnJPNmZnbU95TG5LSm81MFZwZjY4NnM4QURoY2RFajltcE1OZlA4MVJhX1M4bHhpTGg5ZWJ6SFItUVN1bENBdF93dGxnUFFVYVk0ekZ1bGFEbnlLTUhlQnd1NkdhaW5JWVQtdWJjb1F1ZVhPRVR0WGVWalFsQ1BmUG5CdU5pQW9sY19mR2ZESUhwc2dqbGRVQ3NmZU53dkdnb9IBxAFBVV95cUxPSFZwME9HOGd5YnpZSHI3Zm5lX0FIMm1HV1hJeURJVWE4SUFjQjZ6V3I3WlBZTnEtS2JQSUw0OFNEQlN5TlBZdVhvZTVZOExkUDlyMGdFcVFYN09aSFFHRGJ5VWZpM2hXYW4yZ3lzOGFTMlJ0MHRRSUJkbFNacTYtaC1EYnV0Mi1KaXJlcTRsZ0ZZWld6eGxhVHp1dlk4OUluQmVIV0hYX3p1Q1lyN0EtbDNueDZ1YnVsVTNHOWdtOTMxRGVa?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 721
    },
    {
      "date": "May 20",
      "text": "Tehran asserts it will not surrender to the US, preferring diplomacy over war.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 721
    },
    {
      "date": "May 20",
      "text": "Lebanon reports 21 killed, including children, in recent Israeli air strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBpaWpfRU91WjUtR1hQVkQ0MDdhWjRKVDItMVNBM183NnVyeURJcXZSUUFvWkxnYXFHOF9DcE5VeHBXcjJtdG9zTWsyNTFwMk0xY1F5N1lJWGc3UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 721
    },
    {
      "date": "May 20",
      "text": "Hezbollah drone attacks injure 10 soldiers, including a brigade commander, in separate incidents.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxQTHpXZ3VMODRRRmY4WXg0UWxiSEVsTnc4SmNEYlJZMmt2VEl1T1BlN0Rrb255MDJBQnB5bjBoSm1WbEFuR1BpYlVGeVhSOFNqZ0lEckNxYVFsZXNsU2lFLXJRcGpuWndDQ3VuNFZ2QUVBLTFUb3E0WHExdWdMLUIxcWNoSl9rdG1YT0I3NDBjSEF4QUZzcFJnU0sySnVzQzU2SkU3a1ZManpsSm5GYkhYadIBtgFBVV95cUxNTDdFd2l2Wlh1Z3IwTHAyM3RrR0w2NThMUEVVQ2JkaU02ZGpGS0l1ZjlNWnhlV1VoZTZfd3BJWWxJUmFoRWRJc2VGR1NyTndOb2NOa0lDMFh3LXp4NEhKbVZ0Nm9EQm50REtsTGRLTjM1WDNnNXI1YVVHVHFUSXlXQkY2RW1ESjJuYzJQTUMzUDZLaGtjOGtVZ3ZVR2RNbk9MakhBUVl1ZTF3SktaTUtCS29EUEVrQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 721
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
      "perspective": "US Diplomatic/Coercive Stance",
      "headline": "Trump Balances Iran Deal with Strike Threats Amidst Senate Rebuke",
      "summary": "The US administration, led by Trump, is pursuing a deal with Iran while simultaneously issuing warnings of military action if negotiations fail. This dual approach is complicated by a Senate measure seeking to limit US military engagement in Iran.",
      "tone": "strained",
      "latestSinceUpdate": 720
    },
    {
      "perspective": "Iran's Strategic Posturing",
      "headline": "Iran Accuses US, Threatens Israel While Weighing Deal",
      "summary": "Iran is examining a US proposal for a deal, yet simultaneously accuses the US of covert hostile actions and threatens massive missile retaliation against Israel if conflict resumes. This indicates Iran's attempt to project strength and leverage in the ongoing situation.",
      "tone": "defiant",
      "latestSinceUpdate": 720
    },
    {
      "perspective": "Regional Instability & Oil Security",
      "headline": "Lebanon Conflict Persists, Hormuz Bypass Underway",
      "summary": "Despite a truce extension, the conflict between Israel and Hezbollah continues in Lebanon, resulting in a high death toll. Concurrently, regional players like the UAE are advancing projects to mitigate potential oil disruptions in the Strait of Hormuz.",
      "tone": "anxious",
      "latestSinceUpdate": 720
    }
  ]
});

export default LATEST_SNAPSHOT;
