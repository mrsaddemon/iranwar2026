export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1814,
  "lastUpdated": "2026-08-15",
  "lastSyncedAt": "2026-08-15T02:00:07.972Z",
  "warDay": 169,
  "summary": "Tensions are high in the Strait of Hormuz following US claims and Iranian responses, while mediators attempt to facilitate US-Iran talks amidst ongoing Israeli military actions and reports of significant US drone losses.",
  "lastNarrativeUpdate": "2026-08-15",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire is reported, though mediators are pushing for US-Iran talks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Aug 12",
      "text": "Trump insists US controls Hormuz, Iran says it could ‘prolong’ war with US.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9pbWxQa3BOTklMZFVOT0RGLW5mSmRBRFNKeWV1R2VwUXNJOV9acS1sTzVWMFEteTgyczBlSU1QeU53RFhJVkNyc1FsS2xsVEJvRlYtWnhaXzRGT2pIbkVhVWVmU29UUDNKT0RoazFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1814
    },
    {
      "date": "Aug 12",
      "text": "Mediators push US-Iran talks as Israel hits Lebanon, Gaza.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNZ0YzeG5pTmVna25ZMW9GU0tYYTg2OHhtYWdVVldlSy1CcDRTT19HcGkxSzRwQTBwVUloRXlnQVVJMnQ0YWxjQ2R0djZ4Und0YzdTR3AxRks5UVZLNk8tLUY0QzVScmw5RW1iRzN3ci1YZG15ZXNwS2hwbkthcFlXLTZrNy01ZTk1U0M1STFva2VGX1UzSThTRlZ6U3dBMWNDSENqamZ4U0dJRzl2RmU2bGUwaHE5ZE9lZE530gHAAUFVX3lxTE05eGo4eEZ4dWg0bkZScF85cGJzRXFHaHlMeTN5T3F4X0ozNWNjT1pEN1B2ZW9fM3hjOU02TDBRNTM0ZGtSNzl4MEZQNkpzbzJyMzN6WXAzZ21FenVRQm1leWkzOFlPRWNObU05eG9QcmVqNnpKdTZRTzgzeUcwUGZWckxnSnJPRER1TFlrS2xJYlNTVnpUdFUyR3NLZ3MwMG1Zc3g4Tzc1QlpaZjFHUTlvMWpHQVJmUEFXS2twRDMtUg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1814
    },
    {
      "date": "Aug 12",
      "text": "US CENTCOM chief pushing for renewed strikes on Iran, claims Israeli media.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxQSDJPbnFkODBmcFhzSC1lZlNKVm1xTEhNd0thMzhtQU16bmppVkhOM1VIdGU2TnlBSXFnZG9KdllZeWp3NU5ORllvZXZiVmxzeFZ6Z2V4RW1hQlAwb0FqcUFjNzZQd25ySlpaYm8waHF0R3RyVjVNcHR4bi0waW5FMDh6cklDcEoyeDdoZVR5enBHaEZUZGllcWUyN0loN2JYTHNBMWV5TXloY3NRamlKbkdHRmhGdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1814
    },
    {
      "date": "Aug 12",
      "text": "Trump says he will declare Strait of Hormuz a US territory.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPVzFraWFiZjd3WFg5eEpZNXRMdDFPZUlvTmpHYkM2QXNBUkQ2TjR5NUctNUJPZ1hKMnFtdWtKOFFNTkFTc0s0R3hYZFdfQ3ZHLWlMTFE3RWRranQ4aExKMkMzZzl4SWt2UGQzYjRJbHo5UVhINWVpX25rUzhKdkV0LW5WTG5nRUtTTmJwUU0wd2IzZnpKM296NtIBngFBVV95cUxQbUI0ZVg5NHQ4T05ScnpPVHptMHY2RFZReVp3NGdlbWtjMGlVMDNSVk8tN0M1N1BpUkU0b2pmcDRKM1ZRSl9XekxfYjExdHNtWVdVTklCMkpyd0RWVmZ6SGdTdUxyV2l0ZTU5ZFM4YWZFZndRaklFdzZkVU82cFB3RjQyOUtBbWs5aDFXRFEwZkpLMFNVbVJSeVlqT3h6Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1814
    },
    {
      "date": "Aug 12",
      "text": "Iran targets tankers in ‘unprovoked attacks’ in Strait of Hormuz, UAE says.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMif0FVX3lxTFBWbGN2eXRreVRtbzJ4SnZxOGZzNXkzNy1fMkNuUHFlSkx1RHJpMjFYUEJUVlFpUVRyV2V5Q013cUtaaGg4Y1VrYjZMd181dzF2LXNOX3pnZFNDajNETmJfaWh2cXZpMjdnODNzcExKWGVUSzBRUkI4YUVTOHJIZHM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1814
    },
    {
      "date": "Aug 12",
      "text": "UAE's ADNOC says one of its vessels came under attack while transiting Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxNbEFoM0Z1VnBsRUlGMUtsU3pXUWd6WUVvVW84ak5jbVpIZ25ld1VfR3RITUJ4MEx1ZTRJaGdXSDRadGVRNThPMzFlOVNsNWo4QzV2eTMzVmoxb1RDSE5QNXZkQ1d3bl9oSk85SUFxNEgxU1N6ME9UWHJ6dENMZmk1LWhacTJreTc4VlgtaGRxaFVQbFltR2UwMVN3Z1V3WUJLeHdDNy0wU0NldXRLaVA0NVY5WTZLQ1NOQjJQQWFHSjMtMk9icXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1814
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
