export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 249,
  "lastUpdated": "2026-04-19",
  "lastSyncedAt": "2026-04-19T12:26:28.079Z",
  "warDay": 51,
  "summary": "The Middle East conflict continues on Day 51 with Iran closing the Strait of Hormuz and firing on ships, while the US enforces a blockade and broader negotiations remain stalled; a fragile ceasefire is reported in Lebanon.",
  "lastNarrativeUpdate": "2026-04-19",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.93,
    "durationDays": 10,
    "summary": "No broad ceasefire is in effect for the main Middle East conflict, though a fragile truce between Israel and Hezbollah in Lebanon has been reported amidst recent violations."
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
        "militaryPower": 70
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
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 58,
    "escalationLevel": 38,
    "oilDisruption": 90,
    "tradeImpact": 56,
    "sanctionsPressure": 49,
    "globalPressure": 57,
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
      "text": "Iran announces closure of the Strait of Hormuz again and fires on ships.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE9EQVl4S0hjYWFiVnBPOEJPNEJPVnRqeHlqNmd3dzN0aUp2czNlNHk4QlpxVnJGb1kxZ3JoX1luTUVfOFFFSTRIRVhiMU80M2gxNjZSdDBjeFM0bE1TX0RpQkRwUmVvZHM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 249
    },
    {
      "date": "Apr 19",
      "text": "US military turns back 23 vessels, enforcing a blockade in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQRGZDcnB1c0VnSDBkYU1XYzNES3N0cVBKRE1mX1lOc0FjNWs3ck5BZWdzQnlPRTZ2ZFhkektJR1lhS1ZHN014VGtXMGdpczA1ZWlxdEpDcXVUcDhWcmxjZzhMMVdkMlRKRGxybWpfLWd0eW5QcUhfYWtqNlgxVmtxYTBGTlMxbDhJY05EdVB0eEdvSE1DZjhTNnFIb3h2aThtZTlTU21MeklXa1RDd0lUMmdPcGRHVEJFZEppOVhocw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 249
    },
    {
      "date": "Apr 19",
      "text": "Iran states no intention of negotiating for now and that handing over enriched uranium is a 'non-starter'.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 249
    },
    {
      "date": "Apr 19",
      "text": "A French soldier was killed and three others wounded in an attack on peacekeepers in Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxPWl9XRGwzTm96b1N4RkFOekl1UUNteF9HeWo0RHNQcUhGU0t4OFh1YWlFQi1mb2E5aUJocWdKdVVUMWZFS3FSek1IRGhHSUFqWTdpSUlLR2lvd0hKckRwaHEtU1JubkZMMWk1Rmw1OW9jOTY4WmliNDlMSW9oNVRJcXhKVkQwUUdVM3hMdm9IaDl6cXRLLVBWanl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 249
    },
    {
      "date": "Apr 19",
      "text": "An IDF reservist was killed by a Hezbollah explosive in Lebanon amid a truce, with three other troops injured.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxOOEtMWEV6NldvajRfWmNDMVY5OVVtTU9JQTlPdmtNLU9IQ0ZpNVNkLXdiWUt1b3gyRlZKTUFPVl80a2o5TWdSSEVUSDU5S1huWElHeHRsRFY5NGJtUDBsSHF4QmdwTEwzOXlNakpaeGU5RXliNkNxOGVPQ1luV3ZZQVNIOEYtYjVzRjBQNm5aaFRJdUFTT2ZTRGdXQzJJa21Ibkw1MnAxQXB3aWxqM0lz0gG0AUFVX3lxTE9fZVJhcUhfQmtoNFdpeTFRR1ppdGJfdDY4TUtRalVwcjhrNzZOWmpoUFoyZHR4c3NKaHJ1OEc0YnBWcV9WOHJ1QkNtb0h3cGV6N2xvV2hFZ0tBaFJfMHREZVliUjBKVnhPWnhfZ19qanVjUzJuN2JBcG5kOVZUTVZjUHlIOW1xc0dmWnhHZW03TEtWQU1UOXJKbGtjS19kaFFMUlN1MVptcWVMN19VWElxRVllOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 249
    },
    {
      "date": "Apr 19",
      "text": "Traders placed over $1bn in bets on the Iran war, raising questions about market activity.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 249
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
