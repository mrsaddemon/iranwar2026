export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2283,
  "lastUpdated": "2026-08-26",
  "lastSyncedAt": "2026-08-26T07:12:45.707Z",
  "warDay": 180,
  "summary": "The Iran war continues with ongoing tensions over the Strait of Hormuz, new US sanctions against Iran, reported Iranian strikes on US intelligence sites, and escalating regional conflicts involving Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-08-26",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is currently active; conflict and tensions remain high."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
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
    "nuclearIndex": 40,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Aug 25",
      "text": "Iran states that an Oman deal on Hormuz does not mean the strait is open, insisting on US lifting its blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE11U283WFBPdlU5OTRhNHRnLXFLRF9pSm5rcXBlenJ3WGhQVzRaTWVDQzFaQ091UnZoUHV0MDNpdTJBTnVDOE8wcVRQSmVhU3NBY2pZeTluaEltaUhUMFFrTHJHb0VpdkRlTWNmN25nLXpPcGhxRERJ0gF8QVVfeXFMTjRybTlMLURxREVpSUJJVjJENHFEbkNaam5QQnB0bkxuR0w0SzNud0JJMktPN3JFUHJJS0ZKRVd5RjRrWDlEUlFWYnZteHNncVlEVWdyWUJ5SE1OTUQwZS1CS09XbmpuRWZhNVh6RkFHVzEtSUtxTjNWOTRCQg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2283
    },
    {
      "date": "Aug 25",
      "text": "The US sends a message to Iran through Pakistan regarding the reopening of the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxOdWlpbWFSejVVVWVhNFBVQ3M0RkpXN1FzQWpzVnhMWFRWUmlPOTNYRVlBMW41RWw3VnhIUGVvZ21pNlBTSERnYnk4UmpFc1N3ejFjN0tJUTVCc0pDUW1JRkhkbTNycWcxbGhVUUxnQkRLb2Y3Y0tVY1pFRk9zYTAxYXptdGVoUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2283
    },
    {
      "date": "Aug 25",
      "text": "The US announces new sanctions against Iran amidst ongoing conflict.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPeHFWSVQxMEZ1OUctZkFoeXpZT0FfajFEeG5xVjBfVE9majl4dUYzUFRuVjYxWmRNZlUwanBvTHFDeTRtc3RkUnhiSnhNa1lpbzRaXzZMWG1PRElxZjlZclVPUEpfQWN5YjE3Q09aNHJkWm5BblRYSkE3eWdQR3M5MnVuVzhYcHdRTzlqdFJZRDJWNDd0S1JQdXIySVFlMjZYTEgzVmFJVDU1ejZ0UGhzcS1WU2RLV0JhNC1R0gHAAUFVX3lxTE9pYi1jaGFBc1VzOF9xRnlMQnpna01fWEpnNDRDY2ZfSWNMSHVZM0ZtUG9JZEQ1VEE1YURqUXNVVTJGRERzWElLZkFIOExJbzJaVm5Gc211aGtVZE83STFxeVZpUlFJQ0EwcUNERVUwcmtRSE9mWWx3eVNzcGJteHdUcGNuU2RpSS04ZjZXQjN1YU9rYU5XUFFKWTdqcUc0QnNiYXotaUdOZ1RabkdlOFJIYzJaTllRcUViRjBfLUR6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2283
    },
    {
      "date": "Aug 25",
      "text": "A report indicates Iranian strikes caused billions in damage to US intelligence sites.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxNYzlVbWhabWV4eDRJaGdCOXNlM3FrdU1RUWhkVlFzMEFocTRFQW1vTGlJZmt6Ti1DY2FXMWNuQW5KRE9yUERTZWI2c2RyaVVCVjI0NVVZQnNsaXVRVHRBZE1tZUtPODNJM2VwczdsTzdYdzZjN2t2dm9XZ2xiMzRmQkozaTJFWEoxNkNucml0Tms4cWFXSmpjUmNQTzltNlFJX3dfRm02enhSM1BMRmlkNTcxanJ0SmZ4Z0xoS1FTTjlySmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2283
    },
    {
      "date": "Aug 25",
      "text": "Sixty more U.S. soldiers are reported injured in the Iran War.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 2283
    },
    {
      "date": "Aug 25",
      "text": "Two US military refueling aircraft depart Bulgaria, drawing anger from Iran over the deployment.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMidkFVX3lxTE1HQUQwb1Fsd29YXzUzeVJxRVg3T082dDlaekM2QXducVNhS1FVdEVoQjJBVF9sQ1B0N1pWcFUwU01ncUlOYkNMQ3ppR3RtcWJyWlFleFlDZ1hocFB1TkoxZkoybmxVa1N4dFNJdUFZY21Wd2w4ZHfSAXtBVV95cUxPUDB3ZEtZa195M2s1N1FlYXgxU1IwZkpOVnFuTF9CY29SdWpUWFVndHh0cnZQYWVkUWVJMGROVmJkYnMybUhxcWM5eC1YSlRZbHpNejNmYWoyMXd0TVUtbGpKYWdhWW1hSVRfQWRCSU53RGd5dUFlOUlqa0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2283
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
