export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 41,
  "lastUpdated": "2026-04-09",
  "lastSyncedAt": "2026-04-09T23:02:55.162Z",
  "warDay": 41,
  "summary": "The conflict continues with high casualties in Lebanon, a standstill in Strait of Hormuz shipping, and ongoing US-led ceasefire talks complicated by Israeli rejections and Iranian accusations.",
  "lastNarrativeUpdate": "2026-04-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "Despite ongoing US-led talks, a broad ceasefire remains unconfirmed and actively violated by parties, with Israel rejecting one in Lebanon and Iran calling it unreasonable."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 95
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
      "text": "Israel agrees to talks with Lebanon amid rising Beirut death toll (303+).",
      "severity": "critical",
      "latestSinceUpdate": 41
    },
    {
      "date": "Apr 09",
      "text": "Strait of Hormuz shipping traffic remains at a standstill, Iran demands tolls.",
      "severity": "critical",
      "latestSinceUpdate": 41
    },
    {
      "date": "Apr 09",
      "text": "Iran accuses US of violating deal framework, calls ceasefire 'unreasonable'.",
      "severity": "warning",
      "latestSinceUpdate": 41
    },
    {
      "date": "Apr 09",
      "text": "Netanyahu rejects ceasefire in Lebanon as Israel attacks Hezbollah sites.",
      "severity": "critical",
      "latestSinceUpdate": 41
    },
    {
      "date": "Apr 09",
      "text": "Iran warns of 'strong responses' to Israeli attacks on Lebanon.",
      "severity": "warning",
      "latestSinceUpdate": 41
    },
    {
      "date": "Apr 09",
      "text": "US military draft pool expanded; Trump threatens action if Iran fails to comply.",
      "severity": "warning",
      "latestSinceUpdate": 41
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
