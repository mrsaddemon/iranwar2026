export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2241,
  "lastUpdated": "2026-08-25",
  "lastSyncedAt": "2026-08-25T00:24:06.098Z",
  "warDay": 179,
  "summary": "A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.",
  "lastNarrativeUpdate": "2026-08-25",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 30,
    "summary": "Ceasefire language is present across the source mix, but the model should still treat it as reversible under renewed violations or proxy attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 38,
    "oilDisruption": 60,
    "tradeImpact": 34,
    "sanctionsPressure": 49,
    "globalPressure": 52,
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
      "date": "Aug 25",
      "text": "August 23, 2026 — Bessent promises ‘economic D-Day’ ahead of expected Iran sanctions",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE10NWduUk9rVWtZSTJ4a2k3clBvRGdIQlFLaWFyM1VqR0RDZTE2QnhfUHRleWh3T2oxR2k3Y19mVi1EcURxSllxd0lEblFoNklOSS0waGpqdGM0bjdWUm1Kamt3Tm9GaTNBbWVlMnJB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2241
    },
    {
      "date": "Aug 25",
      "text": "Iran war updates: US announces new sanctions against Iran",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPeHFWSVQxMEZ1OUctZkFoeXpZT0FfajFEeG5xVjBfVE9majl4dUYzUFRuVjYxWmRNZlUwanBvTHFDeTRtc3RkUnhiSnhNa1lpbzRaXzZMWG1PRElxZjlZclVPUEpfQWN5YjE3Q09aNHJkWm5BblRYSkE3eWdQR3M5MnVuVzhYcHdRTzlqdFJZRDJWNDd0S1JQdXIySVFlMjZYTEgzVmFJVDU1ejZ0UGhzcS1WU2RLV0JhNC1R0gHAAUFVX3lxTE9pYi1jaGFBc1VzOF9xRnlMQnpna01fWEpnNDRDY2ZfSWNMSHVZM0ZtUG9JZEQ1VEE1YURqUXNVVTJGRERzWElLZkFIOExJbzJaVm5Gc211aGtVZE83STFxeVZpUlFJQ0EwcUNERVUwcmtRSE9mWWx3eVNzcGJteHdUcGNuU2RpSS04ZjZXQjN1YU9rYU5XUFFKWTdqcUc0QnNiYXotaUdOZ1RabkdlOFJIYzJaTllRcUViRjBfLUR6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2241
    },
    {
      "date": "Aug 25",
      "text": "Iran war latest: Fireball in central Gaza as Israeli strike kills child",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxNOGhLcXVlSk1ra05MV2ljYWJIWU4zSkF5djlycnZpMS12RE5CNW9Ia3JybF9pejdUQk14dHppRlg3OU1kM0hpbUpEMm1yVDBNd1dneWF1dVZ5Z1lpV2tUY2ZBTm5tb3J2SDdNN1dOUTNlUWVKc0U3RzNZdk4tQ3ZlYk83QkRVclMtYTNqQ0NHTHNRRnc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 2241
    },
    {
      "date": "Aug 25",
      "text": "Iran war: Top US lawmaker says Republicans can ‘absolutely’ win midterms",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxNMGtWdFJrYW5jZkhTT0FDNHNPT296YmNFWmZKS3lZd3h0djJjWU1DWGw0WEFvX2xweUxQVjZzYXRUWW1QMnNSMFdYSDg4Z2hYSThMOXFYZ2FlekxXa3dfYkVKSFhiR1FYdmF1aTNsRm91WUJ2ajB5LTJqWHAzT0l6bnA4STBHVVhRRzhkTGNRbnE1eU5fWGEyeVpjdlFwUU5OM2diQ2VieG4wWVVsU2dR0gG0AUFVX3lxTE00VTNla2wwcnVaLW9RZ1c1alZuUjI1LVcxZlF3VHZPU01rZmhEal9pVDhpa2xHZFRSUXhQRDZjVHloZTdpRkxhNEMxelZWUUJXRndRT2hrNVlCOXoybUlHN0x1dXQyODI3Vm9jbDEtNk1wcWZ1ckJDZ2xCNEo1YXFsbEJWZGRwYjA2RGtBVmNZN1hkQUVJckJvNWYzdlBkMzU0d1pSYkhLNXdxSkY0QjROb21ubA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2241
    },
    {
      "date": "Aug 25",
      "text": "Iran War: Latest News, Live Coverage and Video",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiT0FVX3lxTE1vRFdEaTJrbkd5dmlGNzFrY19yTEJFZko2aXBSejFKbXNsbl95eFBsM2dSNkRjdVNudjhZTl9DSzFud3JoTTJ2R2ttX3lBNkE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 2241
    },
    {
      "date": "Aug 25",
      "text": "Iran warns of a harsh response to anticipated US sanctions and other Middle East news",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxNY2JoQ0VHWjRHSW9xVVVFQ0J4eUN0RC1pRFdSU0hUajg2dDU0SU9vMDcwd3g4TVFmeWF4VDNTLUlyUld3Z19KU092SjlmdDVfYi1fNXdsLWx5TFhxaloyZEk4QnpJalNtZzhESWtGeHlzcDNwbnJfcUNUM0hNOTVlejBYNXA2Q05XNEZRNGVYVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Chicago Tribune",
      "latestSinceUpdate": 2241
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
