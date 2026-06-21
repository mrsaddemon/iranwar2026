export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1031,
  "lastUpdated": "2026-06-21",
  "lastSyncedAt": "2026-06-21T23:25:52.534Z",
  "warDay": 114,
  "summary": "US-Iran peace talks have commenced in Switzerland amidst Iran's closure of the Strait of Hormuz and escalating tensions in Lebanon involving Israeli military actions.",
  "lastNarrativeUpdate": "2026-06-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 1,
    "summary": "Despite preliminary agreement texts and ongoing talks, the closure of Hormuz and suspension of negotiations indicate no active ceasefire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
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
      "date": "Jun 21",
      "text": "Iran announces the closure of the Strait of Hormuz, leading to a jump in oil prices.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 1031
    },
    {
      "date": "Jun 21",
      "text": "US-Iran talks begin in Switzerland, with Vance heading to peace talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBFbVh2NGR4RU1xWVVYUExYN0FlNF8zRjFKenhqQlZnWk5OVkFJbzFlRHdJcUxwS1JiUFJoQ1dsUXFLN0tjMDVELUM3SHdVTjNMUTdLSXJBMGRKUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1031
    },
    {
      "date": "Jun 21",
      "text": "Iranian negotiators suspend talks with the US in protest over threats made by Trump.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxNWUZObHhFa2x5c3c5TXhIQXRZNzMzWFBvd1ZNNEYwZm1BOFFlVURKN0lzN3FCaHIwOW1zR1pqUjJOSkdWZmRWQ0dJTUJPQ2FpMzZwSUZlTDdOcXBRSlRGSkU2c0VpTFBldWNjbkd1R2JJRGZ4T2ZMOFJ4b3dMajVNNktOVU5maFVHQjhJNWJWSkdSTnBhNzI4V3c5MTZla3NuUEpadkhVLU4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1031
    },
    {
      "date": "Jun 21",
      "text": "IDF captures a Hezbollah drone factory and launch site in south Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOdTR4NjRud0F2U0J0NXZGZDQwM3hVNmtJODVnRjN3eVJMTTltV1U1MHlGVFVwSHJwMUxMTWJnaWszMm5Jc3BuZ3NhaHRiQkNIM3NUd0YyN0JoYWQyczd6OUlyNmVBQ1kzaFVIWGV2T2R3X200RnNKN3A5UTRraHhWSHNsdGV3amhKQ1ZpTElBNU5QS3haaFJwenZwUGhoUHhtczJpRWJBNTBjc3A2RlA3OUdXUnlGbmRlTW0weA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1031
    },
    {
      "date": "Jun 21",
      "text": "Israel directs its military to limit actions in Lebanon amidst persistent tensions.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 1031
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (15 headlines)"
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
      "headline": "Hormuz Closure Over Ceasefire Violations",
      "summary": "Iran asserts its right to close the Strait of Hormuz in response to perceived ceasefire violations and continued Israeli aggression in Lebanon, while engaging in peace talks.",
      "tone": "defiant",
      "latestSinceUpdate": 1022
    },
    {
      "perspective": "United States",
      "headline": "US Denies Hormuz Closure, Pushes for Peace",
      "summary": "The US denies Iran's claims of a closed Strait of Hormuz, actively monitors the waterway, and dispatches a negotiator to Switzerland to accelerate peace talks between the parties.",
      "tone": "strained",
      "latestSinceUpdate": 1022
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Fighting Persists Despite Ceasefire Attempts",
      "summary": "Despite multiple attempts at de-escalation, fighting persists between Israel and Hezbollah in Lebanon, marked by recent Israeli strikes and Hezbollah attacks.",
      "tone": "anxious",
      "latestSinceUpdate": 1022
    }
  ]
});

export default LATEST_SNAPSHOT;
