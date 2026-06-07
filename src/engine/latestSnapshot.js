export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 908,
  "lastUpdated": "2026-06-07",
  "lastSyncedAt": "2026-06-07T23:49:08.810Z",
  "warDay": 100,
  "summary": "The fragile April ceasefire has collapsed following direct missile exchanges between Iran and Israel, mutual strikes involving the US, and escalating conflict in Lebanon, leading to significant global economic impact.",
  "lastNarrativeUpdate": "2026-06-07",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "The April ceasefire has collapsed following direct missile attacks by Iran on Israel and retaliatory strikes, alongside US-Iran exchanges in the Gulf."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Jun 06",
      "text": "US and Iran exchange strikes in the Gulf, further straining the ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9NcGpqajQxUkRMcHZWNWNOb2dWS0FRRHIzUEo4RlRub0RKRmtHbV9wMWZjbjVacmRVd1BmeW5CUTg5aEw0ZHpoeGJPRnpKeDJQZjBueFRPNDZUUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 908
    },
    {
      "date": "Jun 06",
      "text": "Iran launches missile barrages towards Israel for the first time since the April ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE0xV3g2OWxXcVhxUjZOZUpZVThPSXNkbW1lcjdqaU5KRkctWHBwRTNOSWp1dy1zSE8xNHpUU1ZpRGVKMm5qVTBJMEx2Znp3d1pUaGcwVg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 908
    },
    {
      "date": "Jun 06",
      "text": "Israel bombs Beirut outskirts as fighting with Hezbollah escalates.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 907
    },
    {
      "date": "Jun 06",
      "text": "Iran retaliates after Israel's strike in Beirut, accusing the U.S. of violating the ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPelJMTjAxUFhxdHBqeU9KN3lhbkFhM182azlzVHpGTDZXaGkyaDFNT0Vzc2ZBT1BJTnpiTm9XalZjOVhaWGN6YjJjXzBBZ2lrQW52bFhZZmw4OHFSYWVRcUpwenVEckFlSkY5NGx1bFM2dDVuUUlPQ1M1UTgtX094dlhHOUs1bVU3NlFBRmFuLThRN0dtUE9yWg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 908
    },
    {
      "date": "Jun 06",
      "text": "Iran launches missiles and drones towards the Strait of Hormuz, according to the U.S. military.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxNMnhrZmU1dEJXQzRJQWFaelI4LVZlUE01ZERhS3VKUzhsRXNEa3N1elZRc3VTRXlnclJvNTNyM1FUOFpLdjUxNmplY0xub29CUzRmZFQ1ZThsT0hsT29IcU96TjlJeVk2Y2s3eHUtN0FVekRhRnhuVG0xMTBTSC1sal9JVkVGalY4UTFvOS12UXppY1RJdHVHaUFpOEJOenJiV1RZdmp1aVpqS2xVOElPYWh2VHJuZ3M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 908
    },
    {
      "date": "Jun 06",
      "text": "The U.S. provides 'naval overwatch' in the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 908
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "headline": "US Lacks Will, Iran Warns of Wider War",
      "summary": "Iran asserts the US lacks the will for regional stability following recent clashes and accuses the US of violating a ceasefire. Tehran warns that the ongoing conflict could escalate into a wider war.",
      "tone": "defiant",
      "latestSinceUpdate": 896
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Rejects Truce, Finds New Purpose",
      "summary": "Hezbollah has rejected a US-backed ceasefire deal between Lebanon and Israel. The group states that the ongoing Israeli offensive in Lebanon has provided it with renewed purpose.",
      "tone": "defiant",
      "latestSinceUpdate": 896
    },
    {
      "perspective": "United States",
      "headline": "US Secures Hormuz, Seeks Regional Stability",
      "summary": "The US military is providing naval overwatch in the Strait of Hormuz, having intercepted Iranian drones targeting shipping. The US also plans to use Iranian assets for rebuilding in Gulf states, signaling a complex approach to regional stability.",
      "tone": "neutral",
      "latestSinceUpdate": 896
    },
    {
      "perspective": "Lebanon",
      "headline": "Lebanese President Criticizes Iran",
      "summary": "Lebanon's president has publicly criticized Iran amidst ongoing Israeli attacks on Lebanese territory. This indicates growing internal pressure and potential shifts in regional alliances.",
      "tone": "strained",
      "latestSinceUpdate": 896
    }
  ]
});

export default LATEST_SNAPSHOT;
