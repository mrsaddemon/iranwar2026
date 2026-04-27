export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 401,
  "lastUpdated": "2026-04-27",
  "lastSyncedAt": "2026-04-27T20:45:31.013Z",
  "warDay": 59,
  "summary": "A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.",
  "lastNarrativeUpdate": "2026-04-27",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "Ceasefire language is present across the source mix with a reported duration around 14 days, but the model should still treat it as reversible under renewed violations or proxy attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 38,
    "oilDisruption": 62,
    "tradeImpact": 35,
    "sanctionsPressure": 49,
    "globalPressure": 52,
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
      "date": "Apr 27",
      "text": "Iran foreign minister presses on with regional tour despite Trump canceling envoys’ visit",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE1PZXZ0MldnT0lyalk3YXZhbWxzTVUtM3FzS2NfTkdTdjBZOGlaY0QtbE9LaFhkenFUOUU3WUQ4dE0yaVZXTGFtZFMtSG5YTU10U2ozcG05d0p4aElRaXh3bXJCM2ZJQkhTSXc0Z2FqWVZWLWU3UVVN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 401
    },
    {
      "date": "Apr 27",
      "text": "Divergent Agendas - The Quagmire in the 2026 Iran-Israel-U.S. War",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxOTzJNNE13YWI5UlY5eG0ycFJHM2JOMUE2OUxpM3FhZ1dmM2V0OGRTTndRTHJSRkRJV3BIRjBXNFVFZ2QxWnNNcGZHTkFTU1FUMmtIdG1DUUFGOTdXOE9OMVpaeHN0UkJaQVVSVE5PcW5oMXZTcnFnUFNjMTd0Mlcxdm43RWdsUmxVS05rTk82TVM2Rl8wZ0tWNzhnbS15T3NudnpoU3VXcHJlV245bFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Vivekananda International Foundation (VIF)",
      "latestSinceUpdate": 401
    },
    {
      "date": "Apr 27",
      "text": "Iran war live: US mulls over Tehran proposal to end war; open Hormuz",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQMEkzVk1SOVBIR0VyS1ZKNHNkeDR3MlJhazd4djI3bTNfcDBsQXFvb1BubDVjMDJsV0RoNE9VN3hKb1c2cmJhS1pWYngxVFF2U2Vsdmh1Q1NwQ0FpZUxEUGZvN1RsMVNTRmlka3N1TU9aSGgwT2xucnE4dEN3RUdaSVp6eWlqNHU2WHQ3T0tHTGF1ZmJIWW84UnRHTmpjd3FPSy1HdWZteF9Rb2NsMnlXT3dvZ0IzTE51ZXRkWTl0N3bSAcYBQVVfeXFMUE5fdWNVcFJ0aTVjaUQ0UGxkbC1VVmRHbmtIMjJ4MnpUX1hzTDRRVFFEc19nSTBQdzZubDJOM2Jwc3ZMRENyZWRJdkZZbURVTU9Vb0o4bW9lOXplSlJCMXZRQ1JBSjQ5aUVsaC1hQ0RXNG5Hb3FfbkZSbmtIdG5hRTd3NHd0Ny1wS0JzVVhsWEgzN0wxVk1KZDh0X0hFcFJISHg3eW9mTVhjeEUzQk9paUNxaWdrRndjSUxVQ1o3T2NuR0VUS09n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 401
    },
    {
      "date": "Apr 27",
      "text": "Iran war: What’s happening on day 59 amid diplomatic push to end conflict?",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxNS0I2T2huOWVESVlHY3lVV09xWGtDQ3JUMnlsTmtONFZESkNLeDJBaTFNaXlSTWUxazZkckVGamNuN29oMk5hWl9ONW1ZamxBVVFMcklXbmhNeWFSa2ZVZ2xmQll5UWQ4NjBENmxXc1J4bVhwMWRzZUFrcGVTM1YtV2JzWlZxTy1TaWhVYmdxS2dqRy1fcFVZV2dJckgzak1fN2VwUWN3d2NwZTQ2NXc3YkJR0gG3AUFVX3lxTE0wVjU5QXZnR2t5eEdId0hpWWgwUVNuZUZaUGNjQnltZHlOTUFGdER1N2EzR3BRYktIQTN1LWgyRGhpTHczQkhiSVgtb1JVRUhxcnZzazBXRDJaZUF0YUVSRExRSk5zZjRQSGhuWG9wZEp3dDRuZ2ZJa3dJRUY5Rk1Pc09kWEQyMTVGaVkxcE5zZld5Wk4xbzNBbHJWWjlHQzBob1hhY3A4dmE5MGRNRGNNWHRNWHFJQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 401
    },
    {
      "date": "Apr 27",
      "text": "Iran war updates: Standoff in Hormuz continues; Israel and Hezbollah battle",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPUHRKVkdSQmxQT0I2eWRvX2FEOGRBLTRwSUFhcU1Idkw2azF2bzlvUlFWTDY0dDNCaUJMeU5pX0VQZkxaZ3lhUHlrUnBuTHI1bXAwRkNHb2NDenNOci02VDI1ZW9MUW1MdTY5dzZJZ1dnb0VUUkNxMzBGNlhiaVk5dGdHTzczQ25CM2JSR3I0LUdXYmZSX0xQX21naW5kWmdXLTRnbk5RaUtWQnVSOHdfd2paYXNiT2ZHNlJxVFhzQdIBxAFBVV95cUxPVmxjYnJSY2dBbnBKUDNMWmVCcmh3c3Y3Y3phSzRiX1VsYmo1dnhiU3JzbGd1cEoxZWdCbUVfVkpmdndNZFBtWnpoTTFONGJGNzU0dUcyWGN3SVdSQzI5NE40ZDJzY25hTUFtT2xCMEE3NkxrME51WW9iQTJFZnMydGNDay1mRUtHUk92TzdKWFhHUDduOHZ0c0d4VlB5dTg1TXlYei13WDB5WFdwd0hqSDdKUUdaNmhwbmZUMjIybkZYMkU3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 401
    },
    {
      "date": "Apr 27",
      "text": "Israel and Hezbollah Trade Strikes in Lebanon, as Iran Talks Remain on Hold",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiywFBVV95cUxNdk1WRGZBbXdrSjVVa18tZVNXeExBdlBTdTJWOEh1aEVtSHNtRnBjOUtJdnpaU21nVmFTVGw2dFBFbzFrS0lUZXBRMy1oNlVZS3NTbjhDekthNEZHMGdGVTBDVmduUkphekRwMVRNbWV6UGJpbUlnVjN0el9CeUt1ellBdUFQLU4xampaOHZRd0x5cmlseFNsQkN4ckFDUmhUZU1SUGZRVTA2eXdNYWdfdG9heWtBRDJfOEMxT2FseG1qSFdEa0FSMjEtWQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 401
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
      "perspective": "Iran",
      "headline": "Iran Accuses US, Doubles Down on Hormuz Closure Amidst Ceasefire Offer",
      "summary": "Iran maintains its closure of the Strait of Hormuz, accusing the U.S. of undermining trust, even while offering a deal to reopen the strait in exchange for postponing nuclear talks. The foreign minister continues regional engagements despite U.S. diplomatic cancellations.",
      "tone": "defiant",
      "latestSinceUpdate": 392
    },
    {
      "perspective": "United States",
      "headline": "US Ceasefire with Iran Fragile as Trump Cancels Talks, Military Plans Hormuz Action",
      "summary": "The U.S. has entered a two-week ceasefire with Iran, but President Trump canceled envoy visits, asserting U.S. leverage. Concurrently, the U.S. military is developing plans to target Iran’s Strait of Hormuz defenses should the ceasefire collapse, and reports highlight drained U.S. weapon supplies.",
      "tone": "strained",
      "latestSinceUpdate": 392
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Israel Vows Forceful Response as Hezbollah Rejects Disarmament Amidst Escalating Clashes",
      "summary": "Israel has vowed to attack Hezbollah 'forcefully' following increased strikes in southern Lebanon and casualties. A top Hezbollah leader has rejected disarmament demands, calling for Israeli withdrawal, indicating a continued state of conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 392
    }
  ]
});

export default LATEST_SNAPSHOT;
