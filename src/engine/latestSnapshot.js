export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1485,
  "lastUpdated": "2026-07-27",
  "lastSyncedAt": "2026-07-27T11:59:48.956Z",
  "warDay": 150,
  "summary": "A pause in US-Iran strikes is underway as talks progress, though an oil tanker explosion in the Strait of Hormuz and Iranian threats to expand the conflict if strikes resume indicate continued fragility.",
  "lastNarrativeUpdate": "2026-07-27",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 2,
    "summary": "A two-day operational pause in US-Iran strikes is in effect, with talks reportedly moving in a positive direction, though incidents like a tanker explosion and Iranian threats underscore its fragility."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "date": "Jul 26",
      "text": "UN envoy Waltz states Trump is giving talks 'some space' while Iran condemns Ukrainian attacks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE4yUGQyOU5oLVZvX0t4bWI3dVo0R3ZaSHNoS0t1SEl0bjZHLVNTejIyeEVXMnZraDhBUE5kanFxYkU0ZHR2c2JEVzc0ZUR0MV9GMkg0U0IyRHYxdEw1Wi1FYUkzMnU4c3N4T3JwbUNB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1485
    },
    {
      "date": "Jul 26",
      "text": "Iran announces it will halt strikes as long as the US bombing pause holds.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMizgFBVV95cUxQT2hvLTRwU3J1WVZCTlA0WFVNRmhXdDVkTWhwQkdDTFZzbEVpYmRBUUppcjJudFY2M3JpQ3lzT0I0SkM4VFlmSk8xb0RuX192WjQ2dE9nbjJkUFFMTHFyZDh2c1ktdDJpSmtmdXJPYW5wNXRuM1hsQ0RqYkE4X3d1aDZ1SkpUM3ltc0h2NFNZbmpvZFhYa0ZJTlEyR0JkdDZvYWRUYXBRZE41YkVEdjV4VEZVb0hSSUxOQlFwT1U4X1FfNjJrbmhaSVkyT0w0Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1485
    },
    {
      "date": "Jul 26",
      "text": "Trump holds off on major war escalation against Iran as advisers raise concerns.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1485
    },
    {
      "date": "Jul 26",
      "text": "Pentagon reports more than 600 Iran war casualties in a quiet database update, sparking transparency debate.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxPRjZuN2tOUWVfbmppRExOaEJ5NXFvREZybXlkb3hlWTFzTU16R0N0UERhQUhndjdvVzV2SnBxRlgzN09sOHBrU2oxOG5vQTVoX0kzeUFJM1lldmgxaXZSUUcxbEJNemtxLTlJVThXVEpNV09OeHdxZTNMUGFpMW1feFhlZGtPeGdReGNWVUVPN1RkZnZ5aUQwSVJ3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1485
    },
    {
      "date": "Jul 26",
      "text": "Iran threatens to expand the war if the US resumes strikes, alleging Israel is pushing for it.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxNTEU1blJ0ZjFodmdqYXM3MzdXeU9PbXcwUlNEUWx5aktWY29NRXRHOC1XS2F3QTFpMWhKMnVhX0dUMkh4TmNYVEl0cDN6ZGtHb0dOMzk0SlE3SkdOT1JzVmZJQjFHYUYyUzZjUkFKNU5tZ3JmbDZTRXVYdUNDZXVFWjg4cG5QQmZKcFhKZnd1a2tMMENKS05LNFZMUC1henZCRERMcUVTaXRoRGYyV0Z4UmRSdmgxNUR30gG-AUFVX3lxTFA1UEhCVnJkWDRyNHRNYUItcVpsWDRfVXgyR0xUX3VyVXdacXZKMWgxSmtmWFFpVjlFVW12NHplMDFhXzZpYVFmbTdQRmFJajFGenhOdWtDZzNraEV5NEZXMkFCeElTQUVDbW9FaFUzS1lWam81NG5QMnpQRkcxclpUd2dGTTNsa05IeTRwd1BTclM2Q0RoMmtxM0FsZ2NvQWdLd2lfNWwyQ3BwcnV1d3NNanFrQVBBY3lxSXVtNUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1485
    },
    {
      "date": "Jul 26",
      "text": "Khamenei ties a US-Iran peace deal to Israel ending attacks on Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxOdlZIaGtLT0ItbHVjQ0xEWFoyU2I5anhKZHp2QlZhVW1kWTRuOXRBMy1uQlc3a29vTVRTT21vMXZ3dTQ3UTkyVFZSNElnNzQ2VjZDWERjSEQ2bTFDOUpGMkVsOEozVkN0Nm9TVVphV1U5Yll1UEx1cXRsWFBKLU1xMUl1T2lUX3NqVkI1dXBaY2k3cWJiRmRRdkdQVTRacU5hTExkbndBWHQ0VGfSAbABQVVfeXFMUEVoS2VuR3pBZ1YyVzlYTTIyU0Z4eGFfSEhGd2Y0M3lMQ3ZUUFFndDVZUHh5cGhYRUU5enpINl9ha3FHclJuc3dVSkRFWXdFSXNuZjVoZU9qV0FMYjRYcjZIenBFLWRIczhIeEVIalFqLUNjR0Rscm5wMGlramFQZGJXZWRSVDdtcW9la2xxZEhlSGFvRmlYdTVybDY2MTI4Q2tLTmc4TG12TmtyczlZejM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1485
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
      "perspective": "US/Trump",
      "headline": "Trump's Stance on Iran War",
      "summary": "President Trump has paused strikes against Iran for two days, denying munitions shortages while threatening major escalation if necessary. He faces pressure from allies like Israel to resume action.",
      "tone": "strained",
      "latestSinceUpdate": 1482
    },
    {
      "perspective": "Iran",
      "headline": "Iran's Defiant Posture Amidst Pause",
      "summary": "Iran threatens to expand the war if US strikes resume, praising Hezbollah and calling for continued jihad against Israel. Iranian media reports an oil tanker explosion in the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 1482
    },
    {
      "perspective": "Israel",
      "headline": "Israel's Push for US Escalation",
      "summary": "Israel believes the US will soon be forced to escalate strikes against Iran despite the current pause, while obstructing Hezbollah's takeover of pilot zones in Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 1482
    }
  ]
});

export default LATEST_SNAPSHOT;
