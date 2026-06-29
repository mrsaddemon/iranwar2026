export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1105,
  "lastUpdated": "2026-06-29",
  "lastSyncedAt": "2026-06-29T01:57:20.764Z",
  "warDay": 122,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-29",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.93,
    "durationDays": 1,
    "summary": "No active ceasefire is in effect as recent fighting has put planned talks on hold."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 38,
    "oilDisruption": 80,
    "tradeImpact": 48,
    "sanctionsPressure": 53,
    "globalPressure": 61,
    "allianceInfluence": 73
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Jun 27",
      "text": "Iran's IRGC claims 8 US military sites destroyed.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOam5lWGFqNWVZWW5aWnBwNGlhZEhGNlZxSEJMRW53YjYwQjJ0OXVTSVhJeGI5aDBhV1BPdXg0b1B0RGg3N2dMbFh3MHRxcFp1MFljZTlsNFgtYmxsSThLRnlBWEtXTS05eXBDSTZfSE03WTRYLTM3MkxOUjhBRXRtNlVrRTVSSVQ0LWRyVWNjUUJSc0FWTGl4QWtTaEx5NGxxdXJ2ZHJuNTc5dXRUakt0TlpySWZkSy1xVW82QXJYd9IBxAFBVV95cUxQN1E3WGQ0WkNTVjFiODlwR2o1UDVobVdkSnVSbkpwQTRQZ2xweHBWZnh6NlRoZkZTOTkxM1VyU083S3pfMnVVVW5UNUc1bDZtdkoxNDNvYWFUeTc4b0MyUnJaWFFBQ3ZiYVV4QnIxODZxUi1UODBjOGphclRLR3JsWVNzRU9nV0tFQkdvSWpWRE4tcDlIXzVUQm5RVlU3UW40TnJYRkFKaHBBaE45ekNGYmxINWtRUnJBRU15OFBfQmFjMnRj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1105
    },
    {
      "date": "Jun 27",
      "text": "US launches more strikes on Iranian sites.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE1SaDY2MkdLNlQ2V25mS0VCQ2Zhc0tOdEpiLTh3Y1M2VWNfazFmX2hwemJBOG4xVi1QT1VRSVhKeEt5TFc0YTlSdGlqVEJhRkRJVjNzWnYyTlNyM0s4X2Rhd1ZKQzc5Y2VXNVRtMkZSRVVaSEw2VFNXMw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1105
    },
    {
      "date": "Jun 27",
      "text": "Iran attacks Bahrain and Kuwait following US strikes and threatens to halt talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxQcDBTQkFEbzlzV3FGUXhBeks0Wm5CV2RIU0J4aFcwTl9jRFRNeHRNbkxzVEZNa3ZNSTcwS1FDZm5PM3RDbVJuMFc0bWRwR1hhSlZFVGlMSkdvOC1GcnlLUWpUbjQ0aFlMYWN3X0gtdVBUWHZYSHNKR3BKelJtdUZ1dUpnTWVubU1BOWowd1N3aE1kckE1Uklya1huN25iLUxYM2Q5N0JtcVY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1105
    },
    {
      "date": "Jun 27",
      "text": "Oil prices rise as renewed U.S.-Iran strikes reignite Middle East supply fears.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxOTWJRcFBwNnR2cWRJVkJQb3VRQmJiNkI3cHR6X3pGWGU3NWp0YllOaDZUdWdvZ0Z5TldETFgta2U2WUR4Nnh0VEZxQXB0TmJpRWhlM1Y2M1hBSk5PSnFwWlktUGEtNEo4djBOdUlJVklqM1VaWEoxaXRPMnRZbllLNGJaTkh4WUtERUV6MUEzUHJET3lraXNVQjRhbEtFU2150gGmAUFVX3lxTFBZcmZVZ2kzRjRkT1IzYzRMWnBBX25SSklTTk43WXV2VnRQN1k0clNnOHp3YUhIN214clJOU1BONTlOVG1TRXlEMXR3UkpiVURPb24zVjJjblpJUkw4WTVpZ3U4ZnJ6MXNYbEpNcVJPNmVVVGw3MlBJU1pybWlqN3BjbTNzVFRUV3JxQXZxaVpEXzJiQ0NxeVlTTWJ0UVZVc1hTNkdNTUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 1105
    },
    {
      "date": "Jun 27",
      "text": "U.S. and Iran reportedly agree to halt attacks and hold talks in Doha on June 30.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMigAJBVV95cUxOcVlzck5hM3RXd2JYbmV3UFJMemRFdDY2OVhlZk81STRSZThjaERlbEVGX0hkUUJkb3c4MG5MTHVnNW5XelZzY04wcG9iV09NQXg3MVY1RTRLV25BdEU4dE9MbEZ5eUU4UG1Lb1ZzQzRkSng3TXQtcGh1eWVBOWljcG1FRFFCa3hGVHRCVUx0NWZfamJJeEJEcWhuQVdPZTJOSE9nZjhadU1nOWRCSXN0dnRPMHVnNEYwLTByNUFZOExmcjJHOTBHWWVMUjBmRDEySTE0TFNraVQzOVJaMDJqSWlqNzFmQ0NrQ2FVejJsWlJtdFJmUHZ5UGpxa3ZjYTF50gGHAkFVX3lxTE41ajVPcVFuTF9WeEJGT3Fqb3Jpbl9rdWdWbmJaQnBDMXIwRmgxaHdIMUQ5bnpqbnJTVGN1RGpQXzgyTi1kY2VzUERmUm42QUt2eHNOeUNuLUJNZXZOZ2pMUUE3SXU2RV94cFJabW1MUmFkcnpEcEJRSWxmOEM1dzBIcGxaeDIySzVfMzh4X1hWUnM2bFo4NzBUOFo5NmpxRWFUc3ZaLWtOVUpfTjhSaTFlVHBvT0YzSmJxblctMW5tUWJTUFZSd01hUkMzaXRrUm9VckJycVQ2TjF2cU9WaXlRNGxxbWZwSGROWGY3ZldVVjZuN1BoWlh4OGtMSmk3TFJpbHVVN3c4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 1105
    },
    {
      "date": "Jun 27",
      "text": "US official says US and Iran to ‘stand down for now’ after exchange of fire.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE9JcVZwTU9wS3YxN1ZZcHgzWTRxdHpNN2Y0UlRDS1dneHhWQWdWTTNibkUwMGJGTjI1N3ROQWFjSkI3MURHTTNCVXBCS2hDYzc5em51MjNYalBRQ1M0dV9ILTNlTF9CYzFYTzVfTGkyU1RXcUR2alZUbA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1105
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (16 headlines)"
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
      "perspective": "US",
      "headline": "US Strikes Iran Over Aggression",
      "summary": "The US states its strikes on Iran are a response to continued aggression against shipping and violations of a ceasefire agreement.",
      "tone": "defiant",
      "latestSinceUpdate": 1092
    },
    {
      "perspective": "Iran",
      "headline": "Iran Retaliates Against US Attacks",
      "summary": "Iran asserts its strikes are retaliatory actions against recent US military attacks and to defend its sovereign interests.",
      "tone": "defiant",
      "latestSinceUpdate": 1092
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Rejects US-Israel Deal",
      "summary": "Hezbollah's leadership has publicly rejected the US-brokered security deal between Israel and Lebanon, calling it a surrender.",
      "tone": "defiant",
      "latestSinceUpdate": 1092
    }
  ]
});

export default LATEST_SNAPSHOT;
