export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1691,
  "lastUpdated": "2026-08-09",
  "lastSyncedAt": "2026-08-09T15:14:42.630Z",
  "warDay": 163,
  "summary": "Tensions remain high as Iran demands concessions for reopening the Strait of Hormuz, while the US threatens military action and Israel prepares for potential unilateral strikes on Iran and escalates attacks on Hezbollah.",
  "lastNarrativeUpdate": "2026-08-09",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 60,
    "summary": "No active ceasefire is in effect between major parties; regional conflicts and standoffs persist."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 88,
    "oilDisruption": 88,
    "tradeImpact": 79,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Aug 08",
      "text": "Iran demands concessions from US as it nears Strait of Hormuz deal with Oman.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAybVA3dzRBU1hnc01FeGxSb0E3MjFhcjRteXBQUHZSVWJMRmF1QjNYM3ludGJFX1ZnVWkxYWlVdHhZY3c3ZmZOb0tadUMzMzJpZmV6QjZpc0ViS3pzbmdjMUg4YTZSdjA5bzE5akpn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1691
    },
    {
      "date": "Aug 08",
      "text": "IRGC states Strait of Hormuz will open after US accepts conditions and corrects behavior.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPdXdjZUFncUFjUUhKUlJVNHZLOWFLbHlvQ1NxbGdTbXB1Q1p5V055VFFUbVNzaG1peHJHcG5NWUl4c1YxMnZhM3BlalN2V2dsWjNGb1JVRFdzby1CWlJJcVZvVVdSQ09QY2VHZ3hCaFRtb25RMjc4b1RvaDlTVm9lT3FPT0x4bThvZjV5bWx5TnNLcU9SU2E2UGhZSEpmU1ppVW05dDFtTDhKTS01UVg0YnZUZGo1QllZRHFybtIBwgFBVV95cUxNUmVhM2hweGl2V0dURDlEc3JqUTFYbG9UbWdhRmdSVkJXalZUSHdEanJ5eUVSMUpoblI0b0JEdmtELWNDR214ZTl5akNpTU9OYnZJcUZYQ3hBVlp0dW4xT19vNFYtbENtZUZTVlVScDRFaFVmWG1oY1pGZHN5a1gwRmtsQ1A0b3hwUFZJVmJ5WGExSFpXRV9Ed2hJcFNpNnVfRzhKZ2s2RG8zaGlRTGpBU01xdkxjU08yT2FfMkhpN2VTZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1691
    },
    {
      "date": "Aug 08",
      "text": "Israel prepares for possible unilateral strikes on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxORnBwMDd2NXlSclA4SjZxUzNxckZMVFRHckt1X25YRnlMaWxhVEJsUU9QUU1aNkhnc3o5RmVMUXJQRmFMRWFVSHVZVzhwbWpFM3RGdlRtN3R6RUFqdF9uYVVsTjlkaEJVeHA5ZXh5bnl2V0VZYkYtOXhJVFN2Q0VWcEtYaWNiQXhTMHZoc3lXbDIxdU1wNzh1azM3S0NrdnBSLTh5ZHlScmRfazkxM0FtblVNaTE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1691
    },
    {
      "date": "Aug 08",
      "text": "Trump warns of unprecedented 'massive attack' on Iran and threatens 'heavy attacks' on Pickaxe Mountain.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxORlZ5bEhMQlpYV2JLZTRpUkJTblJYa0VGeFhhblVfUkp1TDIzMFl6ZnlIZ2gxbDZJUXBpQmdZXzc0RjQtRmU1cjhXblRCN3lwbG5YNThjR0xLMnRJTklldUNYYzlrLXRjeUJDM0dPTjFBcVZQdUQyU1VZbmtYQ1ZfSld3cUppa1ZaVk4yWVNCYnFpbEJZVkxFaHdjcDVoMWplN2tRV3pTaWJodV9zZGloY0JRYjVTSXpMbUpV0gHAAUFVX3lxTE5Sb3VwbFB3cUlwMkoxU3VEZjBEUjBLZkxyVDFpNUp1WG5PektuUGw4Z1hTWEUzbE14dEd5X3RWMmxiRG4weVJoWHY2emd1N0NFSFY4QzlwZmQ4Q0s3d2NudG9CNTZjRUZxSDMxV0QwaEkxOF9qaTZ2cGJtOFRZVHJSYTR5TTc5b3NWMkJWbThFRnNJdUxJNExpa1M4NlFLN2dWVzJKX25RV2U0a0kwam15Wm8xZU1lTHJpUHVfNkZ1OA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1691
    },
    {
      "date": "Aug 08",
      "text": "Israel steps up attacks on Hezbollah, clouding talks with Lebanon regarding disarmament verification.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1691
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
      "perspective": "Iran",
      "headline": "Iran Demands Concessions, Seeks US Exit from Gulf",
      "summary": "Iran is actively making new demands for opening the Strait of Hormuz, signaling its intent to leverage its position. Concurrently, Iran perceives an opportunity to diminish the US presence in the Gulf region.",
      "tone": "defiant",
      "latestSinceUpdate": 1675
    },
    {
      "perspective": "United States",
      "headline": "US Threatens Massive Retaliation Amid Calls for De-escalation",
      "summary": "President Trump has issued strong threats of 'heavy' and 'massive' attacks on Iran following US soldier deaths. However, sources indicate top US military leadership is seeking an 'off-ramp' from the ongoing conflict.",
      "tone": "strained",
      "latestSinceUpdate": 1675
    },
    {
      "perspective": "Regional Allies",
      "headline": "Gulf States Condemn Proxy Attacks, Regional Conflict Widens",
      "summary": "Saudi Arabia has been targeted by Iranian-backed proxies, leading to condemnation from UAE, Bahrain, and Kuwait. This indicates a widening of the conflict and increased regional instability.",
      "tone": "anxious",
      "latestSinceUpdate": 1675
    },
    {
      "perspective": "Israel/Lebanon",
      "headline": "Lebanon Truce Fractures as Israeli Deaths Occur, Disarmament Verification Stalls",
      "summary": "The June truce with Hezbollah has been violated with the killing of Israeli soldiers in Lebanon. Disputes over Hezbollah disarmament verification and Israel's refusal to withdraw further indicate escalating tensions on this front.",
      "tone": "strained",
      "latestSinceUpdate": 1675
    }
  ]
});

export default LATEST_SNAPSHOT;
