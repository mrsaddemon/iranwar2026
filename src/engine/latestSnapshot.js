export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1483,
  "lastUpdated": "2026-07-27",
  "lastSyncedAt": "2026-07-27T04:56:39.113Z",
  "warDay": 150,
  "summary": "The US and Iran have paused mutual strikes for two days, leading to diplomatic talks and a drop in oil prices, though underlying tensions and threats of renewed escalation persist.",
  "lastNarrativeUpdate": "2026-07-27",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 2,
    "summary": "A fragile operational pause in US and Iranian strikes is in effect for a second day, accompanied by diplomatic talks, but threatened by potential US resumption and Israeli pressure."
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
    "oilDisruption": 50,
    "tradeImpact": 37,
    "sanctionsPressure": 54,
    "globalPressure": 59,
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
      "date": "Jul 24",
      "text": "Iran threatens to expand war if US resumes strikes, which it says Israel is pushing for.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxNTEU1blJ0ZjFodmdqYXM3MzdXeU9PbXcwUlNEUWx5aktWY29NRXRHOC1XS2F3QTFpMWhKMnVhX0dUMkh4TmNYVEl0cDN6ZGtHb0dOMzk0SlE3SkdOT1JzVmZJQjFHYUYyUzZjUkFKNU5tZ3JmbDZTRXVYdUNDZXVFWjg4cG5QQmZKcFhKZnd1a2tMMENKS05LNFZMUC1henZCRERMcUVTaXRoRGYyV0Z4UmRSdmgxNUR30gG-AUFVX3lxTFA1UEhCVnJkWDRyNHRNYUItcVpsWDRfVXgyR0xUX3VyVXdacXZKMWgxSmtmWFFpVjlFVW12NHplMDFhXzZpYVFmbTdQRmFJajFGenhOdWtDZzNraEV5NEZXMkFCeElTQUVDbW9FaFUzS1lWam81NG5QMnpQRkcxclpUd2dGTTNsa05IeTRwd1BTclM2Q0RoMmtxM0FsZ2NvQWdLd2lfNWwyQ3BwcnV1d3NNanFrQVBBY3lxSXVtNUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1483
    },
    {
      "date": "Jul 27",
      "text": "US and Iran appear to halt strikes after 13 days of mutual attacks, with the US pausing for a second straight day.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxObFNiN0FCazRuclZfTEdFTFdKemZyU09SSGl3STJHR2otcHA5MThCTlRIaXR0UGlnUy1xZ3Jpb0NQQ2JleWNBdVh5MmNpaklQUVhsVW1SV0VDT24xZ01Ybm1XX3RRaWNMSl9RY3Q1S05UM2djWEpmcXBfR0V6Wmw1MVNPMjgzd1psLUdXX09aZmxXbTEwUE82LdIBngFBVV95cUxNV3g3THBZdXRLUzJwT2ZFQ1NGd0V0aDZVc2dzc29ONkNtanpfa2p5NHczb0ZfQUs1UmZRNXh4eHZCbWdQRm1zckVXX0FySS1LcjdSa1pzdUxGYm1hM1loR0d0S3pYSWt0UENOMkFlcnF4U3RHd3pwWnNJY0NWb1NCUzZQelFnQldfbDVMeXRIbG5qZ013bWZUTzBXWTZuUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1483
    },
    {
      "date": "Jul 27",
      "text": "Oil prices fall more than 4% as the US-Iran pause fuels hopes for Strait of Hormuz stability.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxPU2VGeTlMSlMzSzVSVHh1VWF4R084c3Nid196WXNjcXNGVktlWVdIN1JPVEItcTdJMDRqc1NZZjhQaFFzQXIyQlNfUFhCYWZUMUgzM2p1U0pEZmp6ZHBNNFo3aGZKVzFzcHpQcEpTblQtbVktUDN5MG5JZ3VWLUxITlBoUHU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Financial Times",
      "latestSinceUpdate": 1483
    },
    {
      "date": "Jul 27",
      "text": "Diplomatic talks between the US and Iran are reported to be moving in a positive direction.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1483
    },
    {
      "date": "Jul 27",
      "text": "Pentagon faces outrage and accusations of cover-up after lowering the number of US troop deaths, which now eclipse 600.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1483
    },
    {
      "date": "Jul 27",
      "text": "Mojtaba Khamenei praises Hezbollah and calls for continued jihad and attacks against Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiakFVX3lxTE9iN2pyMlJDMTRTWDhVRXB3eHZ4VTU3eVlPd3cxTWl4ZEIzb0hyODRhejZVUDVHS010R0RvOU13WUtPUmVrM0Q0dDFrQUdqR3ItTzBHZ09sZ1BuOW1LOElSTDVaRFhfd1Q0N0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 1483
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
