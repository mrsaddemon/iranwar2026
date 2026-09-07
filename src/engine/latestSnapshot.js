export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2366,
  "lastUpdated": "2026-09-07",
  "lastSyncedAt": "2026-09-07T05:58:25.899Z",
  "warDay": 192,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-09-07",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect, with direct military engagements between the US and Iran and escalating clashes between Israel and Hezbollah."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
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
      "date": "Sep 07",
      "text": "Iran to announce new Hormuz shipping route in coming days.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNWEx0eDJjS1ZhZmlrQm81R0JkSXFYTG1HeDVRTHY2VFNVa3RKaXl4YThfbjAxWnhoNGlsZTM2UFUzbmk2WTB4dWtMcFZnWDRFb204bXJJRXYzbXVnbjBPdEVzTHpwc3UtVEk4cDBtQW9meTdNTTFGZGx5cVRqVWFZYS13anZZZGszd3J0UGlQdkRxdTN5LU5YOUJwQkxUdFNJNkZxSV81RTF3Y3htTTZZY1hIVTdwMnREd2JBTWhnd9IBxAFBVV95cUxNU0twWmhxcUJXelhrV0xFeWVxWlBWZkFMRmozVXc0Tmx5WGlkRFlad3BMRXptUTZ3OE5VUTFuZkhiQzBGNklFMUlidkg2TmxOTG5PRm9jRXExZ29rNkd4cEFoWjhVblg5VnFJYjJyVUtfbWZ4b0JRNjl2ZUdBSVRtRVhqRUtnYkdHanRPcmJqdXRYRWViYUVhNVk2YXdEdzJ0NTU2MmhLcHJnQ1JDNTlteHhzSWY1S3ZzbjdfTVpvMU4zS2Uz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2366
    },
    {
      "date": "Sep 07",
      "text": "Iranian tanker sinks in Gulf of Oman after US strike, Centcom says.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxPNnd2SnpjYTk3bmppTE5TQ1pIY3RGSXJKT2xLV25rcVBZRHlScWpmUWlnQTZQUXNhSHprYUZrbkUxTVR3SE9hZWdyeHlhUzVOYTdnZ3ZFeGhzWGpOOHZuLWdnX25fLVpxbjZsa3NrZnNXM3RRLVhXcjBaekltdHByOVQtaDN5ZTI0djRqSkZwSDlKYkhWWUs1VS1LQ0Rwa0U1eVA4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 2366
    },
    {
      "date": "Sep 07",
      "text": "Iran vows 'more painful response' for US, Trump sinking 3 oil tankers in Hormuz Strait.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxPcVRCUTJDbU1rM3VXMlV0U0lONk81WDlCendLTXVDTnBJc1JWamJfdDJtVzhOeFJxVnVHeWo5SnJ5WVkyQThNS2FDVmhSaDUzQnMzbGFRUVpEdDdmQ0V1X3pGMlFNMnVQdElab0dqNGNobzRSMGQxeGdPWEVYNVR3WE1FVXcwdTVzbzNyaWN1RTJiTmg2a1NMSFBBWTZPb05oYWRwV2NR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 2366
    },
    {
      "date": "Sep 07",
      "text": "Iran vows to extend ‘exclusion zone’ near Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxOcG1BYUJ4RVpoVElpdzBtc1VBZHg0QkFtMnk5S21lbmZFNmt3MHZNM25ZQi1vVDh2Y2RwSnJ0aEdZX0I0N2hIVmVQUExfMmxVUkZuVTNaUjgwXzZSV0tNVFhjdVFMODh4OXRLc3AtZ0pVQU5uTWZKVzhaNDRtRGZHTjd1MjQybzliTHBsYURHZFd2MmxLdXI1S19ZR1hMeFZSUkVDSzdPNFA3dDRSaFI2c1VlQmQ4NmM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 2366
    },
    {
      "date": "Sep 07",
      "text": "US military strikes three Iranian tankers in retaliation for missile attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMidkFVX3lxTE9tVlZfRVpnZHk5LUZINnd1bUh0Mkp3N3FoU3ZpT1Rad3ZwbzU2SllpNEUzeFpjdms2SWI4MWFCSVU4S2JtQ3BRTUNRQ01ybWprRmFybkNUdDk4TWxtZTFiWV9CQzJha0JWdlh0XzhHUzJSa2hEQkE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2366
    },
    {
      "date": "Sep 07",
      "text": "Israeli strikes kill seven in southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixwFBVV95cUxPNi1QZjVMMzI3QlpNZ2pKMVNjZFNqU2RWb093aGtUS3ZmZWdBNHNjbXFMdVZZS2NkMnd3cWlQZlVqenBlRGpQdkFJSjNuMU5wVlNCa1pqNXVzV0NIRVFGc3Z6bGpMZXp3dzc1Y3dfM2xTNnZCSi0weHFlMUtaZG0yS2p6S2ZhWXRUeS0xYkFOOE5vLUlYaFJnMy1KdGh0ejFDbEpzOFRlaEs2ZG1ZY09hUW05WjhYYVBndHBtVjFIQ0szMVVOVzc4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2366
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
      "perspective": "Iran's Stance",
      "headline": "Iran Threatens 'More Painful' Response, Asserts Hormuz Control",
      "summary": "Iran asserts its right to respond to U.S. attacks with 'more painful' measures and plans to establish an exclusion zone near the Strait of Hormuz, while also claiming a strike on a U.S. ship. This indicates a defiant posture and an intent to control strategic waterways.",
      "tone": "defiant",
      "latestSinceUpdate": 2365
    },
    {
      "perspective": "Israeli Security Concerns",
      "headline": "Israel Warns of Major Iranian Attacks, Conducts Strikes",
      "summary": "Israeli intelligence suggests Iran is rebuilding its 'axis of resistance' and planning a significant 'October 7-style' multi-front attack, leading to Israeli retaliatory strikes in southern Lebanon. This highlights a perception of imminent and severe threats from Iran and its proxies.",
      "tone": "anxious",
      "latestSinceUpdate": 2365
    },
    {
      "perspective": "US Military Engagement & Internal Issues",
      "headline": "US Strikes Iranian Tankers Amidst Internal Military Challenges",
      "summary": "The U.S. military has conducted retaliatory strikes on Iranian tankers, indicating direct engagement, while simultaneously grappling with internal challenges such as a major leak hunt and criticism regarding military leadership. This suggests a complex operational environment with both external actions and internal pressures.",
      "tone": "strained",
      "latestSinceUpdate": 2365
    },
    {
      "perspective": "Global Shipping & Conflict Duration",
      "headline": "Hormuz Traffic Plummets as War Expected to Prolong",
      "summary": "The conflict has already led to a 95 percent drop in traffic through the Strait of Hormuz, significantly impacting global shipping, with warnings that the war is likely to continue for at least another six months. This narrative focuses on the economic and logistical consequences and the prolonged nature of the conflict.",
      "tone": "skeptical",
      "latestSinceUpdate": 2365
    }
  ]
});

export default LATEST_SNAPSHOT;
