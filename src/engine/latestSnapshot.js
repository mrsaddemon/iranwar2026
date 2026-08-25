export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2243,
  "lastUpdated": "2026-08-25",
  "lastSyncedAt": "2026-08-25T03:08:18.737Z",
  "warDay": 179,
  "summary": "The US is implementing new economic sanctions against Iran, which has responded with threats of retaliation and actions in the Strait of Hormuz, while regional tensions persist with Israeli strikes in Syria and Hezbollah's alleged ceasefire violations.",
  "lastNarrativeUpdate": "2026-08-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 30,
    "summary": "A ceasefire appears to be in effect, but reports indicate Hezbollah is exploiting it for arms smuggling and continuing to use force in security zones."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
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
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 65,
    "tradeImpact": 47,
    "sanctionsPressure": 54,
    "globalPressure": 61,
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
      "text": "US announces new sanctions against Iran; Bessent promises 'economic D-Day'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPeHFWSVQxMEZ1OUctZkFoeXpZT0FfajFEeG5xVjBfVE9majl4dUYzUFRuVjYxWmRNZlUwanBvTHFDeTRtc3RkUnhiSnhNa1lpbzRaXzZMWG1PRElxZjlZclVPUEpfQWN5YjE3Q09aNHJkWm5BblRYSkE3eWdQR3M5MnVuVzhYcHdRTzlqdFJZRDJWNDd0S1JQdXIySVFlMjZYTEgzVmFJVDU1ejZ0UGhzcS1WU2RLV0JhNC1R0gHAAUFVX3lxTE9pYi1jaGFBc1VzOF9xRnlMQnpna01fWEpnNDRDY2ZfSWNMSHVZM0ZtUG9JZEQ1VEE1YURqUXNVVTJGRERzWElLZkFIOExJbzJaVm5Gc211aGtVZE83STFxeVZpUlFJQ0EwcUNERVUwcmtRSE9mWWx3eVNzcGJteHdUcGNuU2RpSS04ZjZXQjN1YU9rYU5XUFFKWTdqcUc0QnNiYXotaUdOZ1RabkdlOFJIYzJaTllRcUViRjBfLUR6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2243
    },
    {
      "date": "Aug 23",
      "text": "Iran warns of a harsh response to anticipated US sanctions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxNY2JoQ0VHWjRHSW9xVVVFQ0J4eUN0RC1pRFdSU0hUajg2dDU0SU9vMDcwd3g4TVFmeWF4VDNTLUlyUld3Z19KU092SjlmdDVfYi1fNXdsLWx5TFhxaloyZEk4QnpJalNtZzhESWtGeHlzcDNwbnJfcUNUM0hNOTVlejBYNXA2Q05XNEZRNGVYVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Chicago Tribune",
      "latestSinceUpdate": 2243
    },
    {
      "date": "Aug 23",
      "text": "Iran threatens 45 tankers with fines and confiscation in Hormuz escalation.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPR1A3TzVlaW92SHFPcHNmUjdQZ1hIYi0xZWNCdGVpcmY4VmZBUHNneElLRnE5dDFwZXRRX1FfcHFkMDlFMm5kdGh2aldsWnllaGZSVWJ2SFhzUVRRU3FyNzJNeWJfb3lrQnhqQ2g0d1c0ZUo0dllmTkd4QzAwWTNZV05sNlc2M3c5c3d5Zi1hTF90N0ltX25sUUk4T0RURUE3akZuX2VrMEFGcXFIMV9FRFU5VWI2UE4wREV3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2243
    },
    {
      "date": "Aug 23",
      "text": "Oil Prices Retreat as Iraqi Tanker Passage Through Hormuz Eases Supply Fears.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikgFBVV95cUxOZE5mOTZCWDV2d2poSW80VGdneE8yNVN1SEFWTml1Tl9CYXY1UzdmMTQ2b2Z6TlIwVi1pYjhwNHJpTVl4VUwzX0lPVjg5V1EzTFhLM2Z0QnNzZWlLRjNnUWNvY2gzaTV2b3BJRm5obm9CX2VUMFB3d3hZMUJhT3RBQUI1N0dlX2g4N0ZpRXRBRU9OUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Yahoo Finance",
      "latestSinceUpdate": 2243
    },
    {
      "date": "Aug 23",
      "text": "Israel strikes southern Syria; Damascus condemns attack.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxNdUlteHpodFpvY0RlTjBQVWdHWmFhTTAtU0VzVlRuY3hYRTA3NEFBSHcwN3pIR1ROYnBWVmFxWDVPTmVRcXZSaUM0YURHZHBmUDg0ekNFTDJ3NTd0S2NiR3loeDlXTlUzNzI1TjlKai1uNzh5TWRPeHJzd1UzNmM4TGRYLW1ET3ZnQ3hmeWNTNWF5ZVVReUtqTGFLdEtqVXZJWEw4RXk2TjE4YkFO?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2243
    },
    {
      "date": "Aug 23",
      "text": "Hezbollah said to be exploiting ceasefire to increase arms smuggling from Syria.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxNQ21mekFoVDJkaEt3TFhnRFY2VkU4S3Rjc3N5UXFNVDVVWGhKSWEtRjhtRS1CekRjVkRsSUZhZk0yOE1PU1AxdXNjWE5UNjIwWnlPVFdleWFOSVNvNXZEbThGN1I4d2JKYTh4WWw2T2tTcHJ4RlJ6QjRvbl85bDc0Y1BtZ05IM2hOelIzQkVMYW1MY0dseFRNZWdfS0MwazcwaFFaX1lzVFM4YzNtZUM1eVd1VFQxZUhLenhMendnaHRKVGs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2243
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
