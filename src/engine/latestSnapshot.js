export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 117,
  "lastUpdated": "2026-04-12",
  "lastSyncedAt": "2026-04-12T13:42:51.941Z",
  "warDay": 44,
  "summary": "US-Iran peace talks have failed, leading to President Trump threatening a blockade of the Strait of Hormuz, while Israel continues its conflict with Hezbollah.",
  "lastNarrativeUpdate": "2026-04-12",
  "ceasefire": {
    "active": false,
    "status": "fragile",
    "confidence": 0.55,
    "durationDays": 1,
    "summary": "Peace talks between the US and Iran have failed, and Israel has rejected a ceasefire with Hezbollah, indicating no active de-escalation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 82
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 68,
    "escalationLevel": 92,
    "oilDisruption": 90
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
      "text": "US-Iran peace talks in Pakistan ended without a deal after 21 hours.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxPY3YtWWJnVW54ZDFoaFBUM2hBZXQzT0tsV3d2MnZEbVlSX0Zsck5hWnd5bndqYmVEckwwTW83dGpQSm0zZzZ4X1ljSmI5V1FQc2s3aVcxYW9vQzI1cGVxNFFtY19HNEhZbHo2VEtYRW03YmlDMklSc1drUFJIMTlwYllxcFd5U3VHZGE3Ny11Nk93VmFUZC1PcUVLcUJmNHRtMnBvNTRaWldWOVpCQmJqRHhCaHpHdE8xTzRTb19PUVlHajFRSzJJWThYQ0w?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 117
    },
    {
      "date": "Apr 12",
      "text": "President Trump announced the US will blockade ships crossing the Strait of Hormuz following failed peace talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPSmFwRzdvNDJwdXFsMktMYzZEU1ZOcDhWVldacUQ3a3VlQkY4NEpIZ21qeE9CaFk0aEFQaFFwVUxId2xuclZQemJrczlyQU4xVGlBWHc2UndaODBwaFBJRWoyOUlJZnNzWTd3dUZERkgwbVhfSWFNUlRsQkhxUnZRdjJtbG5vdmE5ckpIVnlYYS0tRlZBazF4TlJpSzRod0Q4bEZqT2liT0lVbG1Jd19zaDV6cGcyb2ZmQjNwcFRB0gHDAUFVX3lxTE56a0JvdEJLTmx5c291OHZPWWU1WnVDSU8zbXN4azZNZzFoTnkwLURNRnA2ZGhqdkdSX3ZmV05DdVJDRldHVW05bXlsYmR1Mk5KTHNtUjZZNGpkSEt0Q2hmR0dBSXdfUkgyb0l2ZWtTV1VQR0tLVmN4VGlhcE1TWEV2T1c2cExCc01rX1BGZ25KSVAyazliOWl1R2o4Y2JxSEhXUHZmMVFZRGU1UHZER09rMUlFaWlmWVVRTUJEMzBMLThzQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 117
    },
    {
      "date": "Apr 12",
      "text": "US military is 'setting conditions' to clear mines from the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxQN3hnbUZSX2gtVDBXNFhtRndieXlMUDhHd2tTQVZ4NnU0Z01fZnloY3R1bWZGeHZuRGVQUGlFRzZmcUkxVEx5OW83SDVyN2prOXRtb0RRRl9nbFZrWWNKWWs0dGU0TnZQSVBHTHNtNDlaWmVTckdNekJJekZiUWtnUFVoYTJudlUzZnZaNnVhdmotQnJwTEdTQWY1UDdMbUJIUWU0Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 117
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
      "text": "Israel rejected a ceasefire with Hezbollah before Lebanon talks next week.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxQRUhHalQzTUJIZW5FOEd6NjQ1Zy1zX3pkWlRuMlV2UmhLWnRnVWE1aEctUE44cldJWXlHZ09seUZXWGNyY2Z4a293WkdZX0ZvVmdIQnVRN2hSb1REclFtZUxUMmJSVTYxVUhCZk5xMHk4LVpOY2JFSkZ2bXMxYk1WSXd0YXM3QS02ck9KRDdTbGh3U1ZxdVgzWGxYTXo1aTMwUEoxUVVZaS0wUXc4S2U3ZUVGNNIBuAFBVV95cUxQNXNjb3RtWElmZUFXY0c1Ym0xbVdpb3ZHUnpHTWV2dzVjQkw5VkM4bE56VktyUmRKdkt2Mmg5SG50Zi1RMGhJV3F5Mk9Ld1VzN09sM2taRExMbHZXVTZncHE4R2xPT0hQVlV5OHFITU9vWUI1S2pkcjEwRmV6R1cxTmJSXzdtakNqT19PUXlvdE1fS1pXdmpBMmRxTU13RFdqNjMwVXJtNEczZXNnRzlLOHhPNklKMzNh?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 117
    },
    {
      "date": "Apr 12",
      "text": "Beirut is attempting to heal after deadly Israeli attacks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiV0FVX3lxTE9fZW1BbDZIUjBLVU9nWUMwS24wRkZvbG91UHJ3N2JKOE1lVEZwTERxdC1aUWpqZ3FwTldzZWVoU1NXekViazJzUVBNaDdjWHRTX3g0djJmRQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 117
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
