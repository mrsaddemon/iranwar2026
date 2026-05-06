export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 535,
  "lastUpdated": "2026-05-06",
  "lastSyncedAt": "2026-05-06T20:42:05.485Z",
  "warDay": 68,
  "summary": "Ongoing military actions persist between the US and Iran, including US attacks on Iranian-flagged ships and Israeli strikes on Beirut, while diplomatic efforts for a ceasefire are under review amidst continued risks in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-06",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 10,
    "summary": "A US-Iran cease-fire is suggested to remain despite escalations, with Iran reviewing a US proposal, but its status is under strain due to recent military actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 82
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.65
      }
    }
  },
  "global": {
    "nuclearIndex": 12,
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
      "date": "May 06",
      "text": "US warplane disables an Iranian-flagged tanker attempting to breach a naval blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxQZTR1aVI5WkV2VFlBMUl2OC1JVkxvTXhzcVljWDNzdVctSk1rV3YtNjhsX1BhQXl1QlVLSUFtMTdSZjhQSkZHZDJrNDRLVWt6WVpfOXh5b0ZMUlQ0S2lDSE9oTmkwdjBEX2dKRnpWNlFLNWstcWlYLVRkZGdlRDlKd0FPWndiQdIBiwFBVV95cUxQUnl5Zmttc3NNTHdkWlIwQ3d0NWdRc1hvVVRpWEdEYWQ1TkhjZV9BZXVNbDdvbmNtQ3UxdzNHTnZVdkRQVEJXY291ZGZnTHc2bjBJTURib20tZGdhYVJwN3oyMzMzYVpyQVNoTXNhaGpWd1JpN1FOSVdNdW1EUnVUV1pnY3BsOTFOSnp3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 535
    },
    {
      "date": "May 06",
      "text": "Israel launches an air strike on Beirut, targeting a Hezbollah commander in the southern suburb.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxQeUFPR3FzOFNtQVRKUm9WbVFNR000VmJlVllXcnRlZjYxT3JFQVBoTmRGZkxhZEgxU0o5MnBKOUJTMGtheHdvakd5N0FHVy1Zek1DZGUzMHUwYUt5Z1B1ZGhpQ1ZRNzZQR2hEZC16QXZLbzlxa3NZbGFJNWItY3ljX3p4WXd4X1JTaGY2SzJyYnpicTg0YjJvQXI4RUU4UWdWelVnN1BkUE5lbnZPMzJkMVVLRdIBuAFBVV95cUxONkdxT0hTdlMwdC12VmVvc2ZON0VKLUg2S1ZkQlF2eHo2RXhjdWlkRUF2WWdiRzYxbDZReWJYSGVTVV83cGNvdDJZa2l1cHhwX1B1dzhPNUE3MXRPbFNDV1dGbzY1NFg4U0lXRHZ2VUpka3VhbVgzbnA3MXZpVFMxTFdpaFVEdk5kSjUwckZ4UW1UY0FvY013X3MtVDVsZDdoTUdfY1BCaUJjcERFQ0kzTGNEZlBmQ0tO?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 535
    },
    {
      "date": "May 06",
      "text": "Trump pauses 'Project Freedom' after less than 48 hours, citing progress on Iran negotiations.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxNTVdVc3hhWGtUVmpIa3MxX3lURzlDY256allnb2FPV0dRcFdKVERRaXVCUndiaU1sTEJyME13QVh5aDUwX1lCc1ZRVVNsVGJPZW5iWmRwUTIwdzByS1IwWmJuTkJYUzh0OFhkM2RVM3RLUU9HTW13V29MLXNJYUxpVU5jcHlIMkhsT3hHcjRuOTZGZTl2N2R6alhZSW5KVDBHSkHSAacBQVVfeXFMTkdPLU9qSFl1WkJPd04tc1d0VnZCdVVZdzhRZjJMazZrUmlSTkNPNVM4WDFKZUQ2N01hOVhOYmJkRmI1YU10M3l6UURPWWJ1bFpUR2lMNGVYV2lzZlFvTEhuTE5QN3JOeXk2LWswT2QzTEdQaDhMWjRRQ3FPdDA2UzdMOVBza0dIZUk1R2J5WUpqYUl1dmhESXNkU2JPcGFyNzNKRGlabkU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 535
    },
    {
      "date": "May 06",
      "text": "An attack on a French Cargo Ship highlights continued risks in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 535
    },
    {
      "date": "May 06",
      "text": "Satellite images suggest Iran has hit more U.S. military assets than previously reported.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikgFBVV95cUxNZWdLU3d1NG14Nk03RmtNUEs4NDlTdFA3ellOb3ViNUNpSWZOMUZEZ1N5bXRjbm5rRDVxeUJLeE9qRGVnTUdaUzU2VjJrbDRFUUhiZ3hZcnI0bXFHRjBrTUNqTEdMVjBsTXR1ZHM3UDdsU2ZTczRMSHNqNjBBUXgzZFhtUjJkNk5iQ2JTc1pmbjNQQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 535
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
      "perspective": "US/Trump",
      "headline": "Trump Issues Stark Warning Amid Strait of Hormuz Escalation",
      "summary": "The US, under Trump's directive, pledges to guide ships in the Strait of Hormuz and warns Iran of severe retaliation if US vessels are targeted, following direct military engagements.",
      "tone": "defiant",
      "latestSinceUpdate": 513
    },
    {
      "perspective": "Iran",
      "headline": "Iran Defiant Despite Economic Strain, Engages US and UAE Forces",
      "summary": "Despite a battered economy, Iran's leadership remains defiant, believing the US will eventually back down, while actively launching missile attacks on the UAE and engaging US warships.",
      "tone": "defiant",
      "latestSinceUpdate": 513
    },
    {
      "perspective": "Hezbollah/Lebanon",
      "headline": "Hezbollah Deploys New Weapons, Lebanon Rejects Ceasefire Talks",
      "summary": "Hezbollah has deployed a new weapon to evade Israeli detection, and Lebanon's parliament speaker, allied with Hezbollah, has rejected any ceasefire talks with Israel until the war concludes.",
      "tone": "defiant",
      "latestSinceUpdate": 513
    },
    {
      "perspective": "UAE",
      "headline": "UAE Under Attack: Missiles Intercepted, Oil Site Hit",
      "summary": "The UAE reports intercepting multiple missiles and drone threats, with one drone sparking a fire at an oil facility, indicating direct attacks on its territory.",
      "tone": "anxious",
      "latestSinceUpdate": 513
    }
  ]
});

export default LATEST_SNAPSHOT;
