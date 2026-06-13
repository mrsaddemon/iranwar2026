export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 960,
  "lastUpdated": "2026-06-13",
  "lastSyncedAt": "2026-06-13T22:14:37.961Z",
  "warDay": 106,
  "summary": "US and Iran are reportedly close to signing a peace deal on Sunday, leading to a de-escalation of US threats, while Israel continues air strikes against Hezbollah in Lebanon.",
  "lastNarrativeUpdate": "2026-06-13",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.85,
    "durationDays": 1,
    "summary": "A US-Iran peace deal is expected to be signed on Sunday, leading to a significant de-escalation of direct US-Iran tensions, but is not yet active."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.2
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.3
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 40,
    "oilDisruption": 70,
    "tradeImpact": 58,
    "sanctionsPressure": 60,
    "globalPressure": 71,
    "allianceInfluence": 73
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Jun 12",
      "text": "US and Iran announce an agreement is close, with President Trump stating a deal will be signed on Sunday.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQNFFWVF9EQWtHZGhrdUx4SHB1ZHQ3b05YTEYzODVmbXRqV2J0ODBsN1hQSDVzbFJqNEw2Z3BPLVZjRnVkYmtOR1BLVno2bUtxR3hELWl4ZnlhbklQejJzRnRiZkh3RmREcWZ6U09zWEIyenFST2JmODNvdmppeURLRVk4M2VMZDQ4b0RWamtPSzBmbHBJZk5RVjdmcDVNTHNzemNQMG5ZUkJQS0xMb1JUWkxGa1B1eVh2anRtdm5VOG7SAcYBQVVfeXFMUEhRTVF3c2tEUFNmSWhpSTVHYV9lQXo2ZHpTRU9yXzBhbGozam4xd1VyUW16Y2N1a3lwYzFabkV4X1ZKZFk0LXRvNXh6R2MxUktrVHNmNktxYWVjNjN5X3JkaDFiME1xWWRKT09UREw2eGJ0RTA5MzdNdEVYajNlTlRCaENwRTY5czFBeVQza2lqVG13LXR0WXZya2lZYmhmclV4R21jLVU4b1dCeW9WS2hFalk1VjdudS0wa0NVbkVWd1ZyRmlR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 960
    },
    {
      "date": "Jun 12",
      "text": "President Trump retracts latest threats to strike Iran, citing a breakthrough in peace talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxNNUxSdXNaSUpKdFBPUU45bTNwSU43cFRxY1VEY2UzcnFoZ0FmRXhjdUdmZVNaSk9WN3VodGJsS21VbzcwdXdoelhHcTFUSWtVUW9LRVhMUXZ4SmlNWEs4OUhwbWdjRVpLY2dNZHZLbk1pZmgzZE04cUhuNmtPZEJicXZjWVVMUjRqRld6R3FDVy03OFFGNTFKcTdaY1ktUEJLamNPMDA1azgzZ00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 960
    },
    {
      "date": "Jun 12",
      "text": "Israel carries out air strikes on over 70 Hezbollah sites in Lebanon and prepares for a potential ground advance.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 960
    },
    {
      "date": "Jun 12",
      "text": "US military is reportedly making plans to secure Iran's nuclear materials if a deal is reached, though a ground mission was paused by Trump.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTFB4cWZMcjNVMnRkWlJ6eGlEV3ZndVBtRFZadXg1aUxUYnNpZGdZb3hrZGJzS0FYVzFRUkRUT0wyLW40Q3ktN3lhUG1mcm9KOEU0ZTZ2RVNOZmFWRDc2RHhMOWUwQWt2SWJqWjdIOThNbkkxUFRGMzhid3p5TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 960
    },
    {
      "date": "Jun 12",
      "text": "Pakistan's PM states that the 'final text' of the US-Iran deal has been agreed upon, with Iran holding final deliberations.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxPbXc3blhkTDdaaGZNWkl4cWlUUXk1TTR3X0Q3Ym93ZDlwX3FYRU1iTHl2Wl9wekhRTmJfaWVIcmduMDVOTTRYUy1fTWIwVHVqRFZnQUtTVXdJYmVQZjJUQXhkc3M5Yms2aVlBU05RUlE0Ty1UUlNuS1M5dVVWelpQRTZ5WWV3UURoa2Fudzh2Z0JoSEdJMnp1V2ZDX2lvdm5seGtoMUNNZE5jN1k1MmJSSnpVTjJjTHE20gG-AUFVX3lxTE5VXzRrd25NRzg2NGhvSk9uX0txUlUzQmxQZW1fYkMwRkN6bTM2VXFrN2Y5ZXJuOENoaUc3blVybkQ1RWMxYVY3NjJNYWFVQWZOcER6cXowRE5OeHdUNXBxMmh0VFJ5NmNscDNPQU14VGRNWmVGNHZzZ1Q5LThZZGxkcjJ0MVVWQ25XV1ZkeGE3eWlpcG43WW1FX3EzZGJHUkdGYjhMSEZ1aDNfcEoyOG5lak5Fa1YyUzU1aVBjLVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 960
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
      "perspective": "US Administration",
      "headline": "Trump Touts Deal Progress, Cancels Strikes",
      "summary": "President Trump claims significant progress in talks with Iran, leading to the cancellation of planned strikes and signaling a potential de-escalation of direct conflict. This narrative emphasizes diplomatic breakthroughs.",
      "tone": "neutral",
      "latestSinceUpdate": 950
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran Denies Deal Finalized, Warns on Hormuz",
      "summary": "Iran acknowledges ongoing negotiations but denies a deal is finalized, maintaining a defiant posture regarding the Strait of Hormuz and leveraging Lebanon as a strategic asset. This perspective highlights caution and continued leverage.",
      "tone": "defiant",
      "latestSinceUpdate": 950
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Israel Escalates Against Hezbollah Amidst Talks",
      "summary": "Israel continues military action against Hezbollah in Lebanon, with the IDF poised for further offensives, indicating persistent regional tensions despite US-Iran diplomatic efforts. This narrative focuses on ongoing localized conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 950
    },
    {
      "perspective": "International Mediation",
      "headline": "Pakistan Claims US-Iran Deal Text Agreed",
      "summary": "Pakistan's Prime Minister asserts that a 'final text' of a US-Iran deal has been reached, suggesting international efforts to broker an agreement are advancing. This perspective offers a more optimistic view of the diplomatic process.",
      "tone": "neutral",
      "latestSinceUpdate": 950
    }
  ]
});

export default LATEST_SNAPSHOT;
