export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1218,
  "lastUpdated": "2026-07-08",
  "lastSyncedAt": "2026-07-08T22:49:46.670Z",
  "warDay": 131,
  "summary": "The United States has carried out a second consecutive day of strikes against Iranian targets, including in the Strait of Hormuz, following statements suggesting a ceasefire is over.",
  "lastNarrativeUpdate": "2026-07-08",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 60,
    "summary": "A previously observed ceasefire between the US and Iran is now considered over following renewed US strikes and statements from former President Trump."
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
        "militaryPower": 80
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
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "date": "Jul 08",
      "text": "US military launches fresh strikes on Iran, with local media reporting explosions along the south coast.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTFByMXIxUFdtaTVQaE1MQzVoNzVRUXZQSHhRZDFGUDZxZGtEUDF3QXg3V0VkWWhHdk5WZFFTa190c3V1REdaYUZPOFpFc1NvSmZsdnZSZQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1218
    },
    {
      "date": "Jul 08",
      "text": "Former President Trump suggests the ceasefire is 'over' after the latest US strikes on Iran.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1218
    },
    {
      "date": "Jul 08",
      "text": "IDF says a Hezbollah cell was hit in south Lebanon and warns of further attacks if the truce is violated.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNYlBjdU1FYnBZbXk4YVNPLVV5VGk3cExERy1tTW5YWFBnN0hxMEtvYTRlaEhTU0VneVc2R0pYOFJhVlp6M2tMSlpRM05mdU9DaXVERXgwZ3BwVV9Yb2Z4OUxOa3BBTnV3anJRamVsX1VvdlZDX1J5ZnBBZ1NBbkRwdkY3Q3VPWUxtc3R0N2Z4ZnR1Z3V6RVRBU2o2dlFsdUE0ZFV3ZnFSVGJpRG9fZkozaVAyN03SAboBQVVfeXFMTUZxY3dBWUlzSHlnb1NQVFM4bmlJdGpCdGJMMDRVRUVUWHR2QTRhbm5Kank2LWo2d0lYQkZXYW1GZzVOVTdVWmJYb1V6RW1MV0g4WjQxUnhORERCZjNPcUt2VG9LWkQyclRzd2d5U2E1YXh6VXNxeFhoWW1makdLRHlxaWltWFN6SS1HbU1XLUQxUEVpTFRaQi1XUnV1Z2dyTlc1WXQtTWRBcEZySHFVTk9JMWdrRy1xNkFB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1218
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
