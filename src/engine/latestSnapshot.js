export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 673,
  "lastUpdated": "2026-05-16",
  "lastSyncedAt": "2026-05-16T22:25:17.510Z",
  "warDay": 78,
  "summary": "Amid stalled talks, reports indicate the US and Israel are preparing for renewed strikes on Iran, while Iran threatens a Strait of Hormuz toll and regional hostilities persist despite a fragile Lebanon ceasefire.",
  "lastNarrativeUpdate": "2026-05-16",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A ceasefire in Lebanon has been extended, but its fragility is evident with recent Israeli strikes and Hezbollah drone activity."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
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
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "May 16",
      "text": "Reports indicate the US and Israel are preparing for renewed strikes on Iran as early as next week.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTFBsOC1nY25mcWZIYUJlcWpmdFdBVUk1V09JNWVqZzFPZm9Xb2VFdnpLaHB0Z2J6YW1EZkJfVHB6T2dyR0R5MU9UNTh2REc3Q1JzLWkyX2J3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "ynetnews",
      "latestSinceUpdate": 673
    },
    {
      "date": "May 16",
      "text": "Iran states it 'cannot trust the Americans at all' amidst ongoing war discussions.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 673
    },
    {
      "date": "May 16",
      "text": "Iran announces plans to debut a toll mechanism for passage through the Strait of Hormuz soon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNa28tT0ZnSnBQZjlodFVfRU1DRk9xdGVnVXJVWjNpOWo2SmZha3JnMUF3U1dWVVZ3alY5cTJoQjFsdU92RWgzcmV4U2d4R2hrdDhicTFIRDFfMi1fYmJHT09OclRFeTNPNWk5OFZGY3FMblRlTXVjN3NjcHllRU0wQjBhVVRrS1dYalItbF94Y0RldlI3UE5lbV9Mbkk1d2w1RkRQNmh1UGkzZ3J2VG1GbWtjRi03Uk9zTlhmQmdfdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 673
    },
    {
      "date": "May 16",
      "text": "Hezbollah claims to have launched a drone swarm targeting an IDF base in northern Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxQV3RTT1l2RThhNTcwemRtN0lLNTN5ZVkyeFpKWmM0RHNNX1FCVlE3a1c3TVFiNXN0VlBrb2RscEw3UnZRSTZxdVhHY3ZJOTVGR01NcmdxdjZRMTZaMmN3RVJRSGpiUjdoRjZ2NENKbjJDWmJhX3EyeEZIeW55eEZiMC1QTUxWWktzUjZWU01aQ2Q1YXcwUGc2OVdMYnROYlc0RzBldlRCU3JLTTRFUDNqZTBR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 673
    },
    {
      "date": "May 16",
      "text": "The IDF launches strikes targeting Hezbollah, marking the first time since the Lebanon ceasefire was extended.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxOZHp0SzBIRnB0cDNqQ2dna05Mb1ZXX3JZZWhXUnp1ajRBLUxfR0ZrUFFlUGRRQ0h4OU9ITzFyVk94cjQxbkVZd1VVdGpaYWdvcFBSZXF4LXdwYzI2WFBNTkNNRmJ3TnpUd0lHU0VKQ2p2MjVNNnN3VEx5LU40bjhXQnVWOXpMNXE1enpkbUJDR3FKX1ZmcUo1aHJ0MVo4QlFidW93bGIzVS00SEswWG9jZ0kzV3lpd3Jf0gG-AUFVX3lxTE5KUFdIQm9TR2tnbUxkX2l2bXFyMVhHRE1RQXRnaXhfaXB1QmFVcmd3T3NoZl9YT2dTQkIzQWRlVWtldEZqYkZXbWU4Rk82WDBUQ2VxbUR6SEZ3dkk3SmRBVU5qRkZnSmo4QW1YSFoyTjdoSV9kNnljNmFFX0FfSFRoQUtfeGpKbGdTbjZMNEJlUHQ3bDRJNDVHNkNyOU5QY3hZRWhvMkV4eTF0LU55Rzd2RGhXN2gxMlBKZHE1dnc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 673
    },
    {
      "date": "May 16",
      "text": "Lebanon reports six killed in an Israeli strike, coinciding with a US announcement of a ceasefire extension.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE5RNEhNNzBzRkF4T2NFYUhVRWxzSk9FMzNiS1hiMHpFd2ZER21Gcm1WOTl6Y2xsUHEtaUZ1NGlvTlVpYWg1aHBEX1JnR2Q4QmVicURRT011MVNaZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 673
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
      "perspective": "Regional Anxiety",
      "headline": "Iranians on edge as war looms, Strait of Hormuz tensions rise",
      "summary": "Iranians are reportedly on edge due to the threat of renewed conflict, while Iran asserts control over the Strait of Hormuz, declaring it open to cooperative ships. Oman finds itself caught between US and Iranian interests regarding the strait.",
      "tone": "anxious",
      "latestSinceUpdate": 658
    },
    {
      "perspective": "US Political/Military",
      "headline": "Trump's role in Iran conflict and US military concerns",
      "summary": "Former President Trump has threatened more strikes on Iran if a deal is not signed quickly, while also claiming China offered to help end the conflict. Reports suggest Trump is impacting the U.S. military, and a program to prevent civilian deaths was quietly shut down.",
      "tone": "strained",
      "latestSinceUpdate": 658
    },
    {
      "perspective": "China's Geopolitical Position",
      "headline": "China gains strategic advantage amid Iran war",
      "summary": "An intelligence report indicates that China is gaining a significant advantage over the U.S. during the ongoing Iran conflict. This comes as China's potential role in mediating or influencing the Strait of Hormuz situation is also being discussed.",
      "tone": "neutral",
      "latestSinceUpdate": 658
    }
  ]
});

export default LATEST_SNAPSHOT;
