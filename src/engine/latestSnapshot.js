export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 904,
  "lastUpdated": "2026-06-07",
  "lastSyncedAt": "2026-06-07T18:59:12.867Z",
  "warDay": 100,
  "summary": "The 100-day war between the US and Iran continues with a fragile ceasefire under strain due to mutual strikes, Israeli actions in Lebanon, and increased military activity in the Strait of Hormuz, while peace talks remain at a stalemate.",
  "lastNarrativeUpdate": "2026-06-07",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 5,
    "summary": "A recently agreed ceasefire is under severe strain and has been violated by multiple parties, with Hezbollah rejecting the deal."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
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
    "nuclearIndex": 10,
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
      "date": "Jun 06",
      "text": "Ceasefire faces further strain as US and Iran launch strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxOaThld29lUFRLdTRVVlNPOV94LUxWVko2UkRZbXVpWGpVZnAxV2tLNDkzMHZuSEdyQzhSZXRLblhWanRyTG4yNE5VQjEzMFk0ODQybTBidEVWQzVaSlI5T2dfNWJwS241ZXVnRU5rZS14X0VndzJRWnJhNGJNbGFPWk13?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 902
    },
    {
      "date": "Jun 06",
      "text": "Israel strikes Beirut after Hezbollah attack, risking Iran response.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxPamtFLVM2ZEVsR3UxUS12X2VGclNOVzJWdllVejhUOFdKZWt0THJJVGxsZ0EwZXRJU0tRUGJlbG42UWx5al9XN0VXMG5UN0laS2t6S0RiYmRIME51bk5IWF80T1h0emNneEx5c0p0NE94QUFRelZIOEhwTWtBUTI1Ym05OU9tYkUwX0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 904
    },
    {
      "date": "Jun 06",
      "text": "Iran accuses U.S. of violating ceasefire after both sides exchange strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPelJMTjAxUFhxdHBqeU9KN3lhbkFhM182azlzVHpGTDZXaGkyaDFNT0Vzc2ZBT1BJTnpiTm9XalZjOVhaWGN6YjJjXzBBZ2lrQW52bFhZZmw4OHFSYWVRcUpwenVEckFlSkY5NGx1bFM2dDVuUUlPQ1M1UTgtX094dlhHOUs1bVU3NlFBRmFuLThRN0dtUE9yWg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 904
    },
    {
      "date": "Jun 06",
      "text": "Israel strikes Beirut’s southern suburbs days after US-supported ceasefire deal.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxNTUR4X28zSUZqamE5ZkhYVlV0Umx4Q1RwZkMwMDdBaTU0aWw5Q0tueHRGTnAyZ0FSN2gwU2syR1k4cGRzMkc2cy13WFFOaW5TcTRVSHA4NTJNR2FPanBMclhpQjZ4cnk2UVRHOGhIWk9GZmt2WVNENk82UGNIN29jSy0wZGw0U0piM25RN0R4MEdmT2g1TV9xZFl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 903
    },
    {
      "date": "Jun 06",
      "text": "Hezbollah rejects ceasefire deal agreed on by Israel and Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMidkFVX3lxTE9XX3k3UzBSLS1BOHVMQ1ppWmhMMVdiQUVLT1RnYUR2c1hQZ2VWX2FDZmc0WWpneEdSZjBtTTVWSDBxR2EzZlhMN3JzZVN1OEZQdlMzTTF5ZVg2VldwRlNSWF9XYnFpQkdOUkZUUG1jM2ZfUmFKS1E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 904
    },
    {
      "date": "Jun 06",
      "text": "Iran has launched multiple drones towards the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPaWNoMWljcEVLeTNSU09PSGdTTllERnBWUXVqRlNrSGI2S3I1Y1VZdlRBY05FbXNlX0tudmZlalJKYV9VaVpJZHBRTWFqTThMQ01TakJDVXVnTGJ2OVBmNmxNdVRRRXNKRThuWnFDUzRDZlFyQkt4Uy1EUDlqVzVMNW56U0tvZzAtYmNoby1tdnpTaGNrWkV3eHk4TGhTUWdaVGg4S3dHakNRaTNpR2tFTnNiYTFmaDl0cjk3eU9R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 904
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
