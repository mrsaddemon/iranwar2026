export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 499,
  "lastUpdated": "2026-05-03",
  "lastSyncedAt": "2026-05-03T22:56:05.764Z",
  "warDay": 65,
  "summary": "The Middle East conflict continues with Israel and Hezbollah trading blows despite a declared ceasefire, while the US announces plans to escort ships through the Strait of Hormuz following recent attacks and seizures.",
  "lastNarrativeUpdate": "2026-05-03",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 60,
    "summary": "A declared ceasefire is in place, but it is frequently violated by ongoing clashes between Israel and Hezbollah, and Trump cites it for his own operations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
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
      "date": "May 03",
      "text": "Trump announces plan to escort ships stuck in Hormuz Strait and 'free' ships trapped in Persian Gulf.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQRjdDY1pjZndhZUhKcFFXUmZjSUJpdDlRdk5ETE1sRVNrTVRMNVA0bXdpaHc0dHBfaF9nblRLWEE0RlRWemJUNGk0RU9CVWFRcnBqLVVoRHRPelRvVWtJUHhkOXhMaEwtV01mRTF1SGlzZGU2YU1fdEZwb1RWT1hFeVFrOFZsSHZJUktRVkFmX1ZOQ0FQY0JVZWxxdDQ1OHZudGtqSzlQVzdrZG5PMlF6dllrbklZRGVvalVv0gHAAUFVX3lxTE9KQVNaMHA0YURrNlFyN1VGMFMtZGI2Vjk4bFc2czh5a0VBbEZ3NE42QzhJV3JBX3poYmttNEozaFhVUHhyRzVqdjZiY2JwcUttbzdKS05LeTltRHZjTkUwb2FZT1lqZ0NsY2E1RHFOMFZwcDM5d1pFdDZGRGc1enRHdXVVQmJNNUZCQWJjWG41M1dpWHFQVzg2dFV1YVVLb0JwSWRDR1pObDJLZ2JPaGNUUnNWNVF2OGRQbGswczVhTw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 499
    },
    {
      "date": "May 03",
      "text": "Iran submits a 14-point response to the U.S. proposal to end the war, which Trump subsequently rejects.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTFBLMi1mWVVxa2c3MmhYY3lTYndRdDhoQWZVaGhXVE1JVnN3ZW1jWldnUnEtSDU3ODNPa3l4emNCb2RCQWlYSERJdjBwVGtFLUQ3TllZRmZuT3hSQzYtWS1LSHpFTWp6UUJTMm4wR0FhY19BNnRueE9qUTVhMFJ3Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 499
    },
    {
      "date": "May 03",
      "text": "Israel and Hezbollah continue to trade blows despite a declared ceasefire, with Israel increasing attacks in Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibEFVX3lxTE5VQldEVmg4NWhDNTFHeWRQQXNoWW5XWUg3WEFSeS1KSG9PQ3NVT1I5OUpnQjE2UVBYbmVzRy1vY0lUSGY1QVIxM05ic2RhbmlsUVZZeWEwdjdRZlJ1YmlDT2JEZHk4QTdyUVFhYQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 499
    },
    {
      "date": "May 03",
      "text": "A bulk carrier reports the first attack in weeks near the Strait of Hormuz, and ships are reportedly taken in Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxOV3lZNjd6NWVNUWlvbUVLNlFyakY5YnZBNmJlMHpaeWJDX1JvNG1YY05sSjJzWVl5TTFzc0cxRDgtX3ltWWFKSDYzTTVoZ1l2elFaZ1pRZ3hoRFJybXNoNWs0UVA0ZFJ3bW1hdWp1MTVmTExnTlFKT1Bidk84T3RIaDcwQkw4NlFMQlUxeVo4ME4wT3FmWFV0MGh30gGfAUFVX3lxTFAtaE5xX242SDlkeW4yVl9Qd1hqaXAxN1RHOTVuUDZ2VThEczlHOG5KWFFwNFdtSnUwdUMzWXhFSHZYenlmci04ZzF3a1hWd3NGel9UV25QRTI2ZzhVckxLWDRCc2steVhJYUZaaGlQanp6b19jbm5iRGpmNXMzV2RGbEJXRGprZExGck1LQXlybjEyNlFUNmk2cVJjWEpmMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 499
    },
    {
      "date": "May 03",
      "text": "Hezbollah deploys a potent new weapon designed to evade Israeli detection, while paying a steep price in battle.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxNWm52RmRwa2xzRjZvNjF3eXpWdXdRVlJJejVqSXViVTN2aWVQSzF2Mm03VW1oQndfVzhkclo0TXFtZHBfNllrU01saW9QSi1scG1hMnZfRkNSM1kxOFcyOUZhUHFUaHE4T1ZWOWJrU2VyTktpVlhFeUtFQnJVaE0tcUFsQnVXS3Y0TjQwblM4VQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 499
    },
    {
      "date": "May 03",
      "text": "Thirteen killed in Israeli strikes on southern Lebanon, according to the health ministry.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE5lQTRpZWpNcDVjOEhubUI2VjJLQ1VucXRHMjNwNzdmRTFpTzd6cG1rSk1rZW9aOFNaX2pXOTNNYmhvZUdNcFMzNm5IMkhtZmc3X1A2TnRMVzNzUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 499
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
