export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 26,
  "lastUpdated": "2026-04-09",
  "lastSyncedAt": "2026-04-09T03:52:24.053Z",
  "warDay": 41,
  "summary": "A fragile ceasefire between the US and Iran is being tested by alleged infractions and continued Israeli strikes on Lebanon, while the Strait of Hormuz remains an area of contention.",
  "lastNarrativeUpdate": "2026-04-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 15,
    "summary": "A fragile ceasefire between the US and Iran is active but under strain due to alleged violations by both sides and ongoing regional conflicts."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
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
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 85
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
      "text": "US-Iran ceasefire tested by alleged Iranian infractions.",
      "severity": "warning",
      "latestSinceUpdate": 26
    },
    {
      "date": "Apr 09",
      "text": "Iran accuses US of violating ceasefire deal framework, calls it 'unreasonable'.",
      "severity": "warning",
      "latestSinceUpdate": 26
    },
    {
      "date": "Apr 09",
      "text": "Israeli strikes kill at least 254 people in Lebanon.",
      "severity": "critical",
      "latestSinceUpdate": 26
    },
    {
      "date": "Apr 09",
      "text": "Strait of Hormuz impasse continues.",
      "severity": "warning",
      "latestSinceUpdate": 26
    },
    {
      "date": "Apr 09",
      "text": "Hungary offered help to Iran after pager attack on Hezbollah.",
      "severity": "info",
      "latestSinceUpdate": 26
    },
    {
      "date": "Apr 09",
      "text": "Pentagon accused of undercounting U.S. casualties in Iran.",
      "severity": "info",
      "latestSinceUpdate": 26
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
