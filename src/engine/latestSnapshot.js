export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2255,
  "lastUpdated": "2026-08-25",
  "lastSyncedAt": "2026-08-25T11:36:21.965Z",
  "warDay": 179,
  "summary": "The US announced new sanctions against Iran, an oil tanker was attacked in the Strait of Hormuz, and Israel conducted strikes in southern Syria amid ongoing regional tensions and reports of Hezbollah exploiting a ceasefire for arms smuggling.",
  "lastNarrativeUpdate": "2026-08-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 15,
    "summary": "A ceasefire appears to be active, but Hezbollah is reportedly exploiting it to increase arms smuggling from Syria."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "Aug 23",
      "text": "US promises 'economic D-Day' ahead of expected Iran sanctions and announces new sanctions against Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPeHFWSVQxMEZ1OUctZkFoeXpZT0FfajFEeG5xVjBfVE9majl4dUYzUFRuVjYxWmRNZlUwanBvTHFDeTRtc3RkUnhiSnhNa1lpbzRaXzZMWG1PRElxZjlZclVPUEpfQWN5YjE3Q09aNHJkWm5BblRYSkE3eWdQR3M5MnVuVzhYcHdRTzlqdFJZRDJWNDd0S1JQdXIySVFlMjZYTEgzVmFJVDU1ejZ0UGhzcS1WU2RLV0JhNC1R0gHAAUFVX3lxTE9pYi1jaGFBc1VzOF9xRnlMQnpna01fWEpnNDRDY2ZfSWNMSHVZM0ZtUG9JZEQ1VEE1YURqUXNVVTJGRERzWElLZkFIOExJbzJaVm5Gc211aGtVZE83STFxeVZpUlFJQ0EwcUNERVUwcmtRSE9mWWx3eVNzcGJteHdUcGNuU2RpSS04ZjZXQjN1YU9rYU5XUFFKWTdqcUc0QnNiYXotaUdOZ1RabkdlOFJIYzJaTllRcUViRjBfLUR6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2255
    },
    {
      "date": "Aug 23",
      "text": "Oil tanker attacked and disabled in the Strait of Hormuz off Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxOdWlpbWFSejVVVWVhNFBVQ3M0RkpXN1FzQWpzVnhMWFRWUmlPOTNYRVlBMW41RWw3VnhIUGVvZ21pNlBTSERnYnk4UmpFc1N3ejFjN0tJUTVCc0pDUW1JRkhkbTNycWcxbGhVUUxnQkRLb2Y3Y0tVY1pFRk9zYTAxYXptdGVoUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 2255
    },
    {
      "date": "Aug 23",
      "text": "Iranian parliament advances plans for Hormuz service fees.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQOU1LUHpQeDVTWHlVQ25TbER0TExUcV9wcGIxY241UXhJeHNVTWFEVjQwSVpxTjBPT0h3b0FzT0FQX29Lc1o4c0VJRkt3c3BFYTIwUWdGbVFhb2I5b2FIYk1LMl9rejhSdk5KWHhNTGtWd3B5M0dzbkNnTlpyMUFxV2FfMV93R3Z4aHBOTmZGMUUwVk9lRDRlTnRRV3hMRHdUS1JsazFLYlRkaGN4OGtPNm9XQVpOVmJZVXBF0gHAAUFVX3lxTE9rcEFXUnZQM3pvYThzODM5SEQ1eFBVREdFN3RwNWxJUnRDYS1BcllTWkJ3TzVmeWl5VldHS25YSkFaY21ZTFg5SkgzX3pnODJ2N3k1cmRSbDNMdnBCeF91SmxpdDR1aDdlNGpqOWh0S056UUtxTmxULXRQQjctRVY3MkdtYTF4UlhKSEJXUmRZR3ptblNTcXlFOGdCZUtmT25pUVBTYjEtT0hZamNZTUc2a1B6eUV2QUpMTTktcmZUag?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2255
    },
    {
      "date": "Aug 23",
      "text": "Israel strikes southern Syria; Damascus condemns attack.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxNdUlteHpodFpvY0RlTjBQVWdHWmFhTTAtU0VzVlRuY3hYRTA3NEFBSHcwN3pIR1ROYnBWVmFxWDVPTmVRcXZSaUM0YURHZHBmUDg0ekNFTDJ3NTd0S2NiR3loeDlXTlUzNzI1TjlKai1uNzh5TWRPeHJzd1UzNmM4TGRYLW1ET3ZnQ3hmeWNTNWF5ZVVReUtqTGFLdEtqVXZJWEw4RXk2TjE4YkFO?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2255
    },
    {
      "date": "Aug 23",
      "text": "Iran state broadcaster claims over 50 facilities targeted in recent war with US and Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiyAFBVV95cUxOeE9tZWJOVDVzRG56VGdEdU5zWTk2d1RzdVBoYk5WYWxmVW1YUGlDcjJlNG1WZGl3R3JkNEJ6aEgtbTFpSEoxSlhMR0hSZzdxa0w1YnMzdWhJZlFLamp1SGRCRW1ETWR3M25IUms0LUU4NHZpSEVpcFRINmVYVWtteEE1WnlxWnRsV0JlV2NnTU5UYnBMQUFOMnhqRm1rUEVDRWdPMXR4dGd3VG1Kbll6aF9URjlqT1Y1YmlYODRzSmxWa0duaGkwZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 2255
    },
    {
      "date": "Aug 23",
      "text": "Hezbollah is reportedly exploiting a ceasefire to increase arms smuggling from Syria.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxNQ21mekFoVDJkaEt3TFhnRFY2VkU4S3Rjc3N5UXFNVDVVWGhKSWEtRjhtRS1CekRjVkRsSUZhZk0yOE1PU1AxdXNjWE5UNjIwWnlPVFdleWFOSVNvNXZEbThGN1I4d2JKYTh4WWw2T2tTcHJ4RlJ6QjRvbl85bDc0Y1BtZ05IM2hOelIzQkVMYW1MY0dseFRNZWdfS0MwazcwaFFaX1lzVFM4YzNtZUM1eVd1VFQxZUhLenhMendnaHRKVGs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2255
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
