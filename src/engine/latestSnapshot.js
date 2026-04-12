export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 120,
  "lastUpdated": "2026-04-12",
  "lastSyncedAt": "2026-04-12T15:54:13.338Z",
  "warDay": 44,
  "summary": "Peace talks between the US and Iran have failed, leading to a US threat to blockade the Strait of Hormuz, while the conflict between Israel and Hezbollah continues in Lebanon.",
  "lastNarrativeUpdate": "2026-04-12",
  "ceasefire": {
    "active": false,
    "status": "fragile",
    "confidence": 0.55,
    "durationDays": 1,
    "summary": "Peace talks between the US and Iran have failed, and Israel has rejected a ceasefire with Hezbollah, indicating no active ceasefire."
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
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "text": "US President Trump announced the US will blockade the Strait of Hormuz after peace talks with Iran failed.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE9PbTY2UnlVRmhDNk1JLXJBYTlzUFBPVXZ0VDR5b3htTnpwTGM2bklzdjJZTkNBTGNHUHQ5RE5YNjl6NF9mWl83WVlOU0VqU1Y1SlJBMksxTU12ZFhkR2M2MTRJcVd2cDVVSGxBU196NU82YnVMLUpr0gF8QVVfeXFMT3lmemY2VlRadjc0WlRlemNuQ3pHNWlPMzFyMWZDMEtqUE5odEtNYWxTaWNRNUZQNXZKVXdMVU13Yk53WDZySUZOb1laVkhiVUlmeGtrTDJGeWd3c0o4ZWtJOE1oZFlzbGRMVDFmYjdab0xpMENXaVpWT29zZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 120
    },
    {
      "date": "Apr 12",
      "text": "The US military has begun removing mines from the Strait of Hormuz, setting conditions for potential blockade operations.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxQN3hnbUZSX2gtVDBXNFhtRndieXlMUDhHd2tTQVZ4NnU0Z01fZnloY3R1bWZGeHZuRGVQUGlFRzZmcUkxVEx5OW83SDVyN2prOXRtb0RRRl9nbFZrWWNKWWs0dGU0TnZQSVBHTHNtNDlaWmVTckdNekJJekZiUWtnUFVoYTJudlUzZnZaNnVhdmotQnJwTEdTQWY1UDdMbUJIUWU0Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 120
    },
    {
      "date": "Apr 12",
      "text": "An Iranian delegation arrived for peace talks in Pakistan, though the talks ultimately failed.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQUkJlNWk5X0x6X25UNC0xdHR1UnhQcWxwM2dqYW5uRVlSYXVEUFZzV29za0diTk1EaUtFMUFGaC14cmpjcTlmVU0tRDh1YzZvRXktNUpVVHpXZzFEOUtGcWhTa3JvalgzYnhLRUdWN1NLaTJkdk5PYmd5UkV6OUNHS3hUVmpnaXhMMEMxRXpvazlod2l0T1FXRmUzeE9wV0JoOVdaaVVrVEU2Wjk4ajFwYnlWNzZ2OHdUSjlTZm1hUWfSAcYBQVVfeXFMTzdFS2dXNW1zRS0zQU1IWm1uTjNQV0RCblc0Y3ZrLUhaNWlENjFoNXlUQ1I4YWtpREgzRWdvaXgwMjVUUzZZMElyeFEydC03U0t1YXEtQzNPTWgtMW55NHdkQjVrODFsb25zaWtVWDhhTXRLTlI5TmZKZUNiNEZFd0hQdldkbkM3bUg1T29zcG4tVXJnTVJPSkNZWmtaRzJRS0dORlpjeEdQamdocUpxWGpxNUZJTERNMlJSSHJmVkNuMlhiekZn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 120
    },
    {
      "date": "Apr 12",
      "text": "Israel rejected a ceasefire with Hezbollah, indicating its war in Lebanon is ongoing ahead of next week's talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxQRUhHalQzTUJIZW5FOEd6NjQ1Zy1zX3pkWlRuMlV2UmhLWnRnVWE1aEctUE44cldJWXlHZ09seUZXWGNyY2Z4a293WkdZX0ZvVmdIQnVRN2hSb1REclFtZUxUMmJSVTYxVUhCZk5xMHk4LVpOY2JFSkZ2bXMxYk1WSXd0YXM3QS02ck9KRDdTbGh3U1ZxdVgzWGxYTXo1aTMwUEoxUVVZaS0wUXc4S2U3ZUVGNNIBuAFBVV95cUxQNXNjb3RtWElmZUFXY0c1Ym0xbVdpb3ZHUnpHTWV2dzVjQkw5VkM4bE56VktyUmRKdkt2Mmg5SG50Zi1RMGhJV3F5Mk9Ld1VzN09sM2taRExMbHZXVTZncHE4R2xPT0hQVlV5OHFITU9vWUI1S2pkcjEwRmV6R1cxTmJSXzdtakNqT19PUXlvdE1fS1pXdmpBMmRxTU13RFdqNjMwVXJtNEczZXNnRzlLOHhPNklKMzNh?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 120
    },
    {
      "date": "Apr 12",
      "text": "Pope Leo stated that a 'delusion of omnipotence' is fueling the U.S.-Israeli war in Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxORlJ1enM1MG1MTDlHY1cxdkhJZnlJMkJVUXNpUUlDUWttQ0hEaHF4QWVxVEc0Y1Y2TjlkSUtYRWIwLWNfMFFwcWNQb0VxY1BqQU01SWVZdTRQaFVoQVdDZDN4TzlNVkhheHJkaHdYYnJYV1otWFFjU3RsYU1TVGxIRmplM0pQZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 120
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
