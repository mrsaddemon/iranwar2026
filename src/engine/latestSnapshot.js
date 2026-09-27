export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2498,
  "lastUpdated": "2026-09-27",
  "lastSyncedAt": "2026-09-27T08:00:05.806Z",
  "warDay": 212,
  "summary": "The Iran war continues on Day 212 with President Trump rejecting Iranian proposals to end the conflict and reopen the Strait of Hormuz, while US-Israeli strikes on Tehran cause civilian harm and oil prices rise amid renewed threats.",
  "lastNarrativeUpdate": "2026-09-27",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire is active; proposals to end the war and reopen the Strait of Hormuz have been rejected."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 75,
    "escalationLevel": 80,
    "oilDisruption": 85,
    "tradeImpact": 76,
    "sanctionsPressure": 65,
    "globalPressure": 85,
    "allianceInfluence": 62
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
      "date": "Sep 24",
      "text": "Trump rejects Iran’s seven-day roadmap to end war and reopen Hormuz, calling the plan 'not acceptable'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxPekVrcUpCSVdWWjdjNHY5ZS12MmprMF9ma3loOGpyZExyTW5uRG9qT3NjV21qSUFSMUhRVV9Ld3A5TWpVTS1QcFI2VENoZTdQRkVIQi11Z2JuUV80a1B2U2Q5TGhlQlZiZkV3MFlCbkI4NUZDeWJROWgxbTAtSVE3dU0xUDVnbFU2MF9MN25MVmZRNUdCWXBleDhlamtaVGNzbkVtWDM1VlfSAa4BQVVfeXFMTjljQTNjOXdPLVpNZWhUNTduR2ZZWGN3dDRrak9NOS1WWlBNejVMWDk2aGRkek9CYzB5OWpiTU1BeWtHUkRZZGduc28td2dSZmlsQUM2NTNrQ1M5WU1rcVJoNWZKZlkzNmN5Z1FkWnJFN0FNVDEtQjFKSkYwQ0RQZFpkOWVxNm43dkloMnZtTFFFSy1xVVRYVEJEYkFZdzdBemNCMEJQZGVLZzdvQXlB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2498
    },
    {
      "date": "Sep 24",
      "text": "Investigation into US-Israeli strikes on Tehran neighbourhoods reveals devastating civilian harm.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2498
    },
    {
      "date": "Sep 25",
      "text": "Oil prices back up as U.S. and Iran trade fresh threats to expand the 7-month war.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPSWU4WXp4UDJYb25pa3BRYTNqSW1rcFhDdF9vMXdoekszMG1JbEttak9SWDhnWnotU21ucFhVYlByOGQwaFdoRE1DeU04WXVjTVN2a0dmSzJoR3VsNGozZi0zQ0tNbkdMRkVRd0Z3MzE3QnFNWkNpYTgycTBqLUJ3QUNYN1hWVFA5NGdnS2JycV9KUTE1VnBQcQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2498
    },
    {
      "date": "Sep 26",
      "text": "IDF bombs Hezbollah arms cache in southern Lebanon to 'remove threat' to troops.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxQNGFCbDZrcWtzVTM3VXZFcVhIVEZtcWZpVkk1LUhxR19SN2ExUE9fZTBIRDFQZ1lBR3YyU1FvcHh0RHcyOVBYOG5RU1hfMl9TalRWbm5wbmw3eDdHVlJHZUoxNmZQdVIyaVYyU0NCLXI0WVEyRXFjT2xuVm90eHp1dXRWcG9iRkd2bEF6TVpNekUzNXhjVURVTE5fYXZQV1dtenJwZGZZU0ttUERpdEhyY3I5Z1o2X3VzOG1td0N0UTc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2498
    },
    {
      "date": "Sep 26",
      "text": "US helps double oil volume exiting the Gulf, with the military now guiding ships in broad daylight.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiswFBVV95cUxQVXVUVjdpd1BtNmtQNFdfYWNTclZZUVYwSWctUGJmZ0toLWo4X2tVdnF1YVBvZmZwR2diTGd4cm5ISjd3a0FiZ0laa0lWMGc2Ung1ZnZEam1NTV9ld3RDeEdkSFkxcVBwUllVeTNuTzlpQjlyS2VTLTdQakRQcURJWWZIS1AzUGJnSlp3N1RqbjRLWnpKY19CZ1NnZkJvQm5TbWJ1c29ad0pmaTV4blhJX3ZSZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fortune",
      "latestSinceUpdate": 2498
    },
    {
      "date": "Sep 27",
      "text": "Intelligence from Chinese groups is reportedly aiding Iran’s increasingly effective targeting of US sites.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxOdDBVd0dmY2IwMUpJVDFiNkxYbXc0VTFKNFpzNzZabXlDUVFobTZ4a1RKTHVPN3pfcHlrRG02emp2MkJMUDd3NHRKVmtIZGlueGFPQ3IyeUZnYzFRLU9QWlR2VF9OYmluME8xUGIxTzB2NnVZLWZ5Y2x0X09Id1dic1ppd1NIZms?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2498
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
      "perspective": "Iran",
      "headline": "Iran seeks end to war, proposes roadmap and Hormuz reopening",
      "summary": "Iran has put forward a seven-day roadmap to end the ongoing conflict and reopen the vital Strait of Hormuz, emphasizing that the choice to end the war now rests with the US. This initiative aims to de-escalate tensions and restore stability in the region.",
      "tone": "strained",
      "latestSinceUpdate": 2497
    },
    {
      "perspective": "US/Israel",
      "headline": "US rejects Iran's peace proposals amid continued strikes and nuclear concerns",
      "summary": "The US has rejected Iran's proposals for peace talks and reopening the Strait of Hormuz, maintaining pressure on the regime. Israel remains ready to resume strikes, citing Iran's efforts to rebuild its nuclear program, while US-Israeli operations have reportedly caused significant civilian harm in Tehran.",
      "tone": "defiant",
      "latestSinceUpdate": 2497
    },
    {
      "perspective": "Lebanon",
      "headline": "Lebanese PM states Israel-Hezbollah conflict is 'imposed'",
      "summary": "The Lebanese prime minister has publicly stated that the ongoing conflict between Israel and Hezbollah has been 'imposed' on Lebanon. This perspective highlights the country's position as a reluctant participant caught between larger regional powers.",
      "tone": "anxious",
      "latestSinceUpdate": 2497
    }
  ]
});

export default LATEST_SNAPSHOT;
