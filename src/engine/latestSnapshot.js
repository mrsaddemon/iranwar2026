export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1009,
  "lastUpdated": "2026-06-19",
  "lastSyncedAt": "2026-06-19T23:08:24.130Z",
  "warDay": 112,
  "summary": "The US has released an official agreement with Iran, leading to increased oil tanker traffic in the Strait of Hormuz, while Israel and Hezbollah have agreed to a fragile ceasefire amidst reports of continued strikes.",
  "lastNarrativeUpdate": "2026-06-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "Israel and Hezbollah have agreed to a ceasefire, but its fragility is evident from reports of continued strikes and the need to renew the agreement."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.4
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 20,
    "tradeImpact": 15,
    "sanctionsPressure": 54,
    "globalPressure": 53,
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
      "date": "Jun 19",
      "text": "US releases official agreement with Iran, detailing a 14-point text.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMidkFVX3lxTE5CQ3p0cG16TzJCYXJpcEQteFZSMkxpQ1dwR3pjNFkxUElfZXJYN0R5ZlRDdzVDVUJQXzVOcHRFUGlHcW5VSmU3MGd0QWoxRGJySklOREdEXzRiZlZjNjd1Z1FWcFJLLTJBV3FsOTgwMTdIeThTYWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1009
    },
    {
      "date": "Jun 19",
      "text": "Israel and Hezbollah agree to a ceasefire, though reports of continued attacks persist.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNb2hjaXJJODViakgzMExITW9TRTY1SzFPOWo0cFRNZmVsZXJ4cnEwSXN5ZFBsM2VjZ2NNdWZHaWl4LVE2a1k2RWpMUWZQY19acnFobnZYcWgwTEVOOUoxcWlwSnpRN1E2TXR6TllHNGd0UTZaallHcFp0emllU3dKTERyWlhIcW90YzR6eGN1Sk9HanNWUHd0MV9oQTF5by1YQkFydlQyRGtnQldpamdYZXl2RmtqMjBkbWhabTVPSEbSAcYBQVVfeXFMTzd1ZDFrMk9CbDNKNmRyZ2psQUlsazJHdG1hVHkwTENBTzAwbnp0UzUxRzBMY1NXZ3BMclctV1J2NGQxUGZCMGtVaFVlQzZqSHM0b0NvSkJIUDR3aFZJSF9zeW1FalZzR2xBeEFreFJQUmpZVHlxNWZVNHdNVF9PVmwzSmltQTFSeUIxNUxCU2cxbDhBZ2RIY3k1Rk5BODNlYkNOZFpiZWIxX05oczF6Z3FiaUk2YWRGMklnT2c5VDNPR2tmS0Vn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1009
    },
    {
      "date": "Jun 19",
      "text": "Oil tanker traffic in the Strait of Hormuz jumps after the US and Iran implement a deal to open the sea lane.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxQRHdNd05CR2hzb1cyLTdhWmxTazZUdGNvZEFNcjdqTENtM0JHRW5wWDMxQzl3aGZ1eFUzWVBwQkxWVTNUcDhVZ1U2T2tleThMNmlGLXdIUzMyQjdHa3U5dFcwdnNfeV9pU0Q2eDloQ3RXMTlaSnlxV3c1OXVfcmRtSFJoR3V0RVEtSTVmRdIBkgFBVV95cUxPN3lPRkw3MHNDVmxWS0NFVE4wU0Z4cFBuY0Vva1E2a2ctckRKek9iUDNia2ZON0JhX2Q1X2Nsa2tkV3BHbVZjcmROLVZsekNUb3Nlc3dvbzVsX0FQaWNrUllEOVVEeXhaWEJZb213TlNibG16NFdxNjBDWVJnUXVxT250bnNkZjFWRFdPcEV2dEcxdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1009
    },
    {
      "date": "Jun 19",
      "text": "US-Iran talks in Switzerland are postponed following the Israel-Hezbollah ceasefire agreement.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxQb09GUkZhOTJSUnMxVUtrTDRjTWRmWWJBZExCaVlCVzAxbHc0azJjRS12bW5KdXVHdkhyWmRJVm8tRHVnVjJ3MTU1YkVMQlRBUm5KMXpYbWM2TV9DeHlhR0xjVk80cGNXY0RaaXp2c2hYWnoyR3I0T2tRMEpoUVg5bzkyMkRpaHZTM29oOUM3S2JzLXJJZnJIV19Tb1JmRFREZ3JEYVVRT2VUNjNu?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1009
    },
    {
      "date": "Jun 19",
      "text": "Israel and Hezbollah agree to renew ceasefire after 4 Israeli soldiers' deaths and continued conflict.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxPVVhLbC12Y19CdVNlZnpwQWZHSzdzN3NRU3FET1pBNDN4SkZSdTFBZjltcUxzdTlSQlJqLXJrRlJxR0stZGo5OGxDLXpmZVFRSmlWWF81MVcyNDJCTGhhdzR3Y2ZsTEpSa01VZ1dJc2FGTlJjSk5La284M19pM1R0Q0preFd5QTBTeGJYNFBnVWZPak9HWmJSalNkbWVHcjhRclM4VE1wQ29SNHJRTDdNTzFZaUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1009
    },
    {
      "date": "Jun 19",
      "text": "Pentagon investigation into an Iran school strike is being finalized.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxPQjhtZ1VHZjRERUl4SUJ3MVZSbHB0c1JHZUZyYmY4bHJ1SFl0TDlveTk2UmdTT1pWM2hyNEdBajBXbzRQX2RJSE1PS1hIa0dQbG4ySnF2V0Q3bzBpano5SzdLN2pHMEFQWG1RVFA3U1oxOG4zNDhNOW1FOWk4MUliZ1NsaS02cVhTaEl4Tjg0VndLUlBEczNZM0l0aVN2d2lGY09xZ2dqdUNqSGFYcWx2SlJDYw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1009
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
      "perspective": "US Diplomacy",
      "headline": "US brokers initial deal, expects full ceasefire",
      "summary": "The US, led by Trump, has brokered an initial agreement with Iran to end the conflict, with expectations for a complete ceasefire across all fronts, including Lebanon and Hezbollah. This move aims to de-escalate regional tensions.",
      "tone": "neutral",
      "latestSinceUpdate": 1001
    },
    {
      "perspective": "Israeli Opposition",
      "headline": "Israel defies deal, continues Lebanon strikes",
      "summary": "Israel has reacted critically to the US-Iran deal, continuing its strikes on southern Lebanon and issuing new occupation maps. This indicates a continued pursuit of its military objectives despite the broader diplomatic efforts.",
      "tone": "defiant",
      "latestSinceUpdate": 1001
    },
    {
      "perspective": "Iranian/Hezbollah Expectations",
      "headline": "Iran, Hezbollah anticipate benefits amid murky terms",
      "summary": "Iran and Hezbollah anticipate significant financial benefits from the deal once fully sealed, with Hezbollah expecting a major cash injection. However, the terms of the ceasefire remain murky, leading to ongoing disputes.",
      "tone": "strained",
      "latestSinceUpdate": 1001
    },
    {
      "perspective": "Global Economic Relief",
      "headline": "Strait of Hormuz reopening brings economic relief",
      "summary": "The reopening of the Strait of Hormuz following the interim deal between Iran and the U.S. brings immediate relief for the global economy. This development eases concerns over oil transit and supply disruptions.",
      "tone": "neutral",
      "latestSinceUpdate": 1001
    }
  ]
});

export default LATEST_SNAPSHOT;
