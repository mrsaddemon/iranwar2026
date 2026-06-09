export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 923,
  "lastUpdated": "2026-06-09",
  "lastSyncedAt": "2026-06-09T20:33:22.311Z",
  "warDay": 102,
  "summary": "A recent ceasefire between Israel and Iran has faltered, leading to renewed strikes and a claimed downing of a US helicopter near the Strait of Hormuz, prompting US vows of retaliation.",
  "lastNarrativeUpdate": "2026-06-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 1,
    "summary": "A recent ceasefire between Israel and Iran has collapsed following renewed strikes and a claimed US helicopter incident, though a temporary halt in exchanges has been reported."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "date": "Jun 07-08",
      "text": "Ceasefire falters as Israel and Iran trade worst strikes in months.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxPR2Z1c1luQ3VlZGdLNFE3c0cxRDZBa2JUQlZwMlNlNVZWWXplUDVjbzNZS0dfS1Bub0ZJNDIybDhmSGFkaW5vcmhvdjc4dzAyN1ExdTFuNXhRTU9DUnhBZ0VqX2FySHdaX3RqQ2JPd0I3STZSaU1TNlI5d3ZmcGlTend3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 921
    },
    {
      "date": "Jun 07-08",
      "text": "President Trump claims Iran downed a U.S. Army helicopter near the Strait of Hormuz and vows a response.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiyAFBVV95cUxQMWdvRUJXeEttQUppc3Z2YnF1ZEdwLXNBN085ekR4SUhDaXZocVNJQ3BnRlZPUWNOMHBxNHJzSmxGZExnU1VleDJNQm1uYlpNNkJsT3VXeHZGWTAtYjQ1NFAzM1VuNGwwWEsyRHBydzl6ZkFvTl9WQU1CN19rQ0xuWkZZcmFhNkM3SEtybU9FNUtYTDdzemVweW5FZkR1aDRBc0xaaUFBZTBSUnd2SkxNam8zZ01xemE3Rmx6YVpULV83b3ByZXZMVw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 923
    },
    {
      "date": "Jun 07-08",
      "text": "Israeli air strikes hit Lebanese city of Tyre despite Iranian warning to stop attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1pQ2lCMHpqSjhTWFdQZ0dOZ2hBSXoyY1YtV0tiM0NmVVNuQUpNN1hhazFiWUx0MkhCSFNTZF9kNEVxMTNMVlA0cEtGWGR2dnFJRlBVZXk2ZEpMUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 923
    },
    {
      "date": "Jun 07-08",
      "text": "Iran and Israel reportedly halt exchanges of fire following recent escalation.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 923
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
      "perspective": "Economic Impact",
      "headline": "Global Markets Reel from 100 Days of Iran War Fuel Shock",
      "summary": "Global markets and airlines are experiencing significant fuel shock and profit forecast cuts due to the ongoing Iran war, marking 100 days of conflict. The economic fallout is a major concern for international stability.",
      "tone": "anxious",
      "latestSinceUpdate": 909
    },
    {
      "perspective": "Escalation & Retaliation",
      "headline": "Iran and Israel Exchange Missile Strikes, Vows of Retaliation",
      "summary": "Israel and Iran have engaged in direct missile exchanges, with Israel vowing retaliation after Iran's first missile attack since April, following earlier strikes in Lebanon. This marks a significant escalation in the conflict.",
      "tone": "strained",
      "latestSinceUpdate": 909
    },
    {
      "perspective": "US/Western Concern",
      "headline": "US Focuses on Iran's Nuclear Ambitions and Hormuz Control Amid Gulf Strikes",
      "summary": "US officials and allies emphasize preventing Iran from becoming a nuclear power and controlling the Strait of Hormuz, while also engaging in strikes in the Gulf. The US provides naval overwatch in the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 909
    },
    {
      "perspective": "Iran's Stance",
      "headline": "Iran Retaliates Against Israel, Accuses US of Ceasefire Violation",
      "summary": "Iran has launched missiles and drones toward the Strait of Hormuz and Israel, accusing the US of violating the ceasefire and retaliating for Israeli strikes. Peace talks have stalled amidst the renewed hostilities.",
      "tone": "defiant",
      "latestSinceUpdate": 909
    }
  ]
});

export default LATEST_SNAPSHOT;
