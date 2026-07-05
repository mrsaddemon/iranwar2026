export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1177,
  "lastUpdated": "2026-07-05",
  "lastSyncedAt": "2026-07-05T11:42:32.810Z",
  "warDay": 128,
  "summary": "The region remains highly volatile following the funeral of Iran's Supreme Leader Ali Khamenei, marked by continued direct strikes between the US, Israel, and Iran, and heightened tensions around the Strait of Hormuz and southern Lebanon.",
  "lastNarrativeUpdate": "2026-07-05",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 3,
    "summary": "No active ceasefire is in place, though rhetoric between Israel and Iran has temporarily de-escalated after recent tensions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.85
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
    "nuclearIndex": 40,
    "escalationLevel": 85,
    "oilDisruption": 75,
    "tradeImpact": 69,
    "sanctionsPressure": 68,
    "globalPressure": 87,
    "allianceInfluence": 73
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
      "date": "Jul 02",
      "text": "Millions expected in Tehran for funeral of Ali Khamenei, with Iran issuing warnings against attacks during the period.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNREl1YVRDbjhlc2lVdzRGTVpWdXpKc3FDaERlUkh1ajRrVllZazM4WW8yZ2QwZEU3QlZnNXlVT0ZCNmFpOTRoQ0lPejRuSzdCb25FbFcxV0lWMDNoYXpQSXdOVXhPREp0OUZZbko1ZzVwYTlxMDNiU3pwSkt1dDBkZDJKOGYxMXhSUWNpNmIybXlxU3drMzNCS3FYQThmNE1GRlM0ZWNNYUtubzdIbXZqQWRrbnkzSmRNRlHSAb8BQVVfeXFMTjRTWWZva1RnMDg4U1EwSXk0X0VLdHB0NlFWdXVPcnhsd0VsVHNYV3lVWkVxYzZUbW5KcHVmOWwzRHlGbnJxMjdaYVk1S1o4T3ltSVNmQURJeDF5VUozVlR0Q0dKVkd6SG9VZHdBWlo0MER2VUVCV1pOb0stU3B6ano2eUlXS3ZIZ1hzRkd4T091MTAxdWZseDhtYVBoUlljNXFXLUp1UWtuUEdXTDg4MWVsNTFHQ1VRS1R3SVRKSEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1177
    },
    {
      "date": "Jul 02",
      "text": "Iran issues fresh warning on Hormuz Strait, while Qatar talks reportedly make positive progress.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTFBJdzRnRHV6U1RFbENBREJ0cGh2Tm41dDBIRkh2U3VGb21vaXVQaVFFVnRacW1lX21lR2NsRDJucWJ0dVB2bUlOTTJUVkpuQ1MxMFhNM1NLblBCT2FrVnNLY04tWUZJTTRQZ0FEVFZESWpqZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1177
    },
    {
      "date": "Jul 02",
      "text": "Israel conducts strikes in Lebanon as day one of Khamenei's funeral concludes.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1177
    },
    {
      "date": "Jul 03",
      "text": "Iran targets neighboring countries with strikes, drawing condemnation from the U.S. for aggressive actions.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1177
    },
    {
      "date": "Jul 03",
      "text": "Israel conducts strikes inside Iran, as confirmed by the IDF.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1177
    },
    {
      "date": "Jul 04",
      "text": "US and Iran exchange strikes, while Israel intensifies attacks on southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNUXdrc3JheHlJVnU3Nlc0Sm1XSnpWQm05cHFpVktvbmxOaEkzMFpWNUNtbUZEYVhwSUNMVTBfUGtBSjI0d00zOWNnVTh5UGd0WmROckRSbGdxLWVjRlpYREJvcEVLQWdRNHpHOTVhckJMOF9zQl80UWkyeDdNcXg3dWhwUFk5MEQ5bENkMk0tcFR4anBGQkY2Nzd6ZVczZ1RHWUw1cEdOalNXQjBjWFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1177
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
      "perspective": "Iran's Defiance",
      "headline": "Tehran Warns of Decisive Response, Maintains Hormuz Stance",
      "summary": "Tehran issues strong warnings against US and Israeli military actions, asserting its right to respond decisively to any miscalculation and maintaining its stance on the Strait of Hormuz despite international pressure.",
      "tone": "defiant",
      "latestSinceUpdate": 1173
    },
    {
      "perspective": "US/Western Intervention & Diplomacy",
      "headline": "US Condemns Aggression, Seeks Hormuz Opening, Evaluates Force Posture",
      "summary": "The US condemns Iranian aggression, conducts retaliatory strikes, and seeks arrangements to reopen the Strait of Hormuz while evaluating military posture, with UK and France also engaging in regional security efforts.",
      "tone": "strained",
      "latestSinceUpdate": 1173
    },
    {
      "perspective": "Regional Realignment",
      "headline": "Lebanon Turns Against Hezbollah Amidst Syrian Diplomatic Signals",
      "summary": "Lebanon shows signs of turning against Hezbollah, with a deal focused on dismantling the group, while Syria signals a preference for diplomacy amidst regional complications involving Israel and Hezbollah.",
      "tone": "neutral",
      "latestSinceUpdate": 1173
    }
  ]
});

export default LATEST_SNAPSHOT;
