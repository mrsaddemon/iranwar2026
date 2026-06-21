export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1030,
  "lastUpdated": "2026-06-21",
  "lastSyncedAt": "2026-06-21T22:03:36.427Z",
  "warDay": 114,
  "summary": "US-Iran peace talks have begun in Switzerland amidst conflicting claims from Iran regarding the closure of the Strait of Hormuz and threats from the U.S. President, while Israel has committed to a ceasefire in Lebanon.",
  "lastNarrativeUpdate": "2026-06-21",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 1,
    "summary": "Peace talks between the U.S. and Iran are ongoing but highly unstable due to Iran's claims of closing the Strait of Hormuz and subsequent suspension of talks, while a separate ceasefire in Lebanon is in effect but with Israeli troops remaining."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 83
      },
      "behavior": {
        "precision": 0.78,
        "aggression": 0.65
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 63
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.88
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
      "date": "Jun 21",
      "text": "Iran claims to have closed the Strait of Hormuz over ceasefire violations and Israeli strikes in Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQUHFHQURrcjZ2R1g4MkZTcmNqU2lsOFpDNzlUeE4tcFl2eWd5bFkxTEdPcFV6clh1NTFjMkFBTW9qWGhzRW14Y25HdmRseVItckNBLW11M3o4MGtHWExoZUZCNGpHWlFxa0ZUMEU4Z3VHT1NvZmFqbThiQWdrRUJhMXBod1JVb3lYdjNqTEVodGREamkwQ1c3ZThjMkktUDQ4Mm9pVklNMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1030
    },
    {
      "date": "Jun 21",
      "text": "US-Iran peace talks begin in Switzerland with Vance leading negotiations.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1030
    },
    {
      "date": "Jun 21",
      "text": "Iranian negotiators suspend talks with the US in protest over Trump's threats.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxNWUZObHhFa2x5c3c5TXhIQXRZNzMzWFBvd1ZNNEYwZm1BOFFlVURKN0lzN3FCaHIwOW1zR1pqUjJOSkdWZmRWQ0dJTUJPQ2FpMzZwSUZlTDdOcXBRSlRGSkU2c0VpTFBldWNjbkd1R2JJRGZ4T2ZMOFJ4b3dMajVNNktOVU5maFVHQjhJNWJWSkdSTnBhNzI4V3c5MTZla3NuUEpadkhVLU4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1030
    },
    {
      "date": "Jun 21",
      "text": "President Trump warns Iran of severe consequences, including 'taking over' the country, if the Strait of Hormuz is closed.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTFBKUHVPNDNYNkNpSFUyZi1jUmdDVHZpTTQ5NW8xd08wU0hNTTBuOHBzd3dvMm84aHdmcnphRUpwTV9DRVNZYXF4ZzVvaE8ydFJKcVVtS0J3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1030
    },
    {
      "date": "Jun 21",
      "text": "Israel commits to a new ceasefire in Lebanon, but states troops will remain in the area.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1030
    },
    {
      "date": "Jun 21",
      "text": "IDF captures a Hezbollah drone factory and launch site hidden inside a south Lebanon mountain.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOdTR4NjRud0F2U0J0NXZGZDQwM3hVNmtJODVnRjN3eVJMTTltV1U1MHlGVFVwSHJwMUxMTWJnaWszMm5Jc3BuZ3NhaHRiQkNIM3NUd0YyN0JoYWQyczd6OUlyNmVBQ1kzaFVIWGV2T2R3X200RnNKN3A5UTRraHhWSHNsdGV3amhKQ1ZpTElBNU5QS3haaFJwenZwUGhoUHhtczJpRWJBNTBjc3A2RlA3OUdXUnlGbmRlTW0weA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1030
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
