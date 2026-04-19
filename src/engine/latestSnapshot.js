export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 259,
  "lastUpdated": "2026-04-19",
  "lastSyncedAt": "2026-04-19T20:50:26.817Z",
  "warDay": 51,
  "summary": "A significant escalation has occurred in the Strait of Hormuz involving US and Iranian forces, while a ceasefire between Israel and Lebanon remains highly fragile following recent violations.",
  "lastNarrativeUpdate": "2026-04-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "A ceasefire between Israel and Lebanon is in effect but is highly fragile, marked by recent violations including an IDF casualty and questions over territorial lines."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
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
      "text": "Iran closes Strait of Hormuz over U.S. blockade and fires on ships.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxNZm9WRHN1VHF4X2lmVmQ3OFRLTzlUN3ZWLWtMbWhwMWV5T2JSLU9FbV8zMGE2UkFiZ2xBMEt4UG9yQWNsMHVKUnVBM1B2bGRVUU9IWnJ1TU5aYTEyTjFfMXJkMkVXRERmMEFmcC04VzU4Tk55REtrR3ZOR1h6aDhBMDhyZHp3NW1FbXZLMWNYbXNmN3JwemJ4MzN6amZGcjQy?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 259
    },
    {
      "date": "Apr 19",
      "text": "Trump states US Navy forcibly seized an Iranian-flagged cargo ship in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxObUY2VjVYd1lUSkdpVk9SaGpHNERDdDFWX2pTMXhpLTU2QnBSR3ZINFJVcUZhckVvYWVDOTJhanlZSm9abUhGUDgzQ2lXTndfeVdTTVZQT1ExZ0ZGODBJcktwLTk2bjJsVldrRTFMd3pvWGEwN281Qnh3UTBRbVJOUGxCMjJIeUM1MlJyMXVPQVBxQ3kx0gGaAUFVX3lxTE90VVBtNldLVG5uRXpzYUNISUhLLUNDTVpMaWFzMUkwU0pZUWVhU1dLdE9JaVptYmJlaEg4VmNtX2twT3lwcTlmWV84U0NXVUFwZm56Mncwd0hVV0RrYTZEaTVrRzdHYUw1cE1PY3ZZMklOUDJhNDNLY3V5TWU1UHpJengteTM0ZnVOYl8teTlqU0tHUEJxYThyRlE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 259
    },
    {
      "date": "Apr 19",
      "text": "Iran reverses course on opening Strait of Hormuz as hardliners take front seat in Tehran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxPempHWldhcDhhckR0VEtoM0pTaUhxOGxsb1ZQemNvWk8wczJuTWhrdkJVakJvVFUyY3o4bXJMY1M5QktoSEl5SzByQXJKZjAxQVBaT0x5Wk4teUtpdVppWVE4SXAxODlfOFRDZV8zd2hyNTdoaExLNE9kMFJfSTI3VNIBhgFBVV95cUxQRldrSVphWjVxUGFrSjNqWFFHQlQ4aG1tVHpwNXlRb1V0SUhySkF0amk4Zm41Mnh5ZDhncVhLNjBIeEp0WTBRZUktUm05cDN0eGVPeXlZVnJMWFVFZ2I2cDJOaFc1RUlYZlpHQ0FNVGc0N0xsdGhWMloyUkVxM05wTzl0dWdqdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 259
    },
    {
      "date": "Apr 19",
      "text": "US military prepares to board Iran-linked ships in coming days.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPSnlDT0RuaDRMaTA1STVRSDU3NzJOWnQxUmJFVzl4czJFZUpJclJzNGVIclc5YThaY0xpQ0YxM1BNaHRjRVRXQnp6MEV6YlBJZ0xpOTFSSzJkdjlTTV9Ha1dwRHBsV1lZc3cyVFUyYjFMMzhDZUxPcnRWTXZoSmthdUdpYVpEWDJ3UHowNXFZRjJGZ01tN3pHMGZFVUVOZFowQWRQZlZYdVhwbG5DWDdvZXlwT19wSlN1MWg4NWtEaw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 259
    },
    {
      "date": "Apr 18",
      "text": "IDF reservist killed by Hezbollah explosive in Lebanon amid truce, 3 troops hurt.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxOOEtMWEV6NldvajRfWmNDMVY5OVVtTU9JQTlPdmtNLU9IQ0ZpNVNkLXdiWUt1b3gyRlZKTUFPVl80a2o5TWdSSEVUSDU5S1huWElHeHRsRFY5NGJtUDBsSHF4QmdwTEwzOXlNakpaeGU5RXliNkNxOGVPQ1luV3ZZQVNIOEYtYjVzRjBQNm5aaFRJdUFTT2ZTRGdXQzJJa21Ibkw1MnAxQXB3aWxqM0lz0gG0AUFVX3lxTE9fZVJhcUhfQmtoNFdpeTFRR1ppdGJfdDY4TUtRalVwcjhrNzZOWmpoUFoyZHR4c3NKaHJ1OEc0YnBWcV9WOHJ1QkNtb0h3cGV6N2xvV2hFZ0tBaFJfMHREZVliUjBKVnhPWnhfZ19qanVjUzJuN2JBcG5kOVZUTVZjUHlIOW1xc0dmWnhHZW03TEtWQU1UOXJKbGtjS19kaFFMUlN1MVptcWVMN19VWElxRVllOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 259
    },
    {
      "date": "Apr 18",
      "text": "Iranian delegation arrives in Pakistan for talks with US.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQUkJlNWk5X0x6X25UNC0xdHR1UnhQcWxwM2dqYW5uRVlSYXVEUFZzV29za0diTk1EaUtFMUFGaC14cmpjcTlmVU0tRDh1YzZvRXktNUpVVHpXZzFEOUtGcWhTa3JvalgzYnhLRUdWN1NLaTJkdk5PYmd5UkV6OUNHS3hUVmpnaXhMMEMxRXpvazlod2l0T1FXRmUzeE9wV0JoOVdaaVVrVEU2Wjk4ajFwYnlWNzZ2OHdUSjlTZm1hUWfSAcYBQVVfeXFMTzdFS2dXNW1zRS0zQU1IWm1uTjNQV0RCblc0Y3ZrLUhaNWlENjFoNXlUQ1I4YWtpREgzRWdvaXgwMjVUUzZZMElyeFEydC03U0t1YXEtQzNPTWgtMW55NHdkQjVrODFsb25zaWtVWDhhTXRLTlI5TmZKZUNiNEZFd0hQdldkbkM3bUg1T29zcG4tVXJnTVJPSkNZWmtaRzJRS0dORlpjeEdQamdocUpxWGpxNUZJTERNMlJSSHJmVkNuMlhiekZn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 259
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
