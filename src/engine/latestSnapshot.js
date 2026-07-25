export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1453,
  "lastUpdated": "2026-07-25",
  "lastSyncedAt": "2026-07-25T10:41:26.786Z",
  "warDay": 148,
  "summary": "Tensions in the Iran war remain high as the US considers intensifying strikes and threatens a 'massive attack,' while Iran and Israel recently exchanged strikes before agreeing to a temporary pause, and oil prices surged due to disruptions in the Red Sea and Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-07-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 1,
    "summary": "Iran and Israel have paused strikes following recent exchanges, but both sides warn of retaliation if the pause is breached."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.65
      }
    }
  },
  "global": {
    "nuclearIndex": 18,
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
      "date": "Jul 24",
      "text": "US President Trump meets with cabinet to discuss intensifying strikes against Iran",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1453
    },
    {
      "date": "Jul 24",
      "text": "Escalation in Iran war nears 2-week mark",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAtQk51ZFI1R2hJeUhnTTJlazk2WGstSFNLeEhfbVY2TXhER0tBVjZpemxQWTlyTDQzdFRiZlJQSHZ1YXVIWDJvUTh0ZzkwNDg2RmxBOTdLRGNSVUhaRm9DZzJUZm0xY3U5WGxQZThR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1453
    },
    {
      "date": "Jul 24",
      "text": "President Trump warns of an unprecedented 'massive attack' on Iran",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOQVI2TFJjMFduMWRzZ1B6dEYtWWVTcHYyWFJ6NjVaNlpzaWxleklxUmNRMVFfMzlCNjhhU21mMmNoTk9zTjZ2NGZZbGxNR3FXYzQyM29uc3N1bkNXLURCTmwtNHF5RU5xNHVNQWlnR0hYanhOeXV1SzgyN1dVam5vZElpZ2NENktUTUFhX2RLdi15UXBZZTRWUkZNT3Q5bW9melEtN0R1Z0ZPeldvOFl5WS10czRjbVE0TXpWR2RIZ9IBxAFBVV95cUxOYTJ6dmJvYTV3RkFscUNkQVNjMEVLZUN5TGVydTVEd2VHeXp3YkU1blpTX1Vrb2Q1SVBUaTVYSm4wV2VjUWlsMmwzZWRKYkpiaEdSSEpGaUVlSEpuRzMzX09nczZ5RGVqTWgzRGpCQ09rWEpPQjduQnJkdVZOanFldk84aHZyZEc5UE5LU1dkUnpxUDlVUEtBTmtQZUVhaW9hWVp6d2xuYm55a0ZsUnU1ak5RMFFyejU2ZEdRdlVpSDh5dEh1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1453
    },
    {
      "date": "Jul 24",
      "text": "Iran and Israel exchange strikes for the first time since April ceasefire",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1453
    },
    {
      "date": "Jul 24",
      "text": "Iran and Israel agree to pause strikes, warning of retaliation if breached",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE0xV3g2OWxXcVhxUjZOZUpZVThPSXNkbW1lcjdqaU5KRkctWHBwRTNOSWp1dy1zSE8xNHpUU1ZpRGVKMm5qVTBJMEx2Znp3d1pUaGcwVg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1453
    },
    {
      "date": "Jul 24",
      "text": "Saudi Arabia and Houthis trade fire; US fires on tanker in Hormuz Strait",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBXMFN4NE9tTE1Ub0dqX2ZDNVh1RzVNUmhMZGdhbUlfd3VZSi1KcmNYMmM4dm1acGlMLWt0TEpUX214WXBaV0JCRnZEdC1jWklyZ0J2YzltQkFmZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1453
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
      "perspective": "International Focus",
      "headline": "Middle East Conflict Dominates Global Attention",
      "summary": "The protracted conflict in the Middle East continues to draw significant international attention, with observers monitoring developments closely. The ongoing situation underscores regional instability and its broader implications.",
      "tone": "neutral",
      "latestSinceUpdate": 1449
    }
  ]
});

export default LATEST_SNAPSHOT;
