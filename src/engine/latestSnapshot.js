export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2657,
  "lastUpdated": "2026-10-26",
  "lastSyncedAt": "2026-10-26T21:33:25.853Z",
  "warDay": 241,
  "summary": "Tensions between the U.S., Israel, and Iran have escalated significantly, with threats of renewed strikes, plans for potential military action, and maritime incidents reported in the Persian Gulf.",
  "lastNarrativeUpdate": "2026-10-26",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire is active; the situation indicates escalating tensions and threats of renewed conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.88,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 73
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.82
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 64
      },
      "behavior": {
        "precision": 0.68,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 88,
    "oilDisruption": 85,
    "tradeImpact": 77,
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
      "date": "Oct 26",
      "text": "Reports indicate a new level of threat and fear risks pushing the U.S. and Iran back to full war.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2657
    },
    {
      "date": "Oct 26",
      "text": "Trump states he will soon decide whether to 'make a deal' with Iran or 'finish it off'.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2657
    },
    {
      "date": "Oct 26",
      "text": "U.S. and Israel are reportedly drawing up plans for renewed strikes on Iran after upcoming elections.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2657
    },
    {
      "date": "Oct 26",
      "text": "A tanker was disabled in a Strait of Hormuz attack, and another vessel was reported on fire in the Persian Gulf.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2657
    },
    {
      "date": "Oct 26",
      "text": "The U.S. has evacuated Mideast outposts following a suspected Iranian plot to target Americans.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2657
    },
    {
      "date": "Oct 26",
      "text": "Iran states it is prepared to go back to war amid threats from the U.S. and Israel.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPTWF4R1g5cjkxZXNYdDVVa0N4SWVoY3FiOVVsdnJ3Nll4Si1lbVNnemhBQi05aWF3NEllLWtKTHM5Qlh3bGRmcVhiWXpFZWt2VW5iRzJCN1dzNFlqX09sVWZsTG81OEpMa0tKbnZ2T0NRMWE0el9kYkQxNjhyWVE1NkF4RGhGVUNnV1hHZGo1eUZvZUZ3c01zN1Z4WjVLNmhJdlEtU3U4VlU2SHRxOFUyeG5LbWJzaDI0X2xVel93?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 2657
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
      "perspective": "US/Israel Strategy",
      "headline": "US and Israel Plan Renewed Strikes on Iran",
      "summary": "The US and Israel are reportedly drawing up plans for renewed strikes on Iran following upcoming midterm elections, indicating a proactive stance against perceived Iranian threats and actions. This planning suggests a coordinated effort to address regional security concerns.",
      "tone": "anxious",
      "latestSinceUpdate": 2647
    },
    {
      "perspective": "Iranian Defiance",
      "headline": "Iran Warns US, Claims Tanker Attacks, Threatens Infrastructure",
      "summary": "Iran has issued strong warnings against US military presence in the Gulf and denied any deal offers, while also claiming attacks on oil tankers and detailing plans to target Gulf undersea cables if conflict escalates. These actions and statements reflect a defiant posture against external pressures.",
      "tone": "defiant",
      "latestSinceUpdate": 2647
    },
    {
      "perspective": "Regional Instability",
      "headline": "Gulf Nations Brace for All-Out War",
      "summary": "Gulf nations are bracing for a potential return to all-out war between the US and Iran, reflecting widespread regional anxiety over escalating tensions and the potential for broader conflict. The situation is viewed with significant concern regarding its impact on regional stability.",
      "tone": "anxious",
      "latestSinceUpdate": 2647
    },
    {
      "perspective": "Hezbollah Under Pressure",
      "headline": "Hezbollah Faces Internal Discontent and External Pressure",
      "summary": "Hezbollah faces internal discontent in Lebanon and external pressure, including a US request to block Starlink services, suggesting challenges to its operational capabilities and support base. This indicates a complex environment for the group amidst broader regional tensions.",
      "tone": "strained",
      "latestSinceUpdate": 2647
    }
  ]
});

export default LATEST_SNAPSHOT;
