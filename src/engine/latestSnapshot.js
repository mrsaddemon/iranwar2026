export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1853,
  "lastUpdated": "2026-08-15",
  "lastSyncedAt": "2026-08-15T19:48:15.145Z",
  "warDay": 169,
  "summary": "The conflict in West Asia has escalated with US-Israel strikes on Iran, a US Embassy attack in Riyadh, and multiple Iranian attacks on UAE tankers in the Strait of Hormuz, which the US claims as its territory.",
  "lastNarrativeUpdate": "2026-08-15",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire or de-escalation efforts are currently reported; conflict continues to escalate."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Aug 14",
      "text": "A US carrier group is headed to the Middle East to replace the USS Lincoln.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE50bHFXRTNsVkRFU3JmVVZjWExoWDlwZEdkLVJYNENoLWUtRlNBMkRFUjAzVTBNZzdpaHdKd1lpRTZTeXEtbF92MndpVlpZdl9RSUMzd2U3WG1TaFlPS2dIbTVrVXBSLVUtWTFsQUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1853
    },
    {
      "date": "Aug 14",
      "text": "Trump states he will declare the Strait of Hormuz a US territory 'pretty soon'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPVzFraWFiZjd3WFg5eEpZNXRMdDFPZUlvTmpHYkM2QXNBUkQ2TjR5NUctNUJPZ1hKMnFtdWtKOFFNTkFTc0s0R3hYZFdfQ3ZHLWlMTFE3RWRranQ4aExKMkMzZzl4SWt2UGQzYjRJbHo5UVhINWVpX25rUzhKdkV0LW5WTG5nRUtTTmJwUU0wd2IzZnpKM296NtIBngFBVV95cUxQbUI0ZVg5NHQ4T05ScnpPVHptMHY2RFZReVp3NGdlbWtjMGlVMDNSVk8tN0M1N1BpUkU0b2pmcDRKM1ZRSl9XekxfYjExdHNtWVdVTklCMkpyd0RWVmZ6SGdTdUxyV2l0ZTU5ZFM4YWZFZndRaklFdzZkVU82cFB3RjQyOUtBbWs5aDFXRFEwZkpLMFNVbVJSeVlqT3h6Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1853
    },
    {
      "date": "Aug 14",
      "text": "Eleven people were killed in Israeli strikes on southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBCRDVFUWZWd2tFVmZ6bm5fUld6aVBfSkhFTzZZYUhyYjl4M1pnc3pfUl82cTEtelV5cGxBem9JcWJQeXhxdVRtbWQxdFlSMXlsQUpOdUtwTzFRQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1853
    },
    {
      "date": "Aug 14",
      "text": "Iran claims Qatar is holding its pilots.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOU0NBVmpueWNUWGJ1ckoxSW1wR1dkX0ZHRzk3bWFUcUlGamk0NjBjMEo2LXVRNTlUUkxibVdSbHdLS245VF9Hc2hzbE9JYld3WEt4VnBPSWVwMjFoTlQyc2RSYjdzLU5ZN0FoZ1dSaVVGUGIwbU1XbzlCY256ZnloUFBuNnlPakV3RFlFWHpqRERKa3lIblRReG80R1hyN1RCczFLdXYtRmJQNlo3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1853
    },
    {
      "date": "Aug 14",
      "text": "The US Embassy in Riyadh was attacked.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQZHhsMnRzT001OE5GdXBoSElzTl9qWjBIVWVZUHJXclN6ZUJTMVNvWHV5U3doRkEyRzJEaGQ1TzQ0b3lzOVgtVGJvQ0FEZ3IyZHRuU1dmT2t2UHYyR3lpZ2lraGFjM0tqS2hwUTlnV0JYZGVCODczZlZjTmhCeWxGOFQ3OTJnZU03d0pPZnNMSHlFd01FMHFmRzRMZ0FoRF8tRklmU2RaN3I0Nmo1aWEwUnIxUVJ5X2Ytemt5c2h3Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "News On AIR",
      "latestSinceUpdate": 1853
    },
    {
      "date": "Aug 14",
      "text": "The UAE reports Iran attacked an ADNOC vessel in Hormuz and urges the waterway's reopening.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxNbEFoM0Z1VnBsRUlGMUtsU3pXUWd6WUVvVW84ak5jbVpIZ25ld1VfR3RITUJ4MEx1ZTRJaGdXSDRadGVRNThPMzFlOVNsNWo4QzV2eTMzVmoxb1RDSE5QNXZkQ1d3bl9oSk85SUFxNEgxU1N6ME9UWHJ6dENMZmk1LWhacTJreTc4VlgtaGRxaFVQbFltR2UwMVN3Z1V3WUJLeHdDNy0wU0NldXRLaVA0NVY5WTZLQ1NOQjJQQWFHSjMtMk9icXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1853
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
