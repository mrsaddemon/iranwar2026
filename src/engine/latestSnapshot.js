export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1089,
  "lastUpdated": "2026-06-27",
  "lastSyncedAt": "2026-06-27T21:31:50.089Z",
  "warDay": 120,
  "summary": "Tensions between the U.S. and Iran have escalated with mutual strikes and accusations of ceasefire violations, while Israel and Hezbollah engage in conflict in Lebanon and attacks disrupt shipping in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-06-27",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 5,
    "summary": "A previously attempted ceasefire between the U.S. and Iran appears to have collapsed following mutual strikes and accusations of violations, while a proposed Israel-Lebanon security deal was rejected."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "date": "Jun 27",
      "text": "U.S. Military Strikes Missile and Drone Sites in Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE8zUC1WSUVpMkZDQ0ZZd2N5Si1yeEc0cnF3UFp2aXRUOU5ONkJfcnFNalJMTnRQbmM4SWpRMUpxWGlDN0NQR0owa2dVemVOLXN5aUFsblBaUzFrNnIzN2Q4Nm5BMHYyVFFmOFgxMm40UE11YTBZcEcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1089
    },
    {
      "date": "Jun 27",
      "text": "Iranian drones target Bahrain after U.S. strikes Iran; Trump accuses Tehran of ceasefire violation.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPTGcxeHZmSjcwLVpBNmxlaWQ4aG11Ynd6U3pqbGhkM09BTmxuYXBtczBhR3NGQWxVYU1WWGlVTGU1QlhHWVJOdDhWRHJoQ2hMcGZyb013NGVpR3NzQ004RUJWd2JQWDFYVG1SZUhVOUI0UldOWGdQRnRTWW5FVThLdG9LeHk2a0l3d0tZSmhnVXkxZ1hSOTNHcFcwaTJKaUxmZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1089
    },
    {
      "date": "Jun 27",
      "text": "Israel kills 1 in Lebanon a day after agreeing to framework.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOLTM2b0s0V25IYjUxNEhrRDV1RDFfdzlRMFdGU1VFZlhPNXJwZ3BuS2RIY1pmT2JPVG9kd19Sdlhtby1uUGVHSTJuU0dnSzJIeFVydU5PeVVQbFJHa0NqbF9iS2Foc2FNSDh2Qk9hNU84dWV0SUpXc00xbzl1ei1UT3UzdUpFam43cFJDZWstWnpBMVJleWE5Ul8ycUNybWRjMDJKUWtEdFJZQjlPRUxrLVMtaVZPaHg3bWY5d9IBwgFBVV95cUxNaUdLcXdDSTJMcFZjY2NCcXRtYXhHWEZNaDNxcTBOUUZZUjBnY1hLSk5Xb1d4aXNRQXpKSVhWMVhhUU5iWVZjMnViTVE5X2hCdnBtbEdURzlPdEVSeEF2RkN2a2NDeU9oREdEZ1dUVUtqeHVndWdBelpaUWc4S0dHZkpqUTRFZy0tcEdMZGZPVWpxX0VPZFUwdURyQ1BkZXBFazIwT2E2QWxacUFZVnF6bVk3NFVlZnRYcmRNckR6QXloUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1089
    },
    {
      "date": "Jun 27",
      "text": "Hezbollah rejects US-brokered Israel-Lebanon security deal as 'surrender'.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1089
    },
    {
      "date": "Jun 27",
      "text": "UN’s IMO halts ship evacuations from Hormuz after attack.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNOHZGMlVVcWRmYVBfNGx5WEYwbHBVZkhjcFVfdld2cmQ0VWVPMzIwcHg3dnl6alFUc2UtRVgzQVhPZWFfV0hUVUNkYXdxb1JaZzl1cG41SG9HbDZVQkhoSnh0WFNGSS1IUjNSTFU5QUJXbWlsS3QzQmdpTmZmLTNSZVRuSVpVeUtuYnhKajdQSXJsOFFXSVB5RmlKbXJ6Sk15bUFESzF6YVZrTnh4LTVGVW9Gdlc4X2RaR2cwdzNLRdIBxAFBVV95cUxOSjI4NkNxOUR3NmJjSjRUQjZkZ1J0NFBJdndkYlJ4aVo3Wk9IZXR4Qk1rYzJ4bGxzM004WTA2d2taOF9jX1FYeFlEcTQ5VXNLZTRPdnhud0VvcUtNSGpMbGQxRnlYLVlIS09pdTVRbUJnVEQwbng1WlpscjY5TnJWVjRpWTFWZlhwVVVZZlB2RjdBUElVWlBzeklIcXJWQXFsTkljWVFoS0hFTTJVNEJzNW5VeHpNV0tRMjdvZkhuVmw5NVF3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1089
    },
    {
      "date": "Jun 27",
      "text": "How Iran Devastated an American Naval Base—and Caused a U.S. Recalculation.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTFBXQ3d3ME5VclhzVzFQcHhab3BZMEg4QTFTYzFVb0dnN2RqcXI4VzVpMDJkX1hsTWpjVF9GYlgzclQ5UFFIZmtpMDU2NTdvRGgzeHhvWDF4bHRPODVRQ2pWQzJtTVE4anN4MF9VUjRHckdOQ2RiNlZ0bVRaV2FMZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "WSJ",
      "latestSinceUpdate": 1089
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (12 headlines)"
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
      "perspective": "US/Allies",
      "headline": "US and Israel Respond to Iranian Aggression",
      "summary": "The United States and Israel assert their right to respond to Iranian aggression, including attacks on shipping and violations of a ceasefire, by conducting targeted military strikes to protect regional interests.",
      "tone": "strained",
      "latestSinceUpdate": 1078
    },
    {
      "perspective": "Iran",
      "headline": "Iran Retaliates Against Foreign Aggression",
      "summary": "Iran maintains its right to retaliate against US and Israeli military actions, asserting that its strikes are a response to foreign aggression and defense of its sovereignty.",
      "tone": "defiant",
      "latestSinceUpdate": 1078
    },
    {
      "perspective": "Economic/Global",
      "headline": "Oil Prices Fall Amid Ongoing Conflict",
      "summary": "Despite ongoing conflict, global oil prices have reportedly fallen to pre-war levels, raising questions about the economic impact and beneficiaries of the prolonged conflict.",
      "tone": "skeptical",
      "latestSinceUpdate": 1078
    }
  ]
});

export default LATEST_SNAPSHOT;
