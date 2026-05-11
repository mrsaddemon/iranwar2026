export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 605,
  "lastUpdated": "2026-05-11",
  "lastSyncedAt": "2026-05-11T11:50:41.900Z",
  "warDay": 73,
  "summary": "The Iran War continues on Day 73 with diplomatic efforts stalled as the US rejects Iran's peace proposal, leading to continued military engagements in the Strait of Hormuz and escalating Israeli strikes in Lebanon.",
  "lastNarrativeUpdate": "2026-05-11",
  "ceasefire": {
    "active": false,
    "status": "collapsed",
    "confidence": 0.1,
    "durationDays": 30,
    "summary": "A previous cease-fire in Lebanon has been eroded by deadly Israeli strikes, and a broader peace proposal for the Iran War has been rejected by the US."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "May 11",
      "text": "Trump rejects Iran's counterproposal to end the war, calling it 'totally unacceptable' and prolonging the conflict.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 605
    },
    {
      "date": "May 11",
      "text": "US forces fire on tankers, while Iran accuses Washington of 'reckless' attacks in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 605
    },
    {
      "date": "May 11",
      "text": "Israel conducts strikes in Lebanon, killing 39 and eroding a fragile cease-fire.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 605
    },
    {
      "date": "May 11",
      "text": "Hezbollah deploys a new weapon designed to evade Israeli detection.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxNWm52RmRwa2xzRjZvNjF3eXpWdXdRVlJJejVqSXViVTN2aWVQSzF2Mm03VW1oQndfVzhkclo0TXFtZHBfNllrU01saW9QSi1scG1hMnZfRkNSM1kxOFcyOUZhUHFUaHE4T1ZWOWJrU2VyTktpVlhFeUtFQnJVaE0tcUFsQnVXS3Y0TjQwblM4VQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 605
    },
    {
      "date": "May 11",
      "text": "Crude oil prices spike as the Hormuz bottleneck persists following Trump's dismissal of Iran's peace reply.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 605
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
      "perspective": "US Perspective",
      "headline": "Trump Rejects Iran's 'Unacceptable' Proposal",
      "summary": "US President Trump has rejected Iran's latest counteroffer to end the war, stating it is 'unacceptable' and does not meet US demands for a resolution.",
      "tone": "defiant",
      "latestSinceUpdate": 602
    },
    {
      "perspective": "Iran Perspective",
      "headline": "Tehran Condemns US 'Reckless Military Adventure'",
      "summary": "Iran accuses the US of 'reckless military adventure' in the Strait of Hormuz following US strikes on tankers, while maintaining its own peace proposal.",
      "tone": "defiant",
      "latestSinceUpdate": 602
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Deadly Israeli Strikes Erode Lebanon Truce",
      "summary": "Deadly Israeli strikes in southern Lebanon continue, killing dozens and eroding an existing cease-fire, as Hezbollah rockets hit open areas in Israel.",
      "tone": "strained",
      "latestSinceUpdate": 602
    }
  ]
});

export default LATEST_SNAPSHOT;
