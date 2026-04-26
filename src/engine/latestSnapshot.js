export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 375,
  "lastUpdated": "2026-04-26",
  "lastSyncedAt": "2026-04-26T10:09:49.832Z",
  "warDay": 58,
  "summary": "A fragile two-week ceasefire between the U.S. and Iran is in effect amidst a U.S. blockade of the Strait of Hormuz, while Israel and Hezbollah continue to clash in Lebanon.",
  "lastNarrativeUpdate": "2026-04-26",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A two-week ceasefire between the U.S. and Iran is in effect, but its stability is undermined by the ongoing U.S. blockade and continued clashes between Israel and Hezbollah."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
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
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Apr 26",
      "text": "U.S. blockade around the Strait of Hormuz continues, with reopening not expected until the second half of 2026.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/...",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 375
    },
    {
      "date": "Apr 26",
      "text": "Israel escalates attacks in Lebanon, killing four and breaching the ceasefire with Hezbollah.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/...",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 375
    },
    {
      "date": "Apr 25",
      "text": "U.S. and Iran reached a 2-week ceasefire, though Iran states no talks will occur under siege conditions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/...",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 375
    },
    {
      "date": "Apr 25",
      "text": "Concerns emerge regarding U.S. supplies of critical and costly weapons, with rebuilding stockpiles potentially taking up to four years.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/...",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 375
    },
    {
      "date": "Apr 25",
      "text": "Iran’s Armed Forces Command threatens a response if the U.S. blockade of the Strait of Hormuz continues.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/...",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 375
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
      "perspective": "US Diplomatic Stance",
      "headline": "Trump Halts Iran Talks, Citing Strong US Position",
      "summary": "President Trump has canceled plans to send envoys for peace talks with Iran, stating the U.S. holds a strong negotiating position. This move follows Tehran's refusal of direct talks, contributing to ongoing uncertainty in the Middle East conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 370
    },
    {
      "perspective": "Iranian Resistance",
      "headline": "Iran Rejects Direct Talks, Threatens Retaliation Amid Blockade",
      "summary": "Iran has refused direct talks with the U.S., maintaining a firm stance amidst the ongoing conflict and a U.S. blockade. The Iranian Armed Forces Command has threatened a strong response if the blockade persists, following reports of significant damage to U.S. bases.",
      "tone": "defiant",
      "latestSinceUpdate": 370
    },
    {
      "perspective": "Lebanon Front Escalation",
      "headline": "Israel Escalates Attacks in Lebanon, Hezbollah Remains Defiant",
      "summary": "Israel has intensified its strikes in southern Lebanon, killing four and escalating breaches of a nominal ceasefire. Hezbollah has expressed defiance, questioning the effectiveness of any ceasefire amidst continued cross-border attacks.",
      "tone": "strained",
      "latestSinceUpdate": 370
    },
    {
      "perspective": "Global Oil Market",
      "headline": "Hormuz Standoff Threatens Global Oil Supply and Demand",
      "summary": "The ongoing standoff in the Strait of Hormuz, marked by ship seizures, continues to pose a significant threat to global oil supplies. Analysts warn of a potential 'Billion-Barrel Hormuz Oil Shock' that could severely impact demand and market stability.",
      "tone": "anxious",
      "latestSinceUpdate": 370
    }
  ]
});

export default LATEST_SNAPSHOT;
