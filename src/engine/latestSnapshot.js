export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1482,
  "lastUpdated": "2026-07-27",
  "lastSyncedAt": "2026-07-27T01:20:42.393Z",
  "warDay": 150,
  "summary": "US and Iran have paused mutual strikes for two days, while an oil tanker exploded in the Strait of Hormuz, and Iran threatens to expand the conflict if strikes resume.",
  "lastNarrativeUpdate": "2026-07-27",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 2,
    "summary": "An operational pause in US-Iran strikes is in effect for two days, but remains fragile amidst threats of escalation and a recent oil tanker incident."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.6
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
        "precision": 0.5,
        "aggression": 0.8
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
      "date": "Jul 25",
      "text": "US military does not announce new Iran strikes for first time in 2 weeks, signaling a pause.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5vaW92cWRJeWowUVJXZW5UQlpoS2JlQWFtTnpmd0xPNkdHWGlKV1M1eWhmUWg4d202ZC1tZkdDd29TX25LeU0yZDVUeVgyOUhYM0RKMlIyWmNrVVZKUnhIRjBQa0d6RlVIYzVXQ05R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1482
    },
    {
      "date": "Jul 26",
      "text": "U.S. pauses Iran strikes for second straight day as diplomatic talks move in positive direction.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxPX3lNZnhiOVFueGNzd0dnbGM3V0d5emVUZTZhaXRRNmVpXzhVaVNRcVlWQ29XcGZDUnkwM0hhN1BYRmhnWEZhQlhFU1ItX0x6R3k3enA3VC00LVpKQi1xMWJPeXJ3VmQ5WDRhbzIzLWZ3MUgwS25ScHZOOXRnWmxWMzFacTlvRWNC?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1482
    },
    {
      "date": "Jul 25",
      "text": "Iran threatens to expand war if US resumes strikes, claiming Israel is pushing for escalation.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxNTEU1blJ0ZjFodmdqYXM3MzdXeU9PbXcwUlNEUWx5aktWY29NRXRHOC1XS2F3QTFpMWhKMnVhX0dUMkh4TmNYVEl0cDN6ZGtHb0dOMzk0SlE3SkdOT1JzVmZJQjFHYUYyUzZjUkFKNU5tZ3JmbDZTRXVYdUNDZXVFWjg4cG5QQmZKcFhKZnd1a2tMMENKS05LNFZMUC1henZCRERMcUVTaXRoRGYyV0Z4UmRSdmgxNUR30gG-AUFVX3lxTFA1UEhCVnJkWDRyNHRNYUItcVpsWDRfVXgyR0xUX3VyVXdacXZKMWgxSmtmWFFpVjlFVW12NHplMDFhXzZpYVFmbTdQRmFJajFGenhOdWtDZzNraEV5NEZXMkFCeElTQUVDbW9FaFUzS1lWam81NG5QMnpQRkcxclpUd2dGTTNsa05IeTRwd1BTclM2Q0RoMmtxM0FsZ2NvQWdLd2lfNWwyQ3BwcnV1d3NNanFrQVBBY3lxSXVtNUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1482
    },
    {
      "date": "Jul 26",
      "text": "Oil tanker explodes in Strait of Hormuz after hitting a naval mine, according to Iranian media.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQRkIwVWo1SzBsNVdoNGotejR2elAwaHpqOER5endma1kwa1Y5Tk1Mb3J4QWxZbjVKR1NTMWhqZGpiR3ctUFo4alVyMmZ5dllqczBqNW9iR01ya2R2QTNPWGVuUGFZa19RREFUU3o2ZXk3YXpfZ3NDRFRQbDNweE90b19fTUZYVXJ6NVRmXzRBR3FSNzZmNW9IQmVEVkRjcmtweHFsVjJneExMREtaa3gtXzVFeVd2ZUpDNWg2RUV6Y00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1482
    },
    {
      "date": "Jul 26",
      "text": "Iran war casualty count eclipses 600 as Pentagon quietly changes accounting.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMia0FVX3lxTE9KbmMzOXJnRkREa0ZhNjVKdHl2T2tObkZvN2dIQl90aEE3eUpQYzc3MlZkeWxkUmpfNHN5OFVZSjlvaFZYRFYyRG9kM05mNkVNMm5Sc3pNWk5BaWNfX05wb2hiTHBvYWNNbm9N?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1482
    },
    {
      "date": "Jul 26",
      "text": "Mojtaba Khamenei praises Hezbollah and calls for continued jihad and attacks against Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiakFVX3lxTE9iN2pyMlJDMTRTWDhVRXB3eHZ4VTU3eVlPd3cxTWl4ZEIzb0hyODRhejZVUDVHS010R0RvOU13WUtPUmVrM0Q0dDFrQUdqR3ItTzBHZ09sZ1BuOW1LOElSTDVaRFhfd1Q0N0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 1482
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
