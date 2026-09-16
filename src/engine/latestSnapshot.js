export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2430,
  "lastUpdated": "2026-09-16",
  "lastSyncedAt": "2026-09-16T18:22:30.997Z",
  "warDay": 201,
  "summary": "The US House has repeatedly voted to end the Iran war amid reports of high costs and munitions shortfalls, while US-Israeli strikes continue in Iran, Iranian forces retaliate, and regional tensions escalate with pipeline attacks and Hezbollah clashes.",
  "lastNarrativeUpdate": "2026-09-16",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is currently active; military engagements and regional tensions persist."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 80,
    "oilDisruption": 85,
    "tradeImpact": 76,
    "sanctionsPressure": 63,
    "globalPressure": 82,
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
      "date": "Sep 16",
      "text": "US House votes for the third time to end the Iran war, citing a $38 billion cost and revealing munitions shortfalls.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTFBPbkJDX3hRSWxCaGZHWHZFODhxTmllWmZ6UVI4R1pPWGZkMnA5YTJyaTd1WGo5NjlHOWduRTNxdlRSX3JpcHc0WDVwem9sdEdGeXh4T0NIRGpfNTBYcmt2Z1lFdzl2UzhGNjVRTUpvLTN4czBKQWtLTlVR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2430
    },
    {
      "date": "Sep 16",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighborhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2430
    },
    {
      "date": "Sep 16",
      "text": "US Energy Secretary states the East-West pipeline will reopen within days, while Saudi pipeline attacks by Houthis send oil prices higher.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxQTmNCMkFYVC11Qlo1UGFLSHVlTkhfYW9DRUo5RlQ2cHRrNFNWXzNnVE1HLVRwTzQtbW5WX3VLc1NHOWJqS0FJdm1ZcjB2WWF6eHkzSXlNWWpzN21SdG5wVi1ZVUtZdnA3RXpjdkhtZE1vWnlMX0E3dDJXS3M4RFJsOHpZcTBhREJzMW1sTA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 2430
    },
    {
      "date": "Sep 16",
      "text": "Iranian strikes damaged hundreds of US military buildings and dozens of aircraft, with a US F-15E airman shot down and subsequently rescued.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi2AFBVV95cUxPMXlmQzNrdGJacjYxUHlIQ1JYTjRfczEzR2Q2cjZaejNqNVA4ZlluSGdoMTFNalotejBQQnI2Sm82a2NBSUNBSVF1VU42SUx4X3FoSGU1RDhFcFVxTWRIS0Rsa0RNUng2aTk0dmNCdUxBc2dWQ09NOHJjM0V2OThaUHFVTXZkbUtxYzlEbS0zSS1FM0VHT3VPaUtZUG02MjB3QW9WYTRRd0JWN1lHOExoSW81TC1FajNPb2ZhdUY2SW1UM1BlaFg5bkpyYlF5TnN2bTJpcjNjTVA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Military Times",
      "latestSinceUpdate": 2430
    },
    {
      "date": "Sep 16",
      "text": "Hezbollah's surrender of Ali Al Taher impacts its legitimacy in Lebanon, as Israel claims a 'Massive Victory' and accuses Lebanon's army chief of Hezbollah ties.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxNSkxKWnFvY1R2OUtnX0xEWmhnX3FBQlZNMnFTZEZBUXJOcHlFbVFxVnRLQjhIcTludVdpM0ZCS3oyNEgzUk9OckF0NlJSbUZjdzFxOUE1YV9VcDlxLTZxMXRtMHptUklhZGk0RnBkNlQ0WkxEamFjYWNWTUt1cTVST0RRMmlpajNOMWFlUnJIaw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thearabweekly.com",
      "latestSinceUpdate": 2430
    },
    {
      "date": "Sep 16",
      "text": "Iran issues a talks ultimatum to Trump, while concerns rise over Iran's nuclear red line potentially triggering new US-Israel strikes.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2430
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
