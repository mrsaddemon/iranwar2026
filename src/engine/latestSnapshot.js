export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2533,
  "lastUpdated": "2026-10-04",
  "lastSyncedAt": "2026-10-04T08:19:30.174Z",
  "warDay": 219,
  "summary": "The ongoing war with Iran continues, marked by increased US military presence, US-Israeli strikes on Tehran causing civilian harm, and Iran's threats to close the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-10-04",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire or truce is reported amidst the ongoing conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.85
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "text": "US deploys a new aircraft carrier and 10,000 troops to the region amidst escalating tensions.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2533
    },
    {
      "date": "Oct 03",
      "text": "A Houthi missile attack was foiled, resulting in injuries to a Saudi resident.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2533
    },
    {
      "date": "Oct 03",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighborhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2533
    },
    {
      "date": "Oct 03",
      "text": "Iran issues an ultimatum for talks with the Trump administration.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2533
    },
    {
      "date": "Oct 03",
      "text": "Iran states the Strait of Hormuz will not reopen until its seven conditions are met.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNUEhSM2E2MkI0TDU0LXVLZl9GLWY5d3FoTU1PdS1ON0xUV1NNQ3FnUlZGRFhOYkVHTVp5RDFaN3pxZ1pVeVNJdTdhemxsNkdRaHJBTWNtRDEwWjg2cnlKb3F5VmpEN25tTHNmV2hLTnFkc1IxSEhLVGplNTJJSnBXMDFmOUN1V3NpRmxoVnJkcmRxd1hmbzBRTHZjd05rWlhUbDBfQmFCZWRkS0pHUTJNa041QlRtSkd5YUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2533
    },
    {
      "date": "Oct 03",
      "text": "Hezbollah reportedly received $157 million in weapons in 2024, primarily from one nation.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxOT3BnMmhxMk51NGRmZGFGNEpZSW5Wc2RJRi14a015MF9jUXlxZlA4NFZSV0Rjd083YUdUUzNhVFNheXJpTF9nNHJwemlUUm45NDVGTmFvLWtUZWRVT1JnUkJ0MXB0RmRaNWt0Z0JYSHFXUmxjLVhNTFFiYmdva05kSlNYNHdoTDZhalF3ODJKTnZFUF9KT0xoRA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Yahoo",
      "latestSinceUpdate": 2533
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
