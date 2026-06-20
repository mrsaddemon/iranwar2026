export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1010,
  "lastUpdated": "2026-06-20",
  "lastSyncedAt": "2026-06-20T01:32:15.843Z",
  "warDay": 113,
  "summary": "The US has released an agreement with Iran, while Israel and Hezbollah have agreed to a ceasefire, though US-Iran talks were postponed due to prior Israeli strikes in Lebanon.",
  "lastNarrativeUpdate": "2026-06-20",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "Israel and Hezbollah have agreed to a renewed ceasefire, though its fragility is highlighted by recent fighting that delayed US-Iran talks and Israel's continued troop presence."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 55
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.4
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 35,
    "tradeImpact": 26,
    "sanctionsPressure": 54,
    "globalPressure": 56,
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
      "date": "Jun 20",
      "text": "US releases 14-point official agreement with Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMidkFVX3lxTE5CQ3p0cG16TzJCYXJpcEQteFZSMkxpQ1dwR3pjNFkxUElfZXJYN0R5ZlRDdzVDVUJQXzVOcHRFUGlHcW5VSmU3MGd0QWoxRGJySklOREdEXzRiZlZjNjd1Z1FWcFJLLTJBV3FsOTgwMTdIeThTYWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1010
    },
    {
      "date": "Jun 20",
      "text": "Israel and Hezbollah agree to a ceasefire, according to US officials.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNb2hjaXJJODViakgzMExITW9TRTY1SzFPOWo0cFRNZmVsZXJ4cnEwSXN5ZFBsM2VjZ2NNdWZHaWl4LVE2a1k2RWpMUWZQY19acnFobnZYcWgwTEVOOUoxcWlwSnpRN1E2TXR6TllHNGd0UTZaallHcFp0emllU3dKTERyWlhIcW90YzR6eGN1Sk9HanNWUHd0MV9oQTF5by1YQkFydlQyRGtnQldpamdYZXl2RmtqMjBkbWhabTVPSEbSAcYBQVVfeXFMTzd1ZDFrMk9CbDNKNmRyZ2psQUlsazJHdG1hVHkwTENBTzAwbnp0UzUxRzBMY1NXZ3BMclctV1J2NGQxUGZCMGtVaFVlQzZqSHM0b0NvSkJIUDR3aFZJSF9zeW1FalZzR2xBeEFreFJQUmpZVHlxNWZVNHdNVF9PVmwzSmltQTFSeUIxNUxCU2cxbDhBZ2RIY3k1Rk5BODNlYkNOZFpiZWIxX05oczF6Z3FiaUk2YWRGMklnT2c5VDNPR2tmS0Vn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1010
    },
    {
      "date": "Jun 20",
      "text": "US-Iran talks in Switzerland postponed following Israeli strikes in Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE14WXlXWDJnRXlEQWx2TFFMMEVGN2RjN2E2Y3ZFa2doYjkyNTdZUjVlSG1Maks2ZXNULXhmOEZPT3BIV09tcjRoWUF2bmpsOVhibmFnUktXT1Rldw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1010
    },
    {
      "date": "Jun 20",
      "text": "Oil tanker traffic in Strait of Hormuz jumps after US-Iran deal implementation.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxQRHdNd05CR2hzb1cyLTdhWmxTazZUdGNvZEFNcjdqTENtM0JHRW5wWDMxQzl3aGZ1eFUzWVBwQkxWVTNUcDhVZ1U2T2tleThMNmlGLXdIUzMyQjdHa3U5dFcwdnNfeV9pU0Q2eDloQ3RXMTlaSnlxV3c1OXVfcmRtSFJoR3V0RVEtSTVmRdIBkgFBVV95cUxPN3lPRkw3MHNDVmxWS0NFVE4wU0Z4cFBuY0Vva1E2a2ctckRKek9iUDNia2ZON0JhX2Q1X2Nsa2tkV3BHbVZjcmROLVZsekNUb3Nlc3dvbzVsX0FQaWNrUllEOVVEeXhaWEJZb213TlNibG16NFdxNjBDWVJnUXVxT250bnNkZjFWRFdPcEV2dEcxdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1010
    },
    {
      "date": "Jun 20",
      "text": "Iran imposes mandatory insurance on ships transiting Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMizgFBVV95cUxNUmxSMkJzZlRKTGhXcklpcnVKd21hQ0Izd1RZWEpJeTJ4dllQYWxNMlMtMGt5TGx6MDJXZlRYbUhuSXR2cUpDNXhWQlBTWlJJNWZ4cGFZbk40aFcwLUdMOXVGdmlwZlh6aXNQYTViMWhGNko4Wnk2Nk9IX0xqVkx4blI3WVl2MmhxOXNvdmxnRThpUFlBRDNRbHRYekF0d2VZUDhZVFZXOUtnLVpudEZ1LXY5aXQzVXU4UkczaXhqU1Jld2FxaUVQY2dRYmJWdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Lloyd's List",
      "latestSinceUpdate": 1010
    },
    {
      "date": "Jun 20",
      "text": "Senator Vance issues warning to Israel regarding its reaction to the Iran deal.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1010
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
      "perspective": "US Diplomacy",
      "headline": "US Brokers Iran Deal Amid Regional Tensions",
      "summary": "The US has successfully brokered a 14-point agreement with Iran, aiming to de-escalate regional tensions and set the stage for nuclear negotiations. However, the process faces challenges from ongoing regional conflicts, as evidenced by the postponement of talks due to Israeli strikes.",
      "tone": "strained",
      "latestSinceUpdate": 1010
    },
    {
      "perspective": "Regional Stability",
      "headline": "Ceasefire Holds, But Assertions Remain",
      "summary": "While a ceasefire between Israel and Hezbollah has been agreed upon, the region remains tense with Israel maintaining troops in Lebanon and having conducted recent strikes. Iran, having implemented the deal, is also asserting control over the Strait of Hormuz through new insurance requirements.",
      "tone": "skeptical",
      "latestSinceUpdate": 1010
    },
    {
      "perspective": "Economic Outlook",
      "headline": "Hormuz Traffic Up, New Fees Emerge",
      "summary": "The costs of the recent conflict are significant, impacting lives and finances, while the Strait of Hormuz, a critical oil transit point, sees increased traffic but also new Iranian fees, signaling potential future economic friction.",
      "tone": "anxious",
      "latestSinceUpdate": 1010
    }
  ]
});

export default LATEST_SNAPSHOT;
