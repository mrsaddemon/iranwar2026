export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 997,
  "lastUpdated": "2026-06-18",
  "lastSyncedAt": "2026-06-18T16:18:50.703Z",
  "warDay": 111,
  "summary": "The US and Iran have signed a deal to end conflict, allowing oil tankers to pass through the Strait of Hormuz, though Israel continues strikes on Lebanon and terms of the ceasefire remain murky.",
  "lastNarrativeUpdate": "2026-06-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 7,
    "summary": "A deal between the US and Iran to end conflict has been signed, but its terms are contested, and Israeli military actions continue in the region."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.5
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
        "aggression": 0.4
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 30,
    "tradeImpact": 22,
    "sanctionsPressure": 54,
    "globalPressure": 55,
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
      "date": "Jun 16",
      "text": "US and Iran sign MoU to end conflict, hailed as 'historic document' by both presidents.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxONmxPV2hHMTdhbmZiLUZMNXRUOUpxUGVXR1hvcUlRTFpqYi1Eb3BpV2htUkdWeGs5T2lXYkUzVnBjOTZ6X2hKRGp1TVE5R0RKeHFValNrVkFKanN5eVhzTWtIazVEMkl1Tkg2UEowZzc5R2pQbGNPeXJsMGFOd2VlcVlLemJyeW1LT2N6d2REbHZYazdKc1poRHg2MjNpNFRJRmloa3ljdEFEMWJic29QUW5KTlZFOGVNNllJSzZTY9IBxAFBVV95cUxOMERVZUNMTFVZZXBfWW1za0UtWS1Ld1pqemRjM3k2bDh4TXJLU1Y2YXkzWFNXaDE5Y3owNmhYQ2h3blQ0UTlEcExRWmFXR21EUmlINllFNENNOFpBVEZVX2FGNnhDZW45LU9DaGN2NTRYVF9xRXp6dGpjS19lTm5ubEY5QnVaMnhmLWRPVFJaVVVHSzVZVm1EVGRTZ1U3aGdwU2d5MGpOQTIwdGVWY2YtLVVTZ3EtQmpIbnc0aDlUN0Ffa3FY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 997
    },
    {
      "date": "Jun 17",
      "text": "Oil tankers pass through the Strait of Hormuz following the US-Iran deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxNZFY3MnNmZ09mREw2aE9SRkR5MXFsUERRRTFfT1B5ZVdhaVdweDNnNGN3c2o3cEVndWt5Y2FBMDVQakQxclN6QzZEM0tzdFNGV1AycE1rU3RKcVdjQ1Vyd3ljbnF4VWJIeVBfU1Q3aHRrYmxNV1dZVHlFMlJKODZMcDQ3TUs1MmpMS2R4ZEVCNWlVcVJjMXBVTXZHSEpwQTdGVWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 997
    },
    {
      "date": "Jun 17",
      "text": "Israel launches fresh air strikes on Lebanon despite the US-Iran deal and Trump's criticism.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE5Bel9CaVBKVXJiT2lxdHpHa3RXZ182QWFDSjBUbVJST1lZYWhjakRJSWEtY0lUdEQzYXFZekM3SEx1eEItVGJrVXZZT1c0ZENfUjBnNDdvZTd6UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 997
    },
    {
      "date": "Jun 17",
      "text": "US states it will restart military action if Iran does not uphold the terms of the deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi9gFBVV95cUxNMDl6SEpjMVhoS0xBTmlGYXo0eGtPbjE5bGhXM3VpZmFicUNsS01ydVVEaWNJWUNNTFJwMUdlUVVBYlRkQUZyVVIxR0JiOTA2a2dJczJxVzd2MnlEZWpkQ2NUTlk1NjFJVFE5YUd0a0YtbGp6cTNheE5kcmJ3Z3NUbVRNVTlIU3llWGt6RENfQWZNLS1TRlc0SXRUWENpcWFkaEhnZ0hMbWdDeHVoZVNuZzNrWlRTZGl6UHowclJtRUZoT1RYQ0hSaHVPYlpsdVQ5azN2aG1uNDFaYkRDMlI0UjdnVmg3cDMtZTNZT3I4QUs3OGdUbXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 997
    },
    {
      "date": "Jun 17",
      "text": "Hezbollah is reportedly expecting a major cash injection from Iran once the deal is sealed with the US.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNNGZJRWpyYXMteEhEMHdxZ0VnNWxjMjA1dVhnUUtUa3o4RkhoOWkwZ3M1NExYX0tIZkp4NlpIVXFTMVlZeE1tLUhjUURHVmhkaUtMWUhBYVBuSzFkc0ExSTlKVjZNdnlkaWxacjlfXzNNV1JvN0UySllvQlJobXhMenRaUndYSXdQU0hqRU1ZZnF3UDFzNFVYRFpvaEo4NmtGemVZY3k1S3QtbEpIbU5JdElyWVDSAboBQVVfeXFMTUU1b19zbVVOSzB1SnNYTzRoUFAzTFBYQnJDRnBSM29iRkd1NHZ5R1JudGZRREF1MS1BWl9CbERGVUpmVi1RdllCTzRXUzMtRlg1bDRsZ0ktS1JPc0ZKMVA2V1hld3JNUVVKN1pKMklFMXJDaGduWVFjdGVWYWVfZUV5cTlVU1gyVTBndzIxd0EydjFlRGFvOXpnZTBWQXdOWlZTZzRJaktNNmtjZTMzbFVwRWNpWjRMeGx3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 997
    },
    {
      "date": "Jun 17",
      "text": "German military prepares for a possible mine-clearing mission in the region.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQYWJZYkV6UWd4eWZ6bm5MbGlMbzMzN290YXZlT2t4bG9DeHp0c0JPYnU3YmxEcmpYc1AycTJtWGszR2NzYmY2QmRwWFR1azZRdktfYzctRHRSQU55S213MTRheEFPc1B0Qk1YdW9oSWhZOXd6OFZLeG9hYmhvZi1zNHk5TDZPWmw1a3pQNnRhN0k1RmoyUDNVd1JJZGdqU0XSAZ8BQVVfeXFMTVlKR0s4TzdvNEdNRl9XU3dJSHd4dUpxRjh2RWxYWmFYSVNNN0ZhM2d6Sk91VFlrRkYxYktOODVIeWxKNXg4X1ZIVkJTWFMxdEl5bU5yRlhVQ3hSQlowZ1phbEZRQXpSYXRLYUtNTDg3SGtraTlIMWlreVNHZHhfMHMzTUhZZ1F5c1lkMDI3MXJ2eGc0TW1yUXRCWktEQlJB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "DW",
      "latestSinceUpdate": 997
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
