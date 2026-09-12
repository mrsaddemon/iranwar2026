export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2401,
  "lastUpdated": "2026-09-12",
  "lastSyncedAt": "2026-09-12T09:11:09.962Z",
  "warDay": 197,
  "summary": "The conflict continues with US-Israeli strikes on Tehran and Hezbollah targets, Iranian retaliation damaging US military aircraft in Jordan, and Saudi oil infrastructure facing new threats amid economic hardship in Iran.",
  "lastNarrativeUpdate": "2026-09-12",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect, with ongoing military engagements and retaliatory strikes reported."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.3,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 80,
    "oilDisruption": 70,
    "tradeImpact": 65,
    "sanctionsPressure": 63,
    "globalPressure": 79,
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
      "text": "Yemen government reports bombing a 'kill box' near Mocha.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxOeHcwZmxmZ3ZyWjNKUHJvWmtKM1ZwR29wRTBmZVVVWHhwZEdiWkZqYUhiOXBVTi1xVjN1NVVOYkxDMlloc1BHQmF6OVYzaEFwSXBETmYzajZLOE04XzZyaWlTdVpHTTM3QjkxbFFhbWdIMHJzZ1dRQThoNGhyMk1EaFdRVEt0S2pvcWMtV09PTGtRMXZCc1RxLU9QZmhTRlU4S25LSzZFbGUxOXFTekZ6LUdrSHVNenBNcjY40gHAAUFVX3lxTE5iMmRacEdXZTZHcGlZWXFHWXZUVFFYd3RfSGpPeFM0MWREN3djMVhYaldsLTBEbDdHa2tQY3VlYXFjRXRjS1V2OVo1VE0yTnNHUnBWTTMxUHlnVmZNZ0pocG5yUEVsUjNRNXNjNXV1UU1wa2RQUFVpNDJBRndiYjU3YVJ6aFI2bWp3aDI5UE9PZ3hiMDYwYy13OElmZzlRY0ZSd1VNSklhTkNpX1RDRmtMbWNlclpkZjNjNUZLWmhObA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2401
    },
    {
      "date": "Sep 11",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighbourhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2401
    },
    {
      "date": "Sep 11",
      "text": "Israel destroys a major underground Hezbollah base and razes a hilltop stronghold in South Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE5oYjE5VldLLW45VXA4WFN4OXdfaHl6QkhDZGpVX05ZcmJXRzZMRlo2V2RoLWxrRVNLM2pPZndFQ01UOFpSQ2lzWHI4STZDS3EyX2MtMWkyMWFlQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 2401
    },
    {
      "date": "Sep 11",
      "text": "Multiple U.S. military aircraft were damaged in Iranian strikes on a military base in Jordan.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxNbHFMdm1iMUYteWtiRFBvb2xqMldYbXhxajFtY213NGx2X0NoNEF0dHJiX3Mwa1Buel9JaXFZWTJ0VkFHOWczbkRiRTRhS3Bjbm5saHJRejRjWnBrQmlGMXZfLTViZm9XTlFaVk4ybUZTaVA2MkRiY1hZTFNjVTlJQldoNWlKNUU0dGhPY1YwZ19jTE1iREVNdGtRaFY2V05iZ3R3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2401
    },
    {
      "date": "Sep 11",
      "text": "Saudi Arabia shuts down a crucial pipeline bypassing Hormuz, with oil exports facing heightened threats.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2401
    },
    {
      "date": "Sep 11",
      "text": "Oil prices dive on signs of Hormuz diplomacy, despite Saudi Arabia's ongoing struggle against Houthis.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxORWNpWWYtTGpqeFowZmQ3SzJhNDZfVFo4VEdjTXJnYlgxbDl3UXYyVW44dnVka0podXJGU0RjeDVzTEk0YUdGQTlPemlqYXNiYTNzS0tqbUVySzBvYlpHeFJmLXF5emFoQXBldzdwOFRKeVFTVzFJVjRQejIxcW1mS2pHNDJVWVVrREVnVXJpWDRwYVl2eW5ua3huajZsWFdvc0JHLUxNVEFJUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fortune",
      "latestSinceUpdate": 2401
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
