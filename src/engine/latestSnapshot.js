export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1219,
  "lastUpdated": "2026-07-08",
  "lastSyncedAt": "2026-07-08T23:53:37.914Z",
  "warDay": 131,
  "summary": "The United States has launched multiple new strikes on Iran, with President Trump declaring the previous ceasefire over, while tensions also rise between Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-07-08",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "The previous ceasefire between the US and Iran has been explicitly declared 'over' by President Trump following new US strikes and Iranian actions in Hormuz."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Jul 08",
      "text": "US forces carry out 'additional strikes' on Iran, with local media reporting explosions along the south coast.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQd2Z4M3hOV2ZEdjBGdnhaLWFnS3JVU3g2S3hDbnE4NnU4Vzkzb081elViZ3VBaEtxZlNmdktwb2c0eW96dldZT1pvSmR3N1RYWFE4UFpqZFIzSlNLMy0xM2dTTVllRmxGUFRMQ0xsbWZNX09vcmJJeHV0ZVlPNHg0NnBfS0JzQ01fa0dncGJKckd5S1dBSU5vXzFoUE5ZdUQxVUhDbG5KaDVaazhydjhERjU5SS1zSVXSAbwBQVVfeXFMUFRKTEtCaGQ3ZlV5MlZoQ05CeThIeDd0Sng5OTZ4aG1JNm8wTmhrbDZFZFJMclI0MUZpWS1jY0hSUHhFN2g2S2RfUndlaFVtMUk4TVl0RWZ1MWZFS3VOQUkwakpFZ3lLYTBGOXFQdkhOc0RDWHloVG1aQW8yQS1pN1NldjlUOXgweDY0aGtOMkxSQ25CdE9tdDN0VW9pOExVOHJvdFJEcjB0empwYTJYbE1PclZaRnNlNnBGSTA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1219
    },
    {
      "date": "Jul 08",
      "text": "President Trump declares the ceasefire 'over' after latest strikes and Tehran attacks in Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1219
    },
    {
      "date": "Jul 08",
      "text": "IDF says a Hezbollah cell was hit in south Lebanon and warns of further attacks if truce is violated.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNYlBjdU1FYnBZbXk4YVNPLVV5VGk3cExERy1tTW5YWFBnN0hxMEtvYTRlaEhTU0VneVc2R0pYOFJhVlp6M2tMSlpRM05mdU9DaXVERXgwZ3BwVV9Yb2Z4OUxOa3BBTnV3anJRamVsX1VvdlZDX1J5ZnBBZ1NBbkRwdkY3Q3VPWUxtc3R0N2Z4ZnR1Z3V6RVRBU2o2dlFsdUE0ZFV3ZnFSVGJpRG9fZkozaVAyN03SAboBQVVfeXFMTUZxY3dBWUlzSHlnb1NQVFM4bmlJdGpCdGJMMDRVRUVUWHR2QTRhbm5Kank2LWo2d0lYQkZXYW1GZzVOVTdVWmJYb1V6RW1MV0g4WjQxUnhORERCZjNPcUt2VG9LWkQyclRzd2d5U2E1YXh6VXNxeFhoWW1makdLRHlxaWltWFN6SS1HbU1XLUQxUEVpTFRaQi1XUnV1Z2dyTlc1WXQtTWRBcEZySHFVTk9JMWdrRy1xNkFB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1219
    },
    {
      "date": "Jul 08",
      "text": "Khamenei funeral draws millions amidst ongoing conflict and US strikes.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1219
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
      "perspective": "US/Western",
      "headline": "US Retaliates Against Iran for Hormuz Attacks",
      "summary": "The US has resumed military strikes against Iran, citing retaliation for recent attacks on commercial vessels in the Strait of Hormuz, following a clear violation of a previous ceasefire. Washington officials indicate talks are intended to continue despite the strikes.",
      "tone": "defiant",
      "latestSinceUpdate": 1206
    },
    {
      "perspective": "Iran",
      "headline": "Iran Threatens Talks Amid US Strikes and Regional Tensions",
      "summary": "Iran has threatened to halt ongoing talks with the US after trading strikes, while also mourning the funeral of its leader amidst regional tensions. Iran has been accused of targeting neighbors and commercial vessels.",
      "tone": "defiant",
      "latestSinceUpdate": 1206
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Israel Prepares for Renewed Fighting with Hezbollah",
      "summary": "Israel continues to conduct strikes in Lebanon against Hezbollah targets and is preparing for a potential resumption of broader conflict if a truce is violated. IDF commanders assess the Lebanese army is unlikely to effectively eliminate Hezbollah.",
      "tone": "anxious",
      "latestSinceUpdate": 1206
    }
  ]
});

export default LATEST_SNAPSHOT;
