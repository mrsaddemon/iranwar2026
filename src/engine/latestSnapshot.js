export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2361,
  "lastUpdated": "2026-09-06",
  "lastSyncedAt": "2026-09-06T17:40:21.498Z",
  "warDay": 191,
  "summary": "The United States and Iran are engaged in retaliatory attacks on ships, including oil tankers, causing a significant disruption in the Strait of Hormuz, while Israel conducts strikes and clears tunnels in southern Lebanon.",
  "lastNarrativeUpdate": "2026-09-06",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is currently in effect as direct military engagements continue between US and Iranian forces."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 55
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Sep 04",
      "text": "US military strikes three Iranian tankers in retaliation for missile attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMidkFVX3lxTE9tVlZfRVpnZHk5LUZINnd1bUh0Mkp3N3FoU3ZpT1Rad3ZwbzU2SllpNEUzeFpjdms2SWI4MWFCSVU4S2JtQ3BRTUNRQ01ybWprRmFybkNUdDk4TWxtZTFiWV9CQzJha0JWdlh0XzhHUzJSa2hEQkE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2361
    },
    {
      "date": "Sep 04",
      "text": "Iran slams US attacks on oil tankers and vows to respond.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOOWlQcFdRT0RveGtRSkc0aV83RTdSZzlHVzhuVkhuT3NvRE5HNFl1Mm05a1JEMWlHY1pRemp4ZkVnV3BYcHNXUUozdmtwYWxXc1RLcGtDVHF6ajU0aVgxMkl2ekFwdDM2UFNRTFpTT3RSbHktcl83S2tJbENLeXdmWkdfRDNYSWlrLXFEUWM3ak9uYmNzM01tNkNNbF95M3ZRREZPWUNrOWVqTWtGY2QxdU9OaHpzdnRNcHE2M9IBwgFBVV95cUxPSTRJbTVhakNqQTFMV3B1RDd0YXRETHR3WHNhOTZEX2FFMUtLVmlNQUlHQzJOLUhQdlNWeXFXLWdkamtsM1NoMDYwWXd4SEtKb2dzUmVVYzQxUEtSS2ZlM1IzRmtfemFpckc3MFdjNGhjSDRlMG5TVHR4d3dJejlVSXdDaHBzWkdWZmlZRWlRNVZNNEc2eHhrOVp1eFZ5bDBWWV9IZXA3YUV1aVhITFA5dkc0OExyZjBOeDJNMDlfel84UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2361
    },
    {
      "date": "Sep 03",
      "text": "Iran claims a strike on a US ship in the Strait of Hormuz, but the US denies it.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxNeVFldUZselU5Y1lBOWdOZDRBTF9PN2h5Y0RoVG04ekVkZmFXS1J5MHFEaFZvZC0tcXJXeG0zMDZzQXdnWWE1NWlXNGxDUGM3MVFYWE9tNWZhRUJlaFJheFBTcFQzN0g2LUdFUGEwZWhtZU5VQTVaSDE3cTVKRUtUWnBNalZmN1F2QjlfTXdfLV9QZnVrSUlJaDFrUmU2SW5wRW1Oejdn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "WTOP News",
      "latestSinceUpdate": 2361
    },
    {
      "date": "Sep 06",
      "text": "Shipping traffic through the Strait of Hormuz has seen a 95 percent drop.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2361
    },
    {
      "date": "Sep 06",
      "text": "Israeli strikes kill seven in southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixwFBVV95cUxPNi1QZjVMMzI3QlpNZ2pKMVNjZFNqU2RWb093aGtUS3ZmZWdBNHNjbXFMdVZZS2NkMnd3cWlQZlVqenBlRGpQdkFJSjNuMU5wVlNCa1pqNXVzV0NIRVFGc3Z6bGpMZXp3dzc1Y3dfM2xTNnZCSi0weHFlMUtaZG0yS2p6S2ZhWXRUeS0xYkFOOE5vLUlYaFJnMy1KdGh0ejFDbEpzOFRlaEs2ZG1ZY09hUW05WjhYYVBndHBtVjFIQ0szMVVOVzc4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2361
    },
    {
      "date": "Sep 06",
      "text": "Israel says it cleared tunnels to a strategic Hezbollah fortress in Lebanon.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2361
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
      "perspective": "US/Trump Administration",
      "headline": "Trump asserts strong stance against Iran, preventing energy crisis",
      "summary": "The Trump administration claims its military actions and diplomacy have prevented a wider energy crisis during the Iran conflict. President Trump has threatened further strikes and suggested renaming the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 2348
    },
    {
      "perspective": "Iran",
      "headline": "Iran retaliates for US strikes, seeks to break Hormuz stalemate",
      "summary": "Iran views its recent actions, including firing on Gulf neighbors, as retaliation for US strikes, particularly after a wedding was reportedly hit. Iran aims to challenge and break the current stalemate in the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 2348
    },
    {
      "perspective": "Regional/International Concern",
      "headline": "Fears of renewed war and shipping disruption grow",
      "summary": "International observers express significant concern over escalating US-Iran hostilities, the impact on critical Gulf shipping routes, and the ongoing Israel-Hezbollah conflict. Some nations, like South Korea, are pushing back against calls for military deployment.",
      "tone": "anxious",
      "latestSinceUpdate": 2348
    }
  ]
});

export default LATEST_SNAPSHOT;
