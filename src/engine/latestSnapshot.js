export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1334,
  "lastUpdated": "2026-07-17",
  "lastSyncedAt": "2026-07-17T08:38:03.938Z",
  "warDay": 140,
  "summary": "The United States is conducting its sixth consecutive day of airstrikes against Iran, targeting infrastructure and resuming a blockade after attacks in the Strait of Hormuz, while regional tensions persist with Qatar and Kuwait fending off attacks and efforts to bypass the Strait for oil exports.",
  "lastNarrativeUpdate": "2026-07-17",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No active ceasefire or de-escalation agreement is currently in effect between the primary belligerents."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.3
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
    "nuclearIndex": 15,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
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
      "date": "Jul 16",
      "text": "US launches sixth consecutive day of strikes against Iran, hitting airport, bridges, and communications towers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxOU0UzM1RqVEZOZDY5Z3RMcDN4UEpaejlVUnBZOW51azFzWmNaZEVtTHJSdThpTnYwbmlzRjd2Sno0SjZKdHFyYU5JZmJyMzFoeWZLZTVGVUsydVJFZ0MxVGlMVVY0NlpVaW5TMENxSGdTZ2NLYlZtZUdXTVZYVU1zQkZuNkFLNnFFQjVGbUpOUDZremQ1SHg1UTZVclpWSVQxa2ZpNDJ1N0dnVXFMX0NqT0JvaUhGMkFoc1dv0gHAAUFVX3lxTFB1U0ZRVHh2cWdJMmN4MGlmakxadUctVXhxNFZpR05SZGtYNEhyakRKT0NYTXBhSDhmYnpZYzhscS1lRy0wTWVmR3pJenZtQXB3VkNZM0szaWxoYlY4dkwxTXJhVEpHdFdiV2dqcFVEQ3NUNWlkclZjTU5hNExJZzM4VmhFTDlMVDNJV2RySk53dlVEVmZFak1VdTYwWV9aaEFILThmdHRxc3phV1ZuZmxGUTdsQ2hOeFZZbmJGMzNqSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1334
    },
    {
      "date": "Jul 16",
      "text": "US resumes blockade on Iran and launches strikes after attacks in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxQVHY4TmVKS1hoUTY1cTVwYXNmX255SnU0R1h2SE16dDV2aUxhcUdSYklSWGVXUlduX1RHbkowT2dyUWdpOWlTM3F0RWtvYW1MRlpTZm81NS1WU1QyMVZ4aUFFRVBQMmIwb01wcDJSbC1iTEllMExxX2p4VHhyZ3NGdUFzeVlPdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1334
    },
    {
      "date": "Jul 16",
      "text": "Qatar and Kuwait fend off fresh attacks amidst ongoing regional conflict.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 1334
    },
    {
      "date": "Jul 16",
      "text": "Chevron explores a pipeline bypassing the Strait of Hormuz with Iraq and Syria.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxPSW1PQk53QzVRbW4xa29CNWRsbGtCSmpCS2pRR3N6dmJoMnNXbjdBRDhwMFN6UVZpM2MxSm5zakZaVkxRQjhIWWMxaDBIOWxjM0w5Y3BRUHBLWFJSNUp3elFoMWRTdXBvaElxamdwQlJVTS1BVzJUYjN3ek5DUjNFTmYtalc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1334
    },
    {
      "date": "Jul 16",
      "text": "Syria seizes advanced weapons it says were bound for Lebanon’s Hezbollah from Iraq.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxNaFRMMk5Ka05ZQUFURGViTlJ2ZTVvUzNDN0lOcDFJMzZMODZNU1FILUVjNk5iN2lLZ3BzcExwT25vRW1EVjBFMTBTckJMQXEwN2F3azN3NDJReGNRaWZiSEVaaWo1T05jLVlxSkxxWm1WZDJaVkRMTkZWVTJRNlhXc0k5YS12UjdlLWRwc2FtdDdKaFhVWWYtdjNlbTRDWVhubzRyNVZsT0Jia2Y1SHU5Yk9B0gG3AUFVX3lxTFByRkJ5ZS0tNEJtMVFUUGhBb3FwZ1BmdVV0WVcxMm5YQUVTdXEzSlZDUEE1ZjhJZkQtSEllblB5QnZwdkVzckJ4YjJYX3B6QjRpWFo2LWVpMHhKeUpPYmNFTDg0dEhuZU1RZ0k1SkpyLV9EeE9oVEU2Uy1iNlQ4UDlRWHNXb2FZdFlYRTFXaThKM1RoUC1ibGtQTTQ0T083UHkzX3lON0dyNGk5M2hCTExUaEthUWVQWQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1334
    },
    {
      "date": "Jul 16",
      "text": "Lebanon and Israel move toward implementing a withdrawal agreement, according to US officials.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQUzdXWUgxdkZESUZCemtDcl9UNGIzUUNjeU5qMkcxbmoxMlpNMHZVRU4xYkE0T1pKQVc2d1pDTEtUc1NQOWsxd0o1NFVfbGpPdGhGRDdfVFR3c01fV3Z1QUVQNVJjMTZ0U3VFNUliNkpndVN6MlBWYlFkbVVaejhjUktmUjFieDZJWmZ6aXdKSWhEWXluWGZqSlkyNzBpQnVHWU9OeXdwY2dDZEVDZGxscFFBY2xSWHFubFZlRktKNA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1334
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
