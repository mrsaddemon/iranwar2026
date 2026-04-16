export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 196,
  "lastUpdated": "2026-04-16",
  "lastSyncedAt": "2026-04-16T23:54:12.418Z",
  "warDay": 48,
  "summary": "A 10-day ceasefire between Israel and Lebanon has gone into effect, while Iran maintains a blockade on the Strait of Hormuz and US military forces continue to block Iranian ports.",
  "lastNarrativeUpdate": "2026-04-16",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A 10-day ceasefire between Israel and Lebanon is in effect, though both sides express conditions and wariness regarding freedom of movement."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.3,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Apr 15",
      "text": "Report analyzes why the Iran war did not go according to US plans.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxPcWdnNFNvaWdqcW9vanVsdEdUSkw1LVUwR2tJUzVtZFd4eGtOMHlqN094TjJGdTZhNGhManVVb0stM2RsMXU2ekdRUjAxMVlqR3NtRlNBeGVONHRoM1pTQThDMXVfdFZ2eVhaV3hwSG5BOFBvb081WUhqaFY4aGxUeHEwOVF4NHZSNUFQQ0R6bjJfVnZXZ1dqT0lR0gGfAUFVX3lxTFAzUjVNM2szaXdCRlJ2enc5ODFlOGxiRkJXU2dBZXZQOE9Edi1kbXZTaURCbGYtUWFkYUZDUE93NjRQbi1rVTVIWXh1V1pCY1FRMm1nall1OHBYXzZYVDdkMGpLbFg3LUlNNzhfUjhfNjRiRXRVak41cVpmZk40cGJ0M3lvSUhwdnBYeWlhOHNKcF9ZdHM0dFJ4eC1iUG1QUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 196
    },
    {
      "date": "Apr 16",
      "text": "A ceasefire in Lebanon goes into effect, with Trump voicing confidence in an Iran deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE5kcF9vaktZLVViQ0d3Mm53QzdxTG5UaExOUTk3amx6SHN5WDFHZ0tLdFZibC1uNkpsa0wzM1dSOEJQZEhBSFJ2VVlKSURoc0hKT05ZeGlYUDdlM0M2eHJMU1daUDZybDVhWEhZd2RxdXpQdnZjUVRnU2ctRQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 196
    },
    {
      "date": "Apr 16",
      "text": "Lebanon-Israel cease-fire goes into effect.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxOSlEzYVdyaGlFNm5JYVFtVy1fbWZvb0lmNnFSWUZBRGVrVVBXWHBueVZkVklZeVMyblN5ZWIyLUE3R2txdHF6MmVMdG5oNFEzNVk3aS1WWWRnSjRkdGRHVVJ1RGFVYm15b1ZnMjgybm1OM205TVBfaklvT1FuQlotX2hJNjlWckw0SXh5VmNnaS1kY3ZBaVM5RUx1RGNsUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 196
    },
    {
      "date": "Apr 16",
      "text": "Pakistani army chief visits Tehran in a bid to restart US talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNam43bTZtRlVmOGE4Rm56N3NoM1hmN0syZVJHUXVzRS1nVHZIQ1plVnBoRWxveHMyellqcE1sbXVIUWdPa1poVDVkVmItcUJvMFFWM3dRMW9VOGZEWmd4dWpUNGJJNnZJM2doWENiXzlPVlZfTTVPU1phWktJdmQ1UVRHaVBBSWhiUnlTS0dMbGwybXJMakxIbE1wVUNreTZJODNhR2cwdEVSbWdKQ2pXRy13U1FDSnlFVFllRERBWdIBxAFBVV95cUxPRlA0Q29kWHV0SE1rSXFLYXotUjVZZGZseWp1RFJpNXIxZlVnWG5ZeXJfVUFxcTJHRVVseWlSZXcxZlh3RmJoMmJySG5rc21USDluOHlRQnhxdGdBOUptLS1LXzhJYmtjRTk1ZnJ6S1lSaXJUMDA2eW5wSHczUnVsNklBNzU1b1FvcVUzZzhfTXZtQ0dGei1hTDUtSEstUzh1MVZoSnNRellhMEZJQXhSYVVfSEFwZHFiQ2tRUnBKTUVRVmxK?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 196
    },
    {
      "date": "Apr 16",
      "text": "Israel states it will hold positions in Lebanon throughout the 10-day ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFB2T0l3STJWbjRqT3ZfSWF4ZDZ6TjJETFI5S0U2LWdjTU1JSGcwZFl0OVZ2QkM2WEhYdXJ2cEZHaHhpQVg3OE5YUnFDWDdQZ3VMWElKd3A0cHMyQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 196
    },
    {
      "date": "Apr 15",
      "text": "Israeli strikes killed 4 Lebanese medics prior to the ceasefire.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 196
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
      "perspective": "US/Trump Administration",
      "headline": "War 'Close to Over,' Talks Imminent",
      "summary": "The Trump administration suggests the war is nearing its end and expresses a desire for a 'grand bargain' with Tehran, hinting at a resumption of talks within days. The US maintains its military blockade on Iranian ports, asserting its war goals are almost met.",
      "tone": "defiant",
      "latestSinceUpdate": 164
    },
    {
      "perspective": "Iran",
      "headline": "No Talks, Blockade Endangers Environment",
      "summary": "Iran's minister states there is 'no intention of negotiating for now,' despite US claims of nearing war goals. Iran also condemns Israeli oil depot strikes, citing environmental and health dangers, while facing a US-imposed blockade.",
      "tone": "defiant",
      "latestSinceUpdate": 164
    },
    {
      "perspective": "China",
      "headline": "Blockade 'Dangerous,' Transit Continues",
      "summary": "China has labeled the US military blockade on Iranian ports as 'dangerous,' indicating concern over regional stability and freedom of navigation. Iran-linked ships are reportedly attempting to transit the Strait of Hormuz despite the blockade.",
      "tone": "skeptical",
      "latestSinceUpdate": 164
    },
    {
      "perspective": "Lebanon/Hezbollah",
      "headline": "Talks Not Negotiations, Disarmament an 'Illusion'",
      "summary": "Lebanese figures, including Ghassan Salame, clarify that direct talks with Israel are 'not negotiations' and dismiss the idea of Hezbollah disarmament by force as an 'illusion.' This perspective highlights the limited scope of the talks amidst ongoing conflict.",
      "tone": "skeptical",
      "latestSinceUpdate": 164
    }
  ]
});

export default LATEST_SNAPSHOT;
