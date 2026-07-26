export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1476,
  "lastUpdated": "2026-07-26",
  "lastSyncedAt": "2026-07-26T18:35:54.898Z",
  "warDay": 149,
  "summary": "The US has paused direct strikes against Iran for two days to facilitate diplomatic talks, though regional tensions remain high with Iran threatening escalation and an oil tanker explosion reported in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-07-26",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 2,
    "summary": "The US has paused direct strikes against Iran for two days, allowing for diplomatic talks, though the situation remains highly volatile with threats of renewed escalation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.4
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
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
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
      "date": "Jul 26",
      "text": "US pauses strikes against Iran for second consecutive day, signaling intent for talks to progress.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1476
    },
    {
      "date": "Jul 26",
      "text": "Iran warns it will expand the war if the US resumes strikes, claiming Israel is pushing for renewed conflict.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxNTEU1blJ0ZjFodmdqYXM3MzdXeU9PbXcwUlNEUWx5aktWY29NRXRHOC1XS2F3QTFpMWhKMnVhX0dUMkh4TmNYVEl0cDN6ZGtHb0dOMzk0SlE3SkdOT1JzVmZJQjFHYUYyUzZjUkFKNU5tZ3JmbDZTRXVYdUNDZXVFWjg4cG5QQmZKcFhKZnd1a2tMMENKS05LNFZMUC1henZCRERMcUVTaXRoRGYyV0Z4UmRSdmgxNUR30gG-AUFVX3lxTFA1UEhCVnJkWDRyNHRNYUItcVpsWDRfVXgyR0xUX3VyVXdacXZKMWgxSmtmWFFpVjlFVW12NHplMDFhXzZpYVFmbTdQRmFJajFGenhOdWtDZzNraEV5NEZXMkFCeElTQUVDbW9FaFUzS1lWam81NG5QMnpQRkcxclpUd2dGTTNsa05IeTRwd1BTclM2Q0RoMmtxM0FsZ2NvQWdLd2lfNWwyQ3BwcnV1d3NNanFrQVBBY3lxSXVtNUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1476
    },
    {
      "date": "Jul 26",
      "text": "Iranian media reports an oil tanker exploded in the Strait of Hormuz after hitting a naval mine.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQRkIwVWo1SzBsNVdoNGotejR2elAwaHpqOER5endma1kwa1Y5Tk1Mb3J4QWxZbjVKR1NTMWhqZGpiR3ctUFo4alVyMmZ5dllqczBqNW9iR01ya2R2QTNPWGVuUGFZa19RREFUU3o2ZXk3YXpfZ3NDRFRQbDNweE90b19fTUZYVXJ6NVRmXzRBR3FSNzZmNW9IQmVEVkRjcmtweHFsVjJneExMREtaa3gtXzVFeVd2ZUpDNWg2RUV6Y00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1476
    },
    {
      "date": "Jul 26",
      "text": "Tehran states that a recent Ukraine attack on an Iranian vessel 'cannot go unanswered'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPSTd6UkF5eDBrZ2R4N2JFLU1iMzR5WER1bnNDUVpEOTJQdUlQM3RHcVItSEsxQzVmSDhFeThBLW9LTHZtQTBRT1hZU2JVRDZtSGhKd2gyMXkwRHplMlM2SUxmS2kwX1NrUEViZ3NEUVctZzJHWHdjZHNuNDNLMWdQWVc3R0dERDhzY2ZxalJsd0E5S1NWRkFFb3plbzA5Ml82R1ZacENwRjIwSHVMS3E3N3FUYjZqcGM3YWZXSdIBwgFBVV95cUxQa2FmQnZMRTI0R2lSdWFacXFYeFBCZnhYNlJ4ZE1aU1YwVThJVGRJSGVVX3F4S1l2UGpkSFA1czQ5X1Q5a2Q2dkIxOW1Ld0NtX1hNQnBFZ2VhVVhuVjJ6MDFQU2pXVkY4aUx1NjhuQWc5OXRPX1FrWHZVUlIyN0d2SVBGN2U1cFN2b1lGM2tySjFidDR1RWIwU0R3WkMtQzl6Y1BuVnc5SlEtS1BMM05aY1B3QmpTQTRwQnRsckljRklmUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1476
    },
    {
      "date": "Jul 25",
      "text": "US military does not announce new Iran strikes for the first time in two weeks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5vaW92cWRJeWowUVJXZW5UQlpoS2JlQWFtTnpmd0xPNkdHWGlKV1M1eWhmUWg4d202ZC1tZkdDd29TX25LeU0yZDVUeVgyOUhYM0RKMlIyWmNrVVZKUnhIRjBQa0d6RlVIYzVXQ05R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1476
    },
    {
      "date": "Recent",
      "text": "Israel is reportedly obstructing Hezbollah's takeover of pilot zones in southern Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPajVLVGVJMUZHcDRsVUpjaHlqYW44d01HMUtWSFpUdW1qaExhaVVmV2ozclNiM3A4V3lvbzgyMl9EWUY4SWRRbDZuTU9qaU9PZzNwRDVhcjhKcjFLTGRqQWYyQnJ3VEdZc2dKZzF0ZDhwSWdhcnRQUTB0dUd2UThiR2pENV9FUE94eUVxT1hFM05KTS0tVVBkZmtlNWdSQUE4MkV5VkdiVUl3dW9hekFR0gG0AUFVX3lxTE5EZzc2NG1jdXhmMWRaalNxTDR2MUFCdzBlOGFWSk1rT2MyY1V0Y1pHUDluWHh4UDZ1V3NBYThCZXpPc1EtSHdXVS1nNXZUVmR0WVlOVml6dlpQTHVqcHhrYndpYTVCaW9SaUxma3Z5azRJZnZvTFItdk9HeFhEZ1kzZG1scDZQRzVsZjA1ejdqMzQzU1c4TlJVUmJnUW8zQzV1Y1luckxueWpFcjAzRm1MT1lDRg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1476
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
