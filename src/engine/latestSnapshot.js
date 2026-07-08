export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1206,
  "lastUpdated": "2026-07-08",
  "lastSyncedAt": "2026-07-08T00:14:32.013Z",
  "warDay": 131,
  "summary": "US forces have launched renewed strikes against Iran in retaliation for attacks on commercial vessels in the Strait of Hormuz, while Israel continues strikes in Lebanon amid ongoing tensions with Hezbollah.",
  "lastNarrativeUpdate": "2026-07-08",
  "ceasefire": {
    "active": false,
    "status": "collapsed",
    "confidence": 0.55,
    "durationDays": 60,
    "summary": "A previous ceasefire between the US and Iran has collapsed following renewed US strikes in retaliation for attacks on commercial vessels."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "text": "Two tankers were struck by projectiles in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPVlJJS3dEVEwzZnBjeVBmWG9Hc2xrd2VvMTNLRkh5VUdTMUU2YTNvU1J5dDV4YVRrZkVnamtndTNoV3lDcW9ENkhfQ2dXRTdCQWo0bkxqRTVvS0NTR0w3QkhneXBnQXRNQVYyaGtNWDZDYkk0NjUwTHEtbC10WGNmWUd0cmpqWlJlV3dGSzJLaHBVdW1JZUVBWjB2dlJNYzdkaUp1UmtrYldLSXVQV2hkdzB3NERvQXdhTE1pRdIBwgFBVV95cUxQSWVSZTRnTEhfX2w0QUZnbDMtcl9MTE5PWVJLTldULWNuV1pHY01zM282Wml1bTRVckhZdTFOVFlvV0ZIeEw5UnZQZnlrNWlvYjZnV3pjYWVZOGFvbjhhOFB5RUMyd0tKRjhkUGp4cHhFQVFfN2FWMzYzS3R3NllmT01rUEhycVA0aGg1X2dIdlRKQWpTanBmZm1RSnk4RWVZN19uM2x2X3dLMWVXSVZJVFZuUXBTR3VYdGY4MDRWUG5QQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1206
    },
    {
      "date": "Jul 08",
      "text": "US launched renewed strikes against Iran after a clear violation of ceasefire and attacks on commercial vessels.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1206
    },
    {
      "date": "Jul 07",
      "text": "Israel conducted strikes in Iran, according to the IDF.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPY1ZJZk90Wld1cXluZE45NDJSUERIRW82aGJ0TWZCbkVjNkNuOU8wODNyZGpLbnl4ODk4M2JPNnpLbHBnUE1MZ1RIXy1XdGhGNmJBOTZuaVhpU0ZHa2RJLUNCTnYtMkpPRUxTZmktSHJ3SWUwdVVmdTNWTEdUT2RiZUVyNW5JdThEYl9sMFAzWUEyZjlMLWsyUWUydFViZjh5QjM3dWk4QTZKV3V1bTZUQjdGU1VXNmlJbTAwctIBwgFBVV95cUxNZXJGWHhNdExYZEloUFlYbE9JMEwtbVJxUFBjd1ZzS1Fidk4yOWhMSkpoOUxOaklkelpWN25kRm1fM2FBaGhHT3ptanBqc2hRTGlSZmhGamxnR0YwZ0RDSy1uSk9MUDhwZEJVajJvbXZjMTRzRV9FQjQ5LUZyY0xYcXkyNFlmU0sycWU1TlFZRW82Yjd1NkxaYTJEbjFwajl4SGNwZE41c0tucFlsSnZZWkswVldSd0k1eDVMZ1dKZkF2UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1206
    },
    {
      "date": "Jul 07",
      "text": "Israel conducted strikes in Lebanon, while Iran held Khamenei’s funeral.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1206
    },
    {
      "date": "Jul 07",
      "text": "Iran threatened a complete halt to talks after trading strikes with the U.S.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPTGcxeHZmSjcwLVpBNmxlaWQ4aG11Ynd6U3pqbGhkM09BTmxuYXBtczBhR3NGQWxVYU1WWGlVTGU1QlhHWVJOdDhWRHJoQ2hMcGZyb013NGVpR3NzQ004RUJWd2JQWDFYVG1SZUhVOUI0UldOWGdQRnRTWW5FVThLdG9LeHk2a0l3d0tZSmhnVXkxZ1hSOTNHcFcwaTJKaUxmZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1206
    },
    {
      "date": "Jul 06",
      "text": "Hamas stated it would dissolve the Gaza government, but Israel warned the group still seeks Hezbollah-style control.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOWFdhbWZDLTdzYi1XMHhnaFdGdHlqZHFxYjFNM0JKaldZYzduTzNKTXpwZXBxYl9mUFRyZ0dQRUJQU2o2Z0lNQk5KRnBmN0FYUktZWWxwY0FzT0pwTndEUlNIc21mMTM3QlQwWDNFeTRIRVZrRGNSWGNob0RRUG5VVU1HUzg4SmIta0g4b1lEdHNqQ2pCTHJ4dG9QcjRTOWNhOXN4eE1INlhhWE9ITHBsTV9tRmUxOEZWcUVTatIBwgFBVV95cUxOQjVITmh3Skx5UjJtRTk1ZFRjOEh2RVA4bl9YajY3czNhUlcwRURjY3FIN1dldkNJWENzbDNmazJRWEo4RmtPc0p4UnlIMDZSRjNMTTluc291TlR5bkxCdVBEUUNxYjl6RTNfMHlnUWFROUY4b0RCTFNpZHZXLURRRVZPZkpGT3hZd0JDWVpQSFVQMFYyYmJ1dHV2djVJN0tOMlo0QlhpQm1fY29jWEo4QWxwUldMZHJHZXNmQzhZTlRFUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1206
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
