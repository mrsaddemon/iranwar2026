export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 801,
  "lastUpdated": "2026-05-28",
  "lastSyncedAt": "2026-05-28T12:00:57.856Z",
  "warDay": 90,
  "summary": "The US and Iran have exchanged multiple air strikes, testing a fragile ceasefire, while Israel has intensified attacks and issued evacuation orders in southern Lebanon.",
  "lastNarrativeUpdate": "2026-05-28",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 5,
    "summary": "A fragile ceasefire is in effect between the US and Iran, but it is being repeatedly tested and violated by fresh strikes from both sides."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 73
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.88
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 62
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
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
      "date": "May 28",
      "text": "US and Iran trade fresh air strikes, testing a fragile ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMicEFVX3lxTE9nU2JJbWg5ZjRFYUNaaVV2b19hT25aeWtFZER1Tkhyby1yNU16d3FwNVVZblBBemQ4eTVwMWNTYVY1NzNIRnpzU193WFdjUzhYakhsNmxSTkpkbnJCSGsxcU9YeENCQ1RWR2kwdFl0bGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 801
    },
    {
      "date": "May 28",
      "text": "Iran claims to target a U.S. base after new American strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 801
    },
    {
      "date": "May 28",
      "text": "Israel intensifies attacks on southern Lebanon, killing at least 16 people and issuing evacuation orders.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxQMkdya1ZjdzZXaThIWW90eTQ2dS1xMW5zSnhpcV9KU1laQWFMTHNlSGE4Wi1VZUJyY0k4NWJaUFRVdEFmb0J2ZnZ2eGtrWGV5aC1xVzgtLTZ1MktDckJQZHRjaTJnbHAzcjRBRUJ3TEl5NVI4eGZpSTZXYS1wR1ZRSVlMSDR1bnV6aWxwSnptMl9HdEVBS1NHa0p3UERsdklNVkh5cFFpbF81cHhNUjRfZF9nU1PSAboBQVVfeXFMUENUWmdtb0VheHg0ajQxZ0hoLVUwYUFNZUhpVl9WOEdqTlE5dzN5LXdPR0xRY3lIUFp0eTlOR2psMmFrVm1ER3hEV2hNdHpyRE8wTlozNnIyaHJ5VjAxOVBMdmVpM3dLSXJRTmlJV1JrWURuZHprRG5CNVp4V2JzanhJVVFuZTBuTF9tUHUyUzBpbzRjb2lTTWdCbkFwZGc1TlZOOTlad2VIejU2M1BtV3R3Vy1zdWV4N0xB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 801
    },
    {
      "date": "May 28",
      "text": "Israeli forces cross Lebanon’s Litani River amid ongoing conflict.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxPMjBheDJiTHNmOFdRbzJvVlBiZFYtNk9iOGl5UUxCVFMzQ2REMV9HNFZvOU1XcWVLSzUxNjdXdE5ZR3FoZWd2VkFnQzRxZ2hYanpqdkEwTmNIZVFVaklBdnV6d0dmR0hSNnlQbFY2b0FiTG96MUJwY2otYzJMcUItb1RCUUF3bXRldk91TkJkUk5BWnQxbXBzZ3BjQTllandyLXVwaDA3ck9pT1VzUW1hRzZiaFZfQ0hnN3RpMTJJVERKQdIBxwFBVV95cUxPQzBmc1RFR0xDQXFYVmw5RTVGTVBZakRhUGJ4S1lKTDVNOURsWmNSS0hMMVRmeG9OT0Y3TzF3TndBYnRtTGNYZVVOaVdEUExqOGJBdUVEem1uT3ZFYW12dWhqbmxVVFlSc3NIU0UzSE0tTjEtWGl2RHVneUtHb0hMTENadFY0SWdNWUZkdTc4NExhQW5CMV9hNkNuQlpBV21mTHQ1WWhQaDdaa3JmZERxS01BLWpNSmYwdU5kMExsTXR2c2dQT0pJ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 801
    },
    {
      "date": "May 28",
      "text": "U.S. Navy is guiding ships through the Strait of Hormuz amidst regional tensions.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 801
    },
    {
      "date": "May 28",
      "text": "Trump threatens to 'blow up' US ally Oman if it does not 'behave' over the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxOZ3RuU0NjajUzWEFlZFk0OEtoOHYtWUl0MDZJZWxVem9NOVJ2amh6cTZfMDdUY0hyb0tKaW1SZlNTNjk2cUdCVmREX0VHenNvSm44SmVYQ3ozRnBqbDJxUGlYaURYN1NkTUFmVkVHQzF2ZmowU3hZOENYWjZnWkxTWjdiX1B2cVpsLUJ6akZDUGVQempWNDhZUmpKVmg4dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 801
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
      "perspective": "US Policy",
      "headline": "US Balances Strikes with Diplomacy Amidst Iranian Threats",
      "summary": "The US continues to conduct military strikes against Iranian targets, citing threats, even as peace talks are underway. Officials report some progress on a potential deal, but the military actions suggest a strategy of pressure.",
      "tone": "strained",
      "latestSinceUpdate": 798
    },
    {
      "perspective": "Iranian Response",
      "headline": "Iran Threatens Retaliation, Maintains Suspicion of US Intentions",
      "summary": "Iran's IRGC has threatened retaliation following US strikes, with forces reportedly 'lying in wait.' Tehran expresses 'resolute support' for Hezbollah and harbors 'deep suspicion' of US motives despite considering a peace agreement.",
      "tone": "defiant",
      "latestSinceUpdate": 798
    },
    {
      "perspective": "Israeli Actions",
      "headline": "Israel Expands Operations in Lebanon, Straining Ceasefire",
      "summary": "Israel is moving deeper into southern Lebanon, issuing evacuation orders and targeting Hezbollah cells. These actions are straining the existing ceasefire and are perceived by some as an attempt to influence broader regional dynamics.",
      "tone": "strained",
      "latestSinceUpdate": 798
    },
    {
      "perspective": "Economic & Global Impact",
      "headline": "Conflict Drains US Budgets, Maintains Oil Price Pressure",
      "summary": "Ongoing war spending is reportedly straining US military budgets, leading to cancelled trainings and delayed maintenance. The conflict's continuation, particularly around the Strait of Hormuz, contributes to sustained high oil prices.",
      "tone": "anxious",
      "latestSinceUpdate": 798
    }
  ]
});

export default LATEST_SNAPSHOT;
