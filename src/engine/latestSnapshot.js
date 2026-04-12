export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 127,
  "lastUpdated": "2026-04-12",
  "lastSyncedAt": "2026-04-12T21:20:17.449Z",
  "warDay": 44,
  "summary": "Peace talks between the US and Iran have failed, leading to a US announcement of a naval blockade of the Strait of Hormuz, while Iran vows not to surrender, and conflict continues between Israel and Hezbollah in Lebanon.",
  "lastNarrativeUpdate": "2026-04-12",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "Peace talks between the US and Iran have failed, leading to an escalation of threats."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.9
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
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 50,
    "escalationLevel": 90,
    "oilDisruption": 95,
    "tradeImpact": 85,
    "sanctionsPressure": 64,
    "globalPressure": 87,
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
      "date": "Apr 12",
      "text": "US and Iran fail to agree on a peace deal after 21 hours of talks.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Fox News",
      "latestSinceUpdate": 127
    },
    {
      "date": "Apr 12",
      "text": "Trump says US will blockade Strait of Hormuz after Iran talks end without deal.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTFBOTVJhU0NGZ21nWU1ka3pKNnNUVHR5ZDZ5YW5UMXJ2RnJlRHNUMks0T1ZWdGtucEx1dmk5ajd3LXNGQy0yMU5Hb0JxeDNXNzlnWnU3aHg5eXRnOTlrVVgyRHdoYXJJZnYycFBBdnNFNWhuYm93MjVteDBR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 127
    },
    {
      "date": "Apr 12",
      "text": "Iran insists Strait of Hormuz remains open and states it will not 'surrender' to threats.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTFAyV09tbUFGak5zQjF6RUxFU2JDZVpFTmMzc1owZ1ZhLWRYYVp6enpjTGozSUtFb0dtM0NGRTNReEVNdkNreTlZQ2k0T3NjVVZET1NjcQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 127
    },
    {
      "date": "Apr 12",
      "text": "US military 'setting conditions' to clear mines from Strait of Hormuz; naval blockade to begin tomorrow.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxQN3hnbUZSX2gtVDBXNFhtRndieXlMUDhHd2tTQVZ4NnU0Z01fZnloY3R1bWZGeHZuRGVQUGlFRzZmcUkxVEx5OW83SDVyN2prOXRtb0RRRl9nbFZrWWNKWWs0dGU0TnZQSVBHTHNtNDlaWmVTckdNekJJekZiUWtnUFVoYTJudlUzZnZaNnVhdmotQnJwTEdTQWY1UDdMbUJIUWU0Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 127
    },
    {
      "date": "Apr 12",
      "text": "Israel's war in Lebanon against Hezbollah has not stopped; IDF raided a hospital used by Hezbollah.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxNa1FheGp5UzlVUy00eWMwUk5yaEZzXy1LSWhkUWtGLTV1UEdCanhUT0xQNGpHbDlaalJ2OHJLRGZ5dnFjVkQwWWRQMndzeG1FNmNFVDFQNlN0QXE4NTRkaFF3b0tVblZ4NV9qVnJ2NnA3UnFTZExTbUNSNXhOUTh0QlUwUHVHNXQySUltSHZzQnlaV0ZKZWlkTktZNHlLUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 127
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
      "perspective": "United States",
      "headline": "Trump's Firm Stance on Iran Negotiations",
      "summary": "President Trump maintains a strong military presence near Iran, warning of further strikes if negotiations fail and asserting readiness for future conquests. He emphasizes that the military will remain until a 'real agreement' is honored.",
      "tone": "defiant",
      "latestSinceUpdate": 103
    },
    {
      "perspective": "Iran",
      "headline": "Diplomacy Amidst Strait of Hormuz Threats",
      "summary": "Iran engaged in direct talks with the U.S. in Pakistan but also issued stern warnings to American warships in the Strait of Hormuz, signaling a dual approach of negotiation and deterrence. The delegation arrived for talks, but no agreement was reached.",
      "tone": "strained",
      "latestSinceUpdate": 103
    },
    {
      "perspective": "Israel",
      "headline": "Continued Offensive Against Hezbollah",
      "summary": "Israel continues its military operations against Hezbollah, rejecting ceasefire calls and asserting its intent to counter perceived threats from the group and Hamas. Netanyahu insists Israel 'will deal with' Hamas and Hezbollah's plans to invade Galilee.",
      "tone": "defiant",
      "latestSinceUpdate": 103
    }
  ]
});

export default LATEST_SNAPSHOT;
