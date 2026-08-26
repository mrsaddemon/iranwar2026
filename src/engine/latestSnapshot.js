export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2278,
  "lastUpdated": "2026-08-26",
  "lastSyncedAt": "2026-08-26T03:27:31.806Z",
  "warDay": 180,
  "summary": "The US has announced new sanctions against Iran, escalating economic pressure, while tensions remain high in the Strait of Hormuz following a tanker strike and ongoing disputes over its reopening.",
  "lastNarrativeUpdate": "2026-08-26",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 15,
    "summary": "No active ceasefire or de-escalation efforts are reported; tensions remain high."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 80,
    "oilDisruption": 85,
    "tradeImpact": 76,
    "sanctionsPressure": 63,
    "globalPressure": 82,
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
      "text": "US announces new sanctions against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPeHFWSVQxMEZ1OUctZkFoeXpZT0FfajFEeG5xVjBfVE9majl4dUYzUFRuVjYxWmRNZlUwanBvTHFDeTRtc3RkUnhiSnhNa1lpbzRaXzZMWG1PRElxZjlZclVPUEpfQWN5YjE3Q09aNHJkWm5BblRYSkE3eWdQR3M5MnVuVzhYcHdRTzlqdFJZRDJWNDd0S1JQdXIySVFlMjZYTEgzVmFJVDU1ejZ0UGhzcS1WU2RLV0JhNC1R0gHAAUFVX3lxTE9pYi1jaGFBc1VzOF9xRnlMQnpna01fWEpnNDRDY2ZfSWNMSHVZM0ZtUG9JZEQ1VEE1YURqUXNVVTJGRERzWElLZkFIOExJbzJaVm5Gc211aGtVZE83STFxeVZpUlFJQ0EwcUNERVUwcmtRSE9mWWx3eVNzcGJteHdUcGNuU2RpSS04ZjZXQjN1YU9rYU5XUFFKWTdqcUc0QnNiYXotaUdOZ1RabkdlOFJIYzJaTllRcUViRjBfLUR6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2278
    },
    {
      "date": "Aug 23",
      "text": "Bessent promises ‘economic D-Day’ ahead of expected Iran sanctions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE10NWduUk9rVWtZSTJ4a2k3clBvRGdIQlFLaWFyM1VqR0RDZTE2QnhfUHRleWh3T2oxR2k3Y19mVi1EcURxSllxd0lEblFoNklOSS0waGpqdGM0bjdWUm1Kamt3Tm9GaTNBbWVlMnJB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2278
    },
    {
      "date": "Aug 26",
      "text": "New Tanker Strike in Hormuz as Iran Vows Retaliation for U.S. Economic Offensive.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxOc1RqdS1KRFNQWVJLVnVQM0wtM0JmN3F4YUNSeFZlcUhlTHhxR1R5cVJwTFlLUmQ4Wkt3OUtfYkNQUlBIZVdWOHZuLTNiUmh0QS1lMTh0bWVXUXhWdjJtbjcxZzZ6ZHE0VUI1dk5tZWZJSDJQemZMZkIyeXVTRHZHUlo3dHlSZWdfeDJvYWU2cDBtcXpVSWcyN01vQUZxeDZBZnVSY0cxVU9oNDhWNmlLaTZOdDAzWFd3WXdkVmt1bG03MXND?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "WSJ",
      "latestSinceUpdate": 2278
    },
    {
      "date": "Aug 26",
      "text": "Projectile strikes, disables tanker near Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxQLUFYakxBZUI5OWNmRXRBMGk2aTZsdHpCOTFWSWpfWFVZVEpKcHY2cE9KV210QzZDeXpibGJJbFJzWWI1Z0lWdjlvMHJEbndpT1FhUFJLalEwdC13RGVyU0RSSGNZVlZrVnpTZmJZWW1SMDV5YWVXaUstMW1NdDZ5WVlqR2VWXzlQTnFfSGk4SVFUZnkxZ09weNIBngFBVV95cUxQckhFdFAtMGdJOV9PRTh6XzNBUldVaVVabEVCSVY5a0VwXzJsMURaUjVVN094WlRxWjczbU5kS0ctcmFqSEpUd1VXUTlPNDZQM1BGb1U0RGxqZFFzYlRaQmlfLXJubk1zUTVNN0FPNTdhTG9iUkc2WVZBa2pJbDhYcUk1M0x6b25aZVduTjAyQ2llWmw5OU5CYTVvLTZBdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "upi.com",
      "latestSinceUpdate": 2278
    },
    {
      "date": "Aug 26",
      "text": "Sixty More U.S. Soldiers Reported Injured in Iran War.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxQckQ4U0tRc3pybURoVlN1T0tZQ3ZqUGRnUFY0T3RrNXluNnV5UkM1RXRyeXVJSVFNbWh5bzdQZmR5dUR1Tk5WYXZaZTFYQ2FRTWxNT3plcE5jaG5Rckp4Z1RKTHhxU1owNTloejRCNmFTbHpUYnB1b2ZKeXlobGd3UTVkc3VyMGtmSEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Intercept",
      "latestSinceUpdate": 2278
    },
    {
      "date": "Aug 26",
      "text": "Iran, Oman Push Talks for ‘Interim’ Reopening of Hormuz Strait.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPbWdvcExZTXluazQtMWpQT01taDk2LTl6MTdIcXl3U1NqTE8yYU9iblI0RTBjTkdJSmMtSGJidjZQR3V2UEJRVDM3eGg5dzdreG03YjRVMEVtTF8xR24zT3RJY05lQmh5ZUozbXQySFNQc3hWNnhhSFE5YnhyQko1dzRfWnlUS25yaW1wclU1cEd5ZWk3bTVZczBfZHNVX1BjSjNTWnhKbmd1aHlKajNr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Bloomberg.com",
      "latestSinceUpdate": 2278
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
