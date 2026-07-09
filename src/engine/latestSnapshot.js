export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1221,
  "lastUpdated": "2026-07-09",
  "lastSyncedAt": "2026-07-09T07:49:38.360Z",
  "warDay": 132,
  "summary": "The ceasefire between the US and Iran has collapsed, leading to a second day of renewed US airstrikes on Iran and retaliatory Iranian attacks on Gulf Arab states and US bases, alongside continued tensions involving Hezbollah.",
  "lastNarrativeUpdate": "2026-07-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 1,
    "durationDays": 60,
    "summary": "The ceasefire between the US and Iran has been explicitly declared 'over' by President Trump following renewed hostilities."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.4
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "Jul 09",
      "text": "US and Iran trade strikes for second day after Trump declared ceasefire 'over'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxPbUJvWmM1dG1ldjh4TmdlYUJyTVRiWjhIVUFqcEJIVzcwdVJOb2c0ZlU2V3gxaktFWU9acnkzMGNDUHcwTEtPR2lJQVpaYjd1SU50UWpWUEdLNXBzWWZQbC1LcFBmMjNSRGRQMnRWYTAtRVJydTEwZ1dHMVlfdDVQNl9DMVNxVnlX?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1221
    },
    {
      "date": "Jul 09",
      "text": "US launches new airstrikes on Iran, hitting approximately 170 targets over two nights.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1221
    },
    {
      "date": "Jul 09",
      "text": "Iran fires back at Gulf Arab states (Bahrain, Kuwait) and US military bases in retaliatory strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxOTHk5SVR4QzhvakNVWlhyYzFTM1VtTW13bUYxY0hoNHlVYjNuVDY3c1FPdG5NRlJaZWpzdVoyZDlIcG1pc0RxTFpzR2h2QTVWb3RTMkhmSUI0clRKSGxISnlpWGtLZTdzdjVxeVFlQ1Q1ZVdqUW0tWWZlVXJwMXZjemdMYV9VcTg0TGhycktLR2pjVTZJa1pnZ2kwdEZ4N2xvZ3dQb2ZLQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Telegraph",
      "latestSinceUpdate": 1221
    },
    {
      "date": "Jul 09",
      "text": "Iran attacks in Strait of Hormuz after 3 ships were targeted, prompting US to revoke oil sales permits.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1221
    },
    {
      "date": "Jul 09",
      "text": "Hezbollah rejects US-backed Israel-Lebanon ceasefire amidst ongoing regional tensions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBDX19HLUpiZ2wzMzJfd0VNaUxxazNlXzJXMkRrM2tkUkk5MmtVYllkUUZSWWR3d2RydXRNSzdKdHRqQ281Mkk5ZWpRamlrM3lqTll5LWNQQW5rUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1221
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
