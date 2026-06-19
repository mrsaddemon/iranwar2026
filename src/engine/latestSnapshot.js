export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1002,
  "lastUpdated": "2026-06-19",
  "lastSyncedAt": "2026-06-19T07:31:41.270Z",
  "warDay": 112,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-19",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.93,
    "durationDays": 14,
    "summary": "Despite calls for a complete ceasefire from the US, Israeli forces and Hezbollah continue to exchange attacks in southern Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 38,
    "oilDisruption": 50,
    "tradeImpact": 27,
    "sanctionsPressure": 49,
    "globalPressure": 50,
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
      "text": "US-Iran talks in Switzerland abruptly called off, with Vance delaying his trip.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNb2hjaXJJODViakgzMExITW9TRTY1SzFPOWo0cFRNZmVsZXJ4cnEwSXN5ZFBsM2VjZ2NNdWZHaWl4LVE2a1k2RWpMUWZQY19acnFobnZYcWgwTEVOOUoxcWlwSnpRN1E2TXR6TllHNGd0UTZaallHcFp0emllU3dKTERyWlhIcW90YzR6eGN1Sk9HanNWUHd0MV9oQTF5by1YQkFydlQyRGtnQldpamdYZXl2RmtqMjBkbWhabTVPSEbSAcYBQVVfeXFMTzd1ZDFrMk9CbDNKNmRyZ2psQUlsazJHdG1hVHkwTENBTzAwbnp0UzUxRzBMY1NXZ3BMclctV1J2NGQxUGZCMGtVaFVlQzZqSHM0b0NvSkJIUDR3aFZJSF9zeW1FalZzR2xBeEFreFJQUmpZVHlxNWZVNHdNVF9PVmwzSmltQTFSeUIxNUxCU2cxbDhBZ2RIY3k1Rk5BODNlYkNOZFpiZWIxX05oczF6Z3FiaUk2YWRGMklnT2c5VDNPR2tmS0Vn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1002
    },
    {
      "date": "Jun 19",
      "text": "Israel launched fresh strikes on southern Lebanon, killing three despite US-Iran deal context.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxQQm05UUlaMWxCNnhBVjdoQ2JzSmxwSVdiNThkbEI2bzV1dWV6ZXY1SmxtU2xPcUxrNmdlQ1VzMUZ1Y2RtaWF2djVweHZhbE9DOUxvNGowWFliM3VjX2dEMFFUNVdNdWY1RlpzbGpNRkVHMjB5Y1loVWZBNno2ZEV1QWtOdVd6Ulo4YWczWkg3X3dkd3BRSzU3ZnJLZ0RiQW04T3NWZURXZVg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Globe and Mail",
      "latestSinceUpdate": 1002
    },
    {
      "date": "Jun 19",
      "text": "Hezbollah attack in southern Lebanon injured 5 IDF troops, one seriously.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxNWXd3YlN5XzRZUkplSmlCSVBNUERjTjhVUWpYT01IeHZqMG1weElaMEdjTUZEbjdDaURydUU3WXpxd1p6X1NnYWRkTUhydkREelNKeXBDV1RmcEpWamNkZU5US0F4OUdsQUJYZEdMVGV6cnFfRVl5RVVlT0R1QjdDNHJ1MldjZDJOUUx5YTVWeENwWVB5MTBiZ3d1dmprcVJjcW9DYkJ0WnA0QWhkMDFkbnZwMUZqZ0RU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1002
    },
    {
      "date": "Jun 19",
      "text": "The US military lifted the blockade of Iranian ports as part of a deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPVks0MkhBQW1EOGdhbjd5WlVwTWNuQWlyQ1h3WWF5dGZyN3Bfc0VQMi1rRHY3bFlRd1V5dDltWE50bndDakVTeGgzWlZwMDFWWEFnYUJRcjYtQWpiTHNVOVBJV3pWTlFMeEJzbHVTbXcxQm9nNHcxSFJZQ3FQakttRXJWUnpaZklhVENwUjZVaXlqUENfWVFvcDVENTExTEZveTBDZDRYVWk5T2VSTEpVRlRVdUlNZEpBc29n0gHAAUFVX3lxTE1NSm5IcWVqNmlDOWN1anAxMzlCSEF1d2JpcGQ4T1JRUmVqc2lrRnFOUURUaTNpWi14V2tJVHBQSDVDX0VXTEVvMGRuMl9uT1dGWjNvWE9nSWxVaGZZN2ZSWlZ3dFI3NjhyaGFKMllPRlp1dVowbEF4OFpTeUlFeWxFdHdHeHFoQ0dMSkdzMjR3N05WUFZQeGx3cnF3UXV5ZmpvOXNDZEJfbDdXSmVsOTdpWlpoZENEYVRRWnJmbnQ3TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1002
    },
    {
      "date": "Jun 19",
      "text": "Normal shipping will not resume in the Strait of Hormuz until 80 mines are cleared.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxObGdpNmNYZlNYU3ZPMUZsYkV6OVd3QnJIOWEwdWlBQTZDbzFZNmYxdEx5ci1HMlcyUFlYdzFqSl9hQlp5RE5LNThmLXdxTHBydDVfQTcwejFmS1FDZFlvOGxwaGJUWEIxOGRMcmJoUmJxVEZneVpXcjBMY2R5TEJ2Z1BSRDV5RGE2LU5BLWk4MHhKc1hsZVRoVDRtaUEtd3pRWnNOWnVTcUsyaEFrUFdNcmpmZkx0Tk9X?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1002
    },
    {
      "date": "Jun 19",
      "text": "The White House issued an 'unprecedented' rebuke to Israel regarding its actions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxOTC1QQWJuUjg5b0NRQWMxVlkxUjlCTnJsWEdtSFZmdTJQblBCaFlRX3lWY0RhNDVSUjVQZS1DaFcwT29kRkdUbWRiaFUtZG9jNXN2Y2lkUGtqZ1ZybzFtSGViVUJsNmZFRTlJMGg4Njh3LTJYdDUxclJ4eTg5cm8zV1p6ZkVON0k5ZDltZE1OZmJ3T3pwaXFBUmVaVUM1MmFSZEhZ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 1002
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
