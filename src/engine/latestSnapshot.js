export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2385,
  "lastUpdated": "2026-09-10",
  "lastSyncedAt": "2026-09-10T01:09:49.699Z",
  "warDay": 195,
  "summary": "The conflict in the Middle East has significantly escalated with direct US-Iran military engagements, including strikes on tankers and retaliatory missile fire, alongside intensifying Israel-Hezbollah clashes, driving oil prices above $100.",
  "lastNarrativeUpdate": "2026-09-10",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or de-escalation efforts are currently reported amidst ongoing military engagements."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
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
      "date": "Sep 08",
      "text": "US hits Iranian tankers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNcDBXTktaeW5IYnVNSlBhR1Y2ZzZmVEhBZzU4d0Y2bmQyMnY5X2ttbF95bFoyRldZTExTQ1N6LTlwLTAtcTBfbXhEUEw3allpSXJ1QXYyQkhOcUZteW1PdFExZEZTbjJLY1AxX21lZkk3MTVsZTdVMFIwSUdWak4tN2I1Uzg0cFBlQ2kwT2VrdDBuTEZybm9ELTRHZGV0YUdacDFGb2NjTzB6TFRmRHRsY3VlckNiV3BPRFdqU9IBwgFBVV95cUxQMWZzenNaLWdwZ2kxZFZUZ2lqczJNNnRhbVlFVHdwSkNjYzVGS1NIeVJhYV9BQXlreENVaFRPZk1NT21pM1pIWGxWNXlHNkkwVHJKMndXc2s4MDByb1gyelNrVjJmODFNQkRkNGg4VG5uWGRDLTc1Wi1zNDR6dUo2X1ltZnlDaHFkQ2hmekdGTkFMU0RwUUpYc1VCT0hDaXAxeTNLMUFsSjBYVFdYRy1CT1hUaVJGdFpyeXB0aC1kN01HQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2385
    },
    {
      "date": "Sep 08",
      "text": "Iran attacks US army in Jordan.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2385
    },
    {
      "date": "Sep 08",
      "text": "Investigation into US-Israeli strikes on Tehran neighbourhoods reveals devastating civilian harm.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2385
    },
    {
      "date": "Sep 09",
      "text": "Oil hits $100 a barrel for first time since July after US and Houthi strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1YNWJtUDJmUXdQb2JLMUZpVFNTU3llRTdfSHkzQWVPMjdfb3lJM0RhaTJBWk51RDY4QWlQS3IzemgyeU1EcXBVMkRlVXlySHZzQWFRcFZ0eVFXdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 2385
    },
    {
      "date": "Sep 09",
      "text": "Israel-Hezbollah clashes kill 11 as Mideast conflict escalation gathers pace after U.S.-Iran strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxObk5EbElublhva1o0aEYxbmpnTFB1aEU1dTNvenR2eHJndXFvYjVTTFJmYk5EQWpSVXdlaXhiM2lFeks5aFh6M1hQd2hJSDgwRXB1b3ducmllX19mam9CRFRjN0dlQVp5ak1QaEphcE8wUXpkYW4xUS1JYWpiTDJvcS1EOHduTjN5OWJWNy11anpKMlVoYlgtM2dwNGnSAaIBQVVfeXFMT0FyOVVHZVpXUUtqTWpKZ0hYdnVEZ1FhWTRWNk44bnZlS2Y2dkV5VTVGZjVYbm94MXcwMzN4TUY5YXBPX05qUUM2Q09sM3BYYl9uWlVFcmZsbmFCMjhCZE11bEN3bmt5VFpVdmdybHFfSExucWpXSVpZNVZjQTVOOFZIdXI3VWVvdjdsV1o2b1doQk9ZT0NxUldDTEdaRmZ3Mjh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2385
    },
    {
      "date": "Sep 09",
      "text": "Iran fires missiles in retaliation for U.S. blowing up tankers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxQUVJuX1liNlV4OVBFUUZrMUQ4QWNZV0R3enp2b0pzN0gwVVVKeW9xUmdKejFueWVCM3Z3RXI2TldvbVYzWXNPRlRNNmFSd3ZxVERxem0wX3R6YjFwcERxa1ZjUDhKbU93RGFPVG5rU3dqUVZkS2dlQU1qcmhsM21HY29Ea1MxdmNDYWVFZThvcGx0M0ZuUUFGdVl4Qmd4QUpaLWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2385
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
