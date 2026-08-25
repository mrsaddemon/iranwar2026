export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2259,
  "lastUpdated": "2026-08-25",
  "lastSyncedAt": "2026-08-25T14:55:21.847Z",
  "warDay": 179,
  "summary": "The US and Israel are engaged in active military and economic conflict with Iran, marked by new US sanctions, Israeli strikes in Syria, and Iran's plans for Hormuz service fees, alongside a reported attack disabling a ship in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-08-25",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 15,
    "summary": "No ceasefire or de-escalation efforts are currently reported; conflict remains active."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 66,
    "globalPressure": 85,
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
      "text": "US sends message through Pakistan to Iran on reopening Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxOdWlpbWFSejVVVWVhNFBVQ3M0RkpXN1FzQWpzVnhMWFRWUmlPOTNYRVlBMW41RWw3VnhIUGVvZ21pNlBTSERnYnk4UmpFc1N3ejFjN0tJUTVCc0pDUW1JRkhkbTNycWcxbGhVUUxnQkRLb2Y3Y0tVY1pFRk9zYTAxYXptdGVoUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 2259
    },
    {
      "date": "Aug 23",
      "text": "US announces new sanctions against Iran; Bessent promises ‘economic D-Day’.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPeHFWSVQxMEZ1OUctZkFoeXpZT0FfajFEeG5xVjBfVE9majl4dUYzUFRuVjYxWmRNZlUwanBvTHFDeTRtc3RkUnhiSnhNa1lpbzRaXzZMWG1PRElxZjlZclVPUEpfQWN5YjE3Q09aNHJkWm5BblRYSkE3eWdQR3M5MnVuVzhYcHdRTzlqdFJZRDJWNDd0S1JQdXIySVFlMjZYTEgzVmFJVDU1ejZ0UGhzcS1WU2RLV0JhNC1R0gHAAUFVX3lxTE9pYi1jaGFBc1VzOF9xRnlMQnpna01fWEpnNDRDY2ZfSWNMSHVZM0ZtUG9JZEQ1VEE1YURqUXNVVTJGRERzWElLZkFIOExJbzJaVm5Gc211aGtVZE83STFxeVZpUlFJQ0EwcUNERVUwcmtRSE9mWWx3eVNzcGJteHdUcGNuU2RpSS04ZjZXQjN1YU9rYU5XUFFKWTdqcUc0QnNiYXotaUdOZ1RabkdlOFJIYzJaTllRcUViRjBfLUR6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2259
    },
    {
      "date": "Aug 23",
      "text": "Iranian parliament advances plans for Hormuz service fees.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQOU1LUHpQeDVTWHlVQ25TbER0TExUcV9wcGIxY241UXhJeHNVTWFEVjQwSVpxTjBPT0h3b0FzT0FQX29Lc1o4c0VJRkt3c3BFYTIwUWdGbVFhb2I5b2FIYk1LMl9rejhSdk5KWHhNTGtWd3B5M0dzbkNnTlpyMUFxV2FfMV93R3Z4aHBOTmZGMUUwVk9lRDRlTnRRV3hMRHdUS1JsazFLYlRkaGN4OGtPNm9XQVpOVmJZVXBF0gHAAUFVX3lxTE9rcEFXUnZQM3pvYThzODM5SEQ1eFBVREdFN3RwNWxJUnRDYS1BcllTWkJ3TzVmeWl5VldHS25YSkFaY21ZTFg5SkgzX3pnODJ2N3k1cmRSbDNMdnBCeF91SmxpdDR1aDdlNGpqOWh0S056UUtxTmxULXRQQjctRVY3MkdtYTF4UlhKSEJXUmRZR3ptblNTcXlFOGdCZUtmT25pUVBTYjEtT0hZamNZTUc2a1B6eUV2QUpMTTktcmZUag?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2259
    },
    {
      "date": "Aug 23",
      "text": "Israel strikes southern Syria; Iran state broadcaster claims over 50 facilities targeted in recent war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiyAFBVV95cUxOeE9tZWJOVDVzRG56VGdEdU5zWTk2d1RzdVBoYk5WYWxmVW1YUGlDcjJlNG1WZGl3R3JkNEJ6aEgtbTFpSEoxSlhMR0hSZzdxa0w1YnMzdWhJZlFLamp1SGRCRW1ETWR3M25IUms0LUU4NHZpSEVpcFRINmVYVWtteEE1WnlxWnRsV0JlV2NnTU5UYnBMQUFOMnhqRm1rUEVDRWdPMXR4dGd3VG1Kbll6aF9URjlqT1Y1YmlYODRzSmxWa0duaGkwZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 2259
    },
    {
      "date": "Aug 23",
      "text": "Ship disabled by attack in Strait of Hormuz; US says oil is pouring through but trackers can’t find it.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2259
    },
    {
      "date": "Aug 23",
      "text": "China pledges to 'firmly safeguard' its interests after US threatens Iran's trade partners.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPR0t5bUE3UW9jMjBKeDFhdzlLUkx0bFNoZHlKcUVuY2UzSi02cEEzQW9uZmpJNkgwZmw2d1hzM3NrQ2hycU5iWnR6WGxBQmVJSmprMUVyelJCSXgxeXo0R0oyN0R2dWZ3TzhtUmZxbUpyeUlneEdFWEFFcnBqV2lFeW9UZDhLRXI5Q3FWME1sLXBPVXZzOE9jRkpPUzUzVnZQUXJkRXdDa01kRmlFclZzY0NvcEhnaC1CNnJvOEsxQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 2259
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
