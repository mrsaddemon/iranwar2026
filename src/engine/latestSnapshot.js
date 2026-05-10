export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 601,
  "lastUpdated": "2026-05-10",
  "lastSyncedAt": "2026-05-10T23:31:26.603Z",
  "warDay": 72,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-10",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 30,
    "summary": "A fragile ceasefire in Lebanon is eroding due to ongoing Israeli airstrikes, while broader US-Iran peace proposals have been rejected."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
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
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "May 10",
      "text": "Trump rejects Iran's latest counteroffer to end the war, calling it 'unacceptable'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/trump-rejects-iran-peace-plan",
      "sourceName": "Google News",
      "latestSinceUpdate": 601
    },
    {
      "date": "May 10",
      "text": "U.S. forces fire on tankers as Tehran accuses Washington of 'reckless' attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/us-fires-on-iranian-tankers",
      "sourceName": "Google News",
      "latestSinceUpdate": 601
    },
    {
      "date": "May 10",
      "text": "Israeli airstrikes kill 24 in Lebanon as US awaits Tehran’s reply to peace proposal.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/israel-strikes-lebanon-casualties",
      "sourceName": "Google News",
      "latestSinceUpdate": 601
    },
    {
      "date": "May 10",
      "text": "Lebanon reports 39 killed in Israeli strikes, eroding a fragile cease-fire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/lebanon-israeli-strikes-casualties",
      "sourceName": "Google News",
      "latestSinceUpdate": 601
    },
    {
      "date": "May 10",
      "text": "UK and France to host a multinational meeting on a mission to escort ships through Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/hormuz-escort-mission-meeting",
      "sourceName": "Google News",
      "latestSinceUpdate": 601
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
      "headline": "Iran warns of heavy assault, awaits peace deal response",
      "summary": "Iran maintains a defiant stance, threatening severe retaliation if its ships are attacked, while also awaiting a US peace proposal response. The country continues to engage in military actions, which the US claims to have intercepted.",
      "tone": "defiant",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 585
    },
    {
      "perspective": "United States",
      "headline": "US intercepts attacks, conducts retaliatory strikes, awaits Iran's response",
      "summary": "The US military has actively intercepted Iranian attacks on its Navy ships and carried out retaliatory strikes. Concurrently, the US is awaiting Iran's response to a peace proposal, indicating a dual approach of defense and diplomacy.",
      "tone": "strained",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 585
    },
    {
      "perspective": "Israel",
      "headline": "Israel continues strikes, tests truce with Hezbollah actions",
      "summary": "Israel has continued its military operations, including airstrikes in Lebanon and Beirut, and claims to have killed a Hezbollah chief. These actions are seen as testing the existing ceasefire and indicate a focus on degrading Hezbollah's capabilities.",
      "tone": "defiant",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 585
    },
    {
      "perspective": "International/Russia",
      "headline": "Truce remains elusive as Russia offers nuclear support to Iran",
      "summary": "The international community observes a fragile truce that is frequently violated, with some experts predicting an American retreat from the conflict. Russia has offered to store Iran's enriched uranium, signaling potential geopolitical shifts and support.",
      "tone": "skeptical",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 585
    }
  ]
});

export default LATEST_SNAPSHOT;
