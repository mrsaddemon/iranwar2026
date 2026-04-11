export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 93,
  "lastUpdated": "2026-04-11",
  "lastSyncedAt": "2026-04-11T19:43:13.846Z",
  "warDay": 43,
  "summary": "High-level peace talks between the US and Iran are underway in Pakistan, while Israel and Lebanon prepare for ceasefire discussions amidst ongoing Israeli attacks in Beirut and US military operations to clear mines from the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-04-11",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect, though peace talks are underway between the US and Iran, and ceasefire talks are planned between Israel and Lebanon."
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
    "oilDisruption": 75
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
      "text": "US and Iran hold direct peace talks in Pakistan, with Vance participating.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTE5wTDVrcXZzejVCLUZGT2c2Z2M1SE9XYzJTWjlmbFNJa09mX2pJRndkTVU5cE84TmxQM3ZQTmpvQXBIcFBtYkNIcVg4SVJNTzZhRUdudEw3TDZ4TTZTYWljZDFCeUdnV3Q5bWtfcGsyUWs1dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 92
    },
    {
      "date": "Apr 11",
      "text": "Israel to hold ceasefire talks with Lebanon next week, despite rejecting immediate ceasefire with Hezbollah.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxQRUhHalQzTUJIZW5FOEd6NjQ1Zy1zX3pkWlRuMlV2UmhLWnRnVWE1aEctUE44cldJWXlHZ09seUZXWGNyY2Z4a293WkdZX0ZvVmdIQnVRN2hSb1REclFtZUxUMmJSVTYxVUhCZk5xMHk4LVpOY2JFSkZ2bXMxYk1WSXd0YXM3QS02ck9KRDdTbGh3U1ZxdVgzWGxYTXo1aTMwUEoxUVVZaS0wUXc4S2U3ZUVGNNIBuAFBVV95cUxQNXNjb3RtWElmZUFXY0c1Ym0xbVdpb3ZHUnpHTWV2dzVjQkw5VkM4bE56VktyUmRKdkt2Mmg5SG50Zi1RMGhJV3F5Mk9Ld1VzN09sM2taRExMbHZXVTZncHE4R2xPT0hQVlV5OHFITU9vWUI1S2pkcjEwRmV6R1cxTmJSXzdtakNqT19PUXlvdE1fS1pXdmpBMmRxTU13RFdqNjMwVXJtNEczZXNnRzlLOHhPNklKMzNh?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 93
    },
    {
      "date": "Apr 11",
      "text": "Israel's attacks devastate Beirut, threatening US-Iran ceasefire efforts.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxOaHpGYklsUkhfU0xZTTBqTmdVVzlBTUh0OHBiWHc1aDNwSlN0Q1EtMmdUVUNybklUOUNGenhUQWdUTEk4eFFjYjlSbGxKam1pX0xJa0dFRjBpSWxwVE1xcGN0S09McGVOaXJFQWdpOS1LOGltbGU3NzZXNGFoVWZrdXZyMHJKWHgwYzFCbDRYMmZXWWxuMkFNYkZxYmE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 92
    },
    {
      "date": "Apr 11",
      "text": "US military begins clearing mines from the Strait of Hormuz, with Trump claiming operations have started.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNQ3FnZ29MSnlaRGJjTDhXbmNlaWlWQXk1NFZrVUk1T1l6d3ktTzlOMnU2YWNXUGN3VHF4UXQwaTQta3B5MDgtNUZWZjYwWmp3RUtiVVZ4VlRoSVhSbXVwTDVPX2dqZWJ4RFBmajhGT3k4LWliQVF2eUdIUmQtdWdpUWs5akFHQll2Z2pkMmR2V1lEd0lLc1VDcHVSRU9Zb3Q0ekx3YjdXUzBmN1AwRlVFd0o1Y21NeDlzSDFEUA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Military Times",
      "latestSinceUpdate": 93
    },
    {
      "date": "Apr 11",
      "text": "Iran reportedly unable to find mines it planted in the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 93
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
