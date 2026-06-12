export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 948,
  "lastUpdated": "2026-06-12",
  "lastSyncedAt": "2026-06-12T22:02:29.487Z",
  "warDay": 105,
  "summary": "US-Iran negotiations are ongoing with conflicting reports on a deal, while US conducts retaliatory strikes in Iran and Israel carries out strikes in Lebanon.",
  "lastNarrativeUpdate": "2026-06-12",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 100,
    "summary": "No formal ceasefire is in effect, though negotiations for a US-Iran deal are ongoing amidst military actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 80,
    "oilDisruption": 75,
    "tradeImpact": 68,
    "sanctionsPressure": 63,
    "globalPressure": 80,
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
      "date": "Jun 11",
      "text": "President Trump cancels planned strikes against Iran, claiming a deal is near and touting progress.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxQcVotVXBtSFIzWjE4NGk0ZXRDWGFqbGlENTNETFBsaGJRSmdFLWJBaFZiY2tQMjBjSm4wMXl5azV2emN3OG1kMVk3c21WZUxqanAyTVp4UmZ6UHRSM0FNMl81djVvNm5aWlpDQUliLUxrMU5paVRmSFgwNzNJVXIyRVBvcEl5TnQ2Ml9ESllaM0hIZkJTeU5rR2JFSWFlNEZtSmhPT2JJSTdCdFpSYkNQWdIBtgFBVV95cUxQNDVBLWpPLXZ3Nzh4NDJiMy1Wb2ZxU0NFOGJXUTREYUt1bFpRNmJIZkJrSlNlUmhVVWh6Z3doU0pFX3A2U2ZXbEhOMVpJQ2lZQ25heEJQV2Y3b29zZ3U5cHNqblhPbXdJMllxUVJ2b1VsanRQV1R5U1h2NXItTWs1RjJmRVk3TThWTERqdXZKam42VUNtVWs5RTJhaEwtbUJFZXRQY2xiYXNCeEsyMWNNRUt2X2FaZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 948
    },
    {
      "date": "Jun 11",
      "text": "Iran denies a deal has been finalized, contradicting Trump's claims of progress.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 948
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
      "text": "The US conducts retaliatory strikes after President Trump claims Iran shot down an Apache helicopter.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTE9CcXlXY1RUWm9uR0lyQlVvb2pIYWM5WFdNZHNYVnlYeTZiaTdvSVlKUDBKV1hvRkxmUG5VbHhWaHpXenIwYTQ4QlBJMjdvNVBhUFZLMTE4cWhpeU9XRmRWVjBDNlRhUUtfcGFNN0M1ZkhzN0ZmSE40Yktn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 948
    },
    {
      "date": "Jun 11",
      "text": "Kuwait closes its airspace, and Israel warns of launches from Lebanon following US strikes in Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTE5JRzk3dDJ5dEFyWGw2dGY2Z0hxUy12c29QVElKMUxxNUYzeVdMVXBiWm9vZUlxYzBzakpMOGsyMVhLZ2p1WnByX2dkVWVwNi1uNmt2UWZwdU5ZaG90Vm9DQWs5OGhUSWtfdGlYTjU2TVA3d9IBd0FVX3lxTE1MeFk0ZWNVVUM5X2xWaVRCN1IyVDFxMjcwWERtUjlXWS10UmFMdVBpMlZ4akhDSWRBR09QVjA4SjBUX0VhVnl6YTMtOFdwVEd6Q1R5S2tVSmJQZ1c4YlNCTXIxemM5Z2w1RWljYl9zQ21EWFc0bGxN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 948
    },
    {
      "date": "Jun 11",
      "text": "Tehran warns that its 'sword will always hang over Strait of Hormuz'.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 948
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
