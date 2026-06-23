export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1040,
  "lastUpdated": "2026-06-23",
  "lastSyncedAt": "2026-06-23T08:04:44.292Z",
  "warDay": 116,
  "summary": "US and Iran engage in crucial talks in Switzerland, making progress on nuclear inspections and a roadmap for a final deal, while the Strait of Hormuz experienced a temporary closure amidst a fragile Israel-Hezbollah ceasefire.",
  "lastNarrativeUpdate": "2026-06-23",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "A ceasefire between Israel and Hezbollah has been agreed upon, but reports indicate continued strikes from both sides, rendering the truce fragile."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
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
      "date": "Jun 23",
      "text": "US and Iran make 'encouraging progress' in crucial talks, mediators say.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/",
      "sourceName": "Google News",
      "latestSinceUpdate": 1040
    },
    {
      "date": "Jun 23",
      "text": "Vance lands in Switzerland as Iran says Strait of Hormuz is closed over ceasefire violations.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/",
      "sourceName": "Google News",
      "latestSinceUpdate": 1040
    },
    {
      "date": "Jun 22",
      "text": "Israel and Hezbollah agree ceasefire, US says, as more Lebanon strikes reported.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/",
      "sourceName": "Google News",
      "latestSinceUpdate": 1040
    },
    {
      "date": "Jun 22",
      "text": "Iran says it is closing Strait of Hormuz over Israeli strikes in Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/",
      "sourceName": "Google News",
      "latestSinceUpdate": 1040
    },
    {
      "date": "Jun 22",
      "text": "Strait of Hormuz traffic steadily increasing but well below pre-war levels.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/",
      "sourceName": "Google News",
      "latestSinceUpdate": 1040
    },
    {
      "date": "Jun 21",
      "text": "Vance says Iran to let international nuclear inspections resume after 'good day' of talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/",
      "sourceName": "Google News",
      "latestSinceUpdate": 1040
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
      "perspective": "US/Mediators",
      "headline": "Progress in US-Iran talks and efforts to secure shipping lanes",
      "summary": "Mediators report encouraging progress in US-Iran talks, with a mechanism being developed to ensure the Strait of Hormuz remains open. Vance is actively involved in peace talks following Iran's actions.",
      "tone": "strained",
      "latestSinceUpdate": 1038
    },
    {
      "perspective": "Iran",
      "headline": "Defiance over Hormuz closure amid Israeli actions",
      "summary": "Iran temporarily closed the Strait of Hormuz in response to Israeli strikes in Lebanon, asserting control over the vital waterway. Tehran stated the Strait is not a 'personal casino' for others.",
      "tone": "defiant",
      "latestSinceUpdate": 1038
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Continued conflict despite ceasefire declarations",
      "summary": "Despite US-brokered ceasefire agreements, Israel and Hezbollah have continued to exchange strikes and engage in military operations. The IDF reported capturing a Hezbollah drone factory in south Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 1038
    }
  ]
});

export default LATEST_SNAPSHOT;
