export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 163,
  "lastUpdated": "2026-04-14",
  "lastSyncedAt": "2026-04-14T23:53:51.809Z",
  "warDay": 46,
  "summary": "US-Iran peace talks are reportedly in discussion while the US has implemented a military blockade on Iranian ports, leading to international reactions and ongoing Israel-Lebanon talks.",
  "lastNarrativeUpdate": "2026-04-14",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 2,
    "summary": "No active ceasefire is in effect for the broader conflict, though direct talks between Israel and Lebanon are underway."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 80,
    "oilDisruption": 85,
    "tradeImpact": 76,
    "sanctionsPressure": 63,
    "globalPressure": 82,
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
      "date": "Apr 13",
      "text": "US-Iran peace deal talks are in discussion, with Trump hinting they could resume in the next two days.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTE50WXdqeGV3VW9WOUQwUFlkbjJPanBBRmRxdUp2WlpIdkVTR0ZWSEh5ekpRUXV6anpFQlc4WW1DcXVVYzc3V0N5WUE4bDNwMXhHZ2w5a1JWbWZTaG9iNVlDWk5rZHl3QlZITGpvTFlkM21Cb2tJLTQzR2oyNGk1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 163
    },
    {
      "date": "Apr 13",
      "text": "Israel and Lebanon have begun direct talks in the US, though Hezbollah signals its opposition.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 163
    },
    {
      "date": "Apr 14",
      "text": "US military blockade on Iranian ports takes effect, with six Iranian-linked ships turned back in the first 24 hours.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNSnBndnllRFhHS0RYXzZvTXBVWVhhNW12bE0wV294VFB6dzdDQnY3b2VScWM4SnBlSXlTNEZHd0xUcHZhcXhYTnpsc3dVTmNpY1hoNUVDeElYLXJxMkNNX0YyWnVqVVlxdDd4ZkxsUWFsZkZFYXc4MDRSOU41QzJtZWdPeXgzUDRtcGx1eVlMbnhWSGNFdl9iSFJfVGlQdlRORVNvYkw0WDRLVU5ISE42WjBSdHhLM2hKdXg0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 163
    },
    {
      "date": "Apr 14",
      "text": "China states that the Trump administration's blockade of Iranian ports is 'dangerous'.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 163
    },
    {
      "date": "Apr 14",
      "text": "Iran claims Israel’s oil depot strikes endanger the environment and public health.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 163
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
