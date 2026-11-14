export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2735,
  "lastUpdated": "2026-11-14",
  "lastSyncedAt": "2026-11-14T15:00:00.000Z",
  "warDay": 260,
  "summary": "Ongoing conflict in the Middle East sees escalating tensions between Iran and Israel, with attacks in Yemen and Lebanon, and significant disruptions in the Strait of Hormuz, while diplomatic efforts and US policy shifts are also noted.",
  "lastNarrativeUpdate": "2026-11-14",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 2,
    "summary": "No active ceasefire or de-escalation agreement is currently in effect."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 85,
    "oilDisruption": 75,
    "tradeImpact": 69,
    "sanctionsPressure": 64,
    "globalPressure": 81,
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
      "date": "Nov 12",
      "text": "Qatar and Turkiye ink a defence deal amidst regional tensions.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxNeVhIczJQNi1UUS15LTAydjVtUVdrRE1VZE9JeE9xWnA2QkQ1cEhHVDJTd1ZGOWVUOGJxcU1IVUdrSU13TlFURnhkRlNBN1R6bncwNkU5cEx5c1NpT0JUOVNvaDU2c29HTm9ZbHhYRkxEZXRVNmRudEM3djVLSW1kanFBVkFuZUUxc2x6S2RHQndVOGdKQmtCOW51dmw4dG5DaVFNUkNlcUZ3QWJCcTlMd0wyWWNFTW05c0NXb2FVRjNlUdIBxwFBVV95cUxQUU9BNk5pckJ5OXRnem1acFdCcl96QjVRMDFrb3h2V3hfdFd2QjNyNTN6VDBrZlRrcWlrZFFsUnlDR2J6Qm1mNDZVU1JfUFhTQ0NELUQwWlhXa09jbmlzS3BFNUE4a3NySHdCRER2bmctbjZUTW9leFNXMG45WjVlQzdJY050d2tsSGpaZ080ZmZIMEhqZDFzMDNwd0w1emQ2b1Rmelc1REFuLVBUM3gxU3ZiTWVnYXJDLXdROWZLRTlCdFdoblBJ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2735
    },
    {
      "date": "Nov 12",
      "text": "Fighting continues to rage in Yemen.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2735
    },
    {
      "date": "Nov 12",
      "text": "Houthis claim attacks on Saudi energy and military facilities.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNS2phdFZaNlJPanNFWWhnT3k1YUo3TEVYMGNsX0Y2RlpMc2hiSjNtZk1IamxKLV82NEN0QUwzTFBJSDJsTkhrWGR2bW8wSkFFYzYyN3hEYzFOakRxbE54TmdmaG1jV3d5LTBDNEFUeGJZTGNjVXVnek5fQWVKMzBTQ0NKeU9Rdkw1eFNiRzVIdF9aalRKYUhSRURFX3VYNHM0X3BTbzZ4QTBPV2xfdjZ0X0JyWnIzMlhKQXQw0gHAAUFVX3lxTE0tNl9ERkJVWm5peERxTmJKRGtNeFdIQlQtdFE0SWNQRFBfQm55cEJjTDFMeWV5YnNkVm1KQ0tFRjA2cGNqVGI2QTYyZ2twOUxyWldILUtpWDJ6VE5VSVlMbTdCUTRCY0pranR2NV9xVFJVRTJqcHdrajZqRUtJbFVBMTlZV29qUWJPV3JONmZia191TDk2WWVXUThCSzd1VUFsdTIyV3ltaVJGS1lvVUx1dWpTMWNGakhVWW42WmJvdA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2735
    },
    {
      "date": "Nov 12",
      "text": "Iran warns of expanded retaliation as Israel reportedly prepares for an attack.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxNaGV6WFJxeUNSa0ZVZFFWdC1mUGJUbEtIZldwSjJDWGQxUnFodTZ5akhnY010WTRLMXYtNjh5akpyczZkNjg1LXlUUnlQakJ5WmxORm9xQ0M4ck81WU9WWlhHU0x5WU1neXJrbTU0ZDRtd0JWa01TUTdRNjN1SDZfUkRObDg1dmJySkR3THpuaWh1TU94NVVMSHBJbEZ6VHNWUTlCNC1tTklKWFZlLXBvTHJWVkRtZ9IBuwFBVV95cUxPNmpBLWlIVTN1aUhtZ3R0amt5bWlCWGliV19MV2x5WExRRndaY2o0Nmc3cjVnZnFhX0Y3ZzVRMzBoQV9lZnctRWNiSlZ4LUtMV0JYVEVqaWpwSHo0STQ5Qzc0V0ZmMGlEZDBDNlduRVp2TUx1TjhURlRKYXdzS1N3Z1FKZ3ZJQjBTbGxyOW9tVHJaWXpDZkFqY0pEbVNEaDVkOUNmVmdoUFpQQTJTQnktZU94d3JMVm1iNFVR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2735
    },
    {
      "date": "Nov 12",
      "text": "Coalition forces down two Houthi drones.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2735
    },
    {
      "date": "Nov 12",
      "text": "Five ships reportedly hit mines in the Strait of Hormuz, with Iran stating three oil tankers were affected.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxQeU5UZDJHMEc4OWsycksxeTkxZEs1R2s4clJCbG5wR2tMS3lyLWpsZU8zY1pFajlxSWtoeW42YzNxR0RZbTgyenlZYUFfQ3pBdzFiUDgwSEFWR1JZaGwta2hsZy1TMm15eHdrZm1OMmdpcXhBdzl3RDdPUnFiOFNsYXRjX2VVTHc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 2735
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
      "perspective": "Iranian Defiance",
      "headline": "Iran Escalates Threats and Actions Amidst Nuclear Ambitions",
      "summary": "Iran warns of expanded retaliation, threatens unlimited response, claims targeting US radar, and continues to rebuild its nuclear program. Its allies, the Houthis, have also attacked Saudi facilities, indicating a broad confrontational stance.",
      "tone": "defiant",
      "latestSinceUpdate": 2733
    },
    {
      "perspective": "US-Iran Standoff",
      "headline": "US Denies Attacks, Trump Rejects Deal Amidst Heightened Threats",
      "summary": "The US denies Iranian claims of attacks on its radar in Bahrain, while former President Trump publicly states 'no deal necessary' with Iran. This indicates a firm US posture amidst ongoing threats, with US cabinet members reportedly living on military bases.",
      "tone": "strained",
      "latestSinceUpdate": 2733
    },
    {
      "perspective": "Israeli Preemption",
      "headline": "Israel Prepares for Strikes as Iran Rebuilds Nuclear Program",
      "summary": "Israel is reportedly ready to resume strikes on Iran, citing concerns over Iran's efforts to rebuild its nuclear program. This comes amidst internal Israeli political shifts, adding complexity to the regional security landscape.",
      "tone": "anxious",
      "latestSinceUpdate": 2733
    },
    {
      "perspective": "Regional Instability",
      "headline": "Middle East Sees Broad Conflict and Security Incidents",
      "summary": "Fighting rages in Yemen, Houthis attack Saudi facilities, and a defense deal is signed between Qatar and Turkiye. Lebanon experiences military action against Hezbollah, and a tanker fire occurs in the Strait of Hormuz, highlighting widespread regional tensions and security concerns.",
      "tone": "anxious",
      "latestSinceUpdate": 2733
    }
  ]
});

export default LATEST_SNAPSHOT;
