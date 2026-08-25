export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2257,
  "lastUpdated": "2026-08-25",
  "lastSyncedAt": "2026-08-25T13:03:41.539Z",
  "warDay": 179,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-08-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 15,
    "summary": "A ceasefire is reportedly active but is being exploited by Hezbollah for arms smuggling from Syria."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 56,
    "globalPressure": 65,
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
      "date": "Aug 23",
      "text": "Bessent promises ‘economic D-Day’ ahead of expected Iran sanctions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE10NWduUk9rVWtZSTJ4a2k3clBvRGdIQlFLaWFyM1VqR0RDZTE2QnhfUHRleWh3T2oxR2k3Y19mVi1EcURxSllxd0lEblFoNklOSS0waGpqdGM0bjdWUm1Kamt3Tm9GaTNBbWVlMnJB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2257
    },
    {
      "date": "Aug 23",
      "text": "US announces new sanctions against Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPeHFWSVQxMEZ1OUctZkFoeXpZT0FfajFEeG5xVjBfVE9majl4dUYzUFRuVjYxWmRNZlUwanBvTHFDeTRtc3RkUnhiSnhNa1lpbzRaXzZMWG1PRElxZjlZclVPUEpfQWN5YjE3Q09aNHJkWm5BblRYSkE3eWdQR3M5MnVuVzhYcHdRTzlqdFJZRDJWNDd0S1JQdXIySVFlMjZYTEgzVmFJVDU1ejZ0UGhzcS1WU2RLV0JhNC1R0gHAAUFVX3lxTE9pYi1jaGFBc1VzOF9xRnlMQnpna01fWEpnNDRDY2ZfSWNMSHVZM0ZtUG9JZEQ1VEE1YURqUXNVVTJGRERzWElLZkFIOExJbzJaVm5Gc211aGtVZE83STFxeVZpUlFJQ0EwcUNERVUwcmtRSE9mWWx3eVNzcGJteHdUcGNuU2RpSS04ZjZXQjN1YU9rYU5XUFFKWTdqcUc0QnNiYXotaUdOZ1RabkdlOFJIYzJaTllRcUViRjBfLUR6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2257
    },
    {
      "date": "Aug 23",
      "text": "Oil tanker attacked in Strait of Hormuz off Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxOdWlpbWFSejVVVWVhNFBVQ3M0RkpXN1FzQWpzVnhMWFRWUmlPOTNYRVlBMW41RWw3VnhIUGVvZ21pNlBTSERnYnk4UmpFc1N3ejFjN0tJUTVCc0pDUW1JRkhkbTNycWcxbGhVUUxnQkRLb2Y3Y0tVY1pFRk9zYTAxYXptdGVoUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 2257
    },
    {
      "date": "Aug 23",
      "text": "Iranian parliament advances plans for Hormuz service fees.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQOU1LUHpQeDVTWHlVQ25TbER0TExUcV9wcGIxY241UXhJeHNVTWFEVjQwSVpxTjBPT0h3b0FzT0FQX29Lc1o4c0VJRkt3c3BFYTIwUWdGbVFhb2I5b2FIYk1LMl9rejhSdk5KWHhNTGtWd3B5M0dzbkNnTlpyMUFxV2FfMV93R3Z4aHBOTmZGMUUwVk9lRDRlTnRRV3hMRHdUS1JsazFLYlRkaGN4OGtPNm9XQVpOVmJZVXBF0gHAAUFVX3lxTE9rcEFXUnZQM3pvYThzODM5SEQ1eFBVREdFN3RwNWxJUnRDYS1BcllTWkJ3TzVmeWl5VldHS25YSkFaY21ZTFg5SkgzX3pnODJ2N3k1cmRSbDNMdnBCeF91SmxpdDR1aDdlNGpqOWh0S056UUtxTmxULXRQQjctRVY3MkdtYTF4UlhKSEJXUmRZR3ptblNTcXlFOGdCZUtmT25pUVBTYjEtT0hZamNZTUc2a1B6eUV2QUpMTTktcmZUag?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2257
    },
    {
      "date": "Aug 23",
      "text": "Israel’s Netanyahu claims Iran tried to kill one of his sons.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxQbFBOZWZsSFE1TUN2WmJiaUpjQ3RCUTNKUXZoVldxME4wNkd6d2dUX0pMb3ZqSVVsZWxFRFBpM1NmcUFBWnJCMlVkU2RWRXh3Q0lFa1BLRlVldXgxZFFiZTBUOGtJSk5tbFZIazBYOTI3azVjZVVPTkpNLVJreU1BSFBtZ1BDMG9EQXZBMEhUTEFYT2xZRU5CZlhqVEphX1dWS3fSAacBQVVfeXFMT19BMHlidll4TkI2b1Z0T0xUZnFSS2dBUGJmOUUydnBPeGhwaVlxQjE2N3dSWTA0U0NoN3ZoUlNyejlQLTA4RUlEdVhUb3VmTmNqeGF0NUZLYW1QbUdWWUp3Q1FHMTBfWHdBb05BVEliSC1fbll2S2JoWHJ6NHFnY1dYMGotUkMycTlCU0Y0NlFIeXJrRGxGQWw5emJaY3ZBZEFMbUk3SXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2257
    },
    {
      "date": "Aug 23",
      "text": "Israel strikes southern Syria; Damascus condemns attack.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxNdUlteHpodFpvY0RlTjBQVWdHWmFhTTAtU0VzVlRuY3hYRTA3NEFBSHcwN3pIR1ROYnBWVmFxWDVPTmVRcXZSaUM0YURHZHBmUDg0ekNFTDJ3NTd0S2NiR3loeDlXTlUzNzI1TjlKai1uNzh5TWRPeHJzd1UzNmM4TGRYLW1ET3ZnQ3hmeWNTNWF5ZVVReUtqTGFLdEtqVXZJWEw4RXk2TjE4YkFO?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2257
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
      "headline": "US Sanctions: A Declaration of War",
      "summary": "Iran views US sanctions as an act of war against all nations, indicating a strong stance against economic pressure. Despite this, Iran has granted passage to Iraqi oil tankers through the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 2160
    },
    {
      "perspective": "United States",
      "headline": "Hormuz as 'American Territory', Economic Pressure on Iran",
      "summary": "President Trump asserts the Strait of Hormuz as 'American territory' and threatens Iran's trade partners, signaling a shift towards economic pressure. The US military continues to facilitate oil transit through the strait.",
      "tone": "defiant",
      "latestSinceUpdate": 2160
    },
    {
      "perspective": "Israel",
      "headline": "Retaliation Against Iran for Hezbollah",
      "summary": "Former Prime Minister Bennett advocates for Israeli strikes on Iran in response to Hezbollah attacks. This perspective suggests a direct link between Hezbollah's actions and Iran, calling for escalated military response.",
      "tone": "strained",
      "latestSinceUpdate": 2160
    },
    {
      "perspective": "Hezbollah/Lebanon",
      "headline": "Force Only Way to Compel Israeli Withdrawal",
      "summary": "Hezbollah's Nawaf Moussawi states that only force can compel Israel to leave Lebanon, indicating a continued commitment to military confrontation. Efforts to tame Hezbollah within Lebanon are reportedly stalling amid the Israel War.",
      "tone": "defiant",
      "latestSinceUpdate": 2160
    }
  ]
});

export default LATEST_SNAPSHOT;
