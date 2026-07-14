export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1299,
  "lastUpdated": "2026-07-14",
  "lastSyncedAt": "2026-07-14T21:41:07.021Z",
  "warDay": 137,
  "summary": "The US has resumed strikes on Iran and restored a naval blockade following Iran's reported attacks on tankers in the Strait of Hormuz, while Israel and Iran have traded strikes, further imperiling a fragile ceasefire.",
  "lastNarrativeUpdate": "2026-07-14",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 100,
    "summary": "A previously fragile ceasefire between Israel and Iran is imperiled by renewed strikes from both sides, particularly around the war's 100th day."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
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
    "nuclearIndex": 10,
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
      "date": "Jul 13",
      "text": "US resumes strikes on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxQMjlSZWpxTTRMSUNuTmRocnVjNlJBZHhCTG81Nktodm1LU2dGZWN5MWZtazRLdkZySE4yX2tnTk9tR3dkWFVZUmFjT0VibVluVDd5X040dDBoRlYxd3VBaHhLRXhyWm8xUENUcjRsUHg3QTktQWo5X0FWTXVnLXBSMQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1299
    },
    {
      "date": "Jul 13",
      "text": "Iran claims striking two tankers in Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBnVjhScnVheUNnYXhMcjVVRlZuS2RiMGgwQTNxRWxtU1AxWlM1elZTRGxjU0xwVFNwb3A3YkluVzN4WGlsUlVrbmZtT0hwRlVsYnozb2Q1cXhHTXU2QlFyMlNzaHFQUzh1cVVmWW1n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1299
    },
    {
      "date": "Jul 13",
      "text": "US restores naval blockade on Iran's ports.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1299
    },
    {
      "date": "Jul 13",
      "text": "Israel and Iran exchange strikes, imperiling ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPelJMTjAxUFhxdHBqeU9KN3lhbkFhM182azlzVHpGTDZXaGkyaDFNT0Vzc2ZBT1BJTnpiTm9XalZjOVhaWGN6YjJjXzBBZ2lrQW52bFhZZmw4OHFSYWVRcUpwenVEckFlSkY5NGx1bFM2dDVuUUlPQ1M1UTgtX094dlhHOUs1bVU3NlFBRmFuLThRN0dtUE9yWg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1299
    },
    {
      "date": "Jul 13",
      "text": "US military death toll in Iran war rises to 14.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE5TSFNrVW5Ibks0elBUYUtmLTV1VkVBSE1rYXY0M1J5V1ExdWRrNzgzcVh6LWRlVW1URlZKT2tZcEZWZjVyRGE1MlVEWmdmS2J3VkY1UWlMeHVKODhSVGFuWXJCRTlPWE1wMGI2X3dUWHRTNlZTYzdoSmNkc9IBgAFBVV95cUxPdVNGQXk5eUtQR3RJcW00WVkxWkYtMGFhNUtrX2xPNm5mN19ab2ZJVnpwU1lnXzhwWFdYbUE3djNEMHFhbUhVTGxuSXlYRmJCSWgyay1Ic1RhbGVwRnB3ZUpmaGEwX2N3Ukg2dmNkSXAzajF2Y01tYVU0WTFTVmpHTg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1299
    },
    {
      "date": "Jul 13",
      "text": "Hezbollah lair discovered near Beaufort, Lebanon.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1299
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
      "perspective": "US Aggression",
      "headline": "Trump Escalates Iran Conflict with New War, Blockade, and Nuclear Site Threat",
      "summary": "The US administration under Trump has declared a new war against Iran, resuming military strikes and imposing a shipping blockade in the Strait of Hormuz. Threats to take control of the strait and consider striking a nuclear site signal a significant escalation of hostilities.",
      "tone": "defiant",
      "latestSinceUpdate": 1287
    },
    {
      "perspective": "Iranian Retaliation",
      "headline": "Iran Accused of Tanker Attacks Amid US Strikes and Blockade",
      "summary": "Iran is accused by the UAE of attacking two tankers in the Strait of Hormuz, causing casualties, amidst renewed US military strikes and a declared shipping blockade. This suggests a pattern of Iranian retaliation or defiance in response to US actions.",
      "tone": "strained",
      "latestSinceUpdate": 1287
    },
    {
      "perspective": "Regional Instability",
      "headline": "Mideast Tensions Soar as Hormuz Attacks and US-Iran War Threaten Oil Supply",
      "summary": "The Strait of Hormuz is a flashpoint with reported tanker attacks and a renewed US blockade, driving oil prices up due to supply worries. The broader region remains volatile with Israel and Iran trading strikes and concerns over Hezbollah's activities in Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 1287
    },
    {
      "perspective": "Israeli Security",
      "headline": "Israel-Lebanon Talks Hinge on Hezbollah Amid Trade Strikes with Iran",
      "summary": "Israel and Iran continue to trade strikes, further destabilizing the region. Israeli officials indicate that any withdrawal from Lebanon is contingent on the dismantling of Hezbollah, highlighting ongoing security concerns on its northern border.",
      "tone": "strained",
      "latestSinceUpdate": 1287
    }
  ]
});

export default LATEST_SNAPSHOT;
