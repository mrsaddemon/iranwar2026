export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 929,
  "lastUpdated": "2026-06-10",
  "lastSyncedAt": "2026-06-10T14:03:56.766Z",
  "warDay": 103,
  "summary": "The US and Iran have engaged in direct exchanges of fire following the downing of a US helicopter, while Israel and Iran also exchanged missile strikes despite a fragile ceasefire, and Israel continues its campaign against Hezbollah.",
  "lastNarrativeUpdate": "2026-06-10",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 100,
    "summary": "A fragile ceasefire between Iran and Israel was reported but immediately followed by missile exchanges, indicating a collapse or immediate violation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
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
    "nuclearIndex": 60,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "Jun 10",
      "text": "US and Iran exchange fire after American patrol helicopter downed in Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBsMU5qNmNLREM0TFZjR2hkZ1ZTSlZFNktlWjhZX0Z0YnM0UFRicUNkaUxxTzRvM195emt5aWhYX2FONkFUR1ZwNHdwQVphYm5YVnJ4RHJjbEh0QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 929
    },
    {
      "date": "Jun 10",
      "text": "U.S. launches new attacks on Iran in response to downing of helicopter, CENTCOM says.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxNS0lCdGM4alVyQVVLYXZyaWZVX3Fha3NZc1lVdHRwN2lxeV9XVnlDWGV4cURyWDRTeU9rUHE2ajZBUlJQd0dYQW4yR1NBM0poblhmQXhLTkhPMTBUTVRCazJXMllnVGJ5Z3V0dGxYbWRJcDRFUFZrVDBCOWJoMllEeE01YUxOQXFkM2FVVXM0d3BWVGpGMGdwZG5ZYkRabG1KQ05WRWVQdmpMUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 929
    },
    {
      "date": "Jun 10",
      "text": "US bombs Iran’s water facilities.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxNTEg5WFRrY1l5MWZ5TTRKUkpRYWsxeDBMbGkyYTYyMUFjVFpMb1QtaHFOY0VxY3ZGc3hORWF2aGswd0U0RFpCSHFMWkMzUWc3WDVldHNGOUFoRnpIUmkzMlZkbGVqQWJCWmlsaTJoQUlGLWUweUNTZ1hvTngxNUdsNktzV1U0SWFGeGo3cEZwc1VFQWpxRVdQMmYxSXlvd9IBowFBVV95cUxNWURQeXkyUzRJWC1EdHByZXM4MXBVVGlrUnF1c1JPdEdpOUJDU2dTOXN3amhXNjItZnJkc3RJWGVGNkxJdXJRVXAyeElzX3o5MWp0UzM5ZXFsRFdjRWNGZkJJWmlHR0pzSWsyLXlhRXpRQS1IdXBNSUVoT0NrNDVMNHFTekZ0ZXlZa2QzckduUDc3NXJLMlEtUjdCNHQ1MWJ6NkJN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 929
    },
    {
      "date": "Jun 10",
      "text": "Iran Targets F-35 Hangars and US Bases After Strikes Over Apache Downing.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxQbjJpZFNXdFFLR2xNMUVxV0ZQUDhyZDZjLUJES2Zwb01NVTBfQ3d1RnFJa3Uybi1QVU5KSkdtUjE3S1JaYUpoc3E3RUZ0UHp5d3NSUVZYMS0yT1dBNFVWbkdXb0Z0YUVQN0pvSXhqN0c1MWhaYUFKTk1oZlFWLV9MU21qWjBqSnVRN3BPUmo5Sk42d21reFNXZWthcWtoUDY1Wlc5NE0yb3NJaHdTU2wyVC1wRjbSAbwBQVVfeXFMT2NHamo1clBlektBQTF1VXZ2em0tSWF5VzZONW4wbnNBNU10dUdWWk54N1FFalFqSDNFQmdfX095WV9oVFExVFBaU0R6RmNNZnVzTlRxNkRvenAzem5JWGtYR3VDZ21jX3hFbWM1emIzOHZBWWxmd0poX3BfN3FIdFJsR3FSNUJfNEFLeXk2eE1ZYjQyR2YwZHdXcTBNb3BCWEVXUUpKdHh2LVBXLS1ZZWl2MHdvYV9XeEVqTFI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NDTV",
      "latestSinceUpdate": 929
    },
    {
      "date": "Jun 10",
      "text": "Israel says Iran launched missiles at it in first such bombardment since fragile ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxNTUR4X28zSUZqamE5ZkhYVlV0Umx4Q1RwZkMwMDdBaTU0aWw5Q0tueHRGTnAyZ0FSN2gwU2syR1k4cGRzMkc2cy13WFFOaW5TcTRVSHA4NTJNR2FPanBMclhpQjZ4cnk2UVRHOGhIWk9GZmt2WVNENk82UGNIN29jSy0wZGw0U0piM25RN0R4MEdmT2g1TV9xZFl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 929
    },
    {
      "date": "Jun 10",
      "text": "Israel's bombing campaign against Hezbollah continues inside Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxON2lsM0F6RDZiVU0xa2pJanlGYmU3QUk4LVJ5MmRGUWhFeGtONy0wc2owZUU1cDBtcTN1Z0M0SmZ3YWozMno1cHNZWVFUN0hSYjJ5WHkxel8wMGE4bm8xV3JDcmxjZGhTbjh2RXAzTG5qNzByYU92VmdCaEhDSUo0VExhcS1nMmpiTS1rcUJIdTRKcHU5RTJFS3R4NVJfb3dxeVk0YUFSemZEYTdnLTQ3ag?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 929
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "Economic Impact",
      "headline": "Global Markets Reel from 100 Days of Iran War Fuel Shock",
      "summary": "Global markets and airlines are experiencing significant fuel shock and profit forecast cuts due to the ongoing Iran war, marking 100 days of conflict. The economic fallout is a major concern for international stability.",
      "tone": "anxious",
      "latestSinceUpdate": 909
    },
    {
      "perspective": "Escalation & Retaliation",
      "headline": "Iran and Israel Exchange Missile Strikes, Vows of Retaliation",
      "summary": "Israel and Iran have engaged in direct missile exchanges, with Israel vowing retaliation after Iran's first missile attack since April, following earlier strikes in Lebanon. This marks a significant escalation in the conflict.",
      "tone": "strained",
      "latestSinceUpdate": 909
    },
    {
      "perspective": "US/Western Concern",
      "headline": "US Focuses on Iran's Nuclear Ambitions and Hormuz Control Amid Gulf Strikes",
      "summary": "US officials and allies emphasize preventing Iran from becoming a nuclear power and controlling the Strait of Hormuz, while also engaging in strikes in the Gulf. The US provides naval overwatch in the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 909
    },
    {
      "perspective": "Iran's Stance",
      "headline": "Iran Retaliates Against Israel, Accuses US of Ceasefire Violation",
      "summary": "Iran has launched missiles and drones toward the Strait of Hormuz and Israel, accusing the US of violating the ceasefire and retaliating for Israeli strikes. Peace talks have stalled amidst the renewed hostilities.",
      "tone": "defiant",
      "latestSinceUpdate": 909
    }
  ]
});

export default LATEST_SNAPSHOT;
