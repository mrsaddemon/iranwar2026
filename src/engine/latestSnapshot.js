export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1022,
  "lastUpdated": "2026-06-21",
  "lastSyncedAt": "2026-06-21T05:10:04.591Z",
  "warDay": 114,
  "summary": "Iran claims to have closed the Strait of Hormuz due to alleged ceasefire violations and Israeli strikes in Lebanon, while US-Iran peace talks are set to begin in Switzerland amidst continued regional fighting.",
  "lastNarrativeUpdate": "2026-06-21",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 7,
    "summary": "Despite ongoing peace talks, a ceasefire between Israel and Hezbollah remains fragile and largely unobserved, with continued fighting and accusations of violations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.4
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
        "precision": 0.6,
        "aggression": 0.9
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
      "date": "Jun 21",
      "text": "Iran claims to have closed the Strait of Hormuz over ceasefire violations and continued Israeli strikes in Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxNYWZLRUlHdXhuQXlwNkpEVUlGa2tQSEs5WmJzQUQwRFVzT3lsOG43LWNyOWNlQlFxM2VrQ2VaQVIwR0RGTWljb0JYSkFJeU9FZ3dERzdONnVrdmhXSlZpTjd4WFNnWno0OUdRV2QzbWVMSllVekxQel9PYkZhWlN0VHNkVGJyMGw4RVFkbk1lZ3ZKem14LWU0eWVn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1022
    },
    {
      "date": "Jun 21",
      "text": "The US denies Iran's claim of closing the Strait of Hormuz and states its forces are monitoring the strait to ensure it remains open.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxQOEt1ZGR5cFBKRG1mSHlLQTc3TnpyMnVnaWltNHQ1eXpockxLYVhxeVlqdmRMeThjck83dVdad2s0eTJOblROeE1GNkJWeF94RTE3cEwyNEFSWTVIaTZITHAtbTNMeS13dmtXUFZrUzJHZjNMdW9ReHZpOFhELUJaX2hNU1BLblRBYno3UHVBT1djajVIdlVQQ1hGb0RuR19wZHA0dUZXX1VrSlJPQVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1022
    },
    {
      "date": "Jun 21",
      "text": "US negotiator JD Vance is heading to Switzerland to accelerate peace talks between the US and Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxOMG40STJrQkMxTUlTM2J4bkNpWXJTb0daR3BXaEpNZGx5dVVzaVFsQU9xRXU0QkVlSWw0dXpmSkdYNEVBZmEzVmhma0pyTUg0TFUyMHJnOFQzRFk0Zk5PeHpvVmpVXzZLMVhpS3JoeExqNFhwdkdDSXRfeElvb0VUTGk4bFhvZExWTHFYcWItUWs0cmpNY1R0ZjlDdGZaLTlXTW5VZkVnS1g0a0dhaFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1022
    },
    {
      "date": "Jun 21",
      "text": "Israeli strikes have killed 32 people in Lebanon, raising concerns for the ongoing US-Iran talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxPSDl2OG5XVG5xYXVhY2xOd2I3QXV3T2d0dDVGOTdZNk1NMDRVUFJMX2FFVjdrNkVkRzhOYURfS3ppUF9rLVZ2SDM5UU41Yk1HZWhWX0hvbFlpVUlBdjNmbE83ZmVLYzdfUXc2Q1FqMUFnaEhMaFNDR3JnUlJ1SjBpeFNkVTN2V215VlZCT2piTlRqZU82ZnB4dVlfTnBpS3k5UEZpajEtczg1Nkw1VFNQbk1jU1bSAboBQVVfeXFMTmx0dHpURVpIa0lJU1N1U01wMlBTUmFuamFZTTZPWEQyamhsdy1vTHlGTmxxTDRJYmFDN1hIVHE0Tm1HbmRUQUM5MUNiNG5sTFJhWE9vUzFnRHdicnAzN0RuNksxNkp6WjFOTm9wMkxrUkdQbTFNYnRKN00zblU0U3d0bmU3Y3JCbm5vVkdDcWdkWGt2X1RzSjZRWkw3QnJ1Mm1nb2xNMUhHdi1NSkhGbHhzSUpkc20wU3pn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1022
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
      "text": "Iran accuses the US and Israel of ceasefire violations.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxQT1BabmdwX3VxQ0RGLTQyX2M5eGVvdVh3VExzNUpRcTc3LU1SNnNiN1ZFOGZNSDYxS2lZV1ZPUDVKemlpSHFvSTlNXzhXS1JjWW40ZGQtNWpRMDljb25BaUEzR19Lbi11alFUVW5sOHNmMXR6cXRoQmpTN0drVi1CR1I5UHU2aElpWWV4dFJYYlZNS25sVVJpbFJ2WTh0SGxQWWJDZ0ZtRGF6Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "USA Today",
      "latestSinceUpdate": 1022
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
