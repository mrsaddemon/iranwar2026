export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2413,
  "lastUpdated": "2026-09-13",
  "lastSyncedAt": "2026-09-13T21:45:38.028Z",
  "warDay": 198,
  "summary": "The Iran war continues with reports of US-Israeli strikes on Tehran causing civilian harm, Iranian attacks on US bases, and regional tensions escalating around the Strait of Hormuz and southern Lebanon.",
  "lastNarrativeUpdate": "2026-09-13",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or de-escalation efforts are currently reported amidst ongoing hostilities."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
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
    "nuclearIndex": 40,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Sep 11",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighbourhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2413
    },
    {
      "date": "Sep 12",
      "text": "Iranian ship attacked near the Strait of Hormuz, according to Iranian state media.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxNTTRXQkJYVGtQWlNfRGFWSHNoeWdDamdLTndGRENXclhCendBeTVGYVZlWHVXbWo4YWxwSFJ6VHlQOFlIbHl4Slhha2dOdFBSeF9PQ1Vobi15Y0RQcHdIREdOT2tWTkUtSkFaeW1iejIxa0ZwSzBHREF2aUNBQXgyWm8tQ2NDdDlRTlHSAY8BQVVfeXFMTi1pZUNYX3J5bGIydm1xSFJKbXZpdF9uYTI1X20wcEswcVVYSUNaQ1JKamlMUFIwSTBSRER2QmpxcFIteXdWR3M3TE9iVjRWbFdPaG1QcU43RlVCRVpwa3ZiSmhxM18ybjNZSm9OMWhBaUtQM0dUWXI3NjEwSzlLVEg2VWRiTkVHMS1URGhWMXM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 2413
    },
    {
      "date": "Sep 12",
      "text": "Israel destroys a major underground Hezbollah base, causing a blast in Southern Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE5oYjE5VldLLW45VXA4WFN4OXdfaHl6QkhDZGpVX05ZcmJXRzZMRlo2V2RoLWxrRVNLM2pPZndFQ01UOFpSQ2lzWHI4STZDS3EyX2MtMWkyMWFlQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 2413
    },
    {
      "date": "Sep 12",
      "text": "Iran reportedly damaged US bases in Bahrain and Jordan.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxQOEIwVE8tUnoyMWlXY0wzSElpTEFLVms2RGQ0Uk5GWTVQLWdfeGJTWENMMDJZb0pUdW4zNjVBdThoal9CMjk5b3E5VHA5V2ZPdS1rVnhOR1NjaDBrOEJuZW5ybllQS0wtWWVsS2Y1THdOaHcwdkZiQ0QxdVZ2eE1ZNWRiLUw0eExYeXJsT2ItMUxfbnJSNUZXNXFFX1lNZGg1Smp5OE9WYmx3aFF20gGyAUFVX3lxTE12V0VzS015YzVxeExJa1AxbGVCVEdGVkhOM1UxUU5Mb19VVjdURlppTW9QVVlITHNwOVVGU3J1blM1ZUYtc0FJTXkzUjFzc3VPWmw1RVFQYW5vRVMtV3hkQmhPRlZKcGxoRnphRUFMeGxRRk5adnhxM1dVYlJtQXZjN2x5OXQ3TDJ3bVlxZC1qSk5hOGVzYmF0UDFmaDJaTE1WSVBUeVhIUmRIdzBTWUxNc2c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2413
    },
    {
      "date": "Sep 12",
      "text": "Gulf states postpone talks with Iran over an impasse regarding the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxPS19fUlNXLWZxOF9IVTF0RVpxcDBRSFNvWmRKT2V3Q1hKbTVKLWV3LU9tM2tMMkZleXZMM0Q3OHFmZXhiU0ZKUW9KZHphMlB6WVVkdUNuUE42Wk51dERDZ1VOVFN4NkJKTlMxUno2bUs5OFM5SVd4eVluam95bzhXN2tnb3E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Financial Times",
      "latestSinceUpdate": 2413
    },
    {
      "date": "Sep 12",
      "text": "Israel-Lebanon talks postponed following explosions rocking southern Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxPSnFiMnJtSDFDQ29CUm1CdWpmOUlmaDRvMUNoUUJpNmJ4cEdKUk5HQ3hYV1V2SUV4cTEtbjJsbklaeUY5aXNRelF3TGU1OFdORVBSYktxU2hjd1duMkdlOTJFUmx3akNNU0hucDBlMnB2eDlibk1KM0dMWGQxc2ZxYThlNjd3MlZkeHFfcmpydXcxTVRvRUdWcDEtNTlWQXRlamR6TlVsWThUMkHSAbABQVVfeXFMTmZkQnk5anFhVWRPSHZBNlc5eUVkdU1tamRqY3kybno1UGVsQUN0RElVM3NFbkNWWFRXRkRDRGdWank4QmV6bkl3WkN4NTlScUd3anNaTGNIbkpXcUpfckQ3dVNqbEp3Rll6b0JfejhoYlBJRHZqd0RFQTY0YUpmdjBHUDRDbnpoTVFOVHg5b0FNMkdXNENfSm9DbXBXaWFMWWpZWExweURPN0ZlcXRrTmg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2413
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
