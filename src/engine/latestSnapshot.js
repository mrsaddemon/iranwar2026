export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1259,
  "lastUpdated": "2026-07-12",
  "lastSyncedAt": "2026-07-12T04:34:21.814Z",
  "warDay": 135,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-12",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "No active ceasefire is in effect between the US and Iran, with a previous one declared 'over'. A fragile ceasefire appears to be holding in Lebanon despite ongoing tensions and military actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "date": "Jul 10",
      "text": "Trump indicates agreement to talks with Tehran, but states a previous ceasefire is 'over'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxPak5sUE5NcGZ1TlY0bjF5WTI2WVI4ZmNCLXBrcHkxcmladU5idm91RGVuWTJLYkJkVW40ZUdfSUtqWGVZSVVtWlNWYTRhWEIyNE1wQld2NzJjOGQxU2YyTWFLUnI2Q1NkX3JJcWVab2FQWHNjMFdvYk5zU1ZQNV80ZjVUMlEyLVMtbDRZRkVqZ2xzRHN0RTBucDRLb2VlZ2I3Mkl1Z2ItMnF4aXZuazJrZNIBtgFBVV95cUxNcDZKVURqTm1IQlR4UGhnM3BaeEhHYUkteld2dGdZNVpXckZnZUlXZ1l1dnlld1V5SVV5UjlsWkFFS19VUFlIYWUzcFBmMG13Z1c3SVA2TF9GdjVYamRqRW5Nc2piOVlYYzhOZFFfcGVQdTAwWlFDRU1aQTJOZUNVQTVad2FFR0YtOE5qM0dFY3ptbHBNUEZEYUpPS1hSUG94aVJES1ZEOG5fWW1Jd2xla0paX3lmdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1259
    },
    {
      "date": "Jul 10",
      "text": "Mediators are working to de-escalate US-Iran tensions and revive talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBpaGF3XzYyR2V1VW9XRTB1NEtRRzZweFd3Snd3R3dJeEo3Ti03UHBqanAwXzN3ODBYRWhycGV6eTY2c2hHcnlwRHNxcVNfSUZuMm41a1p6NUFXbldMTG1MS2lJV0FPM0xUb2NaZW9n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1259
    },
    {
      "date": "Jul 10",
      "text": "Israeli leadership signals readiness to strike Iran again as US negotiators head to Oman.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxPX2lSb1hPcXFEVm1UUnhEZk1YTlFJZ0gwVmdPVWNwcXpEcVFwc0hUME9JOExHcGdMLXloYm1ISUFpRUk4N19vWWhmbUROZDgzdThuZEhvMkRMNmlVbHY4MWlVU2J4eVp5WjZzZ01KVFF0MFpWM3duT2JIaExRRm5kSl9IQUxpVkNGcEZVM0NZcXN6Z3JjUHBEVnQ0cw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1259
    },
    {
      "date": "Jul 10",
      "text": "Iran fires on a ship in the Strait of Hormuz, leading to a halt in shipping and resumption of hostilities.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBYMVlvZWhZemtQSGdfTzNxam9JME9jc3RlNy1rUDNIT1lzM0l6ZHlFWGQyU3FpV2JNVXlDRUlMbEVhWi13bHZTSHdfS0VvWkhmTksyY041b19tLUNHajB6RkVHaloxdnBEX0dheGln?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1259
    },
    {
      "date": "Jul 10",
      "text": "Iran's IRGC attacks a ship in Hormuz and declares the strait closed until further notice.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMizwFBVV95cUxPT1RyRXp4Qm93b1RER1NtMXR4THQxLTlPWjBSYWx3TzA3M21HQ0JMUUd6cHJWTjhlOS1Bd0RhbUtkdGNENFlyY05aWWEwWmcxRXc3cHZDWGNheC1zZkh6RXZHVEstZGYzRWFpYXoxRGdpMzMtdDFXaXhhT2cxcjhlUHRDM1pMektXTU03WXNlVVhxbEN6NmFyV2V3RDdHNDNyTXBzOHlXYjBkanpiMklMYXZ5X1ZRRFBsdTJUQnpmQzhjR2pWRngtMlh4WDFJenPSAdQBQVVfeXFMTW1raFlIQUtjTk91YndNeFhDcHp2QWxuYWk4ci1zSVBMUmpPS0xpLVdNT1RlR0FZbnZBei1zUFczYlZydWNpbU0wcnJ4bTk2YkRHYnV1S2gwbnpUQ3c5SHhQTklvdFR4eDlZRzR3QnFSLW1YZW5zbExRZE9QSWx2V1VnWFprTF9pdnhyYTZIaVBvbW45M055dG9DTkxHWWhtZ2JsYTAyMVRWTDNWY1pfZmY0aWZpX1AwcVpNVEtsdFdkYzNYa2M1VkpaX2lMcjc2NXg4T2o?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1259
    },
    {
      "date": "Jul 10",
      "text": "The U.S. launches multiple rounds of strikes on Iran in response to the attack on a civilian vessel and the strait closure.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE1rclVBV3NOWkZ1anJEem16QXhnTElxOGNHcFd6Tktkd25MYVVJTDJXSTlkSzN2b0dPNVlrV3JZVVhvNHdtTmFRQ1pIT2puc3k4YnBoZ0FoRmFsVE8yeU1JYjlyTjM4WVVxTms3OXlmZVJ6LU5nUkhPZdIBfkFVX3lxTFBfQnJzZDJGUlBnM3VyV09YeUo4VkwwTVBQc3RwX0NwWUNRLTZUYnI4VFhzYWtQR2U5MTBtODNRYzVLT2JQeXBFdHFMSlFrVDZQZ25XMTFYWWlZaVlIVGRUd3dRVnlDdHlHNTNHaE5hY1k4cnVfamNfMGp5QUdCUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1259
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
      "perspective": "US/Israel Stance",
      "headline": "US Demands Open Hormuz, Israel Signals Further Strikes",
      "summary": "The US is demanding Iran publicly guarantee the Strait of Hormuz remains open and free from attacks, while launching retaliatory strikes. Israel has signaled readiness for further military action against Iran with 'even greater force'.",
      "tone": "defiant",
      "latestSinceUpdate": 1258
    },
    {
      "perspective": "Iran Stance",
      "headline": "Iran Closes Hormuz, Launches Strikes on US Targets",
      "summary": "Iran's IRGC navy has declared the Strait of Hormuz closed following an attack on a ship, and Tehran has launched strikes, claiming to hit US military targets in the Gulf. This comes amidst the burial of leader Khamenei.",
      "tone": "defiant",
      "latestSinceUpdate": 1258
    },
    {
      "perspective": "International Mediation",
      "headline": "Mediators Work to De-escalate US-Iran Tensions",
      "summary": "International mediators are actively working to de-escalate the renewed tensions between the US and Iran and revive talks. Efforts are underway to prevent further escalation in the region.",
      "tone": "strained",
      "latestSinceUpdate": 1258
    },
    {
      "perspective": "Lebanon Instability",
      "headline": "Hezbollah Disarmament Fuels Lebanon Divisions",
      "summary": "Efforts to disarm Hezbollah are deepening internal divisions within Lebanon, raising fears of a potential civil war. The IDF is preparing for a prolonged presence in Lebanon as Hezbollah regroups.",
      "tone": "anxious",
      "latestSinceUpdate": 1258
    }
  ]
});

export default LATEST_SNAPSHOT;
