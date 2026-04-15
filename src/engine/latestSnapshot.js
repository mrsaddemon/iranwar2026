export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 167,
  "lastUpdated": "2026-04-15",
  "lastSyncedAt": "2026-04-15T08:57:21.586Z",
  "warDay": 47,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-15",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 2,
    "summary": "No active ceasefire is in effect, with ongoing military actions and conflicting statements on negotiations."
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
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 38,
    "oilDisruption": 90,
    "tradeImpact": 56,
    "sanctionsPressure": 51,
    "globalPressure": 60,
    "allianceInfluence": 57
  },
  "alliance": {
    "russiaIntelSupport": false,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Apr 14",
      "text": "US military blockade on Iranian ports takes effect, turning back six ships in the first 24 hours.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNSnBndnllRFhHS0RYXzZvTXBVWVhhNW12bE0wV294VFB6dzdDQnY3b2VScWM4SnBlSXlTNEZHd0xUcHZhcXhYTnpsc3dVTmNpY1hoNUVDeElYLXJxMkNNX0YyWnVqVVlxdDd4ZkxsUWFsZkZFYXc4MDRSOU41QzJtZWdPeXgzUDRtcGx1eVlMbnhWSGNFdl9iSFJfVGlQdlRORVNvYkw0WDRLVU5ISE42WjBSdHhLM2hKdXg0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 167
    },
    {
      "date": "Apr 15",
      "text": "US military states the blockade of Iran ports 'completely' halts economic trade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxOQjYwZVJnOXl1M211V1ZJMGVUSlN2cHZDenJxa1dVZ2FJMnk4b3JJQW10eFlEdUZtcW5yZ1pNNG5ZU2JxNWMxenZMaXNzSGFGcEpFbkdIRWJ1N0d0b2JqWnVNYmp6U3U1UWhORWJCbV9PN0JYN2FURlUybnhtVkxaTmhGWUlLQlo3bkRTS3cxTXZ0ZUU4dW9ualNtWG13dk92QWU2WnNOS0g5RG1GbHZjRTd6b2V5QdIBuwFBVV95cUxPU1pvRGd2X2t3V0dyNUdsZFV0RmZXVkhPZE9rMmRMY0szOVhWU2xETjRhWDZzM0J0ZXRabk1uVllrNUxocVpOalBTV3J0eWVQTFpiVEhqVnQ2Z0xUWElJT19wM2tCY29lMUlpX2VJYmpuOHpEVHZCbHBUT2E2U1U1RW8wRFdvNnRPeVpOZDlZVlRkOWZtai1xSzdnZDYwTDlNMEthNkl4c2hoOXBUWXk4OVUxWWZHMnJVNlR3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 167
    },
    {
      "date": "Apr 15",
      "text": "President Trump teases more talks and suggests a deal with Tehran is 'very possible' by end of month.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 167
    },
    {
      "date": "Apr 15",
      "text": "Iranian minister states 'No intention of negotiating for now' despite US claims of war goals almost met.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE56dkx0c0Z3Umx4dlBzYzdrdGV6SHM3U3hLRnpDX0tFOC1UeHBiUEJLamlEalBVZUV6d0RsVS13UU5wUldEVm9hNVZ6ekRMOWtyamJMbQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 167
    },
    {
      "date": "Apr 15",
      "text": "Hezbollah launches rockets at Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi0wFBVV95cUxPc3Ztakk5YnFMcXozdEdSaXRxU1RQYnZNTm5rMm1mWktkNzctVzRqQ0tNekRvb2VtTkJjYmdVTHJKeDFxRWZfQ1pSV1BiYThkaDI2cEc5d2cyek9wbVU4NEl0bGpNQUMxb2c3SEROUHAzZFhTaHBZR0REcjBQMTlpTUYyMXdRSW9KOXY5VFVRWFJfQ1o4V09ITGdyV3Q0U05nYk9qWTdNeTBwYkdCR0lycEFmekNWVUlCdFZ0dlFaY3RtMmQ2ZnFtcU5XVTRiamRIbEFr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 166
    },
    {
      "date": "Apr 15",
      "text": "Israel and Lebanon hold first direct talks since 1993 in the US.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9aZGxOSU1uN2FqLTJmb3k1cjhmSHM0M0djdjlIdm5mMm1CWkViNHVjQXRQMFZzTll4YkFkUmsxdGFzWFV4NF84bG0tT3ZBaThnbHh2ZXgtQVBLdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 167
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
