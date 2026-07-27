export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1484,
  "lastUpdated": "2026-07-27",
  "lastSyncedAt": "2026-07-27T08:40:14.779Z",
  "warDay": 150,
  "summary": "The US has paused strikes against Iran for a second consecutive night amidst ongoing talks, while Iran threatens to expand the conflict if US attacks resume.",
  "lastNarrativeUpdate": "2026-07-27",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.6,
    "durationDays": 2,
    "summary": "An operational pause in US and Iranian strikes is in effect for a second night, accompanied by ongoing talks, but threats of escalation persist."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 83
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 63
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.88
      }
    }
  },
  "global": {
    "nuclearIndex": 12,
    "escalationLevel": 48,
    "oilDisruption": 55,
    "tradeImpact": 40,
    "sanctionsPressure": 58,
    "globalPressure": 66,
    "allianceInfluence": 68
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Jul 24",
      "text": "Iran threatens to expand the war if the US resumes strikes, which it claims Israel is pushing for.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxNTEU1blJ0ZjFodmdqYXM3MzdXeU9PbXcwUlNEUWx5aktWY29NRXRHOC1XS2F3QTFpMWhKMnVhX0dUMkh4TmNYVEl0cDN6ZGtHb0dOMzk0SlE3SkdOT1JzVmZJQjFHYUYyUzZjUkFKNU5tZ3JmbDZTRXVYdUNDZXVFWjg4cG5QQmZKcFhKZnd1a2tMMENKS05LNFZMUC1henZCRERMcUVTaXRoRGYyV0Z4UmRSdmgxNUR30gG-AUFVX3lxTFA1UEhCVnJkWDRyNHRNYUItcVpsWDRfVXgyR0xUX3VyVXdacXZKMWgxSmtmWFFpVjlFVW12NHplMDFhXzZpYVFmbTdQRmFJajFGenhOdWtDZzNraEV5NEZXMkFCeElTQUVDbW9FaFUzS1lWam81NG5QMnpQRkcxclpUd2dGTTNsa05IeTRwd1BTclM2Q0RoMmtxM0FsZ2NvQWdLd2lfNWwyQ3BwcnV1d3NNanFrQVBBY3lxSXVtNUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1484
    },
    {
      "date": "Jul 24",
      "text": "The U.S. pauses Iran strikes for a second straight night as talks are reported to be moving in a positive direction.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxPX3lNZnhiOVFueGNzd0dnbGM3V0d5emVUZTZhaXRRNmVpXzhVaVNRcVlWQ29XcGZDUnkwM0hhN1BYRmhnWEZhQlhFU1ItX0x6R3k3enA3VC00LVpKQi1xMWJPeXJ3VmQ5WDRhbzIzLWZ3MUgwS25ScHZOOXRnWmxWMzFacTlvRWNC?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1484
    },
    {
      "date": "Jul 24",
      "text": "Oil prices fall more than 7% following the pause in strikes between Iran and the US over the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxPU2VGeTlMSlMzSzVSVHh1VWF4R084c3Nid196WXNjcXNGVktlWVdIN1JPVEItcTdJMDRqc1NZZjhQaFFzQXIyQlNfUFhCYWZUMUgzM2p1U0pEZmp6ZHBNNFo3aGZKVzFzcHpQcEpTblQtbVktUDN5MG5JZ3VWLUxITlBoUHU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Financial Times",
      "latestSinceUpdate": 1484
    },
    {
      "date": "Jul 24",
      "text": "Iran's Revolutionary Guards turn back six vessels in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxPSDdZdHJTZmJ6WXBDdU9ueEdVR2hSOEFvTmRfaDJXMjllTGxyaG5qaXQtNjJRNlVMNC1XNHVaaUwyZE9SVnJVajRBNTZmLXZKcjV5emdqNS0tbU01WDlPdllyczJ6MU5yOEk0LXlLWmdpRzhRMkVHWGYteXIwbHZKVnMzemNLY0p2LUpnMWZOdE9GaklMM2E0YmFR0gGfAUFVX3lxTE9UbTZ6cVEzVTVqbXhWdjZwaWhKV2Jqai0wZXJWbnI4WU9JNUI5NEo2cmllUl9wVFVFTHd6VHVvM19JYnhSY1hLMTJQWUR5QWxyOVBzLUU1SS1xVXdmcnhTMUNPVUdMcEE2Ui03S3lSS1RRN1JtUEl3ZHdxakdNcWJfd0RvU1JyMUdhRXhtN1ltZE1CNzRMWWVlLXBpcThvSQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Inquirer.net",
      "latestSinceUpdate": 1484
    },
    {
      "date": "Jul 25",
      "text": "The Pentagon lowers its count of US military dead and wounded in the Iran war, leading to questions and accusations of a cover-up.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1484
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
