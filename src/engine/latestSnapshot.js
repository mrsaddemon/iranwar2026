export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2268,
  "lastUpdated": "2026-08-25",
  "lastSyncedAt": "2026-08-25T20:39:18.787Z",
  "warDay": 179,
  "summary": "The US has announced new sanctions against Iran and shifted to economic pressure, while Iran advances plans for Hormuz service fees amidst ongoing regional military actions and reported US casualties.",
  "lastNarrativeUpdate": "2026-08-25",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 15,
    "summary": "No ceasefire or de-escalation agreement is currently reported between the primary belligerents."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
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
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
    "escalationLevel": 70,
    "oilDisruption": 60,
    "tradeImpact": 56,
    "sanctionsPressure": 61,
    "globalPressure": 74,
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
      "date": "Aug 23",
      "text": "Trump claims US Navy demined Hormuz and warns Tehran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE11U283WFBPdlU5OTRhNHRnLXFLRF9pSm5rcXBlenJ3WGhQVzRaTWVDQzFaQ091UnZoUHV0MDNpdTJBTnVDOE8wcVRQSmVhU3NBY2pZeTluaEltaUhUMFFrTHJHb0VpdkRlTWNmN25nLXpPcGhxRERJ0gF8QVVfeXFMTjRybTlMLURxREVpSUJJVjJENHFEbkNaam5QQnB0bkxuR0w0SzNud0JJMktPN3JFUHJJS0ZKRVd5RjRrWDlEUlFWYnZteHNncVlEVWdyWUJ5SE1OTUQwZS1CS09XbmpuRWZhNVh6RkFHVzEtSUtxTjNWOTRCQg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2268
    },
    {
      "date": "Aug 23",
      "text": "Bessent promises ‘economic D-Day’ ahead of expected Iran sanctions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE10NWduUk9rVWtZSTJ4a2k3clBvRGdIQlFLaWFyM1VqR0RDZTE2QnhfUHRleWh3T2oxR2k3Y19mVi1EcURxSllxd0lEblFoNklOSS0waGpqdGM0bjdWUm1Kamt3Tm9GaTNBbWVlMnJB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2268
    },
    {
      "date": "Aug 24",
      "text": "US announces new sanctions against Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPeHFWSVQxMEZ1OUctZkFoeXpZT0FfajFEeG5xVjBfVE9majl4dUYzUFRuVjYxWmRNZlUwanBvTHFDeTRtc3RkUnhiSnhNa1lpbzRaXzZMWG1PRElxZjlZclVPUEpfQWN5YjE3Q09aNHJkWm5BblRYSkE3eWdQR3M5MnVuVzhYcHdRTzlqdFJZRDJWNDd0S1JQdXIySVFlMjZYTEgzVmFJVDU1ejZ0UGhzcS1WU2RLV0JhNC1R0gHAAUFVX3lxTE9pYi1jaGFBc1VzOF9xRnlMQnpna01fWEpnNDRDY2ZfSWNMSHVZM0ZtUG9JZEQ1VEE1YURqUXNVVTJGRERzWElLZkFIOExJbzJaVm5Gc211aGtVZE83STFxeVZpUlFJQ0EwcUNERVUwcmtRSE9mWWx3eVNzcGJteHdUcGNuU2RpSS04ZjZXQjN1YU9rYU5XUFFKWTdqcUc0QnNiYXotaUdOZ1RabkdlOFJIYzJaTllRcUViRjBfLUR6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2268
    },
    {
      "date": "Aug 24",
      "text": "Iranian parliament advances plans for Hormuz service fees.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQOU1LUHpQeDVTWHlVQ25TbER0TExUcV9wcGIxY241UXhJeHNVTWFEVjQwSVpxTjBPT0h3b0FzT0FQX29Lc1o4c0VJRkt3c3BFYTIwUWdGbVFhb2I5b2FIYk1LMl9rejhSdk5KWHhNTGtWd3B5M0dzbkNnTlpyMUFxV2FfMV93R3Z4aHBOTmZGMUUwVk9lRDRlTnRRV3hMRHdUS1JsazFLYlRkaGN4OGtPNm9XQVpOVmJZVXBF0gHAAUFVX3lxTE9rcEFXUnZQM3pvYThzODM5SEQ1eFBVREdFN3RwNWxJUnRDYS1BcllTWkJ3TzVmeWl5VldHS25YSkFaY21ZTFg5SkgzX3pnODJ2N3k1cmRSbDNMdnBCeF91SmxpdDR1aDdlNGpqOWh0S056UUtxTmxULXRQQjctRVY3MkdtYTF4UlhKSEJXUmRZR3ptblNTcXlFOGdCZUtmT25pUVBTYjEtT0hZamNZTUc2a1B6eUV2QUpMTTktcmZUag?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2268
    },
    {
      "date": "Aug 24",
      "text": "Israel strikes southern Syria; Damascus condemns attack.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxNdUlteHpodFpvY0RlTjBQVWdHWmFhTTAtU0VzVlRuY3hYRTA3NEFBSHcwN3pIR1ROYnBWVmFxWDVPTmVRcXZSaUM0YURHZHBmUDg0ekNFTDJ3NTd0S2NiR3loeDlXTlUzNzI1TjlKai1uNzh5TWRPeHJzd1UzNmM4TGRYLW1ET3ZnQ3hmeWNTNWF5ZVVReUtqTGFLdEtqVXZJWEw4RXk2TjE4YkFO?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2268
    },
    {
      "date": "Aug 24",
      "text": "Iran and Oman discuss joint shipping route in Strait of Hormuz and mine clearing mission.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTE96cjBibnU4b2hJd3VMYWZhS2EtUXhudDdYaWdhbUJWaEx5OF9sd3BwdFA5dUhUTlBFeTl6QVYzcVMwdEJEWS1jOEg0Y2VtQVZSLW95bFYwMkxWSGxwZ1FrYzNMNk54T3N3TFJOcTBST0JDUdIBd0FVX3lxTFBzOWdXTm5HXzl0SkxEc2VPLXpDeVRJZnk4YTJjRndaZmZrVG03Yy1kMlplOV9EVzFkWWlkalFOMlZoZVlSWVF4c2hVOVZvdDBHUVRFbVhwdFpsZ1BnbmMyQ1VJYndaMDNpNTh5cDNlbG9NbUgxSWlR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2268
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
