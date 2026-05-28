export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 805,
  "lastUpdated": "2026-05-28",
  "lastSyncedAt": "2026-05-28T22:43:24.881Z",
  "warDay": 90,
  "summary": "The US and Iran continue to exchange strikes amidst tentative negotiations for a 60-day truce, while Israel intensifies attacks on southern Lebanon, prompting civilian displacement.",
  "lastNarrativeUpdate": "2026-05-28",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 60,
    "summary": "A tentative 60-day truce agreement has been reached between the US and Iran, but it is pending Trump's approval and ongoing strikes indicate its fragility."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "date": "May 28",
      "text": "Prospects fade for an imminent end to the Iran war as attacks restart.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTE1oNVZ3cG9SZTZkdWRhX0liS3BTYU41VFJuRTQyOUNxV3laM1o5LVhxWDRIWWd2RGo3M0d0Vlk0cGhTV1VlWWhBNmloTXBJWUNYTmxTN3ZISUVqRnZZeWxNYTdRVWpGVFB2eXV1czEwenVZbjg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 805
    },
    {
      "date": "May 28",
      "text": "US and Iran reach a tentative MoU on a 60-day truce, pending Trump’s approval.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxPMjBheDJiTHNmOFdRbzJvVlBiZFYtNk9iOGl5UUxCVFMzQ2REMV9HNFZvOU1XcWVLSzUxNjdXdE5ZR3FoZWd2VkFnQzRxZ2hYanpqdkEwTmNIZVFVaklBdnV6d0dmR0hSNnlQbFY2b0FiTG96MUJwY2otYzJMcUItb1RCUUF3bXRldk91TkJkUk5BWnQxbXBzZ3BjQTllandyLXVwaDA3ck9pT1VzUW1hRzZiaFZfQ0hnN3RpMTJJVERKQdIBxwFBVV95cUxPQzBmc1RFR0xDQXFYVmw5RTVGTVBZakRhUGJ4S1lKTDVNOURsWmNSS0hMMVRmeG9OT0Y3TzF3TndBYnRtTGNYZVVOaVdEUExqOGJBdUVEem1uT3ZFYW12dWhqbmxVVFlSc3NIU0UzSE0tTjEtWGl2RHVneUtHb0hMTENadFY0SWdNWUZkdTc4NExhQW5CMV9hNkNuQlpBV21mTHQ1WWhQaDdaa3JmZERxS01BLWpNSmYwdU5kMExsTXR2c2dQT0pJ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 804
    },
    {
      "date": "May 28",
      "text": "U.S. again conducts strikes in Iran, targeting a military site and drones.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPSTRRSVJycmxrcVZhN2F2OF8zR2JIWW1Ua0F4V1dIV2NIYUxEMGZSRElNYzBVVlRGazQtX1NuZGNmTzZBYWx3cWlCdVg3Q0xPQkVUZHhTM21ReXdrWHNKMDhzVHRiUkJ5N0tSM1BuNl9NbmhCMUFVRFd1N0dYelB2RkpBYmRTZDVQOExXU1JtdlVsaEw1bGR6aHJUR3lFLVN3dl9ERnVnNlF2b2lLdjhkX1dHLUJNZy1HT1dIdVNB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 805
    },
    {
      "date": "May 28",
      "text": "Iran says it targeted an American base after fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 803
    },
    {
      "date": "May 28",
      "text": "Israel intensifies attacks on southern Lebanon, killing at least 16 people.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxQMkdya1ZjdzZXaThIWW90eTQ2dS1xMW5zSnhpcV9KU1laQWFMTHNlSGE4Wi1VZUJyY0k4NWJaUFRVdEFmb0J2ZnZ2eGtrWGV5aC1xVzgtLTZ1MktDckJQZHRjaTJnbHAzcjRBRUJ3TEl5NVI4eGZpSTZXYS1wR1ZRSVlMSDR1bnV6aWxwSnptMl9HdEVBS1NHa0p3UERsdklNVkh5cFFpbF81cHhNUjRfZF9nU1PSAboBQVVfeXFMUENUWmdtb0VheHg0ajQxZ0hoLVUwYUFNZUhpVl9WOEdqTlE5dzN5LXdPR0xRY3lIUFp0eTlOR2psMmFrVm1ER3hEV2hNdHpyRE8wTlozNnIyaHJ5VjAxOVBMdmVpM3dLSXJRTmlJV1JrWURuZHprRG5CNVp4V2JzanhJVVFuZTBuTF9tUHUyUzBpbzRjb2lTTWdCbkFwZGc1TlZOOTlad2VIejU2M1BtV3R3Vy1zdWV4N0xB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 805
    },
    {
      "date": "May 28",
      "text": "Israeli military tells residents of a swathe of southern Lebanon to leave.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxNNTRZMWQ2TnEtYWo2Y1MwZW1xcjh6WGlNRTZteEVhTXlwZXpmd0FXWC03OVh3aHRmeVoxN1VNLTJKLWNhYUZVN3V1a0FPSVE1VmVQbjJkSi1wbTZyQWFkdlB4bUJWZE1hdjhKTHpSTlVSaFdfOTB2bnBiTUdpRzJQbjliWFpWY2w3VEdmWU5xTldJT2VDcXJ6QlAwWFc5N2M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 805
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
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
      "perspective": "US Policy",
      "headline": "US Balances Strikes with Diplomacy Amidst Iranian Threats",
      "summary": "The US continues to conduct military strikes against Iranian targets, citing threats, even as peace talks are underway. Officials report some progress on a potential deal, but the military actions suggest a strategy of pressure.",
      "tone": "strained",
      "latestSinceUpdate": 798
    },
    {
      "perspective": "Iranian Response",
      "headline": "Iran Threatens Retaliation, Maintains Suspicion of US Intentions",
      "summary": "Iran's IRGC has threatened retaliation following US strikes, with forces reportedly 'lying in wait.' Tehran expresses 'resolute support' for Hezbollah and harbors 'deep suspicion' of US motives despite considering a peace agreement.",
      "tone": "defiant",
      "latestSinceUpdate": 798
    },
    {
      "perspective": "Israeli Actions",
      "headline": "Israel Expands Operations in Lebanon, Straining Ceasefire",
      "summary": "Israel is moving deeper into southern Lebanon, issuing evacuation orders and targeting Hezbollah cells. These actions are straining the existing ceasefire and are perceived by some as an attempt to influence broader regional dynamics.",
      "tone": "strained",
      "latestSinceUpdate": 798
    },
    {
      "perspective": "Economic & Global Impact",
      "headline": "Conflict Drains US Budgets, Maintains Oil Price Pressure",
      "summary": "Ongoing war spending is reportedly straining US military budgets, leading to cancelled trainings and delayed maintenance. The conflict's continuation, particularly around the Strait of Hormuz, contributes to sustained high oil prices.",
      "tone": "anxious",
      "latestSinceUpdate": 798
    }
  ]
});

export default LATEST_SNAPSHOT;
