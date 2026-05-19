export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 702,
  "lastUpdated": "2026-05-19",
  "lastSyncedAt": "2026-05-19T05:44:46.098Z",
  "warDay": 81,
  "summary": "US President Trump paused a planned attack on Iran, signaling potential nuclear deal talks, while the Israel-Hezbollah conflict persists with evolving tactics and a high death toll in Lebanon, and Iran maintains its grip on the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-19",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 10,
    "summary": "No comprehensive ceasefire is active, though a US strike on Iran was paused and a truce extension was reported for Israel-Hezbollah amidst ongoing conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
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
      "date": "May 17",
      "text": "US President Trump announced he paused a planned attack on Iran, signaling a nuclear deal may be possible.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxNcDZKdU5Cb2tFNmNsTnFKeWlKRFJnZ3lHdGVMRnVBOUR5NnlLaW01eldjcG1YcHZjbndUamVLbV9QWlRhczB6TEt2cDY2bkJqdXB4QlhkQV9nd3dvamF2NnpDU0ptdUZxQXdOQlF5ODB2M0VKbmc4U0xFMVFuWW5Cb0VOeGVYaVA2amRzZ3JGejBGenBGUzh5dlcwM252T2R0cFY0U0U3MEc3Q2t3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 702
    },
    {
      "date": "May 17",
      "text": "Trump revealed a planned US strike on Iran, stating the US Army was ready, but then called it off at the request of Gulf allies who indicated a peace deal is close.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxQS0w1ZTJRR0FaR0gyVlFzOU8yOGRZTkhLcXBSdE5Idk9nbDRyeFB0OUFncHBaT1E1c1FFeHNpTEhISDZ5VU5qdnpjR3ZIX3RzTng5TFFPZk1pQVplRXh4X21RZzFncnI2NW5CSHh6MlNSTkVwYkZlZFpyQ2k4YXZSRlRXNU5GSi1IUHJSTm5fRXhtWUxRQWRIY3VBOGtuMjJscVUwWkVMMl9UQWNSSXZyRlE4cXo?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 702
    },
    {
      "date": "May 19",
      "text": "Iran continues to grip the Strait of Hormuz, leading to new opportunities for Syria and Iran starting Bitcoin-backed shipping insurance for the strait.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 702
    },
    {
      "date": "May 19",
      "text": "The Israel-Hezbollah war persists despite a truce extension, with Lebanon's death toll passing 3,000 and Hezbollah demonstrating evolving drone tactics.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMizgFBVV95cUxNcHFmUWF1aGxtQjJHWWlHOHNDM0xSRVE5ZFRRWno5Skt4VUZ5VHBhanNfWklwbl9qdFo4dm9ZclVEa2tGWS1rY2dWNHNIUXNOMVJHX1RNR1ZfWjdELTlkdkRmZXNzSXZoSTFmbmk1WjR6czBmLU04THBiTDNuUlc3WjJyUi1IV29VTHVZWkYzRUdTQkVmVmR0WUJqc1I4UEFSdlh2YnBjeFhLMGNoTWhwc3UxRUpPUXZlUjA0eURxM0JGUGdNd3ZwaGhkejI4dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 702
    },
    {
      "date": "May 19",
      "text": "Hezbollah launched 14 rocket and drone strikes on IDF soldiers in South Lebanon, indicating an all-out engagement.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 702
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
      "perspective": "US-Iran Tensions",
      "headline": "Trump's Mixed Signals on Iran Strike",
      "summary": "President Trump publicly revealed a planned military strike on Iran but stated he called it off, citing requests from Gulf states and ongoing negotiations. He warns Tehran that 'the clock is ticking' for a deal.",
      "tone": "strained",
      "latestSinceUpdate": 701
    },
    {
      "perspective": "Strait of Hormuz Control",
      "headline": "Iran's Economic Leverage Over Hormuz",
      "summary": "Iran is moving to assert economic control over the Strait of Hormuz, announcing plans for a toll mechanism and launching Bitcoin-backed shipping insurance, potentially disrupting global shipping and internet cables.",
      "tone": "defiant",
      "latestSinceUpdate": 701
    },
    {
      "perspective": "Israel-Hezbollah Conflict",
      "headline": "Intensifying War Despite Truce",
      "summary": "The conflict between Israel and Hezbollah continues to escalate despite a truce extension, with Israel attacking Lebanon and Hezbollah employing evolving drone tactics, resulting in a high death toll in Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 701
    },
    {
      "perspective": "US-European Alliance",
      "headline": "Iran War Strains US-European Alliance",
      "summary": "The ongoing situation with Iran is reportedly causing a significant strain on the strategic alliance between the United States and European nations, indicating diverging interests or approaches.",
      "tone": "skeptical",
      "latestSinceUpdate": 701
    }
  ]
});

export default LATEST_SNAPSHOT;
