export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 971,
  "lastUpdated": "2026-06-14",
  "lastSyncedAt": "2026-06-14T21:53:29.392Z",
  "warDay": 107,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-14",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.8,
    "durationDays": 3,
    "summary": "A US-Iran peace deal is reported as complete and will be signed Sunday, leading to the reopening of the Strait of Hormuz, despite recent Israeli strikes in Beirut."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.3
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
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.3
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 30,
    "oilDisruption": 10,
    "tradeImpact": 0,
    "sanctionsPressure": 48,
    "globalPressure": 40,
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
      "date": "Jun 12",
      "text": "Pakistan announces US-Iran ceasefire 'now in place'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQNEFmTFFKRUowR2l3c1Y5cFJlSGFjWDgzeDljakxTUERYa196SWRqMkx0eWhPYTdud1h5dEVvRzU5dkxRNUxIWjBUUElfRGhQQ25pU3ZJLXNlMTNqZWFaRmlaa05qRXJick9SVGVKSjJQanJuSzRLYzBnWU51UVRETVd6MGFMY2R4aHU1M1J3ZWl6ZnoxY2hJVndKMTJNMWxMYmJ3bm1OdFBEb0NWOEFCdENkOXRtX2tRb090ZlMyOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 971
    },
    {
      "date": "Jun 12",
      "text": "US and Iran state an agreement is close, but questions remain.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTFBmSE93eGkwYURDS3JDRWVOWEhTSjRSbmE0bThZeTdDak1qdkh0Q08wbnF6aTdKYTFBTGJWYk84VkFLbEFkMUpKSE9jYjR3ZmJjM2Vrbktpa2dnY0FqQTNIbGx2ZS1vU2l6M1hra3RoM3RoMExQeWpr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 971
    },
    {
      "date": "Jun 12",
      "text": "Israel strikes Hezbollah targets in Beirut suburbs, killing at least three.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 971
    },
    {
      "date": "Jun 12",
      "text": "Trump condemns Israeli strike in Beirut, warning attacks threaten the US-Iran deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTE5ZMkJzclp6eXBUU1dnMDVfRWZnYTBSNVRiSEhFZFVyU2RpdGVIa3JDeXNkRXhoN1ZQcklLU3dSN3RVOHBQQk1NQ253SFZiV0VxRHJ3OTQzM3NRYS1FVm56M1FUOUdjM2ZxYzJhdXhEcHBqT2taV3UwY3p3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 971
    },
    {
      "date": "Jun 12",
      "text": "Trump says US-Iran deal is complete and authorizes removal of Navy blockade of Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTE1lN3kxUnRDcG5rNVdsdGtnSDE3dWZuZVhlVWp2N2dkM0VZeGNDX0dXSmdtdFRjUFBEWEdRelktYmRUU25tUmFjUEVqWnQ2Z21iRzlIbjFrSl9fS3FSMVRWNDluOWdCQTRuWTZEOFBNQms2WG1wNkRQRWpoZlJGUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 971
    },
    {
      "date": "Jun 14",
      "text": "US military making plans to secure Iran's nuclear materials if a deal is reached.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTFB4cWZMcjNVMnRkWlJ6eGlEV3ZndVBtRFZadXg1aUxUYnNpZGdZb3hrZGJzS0FYVzFRUkRUT0wyLW40Q3ktN3lhUG1mcm9KOEU0ZTZ2RVNOZmFWRDc2RHhMOWUwQWt2SWJqWjdIOThNbkkxUFRGMzhid3p5TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 971
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
