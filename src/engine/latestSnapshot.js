export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 192,
  "lastUpdated": "2026-04-16",
  "lastSyncedAt": "2026-04-16T20:25:33.501Z",
  "warDay": 48,
  "summary": "A 10-day ceasefire between Israel and Lebanon is set to begin amidst ongoing US-Iran war discussions, while the Strait of Hormuz remains blocked and oil prices near $100.",
  "lastNarrativeUpdate": "2026-04-16",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A 10-day ceasefire between Israel and Lebanon has been agreed upon, though Hezbollah has stated conditions regarding Israeli movement."
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
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
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
      "text": "Israel and Lebanon agree to a 10-day ceasefire, with Israel to hold positions in Lebanon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxOX29OMU5NRzhVekNmcWN6ZWkxX3RYbUdpQnFxQ2F4RGg5WWM0RWRuMHNSS2VOUEZxV0VlUXJEUWZic1ctTDcyQ21lZjBtazlSS20zZlBtSURSQjJUZWJpaHFPX1J4eHhRc3cwdjBkLVlaWk5MLTNNekdFM3cySmJkeElZVkdkeTB6ZlpCMV9JblRsa3NW?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 192
    },
    {
      "date": "Apr 16",
      "text": "Hezbollah strikes northern Israel ahead of the Lebanon ceasefire announcement.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxQaXZUbG9HM1RKYlp5X3VnazM2T0IwVTdCWWdSUUstR3hsRTB1VlJ2NnJlUHJ3UXZha3BUV1Z1Z0JTTTVFaFp2dnB3LU5GRS1wOU5MRi01MjI4c3ZDTVk5clM2aEVTRG5uXzhUcTZtaGhHTFg1SjNRRXZxbEx1NGpFUTUzTDJyb01mc0R1TUlwT0pJcWc5TjNJbl9JN3FvNmdMSXJfYzhxZFljcS1GMklsNXZEa1BMVThtT2FHNXhn0gHDAUFVX3lxTFA2YnZlM1FoYzJKTmJBc3JHR1hWbXhyNm90SXd4d1ZWS201TXdYRVR5b2dvVEpydU1fN01UNVl4V2duTDJwYUVvOElsT3oyT0RTbFR4NFNGenhKaTlnMGU0YnVOSloyOXlkYWZibTd2aHhERjhzMFk4WnM3elVodUtaLWhSY3ZJMG1XNzdjaEhMZ0FXVkExU0d4bE9ySjdFOFJWVXUxYzZyTFJQN3NVZkZRem1aRm9WQ240UjRHaXBKdktiOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 192
    },
    {
      "date": "Apr 16",
      "text": "President Trump announces a ceasefire in Lebanon and expresses confidence in an Iran deal, despite Tehran denying any agreement.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE5kcF9vaktZLVViQ0d3Mm53QzdxTG5UaExOUTk3amx6SHN5WDFHZ0tLdFZibC1uNkpsa0wzM1dSOEJQZEhBSFJ2VVlKSURoc0hKT05ZeGlYUDdlM0M2eHJMU1daUDZybDVhWEhZd2RxdXpQdnZjUVRnU2ctRQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 192
    },
    {
      "date": "Apr 16",
      "text": "Pakistani army chief visits Tehran in an effort to restart US-Iran peace talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNam43bTZtRlVmOGE4Rm56N3NoM1hmN0syZVJHUXVzRS1nVHZIQ1plVnBoRWxveHMyellqcE1sbXVIUWdPa1poVDVkVmItcUJvMFFWM3dRMW9VOGZEWmd4dWpUNGJJNnZJM2doWENiXzlPVlZfTTVPU1phWktJdmQ1UVRHaVBBSWhiUnlTS0dMbGwybXJMakxIbE1wVUNreTZJODNhR2cwdEVSbWdKQ2pXRy13U1FDSnlFVFllRERBWdIBxAFBVV95cUxPRlA0Q29kWHV0SE1rSXFLYXotUjVZZGZseWp1RFJpNXIxZlVnWG5ZeXJfVUFxcTJHRVVseWlSZXcxZlh3RmJoMmJySG5rc21USDluOHlRQnhxdGdBOUptLS1LXzhJYmtjRTk1ZnJ6S1lSaXJUMDA2eW5wSHczUnVsNklBNzU1b1FvcVUzZzhfTXZtQ0dGei1hTDUtSEstUzh1MVZoSnNRellhMEZJQXhSYVVfSEFwZHFiQ2tRUnBKTUVRVmxK?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 192
    },
    {
      "date": "Apr 16",
      "text": "Brent oil price nears $100 due to uncertainty in US-Iran talks and continued blocking of the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE16anpYS0JscGkxN1VORDk1VzVkbkRnck01azJwRlp4RjdlS1BnXzFsSmZnam5XZzhXNVUtVU5DR25EbS1GYzFCVFZ4YTJtUl9uYUp5WWNGc1NUUWdyZzYwQVZ0LVRXOGc5RXVDYmxGVlNBQzRPdDJQY9IBfkFVX3lxTFBFeXktTkdIVmJDZ1REdEpZRTRaRl80aTc4aXZfUTYtUEFVcEhkTHJsa3A4T3NXT0tWbEpBbWJNRGFER2YxQ0ZGU1ZlZmljaXl5TEdRbUc4Vlk3OE15T01SMUJoRm1kYkZYSEtIUXc1Tjh1MG9FR0J0M3ZuVXFvQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 192
    },
    {
      "date": "Apr 16",
      "text": "US military states it is 'locked and loaded' to strike Iran's power plants and energy industry if ordered.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOaEItbU9FVnJLN1l1RktWRkdtZGZiNGk1US1JTm0zRWN3MTNTNmpPVmJQYmV1bUxkRTV5WXBqVnVJWnhlM2tQbU54cXRMbF9IR0NyLW5STnV5WWl4MnM0bkJTdjhMejJwZHhuWXYwUVJaN0RZektTNHRTemtNbUdfSWpVV3dKZnFPMmdOeVVvR200c2swZFNVeHdEUnhGX0tHUGNtVDRxVHRBYTM2eG43bnJpMGlCQTAzLUVuaWwtbTc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 191
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
