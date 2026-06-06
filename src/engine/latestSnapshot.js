export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 883,
  "lastUpdated": "2026-06-06",
  "lastSyncedAt": "2026-06-06T07:25:54.925Z",
  "warDay": 99,
  "summary": "Multiple ceasefires in the West Asia region are fraying or being rejected, with US and Iranian forces exchanging strikes and Iran warning of a wider conflict.",
  "lastNarrativeUpdate": "2026-06-06",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "Despite an agreement between Israel and Lebanon to renew a ceasefire, Hezbollah has rejected the truce, and US and Iranian forces continue to exchange strikes in the Gulf."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.6,
        "aggression": 0.7
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
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 75,
    "tradeImpact": 55,
    "sanctionsPressure": 54,
    "globalPressure": 63,
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
      "text": "Ceasefire in Lebanon frays, Iran warns of wider war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxNa3p2Mk13TlJHN1BKSVRWTWJjZHBRMUtqZlVIa1psMzNxY1BublNGZ2Y1eUY4NUhReHo0bFNrZllNZTduUHVjbEVoWXk4ajZzVDJLNGFiTXVaVHR3NDcwOGhwRVAyRG5zb1RSZXpCRklIS0p0NTU3T29TdHVUbDBKa293SFpPV2Zf?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 883
    },
    {
      "date": "Jun 05",
      "text": "Iranian missiles target Kuwait and Bahrain after US-Iran clash.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxOZDNOM0N5RlRpQVgzS3JNR3FFVmluU2w1dk0tRDRnRzg1UHhSbDVkNVd2aHlkSXBZc0l0MHdjcENyX3NUN3E4RTViUGxfVmNGZFFGeEN6ZGVTMWlXOFlKanZhN1ZfdE54Ykxhd3J1SkFqZ2RuVUJCN2RXZUxqZC00LTFQNUlLdkUzbzhhYzFqLWhPdmg1SjBYQUVDS2hxaVprLThyYkVWUHEydnpUbnZGU08yMUhOOXPSAbwBQVVfeXFMTWVNMkFzNGlmOXQzSTA2TDR1VmpJLWZTMlFrR193XzBQWnl5V3JWSlpLb1dDV21CdzEtSU1lSTJScDI4WC1GcDNOQ2YwdGJKR2pObzRtZHNPRnhRYTRmTkwtMmlIU25HTXpiU3hKbFRGUTlVa0FjVXp6aW9DVVBzTUY0c0JtWTVzY1YyYmVqcEZJcGdOR2ZiWUhhN0o3X19BMk5IaG5KTmsxVWFwWE9ldEY3cW9nYWlYcDg5UHQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 883
    },
    {
      "date": "Jun 05",
      "text": "Israel and Lebanon agree to renew ceasefire, but Hezbollah rejects the US-backed truce.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBDX19HLUpiZ2wzMzJfd0VNaUxxazNlXzJXMkRrM2tkUkk5MmtVYllkUUZSWWR3d2RydXRNSzdKdHRqQ281Mkk5ZWpRamlrM3lqTll5LWNQQW5rUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 883
    },
    {
      "date": "Jun 05",
      "text": "US military shoots down Iranian missiles and drones launched toward Gulf allies and the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxPY1h5Qk1UNmoyeVpUMGJlLVlteWk0TTlqd1pCSHNGX1h5Q1c2aW9PZ3NaY1BNM1NHdWs5bUFHRHdkX0ZPallOVFRMNmVBSkFMM1prWW9mUHVKSmpZa3MxSWZBQkh3aFNqNWpCRERmYzBUREN3MzVUcUgzRFpxNVdaX0pkMC1SazlvX2c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 883
    },
    {
      "date": "Jun 05",
      "text": "US and Iran trade another round of fire in the Gulf, with Iranian official stating talks are at a 'deadlock'.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 883
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (14 headlines)"
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
