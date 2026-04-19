export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 258,
  "lastUpdated": "2026-04-19",
  "lastSyncedAt": "2026-04-19T20:03:23.170Z",
  "warDay": 51,
  "summary": "The Middle East conflict continues with a critical standoff in the Strait of Hormuz involving US and Iranian forces, while diplomatic efforts for talks remain uncertain and a truce between Israel and Lebanon shows signs of fragility.",
  "lastNarrativeUpdate": "2026-04-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "A truce between Israel and Lebanon is in effect, but has been partially violated by a Hezbollah explosive attack resulting in an IDF casualty."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
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
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "Apr 19",
      "text": "Trump states talks will resume as standoff escalates over Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE93WEJXNmNtdG90Rm9RRm1VT1dmb3JUZ3V3OWw4ZGZEZmVOazhfX0ZkeDRkM3V5ckluMkxmM0FMSU5UR3c5eFdGOEZLRmNPNC1sYkcwNWxOc1dKY3JKelQzQnFtMjZaaWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 258
    },
    {
      "date": "Apr 19",
      "text": "Iran announces it is closing the Strait of Hormuz again, following a US blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE84TkNEZEdiUVlZcWZMaHlwM3VacEQyX0duUmFPdG00T0ZqS3hFWDluRkVRQ0NTQjZjcmNEU3dwMkR4d0ZQVHRyZUU5VXFFRVBaU01kLXM3clRLT0xaak9ES3I1bWFBM0VSYldZeldlc0RhSlVUbFBJ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 258
    },
    {
      "date": "Apr 19",
      "text": "US military prepares to board Iran-linked ships in international waters and turns back other vessels.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi7AFBVV95cUxPNEctMk9laHlpcWxvcm1JYkVtSkxNY2lkbHlrLXVfQW53RlZYdzQxb2NjcUVuZFNaTFptem1JdURyWERBQjRpTWdxQ0lDVXJBaGNaaDVfMFNQcEQxcFVPdFVCU1REejdndl9FSTJkSHgwd05JMUxMd1hLX3FRTXU4NWo3YlNzeDVuZTV2bXhuenFEUkVpYnp6MTQ3Y1BzcFVxcWU4UWMzVy1uT0ZTMG1hTG9kblpfaEo3VUR5VW01VjVIQnFyQlJEUGJfVUtMVjhZRzNVRlQxeEhUYU1waFBGenZNUXNtV0d4WDk1cg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Wall Street Journal",
      "latestSinceUpdate": 258
    },
    {
      "date": "Apr 19",
      "text": "Iranian minister states 'No intention of negotiating for now,' despite US claims of war goals almost met and delegation heading to Pakistan.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE56dkx0c0Z3Umx4dlBzYzdrdGV6SHM3U3hLRnpDX0tFOC1UeHBiUEJLamlEalBVZUV6d0RsVS13UU5wUldEVm9hNVZ6ekRMOWtyamJMbQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 258
    },
    {
      "date": "Apr 19",
      "text": "An IDF reservist was killed by a Hezbollah explosive in Lebanon amid an ongoing truce, with three other troops injured.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxOOEtMWEV6NldvajRfWmNDMVY5OVVtTU9JQTlPdmtNLU9IQ0ZpNVNkLXdiWUt1b3gyRlZKTUFPVl80a2o5TWdSSEVUSDU5S1huWElHeHRsRFY5NGJtUDBsSHF4QmdwTEwzOXlNakpaeGU5RXliNkNxOGVPQ1luV3ZZQVNIOEYtYjVzRjBQNm5aaFRJdUFTT2ZTRGdXQzJJa21Ibkw1MnAxQXB3aWxqM0lz0gG0AUFVX3lxTE9fZVJhcUhfQmtoNFdpeTFRR1ppdGJfdDY4TUtRalVwcjhrNzZOWmpoUFoyZHR4c3NKaHJ1OEc0YnBWcV9WOHJ1QkNtb0h3cGV6N2xvV2hFZ0tBaFJfMHREZVliUjBKVnhPWnhfZ19qanVjUzJuN2JBcG5kOVZUTVZjUHlIOW1xc0dmWnhHZW03TEtWQU1UOXJKbGtjS19kaFFMUlN1MVptcWVMN19VWElxRVllOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 258
    },
    {
      "date": "Apr 19",
      "text": "Traders reportedly placed over $1 billion in perfectly timed bets on the Iran war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxOR3VkQUJsRElvQ1U0X2VmTFJHM3dSb2lCVkNmZERWeF9CS0hwUHkzY21vSmVBZERqNjdTTmQ3QXc4Mm5EODNfZTI3RVFQbjVlX0I3QjA2VEYwVURTT1lZZW5ZWkVYandEc0ZrWm5qR0UtWW1XdzdWZGFQalhhX0Jtbw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 258
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
      "perspective": "Iran's Stance",
      "headline": "Strait of Hormuz Closed Amid US Blockade",
      "summary": "Iran asserts its right to close the Strait of Hormuz due to a U.S. blockade, while also indicating progress in talks with the US despite significant remaining differences.",
      "tone": "defiant",
      "latestSinceUpdate": 241
    },
    {
      "perspective": "Israel-Lebanon Conflict",
      "headline": "Truce Violations and Escalating Strikes",
      "summary": "Despite reports of a truce, Israel and Hezbollah continue to exchange fire, with both sides accusing the other of violations and significant casualties reported.",
      "tone": "strained",
      "latestSinceUpdate": 241
    },
    {
      "perspective": "Global Economic Impact",
      "headline": "Traders Bet on War, Oil Market Volatility",
      "summary": "Traders have made significant bets on the Iran war, highlighting market sensitivity to the conflict and potential for major economic shifts, particularly concerning oil.",
      "tone": "anxious",
      "latestSinceUpdate": 241
    },
    {
      "perspective": "US Role",
      "headline": "US Enforces Blockade, Seeks Peace Talks",
      "summary": "The U.S. is actively enforcing a blockade of Iranian ports and turning back ships, signaling a direct intervention in the conflict while also engaging in diplomatic efforts for peace talks.",
      "tone": "neutral",
      "latestSinceUpdate": 241
    }
  ]
});

export default LATEST_SNAPSHOT;
