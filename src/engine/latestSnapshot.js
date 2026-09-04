export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2345,
  "lastUpdated": "2026-09-04",
  "lastSyncedAt": "2026-09-04T19:24:40.440Z",
  "warDay": 189,
  "summary": "The US and Iran are engaged in strikes and retaliatory actions, raising fears of a renewed war in the Middle East, while Israel has cleared Hezbollah tunnels and released Lebanese prisoners.",
  "lastNarrativeUpdate": "2026-09-04",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect between the primary belligerents, though Israel has made a prisoner exchange with Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.7
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
    "nuclearIndex": 25,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 64,
    "globalPressure": 82,
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
      "date": "Sep 01",
      "text": "US-Iran strikes escalate, with Iran retaliating against Gulf neighbors after a US strike reportedly hit a wedding party.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxOSTQ5RWEwemszN1g0ZGdybDJrd0d4MW9sTk43M05welQ3WGZmeWgycERkU0NFck5vMDc4eXBjbmdQSzc0OTNodV9tMXhpTFg1WF9SR2JXOXp3aEVGVjBHSUlwVFR5QWpVdnJodmNfV1FmdEZBeDlhUHNJZVZPeHliVlBQU3hZTXJhNGgzNGZoNURLUWtqOW53OUF2TTJpSEpsNGVBTDVyOUI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 2345
    },
    {
      "date": "Sep 03",
      "text": "Iran attacks Kuwait with missiles and drones following recent US strikes, further escalating regional tensions.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxNN3JKaGh4eWVCeWFMcUVYaEUzUUhrMG05Q3gtREsydnc2ajZoY2Z2LXkwSWFCZmlTMVZWaUVRV3FxeUJkREN5bGR0QzRFb25jMVdWMXBnMkVqODYzdzQtRTBXT0s0S0tPMUxkc3hDZWVSN3JJdTROejZ1b0NHUHB5WE1LcXVrZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 2345
    },
    {
      "date": "Sep 04",
      "text": "The US military is reviewing the deadly strike on an Iranian wedding, while a US senator expresses skepticism about the incident.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxNaFQ5ZDlJdzMyWUlPQnhGQnBBclQtTTV4MS1BSzJTdVBHcks3SWp1cTNvR19YTEs2Z0dZNkIxbElVNmhFNndSRUUzUUU4ZmVGOUtpNDE0Qy0ycF9falVsNDJ3cE5MUVZaSmJIb1JYc2tjbFY0SGJpQThRbmlUWXFRaGNuajY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 2345
    },
    {
      "date": "Sep 04",
      "text": "The U.S. 'Economic Outcast' operation gains momentum as the EU joins sanctions against Iran, with South Korea weighing military backing.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxQX2J4YmRsQjhNWG93RGdSR0dsUlBxeDZNWkNteDhGSVJQenpxTWlVemUtVFdVNzk4RTBJa2lpaFhRdnk5QlNBUlByN3c1N1pYam9yTE83cHJhX1k1cFVNVUdpWlFiVHliQmd3Nzl4cUVlaGxMTzJjcVd6TC1DUHp5blZMRGEwdDZEbkVYa2JNc05rNVRsam1ZTGg5VVlkd0tGNlFMTmVQdDJxOGvSAbABQVVfeXFMUFF4OWRySnJuRWh1aTRFZ09OQlY3R2k5UzNuRGhjcWQwODZYWnctS0FlRzlIaVVMQVU5dHQwQk94c2prVTF2UXM0ZHhPRkdkanhkV0c1Sy1pZUtZdWRTVXBqYmpPMC1LQ0t2T1pRLWpHZmRQYmJackJyS0tHbTB6bHZCS1JUZWZ5T09uQV8zWl9acmxIaXA4RHNYYmJrcHVpX2lBT3VPVFVNNHpvQlVFUV8?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2345
    },
    {
      "date": "Sep 04",
      "text": "Israel clears Hezbollah fighters from tunnels under a key Lebanon ridge and releases four more Lebanese prisoners in a deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiywFBVV95cUxQUDdsZzhvakd2emFpVk5wYkczLURIaUJBZUhKNDlsRjdRcGoxMWdqbWpsdXFNTWZDVk5FUS1nMXNxc0RwMktpbGNTb1RXSHRrYS1oU3BVZGNVMG13dThUQ0E0Ym9KVzVHc1VXRzZTc1RmeHhqR1c2WDBVTXptQXJfQjF2NnZuMjRQZ1JXRzU1dUl6WVQwQlpkYWpsSFZsdjY2SVFPWVJMRC1qVjNuUU0yUjVpRWFXV1NqZllXY19ianRINkpYT0VGN0U3dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2345
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
      "perspective": "US Administration",
      "headline": "US asserts military dominance, downplays conflict duration",
      "summary": "The Trump administration emphasizes the effectiveness of US military strikes against Iran, stating that renewed fighting will not last long and questioning claims of civilian casualties. Officials highlight successful operations in protecting oil transit through the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 2340
    },
    {
      "perspective": "Iranian Response",
      "headline": "Iran retaliates against US, warns Israel",
      "summary": "Iran asserts its right to retaliate against US strikes, firing missiles and drones at Gulf neighbors in response to perceived aggression. Tehran also issues warnings to the US against any potential Israeli attacks on Hezbollah-held areas in Lebanon.",
      "tone": "defiant",
      "latestSinceUpdate": 2340
    },
    {
      "perspective": "Regional/Global Concern",
      "headline": "Fears of wider Middle East war and oil disruption grow",
      "summary": "International observers express significant anxiety over the renewed US-Iran conflict, fearing a wider war across the Middle East. Concerns are particularly high regarding the Strait of Hormuz, prompting Asian nations to consider storing oil closer to home.",
      "tone": "anxious",
      "latestSinceUpdate": 2340
    },
    {
      "perspective": "Israeli Stance",
      "headline": "Israel warns Iran while releasing Lebanese prisoners",
      "summary": "Israel issues stern warnings to Iran regarding potential attacks, specifically threatening strikes on energy infrastructure. Concurrently, Israel has begun releasing Lebanese prisoners, a rare move signaling mixed signals in regional diplomatic efforts.",
      "tone": "strained",
      "latestSinceUpdate": 2340
    }
  ]
});

export default LATEST_SNAPSHOT;
