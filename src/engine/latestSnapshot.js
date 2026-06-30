export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1114,
  "lastUpdated": "2026-06-30",
  "lastSyncedAt": "2026-06-30T01:51:47.932Z",
  "warDay": 123,
  "summary": "A fragile pause in US-Iran hostilities is underway, marked by ongoing talks in Qatar, mutual accusations of strikes, and heightened tensions in the Strait of Hormuz and between Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-06-30",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 2,
    "summary": "A fragile pause in hostilities between the US and Iran is in effect, though strained by recent strikes and disagreements over talks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
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
    "oilDisruption": 60,
    "tradeImpact": 44,
    "sanctionsPressure": 54,
    "globalPressure": 61,
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
      "date": "Jun 30",
      "text": "US and Iran pause strikes but disagree over next steps on talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxQOGllc29LZmZnSEdXeXdTZ0x1Sml0M2VVZVBWRVdvZG9DTEF4RnE2YjAwQzlITU9EcThTSjJBMjM1MUsxWjlWRkctVUdzalFkaE9KQUNnaHp6c3J1YThkOGxEWFprQkFTaThCczNmYWl0UTRNeFBWYS1uVUtaM0FhTVpTQXhSYVlEN08zR1F6ZFNiRE13YTJGTHppdmFCTS1SZlo4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1114
    },
    {
      "date": "Jun 30",
      "text": "Trump announces Qatar talks; Tehran says nothing planned.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxNVWk1WDFoM25qQVl5SldLdFNLX3dPTVZTTW5oWjRwOHI5VkduUXllelNCXzBlSFJvYjFJdmM0TGRFeWN3N2s1TEM4MkRnVlRUNVk0Sll3STVWRVUzWFctczNNZUpQeXo0TGluUnFKOFR0UlFXX0l4NG9MdWFMUlljMmt1Y0tvT0F3RG90TW5xbDBFbkJSZERoeWNxSUI1TXJUNGF3bnNya0lZcUZBbG8xNUw1d1NDZjFla1pqWVRQdGQtZ9IBxwFBVV95cUxNU1NPMFdjcnlWeDVSd0dMZ2NyMmRKTTJNaU9UaVVTaWtYR3g0QjUyYmtIQmpkNjE1TFgtY3hXeF8wdHJXQVZTOEp0THBpYnU0R1V0VWxCSHpMS2NjRmlKSW1BekVaSjl2aDcwejFPTzZOTWNZM2ZoUEJwMkR5bFkycFVnODVQOWNKeFRIeWRoTl9mZ0htaU9IMnFxMDh2bS1JcE9FX2ZlUmN0VVIzZGJvMlg0QUZyOVNwYk80TVpqM01zRW53Q3g4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1114
    },
    {
      "date": "Jun 30",
      "text": "Iran's IRGC claims 8 US military sites destroyed in Bahrain and Kuwait.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNeUw4Z1lOT1dXS3ZybGlWR2Q3Q1k5bXNxNW53aU5FdVh0dFladXBnX1NGd0paeG5aN2M4YjY2Umd3Vmd1ZEM3bnprQ0E4eW1WS2pVekQ0bm04VHY3LU4yVS1UYVdXbmFKZW81T1VDMzBfUUJaQk1CRlkyLUhlem1odnBMbC1rZFlCbHB6STBXWWdYS1BGcWVnMVZOZ2k2dG5fbmRuNmt5OGFyUDVsUWxKa0ZvWkhZYl91ZU5hNGdMQ2hNTFVmMDVoa1NvZjY4WnhsbHZjekh1Y0tCTzBrMmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1114
    },
    {
      "date": "Jun 30",
      "text": "US hits Iran in latest tit-for-tat strike.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOLTM2b0s0V25IYjUxNEhrRDV1RDFfdzlRMFdGU1VFZlhPNXJwZ3BuS2RIY1pmT2JPVG9kd19Sdlhtby1uUGVHSTJuU0dnSzJIeFVydU5PeVVQbFJHa0NqbF9iS2Foc2FNSDh2Qk9hNU84dWV0SUpXc00xbzl1ei1UT3UzdUpFam43cFJDZWstWnpBMVJleWE5Ul8ycUNybWRjMDJKUWtEdFJZQjlPRUxrLVMtaVZPaHg3bWY5d9IBwgFBVV95cUxNaUdLcXdDSTJMcFZjY2NCcXRtYXhHWEZNaDNxcTBOUUZZUjBnY1hLSk5Xb1d4aXNRQXpKSVhWMVhhUU5iWVZjMnViTVE5X2hCdnBtbEdURzlPdEVSeEF2RkN2a2NDeU9oREdEZ1dUVUtqeHVndWdBelpaUWc4S0dHZkpqUTRFZy0tcEdMZGZPVWpxX0VPZFUwdURyQ1BkZXBFazIwT2E2QWxacUFZVnF6bVk3NFVlZnRYcmRNckR6QXloUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1114
    },
    {
      "date": "Jun 30",
      "text": "Iran threatens 'complete halt' to talks after trading strikes with U.S.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPTGcxeHZmSjcwLVpBNmxlaWQ4aG11Ynd6U3pqbGhkM09BTmxuYXBtczBhR3NGQWxVYU1WWGlVTGU1QlhHWVJOdDhWRHJoQ2hMcGZyb013NGVpR3NzQ004RUJWd2JQWDFYVG1SZUhVOUI0UldOWGdQRnRTWW5FVThLdG9LeHk2a0l3d0tZSmhnVXkxZ1hSOTNHcFcwaTJKaUxmZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1114
    },
    {
      "date": "Jun 30",
      "text": "Israel destroys Hezbollah underground infrastructure in southern Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOeHpnQ2htRldyN2wyQkhMc0JqSVdwbDA5VkRCZklRS0t1QURDWHFWRUJEM1BxNnFhN0hCcnRNQ3hvQm9USV9wSkhKZXl2OXJSc2xObjFxRTdCNXVaUVNsdlVsZHd4dDNwVHZTUU5LY1BodWRrZkZHdU1NcFVGMDhfVmpJTnkwSDc4NzdBWTlVUnhKaFg2ZTZiSnNFeDdteG5TVmZDbEtFRGhLSk0yNDFabDdUTDV6SmFJejQ0akZ4OWg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1114
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
      "perspective": "US/Western Perspective",
      "headline": "US pushes for talks while responding to Iranian strikes",
      "summary": "The US seeks to de-escalate tensions through technical talks in Qatar, despite recent tit-for-tat strikes and Iranian claims of targeting US sites. Washington maintains that talks will continue.",
      "tone": "strained",
      "latestSinceUpdate": 1114
    },
    {
      "perspective": "Iranian Perspective",
      "headline": "Iran claims successful strikes and threatens talks amid US pressure",
      "summary": "Iran's Revolutionary Guards claim to have destroyed US military sites, while Tehran threatens to halt talks after US strikes. Iran views the Strait of Hormuz situation as sensitive and complex.",
      "tone": "defiant",
      "latestSinceUpdate": 1114
    },
    {
      "perspective": "Israeli/Hezbollah Perspective",
      "headline": "Israel acts against Hezbollah as regional tensions rise",
      "summary": "Israel has destroyed Hezbollah infrastructure and warns of potential war resumption, while Hezbollah rejects US-brokered security deals as a surrender.",
      "tone": "anxious",
      "latestSinceUpdate": 1114
    }
  ]
});

export default LATEST_SNAPSHOT;
