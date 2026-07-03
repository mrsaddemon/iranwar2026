export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1146,
  "lastUpdated": "2026-07-03",
  "lastSyncedAt": "2026-07-03T05:01:42.739Z",
  "warDay": 126,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-03",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 5,
    "summary": "While a ceasefire is reported to hold in the Strait of Hormuz, broader military engagements between the US, Israel, and Iran persist."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
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
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 50,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "date": "Jul 01",
      "text": "Iran Update Special Report released.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxOLVdjbGMxNzNIN0lpak9kdDNFQ2djWmhSYmh6Y2Y4SHpCbXdYWkRNMGlkSFBOOWtxSUNrSDFCTDM2N1VwTEt3ZnBJUmVaaUY1YXF1YjFacWg3UWNRUFlZSUhDTkN3Y3Z0Nm53QVY2T2xYUFJGbElEZHMteUMtYm9IY1JUTGZPUDRyWXpqYkpVZ2lTY0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 1146
    },
    {
      "date": "Jul 03",
      "text": "Tehran warns of a ‘decisive response’ to any US ‘miscalculation’.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQREgyVFJpTkVsbGppb2xIM2RJR0FIT3docXJJUUV3SjNNRDh1dGNoa3pNNVotZmxmT29HenhnemVzdkVVckI2ZE5vTzFKRWNFdDM4MGM3LXNHYWw5WGM3dkVSNjROQk9VclBUYlV0SGJfYm9UOU1iN091R0F6c3pMajlFR0k1QzVDNFFhSEtsY2xMTThCZVp1YzJUdHhjdk1WZG1xT1lUM0pUOWEyalc3Z0lycnBBS0XSAbwBQVVfeXFMTU00cjZnSmItS243WE9xRWxVVVFjZHE4NEdOQ203ci1QOWZqZVB5bmY5S3ZneHBaZDlQSFlXS3hxNmExZmxhTjZSbjEwTDVkN2dnYjd0VWN5aDhnWXpUaTg0dEdrYUVlRm5CM3JET0hVTlp3ZWpGZW5oSDMzQmdtS2tWU0phcEdFZnp0dWEyYmJJSWp4TVI5cnNHVlVHWE9wT0ZsSGVYckxnRmxUY05QQkNhMmt3LVo3SWZKaUg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1146
    },
    {
      "date": "Jul 03",
      "text": "Qatar's Emir discusses Iran talks and Lebanon ceasefire with US envoys.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxPMFhZUzZXdk80QVo2X0dLeWNKd0R2VGd5dDJqYmNrUGt1VGFrNjdNZnJXV3JSdU9TZENVVXZTV0RZWC1lZ0ZRUjRVSTBhdGw2cDNEcHljUHlJSVFvVEV5X0kyT3hFa0VvT0xfWXF3dE9YV2k2NnR6TmpkZXNiY1ptaDR0b3M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 1146
    },
    {
      "date": "Jul 03",
      "text": "Tehran rejects third-party intervention for the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxQeFZlSzkxMFJqN2I3LUtJb3hKUkt1UlR1Y29OUTdGdlV0VTFkV0JYdHRnZUFIMEFaQlp6RDVERFdaWXNVaFlWYWNhZXlodmw2TG5VeEJUczhvMElwa295QVItQ1FPRGtaMjZLd2U5eVJGQ3VtZzR6WVRWV1lNdmdWUnJVMlhQTi1KLVpFemY3MUZKem1yME5RaWhLUm1FTGY4bVZhcGU2LTJxWE1fSksw0gG0AUFVX3lxTE4tQ2pUSGw2N3UwdnBSSEczVl94ZU9iQWpnRzZCYnBBZDF0ZGxRei1iV3ZPUUVUYi1DWnR6a08xbjZsQzJQRmpEbTM4Vzh5TlhXU2RKRFlCQVd6eXlTZmgtOHdmRTluaURtaTRfR2NaSV9ETE0zZkEzd2drT09mbllXSmJjZktOazYwQzczd0dfNHU0VGNjTUhaRGJDc3ZSd0hNRjhnV2szb01RR3BiSTJnUlN3SQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1146
    },
    {
      "date": "Jul 03",
      "text": "Trump's negotiators arrive for talks with Iran.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1146
    },
    {
      "date": "Jul 03",
      "text": "Iran claims to have targeted an American base following fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1146
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
      "perspective": "Iran's Defiance",
      "headline": "Tehran Rejects Intervention, Warns of Forceful Response",
      "summary": "Iran maintains a defiant stance, rejecting third-party intervention in Hormuz and warning of a 'forceful response' to any US 'miscalculation'. Its top negotiator asserts the country is ready for war despite ongoing peace talks.",
      "tone": "defiant",
      "latestSinceUpdate": 1145
    },
    {
      "perspective": "US/Israel Military Action",
      "headline": "US and Israel Conduct Strikes Amid Regional Tensions",
      "summary": "The US has conducted strikes in Iran following threats, while Israel also reports strikes within Iran. Israel's PM states the IDF will not withdraw from south Lebanon as long as Hezbollah remains present.",
      "tone": "strained",
      "latestSinceUpdate": 1145
    },
    {
      "perspective": "Strait of Hormuz Security",
      "headline": "Hormuz Tensions Escalate with Warnings and Seizures",
      "summary": "Iran has issued warnings to oil tankers regarding approved routes in the Strait of Hormuz, with reports of seized ships and stranded tankers. Saudi Arabia has increased oil shipments through the strait amidst the heightened security concerns.",
      "tone": "anxious",
      "latestSinceUpdate": 1145
    },
    {
      "perspective": "Regional Diplomatic Strain",
      "headline": "Peace Talks Inch Along Amid US-Saudi Rift",
      "summary": "Peace talks between Iran and the US are progressing slowly, while the ongoing conflict is creating a wedge between the US and Saudi Arabia. Qatar's Emir is involved in discussions regarding Iran and a Lebanon ceasefire.",
      "tone": "skeptical",
      "latestSinceUpdate": 1145
    }
  ]
});

export default LATEST_SNAPSHOT;
