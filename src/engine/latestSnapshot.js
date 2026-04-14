export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 153,
  "lastUpdated": "2026-04-14",
  "lastSyncedAt": "2026-04-14T11:40:22.508Z",
  "warDay": 46,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-14",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.93,
    "durationDays": 1,
    "summary": "No active ceasefire is in effect, though Lebanon seeks peace and envoys are set to meet amid ongoing Israeli operations against Hezbollah."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
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
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 38,
    "oilDisruption": 90,
    "tradeImpact": 56,
    "sanctionsPressure": 49,
    "globalPressure": 57,
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
      "date": "Apr 13",
      "text": "US military blockade on Iranian ports in the Strait of Hormuz takes effect.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTE4tQVFtT3lHMmxsRlhMRklHUi1YcnJ0c29mSFNrOFhOSFZlUEhLdzRGYkpiNTJVZmJFQW5YdXR6Y2xCZTdrN0czWnBmOGo4M0t4QUUxZWxzRUVtYkdZeTJTRGZvTDJDSy1LV3gtSVY0TUg0eXg1UTg3VVI4VQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 152
    },
    {
      "date": "Apr 13",
      "text": "Iran warns the US blockade of the strait will have 'widespread consequences' and threatens 'strong responses'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxPY3YtWWJnVW54ZDFoaFBUM2hBZXQzT0tsV3d2MnZEbVlSX0Zsck5hWnd5bndqYmVEckwwTW83dGpQSm0zZzZ4X1ljSmI5V1FQc2s3aVcxYW9vQzI1cGVxNFFtY19HNEhZbHo2VEtYRW03YmlDMklSc1drUFJIMTlwYllxcFd5U3VHZGE3Ny11Nk93VmFUZC1PcUVLcUJmNHRtMnBvNTRaWldWOVpCQmJqRHhCaHpHdE8xTzRTb19PUVlHajFRSzJJWThYQ0w?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 153
    },
    {
      "date": "Apr 13",
      "text": "US-sanctioned ships reportedly pass through the Strait of Hormuz despite the blockade.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 153
    },
    {
      "date": "Apr 13",
      "text": "China calls the US blockade of the Strait of Hormuz 'dangerous'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxQN1RJR1g3TDBBOE5pNDRKR0FWQnUxS2RUeXpQMlFVWERhRHIxU2doMnFEUjRHelJfeERuM0tOV0h6ZTFtMXY1cjAwUWg4bm9lU2trcTJVcjdEWmlOS2swUUV5bHJLSE14ZHBZVVphZS1aU2t4OUJQU01QUjdTNkg4T1hBVFA2emNOTUF6Y0t5eTJJSXlobjlFS3FZQWRDYW14MkVjcVdEWkRFNTlPc3ZiaGw2VEVGVUNjaXczbA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 153
    },
    {
      "date": "Apr 13",
      "text": "Israel continues its war on Hezbollah as Lebanese and Israeli envoys prepare to meet for talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxOOVJIXy1WTDBQbHBhM3FlYXJKY01SaGRZSnRmdXYzeGxGYzB1TEVzbjNud1lYUG5PMjJiNHoxS2tfTDhfNzk5TnF2bGhpTU1lejRPUHVfUklvUnFfX1BuYXpxakg4eHVBdWpTM25xZkl0WW9leGREaGU3S1V5ZGVIc0pUMXJqX2pqdGtGRDNCV3R3b3BQbUdkSVVvVmpIblpwY0RLdU45T0hhcHV0LUlfNw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 153
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
      "perspective": "US/Trump Administration",
      "headline": "US asserts dominance with Hormuz blockade, seeks deal with Iran.",
      "summary": "The US has initiated a blockade of the Strait of Hormuz, with President Trump claiming Iran is open to a deal despite public statements to the contrary. The US views the blockade as a necessary measure against 'economic terrorism'.",
      "tone": "defiant",
      "latestSinceUpdate": 147
    },
    {
      "perspective": "Iranian Government",
      "headline": "Iran warns of strong responses to US blockade, rejects negotiations.",
      "summary": "Iran has warned of strong responses to the US blockade of the Strait of Hormuz, with its minister stating no intention of negotiating for now. Iranian officials are trading threats with the US following the blockade's implementation.",
      "tone": "defiant",
      "latestSinceUpdate": 147
    },
    {
      "perspective": "Hezbollah/Lebanon",
      "headline": "Hezbollah rejects US-led peace talks, urges Lebanon to withdraw.",
      "summary": "Hezbollah has publicly rejected US-led peace talks with Israel and called on the Lebanese government to pull out of negotiations. This stance comes as Israel's war in Lebanon continues and IDF plans for further conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 147
    },
    {
      "perspective": "International Experts",
      "headline": "Hormuz blockade seen as major military undertaking with high stakes.",
      "summary": "Experts view the US blockade of the Strait of Hormuz as a significant military endeavor with potential for further escalation. The move is expected to have major geopolitical and economic implications.",
      "tone": "anxious",
      "latestSinceUpdate": 147
    }
  ]
});

export default LATEST_SNAPSHOT;
