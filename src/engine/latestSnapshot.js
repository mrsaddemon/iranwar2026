export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 553,
  "lastUpdated": "2026-05-08",
  "lastSyncedAt": "2026-05-08T06:05:32.880Z",
  "warDay": 70,
  "summary": "Direct military exchanges between the US and Iran continue in the Strait of Hormuz despite ceasefire claims, while Israel conducts strikes in Beirut and targets Hezbollah leadership.",
  "lastNarrativeUpdate": "2026-05-08",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 15,
    "summary": "A ceasefire is nominally in effect but is frequently violated by both US and Iranian forces, with ongoing diplomatic efforts to formalize an end to the conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
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
      "date": "May 08",
      "text": "UAE reports intercepting attacks following US-Iran exchanges.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 553
    },
    {
      "date": "May 08",
      "text": "Trump administration pauses US efforts to guide ships through Strait of Hormuz due to blockade.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibEFVX3lxTFBjQmlHemxOdXowdXdPY0hCMzZnTXhJdnhIYkZxLUhaTng2anQzWmdhV1hUbFZpUndvZ3FCVHNBRklLTzhib1ZQU1l0SGJZVTlpeWMweUtTS2xuMTE0UXNTbXp3bjJRYkZTRGJyNg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 553
    },
    {
      "date": "May 08",
      "text": "US and Iran trade fire in Strait of Hormuz despite an existing ceasefire.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 553
    },
    {
      "date": "May 08",
      "text": "Officials indicate US and Iran are nearing a one-page memo to end the war.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 553
    },
    {
      "date": "May 08",
      "text": "Israel launches a strike on Beirut, while the US reports attacking an Iranian ship.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 553
    },
    {
      "date": "May 08",
      "text": "Tehran claims the US violated the ceasefire by targeting Iranian ships.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQWmMwcHRNRzF3SVdqU3A3dFJpS0YyUFp3aFhncHVDZ0FQd0xXSWJwdTFteUEya1d0VEkxazRtbkNyMi1hVV9SdTBBdktJM29GaHlOdThaS1M5cUlwdHo2RTFiSDNZLTlJb3VTTTFYdlVjemlYX2ZaWm9ubUhLOTdTUGdnMDZpVFh3RHlvbWZLODM3ZmlDeVFMRkJ0RlZNSDIzNWVNc3Z4UlpScGZheHdteTl2YUxlYnotWDFJ0gHAAUFVX3lxTE85dVRselp4VWZ0QXpJTXJTaEs2aS1tOUdGbXJjdVhiSXZ0TkxlMFI1RUdmZFVENFhQSjRQYk45ZzR4X2lpcU5XOHZwQ0JEcUtHaDZIS0FXNmlScjhhNUdmLXAwNmpqMkRPS3RTNGR2dFpHT3doWGVyTHRGUklYMm5qcDdjRTJKREQ2YmptMVctVVRsc08wUlNDRFBwOTFORUtaVTFSY1R2NDNJX28zZ3pLYzdNcXlWOGtwNVdpZ1Zxcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 553
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
      "perspective": "US Government",
      "headline": "US Responds to Attacks, Seeks De-escalation Amid Peace Talks",
      "summary": "The US military has conducted 'self-defense strikes' against Iranian targets following attacks on its warships in the Strait of Hormuz, while simultaneously asserting it does not seek escalation. President Trump indicates a peace deal with Iran could be imminent, with Tehran reviewing the latest US offer.",
      "tone": "strained",
      "latestSinceUpdate": 551
    },
    {
      "perspective": "Iranian Government",
      "headline": "US Violates Ceasefire, Iran Responds to Aggression",
      "summary": "Tehran accuses the US of violating the existing ceasefire by targeting Iranian sites and ships. Iran maintains its right to respond to 'unprovoked attacks' in the Strait of Hormuz, while also considering a US peace deal proposal.",
      "tone": "defiant",
      "latestSinceUpdate": 551
    },
    {
      "perspective": "Israeli Government",
      "headline": "Targeted Strikes in Lebanon Test Truce, Counter Hezbollah Threat",
      "summary": "Israel has launched precision airstrikes in Beirut, targeting and killing a senior Hezbollah commander, marking the first such strike since the Lebanon ceasefire. These actions are framed as necessary to counter Hezbollah's continued operational capabilities amidst the broader regional conflict.",
      "tone": "strained",
      "latestSinceUpdate": 551
    }
  ]
});

export default LATEST_SNAPSHOT;
