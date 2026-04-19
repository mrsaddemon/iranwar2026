export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 251,
  "lastUpdated": "2026-04-19",
  "lastSyncedAt": "2026-04-19T14:28:00.592Z",
  "warDay": 51,
  "summary": "Iran has again closed the Strait of Hormuz and fired on ships, escalating tensions amidst Day 50 of the Middle East conflict, while US President Trump issues severe threats even as fragile peace talks are scheduled and a ceasefire in Lebanon faces violations.",
  "lastNarrativeUpdate": "2026-04-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 7,
    "summary": "A ceasefire between Israel and Lebanon is in effect but remains fragile, marked by recent violations including Israeli strikes and Hezbollah explosives."
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
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
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
      "text": "Iran announces closure of the Strait of Hormuz again, citing ongoing conflict.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 251
    },
    {
      "date": "Apr 19",
      "text": "Iran fires on ships in the Strait of Hormuz, imposing new restrictions on maritime traffic.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE9EQVl4S0hjYWFiVnBPOEJPNEJPVnRqeHlqNmd3dzN0aUp2czNlNHk4QlpxVnJGb1kxZ3JoX1luTUVfOFFFSTRIRVhiMU80M2gxNjZSdDBjeFM0bE1TX0RpQkRwUmVvZHM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 251
    },
    {
      "date": "Apr 19",
      "text": "US President Trump threatens to 'blow up whole country' and 'knock out' Iranian power plants if a deal fails.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxQYnR1QVRoREV1UFFLd2RMMGp4S0EzTV9XYVJTMDdlV1lsZTdvOUVmd3RQWWQwOXNFT0FxcTIwMVFtbU92TnBuU05DSzBtU2lIWWdVQzVpdWVVSWVIOXhlZ3dmS1hDa252NnhMN1lHZWk3OVFkSG1nNjlfcGtHdFJRS19rc090THpQR3ZBWHZkME5ibE1FZU5Xa3hNZGRVaGVvdmRHdjcxcnFKejdsU19fcVJISmlldWRPSUNaMXpR0gHDAUFVX3lxTE1nUkZmaTJhYVVqNEExUklsazNjR1VVQUI5eFZfVUd4Q1p4Vi1RdkRlcjlVMDRuWkJtRDc5b0Y0UGYwOHRFTmpJbWlzSFNSeEtoUEF0bmdNclpuTld4UlJJZ1A3SXBfTlZqV05uYXRNeHdxSm56VnQ4WUVJNzAwYUJtdUh1T0JIYnpWTTIwcHo3TmdaX04xaHZwTTNwaDRTekpWbzNJa05JODdval8wZzFKVzY3eVJIbFNuS2NfdlRXc0IzVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 251
    },
    {
      "date": "Apr 19",
      "text": "Vessels are reported stuck in the Strait of Hormuz following Iran's closure of the key waterway.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxPMzZuR3JxUmVJWTFpUm9JR1RhcnAwNHJzdnZUY3FrczdDTnVFeDhfUEVHbExYd0FzbFdVbFdJUGpqRWFIVE1yVW1kYjI1TFllclZpaXN3Y18wQVBvdl91bGozVGZwSG51UmZTMlRkMF9kZ2N5RFZROTNCLTlsb3FxMnBjTEtuMDNvRjVBdjBseTFuand2aFdEcy1yZmFUcFBLMU5HTjNoel9EZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 251
    },
    {
      "date": "Apr 19",
      "text": "Israel strikes kill 4 Lebanese medics, threatening the existing ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi8AJBVV95cUxPZG4tS3g4YTJ2TnB2LU51V0JEZzJvYl9LTnhLS1FNRGlSRWRUUW9hOXhONFJ6WEk0S2ZteW40VUZ3UnotOHJQNldJM2IzWW1WRUgyRDVNd2hvU3FZN0RXamdER3ZqaEp3Y2V6NFZFUlZ5RHhlRS00blpybGVoSEJpTG5GX01UV1ZWV1F5Y3g0UWFpVkIxalEzdklWamhsT2Fxb3M1ZGVZNjBRWlFQeGlnRE5rZG9JMWJVMEhUanZSTVA1N1g1Q2NoMFdOOFZxa2NyRV9aRnpJZk5xaFlJVnpVYmJEdDdDSWFwSUZrRjYxbUVxa0dTRDNjYWs5VU5wVjBfOUI2ajBkeUt1Wm4wNVR6Vmp1TVNobkprSlFBWWY4T3hZemhPai05dFRiQ2NNS2dYRXUtYjgtaVhZMVBxN1NvYkhyUDZOQXEzQ3B2dGR2a1p3M3ZoTFZMVDhwMGhLVTcwMDdlZE1ja1Z5ZnBYMUJ6dg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Deccan Herald",
      "latestSinceUpdate": 251
    },
    {
      "date": "Apr 19",
      "text": "A French soldier is killed and 3 others wounded in an attack on peacekeepers in Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxPWl9XRGwzTm96b1N4RkFOekl1UUNteF9HeWo0RHNQcUhGU0t4OFh1YWlFQi1mb2E5aUJocWdKdVVUMWZFS3FSek1IRGhHSUFqWTdpSUlLR2lvd0hKckRwaHEtU1JubkZMMWk1Rmw1OW9jOTY4WmliNDlMSW9oNVRJcXhKVkQwUUdVM3hMdm9IaDl6cXRLLVBWanl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 251
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
