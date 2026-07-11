export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1247,
  "lastUpdated": "2026-07-11",
  "lastSyncedAt": "2026-07-11T12:08:12.572Z",
  "warDay": 134,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-11",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 2,
    "summary": "The ceasefire has collapsed amidst a violent cycle of tit-for-tat strikes between the US and Iran, with Trump declaring it 'over'."
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
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
      "text": "Mediators work to de-escalate US-Iran tensions and revive talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBpaGF3XzYyR2V1VW9XRTB1NEtRRzZweFd3Snd3R3dJeEo3Ti03UHBqanAwXzN3ODBYRWhycGV6eTY2c2hHcnlwRHNxcVNfSUZuMm41a1p6NUFXbldMTG1MS2lJV0FPM0xUb2NaZW9n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1244
    },
    {
      "date": "Jul 10",
      "text": "Trump says agreed to talks with Tehran, but ceasefire ‘over’.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxPak5sUE5NcGZ1TlY0bjF5WTI2WVI4ZmNCLXBrcHkxcmladU5idm91RGVuWTJLYkJkVW40ZUdfSUtqWGVZSVVtWlNWYTRhWEIyNE1wQld2NzJjOGQxU2YyTWFLUnI2Q1NkX3JJcWVab2FQWHNjMFdvYk5zU1ZQNV80ZjVUMlEyLVMtbDRZRkVqZ2xzRHN0RTBucDRLb2VlZ2I3Mkl1Z2ItMnF4aXZuazJrZNIBtgFBVV95cUxNcDZKVURqTm1IQlR4UGhnM3BaeEhHYUkteld2dGdZNVpXckZnZUlXZ1l1dnlld1V5SVV5UjlsWkFFS19VUFlIYWUzcFBmMG13Z1c3SVA2TF9GdjVYamRqRW5Nc2piOVlYYzhOZFFfcGVQdTAwWlFDRU1aQTJOZUNVQTVad2FFR0YtOE5qM0dFY3ptbHBNUEZEYUpPS1hSUG94aVJES1ZEOG5fWW1Jd2xla0paX3lmdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1247
    },
    {
      "date": "Jul 10",
      "text": "US demands Iran publicly state that Strait of Hormuz is open and Tehran won't attack ships anymore.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQMkgxNzlSWHpvYWVhcGhmNkJTRzJIa2R1Z1ZfOGJYdElvenoxa2diSHR6bTFJaWx2M0VZZ0JWM2Y1VjZrYzBOWTlFTUdLNHk2YzFWZGJJazJNSHU2VUdDbnpHaURzc25SeS1PVXp5dEJVWWdhbDdwUkNCTHhlUVQyXzZYOG5ZNlNSektpNUpYbFNYOEs0ZTl4Tk96SHd6b3M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1246
    },
    {
      "date": "Jul 10",
      "text": "U.S. and Iran Sink Into Violent Cycle After Latest Strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMicEFVX3lxTE5zR2FVTHZrcGRpMzdzaU11YWZTMU9GN2ZWbTFtNkM2YkNRWGh6cEoxdlhQa0Vvd2FpbHVuXzZiWHJRTVBWNU5VU2Y2ZkRVOVNvYjhzMWJMSUs2d0ItV3hoRjFfT2NpUmlGYzBsSHVGRGY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 1247
    },
    {
      "date": "Jul 10",
      "text": "Tehran launches more strikes as Israel warns it is ready to strike Iran again ‘with even greater force’.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3AFBVV95cUxNSzZmYVBxWmdLdUp5NUhCSXZrMnpVeG5lUWJSRTFMMDBuRUpfbHBJYlU3S0R4S1FwblBZZUhuUVZiODJ6OXRkUmhhRktaVXNIdUIweWdBZ1FWckZVTWxWV1FoOGpVbldETUk0cFRONXVXazJhaEh5aHRQQVYyell0amFnNVRZZ1JLZnZZX2hOT25WYkdsUEJoLWZ4NGVaSEF5SGlCel85c21HMENZc1M3RWltRG94Zkp0a1p1Z1FaM1hWR1ZaN0hNdVdJSmQ5c21GdVRjMTA4TmtuMU54?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1247
    },
    {
      "date": "Jul 10",
      "text": "Iran and U.S. ramp up tit-for-tat strikes as Khamenei laid to rest.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxPYmQyTXJRVFgtVE1uM1MtLUhNb0dLaUNLMUxyYUpLcUhHWmowR2JhZGZtamJZaWJNNG13TkI5RFU4N19sZHl3czZkblU1Mi1tcDVCUjlRTGdXWDRLc3Y4bkc3ai1ObmVwQV9oYXdvN3lwVEdhX0F1bk5aUm05WktoZ2FrVm9JQnpfeUQxZF9tRmoxdXF6VWlnYXVKbw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1247
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
