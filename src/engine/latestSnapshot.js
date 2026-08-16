export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1882,
  "lastUpdated": "2026-08-16",
  "lastSyncedAt": "2026-08-16T10:31:44.388Z",
  "warDay": 170,
  "summary": "Tensions remain high in the Middle East with ongoing US-Iran confrontation over the Strait of Hormuz, while Israel continues strikes in southern Lebanon, drawing strong condemnation and retaliation from Hezbollah.",
  "lastNarrativeUpdate": "2026-08-16",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire or de-escalation efforts are reported amidst ongoing hostilities."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Aug 14",
      "text": "US President Trump states intent to declare Hormuz US territory 'pretty soon'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/us-hormuz-claim",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1882
    },
    {
      "date": "Aug 14",
      "text": "US official confirms a carrier group is headed to the Middle East to replace USS Lincoln.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/carrier-group-deployment",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1882
    },
    {
      "date": "Aug 14",
      "text": "US states it can maintain a blockade on Iran 'indefinitely'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/us-iran-blockade",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1882
    },
    {
      "date": "Aug 14",
      "text": "Israeli strikes kill 11 in southern Lebanon, prompting condemnation from Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/israel-lebanon-strikes",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1882
    },
    {
      "date": "Aug 15",
      "text": "Iran strikes another ship in the Strait of Hormuz amidst ongoing stalemate.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/iran-ship-strike",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1882
    },
    {
      "date": "Aug 15",
      "text": "Yemen port suspends operations due to Hormuz stalemate, causing shipping disruptions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/yemen-port-suspension",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1882
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
      "perspective": "International Community",
      "headline": "Calls for De-escalation Persist Amidst Ongoing Conflict",
      "summary": "International observers continue to emphasize the need for diplomatic solutions to prevent further regional instability. Concerns remain high regarding humanitarian impacts and the potential for wider escalation.",
      "tone": "anxious",
      "latestSinceUpdate": 1867
    },
    {
      "perspective": "Israel",
      "headline": "Security Operations Continue to Address Persistent Threats",
      "summary": "Security operations are framed as essential for national defense against ongoing threats in the region. The focus remains on neutralizing perceived dangers and ensuring long-term national security.",
      "tone": "defiant",
      "latestSinceUpdate": 1867
    },
    {
      "perspective": "Iran",
      "headline": "Regional Actors Assert Influence Amidst Geopolitical Tensions",
      "summary": "Regional actors continue to assert their influence, supporting various groups in what they describe as resistance against foreign intervention. The narrative emphasizes sovereignty and regional power dynamics.",
      "tone": "defiant",
      "latestSinceUpdate": 1867
    }
  ]
});

export default LATEST_SNAPSHOT;
