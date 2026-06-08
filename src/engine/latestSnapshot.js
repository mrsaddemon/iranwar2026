export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 915,
  "lastUpdated": "2026-06-08",
  "lastSyncedAt": "2026-06-08T22:51:30.426Z",
  "warDay": 101,
  "summary": "Despite recent attempts to halt strikes and re-establish a ceasefire, the conflict remains active with violations, escalating tensions in Lebanon, and ongoing disputes over the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-06-08",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "A fragile ceasefire is in effect, having been recently re-declared by Iran after a reported exchange of strikes, but remains under strain with ongoing hostilities and skepticism from Israel."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 50,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Jun 08",
      "text": "Iran and Israel halt strikes against each other but warn they are ready to resume attacks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxPR2Z1c1luQ3VlZGdLNFE3c0cxRDZBa2JUQlZwMlNlNVZWWXplUDVjbzNZS0dfS1Bub0ZJNDIybDhmSGFkaW5vcmhvdjc4dzAyN1ExdTFuNXhRTU9DUnhBZ0VqX2FySHdaX3RqQ2JPd0I3STZSaU1TNlI5d3ZmcGlTend3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 915
    },
    {
      "date": "Jun 08",
      "text": "Israel halts Iran strikes after Trump claims progress toward nuclear talks.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 915
    },
    {
      "date": "Jun 08",
      "text": "Iran states the Strait of Hormuz will be open but with transit fees, while the US Navy indicates it could open the strait.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxNZjVSOTNvREwzVnhncmx3eVFGWTFBNU1ocGtIbmhOSXhDdTVqNVNLek0xaS1EWVhfNURyU0lXSWRUV0ZfZ0RJSVhNaTdOc2V6SlNrQll2SkpNZHBGYWtObkdTOHdpRmRhMGVXdmdGejZ4clNoQlBYbVJqbTBsTGMwNFhwMTlpZ1ZSZ2ZIdm5hQ0t1VUo1cWxSeFdITU9lV1ZXLS10SEh2elREdDNTUkMwTTBMdDdMR0hqVlNYVDhn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 915
    },
    {
      "date": "Jun 08",
      "text": "Netanyahu states the war with Iran and Hezbollah is not over, despite Tehran's halt in strikes.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 915
    },
    {
      "date": "Jun 08",
      "text": "Israel reports Iran launched missiles at it, marking the first such bombardment since a fragile ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxNTUR4X28zSUZqamE5ZkhYVlV0Umx4Q1RwZkMwMDdBaTU0aWw5Q0tueHRGTnAyZ0FSN2gwU2syR1k4cGRzMkc2cy13WFFOaW5TcTRVSHA4NTJNR2FPanBMclhpQjZ4cnk2UVRHOGhIWk9GZmt2WVNENk82UGNIN29jSy0wZGw0U0piM25RN0R4MEdmT2g1TV9xZFl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 915
    },
    {
      "date": "Jun 08",
      "text": "Israel bombs Beirut outskirts as fighting with Hezbollah escalates.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 915
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
