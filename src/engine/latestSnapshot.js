export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 963,
  "lastUpdated": "2026-06-14",
  "lastSyncedAt": "2026-06-14T06:51:09.911Z",
  "warDay": 107,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-14",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 1,
    "summary": "No general ceasefire is active, though a broader peace deal between the US and Iran is reportedly close to being signed, while Israel continues operations in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 58,
    "escalationLevel": 38,
    "oilDisruption": 55,
    "tradeImpact": 30,
    "sanctionsPressure": 49,
    "globalPressure": 51,
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
      "date": "Jun 12",
      "text": "US and Iran indicate an agreement is close, with President Trump announcing a deal signing for Sunday and cancelling planned strikes.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxQNFZSbW9DSkM5aHNlTzFIU1JHSUlULU5OVjkwTFkwMDRjRFBTUnEtSHFWWVVGUDV1TEFOT0dSc3JWSkhXYk9nYlhmNkZPeWROZGd0b1U2YnFUYnRSOVk3dnN1LWlWems0VE9GVjh4aFFuTDBkOC1ybWdWRlZIZGlFdk5IYkNITmVnNE91ZW00VkkySlpSZEU5S3hmZGFHQ3BfTmx0RERuN1JzWUJjamNQQ09VZlhscXFzMy1wVXBJVUVEUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Politico",
      "latestSinceUpdate": 963
    },
    {
      "date": "Jun 12",
      "text": "Tehran disputes the timing of the deal signing, ruling out Sunday, while Pakistan's PM states a 'final text' has been agreed.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxPbXc3blhkTDdaaGZNWkl4cWlUUXk1TTR3X0Q3Ym93ZDlwX3FYRU1iTHl2Wl9wekhRTmJfaWVIcmduMDVOTTRYUy1fTWIwVHVqRFZnQUtTVXdJYmVQZjJUQXhkc3M5Yms2aVlBU05RUlE0Ty1UUlNuS1M5dVVWelpQRTZ5WWV3UURoa2Fudzh2Z0JoSEdJMnp1V2ZDX2lvdm5seGtoMUNNZE5jN1k1MmJSSnpVTjJjTHE20gG-AUFVX3lxTE5VXzRrd25NRzg2NGhvSk9uX0txUlUzQmxQZW1fYkMwRkN6bTM2VXFrN2Y5ZXJuOENoaUc3blVybkQ1RWMxYVY3NjJNYWFVQWZOcER6cXowRE5OeHdUNXBxMmh0VFJ5NmNscDNPQU14VGRNWmVGNHZzZ1Q5LThZZGxkcjJ0MVVWQ25XV1ZkeGE3eWlpcG43WW1FX3EzZGJHUkdGYjhMSEZ1aDNfcEoyOG5lak5Fa1YyUzU1aVBjLVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 963
    },
    {
      "date": "Jun 12",
      "text": "Israel carries out air strikes on Lebanon, killing 12, as Netanyahu urges continued fight against Hezbollah.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxQMjJkdEg0d3BTbzVnTzZIaVQzR1UzRUtFRnRTOHhUd1FWQUFjdWVFODdtYWlCNWdCNkJ5VFRKQm5XVEFSWlRWckFkUkJPMjd0NkFYY1Bmd0FKc1RrLU0zRlFvYUR5ZlFfRzcydFNWQ1FVdHZNVmhUNUVpd2liTll4eDZRLVlLNXZuUU1FVFdfTzI5UHdBMXhCTE5PbjVDaVROUDRUa0E3eWJUUE5CalU4SlpwUkxCTmtCVVhpUUVCM1FSUThu?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 963
    },
    {
      "date": "Jun 12",
      "text": "US military is reportedly preparing for a ground mission to secure Iran's nuclear materials if a deal is reached.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTFB4cWZMcjNVMnRkWlJ6eGlEV3ZndVBtRFZadXg1aUxUYnNpZGdZb3hrZGJzS0FYVzFRUkRUT0wyLW40Q3ktN3lhUG1mcm9KOEU0ZTZ2RVNOZmFWRDc2RHhMOWUwQWt2SWJqWjdIOThNbkkxUFRGMzhid3p5TQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 963
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
      "perspective": "US/Trump Administration",
      "headline": "US-Iran Deal Imminent, Peace Prospects Rise",
      "summary": "The US administration is optimistic about an impending peace deal with Iran, with President Trump announcing it will be signed on Sunday and that planned strikes have been called off. This agreement is expected to lead to de-escalation and the reopening of the Strait of Hormuz.",
      "tone": "neutral",
      "latestSinceUpdate": 962
    },
    {
      "perspective": "Iran",
      "headline": "Cautious Optimism on US Deal, Claims Lebanon Truce",
      "summary": "Iran acknowledges progress on a deal with the US but remains cautious on the exact timing of its signing. Concurrently, Iran claims a truce in Lebanon that includes an IDF withdrawal, despite ongoing Israeli military actions.",
      "tone": "strained",
      "latestSinceUpdate": 962
    },
    {
      "perspective": "Israel",
      "headline": "Concerns Over Iran Deal Amid Continued Lebanon Strikes",
      "summary": "Israeli officials express concern that an emerging US-Iran deal could strengthen the Iranian regime and Hezbollah, potentially undermining regional security. Israel continues to carry out air strikes in Lebanon and is preparing for a potential ground advance against Hezbollah.",
      "tone": "anxious",
      "latestSinceUpdate": 962
    },
    {
      "perspective": "Economic/Energy",
      "headline": "Strait of Hormuz Disruption Persists, Impacts Oil Flow",
      "summary": "Despite US efforts, the Strait of Hormuz continues to experience disruptions, with little oil flowing through the critical waterway. This ongoing turmoil is cited as a factor contributing to high gas prices, with political blame being assigned.",
      "tone": "skeptical",
      "latestSinceUpdate": 962
    }
  ]
});

export default LATEST_SNAPSHOT;
