export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2523,
  "lastUpdated": "2026-10-02",
  "lastSyncedAt": "2026-10-02T14:03:59.285Z",
  "warDay": 217,
  "summary": "Tensions in the Middle East are critically high with significant US military deployments, direct Israeli strikes on Iran, and attacks on oil tankers in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-10-02",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire is currently active."
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
        "precision": 0.8,
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
    "nuclearIndex": 40,
    "escalationLevel": 95,
    "oilDisruption": 90,
    "tradeImpact": 82,
    "sanctionsPressure": 65,
    "globalPressure": 88,
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
      "date": "Oct 01",
      "text": "EU rejects Trump’s diesel demand amid Iran war shortages.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxNUC1tREkzTk9ydXdTMXFqZzAzMzlCZWN2N2RnVG5WM0V3Z3ZBblk0SkI4bkJ2ZXhmQXBsZFFVajMwVWdNRi1SUmNfRWJwZENIcEZtM1BaZVU2blVWLXhkMUhtdXI0SklvQm1vU1BEVXJlZFg5TDQwcU5EeGpqME9Yalk4RFUxSWJtZ3pyTmxRM2hZaFRNZUI0ZEVhWE9IdmdOalB4LWs0cXlkU29GLV90dFNTbzFXNGxlNUhTV3hB0gHDAUFVX3lxTE81ZkY5SzJvZG1CTnB0NzcyT1FleFBfZUIzanRrSjROcXZUd1JVakZQV3Fhc0U1SXRQMllyZkZrN2ppSU02NmZlT3pXMWlFelRNQU9MX0dRRmJRTGJRa1JyMDdkTy1FZHhsd2xLRVR4Y25UeVJ1QV9uY3UydUJsQUdtSS1nR1lqRTlZZmZ3ZEVhRERtdE5SekFHQVZubjFMODNld2lETXc0Q0tvUDE4VTlQTmR2U3pqREJBczBpSE9QNjg4cw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2523
    },
    {
      "date": "Oct 01",
      "text": "US deploys aircraft carrier strike group to Middle East.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxOX09XQVdqYXN0MXFCR1d5aVVqWHkxdmxfdjVKUDdaS1AtVmlKSjJ0MTMtdHU0aXVHVVMxQ29CR0R4U0dTb0piRDdkNFpKdlBRdmJUZVN4X3dkc3NzNkNiNHp6U1ZzWUxVWFl1azNpM2IzS29QcTBraGJYOW1WWGpXV3NPTUFOa1RsRU9VNGc4S1U4UzNKeFVmNjBHc3lhdFVjZHlfQThGS0NlOWNrdlZ5TWV6eEbSAboBQVVfeXFMTS1xSlkwb3lQU0hEQWgweTZ3dll0NlVYSEpQeUpoN3BVR05FWTMxN0ZwSUdTaTFVMVNWcDl1bU54alhDa0JUSHViRDNfSDVSQUdCaU1IQ1FCdTl0aGRLMF8yTGZpbjhPOUNhMjhIWUlTczRJNHpKU19ZSnBoeVlNWFIwZGI2YTRxZHZSbXB3WUlFN1Q3X2Z0QTJPdzd6QVhwajVJR2RmNzFGd1VSbFJyeml6Y3ZqSnloLTBB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2523
    },
    {
      "date": "Oct 01",
      "text": "Trump states he may ‘blow up’ Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPWlkxSG8wVkZ1Q0VFS2JDNE5WblUtN3hQU0twSnVrMFNrWmxOaDVlVS1HUGZXbVFGWkJtTkNqQTdhR281Wm9DbEpOY1BqX05PMDBSTWV2eGxOSzMwMWFJNHRJWlktV0txM1pWMEF1RG10UVk0d041dW9xNXRyenljd0l1T2Rqek9jZWVKWHgzUXowdXN4SUhfZ0VtQWRsOFdIdUlZWXdNTncxb1pwb09hYUlNcGdORWFVak5v0gHAAUFVX3lxTE0tbmZweW4xTWxhNm1QTnB4ZEpoWHhMU0RiZ09XX0wxLW1wM3hYZzNkX2ppQkgwRko5M1ROU2l0eEVlQ2Z2a2d2MWtWNm5FQjhLWUY2ZDVLSVBRZlNTb0FVRHJYZDI4UE04ZzZ2YlZwUjdBMUVoLUtYdC0xX3pISV84YUFuTWlNM3ZLMndjeTYzS0tNX0Fja0VQMjlpcWtSaUdaWXJnMDBqU3dZQldqQWxFNVRlOUVyU1l5NXo2c2UxYg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2523
    },
    {
      "date": "Oct 01",
      "text": "US to send 3rd carrier strike group to Middle East as Iran tensions rise.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiywFBVV95cUxNZ0N1eVEzV0xVR3B6Z1dzbVdHOFFYZ2xMUFpuRUh3T21zR1pXb0djeEM2bjNfNUhjQnlKeUE3MkFsVTRoWWlQNXNSYkZYM1dOemctLWIwUklOeXlaUlY0TVhWSFNKVThhSXdpSE8wbFFXVVZjcE11NWxjN0RYcWxmdy1lUTl1RXRleTVwdFYyX09MQkVuUGgwR1hSR0Q1S2J3bG9UYzVPSUZMRUNKb2dKMTROSmtmMjQyOTJmcE9kdFhnQUFXOHhVeXgtSQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "aa.com.tr",
      "latestSinceUpdate": 2523
    },
    {
      "date": "Oct 01",
      "text": "Israel strikes Iran again after killing supreme leader.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxQNUJsRHVwNWdDbERlODlLMkVlWHMtRG5icmNrTDlpbHlUVERGLVh2eFExYUlxZ3Z2NjVOSFlQQ01DdEw0MkM4S01ibjlVNjJqbUpJWEgzd2w3bE5IZmhrZEd4MVZZakVvTHJIVWdkR3VTOHA4LUFua1E3LU1pZzZXOE0yYU9OZGczSFRhY0llaGZ6RW9PRkMwSkptS3Z4QVUxaEJWUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Canberra Times",
      "latestSinceUpdate": 2523
    },
    {
      "date": "Oct 01",
      "text": "Three oil tankers hit by projectiles in Hormuz strait on Tuesday.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNMGxqUHRGWUpFZWo3eVZkQ1NnR2NZM05rLWhoWHNOOE5IaGhwSjk4QlNXRi16Q1BGYVlMc2VPWUh6dm55bHluMjg5WGxvY0dfcmdNcDJIaGc5UjFwaXVpZlFTd21VZDU5dkdpZUtteEtQVll0M09hVHRPMG4wZU56UlNMMjIxREx3dmJZOVNFZjE3R0ZrQ3Q0R0VaazBjWk9LcS1UOWR2S1BfRmc2M1FIeU1Qa3liNHZRcFJINWtYQ1c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2523
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "US/Western Security",
      "headline": "US Bolsters Mideast Presence Amidst Iran's Aggression",
      "summary": "The United States is significantly increasing its military presence in the Middle East, deploying multiple carrier strike groups and Marines, in response to rising tensions and perceived Iranian aggression, including tanker attacks and support for proxies. Trump's rhetoric suggests a firm, uncompromising stance against Iran.",
      "tone": "defiant",
      "latestSinceUpdate": 2521
    },
    {
      "perspective": "Iranian Diplomacy/Resistance",
      "headline": "Iran Proposes Peace Amidst US Military Buildup",
      "summary": "Iran has indicated it received a US response to its 'war-ending proposal,' suggesting a diplomatic channel remains open despite the ongoing conflict and US military escalation. Concurrently, Iran continues to support regional allies like Hezbollah, which has acquired substantial weaponry.",
      "tone": "strained",
      "latestSinceUpdate": 2521
    },
    {
      "perspective": "Regional Stability",
      "headline": "Proxy Conflicts and Regional Realignment Intensify",
      "summary": "Hezbollah's continued weapon acquisition and secret talks with the Syrian government highlight persistent proxy conflicts and shifting regional alliances. The withdrawal of US forces from Iraq creates a vacuum that could further empower Iran's regional influence, challenging stability efforts in Lebanon and beyond.",
      "tone": "anxious",
      "latestSinceUpdate": 2521
    }
  ]
});

export default LATEST_SNAPSHOT;
