export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 247,
  "lastUpdated": "2026-04-19",
  "lastSyncedAt": "2026-04-19T10:54:20.522Z",
  "warDay": 51,
  "summary": "Iran has closed the Strait of Hormuz and fired on ships, leading to a US blockade of Iranian ports, while a fragile ceasefire between Israel and Hezbollah has seen violations and casualties.",
  "lastNarrativeUpdate": "2026-04-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A ceasefire between Israel and Lebanon, reportedly agreed for 10 days, is fragile and has been violated by Hezbollah, resulting in casualties."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "date": "Apr 18",
      "text": "Iran announces closure of the Strait of Hormuz and fires on ships.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxNZm9WRHN1VHF4X2lmVmQ3OFRLTzlUN3ZWLWtMbWhwMWV5T2JSLU9FbV8zMGE2UkFiZ2xBMEt4UG9yQWNsMHVKUnVBM1B2bGRVUU9IWnJ1TU5aYTEyTjFfMXJkMkVXRERmMEFmcC04VzU4Tk55REtrR3ZOR1h6aDhBMDhyZHp3NW1FbXZLMWNYbXNmN3JwemJ4MzN6amZGcjQy?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 247
    },
    {
      "date": "Apr 18",
      "text": "US enforces a blockade of Iranian ports, turning back ships.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 247
    },
    {
      "date": "Apr 18",
      "text": "IDF reservist killed by Hezbollah explosive in Lebanon amid truce, 3 troops hurt.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxOOEtMWEV6NldvajRfWmNDMVY5OVVtTU9JQTlPdmtNLU9IQ0ZpNVNkLXdiWUt1b3gyRlZKTUFPVl80a2o5TWdSSEVUSDU5S1huWElHeHRsRFY5NGJtUDBsSHF4QmdwTEwzOXlNakpaeGU5RXliNkNxOGVPQ1luV3ZZQVNIOEYtYjVzRjBQNm5aaFRJdUFTT2ZTRGdXQzJJa21Ibkw1MnAxQXB3aWxqM0lz0gG0AUFVX3lxTE9fZVJhcUhfQmtoNFdpeTFRR1ppdGJfdDY4TUtRalVwcjhrNzZOWmpoUFoyZHR4c3NKaHJ1OEc0YnBWcV9WOHJ1QkNtb0h3cGV6N2xvV2hFZ0tBaFJfMHREZVliUjBKVnhPWnhfZ19qanVjUzJuN2JBcG5kOVZUTVZjUHlIOW1xc0dmWnhHZW03TEtWQU1UOXJKbGtjS19kaFFMUlN1MVptcWVMN19VWElxRVllOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 247
    },
    {
      "date": "Apr 18",
      "text": "French UNIFIL soldier killed in Lebanon, Hezbollah responsible.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNVTZ0dllXUXlSMlBJQ3h4VXhiTEhubW9WOEJOajY2Y0hoc2prX00zOWxTVHFjTGJWNF9Pdi1XN3V5NTVGRTVqS0FrUVNaRXVfSXdrUW11TVo2QXItWndrZFdwb1QwMHY4TDEzcW8tV2FEZnVUZTVFa1EyaU1SNGtDbTlJWDlBSlZLaHpfeVk0N1dlNF9veEZSNEhFU1FRQTlrS0ZDaGh0RjFZZHllXzVVRTBieTJBd1lzdFlhQVEzcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 247
    },
    {
      "date": "Apr 18",
      "text": "Israel accuses Hezbollah militants of violating ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxQei1TU1lvSFZETVpCdzZSSW5wRkFPeHhBRE1JWS0weWM0QTZGQl83RG51bWRUX2tfdVFuaWVoekhKcGg2QTZJbWdHUmxsSGw0LVhSNTgyWTBDeHJPdTRvSVFicUhuSWJ5NzBraHlwVkpIdGpvQ21OTXBLYU5EVWNTYVp5eEhuaXVibmxYR0xVLTduZnd3Y0N1NU9md3A4QjF1aDNsRHp0TFN4Qk0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Euronews.com",
      "latestSinceUpdate": 247
    },
    {
      "date": "Apr 18",
      "text": "Iran states no intention of negotiating for now and warns US to reverse 'stupid decision' in peace talks.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 247
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
