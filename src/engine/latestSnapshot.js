export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 756,
  "lastUpdated": "2026-05-23",
  "lastSyncedAt": "2026-05-23T23:33:45.973Z",
  "warDay": 85,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-23",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 60,
    "summary": "Despite claims of a 'largely negotiated' peace deal, active hostilities persist between Israel and Hezbollah, and the US maintains its blockade on Iran."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 58,
    "globalPressure": 70,
    "allianceInfluence": 68
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
      "text": "President Trump states a peace deal with Iran, including reopening the Strait of Hormuz, is 'largely negotiated' and will be announced soon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiZEFVX3lxTE9GekFKeFgteThEeDR5RXM5d1lBaE9aYm9wdnk2LXY5RUFOTXl6LS1tWHdDLWNhNEc5bW5lUmM3X1VHOTItbldiallXdm5UWTJFQ0ZGVXRvcC1qWUZZWkF4cDFfekTSAWpBVV95cUxNR2JTUFdkSGpMenRzU2pxNm5iT0UyWTJyOFJQQ3E5bGwxUGxzZVNBY2NpQWw5OFRfdlJ6dDltN053empCTjFIWVJDQjhDSHJ2b1ZTdFdRTlZTdFQwS0w2a1FtZDVzWWFrN3V3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 756
    },
    {
      "date": "May 23",
      "text": "Israel conducts fresh strikes against Hezbollah sites in south Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxQSk5NVF9wM2tkaXFsakpHTVNHM2NYV1NWMlFpU1RzclNLSEdBVXU1LUJ1eG9obC1Pb1pvc1Z5M3AwOWlENThNZXhEMi1LY1pSRk5uLUljMHpxM1doeklJN3VGVnU3dG12a3FobTBId1hwaXZfSGM0RHFKZ2RVUTBuVTMzZm95S1hlTzVFUkVlUmxTbTNMTzN6TTV1Z2s?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Yahoo",
      "latestSinceUpdate": 756
    },
    {
      "date": "May 23",
      "text": "Hezbollah drone attacks injure 10 Israeli soldiers, including a brigade commander.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxQTHpXZ3VMODRRRmY4WXg0UWxiSEVsTnc4SmNEYlJZMmt2VEl1T1BlN0Rrb255MDJBQnB5bjBoSm1WbEFuR1BpYlVGeVhSOFNqZ0lEckNxYVFsZXNsU2lFLXJRcGpuWndDQ3VuNFZ2QUVBLTFUb3E0WHExdWdMLUIxcWNoSl9rdG1YT0I3NDBjSEF4QUZzcFJnU0sySnVzQzU2SkU3a1ZManpsSm5GYkhYadIBtgFBVV95cUxNTDdFd2l2Wlh1Z3IwTHAyM3RrR0w2NThMUEVVQ2JkaU02ZGpGS0l1ZjlNWnhlV1VoZTZfd3BJWWxJUmFoRWRJc2VGR1NyTndOb2NOa0lDMFh3LXp4NEhKbVZ0Nm9EQm50REtsTGRLTjM1WDNnNXI1YVVHVHFUSXlXQkY2RW1ESjJuYzJQTUMzUDZLaGtjOGtVZ3ZVR2RNbk9MakhBUVl1ZTF3SktaTUtCS29EUEVrQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 756
    },
    {
      "date": "May 23",
      "text": "US military boards an Iranian-flagged oil tanker suspected of breaching the blockade.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxQYk44NDJqQmZtaTZFYTNxdzNHdkVnbmJBQ29hWFRpVjFHbG9oalk0ZGNhX3o4RUFDbkFMb2c0dkxpR0ZfMWxwdmVROHM3QlVfTS14eExMWldjMW9lUGpwRERGWVRXYVI2NGkxSTdkZ2tnc1lneldYSDBPektTZGNIcGR3aTlGZWc3Tnk5c0dUVjZoQWd5NV96ZkZKMGs5M3JWemc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 756
    },
    {
      "date": "May 23",
      "text": "US intelligence reports Iran is rebuilding its military industrial base faster than expected, producing drones.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1LcWcxVzFDaVhiYVZUOFNJYjdEakhpU2xaVUFGZVhzTHFtS3N1bGdwa3A0RFNrbURFaXNxeVc0WGlqZDVhcE9kTWxKMl9yNlh5cmxXMFNNTDNNMzlwaDZjNl9vdGduUjB4MzBlUzhR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 756
    },
    {
      "date": "May 23",
      "text": "A survivor reports a missile strike in the Strait of Hormuz, with a friend missing.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9KTGJoaHEtWGFGNjB2SHVVanRKSGdPbDJtRW5PbTg2VWlEaTBrRk9vUTZGWkF2V0k3MmdVemNrdUJrQXlTNDlleUpJT3Z0cmc4RmZOd2xuS0lKUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 756
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
