export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2392,
  "lastUpdated": "2026-09-11",
  "lastSyncedAt": "2026-09-11T00:58:37.560Z",
  "warDay": 196,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-09-11",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 10,
    "summary": "A U.S.-backed ceasefire in southern Lebanon is under severe strain due to renewed fighting and Israeli military actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Sep 09",
      "text": "UNSC meets on Yemen after Houthis seize city of Mocha.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPSi05Yl9uRDRWMVJyalZULUVmOGVmMzBwN2xtQTU4Qzh2NlBvVUNBX0tRam90VkI5b2Z0NXMxaUNENHVoejNaNkJoN3Byd29EX1FRQldDN25JQ0ZBcnBiMTg2YWg2VXFoUHFDTTBMM3IybWN4MUZ3dU1kdjV0QUd4ckRQOW9xbVplUWlZQl9FVGxHNlZiejBfWUxucGpvamYzeXIzUU13U2xqTFZaeEppYkVzUS13aGtTLTJZdtIBwgFBVV95cUxNbmdDM2Y5SlMxdnVlekM0RzUzM3IzZXZTMXRQYzd2b1ctWjVFNUxCaTA2d1Z4Qm9fcTltZ0lUdGRLQjlPM0hGUmQycFBuMkxEYVlsYXNpMzBXVS1BUFVqZHdsdmZiYzZmNjJ4UGpFMGh0bW1mLXJrMUtNZWtFTkJVQ1ZMeG1CRDBTZThNT3hhMFlNbC0wZm1WMFVsb2w0Z0RoT3pITnczOVp1MkJJSkNRdzV5RkVhVDNNbV9CQ0I0emg1dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2391
    },
    {
      "date": "Sep 09",
      "text": "US hits Iranian tankers in response to earlier actions.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 2392
    },
    {
      "date": "Sep 09",
      "text": "Iran attacks US army base in Jordan, damaging multiple military aircraft.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 2392
    },
    {
      "date": "Sep 09",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighbourhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2392
    },
    {
      "date": "Sep 09",
      "text": "IRGC attacks US unmanned vessel in Hormuz; two ships reportedly hit.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxOeHcwZmxmZ3ZyWjNKUHJvWmtKM1ZwR29wRTBmZVVVWHhwZEdiWkZqYUhiOXBVTi1xVjN1NVVOYkxDMlloc1BHQmF6OVYzaEFwSXBETmYzajZLOE04XzZyaWlTdVpHTTM3QjkxbFFhbWdIMHJzZ1dRQThoNGhyMk1EaFdRVEt0S2pvcWMtV09PTGtRMXZCc1RxLU9QZmhTRlU4S25LSzZFbGUxOXFTekZ6LUdrSHVNenBNcjY40gHAAUFVX3lxTE5iMmRacEdXZTZHcGlZWXFHWXZUVFFYd3RfSGpPeFM0MWREN3djMVhYaldsLTBEbDdHa2tQY3VlYXFjRXRjS1V2OVo1VE0yTnNHUnBWTTMxUHlnVmZNZ0pocG5yUEVsUjNRNXNjNXV1UU1wa2RQUFVpNDJBRndiYjU3YVJ6aFI2bWp3aDI5UE9PZ3hiMDYwYy13OElmZzlRY0ZSd1VNSklhTkNpX1RDRmtMbWNlclpkZjNjNUZLWmhObA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2392
    },
    {
      "date": "Sep 09",
      "text": "Iran claims capture of a US submarine drone in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxPM0VkUnd5VzlEZVhBUy1ja1Q0dFZ6RE0yZHp2dGdobTZHajY0ZTZ6MXdkVWtKV2hYal9nY2dRRUlxU0RlZmxyQ3dmMXpKMFVVNlh2Q25LRVp3LXZHWmtrbzZGM3djQlVtVWdQb0U5RFNTOVA2U1BUMlFWcDZqblV2MGZLdEZPQllselJKcm44eld0STZhTDdsd2R1RG1HT1RrNm53VTZXNXVWWDla?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2392
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
      "perspective": "US/Israel",
      "headline": "US and Israel Counter Iranian Aggression",
      "summary": "The US and Israel continue to target Iranian assets and proxies, aiming to counter regional aggression and protect strategic interests, despite reports of civilian harm from some strikes. Operations include hitting Iranian tankers and destroying Hezbollah infrastructure.",
      "tone": "defiant",
      "latestSinceUpdate": 2392
    },
    {
      "perspective": "Iran",
      "headline": "Iran Signals Escalation Amid Economic Pressure",
      "summary": "Iran signals readiness to escalate the war with the U.S. amid rising economic pressure, retaliating for strikes and asserting its influence in the region, including Yemen. Actions include attacking US forces in Jordan and US vessels in the Gulf.",
      "tone": "defiant",
      "latestSinceUpdate": 2392
    },
    {
      "perspective": "Regional Instability",
      "headline": "Widespread Conflict Strains Regional Stability",
      "summary": "Renewed fighting in southern Lebanon and Houthi advances in Yemen highlight the widespread and interconnected nature of the conflict, straining existing ceasefires. Civilian harm and occupation of Lebanese villages underscore the humanitarian impact.",
      "tone": "anxious",
      "latestSinceUpdate": 2392
    },
    {
      "perspective": "US Political",
      "headline": "Trump Promises End to Iran War Post-Midterms",
      "summary": "Former President Trump promises an end to the Iran war after the midterms, indicating a potential shift in US policy depending on election outcomes. This narrative suggests a political dimension to the ongoing conflict.",
      "tone": "skeptical",
      "latestSinceUpdate": 2392
    }
  ]
});

export default LATEST_SNAPSHOT;
