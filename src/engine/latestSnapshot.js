export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1215,
  "lastUpdated": "2026-07-08",
  "lastSyncedAt": "2026-07-08T19:48:30.478Z",
  "warDay": 131,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-08",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 1,
    "durationDays": 60,
    "summary": "The cease-fire between the US and Iran has collapsed following renewed strikes and explicit statements from President Trump."
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
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 68,
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
      "text": "US military launches new strikes against Iran and revokes an oil sales permit after Iran hit three tankers in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxOT2tfRFIyMHM3Y3R0UHRSQ0xwNEdNX2pjVUV5QkFGZk4yLUpVeU9RN0RHLXpUYU5UMzVIZkNwOWV4Q2dKTnJYZVl6UzZadkxHYUVYNmUzYWxoUEo1S2pPRUkxWmFsMHhadUYyams3ME5TOTlVSHhuTmgtRVA4NGo1NlJIOF9ZOUU2dGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1215
    },
    {
      "date": "Jul 08",
      "text": "President Trump states that the cease-fire with Iran is 'over' and threatens more strikes.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1215
    },
    {
      "date": "Jul 08",
      "text": "Oil prices jump significantly following Trump's declaration that the deal with Iran is 'over'.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1215
    },
    {
      "date": "Jul 08",
      "text": "President Trump suggests the US may 'de-nuclearise' Iran 'without a deal'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQd2Z4M3hOV2ZEdjBGdnhaLWFnS3JVU3g2S3hDbnE4NnU4Vzkzb081elViZ3VBaEtxZlNmdktwb2c0eW96dldZT1pvSmR3N1RYWFE4UFpqZFIzSlNLMy0xM2dTTVllRmxGUFRMQ0xsbWZNX09vcmJJeHV0ZVlPNHg0NnBfS0JzQ01fa0dncGJKckd5S1dBSU5vXzFoUE5ZdUQxVUhDbG5KaDVaazhydjhERjU5SS1zSVXSAbwBQVVfeXFMUFRKTEtCaGQ3ZlV5MlZoQ05CeThIeDd0Sng5OTZ4aG1JNm8wTmhrbDZFZFJMclI0MUZpWS1jY0hSUHhFN2g2S2RfUndlaFVtMUk4TVl0RWZ1MWZFS3VOQUkwakpFZ3lLYTBGOXFQdkhOc0RDWHloVG1aQW8yQS1pN1NldjlUOXgweDY0aGtOMkxSQ25CdE9tdDN0VW9pOExVOHJvdFJEcjB0empwYTJYbE1PclZaRnNlNnBGSTA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1215
    },
    {
      "date": "Jul 08",
      "text": "The IDF reports hitting a Hezbollah cell in south Lebanon and warns of further attacks if the truce is violated.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNYlBjdU1FYnBZbXk4YVNPLVV5VGk3cExERy1tTW5YWFBnN0hxMEtvYTRlaEhTU0VneVc2R0pYOFJhVlp6M2tMSlpRM05mdU9DaXVERXgwZ3BwVV9Yb2Z4OUxOa3BBTnV3anJRamVsX1VvdlZDX1J5ZnBBZ1NBbkRwdkY3Q3VPWUxtc3R0N2Z4ZnR1Z3V6RVRBU2o2dlFsdUE0ZFV3ZnFSVGJpRG9fZkozaVAyN03SAboBQVVfeXFMTUZxY3dBWUlzSHlnb1NQVFM4bmlJdGpCdGJMMDRVRUVUWHR2QTRhbm5Kank2LWo2d0lYQkZXYW1GZzVOVTdVWmJYb1V6RW1MV0g4WjQxUnhORERCZjNPcUt2VG9LWkQyclRzd2d5U2E1YXh6VXNxeFhoWW1makdLRHlxaWltWFN6SS1HbU1XLUQxUEVpTFRaQi1XUnV1Z2dyTlc1WXQtTWRBcEZySHFVTk9JMWdrRy1xNkFB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1215
    },
    {
      "date": "Jul 08",
      "text": "The IDF is preparing for a possible resumption of fighting against Hezbollah.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1215
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (15 headlines)"
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
