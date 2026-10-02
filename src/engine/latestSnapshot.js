export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2522,
  "lastUpdated": "2026-10-02",
  "lastSyncedAt": "2026-10-02T07:28:29.100Z",
  "warDay": 217,
  "summary": "Tensions in the Middle East are critically high with US and Israeli military actions against Iran, significant US military deployments, and attacks on oil tankers in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-10-02",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is in effect; direct military actions and aggressive rhetoric continue."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 70,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Sep 30",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighbourhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2522
    },
    {
      "date": "Sep 30",
      "text": "US to send a third carrier strike group to the Middle East as Iran tensions rise.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiywFBVV95cUxNZ0N1eVEzV0xVR3B6Z1dzbVdHOFFYZ2xMUFpuRUh3T21zR1pXb0djeEM2bjNfNUhjQnlKeUE3MkFsVTRoWWlQNXNSYkZYM1dOemctLWIwUklOeXlaUlY0TVhWSFNKVThhSXdpSE8wbFFXVVZjcE11NWxjN0RYcWxmdy1lUTl1RXRleTVwdFYyX09MQkVuUGgwR1hSR0Q1S2J3bG9UYzVPSUZMRUNKb2dKMTROSmtmMjQyOTJmcE9kdFhnQUFXOHhVeXgtSQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 2522
    },
    {
      "date": "Sep 30",
      "text": "Israel strikes Iran again after reportedly killing the supreme leader.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxQNUJsRHVwNWdDbERlODlLMkVlWHMtRG5icmNrTDlpbHlUVERGLVh2eFExYUlxZ3Z2NjVOSFlQQ01DdEw0MkM4S01ibjlVNjJqbUpJWEgzd2w3bE5IZmhrZEd4MVZZakVvTHJIVWdkR3VTOHA4LUFua1E3LU1pZzZXOE0yYU9OZGczSFRhY0llaGZ6RW9PRkMwSkptS3Z4QVUxaEJWUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Canberra Times",
      "latestSinceUpdate": 2522
    },
    {
      "date": "Sep 30",
      "text": "US moves 2,000 Marines to the Middle East; a tanker was hit in Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxNUC1tREkzTk9ydXdTMXFqZzAzMzlCZWN2N2RnVG5WM0V3Z3ZBblk0SkI4bkJ2ZXhmQXBsZFFVajMwVWdNRi1SUmNfRWJwZENIcEZtM1BaZVU2blVWLXhkMUhtdXI0SklvQm1vU1BEVXJlZFg5TDQwcU5EeGpqME9Yalk4RFUxSWJtZ3pyTmxRM2hZaFRNZUI0ZEVhWE9IdmdOalB4LWs0cXlkU29GLV90dFNTbzFXNGxlNUhTV3hB0gHDAUFVX3lxTE81ZkY5SzJvZG1CTnB0NzcyT1FleFBfZUIzanRrSjROcXZUd1JVakZQV3Fhc0U1SXRQMllyZkZrN2ppSU02NmZlT3pXMWlFelRNQU9MX0dRRmJRTGJRa1JyMDdkTy1FZHhsd2xLRVR4Y25UeVJ1QV9uY3UydUJsQUdtSS1nR1lqRTlZZmZ3ZEVhRERtdE5SekFHQVZubjFMODNld2lETXc0Q0tvUDE4VTlQTmR2U3pqREJBczBpSE9QNjg4cw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2522
    },
    {
      "date": "Sep 29",
      "text": "Three oil tankers hit by projectiles in the Hormuz Strait, according to Marisks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNMGxqUHRGWUpFZWo3eVZkQ1NnR2NZM05rLWhoWHNOOE5IaGhwSjk4QlNXRi16Q1BGYVlMc2VPWUh6dm55bHluMjg5WGxvY0dfcmdNcDJIaGc5UjFwaXVpZlFTd21VZDU5dkdpZUtteEtQVll0M09hVHRPMG4wZU56UlNMMjIxREx3dmJZOVNFZjE3R0ZrQ3Q0R0VaazBjWk9LcS1UOWR2S1BfRmc2M1FIeU1Qa3liNHZRcFJINWtYQ1c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2522
    },
    {
      "date": "Sep 30",
      "text": "Trump states Iran is 'ready to fold up' and warns of new post-midterm attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxOaXNwVUhFZkZrZmxLRFd1QVZwZFFWVjFLcEgxWmNJWnJCMlNnOExuY3BsdWlLaG9HYzF1VjJKYnB6eHlfU1NLZWlUcWhDMmpCVFI1eGczV19kR3kycThHd0ducEtLejdicmJXanhmWWFUcWRJeVVDb28xUlRmTWxPSWRwbXBfRU1uSW1N?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2522
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
