export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1003,
  "lastUpdated": "2026-06-19",
  "lastSyncedAt": "2026-06-19T11:50:19.412Z",
  "warDay": 112,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 60,
    "summary": "An initial US-Iran deal was signed, leading to a 60-day waiver of Strait of Hormuz fees, but ongoing Israeli strikes in Lebanon and Hezbollah retaliation indicate a fragile broader ceasefire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.4
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
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 68,
    "escalationLevel": 48,
    "oilDisruption": 50,
    "tradeImpact": 37,
    "sanctionsPressure": 54,
    "globalPressure": 59,
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
      "text": "US-Iran talks in Switzerland postponed as Israel strikes targets in Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi5gFBVV95cUxObmxTZUxEX2lPNnJHQ3J1V0NZUmlOR3E1d25QTUxIWXZKYms4SUhTTnJlUXB3amxfMDllc29oVXg5UF96S2tZajhxSnR2TFdwUUpsd0E3elNydEdoWE4xN0NMSFVKbE9wVVhqZFUtdXpOakQtRVlxSTB2Mk1QRHFVTC05WFpraUNqY29wbV9YUndEMnUtMGg0V3RzUm1ibW05WVZ2MmZPWnpnVnEwMkpyX2ZROUR6clFBVEtLeE5lWjJUQ0lWMzNRU3ZTSVZFUUtmN3cyNVdyMUQ4VUk0RW5iNGg0cGNMdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1003
    },
    {
      "date": "Jun 19",
      "text": "Israeli strikes kill at least 18 amid intense fighting in southern Lebanon; Hezbollah kills four Israeli soldiers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxPRmRYSFFlOTJnelNXMDFWenltYXpzSkh5b3BrYUNJRTVNYXNSU3FlVmlRM0t4eXhhbnp2eHlmWUxoMVZnNzFYRGZqLTNkSXE3VG9RNGR2aDVPYl9uakxaX2pJbFI1RlRHWFgzZ29fMGFnZ0hyMFZqREFJdkQzVGJQVHRUeDNDcGd6X1RVdlZQRDlmcVg5S3ZvNmhRWGxLZEZWRWdzSUg3bm1ZLXpF0gGyAUFVX3lxTFBTQnVqcFBDQ1M5VDloX3M1eUVudDlIYWxDQnZIQW51ZXdnR05vaGxveV9WajM5T0FtcHdMMmNNUm9NTFY1NE5yLW9DeTBXQWxmLTFRTThHSS1HY3NpV19BdEJKa2dOTk1JRHhReFRBNnBWUTNmaFgweWdkdzg5RGkzSEZrNEhmM3lzNkE1MDlaVFYxdEl5NTl0TlU4TzdjUnJPRUlfNUxWMVI1cG90eXk4UEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1003
    },
    {
      "date": "Jun 19",
      "text": "Iran waives Strait of Hormuz fees during 60-day peace negotiation period.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiyAFBVV95cUxNMWNBV2Fad29lOGxTT1k3VHNRcERnWVhONzI2SV9weDQ2RWw1UFZBQXBCTDNmWHNCdnVaSHhWZEFfSkE1d2NGckdzMUo2WGRaRU5hWERLeHBRUEhIWXYydEpBaWgyS3FGNWY4dFlmMjBHWl9weUR3WlhlMmtma3lEZHBXbkpYN1M0eFhjOUw2SGZlZ2h3cmw2SmVfWVNzUHZDRWtOSVk1NU9tZ002bndXczZ5bE9kc0YwV3V4NDNsTnVFWDJQeF9fOdIByAFBVV95cUxOdXU3M0ZXeFNXekRzNHRabTFmOGFaOHpyZDZZZmdQN0tzZGd4TDVvaHNZb09UUjM0UTF4cHB0RkVoQzY2Z2g1ZWd6S2xCelNIY0VxVXY1R3BoYTVEN1NMd00yZjdkN1BXRWZuTEF4TFFjTHVTdHNILXdXUXFVTzZMY2dncTU2MVZQMWtRU1NiV1RlQS1hTjE0RTZkQWFVcU9tVnp0anM2U0FHR1MxWkdrSWRQV25kT0FzMThPNGE3ZS1ZdHBPSDlncA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "South China Morning Post",
      "latestSinceUpdate": 1003
    },
    {
      "date": "Jun 19",
      "text": "US military lifts blockade of Iranian ports as part of initial deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPVks0MkhBQW1EOGdhbjd5WlVwTWNuQWlyQ1h3WWF5dGZyN3Bfc0VQMi1rRHY3bFlRd1V5dDltWE50bndDakVTeGgzWlZwMDFWWEFnYUJRcjYtQWpiTHNVOVBJV3pWTlFMeEJzbHVTbXcxQm9nNHcxSFJZQ3FQakttRXJWUnpaZklhVENwUjZVaXlqUENfWVFvcDVENTExTEZveTBDZDRYVWk5T2VSTEpVRlRVdUlNZEpBc29n0gHAAUFVX3lxTE1NSm5IcWVqNmlDOWN1anAxMzlCSEF1d2JpcGQ4T1JRUmVqc2lrRnFOUURUaTNpWi14V2tJVHBQSDVDX0VXTEVvMGRuMl9uT1dGWjNvWE9nSWxVaGZZN2ZSWlZ3dFI3NjhyaGFKMllPRlp1dVowbEF4OFpTeUlFeWxFdHdHeHFoQ0dMSkdzMjR3N05WUFZQeGx3cnF3UXV5ZmpvOXNDZEJfbDdXSmVsOTdpWlpoZENEYVRRWnJmbnQ3TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1003
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
