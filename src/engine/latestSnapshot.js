export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1472,
  "lastUpdated": "2026-07-26",
  "lastSyncedAt": "2026-07-26T14:02:29.456Z",
  "warDay": 149,
  "summary": "US military strikes against Iran have paused for two days amid ongoing peace talks, while Iran and Israel have also agreed to a pause despite recent exchanges and an oil tanker explosion in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-07-26",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "A fragile pause in strikes is observed between the US and Iran, and Iran and Israel, though recent violations and threats of retaliation persist."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "date": "Jul 25",
      "text": "US military does not announce new Iran strikes for first time in 2 weeks",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5vaW92cWRJeWowUVJXZW5UQlpoS2JlQWFtTnpmd0xPNkdHWGlKV1M1eWhmUWg4d202ZC1tZkdDd29TX25LeU0yZDVUeVgyOUhYM0RKMlIyWmNrVVZKUnhIRjBQa0d6RlVIYzVXQ05R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1472
    },
    {
      "date": "Jul 25",
      "text": "U.S.-Iran Strikes Abate as War Enters Latest Crossroads",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxPdC1NV0I2aXEwczAtZVE4Y3FWNW1OVFRWT0k3M05xZ0d5V1FLZXNvWlJUVThTQXF4MnU0bndRMnBrV0J0b2d4ZF9FRl9CQzQxUGhxRmI5SHhYWnRkUmljVTc0ZUtCZlc3NEJtUEFreGg0U3ZOb0tQLXYtOURYLW1kdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1472
    },
    {
      "date": "Jul 25",
      "text": "Trump Holds Off on Major War Escalation Against Iran as Advisers Raise Concerns",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTFA4ZDFwek83TzF4YkIzeWJRVUo0Umg0QkpkVHZWSEVkOC1QTHNqLThmdHlPdDhEVjEza2xQVW9LeFktSFZ6N2Jza2xPSEdhUXVGSEJ1VUtGNUEtRmFvdk9FQ3gyYlFBbnVZckpxY2VtUkFTNUo4dDNNMVN4WQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1472
    },
    {
      "date": "Jul 25",
      "text": "Iran and Israel Exchange Strikes for First Time Since April Cease-Fire",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMidEFVX3lxTE4yaFRvZG5JOHJaV2ZsSllxcUx6WG9HSEdWVC1sQlVDZlRIUmxxb18xVWNmOEZCd0xKa3lraG80ZGw4NnVHcE5vODRwZzVNVkV4V3JscldjQUt0dU9zQ2swZjExcG9IR2E2dG5hb29HekFnYV8x?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1472
    },
    {
      "date": "Jul 25",
      "text": "Iran and Israel say they will pause strikes but warn of retaliation if ceasefire breached again",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE0xV3g2OWxXcVhxUjZOZUpZVThPSXNkbW1lcjdqaU5KRkctWHBwRTNOSWp1dy1zSE8xNHpUU1ZpRGVKMm5qVTBJMEx2Znp3d1pUaGcwVg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1472
    },
    {
      "date": "Jul 25",
      "text": "Iran, Oman make 'some progress' in talks over Strait of Hormuz navigation",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1472
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
      "perspective": "International Focus",
      "headline": "Middle East Conflict Dominates Global Attention",
      "summary": "The protracted conflict in the Middle East continues to draw significant international attention, with observers monitoring developments closely. The ongoing situation underscores regional instability and its broader implications.",
      "tone": "neutral",
      "latestSinceUpdate": 1449
    }
  ]
});

export default LATEST_SNAPSHOT;
