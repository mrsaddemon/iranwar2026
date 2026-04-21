export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 285,
  "lastUpdated": "2026-04-21",
  "lastSyncedAt": "2026-04-21T10:54:41.624Z",
  "warDay": 53,
  "summary": "The US and Iran send mixed signals regarding potential talks amidst an ongoing Strait of Hormuz blockade and the seizure of an Iranian vessel, while an Israel-Lebanon ceasefire remains fragile.",
  "lastNarrativeUpdate": "2026-04-21",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 5,
    "summary": "A ceasefire between Israel and Hezbollah in Lebanon is in effect but faces challenges that could lead to its collapse."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Apr 21",
      "text": "Tehran and Trump send mixed signals ahead of potential talks, with Trump suggesting a deal could come 'quickly' while an Iranian minister states 'no intention of negotiating for now'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOVkNadmNhVzZkY0xlbkRJc2xsSzRkOTZhbURYY3RlYkxleDhGaG9JY2s3VWs2RmVncTlvR1NEVk8wOWlIRHlMTEdGenNDa0R1c2lwcloyNUxIcW00V0haXzN0SVhaMllyOFpONlg0VjhSdnNKdjFiOUhEd0p6dzBTTG5sOXBmaHJ3dWlJNEsyWVd1NFFxeFdNUlpPWDJGUFJLQ2lkSUl2NW92eEh6V0g2aUt4QWtMd0NCSFlGQ9IBwgFBVV95cUxPWWdSVUh0NG50dld4R05nMXllRUpXQU53dFhWbVBaZ0RiRUxzYW42N2U1TjI2ai1VU3N5WW11VGNKWTE1a2gxZmJadm1ZVzRoNVl5SnpLVTUzd1hGaGYzTW5KT3NQMGJpRFYtM2hUR0RoRS05SGhOd1I1ajVHbzA1cG0xaUtaT2t3Rlctam9hUDRSVzlWRVV2dUhoQkIzLXY5S3pwbUFmMFRTLU8yVlZXWTJaZmRJOE16ZE9PVWhEdXJ3QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 285
    },
    {
      "date": "Apr 21",
      "text": "Iran demands the immediate release of a seized vessel as a ceasefire deadline looms.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE95ZnBiaFI0cUlMMDFKblpMdWYzMUNFUi1ONzNtZG9wSTFVUW53b3h1UDY1LXdsMml3YXI4UENwWG5kLUZnazF3ZVdxYlctaVZfRlZTZGRGalFIbnZodDNQaUQ2dlVpWW16cUZHeEFzUGdqeWNyM180THo1bw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 285
    },
    {
      "date": "Apr 21",
      "text": "Donald Trump states the US will not lift the Hormuz blockade until a deal is made with Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE5Vcl9oZkVjY3ZUS0dyam40SjA5T3Z1UzdSeW9pLW9hdUF1ai1IeDJwelk0S1JLazB3RlowT3NZYTc1dHFUMkxWMjJBQkNrT0V1Y2VWd2R5X3F5QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 285
    },
    {
      "date": "Apr 21",
      "text": "US military releases video of marines seizing the Iranian-flagged ship 'The Touska', which was under sanctions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxPRlNMbVFFLVV6RkJMMDRGU1ZpWERFZFZhVzg2M0ttTzlILXBrOHVvLTlNdWdMS0tLNWNKU2JjYkcwLUsxYzE0eDVpeWJxa0JvYkpGenFmY0I0WmYwdXlBQWNoZTJRM1ptY1prVTJ5MWkwQ0lCOWY4cVUzOXRSMTZjeEJyX2ZaY1hNQkc3ZGRrcTlaSVNvUjFiQUZVVDQtVV9WeWFlaWE0bnUybWg5VkHSAbMBQVVfeXFMUDV2OUpvSTBTSE9ZOVZVc3JlRFpnOXhQc21tSGFZWXVhdlhKT0l4V1dFMzZjdjhsQ01tS0ZRYklzbmsxaVpNQ2NzbGlrd1U2bTRTdjBxRy0zQkM4WTJxNWxHTnJqZEh6aXlGekcwVWtUVEs4U3I0LXF1R09ManNWNjV1OWYzSVp6eFBJZGZXa1RSOVpxQ3plOVRUTEVzVWlBYTF0WFpJbXJ4YV9HbzlQTlJ6Mk0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 285
    },
    {
      "date": "Apr 21",
      "text": "Over 100 international law experts warn that US strikes on Iran violate the UN Charter and may constitute war crimes.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 285
    },
    {
      "date": "Apr 21",
      "text": "China's Xi calls for the Strait of Hormuz to reopen as China balances its Gulf interests.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 285
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
      "perspective": "US/Israel Stance",
      "headline": "US Enforces Maritime Order, Israel Prepares for Escalation",
      "summary": "The US asserts its right to enforce maritime order, seizing an Iranian vessel and claiming war goals are nearly met. Israel is reportedly ready to strike Iranian energy facilities if broader regional truces fail, indicating a readiness for further military action.",
      "tone": "defiant",
      "latestSinceUpdate": 264
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran Vows Response, Rejects Talks Amid Hardliner Shift",
      "summary": "Iran has vowed a swift response to the US vessel seizure and has rejected peace talks, with hardliners reportedly gaining influence in Tehran. The Strait of Hormuz has seen reversals on opening, signaling a hardened stance against US actions.",
      "tone": "defiant",
      "latestSinceUpdate": 264
    },
    {
      "perspective": "Regional Stability",
      "headline": "Strait of Hormuz Disruptions Fuel Oil Price Jumps",
      "summary": "The ongoing US blockade and Iranian actions in the Strait of Hormuz are causing significant disruptions to commercial shipping and have led to a jump in global oil prices. While a fragile truce holds in Lebanon, the broader region remains highly volatile.",
      "tone": "anxious",
      "latestSinceUpdate": 264
    }
  ]
});

export default LATEST_SNAPSHOT;
