export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1494,
  "lastUpdated": "2026-07-28",
  "lastSyncedAt": "2026-07-28T04:30:37.196Z",
  "warDay": 151,
  "summary": "The U.S. has paused military strikes against Iran for several days to allow for diplomatic talks, leading to a drop in oil prices, while Iran maintains a defiant stance and Israel urges renewed escalation.",
  "lastNarrativeUpdate": "2026-07-28",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.6,
    "durationDays": 3,
    "summary": "The U.S. has paused military strikes against Iran for several days to facilitate diplomatic talks, though underlying tensions and threats persist."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.45
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 82
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 62
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 35,
    "tradeImpact": 26,
    "sanctionsPressure": 54,
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
      "date": "Jul 25",
      "text": "US military does not announce new Iran strikes for first time in 2 weeks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5vaW92cWRJeWowUVJXZW5UQlpoS2JlQWFtTnpmd0xPNkdHWGlKV1M1eWhmUWg4d202ZC1tZkdDd29TX25LeU0yZDVUeVgyOUhYM0RKMlIyWmNrVVZKUnhIRjBQa0d6RlVIYzVXQ05R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1494
    },
    {
      "date": "Jul 26",
      "text": "UN envoy Waltz says Trump giving talks ‘some space;’ Iran condemns Ukrainian attacks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTE9HLWxnU3JEZGtzTGFqaXBRNnpLM2lLMG5jdTg0bHk0VTlpRnVOTmZYQmZjcm9HMG1EVUNwU2hUdndKU1NMeV84UUwzYUxKaHNuaFhiR0lfRnVJRzZ6aHBSUmxBZEVJYjZyd0pDZEo0UWRyY2M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1494
    },
    {
      "date": "Recent",
      "text": "U.S. and Iran pause fighting, Trump dismisses concerns of dwindling stockpiles.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE51SzJtbzRPcjctRkx3Z0x3aGJUdm5zaEtkNExTLXYwczlGNUNxZ2V3VTZ4Wm9BOG1JUHdpM3licHFJVWU3d1RGRlE2bFlMN1NNSEFIQ3pPaS00TmpPcVdrODNaSFlWVDBSWTRqZTRn0gFzQVVfeXFMUDNxZFJCcW1MQVBXb3JrWWxhSFVLTVBOQlhFOVl3Nm9PT2xtLURudDkydFdsaUM5RmZUWUx3S1JpUjNCZkNTLU9EVWw0MWxCRlhvNWpQRGJscFE2bmZnNVRVUUJMOFIwRnJtX25RN2EtcWJMSQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1494
    },
    {
      "date": "Recent",
      "text": "Oil prices fall as US pauses strikes on Iran over strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPY3NLLWN3ME9IZjdEWmdJNHE4cEJsSEV3SG5pTlpRWjBqbWdFYllsZGZJXzFXQVBlT2w3XzBOempmcWw3RGpvWVFVSWEtM1k2MlNPaU9CdUlJNkVVOU5QcUJIem1UMEZLanh0SzUxVkE1bEs5RWppNFJWMDAyT0NNVVNFdGJqcEJHbDZ5ejl6N01mOWY1RVZVSnRvWEhvVXBFYTNCcmFfVTJtUUU1U09V?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1494
    },
    {
      "date": "Recent",
      "text": "Iran threatens to expand war if US resumes strikes, which it says Israel is pushing for.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxNTEU1blJ0ZjFodmdqYXM3MzdXeU9PbXcwUlNEUWx5aktWY29NRXRHOC1XS2F3QTFpMWhKMnVhX0dUMkh4TmNYVEl0cDN6ZGtHb0dOMzk0SlE3SkdOT1JzVmZJQjFHYUYyUzZjUkFKNU5tZ3JmbDZTRXVYdUNDZXVFWjg4cG5QQmZKcFhKZnd1a2tMMENKS05LNFZMUC1henZCRERMcUVTaXRoRGYyV0Z4UmRSdmgxNUR30gG-AUFVX3lxTFA1UEhCVnJkWDRyNHRNYUItcVpsWDRfVXgyR0xUX3VyVXdacXZKMWgxSmtmWFFpVjlFVW12NHplMDFhXzZpYVFmbTdQRmFJajFGenhOdWtDZzNraEV5NEZXMkFCeElTQUVDbW9FaFUzS1lWam81NG5QMnpQRkcxclpUd2dGTTNsa05IeTRwd1BTclM2Q0RoMmtxM0FsZ2NvQWdLd2lfNWwyQ3BwcnV1d3NNanFrQVBBY3lxSXVtNUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1494
    },
    {
      "date": "Recent",
      "text": "Khamenei ties US-Iran peace deal to Israel ending attacks on Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxOdlZIaGtLT0ItbHVjQ0xEWFoyU2I5anhKZHp2QlZhVW1kWTRuOXRBMy1uQlc3a29vTVRTT21vMXZ3dTQ3UTkyVFZSNElnNzQ2VjZDWERjSEQ2bTFDOUpGMkVsOEozVkN0Nm9TVVphV1U5Yll1UEx1cXRsWFBKLU1xMUl1T2lUX3NqVkI1dXBaY2k3cWJiRmRRdkdQVTRacU5hTExkbndBWHQ0VGfSAbABQVVfeXFMUEVoS2VuR3pBZ1YyVzlYTTIyU0Z4eGFfSEhGd2Y0M3lMQ3ZUUFFndDVZUHh5cGhYRUU5enpINl9ha3FHclJuc3dVSkRFWXdFSXNuZjVoZU9qV0FMYjRYcjZIenBFLWRIczhIeEVIalFqLUNjR0Rscm5wMGlramFQZGJXZWRSVDdtcW9la2xxZEhlSGFvRmlYdTVybDY2MTI4Q2tLTmc4TG12TmtyczlZejM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1494
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
