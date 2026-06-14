export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 972,
  "lastUpdated": "2026-06-14",
  "lastSyncedAt": "2026-06-14T23:20:13.608Z",
  "warDay": 107,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-14",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.6,
    "durationDays": 3,
    "summary": "A peace deal between the U.S. and Iran has been announced, aiming for a permanent end to military action, but its stability is immediately threatened by Israeli strikes in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.4
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 45,
    "oilDisruption": 20,
    "tradeImpact": 15,
    "sanctionsPressure": 54,
    "globalPressure": 52,
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
      "text": "Iran Update Special Report published.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxPZ21WcHlHLVY0anVsTDZyZDM4Y1ZVd3RLN0NjM1o0ZnRub1JDWFpTejlyZ29IOVZadzBlR0hfZnFmNDFoWno3Q25WTV92Y1hjb0xQaEZ5VXdCLXJiOTlTMUdhUGcxdWNZUGNmSWU1QmNqMEt5dmJzS2h2Wmxlc2Y4b2pRbUlyVGlUc3ZtZmxKbWxDbW5i?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 972
    },
    {
      "date": "Jun 12",
      "text": "U.S. and Iran confirm a 'peace deal' is in place, with Trump announcing an end to the war and the reopening of the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQNEFmTFFKRUowR2l3c1Y5cFJlSGFjWDgzeDljakxTUERYa196SWRqMkx0eWhPYTdud1h5dEVvRzU5dkxRNUxIWjBUUElfRGhQQ25pU3ZJLXNlMTNqZWFaRmlaa05qRXJick9SVGVKSjJQanJuSzRLYzBnWU51UVRETVd6MGFMY2R4aHU1M1J3ZWl6ZnoxY2hJVndKMTJNMWxMYmJ3bm1OdFBEb0NWOEFCdENkOXRtX2tRb090ZlMyONIBxAFBVV95cUxPRlpGX2ZCbWxibFBiaWdVSzFnZjdqMDN0d1dVNk1nT3MxTFE1ZDlGS1hhZ1BXZ3ZkN0RDRWs3Tk1rVnNDbXJ0dkNsUHFjUDNsVEtHNXZiNGFuUVFFdk54SVIya0MzRG84Uy04RkNXWGJiT1FYWVJ3QzNjRmVrcVhfOUJ4MHRheVR1ckpGZmVHZTNMbzlTY2JFY3p5R2FKeXcybFIwODMzOGRHeXUzSC1yS0IxeDZIeG5PYXJUdUprT3M4bHNI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 972
    },
    {
      "date": "Jun 12",
      "text": "U.S. crude oil falls nearly 5% following the announcement of the U.S.-Iran deal and the reopening of the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxNdDFKTnBkSnVBZkNqUDEtZVJlVHJnLWJ4b1lYSzBDTy1ONlE2R2pPSEZvRFBGd1NJU3RuYlB2SjMxSEJoaEtlcS1XY25udmhFRTk1S3d2dG00VU1tVjJLcGdaaXVpWGdvTGMyZWxQZEhJQU5QWlZUQlhLVFpubm5zV25fMTIyZ1XSAYwBQVVfeXFMUEdNYTJLQlJUYUFfMWVlZWZzRE1zc0pIbV9VRWNOVktYS0o2LXpKT3RwZVp3RVpqT0dpTU1ZOS1rd1lDck5Fc0EzNm84OUJmVEZmU0lxbEF4bzRocHkwTHpRbEZldjFhRGNNaUFGYl83MTZBQk45RGs2VWJHQlR5TktKRjh2ZG1iR2VHdzY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 972
    },
    {
      "date": "Jun 12",
      "text": "Israeli military strikes Hezbollah targets in Beirut, killing at least three, raising questions about the U.S.-Iran peace deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBaZVE2UC11VHhpR2ZqaHlpQ2M4dlBxc1VPX2M1ekdRRXN6blAzcXdHbE5EV2JOYkkyU2lpWmRNeEgzYVVsd0tIYmthcTg3Z1FnSFppSEZnWVB0UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 972
    },
    {
      "date": "Jun 12",
      "text": "U.S. military reportedly rushed to prepare a ground mission to capture Iran’s uranium, but Trump paused it, with plans to secure nuclear materials if a deal is reached.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxOa0V0ay1reHR2RFF3YjFjejU0YVVqSTR6TWNBVTlQb2FJNDFEeGFxeVBHTjFQMTNhQ1hURVBtSXNHZEFUTm1jN0x6YUJlY2Flajd4TGJwTzhLc0tsVllESHJ1T2JNQ0RiQS0tVnFtcUtCRldoV2h3NFByUHhhVWRqR3hZVEE0djlIQkJF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 972
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
