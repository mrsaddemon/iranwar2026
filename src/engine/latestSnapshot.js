export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2509,
  "lastUpdated": "2026-09-29",
  "lastSyncedAt": "2026-09-29T15:07:28.538Z",
  "warDay": 214,
  "summary": "The conflict continues with ongoing US-Israeli strikes on Tehran, Iranian attacks on US forces, and Israeli operations against Hezbollah, while diplomatic efforts for a ceasefire are rejected by the US and regional oil exports rebound despite high prices.",
  "lastNarrativeUpdate": "2026-09-29",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.2,
    "durationDays": 7,
    "summary": "A ceasefire proposal from Tehran has been rejected by the US, indicating no active ceasefire, though dialogue is still mentioned."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 75,
    "oilDisruption": 55,
    "tradeImpact": 53,
    "sanctionsPressure": 62,
    "globalPressure": 74,
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
      "date": "Sep 26",
      "text": "UN ambassador Waltz states Iran is not negotiating in good faith to end the war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxPSUVsMFM4WGF1c1NReGpTcWN6OXZQWFR3ZHJoR0p6MmtPYWR4N0RmSWFJcGdFMUdaemVpODhabzV0ZE5iTFlDNDVvUDAtc2IyMVVSNklTMWVXT1RqdlVTY3BMZDRuRGhjYlZybzRTQ19sT3Nld1JYQkE4Z2dTR3dDYXB3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2509
    },
    {
      "date": "Sep 26",
      "text": "Iran declares readiness for dialogue and diplomacy without force.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxNQU1vV1JGYzkxNmZDcEs0eUFYYlZtTHQ4ZTJzcWZQREo5NzhHZ2dsTGdIMUQyWTZuMUk2NzZZVVE4QUh0M0ZyS0V4WjdFd0loR1JDZEpkSE9RWjliam5uUVpHTHV0LXhmeHdTa3c5TG1RVzJvRmJqMWFCOUxXckpBRlRTLV9PTDgzd0JodjgwWDc3aWF6MV9SMmJWT1dWUFpkWEt2dWhDRVkxMDNBVFpnZVBB0gG3AUFVX3lxTE5KdWw4dkNsRGxUTjdRb1JxamNPN1JKVUFTdzVfZUxFS2t5em9ENTdRNE1lMlhVbHhpOEJxM24yUm9LeW80WE1yQy1Vdy1XekttNTZwNVlhRTB0UzFGc0xKajJwamZWTFE3clhUWTFpRVN0b0tCWnhGelJ0V0s1Y3hBcjB6NWhJNk9xeDVYUnJuZXNaQ2xaSHBzRUl5cV8yNEtLaExlTDlwbXNBcl92czVWNVQ1ZUYwRQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2509
    },
    {
      "date": "Sep 26",
      "text": "Trump threatens 'Economic D-Day' for Iran and severe consequences for its backers.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxQbjdQcUlraHYyYTY1UG5sUDJpV1dwZnpzWWZObU5iZ3g2RW1HSzFwTWNhcE1NaUR3Q3pWT1pYQXZibW1wMS1oQ1dUSVhObUhwcHN4MTVDWTNKOXFneGItamNBeWptNENKNHRiYXFJV0VJY2taaXFyRnJSQy1pRFlDbUhHMFnSAYoBQVVfeXFMUF9NTjA0UzQxLWRzdHFabk5acVdjbklmdzlGSlowZ3h4QnVIdmdGQjFfYUZsbEZSV1Bia1hISjZGVEgyNWlWcVBzMkVOSzYtR05OaXlBM3oxVkRKR0pycFZDeUxXejZnbXQzbF82Rjhud3NHR3VGZUhmQnl3MlpibFNGcFc4LTFHei1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2509
    },
    {
      "date": "Sep 26",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighbourhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2509
    },
    {
      "date": "Sep 26",
      "text": "Middle East oil exports rebound as Iran’s chokehold on the Strait of Hormuz breaks down.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2509
    },
    {
      "date": "Sep 26",
      "text": "Iraq seeks alternative oil export routes to bypass the troubled Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxNYWFkRk5ZMkJFUmtITDVCbEx3STJmeDVNWnJpbFgtRWlYQVhlb0JxcUpTR0hCUVY1Rlc3NURTdUdycnJCdnVtckNxLXFzSFVENEN2MTMzeGluMTJ5MEtPOUI1bWR0YmZEdW9FUXNqdXBCT0pOQzJKSldNbTdZQTAtNHFVSEtPczBmLWpPUGZPb0FDRGRKV2hGUEpPSzJVNXl5dGVZUFdkTHhJNHRwa3ZxcHJIMUFiUdIBuwFBVV95cUxPcnNvT0owZU5BZUk2Q21rTlNrMlRGQWpPQ0tCSG5DLXJkX2NsVUVzeGtUVy1VQmtPUWxUMTI5TWQ5UVlxc01tc3h0QU9IX1Nndmh1bEFQQXlPazRxZGp3bDVSV2U4d0NLMDk1dWVtN1FkOVVORmNpbG9rSGdlbUR6WWNXUklueHFVaFBIRlBvMFl3ZnY3Z1ZyQl8xaXpET1prdmJlZmtjR1REYXkwYlVldEF1eVgxc0pFQkdR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2509
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
      "perspective": "Iran",
      "headline": "Tehran Proposes Roadmap Amidst Strikes",
      "summary": "Iran has proposed a seven-day roadmap to end the war and awaits a US response, even as it faces ongoing US-Israeli strikes on its neighborhoods. Despite facing a blockade, Iran continues to engage in military actions, including attacks on vessels in the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 2507
    },
    {
      "perspective": "USA/Israel",
      "headline": "Strikes Continue, Mediation Explored",
      "summary": "The US and Israel continue to conduct strikes in Iran, with reports of civilian harm in Tehran. While rejecting Iran's proposal to reopen Hormuz and claiming Iran is 'exhausted,' US officials have also engaged in meetings with war mediators.",
      "tone": "defiant",
      "latestSinceUpdate": 2507
    },
    {
      "perspective": "Regional Stability",
      "headline": "Oil Exports Rebound, Hormuz Pressure Eases",
      "summary": "Middle East oil exports are rebounding to 72% of prewar levels as Iran's chokehold on the Strait of Hormuz weakens. Iraq is actively seeking alternative oil export routes, indicating ongoing concerns about the stability of traditional shipping lanes.",
      "tone": "neutral",
      "latestSinceUpdate": 2507
    }
  ]
});

export default LATEST_SNAPSHOT;
