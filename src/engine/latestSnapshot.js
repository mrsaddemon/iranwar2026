export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1079,
  "lastUpdated": "2026-06-27",
  "lastSyncedAt": "2026-06-27T05:32:22.773Z",
  "warDay": 120,
  "summary": "US forces have conducted strikes against Iranian military sites following an attack on a vessel in the Strait of Hormuz, while global oil prices have fallen and a previous ceasefire appears to have collapsed.",
  "lastNarrativeUpdate": "2026-06-27",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 5,
    "summary": "A previously established ceasefire between the U.S. and Iran has reportedly collapsed following recent U.S. strikes and accusations of violations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
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
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 35,
    "tradeImpact": 26,
    "sanctionsPressure": 54,
    "globalPressure": 56,
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
      "date": "Jun 26",
      "text": "US strikes Iran after attack on vessel in Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOLTM2b0s0V25IYjUxNEhrRDV1RDFfdzlRMFdGU1VFZlhPNXJwZ3BuS2RIY1pmT2JPVG9kd19Sdlhtby1uUGVHSTJuU0dnSzJIeFVydU5PeVVQbFJHa0NqbF9iS2Foc2FNSDh2Qk9hNU84dWV0SUpXc00xbzl1ei1UT3UzdUpFam43cFJDZWstWnpBMVJleWE5Ul8ycUNybWRjMDJKUWtEdFJZQjlPRUxrLVMtaVZPaHg3bWY5d9IBwgFBVV95cUxNaUdLcXdDSTJMcFZjY2NCcXRtYXhHWEZNaDNxcTBOUUZZUjBnY1hLSk5Xb1d4aXNRQXpKSVhWMVhhUU5iWVZjMnViTVE5X2hCdnBtbEdURzlPdEVSeEF2RkN2a2NDeU9oREdEZ1dUVUtqeHVndWdBelpaUWc4S0dHZkpqUTRFZy0tcEdMZGZPVWpxX0VPZFUwdURyQ1BkZXBFazIwT2E2QWxacUFZVnF6bVk3NFVlZnRYcmRNckR6QXloUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1079
    },
    {
      "date": "Jun 26",
      "text": "Global oil prices fall to lowest level since before the US-Iran war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxOYTRyTGFMT0FnbFM3OE13em1sbURITEpySU5vU0NBaVhCRnhrVGJHLXF4cXJ3Uk9fUEphUmtlZ2llT3FfN3Q2LXBwSy1Jc3JHNFJkclNHLVk0anRUa3hHVW1ZVlEwWnpIMm1CWFJlZGF0VzBzeGpXalJTcVdIeU9ja0pB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1079
    },
    {
      "date": "Jun 26",
      "text": "Congress directs Trump to remove forces from Iran war in a symbolic vote.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxONFNtMy1HZlhnWDdRVnBCbW5JVFFNX3VPeXR3RXNlR0FtOFNMV193NktWWGU5VmYtUFRvZy1IOTFnUzIxNldmZ1dXb29yVGFCeXhSYWdkN0VZS0tWZTlzTERNVXhPNVBBM0VXMHkxbTM3NlhNaWJLcG16d1p5dXlERTRSV2k?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 1079
    },
    {
      "date": "Jun 26",
      "text": "UN’s IMO halts ship evacuations from Hormuz after attack.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNOHZGMlVVcWRmYVBfNGx5WEYwbHBVZkhjcFVfdld2cmQ0VWVPMzIwcHg3dnl6alFUc2UtRVgzQVhPZWFfV0hUVUNkYXdxb1JaZzl1cG41SG9HbDZVQkhoSnh0WFNGSS1IUjNSTFU5QUJXbWlsS3QzQmdpTmZmLTNSZVRuSVpVeUtuYnhKajdQSXJsOFFXSVB5RmlKbXJ6Sk15bUFESzF6YVZrTnh4LTVGVW9Gdlc4X2RaR2cwdzNLRdIBxAFBVV95cUxOSjI4NkNxOUR3NmJjSjRUQjZkZ1J0NFBJdndkYlJ4aVo3Wk9IZXR4Qk1rYzJ4bGxzM004WTA2d2taOF9jX1FYeFlEcTQ5VXNLZTRPdnhud0VvcUtNSGpMbGQxRnlYLVlIS09pdTVRbUJnVEQwbng1WlpscjY5TnJWVjRpWTFWZlhwVVVZZlB2RjdBUElVWlBzeklIcXJWQXFsTkljWVFoS0hFTTJVNEJzNW5VeHpNV0tRMjdvZkhuVmw5NVF3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1079
    },
    {
      "date": "Jun 26",
      "text": "U.S. strikes Iran after Trump accuses Tehran of 'foolish violation' of ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPTGcxeHZmSjcwLVpBNmxlaWQ4aG11Ynd6U3pqbGhkM09BTmxuYXBtczBhR3NGQWxVYU1WWGlVTGU1QlhHWVJOdDhWRHJoQ2hMcGZyb013NGVpR3NzQ004RUJWd2JQWDFYVG1SZUhVOUI0UldOWGdQRnRTWW5FVThLdG9LeHk2a0l3d0tZSmhnVXkxZ1hSOTNHcFcwaTJKaUxmZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1079
    },
    {
      "date": "Jun 26",
      "text": "Hezbollah states it will not support Israel-Lebanon framework deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQVTRxR1FzVFJuM2pvalgtd0t3ZkdoUmtLWGdLdnNPOUFvMU80T0lNTFM2TkxjZ2NmaHBEWTkyaV9jc2RsT21HWHhJMXRtNnhxVHpJc3hNVldGYmdjQWVDSVp4SzlrVjNLV0FCUjU5OGlBeGJ4VHJzeGU5enFqQ3JLZllGZm1obnBNMm1XR3BMUnEyMmpHSVdreVM5WWVNdlgwN1BIUHVZTnpqNTdtcFVYZ0xpZFlReUXSAbwBQVVfeXFMUEd2Z3EwVUMzUFdOM0FoMmllSjhtYmZzeUtDcWNDdllKV05hMmdocUd3Y1hDOUJJQUdoaDdWZm9YUXowTTFSc19uVmJGdTQzVmZjVHJGZEwzdlZBSm44NmVzZzE4MjR5RkpWTDY2SUtpNHJRcFA5WkJLbVg5ZmVWdGh0aEJQZm1QY2JQekZSb1JCcjBaQmgxMXV1OUN5Ym9rZDVDVUhoWWhvZ1l2ZlhHbUxoaENUS1FGeXJzREo?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1079
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (15 headlines)"
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
