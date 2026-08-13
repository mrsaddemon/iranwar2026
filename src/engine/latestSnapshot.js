export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1785,
  "lastUpdated": "2026-08-13",
  "lastSyncedAt": "2026-08-13T21:55:18.993Z",
  "warDay": 167,
  "summary": "The US-Iran conflict continues with an ongoing naval blockade in the Strait of Hormuz, attacks on shipping, and stalled peace talks, while Israel conducts strikes in Lebanon and Gaza amidst efforts to disarm Hezbollah.",
  "lastNarrativeUpdate": "2026-08-13",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire is active, with talks at an impasse and ongoing military engagements."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
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
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
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
      "date": "Aug 12",
      "text": "UAE reports Iran attacked two ADNOC vessels in the Strait of Hormuz, causing no injuries.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxQVGt4emw3dzdDaUdoNmsxMmRjMlkwZUJCUVlURko4RzRvMjUybnlUMVRGUnFLT0plclNLYkt0dGN1RV9fZnQ3QlE2UkN0d002blZDVUtTX0JwQXhkbXVDZ25WbDBLWld0anI2MmEtMUJOUFVNUTVDeVhpOXlldTQtQmlMVmVzcE1KS0tnWHhUNWtodmJRNjJWNFEyak9ZSGRadktNS3FMZ2tjc0o3MEh6eXEwcTZjY1Q3dmg1eg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1785
    },
    {
      "date": "Aug 12",
      "text": "US Navy opens fire on a ship attempting to break the Iran blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMifEFVX3lxTE1KcWVDVVZPTklUQUFDUzVyeU9idWR2LS1RU0xRbzhrRlljMGJzTUxGVXFDQnQ1bjBIMlFoVE1JeFJkajVlS05MUkFSV3pBa3JMbGRuNHREcHdkSDlXZDhacndheVJYRWR5cEpuRkE3RWJQUThQcjI0QTRhNFQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1785
    },
    {
      "date": "Aug 12",
      "text": "Strait of Hormuz traffic remains low as global oil stockpiles are rapidly depleted.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE1pbW5CSDVsU0lSOTVwRzBkaENsM2VZYVdSTVJVaWxKbVpRbHBPaWJZMktfcVBGVzB1bGdKT0ZtSVBzblpBV0xkS2dSdlBJYVlSR1hRWVhPb2Z0UWtoaDhaMGhpTTJyYllaaFZ1ejBR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1785
    },
    {
      "date": "Aug 12",
      "text": "CENTCOM chief reportedly pushes for renewed US-Israeli strikes on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxNTGNtNE5pbm1TZVJCUXdRVHZta1BLMU44akVEMzFqZldHOGlONHBTQ0NDTDNLLTFKZ0REX3lUWEM1TXJ4aDF1SldHOXFhY0htM2UtSTdPa1pVRFhKMlBPVktwUW9XNGxfOXdMQUVaWWxpNXplUFRSNm40SkktUTl3VjAwQUQ0SlJBV2hYdHlJNlg5YjJsa29kemp4UGJqalpyUWNLa3JhU09wT3U3dUJOVVU3ajQ1Vlk3eWZyQmxR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Garowe Online",
      "latestSinceUpdate": 1785
    },
    {
      "date": "Aug 12",
      "text": "The U.S. military has lost approximately 25% of its Reaper drones due to the Iran war.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi0gFBVV95cUxNR2swcWNKLTdQX01uTFVzYmpGSGU4Q2VZcWZxWHFPLXk2aXVJQjBsVW9QNGVpdDVJLTk0blY2a1RJV1dGMlYxVlBETTdoY3BKNHB0SnBUcHM3X0NSSUtlMGtkOHpXUi1qZ3dTdm15ME5GOXQzM2lBRzBvQTJlNC1YaVJUMF9jUUw3cEt4WW04U1QyaWpqSU82OGxUZVU3X1lNdlRhVG9tbHlkV0NKVC1oa3RXRlBvRzJxMzhxbERvcGs2bWFFRl9Wdm9XWk00bkRuTXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1785
    },
    {
      "date": "Aug 12",
      "text": "Israel hits Lebanon and Gaza amidst ongoing conflict.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1785
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
