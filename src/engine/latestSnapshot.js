export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 886,
  "lastUpdated": "2026-06-06",
  "lastSyncedAt": "2026-06-06T12:13:37.488Z",
  "warDay": 99,
  "summary": "The conflict in West Asia continues with active exchanges of fire between the US and Iran, Iranian missile and drone attacks on Gulf neighbors, and a highly fragile ceasefire situation between Israel and Lebanon.",
  "lastNarrativeUpdate": "2026-06-06",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 3,
    "summary": "A ceasefire between Israel and Lebanon is highly fragile, frequently violated by active strikes, and rejected by Hezbollah despite attempts to renew it."
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
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Jun 05",
      "text": "Iranian missiles targeted Kuwait and Bahrain following a US-Iran clash.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxOZDNOM0N5RlRpQVgzS3JNR3FFVmluU2w1dk0tRDRnRzg1UHhSbDVkNVd2aHlkSXBZc0l0MHdjcENyX3NUN3E4RTViUGxfVmNGZFFGeEN6ZGVTMWlXOFlKanZhN1ZfdE54Ykxhd3J1SkFqZ2RuVUJCN2RXZUxqZC00LTFQNUlLdkUzbzhhYzFqLWhPdmg1SjBYQUVDS2hxaVprLThyYkVWUHEydnpUbnZGU08yMUhOOXPSAbwBQVVfeXFMTWVNMkFzNGlmOXQzSTA2TDR1VmpJLWZTMlFrR193XzBQWnl5V3JWSlpLb1dDV21CdzEtSU1lSTJScDI4WC1GcDNOQ2YwdGJKR2pObzRtZHNPRnhRYTRmTkwtMmlIU25HTXpiU3hKbFRGUTlVa0FjVXp6aW9DVVBzTUY0c0JtWTVzY1YyYmVqcEZJcGdOR2ZiWUhhN0o3X19BMk5IaG5KTmsxVWFwWE9ldEY3cW9nYWlYcDg5UHQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 886
    },
    {
      "date": "Jun 04",
      "text": "The ceasefire in Lebanon frayed as Iran warned of a wider war.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 886
    },
    {
      "date": "Jun 04",
      "text": "Israel and Lebanon agreed to renew a ceasefire, but Iran launched a deadly attack on Kuwait airport.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxNWmVQTjduVEoyLVF3Ym84c25PRXR5dmFoMjlXUy10N3NMYjlEbWxoS0JtSW9Oc280eXRqWVNDOEZZLW1OWXRFdEVwUFl2NXNjSWVTdjNjOXpBcXZ1QUVjZEpiREZEM25YUlVlR1M0UTBUWVF0cVZGaUE4dzQ1cVZvTWFaREh0czBnX2Y5YXY1Mi1Ic3BOSGpRTXROMFhoSWtYU0dDYw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 886
    },
    {
      "date": "Recent",
      "text": "Iran fired drones toward the Strait of Hormuz, with the U.S. military shooting down at least four.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 886
    },
    {
      "date": "Recent",
      "text": "The U.S. and Iran traded another round of fire in the Gulf.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 886
    },
    {
      "date": "Recent",
      "text": "Hezbollah rejected a US-backed Israel-Lebanon ceasefire proposal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBDX19HLUpiZ2wzMzJfd0VNaUxxazNlXzJXMkRrM2tkUkk5MmtVYllkUUZSWWR3d2RydXRNSzdKdHRqQ281Mkk5ZWpRamlrM3lqTll5LWNQQW5rUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 886
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (16 headlines)"
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
      "perspective": "Iran/Hezbollah",
      "headline": "Hezbollah Rejects Truce Amid Continued Iranian Strikes",
      "summary": "Hezbollah rejects ceasefire agreements and Iran reports stalled talks, while continuing military actions including drone launches and attacks on Gulf neighbors. Iran criticizes Lebanon's president amid Israeli attacks.",
      "tone": "defiant",
      "latestSinceUpdate": 882
    },
    {
      "perspective": "Israel",
      "headline": "Israel Continues Attacks, Faces Drone Challenges",
      "summary": "Israel continues its attacks in the region, facing criticism from Lebanon's president and challenges to its defenses from Hezbollah's advanced fiber-optic drones. Efforts for a Lebanon ceasefire are ongoing.",
      "tone": "strained",
      "latestSinceUpdate": 882
    },
    {
      "perspective": "United States",
      "headline": "US Engages Iran in Gulf, Congress Limits War Powers",
      "summary": "The US military actively intercepts Iranian projectiles and exchanges fire in the Gulf, testing the limits of a ceasefire. Domestically, the House votes to limit presidential war powers regarding Iran.",
      "tone": "anxious",
      "latestSinceUpdate": 882
    },
    {
      "perspective": "Global Energy",
      "headline": "Strait of Hormuz Closure Threatens Oil Supplies",
      "summary": "Concerns rise over dwindling oil supplies and the Strait of Hormuz remaining mostly closed due to ongoing conflict. The situation poses a significant threat to global energy markets.",
      "tone": "anxious",
      "latestSinceUpdate": 882
    }
  ]
});

export default LATEST_SNAPSHOT;
