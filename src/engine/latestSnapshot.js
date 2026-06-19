export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1006,
  "lastUpdated": "2026-06-19",
  "lastSyncedAt": "2026-06-19T19:02:56.563Z",
  "warDay": 112,
  "summary": "The United States and Iran have signed a preliminary agreement leading to the lifting of the blockade on Iranian ports and increased oil tanker traffic in the Strait of Hormuz, while Israel and Hezbollah have agreed to a ceasefire amidst reports of continued strikes in Lebanon.",
  "lastNarrativeUpdate": "2026-06-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 5,
    "summary": "Israel and Hezbollah have agreed to a ceasefire, but reports of continued strikes in Lebanon suggest its immediate stability is uncertain."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 55
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 48,
    "oilDisruption": 20,
    "tradeImpact": 15,
    "sanctionsPressure": 54,
    "globalPressure": 53,
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
      "date": "Jun 19",
      "text": "US and Iran sign a 14-point preliminary agreement to end the war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxQYjZvaV90am9YWnNwSU83QTNBNWphWUlnbGwtTUV4X0Z1emxteURKTV8zMmVETkR5SUtjUmNHTFVvOHJvQ3NuZE00NFdpaGdQbjV3b0pWV0lGcmtKYzgzaE9ldjl5VVZNSmpqbng5WThHQWFmMWNFVzFRcUVER09yLVZZeWRjQU1JWnI5RG1UeU5TYUJfcUtvRTlucU0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 1006
    },
    {
      "date": "Jun 19",
      "text": "US lifts blockade of Iranian ports as part of the new agreement.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPVks0MkhBQW1EOGdhbjd5WlVwTWNuQWlyQ1h3WWF5dGZyN3Bfc0VQMi1rRHY3bFlRd1V5dDltWE50bndDakVTeGgzWlZwMDFWWEFnYUJRcjYtQWpiTHNVOVBJV3pWTlFMeEJzbHVTbXcxQm9nNHcxSFJZQ3FQakttRXJWUnpaZklhVENwUjZVaXlqUENfWVFvcDVENTExTEZveTBDZDRYVWk5T2VSTEpVRlRVdUlNZEpBc29n0gHAAUFVX3lxTE1NSm5IcWVqNmlDOWN1anAxMzlCSEF1d2JpcGQ4T1JRUmVqc2lrRnFOUURUaTNpWi14V2tJVHBQSDVDX0VXTEVvMGRuMl9uT1dGWjNvWE9nSWxVaGZZN2ZSWlZ3dFI3NjhyaGFKMllPRlp1dVowbEF4OFpTeUlFeWxFdHdHeHFoQ0dMSkdzMjR3N05WUFZQeGx3cnF3UXV5ZmpvOXNDZEJfbDdXSmVsOTdpWlpoZENEYVRRWnJmbnQ3TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1006
    },
    {
      "date": "Jun 19",
      "text": "Oil tanker traffic in the Strait of Hormuz significantly increases following the US-Iran deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxQRHdNd05CR2hzb1cyLTdhWmxTazZUdGNvZEFNcjdqTENtM0JHRW5wWDMxQzl3aGZ1eFUzWVBwQkxWVTNUcDhVZ1U2T2tleThMNmlGLXdIUzMyQjdHa3U5dFcwdnNfeV9pU0Q2eDloQ3RXMTlaSnlxV3c1OXVfcmRtSFJoR3V0RVEtSTVmRdIBkgFBVV95cUxPN3lPRkw3MHNDVmxWS0NFVE4wU0Z4cFBuY0Vva1E2a2ctckRKek9iUDNia2ZON0JhX2Q1X2Nsa2tkV3BHbVZjcmROLVZsekNUb3Nlc3dvbzVsX0FQaWNrUllEOVVEeXhaWEJZb213TlNibG16NFdxNjBDWVJnUXVxT250bnNkZjFWRFdPcEV2dEcxdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1006
    },
    {
      "date": "Jun 19",
      "text": "Israel and Hezbollah agree to a ceasefire, though reports indicate continued attacks in Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE81dUtGajhYYWJSU19acmJzaGRKdk5VX1k4ZWJ6My1jb1VJQjhnOUF0cFdQaEpYWDBiQ2dvSWpES0ZCSXZuWW9tSGwxX01vSHdhVE5Jaw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1006
    },
    {
      "date": "Jun 19",
      "text": "Initial US-Iran nuclear negotiations in Switzerland are postponed.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxPeFRjLUpWQkxqczhQeE1SVXZvMW1JYi15Q2lTMEJxVFg0enRjX0Z1SjIzNjVybWg2Vkx5dTNyYVVETVlMWFNRdkJ1aXVmV0pxZUJ5T0NWRUJQdVBRUUZtLXhId1V0bEFwUkNiY1ZDMEN2YVBmSkY4d1lUNEt2M1NDN1dyZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1006
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
