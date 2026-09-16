export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2431,
  "lastUpdated": "2026-09-16",
  "lastSyncedAt": "2026-09-16T21:37:45.679Z",
  "warDay": 201,
  "summary": "The US-Iran conflict continues with ongoing US-Israeli strikes causing civilian harm in Iran, while Iran conducts attacks leading to significant US losses and personnel injuries, amidst growing US domestic pressure to end the war.",
  "lastNarrativeUpdate": "2026-09-16",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect as conflict and attacks continue."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 82
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 72,
    "escalationLevel": 88,
    "oilDisruption": 78,
    "tradeImpact": 72,
    "sanctionsPressure": 64,
    "globalPressure": 83,
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
      "date": "Sep 14",
      "text": "US House votes to end Iran war for the third time, with 7 Republicans joining in favour, after $38bn cost is revealed.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTFBPbkJDX3hRSWxCaGZHWHZFODhxTmllWmZ6UVI4R1pPWGZkMnA5YTJyaTd1WGo5NjlHOWduRTNxdlRSX3JpcHc0WDVwem9sdEdGeXh4T0NIRGpfNTBYcmt2Z1lFdzl2UzhGNjVRTUpvLTN4czBKQWtLTlVR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2431
    },
    {
      "date": "Sep 16",
      "text": "Pentagon IG reports munitions shortfall and bottlenecks to restock due to the Iran war.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxQVmxiNmxsWDdJVFJvWjJFbFhPVFYwYW8ya1NmZlp0OFJSdWlIZkNHRGZDTFpNOTBCRmRPYVFwV3YwS2lkR3M1QzVoVUVNcUlyaEdBc2RUX1Zubm9RM2ZsTXYxdURaVDVuUUxQaUNwNkxDZmY5OFhvQUFwcC1lYWYxRnl3UVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Politico",
      "latestSinceUpdate": 2431
    },
    {
      "date": "Sep 16",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighbourhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2431
    },
    {
      "date": "Sep 16",
      "text": "US personnel injured in an Iranian attack on a boat near Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "maritime-executive.com",
      "latestSinceUpdate": 2431
    },
    {
      "date": "Sep 16",
      "text": "US losses to Iranian attacks revealed, including dozens of aircraft and hundreds of buildings.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNR0xBM2hYamtNRV83VktFTTV3UXBqdFNHNmN5dHZ5NEdHSE1oZ0JaMHlQaUMzcnBUc0hPM0ozOFJ3MlBUZ1NQY0NBRUxVX1NqazNrUDN1LWRKQkJKWkxsSkhNYk1yc2FCMk5rcVprMDFEb3NCdG4zb1BSVlVodkVTczBDMU5fOEU3VWhzeTMzc1lfV1A3VUs5NUIyRnd5Zy1HN3hYQ2JWWVJtSEROdVY3TVYycktqeXZvSVHSAb8BQVVfeXFMTXZzNzQwLWcxNUd2QWdKbHhjQ2UxaHlTRVFVREpBUWFMVFdRM2NlOVVKVHN2YXhFWi0wTHlZLWpHQmh6aTBWSE5MaEFPeWlRMlpHN3luTmgtSkFVR1dQTk04ZkpIMGItWVpGNjBqbS1CQ192Qi1GcXlqeWczUnd6YUpkejJndUloRlRSVnctbGtTbFVnYnM2WUhlM3ZVbnByOWdnUGhmR0Ffd2RKVVFVSmV2ekxkY2RWc3RJb0U1Nms?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "aljazeera.com",
      "latestSinceUpdate": 2431
    },
    {
      "date": "Sep 16",
      "text": "Hezbollah's surrender of Ali Al Taher has reportedly cost it legitimacy in Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxObE1iZm94T1lIQjU4d2JGSjQtVWdUZ0ZwNUdGMGdlcXdUQVB2M2ZkakhDNnJ0YW1PbVNjdVVUY2l0Uk00SWdRVkV3WjZEN1A3YU5yQkNwTmpwcDQyRUVYMjI5RWtmQV9jMF9GZmRQeTMtNVFRd3c2Ml94WjNUMlZrZTZvTGJFbE95bFViTm44YWdqRXdpd2IzTmFOM2VGbTd1TkZoaVp0eGplRVdsRVRF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 2431
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
      "perspective": "US/Israel",
      "headline": "Israel Claims Victory, US Counters Iranian Aggression",
      "summary": "Israel reports significant military gains against Hezbollah, including destroying a key base, while the US military confirms destroying Iranian boats attempting to seize a drone. The IDF warns of further Hezbollah attacks, indicating ongoing vigilance.",
      "tone": "defiant",
      "latestSinceUpdate": 2426
    },
    {
      "perspective": "Iran/Allies",
      "headline": "US Military Strained as Iran Rejects Talks Amid Civilian Harm",
      "summary": "Reports highlight significant US losses to Iranian attacks and the strain on the US military, with claims of a potential 'breakdown'. Iran rejects Trump's peace talk overtures and issues an ultimatum, while US-Israeli strikes are reported to cause devastating civilian harm in Tehran.",
      "tone": "defiant",
      "latestSinceUpdate": 2426
    },
    {
      "perspective": "Global Impact",
      "headline": "War's Economic and Geopolitical Ripple Effects Grow",
      "summary": "The ongoing conflict is causing supply-chain bottlenecks for the Pentagon and driving up oil prices due to Houthi attacks on Saudi pipelines. The war also reveals the limitations of international blocs like BRICS in resolving the crisis.",
      "tone": "anxious",
      "latestSinceUpdate": 2426
    }
  ]
});

export default LATEST_SNAPSHOT;
