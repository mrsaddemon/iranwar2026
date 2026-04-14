export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 161,
  "lastUpdated": "2026-04-14",
  "lastSyncedAt": "2026-04-14T22:00:21.821Z",
  "warDay": 46,
  "summary": "The US and Iran are engaged in discussions regarding a potential peace deal, even as Iran implements a Strait of Hormuz blockade, prompting US military action and international concern, while Israel and Lebanon also begin direct talks.",
  "lastNarrativeUpdate": "2026-04-14",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 2,
    "summary": "No active ceasefire is reported, though peace deal talks between the US and Iran, and direct negotiations between Israel and Lebanon, are underway."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 75,
    "oilDisruption": 85,
    "tradeImpact": 75,
    "sanctionsPressure": 62,
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
      "date": "Apr 14",
      "text": "Trump hints US-Iran talks could resume over the next two days, with the White House confirming peace deal discussions.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTE50WXdqeGV3VW9WOUQwUFlkbjJPanBBRmRxdUp2WlpIdkVTR0ZWSEh5ekpRUXV6anpFQlc4WW1DcXVVYzc3V0N5WUE4bDNwMXhHZ2w5a1JWbWZTaG9iNVlDWk5rZHl3QlZITGpvTFlkM21Cb2tJLTQzR2oyNGk1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 161
    },
    {
      "date": "Apr 14",
      "text": "Iran implements a Strait of Hormuz blockade, leading to Trump and Iran trading threats.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 161
    },
    {
      "date": "Apr 14",
      "text": "The US military reports turning back six ships in the first 24 hours of the Iranian port blockade, with US Navy mine-clearing ships moving into position.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNSnBndnllRFhHS0RYXzZvTXBVWVhhNW12bE0wV294VFB6dzdDQnY3b2VScWM4SnBlSXlTNEZHd0xUcHZhcXhYTnpsc3dVTmNpY1hoNUVDeElYLXJxMkNNX0YyWnVqVVlxdDd4ZkxsUWFsZkZFYXc4MDRSOU41QzJtZWdPeXgzUDRtcGx1eVlMbnhWSGNFdl9iSFJfVGlQdlRORVNvYkw0WDRLVU5ISE42WjBSdHhLM2hKdXg0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 161
    },
    {
      "date": "Apr 14",
      "text": "Israel and Lebanon begin direct talks hosted by the US, despite Hezbollah signaling its opposition.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 161
    },
    {
      "date": "Apr 14",
      "text": "China states that the Trump blockade is 'dangerous' as Iran-linked ships transit the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxQN1RJR1g3TDBBOE5pNDRKR0FWQnUxS2RUeXpQMlFVWERhRHIxU2doMnFEUjRHelJfeERuM0tOV0h6ZTFtMXY1cjAwUWg4bm9lU2trcTJVcjdEWmlOS2swUUV5bHJLSE14ZHBZVVphZS1aU2t4OUJQU01QUjdTNkg4T1hBVFA2emNOTUF6Y0t5eTJJSXlobjlFS3FZQWRDYW14MkVjcVdEWkRFNTlPc3ZiaGw2VEVGVUNjaXczbA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 161
    },
    {
      "date": "Apr 14",
      "text": "NATO allies are reportedly sitting out the US Iran blockade amid rising tensions.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxQVDRBSzM1TkRVU1dsbHp5OHVJcU9UcGlHQU5ZcjBQZXM4WWc4cnh6UkJFaVVqV1BFRTBHbWQ5UWtfaEh2YVlPTzhoNF9nRWptNmF1VkZ2RlNCVE9RNUU0TzN2LXVYX3phT2FRZG1TV01oTDltVDdxamhfQzd0WklGOGVSNGVBU3B2UTRka0VaTVd3SEhkWHlV?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "KATU",
      "latestSinceUpdate": 161
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
