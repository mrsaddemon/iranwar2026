export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2384,
  "lastUpdated": "2026-09-09",
  "lastSyncedAt": "2026-09-09T23:18:49.839Z",
  "warDay": 194,
  "summary": "The US and Iran are engaged in direct military conflict involving strikes on tankers and attacks on military personnel, while Israel intensifies its campaign in Lebanon, leading to rising oil prices and concerns over civilian harm.",
  "lastNarrativeUpdate": "2026-09-09",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect as military engagements between the US, Iran, and Israel continue to intensify."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
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
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 68,
    "globalPressure": 90,
    "allianceInfluence": 73
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Sep 08",
      "text": "Trump states Iran war could end post-US elections and talks are possible.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxQVGRvY3RUVHlVT1NoWDA0d2pZLTV5TjF4TG5UOVRtZGhlcHAtVFVhY2pPVFk2MUJSdEl6U2ZZSjNTQjlJd1otUGNQMjNRT1BMa2NvNDlEdThYXy1DOVB0WGJEaS1FN0RzYVBmendOTkRXQ0hhdEVlSkpSMDRyMU5kUmprSWlwYVJJV0pMVWxXSVRMV195T2VJN0l3WGR0enhTbGN2N3BDbkR6a3pCV1hCZVFwM3lLQXVV0gG-AUFVX3lxTFBZVkRPczZnZnVlUEJVSFhpeUlhTDdvZWh6dHJ4M2VCd3VlbmtIXzVJdXhtdzhJczNpTWNjSmdsWU9KVWExWkZnbW1NdW5obUtJUDZZSlJqRkxocGJtNXJULUpmNWdfN1NER0dubG1BSm1XX2I4VVlsVnpNOWZEajZqSTlXOXdNNXNvMXhVc2tieE5rODhVWGtHQnFocDRmSWhUUXlIdmhJTHhXOUhzVTVVQjlrNlhrbWZMN2ZVZmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2384
    },
    {
      "date": "Sep 08",
      "text": "US hits Iranian tankers and Iran attacks US army in Jordan.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNcDBXTktaeW5IYnVNSlBhR1Y2ZzZmVEhBZzU4d0Y2bmQyMnY5X2ttbF95bFoyRldZTExTQ1N6LTlwLTAtcTBfbXhEUEw3allpSXJ1QXYyQkhOcUZteW1PdFExZEZTbjJLY1AxX21lZkk3MTVsZTdVMFIwSUdWak4tN2I1Uzg0cFBlQ2kwT2VrdDBuTEZybm9ELTRHZGV0YUdacDFGb2NjTzB6TFRmRHRsY3VlckNiV3BPRFdqU9IBwgFBVV95cUxQMWZzenNaLWdwZ2kxZFZUZ2lqczJNNnRhbVlFVHdwSkNjYzVGS1NIeVJhYV9BQXlreENVaFRPZk1NT21pM1pIWGxWNXlHNkkwVHJKMndXc2s4MDByb1gyelNrVjJmODFNQkRkNGg4VG5uWGRDLTc1Wi1zNDR6dUo2X1ltZnlDaHFkQ2hmekdGTkFMU0RwUUpYc1VCT0hDaXAxeTNLMUFsSjBYVFdYRy1CT1hUaVJGdFpyeXB0aC1kN01HQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2384
    },
    {
      "date": "Sep 08",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighbourhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2382
    },
    {
      "date": "Sep 08",
      "text": "Oil hits $100 a barrel for the first time since July after US and Houthi strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1YNWJtUDJmUXdQb2JLMUZpVFNTU3llRTdfSHkzQWVPMjdfb3lJM0RhaTJBWk51RDY4QWlQS3IzemgyeU1EcXBVMkRlVXlySHZzQWFRcFZ0eVFXdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 2384
    },
    {
      "date": "Sep 08",
      "text": "Iran claims to have attacked 10 ships near the Strait of Hormuz after US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQN0tGcHN6eVRuV0EzMllYUTYzOHd1ZDhFeWpJczVqMjB1a3JWWWpnRjh1RmV3Mm1Ya1ViQWxRRjhLRjRfWXlhVHVhM1ZOWlZyZkE4LXRTVDdQZ3RxQ3l2eEM5b1VkLVBySjVITFJMc1NjenAwakdZeEp1ZFBWV0UwcHBoQVdhTHhMRVl4bHdOVWh2X0IyNE5CMGVqYkxqbGtUd0xhY0d5UVNWVVhmTG9IUkROSnNlNDR1ckhkdEZ6dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2384
    },
    {
      "date": "Sep 08",
      "text": "Iran launches massive attack on global shipping.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2384
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
      "perspective": "US/Israel",
      "headline": "Countering Iran and Proxies Amidst Escalation",
      "summary": "US and Israeli forces are actively targeting Iranian assets and proxies, asserting freedom of navigation in critical waterways, and responding to regional threats. Operations aim to degrade Iranian capabilities and maintain regional stability despite increasing conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 2378
    },
    {
      "perspective": "Iran",
      "headline": "Asserting Sovereignty and Resisting Aggression",
      "summary": "Iran is asserting its regional influence through military actions against US forces and capturing advanced US drones, while facing significant strikes on its oil infrastructure. The nation emphasizes its right to defend its interests and territory against foreign aggression.",
      "tone": "defiant",
      "latestSinceUpdate": 2378
    },
    {
      "perspective": "Regional/International",
      "headline": "Growing Concerns Over Prolonged Conflict and Civilian Harm",
      "summary": "Concerns are rising over the escalating conflict's duration and humanitarian impact, particularly with increased civilian casualties in Lebanon and Tehran. The international community watches closely as direct engagements between major powers intensify, risking broader regional instability.",
      "tone": "anxious",
      "latestSinceUpdate": 2378
    }
  ]
});

export default LATEST_SNAPSHOT;
