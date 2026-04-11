export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 95,
  "lastUpdated": "2026-04-11",
  "lastSyncedAt": "2026-04-11T19:57:43.427Z",
  "warDay": 43,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-11",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect, though peace talks between the US and Iran, and potential talks between Israel and Lebanon, are underway."
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
        "precision": 0.6,
        "aggression": 0.8
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
    "nuclearIndex": 20,
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
      "text": "Iranian delegation arrives in Pakistan for talks with US.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQUkJlNWk5X0x6X25UNC0xdHR1UnhQcWxwM2dqYW5uRVlSYXVEUFZzV29za0diTk1EaUtFMUFGaC14cmpjcTlmVU0tRDh1YzZvRXktNUpVVHpXZzFEOUtGcWhTa3JvalgzYnhLRUdWN1NLaTJkdk5PYmd5UkV6OUNHS3hUVmpnaXhMMEMxRXpvazlod2l0T1FXRmUzeE9wV0JoOVdaaVVrVEU2Wjk4ajFwYnlWNzZ2OHdUSjlTZm1hUWfSAcYBQVVfeXFMTzdFS2dXNW1zRS0zQU1IWm1uTjNQV0RCblc0Y3ZrLUhaNWlENjFoNXlUQ1I4YWtpREgzRWdvaXgwMjVUUzZZMElyeFEydC03U0t1YXEtQzNPTWgtMW55NHdkQjVrODFsb25zaWtVWDhhTXRLTlI5TmZKZUNiNEZFd0hQdldkbkM3bUg1T29zcG4tVXJnTVJPSkNZWmtaRzJRS0dORlpjeEdQamdocUpxWGpxNUZJTERNMlJSSHJmVkNuMlhiekZn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 92
    },
    {
      "date": "Apr 11",
      "text": "Trump warns of fresh strikes if Iran talks fail and states military will remain near Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxQRHpKdTgxUlVlakFwSXFXN2dPVkZ2dkJtS3JJQWwxT1VGcmJOVTNJeVBWUUNxcFEwTV9jX05SRFZGemJwV1lPS1QwZ0RMYzN6Sms0Z01CeXpYSHpGejdwRDNVcjJ4d1Y5UUlIeVVLdVJkUV94dy14R3hRQ1V5cExBeUd3SDB6NGVNX1BnNk9fU2MwY2lCaV83T0pPWkt2R1c3Zk1lWUZMbXZrYWhqQnhvOGxPemxaa2Q0eHo5blhfcERFUG9JMVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 95
    },
    {
      "date": "Apr 11",
      "text": "Netanyahu authorizes direct talks with Lebanon in potential boost to ceasefire efforts.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxNd1JTaHlCdC0wVzJHcnMwZUFucTdzZHVORExKSlpwcTJQbjVZTEluMkllQW0zeE9FZ0ppYnl3SlNmSFRDQm1DVVB6enREdjF6SjBoRS13dXNNbkZCaGNPUExxVTJTSW5CdHlBNTFZVldPMjdCdEt2YmxOcnZwb2lINmZIN01ld2MwcXVIQzVLbzhzQi1XTkd3WFZDNjdwZE9pNWJV?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 95
    },
    {
      "date": "Apr 11",
      "text": "US Navy ships cross the Strait of Hormuz as Vance participates in high-stakes talks with Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxNM3BjbS0wbVNsakpHdDNKSDU3aGFWUFg4akhreGM0RVR4MHlneFlhM3kyWllUeWtnZXA2aERjRGZQZlluQlJBMHQ1ZnZGNE9BMER2Wmo2OV9tZW5NNHhHVmk0bHNoZTc5UWhLQlJnMGFxRlptQ0lQd2FEckV3SWhuYjlRZEJHWlQxWTczYnFkSjhGQnZlckMw0gGcAUFVX3lxTE9DVHRIbV92d1JUV1RLRU80S0hRYjREMkhnWkVmYUFub3BXRGwxb3lMdjhJdWxDZ0V6cHVrYnRENHpKWlAxYzdxMDVNZzN0Mk4tZUs3cFVfRW5LMC1OT0ktcE94T3RwaEszSGR0VHB0MlB4bW4yYk5kUk1pTUF5R2tiODFkX0I1cTRMYVc2UXZQQTUtRGhyWmpHTDdNeQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 95
    },
    {
      "date": "Apr 11",
      "text": "US military starts removing mines from Strait of Hormuz, claiming Iran is unable to find mines it planted.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxNeDI5dFhBU01HTjBGYmNCYTRmQmY4RHRwbDRCTWdGVVgxTnpxU09tVTkzY2xJOXYzLVc2VWlwYk5ZWG12QVVvQnRzeWY1WUxzMXBSYkdNSG1HSzgwZXZMQVFkODNtZTRxZG84M1FlOUxzOGVmeFRRMjRWOENDR0xKTEplVVfSAYoBQVVfeXFMT2dCOEctSmQxcXctV2laNS1VVTZFNTNWanFUWTlSQndoYU9sdThUeXBTRjc2OC12RzJKbzBNa21BaUxYSHZLQkprNDVhanV5ZXVXcjRoOU9taF9EZTFrakNKYnVMOTQ5R3ZBM28ycllPVVBMdnFHLXlWejNJcWZhdEJiNjFlazhTVHZn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 95
    },
    {
      "date": "Apr 11",
      "text": "Israel's attacks devastate Beirut and threaten U.S.-Iran ceasefire efforts.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxOaHpGYklsUkhfU0xZTTBqTmdVVzlBTUh0OHBiWHc1aDNwSlN0Q1EtMmdUVUNybklUOUNGenhUQWdUTEk4eFFjYjlSbGxKam1pX0xJa0dFRjBpSWxwVE1xcGN0S09McGVOaXJFQWdpOS1LOGltbGU3NzZXNGFoVWZrdXZyMHJKWHgwYzFCbDRYMmZXWWxuMkFNYkZxYmE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 94
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
