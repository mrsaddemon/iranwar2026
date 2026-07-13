export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1283,
  "lastUpdated": "2026-07-13",
  "lastSyncedAt": "2026-07-13T20:44:58.447Z",
  "warDay": 136,
  "summary": "The United States has launched a second night of strikes on Iran and renewed a naval blockade of the Strait of Hormuz, leading to an exchange of fire with the IRGC.",
  "lastNarrativeUpdate": "2026-07-13",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is active amidst ongoing US strikes and naval blockade against Iran."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 85,
    "oilDisruption": 95,
    "tradeImpact": 84,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Jul 12",
      "text": "US launches strikes on Iran for a second night.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE91YV9WLTU4cXN4cjF5RWVKc3lJUlpWQ1BjS2RqUURnTzVRN1VhTUthTjBsdjNHZ1FRam1KMHM3Tkh4ZTJBdlhYZTVXeENUWDVkWnQ2NDBHY2xoZGJSOEtmaEp3Y0M5NTMzbDB5QUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1282
    },
    {
      "date": "Jul 12",
      "text": "US naval blockade of Iran to begin on Tuesday, with threats to charge a 20% Hormuz fee.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxQbzFBN0l4LWl2SWxzSGxUd1ZRQ25Pckc1bk9tcnlOcFYwcTJqdHJjU2NhNGFGbTNTUk90ZVB5Q0ZqT00yanlWNWpNR1BUdWtOOS1ZMkRFVlJnTjRiaUJGS0NEczZOWXVldEN6OGZIbG9zcVI5LUZwd2YzemNMYWdMTkNwdjQ0T1ZwQWR4YUpYNDVBcHZhdHBuVUgtNVA2aGk0ckQxOW5ybXFuUFNtYldaaFNKRGt6NHQ1dWMtNG12cWlmZ9IBxwFBVV95cUxQbE9Tbml3V3hjSXdXaGozdWZhUDJEYWVHckpmS1lxbjgyZGtxTjFxY0dkWExIZVQ2ZHhBaTNBZ1NPWlo3WTJieHlyYS1PNzVKODdTNVB0VUQ3ZVBvcFltZ0NDVEhxLURjb0tPSlBXSFhHbkNpRWVkNnVibmpYRFZhWkFvbmt0VjZEcU92SDROLTZRY2l3aExDT1dDNDYzLVlETTdTa1o0a3UwUXY3dFdqV0J4UWptaGpRVGRMbkV1V1QxemxsQlpB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1283
    },
    {
      "date": "Jul 12",
      "text": "Iran rejects US claims over the Strait of Hormuz and mocks Trump's vow to charge tolls.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1282
    },
    {
      "date": "Jul 12",
      "text": "Iran war escalates as US and IRGC exchange fire over the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxPVjRMWlNaRDhUd1I4Y0pIa3ZQaDdqWUR2TUVCNGl5bDlVT0Y4LTF5LUhtTDR5Ynk5dkZ4bzJXRDBkSTg4VVoyTkdmU3o0bHZYLV9NZTVBaGlraGMxdWhEd3VjdFZNbXQ3SXlLcHkzMlNtR0lOMkxvWWo3ZlpnTTdIX2UtS1lMUGM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1283
    },
    {
      "date": "Jul 12",
      "text": "A Hezbollah lair built to attack Israel is unearthed beneath Beaufort's strategic bulwark.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPMG5BNnJkck5GOS0za01lWWhsVWc5X1M1OFI3NUtXOGMyckNpakFlU3FvVzlKRnkyVTg1V2FCMmpoRHhsRDBzM1lXNnpTQTZHcTB6bURsNkRIc0VUMWQ3cTNQdG1JNGt3Q2dWekNlcGxpWno3eTdidDR1X2hUdHI0WjNSa3FRckQxbk5OTkNWTG1WUVZaakRXUFF0cnRJWmREaWpwc3hoMmxoSk45QjhIMzR5X2ZENGx4dnM4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1283
    },
    {
      "date": "Jul 12",
      "text": "Israeli ambassador states IDF Lebanon withdrawal hinges on Hezbollah.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiXEFVX3lxTE05Mms2b3NCRXZDRWU4cUpwLXVPQ2dVeFRjZFVaVzhrR1FUYy1IV0hjTFA3a2JqX1IyVjJMR1AtNXY1LTdzUWlkalh5N0s2U1FXYkhmUmZwVHpISEVL?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 1283
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
      "perspective": "US/Western",
      "headline": "Holding Iran Accountable Amid Strait Tensions",
      "summary": "The United States is conducting strikes to hold Iranian forces accountable for attacks on shipping and to ensure freedom of navigation in the Strait of Hormuz. President Trump has agreed to talks but declared a previous ceasefire 'over'.",
      "tone": "defiant",
      "latestSinceUpdate": 1275
    },
    {
      "perspective": "Iranian",
      "headline": "Retaliation and Strait Closure Claims",
      "summary": "Iran claims to have closed the Strait of Hormuz and is targeting Gulf states in response to intense US and Israeli strikes. Iranian forces continue to engage in exchanges with US military.",
      "tone": "defiant",
      "latestSinceUpdate": 1275
    },
    {
      "perspective": "Israeli",
      "headline": "Strikes in Iran and Lebanon Presence",
      "summary": "Israel has conducted strikes in Iran and is preparing for a prolonged presence in Lebanon to counter Hezbollah, despite a local ceasefire. This comes as a Hezbollah lair was reportedly unearthed.",
      "tone": "strained",
      "latestSinceUpdate": 1275
    }
  ]
});

export default LATEST_SNAPSHOT;
