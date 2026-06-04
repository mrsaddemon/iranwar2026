export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 864,
  "lastUpdated": "2026-06-04",
  "lastSyncedAt": "2026-06-04T05:14:38.390Z",
  "warDay": 97,
  "summary": "US-Iran clashes continue to test a fragile ceasefire, while Israel conducts strikes in Gaza and Lebanon amidst an agreement for a conditional ceasefire with Lebanon, and Iran launches attacks on Kuwait airport.",
  "lastNarrativeUpdate": "2026-06-04",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "An Israel-Lebanon ceasefire has been agreed upon, contingent on Hezbollah actions, but broader US-Iran clashes and Iranian attacks on Kuwait continue to test de-escalation efforts."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Jun 02-03",
      "text": "US-Iran clashes test ceasefire; Israel kills 9 in Gaza.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxNci1FMmVzUHVBVFpfSlNBQ2ozZUhXdk9wWllHM3FfM1IxVVc2cDNwdi1PaVJ6aldDY3JzYlhocTk0V3N6VUU1cHFPVzFaUVhsLWxNNnQweTlwaGMzdV9XZjRPbUpWakk0NV9XU1VOa1ZVWXp0VzJ2R25odmJOd1ZYZHpOYVhWUVEyb2dpOGRlTnpSU1NWSGpfZjZodjNxTWwySl9sdVFTczBib0d5NHBvR3UzU3dhQdIBuwFBVV95cUxPRzF6SWJmbE5YVktwdmw5UnZtNnNUalRzX05ac0Q3QjE2V2NIRGdCT1B3UFlBMlhLN29WWEdNblUwMTQySXBBemxyakQwcEx5LW5MdlpLbldpeDZIVmxrcTJCU1lZYkJQVjlNcXNUcVNleVhKYnVGNHVKMzBLNVEwODhJYl9nZDZ4V1J4bDdhMW1hWWlneXM3dk1wcjJ1eEo5cjVLME9KWmJGQU94Tm9qS1NCYllmelpCTFRr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 864
    },
    {
      "date": "Jun 02",
      "text": "Iranian attacks on Kuwait airport and Bahrain condemned by Middle East countries.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxPYjlDZ2xvU3ltT2EySXRxSi1adFRtRVF3RTlJZXlJNUNRZW5DdjhlN1NoeWR5dHE3Wi0zRWR4OUxsQzZhZERRd0ZLc01mdEpBNTZNd0Z5cHo3cGhpN3htRkliUGFfLXNMZ09kTXlmRTVOQXNGbG1pX1lfcm50OTB5ODVZbjM2ZHBOU0N0d3RR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 864
    },
    {
      "date": "Recent",
      "text": "Israel and Lebanon agree to implement a ceasefire, contingent on Hezbollah actions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFB5N3JBTXdxaG5jOU15NXJGSkQ4dk1SNkN3ZEpwVFBvQ1ZISjQ0VURDLXdoN1ZpMk5hUHlTTUFEd3NUZVFmZFVsVGt4Y3BNTGZRS0dsNGRBTWpGUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 864
    },
    {
      "date": "Recent",
      "text": "US House passes resolution to halt military action in Iran, rebuking Trump's actions.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMicEFVX3lxTE1IYWpzd2VTd0ljOHZsSEk3Rjl3c0NTVkRKMklWTjhoT0FNM1pZUjNGT3NFcGhxLWh4dml1OXBwZ1lSTEY4anZFUjFsYnNwcEJ6ODV1a1lzWFg0VUpIOC0tVDA4NV8zT1lYTWhUN3FtUUM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 864
    },
    {
      "date": "Recent",
      "text": "US secures Israel-Lebanon ceasefire in a major diplomatic breakthrough.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxQOUVBeXhfWkxfYWU4N1FOd2lGUl9iN256TWhLUUZXVUNjVWxhYnBRaDk2Qi1qUmE4ekNUN3FITS1RNThaclpyMGtidGFhNXJSUFpwVUM5QmxMOUdpckYtZGRnU2FJOFAxbHE2X0ZGYlEwb1NMZUlnQU5fR2hzYkRod1dFMkFjQWJMTF95cUVsYzhjX0NyRXFxOS1xRUJ0M2ZsVjc4U2lqZ0k5bXdnSHI0Zk5pUklHekZiZ2pzOVdtMDFEV1HSAcgBQVVfeXFMUGZkbzF2ZFkwRGg5OTQtcXpJZkhlczE5NTROWi1PWDZWa1hMM3NfY3Y0d196QkJudS1waGNHVXY1Um1neTlOcFc4a0hXcGpBRlpscG9zSk5MSlhMTUxKZncwVWRRXzVlNjlrT2t0WVNudjlxYm9xVU1qdVpFN2hLMFd1YnZiSmJCTUEzNTVSNzl1a1BHNENMVTdvS0NMLVRKa0tHRFRqSEktZkQtdHZkeEFzWEtIc1NsclFqeUVxbnluRnpoSENpenM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 864
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
      "perspective": "Iran's Stance",
      "headline": "Iran Continues Strikes Amidst Stalled US Negotiations",
      "summary": "Iran's Foreign Minister states contact with the US is maintained but negotiations show no progress, as Iran launches aggressive strikes against neighbors and US assets, framing them as responses to regional dynamics.",
      "tone": "defiant",
      "latestSinceUpdate": 863
    },
    {
      "perspective": "US Response & Internal Division",
      "headline": "US Counters Iranian Aggression While Congress Rebukes Executive Power",
      "summary": "The US condemns Iran's aggressive strikes and actively counters missile and drone attacks, while the House of Representatives passes a war powers resolution, signaling internal political division regarding military engagement.",
      "tone": "strained",
      "latestSinceUpdate": 863
    },
    {
      "perspective": "Israel-Hezbollah Volatility",
      "headline": "Fragile Truce Holds Amidst Hezbollah Provocations",
      "summary": "A partial truce between Israel and Hezbollah is in place, contingent on Hezbollah ceasing attacks, but recent rocket launches by Hezbollah are testing the U.S.-mediated deal, maintaining high regional tension.",
      "tone": "anxious",
      "latestSinceUpdate": 863
    }
  ]
});

export default LATEST_SNAPSHOT;
