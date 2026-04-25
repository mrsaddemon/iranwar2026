export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 355,
  "lastUpdated": "2026-04-25",
  "lastSyncedAt": "2026-04-25T12:04:51.360Z",
  "warDay": 57,
  "summary": "The Middle East conflict continues on Day 57 with ongoing US-Iran peace talks uncertainty, increased US military presence and threats in the Strait of Hormuz, and a fragile Lebanon-Israel ceasefire marked by continued Israeli attacks and Hezbollah's rejection.",
  "lastNarrativeUpdate": "2026-04-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 21,
    "summary": "A three-week Lebanon ceasefire extension is in effect but is described as shaky, with Hezbollah deeming it meaningless and Israel continuing attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Apr 24",
      "text": "Uncertainty remains in US-Iran peace talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxQeTN5a2dGaXEzWTRJQmc5T0pPbzlpbXVZWkpXOU9hUGJ2QzZMMjU4ZFp5TVl6bTB3VUY0dkJBTnloR2lPTmU0blAyT2FsYTc2WDZHU1p2R0JwN0hpUXVLcGNDSzNMR3M4NVlSdU5TQlRVUm5PNkREWGJDemFxbHptU3dR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 355
    },
    {
      "date": "Apr 24",
      "text": "Hegseth declares victory while preparing for more war with Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxNU2FlNHhJRXlmblk5WUFRNUZzTnl1UXFfcEsyTmFUcV9lR0hLM0JrRXltOWVqTXQtNE9qTmRCSUxhUEgtaGpwV2hYNTJ3Tm9CUFU3SHV3cUE0LU9KTXF4Ul9JYWJtbXhCd2lpZjlYWUk3V2Z4M1E3cWtKWERqZzhtZDZycVlqMjRRLVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Politico",
      "latestSinceUpdate": 355
    },
    {
      "date": "Apr 24",
      "text": "Trump announces three-week Lebanon ceasefire extension.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOeVR0dmZBcEtyclJkbWlmT3hTUUlHandkWS1tQXZKX0ZUNC1PMWVGWjRFUW5fb3lEQVNMSmhFRnNSQWo0RVp0b3dZUjZHM3ZVSGN3ZThsZUM4bGxUVUZYdzV6T3lHQk1jemc0blVUVl90eHZnZkRYNmYxUWVncVB3cktRS1VidDV2aTluVHZ5UGcwdTN3RDBvSGl5dmVMbzdudHFENXVobDNkaHlXQ3R6Wk05bEVvTWxGRTZWRtIBwgFBVV95cUxPZXRoSDAyRVUyLVNmSDN4Yi11X1pUQ2plZHJmTE1mQ3QxZEpNQ1Z6QlB2d2VSaV9LeGhuYXZHU2VhNkhLcTM1dGV0R3QxRzc3ZnYwUlByQ2ZRVEtXTjdod05nVDVyZVRROWtET1Q4YUxFeVdCUkRzc3hBYWZibVVFUVdVSGJ5UkJRNC00RS1zX3lzc0JhN1VlWjdsRmFJdmtDeVhlUlVHWWhCYkFrOXVhZlVVUURuYUNPUnN6dElQSGk1dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 355
    },
    {
      "date": "Apr 24",
      "text": "Israel attacks increase in Lebanon; ships taken in Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 355
    },
    {
      "date": "Apr 24",
      "text": "Tehran sets out demands to mediators in Pakistan.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 355
    },
    {
      "date": "Apr 24",
      "text": "Satellite Data Reveal Scope and Scale of US-Israeli Strikes on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxQWDhqTHBrY2Z2dTJDY0VVdFROLTJfczhCcmdZT3d2YW5TUk1ndDFpUDVPbE1VYk1JTkRXaFU5aUlneWlqU1RtaGhDRW1OalVXQlhqM0RmM2d4Vl9QWTEtbjhoNVdkLTFvZ1hNRk5PUE5Ram42MEliSXNaZ1kzclk4UWJRQ1ZYVF9WRGZV?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Bloomberg",
      "latestSinceUpdate": 355
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
      "perspective": "US Military/Administration",
      "headline": "US Blockade on Hormuz to Persist, Hegseth Declares Victory While Preparing for More War",
      "summary": "The US maintains a firm stance on its blockade of the Strait of Hormuz, with Pentagon chief Hegseth declaring victory while simultaneously preparing for potential further conflict. Concerns are noted regarding the depletion of US advanced munitions supplies.",
      "tone": "defiant",
      "latestSinceUpdate": 347
    },
    {
      "perspective": "Iran/Hezbollah",
      "headline": "Hezbollah Defiant as Fighting Continues Despite Ceasefire Extension",
      "summary": "Hezbollah dismisses the ceasefire extension as 'meaningless' and continues fighting in southern regions. Iran faces a US blockade in the Strait of Hormuz, with reports of ships being taken.",
      "tone": "defiant",
      "latestSinceUpdate": 347
    },
    {
      "perspective": "International Law",
      "headline": "Experts Warn US Strikes on Iran May Constitute War Crimes",
      "summary": "Over 100 international law experts have issued a warning that US strikes on Iran violate the UN Charter and could be considered war crimes, raising questions about the legality of the ongoing campaign.",
      "tone": "skeptical",
      "latestSinceUpdate": 347
    },
    {
      "perspective": "Diplomatic/Economic",
      "headline": "Ceasefire Extended Amid Peace Talks and Global Economic Strain",
      "summary": "An Israel-Lebanon ceasefire has been extended for three weeks, with new peace talks involving Witkoff and Kushner heading to Pakistan. The ongoing conflict is noted to be impacting the world economy, and US re-arming efforts highlight long-term supply concerns.",
      "tone": "strained",
      "latestSinceUpdate": 347
    }
  ]
});

export default LATEST_SNAPSHOT;
