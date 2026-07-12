export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1261,
  "lastUpdated": "2026-07-12",
  "lastSyncedAt": "2026-07-12T09:19:07.968Z",
  "warDay": 135,
  "summary": "Escalating military exchanges between the US and Iran, including multiple strikes and Iran's indefinite closure of the Strait of Hormuz, continue amidst Israeli threats and a fragile ceasefire in Lebanon.",
  "lastNarrativeUpdate": "2026-07-12",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "The US-Iran ceasefire is reported as 'over' amidst active hostilities, though a separate ceasefire in Lebanon remains in effect, allowing Hezbollah to regroup."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
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
      "text": "US launches strikes after Iran fires on a ship in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxQNVNPY0lhcGZoRXpWWmVWclhKWGcxQWM3OG1ncGdmVkJZbEd6djExLU5nVjlMdk9abUZ5WHJZVThDaWktMi1FSW9DUU0zQ0syN2ctOUlGcU9NUjFwd2w1OWFDUDNZSHRPd1RMYVhvN2lSLVpYUDFEeXEyTnM4bVpGRXVwX1M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "DW.com",
      "latestSinceUpdate": 1261
    },
    {
      "date": "Jul 10",
      "text": "Israeli leadership signals readiness to strike Iran again as US negotiators head to Oman.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxPX2lSb1hPcXFEVm1UUnhEZk1YTlFJZ0gwVmdPVWNwcXpEcVFwc0hUME9JOExHcGdMLXloYm1ISUFpRUk4N19vWWhmbUROZDgzdThuZEhvMkRMNmlVbHY4MWlVU2J4eVp5WjZzZ01KVFF0MFpWM3duT2JIaExRRm5kSl9IQUxpVkNGcEZVM0NZcXN6Z3JjUHBEVnQ0cw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1259
    },
    {
      "date": "Jul 11",
      "text": "US conducts another round of strikes on Iran as Trump and supreme leader exchange threats.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikgFBVV95cUxOd2FLbExRcUwzLVpNZmVpbGdLVUttNC1uaDFnUmxZS2lleVNqZlI2WDdTOGVvSFc4M0w2dzh4RVdyRlNQWUNnVXRqZWw1WjJDUWdfWmN6TU9XbkNRYVhTX0kzem83cHprdmc4bVRWQThSZDJ3TUVQaE5raDJwMzFMM2FJOTlNQy13UlZPTEJjWVhKdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1261
    },
    {
      "date": "Jul 11",
      "text": "Tehran launches more strikes as Israel warns it is ready to strike Iran again 'with even greater force'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3AFBVV95cUxNSzZmYVBxWmdLdUp5NUhCSXZrMnpVeG5lUWJSRTFMMDBuRUpfbHBJYlU3S0R4S1FwblBZZUhuUVZiODJ6OXRkUmhhRktaVXNIdUIweWdBZ1FWckZVTWxWV1FoOGpVbldETUk0cFRONXVXazJhaEh5aHRQQVYyell0amFnNVRZZ1JLZnZZX2hOT25WYkdsUEJoLWZ4NGVaSEF5SGlCel85c21HMENZc1M3RWltRG94Zkp0a1p1Z1FaM1hWR1ZaN0hNdVdJSmQ5c21GdVRjMTA4TmtuMU54?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1260
    },
    {
      "date": "Jul 11",
      "text": "Iran attacks Jordan and Gulf states after US bombardment.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNNUQ3WUlhM20yeHk1R3dza2tqeEh3bFZxc0NoZV9EalJtbXN5eENla21JTGEteThpUmlSSDh3S0dENmRoY3FBcjhLWkZyN2VuRjIyV0xkZzhRcVk3ZHNIT3NtdHlqdTBVYl8zOWFVWHoxWTFleFFJTDV0V3pkSXdwVE0yMlZLSE13V2lnTkhneGlZQ2pDMzl0cTJ3VnFCeW03YkNGSHNrM2d5Slo3N0JGRm5BVFV3WjJrUFhQbmVRUdIBxAFBVV95cUxPaXllUUVXQ1hGUDNITDk2RF9GVjlpOEM1ODlTLW1UTlNkVHVQY3pKSmxvOWVwaV94LUhWa1VUUFRPMUttdlJVclRWTkZ3RllFZFVSMnNtckVoOWp6ZlJ5UzNsTndjTnd0YjJjNjhiXzhzWlNOX0NtMXZ0bVQ1MWhDaF83cEU3TEpKYTdXZVNEN2JuUkg2SWZmcDgzWWNXR3pCTjZIUjY1V1lxc3VaSXBlOE5DN01VSzd3SUJERFVuc09IcjJn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1261
    },
    {
      "date": "Jul 12",
      "text": "Iran-US war latest: Strait of Hormuz closed indefinitely amid fresh strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixwFBVV95cUxPWDQtbVBHRGVsVFFCT2Y5VmNfNExJSmxzUjR6NURTUFhQbjIxTXU3U09GQk5hd3ZyMFcxY2pvMmVIbG5YM2d0U044VUZDa3djc2RZZ1ljODNNeERrbVpsTkFDYnZ6RGswWGR0NTJnaEp6eG9JWXNueTlqb1hSOC1DTUg4UTBuSFNiUjFDeExtSDhEMnVHaVZQejNkWEV0c3NEdkE5M2IxSnhyQWRva2VQLVJXa21QUGNCMzdUUWtLa0dKd3NCMF9r?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 1261
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "status": "unavailable"
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
