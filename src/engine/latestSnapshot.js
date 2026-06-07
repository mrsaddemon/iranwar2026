export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 902,
  "lastUpdated": "2026-06-07",
  "lastSyncedAt": "2026-06-07T16:25:27.583Z",
  "warDay": 100,
  "summary": "On War Day 100, a US-supported ceasefire faces severe strain with direct strikes exchanged between the US and Iran, and Israel escalating its conflict with Hezbollah in Beirut, while peace talks remain at a stalemate.",
  "lastNarrativeUpdate": "2026-06-07",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 5,
    "summary": "A recently established US-supported ceasefire is severely strained and actively violated by multiple parties, with peace talks remaining at a stalemate."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "text": "Israel bombs southern suburbs of Lebanon’s Beirut.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxNOS1JbnU1UG56TjRPLW96Q0YzZ2xjcGdzMURseFFZOFZ0emcyS1ctVTRYVFJmQlYwSXM4UWt3WjdfM1pNUVM5c0VzTzFsbFlrNXFYUUJzVVdDNFQ4UE5CbjFoUnhENVJUZEY1bVhMdzdIQUlPTXZSOUJWS3I2UWI4QUNfTy14N3VMS1BjLVVFRVpiNGxPU2ZNUlFyZ0Q2YWZoM1RNRFVQRFNsamhWTjBUSjdOQUFNRGtv0gG-AUFVX3lxTE9HOUViRk1WdTRJTVRUOEJjQTNXT3pKaWVPRlQ1bGh5ZS1YR29MVWt4ZHRfQlhUREFEOUIxcmZTbzlJd1RVZFI2QzB4NlJtVkRzQ3k3Um9yeG9jaEZJM3NBSlB4LVF3TFlXOFNSV1NsVTE0YXplQjlvZ0FTX3dUR1V5elRjVWo1NU5JbHdMYUphenJJVGZtZ2luRldoNllRNlhkQjhlcXhtZ1JNNHJVUEh1bFVHM1BabW5DcWM1V3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 902
    },
    {
      "date": "Jun 06",
      "text": "Iran accuses U.S. of violating ceasefire after both sides exchange strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPelJMTjAxUFhxdHBqeU9KN3lhbkFhM182azlzVHpGTDZXaGkyaDFNT0Vzc2ZBT1BJTnpiTm9XalZjOVhaWGN6YjJjXzBBZ2lrQW52bFhZZmw4OHFSYWVRcUpwenVEckFlSkY5NGx1bFM2dDVuUUlPQ1M1UTgtX094dlhHOUs1bVU3NlFBRmFuLThRN0dtUE9yWg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 902
    },
    {
      "date": "Jun 06",
      "text": "OPEC+ decides on fourth oil quota hike since the Strait of Hormuz closure.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxNc19wZzhENmRSTVpwaU1fdDcxN0g2bGlpSWw1WF9uMV9DdWFuczIzQ1V6a0htSGZsQkQ0NXhUejFqLVpVM3pvYlVkM3pyMVg2ZnNvV3RzN1R4OXVzQ0xrZXQyc0o1WU9QRlFOMnl4Y0JVTFNFbTNzem9QR1Y3YThnYjZKZl9HaGZmdU1QX0d6TXlBemFNNnhGVzVWY1czX3hYQWd0cNIBqgFBVV95cUxQbHp2MFpIZ3JWaDhQbHFZcnN5MDZ1MXU1X1A3Tk5ES2tHdjV1bTQzWlNCUUR3WU5Bd2RtWnRLaFhjZG1YcUNwbV9pMzhvRklWNnVESWZXX0tfbnNyaDBWWmhHWk03VElvT2ZhQTlZc3hGMWZxajdRb09KLUlnOEJidW40Q0RKNDFlYXlQNGhfZTVCdVpjNTN0aVdBV2Q3T0ZyQ2JpTHBacm5EUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 902
    },
    {
      "date": "Jun 06",
      "text": "U.S. military says it shot down Iranian drones launched toward Gulf allies.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxPSzNfZ04xZUVycUZLbW4xTERjZFVfMlZIdXphTXotR1pna2JaZ2pHM1ZxcTVvekpHOE0zZVlRSndFTDRJcHdVRmlxZXphc2lFQXNhajc1aFJudGREZ0l5blhQTXh1Zl9ZWXc0NUtKUjBURlFBV3JvOHBFYkZtUlE0Zzk0WXEtV2tGaVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 902
    },
    {
      "date": "Jun 06",
      "text": "Iran launched missiles and drones toward Strait of Hormuz, U.S. military says.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxNMnhrZmU1dEJXQzRJQWFaelI4LVZlUE01ZERhS3VKUzhsRXNEa3N1elZRc3VTRXlnclJvNTNyM1FUOFpLdjUxNmplY0xub29CUzRmZFQ1ZThsT0hsT29IcU96TjlJeVk2Y2s3eHUtN0FVekRhRnhuVG0xMTBTSC1sal9JVkVGalY4UTFvOS12UXppY1RJdHVHaUFpOEJOenJiV1RZdmp1aVpqS2xVOElPYWh2VHJuZ3M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 902
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
