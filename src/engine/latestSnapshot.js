export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1495,
  "lastUpdated": "2026-07-28",
  "lastSyncedAt": "2026-07-28T07:18:20.001Z",
  "warDay": 151,
  "summary": "The US has paused new strikes against Iran, with President Trump indicating ongoing talks, while Iran denies current negotiations and threatens to expand the conflict if US military action resumes.",
  "lastNarrativeUpdate": "2026-07-28",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.4,
    "durationDays": 1,
    "summary": "The US has initiated a pause in strikes against Iran, though Iran denies current negotiations and threatens to expand the conflict if strikes resume, indicating a fragile de-escalation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
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
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 40,
    "tradeImpact": 29,
    "sanctionsPressure": 54,
    "globalPressure": 57,
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
      "latestSinceUpdate": 1495
    },
    {
      "date": "Jul 27",
      "text": "Iran threatens to expand the war if the US resumes strikes, which it claims Israel is pushing for.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxNTEU1blJ0ZjFodmdqYXM3MzdXeU9PbXcwUlNEUWx5aktWY29NRXRHOC1XS2F3QTFpMWhKMnVhX0dUMkh4TmNYVEl0cDN6ZGtHb0dOMzk0SlE3SkdOT1JzVmZJQjFHYUYyUzZjUkFKNU5tZ3JmbDZTRXVYdUNDZXVFWjg4cG5QQmZKcFhKZnd1a2tMMENKS05LNFZMUC1henZCRERMcUVTaXRoRGYyV0Z4UmRSdmgxNUR30gG-AUFVX3lxTFA1UEhCVnJkWDRyNHRNYUItcVpsWDRfVXgyR0xUX3VyVXdacXZKMWgxSmtmWFFpVjlFVW12NHplMDFhXzZpYVFmbTdQRmFJajFGenhOdWtDZzNraEV5NEZXMkFCeElTQUVDbW9FaFUzS1lWam81NG5QMnpQRkcxclpUd2dGTTNsa05IeTRwd1BTclM2Q0RoMmtxM0FsZ2NvQWdLd2lfNWwyQ3BwcnV1d3NNanFrQVBBY3lxSXVtNUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1495
    },
    {
      "date": "Jul 27",
      "text": "More than 600 US military service members have been injured since the Iran War began in February.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9XbFpJZmowWXhfWTlHYmVNV2RwQjdCWVBZVlNETVZJdVFvb29OczZLbmpKVW1vREY0SFVhNDdkcjRSdkxCSDgyX21MZzNWWUNGa0haejl3ZFRIUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1495
    },
    {
      "date": "Jul 27",
      "text": "Oman and Iran are reportedly approaching a deal to reopen the Strait of Hormuz, benefiting from the lull in US strikes.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1495
    },
    {
      "date": "Jul 27",
      "text": "A report suggests a joint Iran-Hezbollah strike could cripple Israel’s energy lifelines.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiXEFVX3lxTE04ZkN3NnYyNVNDTjVGVGpaUTQ0WEtQRWQ3dmcydWplandKTnJTSE16c0p3VWVhUFJUM2hEUkNGcDBrX1pDSzVNTHNTaHpjQnFMYnYwZmpOcnZyeHJl?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 1495
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
