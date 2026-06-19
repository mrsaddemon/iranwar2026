export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1008,
  "lastUpdated": "2026-06-19",
  "lastSyncedAt": "2026-06-19T21:53:16.136Z",
  "warDay": 112,
  "summary": "The US and Iran have implemented a new agreement, lifting the blockade of Iranian ports, while Israel and Hezbollah have agreed to a ceasefire following recent clashes that threatened to derail the US-Iran talks.",
  "lastNarrativeUpdate": "2026-06-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "Israel and Hezbollah have agreed to a ceasefire following recent clashes, though reports of continued strikes suggest its fragility."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 15,
    "tradeImpact": 11,
    "sanctionsPressure": 54,
    "globalPressure": 52,
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
      "text": "US releases official 14-point agreement with Iran, lifting the blockade of Iranian ports as part of the deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPVks0MkhBQW1EOGdhbjd5WlVwTWNuQWlyQ1h3WWF5dGZyN3Bfc0VQMi1rRHY3bFlRd1V5dDltWE50bndDakVTeGgzWlZwMDFWWEFnYUJRcjYtQWpiTHNVOVBJV3pWTlFMeEJzbHVTbXcxQm9nNHcxSFJZQ3FQakttRXJWUnpaZklhVENwUjZVaXlqUENfWVFvcDVENTExTEZveTBDZDRYVWk5T2VSTEpVRlRVdUlNZEpBc29n0gHAAUFVX3lxTE1NSm5IcWVqNmlDOWN1anAxMzlCSEF1d2JpcGQ4T1JRUmVqc2lrRnFOUURUaTNpWi14V2tJVHBQSDVDX0VXTEVvMGRuMl9uT1dGWjNvWE9nSWxVaGZZN2ZSWlZ3dFI3NjhyaGFKMllPRlp1dVowbEF4OFpTeUlFeWxFdHdHeHFoQ0dMSkdzMjR3N05WUFZQeGx3cnF3UXV5ZmpvOXNDZEJfbDdXSmVsOTdpWlpoZENEYVRRWnJmbnQ3TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1008
    },
    {
      "date": "Jun 19",
      "text": "Oil tanker traffic in the Strait of Hormuz jumps after the US and Iran implement the deal to open the sea lane.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxQRHdNd05CR2hzb1cyLTdhWmxTazZUdGNvZEFNcjdqTENtM0JHRW5wWDMxQzl3aGZ1eFUzWVBwQkxWVTNUcDhVZ1U2T2tleThMNmlGLXdIUzMyQjdHa3U5dFcwdnNfeV9pU0Q2eDloQ3RXMTlaSnlxV3c1OXVfcmRtSFJoR3V0RVEtSTVmRdIBkgFBVV95cUxPN3lPRkw3MHNDVmxWS0NFVE4wU0Z4cFBuY0Vva1E2a2ctckRKek9iUDNia2ZON0JhX2Q1X2Nsa2tkV3BHbVZjcmROLVZsekNUb3Nlc3dvbzVsX0FQaWNrUllEOVVEeXhaWEJZb213TlNibG16NFdxNjBDWVJnUXVxT250bnNkZjFWRFdPcEV2dEcxdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1008
    },
    {
      "date": "Jun 19",
      "text": "Israel and Hezbollah agree to renew a ceasefire after intensified fighting, including Israeli strikes killing 47 in Lebanon and Hezbollah killing four Israeli soldiers, threatened US-Iran talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxQZUlabWgwdElDRVdLdjVrdWdtbmZIYzh4V3NTT3BGTFpiWnFJU2w0NnF1RU1ha3lRUnlXY0xlSDlHUElSTTBnY3UzNXVERC1Hd3Q4RkQtQ1F1cl9OS0tLaW9LRzM2M0hibnlKWlA3SlZmcGZFYlloR3NESmNrMTdpaDBVRzRqT2paREplcV9wX194Wk1yb0hQSG8zdE9YeXR6cGM3Z0djS2tUOGNpVDR0aQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1008
    },
    {
      "date": "Jun 19",
      "text": "Reports indicate continued Israeli strikes in Lebanon despite the ceasefire agreement with Hezbollah.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE81dUtGajhYYWJSU19acmJzaGRKdk5VX1k4ZWJ6My1jb1VJQjhnOUF0cFdQaEpYWDBiQ2dvSWpES0ZCSXZuWW9tSGwxX01vSHdhVE5Jaw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1008
    },
    {
      "date": "Jun 19",
      "text": "Trump states he told Israel to agree to a ceasefire with Hezbollah to prevent further disruption to the US-Iran deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxPZWVHNmNMYzdsOEhXN19zZlhWamhJTnBJeWRaZ0FIR2lwNkZlbUxfV1F0UzY1aVBtcDFkeGxENGxnQl9PREg5WnNaSXpzdC1VRDFRSmdrVzJ6X1c0MlBnQXlNSE5KZWFKaVV1NHAzcmNHbnYwbXNZTXFqcnl4QVBFOXVwQ0tZb1YyYTI2TkI5Q0o2eFlxSXlvcnNCYU0xbXJVMXNWVXFaTVhzR1BJeFRBU1RxMWFoX2tpRUl6YWYwUVpZU1dz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1008
    },
    {
      "date": "Jun 19",
      "text": "Iran's Supreme Leader states that Trump made a deal out of 'desperation'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxOZXNPMU90cURUWXptUWx2bnFyOHoyM3YzYzU2MEQ5czJSTjZCaXFTSGJQaFpDZEliaWFQQWVaRUpkdUstVklKaElVQTFqcnV2bDl4dk5NRmt2S1owdlEzX0F2WE5Rdllac3N5OW44dUFZczBmd2R5SHRXVy1EMGFxSzU2bFBqMS1mYkJCd3Y2YUhjYWNkalhDVjQ3dEIwbG5uaDBFdi0zMGFLQVMwM0hRTUROaUc4WktrSXUzRERB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1008
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
