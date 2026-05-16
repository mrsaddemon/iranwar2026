export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 660,
  "lastUpdated": "2026-05-16",
  "lastSyncedAt": "2026-05-16T07:07:26.920Z",
  "warDay": 78,
  "summary": "The Iran-Israel conflict continues with ongoing strikes in Lebanon and tensions near the Strait of Hormuz, despite a fragile ceasefire extension, while global powers assess the shifting geopolitical landscape.",
  "lastNarrativeUpdate": "2026-05-16",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 7,
    "summary": "A ceasefire in Lebanon has been extended with US involvement, but ongoing Israeli strikes and Hezbollah actions indicate its fragility and partial violation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.65
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.68,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 56,
    "globalPressure": 66,
    "allianceInfluence": 62
  },
  "alliance": {
    "russiaIntelSupport": false,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "May 13",
      "text": "Lebanon ceasefire extended, but Israel launched new attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/iran-update-special-report-may-13",
      "sourceName": "Google News",
      "latestSinceUpdate": 660
    },
    {
      "date": "May 16",
      "text": "Israel conducted strikes in Southern Lebanon amid escalating tensions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/us-israel-iran-latest-news",
      "sourceName": "Google News",
      "latestSinceUpdate": 660
    },
    {
      "date": "May 16",
      "text": "Report reveals UAE secretly launched strikes on Iran, attacking an oil refinery during the war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/uae-secretly-launched-strikes-on-iran",
      "sourceName": "Google News",
      "latestSinceUpdate": 660
    },
    {
      "date": "May 16",
      "text": "Tensions flared near the Strait of Hormuz with one ship seized and another sunk.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/tensions-flare-strait-of-hormuz",
      "sourceName": "Google News",
      "latestSinceUpdate": 660
    },
    {
      "date": "May 16",
      "text": "Lebanon reported six killed in an Israeli strike.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/lebanon-six-killed-israeli-strike",
      "sourceName": "Google News",
      "latestSinceUpdate": 660
    },
    {
      "date": "May 16",
      "text": "Hezbollah launched a drone at Mount Meron, resulting in no injuries.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/hezbollah-drone-mount-meron",
      "sourceName": "Google News",
      "latestSinceUpdate": 660
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
      "perspective": "Regional Anxiety",
      "headline": "Iranians on edge as war looms, Strait of Hormuz tensions rise",
      "summary": "Iranians are reportedly on edge due to the threat of renewed conflict, while Iran asserts control over the Strait of Hormuz, declaring it open to cooperative ships. Oman finds itself caught between US and Iranian interests regarding the strait.",
      "tone": "anxious",
      "latestSinceUpdate": 658
    },
    {
      "perspective": "US Political/Military",
      "headline": "Trump's role in Iran conflict and US military concerns",
      "summary": "Former President Trump has threatened more strikes on Iran if a deal is not signed quickly, while also claiming China offered to help end the conflict. Reports suggest Trump is impacting the U.S. military, and a program to prevent civilian deaths was quietly shut down.",
      "tone": "strained",
      "latestSinceUpdate": 658
    },
    {
      "perspective": "China's Geopolitical Position",
      "headline": "China gains strategic advantage amid Iran war",
      "summary": "An intelligence report indicates that China is gaining a significant advantage over the U.S. during the ongoing Iran conflict. This comes as China's potential role in mediating or influencing the Strait of Hormuz situation is also being discussed.",
      "tone": "neutral",
      "latestSinceUpdate": 658
    }
  ]
});

export default LATEST_SNAPSHOT;
