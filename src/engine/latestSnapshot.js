export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1869,
  "lastUpdated": "2026-08-16",
  "lastSyncedAt": "2026-08-16T03:34:31.209Z",
  "warDay": 170,
  "summary": "Ongoing conflict sees US military deployment to the Middle East, multiple tanker attacks in the Strait of Hormuz attributed to Iran, and Israeli strikes in southern Lebanon amidst diplomatic rejections.",
  "lastNarrativeUpdate": "2026-08-16",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is in effect, with ongoing military actions and diplomatic rejections across the region."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 82
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.88
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Aug 14",
      "text": "A US carrier group is reportedly headed to the Middle East to replace the USS Lincoln.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE50bHFXRTNsVkRFU3JmVVZjWExoWDlwZEdkLVJYNENoLWUtRlNBMkRFUjAzVTBNZzdpaHdKd1lpRTZTeXEtbF92MndpVlpZdl9RSUMzd2U3WG1TaFlPS2dIbTVrVXBSLVUtWTFsQUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1869
    },
    {
      "date": "Aug 14",
      "text": "Former President Trump states he will declare the Strait of Hormuz US territory 'pretty soon'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPVzFraWFiZjd3WFg5eEpZNXRMdDFPZUlvTmpHYkM2QXNBUkQ2TjR5NUctNUJPZ1hKMnFtdWtKOFFNTkFTc0s0R3hYZFdfQ3ZHLWlMTFE3RWRranQ4aExKMkMzZzl4SWt2UGQzYjRJbHo5UVhINWVpX25rUzhKdkV0LW5WTG5nRUtTTmJwUU0wd2IzZnpKM296NtIBngFBVV95cUxQbUI0ZVg5NHQ4T05ScnpPVHptMHY2RFZReVp3NGdlbWtjMGlVMDNSVk8tN0M1N1BpUkU0b2pmcDRKM1ZRSl9XekxfYjExdHNtWVdVTklCMkpyd0RWVmZ6SGdTdUxyV2l0ZTU5ZFM4YWZFZndRaklFdzZkVU82cFB3RjQyOUtBbWs5aDFXRFEwZkpLMFNVbVJSeVlqT3h6Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1869
    },
    {
      "date": "Aug 14",
      "text": "The US indicates it can maintain a blockade on Iran 'indefinitely'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNdHcweVRHY1ZlLVJVOU9WM0dVcUt6VHpPQVBlMlJTeEVYR1lIT08zRVZ3Y2c1LVZ3aUM5NGVoTmFXUFFISDh6Tk9XbVZYMUpXQTdCdnlHVWlpWDZlaXZoaWdvRGZ0VnBxbzFlbVlPMUhWNktWZVI4c0xmZEtDR3Bydi1LQ2FldDBfaFlOUC03dHVJajh3SHU5Z2hqNHZEb0ZhVkhkT19xZkNYOFBZMk5VWThzWHJHSENsaTNOUtIBwgFBVV95cUxNYVRwc2VzSUNtT2dtU1A2cGIxZEV1U1dlUWtLTDJHV2xzWlJHZUpwZXM2bU5wTlJFR3N1bHBLZXRnNllwQlNvWlRCTmFueU1qejlGalIxZ3kxOHh6WTVpSmR6LUs3Q3dvUDFKYUtTdmxfVVZWVmkxcWdNaEs2VUdDcDVhVTVSRkFyakNVQXJFVjV0V2hTUnpLQVFlUzYyWWw3TXpOU2tLZVZ1TUVhN2pWOTVFR3V4OW5tVjFURXpfRjNTdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1869
    },
    {
      "date": "Aug 14",
      "text": "Iran claims Qatar is holding pilots, while Israeli strikes kill 11 in southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOU0NBVmpueWNUWGJ1ckoxSW1wR1dkX0ZHRzk3bWFUcUlGamk0NjBjMEo2LXVRNTlUUkxibVdSbHdLS245VF9Hc2hzbE9JYld3WEt4VnBPSWVwMjFoTlQyc2RSYjdzLU5ZN0FoZ1dSaVVGUGIwbU1XbzlCY256ZnloUFBuNnlPakV3RFlFWHpqRERKa3lIblRReG80R1hyN1RCczFLdXYtRmJQNlo3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1869
    },
    {
      "date": "Aug 14",
      "text": "Two UAE tankers were attacked while transiting the Strait of Hormuz, followed by a third attack within a week.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxOU19BM2l2RGhNUW5aWGxpdXJRU1QwVWtzekJ1ckw2bUdzWlhBSWcxX3U3T1JVblRkYW92MEhkaS1rakhweUN6MnlYc0xVbzVQcUtwdXRBbGFPUzV5T2Q5a3lmbVNqdE0zZFgyT0J3OGt6bzlwT1dWb2dtdVBieEtuOVFQXzdlNFdzUm8tU3FrV1JQS1hEUGpscjl3Q1BRczR4RlE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1869
    },
    {
      "date": "Aug 14",
      "text": "Hezbollah chief rejects a US-led Lebanon deal, calling for a reversal of direct talks with Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNa2xoRVcwMzNOOXE4dDN2LUlVSFRKVkdQdE5mS093b0cyWlFOcW9rZzNfS3JDLTZYS2RWdEpMU1I3R21FTm5FaEZNYXc0VzB3aGlJaktSTjVxZG01cWUtVUdycDFOMC1lMU55cnAtcWExSEFNV0NiU1UtUlI4ZWt5TkVBM0kzSlBKb1NodjNXOGE5WmFMUUs1NkdjVVRoUUh1bWdIakplbGduSGoxaHlmQXFiVWF6bVU0TFHSAb8BQVVfeXFMTVVlbmZpdDdSaHBZMFZrNlloQ3NBMTlfcUwzOElXR0FVNkE1Yl9pdTlMOFNRc29MZklpV1JWQUNXNmM0UVdxRzBRNEpud0tscTVsNDRMbmdUZHJDV2xxOHdraGhGVG83MHZUMlNFSTFYSUNlSldacXFiSHVfT2ZzLVc5LW4wU2V2MF83ZUhONkVTQWF1dzlYMDVRc0I0WGN3Q3dLLVhPSVBHRmdsVkwyNU1XZTlHQ3p2blMtV3BhVHc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "upi.com",
      "latestSinceUpdate": 1869
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "International Community",
      "headline": "Calls for De-escalation Persist Amidst Ongoing Conflict",
      "summary": "International observers continue to emphasize the need for diplomatic solutions to prevent further regional instability. Concerns remain high regarding humanitarian impacts and the potential for wider escalation.",
      "tone": "anxious",
      "latestSinceUpdate": 1867
    },
    {
      "perspective": "Israel",
      "headline": "Security Operations Continue to Address Persistent Threats",
      "summary": "Security operations are framed as essential for national defense against ongoing threats in the region. The focus remains on neutralizing perceived dangers and ensuring long-term national security.",
      "tone": "defiant",
      "latestSinceUpdate": 1867
    },
    {
      "perspective": "Iran",
      "headline": "Regional Actors Assert Influence Amidst Geopolitical Tensions",
      "summary": "Regional actors continue to assert their influence, supporting various groups in what they describe as resistance against foreign intervention. The narrative emphasizes sovereignty and regional power dynamics.",
      "tone": "defiant",
      "latestSinceUpdate": 1867
    }
  ]
});

export default LATEST_SNAPSHOT;
