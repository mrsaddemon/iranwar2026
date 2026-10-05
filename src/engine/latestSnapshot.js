export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2538,
  "lastUpdated": "2026-10-05",
  "lastSyncedAt": "2026-10-05T05:50:27.708Z",
  "warDay": 220,
  "summary": "The Iran war continues with escalating tensions, including US troop deployments, US-Israeli strikes on Tehran, renewed attacks on tankers near the Strait of Hormuz, and clashes between Israel and Hezbollah in Lebanon, while Iran states there is no military solution.",
  "lastNarrativeUpdate": "2026-10-05",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is reported amidst ongoing conflict and escalation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Oct 03",
      "text": "US deploys new aircraft carrier and 10,000 troops, raising escalation concerns in Iran war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxNVFl3S200MERGUFV0MDdPcTBxN1JKcXhpOThnWXdNLXNQaXVTVTdUVkpiUGtsNGVfRVh1d0JfYVhiUkloYTRYSEdiRUdtQU50cVYxSHdlc2txXzNnVlduc1ZGeDB0dzdrSXR0ZnA4TElyZVFGSnFFWXN2TldMOGU5RU9TaXNJMkhxNm5UVDFMcXBmRVBYbTVua0dPSEJPYU1aa0pNQ2dIT1dMb1FUc0pnedIBtgFBVV95cUxPUmpzU2paSy0xR0pqdVRBRVFKb0lsVmk5bTQwSHc1blBvc2phUFF4WFJySk5QRVpsa0c4QWtTRmhubVczdkwyUklKNWhIUnQwX2h0bHo3NVRzQXRYdUJMekp4dHJYTFF1c05ncmFKa0U4WU9RTG5wYzNnTkVrb1lyMVF4WThCN2dPdkR4djF0MEVLLU5LWXJ5NGxFRWtjcHpZRFVtbW83emlMaVFIazJfVkhqUXRIZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2538
    },
    {
      "date": "Oct 03",
      "text": "Yemeni forces launch offensive to seize Houthi-held areas.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxQdmhaOWQ3S3FWZ3VDUmJjX0M4a19hSGF0WXo0R2V3NkZiZ2ZzOTJ3MDZhbjEwam5FT01JclpEcTZCNTJPWnVWRTVXYzljN2lDdVI1TkdRYlFWc21hQkFqUVdTVW01dkFfbk1iNmJQeC1WWUdmOW5GLTV6ZTB4M2t2bXNib1JoaXpzY2ZQMVNyVnlwTnBqSkVGSmFXemJuZV8xblFvSjNZMjZuLTlOR1l4TGp1VUhvUE9mSDlkLXJBSmloQdIBxwFBVV95cUxPNkdZNy1ScmkxWHFtcVREQWRQeF9iNzJBSkxRWUN1cG94MWVtYWY2cUpDNkE5VmtaQkdqTVJtMWg2OTFKeEdneWZlZTJEM3lUUTA4UWppWXh1SW5weDZsQzRJRUd0Q1N2Sm11cHlfTjB6SlVBaVpzRXZWUHBEQ1dPUE5fX21ENUZOT2hyZ0N2SVNCb25wU3dqM0JHWENlMEY2SjEyNlBXUTJib1ZhLTdFZkhfU092WEdRVGNLTXNtWWd4WVE3bk9B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2538
    },
    {
      "date": "Oct 03",
      "text": "Foiled Houthi missile injures a Saudi resident.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxNUC1tREkzTk9ydXdTMXFqZzAzMzlCZWN2N2RnVG5WM0V3Z3ZBblk0SkI4bkJ2ZXhmQXBsZFFVajMwVWdNRi1SUmNfRWJwZENIcEZtM1BaZVU2blVWLXhkMUhtdXI0SklvQm1vU1BEVXJlZFg5TDQwcU5EeGpqME9Yalk4RFUxSWJtZ3pyTmxRM2hZaFRNZUI0ZEVhWE9IdmdOalB4LWs0cXlkU29GLV90dFNTbzFXNGxlNUhTV3hB0gHDAUFVX3lxTE81ZkY5SzJvZG1CTnB0NzcyT1FleFBfZUIzanRrSjROcXZUd1JVakZQV3Fhc0U1SXRQMllyZkZrN2ppSU02NmZlT3pXMWlFelRNQU9MX0dRRmJRTGJRa1JyMDdkTy1FZHhsd2xLRVR4Y25UeVJ1QV9uY3UydUJsQUdtSS1nR1lqRTlZZmZ3ZEVhRERtdE5SekFHQVZubjFMODNld2lETXc0Q0tvUDE4VTlQTmR2U3pqREJBczBpSE9QNjg4cw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2538
    },
    {
      "date": "Oct 03",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighborhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2538
    },
    {
      "date": "Oct 03",
      "text": "US bombers leave UK base due to terror plots; more tankers struck near Iran in the Middle East.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxQUjEwRGxoTll0b2ZCWkRZZl9iUzBKblN5TXJNM0Y5RXpZUmYwMW1YVW0wcFZYcEl1UTk0Q3VpTl9qZXBtYkg1QzdBWDZIa0wwdWZJZ0tsbU5DbHg1LWhOR2hCWWRzUVV4Qy1wd1pWVW9ZQ3NrdmE4RkpJUkRJYXk0ekNzVXQzalpLY3AtUU1mb3FlcnRnc1BEUi1KaDVEUWFiVUhF0gGoAUFVX3lxTFBMNDgyNFd0ZWdGbHlrRGNsUEtGbUx2ci1KakxlMXpuRks0Nl9jY2pjdC1pTkRVYXJRajFmdVZqaHVQZ2lmTmtzVkJaM1JnWWI3VlBTZHhYMDBRUjd5R0NzNEZ0S2w5bVJ5NkpvZHZqaWFPd0V0T2FrX1V1bW1vaFpiYUYtNHJoYko3ZTNXQW1ZTVV1RlNGN2ZZRmJvWUZiUWFxcGNRSWJ0UA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2538
    },
    {
      "date": "Oct 03",
      "text": "Strait of Hormuz faces gridlock and renewed attacks on ships, risking global food crisis.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2538
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
