export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2760,
  "lastUpdated": "2026-11-21",
  "lastSyncedAt": "2026-11-21T16:58:12.936Z",
  "warDay": 267,
  "summary": "The Iran war continues with increased US casualties, ongoing US and Israeli consideration of new strikes on Iran, and heightened attacks in the Strait of Hormuz impacting shipping.",
  "lastNarrativeUpdate": "2026-11-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 3,
    "summary": "No active ceasefire or de-escalation efforts are reported amidst ongoing conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
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
    "nuclearIndex": 30,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Nov 19",
      "text": "Pentagon again increases the number of U.S. casualties in the Iran War.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2760
    },
    {
      "date": "Nov 19",
      "text": "Trump weighs new strikes on Iran as Israel presses for action, with officials indicating consideration of a new assault.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxOdzFPc1pJbDNCSGFPdEUxQjJ6ZTl0eGc2RlYwNVZ0WS1GRnVUWGNtemhtNENVcGFReklwbU9uSVFJcnBRSFJqTFVTX0hqc2VHSG16cUpiY2pCSW5JQ2hWa1J6RzZ2NENMQjQ2LTJNd3A5VFNWNGtFckRpaUFxdzlxN3JfVldfRmVmWE5SVg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2760
    },
    {
      "date": "Nov 19",
      "text": "Israel braces for a surprise Iran attack and warns of potential chemical weapons use.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE1RMEI0ZHEyNW04NnhCVVNRbE1KRE9FWVFOZ01UWWgyYnFMRXBaSGhsNU4wMEpOQzdYZnhQUGZmRnVyN21fUExuZHhJMFQ0T2JaNUM0M0FR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Ynetnews",
      "latestSinceUpdate": 2760
    },
    {
      "date": "Nov 19",
      "text": "US reports hitting IRGC Qeshm, while Iran claims a US drone was downed.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxOSVFjTXR2c2dUek5TbExaQzd1OUI5aFQxS3FsdUZPTktoTzE1Mmhwem5QQVQwQzN6cjh1WTVqMTI3OVhfVDlXazBCZi1qM01aajA4WXhPQnJvRU9uV0hrakRHU3BwaW5KN25ldG84MGI0TzJwMlU5Rk1uMERIcml0V1lJQTJzLXVBY0diOGtkeVBFeWhmMHQtY2YzT1VaMm91NEpGVkNoWGRKLVlYQlFyZNIBtgFBVV95cUxQV1lSbDdNZlJ2cm5FYVdNZ1pIdWc4UzZYQVlpVUlBOUZ5U3NRYU43QWlzek44X1dfdkhqTVBuaVNQUlFzM0NmcHNrcGE0YkN5b041U2g5eTdlTzEwQ2ZuTk5HSVJjcGxpX2t4U2ZqV21reENqODVjTDVUT0VqOEwtNzdTbV9nV1Q4YWtUTmhSUUxyUjdMNWhlWU8tVnNjUHI3NzdSRk5iRWluaF93enVZbU1WTnVRQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2760
    },
    {
      "date": "Nov 19",
      "text": "Tankers were hit in the Strait of Hormuz as Iran tightens its grip on shipping, with attacks reaching the highest level since the war began.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxPT25tR284UTNyRzU1TFlqY2E2MzVHSE1OSEFmdHdpc0g5UHJjd3FORUcwVHlwODRtTHMxX1d6YXdxY0trYk42b1FqMmJOaEFIRDVKY3Q2TFFOeEJ4OUFqakhaYmN1UlpNYU55R1lrVUxVMnhyYTdVSjBiY0FhTHZZT1pzRmRMbjFnUE9ZSUlPVVZoNzEzdkRXbW1JSVdfX3A0dExHYl9pQ0dDWVXSAbABQVVfeXFMTXdLRTZWdnFuc1hSNkhCUC0tRUh3a1dLMW5KTG5kSmFwaW8yQW1aVGNyV3dKT0x4YlVDMnhJTkk1eTZzWHFMZ2Q4ZnplVzRSUWRGY3NCVTl6eHlUekcxNVZCdDNkblJ2bWh0MGdPQ1U3UWhsSHlPQ1hQM2JMZk1Fc24wWF92ME1xLWpvUk1SZnViX0MwZUtWNmotakI4dGlZNzd0amZVZ3FGQ25CS2RmRmI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2760
    },
    {
      "date": "Nov 19",
      "text": "Air Force bombs entrances to an underground Hezbollah missile site in east Lebanon, according to the IDF.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxQMEgyRjR6Z0dZWTgzT0pneDE5TGhpNkp1RnRiejlVTXFtQjF1bDl4azNfZE5EcExycWVtWVdITlp5OWdTRTFaRFp6QU5fWUxhYWcyY2gxM2VnZV81R1FrQldTVWtWVk1LamgxNGJXN0hxSHYwMGtLU0l0OE1ILXl6UlZVZTVXWUl0cHNQODAzcmFacGl3S0ZEUTVZRUotMlI1aWlPRVprcUZMc21kaVRLdnFiN3DSAboBQVVfeXFMUEpTbXdqN1Q0OVRiWFkyb0Nnai1VVzdMakU4aHNJeWJNeWhfME9MSnBfUENmRkRkb0h5S2FETDdCQ3dSVEplVEJCdk9WTWZfZk9pWmFTM0FtRnZOUnlwemFTSFZMWktDMm5lUmRydzFrWWVzekFzRFBaMDk4YjdlWHlpS3d0UDNoLVFIbmNSUmxRZThJNGlTenVGWDdQRHQtZloyaXFxTFBvd19hVHFvWlBjM29BelpQeDVn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2760
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
      "perspective": "US/Trump",
      "headline": "Trump Considers New Strikes, Sees War Continuing",
      "summary": "President Trump suggests the Iran war will extend into 2027 and is reportedly weighing new strikes, stating that Iran is unwilling to agree to terms acceptable to him.",
      "tone": "defiant",
      "latestSinceUpdate": 2758
    },
    {
      "perspective": "Israel",
      "headline": "Israel Presses for Action, Warns of Chemical Weapons",
      "summary": "Israel is actively pressing the US for renewed strikes on Iran, with its spy chief visiting the US, and has issued warnings regarding potential chemical weapons use. Israeli forces have also struck Hezbollah strongholds in Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 2758
    },
    {
      "perspective": "Iran",
      "headline": "Iran Intensifies Hormuz Attacks, Claims US Drone Downed",
      "summary": "Iran has grown more aggressive in the Strait of Hormuz, maintaining unrelenting attacks on ships despite increased oil traffic, and claims to have downed a US drone after a US strike on IRGC Qeshm.",
      "tone": "defiant",
      "latestSinceUpdate": 2758
    },
    {
      "perspective": "Regional/Hezbollah",
      "headline": "Hezbollah Shifts Tactics Amid Incursion Fears",
      "summary": "Hezbollah is reportedly shifting to guerrilla tactics and drone warfare in anticipation of a potential Israeli incursion, while Lebanon has charged several members with recruitment and arming others.",
      "tone": "strained",
      "latestSinceUpdate": 2758
    }
  ]
});

export default LATEST_SNAPSHOT;
