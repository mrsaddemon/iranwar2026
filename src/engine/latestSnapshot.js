export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 725,
  "lastUpdated": "2026-05-21",
  "lastSyncedAt": "2026-05-21T17:17:47.364Z",
  "warDay": 83,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-21",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 10,
    "summary": "A shaky ceasefire remains in effect as the US and Iran negotiate a potential deal, though threats of renewed strikes persist."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
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
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 65,
    "tradeImpact": 47,
    "sanctionsPressure": 54,
    "globalPressure": 61,
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
      "date": "May 20",
      "text": "Iran accuses US of ‘overt and covert’ moves for attack",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPMDJZNG9HalZLWEpsaHNBemRNVHpOOXVITWN3eTVMZEx6WnNuX0gwdlpUV2x5ME82MHJTazE4TlJoWmxLMTF3c2xDWG9rb1o1UmJlLXRpWlZjWWlpZXJUR2l1X0ttQlZzaEtVaEd6QTliRTFGZFZsX21jYnE4alNOeEoxTVVyZm81UU5uNWNGZGNHVzJZcy1UTHNlNjZ6d3hoYnJzWHBvZkZxMTRmWHVGRjB4cGJJNk4tMENN0gHAAUFVX3lxTFA5dzBfN3RmRWVPR2ZpWjQxOTlEbDBncExIejdaMU9UdDc0c21Bd2VLa3p6Vy1fcFE4bE1xQmR2LVJGOUxKNERXSGFzbjhKb09jLU5pTU5DY1Z1S2tTWEdQN2N6MVFRWWJTMmhvaVMwN0RWclo4b2Q2cF85aHFaZVhvZ0N0WWdmVFo5YTFtcGlWU2l5NzZjeXJrTXpmRkRIVjh3Tk1DMzBzVGtKcFpraDVmVGJNTkhrSTNPWENPTGhBUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 725
    },
    {
      "date": "May 20",
      "text": "Trump warns of attacks in ‘two or three days’ if no deal",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQbTlFd3h6a0dEY2xzZDhJR0pOcFBpSGU1VkZHM1dPbnJPNmZnbU95TG5LSm81MFZwZjY4NnM4QURoY2RFajltcE1OZlA4MVJhX1M4bHhpTGg5ZWJ6SFItUVN1bENBdF93dGxnUFFVYVk0ekZ1bGFEbnlLTUhlQnd1NkdhaW5JWVQtdWJjb1F1ZVhPRVR0WGVWalFsQ1BmUG5CdU5pQW9sY19mR2ZESUhwc2dqbGRVQ3NmZU53dkdnb9IBxAFBVV95cUxPSFZwME9HOGd5YnpZSHI3Zm5lX0FIMm1HV1hJeURJVWE4SUFjQjZ6V3I3WlBZTnEtS2JQSUw0OFNEQlN5TlBZdVhvZTVZOExkUDlyMGdFcVFYN09aSFFHRGJ5VWZpM2hXYW4yZ3lzOGFTMlJ0MHRRSUJkbFNacTYtaC1EYnV0Mi1KaXJlcTRsZ0ZZWld6eGxhVHp1dlk4OUluQmVIV0hYX3p1Q1lyN0EtbDNueDZ1YnVsVTNHOWdtOTMxRGVa?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 725
    },
    {
      "date": "May 20",
      "text": "Iran reviews US peace proposal as fear of war rises",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPekMyeGcxWEVrNG5LQnpVdW5jdU9hcTFMUTFlRFRuU2VNZFZZbUZHbEpkY1ZxbUtjSGgyeTh2VnY1Y1dZNENFanNBYzhNNERpWF8tOXJCS1pmbHJOcFBoVl9tbDVlM3RGUFVsdDc4aXFJOTdLZXpRclFJTGlDeUdZel9CWDRHaE5GcEFGQ2hFb0hEQVNpQ3Q0YndnbHFtdHBBRFMzOEtUajhXd0c5U3Zfdm9wdlJ1VV8wbDZn0gHAAUFVX3lxTFBVM1ZlbXNDVU1IVE45TWxiaXNZTDJGaTZNa3J6WWRiQWpnaVVudFdDOVk4VHkybjYwQ241QXBoaTNhSzhHT3pZNmlJVGNoZ2FVcDFuOERYbklaLXpwbVVlbDdxWnJDSmx6VE1NLVZ2WXBtYjNvRi05dXpUUmFIdGxyR1JqcGYwdHZsS19udG5KS3ZXWU9kUUp0c1B4bkx1Mmt3TU1FWlo0dERWb1FwYnBZbldKaU5tdEJNVkJPazFVTQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 725
    },
    {
      "date": "May 20",
      "text": "Iran steps up claim to control Strait of Hormuz",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1BWFlRVzBGQnRxMk55Vzg1Ymw3LVkwZmlnaGhJN09nazFPb3plNE9hTGU0aHF1U3ZzSUMyX3YtRXRPWWV0U2t5ei1mbzJZbWN1NVZUTHpvcUtidw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 725
    },
    {
      "date": "May 20",
      "text": "Tankers exit Strait of Hormuz with 6 million barrels of crude oil",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiygFBVV95cUxPVXNrRTVhT0c5MGxfUmJneWZOYWpMblUyU2pHRFUzS1czM1ZWaTY5XzVCcHZKUzZnMnBpZ2wydzdSSS1uNExYd21adTY2QlkwODBIUmNpeHBtTG1rblN5dzJOUkxjLVFzYV9xQUctWmxXcWNJTTdNVGpCbnlqYkZTQW5RN084YTU2QklES3VuX21kTUJBR2Y5akFzOFBUd3BEVE5HdkYwdk5wSktsS2pvZHM5QUwtSUhONkNqQ0UweE1fNWN0emdQZTZR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 725
    },
    {
      "date": "May 20",
      "text": "Oil plunges as Trump says US is in 'final stages' on deal with Iran",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi7wFBVV95cUxON3Q3NG9JVFVqOHJvZWJ2Umwwem91RF9CV0FHZ1BGTVhlMnEyOU5nd2tydkN5NnFXNU5kNjQyTWVaWHpqRU9TRGc3WmFZVDgwdksyekJoSGhsMHY2MF9VWnNpeWtuOEd5NXhuRmZWYXBrRUdRbkx4SXk4cnM2ei15eHQ1dU03UzZHZ0ljUl94bGpHaFI0VU9XOFpOUmhyVnpKTUNJVTJ5Q1E4NlpvQTFWYTRkM0g2S3JPSXd2QVRVTDZnU0k4U3hLNzhWSm9aRXRwOF9KWC1VbW1qa2YwbTFxRm1sUGJaWlM3MVJySGZ5cw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Yahoo Finance",
      "latestSinceUpdate": 725
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
      "perspective": "US Diplomatic/Coercive Stance",
      "headline": "Trump Balances Iran Deal with Strike Threats Amidst Senate Rebuke",
      "summary": "The US administration, led by Trump, is pursuing a deal with Iran while simultaneously issuing warnings of military action if negotiations fail. This dual approach is complicated by a Senate measure seeking to limit US military engagement in Iran.",
      "tone": "strained",
      "latestSinceUpdate": 720
    },
    {
      "perspective": "Iran's Strategic Posturing",
      "headline": "Iran Accuses US, Threatens Israel While Weighing Deal",
      "summary": "Iran is examining a US proposal for a deal, yet simultaneously accuses the US of covert hostile actions and threatens massive missile retaliation against Israel if conflict resumes. This indicates Iran's attempt to project strength and leverage in the ongoing situation.",
      "tone": "defiant",
      "latestSinceUpdate": 720
    },
    {
      "perspective": "Regional Instability & Oil Security",
      "headline": "Lebanon Conflict Persists, Hormuz Bypass Underway",
      "summary": "Despite a truce extension, the conflict between Israel and Hezbollah continues in Lebanon, resulting in a high death toll. Concurrently, regional players like the UAE are advancing projects to mitigate potential oil disruptions in the Strait of Hormuz.",
      "tone": "anxious",
      "latestSinceUpdate": 720
    }
  ]
});

export default LATEST_SNAPSHOT;
