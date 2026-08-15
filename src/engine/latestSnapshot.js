export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1816,
  "lastUpdated": "2026-08-15",
  "lastSyncedAt": "2026-08-15T03:47:40.924Z",
  "warDay": 169,
  "summary": "The US-Iran conflict continues with heightened tensions in the Strait of Hormuz following tanker attacks, while mediators attempt talks amidst calls for renewed US strikes and ongoing Israeli actions in Lebanon and Gaza.",
  "lastNarrativeUpdate": "2026-08-15",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect between the primary belligerents, with calls for renewed strikes and ongoing military actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
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
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 90,
    "oilDisruption": 95,
    "tradeImpact": 85,
    "sanctionsPressure": 64,
    "globalPressure": 87,
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
      "date": "Aug 13",
      "text": "Mediators push US-Iran talks as Israel hits Lebanon and Gaza.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNZ0YzeG5pTmVna25ZMW9GU0tYYTg2OHhtYWdVVldlSy1CcDRTT19HcGkxSzRwQTBwVUloRXlnQVVJMnQ0YWxjQ2R0djZ4Und0YzdTR3AxRks5UVZLNk8tLUY0QzVScmw5RW1iRzN3ci1YZG15ZXNwS2hwbkthcFlXLTZrNy01ZTk1U0M1STFva2VGX1UzSThTRlZ6U3dBMWNDSENqamZ4U0dJRzl2RmU2bGUwaHE5ZE9lZE530gHAAUFVX3lxTE05eGo4eEZ4dWg0bkZScF85cGJzRXFHaHlMeTN5T3F4X0ozNWNjT1pEN1B2ZW9fM3hjOU02TDBRNTM0ZGtSNzl4MEZQNkpzbzJyMzN6WXAzZ21FenVRQm1leWkzOFlPRWNObU05eG9QcmVqNnpKdTZRTzgzeUcwUGZWckxnSnJPRER1TFlrS2xJYlNTVnpUdFUyR3NLZ3MwMG1Zc3g4Tzc1QlpaZjFHUTlvMWpHQVJmUEFXS2twRDMtUg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1816
    },
    {
      "date": "Aug 13",
      "text": "Strait of Hormuz traffic remains low as global oil stockpiles are depleted.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1pbW5CSDVsU0lSOTVwRzBkaENsM2VZYVdSTVJVaWxKbVpRbHBPaWJZMktfcVBGVzB1bGdKT0ZtSVBzblpBV0xkS2dSdlBJYVlSR1hRWVhPb2Z0UWtoaDhaMGhpTTJyYllaaFZ1ejBR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1816
    },
    {
      "date": "Aug 13",
      "text": "US CENTCOM chief reportedly pushes for renewed strikes on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxQSDJPbnFkODBmcFhzSC1lZlNKVm1xTEhNd0thMzhtQU16bmppVkhOM1VIdGU2TnlBSXFnZG9KdllZeWp3NU5ORllvZXZiVmxzeFZ6Z2V4RW1hQlAwb0FqcUFjNzZQd25ySlpaYm8waHF0R3RyVjVNcHR4bi0waW5FMDh6cklDcEoyeDdoZVR5enBHaEZUZGllcWUyN0loN2JYTHNBMWV5TXloY3NRamlKbkdHRmhGdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1816
    },
    {
      "date": "Aug 15",
      "text": "Two UAE tankers attacked while transiting the Strait of Hormuz; UAE blames Iran for drone attack.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTE11SkdOenRYTGNZZUQxbmRaLXpKVjRkQ3JzZlUxVVh1WGFHVTZBWlpZTlU2ZTdkZmwwN3RoYVI3QkxMbE9Id0RlNV9BWEFMaEJpTFdLdzhKNHZwZEhaamZvQ25LeUJ4eUVrRTU5Zk1ucnRtLTBsRGVFRUJYSDBEZ9IBgwFBVV95cUxQUndhM3RvS2wzeGRjbGVrSkFjTjRWWWgzeTVlTmotRnl4ZEM5dUlXOXpvUW5rWXZJT09waDJWYWw2bFNhZnh3bG4xSjhTekVjcGh3VWY3Znl1LXpaNHoxVjRHekU1XzVyNm9sZ1E4WTVFRWNUY1ppaldGYjN4S0JwTWFrZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1816
    },
    {
      "date": "Aug 15",
      "text": "Hezbollah chief rejects a US-led Lebanon-Israel deal, calling it humiliating, as Israel reportedly plans an assault.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 1816
    },
    {
      "date": "Aug 15",
      "text": "US threatens an 'indefinite' naval blockade and unprecedented economic tactics against Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxNOEsxSHRoSmJRakx6eFJyeHRhd3R6dDBYTkx5UWFvUExSYmtmMUs0SmZXZVhrOGZ5UGxsZjUzd0FqVmRjV2NDdVZxaDg0QjduZmN2RHd1UFVEcFdKLXN0bDRuZ1RQdENzZTBnQ284V2c3eXNOM1dUalV1Z3lZS0FmQk9QNmVEeWp6b0gyWkd3djh6ZDR6VUJaYmhUTDdwV2dMOG9YaURfUVphaWfSAbABQVVfeXFMUFMxZUlxNVdiQVhkWDVxVTR3N3RCU0JGdGw3NzV6dHlub1pWVEY4WnlrZ3gwNjNRYVVHZ05nRDd6Y1QyZ0lzOGd1Y1VGY3VPXzJ0MmdIQUVYeXhqT2FjaGVtNmRMbzgydU5Td3UyY1lrSi0yZWNEZlRWRUhtU3NWM0o2SlFZbksya1BRVVhuV1BUQVRGZXJGZVYySlNJX2hJR3hNMUVZNHMzRmxKTU1iQW0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 1816
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
      "perspective": "US Administration",
      "headline": "Trump pivots to sanctions, claims oil flowing normally",
      "summary": "The Trump administration is reportedly pivoting back to sanctions for Iran, with claims that oil is flowing normally despite data casting doubt on US control of the Strait of Hormuz. Trump also states the Lebanon ceasefire is working.",
      "tone": "strained",
      "latestSinceUpdate": 1768
    },
    {
      "perspective": "Iran",
      "headline": "Iran demands war damages, elevates confrontational military",
      "summary": "Iran demands the U.S. pay for war damage before reopening the Strait of Hormuz. The supreme leader has elevated military veterans willing to confront the US, with an IRGC adviser stating the U.S. military is 'weaker than what we perceived'.",
      "tone": "defiant",
      "latestSinceUpdate": 1768
    },
    {
      "perspective": "International Mediators",
      "headline": "Pakistan pushes for US-Iran talks amid peace deal hopes",
      "summary": "Mediators, including Pakistan, are actively pushing for US-Iran talks, with Pakistan suggesting the two nations are close to a 'peace arrangement or a deal'.",
      "tone": "anxious",
      "latestSinceUpdate": 1768
    },
    {
      "perspective": "Skeptical Observers",
      "headline": "Iran war a 'quagmire', oil claims questioned, Lebanon ceasefire a 'prison'",
      "summary": "Commentary suggests the Iran War is a 'whole new level of quagmire for the US'. Claims by the Trump administration regarding normal oil flow are questioned, and the Lebanon ceasefire is described as a 'prison' by residents.",
      "tone": "skeptical",
      "latestSinceUpdate": 1768
    }
  ]
});

export default LATEST_SNAPSHOT;
