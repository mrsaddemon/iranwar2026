export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1071,
  "lastUpdated": "2026-06-26",
  "lastSyncedAt": "2026-06-26T12:03:05.011Z",
  "warDay": 119,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-26",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 5,
    "summary": "No active ceasefire is reported for the broader Iran war, and local skepticism exists regarding any agreement with Hezbollah."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 38,
    "oilDisruption": 85,
    "tradeImpact": 52,
    "sanctionsPressure": 49,
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
      "text": "Tehran condemns US-GCC statement as 'provocative, irresponsible'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQZUVsYmQzTWUxeEh5YmJHa21UaklQR1JEYUJPU0ZtNXFiZlYtZnpCNXdHMHNRdjFabUpRM1h3UVdkNzJlOFFrSHRWTmxWMTFHSlYwNnoxb21zeEw5NFE2SnB3d1RORE5HSVowV2FWeFVPZ2RqRHNGUDVSUnd5U0M0Ni1KTTdULWVlSVdlUlM4Slo0a0FPSUFIT3lBeS1IRFhONmtiR2o1ZnZya01zQXJQcUs0TU80emZPOE9R0gHAAUFVX3lxTE5oem5QSkhHa2pMODNPazB5VElnT0RmNVZkM1R0d0pFTW1mNjRGTFdtUW0ta1M4eUl6anE1SUxSMWJTWUpiYTNDUElEdmNuSzFRZ2tkUnNMWEJvZHZ6OVdBTnJZODBxQWVCTS1kQzNxRlgyb19kc0lvOXpmemluWjRsWnVudVVnZjgtZG1wSE9GeDRwcWNZWGlWd0pKTlBwaUR2YU1TOWtKNmgyUWR0M3dTMERhTEMxbVljVHBBSnRXNw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1071
    },
    {
      "date": "Jun 26",
      "text": "Global oil prices fall to lowest level since before the US-Iran war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxOYTRyTGFMT0FnbFM3OE13em1sbURITEpySU5vU0NBaVhCRnhrVGJHLXF4cXJ3Uk9fUEphUmtlZ2llT3FfN3Q2LXBwSy1Jc3JHNFJkclNHLVk0anRUa3hHVW1ZVlEwWnpIMm1CWFJlZGF0VzBzeGpXalJTcVdIeU9ja0pB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1070
    },
    {
      "date": "Jun 26",
      "text": "US Congress votes to direct Trump to remove forces from Iran war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxONFNtMy1HZlhnWDdRVnBCbW5JVFFNX3VPeXR3RXNlR0FtOFNMV193NktWWGU5VmYtUFRvZy1IOTFnUzIxNldmZ1dXb29yVGFCeXhSYWdkN0VZS0tWZTlzTERNVXhPNVBBM0VXMHkxbTM3NlhNaWJLcG16d1p5dXlERTRSV2k?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 1071
    },
    {
      "date": "Jun 26",
      "text": "UN’s IMO halts ship evacuations from Hormuz after attack.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNOHZGMlVVcWRmYVBfNGx5WEYwbHBVZkhjcFVfdld2cmQ0VWVPMzIwcHg3dnl6alFUc2UtRVgzQVhPZWFfV0hUVUNkYXdxb1JaZzl1cG41SG9HbDZVQkhoSnh0WFNGSS1IUjNSTFU5QUJXbWlsS3QzQmdpTmZmLTNSZVRuSVpVeUtuYnhKajdQSXJsOFFXSVB5RmlKbXJ6Sk15bUFESzF6YVZrTnh4LTVGVW9Gdlc4X2RaR2cwdzNLRdIBxAFBVV95cUxOSjI4NkNxOUR3NmJjSjRUQjZkZ1J0NFBJdndkYlJ4aVo3Wk9IZXR4Qk1rYzJ4bGxzM004WTA2d2taOF9jX1FYeFlEcTQ5VXNLZTRPdnhud0VvcUtNSGpMbGQxRnlYLVlIS09pdTVRbUJnVEQwbng1WlpscjY5TnJWVjRpWTFWZlhwVVVZZlB2RjdBUElVWlBzeklIcXJWQXFsTkljWVFoS0hFTTJVNEJzNW5VeHpNV0tRMjdvZkhuVmw5NVF3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1069
    },
    {
      "date": "Jun 26",
      "text": "Iran claims targeting American base after fresh US strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1071
    },
    {
      "date": "Jun 26",
      "text": "Israel conducts strikes in Iran, IDF says.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1071
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "US Domestic",
      "headline": "Congress Rebukes Trump, Seeks Iran War Halt",
      "summary": "The US Congress has taken steps to direct President Trump to remove forces from the Iran war, signaling a legislative pushback against ongoing military engagement. This reflects growing domestic pressure to de-escalate the conflict.",
      "tone": "strained",
      "latestSinceUpdate": 1068
    },
    {
      "perspective": "US Executive",
      "headline": "Trump Warns on Deal, Demands Hormuz Access",
      "summary": "President Trump warns of US action if a deal with Iran fails and states that no tolls will be tolerated in the Strait of Hormuz. This indicates a firm stance on maritime freedom and conditional engagement with Tehran.",
      "tone": "defiant",
      "latestSinceUpdate": 1068
    },
    {
      "perspective": "Iran",
      "headline": "Iran Strikes Vessel Amidst US-Israel Attacks",
      "summary": "Iran is proceeding with vigilance, exchanging strikes with the US and conducting its own attacks, including hitting a vessel in the Strait of Hormuz. This demonstrates Iran's resolve to respond to aggression and assert its presence in the region.",
      "tone": "defiant",
      "latestSinceUpdate": 1068
    },
    {
      "perspective": "Israel",
      "headline": "Israel Intensifies Strikes in Iran and Lebanon",
      "summary": "Israel has conducted strikes in Iran and intensified attacks on southern Lebanon, claiming to have trapped Hezbollah fighters. These actions indicate a proactive and aggressive posture against perceived threats from Iran and its proxies.",
      "tone": "defiant",
      "latestSinceUpdate": 1068
    }
  ]
});

export default LATEST_SNAPSHOT;
