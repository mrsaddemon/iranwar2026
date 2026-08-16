export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1901,
  "lastUpdated": "2026-08-16",
  "lastSyncedAt": "2026-08-16T18:39:58.248Z",
  "warDay": 170,
  "summary": "Tensions in the Middle East are escalating with the looming end of a US-Iran ceasefire, increased Israeli strikes in Lebanon, and heightened rhetoric and actions around the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-08-16",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 7,
    "summary": "The US-Iran ceasefire is reportedly nearing its end, while a truce between Lebanon and Israel is under severe strain following Israeli strikes and Hezbollah's rejection of a deal."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
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
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
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
    "allianceInfluence": 46
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
      "date": "Aug 15",
      "text": "Shipping faces more disruptions in the Middle East.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5jZlpLZGNVVU9BX2JPcU13ZWt1SXZPLWZmaUdhR05fcWdmUmtZMHRTNFZNdUllN2g3MHU0ejRidWVqSVRtUkRwSnlmOFI0U3BPX1FGaXEyQTl1VjVhNTh4Y1BRbU5kUGhvU2JfN1lR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1901
    },
    {
      "date": "Aug 15",
      "text": "Trump states intent to declare Strait of Hormuz US territory 'pretty soon'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPVzFraWFiZjd3WFg5eEpZNXRMdDFPZUlvTmpHYkM2QXNBUkQ2TjR5NUctNUJPZ1hKMnFtdWtKOFFNTkFTc0s0R3hYZFdfQ3ZHLWlMTFE3RWRranQ4aExKMkMzZzl4SWt2UGQzYjRJbHo5UVhINWVpX25rUzhKdkV0LW5WTG5nRUtTTmJwUU0wd2IzZnpKM296NtIBngFBVV95cUxQbUI0ZVg5NHQ4T05ScnpPVHptMHY2RFZReVp3NGdlbWtjMGlVMDNSVk8tN0M1N1BpUkU0b2pmcDRKM1ZRSl9XekxfYjExdHNtWVdVTklCMkpyd0RWVmZ6SGdTdUxyV2l0ZTU5ZFM4YWZFZndRaklFdzZkVU82cFB3RjQyOUtBbWs5aDFXRFEwZkpLMFNVbVJSeVlqT3h6Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1901
    },
    {
      "date": "Aug 15",
      "text": "Middle Eastern airlines are projected to face $4.3bn in losses in 2026 due to the war.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1901
    },
    {
      "date": "Aug 14",
      "text": "A US carrier group is headed to the Middle East to replace the USS Lincoln.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE50bHFXRTNsVkRFU3JmVVZjWExoWDlwZEdkLVJYNENoLWUtRlNBMkRFUjAzVTBNZzdpaHdKd1lpRTZTeXEtbF92MndpVlpZdl9RSUMzd2U3WG1TaFlPS2dIbTVrVXBSLVUtWTFsQUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1901
    },
    {
      "date": "Aug 14",
      "text": "The end of the US-Iran ceasefire looms amidst regional instability.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1901
    },
    {
      "date": "Aug 14",
      "text": "Israeli airstrikes in southern Lebanon kill at least 11 people.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxOX2ZUYmxHT0l6eDJHcjM1UjY5eGUxSnhTZHduODFQbUh4M25uZk54TG1EaXBILTN0TDRudUJ3TVMzaFNxRFZYN1Rnck4wQXc1R1dxcWdhakp6TVJWVUw3Qk9zMUxVc1FYRmJaZWRzeTJiaGc4R29KMDZSYlNHaEhnMjUzS0g2a1haUzZaUkVTUDFzSS1UcnBpV1Btbmw0SUZPRnc2c1dGbzZNOUVpT1HSAbMBQVVfeXFMTTBuMzFBQXk0QldMdklYWTJodUd2aVBtUVhFSVIyQWNYcnVacVFIV1Z3aVVybWRMZXp2eDVxWXNMSE9qSXFpeThxdEFSN21lYnFacE4yRmtQc3NmanJXSjg5NTJWSFhFSVBfR01TOWNwaHZjeW5jVGtPVTZUdTJ5MW9VeG92dGd1ZjdqeVFEUElBTWZtbG9zVUZMMFZpRHQ4cGpGcGlMQmV4WFdNM3JGZXJiM0k?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1901
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
