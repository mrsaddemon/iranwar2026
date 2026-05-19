export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 703,
  "lastUpdated": "2026-05-19",
  "lastSyncedAt": "2026-05-19T08:48:56.431Z",
  "warDay": 81,
  "summary": "US President Trump announced a pause in a planned strike on Iran, signaling potential for a nuclear deal, while Iran continues to assert control over the Strait of Hormuz and the Israel-Hezbollah conflict persists.",
  "lastNarrativeUpdate": "2026-05-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 10,
    "summary": "A truce extension between Israel and Hezbollah is in effect, but conflict persists despite it."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 68,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "May 17",
      "text": "US President Trump announced a planned strike on Iran was postponed at the request of Gulf allies.",
      "severity": "warning",
      "sourceUrl": "https://news.example.com/iran-update",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 703
    },
    {
      "date": "May 17",
      "text": "Trump signaled that a nuclear deal with Iran may be possible following the paused strike.",
      "severity": "info",
      "sourceUrl": "https://news.example.com/iran-update",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 703
    },
    {
      "date": "May 18",
      "text": "Iran announced it will unveil a Hormuz toll mechanism soon and has started Bitcoin-backed shipping insurance for the Strait.",
      "severity": "warning",
      "sourceUrl": "https://news.example.com/iran-hormuz",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 703
    },
    {
      "date": "May 18",
      "text": "The war between Israel and Hezbollah persists despite a truce extension, with Lebanon's death toll passing 3,000.",
      "severity": "critical",
      "sourceUrl": "https://news.example.com/israel-lebanon",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 703
    },
    {
      "date": "May 18",
      "text": "Reports indicate the Iran war is straining the US-European strategic alliance.",
      "severity": "warning",
      "sourceUrl": "https://news.example.com/us-europe-alliance",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 703
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
      "perspective": "US-Iran Tensions",
      "headline": "Trump's Mixed Signals on Iran Strike",
      "summary": "President Trump publicly revealed a planned military strike on Iran but stated he called it off, citing requests from Gulf states and ongoing negotiations. He warns Tehran that 'the clock is ticking' for a deal.",
      "tone": "strained",
      "latestSinceUpdate": 701
    },
    {
      "perspective": "Strait of Hormuz Control",
      "headline": "Iran's Economic Leverage Over Hormuz",
      "summary": "Iran is moving to assert economic control over the Strait of Hormuz, announcing plans for a toll mechanism and launching Bitcoin-backed shipping insurance, potentially disrupting global shipping and internet cables.",
      "tone": "defiant",
      "latestSinceUpdate": 701
    },
    {
      "perspective": "Israel-Hezbollah Conflict",
      "headline": "Intensifying War Despite Truce",
      "summary": "The conflict between Israel and Hezbollah continues to escalate despite a truce extension, with Israel attacking Lebanon and Hezbollah employing evolving drone tactics, resulting in a high death toll in Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 701
    },
    {
      "perspective": "US-European Alliance",
      "headline": "Iran War Strains US-European Alliance",
      "summary": "The ongoing situation with Iran is reportedly causing a significant strain on the strategic alliance between the United States and European nations, indicating diverging interests or approaches.",
      "tone": "skeptical",
      "latestSinceUpdate": 701
    }
  ]
});

export default LATEST_SNAPSHOT;
