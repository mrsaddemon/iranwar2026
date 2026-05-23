export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 751,
  "lastUpdated": "2026-05-23",
  "lastSyncedAt": "2026-05-23T18:35:56.264Z",
  "warDay": 85,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-23",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 60,
    "summary": "No active ceasefire is in effect, though intense US-Iran diplomatic efforts are underway to finalize a new agreement, with some reports of a previous ceasefire violation."
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
        "precision": 0.85,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 38,
    "oilDisruption": 75,
    "tradeImpact": 45,
    "sanctionsPressure": 49,
    "globalPressure": 54,
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
      "date": "May 22",
      "text": "Israel launched an air strike on Beirut, following previous strikes in Lebanon.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 751
    },
    {
      "date": "May 22",
      "text": "The US reported attacking an Iranian-flagged ship, with Iran claiming the US violated a ceasefire by targeting ships.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQWmMwcHRNRzF3SVdqU3A3dFJpS0YyUFp3aFhncHVDZ0FQd0xXSWJwdTFteUEya1d0VEkxazRtbkNyMi1hVV9SdTBBdktJM29GaHlOdThaS1M5cUlwdHo2RTFiSDNZLTlJb3VTTTFYdlVjemlYX2ZaWm9ubUhLOTdTUGdnMDZpVFh3RHlvbWZLODM3ZmlDeVFMRkJ0RlZNSDIzNWVNc3Z4UlpScGZheHdteTl2YUxlYnotWDFJ0gHAAUFVX3lxTE85dVRselp4VWZ0QXpJTXJTaEs2aS1tOUdGbXJjdVhiSXZ0TkxlMFI1RUdmZFVENFhQSjRQYk45ZzR4X2lpcU5XOHZwQ0JEcUtHaDZIS0FXNmlScjhhNUdmLXAwNmpqMkRPS3RTNGR2dFpHT3doWGVyTHRGUklYMm5qcDdjRTJKREQ2YmptMVctVVRsc08wUlNDRFBwOTFORUtaVTFSY1R2NDNJX28zZ3pLYzdNcXlWOGtwNVdpZ1Zxcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 751
    },
    {
      "date": "May 22",
      "text": "Hezbollah drone attacks in northern Israel killed an IDF soldier and injured 10 others, including a brigade commander.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxQTHpXZ3VMODRRRmY4WXg0UWxiSEVsTnc4SmNEYlJZMmt2VEl1T1BlN0Rrb255MDJBQnB5bjBoSm1WbEFuR1BpYlVGeVhSOFNqZ0lEckNxYVFsZXNsU2lFLXJRcGpuWndDQ3VuNFZ2QUVBLTFUb3E0WHExdWdMLUIxcWNoSl9rdG1YT0I3NDBjSEF4QUZzcFJnU0sySnVzQzU2SkU3a1ZManpsSm5GYkhYadIBtgFBVV95cUxNTDdFd2l2Wlh1Z3IwTHAyM3RrR0w2NThMUEVVQ2JkaU02ZGpGS0l1ZjlNWnhlV1VoZTZfd3BJWWxJUmFoRWRJc2VGR1NyTndOb2NOa0lDMFh3LXp4NEhKbVZ0Nm9EQm50REtsTGRLTjM1WDNnNXI1YVVHVHFUSXlXQkY2RW1ESjJuYzJQTUMzUDZLaGtjOGtVZ3ZVR2RNbk9MakhBUVl1ZTF3SktaTUtCS29EUEVrQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 751
    },
    {
      "date": "May 22",
      "text": "The U.S. is reportedly preparing for new military strikes against Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxOd0YydWZGVkNndld4N2RMN3pCNTB6U0lud2o1SlBBVDd6UjNPeUlYb2taRTl0UVBBY1ZmcEM2cUdPRVRoOFY2YnJZdGxYNHkzb0JCd0dTVWZqVVh5Z3ZnT2FvZk9maG4wbkFkdWQ4dEliMlBIemJsSlVQaTNkUXM5YdIBhgFBVV95cUxPbmoxbmJHMzhBdmdIYnVOaVNUME9GbktiTDdwazVqNVViUUtvYzRfUHVyWjNHMTVaNkxEYUpPcFNLcDF0Q25hSlcwaG9EYkFzN0c1eWZoLWtCMWFFYnNEZm5XRTFQYU9CR3hCNVVWYkE5ellhRHhCcGxmbVRzV3FiQk43UDdKQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 751
    },
    {
      "date": "May 22",
      "text": "US and Iran diplomacy intensifies, with both sides signaling progress towards a potential agreement on an MOU.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 751
    },
    {
      "date": "May 22",
      "text": "US intelligence indicates Iran is rebuilding its military industrial base faster than expected and is already producing drones.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1LcWcxVzFDaVhiYVZUOFNJYjdEakhpU2xaVUFGZVhzTHFtS3N1bGdwa3A0RFNrbURFaXNxeVc0WGlqZDVhcE9kTWxKMl9yNlh5cmxXMFNNTDNNMzlwaDZjNl9vdGduUjB4MzBlUzhR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 751
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
