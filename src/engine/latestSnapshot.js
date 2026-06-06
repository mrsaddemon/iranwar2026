export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 885,
  "lastUpdated": "2026-06-06",
  "lastSyncedAt": "2026-06-06T11:06:46.357Z",
  "warDay": 99,
  "summary": "Ongoing military exchanges between the U.S. and Iran in the Gulf region, alongside a fraying ceasefire between Israel and Lebanon, mark a period of heightened regional tension and warnings of wider conflict.",
  "lastNarrativeUpdate": "2026-06-06",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 3,
    "summary": "Attempts to renew a ceasefire between Israel and Lebanon are met with rejection by Hezbollah, while a broader ceasefire between the U.S. and Iran is actively being tested by ongoing strikes."
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
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "Jun 05",
      "text": "Ceasefire in Lebanon frays as Iran warns of wider war.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxNa3p2Mk13TlJHN1BKSVRWTWJjZHBRMUtqZlVIa1psMzNxY1BublNGZ2Y1eUY4NUhReHo0bFNrZllNZTduUHVjbEVoWXk4ajZzVDJLNGFiTXVaVHR3NDcwOGhwRVAyRG5zb1RSZXpCRklIS0p0NTU3T29TdHVUbDBKa293SFpPV2Zf?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 885
    },
    {
      "date": "Jun 05",
      "text": "Iranian missiles target Kuwait and Bahrain following a US-Iran clash.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxOZDNOM0N5RlRpQVgzS3JNR3FFVmluU2w1dk0tRDRnRzg1UHhSbDVkNVd2aHlkSXBZc0l0MHdjcENyX3NUN3E4RTViUGxfVmNGZFFGeEN6ZGVTMWlXOFlKanZhN1ZfdE54Ykxhd3J1SkFqZ2RuVUJCN2RXZUxqZC00LTFQNUlLdkUzbzhhYzFqLWhPdmg1SjBYQUVDS2hxaVprLThyYkVWUHEydnpUbnZGU08yMUhOOXPSAbwBQVVfeXFMTWVNMkFzNGlmOXQzSTA2TDR1VmpJLWZTMlFrR193XzBQWnl5V3JWSlpLb1dDV21CdzEtSU1lSTJScDI4WC1GcDNOQ2YwdGJKR2pObzRtZHNPRnhRYTRmTkwtMmlIU25HTXpiU3hKbFRGUTlVa0FjVXp6aW9DVVBzTUY0c0JtWTVzY1YyYmVqcEZJcGdOR2ZiWUhhN0o3X19BMk5IaG5KTmsxVWFwWE9ldEY3cW9nYWlYcDg5UHQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 885
    },
    {
      "date": "Jun 05",
      "text": "Iran fires drones toward the Strait of Hormuz, with the U.S. military shooting down at least four.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 885
    },
    {
      "date": "Jun 05",
      "text": "U.S. and Iran trade another round of fire, with talks reported to be at a 'deadlock'.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 885
    },
    {
      "date": "Jun 05",
      "text": "Hezbollah rejects a US-backed Israel-Lebanon ceasefire proposal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBDX19HLUpiZ2wzMzJfd0VNaUxxazNlXzJXMkRrM2tkUkk5MmtVYllkUUZSWWR3d2RydXRNSzdKdHRqQ281Mkk5ZWpRamlrM3lqTll5LWNQQW5rUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 885
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
