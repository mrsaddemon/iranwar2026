export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1880,
  "lastUpdated": "2026-08-16",
  "lastSyncedAt": "2026-08-16T09:45:12.650Z",
  "warDay": 170,
  "summary": "The US-Iran conflict intensifies with US claims over the Strait of Hormuz and an ongoing blockade, while Iran strikes another ship and Israel escalates attacks in Lebanon, leading to significant shipping disruptions.",
  "lastNarrativeUpdate": "2026-08-16",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire is in effect, with ongoing military actions and diplomatic rejections of peace deals."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.88
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 88,
    "oilDisruption": 85,
    "tradeImpact": 77,
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
      "text": "Trump states the US will declare Hormuz US territory 'pretty soon' as a carrier group heads to the Middle East.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxPN1Z2Sm96LU1TSUlmX0dRTldvbUtpcWxNZTQ0VjZsZ3pSdjNLS3JFNG9CaTdOcURIcV8tMUtWckZMQkJ5SVBVOERmQzFwd0RFMzNicGw4Z0ppTFNmaG9sUVk4SDRZZVJ1VkM1Qm5CQTFUSXdQN2w5c2NlX3NDVGhzVVJZTVpTNkdlRFFpVm5hS0RHV2JmQkVsRGNkbl9CRWR3MnoxTNIBqgFBVV95cUxNZHNkaTRJNnF5RU1Ua1d1VFRLZEVyb245dnVPSU9Fei1Jb01jYVFVSHRseVBNc0wzMEtxWHNHUlVlUDJfVnhQMXdCQnlNSUNCS1AzZklidlRpYVVHYkI0cHpveUhxU3AxdFZGemNmenFEM3V2VWFhbzBxQnlsY1ZOMkQ2MUtRWWc2MEhkUDJWaDRMY2E4T3NqSi1nU013TGdpM0ZXb2EyNl9ZQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1880
    },
    {
      "date": "Aug 14",
      "text": "The US claims it can maintain a blockade on Iran 'indefinitely', while reports suggest the Iran War is a 'whole new level of quagmire'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNdHcweVRHY1ZlLVJVOU9WM0dVcUt6VHpPQVBlMlJTeEVYR1lIT08zRVZ3Y2c1LVZ3aUM5NGVoTmFXUFFISDh6Tk9XbVZYMUpXQTdCdnlHVWlpWDZlaXZoaWdvRGZ0VnBxbzFlbVlPMUhWNktWZVI4c0xmZEtDR3Bydi1LQ2FldDBfaFlOUC03dHVJajh3SHU5Z2hqNHZEb0ZhVkhkT19xZkNYOFBZMk5VWThzWHJHSENsaTNOUtIBwgFBVV95cUxNYVRwc2VzSUNtT2dtU1A2cGIxZEV1U1dlUWtLTDJHV2xzWlJHZUpwZXM2bU5wTlJFR3N1bHBLZXRnNllwQlNvWlRCTmFueU1qejlGalIxZ3kxOHh6WTVpSmR6LUs3Q3dvUDFKYUtTdmxfVVZWVmkxcWdNaEs2VUdDcDVhVTVSRkFyakNVQXJFVjV0V2hTUnpLQVFlUzYyWWw3TXpOU2tLZVZ1TUVhN2pWOTVFR3V4OW5tVjFURXpfRjNTdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1880
    },
    {
      "date": "Aug 14",
      "text": "Israeli strikes kill 11 in southern Lebanon, prompting condemnation from Iran's Foreign Ministry.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1880
    },
    {
      "date": "Aug 14",
      "text": "Iran claims Qatar is holding downed pilots, a claim Qatar denies.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi3wFBVV95cUxOc1FhckE3bmh1REl0TnQxN2NrSUR3YmtmcVpCc3JGVXgtZmFFR1BlU3N3WkJCalRQU3YzS2Y3UDlBMng5X1dSeWpqRExRNWFSS2trSnRRMDdDV1RIM1JtOG51T2dtS3RFUGZxdXhlNTRoNTI5cktkU1JfeFNyNnp0QVFURV9hWG1ySjFxcHhaMU1nSU5qM1RVVklqU2JPVFhLeWFoZGFERWhRQ0NlNTRnb3ZJQmlDN1N4NWR6R3VJbmRaS1pMdUpaU2VyOWF0Ty1hOG9kdTFXQU95X0k0MDJR0gHmAUFVX3lxTFBWaUFRdUFGS3VzOFhtRzQxMHNqS210MzdnRW1MTUQ4R1Iwdm9hSzE2ZDdrYTJUanJnS0tRdXdCZUZ4eGFTdnNqUUUyY2xaSEZ2V3N2eVdwUzNhZHV1aEg5ZjVYTlZsQ1JUOUJPRVRoamEzQlBUMTNvSHp0dk03N2paaEE0NEpoSDJaal9wc21zTzlHNk5WQjhwMXhVYU9USFN2SHJJWFZldHVjREFPY1lHVXE1aGpsVi05cDhaTWpTeE94Z2RKSlJxelczN2E0Vm15eHJuNF9DSGQ2eS11MjhnblhZOC1R?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 1880
    },
    {
      "date": "Aug 15",
      "text": "Shipping faces more disruptions in the Middle East, with a Yemen port suspending operations as the Hormuz stalemate continues.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5jZlpLZGNVVU9BX2JPcU13ZWt1SXZPLWZmaUdhR05fcWdmUmtZMHRTNFZNdUllN2g3MHU0ejRidWVqSVRtUkRwSnlmOFI0U3BPX1FGaXEyQTl1VjVhNTh4Y1BRbU5kUGhvU2JfN1lR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1880
    },
    {
      "date": "Aug 15",
      "text": "Iran strikes another ship in the Strait of Hormuz as Israel steps up Lebanon attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPb2FwQzRGRnQwTjFNbTRBTHNFY3JtRTRNZkZ5T1VYbFBlbzVhNnZqTTlrWEZaN3VzTWpySWVhOFdNNmhmTzdpWnZkY1NVNzFOWUxvakM4RkJmU1JMSWlpN3BTNFA3UHdUbXNiSjVDbjJWdjhQa0p3WFUyNGRXNzZzS3k2SnBWNlRsN1hCN0swYVR4MW5GbDFXM3VZSGF0QjlHbXZyMVZibFdyd3c2Q1Bv?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1880
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
