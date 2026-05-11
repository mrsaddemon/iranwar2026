export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 603,
  "lastUpdated": "2026-05-11",
  "lastSyncedAt": "2026-05-11T05:40:22.156Z",
  "warDay": 73,
  "summary": "A US-backed ceasefire proposal was rejected by the US, leading to continued Israeli strikes in Lebanon, US retaliatory actions against Iran, and heightened concerns over the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-11",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 30,
    "summary": "A US-backed ceasefire proposal was rejected by the US, and ongoing strikes in Lebanon have eroded any prior truce efforts."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.4,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
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
      "date": "May 11",
      "text": "Trump rejects Iran's response to US ceasefire proposal as 'unacceptable'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxQejcyNndvcnR3cEVKNS1tUHVaZWpyN0tmUTJNSXNjTm9Ia056WC1TV2ZaLVVlSm9wcURZZ2EwWWJTWlIyQjV3VkoxUWZoblRpZXRmeERjb240SlJ3MzBpa003Qm8wenAxd2ZUR01ocTNQUE82TXBaWnloQUxwUlBkcDd5aFpSVzkwdjk5eHk1V3p4bGhj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 603
    },
    {
      "date": "May 10",
      "text": "Israeli airstrikes kill 39 in Lebanon, eroding a prior truce.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 603
    },
    {
      "date": "May 10",
      "text": "US military carries out retaliatory strikes against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPOE1uOURBaC03bzROOEdzRzdQOGFvc1hOanMxM2w2NS0wOFc2ei1Ga1JDMHBTd0QtVzh4ZGdXSE16TFhkM1lXTWRZXzZ3bDM1SFo3Y1JfXzRoV09fQmJZSUZmOHNpWVptcjBKanJxM21GUS1Ncjc2Qm1rOTFkTk9yck9XWWRfZVk2QWNrdHZNWGIxUEkwX29aMDZ5em5ZaHZfcWlTQ2tncGh5WXFRT2Q0NnhyOXJZU3dYOWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 603
    },
    {
      "date": "May 10",
      "text": "Hezbollah airs drone footage showing a strike on an Iron Dome battery in northern Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxQLWU1QV9Sb1I3Q2V4MXEyUmpWWHRYY2RFZzVyS0Z6VmdOeEk0XzZ5bFNPRTFiVnhCSkxnU3NNemNkd0JxSXFxUlJlZk9kV3hjcHdwUGZPMlBYbFhCSHJkNm80YzhJT2tacXdZNVgyUGNPZnpsb2xtWTlCR0JuSThlbkV6b0dqRGdQUmJ3ZVp3UDdKUEQxTWNjYy1pZW5yV2NyNTItT2dscXNZd9IBrwFBVV95cUxQRVhqbDBCT250WDFNMUpRSzVuSUw0MDNaUU9qN2NIVlZEcXZZSTk5bHJHeXZSVlVVSWF5MUM2anhpcjFQa2xKQTBLY0JwRDJBaHVSTVZNQ0UwS0pZZ3BMbmpidmo2SGh5b040Y1otS3hIYUlkcmdyUVlwaE5OSHZ5aHlHd0pqNXJnc3NEdUNqQXhJTFpjN0RjMFpYSE1RWEhzZENrMDg4MUhjRW5uUWFJ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 603
    },
    {
      "date": "May 10",
      "text": "Morgan Stanley warns the oil market is in a 'Race Against Time' on Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxQWTNXalRJYWhic2tTcWI5aVRHMndlRzFfUlVxdTBnUHVtT24xOWVZSzZFWjR1S09WbURUWnY2d0M2aEZ3bGl1T2RIS1JuQnhOWVVTNkdOTUQydEFKLWRnNkNWeEdOSjlGQUJmQUwtUU12U3NxblRVUGYwTWxkWG1kNFNFM3lHckdrMVpObDY3S2RnaWJCZkkwM3lJSHVXRWNqbzhwS1pMbmhISUJ5NXVLdGNR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Bloomberg.com",
      "latestSinceUpdate": 603
    },
    {
      "date": "May 10",
      "text": "Iran formalizes a toll process for vessels transiting the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 603
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
      "perspective": "US Perspective",
      "headline": "Trump Rejects Iran's 'Unacceptable' Proposal",
      "summary": "US President Trump has rejected Iran's latest counteroffer to end the war, stating it is 'unacceptable' and does not meet US demands for a resolution.",
      "tone": "defiant",
      "latestSinceUpdate": 602
    },
    {
      "perspective": "Iran Perspective",
      "headline": "Tehran Condemns US 'Reckless Military Adventure'",
      "summary": "Iran accuses the US of 'reckless military adventure' in the Strait of Hormuz following US strikes on tankers, while maintaining its own peace proposal.",
      "tone": "defiant",
      "latestSinceUpdate": 602
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Deadly Israeli Strikes Erode Lebanon Truce",
      "summary": "Deadly Israeli strikes in southern Lebanon continue, killing dozens and eroding an existing cease-fire, as Hezbollah rockets hit open areas in Israel.",
      "tone": "strained",
      "latestSinceUpdate": 602
    }
  ]
});

export default LATEST_SNAPSHOT;
