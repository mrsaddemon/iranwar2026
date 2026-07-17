export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1333,
  "lastUpdated": "2026-07-17",
  "lastSyncedAt": "2026-07-17T06:30:24.891Z",
  "warDay": 140,
  "summary": "The United States has initiated a new war against Iran, conducting a sixth consecutive day of strikes that have expanded to include civilian infrastructure, while regional nations fend off fresh attacks and efforts are underway to secure oil transit routes.",
  "lastNarrativeUpdate": "2026-07-17",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No ceasefire is active; military operations are ongoing and expanding."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Jul 13",
      "text": "Trump notifies Congress of new war against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxQUU9ieHhBZnpPM195b0pyRmt5amMtOURxWmtDRzZmVnBLMWhmXzNJTWotZkhpckc3YzNfSGZuZUtNV1luSEZNdnJ2SGYyS2RuM2Qzdk5tWFBZM1BPUjdOcEFrSjhDcmFlZWcwbXZfaGx5WG5Zd0xSTlJYcWxOSV9FU1FqUDZmVjE4UU0xdjluN3VMQ1FZT2hjMEoxTVkyZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Politico",
      "latestSinceUpdate": 1332
    },
    {
      "date": "Jul 17",
      "text": "US launches sixth consecutive day of strikes against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxOU0UzM1RqVEZOZDY5Z3RMcDN4UEpaejlVUnBZOW51azFzWmNaZEVtTHJSdThpTnYwbmlzRjd2Sno0SjZKdHFyYU5JZmJyMzFoeWZLZTVGVUsydVJFZ0MxVGlMVVY0NlpVaW5TMENxSGdTZ2NLYlZtZUdXTVZYVU1zQkZuNkFLNnFFQjVGbUpOUDZremQ1SHg1UTZVclpWSVQxa2ZpNDJ1N0dnVXFMX0NqT0JvaUhGMkFoc1dv0gHAAUFVX3lxTFB1U0ZRVHh2cWdJMmN4MGlmakxadUctVXhxNFZpR05SZGtYNEhyakRKT0NYTXBhSDhmYnpZYzhscS1lRy0wTWVmR3pJenZtQXB3VkNZM0szaWxoYlY4dkwxTXJhVEpHdFdiV2dqcFVEQ3NUNWlkclZjTU5hNExJZzM4VmhFTDlMVDNJV2RySk53dlVEVmZFak1VdTYwWV9aaEFILThmdHRxc3phV1ZuZmxGUTdsQ2hOeFZZbmJGMzNqSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1333
    },
    {
      "date": "Jul 17",
      "text": "US expands Iran strikes, hitting airport, bridges and communications tower.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTFB0V2lEMjl3REM1d2VhZEEyMmZyRG9LMHZOSk8wUXotakwyRDkzVkphQjBvRVF2M0NtX1pfNmZLSXF6OGpkakFnRTJ6N3VjTy1DcFdKQ1Jn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Ynetnews",
      "latestSinceUpdate": 1333
    },
    {
      "date": "Jul 17",
      "text": "US military carries out another wave of strikes, including on civilian infrastructure in the south.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxQWVlTLXZEcHJQTnhTMThIRmVQUGlPRk5vT1hNMmstLXNYXzZNWnlLUDJGQWJtUmI0cnlHLWFLZE1yMVctdW5RV0dSVmlWbVlvZFdSeTZrMG1ldmJvczFzUHRfbDlycEJWQ3M0SXlfNWtYZGZveEgzVzMxaVAxcXNxRXRRelpTelY1aXRyTUlHNlZGZk9qNnpNYVd1ZE9JY2RRMVo1eUd1ekliam_SAbABQVVfeXFMUHhaSU1rXzMyNHB2ZTJCbmR6REE5bUJXWDdWMzh6bHhHWnhlbGdlQ2JvVlFJTkVNamxheEU0TmNPR3gyT2syQ3prR0pBQkQ4eUVLcUVRd2x3RU9hb01UbTR6UGo3U3lnNTUxamNnTVRlbzcxaDh5cXBKUi1HUzRETzVjeFRfWGt2cE9RbzRRNndLYUw3VXBGeHVXZFJRLW1GMXNoSUFEQmxGSlRlLUtnRUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1333
    },
    {
      "date": "Jul 17",
      "text": "Gulf nations fend off fresh attacks amidst ongoing conflict.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1RWk1Qa1dMb0Y3cjlkWWtFUFpPQzhEMnk4N0lFRmswd2t1R1F0Yi1oS1Z6TUJFQ0xpRzZPcGd3Yi1ndU5YYlk3ZjRJYkJxRVkxdmlPU2RxY052ekFOWWc5NDd3LTJLMmx5MkdmZ293?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1333
    },
    {
      "date": "Jul 17",
      "text": "Chevron explores a pipeline bypassing the Strait of Hormuz with Iraq and Syria.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxPSW1PQk53QzVRbW4xa29CNWRsbGtCSmpCS2pRR3N6dmJoMnNXbjdBRDhwMFN6UVZpM2MxSm5zakZaVkxRQjhIWWMxaDBIOWxjM0w5Y3BRUHBLWFJSNUp3elFoMWRTdXBvaElxamdwQlJVTS1BVzJUYjN3ek5DUjNFTmYtalc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Financial Times",
      "latestSinceUpdate": 1333
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
      "perspective": "US Strategic Interests",
      "headline": "Protecting Hormuz, Expanding Strikes",
      "summary": "The US states its ongoing strikes are defensive measures aimed at protecting vessels in the Strait of Hormuz, despite expanding its campaign against Iranian targets. This reflects a strategy to secure vital shipping lanes and deter Iranian actions.",
      "tone": "defiant",
      "latestSinceUpdate": 1331
    },
    {
      "perspective": "Iranian Response",
      "headline": "Countering Aggression, Claiming Targets",
      "summary": "Iran asserts its right to respond to US aggression, claiming successful counter-strikes against US assets in the region, such as the Fifth Fleet in Bahrain. This narrative emphasizes Iran's capability and resolve to retaliate.",
      "tone": "defiant",
      "latestSinceUpdate": 1331
    },
    {
      "perspective": "Global Energy Security",
      "headline": "Bypassing Chokepoints Amid Conflict",
      "summary": "Major oil companies are actively exploring alternative pipeline routes to bypass the Strait of Hormuz, signaling significant concerns over supply chain stability amidst the escalating conflict. This highlights the economic impact and efforts to mitigate disruption.",
      "tone": "anxious",
      "latestSinceUpdate": 1331
    },
    {
      "perspective": "Regional Stability",
      "headline": "Containing Proxy Conflicts",
      "summary": "Regional actors like Syria are working to interdict arms shipments to non-state actors such as Hezbollah, indicating efforts to prevent wider destabilization. This suggests a complex interplay of state and non-state actors in the broader conflict zone.",
      "tone": "strained",
      "latestSinceUpdate": 1331
    }
  ]
});

export default LATEST_SNAPSHOT;
