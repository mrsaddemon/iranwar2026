export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1810,
  "lastUpdated": "2026-08-14",
  "lastSyncedAt": "2026-08-14T22:52:56.270Z",
  "warDay": 168,
  "summary": "Tensions between the US and Iran remain high, marked by US threats regarding the Strait of Hormuz, Iranian counter-threats to prolong the conflict and target tankers, and ongoing Israeli military actions in the region.",
  "lastNarrativeUpdate": "2026-08-14",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is currently active; rhetoric and actions indicate ongoing conflict and escalation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
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
      "date": "Aug 13",
      "text": "Mediators are pushing for US-Iran talks as Israel conducts strikes in Lebanon and Gaza.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNZ0YzeG5pTmVna25ZMW9GU0tYYTg2OHhtYWdVVldlSy1CcDRTT19HcGkxSzRwQTBwVUloRXlnQVVJMnQ0YWxjQ2R0djZ4Und0YzdTR3AxRks5UVZLNk8tLUY0QzVScmw5RW1iRzN3ci1YZG15ZXNwS2hwbkthcFlXLTZrNy01ZTk1U0M1STFva2VGX1UzSThTRlZ6U3dBMWNDSENqamZ4U0dJRzl2RmU2bGUwaHE5ZE9lZE530gHAAUFVX3lxTE05eGo4eEZ4dWg0bkZScF85cGJzRXFHaHlMeTN5T3F4X0ozNWNjT1pEN1B2ZW9fM3hjOU02TDBRNTM0ZGtSNzl4MEZQNkpzbzJyMzN6WXAzZ21FenVRQm1leWkzOFlPRWNObU05eG9QcmVqNnpKdTZRTzgzeUcwUGZWckxnSnJPRER1TFlrS2xJYlNTVnpUdFUyR3NLZ3MwMG1Zc3g4Tzc1QlpaZjFHUTlvMWpHQVJmUEFXS2twRDMtUg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1810
    },
    {
      "date": "Aug 13",
      "text": "Iran has adapted its attack strategies as US war munitions reportedly dwindle.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1810
    },
    {
      "date": "Aug 12",
      "text": "Trump insists the US controls Hormuz, while Iran states it could 'prolong' the war with the US.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9pbWxQa3BOTklMZFVOT0RGLW5mSmRBRFNKeWV1R2VwUXNJOV9acS1sTzVWMFEteTgyczBlSU1QeU53RFhJVkNyc1FsS2xsVEJvRlYtWnhaXzRGT2pIbkVhVWVmU29UUDNKT0RoazFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1810
    },
    {
      "date": "Aug 12",
      "text": "Trump says he will declare the Strait of Hormuz a US territory 'pretty soon'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxPWWFZd2RfUU1menRsbUNXVWM0bjFzS1RKT0tRdGsxSklTSGNWUjdGRTg4UnlwcTEzcjNveXhkbVNWcHJocXJFN2tYREtVejBJYW5YQkhPUU02elFpTEhQVHBZTUU0ZmtqQjZXREJMZUhKRk16MlItcXNlbW82NDdudTZiYlRVV0JBRTBrUmsxYi1CLWxBbmJRWkNjeExPS2szdjIyU3pMem5SaGZ2b05lOFpn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "usatoday.com",
      "latestSinceUpdate": 1810
    },
    {
      "date": "Aug 12",
      "text": "US CENTCOM chief is reportedly pushing for renewed strikes on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxQSDJPbnFkODBmcFhzSC1lZlNKVm1xTEhNd0thMzhtQU16bmppVkhOM1VIdGU2TnlBSXFnZG9KdllZeWp3NU5ORllvZXZiVmxzeFZ6Z2V4RW1hQlAwb0FqcUFjNzZQd25ySlpaYm8waHF0R3RyVjVNcHR4bi0waW5FMDh6cklDcEoyeDdoZVR5enBHaEZUZGllcWUyN0loN2JYTHNBMWV5TXloY3NRamlKbkdHRmhGdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1810
    },
    {
      "date": "Aug 12",
      "text": "Tehran asserts the Strait of Hormuz is 'under Iran's control' following Trump's threats.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1810
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
