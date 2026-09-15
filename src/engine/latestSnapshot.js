export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2424,
  "lastUpdated": "2026-09-15",
  "lastSyncedAt": "2026-09-15T19:03:41.424Z",
  "warDay": 200,
  "summary": "The war between the US, Israel, and Iran continues, marked by significant US military losses, rising costs, civilian casualties in Tehran and Yemen, and Houthi attacks on Saudi pipelines driving oil prices higher, amidst mixed signals regarding peace talks.",
  "lastNarrativeUpdate": "2026-09-15",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect, with ongoing hostilities and Iran balking at renewed peace talks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 80,
    "oilDisruption": 85,
    "tradeImpact": 76,
    "sanctionsPressure": 63,
    "globalPressure": 82,
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
      "date": "Sep 14",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighborhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2424
    },
    {
      "date": "Sep 15",
      "text": "Pentagon reports US military facing munitions shortfalls and aircraft losses, with war costs exceeding $33 billion.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2424
    },
    {
      "date": "Sep 15",
      "text": "Houthi attacks on Saudi pipelines have sent oil prices higher.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2424
    },
    {
      "date": "Sep 15",
      "text": "IDF warns Hezbollah is regrouping and studying Israeli activity to mount significant attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiXEFVX3lxTFBCekI0emlxWmFuNG4wZmhwRUZDMEFEcTVwdzJDVVAwcHhNZEt4SUtwaHdJMzNXS2d3UUxoRUlvdGkzRDRXMDhtNWpFQzg5OVBYUVFzenVFeVlsRC1S?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 2424
    },
    {
      "date": "Sep 15",
      "text": "Trump signals renewed openness to peace talks, but Iran has balked at the offer.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2424
    },
    {
      "date": "Sep 15",
      "text": "U.S., Israeli and Arab military chiefs held a secret meeting on Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQYzZVZGtBRi1nRFVZY1Y5WEhWQnFKLWdYYmc4akRHQ1RoRWlmaDRkc0NSLTdxY1BIVl9lSUl6VkNkeUQ5S3Z4ZWRSYTRjV1B0YUp1NEZuNWZYRDRJalQ2MmVMbGVoSmNhMFBBdkRWZmtlbzNIbnVkajRTMmFLblhkdkVHOUVJU0xMODlfRlRMZl9mWkVIb1hlS2ZmRFRoUTg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 2424
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
      "perspective": "Escalation & Regional Risk",
      "headline": "Iran-Israel-US Conflict Escalates Regionally",
      "summary": "The conflict between Iran, Israel, and the US is rapidly escalating with direct military actions and widening regional involvement. US-Israeli strikes on Tehran and Iranian missile attacks across the Gulf indicate a dangerous expansion of hostilities.",
      "tone": "anxious",
      "latestSinceUpdate": 2420
    },
    {
      "perspective": "Oil Market Instability",
      "headline": "Oil Markets Disrupted by Middle East Conflict",
      "summary": "The conflict is severely impacting global oil markets, with an oil tanker explosion in Hormuz and the shutdown of a critical Saudi pipeline. These events have driven oil prices beyond $100, highlighting significant supply chain vulnerabilities.",
      "tone": "anxious",
      "latestSinceUpdate": 2420
    },
    {
      "perspective": "US War Costs",
      "headline": "Iran War Strains US Military Resources",
      "summary": "The ongoing conflict in Iran is straining US military resources, leading to munitions shortages and damage to facilities. The downing of a US Air Force officer underscores the direct human cost and operational challenges faced by the US.",
      "tone": "strained",
      "latestSinceUpdate": 2420
    },
    {
      "perspective": "Lebanon Front",
      "headline": "Israel Counters Hezbollah in Southern Lebanon",
      "summary": "The situation in southern Lebanon remains tense with Israeli forces actively countering Hezbollah encroachment and destroying bases. This ongoing conflict contributes to displacement and regional instability.",
      "tone": "strained",
      "latestSinceUpdate": 2420
    }
  ]
});

export default LATEST_SNAPSHOT;
