export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2408,
  "lastUpdated": "2026-09-13",
  "lastSyncedAt": "2026-09-13T05:18:05.169Z",
  "warDay": 198,
  "summary": "The conflict involving the US, Israel, and Iran continues to escalate with recent US-Israeli strikes on Tehran causing civilian harm, Iran launching missile and drone attacks damaging US military assets in Jordan and Bahrain, and Israel conducting operations against Hezbollah in southern Lebanon, while threats to oil exports in the Gulf persist.",
  "lastNarrativeUpdate": "2026-09-13",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or de-escalation efforts are reported amidst ongoing hostilities."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.78,
        "aggression": 0.95
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 72
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.98
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 93,
    "oilDisruption": 85,
    "tradeImpact": 78,
    "sanctionsPressure": 65,
    "globalPressure": 86,
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
      "date": "Sep 11",
      "text": "US-Israeli strikes on Tehran neighborhoods reportedly cause devastating civilian harm.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2408
    },
    {
      "date": "Sep 11",
      "text": "Iran launches missile and drone attacks across the Gulf, damaging US military aircraft and bases in Jordan and Bahrain.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxQYmFtdmtoamYyU2taWm5uSUp0LWxRR3p3bGszYjhPT0tnNmoweWI3eWtjcnlmRzRqTmtJdWRYTU55Ym5zY0xkTVJOdlRSUVduWjVSSGRndlJwSThXSU9qOW50ejUxWTNjRUZPbkpxZHZBd1RoVUV0V2gtSmZycEZTeFlfejZfOEtNbjYxUF9VYnpHTURxZ3E2dkU3Z1FQOUtpZFM2MVdRdnNGc25RajFhdzlnQlZzbVh4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "News On AIR",
      "latestSinceUpdate": 2408
    },
    {
      "date": "Sep 11",
      "text": "Israel destroys Hezbollah tunnel networks and strongholds in southern Lebanon, triggering explosions and tremors.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxOT2pMbElDZHFoVzZzaHQxVjJqYkN1U2J2ZWNPb1BYX3JWOWlDRUJlekRmZTdKV01aSnhHYWZkSkJycnQyTWhTUmNGR1V5OEVkRkFrZWoyc0xUOG1jeExJc05JVzdYdzhmY2hSakFxVHlhWkpQRVlpWVppM1l4emtyVkZEajIwMlZKeVNuQ0wxRVQ1Nmljang0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 2408
    },
    {
      "date": "Sep 11",
      "text": "A vessel is struck in the Strait of Hormuz, and Saudi oil exports face heightened threats after pipeline attacks.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2408
    },
    {
      "date": "Sep 11",
      "text": "Israel-Lebanon talks are postponed amidst ongoing explosions in southern Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxPSnFiMnJtSDFDQ29CUm1CdWpmOUlmaDRvMUNoUUJpNmJ4cEdKUk5HQ3hYV1V2SUV4cTEtbjJsbklaeUY5aXNRelF3TGU1OFdORVBSYktxU2hjd1duMkdlOTJFUmx3akNNU0hucDBlMnB2eDlibk1KM0dMWGQxc2ZxYThlNjd3MlZkeHFfcmpydXcxTVRvRUdWcDEtNTlWQXRlamR6TlVsWThUMkHSAbABQVVfeXFMTmZkQnk5anFhVWRPSHZBNlc5eUVkdU1tamRqY3kybno1UGVsQUN0RElVM3NFbkNWWFRXRkRDRGdWank4QmV6bkl3WkN4NTlScUd3anNaTGNIbkpXcUpfckQ3dVNqbEp3Rll6b0JfejhoYlBJRHZqd0RFQTY0YUpmdjBHUDRDbnpoTVFOVHg5b0FNMkdXNENfSm9DbXBXaWFMWWpZWExweURPN0ZlcXRrTmg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2408
    },
    {
      "date": "Sep 11",
      "text": "The US expands intelligence and targeting support for the Saudi campaign against Iranian allies.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxOcDJyVVhLSUZweG9aLVBYejFueDZ3Qkk0OTA1c3J3RjhVNGhhTWtJRGxqbUdrZ2RaSktQY25FMVphTTlCS0pmUlBINlZQaXVMT0p3ZlgySzFCdUZ4a3l1ZTJZTm81NldOLUswZHE5YU83VFA2elEwUjAwUW1DWXp5QWNlSl9WdEhWUzNMMmRxQmlPUWJ0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2408
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
      "perspective": "Iran",
      "headline": "Escalation Yields Leverage for Iran",
      "summary": "Iran views escalation as a successful strategy to gain leverage in the ongoing conflict with the U.S., demonstrating its capability to strike U.S. assets and infrastructure across the Gulf. This approach has resulted in damage to U.S. military aircraft and bases.",
      "tone": "defiant",
      "latestSinceUpdate": 2407
    },
    {
      "perspective": "US/Israel",
      "headline": "Continued Strikes on Iranian & Hezbollah Targets",
      "summary": "US and Israeli forces continue to conduct strikes against Iranian and Hezbollah targets, including infrastructure in Tehran and Hezbollah strongholds in Lebanon. Israel reports destroying significant underground bases and tunnel networks, securing buffer zones.",
      "tone": "strained",
      "latestSinceUpdate": 2407
    },
    {
      "perspective": "Political/Regional",
      "headline": "Trump Predicts War End; Regional Tensions High",
      "summary": "Statements from former President Trump suggest a political dimension to the conflict's potential end, predicting it will conclude 'immediately' after midterms. Meanwhile, regional actors like Bahrain navigate escalating tensions, declining participation in Iran's proposed Hormuz meeting.",
      "tone": "skeptical",
      "latestSinceUpdate": 2407
    },
    {
      "perspective": "Humanitarian",
      "headline": "Civilian Harm Mounts in Iran",
      "summary": "Civilian populations in southern Iran and Tehran are experiencing significant harm, grief, and fear due to ongoing US-Israeli strikes. Investigations reveal devastating civilian harm in Tehran neighborhoods following these attacks.",
      "tone": "anxious",
      "latestSinceUpdate": 2407
    }
  ]
});

export default LATEST_SNAPSHOT;
