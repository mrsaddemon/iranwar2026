export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1263,
  "lastUpdated": "2026-07-12",
  "lastSyncedAt": "2026-07-12T11:45:27.031Z",
  "warDay": 135,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-12",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "A broader ceasefire is not active, with direct US-Iran conflict ongoing; a Lebanon ceasefire is mentioned but Hezbollah is regrouping and internal divisions persist."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
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
      "date": "Jul 12",
      "text": "US conducts new strikes on Iran and reports intercepting attacks from Gulf nations.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE91YV9WLTU4cXN4cjF5RWVKc3lJUlpWQ1BjS2RqUURnTzVRN1VhTUthTjBsdjNHZ1FRam1KMHM3Tkh4ZTJBdlhYZTVXeENUWDVkWnQ2NDBHY2xoZGJSOEtmaEp3Y0M5NTMzbDB5QUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1263
    },
    {
      "date": "Jul 12",
      "text": "Israeli leadership signals readiness to strike Iran again with greater force.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxPX2lSb1hPcXFEVm1UUnhEZk1YTlFJZ0gwVmdPVWNwcXpEcVFwc0hUME9JOExHcGdMLXloYm1ISUFpRUk4N19vWWhmbUROZDgzdThuZEhvMkRMNmlVbHY4MWlVU2J4eVp5WjZzZ01KVFF0MFpWM3duT2JIaExRRm5kSl9IQUxpVkNGcEZVM0NZcXN6Z3JjUHBEVnQ0cw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1263
    },
    {
      "date": "Jul 12",
      "text": "Iran announces the indefinite closure of the Strait of Hormuz and claims to have struck a vessel using an 'unauthorized route'.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1263
    },
    {
      "date": "Jul 12",
      "text": "Iran launches strikes against Jordan and Gulf states following US bombardment.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNNUQ3WUlhM20yeHk1R3dza2tqeEh3bFZxc0NoZV9EalJtbXN5eENla21JTGEteThpUmlSSDh3S0dENmRoY3FBcjhLWkZyN2VuRjIyV0xkZzhRcVk3ZHNIT3NtdHlqdTBVYl8zOWFVWHoxWTFleFFJTDV0V3pkSXdwVE0yMlZLSE13V2lnTkhneGlZQ2pDMzl0cTJ3VnFCeW03YkNGSHNrM2d5Slo3N0JGRm5BVFV3WjJrUFhQbmVRUdIBxAFBVV95cUxPaXllUUVXQ1hGUDNITDk2RF9GVjlpOEM1ODlTLW1UTlNkVHVQY3pKSmxvOWVwaV94LUhWa1VUUFRPMUttdlJVclRWTkZ3RllFZFVSMnNtckVoOWp6ZlJ5UzNsTndjTnd0YjJjNjhiXzhzWlNOX0NtMXZ0bVQ1MWhDaF83cEU3TEpKYTdXZVNEN2JuUkg2SWZmcDgzWWNXR3pCTjZIUjY1V1lxc3VaSXBlOE5DN01VSzd3SUJERFVuc09IcjJn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1262
    },
    {
      "date": "Jul 12",
      "text": "Former President Trump states he agreed to talks with Tehran but declares a ceasefire 'over'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxPak5sUE5NcGZ1TlY0bjF5WTI2WVI4ZmNCLXBrcHkxcmladU5idm91RGVuWTJLYkJkVW40ZUdfSUtqWGVZSVVtWlNWYTRhWEIyNE1wQld2NzJjOGQxU2YyTWFLUnI2Q1NkX3JJcWVab2FQWHNjMFdvYk5zU1ZQNV80ZjVUMlEyLVMtbDRZRkVqZ2xzRHN0RTBucDRLb2VlZ2I3Mkl1Z2ItMnF4aXZuazJrZNIBtgFBVV95cUxNcDZKVURqTm1IQlR4UGhnM3BaeEhHYUkteld2dGdZNVpXckZnZUlXZ1l1dnlld1V5SVV5UjlsWkFFS19VUFlIYWUzcFBmMG13Z1c3SVA2TF9GdjVYamRqRW5Nc2piOVlYYzhOZFFfcGVQdTAwWlFDRU1aQTJOZUNVQTVad2FFR0YtOE5qM0dFY3ptbHBNUEZEYUpPS1hSUG94aVJES1ZEOG5fWW1Jd2xla0paX3lmdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1263
    },
    {
      "date": "Jul 12",
      "text": "US military launches a third round of strikes on Iran in response to attacks on civilian vessels.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE1rclVBV3NOWkZ1anJEem16QXhnTElxOGNHcFd6Tktkd25MYVVJTDJXSTlkSzN2b0dPNVlrV3JZVVhvNHdtTmFRQ1pIT2puc3k4YnBoZ0FoRmFsVE8yeU1JYjlyTjM4WVVxTms3OXlmZVJ6LU5nUkhPZdIBfkFVX3lxTFBfQnJzZDJGUlBnM3VyV09YeUo4VkwwTVBQc3RwX0NwWUNRLTZUYnI4VFhzYWtQR2U5MTBtODNRYzVLT2JQeXBFdHFMSlFrVDZQZ25XMTFYWWlZaVlIVGRUd3dRVnlDdHlHNTNHaE5hY1k4cnVfamNfMGp5QUdCUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1263
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (16 headlines)"
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
