export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 790,
  "lastUpdated": "2026-05-27",
  "lastSyncedAt": "2026-05-27T01:55:32.730Z",
  "warDay": 89,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-27",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 15,
    "summary": "A ceasefire, if previously in effect or discussed, appears to have collapsed with renewed strikes and accusations of violations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
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
        "precision": 0.5,
        "aggression": 0.65
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
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
      "date": "May 27",
      "text": "US launches new strikes on Iran, targeting missile sites and boats in self-defense.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9WaDJGdEZ0YndpVVJXUlUydGhtZnZWVUFDdnR6MUdTSmhQNVMyZmRKUGMxZC0yTUNNTGw1Q2Q1M3VsNWVacFJ2X3cwd1BiOTd4b1BSYWxBM1Bodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 790
    },
    {
      "date": "May 27",
      "text": "Israel steps up its Lebanon offensive and Benjamin Netanyahu states Israel will intensify strikes against Hezbollah.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBUVm5zaXVRd1U3Q3E5ODI2dTBqS1lTemFnNWNMVU9OdkJFcDluTTdxVDR1UTVnX2FSUGVVRmxWRmNqTVJHTTRRelVEWXpCNDMzOEtEV2FjSE1EZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 790
    },
    {
      "date": "May 27",
      "text": "Iran's IRGC threatens retaliation after US strikes, and Tehran accuses the US of 'gross violation' of ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxOQW9zTEpyY3F6WDlTSUUxckdYVmJyVl8wd25PSDhmQ2JzbUhlbWpFNW9fWm1odmRmY0U3V2FuajVjMWJtQVJ3b3lFaHQ2MkhhU25sM1Z0RUU5V2tiNjJ3M0V1Y0hVWFRkYXRMbmR1ZmxIQ1hBSlRtbjVWZXY5elROejhGdThxV2wtaUl6OXhfTGpYM3lObURqRDlPUEt0UUV4Ni1BVnNZWF9GSEdHZjlQajZBS2t3UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 790
    },
    {
      "date": "May 27",
      "text": "Prospects for an imminent end to the Iran war fade as attacks restart and peace talks are strained.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTE1oNVZ3cG9SZTZkdWRhX0liS3BTYU41VFJuRTQyOUNxV3laM1o5LVhxWDRIWWd2RGo3M0d0Vlk0cGhTV1VlWWhBNmloTXBJWUNYTmxTN3ZISUVqRnZZeWxNYTdRVWpGVFB2eXV1czEwenVZbjg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 790
    },
    {
      "date": "May 27",
      "text": "Piper Sandler predicts the Strait of Hormuz will remain closed for months, leading to new oil highs, while the U.S. Navy guides ships through.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxPTTF6a1RJXzh0Q0RvQnBrQkJzZ2dxaEMzTW9QVnVsQk9KUER0VE1KSDdNZDhOcFFEdktIYjA1Y0xIV1RWUXJtazdyN25zYjE0dy1ORGNlWHFWNkFxWFRxVVVWaU9jaE5KbU1lQlF6M3F4UVV2OGkteVVpeVctZ2E3SkdObkFCZG9MQWtLaktJZWVwaWtOSFBoaVdGRnVlYXEzSmY3dGJfNTJPZ280Wm8xb292TV9pQnhYVGFzQ3paZTE4ZUXSAcgBQVVfeXFMTmU4aHpNSFRqZlp6Z0k0cDBpd0ZaTWdQd1VNeXBqcld4NDNPbjlGTWFXcXBGRnYwMFNaZy1uNlRYYWFFSVNVMlp1SFYzX3hNS3VzTDJPMHl5SnhiX3o4eEU0dFZDOWVpRDhfTkRtWExHTE5zV2VOOFkyUTV4eGdubVpWUHc4RDBYQndLM294bmQ5Q3h3Wkhnc1lxSFVSVW4xVUZDNGc5SGhsVEhDbmtPVm1oZ0RkNzBySktKM3RWOVVkMXg4bElISnk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 790
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
      "perspective": "US/Israel",
      "headline": "US and Israel Act in Self-Defense Amid Escalating Regional Threats",
      "summary": "The United States asserts its recent strikes on Iran were in self-defense, targeting missile sites and boats. Concurrently, Israel is intensifying its offensive against Hezbollah in Lebanon, with officials stating a need to combat drone threats and secure its borders.",
      "tone": "defiant",
      "latestSinceUpdate": 790
    },
    {
      "perspective": "Iran",
      "headline": "Iran Condemns US Aggression, Vows Retaliation for Ceasefire Violation",
      "summary": "Iran accuses the US of a 'gross violation' of a ceasefire through renewed strikes and warns of retaliation. Tehran reiterates its resolute support for Hezbollah, viewing Israeli actions in Lebanon as an extension of regional aggression.",
      "tone": "defiant",
      "latestSinceUpdate": 790
    },
    {
      "perspective": "Global Markets",
      "headline": "Strait of Hormuz Closure Threatens Global Oil Supply, Driving Prices Higher",
      "summary": "Analysts are warning that the Strait of Hormuz could remain closed for months due to the escalating conflict, potentially driving oil prices to new highs. Despite US Navy efforts to guide ships, the ongoing hostilities pose a significant risk to global energy stability.",
      "tone": "anxious",
      "latestSinceUpdate": 790
    }
  ]
});

export default LATEST_SNAPSHOT;
