export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 162,
  "lastUpdated": "2026-04-14",
  "lastSyncedAt": "2026-04-14T22:55:35.053Z",
  "warDay": 46,
  "summary": "The US military has implemented a blockade on Iranian ports following a collapse in peace talks, while simultaneously, the US is facilitating direct talks between Israel and Lebanon, and President Trump hints at a potential resumption of US-Iran negotiations.",
  "lastNarrativeUpdate": "2026-04-14",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 2,
    "summary": "No active ceasefire is in place, though diplomatic efforts are underway with US-Iran talks potentially resuming and direct Israel-Lebanon negotiations commencing."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 75,
    "oilDisruption": 80,
    "tradeImpact": 71,
    "sanctionsPressure": 62,
    "globalPressure": 79,
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
      "date": "Apr 14",
      "text": "US military blockade on Iranian ports takes effect, turning back six ships in the first 24 hours.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNSnBndnllRFhHS0RYXzZvTXBVWVhhNW12bE0wV294VFB6dzdDQnY3b2VScWM4SnBlSXlTNEZHd0xUcHZhcXhYTnpsc3dVTmNpY1hoNUVDeElYLXJxMkNNX0YyWnVqVVlxdDd4ZkxsUWFsZkZFYXc4MDRSOU41QzJtZWdPeXgzUDRtcGx1eVlMbnhWSGNFdl9iSFJfVGlQdlRORVNvYkw0WDRLVU5ISE42WjBSdHhLM2hKdXg0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 162
    },
    {
      "date": "Apr 14",
      "text": "China criticizes the US blockade as 'dangerous' as Iran-linked ships transit the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxQN1RJR1g3TDBBOE5pNDRKR0FWQnUxS2RUeXpQMlFVWERhRHIxU2doMnFEUjRHelJfeERuM0tOV0h6ZTFtMXY1cjAwUWg4bm9lU2trcTJVcjdEWmlOS2swUUV5bHJLSE14ZHBZVVphZS1aU2t4OUJQU01QUjdTNkg4T1hBVFA2emNOTUF6Y0t5eTJJSXlobjlFS3FZQWRDYW14MkVjcVdEWkRFNTlPc3ZiaGw2VEVGVUNjaXczbA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 162
    },
    {
      "date": "Apr 13",
      "text": "Israel and Lebanon hold their first direct talks since 1993, facilitated by the US.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9aZGxOSU1uN2FqLTJmb3k1cjhmSHM0M0djdjlIdm5mMm1CWkViNHVjQXRQMFZzTll4YkFkUmsxdGFzWFV4NF84bG0tT3ZBaThnbHh2ZXgtQVBLdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 162
    },
    {
      "date": "Apr 14",
      "text": "President Trump indicates that US-Iran negotiations could resume within the next two days, despite earlier collapse of peace talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTE50WXdqeGV3VW9WOUQwUFlkbjJPanBBRmRxdUp2WlpIdkVTR0ZWSEh5ekpRUXV6anpFQlc4WW1DcXVVYzc3V0N5WUE4bDNwMXhHZ2w5a1JWbWZTaG9iNVlDWk5rZHl3QlZITGpvTFlkM21Cb2tJLTQzR2oyNGk1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 162
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
      "headline": "US asserts dominance with Hormuz blockade, seeks deal with Iran.",
      "summary": "The US has initiated a blockade of the Strait of Hormuz, with President Trump claiming Iran is open to a deal despite public statements to the contrary. The US views the blockade as a necessary measure against 'economic terrorism'.",
      "tone": "defiant",
      "latestSinceUpdate": 147
    },
    {
      "perspective": "Iranian Government",
      "headline": "Iran warns of strong responses to US blockade, rejects negotiations.",
      "summary": "Iran has warned of strong responses to the US blockade of the Strait of Hormuz, with its minister stating no intention of negotiating for now. Iranian officials are trading threats with the US following the blockade's implementation.",
      "tone": "defiant",
      "latestSinceUpdate": 147
    },
    {
      "perspective": "Hezbollah/Lebanon",
      "headline": "Hezbollah rejects US-led peace talks, urges Lebanon to withdraw.",
      "summary": "Hezbollah has publicly rejected US-led peace talks with Israel and called on the Lebanese government to pull out of negotiations. This stance comes as Israel's war in Lebanon continues and IDF plans for further conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 147
    },
    {
      "perspective": "International Experts",
      "headline": "Hormuz blockade seen as major military undertaking with high stakes.",
      "summary": "Experts view the US blockade of the Strait of Hormuz as a significant military endeavor with potential for further escalation. The move is expected to have major geopolitical and economic implications.",
      "tone": "anxious",
      "latestSinceUpdate": 147
    }
  ]
});

export default LATEST_SNAPSHOT;
