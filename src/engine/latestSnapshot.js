export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 732,
  "lastUpdated": "2026-05-22",
  "lastSyncedAt": "2026-05-22T08:40:45.132Z",
  "warDay": 84,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-22",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.81,
    "durationDays": 3,
    "summary": "No active ceasefire is in effect, despite ongoing peace proposal reviews and mediation efforts."
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
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 38,
    "oilDisruption": 75,
    "tradeImpact": 45,
    "sanctionsPressure": 49,
    "globalPressure": 54,
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
      "date": "May 21",
      "text": "Iran accuses US of ‘overt and covert’ moves for attack",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPMDJZNG9HalZLWEpsaHNBemRNVHpOOXVITWN3eTVMZEx6WnNuX0gwdlpUV2x5ME82MHJTazE4TlJoWmxLMTF3c2xDWG9rb1o1UmJlLXRpWlZjWWlpZXJUR2l1X0ttQlZzaEtVaEd6QTliRTFGZFZsX21jYnE4alNOeEoxTVVyZm81UU5uNWNGZGNHVzJZcy1UTHNlNjZ6d3hoYnJzWHBvZkZxMTRmWHVGRjB4cGJJNk4tMENN0gHAAUFVX3lxTFA5dzBfN3RmRWVPR2ZpWjQxOTlEbDBncExIejdaMU9UdDc0c21Bd2VLa3p6Vy1fcFE4bE1xQmR2LVJGOUxKNERXSGFzbjhKb09jLU5pTU5DY1Z1S2tTWEdQN2N6MVFRWWJTMmhvaVMwN0RWclo4b2Q2cF85aHFaZVhvZ0N0WWdmVFo5YTFtcGlWU2l5NzZjeXJrTXpmRkRIVjh3Tk1DMzBzVGtKcFpraDVmVGJNTkhrSTNPWENPTGhBUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 732
    },
    {
      "date": "May 21",
      "text": "Iran reviews U.S. peace proposal as Trump says he’s willing to wait 'a few days'",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 732
    },
    {
      "date": "May 21",
      "text": "Trump warns of attacks in ‘two or three days’ if no deal",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQbTlFd3h6a0dEY2xzZDhJR0pOcFBpSGU1VkZHM1dPbnJPNmZnbU95TG5LSm81MFZwZjY4NnM4QURoY2RFajltcE1OZlA4MVJhX1M4bHhpTGg5ZWJ6SFItUVN1bENBdF93dGxnUFFVYVk0ekZ1bGFEbnlLTUhlQnd1NkdhaW5JWVQtdWJjb1F1ZVhPRVR0WGVWalFsQ1BmUG5CdU5pQW9sY19mR2ZESUhwc2dqbGRVQ3NmZU53dkdnb9IBxAFBVV95cUxPSFZwME9HOGd5YnpZSHI3Zm5lX0FIMm1HV1hJeURJVWE4SUFjQjZ6V3I3WlBZTnEtS2JQSUw0OFNEQlN5TlBZdVhvZTVZOExkUDlyMGdFcVFYN09aSFFHRGJ5VWZpM2hXYW4yZ3lzOGFTMlJ0MHRRSUJkbFNacTYtaC1EYnV0Mi1KaXJlcTRsZ0ZZWld6eGxhVHp1dlk4OUluQmVIV0hYX3p1Q1lyN0EtbDNueDZ1YnVsVTNHOWdtOTMxRGVa?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 732
    },
    {
      "date": "May 21",
      "text": "Israel said preparing for renewal of Iran war",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQY0hFRFJqeXMyYXVTQU5XZjI3TExpcUw2RlNaUW5rT2k0Ylk3ZEN1a3RhZzBUQU00Z3JPSmtNTjhrYlhZWFVNWmlSaUZRZUNKOXBuVGVCSzQtVjZHMzFFRWszU2txa1RJSFdlSVhERWVQdl9xcFFUV1NrSDJuTTR1Ukw5M29MYnJuWWhNY1BxajI2eGZGNUJYNDNnWXl5TWdZUHF0ZkZuQlluTlJkeHBxajM1cWhUYmPSAbwBQVVfeXFMTmVqLS1IcXJHdTZfdTdweVpGUmI5a2drYWtGWlFwa19lY0ZLUTliR0NYeDhDZFBhMnlXTnlRcTZOSmlaNmJwQ25KTFI5TkNTeU5UWXdxZ2I4dnBzQTcwUkZ2ZDNfTVZNcGMyTGYyNVcwUUZYUHJVN2hPMUxwSDFVcWRJc3NoWkpSV2c5Z3YtV2htLU41eWZqR2hQOWJsWDNUTFhiSVBZOTJXSEZobHZyS2NPejdpSlhYZy1CSlY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 732
    },
    {
      "date": "May 21",
      "text": "Israel launches air strike on Beirut",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 732
    },
    {
      "date": "May 21",
      "text": "US says it has attacked Iranian-flagged ship",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 732
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
      "headline": "Trump Offers Peace, Warns of Renewed Attacks",
      "summary": "President Trump has presented a peace proposal to Iran, indicating a willingness to wait 'a few days' for a response. However, he has also issued warnings of potential attacks if a deal is not reached, signaling a conditional pause in military action.",
      "tone": "strained",
      "latestSinceUpdate": 730
    },
    {
      "perspective": "Iran",
      "headline": "Tehran Reviews Proposal Amid Accusations and Readiness",
      "summary": "Iran is reviewing the US peace proposal while simultaneously accusing the US of 'overt and covert' moves for attack. Tehran declares readiness for 'every scenario' and tightens its grip, asserting its control over the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 730
    },
    {
      "perspective": "Israel",
      "headline": "Israel Prepares for War, Strikes Beirut",
      "summary": "Israel is reportedly preparing for a renewal of the war with Iran and has launched air strikes on Beirut, resulting in casualties including children. This comes amidst accusations of potentially committing genocide in Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 730
    },
    {
      "perspective": "UAE",
      "headline": "UAE Accelerates Hormuz Bypass Pipeline",
      "summary": "The UAE is quickening the development of a second pipeline to bypass the Strait of Hormuz, with the first nearly 50% complete. This infrastructure project aims to ensure oil flows independently of the Strait, with full operation expected by early 2027.",
      "tone": "neutral",
      "latestSinceUpdate": 730
    }
  ]
});

export default LATEST_SNAPSHOT;
