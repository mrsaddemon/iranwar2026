export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1222,
  "lastUpdated": "2026-07-09",
  "lastSyncedAt": "2026-07-09T10:46:05.815Z",
  "warDay": 132,
  "summary": "The ceasefire between the US and Iran has collapsed, leading to a second day of direct strikes between the two nations and Iran targeting Gulf Arab states, while the US revoked Iran's oil sales permit.",
  "lastNarrativeUpdate": "2026-07-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "The ceasefire between the US and Iran has collapsed following renewed strikes and declarations from President Trump."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.65
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "text": "US and Iran trade strikes for a second day after President Trump declared the ceasefire 'over'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxPbUJvWmM1dG1ldjh4TmdlYUJyTVRiWjhIVUFqcEJIVzcwdVJOb2c0ZlU2V3gxaktFWU9acnkzMGNDUHcwTEtPR2lJQVpaYjd1SU50UWpWUEdLNXBzWWZQbC1LcFBmMjNSRGRQMnRWYTAtRVJydTEwZ1dHMVlfdDVQNl9DMVNxVnlX?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1222
    },
    {
      "date": "Jul 09",
      "text": "US launches new airstrikes on Iran, with Tehran firing back at Bahrain, Kuwait, and Qatar.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxQTXRXN1ZOY3dWb0Y3bFliM0t6QVRjQkxGNmNRRkVPM29YazVXaXVpaFo3N2h2MHdBLUlTMWNROTJuTUJQNFhaR3BwTzV5b0NDYk1WOG5NMXRHLWhuNHF1NXJqOFM0Vzg2TWo2bXRCUS11WmFEeU45UURDV0dqX0szLWxfbkptQXFxQVJXM0hjY2lkS1VJdkljZWFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1222
    },
    {
      "date": "Jul 09",
      "text": "US revokes Iran's oil sales permit after three ships were attacked in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxOT2tfRFIyMHM3Y3R0UHRSQ0xwNEdNX2pjVUV5QkFGZk4yLUpVeU9RN0RHLXpUYU5UMzVIZkNwOWV4Q2dKTnJYZVl6UzZadkxHYUVYNmUzYWxoUEo1S2pPRUkxWmFsMHhadUYyams3ME5TOTlVSHhuTmgtRVA4NGo1NlJIOF9ZOUU2dGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1222
    },
    {
      "date": "Jul 08",
      "text": "President Trump declares the ceasefire 'over' following Iranian attacks in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1222
    },
    {
      "date": "Jul 08",
      "text": "Hezbollah rejects an Israel-Lebanon truce amid escalating regional conflict.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1222
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
