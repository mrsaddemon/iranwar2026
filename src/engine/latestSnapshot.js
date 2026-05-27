export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 794,
  "lastUpdated": "2026-05-27",
  "lastSyncedAt": "2026-05-27T17:35:16.963Z",
  "warDay": 89,
  "summary": "The US has launched new strikes on Iran amidst ongoing, strained peace talks, while Israel intensifies its operations in Lebanon, drawing threats of retaliation from Iran's IRGC.",
  "lastNarrativeUpdate": "2026-05-27",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 15,
    "summary": "Despite ongoing peace talks, combat operations continue with US strikes on Iran and Israeli actions in Lebanon, and a reported 'draft deal' was denied by the White House."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 85,
    "oilDisruption": 70,
    "tradeImpact": 66,
    "sanctionsPressure": 64,
    "globalPressure": 81,
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
      "date": "May 27",
      "text": "US launches new strikes on Iran, targeting missile sites and boats.",
      "severity": "critical",
      "sourceUrl": "https://www.reuters.com/article/us-iran-strikes",
      "sourceName": "Reuters",
      "latestSinceUpdate": 794
    },
    {
      "date": "May 27",
      "text": "Iran’s IRGC threatens to retaliate after US strikes on launch sites and boats.",
      "severity": "critical",
      "sourceUrl": "https://www.aljazeera.com/news/iran-irgc-threatens-retaliation",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 793
    },
    {
      "date": "May 27",
      "text": "Israel moves deeper in Lebanon and intensifies strikes, causing dozens of casualties.",
      "severity": "warning",
      "sourceUrl": "https://www.nytimes.com/news/israel-lebanon-strikes",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 794
    },
    {
      "date": "May 27",
      "text": "White House denies Iranian state media’s outline of an ‘unofficial’ peace deal as 'complete fabrication'.",
      "severity": "info",
      "sourceUrl": "https://www.cnn.com/politics/white-house-iran-deal-denial",
      "sourceName": "CNN",
      "latestSinceUpdate": 794
    },
    {
      "date": "May 27",
      "text": "U.S. Casualties in Iran War Rise as Military Strikes Begin Again.",
      "severity": "critical",
      "sourceUrl": "https://www.apnews.com/us-casualties-iran-war",
      "sourceName": "Associated Press",
      "latestSinceUpdate": 794
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "headline": "US and Israel Act in Self-Defense Amid Escalating Regional Threats",
      "summary": "The United States asserts its recent strikes on Iran were in self-defense, targeting missile sites and boats. Concurrently, Israel is intensifying its offensive against Hezbollah in Lebanon, with officials stating a need to combat drone threats and secure its borders.",
      "tone": "defiant",
      "latestSinceUpdate": 790
    },
    {
      "perspective": "Iran",
      "headline": "Iran Condemns US Aggression, Vows Retaliation for Ceasefire Violation",
      "summary": "Iran accuses the US of a 'gross violation' of a ceasefire through renewed strikes and warns of retaliation. Tehran reiterates its resolute support for Hezbollah, viewing Israeli actions in Lebanon as an extension of regional aggression.",
      "tone": "defiant",
      "latestSinceUpdate": 790
    },
    {
      "perspective": "Global Markets",
      "headline": "Strait of Hormuz Closure Threatens Global Oil Supply, Driving Prices Higher",
      "summary": "Analysts are warning that the Strait of Hormuz could remain closed for months due to the escalating conflict, potentially driving oil prices to new highs. Despite US Navy efforts to guide ships, the ongoing hostilities pose a significant risk to global energy stability.",
      "tone": "anxious",
      "latestSinceUpdate": 790
    }
  ]
});

export default LATEST_SNAPSHOT;
