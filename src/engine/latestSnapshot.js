export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1773,
  "lastUpdated": "2026-08-13",
  "lastSyncedAt": "2026-08-13T09:21:32.522Z",
  "warDay": 167,
  "summary": "The US and Iran are engaged in ongoing conflict with conflicting claims over control of the Strait of Hormuz, while mediators push for peace talks amidst continued Israeli strikes in Lebanon and Gaza.",
  "lastNarrativeUpdate": "2026-08-13",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.2,
    "durationDays": 10,
    "summary": "Negotiations for a peace arrangement are underway, but no active ceasefire is in effect, with Iran setting conditions for de-escalation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 60
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
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
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
      "text": "Trump insists US controls Hormuz, while Iran states it could ‘prolong’ war with the US.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9pbWxQa3BOTklMZFVOT0RGLW5mSmRBRFNKeWV1R2VwUXNJOV9acS1sTzVWMFEteTgyczBlSU1QeU53RFhJVkNyc1FsS2xsVEJvRlYtWnhaXzRGT2pIbkVhVWVmU29UUDNKT0RoazFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1773
    },
    {
      "date": "Aug 12",
      "text": "Mediators are pushing for US-Iran talks as Israel continues to hit Lebanon and Gaza.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNZ0YzeG5pTmVna25ZMW9GU0tYYTg2OHhtYWdVVldlSy1CcDRTT19HcGkxSzRwQTBwVUloRXlnQVVJMnQ0YWxjQ2R0djZ4Und0YzdTR3AxRks5UVZLNk8tLUY0QzVScmw5RW1iRzN3ci1YZG15ZXNwS2hwbkthcFlXLTZrNy01ZTk1U0M1STFva2VGX1UzSThTRlZ6U3dBMWNDSENqamZ4U0dJRzl2RmU2bGUwaHE5ZE9lZE530gHAAUFVX3lxTE05eGo4eEZ4dWg0bkZScF85cGJzRXFHaHlMeTN5T3F4X0ozNWNjT1pEN1B2ZW9fM3hjOU02TDBRNTM0ZGtSNzl4MEZQNkpzbzJyMzN6WXAzZ21FenVRQm1leWkzOFlPRWNObU05eG9QcmVqNnpKdTZRTzgzeUcwUGZWckxnSnJPRER1TFlrS2xJYlNTVnpUdFUyR3NLZ3MwMG1Zc3g4Tzc1QlpaZjFHUTlvMWpHQVJmUEFXS2twRDMtUg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1773
    },
    {
      "date": "Aug 12",
      "text": "Iran demands the U.S. pay for war damage before agreeing to reopen the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxOMXVhMHlqUEtqTDctWTJpYWFoamFyZHVHWE4xUWtkMnFVN0pmYTVtdXBuSXZVUmtFMEJ1UHgtRjlSak5sUnNpM1pDZUFqc1lUYV9FYS15WGN5VDg1RzYyZ19wOVNZSUx1bENuaDJ5QWsybVBTZzZsa2RScDRmd05BWDJqcTdTRGN0X0dVU0dPRm9sOEQyZHdERmlWNk8xSmIzdndQVEl1Sk1yeXRDR21FQkJn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1773
    },
    {
      "date": "Aug 12",
      "text": "Iran defies Trump, declaring the Strait of Hormuz blocked after the president claimed US has ‘total control’.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1773
    },
    {
      "date": "Aug 12",
      "text": "Reports indicate America’s depleted weapons stockpiles are undermining Trump’s leverage with Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxOb05kTE5aSnYzZFd3YWlta3UydkNrNGpybkdGWVV5MDFvTlpoUWotVlpHNE02cDJ6M2QzVHI4Q3FmajktV0thYjJ2SE5QQmNZX1MyZzdINmV3YXEzZ2FiOHZSOHNzR2ZzSmhMQ0ZUaW1iakNDWWpKM0dib0pGeUNHOWJ1RdIBiAFBVV95cUxNVmZjVUM4ZVVWRFJmY2o1UE9MTVdUUUxySlUyenBZWkhzTXZFMUs2cEplSG9NOHB3MTE0ZHU5TkZ0bmF1Q1hKRHlXdnlvYUdTT25IVUZPTUZSTTZlNTdiSlhzMFhLd2VIU3pSWjJiREphMGlOVFYtSnFoTmNPa2RHV3VRWXl5LWlm?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1772
    },
    {
      "date": "Aug 12",
      "text": "Four nations (UK, Italy, Switzerland, Indonesia) are shortlisted to oversee Hezbollah disarmament.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1TbjBCMnB4b1ZMbkJVZTBCY3ZiMVpVRjV1S0lyUDVqVGVnMzNua0toVTNDcHNITE5XajJ2bEFqc0lYbUp4RFhzWXgyM0hDbHpKdWlqZkVQS0F5dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Israel National News",
      "latestSinceUpdate": 1773
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
