export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 250,
  "lastUpdated": "2026-04-19",
  "lastSyncedAt": "2026-04-19T13:42:15.786Z",
  "warDay": 51,
  "summary": "The Middle East conflict is marked by Iran's re-closure of the Strait of Hormuz and firing on ships, alongside ongoing ceasefire negotiations and violations in Lebanon, while the US prepares for potential maritime action.",
  "lastNarrativeUpdate": "2026-04-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "The US-Iran ceasefire has expired without a new deal, while the Israel-Lebanon truce is highly fragile with reported violations and casualties."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
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
    "nuclearIndex": 10,
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
      "date": "Apr 18",
      "text": "Iran announces re-closure of the Strait of Hormuz and fires on ships, halting traffic.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 250
    },
    {
      "date": "Apr 18",
      "text": "Two Indian ships come under fire in the Strait of Hormuz after Iran reasserts control.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxQWWhVSDQ2NGtTMTYtRE9aTjR3N0JTN2pLWEdGS3k5Q2huOGtQVm5OTVYzMGxwemhHMlh0anhzVHgtNFFrR1FlcFBkeFRESGkwMklQTk52TlBnaGFEbFlPbHFibGs3MkRWbXIyekpPU3pvU2tjR2NjRWUzTkxzS2ducExzSUNYeHhwLVZkUi1sd242MWxrQzkwWjQ0Nm9wdTU2Q1hVVGZNWE5sck10TDBqX2thUDhBR0ZVQ1h2cjFmdHlvb0do?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 250
    },
    {
      "date": "Apr 18",
      "text": "The U.S.-Iran ceasefire expires this week with no deal in sight, though talks are set to resume in Pakistan.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxQbk5mXzgxTWJva2VURFpWRDhSRDZ0YTBZdE93cFRpeTBxMFNKam9qaTAwczc2UXNManRaNEhmMEx0U2Q2d2xLc3JEbW1WcEVZYl9xS2dKQ2lYaFI5ZVVBeHlvV3U1Y3QyTU5HY21yREVmUDlab0VaYWlpQmFESnhCZ2NOUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 250
    },
    {
      "date": "Apr 18",
      "text": "An IDF reservist is killed by a Hezbollah explosive and four Lebanese medics are killed by Israeli strikes amid the Israel-Lebanon truce.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxOOEtMWEV6NldvajRfWmNDMVY5OVVtTU9JQTlPdmtNLU9IQ0ZpNVNkLXdiWUt1b3gyRlZKTUFPVl80a2o5TWdSSEVUSDU5S1huWElHeHRsRFY5NGJtUDBsSHF4QmdwTEwzOXlNakpaeGU5RXliNkNxOGVPQ1luV3ZZQVNIOEYtYjVzRjBQNm5aaFRJdUFTT2ZTRGdXQzJJa21Ibkw1MnAxQXB3aWxqM0lz0gG0AUFVX3lxTE9fZVJhcUhfQmtoNFdpeTFRR1ppdGJfdDY4TUtRalVwcjhrNzZOWmpoUFoyZHR4c3NKaHJ1OEc0YnBWcV9WOHJ1QkNtb0h3cGV6N2xvV2hFZ0tBaFJfMHREZVliUjBKVnhPWnhfZ19qanVjUzJuN2JBcG5kOVZUTVZjUHlIOW1xc0dmWnhHZW03TEtWQU1UOXJKbGtjS19kaFFMUlN1MVptcWVMN19VWElxRVllOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 250
    },
    {
      "date": "Apr 18",
      "text": "A French soldier is killed and three others wounded in an attack on peacekeepers in Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxPWl9XRGwzTm96b1N4RkFOekl1UUNteF9HeWo0RHNQcUhGU0t4OFh1YWlFQi1mb2E5aUJocWdKdVVUMWZFS3FSek1IRGhHSUFqWTdpSUlLR2lvd0hKckRwaHEtU1JubkZMMWk1Rmw1OW9jOTY4WmliNDlMSW9oNVRJcXhKVkQwUUdVM3hMdm9IaDl6cXRLLVBWanl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 250
    },
    {
      "date": "Apr 18",
      "text": "President Trump threatens to 'blow up whole country' if a deal with Iran fails.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxQYnR1QVRoREV1UFFLd2RMMGp4S0EzTV9XYVJTMDdlV1lsZTdvOUVmd3RQWWQwOXNFT0FxcTIwMVFtbU92TnBuU05DSzBtU2lIWWdVQzVpdWVVSWVIOXhlZ3dmS1hDa252NnhMN1lHZWk3OVFkSG1nNjlfcGtHdFJRS19rc090THpQR3ZBWHZkME5ibE1FZU5Xa3hNZGRVaGVvdmRHdjcxcnFKejdsU19fcVJISmlldWRPSUNaMXpR0gHDAUFVX3lxTE1nUkZmaTJhYVVqNEExUklsazNjR1VVQUI5eFZfVUd4Q1p4Vi1RdkRlcjlVMDRuWkJtRDc5b0Y0UGYwOHRFTmpJbWlzSFNSeEtoUEF0bmdNclpuTld4UlJJZ1A3SXBfTlZqV05uYXRNeHdxSm56VnQ4WUVJNzAwYUJtdUh1T0JIYnpWTTIwcHo3TmdaX04xaHZwTTNwaDRTekpWbzNJa05JODdval8wZzFKVzY3eVJIbFNuS2NfdlRXc0IzVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 250
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
