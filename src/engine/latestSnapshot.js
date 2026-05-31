export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 835,
  "lastUpdated": "2026-05-31",
  "lastSyncedAt": "2026-05-31T14:05:16.990Z",
  "warDay": 93,
  "summary": "US and Iran have traded attacks amidst reports of a tentative 60-day ceasefire extension awaiting Trump's approval, while Israel expands its invasion into southern Lebanon against Hezbollah, leading to significant regional escalation and oil export concerns.",
  "lastNarrativeUpdate": "2026-05-31",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "A tentative 60-day ceasefire extension has been agreed upon between the U.S. and Iran, but it remains in limbo pending Trump's approval and Iranian conditions, with ongoing attacks reported."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
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
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "May 29-30",
      "text": "US military warns it is ready to resume combat in the Persian Gulf if needed.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTFBvUVMwOFVMTmdjLW52a3JJdWRJc2JMN3lQOC1jZy1oa2ZpRGNZYWZEMFp5ZHB3OHZfRWFMVHBmS3FIeUt4alFuWG9KdXdhQXE5SmN0VEJMTVZRV0FNbFlUY0p2NFdVNGhMb0RHdUpZT0EyZXUwaTlsOE1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 835
    },
    {
      "date": "May 29-30",
      "text": "US and Iran trade attacks, even as reports indicate a tentative agreement to extend ceasefire.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 835
    },
    {
      "date": "May 29-30",
      "text": "Iran says it targeted an American base following fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 835
    },
    {
      "date": "May 29-30",
      "text": "U.S. military hits a commercial ship trying to reach Iran, firing a missile into its engine room after warnings.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxNRUU3MHlOVjVsQWhJMENWVEsxWGhjVTd5Sm82Q3BNYjM4N0VjTjV2ektpLTlsTjZCMllrYmFmd3N0TDZRbnl3WFpkTXRWbEVJUFB0SkVsUzc0SU9BS1lacDNCWHR6bEhuQV8za0ZlN0w1QUMxX1Q3Z3hGUy05emdHRGg2VjljS0JTUkFoU19idzBWYlN1bUNhQ0ZpSG9RNDJDZzFRQXJKMFdNNWUtbGIyNG5DVnFoVXAxTi1ERXlHOWwyNnBCdWZrdjN2LTU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 835
    },
    {
      "date": "May 29-30",
      "text": "Israel expands its invasion into Lebanon, striking Lebanon and Gaza and capturing Beaufort Castle.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiaEFVX3lxTE5CY2syLXZIVUVCVFd1eGR5aTJyNUhNS0JxMTNjdlVtMTRjQWl3bFVqTFdlWEg3bEs1Rm9pSVJzUW51RVNWVmEwclNsQjN3QjNjS1ZPLUJ2MU5rUzMyMzAxbDdSUUExTmli0gFcQVVfeXFMT2xwaUF3VnV4LTNGRThkVXd1Z1A3RFAyQ01zcVpqTVRSRE9Iell6OFp5R2dZOUJPWkttSWpzWHg2QzJub3IxT0ZBbzVVSDZYTi1xckhUYk5HaWEzT2o?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Modern Ghana",
      "latestSinceUpdate": 835
    },
    {
      "date": "May 29-30",
      "text": "Hezbollah is reportedly using fibre-optic drones to hit Israel, leading Israel to shut schools near the border.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9qdTM1SFdFWmR1OFUwdVRfUDRaVmFTVVhVYXpWRThFMjFscWtDdHltSkhBeVFKUHhsM29oMEJoalFISGtRbTBUQ3JabHp2X0F6LXRzeVlzZ0doZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 835
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
      "perspective": "US Administration",
      "headline": "Trump's Demands Shape Iran Truce",
      "summary": "President Trump has outlined demands for Iran and has yet to give final approval to a tentative 60-day truce agreement, with US officials emphasizing the military's capability to resume strikes if necessary. Negotiations are ongoing, but the administration maintains a firm stance.",
      "tone": "strained",
      "latestSinceUpdate": 830
    },
    {
      "perspective": "Iran",
      "headline": "Iran Responds to US Strikes Amid Truce Talks",
      "summary": "Iran has agreed to a tentative 60-day truce but continues to target American bases in response to fresh US strikes, including a US military hit on a commercial ship attempting to reach Iran. This indicates a volatile situation despite diplomatic efforts.",
      "tone": "defiant",
      "latestSinceUpdate": 830
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Hezbollah's Drone Threat Escalates Border Conflict",
      "summary": "Hezbollah has intensified its attacks on northern Israel using rockets and advanced fibre-optic drones, prompting Israel to shut schools near the border. This regional conflict continues to escalate, posing a significant security challenge for Israel.",
      "tone": "anxious",
      "latestSinceUpdate": 830
    }
  ]
});

export default LATEST_SNAPSHOT;
