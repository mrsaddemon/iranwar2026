export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 191,
  "lastUpdated": "2026-04-16",
  "lastSyncedAt": "2026-04-16T19:34:56.927Z",
  "warDay": 48,
  "summary": "A 10-day ceasefire has been agreed between Israel and Lebanon amidst ongoing US-Iran peace talks mediated by Pakistan, while the Strait of Hormuz remains gridlocked and the US military maintains a readiness to strike Iran.",
  "lastNarrativeUpdate": "2026-04-16",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A 10-day ceasefire between Israel and Lebanon has been agreed, though Hezbollah has stated conditions regarding Israeli freedom of movement."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.6
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
      "date": "Apr 16",
      "text": "Israel and Lebanon have agreed to a 10-day ceasefire.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMixwFBVV95cUxNWHRIYzlOVTFXNjhXa1BEY092anhNZ1RPUGtUd1NZT0d6OW91d0pCVkpDTUUyNWstdmxlT2ZRMXZ2Q2FIQnhhM0tmWFlRZGZqUGFJcWRGMkNFZ3pMd3N2SFQzNmE3YUE5RXJEQVZzZW5JVy1WSVdOTFJKdzJ2X3RTQWxzdkJSbkkzZjJ1ZnZOQ0ZKT0NnUXZmLXNaSHMxbjRJendVcld5UGZZblhtNm9kakhXOWprTmtTaUxEajZ5M0pmNm5PTWcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 191
    },
    {
      "date": "Apr 16",
      "text": "Pakistan's army chief is in Tehran to restart US-Iran peace talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNam43bTZtRlVmOGE4Rm56N3NoM1hmN0syZVJHUXVzRS1nVHZIQ1plVnBoRWxveHMyellqcE1sbXVIUWdPa1poVDVkVmItcUJvMFFWM3dRMW9VOGZEWmd4dWpUNGJJNnZJM2doWENiXzlPVlZfTTVPU1phWktJdmQ1UVRHaVBBSWhiUnlTS0dMbGwybXJMakxIbE1wVUNreTZJODNhR2cwdEVSbWdKQ2pXRy13U1FDSnlFVFllRERBWdIBxAFBVV95cUxPRlA0Q29kWHV0SE1rSXFLYXotUjVZZGZseWp1RFJpNXIxZlVnWG5ZeXJfVUFxcTJHRVVseWlSZXcxZlh3RmJoMmJySG5rc21USDluOHlRQnhxdGdBOUptLS1LXzhJYmtjRTk1ZnJ6S1lSaXJUMDA2eW5wSHczUnVsNklBNzU1b1FvcVUzZzhfTXZtQ0dGei1hTDUtSEstUzh1MVZoSnNRellhMEZJQXhSYVVfSEFwZHFiQ2tRUnBKTUVRVmxK?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 191
    },
    {
      "date": "Apr 16",
      "text": "Iran continues to keep the Strait of Hormuz gridlocked amidst regional tensions.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 191
    },
    {
      "date": "Apr 16",
      "text": "US military states it is 'locked and loaded' to strike Iran's power plants and energy industry if ordered.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOaEItbU9FVnJLN1l1RktWRkdtZGZiNGk1US1JTm0zRWN3MTNTNmpPVmJQYmV1bUxkRTV5WXBqVnVJWnhlM2tQbU54cXRMbF9IR0NyLW5STnV5WWl4MnM0bkJTdjhMejJwZHhuWXYwUVJaN0RZektTNHRTemtNbUdfSWpVV3dKZnFPMmdOeVVvR200c2swZFNVeHdEUnhGX0tHUGNtVDRxVHRBYTM2eG43bnJpMGlCQTAzLUVuaWwtbTc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 191
    },
    {
      "date": "Apr 16",
      "text": "Hezbollah conducted strikes in northern Israel prior to the ceasefire announcement.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxQaXZUbG9HM1RKYlp5X3VnazM2T0IwVTdCWWdSUUstR3hsRTB1VlJ2NnJlUHJ3UXZha3BUV1Z1Z0JTTTVFaFp2dnB3LU5GRS1wOU5MRi01MjI4c3ZDTVk5clM2aEVTRG5uXzhUcTZtaGhHTFg1SjNRRXZxbEx1NGpFUTUzTDJyb01mc0R1TUlwT0pJcWc5TjNJbl9JN3FvNmdMSXJfYzhxZFljcS1GMklsNXZEa1BMVThtT2FHNXhn0gHDAUFVX3lxTFA2YnZlM1FoYzJKTmJBc3JHR1hWbXhyNm90SXd4d1ZWS201TXdYRVR5b2dvVEpydU1fN01UNVl4V2duTDJwYUVvOElsT3oyT0RTbFR4NFNGenhKaTlnMGU0YnVOSloyOXlkYWZibTd2aHhERjhzMFk4WnM3elVodUtaLWhSY3ZJMG1XNzdjaEhMZ0FXVkExU0d4bE9ySjdFOFJWVXUxYzZyTFJQN3NVZkZRem1aRm9WQ240UjRHaXBKdktiOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 191
    },
    {
      "date": "Apr 16",
      "text": "Israeli strikes killed 4 Lebanese medics.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 191
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
