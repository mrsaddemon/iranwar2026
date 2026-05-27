export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 796,
  "lastUpdated": "2026-05-27",
  "lastSyncedAt": "2026-05-27T21:29:12.273Z",
  "warDay": 89,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-27",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.9,
    "durationDays": 15,
    "summary": "The ceasefire has collapsed following renewed US strikes on Iran, with Iran's foreign ministry stating the US broke the agreement."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "May 27",
      "text": "Iran’s IRGC threatens to retaliate after US strikes on launch sites and boats.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE1uWVBMM2w2ZVhhWGFBV0lNRDlUTFMtOWU2cHBhY0prUVpBSW1kYVU4TzdSbWFXS0JSTlNNUFRZYmdpdHQzVXB2X0VpTTFoVE1jc3VjVEpWNUstem0xdk13ZlIzYUgzbEFmejZpS0d1V1hZT0wzYjJvYQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 796
    },
    {
      "date": "May 26",
      "text": "US launches new strikes on Iran, targeting missile sites and boats.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9WaDJGdEZ0YndpVVJXUlUydGhtZnZWVUFDdnR6MUdTSmhQNVMyZmRKUGMxZC0yTUNNTGw1Q2Q1M3VsNWVacFJ2X3cwd1BiOTd4b1BSYWxBM1Bodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 796
    },
    {
      "date": "May 26",
      "text": "Iran’s foreign ministry states the US broke the ceasefire with overnight strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMizwFBVV95cUxNa2s2R2pVLXl1T0d1aGx1c1ZWZ3QyTEZpWlJGNU1sSzJXYWEyeHZndGlCRVV0NGt3dTNUTUl4YlA2MnM2U1NCcmFtaVFlVzNScUNTd2l1UEljSmVwRUNnYVFSZWpwc1NqT2lyZVp2amxrcVhpampFOXNHVmZNNFowSXpuRHF2WTJ3LWhhTXBWOThiQVdaQ2RzT1hKZHZjeGd4Ym5NQ3lzWGt3ZGxTZFM2SU1PWTFwdnFKNldmN2thY1JqRW5fMzdOZHdQUmVjOTQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 796
    },
    {
      "date": "May 26",
      "text": "Israel moves deeper into Lebanon and issues a huge evacuation order for southern Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1kYzFJdldyZ01IUWdFLTNOU2lDNFkwTjIwbzRnN0xudjg4T3k2RzlkdW1KTy1mZUpMVUVTZWxTQ241N1REcGt3anhyNzQ1eWpFM0ppUlBIVHR0QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 796
    },
    {
      "date": "May 26",
      "text": "Multiple Hezbollah explosive drones impact in northern Israel, killing one soldier and seriously wounding another.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5YWUZHZ3J3UFVkcEpRVkJVTVQ0VkZJNi1fYTI3a0FhWWhic3Y4T3JjeHhmTi1jZVFuY0cwRVJraHFUTmU1N2hpVWtVbzhnN21iM0VmemdyWFJUV182dHJsVzBic3BacXRSZlpHRVBn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 796
    },
    {
      "date": "May 26",
      "text": "U.S. casualties in the Iran War rise as military strikes begin again.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 796
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
      "headline": "US and Israel Act in Self-Defense Amid Escalating Regional Threats",
      "summary": "The United States asserts its recent strikes on Iran were in self-defense, targeting missile sites and boats. Concurrently, Israel is intensifying its offensive against Hezbollah in Lebanon, with officials stating a need to combat drone threats and secure its borders.",
      "tone": "defiant",
      "latestSinceUpdate": 790
    },
    {
      "perspective": "Iran",
      "headline": "Iran Condemns US Aggression, Vows Retaliation for Ceasefire Violation",
      "summary": "Iran accuses the US of a 'gross violation' of a ceasefire through renewed strikes and warns of retaliation. Tehran reiterates its resolute support for Hezbollah, viewing Israeli actions in Lebanon as an extension of regional aggression.",
      "tone": "defiant",
      "latestSinceUpdate": 790
    },
    {
      "perspective": "Global Markets",
      "headline": "Strait of Hormuz Closure Threatens Global Oil Supply, Driving Prices Higher",
      "summary": "Analysts are warning that the Strait of Hormuz could remain closed for months due to the escalating conflict, potentially driving oil prices to new highs. Despite US Navy efforts to guide ships, the ongoing hostilities pose a significant risk to global energy stability.",
      "tone": "anxious",
      "latestSinceUpdate": 790
    }
  ]
});

export default LATEST_SNAPSHOT;
