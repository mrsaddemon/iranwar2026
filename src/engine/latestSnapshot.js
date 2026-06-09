export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 922,
  "lastUpdated": "2026-06-09",
  "lastSyncedAt": "2026-06-09T18:34:44.327Z",
  "warDay": 102,
  "summary": "Reports indicate a US helicopter was allegedly shot down by Iran, prompting a vow of retaliation from former President Trump, while a ceasefire between Israel and Iran appears to be faltering amidst continued regional strikes.",
  "lastNarrativeUpdate": "2026-06-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 1,
    "summary": "A recent ceasefire between Israel and Iran is reported to be faltering, with both sides trading strikes before a temporary pullback."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
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
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
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
      "date": "Jun 07-08",
      "text": "Ceasefire falters as Israel and Iran trade worst strikes in months.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxPR2Z1c1luQ3VlZGdLNFE3c0cxRDZBa2JUQlZwMlNlNVZWWXplUDVjbzNZS0dfS1Bub0ZJNDIybDhmSGFkaW5vcmhvdjc4dzAyN1ExdTFuNXhRTU9DUnhBZ0VqX2FySHdaX3RqQ2JPd0I3STZSaU1TNlI5d3ZmcGlTend3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 921
    },
    {
      "date": "Jun 07",
      "text": "Trump claims Iran shot down U.S. helicopter near Strait of Hormuz and vows to retaliate.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxNS0lCdGM4alVyQVVLYXZyaWZVX3Fha3NZc1lVdHRwN2lxeV9XVnlDWGV4cURyWDRTeU9rUHE2ajZBUlJQd0dYQW4yR1NBM0poblhmQXhLTkhPMTBUTVRCazJXMllnVGJ5Z3V0dGxYbWRJcDRFUFZrVDBCOWJoMllEeE01YUxOQXFkM2FVVXM0d3BWVGpGMGdwZG5ZYkRabG1KQ05WRWVQdmpMUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 922
    },
    {
      "date": "Recent",
      "text": "Israel bombs Beirut outskirts as fighting with Hezbollah escalates.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 922
    },
    {
      "date": "Recent",
      "text": "Hezbollah terrorist infiltrates Israel from Lebanon and fires at soldiers.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9uX2ROU09tZUZRVlZGWkJ6TXBmRWFJOHoxdktZLV92N01fTWpsUzJhSmo5NmNhckgzNTFGZUVtOFRSMzV1b3laQjJqQ0k0SXZ6eS1lZGd0UEdTa2ZDOXVaWlJYVWxwVlZTLVJ6Mk9R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 922
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
