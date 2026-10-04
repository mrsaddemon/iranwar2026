export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2532,
  "lastUpdated": "2026-10-04",
  "lastSyncedAt": "2026-10-04T01:56:57.879Z",
  "warDay": 219,
  "summary": "Ongoing conflict in the Middle East sees escalating US-Iran tensions, military buildups, and attacks on oil tankers in the Strait of Hormuz, alongside reports of civilian harm from US-Israeli strikes.",
  "lastNarrativeUpdate": "2026-10-04",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire or de-escalation efforts are reported amidst ongoing conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 64,
    "globalPressure": 82,
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
      "date": "Oct 02",
      "text": "US to send 3rd carrier strike group to Middle East as Iran tensions rise.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiywFBVV95cUxNZ0N1eVEzV0xVR3B6Z1dzbVdHOFFYZ2xMUFpuRUh3T21zR1pXb0djeEM2bjNfNUhjQnlKeUE3MkFsVTRoWWlQNXNSYkZYM1dOemctLWIwUklOeXlaUlY0TVhWSFNKVThhSXdpSE8wbFFXVVZjcE11NWxjN0RYcWxmdy1lUTl1RXRleTVwdFYyX09MQkVuUGgwR1hSR0Q1S2J3bG9UYzVPSUZMRUNKb2dKMTROSmtmMjQyOTJmcE9kdFhnQUFXOHhVeXgtSQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 2531
    },
    {
      "date": "Oct 01",
      "text": "Three oil tankers hit by projectiles in Hormuz strait.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNMGxqUHRGWUpFZWo3eVZkQ1NnR2NZM05rLWhoWHNOOE5IaGhwSjk4QlNXRi16Q1BGYVlMc2VPWUh6dm55bHluMjg5WGxvY0dfcmdNcDJIaGc5UjFwaXVpZlFTd21VZDU5dkdpZUtteEtQVll0M09hVHRPMG4wZU56UlNMMjIxREx3dmJZOVNFZjE3R0ZrQ3Q0R0VaazBjWk9LcS1UOWR2S1BfRmc2M1FIeU1Qa3liNHZRcFJINWtYQ1c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2532
    },
    {
      "date": "Oct 02",
      "text": "Investigation into US-Israeli strikes on Tehran neighbourhoods reveals devastating civilian harm.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2532
    },
    {
      "date": "Oct 02",
      "text": "Yemeni forces strike Sanaa.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxQa1VIS3ZuMjVWckRFYnZtcHc3cms4NzJwUGxYTUNfcWFTdDU1V2JBbHBreHcxU3RIWUxzQjBVNEowakotTzhtOF9NMzFFRkIyZUxBYkJTM2F4a1NvbWlHdFVvQ0pwaV9hcUlmRkpIS2Etc1JDRnZzQmJLd1JFVndXY1V0cjJFcUwtMTJ2a1ZuT3pLZ0FmWlp3S29ka3I5RE95VjZJVFpXRmFrOFp0LVBPZGpTZmJ1cGg1WWxKUtIBwgFBVV95cUxObzg1V185MmNCZ3V4QnN6NmZFWFo3N0dMMlFzdEFiOUhldTZEZDh4VFlsZ2NBRTI1Vk1vSnhYcTE5Qkd6ekN0SXRQbFY2MGpXX2pUVWFTWUJ3LWNrbDBUZE9QaC1OSm5NNkRlWXFpWEVrbVZlblItZTYzU29QLXZqQ3pYTDZHbkZSTWFUOVhTR0IxYkJLQUUwdEFOX0MzZi1FNVpkQkk0dDhWekk2LXFzNUZwTmlPQWdEYkFQLWgwRk8tZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2532
    },
    {
      "date": "Oct 02",
      "text": "Foiled Houthi missile injures Saudi resident.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxNUC1tREkzTk9ydXdTMXFqZzAzMzlCZWN2N2RnVG5WM0V3Z3ZBblk0SkI4bkJ2ZXhmQXBsZFFVajMwVWdNRi1SUmNfRWJwZENIcEZtM1BaZVU2blVWLXhkMUhtdXI0SklvQm1vU1BEVXJlZFg5TDQwcU5EeGpqME9Yalk4RFUxSWJtZ3pyTmxRM2hZaFRNZUI0ZEVhWE9IdmdOalB4LWs0cXlkU29GLV90dFNTbzFXNGxlNUhTV3hB0gHDAUFVX3lxTE81ZkY5SzJvZG1CTnB0NzcyT1FleFBfZUIzanRrSjROcXZUd1JVakZQV3Fhc0U1SXRQMllyZkZrN2ppSU02NmZlT3pXMWlFelRNQU9MX0dRRmJRTGJRa1JyMDdkTy1FZHhsd2xLRVR4Y25UeVJ1QV9uY3UydUJsQUdtSS1nR1lqRTlZZmZ3ZEVhRERtdE5SekFHQVZubjFMODNld2lETXc0Q0tvUDE4VTlQTmR2U3pqREJBczBpSE9QNjg4cw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2531
    },
    {
      "date": "Oct 2026",
      "text": "Syrian Government and Hezbollah held secret talks in Turkey.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2532
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
      "perspective": "Escalation Concerns",
      "headline": "US Military Buildup Signals Heightened Iran War Risk",
      "summary": "Reports indicate a significant US military buildup, including a third carrier strike group and 10,000 troops, raising concerns about further escalation in the ongoing conflict with Iran. High-level US meetings are underway to discuss next moves.",
      "tone": "anxious",
      "latestSinceUpdate": 2532
    },
    {
      "perspective": "Oil Supply Vulnerability",
      "headline": "Hormuz Strait Remains Under Threat Despite Increased Oil Flows",
      "summary": "Despite claims of Middle East oil supply nearing pre-war levels, recent attacks on three oil tankers and Iran's continued threats to the Strait of Hormuz highlight persistent risks to global energy supply. Iraq reports continued crude transport through the strait.",
      "tone": "strained",
      "latestSinceUpdate": 2532
    },
    {
      "perspective": "Regional Proxy Activity",
      "headline": "Hezbollah Defiance and Strategic Talks Signal Continued Regional Maneuvering",
      "summary": "Hezbollah, reportedly receiving substantial foreign weapons, asserts a defiant stance against Israel, with its new generation vowing no quarter. The group also engaged in secret talks with the Syrian government in Turkey, indicating ongoing strategic coordination.",
      "tone": "defiant",
      "latestSinceUpdate": 2532
    },
    {
      "perspective": "Civilian Impact of Strikes",
      "headline": "Investigation Reveals Devastating Civilian Harm from Tehran Strikes",
      "summary": "An investigation into recent US-Israeli strikes on Tehran neighborhoods has revealed devastating civilian harm, drawing attention to the human cost of the conflict. This raises questions about the precision and impact of military operations.",
      "tone": "skeptical",
      "latestSinceUpdate": 2532
    }
  ]
});

export default LATEST_SNAPSHOT;
