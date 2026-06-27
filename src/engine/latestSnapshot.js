export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1087,
  "lastUpdated": "2026-06-27",
  "lastSyncedAt": "2026-06-27T18:55:21.213Z",
  "warDay": 120,
  "summary": "Tensions have escalated with US strikes on Iran following alleged ceasefire violations, Iranian retaliation, and Hezbollah's rejection of a proposed Israel-Lebanon security agreement, leading to Israeli strikes in southern Lebanon and disruption in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-06-27",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 5,
    "summary": "A previously established ceasefire between the US and Iran has been violated, leading to renewed strikes, while Hezbollah has rejected a proposed Israel-Lebanon security deal."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "text": "US strikes military sites in Iran after accusing Tehran of violating a ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxNdjVVaVMzcUdxUDVMbm0zREp4X2FHWk5kdzJzbi1zZF9OQ3RhSlVmRFdkSGVXenc4TlRISHlmNzY2dl9FSjdUaDFYR0lNRTlleWxwb0t3blVWUUt3V0tiRGNURVQwQndQZ2l0YkxKZHJ4cjg0OXRwVUVKblBkMks5LXZkWWg5YWJjbmFVN2gzM05rRnBYcDZsTTc2aF8?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The National",
      "latestSinceUpdate": 1087
    },
    {
      "date": "Jun 27",
      "text": "Iranian drones target Bahrain following US strikes on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPTGcxeHZmSjcwLVpBNmxlaWQ4aG11Ynd6U3pqbGhkM09BTmxuYXBtczBhR3NGQWxVYU1WWGlVTGU1QlhHWVJOdDhWRHJoQ2hMcGZyb013NGVpR3NzQ004RUJWd2JQWDFYVG1SZUhVOUI0UldOWGdQRnRTWW5FVThLdG9LeHk2a0l3d0tZSmhnVXkxZ1hSOTNHcFcwaTJKaUxmZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1087
    },
    {
      "date": "Jun 27",
      "text": "Hezbollah rejects a US-brokered Israel-Lebanon framework agreement, calling it 'surrender'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOLTM2b0s0V25IYjUxNEhrRDV1RDFfdzlRMFdGU1VFZlhPNXJwZ3BuS2RIY1pmT2JPVG9kd19Sdlhtby1uUGVHSTJuU0dnSzJIeFVydU5PeVVQbFJHa0NqbF9iS2Foc2FNSDh2Qk9hNU84dWV0SUpXc00xbzl1ei1UT3UzdUpFam43cFJDZWstWnpBMVJleWE5Ul8ycUNybWRjMDJKUWtEdFJZQjlPRUxrLVMtaVZPaHg3bWY5d9IBwgFBVV95cUxNaUdLcXdDSTJMcFZjY2NCcXRtYXhHWEZNaDNxcTBOUUZZUjBnY1hLSk5Xb1d4aXNRQXpKSVhWMVhhUU5iWVZjMnViTVE5X2hCdnBtbEdURzlPdEVSeEF2RkN2a2NDeU9oREdEZ1dUVUtqeHVndWdBelpaUWc4S0dHZkpqUTRFZy0tcEdMZGZPVWpxX0VPZFUwdURyQ1BkZXBFazIwT2E2QWxacUFZVnF6bVk3NFVlZnRYcmRNckR6QXloUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1087
    },
    {
      "date": "Jun 27",
      "text": "Israel strikes southern Lebanon after Hezbollah condemns the new deal.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBsVHVPNndVQ3hQLTF6aUJDNnJ5RmVjdlFOeWhHS1VMYUo2X0UyZDQ5Vm5Jd1ZzeURPX21lMnJNNHUtTFBqMmRXU0F2QXFxWEp0ZU1Db1JCOUx5dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1087
    },
    {
      "date": "Jun 27",
      "text": "The UN’s IMO halts ship evacuations from the Strait of Hormuz after an attack.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNOHZGMlVVcWRmYVBfNGx5WEYwbHBVZkhjcFVfdld2cmQ0VWVPMzIwcHg3dnl6alFUc2UtRVgzQVhPZWFfV0hUVUNkYXdxb1JaZzl1cG41SG9HbDZVQkhoSnh0WFNGSS1IUjNSTFU5QUJXbWlsS3QzQmdpTmZmLTNSZVRuSVpVeUtuYnhKajdQSXJsOFFXSVB5RmlKbXJ6Sk15bUFESzF6YVZrTnh4LTVGVW9Gdlc4X2RaR2cwdzNLRdIBxAFBVV95cUxOSjI4NkNxOUR3NmJjSjRUQjZkZ1J0NFBJdndkYlJ4aVo3Wk9IZXR4Qk1rYzJ4bGxzM004WTA2d2taOF9jX1FYeFlEcTQ5VXNLZTRPdnhud0VvcUtNSGpMbGQxRnlYLVlIS09pdTVRbUJnVEQwbng1WlpscjY5TnJWVjRpWTFWZlhwVVVZZlB2RjdBUElVWlBzeklIcXJWQXFsTkljWVFoS0hFTTJVNEJzNW5VeHpNV0tRMjdvZkhuVmw5NVF3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1087
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (10 headlines)"
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
