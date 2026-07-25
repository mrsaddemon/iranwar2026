export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1459,
  "lastUpdated": "2026-07-25",
  "lastSyncedAt": "2026-07-25T17:34:05.510Z",
  "warDay": 148,
  "summary": "The Iran-Israel conflict has escalated with renewed direct strikes, imperiling a fragile ceasefire and leading to significant disruptions in the Strait of Hormuz and Red Sea, while the US navigates its response amid internal debate.",
  "lastNarrativeUpdate": "2026-07-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 100,
    "summary": "The April ceasefire between Iran and Israel has collapsed following renewed direct exchanges of strikes, while a separate ceasefire in Lebanon also faces violations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
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
      "date": "Jul 24",
      "text": "Escalation in Iran war nears 2-week mark.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAtQk51ZFI1R2hJeUhnTTJlazk2WGstSFNLeEhfbVY2TXhER0tBVjZpemxQWTlyTDQzdFRiZlJQSHZ1YXVIWDJvUTh0ZzkwNDg2RmxBOTdLRGNSVUhaRm9DZzJUZm0xY3U5WGxQZThR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN"
    },
    {
      "date": "Jul 22",
      "text": "Pentagon accused of cover-up over US military casualties in Iran war.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPTG9hNHJocmdRUVNvZzNzSUxlYTQydkFOeDdSa21sUWxidFg1Ri14OWs0TDdXUGtLSUlFdGpqUFFSYW1ibWZ3UGtVZU1UR0p2RzF2X2hVdTEtNnVBRWU5cHFGckJMdUNQOEp0WGp0ZUtFSXVXRVQ3c05tdTc5ZFpTaUlnYV9qOWJEVnA1YVVjUFJCY3ZlOWo5YWgwc1N0STE3QVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1459
    },
    {
      "date": "Jul 2X",
      "text": "Iran and Israel exchange strikes for the first time since April ceasefire.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1459
    },
    {
      "date": "Jul 2X",
      "text": "Iranian strike on Israel suggests Tehran's sense of resilience is growing.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFA1cVJXT0RQcXFSX0VuM3E3aEVNZllsZ1RLQkZSQkFNSU9JbkpXel9lNkx1RnZTZ3AySkdtTHlsR0J5YXZnWk5HRGx2MTU2cTBJelF1T2JXRXJUZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1459
    },
    {
      "date": "Jul 2X",
      "text": "Iran Guards say stopped four ships trying to transit Hormuz strait.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiAJBVV95cUxQc1VNVk9NcTcwdkxWbmMwOXpxRy0td1FTcHJHb3R3bDZIOW9fQzhUVWpNSTFhQW51eHdJeVVUVktnXy1CNWQ5SGtqX1pmOG9wNk95ZlQ1dTBFVXhscjR6Rk5ZOXVFdkVxdzh3VWs3djEtVjhaOGl2MXJKZHNrMG5TNXZIOHpBNzZ6T1Jvcmc3ZExFRXRpbDVyY0pTcnZ4SXo2bGpPTktYaGNQc0pzUjVhTWF4S2t3T2YxeGlMRHdkUGxyUm5rNFkybUktV0tzUmppSmtCeEVlOHdrT29wUFJXWng0X3B6eTR6SUo3SjZWVmRsZHZ3MUtEQTVOSU5PWDB2MWhaenBFX03SAY8CQVVfeXFMTXZQOHhZc0RCMXRLaDVKODRsN2N2YWJ4Wi1aYjZ6aEhiZlcwdlFiR0loU1U1TEFXZ3Y5b0lqNVFHM0x2c0FRX2l5VzJtN1g3dmhXSVN3M3RVV1JId19KUzIzRFNjR1VjXy1jSzFra2M3YWFCclloTGRJQ1psRHlKT3NWcW9qNld0ZGtJVFFyVk9rTVB0MWZfOEQ5LTAxTjRodkpoWlB6OXdSM0JuN1ltMHRYbVRmZjVfSWt0dE5kM21McFFJeUt0UUpBSW1NSVVOQkdKM3N2MUY3dkdieWdCa0NZZEwxaC1haUs4YU9MZ0FubHllSWlLaDFEOVhDbTlUUGdCa2xYYV9OUnBUanRRaw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 1459
    },
    {
      "date": "Jul 2X",
      "text": "Crude oil prices shoot up after Red Sea joins Strait of Hormuz as Iran war's second choke point.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxOLTE3MVJMNG1NX0poY3YyV2RqdmVlMU82US1NWGZ1cFBvQjF4V21IcU5lUXZ6RWNzcmdibGM2SmJMY010MGZOVXY3ZlN6anRHeU5uYlVrQ05SZjh5YXcyUExxTW5nY1ktMWM4WjNTMkRvOUpaOXRUWm1QQTdiUVp5RQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1459
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
      "perspective": "International Focus",
      "headline": "Middle East Conflict Dominates Global Attention",
      "summary": "The protracted conflict in the Middle East continues to draw significant international attention, with observers monitoring developments closely. The ongoing situation underscores regional instability and its broader implications.",
      "tone": "neutral",
      "latestSinceUpdate": 1449
    }
  ]
});

export default LATEST_SNAPSHOT;
