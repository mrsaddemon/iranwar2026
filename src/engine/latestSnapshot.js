export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 111,
  "lastUpdated": "2026-04-12",
  "lastSyncedAt": "2026-04-12T09:02:10.369Z",
  "warDay": 44,
  "summary": "US-Iran peace talks are ongoing in Pakistan without a deal, while military tensions escalate around the Strait of Hormuz and Israel continues strikes against Hezbollah in Lebanon.",
  "lastNarrativeUpdate": "2026-04-12",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.14,
    "durationDays": 1,
    "summary": "No ceasefire is currently active between the US and Iran, nor between Israel and Hezbollah, despite ongoing diplomatic efforts."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 75,
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
      "date": "Apr 12",
      "text": "US-Iran talks in Pakistan conclude without a deal after US made 'best, final offer'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPSmFwRzdvNDJwdXFsMktMYzZEU1ZOcDhWVldacUQ3a3VlQkY4NEpIZ21qeE9CaFk0aEFQaFFwVUxId2xuclZQemJrczlyQU4xVGlBWHc2UndaODBwaFBJRWoyOUlJZnNzWTd3dUZERkgwbVhfSWFNUlRsQkhxUnZRdjJtbG5vdmE5ckpIVnlYYS0tRlZBazF4TlJpSzRod0Q4bEZqT2liT0lVbG1Jd19zaDV6cGcyb2ZmQjNwcFRB0gHDAUFVX3lxTE56a0JvdEJLTmx5c291OHZPWWU1WnVDSU8zbXN4azZNZzFoTnkwLURNRnA2ZGhqdkdSX3ZmV05DdVJDRldHVW05bXlsYmR1Mk5KTHNtUjZZNGpkSEt0Q2hmR0dBSXdfUkgyb0l2ZWtTV1VQR0tLVmN4VGlhcE1TWEV2T1c2cExCc01rX1BGZ25KSVAyazliOWl1R2o4Y2JxSEhXUHZmMVFZRGU1UHZER09rMUlFaWlmWVVRTUJEMzBMLThzQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 111
    },
    {
      "date": "Apr 12",
      "text": "US naval destroyers have crossed the Strait of Hormuz, prompting Iran to issue a 'last warning' to US warships.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikgFBVV95cUxQckk5TlROc0hKRHM2SjRlNnhCTnFTMzRDUVJrazNscmVuQzZKNndzbHNNN0xjN0JWZWRpeGJMcFpNVGktbmlfaC1wME54NWduV1hUeHBLNElFYVdNZjB6ejA3eGttMTlOSlFmMEtmZGFyX0hlLWNra0VmODQyQkZ3TUxCU3JhazRrcEppOFlCanh0QdIBlwFBVV95cUxNVjhSTFE5SGU1aERuZU1zZkdxQmpONGk5cGNVR0ctVnFyNlI2S1Y3Umxic1Zhc1A1ZllhejVWZG03WlZYek5teTV3dC1GZ3JYMVJBUGZSWHRnMUdDM29nZVduMV9tN3FOLURkRXQ2ZFM3NFBRcHY3NE1MYnQ0dHd3eFRiSUo2MWM3TDNtRjlrMlRHdjE0eFVv?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 111
    },
    {
      "date": "Apr 12",
      "text": "US military is 'setting conditions' to clear mines from the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxQN3hnbUZSX2gtVDBXNFhtRndieXlMUDhHd2tTQVZ4NnU0Z01fZnloY3R1bWZGeHZuRGVQUGlFRzZmcUkxVEx5OW83SDVyN2prOXRtb0RRRl9nbFZrWWNKWWs0dGU0TnZQSVBHTHNtNDlaWmVTckdNekJJekZiUWtnUFVoYTJudlUzZnZaNnVhdmotQnJwTEdTQWY1UDdMbUJIUWU0Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 111
    },
    {
      "date": "Apr 12",
      "text": "Israel conducts military strikes against Hezbollah targets in Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE1WWXNJZ0ZQbzhLRDVCeWJLZEhaWGlVaDBmaUlLT3hUN3l0TWVTemZYZlpHQ1VGdmt2UTZEM3AwMmxkTTNaeG1RVk5ZWm1kcVlidTB4WTVB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 111
    },
    {
      "date": "Apr 12",
      "text": "Israel rejects a ceasefire with Hezbollah before Lebanon talks scheduled for next week.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxQRUhHalQzTUJIZW5FOEd6NjQ1Zy1zX3pkWlRuMlV2UmhLWnRnVWE1aEctUE44cldJWXlHZ09seUZXWGNyY2Z4a293WkdZX0ZvVmdIQnVRN2hSb1REclFtZUxUMmJSVTYxVUhCZk5xMHk4LVpOY2JFSkZ2bXMxYk1WSXd0YXM3QS02ck9KRDdTbGh3U1ZxdVgzWGxYTXo1aTMwUEoxUVVZaS0wUXc4S2U3ZUVGNNIBuAFBVV95cUxQNXNjb3RtWElmZUFXY0c1Ym0xbVdpb3ZHUnpHTWV2dzVjQkw5VkM4bE56VktyUmRKdkt2Mmg5SG50Zi1RMGhJV3F5Mk9Ld1VzN09sM2taRExMbHZXVTZncHE4R2xPT0hQVlV5OHFITU9vWUI1S2pkcjEwRmV6R1cxTmJSXzdtakNqT19PUXlvdE1fS1pXdmpBMmRxTU13RFdqNjMwVXJtNEczZXNnRzlLOHhPNklKMzNh?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 111
    },
    {
      "date": "Apr 12",
      "text": "Beirut continues to heal after deadly Israeli attacks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiV0FVX3lxTE9fZW1BbDZIUjBLVU9nWUMwS24wRkZvbG91UHJ3N2JKOE1lVEZwTERxdC1aUWpqZ3FwTldzZWVoU1NXekViazJzUVBNaDdjWHRTX3g0djJmRQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 111
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
