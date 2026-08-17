export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1956,
  "lastUpdated": "2026-08-17",
  "lastSyncedAt": "2026-08-17T23:50:14.132Z",
  "warDay": 171,
  "summary": "A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.",
  "lastNarrativeUpdate": "2026-08-17",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "Ceasefire language is present across the source mix, but the model should still treat it as reversible under renewed violations or proxy attacks."
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
        "precision": 0.5,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 38,
    "oilDisruption": 62,
    "tradeImpact": 35,
    "sanctionsPressure": 49,
    "globalPressure": 52,
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
      "date": "Aug 17",
      "text": "August 16, 2026 — Kushner meets regional leaders as multiple conflicts roil Middle East",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE40V2dqMUJIcWdndGVfSXlVeDRKbmkzU3hrTTRyeXBrSWR3NGtUNzNkSm54X19kcDNBNzJBaVV0NEJTNVdLVVRrUlNHLXZETnFwMEIyekJhOTduVWxZQWZyVW5WQ0xua1ByTDc0OG1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1956
    },
    {
      "date": "Aug 17",
      "text": "Iran war updates: Tehran, Oman discuss Hormuz; UN delivers West Bank aid",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxPbkJqOHdsTVhuNWRIbk9EdVRDUmQxMlczTmFsRlc4MEdOemNRMEdHUUxJaDZzZUtydUxsMDlyT0c0eXdJZnNOSmx1d0pmakY5enZKSjg3UjBIN1I2dzVieUx1VXcwVFZJbmFsbnZLSTlObXNaY2x4WUxYRERNbXVZaFRNOERTclNFeUhDaVkzdG96Mjh5cDhjbk9XM3JET25HS3BHZXhWMmJSR1hjSEdpWUpHYlJ6R1l3WllrWGhSRdIBxAFBVV95cUxNZFhLVEMyTjcwUGh5MWUwcms1M1ctOHpoeVh2NzlHYnh1aUJ1MWJqb2RqZGZHbGRvSTNyMVE4OGE3X0ZmVU1zM1VkMlpJTEM0V3BSemF4VUw5T0pDdmFad09JdldGenRhUzN4ZGFLZ0ZJMmw2Sm53WUx0WGQ0bHFVOUxMM2F2QnctbC05NWJjdExxcEl2aEZycC10bDU5REMyYWpCelo3b28wZk5PcWItLXZfeEJPbU1YQUtGRGJLMWc2Rmg0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1956
    },
    {
      "date": "Aug 17",
      "text": "Iran war pushes Middle Eastern airlines towards $4.3bn loss in 2026",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxQWGJOWUs3azVwVUgtM3hHaW8xNTJFcFZReHJiUlRKeVM2c0lIY1YyOTBHQXdBUExMZDdLVXRURDFua0Y4b3RBYjBDZTR3Q0VIX2JRMF9KbTZzUlRzWXVTRDBycUVYZEdzRHpWTGxoWml4NVdLVWcyaFRlUE8yVmh0YXdRcmlDaXBxRFpLVnpuczY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Middle East Eye",
      "latestSinceUpdate": 1956
    },
    {
      "date": "Aug 17",
      "text": "West Asia war LIVE: Trump threatens to bomb Oman if they get in way of Hormuz deal",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi3wFBVV95cUxQT3RSdDBxSmg2Qk9ZWTFVTExQeTJxdHVpWGpFUkJ4YUxLWlQzNkxjRTJaWE5uNnA4MVVpeVdDMVo0MnlycVRBVWhacE9pbmppTmoxVmpnRzJNNkhKSjBubDZXWVF3M3JDN0o0b2R0eHM2U2o4Sm43TVNvQWpKRTVEb0d6SGZGSEhhc0ppQUM4a0hESDlnLWcxQzNtTGZzalRHTGIzcU41MXRmSlNjZlhMRTRjMmE4VHdlZndMY0FlN21HV2NWNE1EZGRNX0QtYkZOWkhtQ3ZhQnh1RFBwVm5n0gHmAUFVX3lxTE5xTkJReWpsRmRvSVlqb3U5TEtfbFk2ZkR5VUhiZHlWZkdnLVhNRFdONU9GaGc5bVFaNzRobDhGempJenJYWmhYWk5fSXFDd25IMWpuMGxqb1o4bVljX1VGSU4xMDFEMVh0TWN0TGkzSWFZc1NJTExxeldieUJ0TnZYYlBDRTNNeWhmZGlYeUVvVkRMVVltaGFfcnc1MkFtaGkwSXFQX0NObHFUOVpFYXp6UVdGdGRkNFVwblJmZWYtQWpNZGhORHNRdElZTVZXMjlNYm52TVhMNU9UUW5fSmRUdHBUUmR3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 1956
    },
    {
      "date": "Aug 17",
      "text": "CENTCOM chief meets with troops aboard USS Abraham Lincoln amid morale concerns",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPb2FwQzRGRnQwTjFNbTRBTHNFY3JtRTRNZkZ5T1VYbFBlbzVhNnZqTTlrWEZaN3VzTWpySWVhOFdNNmhmTzdpWnZkY1NVNzFOWUxvakM4RkJmU1JMSWlpN3BTNFA3UHdUbXNiSjVDbjJWdjhQa0p3WFUyNGRXNzZzS3k2SnBWNlRsN1hCN0swYVR4MW5GbDFXM3VZSGF0QjlHbXZyMVZibFdyd3c2Q1Bv?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1956
    },
    {
      "date": "Aug 17",
      "text": "Iran claims Qatar is holding pilots, Israeli strikes kill 11 in Lebanon, and other Middle East news",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOU0NBVmpueWNUWGJ1ckoxSW1wR1dkX0ZHRzk3bWFUcUlGamk0NjBjMEo2LXVRNTlUUkxibVdSbHdLS245VF9Hc2hzbE9JYld3WEt4VnBPSWVwMjFoTlQyc2RSYjdzLU5ZN0FoZ1dSaVVGUGIwbU1XbzlCY256ZnloUFBuNnlPakV3RFlFWHpqRERKa3lIblRReG80R1hyN1RCczFLdXYtRmJQNlo3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1956
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
