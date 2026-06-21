export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1026,
  "lastUpdated": "2026-06-21",
  "lastSyncedAt": "2026-06-21T15:28:51.305Z",
  "warDay": 114,
  "summary": "US and Iran have begun peace talks in Switzerland amidst conflicting reports regarding Iran's closure of the Strait of Hormuz, while Israel has committed to a new ceasefire in Lebanon.",
  "lastNarrativeUpdate": "2026-06-21",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 7,
    "summary": "Israel has committed to a new ceasefire in Lebanon, but its troops remain in the area, and Iran cites Israeli strikes as a reason for its actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "text": "US-Iran peace talks begin in Switzerland with JD Vance meeting Iranian officials.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxOMG40STJrQkMxTUlTM2J4bkNpWXJTb0daR3BXaEpNZGx5dVVzaVFsQU9xRXU0QkVlSWw0dXpmSkdYNEVBZmEzVmhma0pyTUg0TFUyMHJnOFQzRFk0Zk5PeHpvVmpVXzZLMVhpS3JoeExqNFhwdkdDSXRfeElvb0VUTGk4bFhvZExWTHFYcWItUWs0cmpNY1R0ZjlDdGZaLTlXTW5VZkVnS1g0a0dhaFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1026
    },
    {
      "date": "Jun 21",
      "text": "Iran claims to have closed the Strait of Hormuz over Israeli strikes in Lebanon and ceasefire violations.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQUHFHQURrcjZ2R1g4MkZTcmNqU2lsOFpDNzlUeE4tcFl2eWd5bFkxTEdPcFV6clh1NTFjMkFBTW9qWGhzRW14Y25HdmRseVItckNBLW11M3o4MGtHWExoZUZCNGpHWlFxa0ZUMEU4Z3VHT1NvZmFqbThiQWdrRUJhMXBod1JVb3lYdjNqTEVodGREamkwQ1c3ZThjMkktUDQ4Mm9pVklNMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1026
    },
    {
      "date": "Jun 21",
      "text": "President Trump warns Iran regarding the Strait of Hormuz, stating the U.S. may 'take over'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiygFBVV95cUxPeFIwZ3MyZ05VX0lBajRZd2VTb1ZSRGQ1bmw2ODBSTWxuTHJINktzcGRmbmtjTlA4M1FzcW01YkMtM3JVcUFJeGdGMnZ6MjdMMzBQX2M1b19tdTg3ZFBhQ291TW1zUkpUVk5KT0E3THdMZkR6NHE1MG1aQmdCTEdfZEVLNDJvakoyX1RFOHF2SGtTVGhpZEU4ZGhwenlxVXY5TV9MLXdvN0N6YWlOcjJBc3ppMVlzbEd0S3JodENuTWh4bkxnUEpFQlNR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 1026
    },
    {
      "date": "Jun 21",
      "text": "Israel commits to a new ceasefire in Lebanon, but its troops will remain in the area.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1026
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
