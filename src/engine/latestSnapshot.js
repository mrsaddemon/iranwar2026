export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 160,
  "lastUpdated": "2026-04-14",
  "lastSyncedAt": "2026-04-14T21:03:25.519Z",
  "warDay": 46,
  "summary": "The US has implemented a blockade on Iranian ports in the Strait of Hormuz, turning back six ships, while simultaneously engaging in discussions for potential peace talks with Iran and facilitating direct negotiations between Israel and Lebanon.",
  "lastNarrativeUpdate": "2026-04-14",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 2,
    "summary": "No active ceasefire is reported between the primary belligerents, though diplomatic talks are underway."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 80,
    "oilDisruption": 90,
    "tradeImpact": 79,
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
      "date": "Apr 14",
      "text": "US military blockade on Iranian ports in Strait of Hormuz takes effect, turning back six ships.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/iran-blockade-takes-effect",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 160
    },
    {
      "date": "Apr 14",
      "text": "Trump hints at and White House confirms discussions for potential US-Iran peace talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/us-iran-talks-discussion",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 160
    },
    {
      "date": "Apr 14",
      "text": "Israel and Lebanon begin direct talks in the US, described as 'productive' by the US.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/israel-lebanon-talks-begin",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 160
    },
    {
      "date": "Apr 14",
      "text": "Hezbollah signals opposition to the ongoing Israel-Lebanon negotiations.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/hezbollah-opposes-talks",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 160
    },
    {
      "date": "Apr 14",
      "text": "China criticizes the Trump administration's blockade of the Strait of Hormuz as 'dangerous'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/china-condemns-blockade",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 160
    },
    {
      "date": "Apr 14",
      "text": "Iran states that Israel’s oil depot strikes endanger the environment and health.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/iran-oil-depot-strikes",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 159
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (15 headlines)"
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
