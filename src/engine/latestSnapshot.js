export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 490,
  "lastUpdated": "2026-05-03",
  "lastSyncedAt": "2026-05-03T14:38:27.925Z",
  "warDay": 65,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-03",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 30,
    "summary": "A previous ceasefire is reported to be expiring, with recent peace proposals rejected and military options being reviewed, indicating a collapse of de-escalation efforts."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
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
      "date": "May 02",
      "text": "Iran submits a 14-point response to the U.S. proposal to end the war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/iran-response",
      "sourceName": "Google News",
      "latestSinceUpdate": 490
    },
    {
      "date": "May 02",
      "text": "Trump states he is reviewing a new Iranian peace proposal to end the war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/trump-iran-proposal",
      "sourceName": "Google News",
      "latestSinceUpdate": 490
    },
    {
      "date": "May 02",
      "text": "Iran vows a ‘long, painful’ response if the US renews attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/iran-vows-response",
      "sourceName": "Google News",
      "latestSinceUpdate": 490
    },
    {
      "date": "May 02",
      "text": "Israel continues strikes on southern Lebanon amidst ongoing regional tensions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/israel-lebanon",
      "sourceName": "Google News",
      "latestSinceUpdate": 490
    },
    {
      "date": "May 02",
      "text": "OPEC+ announces a symbolic oil output rise during the Strait of Hormuz closure.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/opec-hormuz",
      "sourceName": "Google News",
      "latestSinceUpdate": 490
    },
    {
      "date": "May 02",
      "text": "The US is identified as the oil supplier of last resort as Hormuz disruptions worsen.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/us-oil-supplier",
      "sourceName": "Google News",
      "latestSinceUpdate": 490
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
      "perspective": "Iran",
      "headline": "Iran Proposes Peace While Maintaining Readiness",
      "summary": "Iran has submitted a 14-point peace proposal to the U.S. to end the war, while simultaneously issuing warnings from the IRGC about its full preparedness for potential conflict resumption.",
      "tone": "strained",
      "latestSinceUpdate": 482
    },
    {
      "perspective": "United States",
      "headline": "Trump Rejects Peace, Threatens Relaunch",
      "summary": "President Trump is reviewing and rejecting Iranian peace proposals, stating Iran hasn't 'paid a big enough price' and is considering new military options to relaunch the war, alongside threats to withdraw troops from Germany.",
      "tone": "defiant",
      "latestSinceUpdate": 482
    },
    {
      "perspective": "Israel",
      "headline": "Israel Continues Strikes Amid Drone Threats",
      "summary": "Israel continues strikes on southern Lebanon and faces new challenges from Hezbollah's advanced drone capabilities, while its UN ambassador defends the IDF's morality.",
      "tone": "strained",
      "latestSinceUpdate": 482
    },
    {
      "perspective": "Regional Impact",
      "headline": "Two Months In, War's Toll Evident",
      "summary": "Two months into the Iran war, the sentiment is that 'almost everybody is a loser,' with significant damage reported to US military sites in the Middle East.",
      "tone": "anxious",
      "latestSinceUpdate": 482
    }
  ]
});

export default LATEST_SNAPSHOT;
