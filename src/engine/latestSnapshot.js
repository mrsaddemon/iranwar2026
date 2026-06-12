export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 949,
  "lastUpdated": "2026-06-12",
  "lastSyncedAt": "2026-06-12T23:26:33.780Z",
  "warDay": 105,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-12",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 100,
    "summary": "A deal to end fighting between the US and Iran is reportedly close with a 'final text' agreed by some parties, but Iran states no deal is finalized, and regional military actions continue."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 58,
    "escalationLevel": 38,
    "oilDisruption": 85,
    "tradeImpact": 52,
    "sanctionsPressure": 49,
    "globalPressure": 56,
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
      "date": "Jun 11",
      "text": "Trump cancels planned strikes on Iran and touts progress on a deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifEFVX3lxTE1QY0JRWVhUT2wwN2h5ZFRETDRoUktOYngxcTFZVXNLQlIwNTBfN1JBaE9qLXlPT096VF9leUFHOVZMUEx4WnRVT1JscW1fRnlvRU02eFhRODZZY1UyU0pYakFfbWtiWmtPSnppQW9yeE1CSFBRaXdnZElJZGs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 949
    },
    {
      "date": "Jun 11",
      "text": "Iran states that no deal with the US has been finalized, despite claims of progress.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 949
    },
    {
      "date": "Jun 11",
      "text": "Pakistan's Prime Minister expresses 'cautious optimism' and states a 'final text' of a US-Iran deal has been agreed.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxPbXc3blhkTDdaaGZNWkl4cWlUUXk1TTR3X0Q3Ym93ZDlwX3FYRU1iTHl2Wl9wekhRTmJfaWVIcmduMDVOTTRYUy1fTWIwVHVqRFZnQUtTVXdJYmVQZjJUQXhkc3M5Yms2aVlBU05RUlE0Ty1UUlNuS1M5dVVWelpQRTZ5WWV3UURoa2Fudzh2Z0JoSEdJMnp1V2ZDX2lvdm5seGtoMUNNZE5jN1k1MmJSSnpVTjJjTHE2?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 948
    },
    {
      "date": "Jun 11",
      "text": "The US confirms the completion of a second day of strikes, prior to Trump's cancellation announcement.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 949
    },
    {
      "date": "Jun 11",
      "text": "Kuwait closes its airspace, and Israel warns of launches from Lebanon following US strikes in Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTE5JRzk3dDJ5dEFyWGw2dGY2Z0hxUy12c29QVElKMUxxNUYzeVdMVXBiWm9vZUlxYzBzakpMOGsyMVhLZ2p1WnByX2dkVWVwNi1uNmt2UWZwdU5ZaG90Vm9DQWs5OGhUSWtfdGlYTjU2TVA3d9IBd0FVX3lxTE1MeFk0ZWNVVUM5X2xWaVRCN1IyVDFxMjcwWERtUjlXWS10UmFMdVBpMlZ4akhDSWRBR09QVjA4SjBUX0VhVnl6YTMtOFdwVEd6Q1R5S2tVSmJQZ1c4YlNCTXIxemM5Z2w1RWljYl9zQ21EWFc0bGxN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 948
    },
    {
      "date": "Jun 11",
      "text": "Iran warns that its 'sword will always hang over Strait of Hormuz' and states a deal would lead to its reopening.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9WbDM5eldoWW54T1NESmcxenViSnhRMk1VaWh2UjB5eF9Lb194QW1IUmt1QUxLLUc5VF9Vc1RHNS1iTENwcTNMaHVJV2haaGx2UXZhN04wSFNodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 949
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
      "perspective": "US Administration",
      "headline": "Trump claims imminent Iran peace deal, cancels strikes",
      "summary": "President Trump has announced the cancellation of planned strikes on Iran, citing a breakthrough in talks. He claims a 'settlement' has been reached and a peace deal could be signed soon, potentially opening the Strait of Hormuz.",
      "tone": "hopeful",
      "latestSinceUpdate": 941
    },
    {
      "perspective": "Iran",
      "headline": "Iran denies final decision on deal amidst retaliatory attacks",
      "summary": "While President Trump speaks of an imminent deal, Iran has stated that no final decision has been made regarding a settlement. Iranian forces are reportedly engaged in retaliatory attacks against US bases and exchanged fire with US forces in Hormuz.",
      "tone": "skeptical",
      "latestSinceUpdate": 941
    },
    {
      "perspective": "Regional Security",
      "headline": "Middle East remains volatile despite de-escalation claims",
      "summary": "Despite claims of a potential US-Iran deal, the region remains highly volatile. Kuwait has closed its airspace, Israel warns of launches from Lebanon, and Israeli air strikes continue against Hezbollah targets in Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 941
    }
  ]
});

export default LATEST_SNAPSHOT;
