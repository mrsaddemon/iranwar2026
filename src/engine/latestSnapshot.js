export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 610,
  "lastUpdated": "2026-05-11",
  "lastSyncedAt": "2026-05-11T23:04:35.409Z",
  "warDay": 73,
  "summary": "The US has rejected Iran's latest ceasefire proposal, leading to continued conflict in the Middle East with ongoing Israeli strikes in Lebanon and threats of further US action.",
  "lastNarrativeUpdate": "2026-05-11",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 30,
    "summary": "A proposed ceasefire between the US and Iran is considered on 'life support' or collapsed after the US rejected Iran's counteroffer, leading to continued hostilities."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 83
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.88
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 62
      },
      "behavior": {
        "precision": 0.45,
        "aggression": 0.78
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "text": "US President Trump rejected Iran’s response to the latest US proposal to end the war, stating it was 'totally unacceptable'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxQejcyNndvcnR3cEVKNS1tUHVaZWpyN0tmUTJNSXNjTm9Ia056WC1TV2ZaLVVlSm9wcURZZ2EwWWJTWlIyQjV3VkoxUWZoblRpZXRmeERjb240SlJ3MzBpa003Qm8wenAxd2ZUR01ocTNQUE82TXBaWnloQUxwUlBkcDd5aFpSVzkwdjk5eHk1V3p4bGhj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 610
    },
    {
      "date": "May 11",
      "text": "Israeli strikes across Lebanon killed at least 18 to 24 people amid the ongoing conflict.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 610
    },
    {
      "date": "May 11",
      "text": "Hezbollah reportedly used a drone to hit an Iron Dome battery in Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxOeWZmN3ZQWVk5UlBhUVNvZGFvSE5vTkhFU0pmTHhVT1Z2NFRKc0NCZWZjRFZUUTZvdzJzcDMzZVhGSktnM1hleDZ5M2NyQmVwN00wRU9vZzZZdHJZQnZvM2xRcEFGeENTQ1NXdWJDeHhKeUR0V0xWUC1zWEVnNzlCOXFjamtsTUtETnF2UUItUlNmSWM1VnZTM1pBVmFTRld5YkE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 610
    },
    {
      "date": "May 11",
      "text": "Lebanon requested the US to pressure Israel to halt its attacks and operations.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiXEFVX3lxTFBzVERkYk5DNXF0cTh0dUJ5OG8zVU5Bb3VMb1dNNFdYaGRGU2NXM1pPSjNFSkxHMjYzNjVWbVhqbHlVckg5YjAzTHd1YTh2ZTJfc1RnMUNEUE91SUd0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 610
    },
    {
      "date": "May 11",
      "text": "Trump threatened more strikes against Iran if a deal is not signed 'fast'.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 610
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
