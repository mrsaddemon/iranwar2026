export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 116,
  "lastUpdated": "2026-04-12",
  "lastSyncedAt": "2026-04-12T12:27:28.678Z",
  "warDay": 44,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-12",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "Peace talks between the US and Iran failed, and Israel rejected a ceasefire with Hezbollah, indicating no active de-escalation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
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
    "escalationLevel": 38,
    "oilDisruption": 80
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
      "date": "Apr 11",
      "text": "US-Iran peace talks in Pakistan ended after 21 hours without a deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxPY3YtWWJnVW54ZDFoaFBUM2hBZXQzT0tsV3d2MnZEbVlSX0Zsck5hWnd5bndqYmVEckwwTW83dGpQSm0zZzZ4X1ljSmI5V1FQc2s3aVcxYW9vQzI1cGVxNFFtY19HNEhZbHo2VEtYRW03YmlDMklSc1drUFJIMTlwYllxcFd5U3VHZGE3Ny11Nk93VmFUZC1PcUVLcUJmNHRtMnBvNTRaWldWOVpCQmJqRHhCaHpHdE8xTzRTb19PUVlHajFRSzJJWThYQ0w?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 116
    },
    {
      "date": "Apr 11",
      "text": "Iranian delegation arrived in Pakistan for talks with the US.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQUkJlNWk5X0x6X25UNC0xdHR1UnhQcWxwM2dqYW5uRVlSYXVEUFZzV29za0diTk1EaUtFMUFGaC14cmpjcTlmVU0tRDh1YzZvRXktNUpVVHpXZzFEOUtGcWhTa3JvalgzYnhLRUdWN1NLaTJkdk5PYmd5UkV6OUNHS3hUVmpnaXhMMEMxRXpvazlod2l0T1FXRmUzeE9wV0JoOVdaaVVrVEU2Wjk4ajFwYnlWNzZ2OHdUSjlTZm1hUWfSAcYBQVVfeXFMTzdFS2dXNW1zRS0zQU1IWm1uTjNQV0RCblc0Y3ZrLUhaNWlENjFoNXlUQ1I4YWtpREgzRWdvaXgwMjVUUzZZMElyeFEydC03U0t1YXEtQzNPTWgtMW55NHdkQjVrODFsb25zaWtVWDhhTXRLTlI5TmZKZUNiNEZFd0hQdldkbkM3bUg1T29zcG4tVXJnTVJPSkNZWmtaRzJRS0dORlpjeEdQamdocUpxWGpxNUZJTERNMlJSSHJmVkNuMlhiekZn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 116
    },
    {
      "date": "Apr 12",
      "text": "Israel's attacks on Lebanon continue, threatening ceasefire efforts, with Beirut still in shock after deadly attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiV0FVX3lxTE9fZW1BbDZIUjBLVU9nWUMwS24wRkZvbG91UHJ3N2JKOE1lVEZwTERxdC1aUWpqZ3FwTldzZWVoU1NXekViazJzUVBNaDdjWHRTX3g0djJmRQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 116
    },
    {
      "date": "Apr 12",
      "text": "US military warships crossed the Strait of Hormuz to clear mines, amid ongoing talks with Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxQMWtaVmNGeGR3cjBmUVNEUjNpblI3NWI0QVFoTmVYb1B3cHh2T3NYUXRnM0kwUmcwWkZqUmVrS2dNamVfZEZFOGV5WG1BVWhMT3JfR0N4Qk10NXhoV0xqeWhZbEp2TDFtZ0c5ZWF5Y2lJdmVDYWxTS01sR2FRSDRIWEVxSVJvUy1UU0E3SXAxYjBHLU5jNVFfdk9rSQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "dw.com",
      "latestSinceUpdate": 116
    },
    {
      "date": "Apr 12",
      "text": "Iran threatened US warships in the Strait of Hormuz, calling it 'the last warning'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxNNkdJVnpXa1phTS1YU25xS3RmVFowU2lCaDVwcmhlTlY0akNRUE1mOG1INU5UbFpPWFB3NXNqdUZUeEw2bGptaGZzcFNOWlZ1UWQyUGRjMzA1Rm9lZjB0LVd6bXQ2dG93YmFtMXU4NXV3OXJxbWh1YnZiMzVwUi03cXlEdUtzMWRQVzdjNjZuczVFaFVYajFacFpaaThNZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fortune",
      "latestSinceUpdate": 116
    },
    {
      "date": "Apr 12",
      "text": "Israel rejected a ceasefire with Hezbollah before upcoming Lebanon talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxQRUhHalQzTUJIZW5FOEd6NjQ1Zy1zX3pkWlRuMlV2UmhLWnRnVWE1aEctUE44cldJWXlHZ09seUZXWGNyY2Z4a293WkdZX0ZvVmdIQnVRN2hSb1REclFtZUxUMmJSVTYxVUhCZk5xMHk4LVpOY2JFSkZ2bXMxYk1WSXd0YXM3QS02ck9KRDdTbGh3U1ZxdVgzWGxYTXo1aTMwUEoxUVVZaS0wUXc4S2U3ZUVGNNIBuAFBVV95cUxQNXNjb3RtWElmZUFXY0c1Ym0xbVdpb3ZHUnpHTWV2dzVjQkw5VkM4bE56VktyUmRKdkt2Mmg5SG50Zi1RMGhJV3F5Mk9Ld1VzN09sM2taRExMbHZXVTZncHE4R2xPT0hQVlV5OHFITU9vWUI1S2pkcjEwRmV6R1cxTmJSXzdtakNqT19PUXlvdE1fS1pXdmpBMmRxTU13RFdqNjMwVXJtNEczZXNnRzlLOHhPNklKMzNh?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 116
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
