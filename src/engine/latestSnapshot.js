export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2314,
  "lastUpdated": "2026-08-30",
  "lastSyncedAt": "2026-08-30T22:09:05.759Z",
  "warDay": 184,
  "summary": "The Iran War continues with recent US military strikes against Iranian targets in the Strait of Hormuz, while tensions persist in southern Lebanon involving Hezbollah and Israeli forces.",
  "lastNarrativeUpdate": "2026-08-30",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or de-escalation efforts are reported."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 75,
    "oilDisruption": 70,
    "tradeImpact": 64,
    "sanctionsPressure": 62,
    "globalPressure": 77,
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
      "date": "Aug 30",
      "text": "US forces strike Iranian rocket launchers on the Strait of Hormuz, marking the first military action in weeks/a month.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi5wFBVV95cUxNU0lJWHNRVkV0WUUtZkVTWk1GcXFscV9WU1JaRmJ2ckJZRFlWSzB5VndYV0MxN2F2NDM0ZU5sQlFFcjloREcxVVpXSGNMbVU0b3R4Z0V0Ul9oQmthX29CbHNZdTFLMTRqbXZSZ2ctV1VLdHd3N29GbWpFZFVKcEpRZkg2TXZhRkp1SThzZEFEQlZHRTVBdFRrNThJRzVPY0V1cFR6S2ZuNTVJaHdNUUR4S1NHOVFRRVdhNG1QR0NvZ0J3WGdVcGVMVEtkWi16WGlkSzBsdzN1cGFUYklRM2FmZVZPa0RpUEHSAewBQVVfeXFMTVVxQ2VIYk85NXpYVUhVaXBTbzN4bVV5eFpQdTVESEFFNVFHTVVNV2Qwd3JDRE1RRThlX29HcFlGbl9oZVNjREdlNVdVTjhZZDZHSnpJYmptNzFLRDBpNUR4U3NRR2RUMmpEV3VScDNHRHdmQzkwZ2NQZm1uX1ZrTGVXWG9wdkRaaGtkZ0dCbmxxTi1ENkFGWm5kaGl5cEJ4cFJCVnNGM0FLQUotX0VlTWFScXlLaGtLUkVDUXh3d3VhaDVUZUxRQ2Q1dEN0ZkhxYkgybXROMEhGSGZBLVJqUmFEVjE4Vkl0NEVLVnY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 2314
    },
    {
      "date": "Aug 30",
      "text": "US strikes Iranian launchers on Larak island amid Strait of Hormuz tensions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPTm1OakU0ZTQxTmQ0YkVOWWVoMHZJQmJSQkhiV3ZTMXJ6TWNRZzYzblpoYnh2cUFCVTUzdkNRQUhBamhWY0I2MzFZZHBxWlpObmVyd3VXZkt4Y1FCNWVfZmR0U3VuRU16ODB3S1NJcHI4SHdhM1RwbnZnRkNSejdzZTB3N3FKM3ZEZmU0cGhfUHhoZFZPQ3E0cG1pelZlVFlpc05CQTZLdGdhV2ZYOXF3X2I5MmhLa21jS2t5SVVB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2314
    },
    {
      "date": "Aug 29",
      "text": "Hezbollah reportedly rebuffs Lebanese overtures to withdraw from a strategic ridge in southern Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQTVJGa0JlcTJvOFZKOTJkanNETDdTZDFINkIyZEs5UGJWNjJ5LWJ4TzR2Sm0xUVR3QWdPRERWeldOR0ZBVVdMbGxuTkJBc1ZvZUc4c05IMzVSbENBckRLTi1vZEFxejBTei1nU2F3OVk5MkxfZXFLbWItSTlHVjhEd0YydEE4MmNseVVpVTdWbUJWbmVxSHRybXdqOFkwaGlnMVlCU2VLcHQtVTdING5idDFMUzgtbzjSAbwBQVVfeXFMT0FvTVdobktnV3YyaVVneGs1V0N2MllIWFFkRVJMclJZVHNCR2p4YUJEUWZJbHBFbjdxM2czbUFXdmZNVVlsYkhjRDZoQnVUekQzNnFyWWRtTkpDelFLTlFCNjdZWmYwcE9jOXV4Y2RIMDNtdzNmT1gtbWY4LThRMHRXWlY3cWdjcHdaR1UxMmFvdDlGQXZMUlE3S2p3bzNmN3ZRd2RXNWctLXdtdExaUzhyNHpjOUZOa3Y2THk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2314
    },
    {
      "date": "Aug 29",
      "text": "An Israeli strike kills a woman and wounds others in south Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxNZHRzdnRlcXdPNmpObDFFZGh5Sm0yQ3NnNGs0Ykl1T1VlMnBUc0JhOWE3T1ZsbUhKQWh3b2xUelJVQkhqM1h3cTRsSVB4QlZuYnp0NjZCYWtLUGNQTEI0TkEzMS14VkY2T1RxdU5yRE5IYVByYTBmcjVkQkI1WkQ0QlZVeUlIUG5zc3RSeXV2MUM2cU1KTEo4dURqRWUtYllfV2RtQkVOVWM2NlHSAbABQVVfeXFMUERFTGE3VGRWUlE5ZzdsTkhLWHQwMXpWLVJ0WXo2dFRUU0Z5Z1Q0YjdUVGhFNklKYy0xcFlTQ3JKTDJmUjQ4aGc0YjRTbGYzTFVWaU9QMjFaVkx6MVE3NUkwalVZdXdVV0dNaWxsbUNmaXdlaGZ1U2ZsSGNPUGxBTkNVeWJWQ0Z3NEtzNGFJMTBBWGstYjc1WkE5OGtqc0t6RzdkallUWkJsY2tFcE1hV2M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2314
    },
    {
      "date": "Aug 29",
      "text": "US military chiefs warn that the Iran war is weakening forces needed to counter international threats.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiakFVX3lxTE90WFlXUXZCaVI2X1BycHBDb2RSZUJNRjFET05PNThBN3lfQk82aWxoZER6TzA5XzBHQ3oyUVdIM2VEQ0NYSWhXcmEyWVdBVk92QWNUVEpHUzlEZHZVNXdxdzVoZVh6clN6N2c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 2314
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
      "perspective": "Iran",
      "headline": "Iran Defies Sanctions, Calls for Global Pushback",
      "summary": "Iran pledges to stand firm against ‘unjust’ US sanctions and calls for global pushback, stating that diplomacy 'isn't impossible' despite the ongoing conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 2309
    },
    {
      "perspective": "United States",
      "headline": "US Gains Hormuz Upper Hand Amid Budget Strain",
      "summary": "The US has gained the upper hand in the Strait of Hormuz, now a top concern, though the war is rapidly draining the US navy budget after six months of conflict.",
      "tone": "strained",
      "latestSinceUpdate": 2309
    },
    {
      "perspective": "Regional/Market",
      "headline": "Markets Accustomed to Stalemate as Region Transforms",
      "summary": "Six months into the Iran war, markets have become accustomed to a stalemate with no end in sight, transforming the region and its relationship with the U.S.",
      "tone": "anxious",
      "latestSinceUpdate": 2309
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Rejects Regional Deal, Maintains Stance",
      "summary": "Hezbollah rejects overtures for a Lebanon-Israel deal and refuses to withdraw from strategic positions, maintaining its stance against 'surrender' in the region.",
      "tone": "defiant",
      "latestSinceUpdate": 2309
    }
  ]
});

export default LATEST_SNAPSHOT;
