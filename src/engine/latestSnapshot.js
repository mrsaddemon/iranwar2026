export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 213,
  "lastUpdated": "2026-04-17",
  "lastSyncedAt": "2026-04-17T22:54:29.900Z",
  "warDay": 49,
  "summary": "The US-Iran conflict continues with ongoing US blockade of Iranian shipping despite Iran declaring the Strait of Hormuz open, while diplomatic talks are scheduled and a fragile Israel-Lebanon ceasefire is in effect.",
  "lastNarrativeUpdate": "2026-04-17",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A 10-day ceasefire between Israel and Lebanon is in effect, but its stability is threatened by recent Israeli strikes and Hezbollah rocket launches."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.65
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 55
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.55
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "date": "Apr 17",
      "text": "Trump states the war in Iran is going 'swimmingly' and 'should be ending pretty soon'.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 213
    },
    {
      "date": "Apr 17",
      "text": "Next round of US-Iran talks are scheduled to take place in Pakistan on Monday.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxQdnQxRnJlVUlxSHluWFNTeGo3UGJmbTZhYkR2ZjFWRVc2TVROYk14TVByeGNHc1pWdEJqN1FLMTBGVlV5N1Vqem10ejVZd3lWSHNBUEYxTkxrYzVlRGZINFFsSmNWLTNKbzR4eHRXbGVDYUl2YU42SXItTUdnVGc1M3RZYzVsbTdyUW9vR2pJcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 213
    },
    {
      "date": "Apr 17",
      "text": "Israel strikes kill 4 Lebanese medics, threatening the recently agreed ceasefire.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 213
    },
    {
      "date": "Apr 17",
      "text": "Hezbollah launches rockets at Israel, further jeopardizing the ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxPc3Ztakk5YnFMcXozdEdSaXRxU1RQYnZNTm5rMm1mWktkNzctVzRqQ0tNekRvb2VtTkJjYmdVTHJKeDFxRWZfQ1pSV1BiYThkaDI2cEc5d2cyek9wbVU4NEl0bGpNQUMxb2c3SEROUHAzZFhTaHBZR0REcjBQMTlpTUYyMXdRSW9KOXY5VFVRWFJfQ1o4V09ITGdyV3Q0U05nYk9qWTdNeTBwYkdCR0lycEFmekNWVUlCdFZ0dlFaY3RtMmQ2ZnFtcU5XVTRiamRIbEFr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 213
    },
    {
      "date": "Apr 17",
      "text": "Iran declares the Strait of Hormuz 'open', but tracking shows few ships moving as the US blockade continues.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTFBTVmxOcHd0cWE2SEtkMFNaM2ZUZzdvLTVBNWY2RnkxMXhmZWFFVThlVzRrcDRpbDhXeGNGcnp3WFBnRWl1TkNCZGNjZFpkSEZ5cEZFTg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 213
    },
    {
      "date": "Apr 17",
      "text": "US military announces it will target Iran-linked ships worldwide, broadening its scope beyond the blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxOSGJ6d0VPLVh3QXMyeVVEdDhhT3BSQ1ZGc1l2VFpFN2dtVndYNlJTdDdvTHQ5Nko2aEdYRUtmcUlYXzdVTkNRQmJzZThEWVp2MmRYZm9XUG84QU5IQVZnZGtWbzVzazVCamZJZWxCNzhHRUhva00zckwxWEZuak9zQ0xHWS1mSXNtM29JZnh2WVBzRTZt?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 212
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
      "perspective": "US/Israel",
      "headline": "US military 'locked and loaded' for Iran strikes as Israel holds positions in Lebanon ceasefire",
      "summary": "The US military has declared readiness to strike Iran's energy infrastructure and target Iran-linked ships globally. This comes as Israel maintains its positions in Lebanon during a newly implemented 10-day ceasefire with Hezbollah.",
      "tone": "defiant",
      "latestSinceUpdate": 197
    },
    {
      "perspective": "Iran/Hezbollah",
      "headline": "Hormuz blockade persists as Hezbollah warns Israel on ceasefire terms",
      "summary": "Iran continues its gridlock of the Strait of Hormuz, raising international concerns about shipping. Concurrently, Hezbollah has accepted a ceasefire with Israel but explicitly stated it must not allow Israel freedom of movement in Lebanon.",
      "tone": "defiant",
      "latestSinceUpdate": 197
    },
    {
      "perspective": "International/Economic",
      "headline": "Global shipping concerns rise over Hormuz blockade, potential Malacca Strait impact",
      "summary": "The ongoing blockade of the Strait of Hormuz by Iran is causing significant tension and prompting discussions about potential missions for when the conflict ends. There are growing concerns that this disruption could impact other vital shipping lanes, such as the Malacca Strait near Singapore.",
      "tone": "anxious",
      "latestSinceUpdate": 197
    },
    {
      "perspective": "US Domestic Politics",
      "headline": "Trump seeks end to Iran war, but House rejects US troop withdrawal",
      "summary": "President Trump has expressed a desire for 'more compromises' to end the Iran war. However, efforts in the House to withdraw U.S. forces from the conflict were rejected, indicating continued congressional support for the current military posture.",
      "tone": "strained",
      "latestSinceUpdate": 197
    }
  ]
});

export default LATEST_SNAPSHOT;
