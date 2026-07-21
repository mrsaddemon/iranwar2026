export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1399,
  "lastUpdated": "2026-07-21",
  "lastSyncedAt": "2026-07-21T12:58:29.901Z",
  "warDay": 144,
  "summary": "The US-Iran conflict continues to escalate with sustained US airstrikes, Iranian attacks on shipping in the Strait of Hormuz, and reports of US casualties, while Israel begins a withdrawal from Lebanon amidst diplomatic efforts.",
  "lastNarrativeUpdate": "2026-07-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 14,
    "summary": "No active ceasefire or de-escalation agreement is in place between the US and Iran."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.3
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Jul 20",
      "text": "Another tanker attacked in Strait of Hormuz as US strikes Iran for 10th consecutive night.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQajNHTE9aUmxpa2RIMy1jNjZ4RmgzZlk2OXE3ZXBtRzdxaUpnQldzeUtxaHh6Z3VTQzZMUGNtZ1oxNE5lQzZwLVhnX3BTZWk1OVBVT1ZiNFFtMnoyRDhHbFBnV0pFdTdNcnBKdWVuT0RidVJoWXFCYkdlNDE2V1hmZ1VhUlZhLXExZTZjOHo1YmRYMm5ra1U4RE9DU29CMVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1399
    },
    {
      "date": "Jul 20",
      "text": "US completes more strikes against Iran after Trump warning to Tehran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9vNkw0Q1VPUDBXanZUeUtTZFpFYmV1ZWJwazYzd29VY1dKM19EMmJsdEFCNFg5cU94MFZNNS1JbjZxRWZFd0p1T2NpWkNlWGl5M2FTa1hRa1dsTm1wNjZraHBzOXhBVnlYT2ZGcGhR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1399
    },
    {
      "date": "Jul 20",
      "text": "Lawmakers demand termination of Iran War after three U.S. service members killed.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 1398
    },
    {
      "date": "Jul 20",
      "text": "Kuwait desalination and power plants damaged in fiery attack, attributed to Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxORlZ5bEhMQlpYV2JLZTRpUkJTblJYa0VGeFhhblVfUkp1TDIzMFl6ZnlIZ2gxbDZJUXBpQmdZXzc0RjQtRmU1cjhXblRCN3lwbG5YNThjR0xLMnRJTklldUNYYzlrLXRjeUJDM0dPTjFBcVZQdUQyU1VZbmtYQ1ZfSld3cUppa1ZaVk4yWVNCYnFpbEJZVkxFaHdjcDVoMWplN2tRV3pTaWJodV9zZGloY0JRYjVTSXpMbUpV0gHAAUFVX3lxTE5Sb3VwbFB3cUlwMkoxU3VEZjBEUjBLZkxyVDFpNUp1WG5PektuUGw4Z1hTWEUzbE14dEd5X3RWMmxiRG4weVJoWHY2emd1N0NFSFY4QzlwZmQ4Q0s3d2NudG9CNTZjRUZxSDMxV0QwaEkxOF9qaTZ2cGJtOFRZVHJSYTR5TTc5b3NWMkJWbThFRnNJdUxJNExpa1M4NlFLN2dWVzJKX25RV2U0a0kwam15Wm8xZU1lTHJpUHVfNkZ1OA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1399
    },
    {
      "date": "Jul 20",
      "text": "U.S. announces another troop death as Israel warns Tehran's attacks are coming close.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNWnJYc0NUMEFyWXc0S0x1LVFjZXNDcV9WQm1sU0JTX05BN1hQSkxEcmYyTzdGdHpuVFJHZWo2Q25JaVptLTZEOEZKOFFJQ0pWV2tCWDNpa1NxbFNaX0x6dkF6dEw2enNEdEdDOGlFMXg1aG51dWRzN2VyaElzRnBkZkFnWkc2UWxsZmpUelNvNFFzejJMZ29pYm9vR2NUUURDNmhaRTdneGx5aXNYdmFqWnJRVWt5ODZ0bVHSAb8BQVVfeXFMTlZhWS1lMjFKSUlEOUcwVUd5RWtjRzdKamdKaTJHVlFTejZWQzdIUmd2Q203S1g3c1d2eUlxMEtkeFFpa2ZoaTNfcUtQcFJLdUF4UU9qWDJaUFlEYXNkdE51UHh2b2N6eGNaVkZ5NUpFUU1EYU9uMUc1NE9FX1lqY0I0azVpVkhhT1FnN2U0MzVmOGhkc2c1c1lxLWtKV081TGVwYmZxZkpxR05LODlONzdHMXBpQms2czM3MUo3UUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1399
    },
    {
      "date": "Jul 20",
      "text": "Iran claims attacks on Strait of Hormuz ships amid fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi7AFBVV95cUxNZUNEazROOWlVb0djbTd3cVgxTlc5VkRVMzBuMjdIVl9jVXZidWZIWlRiZUJnQjZ2OHp3LUN3VEd3T1BsdGduSl8tTG1ydm5rYXlpUlBRblU1MVA3X0RpUndfVFpPQ0dfV0hiLTBJek9VN3ZzTGJob1hCNC1hY1MwUEtkVXhCbXFCUDlwbVZQTFpjU0VMSlRQeWZsa1U2MC1IZFVFbGlmMWtCejlibndybWo1UVdZSlZFcV9yd1NlTDRKRllzcjliQU8yRnBpeGdTVFdkQTRESjN4Ym9oOElQTUFPWkZOUEtBY3ZnWA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1399
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
      "perspective": "US Government",
      "headline": "US Vows Retaliation for Soldier Deaths",
      "summary": "The US government, including former President Trump, has vowed strong retaliation against Iran following the deaths of US service members. Multiple strikes have been launched in response to these casualties.",
      "tone": "defiant",
      "latestSinceUpdate": 1394
    },
    {
      "perspective": "Iran",
      "headline": "Iran Declares 'Full-Scale War' Amid US Strikes",
      "summary": "Iran asserts it is in a 'full-scale war' with the US, continuing its actions and supporting regional proxies. Attacks on US forces and critical infrastructure targets are reported.",
      "tone": "defiant",
      "latestSinceUpdate": 1394
    },
    {
      "perspective": "US Lawmakers",
      "headline": "Lawmakers Demand End to Iran War After Casualties",
      "summary": "Some US lawmakers are calling for the termination of the conflict with Iran following recent US military deaths and injuries. Concerns are rising over the escalating human cost of the war.",
      "tone": "anxious",
      "latestSinceUpdate": 1394
    },
    {
      "perspective": "Israel",
      "headline": "Israel Targets Hezbollah Amid Regional Tensions",
      "summary": "Israel continues to conduct strikes against Hezbollah in Lebanon, warning of broader regional attacks from Tehran. Israeli forces are reportedly surrounding Hezbollah fighters in tunnel networks.",
      "tone": "strained",
      "latestSinceUpdate": 1394
    }
  ]
});

export default LATEST_SNAPSHOT;
