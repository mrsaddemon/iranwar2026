export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1457,
  "lastUpdated": "2026-07-25",
  "lastSyncedAt": "2026-07-25T15:33:30.156Z",
  "warDay": 148,
  "summary": "The Iran war continues with escalating tensions, including direct strikes between Iran and Israel, threats of a 'massive attack' from the US, and disruptions to oil shipments in key waterways, following the collapse of an April ceasefire.",
  "lastNarrativeUpdate": "2026-07-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 30,
    "summary": "An April ceasefire between Iran and Israel has collapsed following recent direct strikes and escalating regional hostilities."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Jul 24",
      "text": "Escalation in Iran war nears 2-week mark.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAtQk51ZFI1R2hJeUhnTTJlazk2WGstSFNLeEhfbVY2TXhER0tBVjZpemxQWTlyTDQzdFRiZlJQSHZ1YXVIWDJvUTh0ZzkwNDg2RmxBOTdLRGNSVUhaRm9DZzJUZm0xY3U5WGxQZThR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1455
    },
    {
      "date": "Jul 24",
      "text": "Trump meets with cabinet over intensifying Iran strikes, considers ‘massive attack’ on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOQVI2TFJjMFduMWRzZ1B6dEYtWWVTcHYyWFJ6NjVaNlpzaWxleklxUmNRMVFfMzlCNjhhU21mMmNoTk9zTjZ2NGZZbGxNR3FXYzQyM29uc3N1bkNXLURCTmwtNHF5RU5xNHVNQWlnR0hYanhOeXV1SzgyN1dVam5vZElpZ2NENktUTUFhX2RLdi15UXBZZTRWUkZNT3Q5bW9melEtN0R1Z0ZPeldvOFl5WS10czRjbVE0TXpWR2RIZ9IBxAFBVV95cUxOYTJ6dmJvYTV3RkFscUNkQVNjMEVLZUN5TGVydTVEd2VHeXp3YkU1blpTX1Vrb2Q1SVBUaTVYSm4wV2VjUWlsMmwzZWRKYkpiaEdSSEpGaUVlSEpuRzMzX09nczZ5RGVqTWgzRGpCQ09rWEpPQjduQnJkdVZOanFldk84aHZyZEc5UE5LU1dkUnpxUDlVUEtBTmtQZUVhaW9hWVp6d2xuYm55a0ZsUnU1ak5RMFFyejU2ZEdRdlVpSDh5dEh1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1457
    },
    {
      "date": "Jul 24",
      "text": "Iran and Israel exchange strikes for the first time since April ceasefire.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1457
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
    },
    {
      "date": "Jul 24",
      "text": "Israel carries out blasts across south Lebanon despite ‘ceasefire’ deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxNZl90QmVaeGdDMFBWV2JaNkRTV29BN2tJOTIyVTdYeGdrTXoyYS1PWWthTG4tUzlkWlBpNEtiWmFUTTRBRC1VYTlhNlhCb0EwZ1NoUV9CUVRlYWZLTmdhakcwbWNTUExtYkEtUVZzN1pEUkhZRzgwZHVGYU5Lekx0bXdNNHoyWnhkcW1WXzZmejU2Wm53YTdla3RZSk9NS1p5YnFUMjBxZE9HMFJvSVk40gG0AUFVX3lxTE9aU2dWYTlsVEdubkFVTWRoSlBqZnJaYTBzWUw1THpGeGo0eXJWMmpqcnBJYTAyZ1VmajdVZTI4TVBRNU9VdmFwOWg4WjV5bHI5c0NlNU1LSll2YUJvdERRMjBkbWtVWFY3VW95WFJyc1AtbHRBWVdGYVd5ZHFIamI4S094c1l3V2hYb0U0OU02MVlLNVc0SzhnLXpEWUUtQW5YSWJkaW1DcTF3SkFKSmUzMzBGSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1457
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
