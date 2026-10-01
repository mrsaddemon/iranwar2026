export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2518,
  "lastUpdated": "2026-10-01",
  "lastSyncedAt": "2026-10-01T11:47:38.689Z",
  "warDay": 216,
  "summary": "Tensions remain high between the US, Israel, and Iran, marked by US threats, reported US-Israeli strikes in Tehran, and ongoing Israeli operations against Iran-backed Hezbollah, while oil exports from the Middle East have rebounded.",
  "lastNarrativeUpdate": "2026-10-01",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire reported amidst ongoing regional tensions and direct threats."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 80,
    "oilDisruption": 20,
    "tradeImpact": 29,
    "sanctionsPressure": 63,
    "globalPressure": 70,
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
      "date": "Oct 01",
      "text": "Trump says may ‘blow up’ Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPWlkxSG8wVkZ1Q0VFS2JDNE5WblUtN3hQU0twSnVrMFNrWmxOaDVlVS1HUGZXbVFGWkJtTkNqQTdhR281Wm9DbEpOY1BqX05PMDBSTWV2eGxOSzMwMWFJNHRJWlktV0txM1pWMEF1RG10UVk0d041dW9xNXRyenljd0l1T2Rqek9jZWVKWHgzUXowdXN4SUhfZ0VtQWRsOFdIdUlZWXdNTncxb1pwb09hYUlNcGdORWFVak5v0gHAAUFVX3lxTE0tbmZweW4xTWxhNm1QTnB4ZEpoWHhMU0RiZ09XX0wxLW1wM3hYZzNkX2ppQkgwRko5M1ROU2l0eEVlQ2Z2a2d2MWtWNm5FQjhLWUY2ZDVLSVBRZlNTb0FVRHJYZDI4UE04ZzZ2YlZwUjdBMUVoLUtYdC0xX3pISV84YUFuTWlNM3ZLMndjeTYzS0tNX0Fja0VQMjlpcWtSaUdaWXJnMDBqU3dZQldqQWxFNVRlOUVyU1l5NXo2c2UxYg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "aljazeera.com",
      "latestSinceUpdate": 2518
    },
    {
      "date": "Oct 01",
      "text": "US and Iran trade barbs as MBS and UAE VP meet.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxOOGR3S3NmdVpaZUR1OGdBX0hBTU5TbTFDcDRVbThaY05EU1Q3Qk9Sa3AwNFlkT3RrU0ZZb19DYmlaZlFQa09DT3d1eGxuZFJnZVJpT1NSTkpVVy1pUEt4MmZVR1JqeWR0YWRLNUdfcFp2WjVMV1lMNVllaF9ELVF3bmhrUUhscEFwcDJVSE9feWtzYldxNGF2NGNEZUZVZm05Z0ZoamNsd2dZNVcxNWE4V0luaVZpd9IBuwFBVV95cUxPSUdtckw3eUdwd1UweVd6Tm1YWG55cXBIaTZrdVJtTWRKdmN3LWk5aGxtOTFtbFNQcVdfN3g2ekVUR0NGVHNXRXFQYjJrbjNiNUNwVUREUWp1M1laYkZQMng0SzJIcmN1RnR1bVpXU3FBbnRaaWxsQllnNmV1ZU1nMG1QT0RFR1JnUDZoaFpoc2VsbTFfMGpjUVotZ2dnR3hFVEl2Z0kyNl90enlOX2J4YUYxVXNpQlBMbDFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "aljazeera.com",
      "latestSinceUpdate": 2518
    },
    {
      "date": "Oct 01",
      "text": "Trump threatens 'Economic D-Day' for Iran and ‘tremendous’ consequences for its backers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxQbjdQcUlraHYyYTY1UG5sUDJpV1dwZnpzWWZObU5iZ3g2RW1HSzFwTWNhcE1NaUR3Q3pWT1pYQXZibW1wMS1oQ1dUSVhObUhwcHN4MTVDWTNKOXFneGItamNBeWptNENKNHRiYXFJV0VJY2taaXFyRnJSQy1pRFlDbUhHMFnSAYoBQVVfeXFMUF9NTjA0UzQxLWRzdHFabk5acVdjbklmdzlGSlowZ3h4QnVIdmdGQjFfYUZsbEZSV1Bia1hISjZGVEgyNWlWcVBzMkVOSzYtR05OaXlBM3oxVkRKR0pycFZDeUxXejZnbXQzbF82Rjhud3NHR3VGZUhmQnl3MlpibFNGcFc4LTFHei1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2518
    },
    {
      "date": "Oct 01",
      "text": "Investigation into US-Israeli strikes on Tehran neighbourhoods reveals devastating civilian harm.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2518
    },
    {
      "date": "Oct 01",
      "text": "Middle East Oil Exports Rebound as Iran’s Chokehold on Hormuz Breaks Down.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNbXZCOUR5RDZOTzRjOGhCVjJQRC1UR2I5SklaXzFSWW9WUzVDa2FZTTVoZ2xQakt1SXJCOThvckx5YnN0WWdYV0ZRWHA0YlB6ODFGdV9adng0ZHdjOC1PV3k5X05MYmE4VS15eW9RRkR6M3Y3TXhadmgyeU8tRnpONXBKQVB4TVBDb1RQQk5TQlZrQ1VfTUFMekFPNi03UkNkV2h2QTlsSmhPLVl4bVF2SHNQU0g2UzF4b19B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "WSJ",
      "latestSinceUpdate": 2518
    },
    {
      "date": "Oct 01",
      "text": "The Strait of Hormuz Is Open.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiYkFVX3lxTFB4X0tPcm1YNkdrbjdRZW5mZ2VSZ2hXdVVoOW5CNEVJTDBtOGcwRTdzR1F6STlxcHRDOHFhNXZTLTFQUjZRZG1FWjcxdmRCT1YzQU5WY1BHY056blA5eUdSTmV3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Free Press",
      "latestSinceUpdate": 2518
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
      "status": "unavailable"
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
      "perspective": "US/Trump Administration",
      "headline": "Trump's Hardline Stance on Iran Intensifies",
      "summary": "President Trump is signaling an aggressive posture towards Iran, threatening severe economic and potential military action, with a decision on Iran expected 'very soon'. This rhetoric suggests a move towards direct confrontation.",
      "tone": "defiant",
      "latestSinceUpdate": 2517
    },
    {
      "perspective": "Iran",
      "headline": "Iran Navigates US Threats Amidst Regional Shifts",
      "summary": "Iran is trading barbs with the US and slamming Trump's policies, particularly regarding the Strait of Hormuz and its nuclear program. Despite the tensions, Iran has received a US counterproposal for a ceasefire, indicating some diplomatic channels remain open.",
      "tone": "strained",
      "latestSinceUpdate": 2517
    },
    {
      "perspective": "Israel",
      "headline": "Israel Pursues Hezbollah Disarmament and Intelligence Operations",
      "summary": "Israel is actively targeting Hezbollah through intelligence operations, including assassinations, and is advocating for a US-led international force to disarm the group in Lebanon. This reflects a proactive approach to regional security threats.",
      "tone": "defiant",
      "latestSinceUpdate": 2517
    },
    {
      "perspective": "Regional Stability/Oil Markets",
      "headline": "Strait of Hormuz Open, Oil Exports Rebound",
      "summary": "Despite geopolitical tensions, the Strait of Hormuz remains open, leading to a rebound in Middle East oil exports. This suggests that current regional conflicts have not yet severely impacted critical energy transit routes.",
      "tone": "neutral",
      "latestSinceUpdate": 2517
    }
  ]
});

export default LATEST_SNAPSHOT;
