export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1760,
  "lastUpdated": "2026-08-12",
  "lastSyncedAt": "2026-08-12T17:07:36.251Z",
  "warDay": 166,
  "summary": "Mediators are pushing for US-Iran talks amidst Trump's demands for compensation and sanctions, while tensions remain high over the Strait of Hormuz and the fragile ceasefire in Lebanon.",
  "lastNarrativeUpdate": "2026-08-12",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 10,
    "summary": "A ceasefire in Lebanon is reported by Trump as working, but residents describe it as a 'prison' due to ongoing restrictions and conditions."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "date": "Aug 11",
      "text": "Mediators are pushing for US-Iran talks as a Memorandum of Understanding deadline approaches.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/iran-talks",
      "sourceName": "Google News",
      "latestSinceUpdate": 1760
    },
    {
      "date": "Aug 11",
      "text": "Trump pivots back to sanctions for Iran as other strategies to end the war reportedly fizzle.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/trump-sanctions",
      "sourceName": "Google News",
      "latestSinceUpdate": 1760
    },
    {
      "date": "Aug 10",
      "text": "Trump states he would require compensation from Iran as a condition for talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/trump-compensation",
      "sourceName": "Google News",
      "latestSinceUpdate": 1760
    },
    {
      "date": "Aug 10",
      "text": "Pakistan indicates the U.S. and Iran are close to a 'peace arrangement or a deal' while also reporting Israel's twin strikes on Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/pakistan-iran-deal",
      "sourceName": "Google News",
      "latestSinceUpdate": 1760
    },
    {
      "date": "Aug 10",
      "text": "Trump claims the U.S. has 'total control' over the Strait of Hormuz and might 'keep it', a claim Iran rejects.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/hormuz-control",
      "sourceName": "Google News",
      "latestSinceUpdate": 1760
    },
    {
      "date": "Aug 10",
      "text": "An Iranian military adviser suggests Iran could 'prolong' the war with the US until Trump is out of office.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/iran-prolong-war",
      "sourceName": "Google News",
      "latestSinceUpdate": 1760
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
      "perspective": "US/Trump Administration",
      "headline": "Trump Demands Compensation, Enforces Blockade",
      "summary": "The US administration, led by Trump, is demanding compensation from Iran as a condition for any talks, while actively enforcing a blockade of Iranian ports, including firing on vessels attempting to breach it. Trump claims control of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 1748
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran Resists Blockade, Elevates Military Leadership",
      "summary": "Iran is resisting the US blockade and its supreme leader is elevating military veterans prepared to confront the US. Iran has also implicitly demanded war reparations, which Trump has scoffed at.",
      "tone": "defiant",
      "latestSinceUpdate": 1748
    },
    {
      "perspective": "Regional Conflict Dynamics",
      "headline": "Hezbollah Strategy Shifts, Israeli Strikes Continue",
      "summary": "Hezbollah has adopted a new battlefield strategy posing challenges for Israeli and US leadership. Israel continues to conduct strikes, claiming precision, while warning of escalating attacks from Tehran.",
      "tone": "strained",
      "latestSinceUpdate": 1748
    },
    {
      "perspective": "Global Economic Impact",
      "headline": "Hormuz Deadlock Threatens Oil Prices",
      "summary": "The ongoing deadlock in the Strait of Hormuz, exacerbated by the US blockade and military actions, is causing uncertainty in global oil markets and could lead to significant price increases.",
      "tone": "anxious",
      "latestSinceUpdate": 1748
    }
  ]
});

export default LATEST_SNAPSHOT;
