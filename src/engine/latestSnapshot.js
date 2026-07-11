export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1249,
  "lastUpdated": "2026-07-11",
  "lastSyncedAt": "2026-07-11T15:05:13.659Z",
  "warDay": 134,
  "summary": "The US, Iran, and Israel are engaged in a cycle of strikes and threats, with Iran's Supreme Leader vowing revenge and the US declaring a ceasefire over, while diplomatic efforts continue.",
  "lastNarrativeUpdate": "2026-07-11",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "The ceasefire has been declared over by the US and is imperiled by ongoing strikes and threats from all parties."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.9
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
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "date": "Jul 10",
      "text": "Iran's Supreme Leader Khamenei states revenge for his predecessor’s killing is ‘inevitable’.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxQOTZxZFcwTy1SYWVwNF9fbHE1cW5FekRidTZxUE5ickx6M2cwekVTVkc2eTY5ZGh2YWJFcWJRcmYtMnNQT3g4ZjJQYjdGRVpQZGd0LWpFVEh5LU1WSUt1ZlRVaTBsbXI0cEJDWGdOWXZRYUppM0JhTFJvekY2bFJ3MG02S1l6cGtqSVBNc2VRV2FhbkdpR0pKMHFnTUl6ejRZWmVWaUd3WmNVaS04ZVBRV1V6dW81bzBpTmtaUW1SeEE5d9IBxwFBVV95cUxNRm5pVE40OFNwLXdrN0t0STd5MktaVHVzRHhvM3AtekdBVkVyY19UWWpDM2lhRV9rWTVTcklWWVcySWdabWg4QmRlVWw4ajFQeS03RGhZdFpmWkhKT3BnSXI3MEdHZENYQnJIVkhCUmNveEtWT1N4MkhDVVRLSVRZcGpHTE4tQzhaZzZFMTdlT29hdDNYclpWMkI0TFZPZUlqcFNhTjY2eDNocU9aMWU5YXI3YUpjTjJLMlE3NGtIYkpzRXhPWWFV?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1249
    },
    {
      "date": "Jul 10",
      "text": "Mediators are working to de-escalate US-Iran tensions and revive talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBpaGF3XzYyR2V1VW9XRTB1NEtRRzZweFd3Snd3R3dJeEo3Ti03UHBqanAwXzN3ODBYRWhycGV6eTY2c2hHcnlwRHNxcVNfSUZuMm41a1p6NUFXbldMTG1MS2lJV0FPM0xUb2NaZW9n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1249
    },
    {
      "date": "Jul 10",
      "text": "The US demands Iran publicly state that the Strait of Hormuz is open and ships will not be attacked.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQMkgxNzlSWHpvYWVhcGhmNkJTRzJIa2R1Z1ZfOGJYdElvenoxa2diSHR6bTFJaWx2M0VZZ0JWM2Y1VjZrYzBOWTlFTUdLNHk2YzFWZGJJazJNSHU2VUdDbnpHaURzc25SeS1PVXp5dEJVWWdhbDdwUkNCTHhlUVQyXzZYOG5ZNlNSektpNUpYbFNYOEs0ZTl4Tk96SHd6b3M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1249
    },
    {
      "date": "Jul 10",
      "text": "The US and Iran are sinking into a violent cycle after latest strikes, with Trump declaring the ceasefire ‘over’.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1249
    },
    {
      "date": "Jul 10",
      "text": "Israel signals readiness for another strike against Iran, warning of greater force.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxNVGhJbmhJU2lDMjV1a2JaS194aFozMFQwaXV6QVM1S0pLbzNucW5ESEdZa2tESV9TYjIxcElOMFhVY2l2YVVZaUhKbDI3TXFoVG45Z0I1TDBGbDlNZlVtNjYxNGdJTTRpcjRDTXZHUTlpZzRXQWRmSzZaTlRHeVZpUEEwdzk2YUVMSTR2Uy10YzJfRWVnZzVoX09rcUJ0ZUNSTVk3ZDRqWdIBrAFBVV95cUxON3c3LWtNV3VmT2M3QzRFTW9rdVd3LWt2RDFaLUdjc0NkMEFfdmpxanZDMFItYjJ0cDAyWEJfTXcwVkZ6MkpJTWNmb3ZiRzJOaWh4M0Q4bGxBaGpPUVZvRUl3V01ReThsUE5VT0Fjbk1iOWVUNUNENkpaRjA5U3RBQ0xWdXZ1X195VmlzZmxjSHk1YWJrNlJYV1RMSXQyR0ZmRGJEbUNRWDVvVWNF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1249
    },
    {
      "date": "Jul 10",
      "text": "Iran says it hit U.S. military targets in the Gulf, though the US military denies involvement.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxPdjRwNlJIX3oycGNxWHN4N2tfRVlNTDhRTHhJa0R5eEYxZWkyZzRNaEFKWFhzWFlBUXVZeHp2TV9OdGloaF9kcDY1QVRwVTlkQURDOWhNVURoOU1FZHYteHlITHU3QUlnNVB4TzRJdWh4MjlQWVI5cnF5TmhHdDRrLVNRMjJEVVVsTU1nS01LWGtDNFprZGo5M003QUdKN3PSAaQBQVVfeXFMTV9MbG9lRWhnUHBtTl94Z0ZFdFRjRVNPUnJacjhkd3dFdnlzWTRmeGhPV3cydElseEZKODZ0by1YNlRzVmIzejcwcm5KOFNfMmh5aXl4dnB2dHZpX0lCV2puNlZJN3hua2l3MlM4RklraGZBWFBIR1hMeGlvS3FEMWR5b0QxM0MxVTdWZzFTMVdxZmxDZ2JqVWtlS3I4WmhxZEZ4b3U?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1249
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
      "perspective": "United States",
      "headline": "US Demands Open Strait, Continues Negotiations Amid Strikes",
      "summary": "The US maintains its right to respond to Iranian aggression while seeking to continue negotiations and ensure freedom of navigation in the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 1241
    },
    {
      "perspective": "Iran",
      "headline": "Iran Retaliates, Mourns Leader, Defies US Demands",
      "summary": "Iran asserts its right to retaliate against US strikes, mourns its leader, and views US demands as provocative amidst ongoing conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 1241
    },
    {
      "perspective": "Israel",
      "headline": "Israel Targets Hezbollah, Signals Readiness for Iran Action",
      "summary": "Israel continues its operations against Hezbollah in Lebanon and signals readiness to act against Iran, viewing the ceasefire's collapse as a critical development.",
      "tone": "anxious",
      "latestSinceUpdate": 1241
    }
  ]
});

export default LATEST_SNAPSHOT;
