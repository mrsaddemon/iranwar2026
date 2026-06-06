export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 891,
  "lastUpdated": "2026-06-06",
  "lastSyncedAt": "2026-06-06T19:42:35.374Z",
  "warDay": 99,
  "summary": "Ongoing military exchanges between the U.S. and Iran, including drone incidents near the Strait of Hormuz, are occurring amidst a collapsed ceasefire in Lebanon and warnings from Iran of a wider regional conflict.",
  "lastNarrativeUpdate": "2026-06-06",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 3,
    "summary": "The ceasefire in Lebanon has collapsed following rejection by Hezbollah and ongoing military exchanges."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Jun 05",
      "text": "Ceasefire in Lebanon frays as Iran warns of wider war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxNa3p2Mk13TlJHN1BKSVRWTWJjZHBRMUtqZlVIa1psMzNxY1BublNGZ2Y1eUY4NUhReHo0bFNrZllNZTduUHVjbEVoWXk4ajZzVDJLNGFiTXVaVHR3NDcwOGhwRVAyRG5zb1RSZXpCRklIS0p0NTU3T29TdHVUbDBKa293SFpPV2Zf?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 891
    },
    {
      "date": "Jun 05",
      "text": "U.S. and Iran trade another round of fire as ceasefire faces further strain.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 891
    },
    {
      "date": "Jun 05",
      "text": "Hezbollah rejects US-backed Israel-Lebanon ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBDX19HLUpiZ2wzMzJfd0VNaUxxazNlXzJXMkRrM2tkUkk5MmtVYllkUUZSWWR3d2RydXRNSzdKdHRqQ281Mkk5ZWpRamlrM3lqTll5LWNQQW5rUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 891
    },
    {
      "date": "Recent",
      "text": "Iran Fired Drones Toward Strait of Hormuz with U.S. Shooting Down at Least 4.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxPMElJNTFWUFhqeEdWLUtxSEdMOS05ZjFhbVlFTlNYd2dGTFhma0xGREdJSnBuR1pFenB3UU05OHRValFIb1BLMW4zeElXeE1jRVZtS3ZRWlpZYkRXZElmS0dGMHltYnlKNURHVWVzWF9UYXJzeFByM3VTQlVSMnc4THV1VQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 891
    },
    {
      "date": "Recent",
      "text": "House passes war powers resolution directing Trump to end hostilities with Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE81cnVNSUc5VUI0VW51ZGRjQzNwdWV6Q1d0TWxVZWsyaXFiVEt1dDAwc0dWb2huX0MyOUJnSDRZZDZrLUpaeU5iaU9JT2xIaEdmbmplNFVBV1VQVzNqVFZlbEI1X1VpOFFWRW9TSjZwbjlyUm9PMkYtR3lwdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 891
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (14 headlines)"
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
      "perspective": "Iran/Hezbollah",
      "headline": "Hezbollah Rejects Truce Amid Continued Iranian Strikes",
      "summary": "Hezbollah rejects ceasefire agreements and Iran reports stalled talks, while continuing military actions including drone launches and attacks on Gulf neighbors. Iran criticizes Lebanon's president amid Israeli attacks.",
      "tone": "defiant",
      "latestSinceUpdate": 882
    },
    {
      "perspective": "Israel",
      "headline": "Israel Continues Attacks, Faces Drone Challenges",
      "summary": "Israel continues its attacks in the region, facing criticism from Lebanon's president and challenges to its defenses from Hezbollah's advanced fiber-optic drones. Efforts for a Lebanon ceasefire are ongoing.",
      "tone": "strained",
      "latestSinceUpdate": 882
    },
    {
      "perspective": "United States",
      "headline": "US Engages Iran in Gulf, Congress Limits War Powers",
      "summary": "The US military actively intercepts Iranian projectiles and exchanges fire in the Gulf, testing the limits of a ceasefire. Domestically, the House votes to limit presidential war powers regarding Iran.",
      "tone": "anxious",
      "latestSinceUpdate": 882
    },
    {
      "perspective": "Global Energy",
      "headline": "Strait of Hormuz Closure Threatens Oil Supplies",
      "summary": "Concerns rise over dwindling oil supplies and the Strait of Hormuz remaining mostly closed due to ongoing conflict. The situation poses a significant threat to global energy markets.",
      "tone": "anxious",
      "latestSinceUpdate": 882
    }
  ]
});

export default LATEST_SNAPSHOT;
