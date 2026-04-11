export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 99,
  "lastUpdated": "2026-04-11",
  "lastSyncedAt": "2026-04-11T22:03:41.681Z",
  "warDay": 43,
  "summary": "High-stakes peace talks between the US and Iran are underway in Pakistan amidst warnings from President Trump and rising tensions in the Strait of Hormuz, while Israel and Lebanon prepare for talks as conflict with Hezbollah continues.",
  "lastNarrativeUpdate": "2026-04-11",
  "ceasefire": {
    "active": false,
    "status": "fragile",
    "confidence": 0.55,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect, though talks between Israel and Lebanon are authorized, and US-Iran peace talks are underway."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 75,
    "oilDisruption": 70
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
      "date": "Apr 10",
      "text": "Iranian delegation arrives in Pakistan for high-stakes talks with the US.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQUkJlNWk5X0x6X25UNC0xdHR1UnhQcWxwM2dqYW5uRVlSYXVEUFZzV29za0diTk1EaUtFMUFGaC14cmpjcTlmVU0tRDh1YzZvRXktNUpVVHpXZzFEOUtGcWhTa3JvalgzYnhLRUdWN1NLaTJkdk5PYmd5UkV6OUNHS3hUVmpnaXhMMEMxRXpvazlod2l0T1FXRmUzeE9wV0JoOVdaaVVrVEU2Wjk4ajFwYnlWNzZ2OHdUSjlTZm1hUWfSAcYBQVVfeXFMTzdFS2dXNW1zRS0zQU1IWm1uTjNQV0RCblc0Y3ZrLUhaNWlENjFoNXlUQ1I4YWtpREgzRWdvaXgwMjVUUzZZMElyeFEydC03U0t1YXEtQzNPTWgtMW55NHdkQjVrODFsb25zaWtVWDhhTXRLTlI5TmZKZUNiNEZFd0hQdldkbkM3bUg1T29zcG4tVXJnTVJPSkNZWmtaRzJRS0dORlpjeEdQamdocUpxWGpxNUZJTERNMlJSSHJmVkNuMlhiekZn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 99
    },
    {
      "date": "Apr 10",
      "text": "US envoy Vance participates in high-stakes talks with Iran in Pakistan.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxNM3BjbS0wbVNsakpHdDNKSDU3aGFWUFg4akhreGM0RVR4MHlneFlhM3kyWllUeWtnZXA2aERjRGZQZlluQlJBMHQ1ZnZGNE9BMER2Wmo2OV9tZW5NNHhHVmk0bHNoZTc5UWhLQlJnMGFxRlptQ0lQd2FEckV3SWhuYjlRZEJHWlQxWTczYnFkSjhGQnZlckMw0gGcAUFVX3lxTE9DVHRIbV92d1JUV1RLRU80S0hRYjREMkhnWkVmYUFub3BXRGwxb3lMdjhJdWxDZ0V6cHVrYnRENHpKWlAxYzdxMDVNZzN0Mk4tZUs3cFVfRW5LMC1OT0ktcE94T3RwaEszSGR0VHB0MlB4bW4yYk5kUk1pTUF5R2tiODFkX0I1cTRMYVc2UXZQQTUtRGhyWmpHTDdNeQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 99
    },
    {
      "date": "Apr 10",
      "text": "President Trump warns Iran ahead of talks and threatens fresh strikes if negotiations fail.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxQRHpKdTgxUlVlakFwSXFXN2dPVkZ2dkJtS3JJQWwxT1VGcmJOVTNJeVBWUUNxcFEwTV9jX05SRFZGemJwV1lPS1QwZ0RMYzN6Sms0Z01CeXpYSHpGejdwRDNVcjJ4d1Y5UUlIeVVLdVJkUV94dy14R3hRQ1V5cExBeUd3SDB6NGVNX1BnNk9fU2MwY2lCaV83T0pPWkt2R1c3Zk1lWUZMbXZrYWhqQnhvOGxPemxaa2Q0eHo5blhfcERFUG9JMVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 99
    },
    {
      "date": "Apr 10",
      "text": "Trump claims the US has begun clearing mines in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi4gFBVV95cUxOYTNuS084aV9FYmgyTTFYbzhUbGJjTjlaLXQyb0dEalBVbWFXUzVDcUxrWDB1czFBa3Y0TzFLR19fcVlrY0xWRjRVYVpqTDl4U2M3UV94UXA4MDZyRUpIUTlST0F6TG43VXk5eVJSa0tCQ2NIWHdtak8wZDJhdjFlcWliekFIWXdlSUlvUi1ZNHltOS1XMk1IR0VrMUF6ZTN3YW5VenVsNXFMOUZmdXpIWU9Ia2QzakFFbzhaTF9yTE81M1QwVWlVSGFNR0xFYURVXzd4NTAyMTZQLURET3VNMWZR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 99
    },
    {
      "date": "Apr 10",
      "text": "US military is 'setting conditions' to clear mines from the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxQN3hnbUZSX2gtVDBXNFhtRndieXlMUDhHd2tTQVZ4NnU0Z01fZnloY3R1bWZGeHZuRGVQUGlFRzZmcUkxVEx5OW83SDVyN2prOXRtb0RRRl9nbFZrWWNKWWs0dGU0TnZQSVBHTHNtNDlaWmVTckdNekJJekZiUWtnUFVoYTJudlUzZnZaNnVhdmotQnJwTEdTQWY1UDdMbUJIUWU0Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 99
    },
    {
      "date": "Apr 10",
      "text": "IRGC Navy warns against military vessel passage through the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 99
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
      "perspective": "US Diplomacy & Pressure",
      "headline": "US pushes for negotiation while maintaining military readiness.",
      "summary": "The US, through envoy Vance, is actively engaged in peace talks with Iran, while President Trump warns Iran against failing negotiations and highlights US military readiness. Trump also criticizes Iran's actions regarding the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran engages in talks amidst Strait of Hormuz closure and ceasefire tests.",
      "summary": "An Iranian delegation is participating in peace talks, but the Strait of Hormuz remains closed or has low traffic, and Iran is reported to be testing the ceasefire. Iran is also reportedly unable to find mines it planted in the Strait.",
      "tone": "defiant",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "Israeli-Lebanese Front",
      "headline": "Continued conflict in Lebanon despite ongoing talks.",
      "summary": "Israel and Lebanon have agreed to meet for talks, but Israel states there is no ceasefire in Lebanon, and both sides continue to trade strikes, further threatening any broader de-escalation.",
      "tone": "anxious",
      "latestSinceUpdate": 64
    },
    {
      "perspective": "US Military Internal",
      "headline": "Disquiet and unpreparedness claims within US military.",
      "summary": "Survivors of a deadly attack on a US military outpost in Kuwait dispute the Pentagon's account, claiming the unit was unprepared, contributing to growing disquiet within the military.",
      "tone": "skeptical",
      "latestSinceUpdate": 64
    }
  ]
});

export default LATEST_SNAPSHOT;
