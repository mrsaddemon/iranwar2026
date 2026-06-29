export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1107,
  "lastUpdated": "2026-06-29",
  "lastSyncedAt": "2026-06-29T12:05:05.621Z",
  "warDay": 122,
  "summary": "A fragile US-Iran ceasefire is strained by mutual strikes in the Gulf region, targeting US sites in Bahrain and Kuwait, while Israel continues operations against Hezbollah in Lebanon, and talks are set for June 30.",
  "lastNarrativeUpdate": "2026-06-29",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 2,
    "summary": "A fragile ceasefire between the U.S. and Iran is strained by recent mutual strikes but talks are scheduled for June 30."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
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
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 58,
    "globalPressure": 68,
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
      "date": "Jun 28",
      "text": "Fragile US-Iran ceasefire strained, Bahrain and Kuwait targeted by Tehran following US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE9JcVZwTU9wS3YxN1ZZcHgzWTRxdHpNN2Y0UlRDS1dneHhWQWdWTTNibkUwMGJGTjI1N3ROQWFjSkI3MURHTTNCVXBCS2hDYzc5em51MjNYalBRQ1M0dV9ILTNlTF9CYzFYTzVfTGkyU1RXcUR2alZUbA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1107
    },
    {
      "date": "Jun 28",
      "text": "IRGC claims 8 US military sites destroyed in retaliatory strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOam5lWGFqNWVZWW5aWnBwNGlhZEhGNlZxSEJMRW53YjYwQjJ0OXVTSVhJeGI5aDBhV1BPdXg0b1B0RGg3N2dMbFh3MHRxcFp1MFljZTlsNFgtYmxsSThLRnlBWEtXTS05eXBDSTZfSE03WTRYLTM3MkxOUjhBRXRtNlVrRTVSSVQ0LWRyVWNjUUJSc0FWTGl4QWtTaEx5NGxxdXJ2ZHJuNTc5dXRUakt0TlpySWZkSy1xVW82QXJYd9IBxAFBVV95cUxQN1E3WGQ0WkNTVjFiODlwR2o1UDVobVdkSnVSbkpwQTRQZ2xweHBWZnh6NlRoZkZTOTkxM1VyU083S3pfMnVVVW5UNUc1bDZtdkoxNDNvYWFUeTc4b0MyUnJaWFFBQ3ZiYVV4QnIxODZxUi1UODBjOGphclRLR3JsWVNzRU9nV0tFQkdvSWpWRE4tcDlIXzVUQm5RVlU3UW40TnJYRkFKaHBBaE45ekNGYmxINWtRUnJBRU15OFBfQmFjMnRj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1107
    },
    {
      "date": "Jun 28",
      "text": "Iran threatens 'complete halt' to talks after trading strikes with U.S., but Washington official says talks to continue.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxPTGcxeHZmSjcwLVpBNmxlaWQ4aG11Ynd6U3pqbGhkM09BTmxuYXBtczBhR3NGQWxVYU1WWGlVTGU1QlhHWVJOdDhWRHJoQ2hMcGZyb013NGVpR3NzQ004RUJWd2JQWDFYVG1SZUhVOUI0UldOWGdQRnRTWW5FVThLdG9LeHk2a0l3d0tZSmhnVXkxZ1hSOTNHcFcwaTJKaUxmZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1107
    },
    {
      "date": "Jun 28",
      "text": "U.S. and Iran agree to halt attacks and hold talks in Doha on June 30.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMigAJBVV95cUxOcVlzck5hM3RXd2JYbmV3UFJMemRFdDY2OVhlZk81STRSZThjaERlbEVGX0hkUUJkb3c4MG5MTHVnNW5XelZzY04wcG9iV09NQXg3MVY1RTRLV25BdEU4dE9MbEZ5eUU4UG1Lb1ZzQzRkSng3TXQtcGh1eWVBOWljcG1FRFFCa3hGVHRCVUx0NWZfamJJeEJEcWhuQVdPZTJOSE9nZjhadU1nOWRCSXN0dnRPMHVnNEYwLTByNUFZOExmcjJHOTBHWWVMUjBmRDEySTE0TFNraVQzOVJaMDJqSWlqNzFmQ0NrQ2FVejJsWlJtdFJmUHZ5UGpxa3ZjYTF50gGHAkFVX3lxTE41ajVPcVFuTF9WeEJGT3Fqb3Jpbl9rdWdWbmJaQnBDMXIwRmgxaHdIMUQ5bnpqbnJTVGN1RGpQXzgyTi1kY2VzUERmUm42QUt2eHNOeUNuLUJNZXZOZ2pMUUE3SXU2RV94cFJabW1MUmFkcnpEcEJRSWxmOEM1dzBIcGxaeDIySzVfMzh4X1hWUnM2bFo4NzBUOFo5NmpxRWFUc3ZaLWtOVUpfTjhSaTFlVHBvT0YzSmJxblctMW5tUWJTUFZSd01hUkMzaXRrUm9VckJycVQ2TjF2cU9WaXlRNGxxbWZwSGROWGY3ZldVVjZuN1BoWlh4OGtMSmk3TFJpbHVVN3c4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 1107
    },
    {
      "date": "Jun 28",
      "text": "Traffic slows at Strait of Hormuz after weekend of fighting, with Iran insisting on control.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1107
    },
    {
      "date": "Jun 28",
      "text": "Israel destroys Hezbollah underground infrastructure in southern Lebanon, Hezbollah rejects agreement.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOeHpnQ2htRldyN2wyQkhMc0JqSVdwbDA5VkRCZklRS0t1QURDWHFWRUJEM1BxNnFhN0hCcnRNQ3hvQm9USV9wSkhKZXl2OXJSc2xObjFxRTdCNXVaUVNsdlVsZHd4dDNwVHZTUU5LY1BodWRrZkZHdU1NcFVGMDhfVmpJTnkwSDc4NzdBWTlVUnhKaFg2ZTZiSnNFeDdteG5TVmZDbEtFRGhLSk0yNDFabDdUTDV6SmFJejQ0akZ4OWg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1107
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
