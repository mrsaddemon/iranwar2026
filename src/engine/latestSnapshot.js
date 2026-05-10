export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 585,
  "lastUpdated": "2026-05-10",
  "lastSyncedAt": "2026-05-10T04:05:22.585Z",
  "warDay": 72,
  "summary": "A month-long ceasefire between Israel and Iran remains fragile amidst continued retaliatory strikes, threats of escalation, and ongoing peace negotiations, with the US intercepting Iranian attacks and Russia offering nuclear support to Iran.",
  "lastNarrativeUpdate": "2026-05-10",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 30,
    "summary": "A month-long ceasefire is in effect but remains shaky, with frequent violations and retaliatory actions from all parties."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 56,
    "globalPressure": 66,
    "allianceInfluence": 62
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": false,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "May 10",
      "text": "US military intercepted Iranian attacks on 3 Navy ships in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxQUkt3M3BQa3VLVHFKQTh3MEhnVHFhZ241MHo2cm8wdnd4S25vdzI5RXRIY3JHVEl4TkliUHgzNkdoZllvSGNUQkxWb093anEyQnZlM25EQzlQSDZuTW5GVzBob29YdktSWWxBUjBSY2l6TlA2dUM3Vk1UT05iZ3daclJ2amNRU0gzNVJfS3FSdXMxWXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 585
    },
    {
      "date": "May 10",
      "text": "US military carried out retaliatory strikes against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPOE1uOURBaC03bzROOEdzRzdQOGFvc1hOanMxM2w2NS0wOFc2ei1Ga1JDMHBTd0QtVzh4ZGdXSE16TFhkM1lXTWRZXzZ3bDM1SFo3Y1JfXzRoV09fQmJZSUZmOHNpWVptcjBKanJxM21GUS1Ncjc2Qm1rOTFkTk9yck9XWWRfZVk2QWNrdHZNWGIxUEkwX29aMDZ5em5ZaHZfcWlTQ2tncGh5WXFRT2Q0NnhyOXJZU3dYOWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 585
    },
    {
      "date": "May 10",
      "text": "Israel struck Beirut for the first time since the Lebanon ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxPTUU2emZXNHZiQ3V3dHVuMklCOHI3TzZRWTZRM2laZEZwZFdvcm14Qm1SaTJhbWhDcUdYZklQNnpBZ0laZmRZODhGbXF0NTNXUWV0aElZNVJDNG5EWmNQOHFFVjJTS0hnRTZLekhoUDhDUkxZX2dIUWVCa3pvcVJ6UFVwN29YQ2pxM1ZuTjJlRDBOOTRMYnoyY0VmZ00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "DW.com",
      "latestSinceUpdate": 585
    },
    {
      "date": "May 10",
      "text": "Israel killed a Hezbollah Chief near Beirut, testing the truce.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 585
    },
    {
      "date": "May 10",
      "text": "Iran vowed to retaliate against the US if its ships face further attacks during the ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibEFVX3lxTE1jVi1NNmlYMUF0Q041c0JmU3RpSE5seERXZElGUWJsamY1YlotSXdpREw1NUp0aGhmVlp6bE4tWHp0dFhiZ3JkS2VJUVNlcGM4dGNnbm5sY1BQeHBiV1pxdDl5YTlOVUJ2MVhNVg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 585
    },
    {
      "date": "May 10",
      "text": "Putin stated Russia is ready to move and store Iran’s enriched uranium stockpile.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiywJBVV95cUxPRWhqNDFEek53QUE2N3pJN09tWEtQaUp6Q1BlcmFjdHlfTVNHcDY4QTNDN1Nydk1GaUs3bTdWbU4tbXFVbFVvVW9VYVVrZkM3dTJYTVQ3WXlzZG11OXUwR196bVF3QVlBeTRLM2NFRlIwekFZNXBKOVNnYW85Zk81S3JBOVNLbDQ1aHZRSGZXZnBVdWxrZ3ppa0hmNzNVZGR6LWdHYW9FNGRMSXhjM1ZybGpjLXh1ZWlvUmFzOEppNi0wb1RnS1N1M1ptNUhvSXhveXUtR2ZKTWk4OE5QRzZXQnN5OHhGRlZGX0lxcFAtMzlrX2o1MXBiZXBndDlNaGM3aFhmY0ZIdzZERDhMVm1xRGZaSlhYQklmeTZwbFRZaDUzRnN0d2ZIUWplcjl0aDEtejhCYVV0TndfbWFJZkcyYmxnV1N2VUhLSVln0gHQAkFVX3lxTE9KNnFrS0Jua1dlbUdXSXVwMVlRV2tCOTdSNDROWWktMkkyTlprUDRSb2RiQ25GRVZzZ2F0LWd5cHRSWVlqV25MOS1QRnpfc2Y3ZGR4MmRCOWREX20tRjQ4YzNpNDBaV2FEX2hOVmRHeUNBTzdMeEJGaXl4RVYtU3lPeU02cUJUR0RqOEVNT2dYbktpc1VXZXNyZlJfT2RhUUEzSEZydDllWnZuRVBRcnptLXN4UWR2bVJSUVJoR2NxY3JBQVBGS3VqMmhIdnBnbG5uMmFqcFJ6VTQyemhuU1ZSOE5acmJXQkFBdzFTYWwyanNsYW91R2RScnFUWVpJYTJPM2RoYVp4WWhUZUN2VjhtZ3lmNWlHajV3eXNmaTV5a2FhTEJXc2txSHhVYVQxUDdIdklBd3FwRWtwZU5OcHhsRUNfN1VFYzBfdE1jbkJsZQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of India",
      "latestSinceUpdate": 585
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
      "headline": "Iran warns of heavy assault, awaits peace deal response",
      "summary": "Iran maintains a defiant stance, threatening severe retaliation if its ships are attacked, while also awaiting a US peace proposal response. The country continues to engage in military actions, which the US claims to have intercepted.",
      "tone": "defiant",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 585
    },
    {
      "perspective": "United States",
      "headline": "US intercepts attacks, conducts retaliatory strikes, awaits Iran's response",
      "summary": "The US military has actively intercepted Iranian attacks on its Navy ships and carried out retaliatory strikes. Concurrently, the US is awaiting Iran's response to a peace proposal, indicating a dual approach of defense and diplomacy.",
      "tone": "strained",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 585
    },
    {
      "perspective": "Israel",
      "headline": "Israel continues strikes, tests truce with Hezbollah actions",
      "summary": "Israel has continued its military operations, including airstrikes in Lebanon and Beirut, and claims to have killed a Hezbollah chief. These actions are seen as testing the existing ceasefire and indicate a focus on degrading Hezbollah's capabilities.",
      "tone": "defiant",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 585
    },
    {
      "perspective": "International/Russia",
      "headline": "Truce remains elusive as Russia offers nuclear support to Iran",
      "summary": "The international community observes a fragile truce that is frequently violated, with some experts predicting an American retreat from the conflict. Russia has offered to store Iran's enriched uranium, signaling potential geopolitical shifts and support.",
      "tone": "skeptical",
      "sourceUrl": "https://news.google.com/rss",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 585
    }
  ]
});

export default LATEST_SNAPSHOT;
