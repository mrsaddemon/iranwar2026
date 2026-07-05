export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1185,
  "lastUpdated": "2026-07-05",
  "lastSyncedAt": "2026-07-05T22:15:15.964Z",
  "warDay": 128,
  "summary": "Ongoing military exchanges between the US, Iran, and Israel continue amidst the funeral of Iran's leader, while a potential 60-day truce between the US and Iran is under consideration.",
  "lastNarrativeUpdate": "2026-07-05",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 60,
    "summary": "A Memorandum of Understanding for a 60-day truce between the US and Iran has been reached, pending US presidential approval, amidst ongoing regional hostilities."
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
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.65
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 48,
    "oilDisruption": 65,
    "tradeImpact": 47,
    "sanctionsPressure": 54,
    "globalPressure": 61,
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
      "date": "Jul 05",
      "text": "Day one of Ali Khamenei's funeral concludes in Tehran, with millions expected to attend, as Israel conducts strikes in Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPY1ZJZk90Wld1cXluZE45NDJSUERIRW82aGJ0TWZCbkVjNkNuOU8wODNyZGpLbnl4ODk4M2JPNnpLbHBnUE1MZ1RIXy1XdGhGNmJBOTZuaVhpU0ZHa2RJLUNCTnYtMkpPRUxTZmktSHJ3SWUwdVVmdTNWTEdUT2RiZUVyNW5JdThEYl9sMFAzWUEyZjlMLWsyUWUydFViZjh5QjM3dWk4QTZKV3V1bTZUQjdGU1VXNmlJbTAwctIBwgFBVV95cUxNZXJGWHhNdExYZEloUFlYbE9JMEwtbVJxUFBjd1ZzS1Fidk4yOWhMSkpoOUxOaklkelpWN25kRm1fM2FBaGhHT3ptanBqc2hRTGlSZmhGamxnR0YwZ0RDSy1uSk9MUDhwZEJVajJvbXZjMTRzRV9FQjQ5LUZyY0xYcXkyNFlmU0sycWU1TlFZRW82Yjd1NkxaYTJEbjFwajl4SGNwZE41c0tucFlsSnZZWkswVldSd0k1eDVMZ1dKZkF2UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1185
    },
    {
      "date": "Jul 05",
      "text": "US and Iran exchange strikes, with the US bombing Iranian military sites and downing missiles fired at troops in Kuwait, while Israel intensifies attacks on southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxNUXdrc3JheHlJVnU3Nlc0Sm1XSnpWQm05cHFpVktvbmxOaEkzMFpWNUNtbUZEYVhwSUNMVTBfUGtBSjI0d00zOWNnVTh5UGd0WmROckRSbGdxLWVjRlpYREJvcEVLQWdRNHpHOTVhckJMOF9zQl80UWkyeDdNcXg3dWhwUFk5MEQ5bENkMk0tcFR4anBGQkY2Nzd6ZVczZ1RHWUw1cEdOalNXQjBjWFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1185
    },
    {
      "date": "Jul 05",
      "text": "The Strait of Hormuz has reopened, leading OPEC and allies to agree on a fresh August oil output hike as traffic recovers.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi9AFBVV95cUxPeEZPOUh0ZE10UjQ1VFVDWmpMakVEQl9oTWRWSUxSZ1lsUkNMa3hHM21iQUc5enZqd21USm9JWk5wbUpSRDFISnY4NHdSenU5ME1HRHNmaTV5dHQ0ekkzRnFYcEJiWlg3MUwzVW9ibVo4MTFObmNhaXcyNkNFRlpyNk9JRG1kV21Cci1Dd19nNW4tUm5SeVlZYzJpSWxTWHpLZUVCNTJNOHJSM2w2WExVVTdjZl9PRjZCNDJ3eDROZXc5SXE5b1dzem5saWpXUV9DYTZ3TmVfdWR0WUhfZVJQRU5FdmVwNlJEd0dRNmw4amdIR0Y20gH6AUFVX3lxTE0yeGc0TDhJTDVqNnp1eGlQRHlUcFY5Q3VUcktZNlFhMlhGOVZzZ1dndGJlc2QtMldINVpKdUFMUjZKWF80ZlFFOG9INEdRbldFazFvRnp0cW9BRi1nQjk3dUd6Zll1OTNCZHFjV1prU1Jnb3pOWFpPQzJ5eUQ4NFM5LUZjVmVDREdXS2hRMW5pWkNaUFltdVhFOWtYMHBvckNVN2hGMmxpYy0xNW1yZm1QM0o4bTJ6bEJaaVl2MlJMSUt0ZjBpSktXeUdwOXBmWGF0TjFMUUJ2cFdrTTBmbDdKRjlYWTUtQVFwM2lIMkNncUxIWkpzN3RYQkE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of India",
      "latestSinceUpdate": 1185
    },
    {
      "date": "Jul 05",
      "text": "Israel's IDF Chief states control over Hezbollah's tunnel network beneath Beaufort Ridge, as shells target Hezbollah sites after a soldier was injured.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1185
    },
    {
      "date": "Jul 05",
      "text": "A Memorandum of Understanding for a 60-day truce has been reached between the US and Iran, pending approval from the US President.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1185
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
      "perspective": "Iran's Defiance",
      "headline": "Tehran Warns of Decisive Response, Maintains Hormuz Stance",
      "summary": "Tehran issues strong warnings against US and Israeli military actions, asserting its right to respond decisively to any miscalculation and maintaining its stance on the Strait of Hormuz despite international pressure.",
      "tone": "defiant",
      "latestSinceUpdate": 1173
    },
    {
      "perspective": "US/Western Intervention & Diplomacy",
      "headline": "US Condemns Aggression, Seeks Hormuz Opening, Evaluates Force Posture",
      "summary": "The US condemns Iranian aggression, conducts retaliatory strikes, and seeks arrangements to reopen the Strait of Hormuz while evaluating military posture, with UK and France also engaging in regional security efforts.",
      "tone": "strained",
      "latestSinceUpdate": 1173
    },
    {
      "perspective": "Regional Realignment",
      "headline": "Lebanon Turns Against Hezbollah Amidst Syrian Diplomatic Signals",
      "summary": "Lebanon shows signs of turning against Hezbollah, with a deal focused on dismantling the group, while Syria signals a preference for diplomacy amidst regional complications involving Israel and Hezbollah.",
      "tone": "neutral",
      "latestSinceUpdate": 1173
    }
  ]
});

export default LATEST_SNAPSHOT;
