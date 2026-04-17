export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 210,
  "lastUpdated": "2026-04-17",
  "lastSyncedAt": "2026-04-17T20:10:31.440Z",
  "warDay": 49,
  "summary": "The Iran war continues with a fragile 10-day ceasefire between Israel and Lebanon in effect, while the US maintains a naval blockade of the Strait of Hormuz despite Iran's declaration that it is open.",
  "lastNarrativeUpdate": "2026-04-17",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A 10-day ceasefire between Israel and Lebanon is in effect, but its fragility is evident with reports of Israeli strikes and Hezbollah rocket launches."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
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
      "date": "Apr 17",
      "text": "Israel and Lebanon agree to a 10-day ceasefire.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxOczFQSjR1cG9GRUhvaXBtaWl6VGZZQjlEdGp6OXMydzVRR3NHUE9IVl9MYWZVNXdhQW83bjRaU2dUYThKMlJZWTZHcEpzQnNmUGdNSWYyUUJkT0JJRDJUcWJCSEJ6S1N1UzF4UVU1N2JITjMybU16Njg1UzNjcW93Y0JKODlRNU9DOWxTMUlSQ1pMRjM2UUJNZloweWdVRjl3UFR1MERB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 210
    },
    {
      "date": "Apr 17",
      "text": "Lebanon-Israel Cease-Fire Goes Into Effect.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTE10Q0lhRXhMX2hjajFNX1BFeVFWcVhlY1FjelE0b2tnUHBmUmtwMHBHeEJGdWhVQWlKcXRrZl9HOHlQUWVFd1dHSDJCa3NldEQ2dm1HZU5oeVRKaTlyRmI2a3JVbXBta3N3VmZTQ0NRWlp4LVpVZ2tNUFRRTndDUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 210
    },
    {
      "date": "Apr 17",
      "text": "Iran declares Strait of Hormuz ‘completely open’ as ceasefire holds in Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxQdnQxRnJlVUlxSHluWFNTeGo3UGJmbTZhYkR2ZjFWRVc2TVROYk14TVByeGNHc1pWdEJqN1FLMTBGVlV5N1Vqem10ejVZd3lWSHNBUEYxTkxrYzVlRGZINFFsSmNWLTNKbzR4eHRXbGVDYUl2YU42SXItTUdnVGc1M3RZYzVsbTdyUW9vR2pJcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 210
    },
    {
      "date": "Apr 17",
      "text": "Trump says US blockade will continue until deal reached, contradicting Iran's declaration.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTFBTVmxOcHd0cWE2SEtkMFNaM2ZUZzdvLTVBNWY2RnkxMXhmZWFFVThlVzRrcDRpbDhXeGNGcnp3WFBnRWl1TkNCZGNjZFpkSEZ5cEZFTg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 210
    },
    {
      "date": "Apr 17",
      "text": "Israel strikes kill 4 Lebanese medics, threatening the ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8AJBVV95cUxPZG4tS3g4YTJ2TnB2LU51V0JEZzJvYl9LTnhLS1FNRGlSRWRUUW9hOXhONFJ6WEk0S2ZteW40VUZ3UnotOHJQNldJM2IzWW1WRUgyRDVNd2hvU3FZN0RXamdER3ZqaEp3Y2V6NFZFUlZ5RHhlRS00blpybGVoSEJpTG5GX01UV1ZWV1F5Y3g0UWFpVkIxalEzdklWamhsT2Fxb3M1ZGVZNjBRWlFQeGlnRE5rZG9JMWJVMEhUanZSTVA1N1g1Q2NoMFdOOFZxa2NyRV9aRnpJZk5xaFlJVnpVYmJEdDdDSWFwSUZrRjYxbUVxa0dTRDNjYWs5VU5wVjBfOUI2ajBkeUt1Wm4wNVR6Vmp1TVNobkprSlFBWWY4T3hZemhPai05dFRiQ2NNS2dYRXUtYjgtaVhZMVBxN1NvYkhyUDZOQXEzQ3B2dGR2a1p3M3ZoTFZMVDhwMGhLVTcwMDdlZE1ja1Z5ZnBYMUJ6dg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Deccan Herald",
      "latestSinceUpdate": 210
    },
    {
      "date": "Apr 17",
      "text": "Hezbollah launches rockets at Israel, further threatening the ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxPc3Ztakk5YnFMcXozdEdSaXRxU1RQYnZNTm5rMm1mWktkNzctVzRqQ0tNekRvb2VtTkJjYmdVTHJKeDFxRWZfQ1pSV1BiYThkaDI2cEc5d2cyek9wbVU4NEl0bGpNQUMxb2c3SEROUHAzZFhTaHBZR0REcjBQMTlpTUYyMXdRSW9KOXY5VFVRWFJfQ1o4V09ITGdyV3Q0U05nYk9qWTdNeTBwYkdCR0lycEFmekNWVUlCdFZ0dlFaY3RtMmQ2ZnFtcU5XVTRiamRIbEFr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 210
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
