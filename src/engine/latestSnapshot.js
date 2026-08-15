export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1835,
  "lastUpdated": "2026-08-15",
  "lastSyncedAt": "2026-08-15T11:59:54.921Z",
  "warDay": 169,
  "summary": "The US-Iran conflict intensifies with a US carrier group deployment, US-Israel strikes on Iran, and Iranian attacks on tankers in the Strait of Hormuz, while the US military reports significant drone losses.",
  "lastNarrativeUpdate": "2026-08-15",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or de-escalation efforts are reported amidst ongoing conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 82
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
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
    "nuclearIndex": 25,
    "escalationLevel": 90,
    "oilDisruption": 75,
    "tradeImpact": 70,
    "sanctionsPressure": 64,
    "globalPressure": 83,
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
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE50bHFXRTNsVkRFU3JmVVZjWExoWDlwZEdkLVJYNENoLWUtRlNBMkRFUjAzVTBNZzdpaHdKd1lpRTZTeXEtbF92MndpVlpZdl9RSUMzd2U3WG1TaFlPS2dIbTVrVXBSLVUtWTFsQUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1834
    },
    {
      "date": "Aug 14",
      "text": "Former President Trump states he will declare the Strait of Hormuz US territory.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPVzFraWFiZjd3WFg5eEpZNXRMdDFPZUlvTmpHYkM2QXNBUkQ2TjR5NUctNUJPZ1hKMnFtdWtKOFFNTkFTc0s0R3hYZFdfQ3ZHLWlMTFE3RWRranQ4aExKMkMzZzl4SWt2UGQzYjRJbHo5UVhINWVpX25rUzhKdkV0LW5WTG5nRUtTTmJwUU0wd2IzZnpKM296NtIBngFBVV95cUxQbUI0ZVg5NHQ4T05ScnpPVHptMHY2RFZReVp3NGdlbWtjMGlVMDNSVk8tN0M1N1BpUkU0b2pmcDRKM1ZRSl9XekxfYjExdHNtWVdVTklCMkpyd0RWVmZ6SGdTdUxyV2l0ZTU5ZFM4YWZFZndRaklFdzZkVU82cFB3RjQyOUtBbWs5aDFXRFEwZkpLMFNVbVJSeVlqT3h6Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1835
    },
    {
      "date": "Aug 14",
      "text": "West Asia conflict escalates with US-Israel strikes hitting Iran, and the US Embassy in Riyadh attacked.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxQZHhsMnRzT001OE5GdXBoSElzTl9qWjBIVWVZUHJXclN6ZUJTMVNvWHV5U3doRkEyRzJEaGQ1TzQ0b3lzOVgtVGJvQ0FEZ3IyZHRuU1dmT2t2UHYyR3lpZ2lraGFjM0tqS2hwUTlnV0JYZGVCODczZlZjTmhCeWxGOFQ3OTJnZU03d0pPZnNMSHlFd01FMHFmRzRMZ0FoRF8tRklmU2RaN3I0Nmo1aWEwUnIxUVJ5X2Ytemt5c2h3Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "News On AIR",
      "latestSinceUpdate": 1835
    },
    {
      "date": "Aug 14",
      "text": "Iran reportedly targeted two UAE tankers in 'unprovoked attacks' while transiting the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMif0FVX3lxTFBWbGN2eXRreVRtbzJ4SnZxOGZzNXkzNy1fMkNuUHFlSkx1RHJpMjFYUEJUVlFpUVRyV2V5Q013cUtaaGg4Y1VrYjZMd181dzF2LXNOX3pnZFNDajNETmJfaWh2cXZpMjdnODNzcExKWGVUSzBRUkI4YUVTOHJIZHM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1835
    },
    {
      "date": "Aug 14",
      "text": "Israeli airstrikes on southern Lebanon killed 9 people, according to the Health Ministry.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi3wFBVV95cUxOU2piWmJYdzNKV2xJbWlvaTk5dnJYT2NGc0xKVFdlWk9XeEFOVmtucGV4MGpESzhGV0FrX0FCWG5fS3lsWnI5X3J3WGE4THA0Q2JoeW5Wd0xEdEZzT3ozS3gwcFRSQ0hxeU85cGw0SG0tQ2RnTXNCS1ppWkZyd2pXcW9ILU9oNW5uX2ZLLVlEMzdDYmdfM3A5Ty1ZVGdWbW5QS1NiX2NoOWFMQktQOEVHZW9LRklLTnZTNE9kRUlOcV8tRG5KdTA0S29OZ1lfb1ZNbGJ5emVzbXhBOUxmMWJr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1835
    },
    {
      "date": "Aug 14",
      "text": "Hezbollah chief rejects a US-led Lebanon deal, calling to reverse the 'mistake' of direct talks with Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNa2xoRVcwMzNOOXE4dDN2LUlVSFRKVkdQdE5mS093b0cyWlFOcW9rZzNfS3JDLTZYS2RWdEpMU1I3R21FTm5FaEZNYXc0VzB3aGlJaktSTjVxZG01cWUtVUdycDFOMC1lMU55cnAtcWExSEFNV0NiU1UtUlI4ZWt5TkVBM0kzSlBKb1NodjNXOGE5WmFMUUs1NkdjVVRoUUh1bWdIakplbGduSGoxaHlmQXFiVWF6bVU0TFHSAb8BQVVfeXFMTVVlbmZpdDdSaHBZMFZrNlloQ3NBMTlfcUwzOElXR0FVNkE1Yl9pdTlMOFNRc29MZklpV1JWQUNXNmM0UVdxRzBRNEpud0tscTVsNDRMbmdUZHJDV2xxOHdraGhGVG83MHZUMlNFSTFYSUNlSldacXFiSHVfT2ZzLVc5LW4wU2V2MF83ZUhONkVTQWF1dzlYMDVRc0I0WGN3Q3dLLVhPSVBHRmdsVkwyNU1XZTlHQ3p2blMtV3BhVHc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "upi.com",
      "latestSinceUpdate": 1835
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
