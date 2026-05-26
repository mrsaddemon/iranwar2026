export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 789,
  "lastUpdated": "2026-05-26",
  "lastSyncedAt": "2026-05-26T23:51:15.088Z",
  "warDay": 88,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-26",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 15,
    "summary": "A previously established ceasefire has collapsed following renewed US strikes on Iran and Israeli offensive in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
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
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "May 26",
      "text": "US launches new strikes on Iran, targeting missile sites and boats.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9WaDJGdEZ0YndpVVJXUlUydGhtZnZWVUFDdnR6MUdTSmhQNVMyZmRKUGMxZC0yTUNNTGw1Q2Q1M3VsNWVacFJ2X3cwd1BiOTd4b1BSYWxBM1Bodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 788
    },
    {
      "date": "May 26",
      "text": "Iran’s IRGC threatens to retaliate after US strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE1uWVBMM2w2ZVhhWGFBV0lNRDlUTFMtOWU2cHBhY0prUVpBSW1kYVU4TzdSbWFXS0JSTlNNUFRZYmdpdHQzVXB2X0VpTTFoVE1jc3VjVEpWNUstem0xdk13ZlIzYUgzbEFmejZpS0d1V1hZT0wzYjJvYQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 789
    },
    {
      "date": "May 26",
      "text": "Israel pushes deeper in Lebanon and intensifies strikes against Hezbollah.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 788
    },
    {
      "date": "May 26",
      "text": "Peace talks in Qatar are strained amidst renewed hostilities.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 789
    },
    {
      "date": "May 26",
      "text": "U.S. Navy is guiding ships through the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 788
    },
    {
      "date": "May 26",
      "text": "Piper Sandler predicts Strait of Hormuz closure for months, leading to new oil highs.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxPTTF6a1RJXzh0Q0RvQnBrQkJzZ2dxaEMzTW9QVnVsQk9KUER0VE1KSDdNZDhOcFFEdktIYjA1Y0xIV1RWUXJtazdyN25zYjE0dy1ORGNlWHFWNkFxWFRxVVVWaU9jaE5KbU1lQlF6M3F4UVV2OGkteVVpeVctZ2E3SkdObkFCZG9MQWtLaktJZWVwaWtOSFBoaVdGRnVlYXEzSmY3dGJfNTJPZ280Wm8xb292TV9pQnhYVGFzQ3paZTE4ZUXSAcgBQVVfeXFMTmU4aHpNSFRqZlp6Z0k0cDBpd0ZaTWdQd1VNeXBqcld4NDNPbjlGTWFXcXBGRnYwMFNaZy1uNlRYYWFFSVNVMlp1SFYzX3hNS3VzTDJPMHl5SnhiX3o4eEU0dFZDOWVpRDhfTkRtWExHTE5zV2VOOFkyUTV4eGdubVpWUHc4RDBYQndLM294bmQ5Q3h3Wkhnc1lxSFVSVW4xVUZDNGc5SGhsVEhDbmtPVm1oZ0RkNzBySktKM3RWOVVkMXg4bElISnk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 789
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (16 headlines)"
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
      "perspective": "US/Trump Administration",
      "headline": "Progress on Iran Deal Amidst Strikes",
      "summary": "The US administration indicates progress on a potential peace agreement with Iran, with former President Trump suggesting a deal is largely negotiated, even as US forces conduct 'self-defense strikes' in Iran.",
      "tone": "strained",
      "latestSinceUpdate": 781
    },
    {
      "perspective": "Iran",
      "headline": "US Aggression and Regional Support",
      "summary": "Iran accuses the US of 'overt and covert' moves for attack and reaffirms its commitment to not abandon Hezbollah, despite US strikes within its territory.",
      "tone": "defiant",
      "latestSinceUpdate": 781
    },
    {
      "perspective": "Israel",
      "headline": "Intensifying Action Against Hezbollah",
      "summary": "Israel's leadership, including Prime Minister Netanyahu, has vowed to escalate and intensify strikes against Hezbollah in Lebanon following recent attacks.",
      "tone": "defiant",
      "latestSinceUpdate": 781
    },
    {
      "perspective": "International Observers",
      "headline": "Fragile Peace Prospects Amidst Escalation",
      "summary": "Hopes for an imminent breakthrough in a US-Iran peace deal are being played down, with ongoing military actions by both the US and Israel indicating a volatile and escalating regional conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 781
    }
  ]
});

export default LATEST_SNAPSHOT;
