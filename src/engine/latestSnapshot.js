export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1841,
  "lastUpdated": "2026-08-15",
  "lastSyncedAt": "2026-08-15T15:04:18.126Z",
  "warDay": 169,
  "summary": "The conflict is escalating with US assertions over the Strait of Hormuz, Iranian attacks on vessels, and intensified Israeli strikes in southern Lebanon.",
  "lastNarrativeUpdate": "2026-08-15",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is currently active; conflict is escalating across multiple fronts with direct engagements and territorial claims."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.6,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 68,
    "globalPressure": 91,
    "allianceInfluence": 73
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Aug 14",
      "text": "A US carrier group is headed to the Middle East to replace the USS Lincoln.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE50bHFXRTNsVkRFU3JmVVZjWExoWDlwZEdkLVJYNENoLWUtRlNBMkRFUjAzVTBNZzdpaHdKd1lpRTZTeXEtbF92MndpVlpZdl9RSUMzd2U3WG1TaFlPS2dIbTVrVXBSLVUtWTFsQUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN"
    },
    {
      "date": "Aug 14",
      "text": "President Trump states he will declare the Strait of Hormuz US territory 'pretty soon'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxPN1Z2Sm96LU1TSUlmX0dRTldvbUtpcWxNZTQ0VjZsZ3pSdjNLS3JFNG9CaTdOcURIcV8tMUtWckZMQkJ5SVBVOERmQzFwd0RFMzNicGw4Z0ppTFNmaG9sUVk4SDRZZVJ1VkM1Qm5CQTFUSXdQN2w5c2NlX3NDVGhzVVJZTVpTNkdlRFFpVm5hS0RHV2JmQkVsRGNkbl9CRWR3MnoxTNIBqgFBVV95cUxNZHNkaTRJNnF5RU1Ua1d1VFRLZEVyb245dnVPSU9Fei1Jb01jYVFVSHRseVBNc0wzMEtxWHNHUlVlUDJfVnhQMXdCQnlNSUNCS1AzZklidlRpYVVHYkI0cHpveUhxU3AxdFZGemNmenFEM3V2VWFhbzBxQnlsY1ZOMkQ2MUtRWWc2MEhkUDJWaDRMY2E4T3NqSi1nU013TGdpM0ZXb2EyNl9ZQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "aljazeera.com",
      "latestSinceUpdate": 1840
    },
    {
      "date": "Aug 12",
      "text": "Trump insists the US controls Hormuz, while Iran says it could 'prolong' the war with the US.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9pbWxQa3BOTklMZFVOT0RGLW5mSmRBRFNKeWV1R2VwUXNJOV9acS1sTzVWMFEteTgyczBlSU1QeU53RFhJVkNyc1FsS2xsVEJvRlYtWnhaXzRGT2pIbkVhVWVmU29UUDNKT0RoazFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1841
    },
    {
      "date": "Aug 12",
      "text": "Eleven people were killed in Israeli strikes on southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBCRDVFUWZWd2tFVmZ6bm5fUld6aVBfSkhFTzZZYUhyYjl4M1pnc3pfUl82cTEtelV5cGxBem9JcWJQeXhxdVRtbWQxdFlSMXlsQUpOdUtwTzFRQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "bbc.com",
      "latestSinceUpdate": 1841
    },
    {
      "date": "Aug 12",
      "text": "The UAE reports Iran attacked two ADNOC vessels in the Strait of Hormuz, urging the waterway's reopening.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxQVGt4emw3dzdDaUdoNmsxMmRjMlkwZUJCUVlURko4RzRvMjUybnlUMVRGUnFLT0plclNLYkt0dGN1RV9fZnQ3QlE2UkN0d002blZDVUtTX0JwQXhkbXVDZ25WbDBLWld0anI2MmEtMUJOUFVNUTVDeVhpOXlldTQtQmlMVmVzcE1KS0tnWHhUNWtodmJRNjJWNFEyak9ZSGRadktNS3FMZ2tjc0o3MEh6eXEwcTZjY1Q3dmg1eg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1841
    },
    {
      "date": "Aug 12",
      "text": "Hezbollah chief rejects a US-led Lebanon deal, calling to reverse 'mistake' of direct talks with Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNa2xoRVcwMzNOOXE4dDN2LUlVSFRKVkdQdE5mS093b0cyWlFOcW9rZzNfS3JDLTZYS2RWdEpMU1I3R21FTm5FaEZNYXc0VzB3aGlJaktSTjVxZG01cWUtVUdycDFOMC1lMU55cnAtcWExSEFNV0NiU1UtUlI4ZWt5TkVBM0kzSlBKb1NodjNXOGE5WmFMUUs1NkdjVVRoUUh1bWdIakplbGduSGoxaHlmQXFiVWF6bVU0TFHSAb8BQVVfeXFMTVVlbmZpdDdSaHBZMFZrNlloQ3NBMTlfcUwzOElXR0FVNkE1Yl9pdTlMOFNRc29MZklpV1JWQUNXNmM0UVdxRzBRNEpud0tscTVsNDRMbmdUZHJDV2xxOHdraGhGVG83MHZUMlNFSTFYSUNlSldacXFiSHVfT2ZzLVc5LW4wU2V2MF83ZUhONkVTQWF1dzlYMDVRc0I0WGN3Q3dLLVhPSVBHRmdsVkwyNU1XZTlHQ3p2blMtV3BhVHc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "upi.com",
      "latestSinceUpdate": 1841
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
