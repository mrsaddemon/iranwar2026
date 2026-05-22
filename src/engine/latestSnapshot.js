export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 735,
  "lastUpdated": "2026-05-22",
  "lastSyncedAt": "2026-05-22T16:32:47.663Z",
  "warDay": 84,
  "summary": "The Iran-Israel conflict continues with ongoing military actions in Lebanon and diplomatic efforts between the US and Iran, particularly concerning the Strait of Hormuz, amidst reports of Iran's military rebuilding.",
  "lastNarrativeUpdate": "2026-05-22",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 14,
    "summary": "Despite ongoing diplomatic talks, no formal ceasefire or de-escalation agreement is currently in effect between the parties."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 80,
    "oilDisruption": 90,
    "tradeImpact": 79,
    "sanctionsPressure": 63,
    "globalPressure": 82,
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
      "text": "An 'Iran Update Special Report' was released, detailing the projected four waves of economic shock from the Iran war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxQczFMZkZLMkpSSEdKemVhY0NpU0kzeXZsM1JRZ1UtQlMyTkZNb1VNeWxmSTZ3QkdncWpDVGdWVlRVQkdoZmpTR0IwOXg5ZzZ3cGhpWUQ0MTJMdWoyT0ExZnZ1bW4ySGQ3MzhiWWZsZXhMVm5YeE9vSktvNWlhMnpjZTNMOUdaWGJkbEFzVC1HSXBVdTg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 735
    },
    {
      "date": "May 22",
      "text": "The U.S. reports 'slight progress' in ongoing peace talks with Iran, with Senator Rubio also noting 'some good signs'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi7AFBVV95cUxOeUk0c05wbG1vMHRCZXcwajZPX2hPbzhMZDFCc0lMbWVRUEx5Z2w5TlU1MFZvS0tUZlVkZDhpdEZManZhRzd0c3BkRHd5UEw2VHJzWVM2TExDQ2NCMi1BYUhKcW5GNHNuMFc2cWRKYlY0Y3Z1a1ZqZmVnMzVlRDJWVm9jXzVVbS1ORTZBUnpTWWNzSkl0TlJBQmJsM0JVNnlYektsSmdIaEdTLUdJMHFEUEpSOWY4WGEtdUhMN252eTJPS192MTN4Wm9ISWM5RjVJWFlBUC04aXlTdUVXNFlGR2hSanF3YVFZZnFSWdIB8wFBVV95cUxPNFozS1FzaEF2TTZRSG9wYUQ2RDZ5VWN1cGI0Yndtc2Z5QkxvakZLQzZXWkRWdjFXNWZTNGZoUzIzOWE5b0J4ZDd6eU9tZXFGREcyNHlwSjZvNEltRzZyTEpyand2ZjlxY3dlTGRlZ2VNandkaXVOVVo4V3liejJfQkhPZC1NcTVnQURGZmhYMkFVQml4bW1LTWRPa2JFNG5CODFMZGlaZnYyQm9rX012UThQRTJReGpfUHllN3hxNUxFd2FiN09NTzJRSUY4WXktbHJ5YXhYSHhQZDYyMklhenFubExTakU1UUR1MzlkaVVTbjg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 735
    },
    {
      "date": "May 22",
      "text": "Tehran accuses the US of 'overt and covert' moves for an attack amidst intense mediation efforts.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPMDJZNG9HalZLWEpsaHNBemRNVHpOOXVITWN3eTVMZEx6WnNuX0gwdlpUV2x5ME82MHJTazE4TlJoWmxLMTF3c2xDWG9rb1o1UmJlLXRpWlZjWWlpZXJUR2l1X0ttQlZzaEtVaEd6QTliRTFGZFZsX21jYnE4alNOeEoxTVVyZm81UU5uNWNGZGNHVzJZcy1UTHNlNjZ6d3hoYnJzWHBvZkZxMTRmWHVGRjB4cGJJNk4tMENN0gHAAUFVX3lxTFA5dzBfN3RmRWVPR2ZpWjQxOTlEbDBncExIejdaMU9UdDc0c21Bd2VLa3p6Vy1fcFE4bE1xQmR2LVJGOUxKNERXSGFzbjhKb09jLU5pTU5DY1Z1S2tTWEdQN2N6MVFRWWJTMmhvaVMwN0RWclo4b2Q2cF85aHFaZVhvZ0N0WWdmVFo5YTFtcGlWU2l5NzZjeXJrTXpmRkRIVjh3Tk1DMzBzVGtKcFpraDVmVGJNTkhrSTNPWENPTGhBUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 735
    },
    {
      "date": "May 22",
      "text": "Israel launches an air strike on Beirut, while the US states it attacked an Iranian-flagged ship.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 735
    },
    {
      "date": "May 22",
      "text": "Iran unveils plans to control the Strait of Hormuz, leading to continued negotiations with the US over the critical waterway.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 735
    },
    {
      "date": "May 22",
      "text": "Hezbollah drone strike videos show evolving tactics against Israel, with 10 soldiers, including a brigade commander, injured in separate attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1ZRlZ1bFFFWlc5SDVraHZwUTRxd1FFS2hTeWdiVUdLWnFiaHI0QVhPU2ZYckFaNFF3UW5vWGEtZWIwb1lmNGdtX1V3VVQzdXEwQjVrNDA5TTVRdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 735
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
