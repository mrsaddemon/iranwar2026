export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1186,
  "lastUpdated": "2026-07-05",
  "lastSyncedAt": "2026-07-05T23:30:14.211Z",
  "warDay": 128,
  "summary": "Ongoing regional conflicts involve Israel striking Lebanon and Iran, and the US exchanging strikes with Iran, amidst the funeral of Ali Khamenei and a proposed 60-day US-Iran truce, while OPEC+ increases oil output.",
  "lastNarrativeUpdate": "2026-07-05",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 60,
    "summary": "A Memorandum of Understanding for a 60-day truce between the US and Iran has been reached, pending approval, amidst ongoing regional conflicts."
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
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 35,
    "tradeImpact": 26,
    "sanctionsPressure": 54,
    "globalPressure": 56,
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
      "date": "Jul 05",
      "text": "Day one of Ali Khamenei's funeral concludes in Iran, with millions expected to attend.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1186
    },
    {
      "date": "Jul 05",
      "text": "Israel conducts strikes in Lebanon and Iran, with the IDF confirming operations.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPY1ZJZk90Wld1cXluZE45NDJSUERIRW82aGJ0TWZCbkVjNkNuOU8wODNyZGpLbnl4ODk4M2JPNnpLbHBnUE1MZ1RIXy1XdGhGNmJBOTZuaVhpU0ZHa2RJLUNCTnYtMkpPRUxTZmktSHJ3SWUwdVVmdTNWTEdUT2RiZUVyNW5JdThEYl9sMFAzWUEyZjlMLWsyUWUydFViZjh5QjM3dWk4QTZKV3V1bTZUQjdGU1VXNmlJbTAwctIBwgFBVV95cUxNZXJGWHhNdExYZEloUFlYbE9JMEwtbVJxUFBjd1ZzS1Fidk4yOWhMSkpoOUxOaklkelpWN25kRm1fM2FBaGhHT3ptanBqc2hRTGlSZmhGamxnR0YwZ0RDSy1uSk9MUDhwZEJVajJvbXZjMTRzRV9FQjQ5LUZyY0xYcXkyNFlmU0sycWU1TlFZRW82Yjd1NkxaYTJEbjFwajl4SGNwZE41c0tucFlsSnZZWkswVldSd0k1eDVMZ1dKZkF2UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1186
    },
    {
      "date": "Jul 05",
      "text": "US bombs Iranian military sites and downs missiles fired by Tehran at troops in Kuwait.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxOMjVJLWNwc3ZkX1R2NDY0emhqYW1SUVFZd3FJNEVZcFBJcGJ2aFFrdUNOTEV6dzdVNUkyZmE1S3NjTXk1RmwwODhTRTgyeFJlMjIwMTA0VEZGVWl5N3p6YmFjM1RBWXl0UjhXTjNUdEM1SHlfOG5ZcEVOZUdLZDBpcWN2UFNTeFhNZXpLeW9MMjFrLXpjak9J?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1186
    },
    {
      "date": "Jul 05",
      "text": "Iran warns the US and Israel against attacks during the leader's funeral.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1186
    },
    {
      "date": "Jul 05",
      "text": "OPEC+ agrees to a fresh August oil output hike as Strait of Hormuz traffic starts recovering.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi9AFBVV95cUxPeEZPOUh0ZE10UjQ1VFVDWmpMakVEQl9oTWRWSUxSZ1lsUkNMa3hHM21iQUc5enZqd21USm9JWk5wbUpSRDFISnY4NHdSenU5ME1HRHNmaTV5dHQ0ekkzRnFYcEJiWlg3MUwzVW9ibVo4MTFObmNhaXcyNkNFRlpyNk9JRG1kV21Cci1Dd19nNW4tUm5SeVlZYzJpSWxTWHpLZUVCNTJNOHJSM2w2WExVVTdjZl9PRjZCNDJ3eDROZXc5SXE5b1dzem5saWpXUV9DYTZ3TmVfdWR0WUhfZVJQRU5FdmVwNlJEd0dRNmw4amdIR0Y20gH6AUFVX3lxTE0yeGc0TDhJTDVqNnp1eGlQRHlUcFY5Q3VUcktZNlFhMlhGOVZzZ1dndGJlc2QtMldINVpKdUFMUjZKWF80ZlFFOG9INEdRbldFazFvRnp0cW9BRi1nQjk3dUd6Zll1OTNCZHFjV1prU1Jnb3pOWFpPQzJ5eUQ4NFM5LUZjVmVDREdXS2hRMW5pWkNaUFltdVhFOWtYMHBvckNVN2hGMmxpYy0xNW1yZm1QM0o4bTJ6bEJaaVl2MlJMSUt0ZjBpSktXeUdwOXBmWGF0TjFMUUJ2cFdrTTBmbDdKRjlYWTUtQVFwM2lIMkNncUxIWkpzN3RYQkE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of India",
      "latestSinceUpdate": 1186
    },
    {
      "date": "Jul 05",
      "text": "US and Iran reach a Memorandum of Understanding on a 60-day truce, pending Trump's approval.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1186
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
