export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 264,
  "lastUpdated": "2026-04-20",
  "lastSyncedAt": "2026-04-20T00:04:38.792Z",
  "warDay": 52,
  "summary": "Tensions between the US and Iran escalate following the US seizure of an Iranian-flagged vessel and Iran's vow of response, while a fragile truce holds in Lebanon.",
  "lastNarrativeUpdate": "2026-04-20",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "An Israel-Lebanon truce is in effect, allowing some civilians to return, but its stability is questioned by actions near the 'Yellow Line'."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
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
      "date": "Apr 20",
      "text": "US Navy fired on and seized an Iranian-flagged vessel near the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE1YUS1EelZ3bVFnZGZwMERkRnhybVpPUk1JcVNwR3FOUEREclc4bzVDQkNZdXdseVhCY2QtSWE3TlVCUGJUUUU5Y0doOTJkZHJvaHUwTmNkOG1Zay1xeXdkcFp0R3A4dE1NWEIzQ0xHNnU3cWJhaklDdkU3MA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 264
    },
    {
      "date": "Apr 20",
      "text": "Iran vows swift response after the US seizes a vessel near the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE93WEJXNmNtdG90Rm9RRm1VT1dmb3JUZ3V3OWw4ZGZEZmVOazhfX0ZkeDRkM3V5ckluMkxmM0FMSU5UR3c5eFdGOEZLRmNPNC1sYkcwNWxOc1dKY3JKelQzQnFtMjZaaWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 264
    },
    {
      "date": "Apr 20",
      "text": "Iran reverses course on opening the Strait of Hormuz as hardliners take front seat in Tehran, with the US blockade continuing.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxPempHWldhcDhhckR0VEtoM0pTaUhxOGxsb1ZQemNvWk8wczJuTWhrdkJVakJvVFUyY3o4bXJMY1M5QktoSEl5SzByQXJKZjAxQVBaT0x5Wk4teUtpdVppWVE4SXAxODlfOFRDZV8zd2hyNTdoaExLNE9kMFJfSTI3VNIBhgFBVV95cUxQRldrSVphWjVxUGFrSjNqWFFHQlQ4aG1tVHpwNXlRb1V0SUhySkF0amk4Zm41Mnh5ZDhncVhLNjBIeEp0WTBRZUktUm05cDN0eGVPeXlZVnJMWFVFZ2I2cDJOaFc1RUlYZlpHQ0FNVGc0N0xsdGhWMloyUkVxM05wTzl0dWdqdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 264
    },
    {
      "date": "Apr 20",
      "text": "Oil prices jump after Strait of Hormuz setbacks and increased regional tensions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxPanF4a3BkUkhIQ0I0cDE4MkJqaEk0YXAtUW1oX0pPcGlZUEZnWDAzMll3UVR2eUZ5ZTBCUHI2VC13N3J4dnNrdFdiT2poUjREZnlYSmFpclZkZDB3ZlM4YkEzWXlVT0JkN2E5cU1IYzVMYzdWd1QwdFVWbE1TcEZvOWtVdGs1ZGtL?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 264
    },
    {
      "date": "Apr 20",
      "text": "Israel is reportedly preparing to strike energy facilities if an Iran truce collapses.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPalNBN3IycGJDQldYV0F6LWc4dGtBQjRNbC1FTVR5ZlpkYTVmeFp6QTY3a1BvNWxOelFNS3YyRVEzTE9WV0tzREdyYWwyZ1B2S0xkTE13T2F2elIzM2o3LWJGbnMybHMxUUxtNnE0LVZNODZMeU1PWjE5NVJDX29zZFJOamV5WmZvaTcwUXdnVDVQbHBqZWJfQ0ZjSXVOUlVUcklRNDI1MnppVDVDbEFqdXU0TDhmekRtTllyWA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 264
    },
    {
      "date": "Apr 20",
      "text": "Iran rejects peace talks, stating no intention of negotiating for now, as the US insists war goals are almost met.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE56dkx0c0Z3Umx4dlBzYzdrdGV6SHM3U3hLRnpDX0tFOC1UeHBiUEJLamlEalBVZUV6d0RsVS13UU5wUldEVm9hNVZ6ekRMOWtyamJMbQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 264
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "US/Israel Stance",
      "headline": "US Enforces Maritime Order, Israel Prepares for Escalation",
      "summary": "The US asserts its right to enforce maritime order, seizing an Iranian vessel and claiming war goals are nearly met. Israel is reportedly ready to strike Iranian energy facilities if broader regional truces fail, indicating a readiness for further military action.",
      "tone": "defiant",
      "latestSinceUpdate": 264
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran Vows Response, Rejects Talks Amid Hardliner Shift",
      "summary": "Iran has vowed a swift response to the US vessel seizure and has rejected peace talks, with hardliners reportedly gaining influence in Tehran. The Strait of Hormuz has seen reversals on opening, signaling a hardened stance against US actions.",
      "tone": "defiant",
      "latestSinceUpdate": 264
    },
    {
      "perspective": "Regional Stability",
      "headline": "Strait of Hormuz Disruptions Fuel Oil Price Jumps",
      "summary": "The ongoing US blockade and Iranian actions in the Strait of Hormuz are causing significant disruptions to commercial shipping and have led to a jump in global oil prices. While a fragile truce holds in Lebanon, the broader region remains highly volatile.",
      "tone": "anxious",
      "latestSinceUpdate": 264
    }
  ]
});

export default LATEST_SNAPSHOT;
