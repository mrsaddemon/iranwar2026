export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 494,
  "lastUpdated": "2026-05-03",
  "lastSyncedAt": "2026-05-03T18:31:57.197Z",
  "warDay": 65,
  "summary": "Conflict continues on Day 65 with ongoing hostilities between Israel and Hezbollah despite a declared ceasefire, an attack on a bulk carrier near the Strait of Hormuz, and uncertain US-Iran peace talks.",
  "lastNarrativeUpdate": "2026-05-03",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A declared ceasefire is largely unobserved, with continued hostilities between Israel and Hezbollah, and US-Iran talks facing uncertainty as the ceasefire is set to expire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
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
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "May 02",
      "text": "Iran submits a 14-point response to the U.S. proposal aimed at ending the war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTFBLMi1mWVVxa2c3MmhYY3lTYndRdDhoQWZVaGhXVE1JVnN3ZW1jWldnUnEtSDU3ODNPa3l4emNCb2RCQWlYSERJdjBwVGtFLUQ3TllZRmZuT3hSQzYtWS1LSHpFTWp6UUJTMm4wR0FhY19BNnRueE9qUTVhMFJ3Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 494
    },
    {
      "date": "May 02",
      "text": "Israel and Hezbollah continue to exchange blows despite a declared ceasefire being in effect.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibEFVX3lxTE5VQldEVmg4NWhDNTFHeWRQQXNoWW5XWUg3WEFSeS1KSG9PQ3NVT1I5OUpnQjE2UVBYbmVzRy1vY0lUSGY1QVIxM05ic2RhbmlsUVZZeWEwdjdRZlJ1YmlDT2JEZHk4QTdyUVFhYQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 494
    },
    {
      "date": "May 02",
      "text": "A bulk carrier reports being attacked by multiple small craft off Iran, near the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxPeTZidHI2Wktpa0k3LWJNN3haekY5bWlIc2dXZ3NydGFyYnQ2MlNMYkd4RlBiZGUya1AyTlcxUV9Qcl94bkNSazhEQktGbHVtRmJSS3J1WWdsVzBkN3J1VThqMXUzOTh3TkMyMThpaldjNEZHV2RLQ28yYWZsMjBUWHBGZ2JjbHExT0Rtd0xGU0VuMU00c0VDTlRNem1hMlY1X3hJWE8xWFDSAa4BQVVfeXFMTWRyVEZpbmNUSVZXckVmQmJ0dmNhaDlNV0RabnFRbXc3UGh1c2FKWEtjVUphcWVaZGZ0b3l5YWxya3Y1eENqaW9mSm9Za0IyRExXNDZwT3AzNXlXSF9STURwTTBQNEVRYWFCd1ZFbDBERTFwdTN6aEY3Z0o4NlZzczd6QW95bVNKUXhNMDhSN3ZlVUl1N21BMGtGWmRzeFRJby1oTzd0MGt3eUtQLXJ3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 494
    },
    {
      "date": "May 02",
      "text": "Hezbollah deploys a new potent weapon reportedly designed to evade Israeli detection.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxNWm52RmRwa2xzRjZvNjF3eXpWdXdRVlJJejVqSXViVTN2aWVQSzF2Mm03VW1oQndfVzhkclo0TXFtZHBfNllrU01saW9QSi1scG1hMnZfRkNSM1kxOFcyOUZhUHFUaHE4T1ZWOWJrU2VyTktpVlhFeUtFQnJVaE0tcUFsQnVXS3Y0TjQwblM4VQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 494
    },
    {
      "date": "May 02",
      "text": "A CNN investigation reveals that a majority of US military sites in the Middle East have been damaged by Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxPZXgyczJfZ015aVNZWVpKYmZHc29IVVowSGpEM004YjE2X3JTV1ZVNzJldWVlbjA3Vk5WTmZLNENGd2R6M3QzdklvX0FUOVdMQ1F0M1otcmNZWUpNakZ3ZE5wSTRCWkc2WDc2bng5X2tvYWFReG5IM3Q0YjFCb3Z0T0k3YXQ3SC1BMzRQeHhnQ1UwX3l3RUFN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 494
    },
    {
      "date": "May 02",
      "text": "U.S.-Iran talks are uncertain as a ceasefire is set to expire, despite Trump declaring hostilities 'terminated'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxNMHg1TVIyZGUxTVJpVkhrYmhrN3d6dlk5M0h4STJMdlRYRGJSbGJnZjVEVndmOHBWMFpEYmJxWUphSWJWc2F6MEJiVTBOazRwR1IycFYwaVhxblFsRGs3OFBrTi15eFp4NVdqcFpaQmFZSE9CX041WTIwRE5oT3VjdE9WeG5zZ1EtN0p6NWs5Y3E0S2gyWG1nMXlkQjZyZG55d0F0ZWZR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 494
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
      "perspective": "Iran",
      "headline": "Iran Proposes Peace While Maintaining Readiness",
      "summary": "Iran has submitted a 14-point peace proposal to the U.S. to end the war, while simultaneously issuing warnings from the IRGC about its full preparedness for potential conflict resumption.",
      "tone": "strained",
      "latestSinceUpdate": 482
    },
    {
      "perspective": "United States",
      "headline": "Trump Rejects Peace, Threatens Relaunch",
      "summary": "President Trump is reviewing and rejecting Iranian peace proposals, stating Iran hasn't 'paid a big enough price' and is considering new military options to relaunch the war, alongside threats to withdraw troops from Germany.",
      "tone": "defiant",
      "latestSinceUpdate": 482
    },
    {
      "perspective": "Israel",
      "headline": "Israel Continues Strikes Amid Drone Threats",
      "summary": "Israel continues strikes on southern Lebanon and faces new challenges from Hezbollah's advanced drone capabilities, while its UN ambassador defends the IDF's morality.",
      "tone": "strained",
      "latestSinceUpdate": 482
    },
    {
      "perspective": "Regional Impact",
      "headline": "Two Months In, War's Toll Evident",
      "summary": "Two months into the Iran war, the sentiment is that 'almost everybody is a loser,' with significant damage reported to US military sites in the Middle East.",
      "tone": "anxious",
      "latestSinceUpdate": 482
    }
  ]
});

export default LATEST_SNAPSHOT;
