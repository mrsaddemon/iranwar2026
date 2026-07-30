export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1521,
  "lastUpdated": "2026-07-30",
  "lastSyncedAt": "2026-07-30T06:09:12.620Z",
  "warDay": 153,
  "summary": "The US and Saudi Arabia have conducted airstrikes in response to Iranian attacks, while Iran urges its citizens to stand firm amidst ongoing hostilities and regional tensions, including concerns over the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-07-30",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 39,
    "summary": "No active ceasefire or de-escalation agreement is reported amidst ongoing hostilities and retaliatory strikes."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.55
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 80,
    "oilDisruption": 75,
    "tradeImpact": 68,
    "sanctionsPressure": 63,
    "globalPressure": 80,
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
      "date": "Jul 30",
      "text": "U.S. and Saudi airstrikes are reportedly dragging more countries into the fighting.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1521
    },
    {
      "date": "Jul 30",
      "text": "The US military thwarted an Iranian missile attack targeting American troops.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTFBpdXlHNERocU1LNXp6UjVDekNjTVhRaHNrSmY0Q0lmRlNrM21GamlxQ21aeVkzLTlHelhJVGFiTEpsRGw0eDNXMU5MOUNDODRjYXI5SXNFeUlURlRxYWdoT0p0WEkxNXlLOE9ZVXJkX3RvS3U2bkJF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1521
    },
    {
      "date": "Jul 30",
      "text": "The US launched 'powerful' and 'heavy' strikes after an IRGC attack on Jordan and attempted attack on American troops.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBTU0lxSXpCeTVrS1JXemlVdmNyZ2NjaDhpWFhCY2hwa2pmdk5yblB4M2FBN3cwQU9RTWJCRTJCTDFGaHZEZC1ENUEwdGFCLUhrY1VrZU1GVHhOZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1521
    },
    {
      "date": "Jul 30",
      "text": "Ships stuck in the Strait of Hormuz are raising warnings about a 'super-spreader' biodiversity threat.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMizgFBVV95cUxOamZXVXF1eF9QZDF2QlpJRGNhOWVkb1hQX2RmUWFjV1hOX0VCcHJMUXpnbk14ck5qdldvSXpNV2xzWU1QbEtwRUhfV25kZWl3QmhsbDlPdmJfZW9yUWlLX0t3NFkxMUd6RVhHWkNnNGF1M0RSejgtRmZYNlRqb0k5M1JKN1pHQXl6alVjbDlxdUJHS2s1Vno1SnVUUnpZdlotQ2NQcHJRMW9hNzNEUGN5dGcwYkNFVUtuRVdveU5DNzZHejNxQmZRdHJqZDBMUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1521
    },
    {
      "date": "Jul 30",
      "text": "Hezbollah attacked a strategic area in Southern Lebanon, according to Israel.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1521
    },
    {
      "date": "Jul 30",
      "text": "Former President Trump stated the US is in talks with Iran, expressing hopes for 'good things'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNdENxTVZ4dF90R0xReVUzUlh1dG1JeEd5ZGdPRFRlTlltYjZWcWhQcWlmcDhGMzhrTlgxVThFSk1xR3BMOU1lU1AwSGJZV1Q4eXNRcWhWQVNzelEtSTVTRlhZWXYyOEFrU25NdFdpN2duQmh6YUcwWklXTllJZnduMzllUndPMjdpcWM5cG15NjdqZ1ZlZTB3a3NxZjJIeGJMMGR0UjhaWHRzeUsyTVRDUnJfQVc3UFdYWWl2S9IBwgFBVV95cUxPY0NMOHJKUmVxVG9IU3ZhNjZFd0FLZTBYNWFjdmQxYUFYS3phTE9rRjExVm9ibHY3TTNxZEZMUnc0UnZQeFktbl9YZWlhNjh0SDhISV9OX3JEaW85QVM4blZwYkZuaUNTX0xUVW5MdE5xcEVPYjkyTWJoMkhiNlc2Q3VKUFdDZkpmbVZSRmRoSkNlWU5aN0FVa1JBUnQ5dENFYmJaOERPdUpUQkZWYTl5N1BaWjc5SWtNSFR0NkNNXzR0dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1521
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
      "perspective": "Iranian Defiance",
      "headline": "Iran Vows Hormuz Control, Urges Firmness Against Enemy",
      "summary": "Iranian leadership asserts control over the Strait of Hormuz and calls on its citizens to resist external pressures. This stance comes amidst ongoing conflict and diplomatic discussions involving the US.",
      "tone": "defiant",
      "latestSinceUpdate": 1519
    },
    {
      "perspective": "US Engagement & Force",
      "headline": "US Engages Diplomatically While Employing Military Force",
      "summary": "The US is engaged in both diplomatic talks with Iran, expressing hopes for positive outcomes, while simultaneously conducting strikes against Iranian proxies and threatening strong military action in response to attacks. This dual approach aims to manage escalation while protecting US interests.",
      "tone": "strained",
      "latestSinceUpdate": 1519
    },
    {
      "perspective": "Regional Instability & Economic Strain",
      "headline": "Middle East Conflict Spreads, Impacting Shipping and Economies",
      "summary": "The conflict is expanding geographically, drawing in more countries and causing significant shipping risks in crucial oil routes like the Strait of Hormuz. This instability is leading to economic strain felt by citizens and raising environmental concerns.",
      "tone": "anxious",
      "latestSinceUpdate": 1519
    }
  ]
});

export default LATEST_SNAPSHOT;
