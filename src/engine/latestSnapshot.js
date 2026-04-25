export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 369,
  "lastUpdated": "2026-04-25",
  "lastSyncedAt": "2026-04-25T23:49:57.321Z",
  "warDay": 57,
  "summary": "US-Iran peace talks have stalled amid a Strait of Hormuz standoff and reports of significant Iranian damage to US bases, while fighting continues in southern Lebanon despite ceasefire claims.",
  "lastNarrativeUpdate": "2026-04-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 5,
    "summary": "The Israel-Lebanon ceasefire has collapsed, with Hezbollah declaring it meaningless amidst ongoing violence in the south."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
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
      "date": "Apr 24",
      "text": "President Trump cancelled dispatching envoys for Iran talks after Tehran refused direct negotiations.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE9EZkM3NURlaHh0ZGtEdDZxSGNDQjcwRUlQc0JkUG1WNDFGMzFrX1M0Z0JmR21kS25NU3JqSWJseEszMllWelMxc09lNV9oZ3k5R2VqOFBndlRHWmZ1ZVJlclJuUG9lQ0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 369
    },
    {
      "date": "Apr 25",
      "text": "The Strait of Hormuz standoff continues, with the US hunting for explosive mines and warning Iran against laying them.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxNeXRfYzZHbXpVWlpTRWNWNVY3NU82SjVFRGlWV1BGM2Y3Y0ZnX3pVSkNWRDhleDBMa1pONzBDdl92OG1ucm14cVAzNWhTaDNDbXp2R1lndWFVX0R4WTlHdU81T0l3aWxUVXU0QXh4LTNVOXZqMTVKTVhPeW1FTTlRbTlFeVRHSDM2VEdVSFJrZDB4cjNJU3ptdFU3WTdDcko0VUZCbmZubHMwWC14cTFMdA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 369
    },
    {
      "date": "Apr 25",
      "text": "Reports indicate Iran caused more extensive damage to U.S. military bases in the Gulf than previously known.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxQY3A3aFAtRXVVbHhmSW9xT2RVbFBVdFJLbkktNWZUSVpPMG5IclJyYTQtYVRjTnU3QVQwYXFNNE5QbGJmNndaWER2Nk1mWXFSOFdmS1U3V2ZrLTJ2LUdpY0FzZ2Zia0Y3ZnBFUVdxOFdydEgzR3pTWkl3UkRuNjlDUmlxd1ZCalFrWUU2a09ocVhnYmFCMldYMExQTVVQLXBHYm5DYlhDRGZfcG8?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 369
    },
    {
      "date": "Apr 25",
      "text": "The U.S. military may have used up half of its most expensive missiles, with rebuilding stockpiles potentially taking up to 4 years.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxOemRRb2I3NGdaeWRVaUhRQWhpbWk1UWVhMmNxMTRDQTBHWGI4SDRiNWhfRV9Vd0puaW1aODN0QlRPNVRiX01rZWRMblVXRHNTQzVWa3pFYmFOc09acm9TMUU1dmoyT3FfOGxSakVkNXFZTlNtUklxVjI4Yy1Ubms0dmN1NkJOVFFNV3gtTHktbGFzQ1oyVmpfSGZadjBCcEk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fortune",
      "latestSinceUpdate": 369
    },
    {
      "date": "Apr 25",
      "text": "Israel's attacks in Lebanon have increased, and ships have been taken in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 369
    },
    {
      "date": "Apr 25",
      "text": "Hezbollah states the ceasefire is 'meaningless' as fighting persists in southern Lebanon, despite an attempted extension.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPMjIzX3ZxYjhjTURMWjlQUFlBSXhqSUJpZ280eG5VdnJxWEp5SjNKRFhzczh3VnR2RG1pQVVJQTJzUFZ0V0ZOZUNIQjV0eUNxZlAxS1BKNWRCSUpuU01WeDdLS3NmZkRmcFAtT2lIZzg2cmxXZ25Gb285a1BOTTBkNU9melFDbzd1T1ZRUURJb1pBWG1aQzhfaExLM3hKYkZHOHBsaTcySjZEU3VDX1Rr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 369
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
