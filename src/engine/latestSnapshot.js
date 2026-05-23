export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 754,
  "lastUpdated": "2026-05-23",
  "lastSyncedAt": "2026-05-23T21:31:11.835Z",
  "warDay": 85,
  "summary": "Intense diplomatic efforts between the US and Iran are underway to finalize a ceasefire and nuclear framework, despite ongoing military actions between Israel and Hezbollah in Lebanon and accusations of ceasefire violations.",
  "lastNarrativeUpdate": "2026-05-23",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "Negotiations for a 60-day ceasefire extension and nuclear framework between the US and Iran are advanced, though Tehran claims US violations and demands uranium handover."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "text": "U.S. and Iran are closing in on a 60-day ceasefire extension with nuclear framework, FT reports.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiZEFVX3lxTE9GekFKeFgteThEeDR5RXM5d1lBaE9aYm9wdnk2LXY5RUFOTXl6LS1tWHdDLWNhNEc5bW5lUmM3X1VHOTItbldiallXdm5UWTJFQ0ZGVXRvcC1qWUZZWkF4cDFfekTSAWpBVV95cUxNR2JTUFdkSGpMenRzU2pxNm5iT0UyWTJyOFJQQ3E5bGwxUGxzZVNBY2NpQWw5OFRfdlJ6dDltN053empCTjFIWVJDQjhDSHJ2b1ZTdFdRTlZTdFQwS0w2a1FtZDVzWWFrN3V3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 754
    },
    {
      "date": "May 22",
      "text": "Israel strikes south Lebanon as Hezbollah says Iran won’t abandon group.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQUndkalFsMXhNczBYVDJNMlpkT3dXX3ltcEU4cmVselkyUVFwQ2Q4QWsyd3B3cGlSU0NVcTVQLTBzdjZFYmF6Zm1pR2k0aDJ4VGRpbmFzNm1QZm1DLVNnLXdLR2YwTW1DNWxrcm5YSGd2REY0eEtCeUFJeElfS0NXWHhxaXF1T09zOXFSQlR6VDhsNTBDTmJmc01iLVctb0pGc3N5OXdUYU9JRTYzSHE5dzlzRl9sdk0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Firstpost",
      "latestSinceUpdate": 754
    },
    {
      "date": "May 22",
      "text": "Hezbollah drone attacks injure 10 soldiers, including a brigade commander, in separate incidents.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxQTHpXZ3VMODRRRmY4WXg0UWxiSEVsTnc4SmNEYlJZMmt2VEl1T1BlN0Rrb255MDJBQnB5bjBoSm1WbEFuR1BpYlVGeVhSOFNqZ0lEckNxYVFsZXNsU2lFLXJRcGpuWndDQ3VuNFZ2QUVBLTFUb3E0WHExdWdMLUIxcWNoSl9rdG1YT0I3NDBjSEF4QUZzcFJnU0sySnVzQzU2SkU3a1ZManpsSm5GYkhYadIBtgFBVV95cUxNTDdFd2l2Wlh1Z3IwTHAyM3RrR0w2NThMUEVVQ2JkaU02ZGpGS0l1ZjlNWnhlV1VoZTZfd3BJWWxJUmFoRWRJc2VGR1NyTndOb2NOa0lDMFh3LXp4NEhKbVZ0Nm9EQm50REtsTGRLTjM1WDNnNXI1YVVHVHFUSXlXQkY2RW1ESjJuYzJQTUMzUDZLaGtjOGtVZ3ZVR2RNbk9MakhBUVl1ZTF3SktaTUtCS29EUEVrQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 754
    },
    {
      "date": "May 22",
      "text": "Tehran says US violated ceasefire and targeted ships.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQWmMwcHRNRzF3SVdqU3A3dFJpS0YyUFp3aFhncHVDZ0FQd0xXSWJwdTFteUEya1d0VEkxazRtbkNyMi1hVV9SdTBBdktJM29GaHlOdThaS1M5cUlwdHo2RTFiSDNZLTlJb3VTTTFYdlVjemlYX2ZaWm9ubUhLOTdTUGdnMDZpVFh3RHlvbWZLODM3ZmlDeVFMRkJ0RlZNSDIzNWVNc3Z4UlpScGZheHdteTl2YUxlYnotWDFJ0gHAAUFVX3lxTE85dVRselp4VWZ0QXpJTXJTaEs2aS1tOUdGbXJjdVhiSXZ0TkxlMFI1RUdmZFVENFhQSjRQYk45ZzR4X2lpcU5XOHZwQ0JEcUtHaDZIS0FXNmlScjhhNUdmLXAwNmpqMkRPS3RTNGR2dFpHT3doWGVyTHRGUklYMm5qcDdjRTJKREQ2YmptMVctVVRsc08wUlNDRFBwOTFORUtaVTFSY1R2NDNJX28zZ3pLYzdNcXlWOGtwNVdpZ1Zxcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 754
    },
    {
      "date": "May 22",
      "text": "US intelligence indicates Iran is rebuilding its military industrial base faster than expected, already producing drones.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1LcWcxVzFDaVhiYVZUOFNJYjdEakhpU2xaVUFGZVhzTHFtS3N1bGdwa3A0RFNrbURFaXNxeVc0WGlqZDVhcE9kTWxKMl9yNlh5cmxXMFNNTDNNMzlwaDZjNl9vdGduUjB4MzBlUzhR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 754
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
