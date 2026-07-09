export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1220,
  "lastUpdated": "2026-07-09",
  "lastSyncedAt": "2026-07-09T04:05:44.972Z",
  "warDay": 132,
  "summary": "The US and Iran have resumed direct military strikes, with the US revoking oil sales permits and Iran retaliating against Gulf Arab states, signaling the collapse of a previous ceasefire.",
  "lastNarrativeUpdate": "2026-07-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "The previous ceasefire between the US and Iran has collapsed following renewed military strikes and retaliatory actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.75,
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
    "nuclearIndex": 15,
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
      "text": "US military launches new airstrikes on Iran, prompting Iran to fire back at Kuwait and Bahrain.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxQTXRXN1ZOY3dWb0Y3bFliM0t6QVRjQkxGNmNRRkVPM29YazVXaXVpaFo3N2h2MHdBLUlTMWNROTJuTUJQNFhaR3BwTzV5b0NDYk1WOG5NMXRHLWhuNHF1NXJqOFM0Vzg2TWo2bXRCUS11WmFEeU45UURDV0dqX0szLWxfbkptQXFxQVJXM0hjY2lkS1VJdkljZWFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1220
    },
    {
      "date": "Jul 09",
      "text": "US revokes Iran's oil sales permit after three ships were attacked in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxOT2tfRFIyMHM3Y3R0UHRSQ0xwNEdNX2pjVUV5QkFGZk4yLUpVeU9RN0RHLXpUYU5UMzVIZkNwOWV4Q2dKTnJYZVl6UzZadkxHYUVYNmUzYWxoUEo1S2pPRUkxWmFsMHhadUYyams3ME5TOTlVSHhuTmgtRVA4NGo1NlJIOF9ZOUU2dGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1220
    },
    {
      "date": "Jul 09",
      "text": "President Trump suggests the ceasefire with Iran is 'over' following the latest exchange of strikes.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1220
    },
    {
      "date": "Jul 09",
      "text": "IDF says a Hezbollah cell was hit in south Lebanon and warns of further attacks if the truce is violated.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNYlBjdU1FYnBZbXk4YVNPLVV5VGk3cExERy1tTW5YWFBnN0hxMEtvYTRlaEhTU0VneVc2R0pYOFJhVlp6M2tMSlpRM05mdU9DaXVERXgwZ3BwVV9Yb2Z4OUxOa3BBTnV3anJRamVsX1VvdlZDX1J5ZnBBZ1NBbkRwdkY3Q3VPWUxtc3R0N2Z4ZnR1Z3V6RVRBU2o2dlFsdUE0ZFV3ZnFSVGJpRG9fZkozaVAyN03SAboBQVVfeXFMTUZxY3dBWUlzSHlnb1NQVFM4bmlJdGpCdGJMMDRVRUVUWHR2QTRhbm5Kank2LWo2d0lYQkZXYW1GZzVOVTdVWmJYb1V6RW1MV0g4WjQxUnhORERCZjNPcUt2VG9LWkQyclRzd2d5U2E1YXh6VXNxeFhoWW1makdLRHlxaWltWFN6SS1HbU1XLUQxUEVpTFRaQi1XUnV1Z2dyTlc1WXQtTWRBcEZySHFVTk9JMWdrRy1xNkFB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1220
    },
    {
      "date": "Jul 09",
      "text": "The IMF projects global economic output to be slower for 2026.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1220
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
