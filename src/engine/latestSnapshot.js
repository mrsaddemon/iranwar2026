export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 298,
  "lastUpdated": "2026-04-22",
  "lastSyncedAt": "2026-04-22T03:36:37.043Z",
  "warDay": 54,
  "summary": "A fragile ceasefire has been extended by the US amid ongoing talks with Iran, while tensions remain high due to claims of a Strait of Hormuz blockade and continued skirmishes involving Hezbollah.",
  "lastNarrativeUpdate": "2026-04-22",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A ceasefire has been extended by the US, but it remains fragile with reported breaches and ongoing talks in limbo."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.5
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "date": "Apr 22",
      "text": "US-Iran talks face uncertainty as a ceasefire nears its original end.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 298
    },
    {
      "date": "Apr 22",
      "text": "Iran is experiencing mass redundancies due to the ongoing conflict with the US and Israel.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE0zSHZ5XzJ3d0Z4R1A4MUE0aktIR0pSUE5QbFQ2a2lTa1laTFlVT1VRdzJjZ3JYVDBFTW5RSUZkSk53QkF4czBYR2VtQ0ppQTc4T3BveEk5VVVkQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 298
    },
    {
      "date": "Apr 22",
      "text": "President Trump announced an extension of the ceasefire with Iran to allow negotiations to conclude.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 298
    },
    {
      "date": "Apr 22",
      "text": "Four scenarios are being discussed for the Iran-US conflict as peace talks stumble.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxNY0NSOXJGM25oWlBxa3ppcTlNbnNNRHRXWGpmNW83S2FwMG1Hd1B3SUQ1NldmRUJjRldmdGhBOGpBa19HdXBHTklzVXBpaXF2UkthNk1xYmVXcTE2cWRnZWI1MVN4dU5icXU1VUs3d1FibGFmWkxnYTFqTFdQbHJCamVwWFRHQ1NnV29rUElfLWNlWWJBZEF3bUpaU3Rja0xz0gGmAUFVX3lxTE9aWE9kVDRsUUJHRDB1V1NiVF9ycGhPaDdsUk5LNmJIbzZRTnJqeWF1TDJNODZDWXoyWXNjRFlmeUV3WXFXRTltZmh3ZC0tYkpLUTFrZkZIMXFuY3QtbjFZV2NJYWRoc2ctTDNZbndPVjVtZEl2Y1lISDVvWkN2dVhQd0tIZ09TOTZLS2drcXo1WllrbjNtWXBDS3NOQnI3elo1NkdIa0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 298
    },
    {
      "date": "Apr 22",
      "text": "Israeli soldiers were punished for vandalism of a Jesus statue in Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBPVDZrMlZmMHdzMlVReS1CYjBHR2ZiN0FXSFBHT1Nybi1UU0dqYWVVRmZ6YzQ4TkZIVTBzeHNLYV9kUTVuQS1ZckVSQjNHcmJSRkJiUExCLVE2Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 298
    },
    {
      "date": "Apr 22",
      "text": "President Trump claims the Strait of Hormuz is 'totally' blockaded amidst the extended ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxQVDNVeUExc1Z0TFppSTlyY0V5S29aRFpfeEswV1RiTHdhLTRmckN2eUw5SE9ZRmNhWVdKbEp6a0NaNHhoR0NCeXcxYmR6Qm1MT3Rwc000Vko5ZGtMLTZ2ZG1ib2dBMDFqV20zdU1ZOTluaXExRS1hUmo4QTRkdmNpUHRoT2pTNW56M0F3ZkJtMVJrRjNaTEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 298
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
      "perspective": "US Policy",
      "headline": "Trump extends ceasefire, seeks talks, but maintains pressure.",
      "summary": "The US, under President Trump, has unilaterally extended the ceasefire to allow for continued peace discussions, yet maintains a naval blockade on Iranian ports, signaling sustained pressure.",
      "tone": "strained",
      "latestSinceUpdate": 297
    },
    {
      "perspective": "Iranian Resilience",
      "headline": "Iran faces sanctions and attacks, but demonstrates strategic resilience.",
      "summary": "Iran continues to face US-Israel strikes and sanctions, including the seizure of a sanctioned ship, but demonstrates strategic maneuvers like the Strait of Hormuz gambit and effective drone technology.",
      "tone": "defiant",
      "latestSinceUpdate": 297
    },
    {
      "perspective": "Regional Instability",
      "headline": "Lebanon-Israel conflict persists despite ceasefire efforts.",
      "summary": "Despite broader ceasefire efforts, conflict between Israel and Hezbollah in Lebanon continues, with reported truce breaches and questions surrounding Israel's long-term objectives in the region.",
      "tone": "anxious",
      "latestSinceUpdate": 297
    },
    {
      "perspective": "Global Energy Impact",
      "headline": "Hormuz disruption prompts search for alternative oil routes.",
      "summary": "Disruptions in the Strait of Hormuz have led to cruise ships being stranded and a push for alternative Middle East oil and gas routes, reflecting the conflict's impact on global energy security.",
      "tone": "neutral",
      "latestSinceUpdate": 297
    }
  ]
});

export default LATEST_SNAPSHOT;
