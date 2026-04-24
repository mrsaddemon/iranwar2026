export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 345,
  "lastUpdated": "2026-04-24",
  "lastSyncedAt": "2026-04-24T22:54:38.206Z",
  "warDay": 56,
  "summary": "A three-week ceasefire between Israel and Lebanon has been extended amidst ongoing US-Israeli strikes on Iran, a US blockade of the Strait of Hormuz, and concerns over global economic impact.",
  "lastNarrativeUpdate": "2026-04-24",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 21,
    "summary": "The Israel-Lebanon ceasefire has been extended for three weeks, but its stability is uncertain due to continued fighting and Hezbollah's rejection."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
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
      "date": "Apr 24",
      "text": "Israel-Lebanon ceasefire extended by 3 weeks following White House peace talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxNTVRZSHpJQzN6WkV5Y25XdXcxMXR0Q3NMYk1zSFExT08xbkpTTTVGTzkwU08zdXF5ZTlfS3NENTRDejVRbVRNQ3pQeW5Qa0pwZWNjTE9qNlptMFpNdTNPMnlJS2l3WFVmT3NYLS1FVV9DaFNlMmIxMHJGMm42NlN2d3pmMnJkYlUyOUNKUFlEQ1BkRFZvMHFzZ1ZHWFY4aUFSdWd3QnNDRWnSAa4BQVVfeXFMT2pXc0ZJU0M0Y0VTVlRRNDVtTFhwNlpVbE53ZHVaa3VteVpBRm5RZmhZR19BNU5na2kzenkzYmN4N3BjcXRMMDBQNE5ocEJ3SWEtZTRfTjRrTGRQRW9wN2d1RzFuSXFiUmw3cmFONkdKemY1bDZsbmV6QnNrZVpqZEZNWWtVeDRfcWllLUFVQXZuM2tndnFGQm51V1EtQjRDNDdoNkFBVGVnMi1LVHdR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 345
    },
    {
      "date": "Apr 24",
      "text": "Satellite data reveal scope and scale of US-Israeli strikes on Iran.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 345
    },
    {
      "date": "Apr 24",
      "text": "Israel attacks increase in Lebanon; ships taken in Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 345
    },
    {
      "date": "Apr 24",
      "text": "U.S. blockade around Strait of Hormuz will last 'as long as it takes,' Hegseth says.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 345
    },
    {
      "date": "Apr 24",
      "text": "Trump orders U.S. military to 'shoot and kill' Iranian boats mining Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxNd0RrbHZHZkFPZTQ2VF9WQkh6MUxjVVkyaHZzSm55WVRuM0FROEwzRnNkQV94dWk5U0RGYlM3eE92akUzaDBiZG9pdUdlUFZfcXZpWmgzMDU3YjA1c1REdlNYWXhZT2t0UDRFLW1wZzNRMEVtblprVkF0UVIzaHJXaUFPekRSYkZCZHd6QUFGYzlXTFowVXo1UWVrdDBERHgyNjNmc0dhNkp2a0RWTHNXaHl6bGtmbDdFZV82UTRqSmttRlhJ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 345
    },
    {
      "date": "Apr 24",
      "text": "Hezbollah says ceasefire 'meaningless' as fighting continues in south.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPMjIzX3ZxYjhjTURMWjlQUFlBSXhqSUJpZ280eG5VdnJxWEp5SjNKRFhzczh3VnR2RG1pQVVJQTJzUFZ0V0ZOZUNIQjV0eUNxZlAxS1BKNWRCSUpuU01WeDdLS3NmZkRmcFAtT2lIZzg2cmxXZ25Gb285a1BOTTBkNU9melFDbzd1T1ZRUURJb1pBWG1aQzhfaExLM3hKYkZHOHBsaTcySjZEU3VDX1Rr?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 345
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
      "perspective": "US/Israel",
      "headline": "Defensive Strikes and Maritime Enforcement",
      "summary": "The US and Israel are conducting strikes on Iran and taking measures to secure the Strait of Hormuz, responding to perceived threats and maintaining regional stability. The extension of the Israel-Lebanon ceasefire is seen as a diplomatic success.",
      "tone": "defiant",
      "latestSinceUpdate": 330
    },
    {
      "perspective": "Iran",
      "headline": "Facing Aggression and Blockade Threats",
      "summary": "Iran is under attack from US and Israeli forces and faces direct military threats regarding its activities in the Strait of Hormuz. The 'shoot and kill' order and naval blockade are viewed as significant escalations against Iranian sovereignty.",
      "tone": "strained",
      "latestSinceUpdate": 330
    },
    {
      "perspective": "Global Economy",
      "headline": "Oil Market Volatility Amid Strait Tensions",
      "summary": "Escalating tensions in the Strait of Hormuz, a critical oil transit choke point, are directly impacting global oil prices. The risk of supply disruption remains high, despite a localized ceasefire in the Levant.",
      "tone": "anxious",
      "latestSinceUpdate": 330
    }
  ]
});

export default LATEST_SNAPSHOT;
