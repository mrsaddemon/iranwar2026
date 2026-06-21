export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1024,
  "lastUpdated": "2026-06-21",
  "lastSyncedAt": "2026-06-21T11:49:57.516Z",
  "warDay": 114,
  "summary": "US and Iran are engaged in high-level negotiations in Switzerland to end the war, amidst Iran's claims of closing the Strait of Hormuz and continued Israeli-Hezbollah clashes in Lebanon despite a ceasefire agreement.",
  "lastNarrativeUpdate": "2026-06-21",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 7,
    "summary": "A ceasefire agreement between Israel and Hezbollah is in place but is being actively violated by both sides, leading to continued clashes in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
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
    "nuclearIndex": 35,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "text": "High-level US-Iran negotiations kick off in Switzerland to discuss a preliminary agreement to end the war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxOZmp5TjlZb1JrUGpleDlrRmRqd0dLU1EwRkt5cGROd0hwcnNqa1BLZ1ZGY0RBQWtJbC1uTUU3TWRYbE1qS01qNF8zMlBNbzRTQTZSWEpZekpZWDNNTWx0R0lENi1YaHNSSDZqUDZuU2FNVnVMTVE3dld5TkFLb25WYjkxYVBnX2JPeWg0TmtZdmk4WkhqRmlqVXVqVDU2UXV3U3k4TzdGOGRSLTN5djJDakJCZzN2ZDJp0gG-AUFVX3lxTE5Mbjh3RXJkTkQ5S0t2OFdyWHF1VEJtY213T3FiR1l1clJsTDhyRm5pa0h6aU01cXR0WGdNVE04ZGs0eE5haGpXdGZBVjM2cGtWc2tMOVBDU191M0c5eXJLeV9fQnVWdEgwY0NtVjlheEpsS2lzTm9WOHRIQVA2LUxsaTVHUTJ2Rm9NcElIZXNGSWp2VWcyNG5DM1c1WmpEMXNWTGYwN0V1VE5vMTl6ZHZwZXdDU2hCb0VWQUc2bWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1024
    },
    {
      "date": "Jun 21",
      "text": "Iran claims to have closed the Strait of Hormuz over Israeli strikes in Lebanon and ceasefire violations.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQUHFHQURrcjZ2R1g4MkZTcmNqU2lsOFpDNzlUeE4tcFl2eWd5bFkxTEdPcFV6clh1NTFjMkFBTW9qWGhzRW14Y25HdmRseVItckNBLW11M3o4MGtHWExoZUZCNGpHWlFxa0ZUMEU4Z3VHT1NvZmFqbThiQWdrRUJhMXBod1JVb3lYdjNqTEVodGREamkwQ1c3ZThjMkktUDQ4Mm9pVklNMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1024
    },
    {
      "date": "Jun 21",
      "text": "The US denies Iran's claim regarding the closure of the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE5RZFliamhHTXRHRms3RUVKMnlSZjVQUi1JSUp0cFEtWVJXcHRQUk9JUDVNOEltUFh2S0d3Q1BBX1NCUmpGUVA5aE5GWHZJQ1hFeU5DeQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1024
    },
    {
      "date": "Jun 21",
      "text": "Israeli attacks kill dozens in Lebanon as US and Iran prepare for truce talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxPSDl2OG5XVG5xYXVhY2xOd2I3QXV3T2d0dDVGOTdZNk1NMDRVUFJMX2FFVjdrNkVkRzhOYURfS3ppUF9rLVZ2SDM5UU41Yk1HZWhWX0hvbFlpVUlBdjNmbE83ZmVLYzdfUXc2Q1FqMUFnaEhMaFNDR3JnUlJ1SjBpeFNkVTN2V215VlZCT2piTlRqZU82ZnB4dVlfTnBpS3k5UEZpajEtczg1Nkw1VFNQbk1jU1bSAboBQVVfeXFMTmx0dHpURVpIa0lJU1N1U01wMlBTUmFuamFZTTZPWEQyamhsdy1vTHlGTmxxTDRJYmFDN1hIVHE0Tm1HbmRUQUM5MUNiNG5sTFJhWE9vUzFnRHdicnAzN0RuNksxNkp6WjFOTm9wMkxrUkdQbTFNYnRKN00zblU0U3d0bmU3Y3JCbm5vVkdDcWdkWGt2X1RzSjZRWkw3QnJ1Mm1nb2xNMUhHdi1NSkhGbHhzSUpkc20wU3pn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1024
    },
    {
      "date": "Jun 21",
      "text": "An IDF soldier was killed and 13 injured in an overnight Hezbollah attack in southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNY2Zwa3hvcHVfWVpmSXR0ak8yVEwyaXFtTUxFVGdDd1Jyc0ZWel9lelJubVlnbmtCYVc3VjJXOGNtdkJlVUF1S2VqbVBGTXczSnFCNURyWDFfX2hzS3BwSVdXeWJsY3ZwQUQyR3lKb0FVNzl3TWFkN3MwbVlFZjc0NjczZ1Bya0M4LXBjU1VyRXlTR25Xb20za29iQ0hxN1JyNXYzN1UwN3l4NVBaQ0QycEpWV3TSAboBQVVfeXFMTk9XQVhKaDIwazhXak53NzRYcjFkYld4RVlsNXVwd0JQOUFUU05PNWtkblpPRGZIcTlMbjlBa2t2a25WQzlEbjU2MmlmX2s3YzBNWHlZT0FJYy02b19DSDJzVm13c1h4YkFfbFcyaWdGdzdud3F2eDlZVF9ITG50OUJOQ1FPa2ZEVnF3TEhBTWFtcVdTUTlrajQ3aFdVNWREUlJ3bHJsbXhoUTZDcUFpTVQyanNEalJQRlNR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1022
    },
    {
      "date": "Jun 21",
      "text": "US Vice President JD Vance slams Israeli reaction to the Iran deal as the U.S. military lifts a blockade.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxNWDVyRkR6VWszZFAta3UzZkFoa1pUdXpBWXZKSGc5QU8zRXduQWd3dFNQLW8tOEd4Z0h6Ykx0bzRBMmZhMlZJSGJ5QUdHWFYwcGRmWjg0YVZ6cXItaGU3QVFPeHFMaUkwbnI5V0hvcXlfd01zdEM2aWVCeVpNS3BBcTlEOElXbC1mM2Y2cGxhRUVmcVpfM3ZiejJ1a2lUM2ZlYkpuTXBpZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1024
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
