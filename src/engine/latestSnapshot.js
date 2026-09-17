export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2433,
  "lastUpdated": "2026-09-17",
  "lastSyncedAt": "2026-09-17T04:42:56.488Z",
  "warDay": 202,
  "summary": "The Iran war continues with significant costs and civilian impact, while political figures debate its conclusion and regional actors engage in strikes and attacks affecting oil infrastructure.",
  "lastNarrativeUpdate": "2026-09-17",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or de-escalation efforts are reported amidst ongoing conflict."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
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
      "date": "Sep 17",
      "text": "US House votes for the third time to end the Iran war after $38 billion cost is revealed.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/1",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2433
    },
    {
      "date": "Sep 17",
      "text": "Investigation into US-Israeli strikes on Tehran neighbourhoods reveals devastating civilian harm.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/2",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2433
    },
    {
      "date": "Sep 17",
      "text": "Photos show widespread damage at US sites from Iranian attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/3",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2433
    },
    {
      "date": "Sep 17",
      "text": "Houthi attacks on Saudi pipelines send oil prices higher.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/4",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2433
    },
    {
      "date": "Sep 17",
      "text": "Satellite images show extent of damage to Saudi Arabia’s oil pipeline that bypasses Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/5",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2433
    },
    {
      "date": "Sep 17",
      "text": "Pentagon Inspector General details U.S. losses and challenges in the Iran War, including munitions shortfalls.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/6",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2433
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
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
      "perspective": "US Political",
      "headline": "US Political Divide on Iran War's Future",
      "summary": "President Trump suggests the war is nearing its conclusion with direct talks, while the US House of Representatives has voted repeatedly to end the conflict, citing significant financial costs.",
      "tone": "strained",
      "latestSinceUpdate": 2433
    },
    {
      "perspective": "Iran's Stance",
      "headline": "Iran Issues Ultimatum Amid Blockade Challenges",
      "summary": "Iran has issued an ultimatum for talks with President Trump, while simultaneously facing difficulties in its attempts to bypass the Strait of Hormuz blockade.",
      "tone": "defiant",
      "latestSinceUpdate": 2433
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Escalating Regional Violence and Civilian Impact",
      "summary": "US-Israeli strikes in Tehran have caused significant civilian harm, while Houthi attacks on Saudi pipelines have driven up oil prices, and Israel claims a major victory against Hezbollah.",
      "tone": "anxious",
      "latestSinceUpdate": 2433
    },
    {
      "perspective": "Military Challenges",
      "headline": "Pentagon IG Reports Munitions Shortfalls and US Losses",
      "summary": "The Pentagon Inspector General has detailed significant munitions shortfalls, restocking bottlenecks, and U.S. losses, indicating challenges in sustaining the ongoing Iran war effort.",
      "tone": "skeptical",
      "latestSinceUpdate": 2433
    }
  ]
});

export default LATEST_SNAPSHOT;
