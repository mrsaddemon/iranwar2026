export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 242,
  "lastUpdated": "2026-04-19",
  "lastSyncedAt": "2026-04-19T05:50:23.921Z",
  "warDay": 51,
  "summary": "Iran has closed the Strait of Hormuz and fired on ships in response to a US blockade of its ports, while a fragile 10-day ceasefire between Israel and Lebanon is experiencing violations.",
  "lastNarrativeUpdate": "2026-04-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A 10-day ceasefire between Israel and Lebanon is in effect, but has been marred by reported violations and casualties on both sides."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
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
        "precision": 0.7,
        "aggression": 0.7
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
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "text": "Iran announces the closure of the Strait of Hormuz and fires on ships, citing a US blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxNZm9WRHN1VHF4X2lmVmQ3OFRLTzlUN3ZWLWtMbWhwMWV5T2JSLU9FbV8zMGE2UkFiZ2xBMEt4UG9yQWNsMHVKUnVBM1B2bGRVUU9IWnJ1TU5aYTEyTjFfMXJkMkVXRERmMEFmcC04VzU4Tk55REtrR3ZOR1h6aDhBMDhyZHp3NW1FbXZLMWNYbXNmN3JwemJ4MzN6amZGcjQy?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 242
    },
    {
      "date": "Apr 19",
      "text": "The US military turns back ships as it enforces a blockade of Iranian ports, while expressing hope for new peace talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxQN1RJR1g3TDBBOE5pNDRKR0FWQnUxS2RUeXpQMlFVWERhRHIxU2doMnFEUjRHelJfeERuM0tOV0h6ZTFtMXY1cjAwUWg4bm9lU2trcTJVcjdEWmlOS2swUUV5bHJLSE14ZHBZVVphZS1aU2t4OUJQU01QUjdTNkg4T1hBVFA2emNOTUF6Y0t5eTJJSXlobjlFS3FZQWRDYW14MkVjcVdEWkRFNTlPc3ZiaGw2VEVGVUNjaXczbA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 242
    },
    {
      "date": "Apr 19",
      "text": "An IDF reservist is killed by a Hezbollah explosive in Lebanon amid the truce, with 3 other troops injured.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxOOEtMWEV6NldvajRfWmNDMVY5OVVtTU9JQTlPdmtNLU9IQ0ZpNVNkLXdiWUt1b3gyRlZKTUFPVl80a2o5TWdSSEVUSDU5S1huWElHeHRsRFY5NGJtUDBsSHF4QmdwTEwzOXlNakpaeGU5RXliNkNxOGVPQ1luV3ZZQVNIOEYtYjVzRjBQNm5aaFRJdUFTT2ZTRGdXQzJJa21Ibkw1MnAxQXB3aWxqM0lz0gG0AUFVX3lxTE9fZVJhcUhfQmtoNFdpeTFRR1ppdGJfdDY4TUtRalVwcjhrNzZOWmpoUFoyZHR4c3NKaHJ1OEc0YnBWcV9WOHJ1QkNtb0h3cGV6N2xvV2hFZ0tBaFJfMHREZVliUjBKVnhPWnhfZ19qanVjUzJuN2JBcG5kOVZUTVZjUHlIOW1xc0dmWnhHZW03TEtWQU1UOXJKbGtjS19kaFFMUlN1MVptcWVMN19VWElxRVllOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 242
    },
    {
      "date": "Apr 19",
      "text": "Israel accuses Hezbollah militants of violating the ceasefire following an attack in Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxQei1TU1lvSFZETVpCdzZSSW5wRkFPeHhBRE1JWS0weWM0QTZGQl83RG51bWRUX2tfdVFuaWVoekhKcGg2QTZJbWdHUmxsSGw0LVhSNTgyWTBDeHJPdTRvSVFicUhuSWJ5NzBraHlwVkpIdGpvQ21OTXBLYU5EVWNTYVp5eEhuaXVibmxYR0xVLTduZnd3Y0N1NU9md3A4QjF1aDNsRHp0TFN4Qk0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Euronews",
      "latestSinceUpdate": 242
    },
    {
      "date": "Apr 19",
      "text": "Iran's top negotiator states that talks have progressed but a significant distance remains in negotiations.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 242
    },
    {
      "date": "Apr 19",
      "text": "Traders reportedly placed over $1 billion in perfectly timed bets on the Iran war, raising questions about market activity.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxOR3VkQUJsRElvQ1U0X2VmTFJHM3dSb2lCVkNmZERWeF9CS0hwUHkzY21vSmVBZERqNjdTTmQ3QXc4Mm5EODNfZTI3RVFQbjVlX0I3QjA2VEYwVURTT1lZZW5ZWkVYandEc0ZrWm5qR0UtWW1XdzdWZGFQalhhX0Jtbw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 242
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
