export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1877,
  "lastUpdated": "2026-08-16",
  "lastSyncedAt": "2026-08-16T08:03:03.609Z",
  "warDay": 170,
  "summary": "The US is deploying a carrier group to the Middle East amidst an ongoing conflict with Iran, which includes strikes in the Strait of Hormuz and escalating Israeli-Lebanese hostilities, while Hezbollah rejects a regional deal.",
  "lastNarrativeUpdate": "2026-08-16",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire or de-escalation efforts are reported; Hezbollah has rejected a proposed deal."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
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
      "date": "Aug 14",
      "text": "A US carrier group is headed to the Middle East to replace the USS Lincoln.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE50bHFXRTNsVkRFU3JmVVZjWExoWDlwZEdkLVJYNENoLWUtRlNBMkRFUjAzVTBNZzdpaHdKd1lpRTZTeXEtbF92MndpVlpZdl9RSUMzd2U3WG1TaFlPS2dIbTVrVXBSLVUtWTFsQUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1876
    },
    {
      "date": "Aug 14",
      "text": "Former President Trump states he will declare Hormuz US territory 'pretty soon' and the US can maintain a blockade on Iran 'indefinitely'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxPN1Z2Sm96LU1TSUlmX0dRTldvbUtpcWxNZTQ0VjZsZ3pSdjNLS3JFNG9CaTdOcURIcV8tMUtWckZMQkJ5SVBVOERmQzFwd0RFMzNicGw4Z0ppTFNmaG9sUVk4SDRZZVJ1VkM1Qm5CQTFUSXdQN2w5c2NlX3NDVGhzVVJZTVpTNkdlRFFpVm5hS0RHV2JmQkVsRGNkbl9CRWR3MnoxTNIBqgFBVV95cUxNZHNkaTRJNnF5RU1Ua1d1VFRLZEVyb245dnVPSU9Fei1Jb01jYVFVSHRseVBNc0wzMEtxWHNHUlVlUDJfVnhQMXdCQnlNSUNCS1AzZklidlRpYVVHYkI0cHpveUhxU3AxdFZGemNmenFEM3V2VWFhbzBxQnlsY1ZOMkQ2MUtRWWc2MEhkUDJWaDRMY2E4T3NqSi1nU013TGdpM0ZXb2EyNl9ZQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1877
    },
    {
      "date": "Aug 14",
      "text": "Iran claims Qatar is holding pilots, while Israeli strikes kill 11 in southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOU0NBVmpueWNUWGJ1ckoxSW1wR1dkX0ZHRzk3bWFUcUlGamk0NjBjMEo2LXVRNTlUUkxibVdSbHdLS245VF9Hc2hzbE9JYld3WEt4VnBPSWVwMjFoTlQyc2RSYjdzLU5ZN0FoZ1dSaVVGUGIwbU1XbzlCY256ZnloUFBuNnlPakV3RFlFWHpqRERKa3lIblRReG80R1hyN1RCczFLdXYtRmJQNlo3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1877
    },
    {
      "date": "Aug 14",
      "text": "Iran strikes another ship in the Strait of Hormuz as Israel steps up attacks in Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPb2FwQzRGRnQwTjFNbTRBTHNFY3JtRTRNZkZ5T1VYbFBlbzVhNnZqTTlrWEZaN3VzTWpySWVhOFdNNmhmTzdpWnZkY1NVNzFOWUxvakM4RkJmU1JMSWlpN3BTNFA3UHdUbXNiSjVDbjJWdjhQa0p3WFUyNGRXNzZzS3k2SnBWNlRsN1hCN0swYVR4MW5GbDFXM3VZSGF0QjlHbXZyMVZibFdyd3c2Q1Bv?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1877
    },
    {
      "date": "Aug 15",
      "text": "Shipping faces more disruptions in the Middle East, and a Yemen port suspends operations due to the Hormuz stalemate.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5jZlpLZGNVVU9BX2JPcU13ZWt1SXZPLWZmaUdhR05fcWdmUmtZMHRTNFZNdUllN2g3MHU0ejRidWVqSVRtUkRwSnlmOFI0U3BPX1FGaXEyQTl1VjVhNTh4Y1BRbU5kUGhvU2JfN1lR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1877
    },
    {
      "date": "Aug 15",
      "text": "Iran demands the release of downed pilots, which Qatar denies holding.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi3wFBVV95cUxOc1FhckE3bmh1REl0TnQxN2NrSUR3YmtmcVpCc3JGVXgtZmFFR1BlU3N3WkJCalRQU3YzS2Y3UDlBMng5X1dSeWpqRExRNWFSS2trSnRRMDdDV1RIM1JtOG51T2dtS3RFUGZxdXhlNTRoNTI5cktkU1JfeFNyNnp0QVFURV9hWG1ySjFxcHhaMU1nSU5qM1RVVklqU2JPVFhLeWFoZGFERWhRQ0NlNTRnb3ZJQmlDN1N4NWR6R3VJbmRaS1pMdUpaU2VyOWF0Ty1hOG9kdTFXQU95X0k0MDJR0gHmAUFVX3lxTFBWaUFRdUFGS3VzOFhtRzQxMHNqS210MzdnRW1MTUQ4R1Iwdm9hSzE2ZDdrYTJUanJnS0tRdXdCZUZ4eGFTdnNqUUUyY2xaSEZ2V3N2eVdwUzNhZHV1aEg5ZjVYTlZsQ1JUOUJPRVRoamEzQlBUMTNvSHp0dk03N2paaEE0NEpoSDJaal9wc21zTzlHNk5WQjhwMXhVYU9USFN2SHJJWFZldHVjREFPY1lHVXE1aGpsVi05cDhaTWpTeE94Z2RKSlJxelczN2E0Vm15eHJuNF9DSGQ2eS11MjhnblhZOC1R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 1877
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
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
