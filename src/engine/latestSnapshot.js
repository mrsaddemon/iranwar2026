export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1850,
  "lastUpdated": "2026-08-15",
  "lastSyncedAt": "2026-08-15T18:40:34.416Z",
  "warDay": 169,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-08-15",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 7,
    "summary": "A truce between Lebanon and Israel is under severe strain following Israeli strikes and Hezbollah's rejection of a US-led deal."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.85
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
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "text": "US carrier group deployed to Middle East to replace USS Lincoln.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE50bHFXRTNsVkRFU3JmVVZjWExoWDlwZEdkLVJYNENoLWUtRlNBMkRFUjAzVTBNZzdpaHdKd1lpRTZTeXEtbF92MndpVlpZdl9RSUMzd2U3WG1TaFlPS2dIbTVrVXBSLVUtWTFsQUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1850
    },
    {
      "date": "Aug 14",
      "text": "Trump states intent to declare Strait of Hormuz US territory 'pretty soon'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPVzFraWFiZjd3WFg5eEpZNXRMdDFPZUlvTmpHYkM2QXNBUkQ2TjR5NUctNUJPZ1hKMnFtdWtKOFFNTkFTc0s0R3hYZFdfQ3ZHLWlMTFE3RWRranQ4aExKMkMzZzl4SWt2UGQzYjRJbHo5UVhINWVpX25rUzhKdkV0LW5WTG5nRUtTTmJwUU0wd2IzZnpKM296NtIBngFBVV95cUxQbUI0ZVg5NHQ4T05ScnpPVHptMHY2RFZReVp3NGdlbWtjMGlVMDNSVk8tN0M1N1BpUkU0b2pmcDRKM1ZRSl9XekxfYjExdHNtWVdVTklCMkpyd0RWVmZ6SGdTdUxyV2l0ZTU5ZFM4YWZFZndRaklFdzZkVU82cFB3RjQyOUtBbWs5aDFXRFEwZkpLMFNVbVJSeVlqT3h6Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1850
    },
    {
      "date": "Aug 14",
      "text": "Eleven killed in Israeli strikes on southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBCRDVFUWZWd2tFVmZ6bm5fUld6aVBfSkhFTzZZYUhyYjl4M1pnc3pfUl82cTEtelV5cGxBem9JcWJQeXhxdVRtbWQxdFlSMXlsQUpOdUtwTzFRQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1850
    },
    {
      "date": "Aug 14",
      "text": "Iran launches missile and drone attacks across Gulf; Israel strikes Tehran infrastructure.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxQYmFtdmtoamYyU2taWm5uSUp0LWxRR3p3bGszYjhPT0tnNmoweWI3eWtjcnlmRzRqTmtJdWRYTU55Ym5zY0xkTVJOdlRSUVduWjVSSGRndlJwSThXSU9qOW50ejUxWTNjRUZPbkpxZHZBd1RoVUV0V2gtSmZycEZTeFlfejZfOEtNbjYxUF9VYnpHTURxZ3E2dkU3Z1FQOUtpZFM2MVdRdnNGc25RajFhdzlnQlZzbVh4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Newsonair",
      "latestSinceUpdate": 1850
    },
    {
      "date": "Aug 14",
      "text": "UAE reports Iran attacked ADNOC vessel in Hormuz, urges reopening; two other UAE tankers attacked within a week.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxNbEFoM0Z1VnBsRUlGMUtsU3pXUWd6WUVvVW84ak5jbVpIZ25ld1VfR3RITUJ4MEx1ZTRJaGdXSDRadGVRNThPMzFlOVNsNWo4QzV2eTMzVmoxb1RDSE5QNXZkQ1d3bl9oSk85SUFxNEgxU1N6ME9UWHJ6dENMZmk1LWhacTJreTc4VlgtaGRxaFVQbFltR2UwMVN3Z1V3WUJLeHdDNy0wU0NldXRLaVA0NVY5WTZLQ1NOQjJQQWFHSjMtMk9icXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1850
    },
    {
      "date": "Aug 14",
      "text": "Hezbollah chief rejects US-led Lebanon deal, calls to reverse direct talks with Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNa2xoRVcwMzNOOXE4dDN2LUlVSFRKVkdQdE5mS093b0cyWlFOcW9rZzNfS3JDLTZYS2RWdEpMU1I3R21FTm5FaEZNYXc0VzB3aGlJaktSTjVxZG01cWUtVUdycDFOMC1lMU55cnAtcWExSEFNV0NiU1UtUlI4ZWt5TkVBM0kzSlBKb1NodjNXOGE5WmFMUUs1NkdjVVRoUUh1bWdIakplbGduSGoxaHlmQXFiVWF6bVU0TFHSAb8BQVVfeXFMTVVlbmZpdDdSaHBZMFZrNlloQ3NBMTlfcUwzOElXR0FVNkE1Yl9pdTlMOFNRc29MZklpV1JWQUNXNmM0UVdxRzBRNEpud0tscTVsNDRMbmdUZHJDV2xxOHdraGhGVG83MHZUMlNFSTFYSUNlSldacXFiSHVfT2ZzLVc5LW4wU2V2MF83ZUhONkVTQWF1dzlYMDVRc0I0WGN3Q3dLLVhPSVBHRmdsVkwyNU1XZTlHQ3p2blMtV3BhVHc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "upi.com",
      "latestSinceUpdate": 1850
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
