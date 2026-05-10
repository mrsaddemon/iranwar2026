export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 590,
  "lastUpdated": "2026-05-10",
  "lastSyncedAt": "2026-05-10T12:00:16.255Z",
  "warDay": 72,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-10",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 30,
    "summary": "A month-long ceasefire is reportedly in effect, with the US awaiting Iran's response to a peace proposal, though ongoing military actions by all parties indicate its fragility."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
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
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "May 07",
      "text": "US awaits response from Iran on proposal to end war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibEFVX3lxTE1jVi1NNmlYMUF0Q041c0JmU3RpSE5seERXZElGUWJsamY1YlotSXdpREw1NUp0aGhmVlp6bE4tWHp0dFhiZ3JkS2VJUVNlcGM4dGNnbm5sY1BQeHBiV1pxdDl5YTlOVUJ2MVhNVg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 590
    },
    {
      "date": "May 10",
      "text": "Israeli airstrikes kill five in southern Lebanon as Hezbollah rockets hit open areas in Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNN19vV0hvR1lXbXI0WkhzTzlfbHhfVDZnbWRDOVZmaWpsS0RBUDd4ajBjWGhhOG9MNWlzVmFXRE9MUkxNaHV5eHlwcWtIYVA3T0ZTc01adjBpeHQwdkxSZlQ4aDV3dXN0VTlCRHRNaEc2OThWRGVZWHBpVmxjMkk2SGVyOVpMQjZJTWd2ME80c2RCcl9GVUZpN2FWZTdhWmpLWmEyMDZaQURnMnR0WFk2eDNuSzlmUTNQNWxIV1Bfdk1ieFZYbGNJV0N6eDVfakFCZGVkQkg0dEhEeHFTTHfSAeQBQVVfeXFMUDZzR0M5UzJWTHpfV1ByYVNLV3FidG5RX3pTOFhSekZUTmRpdVRDa2xsZzh0ZDFBSmV2R0U4U3kzd3pURXUzcGNZblo0RV9oQkxldkdYa2dFM1JhbXc5a2xFLWlxLTNZM2NqRW03VTlBeE9QOUhPUTFFRTJZMWcxLTI1ZjQwTkpRVkhtMklrSl8tV3NQX3VHdEpTTHBnV19YMF96TVpMeDBpcmVKQjB0b0V6eWNHTXN3RUEwd19xanhmMGdRTURZaTZmc1JzOU1DdHU0UTMzeTV6VlFmLTdYblVSODN1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 590
    },
    {
      "date": "May 10",
      "text": "Israel says it killed a Hezbollah chief near Beirut, testing the truce.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 590
    },
    {
      "date": "May 10",
      "text": "Hezbollah claims new attack targeting military base in Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiXkFVX3lxTFAyOFZpck5WekhzeC13VUF3M29WSUZxay14YUVISUdsZUZ6VG5OcGpFeXpxOUVMdVVZNmFvQXFRODlBT3VYaEhibExlTi05UkJ6V1BUVTdUNFdKZGpuQ3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Arab News",
      "latestSinceUpdate": 590
    },
    {
      "date": "May 10",
      "text": "US military says it intercepted Iranian attacks on 3 Navy ships in Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxQUkt3M3BQa3VLVHFKQTh3MEhnVHFhZ241MHo2cm8wdnd4S25vdzI5RXRIY3JHVEl4TkliUHgzNkdoZllvSGNUQkxWb093anEyQnZlM25EQzlQSDZuTW5GVzBob29YdktSWWxBUjBSY2l6TlA2dUM3Vk1UT05iZ3daclJ2amNRU0gzNVJfS3FSdXMxWXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 590
    },
    {
      "date": "May 10",
      "text": "US military says it carries out retaliatory strikes against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPOE1uOURBaC03bzROOEdzRzdQOGFvc1hOanMxM2w2NS0wOFc2ei1Ga1JDMHBTd0QtVzh4ZGdXSE16TFhkM1lXTWRZXzZ3bDM1SFo3Y1JfXzRoV09fQmJZSUZmOHNpWVptcjBKanJxM21GUS1Ncjc2Qm1rOTFkTk9yck9XWWRfZVk2QWNrdHZNWGIxUEkwX29aMDZ5em5ZaHZfcWlTQ2tncGh5WXFRT2Q0NnhyOXJZU3dYOWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 590
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
