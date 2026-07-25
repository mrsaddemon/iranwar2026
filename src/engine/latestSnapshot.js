export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1464,
  "lastUpdated": "2026-07-25",
  "lastSyncedAt": "2026-07-25T22:30:10.114Z",
  "warDay": 148,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 14,
    "summary": "The April ceasefire between Iran and Israel has collapsed following recent exchanges of strikes, and a ceasefire deal in Lebanon appears to be violated."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
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
    "nuclearIndex": 60,
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
      "date": "Jul 24",
      "text": "Escalation in Iran war nears 2-week mark with continued regional tensions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAtQk51ZFI1R2hJeUhnTTJlazk2WGstSFNLeEhfbVY2TXhER0tBVjZpemxQWTlyTDQzdFRiZlJQSHZ1YXVIWDJvUTh0ZzkwNDg2RmxBOTdLRGNSVUhaRm9DZzJUZm0xY3U5WGxQZThR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1464
    },
    {
      "date": "Jul 24",
      "text": "Trump warns of an unprecedented 'massive attack' on Iran and meets with Cabinet to discuss intensifying strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOQVI2TFJjMFduMWRzZ1B6dEYtWWVTcHYyWFJ6NjVaNlpzaWxleklxUmNRMVFfMzlCNjhhU21mMmNoTk9zTjZ2NGZZbGxNR3FXYzQyM29uc3N1bkNXLURCTmwtNHF5RU5xNHVNQWlnR0hYanhOeXV1SzgyN1dVam5vZElpZ2NENktUTUFhX2RLdi15UXBZZTRWUkZNT3Q5bW9melEtN0R1Z0ZPeldvOFl5WS10czRjbVE0TXpWR2RIZ9IBxAFBVV95cUxOYTJ6dmJvYTV3RkFscUNkQVNjMEVLZUN5TGVydTVEd2VHeXp3YkU1blpTX1Vrb2Q1SVBUaTVYSm4wV2VjUWlsMmwzZWRKYkpiaEdSSEpGaUVlSEpuRzMzX09nczZ5RGVqTWgzRGpCQ09rWEpPQjduQnJkdVZOanFldk84aHZyZEc5UE5LU1dkUnpxUDlVUEtBTmtQZUVhaW9hWVp6d2xuYm55a0ZsUnU1ak5RMFFyejU2ZEdRdlVpSDh5dEh1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1464
    },
    {
      "date": "Jul 24",
      "text": "Iran and Israel exchange strikes for the first time since the April Cease-Fire, indicating a collapse of the agreement.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1464
    },
    {
      "date": "Jul 24",
      "text": "Crude oil prices shoot up as the Red Sea joins the Strait of Hormuz as a second choke point due to the Iran war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxOLTE3MVJMNG1NX0poY3YyV2RqdmVlMU82US1NWGZ1cFBvQjF4V21IcU5lUXZ6RWNzcmdibGM2SmJMY010MGZOVXY3ZlN6anRHeU5uYlVrQ05SZjh5YXcyUExxTW5nY1ktMWM4WjNTMkRvOUpaOXRUWm1QQTdiUVp5RQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1464
    },
    {
      "date": "Jul 24",
      "text": "Israel carries out blasts across south Lebanon despite a 'ceasefire' deal, raising concerns about regional stability.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxNZl90QmVaeGdDMFBWV2JaNkRTV29BN2tJOTIyVTdYeGdrTXoyYS1PWWthTG4tUzlkWlBpNEtiWmFUTTRBRC1VYTlhNlhCb0EwZ1NoUV9CUVRlYWZLTmdhakcwbWNTUExtYkEtUVZzN1pEUkhZRzgwZHVGYU5Lekx0bXdNNHoyWnhkcW1WXzZmejU2Wm53YTdla3RZSk9NS1p5YnFUMjBxZE9HMFJvSVk40gG0AUFVX3lxTE9aU2dWYTlsVEdubkFVTWRoSlBqZnJaYTBzWUw1THpGeGo0eXJWMmpqcnBJYTAyZ1VmajdVZTI4TVBRNU9VdmFwOWg4WjV5bHI5c0NlNU1LSll2YUJvdERRMjBkbWtVWFY3VW95WFJyc1AtbHRBWVdGYVd5ZHFIamI4S094c1l3V2hYb0U0OU02MVlLNVc0SzhnLXpEWUUtQW5YSWJkaW1DcTF3SkFKSmUzMzBGSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1464
    },
    {
      "date": "Jul 24",
      "text": "U.S. military goes silent on Iran airstrikes after breaking a two-week streak, while Houthi rebels and Saudi Arabia exchange attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxOVWt5cG4wbGVBSkVvSXhhazNCaW5nQ1QtMnh0cGFVTENlVHR2UG5wNUNBSndJWnNjYU9lRDlNTkdCMEZzaVJJOU4zMmI3YW9QdmdnMWtuYUs2eXlxM1l4VkVpZmlSc2xiNkZXT1h1UnBWTDhGcmJBcEpmUEx2c2pRaVo3UHpYVEtRYmk1REpVdEhlWUd3S3kyeEVNSWlueVg0WHp6WEhUUkVEczRqYktsa0l4YXJQdE1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fortune",
      "latestSinceUpdate": 1464
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
