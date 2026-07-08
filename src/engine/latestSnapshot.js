export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1211,
  "lastUpdated": "2026-07-08",
  "lastSyncedAt": "2026-07-08T12:09:37.936Z",
  "warDay": 131,
  "summary": "The US-Iran ceasefire has been declared over by President Trump following new US strikes on Iran and Iranian claims of attacks on US sites, while tensions remain high between Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-07-08",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "The memorandum of understanding regarding a ceasefire between the US and Iran has been declared over by President Trump following new strikes and attacks on vessels."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
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
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Jul 08",
      "text": "President Trump declares the memorandum of understanding to end the Iran war is 'over'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQd2Z4M3hOV2ZEdjBGdnhaLWFnS3JVU3g2S3hDbnE4NnU4Vzkzb081elViZ3VBaEtxZlNmdktwb2c0eW96dldZT1pvSmR3N1RYWFE4UFpqZFIzSlNLMy0xM2dTTVllRmxGUFRMQ0xsbWZNX09vcmJJeHV0ZVlPNHg0NnBfS0JzQ01fa0dncGJKckd5S1dBSU5vXzFoUE5ZdUQxVUhDbG5KaDVaazhydjhERjU5SS1zSVXSAbwBQVVfeXFMUFRKTEtCaGQ3ZlV5MlZoQ05CeThIeDd0Sng5OTZ4aG1JNm8wTmhrbDZFZFJMclI0MUZpWS1jY0hSUHhFN2g2S2RfUndlaFVtMUk4TVl0RWZ1MWZFS3VOQUkwakpFZ3lLYTBGOXFQdkhOc0RDWHloVG1aQW8yQS1pN1NldjlUOXgweDY0aGtOMkxSQ25CdE9tdDN0VW9pOExVOHJvdFJEcjB0empwYTJYbE1PclZaRnNlNnBGSTA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1211
    },
    {
      "date": "Jul 08",
      "text": "US launches new strikes on southern Iran after attacks on vessels.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPVlJJS3dEVEwzZnBjeVBmWG9Hc2xrd2VvMTNLRkh5VUdTMUU2YTNvU1J5dDV4YVRrZkVnamtndTNoV3lDcW9ENkhfQ2dXRTdCQWo0bkxqRTVvS0NTR0w3QkhneXBnQXRNQVYyaGtNWDZDYkk0NjUwTHEtbC10WGNmWUd0cmpqWlJlV3dGSzJLaHBVdW1JZUVBWjB2dlJNYzdkaUp1UmtrYldLSXVQV2hkdzB3NERvQXdhTE1pRdIBwgFBVV95cUxQSWVSZTRnTEhfX2w0QUZnbDMtcl9MTE5PWVJLTldULWNuV1pHY01zM282Wml1bTRVckhZdTFOVFlvV0ZIeEw5UnZQZnlrNWlvYjZnV3pjYWVZOGFvbjhhOFB5RUMyd0tKRjhkUGp4cHhFQVFfN2FWMzYzS3R3NllmT01rUEhycVA0aGg1X2dIdlRKQWpTanBmZm1RSnk4RWVZN19uM2x2X3dLMWVXSVZJVFZuUXBTR3VYdGY4MDRWUG5QQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1211
    },
    {
      "date": "Jul 08",
      "text": "Iran claims attacks on US military sites.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxPa1hvbWRYQ2V0aGJILWJ3Skd3MlV2aU1lSmVjNXlEbGR2NF82TU1MTkJELUd2cEdOZHNwelBfdFo5RV9JZ1pfZnRydTBOUUdZRnE5dVRaZFRvNVpWNGpnZldndk1tdFFBaFJnZGFjOWw1S0hWRTVRamhhdHdXN3JySktHbWxkVGxRM2lnMGVHWXU2cXpGdkZpb0ZzWTczV2tkVUZF0gGoAUFVX3lxTE5EbUZ0TjNIVXJEQk9VdjlNaXMxVHZSSng1S19OM2hhMV8xSHVuLVk1bTBINjE1OFJpTGhoel9jN3BKa1o5T1p0Q3ZyMmZUVGsyb3ZqN2RvYkI1N2dTSy1JaTlnZXhXQ0M4WUdaQVp1bVoxV2NOVk0xd295V3gySGtFTWJTbjZ2VGIzRkJzcE5PcHFYSXI5QlllbGhNY3VIMndXUzZSWHh4OA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1211
    },
    {
      "date": "Jul 08",
      "text": "US revokes Iran's oil sales permit after three ships were attacked in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxOT2tfRFIyMHM3Y3R0UHRSQ0xwNEdNX2pjVUV5QkFGZk4yLUpVeU9RN0RHLXpUYU5UMzVIZkNwOWV4Q2dKTnJYZVl6UzZadkxHYUVYNmUzYWxoUEo1S2pPRUkxWmFsMHhadUYyams3ME5TOTlVSHhuTmgtRVA4NGo1NlJIOF9ZOUU2dGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1211
    },
    {
      "date": "Jul 08",
      "text": "Hamas states it will dissolve the Gaza government, but Israel warns the group still seeks Hezbollah-style control.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOWFdhbWZDLTdzYi1XMHhnaFdGdHlqZHFxYjFNM0JKaldZYzduTzNKTXpwZXBxYl9mUFRyZ0dQRUJQU2o2Z0lNQk5KRnBmN0FYUktZWWxwY0FzT0pwTndEUlNIc21mMTM3QlQwWDNFeTRIRVZrRGNSWGNob0RRUG5VVU1HUzg4SmIta0g4b1lEdHNqQ2pCTHJ4dG9QcjRTOWNhOXN4eE1INlhhWE9ITHBsTV9tRmUxOEZWcUVTatIBwgFBVV95cUxOQjVITmh3Skx5UjJtRTk1ZFRjOEh2RVA4bl9YajY3czNhUlcwRURjY3FIN1dldkNJWENzbDNmazJRWEo4RmtPc0p4UnlIMDZSRjNMTTluc291TlR5bkxCdVBEUUNxYjl6RTNfMHlnUWFROUY4b0RCTFNpZHZXLURRRVZPZkpGT3hZd0JDWVpQSFVQMFYyYmJ1dHV2djVJN0tOMlo0QlhpQm1fY29jWEo4QWxwUldMZHJHZXNmQzhZTlRFUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1211
    },
    {
      "date": "Jul 08",
      "text": "Netanyahu states some Lebanese Christian villages 'asked to be annexed to Israel'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPX2ZqYkNDOUdhTWlSNTNoZWRwN3EyR25qbmZpdWQwNTNMbldhcXl1Si00dzRoNXhBbmRtVjdzVWZDYkNqaEU1end4dHdIcHhlakhGRDVQd0lmYnhBdGU2bFVsSGZFbVczalNhY00ySFJBM0tpTHd0MVZMREJBbzJKMkZvc3RKejQ5X3NEalhMdDI5cjJFRGgxaDVwOHdDdFUyclVPU0xsX0J4bEpCN2dsZG9wNG1SMmg5YVA4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 1211
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
      "perspective": "US/Western",
      "headline": "US Retaliates Against Iran for Hormuz Attacks",
      "summary": "The US has resumed military strikes against Iran, citing retaliation for recent attacks on commercial vessels in the Strait of Hormuz, following a clear violation of a previous ceasefire. Washington officials indicate talks are intended to continue despite the strikes.",
      "tone": "defiant",
      "latestSinceUpdate": 1206
    },
    {
      "perspective": "Iran",
      "headline": "Iran Threatens Talks Amid US Strikes and Regional Tensions",
      "summary": "Iran has threatened to halt ongoing talks with the US after trading strikes, while also mourning the funeral of its leader amidst regional tensions. Iran has been accused of targeting neighbors and commercial vessels.",
      "tone": "defiant",
      "latestSinceUpdate": 1206
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Israel Prepares for Renewed Fighting with Hezbollah",
      "summary": "Israel continues to conduct strikes in Lebanon against Hezbollah targets and is preparing for a potential resumption of broader conflict if a truce is violated. IDF commanders assess the Lebanese army is unlikely to effectively eliminate Hezbollah.",
      "tone": "anxious",
      "latestSinceUpdate": 1206
    }
  ]
});

export default LATEST_SNAPSHOT;
