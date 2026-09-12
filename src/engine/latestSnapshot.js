export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2399,
  "lastUpdated": "2026-09-12",
  "lastSyncedAt": "2026-09-12T00:33:11.295Z",
  "warDay": 197,
  "summary": "The conflict in the Middle East continues with US-Israeli strikes on Tehran, Iranian attacks damaging US military aircraft in Jordan, escalating Israeli operations against Hezbollah in Lebanon, and significant oil infrastructure disruption in Saudi Arabia.",
  "lastNarrativeUpdate": "2026-09-12",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or de-escalation efforts are reported."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
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
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Sep 09",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighbourhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2399
    },
    {
      "date": "Sep 09",
      "text": "Iran damages multiple U.S. military aircraft at a base in Jordan.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi4AFBVV95cUxOQmVUMGNYc0owU2U5RHR5XzVIY2dRQ3lPTF9qVHk5a3dDTG8wRnFnSnlKbENBcHdZdk9yRWxoVjBjR1hud3ZCazUyRTE1MThXMlhCNFEycHdIeHpTeFhhQlB0cWFCU19ZdnduOXFwWDktWkhfMHNvRmZyY29UOXpreVcza1FEVnQ2N2Zsc2hOUXpqaWFtWTRlOVJVVEFOZmRrT3ZOcThwZEozVmRYSzBLMTZDOXhDMmZMOTJIWnpKXzhTajhCMHNDZDA2V21kMXdZeHdsMFNubEZmWkRxbnNkbA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Military Times",
      "latestSinceUpdate": 2399
    },
    {
      "date": "Sep 09",
      "text": "Israel destroys major underground Hezbollah bases and secures a buffer zone in South Lebanon, preparing to expand activity.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2399
    },
    {
      "date": "Sep 09",
      "text": "Saudi Arabia shuts down a crucial oil pipeline bypassing Hormuz after attacks, following seizure of key ports by Iranian proxies.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2399
    },
    {
      "date": "Sep 09",
      "text": "Yemen government reports bombing a 'kill box' near Mocha.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxOeHcwZmxmZ3ZyWjNKUHJvWmtKM1ZwR29wRTBmZVVVWHhwZEdiWkZqYUhiOXBVTi1xVjN1NVVOYkxDMlloc1BHQmF6OVYzaEFwSXBETmYzajZLOE04XzZyaWlTdVpHTTM3QjkxbFFhbWdIMHJzZ1dRQThoNGhyMk1EaFdRVEt0S2pvcWMtV09PTGtRMXZCc1RxLU9QZmhTRlU4S25LSzZFbGUxOXFTekZ6LUdrSHVNenBNcjY40gHAAUFVX3lxTE5iMmRacEdXZTZHcGlZWXFHWXZUVFFYd3RfSGpPeFM0MWREN3djMVhYaldsLTBEbDdHa2tQY3VlYXFjRXRjS1V2OVo1VE0yTnNHUnBWTTMxUHlnVmZNZ0pocG5yUEVsUjNRNXNjNXV1UU1wa2RQUFVpNDJBRndiYjU3YVJ6aFI2bWp3aDI5UE9PZ3hiMDYwYy13OElmZzlRY0ZSd1VNSklhTkNpX1RDRmtMbWNlclpkZjNjNUZLWmhObA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2399
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
