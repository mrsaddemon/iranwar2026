export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 906,
  "lastUpdated": "2026-06-07",
  "lastSyncedAt": "2026-06-07T21:39:49.769Z",
  "warDay": 100,
  "summary": "The Iran war reaches 100 days with a fragile ceasefire repeatedly violated by US, Iran, and Israel, leading to stalled peace talks and continued regional strikes.",
  "lastNarrativeUpdate": "2026-06-07",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "A fragile ceasefire, in effect since April, is repeatedly violated by all parties, leading to stalled peace talks and continued military exchanges."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 55
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "date": "Jun 06",
      "text": "US and Iran launch strikes, further straining the ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxOaThld29lUFRLdTRVVlNPOV94LUxWVko2UkRZbXVpWGpVZnAxV2tLNDkzMHZuSEdyQzhSZXRLblhWanRyTG4yNE5VQjEzMFk0ODQybTBidEVWQzVaSlI5T2dfNWJwS241ZXVnRU5rZS14X0VndzJRWnJhNGJNbGFPWk13?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 905
    },
    {
      "date": "Jun 07",
      "text": "Iran retaliates after Israel's deadly strike in Beirut, accusing the U.S. of violating the ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPelJMTjAxUFhxdHBqeU9KN3lhbkFhM182azlzVHpGTDZXaGkyaDFNT0Vzc2ZBT1BJTnpiTm9XalZjOVhaWGN6YjJjXzBBZ2lrQW52bFhZZmw4OHFSYWVRcUpwenVEckFlSkY5NGx1bFM2dDVuUUlPQ1M1UTgtX094dlhHOUs1bVU3NlFBRmFuLThRN0dtUE9yWg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 906
    },
    {
      "date": "Jun 07",
      "text": "Israel reports Iran launched missiles at its territory, the first such bombardment during the fragile ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxNTUR4X28zSUZqamE5ZkhYVlV0Umx4Q1RwZkMwMDdBaTU0aWw5Q0tueHRGTnAyZ0FSN2gwU2syR1k4cGRzMkc2cy13WFFOaW5TcTRVSHA4NTJNR2FPanBMclhpQjZ4cnk2UVRHOGhIWk9GZmt2WVNENk82UGNIN29jSy0wZGw0U0piM25RN0R4MEdmT2g1TV9xZFl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 906
    },
    {
      "date": "Jun 07",
      "text": "Israel bombs Beirut outskirts as fighting with Hezbollah escalates.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 906
    },
    {
      "date": "Jun 07",
      "text": "The Strait of Hormuz is reported to be more open due to U.S. naval overwatch.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 906
    },
    {
      "date": "Jun 07",
      "text": "OPEC+ approves its fourth oil output quota hike since the initial Hormuz closure.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxNc19wZzhENmRSTVpwaU1fdDcxN0g2bGlpSWw1WF9uMV9DdWFuczIzQ1V6a0htSGZsQkQ0NXhUejFqLVpVM3pvYlVkM3pyMVg2ZnNvV3RzN1R4OXVzQ0xrZXQyc0o1WU9QRlFOMnl4Y0JVTFNFbTNzem9QR1Y3YThnYjZKZl9HaGZmdU1QX0d6TXlBemFNNnhGVzVWY1czX3hYQWd0cNIBqgFBVV95cUxQbHp2MFpIZ3JWaDhQbHFZcnN5MDZ1MXU1X1A3Tk5ES2tHdjV1bTQzWlNCUUR3WU5Bd2RtWnRLaFhjZG1YcUNwbV9pMzhvRklWNnVESWZXX0tfbnNyaDBWWmhHWk03VElvT2ZhQTlZc3hGMWZxajdRb09KLUlnOEJidW40Q0RKNDFlYXlQNGhfZTVCdVpjNTN0aVdBV2Q3T0ZyQ2JpTHBacm5EUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 906
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
      "perspective": "Iran",
      "headline": "US Lacks Will, Iran Warns of Wider War",
      "summary": "Iran asserts the US lacks the will for regional stability following recent clashes and accuses the US of violating a ceasefire. Tehran warns that the ongoing conflict could escalate into a wider war.",
      "tone": "defiant",
      "latestSinceUpdate": 896
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Rejects Truce, Finds New Purpose",
      "summary": "Hezbollah has rejected a US-backed ceasefire deal between Lebanon and Israel. The group states that the ongoing Israeli offensive in Lebanon has provided it with renewed purpose.",
      "tone": "defiant",
      "latestSinceUpdate": 896
    },
    {
      "perspective": "United States",
      "headline": "US Secures Hormuz, Seeks Regional Stability",
      "summary": "The US military is providing naval overwatch in the Strait of Hormuz, having intercepted Iranian drones targeting shipping. The US also plans to use Iranian assets for rebuilding in Gulf states, signaling a complex approach to regional stability.",
      "tone": "neutral",
      "latestSinceUpdate": 896
    },
    {
      "perspective": "Lebanon",
      "headline": "Lebanese President Criticizes Iran",
      "summary": "Lebanon's president has publicly criticized Iran amidst ongoing Israeli attacks on Lebanese territory. This indicates growing internal pressure and potential shifts in regional alliances.",
      "tone": "strained",
      "latestSinceUpdate": 896
    }
  ]
});

export default LATEST_SNAPSHOT;
