export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 368,
  "lastUpdated": "2026-04-25",
  "lastSyncedAt": "2026-04-25T22:59:09.562Z",
  "warDay": 57,
  "summary": "Peace talks between the US and Iran remain uncertain as Trump cancels envoy dispatches, while fighting continues between Israel and Hezbollah despite a nominal ceasefire, and reports emerge of significant Iranian damage to US military bases.",
  "lastNarrativeUpdate": "2026-04-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 5,
    "summary": "A nominal ceasefire between Israel and Hezbollah is widely reported as meaningless due to ongoing fighting and violations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
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
      "text": "Trump called off dispatching envoys for Iran talks, citing 'we have all the cards'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE9EZkM3NURlaHh0ZGtEdDZxSGNDQjcwRUlQc0JkUG1WNDFGMzFrX1M0Z0JmR21kS25NU3JqSWJseEszMllWelMxc09lNV9oZ3k5R2VqOFBndlRHWmZ1ZVJlclJuUG9lQ0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 368
    },
    {
      "date": "Apr 24",
      "text": "Uncertainty remains in US-Iran peace talks on Day 56 of the Middle East conflict.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxQeTN5a2dGaXEzWTRJQmc5T0pPbzlpbXVZWkpXOU9hUGJ2QzZMMjU4ZFp5TVl6bTB3VUY0dkJBTnloR2lPTmU0blAyT2FsYTc2WDZHU1p2R0JwN0hpUXVLcGNDSzNMR3M4NVlSdU5TQlRVUm5PNkREWGJDemFxbHptU3dR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 368
    },
    {
      "date": "Apr 24",
      "text": "Reports indicate the Iran War has drained U.S. supplies of critical, costly weapons.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 368
    },
    {
      "date": "Apr 24",
      "text": "Israel and Iran reportedly conducted unlawful March attacks on energy infrastructure.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 368
    },
    {
      "date": "Apr 24",
      "text": "Israel's attacks increased in Lebanon, and ships were reportedly taken in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 368
    },
    {
      "date": "Apr 24",
      "text": "Satellite data revealed the scope and scale of US-Israeli strikes on Iran.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 368
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
