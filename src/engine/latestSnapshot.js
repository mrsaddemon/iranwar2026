export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1245,
  "lastUpdated": "2026-07-11",
  "lastSyncedAt": "2026-07-11T10:02:26.727Z",
  "warDay": 134,
  "summary": "The US and Iran are engaged in a cycle of tit-for-tat strikes, with a previously fragile ceasefire now declared over, while diplomatic efforts continue amidst heightened tensions over the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-07-11",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "The previously fragile ceasefire has been declared over by the US, with both sides engaging in renewed strikes."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Jul 10",
      "text": "Trump threatens to ‘decimate’ Iran if it tries to kill him.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxQOTZxZFcwTy1SYWVwNF9fbHE1cW5FekRidTZxUE5ickx6M2cwekVTVkc2eTY5ZGh2YWJFcWJRcmYtMnNQT3g4ZjJQYjdGRVpQZGd0LWpFVEh5LU1WSUt1ZlRVaTBsbXI0cEJDWGdOWXZRYUppM0JhTFJvekY2bFJ3MG02S1l6cGtqSVBNc2VRV2FhbkdpR0pKMHFnTUl6ejRZWmVWaUd3WmNVaS04ZVBRV1V6dW81bzBpTmtaUW1SeEE5d9IBxwFBVV95cUxNRm5pVE40OFNwLXdrN0t0STd5MktaVHVzRHhvM3AtekdBVkVyY19UWWpDM2lhRV9rWTVTcklWWVcySWdabWg4QmRlVWw4ajFQeS03RGhZdFpmWkhKT3BnSXI3MEdHZENYQnJIVkhCUmNveEtWT1N4MkhDVVRLSVRZcGpHTE4tQzhaZzZFMTdlT29hdDNYclpWMkI0TFZPZUlqcFNhTjY2eDNocU9aMWU5YXI3YUpjTjJLMlE3NGtIYkpzRXhPWWFV?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1244
    },
    {
      "date": "Jul 10",
      "text": "Mediators work to de-escalate US-Iran tensions and revive talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBpaGF3XzYyR2V1VW9XRTB1NEtRRzZweFd3Snd3R3dJeEo3Ti03UHBqanAwXzN3ODBYRWhycGV6eTY2c2hHcnlwRHNxcVNfSUZuMm41a1p6NUFXbldMTG1MS2lJV0FPM0xUb2NaZW9n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1244
    },
    {
      "date": "Recent",
      "text": "US demands Iran publicly state that Strait of Hormuz is open and Tehran won't attack ships anymore.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQMkgxNzlSWHpvYWVhcGhmNkJTRzJIa2R1Z1ZfOGJYdElvenoxa2diSHR6bTFJaWx2M0VZZ0JWM2Y1VjZrYzBOWTlFTUdLNHk2YzFWZGJJazJNSHU2VUdDbnpHaURzc25SeS1PVXp5dEJVWWdhbDdwUkNCTHhlUVQyXzZYOG5ZNlNSektpNUpYbFNYOEs0ZTl4Tk96SHd6b3M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1245
    },
    {
      "date": "Recent",
      "text": "U.S. and Iran sink into violent cycle after latest strikes.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1245
    },
    {
      "date": "Recent",
      "text": "Trump declares ceasefire ‘over’ and Israel signals readiness for another Iran strike.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxNVGhJbmhJU2lDMjV1a2JaS194aFozMFQwaXV6QVM1S0pLbzNucW5ESEdZa2tESV9TYjIxcElOMFhVY2l2YVVZaUhKbDI3TXFoVG45Z0I1TDBGbDlNZlVtNjYxNGdJTTRpcjRDTXZHUTlpZzRXQWRmSzZaTlRHeVZpUEEwdzk2YUVMSTR2Uy10YzJfRWVnZzVoX09rcUJ0ZUNSTVk3ZDRqWdIBrAFBVV95cUxON3c3LWtNV3VmT2M3QzRFTW9rdVd3LWt2RDFaLUdjc0NkMEFfdmpxanZDMFItYjJ0cDAyWEJfTXcwVkZ6MkpJTWNmb3ZiRzJOaWh4M0Q4bGxBaGpPUVZvRUl3V01ReThsUE5VT0Fjbk1iOWVUNUNENkpaRjA5U3RBQ0xWdXZ1X195VmlzZmxjSHk1YWJrNlJYV1RMSXQyR0ZmRGJEbUNRWDVvVWNF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1245
    },
    {
      "date": "Recent",
      "text": "US launches new airstrikes on Iran, with Tehran firing back at 3 Gulf Arab states.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxQTXRXN1ZOY3dWb0Y3bFliM0t6QVRjQkxGNmNRRkVPM29YazVXaXVpaFo3N2h2MHdBLUlTMWNROTJuTUJQNFhaR3BwTzV5b0NDYk1WOG5NMXRHLWhuNHF1NXJqOFM0Vzg2TWo2bXRCUS11WmFEeU45UURDV0dqX0szLWxfbkptQXFxQVJXM0hjY2lkS1VJdkljZWFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1245
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
