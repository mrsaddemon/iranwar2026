export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1260,
  "lastUpdated": "2026-07-12",
  "lastSyncedAt": "2026-07-12T07:10:43.461Z",
  "warDay": 135,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-12",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "The ceasefire between the US and Iran has been declared over amidst escalating military exchanges and threats."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "text": "Trump states agreement to talks with Tehran, but declares ceasefire 'over'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxPak5sUE5NcGZ1TlY0bjF5WTI2WVI4ZmNCLXBrcHkxcmladU5idm91RGVuWTJLYkJkVW40ZUdfSUtqWGVZSVVtWlNWYTRhWEIyNE1wQld2NzJjOGQxU2YyTWFLUnI2Q1NkX3JJcWVab2FQWHNjMFdvYk5zU1ZQNV80ZjVUMlEyLVMtbDRZRkVqZ2xzRHN0RTBucDRLb2VlZ2I3Mkl1Z2ItMnF4aXZuazJrZNIBtgFBVV95cUxNcDZKVURqTm1IQlR4UGhnM3BaeEhHYUkteld2dGdZNVpXckZnZUlXZ1l1dnlld1V5SVV5UjlsWkFFS19VUFlIYWUzcFBmMG13Z1c3SVA2TF9GdjVYamRqRW5Nc2piOVlYYzhOZFFfcGVQdTAwWlFDRU1aQTJOZUNVQTVad2FFR0YtOE5qM0dFY3ptbHBNUEZEYUpPS1hSUG94aVJES1ZEOG5fWW1Jd2xla0paX3lmdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1260
    },
    {
      "date": "Jul 10",
      "text": "Mediators work to de-escalate US-Iran tensions and revive talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBpaGF3XzYyR2V1VW9XRTB1NEtRRzZweFd3Snd3R3dJeEo3Ti03UHBqanAwXzN3ODBYRWhycGV6eTY2c2hHcnlwRHNxcVNfSUZuMm41a1p6NUFXbldMTG1MS2lJV0FPM0xUb2NaZW9n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1260
    },
    {
      "date": "Jul 10",
      "text": "U.S. launches strikes after Iran fires on a ship in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxQNVNPY0lhcGZoRXpWWmVWclhKWGcxQWM3OG1ncGdmVkJZbEd6djExLU5nVjlMdk9abUZ5WHJZVThDaWktMi1FSW9DUU0zQ0syN2ctOUlGcU9NUjFwd2w1OWFDUDNZSHRPd1RMYVhvN2lSLVpYUDFEeXEyTnM4bVpGRXVwX1M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1260
    },
    {
      "date": "Jul 10",
      "text": "Israeli leadership signals readiness to strike Iran again as US negotiators head to Oman.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxPX2lSb1hPcXFEVm1UUnhEZk1YTlFJZ0gwVmdPVWNwcXpEcVFwc0hUME9JOExHcGdMLXloYm1ISUFpRUk4N19vWWhmbUROZDgzdThuZEhvMkRMNmlVbHY4MWlVU2J4eVp5WjZzZ01KVFF0MFpWM3duT2JIaExRRm5kSl9IQUxpVkNGcEZVM0NZcXN6Z3JjUHBEVnQ0cw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1259
    },
    {
      "date": "Jul 11",
      "text": "U.S. conducts another round of strikes on Iran as Trump and the Supreme Leader exchange threats.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikgFBVV95cUxOd2FLbExRcUwzLVpNZmVpbGdLVUttNC1uaDFnUmxZS2lleVNqZlI2WDdTOGVvSFc4M0w2dzh4RVdyRlNQWUNnVXRqZWw1WjJDUWdfWmN6TU9XbkNRYVhTX0kzem83cHprdmc4bVRWQThSZDJ3TUVQaE5raDJwMzFMM2FJOTlNQy13UlZPTEJjWVhKdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1260
    },
    {
      "date": "Jul 11",
      "text": "Tehran launches more strikes as Israel warns it is ready to strike Iran again 'with even greater force'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3AFBVV95cUxNSzZmYVBxWmdLdUp5NUhCSXZrMnpVeG5lUWJSRTFMMDBuRUpfbHBJYlU3S0R4S1FwblBZZUhuUVZiODJ6OXRkUmhhRktaVXNIdUIweWdBZ1FWckZVTWxWV1FoOGpVbldETUk0cFRONXVXazJhaEh5aHRQQVYyell0amFnNVRZZ1JLZnZZX2hOT25WYkdsUEJoLWZ4NGVaSEF5SGlCel85c21HMENZc1M3RWltRG94Zkp0a1p1Z1FaM1hWR1ZaN0hNdVdJSmQ5c21GdVRjMTA4TmtuMU54?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1260
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
      "perspective": "US/Israel Stance",
      "headline": "US Demands Open Hormuz, Israel Signals Further Strikes",
      "summary": "The US is demanding Iran publicly guarantee the Strait of Hormuz remains open and free from attacks, while launching retaliatory strikes. Israel has signaled readiness for further military action against Iran with 'even greater force'.",
      "tone": "defiant",
      "latestSinceUpdate": 1258
    },
    {
      "perspective": "Iran Stance",
      "headline": "Iran Closes Hormuz, Launches Strikes on US Targets",
      "summary": "Iran's IRGC navy has declared the Strait of Hormuz closed following an attack on a ship, and Tehran has launched strikes, claiming to hit US military targets in the Gulf. This comes amidst the burial of leader Khamenei.",
      "tone": "defiant",
      "latestSinceUpdate": 1258
    },
    {
      "perspective": "International Mediation",
      "headline": "Mediators Work to De-escalate US-Iran Tensions",
      "summary": "International mediators are actively working to de-escalate the renewed tensions between the US and Iran and revive talks. Efforts are underway to prevent further escalation in the region.",
      "tone": "strained",
      "latestSinceUpdate": 1258
    },
    {
      "perspective": "Lebanon Instability",
      "headline": "Hezbollah Disarmament Fuels Lebanon Divisions",
      "summary": "Efforts to disarm Hezbollah are deepening internal divisions within Lebanon, raising fears of a potential civil war. The IDF is preparing for a prolonged presence in Lebanon as Hezbollah regroups.",
      "tone": "anxious",
      "latestSinceUpdate": 1258
    }
  ]
});

export default LATEST_SNAPSHOT;
