export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2763,
  "lastUpdated": "2026-11-22",
  "lastSyncedAt": "2026-11-22T10:15:00.000Z",
  "warDay": 268,
  "summary": "The Iran war continues with increased tensions, including Iranian attacks on US bases, ongoing Houthi strikes, and a significant rise in attacks in the Strait of Hormuz, while the US and Israel consider further military action.",
  "lastNarrativeUpdate": "2026-11-22",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 3,
    "summary": "No active ceasefire or de-escalation efforts are reported; conflict continues to escalate."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 82
      },
      "behavior": {
        "precision": 0.88,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.88
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Nov 20",
      "text": "Iran targets US bases in Bahrain; Houthi strikes continue",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxONUdmdEJGUnZfMzVyUjZSNGF6VjBWNkd3d1NWM1d2SEZUNTV6aVRjLVR4X1pKbmtMRHp2R1NjQ1JzOGRTVVdBQ2ZHcmJ5bHZvczR6OC1wV3luZEFpSVlJZ2FUcERvaGQzRUswb1lkRFpMcFlzTW85MmVvQkxhNldua3dKWmZBcXk2Nk15QkZPWENhNzNDUjNBMkEtcUxXZVNZWWRwMlE2T3JyZE12ZmowcXgxZ1JKeGhfcVBGdEtBUlI5Z9IBxwFBVV95cUxOTTdmYm1DcmxqeU9HQ1I4UWZnNzAyeFpZdWU4ejZEbFJNcHhWcXpRS2gwVW1oU1lGaDBCVzE1ZUV2M0pHY2ppY2ktVTF5MzI3WG9PVDZDR05XTUY3MURoZFQwenRZTm1wZ2ZScHZFNmh1NUJUWVVoeDltbGtoWkdQSDB4RjVFRHItWDJEOW1HM3dsZnFpdVZsR3NvVW1WMVNUWExtYVEycEtianlfTWItLU9KSF96R3pCSXhhNmgzbjRSMHZhcVJZ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2763
    },
    {
      "date": "Nov 20",
      "text": "Trump Weighs New Strikes on Iran as Israel Presses for Action, Officials Say",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTE1TOTFWdU93OVF0V1d3QTZ4elZ2SHRiV0RzRmxjM3J2aTZuR3RyNlRWVmN2akRqUTcxVGpRM1dOZmFrelB4cGw3eWRha2F5TmI5SXpRdDFUZEwta3VSTUxQOTd3NGhGVnY1VUlnaWdVazFLVGhpUmlBck9xSmVzdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2763
    },
    {
      "date": "Nov 20",
      "text": "Israel braces for surprise Iran attack as US weighs strikes",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE1RMEI0ZHEyNW04NnhCVVNRbE1KRE9FWVFOZ01UWWgyYnFMRXBaSGhsNU4wMEpOQzdYZnhQUGZmRnVyN21fUExuZHhJMFQ0T2JaNUM0M0FR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2763
    },
    {
      "date": "Nov 20",
      "text": "Strait of Hormuz attacks have increased to highest level since Iran war began",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 2763
    },
    {
      "date": "Nov 20",
      "text": "Tankers hit in Strait of Hormuz as Iran tightens grip on shipping",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxPT25tR284UTNyRzU1TFlqY2E2MzVHSE1OSEFmdHdpc0g5UHJjd3FORUcwVHlwODRtTHMxX1d6YXdxY0trYk42b1FqMmJOaEFIRDVKY3Q2TFFOeEJ4OUFqakhaYmN1UlpNYU55R1lrVUxVMnhyYTdVSjBiY0FhTHZZT1pzRmRMbjFnUE9ZSUlPVVZoNzEzdkRXbW1JSVdfX3A0dExHYl9pQ0dDWVXSAbABQVVfeXFMTXdLRTZWdnFuc1hSNkhCUC0tRUh3a1dLMW5KTG5kSmFwaW8yQW1aVGNyV3dKT0x4YlVDMnhJTkk1eTZzWHFMZ2Q4ZnplVzRSUWRGY3NCVTl6eHlUekcxNVZCdDNkblJ2bWh0MGdPQ1U3UWhsSHlPQ1hQM2JMZk1Fc24wWF92ME1xLWpvUk1SZnViX0MwZUtWNmotakI4dGlZNzd0amZVZ3FGQ25CS2RmRmI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2763
    },
    {
      "date": "Nov 20",
      "text": "Air Force bombs entrances to underground Hezbollah missile site in east Lebanon — IDF",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxQMEgyRjR6Z0dZWTgzT0pneDE5TGhpNkp1RnRiejlVTXFtQjF1bDl4azNfZE5EcExycWVtWVdITlp5OWdTRTFaRFp6QU5fWUxhYWcyY2gxM2VnZV81R1FrQldTVWtWVk1LamgxNGJXN0hxSHYwMGtLU0l0OE1ILXl6UlZVZTVXWUl0cHNQODAzcmFacGl3S0ZEUTVZRUotMlI1aWlPRVprcUZMc21kaVRLdnFiN3DSAboBQVVfeXFMUEpTbXdqN1Q0OVRiWFkyb0Nnai1VVzdMakU4aHNJeWJNeWhfME9MSnBfUENmRkRkb0h5S2FETDdCQ3dSVEplVEJCdk9WTWZfZk9pWmFTM0FtRnZOUnlwemFTSFZMWktDMm5lUmRydzFrWWVzekFzRFBaMDk4YjdlWHlpS3d0UDNoLVFIbmNSUmxRZThJNGlTenVGWDdQRHQtZloyaXFxTFBvd19hVHFvWlBjM29BelpQeDVn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2763
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
      "status": "unavailable"
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
      "perspective": "US Policy",
      "headline": "Trump's Dual Approach to Iran",
      "summary": "Trump's administration signals a dual approach of seeking a long-term deal with Iran while actively considering new military strikes, indicating a prolonged and complex conflict.",
      "tone": "strained",
      "latestSinceUpdate": 2762
    },
    {
      "perspective": "Israeli Security",
      "headline": "Israel Presses for Action Amid Threats",
      "summary": "Israel is actively pressing for military action against Iran, bracing for potential retaliatory attacks, and conducting strikes against regional adversaries like Hezbollah.",
      "tone": "defiant",
      "latestSinceUpdate": 2762
    },
    {
      "perspective": "Iranian Resistance",
      "headline": "Iran Escalates Regional Military Actions",
      "summary": "Iran is actively engaging in military actions, targeting US assets in the region, and increasing attacks in strategic waterways like the Strait of Hormuz in response to perceived blockades.",
      "tone": "defiant",
      "latestSinceUpdate": 2762
    },
    {
      "perspective": "Regional Tensions",
      "headline": "Hormuz Attacks Disrupt Oil Transit",
      "summary": "The conflict is intensifying regional instability, with increased attacks in critical shipping lanes and neighboring states like the UAE adapting to disrupted oil transit.",
      "tone": "anxious",
      "latestSinceUpdate": 2762
    }
  ]
});

export default LATEST_SNAPSHOT;
