export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1794,
  "lastUpdated": "2026-08-14",
  "lastSyncedAt": "2026-08-14T10:25:54.114Z",
  "warDay": 168,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-08-14",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 15,
    "summary": "A ceasefire in Lebanon is claimed by Trump to be working, but residents describe it as a 'prison' and Israeli strikes continue, indicating a highly fragile or collapsed state."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
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
      "date": "Aug 12",
      "text": "Trump insists US controls Hormuz, while Iran states it could 'prolong' war with US and claims control of the strait.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9pbWxQa3BOTklMZFVOT0RGLW5mSmRBRFNKeWV1R2VwUXNJOV9acS1sTzVWMFEteTgyczBlSU1QeU53RFhJVkNyc1FsS2xsVEJvRlYtWnhaXzRGT2pIbkVhVWVmU29UUDNKT0RoazFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1794
    },
    {
      "date": "Aug 12",
      "text": "Mediators are pushing for US-Iran talks as Israel continues to hit targets in Lebanon and Gaza.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNZ0YzeG5pTmVna25ZMW9GU0tYYTg2OHhtYWdVVldlSy1CcDRTT19HcGkxSzRwQTBwVUloRXlnQVVJMnQ0YWxjQ2R0djZ4Und0YzdTR3AxRks5UVZLNk8tLUY0QzVScmw5RW1iRzN3ci1YZG15ZXNwS2hwbkthcFlXLTZrNy01ZTk1U0M1STFva2VGX1UzSThTRlZ6U3dBMWNDSENqamZ4U0dJRzl2RmU2bGUwaHE5ZE9lZE530gHAAUFVX3lxTE05eGo4eEZ4dWg0bkZScF85cGJzRXFHaHlMeTN5T3F4X0ozNWNjT1pEN1B2ZW9fM3hjOU02TDBRNTM0ZGtSNzl4MEZQNkpzbzJyMzN6WXAzZ21FenVRQm1leWkzOFlPRWNObU05eG9QcmVqNnpKdTZRTzgzeUcwUGZWckxnSnJPRER1TFlrS2xJYlNTVnpUdFUyR3NLZ3MwMG1Zc3g4Tzc1QlpaZjFHUTlvMWpHQVJmUEFXS2twRDMtUg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1794
    },
    {
      "date": "Aug 12",
      "text": "New attacks on shipping have occurred as Iran war talks hit a fresh impasse.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPVzI4ZllHeXZmVDVJVE40M0w5NkYtdkFzM0RyYlZvY1pXbEJoc1d4RHNvVWxTem1kMEhGNUxmc0tZZmZ2ZkpZamtDNkd6bjRTVXhCVEF6dGhOSXltR0RQc3RPc0RFUzctZ00xRjAzX0hwNy1oYlU0a0dMYU9iUjdqYXZ4ZWM5YXhBMUhEREduYVo2QkVsT2ktQ19NaFNpUF85TmhFcnF1REktbFZfRklXb0EtbzZsLUZ1Vk53TFRR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1794
    },
    {
      "date": "Aug 12",
      "text": "Two UAE tankers were attacked while transiting the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxOX3dIWVdaOWplT0dHMm90SmRFbFkybDBZcGlKU1FQUGk1UXdkM3FLRnY5WXhRRlAtRmlkNXFfbDBjNnFORFF0WUFhMHBTTE12MHVUMENieHJLaE1lbFprVldzcjV5WWdmajRoY1cwdWxGeXRGV3V5dy1SeVhZbG8xZEdJYjgxc0ZsVDdiN3oybnVNcWlQZkZRVWRUNGktdTJIeUZ6N19ocUVNWTFxTHNRMExMd0EtSlhkOG9IbHNwaEJaSTB4RGJRMXJndF9reFNHMUpkbm4tbGFCWUxKeEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Click2Houston",
      "latestSinceUpdate": 1794
    },
    {
      "date": "Aug 12",
      "text": "Iran demands the U.S. pay for war damage before agreeing to reopen the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxOMXVhMHlqUEtqTDctWTJpYWFoamFyZHVHWE4xUWtkMnFVN0pmYTVtdXBuSXZVUmtFMEJ1UHgtRjlSak5sUnNpM1pDZUFqc1lUYV9FYS15WGN5VDg1RzYyZ19wOVNZSUx1bENuaDJ5QWsybVBTZzZsa2RScDRmd05BWDJqcTdTRGN0X0dVU0dPRm9sOEQyZHdERmlWNk8xSmIzdndQVEl1Sk1yeXRDR21FQkJn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1794
    },
    {
      "date": "Aug 12",
      "text": "The U.S. military has deployed a new aircraft carrier to the region, while also reportedly losing roughly 25% of its Reaper drones.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1794
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
