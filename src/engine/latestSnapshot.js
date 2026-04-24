export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 346,
  "lastUpdated": "2026-04-24",
  "lastSyncedAt": "2026-04-24T23:51:11.126Z",
  "warDay": 56,
  "summary": "The Iran war continues on day 56 with a US blockade of the Strait of Hormuz, increased Israeli attacks in Lebanon, and an extended but fragile ceasefire between Israel and Lebanon.",
  "lastNarrativeUpdate": "2026-04-24",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 21,
    "summary": "A three-week ceasefire between Israel and Lebanon has been extended, but Hezbollah claims it is 'meaningless' amid continued fighting, and US-Iran tensions in Hormuz remain high."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
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
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
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
      "date": "Apr 24",
      "text": "U.S. blockade around Strait of Hormuz declared to last 'as long as it takes'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/some-url-hegseth-blockade",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 346
    },
    {
      "date": "Apr 24",
      "text": "Hegseth declares victory while preparing for more war with Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/some-url-hegseth-victory",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 346
    },
    {
      "date": "Apr 24",
      "text": "Israel attacks increase in Lebanon; ships taken in Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/some-url-israel-lebanon-hormuz",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 345
    },
    {
      "date": "Apr 24",
      "text": "Satellite data reveal scope and scale of US-Israeli strikes on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/some-url-satellite-strikes",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 345
    },
    {
      "date": "Apr 24",
      "text": "Over 100 international law experts warn U.S. strikes on Iran violate UN Charter and may be war crimes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/some-url-un-charter",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 346
    },
    {
      "date": "Apr 24",
      "text": "US military developing plans to target Iran’s Strait of Hormuz defenses if ceasefire fails.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/some-url-hormuz-defenses",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 346
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
      "perspective": "US/Israel",
      "headline": "Defensive Strikes and Maritime Enforcement",
      "summary": "The US and Israel are conducting strikes on Iran and taking measures to secure the Strait of Hormuz, responding to perceived threats and maintaining regional stability. The extension of the Israel-Lebanon ceasefire is seen as a diplomatic success.",
      "tone": "defiant",
      "latestSinceUpdate": 330
    },
    {
      "perspective": "Iran",
      "headline": "Facing Aggression and Blockade Threats",
      "summary": "Iran is under attack from US and Israeli forces and faces direct military threats regarding its activities in the Strait of Hormuz. The 'shoot and kill' order and naval blockade are viewed as significant escalations against Iranian sovereignty.",
      "tone": "strained",
      "latestSinceUpdate": 330
    },
    {
      "perspective": "Global Economy",
      "headline": "Oil Market Volatility Amid Strait Tensions",
      "summary": "Escalating tensions in the Strait of Hormuz, a critical oil transit choke point, are directly impacting global oil prices. The risk of supply disruption remains high, despite a localized ceasefire in the Levant.",
      "tone": "anxious",
      "latestSinceUpdate": 330
    }
  ]
});

export default LATEST_SNAPSHOT;
