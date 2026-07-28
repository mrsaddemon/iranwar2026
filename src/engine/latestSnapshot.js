export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1500,
  "lastUpdated": "2026-07-28",
  "lastSyncedAt": "2026-07-28T17:47:24.491Z",
  "warDay": 151,
  "summary": "The US has paused new strikes against Iran amid diplomatic efforts for the Strait of Hormuz, while Iran threatens escalation if strikes resume and recent exchanges occurred between Iran and Israel.",
  "lastNarrativeUpdate": "2026-07-28",
  "ceasefire": {
    "active": false,
    "status": "fragile",
    "confidence": 0.3,
    "durationDays": 1,
    "summary": "The US has paused strikes against Iran, but recent exchanges between Iran and Israel, coupled with ongoing threats, indicate a highly fragile de-escalation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.45
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
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 70,
    "oilDisruption": 60,
    "tradeImpact": 56,
    "sanctionsPressure": 61,
    "globalPressure": 74,
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
      "date": "Jul 27",
      "text": "US pauses new strikes against Iran, while Iran states no current negotiations are underway with the US.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1XYlk1TXQyaFgzZF92aWM1cHMxWHlIci14VTNUVEVBamN4Rl9qQzNvQVo2VmEwVjBpbEZIU1RXTk1QMFJHay0wbFloVnU5Ui0yLVFFcWdiOXg3cGN1RVo5bW1QMTZSNlR0LU1iN0t3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1500
    },
    {
      "date": "Jul 27",
      "text": "Oman presents Iran with a Gulf-backed plan for voluntary fees to use the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNeWdMSVB3OUxtSmtXNWtjQW9EWHRKb0hKaUFkeXd4ek45MHpkUUhFWnNBNHpIUnJpM2RXYkU5MHJOaHN2c1BJeDdXZ0ZpZDdkVUNfbHczcmt2MExCQ082MUZWbnFxYXd4U0ZidUI4bUhWb3NMMjdNVjFyLXh1c3E2ZEVDY1dHSEpoSGFFVE0xWHRheGhRdXkybnBuTnVZSC0yaTl5U3QtdEJQenhEMThhSGVtQkZVcmRMakdN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1500
    },
    {
      "date": "Jul 27",
      "text": "Iran threatens to expand the war if the US resumes strikes, which it claims Israel is advocating for.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxNTEU1blJ0ZjFodmdqYXM3MzdXeU9PbXcwUlNEUWx5aktWY29NRXRHOC1XS2F3QTFpMWhKMnVhX0dUMkh4TmNYVEl0cDN6ZGtHb0dOMzk0SlE3SkdOT1JzVmZJQjFHYUYyUzZjUkFKNU5tZ3JmbDZTRXVYdUNDZXVFWjg4cG5QQmZKcFhKZnd1a2tMMENKS05LNFZMUC1henZCRERMcUVTaXRoRGYyV0Z4UmRSdmgxNUR30gG-AUFVX3lxTFA1UEhCVnJkWDRyNHRNYUItcVpsWDRfVXgyR0xUX3VyVXdacXZKMWgxSmtmWFFpVjlFVW12NHplMDFhXzZpYVFmbTdQRmFJajFGenhOdWtDZzNraEV5NEZXMkFCeElTQUVDbW9FaFUzS1lWam81NG5QMnpQRkcxclpUd2dGTTNsa05IeTRwd1BTclM2Q0RoMmtxM0FsZ2NvQWdLd2lfNWwyQ3BwcnV1d3NNanFrQVBBY3lxSXVtNUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1500
    },
    {
      "date": "Jul 27",
      "text": "Khamenei ties any US-Iran peace deal to Israel ending its attacks on Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxOdlZIaGtLT0ItbHVjQ0xEWFoyU2I5anhKZHp2QlZhVW1kWTRuOXRBMy1uQlc3a29vTVRTT21vMXZ3dTQ3UTkyVFZSNElnNzQ2VjZDWERjSEQ2bTFDOUpGMkVsOEozVkN0Nm9TVVphV1U5Yll1UEx1cXRsWFBKLU1xMUl1T2lUX3NqVkI1dXBaY2k3cWJiRmRRdkdQVTRacU5hTExkbndBWHQ0VGfSAbABQVVfeXFMUEVoS2VuR3pBZ1YyVzlYTTIyU0Z4eGFfSEhGd2Y0M3lMQ3ZUUFFndDVZUHh5cGhYRUU5enpINl9ha3FHclJuc3dVSkRFWXdFSXNuZjVoZU9qV0FMYjRYcjZIenBFLWRIczhIeEVIalFqLUNjR0Rscm5wMGlramFQZGJXZWRSVDdtcW9la2xxZEhlSGFvRmlYdTVybDY2MTI4Q2tLTmc4TG12TmtyczlZejM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1500
    },
    {
      "date": "Jul 27",
      "text": "Iran and Israel exchange strikes for the first time since an April cease-fire.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1500
    },
    {
      "date": "Jul 27",
      "text": "Mojtaba Khamenei issues a 'Jihad' message to Hezbollah against the US and Israel.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1500
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "status": "unavailable"
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
      "perspective": "US Diplomacy/Threat",
      "headline": "Trump Pursues Talks Amidst War Pause, Warns of Force",
      "summary": "The Trump administration is engaged in 'very deep talks' with Iran, having paused strikes for a second night. However, Trump warns of 'strong military action' if diplomacy fails, while dismissing concerns over military stockpiles.",
      "tone": "strained",
      "latestSinceUpdate": 1493
    },
    {
      "perspective": "Iranian Conditions/Defiance",
      "headline": "Iran Threatens Expansion, Ties Peace to Lebanon, Praises Hezbollah",
      "summary": "Iran threatens to expand the war if U.S. resumes strikes, which it attributes to Israeli pressure. Supreme Leader Khamenei ties any peace deal to Israel ending attacks on Lebanon, with Mojtaba Khamenei praising Hezbollah and calling for continued jihad.",
      "tone": "defiant",
      "latestSinceUpdate": 1493
    },
    {
      "perspective": "Israeli Skepticism",
      "headline": "Israel Anticipates US Escalation Despite Pause",
      "summary": "Despite the current pause in U.S. strikes, Israel reportedly believes that the Trump administration will soon be compelled to escalate military action against Iran.",
      "tone": "skeptical",
      "latestSinceUpdate": 1493
    },
    {
      "perspective": "US Stockpile Debate",
      "headline": "US Stockpile Levels Under Scrutiny Amidst Conflict",
      "summary": "A debate persists within U.S. political circles regarding the state of military stockpiles. While some officials dismiss concerns, others attribute potential depletion to previous administrations.",
      "tone": "neutral",
      "latestSinceUpdate": 1493
    }
  ]
});

export default LATEST_SNAPSHOT;
