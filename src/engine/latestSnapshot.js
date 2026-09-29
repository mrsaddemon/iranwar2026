export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2510,
  "lastUpdated": "2026-09-29",
  "lastSyncedAt": "2026-09-29T20:01:56.430Z",
  "warDay": 214,
  "summary": "Tensions remain high between the US and Iran, with Trump issuing economic threats and Iran proposing a ceasefire while also threatening Mideast infrastructure and being implicated in an attack on a nonmilitary vessel, even as Middle East oil exports rebound.",
  "lastNarrativeUpdate": "2026-09-29",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 7,
    "summary": "Iran's ceasefire proposal was rejected by the U.S., indicating no active de-escalation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 38,
    "oilDisruption": 65,
    "tradeImpact": 38,
    "sanctionsPressure": 49,
    "globalPressure": 52,
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
      "date": "Sep 29",
      "text": "Saudi crown prince and UAE VP meet amidst ongoing Iran war, while Iran claims the US is 'in a quagmire'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxOOGR3S3NmdVpaZUR1OGdBX0hBTU5TbTFDcDRVbThaY05EU1Q3Qk9Sa3AwNFlkT3RrU0ZZb19DYmlaZlFQa09DT3d1eGxuZFJnZVJpT1NSTkpVVy1pUEt4MmZVR1JqeWR0YWRLNUdfcFp2WjVMV1lMNVllaF9ELVF3bmhrUUhscEFwcDJVSE9feWtzYldxNGF2NGNEZUZVZm05Z0ZoamNsd2dZNVcxNWE4V0luaVZpd9IBuwFBVV95cUxPSUdtckw3eUdwd1UweVd6Tm1YWG55cXBIaTZrdVJtTWRKdmN3LWk5aGxtOTFtbFNQcVdfN3g2ekVUR0NGVHNXRXFQYjJrbjNiNUNwVUREUWp1M1laYkZQMng0SzJIcmN1RnR1bVpXU3FBbnRaaWxsQllnNmV1ZU1nMG1QT0RFR1JnUDZoaFpoc2VsbTFfMGpjUVotZ2dnR3hFVEl2Z0kyNl90enlOX2J4YUYxVXNpQlBMbDFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2510
    },
    {
      "date": "Sep 29",
      "text": "US refutes Iran's claim of seizing an 'advanced' drone in Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxPQjdfZnJBZTZaWGl2aVo5eXpTQ1Q0TnJJUGRrdDQ4cUROVl9rXzU5Wm94ZExVUVByVFprYURNYlBMamVfZVJUT0dEcjFXa0I5Q1pIWTZNQUEwMTZ0UE9LWWVNazNyZnBvZ3dZdnVQNEpNamJKTmRKNW9BWW9FZjNpV3h6dmhRRVVocjJXT2I1RDVnN2dBWTRiVUV0aXA5akNqUlgwYWRfdVBBWXZ3TlpKSHB5SHNIWl9zTjA1aFpFUGtYd9IBxwFBVV95cUxPS0ZYZE0xUmhJVnNZOEpfZFN0QjFITVh3Y29VSUNta3ZFVzZSY1Ezd3hrODY4TWJFOFBKek9rTjlKa2lQVGk0WGpHVThKV1FyWFFUX21FTWRNOFNkZDQ0Nkk2cTNUa2Mwakl4dHFhVG1RRlBZa0FLRU53czZlRkJhbXVlS2hyMGZfdm9reXJRUlk4SksyaUhydFc1SnpQOUk4dzFqbGZJUjZBeGtuNUQxNmpocVdfSlFQTE42dTgxcXJmOFZfaW80?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2510
    },
    {
      "date": "Sep 29",
      "text": "Trump threatens an 'Economic D-Day' for Iran and 'tremendous' consequences for its backers.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxQbjdQcUlraHYyYTY1UG5sUDJpV1dwZnpzWWZObU5iZ3g2RW1HSzFwTWNhcE1NaUR3Q3pWT1pYQXZibW1wMS1oQ1dUSVhObUhwcHN4MTVDWTNKOXFneGItamNBeWptNENKNHRiYXFJV0VJY2taaXFyRnJSQy1pRFlDbUhHMFnSAYoBQVVfeXFMUF9NTjA0UzQxLWRzdHFabk5acVdjbklmdzlGSlowZ3h4QnVIdmdGQjFfYUZsbEZSV1Bia1hISjZGVEgyNWlWcVBzMkVOSzYtR05OaXlBM3oxVkRKR0pycFZDeUxXejZnbXQzbF82Rjhud3NHR3VGZUhmQnl3MlpibFNGcFc4LTFHei1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2510
    },
    {
      "date": "Sep 29",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighbourhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2510
    },
    {
      "date": "Sep 29",
      "text": "Iran threatens to attack Mideast infrastructure after Trump dismisses its Hormuz proposal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxPRDZzYllxU3U0bnRaMnNoODhDNmRpOXI1em5yNnE5V3ZmTkJKZFFwdmZqNlNQZE5JQXNQRTJWMVNYdGd6UU4tZnBWd0VjdFZmLUVBVTY3RzJUT3FhMHp2U0lWbDY2NUtPMnpNd0k3TEhUUEg0X2ZhMXVLeHp0S0ZiY2JCcGtnaEZwTWNaWTcxa01DTVZSVnhqRE9ESzRJQ1pab09NRGtsU0dURWctVXNqLXBmMUVQdknSAbwBQVVfeXFMUEN6X1R1clNCTlNIMXpUR0xmLW5IenFESmJqZ2YyalF2c25ReWd5WW1ibjd6M0dnY3I5Nk56TnZPNTczdjl4Y3dlQ3h0ZmRfenRuc1JDeE5zc0ZvTUVrME41ckVTR2d5RmFBNV9aOTFEeUZuMDloWEY2VzJsQjNsMXBJMnlKLVNzbzRnUzJjM2pfS0xIUTNRM2VxWGdfSkEyejNFOW1OUjlWUHZLeVN5aVp2WEN0TVBwMEoxblM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2510
    },
    {
      "date": "Sep 29",
      "text": "Middle East oil exports rebound as Iran's chokehold on the Strait of Hormuz breaks down.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2510
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
