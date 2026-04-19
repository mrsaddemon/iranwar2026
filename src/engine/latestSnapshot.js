export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 252,
  "lastUpdated": "2026-04-19",
  "lastSyncedAt": "2026-04-19T15:09:54.751Z",
  "warDay": 51,
  "summary": "Iran has announced the closure of the Strait of Hormuz and fired on ships, while a fragile ceasefire between Israel and Hezbollah in Lebanon is threatened by ongoing attacks, and the US and Iran prepare for new peace talks.",
  "lastNarrativeUpdate": "2026-04-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 5,
    "summary": "A ceasefire between Israel and Hezbollah in Lebanon is active but fragile, with recent violations by both sides threatening its stability."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
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
      "date": "Apr 18",
      "text": "Iran says it’s closing Strait of Hormuz again and fires on ships, imposing restrictions.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE9EQVl4S0hjYWFiVnBPOEJPNEJPVnRqeHlqNmd3dzN0aUp2czNlNHk4QlpxVnJGb1kxZ3JoX1luTUVfOFFFSTRIRVhiMU80M2gxNjZSdDBjeFM0bE1TX0RpQkRwUmVvZHM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 252
    },
    {
      "date": "Apr 18",
      "text": "Trump threatens to ‘blow up whole country’ and 'knock out' Iranian power plants if deal fails.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxQYnR1QVRoREV1UFFLd2RMMGp4S0EzTV9XYVJTMDdlV1lsZTdvOUVmd3RQWWQwOXNFT0FxcTIwMVFtbU92TnBuU05DSzBtU2lIWWdVQzVpdWVVSWVIOXhlZ3dmS1hDa252NnhMN1lHZWk3OVFkSG1nNjlfcGtHdFJRS19rc090THpQR3ZBWHZkME5ibE1FZU5Xa3hNZGRVaGVvdmRHdjcxcnFKejdsU19fcVJISmlldWRPSUNaMXpR0gHDAUFVX3lxTE1nUkZmaTJhYVVqNEExUklsazNjR1VVQUI5eFZfVUd4Q1p4Vi1RdkRlcjlVMDRuWkJtRDc5b0Y0UGYwOHRFTmpJbWlzSFNSeEtoUEF0bmdNclpuTld4UlJJZ1A3SXBfTlZqV05uYXRNeHdxSm56VnQ4WUVJNzAwYUJtdUh1T0JIYnpWTTIwcHo3TmdaX04xaHZwTTNwaDRTekpWbzNJa05JODdval8wZzFKVzY3eVJIbFNuS2NfdlRXc0IzVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 252
    },
    {
      "date": "Apr 18",
      "text": "Israel strikes kill 4 Lebanese medics; a French soldier is killed and 3 others wounded in an attack on peacekeepers in Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxPWl9XRGwzTm96b1N4RkFOekl1UUNteF9HeWo0RHNQcUhGU0t4OFh1YWlFQi1mb2E5aUJocWdKdVVUMWZFS3FSek1IRGhHSUFqWTdpSUlLR2lvd0hKckRwaHEtU1JubkZMMWk1Rmw1OW9jOTY4WmliNDlMSW9oNVRJcXhKVkQwUUdVM3hMdm9IaDl6cXRLLVBWanl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 252
    },
    {
      "date": "Apr 18",
      "text": "An IDF reservist is killed by a Hezbollah explosive in Lebanon amid the truce, with 3 troops injured.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxOOEtMWEV6NldvajRfWmNDMVY5OVVtTU9JQTlPdmtNLU9IQ0ZpNVNkLXdiWUt1b3gyRlZKTUFPVl80a2o5TWdSSEVUSDU5S1huWElHeHRsRFY5NGJtUDBsSHF4QmdwTEwzOXlNakpaeGU5RXliNkNxOGVPQ1luV3ZZQVNIOEYtYjVzRjBQNm5aaFRJdUFTT2ZTRGdXQzJJa21Ibkw1MnAxQXB3aWxqM0lz0gG0AUFVX3lxTE9fZVJhcUhfQmtoNFdpeTFRR1ppdGJfdDY4TUtRalVwcjhrNzZOWmpoUFoyZHR4c3NKaHJ1OEc0YnBWcV9WOHJ1QkNtb0h3cGV6N2xvV2hFZ0tBaFJfMHREZVliUjBKVnhPWnhfZ19qanVjUzJuN2JBcG5kOVZUTVZjUHlIOW1xc0dmWnhHZW03TEtWQU1UOXJKbGtjS19kaFFMUlN1MVptcWVMN19VWElxRVllOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 252
    },
    {
      "date": "Apr 18",
      "text": "US officials and Iran are set to resume talks in Pakistan on Monday.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxNdjVYRnJmbnJTTlhwYkxZcml5cDZRT1JNWjlGcHlJN2RFNDVxQlYyNHo5QUsxbG9sZnEyYjhFT0RHWDlSSVhTQ1JlenRXUl9WM1pnLXlHaTZuYWdlNEQxOXFYZlphdzNXSHNHZlN3NXhPTmJZVFJjem13VElCX19rYVFPWVItdV8xbTdqT0xLbHN0ckxiWjJsLTB1SUw5NFBOY19CNHU5TExFYmvSAbABQVVfeXFMTmZjOGxVU2dUbUx3SEFVdlNBeHEzd19odWFGb0JiSUNQb0hNdWx4ZFByQ1hyRmFYZmxHendUaUVNTXl0Q2NSV0JWNmV6SGg4T2lPMG02Q2w4M2JXVU0tQ1djd3hvRmx4YUhaY1NYX2VQOVpVdjZhOHZsX2hXWEh4aURuN0FVZUFhUXd2a2J0Z28tdnRpZGpwX1NIb1Y0X3ZMLVNfR3NBOGpZMTY5bjNMeDk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 252
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
