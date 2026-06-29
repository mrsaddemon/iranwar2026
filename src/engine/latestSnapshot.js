export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1112,
  "lastUpdated": "2026-06-29",
  "lastSyncedAt": "2026-06-29T22:41:49.270Z",
  "warDay": 122,
  "summary": "A fragile ceasefire between the US and Iran is in effect following recent exchanges of strikes, with talks planned but their path forward remains unclear amidst continued regional tensions involving Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-06-29",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 1,
    "summary": "A fragile ceasefire between the US and Iran is currently in effect, marked by a pause in hostilities following recent exchanges of strikes, though its stability is uncertain."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "Jun 28",
      "text": "US and Iran exchange strikes, underscoring the fragility of the ceasefire",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxOSEtEanN5a1QwZnVEQWxWM0dnQm5pSktIWS1iUHlPUjlWeDM4SmJZdkg4dXl6TFVPbktMckhVZTFlanVlZjdVeVZLQTlwdmZrVGFoQ0x3R3BrQkoyQXNLR1ZnVFFXamdIWXFOVzBhS2ltbkFVUERSalBXR2NvQVpvb21CbmJJOHpfX1NGN1lHMzN2dmljbWdrTUhCNA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 1112
    },
    {
      "date": "Jun 28",
      "text": "Iran’s Revolutionary Guards claim 8 US military sites destroyed in Bahrain and Kuwait",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNeUw4Z1lOT1dXS3ZybGlWR2Q3Q1k5bXNxNW53aU5FdVh0dFladXBnX1NGd0paeG5aN2M4YjY2Umd3Vmd1ZEM3bnprQ0E4eW1WS2pVekQ0bm04VHY3LU4yVS1UYVdXbmFKZW81T1VDMzBfUUJaQk1CRlkyLUhlem1odnBMbC1rZFlCbHB6STBXWWdYS1BGcWVnMVZOZ2k2dG5fbmRuNmt5OGFyUDVsUWxKa0ZvWkhZYl91ZU5hNGdMQ2hNTFVmMDVoa1NvZjY4WnhsbHZjekh1Y0tCTzBrMmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1112
    },
    {
      "date": "Jun 28",
      "text": "US hits Iran in latest tit-for-tat strike",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOLTM2b0s0V25IYjUxNEhrRDV1RDFfdzlRMFdGU1VFZlhPNXJwZ3BuS2RIY1pmT2JPVG9kd19Sdlhtby1uUGVHSTJuU0dnSzJIeFVydU5PeVVQbFJHa0NqbF9iS2Foc2FNSDh2Qk9hNU84dWV0SUpXc00xbzl1ei1UT3UzdUpFam43cFJDZWstWnpBMVJleWE5Ul8ycUNybWRjMDJKUWtEdFJZQjlPRUxrLVMtaVZPaHg3bWY5d9IBwgFBVV95cUxNaUdLcXdDSTJMcFZjY2NCcXRtYXhHWEZNaDNxcTBOUUZZUjBnY1hLSk5Xb1d4aXNRQXpKSVhWMVhhUU5iWVZjMnViTVE5X2hCdnBtbEdURzlPdEVSeEF2RkN2a2NDeU9oREdEZ1dUVUtqeHVndWdBelpaUWc4S0dHZkpqUTRFZy0tcEdMZGZPVWpxX0VPZFUwdURyQ1BkZXBFazIwT2E2QWxacUFZVnF6bVk3NFVlZnRYcmRNckR6QXloUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1112
    },
    {
      "date": "Jun 29",
      "text": "US and Iran pause strikes, but disagree over next steps on talks",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxQOGllc29LZmZnSEdXeXdTZ0x1Sml0M2VVZVBWRVdvZG9DTEF4RnE2YjAwQzlITU9EcThTSjJBMjM1MUsxWjlWRkctVUdzalFkaE9KQUNnaHp6c3J1YThkOGxEWFprQkFTaThCczNmYWl0UTRNeFBWYS1uVUtaM0FhTVpTQXhSYVlEN08zR1F6ZFNiRE13YTJGTHppdmFCTS1SZlo4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1112
    },
    {
      "date": "Jun 29",
      "text": "Trump announces Qatar meeting with Iran, but Tehran says nothing planned",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxNVWk1WDFoM25qQVl5SldLdFNLX3dPTVZTTW5oWjRwOHI5VkduUXllelNCXzBlSFJvYjFJdmM0TGRFeWN3N2s1TEM4MkRnVlRUNVk0Sll3STVWRVUzWFctczNNZUpQeXo0TGluUnFKOFR0UlFXX0l4NG9MdWFMUlljMmt1Y0tvT0F3RG90TW5xbDBFbkJSZERoeWNxSUI1TXJUNGF3bnNya0lZcUZBbG8xNUw1d1NDZjFla1pqWVRQdGQtZ9IBxwFBVV95cUxNU1NPMFdjcnlWeDVSd0dMZ2NyMmRKTTJNaU9UaVVTaWtYR3g0QjUyYmtIQmpkNjE1TFgtY3hXeF8wdHJXQVZTOEp0THBpYnU0R1V0VWxCSHpMS2NjRmlKSW1BekVaSjl2aDcwejFPTzZOTWNZM2ZoUEJwMkR5bFkycFVnODVQOWNKeFRIeWRoTl9mZ0htaU9IMnFxMDh2bS1JcE9FX2ZlUmN0VVIzZGJvMlg0QUZyOVNwYk80TVpqM01zRW53Q3g4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1112
    },
    {
      "date": "Jun 29",
      "text": "Hormuz shipping resumes after weekend clashes",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxQc3VldHk1NklNUnVwUlhzLXo1MjJIN3dVOWF3N1RIZjBIbXVGVlloTExyeVFSdVNIWkpfWlB4UmZwSnpSNmJGQjlmSzh5RFV3NUE2UzJkeTllTlc3YmdjOUc4Y2NxVmtiQkdocDBBX0N6WGlCaG1ZTWVqM0RXY2JqV3dmdHM5SWhENUZhZE9NRUtNS2habnRsdEl6VXU5Tmk0NC0wSlNNLTXSAa4BQVVfeXFMUE14anFsVFg5enQzcEJ2TGZ6S3J5MzFoT1FUZGJGUnVNTktjYi1SNkFLcXZsajlpMWx5aHV5YlFnRmxXUGk1NkJ2Y3RjU1dzUVl6S0VMTnRhVjFDc011ZUhUczJIS0E2ZW9ubjU0QWU1bVYybDE1RkU3VXNhcUNBX3ROYzZZYTBwZ3U4Um1VSFlMNTdLSGxpRmRIWHhCMDM5RTRqaVlqZnhEZENqd0tR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1112
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
      "perspective": "US",
      "headline": "US Strikes Iran Over Aggression",
      "summary": "The US states its strikes on Iran are a response to continued aggression against shipping and violations of a ceasefire agreement.",
      "tone": "defiant",
      "latestSinceUpdate": 1092
    },
    {
      "perspective": "Iran",
      "headline": "Iran Retaliates Against US Attacks",
      "summary": "Iran asserts its strikes are retaliatory actions against recent US military attacks and to defend its sovereign interests.",
      "tone": "defiant",
      "latestSinceUpdate": 1092
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Rejects US-Israel Deal",
      "summary": "Hezbollah's leadership has publicly rejected the US-brokered security deal between Israel and Lebanon, calling it a surrender.",
      "tone": "defiant",
      "latestSinceUpdate": 1092
    }
  ]
});

export default LATEST_SNAPSHOT;
