export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 750,
  "lastUpdated": "2026-05-23",
  "lastSyncedAt": "2026-05-23T17:29:01.262Z",
  "warDay": 85,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-23",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "Negotiations are underway for a 60-day US-Iran ceasefire extension with a nuclear framework, though Tehran alleges US violations and regional hostilities persist."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 68,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 58,
    "globalPressure": 68,
    "allianceInfluence": 73
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "May 22",
      "text": "Pakistan reports progress in US-Iran mediation bid.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNVGdjcGZxc0xlUWVqMTFnSE5PWHhfTktWV1FienhRUXprYWxtT0c3dnQ5dEJGUFNQUVNVRURXcm4tNDl4SEFoQ3U3Y3Jpc0VDbGlGS0dtTHIwdDBDeTd1MVQzQlhvUzhlNU1nS0s1bl9vVURnTzdvanVXdkwxNjlZMEZCTm9OYXhkc2xLeE9USlIyMU1ERUVqNHpHRXpaamZra2VFcEgtUDBBY1Yxem1yYmZCNmNoN29HckdN0gHAAUFVX3lxTFBIbkd1N3VodWpvUElmRHpXTHJxUkdqNjNwdzhkejVNZGwtSlhnb1dGUVFTUENnemJuZWt0dVhBVW5FYmt0Q2dtaWtGekxrV1hqOTJXUC1iam5SVVdyVk9EMU9qazEwY1N0d3hUVXZqMDVIRkhCcGtWR0NDUVRXNUNNMmgzXzRWUHhPM3V0QjEzeU5Ccmp4V28yVnZuYTI2TDR4aEtmaGFBM1k5TFNJMGJ5VVhBZG5EN0piQ2c1bXFxcA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 750
    },
    {
      "date": "May 22",
      "text": "Israel launches air strike on Beirut; US reports attacking an Iranian-flagged ship.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 750
    },
    {
      "date": "May 22",
      "text": "U.S. and Iran are reportedly closing in on a 60-day ceasefire extension with a nuclear framework.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiZEFVX3lxTE9GekFKeFgteThEeDR5RXM5d1lBaE9aYm9wdnk2LXY5RUFOTXl6LS1tWHdDLWNhNEc5bW5lUmM3X1VHOTItbldiallXdm5UWTJFQ0ZGVXRvcC1qWUZZWkF4cDFfekTSAWpBVV95cUxNR2JTUFdkSGpMenRzU2pxNm5iT0UyWTJyOFJQQ3E5bGwxUGxzZVNBY2NpQWw5OFRfdlJ6dDltN053empCTjFIWVJDQjhDSHJ2b1ZTdFdRTlZTdFQwS0w2a1FtZDVzWWFrN3V3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 750
    },
    {
      "date": "May 22",
      "text": "Hezbollah drone attacks injure 10 soldiers, including a brigade commander.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxQTHpXZ3VMODRRRmY4WXg0UWxiSEVsTnc4SmNEYlJZMmt2VEl1T1BlN0Rrb255MDJBQnB5bjBoSm1WbEFuR1BpYlVGeVhSOFNqZ0lEckNxYVFsZXNsU2lFLXJRcGpuWndDQ3VuNFZ2QUVBLTFUb3E0WHExdWdMLUIxcWNoSl9rdG1YT0I3NDBjSEF4QUZzcFJnU0sySnVzQzU2SkU3a1ZManpsSm5GYkhYadIBtgFBVV95cUxNTDdFd2l2Wlh1Z3IwTHAyM3RrR0w2NThMUEVVQ2JkaU02ZGpGS0l1ZjlNWnhlV1VoZTZfd3BJWWxJUmFoRWRJc2VGR1NyTndOb2NOa0lDMFh3LXp4NEhKbVZ0Nm9EQm50REtsTGRLTjM1WDNnNXI1YVVHVHFUSXlXQkY2RW1ESjJuYzJQTUMzUDZLaGtjOGtVZ3ZVR2RNbk9MakhBUVl1ZTF3SktaTUtCS29EUEVrQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 750
    },
    {
      "date": "May 22",
      "text": "Lebanon reports 10 killed in Israeli strikes on the south, including Hezbollah- and Amal-linked rescuers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi2wFBVV95cUxNUm1Wem0zTVI5LWNoaFpBcW1FcVNEbXVYZEVwV0ExOTlwQ0hLMGtNYzh2R3JNUmpzLVgzMEpkMndUcU51X19PTHl0RDNQM1REQ1c1azQtSFdpWFYySHZQdTJXRmpNSjZUQUI1SHdhV3ZVUVFOeWhRSG9hQTlWbDBIYXY5M3c4U3ZjbGJiMTF4RXdHR3UwZ2VQaVZxQlE4VTNsZUdOZWxBazl3RDJNVG1UWE55aFhDNV9EZGR4R3hucGM2OXozcGxvZjhJT0I3S3hxQWgwQmRydkNwNE0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 750
    },
    {
      "date": "May 22",
      "text": "U.S. prepares for new military strikes against Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxOd0YydWZGVkNndld4N2RMN3pCNTB6U0lud2o1SlBBVDd6UjNPeUlYb2taRTl0UVBBY1ZmcEM2cUdPRVRoOFY2YnJZdGxYNHkzb0JCd0dTVWZqVVh5Z3ZnT2FvZk9maG4wbkFkdWQ4dEliMlBIemJsSlVQaTNkUXM5YdIBhgFBVV95cUxPbmoxbmJHMzhBdmdIYnVOaVNUME9GbktiTDdwazVqNVViUUtvYzRfUHVyWjNHMTVaNkxEYUpPcFNLcDF0Q25hSlcwaG9EYkFzN0c1eWZoLWtCMWFFYnNEZm5XRTFQYU9CR3hCNVVWYkE5ellhRHhCcGxmbVRzV3FiQk43UDdKQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 750
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
      "perspective": "Iran",
      "headline": "Tehran Accuses US, Rejects Uranium Demand Amidst War",
      "summary": "Iran accuses the US of 'overt and covert' moves for attack and states that US demands for uranium handover will terminate any potential deal. Tehran also highlights its accelerated rebuilding of military industrial capabilities.",
      "tone": "defiant",
      "latestSinceUpdate": 741
    },
    {
      "perspective": "US/Israel",
      "headline": "US Prepares Strikes as Israel Targets Lebanon",
      "summary": "The US is reportedly preparing for new military strikes against Iran while engaging in ongoing talks. Israel has launched air strikes in Beirut and attacked an Iranian-flagged ship, indicating continued military action.",
      "tone": "strained",
      "latestSinceUpdate": 741
    },
    {
      "perspective": "International Mediation",
      "headline": "Intense Diplomacy Seeks Peace Amid Escalation Warnings",
      "summary": "Intense mediation efforts are underway, with Pakistan's Army Chief visiting Tehran to expedite peace efforts and US officials reporting 'slight progress' in talks. However, warnings of a global economic shock from the war persist.",
      "tone": "anxious",
      "latestSinceUpdate": 741
    }
  ]
});

export default LATEST_SNAPSHOT;
