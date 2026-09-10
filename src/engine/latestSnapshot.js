export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2388,
  "lastUpdated": "2026-09-10",
  "lastSyncedAt": "2026-09-10T15:01:02.773Z",
  "warDay": 195,
  "summary": "Escalating US-Iran hostilities, including direct military engagements and attacks on oil infrastructure, are driving oil prices above $100, while Israel intensifies its military campaign in southern Lebanon.",
  "lastNarrativeUpdate": "2026-09-10",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No durable ceasefire signal was detected across the latest source mix."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
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
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Sep 10",
      "text": "Iran war updates: Trump says Iran talks possible, war to end after election",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxQVGRvY3RUVHlVT1NoWDA0d2pZLTV5TjF4TG5UOVRtZGhlcHAtVFVhY2pPVFk2MUJSdEl6U2ZZSjNTQjlJd1otUGNQMjNRT1BMa2NvNDlEdThYXy1DOVB0WGJEaS1FN0RzYVBmendOTkRXQ0hhdEVlSkpSMDRyMU5kUmprSWlwYVJJV0pMVWxXSVRMV195T2VJN0l3WGR0enhTbGN2N3BDbkR6a3pCV1hCZVFwM3lLQXVV0gG-AUFVX3lxTFBZVkRPczZnZnVlUEJVSFhpeUlhTDdvZWh6dHJ4M2VCd3VlbmtIXzVJdXhtdzhJczNpTWNjSmdsWU9KVWExWkZnbW1NdW5obUtJUDZZSlJqRkxocGJtNXJULUpmNWdfN1NER0dubG1BSm1XX2I4VVlsVnpNOWZEajZqSTlXOXdNNXNvMXhVc2tieE5rODhVWGtHQnFocDRmSWhUUXlIdmhJTHhXOUhzVTVVQjlrNlhrbWZMN2ZVZmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2388
    },
    {
      "date": "Sep 10",
      "text": "Trump says Iran war will end ‘immediately’ after midterms",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxNVi1kbjdIVmRlMnpxNDhfOEJSNERJX0gtUDVrRl9oQy1xN1ZPZUpWNU04c0xzcDlhc0Z3bTByRW5IOUM1SmM3NFFjNnY3WjJVYzRSakRRSFd3UGdMbk4zYVczS1hUcTlzWTBQS1BqUGNzRWhkaUZVT09wVlZfWGZraUc1TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Politico",
      "latestSinceUpdate": 2388
    },
    {
      "date": "Sep 10",
      "text": "Iran Update, September 9, 2026",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxQNzNkUFMzeGwwTmU2amMwNkRLRnp2VmVlTTRmdDNjMVp2SlFXUGxickFpT0NEQ0FtaDdBNHlyMEJSaVZpdVVHbnZka3NTaVA2OGlfZzdTenRCRzEzdDVvR1JiX244eUMwbmJoZnY3amFxNGY1OHNPTHJJVmMyc19XVElOVXdZUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 2388
    },
    {
      "date": "Sep 10",
      "text": "Iran war updates: US hits Iranian tankers, Iran attacks US army in Jordan",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNcDBXTktaeW5IYnVNSlBhR1Y2ZzZmVEhBZzU4d0Y2bmQyMnY5X2ttbF95bFoyRldZTExTQ1N6LTlwLTAtcTBfbXhEUEw3allpSXJ1QXYyQkhOcUZteW1PdFExZEZTbjJLY1AxX21lZkk3MTVsZTdVMFIwSUdWak4tN2I1Uzg0cFBlQ2kwT2VrdDBuTEZybm9ELTRHZGV0YUdacDFGb2NjTzB6TFRmRHRsY3VlckNiV3BPRFdqU9IBwgFBVV95cUxQMWZzenNaLWdwZ2kxZFZUZ2lqczJNNnRhbVlFVHdwSkNjYzVGS1NIeVJhYV9BQXlreENVaFRPZk1NT21pM1pIWGxWNXlHNkkwVHJKMndXc2s4MDByb1gyelNrVjJmODFNQkRkNGg4VG5uWGRDLTc1Wi1zNDR6dUo2X1ltZnlDaHFkQ2hmekdGTkFMU0RwUUpYc1VCT0hDaXAxeTNLMUFsSjBYVFdYRy1CT1hUaVJGdFpyeXB0aC1kN01HQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2388
    },
    {
      "date": "Sep 10",
      "text": "USA/Israel/Iran: Investigation into US-Israeli strikes on Tehran neighbourhoods reveals devastating civilian harm",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2388
    },
    {
      "date": "Sep 10",
      "text": "Why Iran Fears Israel, But Not America",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTFBfSmgxV0FETlJUN0h5U3RIRWk4R3hJbEZaalRLSVZac3hPd3hjcmJnSEtNQ3BId3RCcm50aTk4U2FMTzUxYWhRcGpINGFkQmZmTjctQ2tZSkwzNFJtVUdIaEtPMHRrb2hIczlEeEEtMENTTllPRFFkYw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "JINSA",
      "latestSinceUpdate": 2388
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
      "perspective": "US Political",
      "headline": "Trump Predicts Swift End to Iran War Post-Election",
      "summary": "Former President Trump suggests the conflict with Iran could end quickly after the upcoming election, indicating a belief that Iran cannot sustain the war. He also mentioned the possibility of talks with Iran.",
      "tone": "skeptical",
      "latestSinceUpdate": 2385
    },
    {
      "perspective": "Iran's Stance",
      "headline": "Iran Signals Escalation Amid Retaliatory Strikes",
      "summary": "Iran has indicated its readiness to escalate the conflict with the U.S., firing missiles in retaliation for U.S. actions against its tankers. This comes amidst rising economic pressure on the regime.",
      "tone": "defiant",
      "latestSinceUpdate": 2385
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Mideast Conflict Escalates with Civilian Harm and Clashes",
      "summary": "The Middle East conflict is intensifying with deadly Israel-Hezbollah clashes and reports of significant civilian harm from US-Israeli strikes in Tehran. The broader U.S.-Iran conflict is driving regional instability.",
      "tone": "anxious",
      "latestSinceUpdate": 2385
    }
  ]
});

export default LATEST_SNAPSHOT;
