export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 854,
  "lastUpdated": "2026-06-02",
  "lastSyncedAt": "2026-06-02T18:51:41.344Z",
  "warDay": 95,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-02",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 60,
    "summary": "No active ceasefire is in effect, with ongoing military actions and stalled negotiations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 38,
    "oilDisruption": 90,
    "tradeImpact": 56,
    "sanctionsPressure": 49,
    "globalPressure": 57,
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
      "date": "May 31",
      "text": "Iran ponders US peace deal; Lebanon-Israel talks underway.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxQV1MybzFWaVBnd3FjRGhNWEF3UVl5WnhSQjh0VS1lWDdxUVlJSjJ6SW5XRFRUTW1SakFTOEQzTWhxSTBRSEdBcURnOGRrTUVIazhWQ2hDQ3ZhblNCTGVIZmNuX21LdVF2UTFpQXZqa0MyV2RHc21aQnkweWs0UEZHcnE2ZV9BV29rQTk1UHgtOFlZbWtWNlNwdlVkNHlKMGZibE04Tm5RODNfQzY2ZUN4UC10TnN3Z3Z2YXlNNmxn0gHDAUFVX3lxTE5VSTZSN041Y1dnaEhjZlpzWUtTc0NPUGxhZUdnSlBySnhEX2NSbExobV9qQzAyUHFzZnFSazRaanVMV3BjWDdYVkdqY1RoSmtVb2JHRDkzeUZBVG1kWWx6VldneW9fVGE3aE8wcVVRUTExaG5PZUJoM2d2YWRkRDlIV2k0YXg1Y1ZldWxUT3RsWXZESkNMRnNQSkdGOGFib1QyNk5qWEZ1b2ZTbmRUTlNPOFFNRDdoWUtwYUtrMmJZbGJTQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 854
    },
    {
      "date": "May 31",
      "text": "Trump states indifference to Iran negotiations.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxPTFlQSkVmanF0UWw3S3VzeFh2M3phazE4WG5xSHNYNVFDSmo3MGxsSjNMbV8zSzgzbVg2Zkk2T2g1amd4eG93OGtmbkdXTzJSLTBMTWNZVWN6NVNYWkhXYjhLclRFajVMd2VzZTJjWVB2MncwWWNMaUVHcXlvVmNnSkx2QVpXSkhaMGcyb3Zn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 854
    },
    {
      "date": "May 31",
      "text": "Israel and Iran step back from threats after a day of tension.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 854
    },
    {
      "date": "May 31",
      "text": "UN experts warn against 'surging Israeli settler terror'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMizgFBVV95cUxNLTFRYUp5ZHhXTHJtSGNTOEdmdHJtX2ZHX0ZjXzRDVENENGh1cGtiWVhwc081b3JlZV9jWmdTX0RINEFBWGlnckxqVjhyWHdWZUdGTlhoRVdxVDJWSURWVW9WOVJCZW84TUJRcVFkRGRHV0RfSWVLZHEzYko4ekZ2NGM4dTlXUFlMaGNQOGpLZ0E4b3lkNFlycFFmM1lMVGNrNUhIMzlvaXlRVXhXVGhpbVpfZ2RFRUlfRFlkcXdSbTZlSGROdDU4ckdSblp0UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 854
    },
    {
      "date": "May 31",
      "text": "Israel holds off on striking Beirut after U.S. request.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxPQm0zc1ZESDFjVVJZcUZiOUhhQVFfUjdIV3V4b0FoQkJVb3Z3dHBfVEl1SGNGaUdsQTQxN2U3OWtUelQwbmdKOHI2VUZ5bjVMWWNSTDB5dTdmcFl2Vk1mUnVmVndOQ05hVTlfVzNYOEFmeFlYOXJFd05XMnVkTUFERWprWWZYOTlNaTdiMmctUllpNE91WXk1M0RRNzFTVXYt?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 854
    },
    {
      "date": "May 31",
      "text": "Rubio states opening Strait of Hormuz as first condition for talks with Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi2wFBVV95cUxPZUFGNk5XTkpHVlp0TDdwRlA1YmFsN0oxZWtZaE5JRF9aRmVJRS1VVWpmdldJVXY3LXlNN01QNDQwdi1tWnQ1R2N6ZjIxYmw3RVVTczFWQVd5dHU0Qzl2aG1NRkRYSlRPN1JfN01LQlVYcXQySmZkUnB2N251WTIyZkFGZE1FRmlrbVF1b29ucWFNbEhvazgyY05LSGZGMmVYSTNVQjdjSXRUMGx6MHBFZUpzYkxfVGpFMmtRcEZfQkUyOHc5cUVaVjJwU0xicHpYNTBrT0ZvY0lhUjA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 854
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (16 headlines)"
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
      "perspective": "US Policy",
      "headline": "US maintains military readiness and diplomatic engagement amidst Gulf tensions",
      "summary": "The US military asserts readiness for combat in the Gulf and conducts strikes against Iranian targets, while also guiding ships through the Strait of Hormuz. President Trump is actively seeking to finalize a US-Iran agreement, including on enriched uranium and the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 844
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran warns of 'utter ruin' while facing US strikes and blockade",
      "summary": "Iran warns of 'utter ruin' if conflict restarts, facing new US strikes on missile sites and boats, and a US military strike on a commercial ship attempting to breach an Iranian blockade. President Trump suggests Iran is 'negotiating on fumes' amid ongoing diplomatic efforts.",
      "tone": "defiant",
      "latestSinceUpdate": 844
    },
    {
      "perspective": "Israel-Hezbollah Conflict",
      "headline": "Israel expands Lebanon incursion as Hezbollah intensifies rocket attacks",
      "summary": "Netanyahu has ordered the Israeli army to expand its invasion and deepen its incursion into Lebanon to target Hezbollah. Concurrently, Hezbollah has launched persistent rocket barrages on northern Israel, utilizing a 'game changing' night-hunting weapon.",
      "tone": "anxious",
      "latestSinceUpdate": 844
    }
  ]
});

export default LATEST_SNAPSHOT;
