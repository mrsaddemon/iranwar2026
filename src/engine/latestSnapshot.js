export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 587,
  "lastUpdated": "2026-05-10",
  "lastSyncedAt": "2026-05-10T08:31:57.516Z",
  "warDay": 72,
  "summary": "The US awaits Iran's response to a peace proposal amidst a fragile month-long ceasefire, while hostilities persist between Israel and Hezbollah, and tensions remain high in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-10",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 30,
    "summary": "A month-long ceasefire is reportedly in effect, but its fragility is evident through continued traded attacks and specific military actions by both sides."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
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
    "nuclearIndex": 25,
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
      "date": "May 09",
      "text": "US awaits response from Iran on proposal to end war, with a month-long ceasefire reportedly holding.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibEFVX3lxTE1jVi1NNmlYMUF0Q041c0JmU3RpSE5seERXZElGUWJsamY1YlotSXdpREw1NUp0aGhmVlp6bE4tWHp0dFhiZ3JkS2VJUVNlcGM4dGNnbm5sY1BQeHBiV1pxdDl5YTlOVUJ2MVhNVg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 587
    },
    {
      "date": "May 09",
      "text": "Israeli airstrikes killed 24 in Lebanon, while Hezbollah rockets hit open areas in Israel.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNN19vV0hvR1lXbXI0WkhzTzlfbHhfVDZnbWRDOVZmaWpsS0RBUDd4ajBjWGhhOG9MNWlzVmFXRE9MUkxNaHV5eHlwcWtIYVA3T0ZTc01adjBpeHQwdkxSZlQ4aDV3dXN0VTlCRHRNaEc2OThWRGVZWHBpVmxjMkk2SGVyOVpMQjZJTWd2ME80c2RCcl9GVUZpN2FWZTdhWmpLWmEyMDZaQURnMnR0WFk2eDNuSzlmUTNQNWxIV1Bfdk1ieFZYbGNJV0N6eDVfakFCZGVkQkg0dEhEeHFTTHfSAeQBQVVfeXFMUDZzR0M5UzJWTHpfV1ByYVNLV3FidG5RX3pTOFhSekZUTmRpdVRDa2xsZzh0ZDFBSmV2R0U4U3kzd3pURXUzcGNZblo0RV9oQkxldkdYa2dFM1JhbXc5a2xFLWlxLTNZM2NqRW03VTlBeE9QOUhPUTFFRTJZMWcxLTI1ZjQwTkpRVkhtMklrSl8tV3NQX3VHdEpTTHBnV19YMF96TVpMeDBpcmVKQjB0b0V6eWNHTXN3RUEwd19xanhmMGdRTURZaTZmc1JzOU1DdHU0UTMzeTV6VlFmLTdYblVSODN1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 587
    },
    {
      "date": "May 09",
      "text": "US military intercepted Iranian attacks on 3 Navy ships in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxQUkt3M3BQa3VLVHFKQTh3MEhnVHFhZ241MHo2cm8wdnd4S25vdzI5RXRIY3JHVEl4TkliUHgzNkdoZllvSGNUQkxWb093anEyQnZlM25EQzlQSDZuTW5GVzBob29YdktSWWxBUjBSY2l6TlA2dUM3Vk1UT05iZ3daclJ2amNRU0gzNVJfS3FSdXMxWXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 587
    },
    {
      "date": "May 09",
      "text": "Israel announced it killed a Hezbollah chief near Beirut, testing the existing truce.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 587
    },
    {
      "date": "May 09",
      "text": "Iran warned of a 'heavy assault' if its ships were attacked, following claims of a US fighter jet's attack on Iranian tankers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxNNEV5bG9EbmxQRHFwaG9VS1ZjZjdqcFFkUUlURzhYenFlUFlkenAzUE9hVS1mNlFxbzJWSXVnY2gwNElWZ3haVHlab3gybDBja25sOHpsSS1wZUdYWEx5T2ZiZVllTEZsZGtRSklSaW5vS2lpNUtaQ013bGVTR0FYT1lXcVpySnBDdTBYNmhaNVBBWk5qVkE3MzdCVEFUYjdRMF94RTFn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 587
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
