export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 968,
  "lastUpdated": "2026-06-14",
  "lastSyncedAt": "2026-06-14T17:51:55.932Z",
  "warDay": 107,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-14",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 100,
    "summary": "An emerging US-Iran peace deal is in question due to recent Israeli strikes, despite US efforts to secure an agreement."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 68,
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
      "date": "Jun 13",
      "text": "US and Iran officials are reportedly near agreement on a peace deal, with a virtual signing planned.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE1KUG9TR2l1U0VzcHNOR29kN3Z3RjJVWUJhNnVrS2ZfR0ZJNi1yZEtSZDJuUExGY0cyYTY5QlBxdnluRmdwU0NkQ1FJMWpOVURzeGpiSkZXaTZ2NkRMNFZ0N3ZaT3NGUGVZZ1dWR2N0YUE2bDRhRTBJ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 968
    },
    {
      "date": "Jun 13",
      "text": "Israel conducted strikes in Beirut suburbs, killing at least three and escalating fighting with Hezbollah.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 968
    },
    {
      "date": "Jun 13",
      "text": "Trump urged calm and condemned Israeli strikes, warning against jeopardizing the emerging US-Iran peace deal.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 968
    },
    {
      "date": "Recent",
      "text": "US military says it downed Iranian attack drones.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi5gFBVV95cUxOWXZFVFVpaWpJR2d1WDM0eklhWVF4SjllZ1RkdXVvTmY4N1VySzRQd3k5TGdHdGQtQ0RnLUthcXRQakdxcUtxejFSblFLWlRQODhIaUtKN2dGcUpDX01LTVdERXJ3WnFMckRwWS1qSjdQaUxCVThCMzExOXNHcl8yM3oyX3ZmdnlITEJsUjl6RGpaZFp5NjlZdFNKcmRLUEF1MXY2ZkhrdTlvZ0lpODZaR2RyT0ozYUhRdUFJaWg5TVkxb0pmM0htTE5LLUVmM0pOcHRLWGVndmJGNGJ4UWpWc1oyaXFRUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 968
    },
    {
      "date": "Recent",
      "text": "Satellite images show more than 50 Iranian military bases damaged in US strikes since the start of the war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE5wXzRnSGZYakdxem5yWWkyRWthWG1ydHJzakd6Ri1IY09ZcG1GOEN2OWhUXzBIM0NXOVBaUEFDYnVMRXhfVG01blVWTF8zeVlHMnp5QVY3S2stZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 968
    },
    {
      "date": "Recent",
      "text": "US military rushed to prepare a ground mission to capture Iran’s uranium, but Trump paused it.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxOa0V0ay1reHR2RFF3YjFjejU0YVVqSTR6TWNBVTlQb2FJNDFEeGFxeVBHTjFQMTNhQ1hURVBtSXNHZEFUTm1jN0x6YUJlY2Flajd4TGJwTzhLc0tsVllESHJ1T2JNQ0RiQS0tVnFtcUtCRldoV2h3NFByUHhhVWRqR3hZVEE0djlIQkJF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 968
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
      "perspective": "US/Trump Administration",
      "headline": "US-Iran Deal Imminent, Peace Prospects Rise",
      "summary": "The US administration is optimistic about an impending peace deal with Iran, with President Trump announcing it will be signed on Sunday and that planned strikes have been called off. This agreement is expected to lead to de-escalation and the reopening of the Strait of Hormuz.",
      "tone": "neutral",
      "latestSinceUpdate": 962
    },
    {
      "perspective": "Iran",
      "headline": "Cautious Optimism on US Deal, Claims Lebanon Truce",
      "summary": "Iran acknowledges progress on a deal with the US but remains cautious on the exact timing of its signing. Concurrently, Iran claims a truce in Lebanon that includes an IDF withdrawal, despite ongoing Israeli military actions.",
      "tone": "strained",
      "latestSinceUpdate": 962
    },
    {
      "perspective": "Israel",
      "headline": "Concerns Over Iran Deal Amid Continued Lebanon Strikes",
      "summary": "Israeli officials express concern that an emerging US-Iran deal could strengthen the Iranian regime and Hezbollah, potentially undermining regional security. Israel continues to carry out air strikes in Lebanon and is preparing for a potential ground advance against Hezbollah.",
      "tone": "anxious",
      "latestSinceUpdate": 962
    },
    {
      "perspective": "Economic/Energy",
      "headline": "Strait of Hormuz Disruption Persists, Impacts Oil Flow",
      "summary": "Despite US efforts, the Strait of Hormuz continues to experience disruptions, with little oil flowing through the critical waterway. This ongoing turmoil is cited as a factor contributing to high gas prices, with political blame being assigned.",
      "tone": "skeptical",
      "latestSinceUpdate": 962
    }
  ]
});

export default LATEST_SNAPSHOT;
