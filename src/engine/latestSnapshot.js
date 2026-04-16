export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 195,
  "lastUpdated": "2026-04-16",
  "lastSyncedAt": "2026-04-16T23:05:16.905Z",
  "warDay": 48,
  "summary": "A ceasefire between Israel and Hezbollah in Lebanon has taken effect, while tensions remain high in the Strait of Hormuz and diplomatic efforts are underway to restart US-Iran talks.",
  "lastNarrativeUpdate": "2026-04-16",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A ceasefire between Israel and Hezbollah in Lebanon has taken effect, though displaced citizens remain wary and Iran has issued warnings regarding further Israeli attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "Apr 16",
      "text": "Ceasefire between Israel and Hezbollah in Lebanon goes into effect.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi7AFBVV95cUxOOGdGRGZuT0NYeGUwd0JzbHJrQzRvbmRIY3hWZGt1V1pHSHZNeVdWVEY0eDdpUUQxcVN1M3F4cVBJV3dIRXk5YmZTZVJFcnVQYlJReFhSNi1GXzh2STVQVmdWbkY2aGVZU2VRbUgtTS03bUpUdXF1eEVacmU2c0lvVEViY0ZFMUxUMVpVTnVZN0N0MlRUems4aUFZTW94WXBhMDJNXzdVcG9aLXFYREhFaDhlNUJUSzZJVWhHd2tLWWZjWmJndDJtazdjQ19CUk9iYzZzNUota1BuUmpvNW9Pdi01WE5XS1RfeUtteQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 195
    },
    {
      "date": "Apr 16",
      "text": "Israeli strikes kill 4 Lebanese medics.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi8AJBVV95cUxPZG4tS3g4YTJ2TnB2LU51V0JEZzJvYl9LTnhLS1FNRGlSRWRUUW9hOXhONFJ6WEk0S2ZteW40VUZ3UnotOHJQNldJM2IzWW1WRUgyRDVNd2hvU3FZN0RXamdER3ZqaEp3Y2V6NFZFUlZ5RHhlRS00blpybGVoSEJpTG5GX01UV1ZWV1F5Y3g0UWFpVkIxalEzdklWamhsT2Fxb3M1ZGVZNjBRWlFQeGlnRE5rZG9JMWJVMEhUanZSTVA1N1g1Q2NoMFdOOFZxa2NyRV9aRnpJZk5xaFlJVnpVYmJEdDdDSWFwSUZrRjYxbUVxa0dTRDNjYWs5VU5wVjBfOUI2ajBkeUt1Wm4wNVR6Vmp1TVNobkprSlFBWWY4T3hZemhPai05dFRiQ2NNS2dYRXUtYjgtaVhZMVBxN1NvYkhyUDZOQXEzQ3B2dGR2a1p3M3ZoTFZMVDhwMGhLVTcwMDdlZE1ja1Z5ZnBYMUJ6dg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Deccan Herald",
      "latestSinceUpdate": 195
    },
    {
      "date": "Apr 16",
      "text": "Iran warns it will respond if Israeli attacks on Lebanon do not stop immediately.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTFBqdkRTSFRQX3ltWlEwc2xQOFpJRlo4b2tNZnhiYkpBbmFPeDdLLVJWc3UxQjBTdjQ5NDdlcjN1U2QyZ0pGdWtsQ3d1T1FHYTNlckhZYQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 195
    },
    {
      "date": "Apr 16",
      "text": "Iran keeps Strait of Hormuz gridlocked while U.S. patrols the area.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxQMHRMcmlCcHJaRmxTSTU3M2syUkZmZUNpWlhuNU5hMDFtV1FDbHZVaWJ6SnhVcnc2a0RxUDBaQWpBcTNQWmZHd0JEUzZnREZWYVlHdmxYWGRXWTBMRkJIby1jbXpIOVhvZFV0LTlDenNSMWZvdzdBWTZHX2Zvd180OHlCeWFyd0VDQVJKN2tkQklyM204ZFNj0gGcAUFVX3lxTFBlMkdFLUVmNXlCa3QwOVRyZHZCUWo0enpQV2RWYkxWWjd1a1A4QXdqQjFhOTJxZWJGaFNVMDgwQmdjZ21Ccy00UHhMMVluZTVtTEdHdzlZR09vdXA3OXNiNWd6ajVyUnQ1MjFQOW5WVkZGeW8ySzdFdlNhcGNXaXdlWjUxVS1qY2dFUnBqZXZ6UHpWU1BXbWtNaTNrVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 195
    },
    {
      "date": "Apr 16",
      "text": "US military states it is 'locked and loaded' to strike Iran's power plants and energy industry if ordered.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOaEItbU9FVnJLN1l1RktWRkdtZGZiNGk1US1JTm0zRWN3MTNTNmpPVmJQYmV1bUxkRTV5WXBqVnVJWnhlM2tQbU54cXRMbF9IR0NyLW5STnV5WWl4MnM0bkJTdjhMejJwZHhuWXYwUVJaN0RZektTNHRTemtNbUdfSWpVV3dKZnFPMmdOeVVvR200c2swZFNVeHdEUnhGX0tHUGNtVDRxVHRBYTM2eG43bnJpMGlCQTAzLUVuaWwtbTc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 195
    },
    {
      "date": "Apr 16",
      "text": "Pakistani army chief visits Tehran in a bid to restart US-Iran talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNam43bTZtRlVmOGE4Rm56N3NoM1hmN0syZVJHUXVzRS1nVHZIQ1plVnBoRWxveHMyellqcE1sbXVIUWdPa1poVDVkVmItcUJvMFFWM3dRMW9VOGZEWmd4dWpUNGJJNnZJM2doWENiXzlPVlZfTTVPU1phWktJdmQ1UVRHaVBBSWhiUnlTS0dMbGwybXJMakxIbE1wVUNreTZJODNhR2cwdEVSbWdKQ2pXRy13U1FDSnlFVFllRERBWdIBxAFBVV95cUxPRlA0Q29kWHV0SE1rSXFLYXotUjVZZGZseWp1RFJpNXIxZlVnWG5ZeXJfVUFxcTJHRVVseWlSZXcxZlh3RmJoMmJySG5rc21USDluOHlRQnhxdGdBOUptLS1LXzhJYmtjRTk1ZnJ6S1lSaXJUMDA2eW5wSHczUnVsNklBNzU1b1FvcVUzZzhfTXZtQ0dGei1hTDUtSEstUzh1MVZoSnNRellhMEZJQXhSYVVfSEFwZHFiQ2tRUnBKTUVRVmxK?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 195
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
