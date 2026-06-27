export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1080,
  "lastUpdated": "2026-06-27",
  "lastSyncedAt": "2026-06-27T08:11:24.210Z",
  "warDay": 120,
  "summary": "The United States has conducted multiple strikes against military sites in Iran following accusations of ceasefire violations and attacks on vessels in the Strait of Hormuz, while regional tensions persist between Israel and Lebanon despite an initial agreement.",
  "lastNarrativeUpdate": "2026-06-27",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 5,
    "summary": "A previously active ceasefire between the US and Iran has collapsed following accusations of Iranian violations and subsequent US military strikes."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "date": "Jun 27",
      "text": "US military conducted strikes against missile and drone sites in Iran after accusing Tehran of violating a ceasefire and attacking vessels.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxNdjVVaVMzcUdxUDVMbm0zREp4X2FHWk5kdzJzbi1zZF9OQ3RhSlVmRFdkSGVXenc4TlRISHlmNzY2dl9FSjdUaDFYR0lNRTlleWxwb0t3blVWUUt3V0tiRGNURVQwQndQZ2l0YkxKZHJ4cjg0OXRwVUVKblBkMks5LXZkWWg5YWJjbmFVN2gzM05rRnBYcDZsTTc2aF8?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The National",
      "latestSinceUpdate": 1080
    },
    {
      "date": "Jun 27",
      "text": "Iran condemned US strikes, stating they violate a Memorandum of Understanding (MoU).",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1080
    },
    {
      "date": "Jun 27",
      "text": "The UN’s IMO halted ship evacuations from the Strait of Hormuz following an attack on a vessel.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOLTM2b0s0V25IYjUxNEhrRDV1RDFfdzlRMFdGU1VFZlhPNXJwZ3BuS2RIY1pmT2JPVG9kd19Sdlhtby1uUGVHSTJuU0dnSzJIeFVydU5PeVVQbFJHa0NqbF9iS2Foc2FNSDh2Qk9hNU84dWV0SUpXc00xbzl1ei1UT3UzdUpFam43cFJDZWstWnpBMVJleWE5Ul8ycUNybWRjMDJKUWtEdFJZQjlPRUxrLVMtaVZPaHg3bWY5d9IBwgFBVV95cUxNaUdLcXdDSTJMcFZjY2NCcXRtYXhHWEZNaDNxcTBOUUZZUjBnY1hLSk5Xb1d4aXNRQXpKSVhWMVhhUU5iWVZjMnViTVE5X2hCdnBtbEdURzlPdEVSeEF2RkN2a2NDeU9oREdEZ1dUVUtqeHVndWdBelpaUWc4S0dHZkpqUTRFZy0tcEdMZGZPVWpxX0VPZFUwdURyQ1BkZXBFazIwT2E2QWxacUFZVnF6bVk3NFVlZnRYcmRNckR6QXloUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1080
    },
    {
      "date": "Jun 27",
      "text": "In a symbolic vote, Congress directed Trump to remove forces from the Iran war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxONFNtMy1HZlhnWDdRVnBCbW5JVFFNX3VPeXR3RXNlR0FtOFNMV193NktWWGU5VmYtUFRvZy1IOTFnUzIxNldmZ1dXb29yVGFCeXhSYWdkN0VZS0tWZTlzTERNVXhPNVBBM0VXMHkxbTM3NlhNaWJLcG16d1p5dXlERTRSV2k?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 1080
    },
    {
      "date": "Jun 27",
      "text": "Israel and Lebanon signed an initial agreement after US-mediated talks, but Hezbollah stated it would not support the framework deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxOZEQ1eUt6SFFHdFlGLWZxLVFTVnhHOThrbmpjbmtEMnlydmZYY08wLTI3X3NhSm5adGlBVU5nbmwwOWZENkJnVlU1UUNaUHIxNXdSNXdsT0NpRnpSdTFkc3VnUXVmY3lvX2lpb0xybngxODZya0ZTWFlueU1lSEZvZU5lWmV0M0U3OEp6MXVXaUF6Sm9xUjZoZGJldkFWQU5NV2dGWi13Uzdlci1LVEVQTGZnaEdBV0ZFSktfdTJfUGxXZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1080
    },
    {
      "date": "Jun 27",
      "text": "Israel scrambled to counter a Hezbollah drone threat.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxQVFpIdkNnLWFiS3lJZ1VkV1ZoS1h0ZjVjZ0x0MnpCVnBIbWJHSFNOMWIza2s0SFAyaTV4QV9rRGo1SWQ4Nk01b3hPSS1SSHJJR2YtZUpEYmpaV2cyVUdVWWt3dDRwN05RQU5jZkZSV0dDTHlqdXZKSkF4UVdIX1ltbk9uOERzZU9fc1Nha0x3VzhJU2FYcDl1TnJSbDQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1080
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (14 headlines)"
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
