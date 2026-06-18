export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 996,
  "lastUpdated": "2026-06-18",
  "lastSyncedAt": "2026-06-18T12:42:48.391Z",
  "warDay": 111,
  "summary": "The US and Iran have signed a deal to end conflict and reopen shipping, but Israeli attacks on Lebanon continue, and the ceasefire terms remain disputed.",
  "lastNarrativeUpdate": "2026-06-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 2,
    "summary": "A deal between the US and Iran has been signed to end conflict and reopen shipping, but its terms are disputed, and Israeli attacks on Lebanon continue."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.45
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.88
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 72
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.35
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 48,
    "oilDisruption": 35,
    "tradeImpact": 26,
    "sanctionsPressure": 58,
    "globalPressure": 62,
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
      "date": "Jun 16",
      "text": "US and Iran sign an official agreement to end conflict and reopen shipping.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxONmxPV2hHMTdhbmZiLUZMNXRUOUpxUGVXR1hvcUlRTFpqYi1Eb3BpV2htUkdWeGs5T2lXYkUzVnBjOTZ6X2hKRGp1TVE5R0RKeHFValNrVkFKanN5eVhzTWtIazVEMkl1Tkg2UEowZzc5R2pQbGNPeXJsMGFOd2VlcVlLemJyeW1LT2N6d2REbHZYazdKc1poRHg2MjNpNFRJRmloa3ljdEFEMWJic29QUW5KTlZFOGVNNllJSzZTY9IBxAFBVV95cUxOMERVZUNMTFVZZXBfWW1za0UtWS1Ld1pqemRjM3k2bDh4TXJLU1Y2YXkzWFNXaDE5Y3owNmhYQ2h3blQ0UTlEcExRWmFXR21EUmlINllFNENNOFpBVEZVX2FGNnhDZW45LU9DaGN2NTRYVF9xRXp6dGpjS19lTm5ubEY5QnVaMnhmLWRPVFJaVVVHSzVZVm1EVGRTZ1U3aGdwU2d5MGpOQTIwdGVWY2YtLVVTZ3EtQmpIbnc0aDlUN0Ffa3FY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 996
    },
    {
      "date": "Jun 18",
      "text": "Israel continues fresh strikes on Lebanon despite the US-Iran deal and Trump's criticism.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE5Bel9CaVBKVXJiT2lxdHpHa3RXZ182QWFDSjBUbVJST1lZYWhjakRJSWEtY0lUdEQzYXFZekM3SEx1eEItVGJrVXZZT1c0ZENfUjBnNDdvZTd6UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 996
    },
    {
      "date": "Jun 18",
      "text": "Shipping in the Strait of Hormuz increases following the US-Iran deal, though challenges remain.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 996
    },
    {
      "date": "Jun 18",
      "text": "Iran sends tankers loaded with oil past a US military blockade.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBIRkdJMVBRUERBU2FkM2oxNWVzME9QODZvSW5VbmlNUjItU0xEaldxelJaaHc2QzRUNzBwSVIyWEZtM3ZudF9tZUR3RmZ4U3o1aGF0UFlXU1B3QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 996
    },
    {
      "date": "Jun 18",
      "text": "Hezbollah is reportedly expecting a major cash injection from Iran once the deal is sealed with the US.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNNGZJRWpyYXMteEhEMHdxZ0VnNWxjMjA1dVhnUUtUa3o4RkhoOWkwZ3M1NExYX0tIZkp4NlpIVXFTMVlZeE1tLUhjUURHVmhkaUtMWUhBYVBuSzFkc0ExSTlKVjZNdnlkaWxacjlfXzNNV1JvN0UySllvQlJobXhMenRaUndYSXdQU0hqRU1ZZnF3UDFzNFVYRFpvaEo4NmtGemVZY3k1S3QtbEpIbU5JdElyWVDSAboBQVVfeXFMTUU1b19zbVVOSzB1SnNYTzRoUFAzTFBYQnJDRnBSM29iRkd1NHZ5R1JudGZRREF1MS1BWl9CbERGVUpmVi1RdllCTzRXUzMtRlg1bDRsZ0ktS1JPc0ZKMVA2V1hld3JNUVVKN1pKMklFMXJDaGduWVFjdGVWYWVfZUV5cTlVU1gyVTBndzIxd0EydjFlRGFvOXpnZTBWQXdOWlZTZzRJaktNNmtjZTMzbFVwRWNpWjRMeGx3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 996
    },
    {
      "date": "Jun 18",
      "text": "The Pentagon reveals Musk’s AI, Grok, was used in strikes in Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi2wFBVV95cUxQOWVsVmZONEYtNXNyajhscnZGTTREY2xnV2I1Q2pOdmNCQ1lWX2gxRThnZjRRYkdFMjBMRHRYcXdFMFl2XzFqSV9yMnUtR29meG8ySEV5MGFJYXhvR2h5UHlYQkhIZkNfYXhsa2pqQXlReTE4RHlJMWQydlJ0WmtKakpkTm9TVHF4OUZOUmhUMWR6NmNiX2RodGFUQ2xzMXI5SnJZOTRjUWFZelZjV3ZuUE11b1ZxVEtnQmlYdVozU21CQUFQWnZYeTJQNXhwZ2gyQUREQVlmNDFaaE0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Le Monde.fr",
      "latestSinceUpdate": 996
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
      "headline": "US Brokers Iran Deal Amid Regional Tensions",
      "summary": "The US, led by Trump, has brokered an initial agreement with Iran to end the conflict and reopen shipping lanes. This effort comes despite immediate challenges regarding the deal's implementation and continued Israeli military actions.",
      "tone": "strained",
      "latestSinceUpdate": 993
    },
    {
      "perspective": "Iranian Assertiveness",
      "headline": "Iran Sets Conditions, Asserts Hormuz Control",
      "summary": "Iran has signed a deal with the US but immediately set conditions for Israeli withdrawal from Lebanon and asserted its right to charge transit fees in the Strait of Hormuz. Iranian tankers have also moved past a US blockade, signaling renewed assertiveness.",
      "tone": "defiant",
      "latestSinceUpdate": 993
    },
    {
      "perspective": "Israeli Autonomy",
      "headline": "Israel Continues Lebanon Strikes Despite US Criticism",
      "summary": "Israel continues its military operations in Lebanon, launching fresh strikes despite US criticism. This indicates a continued focus on its security objectives, seemingly independent of the US-Iran agreement's immediate implications.",
      "tone": "defiant",
      "latestSinceUpdate": 993
    },
    {
      "perspective": "Global Shipping Concerns",
      "headline": "Hormuz Reopening Met with Wary Disbelief",
      "summary": "Shipowners are observing the reopening of the Strait of Hormuz with 'wary disbelief' following the US-Iran agreement. This highlights ongoing uncertainty about maritime security and potential new transit costs imposed by Iran.",
      "tone": "anxious",
      "latestSinceUpdate": 993
    }
  ]
});

export default LATEST_SNAPSHOT;
