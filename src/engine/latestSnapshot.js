export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 107,
  "lastUpdated": "2026-04-12",
  "lastSyncedAt": "2026-04-12T08:06:51.141Z",
  "warDay": 44,
  "summary": "US-Iran talks in Pakistan concluded without a deal, while military tensions escalate in the Strait of Hormuz and Israel continues strikes against Hezbollah in Lebanon.",
  "lastNarrativeUpdate": "2026-04-12",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.14,
    "durationDays": 1,
    "summary": "Diplomatic efforts between the US and Iran concluded without a deal, and Israel has rejected a ceasefire with Hezbollah."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 80,
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
      "text": "Vance states no deal was reached after the US made its 'best, final offer' in talks with Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPSmFwRzdvNDJwdXFsMktMYzZEU1ZOcDhWVldacUQ3a3VlQkY4NEpIZ21qeE9CaFk0aEFQaFFwVUxId2xuclZQemJrczlyQU4xVGlBWHc2UndaODBwaFBJRWoyOUlJZnNzWTd3dUZERkgwbVhfSWFNUlRsQkhxUnZRdjJtbG5vdmE5ckpIVnlYYS0tRlZBazF4TlJpSzRod0Q4bEZqT2liT0lVbG1Jd19zaDV6cGcyb2ZmQjNwcFRB0gHDAUFVX3lxTE56a0JvdEJLTmx5c291OHZPWWU1WnVDSU8zbXN4azZNZzFoTnkwLURNRnA2ZGhqdkdSX3ZmV05DdVJDRldHVW05bXlsYmR1Mk5KTHNtUjZZNGpkSEt0Q2hmR0dBSXdfUkgyb0l2ZWtTV1VQR0tLVmN4VGlhcE1TWEV2T1c2cExCc01rX1BGZ25KSVAyazliOWl1R2o4Y2JxSEhXUHZmMVFZRGU1UHZER09rMUlFaWlmWVVRTUJEMzBMLThzQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 107
    },
    {
      "date": "Apr 12",
      "text": "Trump indicates the US is in 'very deep' negotiations with Tehran amidst ongoing conflict.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxQMDd0YXBWUGstdXpJX29WOTlwdktJMjMyNE4zSDRpc0dmN2c0ZS1ySlpFSENCRVRtUjJFazlXQkNpTnYwVlU1YXA5ZUs4d2VvM2ZtTjZrZXpybXUzWHl4SjNFdk1iOC11SUpzOXQ1cE5sdDRIOHM2Y1RpMVNSQVlfeTFrdDAwMllGNWYzakdYYjFPSmJZUXRGRmZQdE1IYTE1NjNqR0Q2R1Z1Tm9CWWY0S0lKVldYMGlCT2V1YWp6QnMxQdIBxwFBVV95cUxOc1NOZS1PdDVNU3MxaU03MkgydnNYRmhSNE9Qd1Vxc3ZHakR3eUNFZG53MHl1dGNCb0dGQkltR1N0RFFZejUyc1o4cng1OTBaNmRjX1RwbUhrQWhZOEdiZ2MyRmRWclh1THdOMkw2WU9aaUM4WWREV2ZkOUt0endTc0wtdlBWaU9uRm9sWmN5SFlJWjliU2wycmtDMkFZbnY1dmZ6YjF3NFh0aEoxU0pKZTNleVdidVpZYzE2eE5jTl9WWnVpREJ3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 107
    },
    {
      "date": "Apr 12",
      "text": "Iranian delegation arrived in Pakistan for marathon peace talks with US officials.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQUkJlNWk5X0x6X25UNC0xdHR1UnhQcWxwM2dqYW5uRVlSYXVEUFZzV29za0diTk1EaUtFMUFGaC14cmpjcTlmVU0tRDh1YzZvRXktNUpVVHpXZzFEOUtGcWhTa3JvalgzYnhLRUdWN1NLaTJkdk5PYmd5UkV6OUNHS3hUVmpnaXhMMEMxRXpvazlod2l0T1FXRmUzeE9wV0JoOVdaaVVrVEU2Wjk4ajFwYnlWNzZ2OHdUSjlTZm1hUWfSAcYBQVVfeXFMTzdFS2dXNW1zRS0zQU1IWm1uTjNQV0RCblc0Y3ZrLUhaNWlENjFoNXlUQ1I4YWtpREgzRWdvaXgwMjVUUzZZMElyeFEydC03U0t1YXEtQzNPTWgtMW55NHdkQjVrODFsb25zaWtVWDhhTXRLTlI5TmZKZUNiNEZFd0hQdldkbkM3bUg1T29zcG4tVXJnTVJPSkNZWmtaRzJRS0dORlpjeEdQamdocUpxWGpxNUZJTERNMlJSSHJmVkNuMlhiekZn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 107
    },
    {
      "date": "Apr 12",
      "text": "Iran issues a 'last warning' and threatens US warships in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxNNkdJVnpXa1phTS1YU25xS3RmVFowU2lCaDVwcmhlTlY0akNRUE1mOG1INU5UbFpPWFB3NXNqdUZUeEw2bGptaGZzcFNOWlZ1UWQyUGRjMzA1Rm9lZjB0LVd6bXQ2dG93YmFtMXU4NXV3OXJxbWh1YnZiMzVwUi03cXlEdUtzMWRQVzdjNjZuczVFaFVYajFacFpaaThNZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fortune",
      "latestSinceUpdate": 107
    },
    {
      "date": "Apr 12",
      "text": "Two US warships sailed through the Strait of Hormuz to establish a new route for merchant ships.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 107
    },
    {
      "date": "Apr 12",
      "text": "US military is 'setting conditions' to clear mines from the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxQN3hnbUZSX2gtVDBXNFhtRndieXlMUDhHd2tTQVZ4NnU0Z01fZnloY3R1bWZGeHZuRGVQUGlFRzZmcUkxVEx5OW83SDVyN2prOXRtb0RRRl9nbFZrWWNKWWs0dGU0TnZQSVBHTHNtNDlaWmVTckdNekJJekZiUWtnUFVoYTJudlUzZnZaNnVhdmotQnJwTEdTQWY1UDdMbUJIUWU0Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 107
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
