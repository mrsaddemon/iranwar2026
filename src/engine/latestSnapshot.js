export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 843,
  "lastUpdated": "2026-05-31",
  "lastSyncedAt": "2026-05-31T23:31:59.101Z",
  "warDay": 93,
  "summary": "Ongoing US-Iran diplomatic efforts are complicated by new US military strikes and warnings in the Gulf, while Israel expands its operations in Lebanon and Gaza against Hezbollah amidst continued cross-border attacks.",
  "lastNarrativeUpdate": "2026-05-31",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 60,
    "summary": "No formal ceasefire is in effect, though diplomatic talks between the US and Iran are ongoing amidst active military engagements."
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
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.3,
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 80,
    "oilDisruption": 75,
    "tradeImpact": 68,
    "sanctionsPressure": 63,
    "globalPressure": 80,
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
      "date": "May 29-30",
      "text": "US military warns it is ready to resume combat in the Gulf if needed.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMidEFVX3lxTFB1QXlGRWt2N1daSW9BM01MUW1VNmJtNElYdXFxRU52UEVWaGwxQmJCZE5wb1pQTzg1SjlYTFJsYndEX29saWxjLWItUlE0WU5XOTQ3VVRMZ1dJY3VvYlVna3RIc1lEajZZT2txdk8zYkxOQnk4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 843
    },
    {
      "date": "May 29-30",
      "text": "US military disables a ship with a Hellfire missile in the Gulf of Oman and launches new strikes on Iran, targeting missile sites and boats.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9WaDJGdEZ0YndpVVJXUlUydGhtZnZWVUFDdnR6MUdTSmhQNVMyZmRKUGMxZC0yTUNNTGw1Q2Q1M3VsNWVacFJ2X3cwd1BiOTd4b1BSYWxBM1Bodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 843
    },
    {
      "date": "May 29-30",
      "text": "US military hits a commercial ship attempting to reach Iran while peace talks continue.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxNRUU3MHlOVjVsQWhJMENWVEsxWGhjVTd5Sm82Q3BNYjM4N0VjTjV2ektpLTlsTjZCMllrYmFmd3N0TDZRbnl3WFpkTXRWbEVJUFB0SkVsUzc0SU9BS1lacDNCWHR6bEhuQV8za0ZlN0w1QUMxX1Q3Z3hGUy05emdHRGg2VjljS0JTUkFoU19idzBWYlN1bUNhQ0ZpSG9RNDJDZzFRQXJKMFdNNWUtbGIyNG5DVnFoVXAxTi1ERXlHOWwyNnBCdWZrdjN2LTU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 843
    },
    {
      "date": "May 29-30",
      "text": "Trump puts off a 'Final Determination' on an Iran proposal and is seeking edits to a possible US-Iran agreement, including on enriched uranium and the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxNZXhWUGE0ZjBSTk1fTlJYRm84Tk9saERWQVhYcUdIOFFhZjFXTGgyREVGRUNUbmhNdDRCZkFicDU3WkhDQVpxTzBMUG9uWlZoQWRTeVhlLWY0dEJKamxrVTNxM1BpWXpRTl9wcElGSnQxaExvRVhfZ3pJV3BzdzBha01INnJaVHJYYmlVY1ZfX3pYN01BeEd2LTJUSW1lbjdm?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 843
    },
    {
      "date": "May 29-30",
      "text": "Iran promises 'utter ruin' if war restarts, while stating US talks continue despite ongoing strikes.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 843
    },
    {
      "date": "May 29-30",
      "text": "Netanyahu orders a deeper Israeli incursion into Lebanon to hit Hezbollah, and Israel strikes Lebanon and Gaza.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi1wFBVV95cUxQZ19uYndNRDdIVlVObEJCQjhHUnhNUTRqWTM3NFppenBsU01tWU5ILXU2ZHA3QmVHYllWU0ZQeU1nVzlITlhsUDlFTkJoU19OUXJPUFFyMDBYZ2l2a3EtSVo0YkFRQUF0bTlvOVJ3Vm40dHFGTUoyNm9ZTnlBQWltYXZxak1xLXdOQ29XR05ZNzd3cTF1MWtuZjZRZW14dWZlLWhEcHJfRzVMTlZTMVhhbHdsQ2I0S3hIY2NqdWZMUlZWNjJteVhRd19QVEpJVFBVMjdPd0NtRQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 843
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
      "perspective": "US Administration",
      "headline": "Trump's Demands Shape Iran Truce",
      "summary": "President Trump has outlined demands for Iran and has yet to give final approval to a tentative 60-day truce agreement, with US officials emphasizing the military's capability to resume strikes if necessary. Negotiations are ongoing, but the administration maintains a firm stance.",
      "tone": "strained",
      "latestSinceUpdate": 830
    },
    {
      "perspective": "Iran",
      "headline": "Iran Responds to US Strikes Amid Truce Talks",
      "summary": "Iran has agreed to a tentative 60-day truce but continues to target American bases in response to fresh US strikes, including a US military hit on a commercial ship attempting to reach Iran. This indicates a volatile situation despite diplomatic efforts.",
      "tone": "defiant",
      "latestSinceUpdate": 830
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Hezbollah's Drone Threat Escalates Border Conflict",
      "summary": "Hezbollah has intensified its attacks on northern Israel using rockets and advanced fibre-optic drones, prompting Israel to shut schools near the border. This regional conflict continues to escalate, posing a significant security challenge for Israel.",
      "tone": "anxious",
      "latestSinceUpdate": 830
    }
  ]
});

export default LATEST_SNAPSHOT;
