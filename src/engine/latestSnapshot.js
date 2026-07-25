export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1458,
  "lastUpdated": "2026-07-25",
  "lastSyncedAt": "2026-07-25T16:27:54.043Z",
  "warDay": 148,
  "summary": "The Iran war has escalated significantly over the past two weeks with renewed strikes between Iran and Israel, attacks on oil shipments in key waterways, and continued US military actions, despite reports of a collapsed ceasefire.",
  "lastNarrativeUpdate": "2026-07-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "The April ceasefire between Iran and Israel has collapsed following renewed strikes, and a ceasefire deal in Lebanon is also being violated."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.7,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAtQk51ZFI1R2hJeUhnTTJlazk2WGstSFNLeEhfbVY2TXhER0tBVjZpemxQWTlyTDQzdFRiZlJQSHZ1YXVIWDJvUTh0ZzkwNDg2RmxBOTdLRGNSVUhaRm9DZzJUZm0xY3U5WGxQZThR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1455
    },
    {
      "date": "Jul 24",
      "text": "Trump Meets With Cabinet Over Whether to Intensify Iran Strikes.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxNekVNZHhVQkF4WWRNNm84S0JDZWJ1U3ZJRl85dFBtdV9DNlFSZGhtTGxIZll4aWRMZDVGd3JFX0hfWFR2SEwxUlVLOXR6NlNrQ3RPOUpBbm1qZERuVG1VM0FyY0NKNFZvZGtwV3VjU3BBSE5IeDV6dEpYYnYybnM3Zg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1458
    },
    {
      "date": "Jul 24",
      "text": "Iran and Israel Exchange Strikes for First Time Since April Cease-Fire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMidEFVX3lxTE4yaFRvZG5JOHJaV2ZsSllxcUx6WG9HSEdWVC1sQlVDZlRIUmxxb18xVWNmOEZCd0xKa3lraG80ZGw4NnVHcE5vODRwZzVNVkV4V3JscldjQUt0dU9zQ2swZjExcG9IR2E2dG5hb29HekFnYV8x?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1458
    },
    {
      "date": "Jul 24",
      "text": "Crude oil prices shoot up after Red Sea joins Strait of Hormuz as Iran war's second choke point.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxOLTE3MVJMNG1NX0poY3YyV2RqdmVlMU82US1NWGZ1cFBvQjF4V21IcU5lUXZ6RWNzcmdibGM2SmJMY010MGZOVXY3ZlN6anRHeU5uYlVrQ05SZjh5YXcyUExxTW5nY1ktMWM4WjNTMkRvOUpaOXRUWm1QQTdiUVp5RQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1458
    },
    {
      "date": "Jul 24",
      "text": "Iran Guards say stopped four ships trying to transit Hormuz strait.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiAJBVV95cUxQc1VNVk9NcTcwdkxWbmMwOXpxRy0td1FTcHJHb3R3bDZIOW9fQzhUVWpNSTFhQW51eHdJeVVUVktnXy1CNWQ5SGtqX1pmOG9wNk95ZlQ1dTBFVXhscjR6Rk5ZOXVFdkVxdzh3VWs3djEtVjhaOGl2MXJKZHNrMG5TNXZIOHpBNzZ6T1Jvcmc3ZExFRXRpbDVyY0pTcnZ4SXo2bGpPTktYaGNQc0pzUjVhTWF4S2t3T2YxeGlMRHdkUGxyUm5rNFkybUktV0tzUmppSmtCeEVlOHdrT29wUFJXWng0X3B6eTR6SUo3SjZWVmRsZHZ3MUtEQTVOSU5PWDB2MWhaenBFX03SAY8CQVVfeXFMTXZQOHhZc0RCMXRLaDVKODRsN2N2YWJ4Wi1aYjZ6aEhiZlcwdlFiR0loU1U1TEFXZ3Y5b0lqNVFHM0x2c0FRX2l5VzJtN1g3dmhXSVN3M3RVV1JId19KUzIzRFNjR1VjXy1jSzFra2M3YWFCclloTGRJQ1psRHlKT3NWcW9qNld0ZGtJVFFyVk9rTVB0MWZfOEQ5LTAxTjRodkpoWlB6OXdSM0JuN1ltMHRYbVRmZjVfSWt0dE5kM21McFFJeUt0UUpBSW1NSVVOQkdKM3N2MUY3dkdieWdCa0NZZEwxaC1haUs4YU9MZ0FubHllSWlLaDFEOVhDbTlUUGdCa2xYYV9OUnBUanRRaw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 1457
    },
    {
      "date": "Jul 24",
      "text": "Oil shipments are under attack on multiple fronts as fighting escalates in Red Sea, Hormuz and Black Sea.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxOYnZkSnE3cjdkVWpBWnVkQi1qUndVbHZkb2Q3amhCWEdibTlJNVRzcEt5OUNnQTd3QnBfUjlwV2Q5SVJ4cTlVelpQLXpva0l6allVSDVEOTRJc2I5R2ZJclk5Ukc1VzhkQ2hNQkdNeVllaEZMWlJ6d25KelM0RURFdFhjcGQ1ZkpkeDVia0Jn0gGTAUFVX3lxTE16dkxjTHEtc0Yzc1lhYkw5aEVVMG9aYlczbnFrSS1lY3EyNWpPSWw4bVpGMlQ0cGdOVnFNYjJUTHg3cW1VMkFZaHJHUl9uMEJVZlhOY1Bqc0FHQ3JHTUxjLW1jWEZqX0F3YWZ3clJyU2l2RDNQOXBHVXhwa3dscDFyaDVHUXdWN2xYV3dUNE5JTVg4Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1457
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
      "perspective": "International Focus",
      "headline": "Middle East Conflict Dominates Global Attention",
      "summary": "The protracted conflict in the Middle East continues to draw significant international attention, with observers monitoring developments closely. The ongoing situation underscores regional instability and its broader implications.",
      "tone": "neutral",
      "latestSinceUpdate": 1449
    }
  ]
});

export default LATEST_SNAPSHOT;
