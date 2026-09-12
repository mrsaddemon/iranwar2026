export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2403,
  "lastUpdated": "2026-09-12",
  "lastSyncedAt": "2026-09-12T16:11:10.722Z",
  "warDay": 197,
  "summary": "Active conflict continues between Iran, Israel, and the US, marked by mutual strikes, civilian casualties, and regional spillover, while Saudi oil infrastructure faces threats and diplomatic talks are delayed.",
  "lastNarrativeUpdate": "2026-09-12",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect, with ongoing military engagements and delayed diplomatic talks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 50,
    "escalationLevel": 90,
    "oilDisruption": 80,
    "tradeImpact": 74,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Sep 11",
      "text": "Iran launches missile and drone attacks across the Gulf, while Israel strikes Tehran infrastructure.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxQYmFtdmtoamYyU2taWm5uSUp0LWxRR3p3bGszYjhPT0tnNmoweWI3eWtjcnlmRzRqTmtJdWRYTU55Ym5zY0xkTVJOdlRSUVduWjVSSGRndlJwSThXSU9qOW50ejUxWTNjRUZPbkpxZHZBd1RoVUV0V2gtSmZycEZTeFlfejZfOEtNbjYxUF9VYnpHTURxZ3E2dkU3Z1FQOUtpZFM2MVdRdnNGc25RajFhdzlnQlZzbVh4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "News On AIR",
      "latestSinceUpdate": 2403
    },
    {
      "date": "Sep 11",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighborhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2403
    },
    {
      "date": "Sep 11",
      "text": "Iran damages U.S. jets in strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxQUVJuX1liNlV4OVBFUUZrMUQ4QWNZV0R3enp2b0pzN0gwVVVKeW9xUmdKejFueWVCM3Z3RXI2TldvbVYzWXNPRlRNNmFSd3ZxVERxem0wX3R6YjFwcERxa1ZjUDhKbU93RGFPVG5rU3dqUVZkS2dlQU1qcmhsM21HY29Ea1MxdmNDYWVFZThvcGx0M0ZuUUFGdVl4Qmd4QUpaLWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2403
    },
    {
      "date": "Sep 11",
      "text": "Israel reports destroying major underground Hezbollah base and another base in Lebanon’s Ali al-Taher ridge.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxPQk5ZOVU0SzFyUG9JOWRfekk1ZDIyUW51VVZBNDZpUEhtM0F1RG92TkpwcEUyQlZwbjdIQ2F3bk9sU3BPSmxLQWdyXzVCbW1HekczSFZGMlVtSXgweGhNR1RaVDIzcnNTSno0X20xU1pVU2luUjU0UVRRYTVDcGE0RmJQLUQ1MExzN3A4MzFaaHlTZ1VJVjFkQ0pRMEVJNGp4Q0JrSmZTTm5OMjRRZlRDeNIBtgFBVV95cUxNNk1vOVZ3UjJvazBwbWl4eW8zUnhIV2NtTFBaTTVoQWVsb1dFRFptZTBVNXppamVZVXlsYndmcFRFNC0zTWRDUHdkY21iOERzV1JlMWZ1dnhlNE84eUc2aTVwR3p5c1dMdW8wSGhLaUloVlVXQ1RjdU1FMDhOTDJ2WDBqUVA4OHU4bkxJSjQzM3lrTnYtRzA4bW5ydUowQlpqZ1FhZ3ZFUmpJczJUd2tYZUZDSlNIdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2403
    },
    {
      "date": "Sep 11",
      "text": "Saudi Arabia shuts down a crucial Hormuz bypass pipeline, with oil exports facing heightened threats after attacks.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2403
    },
    {
      "date": "Sep 11",
      "text": "Upcoming Israel-Lebanon talks are delayed from next week until October amidst explosions in southern Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxOTUtTLWZtTEY1YU1qVnpOMG9MVkFQTlJBakY3eEtzN2xyeFo0Vk83UUJqLXNxdkZ2U3lVNThPWXBxeE15c2d3Ukp0N3g4MUJSMEp4eXZQaVhZOF96a1dCS21LNXVOS056aEwyQmFoNGd3ZmtjYnBhRkhwbWZ0dlYwM29nY2Rza1lUb0xuNmd3UHZaRV9OaDNxM0FrMFZsbVdNSk5JbElGQkhJdUJjXzQ3bUduUXhrMlNRbFHSAb8BQVVfeXFMUEpFYXVjeTByaVlYWW4yYWpwQ1NxNTd3NGttMmhvdFZLd3k5YmFadjh5NlVKT2E5LUtJdUZ6Q2xnT1Y1Y2xEQTRYdzYyTnZDeVhCd0VSa09RSUJETGpIcnpkdFVxblVESXZ2WXR6Q05pejhneFAwdG9rUlB6eGo0czlLZzVIX09iSDVaNVJCU1dxZDNHd2plUzJYVlZmNDg2aElZQTBlZEpjUGdySWtEZzhiSm9neGNoeG1OS3pUdGM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2403
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
      "perspective": "US Political",
      "headline": "Trump Predicts Immediate End to Iran War Post-Midterms",
      "summary": "Former President Trump states that the war with Iran will conclude immediately after the upcoming midterms. This suggests a potential shift in US policy or strategy depending on election outcomes.",
      "tone": "skeptical",
      "latestSinceUpdate": 2399
    },
    {
      "perspective": "Iranian Internal",
      "headline": "Iranians Face Job Losses and Economic Hardship Amid War and Sanctions",
      "summary": "Reports indicate that many Iranians are struggling with job losses and economic difficulties due to ongoing war and international sanctions. This highlights the internal societal impact of the prolonged conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 2399
    },
    {
      "perspective": "Israeli Security",
      "headline": "Israel Expands Lebanon Operations, Secures Buffer Zone Against Hezbollah",
      "summary": "Israel has destroyed major Hezbollah strongholds and secured a buffer zone in South Lebanon, signaling an intent to expand military activity. This aims to enhance border security and counter Hezbollah threats.",
      "tone": "defiant",
      "latestSinceUpdate": 2399
    },
    {
      "perspective": "International Concern",
      "headline": "Civilian Harm Reported from US-Israeli Strikes on Tehran",
      "summary": "Investigations are underway into US-Israeli strikes on Tehran neighborhoods, with reports revealing devastating civilian harm. This raises international concerns about the conduct and consequences of military operations.",
      "tone": "strained",
      "latestSinceUpdate": 2399
    }
  ]
});

export default LATEST_SNAPSHOT;
