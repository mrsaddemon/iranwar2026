export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1481,
  "lastUpdated": "2026-07-26",
  "lastSyncedAt": "2026-07-26T23:44:35.168Z",
  "warDay": 149,
  "summary": "The US has paused strikes against Iran for a second day, signaling a diplomatic opening, while Israel reportedly believes the US will be forced to escalate, and an oil tanker explosion occurred in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-07-26",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "The US has implemented a two-day pause in strikes against Iran to allow for diplomatic talks, though the broader regional situation remains volatile with Israeli actions in Lebanon and a Strait of Hormuz incident."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
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
      "text": "Iran threatens to expand war if US resumes strikes, which it says Israel is pushing for.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxNTEU1blJ0ZjFodmdqYXM3MzdXeU9PbXcwUlNEUWx5aktWY29NRXRHOC1XS2F3QTFpMWhKMnVhX0dUMkh4TmNYVEl0cDN6ZGtHb0dOMzk0SlE3SkdOT1JzVmZJQjFHYUYyUzZjUkFKNU5tZ3JmbDZTRXVYdUNDZXVFWjg4cG5QQmZKcFhKZnd1a2tMMENKS05LNFZMUC1henZCRERMcUVTaXRoRGYyV0Z4UmRSdmgxNUR30gG-AUFVX3lxTFA1UEhCVnJkWDRyNHRNYUItcVpsWDRfVXgyR0xUX3VyVXdacXZKMWgxSmtmWFFpVjlFVW12NHplMDFhXzZpYVFmbTdQRmFJajFGenhOdWtDZzNraEV5NEZXMkFCeElTQUVDbW9FaFUzS1lWam81NG5QMnpQRkcxclpUd2dGTTNsa05IeTRwd1BTclM2Q0RoMmtxM0FsZ2NvQWdLd2lfNWwyQ3BwcnV1d3NNanFrQVBBY3lxSXVtNUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1481
    },
    {
      "date": "Jul 24",
      "text": "Escalation in Iran war nears 2-week mark.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAtQk51ZFI1R2hJeUhnTTJlazk2WGstSFNLeEhfbVY2TXhER0tBVjZpemxQWTlyTDQzdFRiZlJQSHZ1YXVIWDJvUTh0ZzkwNDg2RmxBOTdLRGNSVUhaRm9DZzJUZm0xY3U5WGxQZThR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1481
    },
    {
      "date": "Jul 25",
      "text": "US pauses Iran strikes for second straight day as diplomatic talks move in positive direction.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxPX3lNZnhiOVFueGNzd0dnbGM3V0d5emVUZTZhaXRRNmVpXzhVaVNRcVlWQ29XcGZDUnkwM0hhN1BYRmhnWEZhQlhFU1ItX0x6R3k3enA3VC00LVpKQi1xMWJPeXJ3VmQ5WDRhbzIzLWZ3MUgwS25ScHZOOXRnWmxWMzFacTlvRWNC?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1481
    },
    {
      "date": "Jul 26",
      "text": "Oil tanker explodes after hitting naval mine in Strait of Hormuz, IRGC-linked media claims.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1481
    },
    {
      "date": "Jul 26",
      "text": "Israel carries out blasts across south Lebanon despite ‘ceasefire’ deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxNZl90QmVaeGdDMFBWV2JaNkRTV29BN2tJOTIyVTdYeGdrTXoyYS1PWWthTG4tUzlkWlBpNEtiWmFUTTRBRC1VYTlhNlhCb0EwZ1NoUV9CUVRlYWZLTmdhakcwbWNTUExtYkEtUVZzN1pEUkhZRzgwZHVGYU5Lekx0bXdNNHoyWnhkcW1WXzZmejU2Wm53YTdla3RZSk9NS1p5YnFUMjBxZE9HMFJvSVk40gG0AUFVX3lxTE9aU2dWYTlsVEdubkFVTWRoSlBqZnJaYTBzWUw1THpGeGo0eXJWMmpqcnBJYTAyZ1VmajdVZTI4TVBRNU9VdmFwOWg4WjV5bHI5c0NlNU1LSll2YUJvdERRMjBkbWtVWFY3VW95WFJyc1AtbHRBWVdGYVd5ZHFIamI4S094c1l3V2hYb0U0OU02MVlLNVc0SzhnLXpEWUUtQW5YSWJkaW1DcTF3SkFKSmUzMzBGSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1481
    },
    {
      "date": "Jul 26",
      "text": "Military Families Express Outrage After Pentagon Lowers Number of U.S. Troop Deaths in Iran War.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxOZHJDLU5TcmM3anFub0RSem9VMTZzcXJiUFhsanlrbjJBS0VzdmZfOHFHSENKdDN2cFRiVnViNHJ6TWxtb1lkX3R2U3RyLU1WdFkxY0p0UGJQd0xFY0NsSWVjNGM4Y0Zwb2hPdmgwMlpnUTF2Zjh5Q0R0TlRFeTFkcXJpWVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1481
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
      "perspective": "International Focus",
      "headline": "Middle East Conflict Dominates Global Attention",
      "summary": "The protracted conflict in the Middle East continues to draw significant international attention, with observers monitoring developments closely. The ongoing situation underscores regional instability and its broader implications.",
      "tone": "neutral",
      "latestSinceUpdate": 1449
    }
  ]
});

export default LATEST_SNAPSHOT;
