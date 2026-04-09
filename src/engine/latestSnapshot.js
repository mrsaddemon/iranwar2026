export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 35,
  "lastUpdated": "2026-04-09",
  "lastSyncedAt": "2026-04-09T17:17:46.649Z",
  "warDay": 41,
  "summary": "The US-Iran conflict continues with a fragile ceasefire under strain due to Israeli strikes in Lebanon and ongoing Strait of Hormuz restrictions.",
  "lastNarrativeUpdate": "2026-04-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A fragile US-Iran ceasefire is under significant strain due to Israeli strikes in Lebanon and accusations of violations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 75
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
      "date": "Apr 09",
      "text": "US-Iran conflict ongoing, with US military presence maintained and threats of further action.",
      "severity": "critical",
      "latestSinceUpdate": 35
    },
    {
      "date": "Apr 09",
      "text": "Iran accuses US of violating deal framework and states ceasefire is 'unreasonable'.",
      "severity": "warning",
      "latestSinceUpdate": 35
    },
    {
      "date": "Apr 09",
      "text": "US and Iran prepare for talks amidst continued restrictions in the Strait of Hormuz.",
      "severity": "warning",
      "latestSinceUpdate": 35
    },
    {
      "date": "Apr 09",
      "text": "Israel conducts strikes in Lebanon, prompting Iran's warning of 'strong responses' and threatening the US-Iran ceasefire.",
      "severity": "critical",
      "latestSinceUpdate": 35
    },
    {
      "date": "Apr 09",
      "text": "Israel and Hezbollah in Lebanon exchange strikes, further straining the fragile US-Iran ceasefire.",
      "severity": "critical",
      "latestSinceUpdate": 35
    },
    {
      "date": "Apr 09",
      "text": "Automatic U.S. military draft registration is planned by December.",
      "severity": "info",
      "latestSinceUpdate": 35
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
