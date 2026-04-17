export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 201,
  "lastUpdated": "2026-04-17",
  "lastSyncedAt": "2026-04-17T10:21:44.305Z",
  "warDay": 49,
  "summary": "A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.",
  "lastNarrativeUpdate": "2026-04-17",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "Ceasefire language is present across the source mix, but the model should still treat it as reversible under renewed violations or proxy attacks."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
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
      "date": "Apr 17",
      "text": "Trump says war in Iran is going 'swimmingly' and 'should be ending pretty soon",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": null,
      "latestSinceUpdate": 201
    },
    {
      "date": "Apr 17",
      "text": "Why the Iran war did not go according to US plans",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxPcWdnNFNvaWdqcW9vanVsdEdUSkw1LVUwR2tJUzVtZFd4eGtOMHlqN094TjJGdTZhNGhManVVb0stM2RsMXU2ekdRUjAxMVlqR3NtRlNBeGVONHRoM1pTQThDMXVfdFZ2eVhaV3hwSG5BOFBvb081WUhqaFY4aGxUeHEwOVF4NHZSNUFQQ0R6bjJfVnZXZ1dqT0lR0gGfAUFVX3lxTFAzUjVNM2szaXdCRlJ2enc5ODFlOGxiRkJXU2dBZXZQOE9Edi1kbXZTaURCbGYtUWFkYUZDUE93NjRQbi1rVTVIWXh1V1pCY1FRMm1nall1OHBYXzZYVDdkMGpLbFg3LUlNNzhfUjhfNjRiRXRVak41cVpmZk40cGJ0M3lvSUhwdnBYeWlhOHNKcF9ZdHM0dFJ4eC1iUG1QUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 201
    },
    {
      "date": "Apr 17",
      "text": "Day 48 of Middle East conflict — Lebanon ceasefire aimed at halting Israel-Hezbollah conflict begins",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE5kcF9vaktZLVViQ0d3Mm53QzdxTG5UaExOUTk3amx6SHN5WDFHZ0tLdFZibC1uNkpsa0wzM1dSOEJQZEhBSFJ2VVlKSURoc0hKT05ZeGlYUDdlM0M2eHJMU1daUDZybDVhWEhZd2RxdXpQdnZjUVRnU2ctRQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 201
    },
    {
      "date": "Apr 17",
      "text": "Iran War Live Updates: Lebanon-Israel Cease-Fire Goes Into Effect",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTE10Q0lhRXhMX2hjajFNX1BFeVFWcVhlY1FjelE0b2tnUHBmUmtwMHBHeEJGdWhVQWlKcXRrZl9HOHlQUWVFd1dHSDJCa3NldEQ2dm1HZU5oeVRKaTlyRmI2a3JVbXBta3N3VmZTQ0NRWlp4LVpVZ2tNUFRRTndDUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 201
    },
    {
      "date": "Apr 17",
      "text": "Iran war updates: Pakistani army chief in Tehran in bid to restart US talks",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNam43bTZtRlVmOGE4Rm56N3NoM1hmN0syZVJHUXVzRS1nVHZIQ1plVnBoRWxveHMyellqcE1sbXVIUWdPa1poVDVkVmItcUJvMFFWM3dRMW9VOGZEWmd4dWpUNGJJNnZJM2doWENiXzlPVlZfTTVPU1phWktJdmQ1UVRHaVBBSWhiUnlTS0dMbGwybXJMakxIbE1wVUNreTZJODNhR2cwdEVSbWdKQ2pXRy13U1FDSnlFVFllRERBWdIBxAFBVV95cUxPRlA0Q29kWHV0SE1rSXFLYXotUjVZZGZseWp1RFJpNXIxZlVnWG5ZeXJfVUFxcTJHRVVseWlSZXcxZlh3RmJoMmJySG5rc21USDluOHlRQnhxdGdBOUptLS1LXzhJYmtjRTk1ZnJ6S1lSaXJUMDA2eW5wSHczUnVsNklBNzU1b1FvcVUzZzhfTXZtQ0dGei1hTDUtSEstUzh1MVZoSnNRellhMEZJQXhSYVVfSEFwZHFiQ2tRUnBKTUVRVmxK?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 201
    },
    {
      "date": "Apr 17",
      "text": "Iran Israel war: Israel strikes kill 4 Lebanese medics; War brings US close to net crude exporter",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi8AJBVV95cUxPZG4tS3g4YTJ2TnB2LU51V0JEZzJvYl9LTnhLS1FNRGlSRWRUUW9hOXhONFJ6WEk0S2ZteW40VUZ3UnotOHJQNldJM2IzWW1WRUgyRDVNd2hvU3FZN0RXamdER3ZqaEp3Y2V6NFZFUlZ5RHhlRS00blpybGVoSEJpTG5GX01UV1ZWV1F5Y3g0UWFpVkIxalEzdklWamhsT2Fxb3M1ZGVZNjBRWlFQeGlnRE5rZG9JMWJVMEhUanZSTVA1N1g1Q2NoMFdOOFZxa2NyRV9aRnpJZk5xaFlJVnpVYmJEdDdDSWFwSUZrRjYxbUVxa0dTRDNjYWs5VU5wVjBfOUI2ajBkeUt1Wm4wNVR6Vmp1TVNobkprSlFBWWY4T3hZemhPai05dFRiQ2NNS2dYRXUtYjgtaVhZMVBxN1NvYkhyUDZOQXEzQ3B2dGR2a1p3M3ZoTFZMVDhwMGhLVTcwMDdlZE1ja1Z5ZnBYMUJ6dg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Deccan Herald",
      "latestSinceUpdate": 201
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
      "perspective": "US/Israel",
      "headline": "US military 'locked and loaded' for Iran strikes as Israel holds positions in Lebanon ceasefire",
      "summary": "The US military has declared readiness to strike Iran's energy infrastructure and target Iran-linked ships globally. This comes as Israel maintains its positions in Lebanon during a newly implemented 10-day ceasefire with Hezbollah.",
      "tone": "defiant",
      "latestSinceUpdate": 197
    },
    {
      "perspective": "Iran/Hezbollah",
      "headline": "Hormuz blockade persists as Hezbollah warns Israel on ceasefire terms",
      "summary": "Iran continues its gridlock of the Strait of Hormuz, raising international concerns about shipping. Concurrently, Hezbollah has accepted a ceasefire with Israel but explicitly stated it must not allow Israel freedom of movement in Lebanon.",
      "tone": "defiant",
      "latestSinceUpdate": 197
    },
    {
      "perspective": "International/Economic",
      "headline": "Global shipping concerns rise over Hormuz blockade, potential Malacca Strait impact",
      "summary": "The ongoing blockade of the Strait of Hormuz by Iran is causing significant tension and prompting discussions about potential missions for when the conflict ends. There are growing concerns that this disruption could impact other vital shipping lanes, such as the Malacca Strait near Singapore.",
      "tone": "anxious",
      "latestSinceUpdate": 197
    },
    {
      "perspective": "US Domestic Politics",
      "headline": "Trump seeks end to Iran war, but House rejects US troop withdrawal",
      "summary": "President Trump has expressed a desire for 'more compromises' to end the Iran war. However, efforts in the House to withdraw U.S. forces from the conflict were rejected, indicating continued congressional support for the current military posture.",
      "tone": "strained",
      "latestSinceUpdate": 197
    }
  ]
});

export default LATEST_SNAPSHOT;
