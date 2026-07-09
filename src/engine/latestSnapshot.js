export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1224,
  "lastUpdated": "2026-07-09",
  "lastSyncedAt": "2026-07-09T16:17:20.962Z",
  "warDay": 132,
  "summary": "The ceasefire between the US and Iran has collapsed, leading to renewed mutual airstrikes and Iranian attacks on Gulf Arab states, while Israel maintains its security operations in Lebanon.",
  "lastNarrativeUpdate": "2026-07-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "The previously fragile US-Iran ceasefire has collapsed, with both sides resuming military strikes and no active de-escalation efforts reported."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Jul 09",
      "text": "US and Iran trade strikes for second day after President Trump declared the ceasefire 'over'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxPbUJvWmM1dG1ldjh4TmdlYUJyTVRiWjhIVUFqcEJIVzcwdVJOb2c0ZlU2V3gxaktFWU9acnkzMGNDUHcwTEtPR2lJQVpaYjd1SU50UWpWUEdLNXBzWWZQbC1LcFBmMjNSRGRQMnRWYTAtRVJydTEwZ1dHMVlfdDVQNl9DMVNxVnlX?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1224
    },
    {
      "date": "Jul 09",
      "text": "Iran launches retaliatory strikes, targeting US military installations in the Gulf and three Gulf Arab states (Bahrain, Kuwait, Qatar).",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOazFrLXladEhrcG51TllsZHBwdDd0Y2hPTWo3eXNEYkxXX0J1cDlfUk94eURqb29qR20wMU93a3BCN3E5d21OUEVUOU5meF8yNm9uNngtUi1adEJEYVFCUksyeG1EVGtTU0dncU55NHEwQzV5bWRLSGhBUUpGOFhfZGRTemktaW1rREhpb1lDTWRKc2dPNV9jOUt0VG44ZzBhT3BEWENyMHRvOXpIcFBmT3dPcHRwN1doc3QxWtIBwgFBVV95cUxNajNoV2lYTU9GUnM5bmRJcVB1Uno1VDZMbXdsRHo2anF1Vk0taFRuVjVVUHVuSkVWYkhjS3owUFBwR1JMR2ROdEEycVlmdTNndEJ2am8tNUY2TlNEQ21lbXpNdG1SZW4wYkF0bmI2YTNYWEZrakZWV1lDUjVORFI4bTZVUTRBUjRQdDhvVVNyWE82eDdoazdKVzI1VEFPV2NzaFU0WGNGNFRpT1djbFd5NzFfZTd0VHM2Yl9MdGtvWW1zQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1224
    },
    {
      "date": "Jul 09",
      "text": "Tanker traffic through the Strait of Hormuz slows following Iranian attacks and renewed fighting.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxQMFdRNlpaV0ZCRU1vbThIVlFSQy11anNlcDc5RUxFbmhraHU2SWptSXVNdFBjX0FmM3hTRlFpa2V2QUlaMGVpZGtJNEY4MzNmMGNwR2RmNm9MaXdqbnBldzRnbnpZUHR3Z2NMbUNBTHpIS2ZRaHIzUWxGQmgwSlUtUllCVmpaVkVRUm9SSi1R0gGTAUFVX3lxTE00X3NPUnQ1dzlkZVBwMGpuYzd1RFJVdlhINXVUTlBRMkdidGpiQ0ZoUVdJYmFZdGRHUkgxcGlSeVJCVTlaUzNNWHNRX2UzZC1QTWs0RU10MjZhcVRHSzVhWUl3alo0WThDY3l4YkpCTTM5WUdQSFNPWFdoNjU5Zl85aTNMMzBCQTZHVjVhWkdvRVZ1bw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1224
    },
    {
      "date": "Jul 09",
      "text": "Israel states it will remain in the Lebanon security zone until Hezbollah is disarmed.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1224
    },
    {
      "date": "Jul 09",
      "text": "The Israeli army reports capturing a Hezbollah militant.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1224
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (16 headlines)"
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
      "headline": "Trump's Desire to Exit Iran War Contradicted by Renewed Hostilities",
      "summary": "Despite President Trump's stated desire to leave the Iran war behind, recent events indicate a shift to a direct confrontation over the Strait of Hormuz, with the ceasefire declared 'over'. The US has initiated new strikes and economic measures.",
      "tone": "strained",
      "latestSinceUpdate": 1220
    },
    {
      "perspective": "Iranian Response",
      "headline": "Iran Retaliates to US Strikes, Targets Gulf Arab States",
      "summary": "Following US airstrikes, Iran has responded by firing back at three Gulf Arab states, including Kuwait and Bahrain. This marks a direct escalation in the conflict, with Iran's actions seen as retaliation for US military and economic pressure.",
      "tone": "defiant",
      "latestSinceUpdate": 1220
    },
    {
      "perspective": "Regional Stability (Lebanon)",
      "headline": "IDF Prepares for Renewed Hezbollah Conflict Amidst Truce Violations",
      "summary": "The IDF has reported hitting a Hezbollah cell in south Lebanon and is preparing for a possible resumption of fighting, warning of further attacks if the truce is violated. Lebanese political figures are urging Hezbollah to submit to state authority.",
      "tone": "anxious",
      "latestSinceUpdate": 1220
    },
    {
      "perspective": "Global Economy",
      "headline": "IMF Forecasts Slower Global Economic Output for 2026",
      "summary": "The International Monetary Fund (IMF) has indicated a slower global economic output for 2026. This forecast comes amidst heightened geopolitical tensions, which could further impact energy markets and trade routes.",
      "tone": "skeptical",
      "latestSinceUpdate": 1220
    }
  ]
});

export default LATEST_SNAPSHOT;
