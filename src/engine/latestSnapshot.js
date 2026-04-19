export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 246,
  "lastUpdated": "2026-04-19",
  "lastSyncedAt": "2026-04-19T10:04:10.870Z",
  "warDay": 51,
  "summary": "The Middle East conflict escalates as Iran closes the Strait of Hormuz and fires on ships, while a fragile ceasefire between Israel and Hezbollah faces violations.",
  "lastNarrativeUpdate": "2026-04-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A ceasefire between Israel and Hezbollah is reported as fragile, with recent violations including an IDF reservist and a French UNIFIL soldier killed."
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
        "aggression": 0.9
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
      "text": "Iran closes the Strait of Hormuz and fires on ships, imposing new restrictions.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxNZm9WRHN1VHF4X2lmVmQ3OFRLTzlUN3ZWLWtMbWhwMWV5T2JSLU9FbV8zMGE2UkFiZ2xBMEt4UG9yQWNsMHVKUnVBM1B2bGRVUU9IWnJ1TU5aYTEyTjFfMXJkMkVXRERmMEFmcC04VzU4Tk55REtrR3ZOR1h6aDhBMDhyZHp3NW1FbXZLMWNYbXNmN3JwemJ4MzN6amZGcjQy?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 246
    },
    {
      "date": "Apr 19",
      "text": "US military turns back ships amid a blockade on Iran, insisting war goals are almost met.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 246
    },
    {
      "date": "Apr 19",
      "text": "An IDF reservist and a French UNIFIL soldier were killed in Lebanon, with Israel accusing Hezbollah of ceasefire violations.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNVTZ0dllXUXlSMlBJQ3h4VXhiTEhubW9WOEJOajY2Y0hoc2prX00zOWxTVHFjTGJWNF9Pdi1XN3V5NTVGRTVqS0FrUVNaRXVfSXdrUW11TVo2QXItWndrZFdwb1QwMHY4TDEzcW8tV2FEZnVUZTVFa1EyaU1SNGtDbTlJWDlBSlZLaHpfeVk0N1dlNF9veEZSNEhFU1FRQTlrS0ZDaGh0RjFZZHllXzVVRTBieTJBd1lzdFlhQVEzcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 246
    },
    {
      "date": "Apr 19",
      "text": "Iran states no intention of negotiating with the US for now, urging Middle East countries to expel US military.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPMjIwNGoyVUNRaFpyWllDU3VIdjkxcjdhR3dsbmdELUplaHQ2TmxfdWpMb0ZDZjR3a1VoUGNtcmhxUTVIVVdFNFNobmZDNDJmQXVKc2xMQkNBVFZkZkR2d0JKdGZFSDh2S2ZnbTlwaUFZYnNxWDg1YVZreVVGSGpBTEM0Tm15NUM4UDVtaWRQaDl4TkRNa1F1SFRnQWJQNXNzbTZwQjAxUXFYVnNmSTUtMGhuYTB5a3lJVjlrVjZ1c9IBxAFBVV95cUxPTVJNZjBDXzJSZlVnWjZJY2VEbUdPMmlISVFRR3o0NWlEaWlOLVVyaXA3bzBjVVpJSFNfYjg1bnl0cTZtckZxX0VpdU96TkpoUWFsSEdsRkZyWnBzMlJYWmRmUUtraHBoQW5ob3JQZFR2SVU1UG1QbXowZzE0MjFubkhyZFBmUlpMcFRaTklQQjJSUVhPQm1vZmx0c0JIRmtZNXBUVWVwNjZmcDRBTGVaV0pOb0NUdFh0ZWd6Um90ekFTR2FU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 246
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
