export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1032,
  "lastUpdated": "2026-06-22",
  "lastSyncedAt": "2026-06-22T02:05:09.195Z",
  "warDay": 115,
  "summary": "US-Iran peace talks are underway in Switzerland amidst Iran's claims of closing the Strait of Hormuz and a fragile ceasefire agreement between Israel and Hezbollah in Lebanon.",
  "lastNarrativeUpdate": "2026-06-22",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 1,
    "summary": "A ceasefire between Israel and Hezbollah has been agreed upon, but tensions persist and Iran claims Hormuz closure due to Israeli actions in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
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
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Jun 22",
      "text": "US-Iran peace talks begin in Switzerland with U.S. envoy Vance present.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1032
    },
    {
      "date": "Jun 22",
      "text": "Iran claims closure of the Strait of Hormuz due to alleged Israeli strikes in Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQUHFHQURrcjZ2R1g4MkZTcmNqU2lsOFpDNzlUeE4tcFl2eWd5bFkxTEdPcFV6clh1NTFjMkFBTW9qWGhzRW14Y25HdmRseVItckNBLW11M3o4MGtHWExoZUZCNGpHWlFxa0ZUMEU4Z3VHT1NvZmFqbThiQWdrRUJhMXBod1JVb3lYdjNqTEVodGREamkwQ1c3ZThjMkktUDQ4Mm9pVklNMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1032
    },
    {
      "date": "Jun 22",
      "text": "U.S. reports that vessels are still passing through the Strait of Hormuz despite Iran's claims.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1032
    },
    {
      "date": "Jun 22",
      "text": "Israel and Hezbollah agree to halt fighting, with Israel committing to limit military actions in Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxNdDdtMWZ0SDdDbThCNEFjb2p2aE5QVFhETEFOT0RyUG9MaHlta2VNWWpjWE1sOFNEM3pYOE9NYkhRM2x3d0hnYzRQZ2F6eG5zSl9aZEpHd0xaRFR6LTFfNHFKdFBWVXdZSTNMMVZOY3RaZmVjRVZ0T0ZYVEZvWU8xZDBtdk5OMGpMaFhOR3RKU3MyUHFQU3NmMzluUFlFaDBD?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1032
    },
    {
      "date": "Jun 22",
      "text": "IDF captures a Hezbollah drone factory and launch site hidden inside a south Lebanon mountain.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOdTR4NjRud0F2U0J0NXZGZDQwM3hVNmtJODVnRjN3eVJMTTltV1U1MHlGVFVwSHJwMUxMTWJnaWszMm5Jc3BuZ3NhaHRiQkNIM3NUd0YyN0JoYWQyczd6OUlyNmVBQ1kzaFVIWGV2T2R3X200RnNKN3A5UTRraHhWSHNsdGV3amhKQ1ZpTElBNU5QS3haaFJwenZwUGhoUHhtczJpRWJBNTBjc3A2RlA3OUdXUnlGbmRlTW0weA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1032
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
      "headline": "Hormuz Closure and Talks",
      "summary": "Tehran asserts its right to close the Strait of Hormuz in response to alleged Israeli ceasefire violations in Lebanon, while simultaneously engaging in peace talks with the U.S. in Switzerland.",
      "tone": "defiant",
      "latestSinceUpdate": 1032
    },
    {
      "perspective": "US/International",
      "headline": "Diplomacy Amidst Escalation",
      "summary": "The U.S. is mediating peace talks between Iran and the U.S. in Switzerland, while monitoring the Strait of Hormuz and confirming a fragile ceasefire between Israel and Hezbollah.",
      "tone": "strained",
      "latestSinceUpdate": 1032
    },
    {
      "perspective": "Israel",
      "headline": "Ceasefire and Continued Operations",
      "summary": "Israel has agreed to a ceasefire with Hezbollah and committed to limiting actions in Lebanon, even as its forces continue operations against Hezbollah infrastructure.",
      "tone": "neutral",
      "latestSinceUpdate": 1032
    }
  ]
});

export default LATEST_SNAPSHOT;
