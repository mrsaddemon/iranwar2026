export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 131,
  "lastUpdated": "2026-04-12",
  "lastSyncedAt": "2026-04-12T23:55:22.384Z",
  "warDay": 44,
  "summary": "US-Iran peace talks have failed, leading to a US threat to blockade the Strait of Hormuz, while Israel continues its conflict in Lebanon and rejects a ceasefire with Hezbollah.",
  "lastNarrativeUpdate": "2026-04-12",
  "ceasefire": {
    "active": false,
    "status": "collapsed",
    "confidence": 0.55,
    "durationDays": 1,
    "summary": "Peace talks between the US and Iran have failed, leading to a US threat of a naval blockade, while Israel continues its conflict in Lebanon and rejects a ceasefire with Hezbollah."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
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
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Apr 12",
      "text": "US and Iran fail to agree on a peace deal after 21 hours of talks.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 131
    },
    {
      "date": "Apr 12",
      "text": "Trump says US will blockade Strait of Hormuz after Iran talks end without deal.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTFBOTVJhU0NGZ21nWU1ka3pKNnNUVHR5ZDZ5YW5UMXJ2RnJlRHNUMks0T1ZWdGtucEx1dmk5ajd3LXNGQy0yMU5Hb0JxeDNXNzlnWnU3aHg5eXRnOTlrVVgyRHdoYXJJZnYycFBBdnNFNWhuYm93MjVteDBR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 131
    },
    {
      "date": "Apr 12",
      "text": "US military says blockade of Iran's ports to begin Monday.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 131
    },
    {
      "date": "Apr 12",
      "text": "Iran insists Strait of Hormuz remains open and states it will not 'surrender'.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 131
    },
    {
      "date": "Apr 12",
      "text": "UK states it 'won't be involved' in US blockade of Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxPY3YtWWJnVW54ZDFoaFBUM2hBZXQzT0tsV3d2MnZEbVlSX0Zsck5hWnd5bndqYmVEckwwTW83dGpQSm0zZzZ4X1ljSmI5V1FQc2s3aVcxYW9vQzI1cGVxNFFtY19HNEhZbHo2VEtYRW03YmlDMklSc1drUFJIMTlwYllxcFd5U3VHZGE3Ny11Nk93VmFUZC1PcUVLcUJmNHRtMnBvNTRaWldWOVpCQmJqRHhCaHpHdE8xTzRTb19PUVlHajFRSzJJWThYQ0w?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 131
    },
    {
      "date": "Apr 12",
      "text": "Israel rejects ceasefire with Hezbollah before Lebanon talks next week.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxQRUhHalQzTUJIZW5FOEd6NjQ1Zy1zX3pkWlRuMlV2UmhLWnRnVWE1aEctUE44cldJWXlHZ09seUZXWGNyY2Z4a293WkdZX0ZvVmdIQnVRN2hSb1REclFtZUxUMmJSVTYxVUhCZk5xMHk4LVpOY2JFSkZ2bXMxYk1WSXd0YXM3QS02ck9KRDdTbGh3U1ZxdVgzWGxYTXo1aTMwUEoxUVVZaS0wUXc4S2U3ZUVGNNIBuAFBVV95cUxQNXNjb3RtWElmZUFXY0c1Ym0xbVdpb3ZHUnpHTWV2dzVjQkw5VkM4bE56VktyUmRKdkt2Mmg5SG50Zi1RMGhJV3F5Mk9Ld1VzN09sM2taRExMbHZXVTZncHE4R2xPT0hQVlV5OHFITU9vWUI1S2pkcjEwRmV6R1cxTmJSXzdtakNqT19PUXlvdE1fS1pXdmpBMmRxTU13RFdqNjMwVXJtNEczZXNnRzlLOHhPNklKMzNh?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 131
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
      "perspective": "United States",
      "headline": "Trump's Firm Stance on Iran Negotiations",
      "summary": "President Trump maintains a strong military presence near Iran, warning of further strikes if negotiations fail and asserting readiness for future conquests. He emphasizes that the military will remain until a 'real agreement' is honored.",
      "tone": "defiant",
      "latestSinceUpdate": 103
    },
    {
      "perspective": "Iran",
      "headline": "Diplomacy Amidst Strait of Hormuz Threats",
      "summary": "Iran engaged in direct talks with the U.S. in Pakistan but also issued stern warnings to American warships in the Strait of Hormuz, signaling a dual approach of negotiation and deterrence. The delegation arrived for talks, but no agreement was reached.",
      "tone": "strained",
      "latestSinceUpdate": 103
    },
    {
      "perspective": "Israel",
      "headline": "Continued Offensive Against Hezbollah",
      "summary": "Israel continues its military operations against Hezbollah, rejecting ceasefire calls and asserting its intent to counter perceived threats from the group and Hamas. Netanyahu insists Israel 'will deal with' Hamas and Hezbollah's plans to invade Galilee.",
      "tone": "defiant",
      "latestSinceUpdate": 103
    }
  ]
});

export default LATEST_SNAPSHOT;
