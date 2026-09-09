export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2378,
  "lastUpdated": "2026-09-09",
  "lastSyncedAt": "2026-09-09T01:29:54.122Z",
  "warDay": 194,
  "summary": "The conflict involving the US, Iran, and Israel continues to escalate with direct military engagements, naval incidents in the Strait of Hormuz, and increased clashes between Israel and Hezbollah in Lebanon, leading to civilian casualties.",
  "lastNarrativeUpdate": "2026-09-09",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 2,
    "summary": "No ceasefire or de-escalation efforts are currently reported."
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
        "precision": 0.5,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 90,
    "oilDisruption": 75,
    "tradeImpact": 70,
    "sanctionsPressure": 64,
    "globalPressure": 83,
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
      "date": "Sep 09",
      "text": "US military destroyed 5 more Iranian oil tankers after missile attacks on Navy warship.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxOUlN5b1FuNFl6ajd5T0Z0MVppWHZ5Y2hFOHJ4dkd0X1dqMGljMHlOX0FZNE9HSXU4SmoxVUVQVEs5OUg2OG8yM1NyazNZQ1VPU1dCS3p0NmNsUk5rVjBMY0xONjRQWGRtTk1vZkNFOC1PWElwcGZmbk9SUzVRS3JCeTlhN25heDc1b0dWbA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 2378
    },
    {
      "date": "Sep 09",
      "text": "Iran attacked US army in Jordan.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNcDBXTktaeW5IYnVNSlBhR1Y2ZzZmVEhBZzU4d0Y2bmQyMnY5X2ttbF95bFoyRldZTExTQ1N6LTlwLTAtcTBfbXhEUEw3allpSXJ1QXYyQkhOcUZteW1PdFExZEZTbjJLY1AxX21lZkk3MTVsZTdVMFIwSUdWak4tN2I1Uzg0cFBlQ2kwT2VrdDBuTEZybm9ELTRHZGV0YUdacDFGb2NjTzB6TFRmRHRsY3VlckNiV3BPRFdqU9IBwgFBVV95cUxQMWZzenNaLWdwZ2kxZFZUZ2lqczJNNnRhbVlFVHdwSkNjYzVGS1NIeVJhYV9BQXlreENVaFRPZk1NT21pM1pIWGxWNXlHNkkwVHJKMndXc2s4MDByb1gyelNrVjJmODFNQkRkNGg4VG5uWGRDLTc1Wi1zNDR6dUo2X1ltZnlDaHFkQ2hmekdGTkFMU0RwUUpYc1VCT0hDaXAxeTNLMUFsSjBYVFdYRy1CT1hUaVJGdFpyeXB0aC1kN01HQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2378
    },
    {
      "date": "Sep 09",
      "text": "Iran says it captured a US submarine drone in the Strait of Hormuz, which the US downplayed.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxPM0VkUnd5VzlEZVhBUy1ja1Q0dFZ6RE0yZHp2dGdobTZHajY0ZTZ6MXdkVWtKV2hYal9nY2dRRUlxU0RlZmxyQ3dmMXpKMFVVNlh2Q25LRVp3LXZHWmtrbzZGM3djQlVtVWdQb0U5RFNTOVA2U1BUMlFWcDZqblV2MGZLdEZPQllselJKcm44eld0STZhTDdsd2R1RG1HT1RrNm53VTZXNXVWWDla?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2378
    },
    {
      "date": "Sep 09",
      "text": "Investigation into US-Israeli strikes on Tehran neighbourhoods reveals devastating civilian harm.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2378
    },
    {
      "date": "Sep 09",
      "text": "Israel-Hezbollah clashes killed 11 people, escalating the Mideast conflict.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2378
    },
    {
      "date": "Sep 09",
      "text": "Israeli strikes in a southern Lebanese village killed 12 people, including 2 children.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBkeHo4dnBmNnFsLXpHaUU2czN0MG52bTBadUNFVlNWTTExWWFTanpTZnp3YS1QVEFsVkVPYWREVFRhRVBvY3NwcV9kakJ5clVhb2VtUjhMNzlTZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 2378
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
