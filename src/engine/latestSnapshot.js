export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1402,
  "lastUpdated": "2026-07-21",
  "lastSyncedAt": "2026-07-21T18:01:33.211Z",
  "warDay": 144,
  "summary": "The US and Iran are engaged in daily airstrikes and naval incidents in the Strait of Hormuz, while a US-backed security pilot involving Israeli withdrawal and Lebanese army deployment is underway in southern Lebanon.",
  "lastNarrativeUpdate": "2026-07-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 14,
    "summary": "No general ceasefire is active between the primary belligerents, though a localized security pilot is underway in southern Lebanon."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
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
      "date": "Jul 21",
      "text": "Another tanker attacked in Strait of Hormuz as US strikes Iran for 10th consecutive night.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQajNHTE9aUmxpa2RIMy1jNjZ4RmgzZlk2OXE3ZXBtRzdxaUpnQldzeUtxaHh6Z3VTQzZMUGNtZ1oxNE5lQzZwLVhnX3BTZWk1OVBVT1ZiNFFtMnoyRDhHbFBnV0pFdTdNcnBKdWVuT0RidVJoWXFCYkdlNDE2V1hmZ1VhUlZhLXExZTZjOHo1YmRYMm5ra1U4RE9DU29CMVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1402
    },
    {
      "date": "Jul 20",
      "text": "US completes more strikes against Iran after Trump warning to Tehran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9vNkw0Q1VPUDBXanZUeUtTZFpFYmV1ZWJwazYzd29VY1dKM19EMmJsdEFCNFg5cU94MFZNNS1JbjZxRWZFd0p1T2NpWkNlWGl5M2FTa1hRa1dsTm1wNjZraHBzOXhBVnlYT2ZGcGhR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1402
    },
    {
      "date": "Jul 21",
      "text": "Trump claims Iran desperate to talk, threatens heavy attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxORlZ5bEhMQlpYV2JLZTRpUkJTblJYa0VGeFhhblVfUkp1TDIzMFl6ZnlIZ2gxbDZJUXBpQmdZXzc0RjQtRmU1cjhXblRCN3lwbG5YNThjR0xLMnRJTklldUNYYzlrLXRjeUJDM0dPTjFBcVZQdUQyU1VZbmtYQ1ZfSld3cUppa1ZaVk4yWVNCYnFpbEJZVkxFaHdjcDVoMWplN2tRV3pTaWJodV9zZGloY0JRYjVTSXpMbUpV0gHAAUFVX3lxTE5Sb3VwbFB3cUlwMkoxU3VEZjBEUjBLZkxyVDFpNUp1WG5PektuUGw4Z1hTWEUzbE14dEd5X3RWMmxiRG4weVJoWHY2emd1N0NFSFY4QzlwZmQ4Q0s3d2NudG9CNTZjRUZxSDMxV0QwaEkxOF9qaTZ2cGJtOFRZVHJSYTR5TTc5b3NWMkJWbThFRnNJdUxJNExpa1M4NlFLN2dWVzJKX25RV2U0a0kwam15Wm8xZU1lTHJpUHVfNkZ1OA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1402
    },
    {
      "date": "Jul 21",
      "text": "Houthis announce Saudi blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxOMHF3aV9CSGJTNDE1X1NWeUNnbkxKa2lmQnQ5LUtBTHF1QUJFUVUzb3QycktuMms1Y2dvczR2MENLeDhwU19SVXZFaGY1bDNNUENZd01nQnloVkFCanVSLXZ1MUs4NzdUdHlFdG9YNEFhWHVRLVdTcWl2WHpFRkZSYy1rZTI1QzhhZms5Y29tRWFZU0dMQnRDdUs1el9TQlFkV2NVOUFLSmQ2TS1wRHMtZUhoalkzWHVrSXJJ0gHAAUFVX3lxTFAwX2wtLVpHZ1kwZ2VGTWYzbTdWSGtxZzViQUhrc2t0QUNySWVYaC1DQWJxNzRwWGh2b1c3VDB4T1ZCTXYtWjZ4dWJGcWE5YVc3U1NuUnBNbW1CLXJ2LU9fTkVDVmJEZzVIRWRXYllhMmFmMVRvdWlaRUVOY0RmMWE2dU1OUlJKRm1UZUJ3ZElGdVA4cHljNWlXRHNoUUs0TWNpelNpYm1BU0Z5dUN6SjVOS1RYenh0bUVNdWswRFJPWA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1402
    },
    {
      "date": "Jul 21",
      "text": "U.S. announces another troop death as Israel warns Tehran's attacks are coming close.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNWnJYc0NUMEFyWXc0S0x1LVFjZXNDcV9WQm1sU0JTX05BN1hQSkxEcmYyTzdGdHpuVFJHZWo2Q25JaVptLTZEOEZKOFFJQ0pWV2tCWDNpa1NxbFNaX0x6dkF6dEw2enNEdEdDOGlFMXg1aG51dWRzN2VyaElzRnBkZkFnWkc2UWxsZmpUelNvNFFzejJMZ29pYm9vR2NUUURDNmhaRTdneGx5aXNYdmFqWnJRVWt5ODZ0bVHSAb8BQVVfeXFMTlZhWS1lMjFKSUlEOUcwVUd5RWtjRzdKamdKaTJHVlFTejZWQzdIUmd2Q203S1g3c1d2eUlxMEtkeFFpa2ZoaTNfcUtQcFJLdUF4UU9qWDJaUFlEYXNkdE51UHh2b2N6eGNaVkZ5NUpFUU1EYU9uMUc1NE9FX1lqY0I0azVpVkhhT1FnN2U0MzVmOGhkc2c1c1lxLWtKV081TGVwYmZxZkpxR05LODlONzdHMXBpQms2czM3MUo3UUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1402
    },
    {
      "date": "Jul 21",
      "text": "US forces strike Iranian military targets as tensions soar in Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxOYUQ0YUE0RkJQa1lJYzk3WG4yLVM1TlNFZ2VUNEhGLU1TUUJvMDFiTWpYSFZNek5BNW9CWHJqcVJDS0owdHVtVDdiVTBMelhIdTBEYnlXUV9yNXd0VDhSUTB4N1hkOFVSbWVlZkZSLUhVWDhsQkhPOUtTNmFQLW0yTS1ROFQ2UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1402
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
