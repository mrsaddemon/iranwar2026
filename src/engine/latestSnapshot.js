export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1103,
  "lastUpdated": "2026-06-28",
  "lastSyncedAt": "2026-06-28T22:37:01.845Z",
  "warDay": 121,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-28",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "A recent ceasefire between the US and Iran has collapsed amidst renewed military strikes and the suspension of technical talks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 68,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Jun 27",
      "text": "Iran's IRGC claims destruction of 8 US military sites.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1103
    },
    {
      "date": "Jun 27",
      "text": "US launches multiple strikes on Iranian sites.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE1SaDY2MkdLNlQ2V25mS0VCQ2Zhc0tOdEpiLTh3Y1M2VWNfazFmX2hwemJBOG4xVi1QT1VRSVhKeEt5TFc0YTlSdGlqVEJhRkRJVjNzWnYyTlNyM0s4X2Rhd1ZKQzc5Y2VXNVRtMkZSRVVaSEw2VFNXMw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1103
    },
    {
      "date": "Jun 27",
      "text": "Iran cancels participation in technical talks following recent attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigAJBVV95cUxOcVlzck5hM3RXd2JYbmV3UFJMemRFdDY2OVhlZk81STRSZThjaERlbEVGX0hkUUJkb3c4MG5MTHVnNW5XelZzY04wcG9iV09NQXg3MVY1RTRLV25BdEU4dE9MbEZ5eUU4UG1Lb1ZzQzRkSng3TXQtcGh1eWVBOWljcG1FRFFCa3hGVHRCVUx0NWZfamJJeEJEcWhuQVdPZTJOSE9nZjhadU1nOWRCSXN0dnRPMHVnNEYwLTByNUFZOExmcjJHOTBHWWVMUjBmRDEySTE0TFNraVQzOVJaMDJqSWlqNzFmQ0NrQ2FVejJsWlJtdFJmUHZ5UGpxa3ZjYTF50gGHAkFVX3lxTE41ajVPcVFuTF9WeEJGT3Fqb3Jpbl9rdWdWbmJaQnBDMXIwRmgxaHdIMUQ5bnpqbnJTVGN1RGpQXzgyTi1kY2VzUERmUm42QUt2eHNOeUNuLUJNZXZOZ2pMUUE3SXU2RV94cFJabW1MUmFkcnpEcEJRSWxmOEM1dzBIcGxaeDIySzVfMzh4X1hWUnM2bFo4NzBUOFo5NmpxRWFUc3ZaLWtOVUpfTjhSaTFlVHBvT0YzSmJxblctMW5tUWJTUFZSd01hUkMzaXRrUm9VckJycVQ2TjF2cU9WaXlRNGxxbWZwSGROWGY3ZldVVjZuN1BoWlh4OGtMSmk3TFJpbHVVN3c4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 1103
    },
    {
      "date": "Jun 27",
      "text": "Iran launches drone and missile attacks targeting Bahrain and Kuwait, threatening a complete halt to talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPTGcxeHZmSjcwLVpBNmxlaWQ4aG11Ynd6U3pqbGhkM09BTmxuYXBtczBhR3NGQWxVYU1WWGlVTGU1QlhHWVJOdDhWRHJoQ2hMcGZyb013NGVpR3NzQ004RUJWd2JQWDFYVG1SZUhVOUI0UldOWGdQRnRTWW5FVThLdG9LeHk2a0l3d0tZSmhnVXkxZ1hSOTNHcFcwaTJKaUxmZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1103
    },
    {
      "date": "Jun 27",
      "text": "US launches a second night of strikes on Iran after a ship was hit by a drone.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQajBRX044WFVIbHpWazNnNjNjV0UwekFBT0N6b0MyaHNDTjZMSC00Nm9kX1VmR1RxMEt0R3IwaUFzUUFqWmg1cVg1U1VfUE9EaVVaVU1jbkU4d2s1cjdlelMyM0ZSVFBJd0NWM3FlOHBiejVtNGNNOVZOeWZHa2VqZ3I1a1ZIQUdnUWl0QmpBS0tGSWFlMHdEQWdIRWtOaGdNTjVlaUIzcDJud2prT2pGQzNiTVJWUnPSAbwBQVVfeXFMTVA3Sm5UdjV5TnlPMEFiTi1YZDdCNEgwNW1mNTljT3Q2eGNveUZySmRLSjRLWnc0WjdmLUxBcS1Yd2NjNG56OXkwVnlHblZJeEo0MGE5ZDRvMi1hSTZGQkpKUUZybHJpRkFybXprQW5SN1phN1JkS3hhS1p3WmFBUWhWRVNpdlVWUlRDcktWd0ZnamNDdjVyWUhJUENITTZ0WDE0WGxjU3B3ektLcmZaR2FUYVVPaF92dG5QU0o?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1103
    },
    {
      "date": "Jun 27",
      "text": "Iran warns ships not to bypass its chosen Hormuz route.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxNS1FfMkhuY0RtS0Jva0JjelZwMEk4RDVRTFJGU1VpbHFqVmR2dG9XYlBxX0paMUxPcDdwZ05PLTFfWHpMZUpMMGJuTURsbnU5c044aVV0ZkRQT25oeEFScDFGRVNodmVlOXFIYUVIV21EVnhfbU1NUC1iOERRSkNHY1BUd25jRDlGYXlSdDR5MldYVHl5NHA1NDZCT1dWdXBlWHFmQkhuc3dpZHBfV2NVYdIBsAFBVV95cUxNdFRDZ2tHUk9MOTRRVk9adklLWVNab0RqTFhsZjRscE0tY2IzeFBTTG1FejEzWkRIQVpWMDA4SUdwMGxjVGlzSHdtUzNVU21ueXp2YW1YVWtFalV1Q01nd0ItWWVCVmlSN1IyNERzX1ZrNEJBZ2xLV2dOQm51S2JYdjR5ZkRmWDJqTFNDNHFaalhiTjJZV0xwVXZSazJaN0kwUXdKSmVxTVlwWWZEckxrdg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "South China Morning Post",
      "latestSinceUpdate": 1103
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
