export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 260,
  "lastUpdated": "2026-04-19",
  "lastSyncedAt": "2026-04-19T21:22:04.432Z",
  "warDay": 51,
  "summary": "Tensions escalate in the Middle East with direct US-Iran confrontation over the Strait of Hormuz, while a fragile ceasefire holds between Israel and Hezbollah despite reported violations.",
  "lastNarrativeUpdate": "2026-04-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 7,
    "summary": "A ceasefire between Israel and Hezbollah is in effect but remains fragile, with reported violations including an IDF reservist killed."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Apr 19",
      "text": "Iran closes Strait of Hormuz over U.S. blockade and fires on ships.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxNZm9WRHN1VHF4X2lmVmQ3OFRLTzlUN3ZWLWtMbWhwMWV5T2JSLU9FbV8zMGE2UkFiZ2xBMEt4UG9yQWNsMHVKUnVBM1B2bGRVUU9IWnJ1TU5aYTEyTjFfMXJkMkVXRERmMEFmcC04VzU4Tk55REtrR3ZOR1h6aDhBMDhyZHp3NW1FbXZLMWNYbXNmN3JwemJ4MzN6amZGcjQy?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 259
    },
    {
      "date": "Apr 19",
      "text": "US military seized an Iranian-flagged container ship after 'blowing hole' in vessel, Trump says.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxQMmVWdTMtLTMtSWhSUFJpUExHYURyU0laMFdDaHp4UUFCZ0NtZFo1TU5aRjZ0dDJ3RU5aOGN1YU94RHQ0ZVFTb1R3OTlhaUdLVEs0STFEMnN5NmpFaTJocnQ1TlkyeGdySlFVVm1MaXpRWVdkUzU5NW1lakFmb0c2Z2Z4TEowQ0VMRnhvMUxxZE4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 260
    },
    {
      "date": "Apr 18",
      "text": "Reports indicate Khamenei and top security officials killed in US, Israel attack on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPbkVCTnhodk1jUmFmOWVwMlJ5dlN2RFFEd3ByUFQtS3lvLVJ6Z0FFZHpmb2szTERvOW5xV0pIVUxIazU4LUs4ci0wcVdJNU9PY3hNNl9Va0xveHh4T292SkdqdmF4akFxdHpFNS1yZTcyNHFKaGpoMHFQQWZ0Vkd3T1ZwMV9CaGFkaHY1anMtd1Q2bzVVcFFXUGJiWHdTZi1CbkVTSEdEOWRaYWZHaVVESGtuX1ZqcmYwREExaEZMb9IBxAFBVV95cUxPZzBGclI4NmZ2Zm1uWWkwNlJVRjdqNUg4X1RtaU1sbVl4MC1nd2h6QkVCckRIbDdVbXVqVUx5Njl5NWc4S2dLUHBYcnZON3VVZDZXNW9jdkJqUGoyTlpkdlR1N2JFRHRETjVUQmZOaGZwdEUzeURZY21MVnBkb1dxYUdSNzlzOGNsekljVXQzaHVWek5sT2JiUldFWV8yUF9Ba3Z2RGtabGc5NG5rNGVTMnZiWENQTnE5QVN0bENvUFhjU1JI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 260
    },
    {
      "date": "Apr 18",
      "text": "IDF reservist killed by Hezbollah explosive in Lebanon amid truce, 3 troops hurt.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxOOEtMWEV6NldvajRfWmNDMVY5OVVtTU9JQTlPdmtNLU9IQ0ZpNVNkLXdiWUt1b3gyRlZKTUFPVl80a2o5TWdSSEVUSDU5S1huWElHeHRsRFY5NGJtUDBsSHF4QmdwTEwzOXlNakpaeGU5RXliNkNxOGVPQ1luV3ZZQVNIOEYtYjVzRjBQNm5aaFRJdUFTT2ZTRGdXQzJJa21Ibkw1MnAxQXB3aWxqM0lz0gG0AUFVX3lxTE9fZVJhcUhfQmtoNFdpeTFRR1ppdGJfdDY4TUtRalVwcjhrNzZOWmpoUFoyZHR4c3NKaHJ1OEc0YnBWcV9WOHJ1QkNtb0h3cGV6N2xvV2hFZ0tBaFJfMHREZVliUjBKVnhPWnhfZ19qanVjUzJuN2JBcG5kOVZUTVZjUHlIOW1xc0dmWnhHZW03TEtWQU1UOXJKbGtjS19kaFFMUlN1MVptcWVMN19VWElxRVllOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 259
    },
    {
      "date": "Apr 19",
      "text": "Iranian minister states 'No intention of negotiating for now' as US insists war goals almost met.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE56dkx0c0Z3Umx4dlBzYzdrdGV6SHM3U3hLRnpDX0tFOC1UeHBiUEJLamlEalBVZUV6d0RsVS13UU5wUldEVm9hNVZ6ekRMOWtyamJMbQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 260
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
