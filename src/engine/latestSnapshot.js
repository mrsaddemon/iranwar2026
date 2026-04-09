export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 37,
  "lastUpdated": "2026-04-09",
  "lastSyncedAt": "2026-04-09T19:40:54.773Z",
  "warDay": 41,
  "summary": "On War Day 41, Israel is conducting strikes in Lebanon, resulting in a high death toll, while Iran has stopped shipping in the Strait of Hormuz, threatening a shaky US-Iran ceasefire.",
  "lastNarrativeUpdate": "2026-04-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 20,
    "summary": "A US-Iran ceasefire is in effect but is highly fragile, threatened by ongoing Israeli strikes in Lebanon and Iran's control over the Strait of Hormuz."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.65
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 82
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 12,
    "escalationLevel": 48,
    "oilDisruption": 92
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
      "date": "Apr 08",
      "text": "Israel attacks Lebanon, with the Beirut attack death toll rising to at least 303.",
      "severity": "critical",
      "latestSinceUpdate": 37
    },
    {
      "date": "Apr 08",
      "text": "Iran announces shipping has stopped in the Strait of Hormuz and controls access.",
      "severity": "critical",
      "latestSinceUpdate": 37
    },
    {
      "date": "Apr 08",
      "text": "Israeli military reports killing the nephew of Hezbollah chief Naim Qassem.",
      "severity": "warning",
      "latestSinceUpdate": 37
    },
    {
      "date": "Apr 08",
      "text": "Eligible men will be automatically registered for the US military draft pool under a new rule change.",
      "severity": "info",
      "latestSinceUpdate": 37
    },
    {
      "date": "Apr 08",
      "text": "Army survivors of a deadly attack in Kuwait dispute the Pentagon's account, citing unit unpreparedness.",
      "severity": "warning",
      "latestSinceUpdate": 37
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
      "perspective": "US/Israel",
      "headline": "Ceasefire agreed, but tested",
      "summary": "The US and Israel agreed to a ceasefire with Iran, aiming to de-escalate the Middle East conflict. However, the agreement is immediately being tested by ongoing regional actions.",
      "tone": "strained",
      "latestSinceUpdate": 25
    },
    {
      "perspective": "Iran",
      "headline": "US violating ceasefire, Hormuz control asserted",
      "summary": "Iran accuses the US of violating the ceasefire framework, deeming the agreement 'unreasonable' given the circumstances. Iran is also asserting its control over the Strait of Hormuz despite the ceasefire.",
      "tone": "defiant",
      "latestSinceUpdate": 25
    },
    {
      "perspective": "Lebanon/Hezbollah",
      "headline": "Heavy Israeli strikes despite ceasefire",
      "summary": "Lebanon has suffered significant casualties from large-scale Israeli strikes, with reports of 182-254 killed. This comes despite a recently agreed ceasefire, raising questions about its effectiveness.",
      "tone": "anxious",
      "latestSinceUpdate": 25
    }
  ]
});

export default LATEST_SNAPSHOT;
