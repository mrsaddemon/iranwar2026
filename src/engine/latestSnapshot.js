export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1796,
  "lastUpdated": "2026-08-14",
  "lastSyncedAt": "2026-08-14T12:01:30.411Z",
  "warDay": 168,
  "summary": "The ongoing US-Iran war sees escalating tensions in the Strait of Hormuz with attacks on shipping and military confrontations, while diplomatic talks remain at an impasse and a fragile ceasefire holds in Lebanon amidst Israeli strikes.",
  "lastNarrativeUpdate": "2026-08-14",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 10,
    "summary": "A ceasefire is reportedly active in Lebanon, though its effectiveness is questioned by residents amidst ongoing Israeli strikes."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "date": "Aug 12",
      "text": "Trump insists US controls Hormuz; Iran states it could 'prolong' war with US.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9pbWxQa3BOTklMZFVOT0RGLW5mSmRBRFNKeWV1R2VwUXNJOV9acS1sTzVWMFEteTgyczBlSU1QeU53RFhJVkNyc1FsS2xsVEJvRlYtWnhaXzRGT2pIbkVhVWVmU29UUDNKT0RoazFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1796
    },
    {
      "date": "Aug 14",
      "text": "Two UAE tankers attacked while transiting the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxOX3dIWVdaOWplT0dHMm90SmRFbFkybDBZcGlKU1FQUGk1UXdkM3FLRnY5WXhRRlAtRmlkNXFfbDBjNnFORFF0WUFhMHBTTE12MHVUMENieHJLaE1lbFprVldzcjV5WWdmajRoY1cwdWxGeXRGV3V5dy1SeVhZbG8xZEdJYjgxc0ZsVDdiN3oybnVNcWlQZkZRVWRUNGktdTJIeUZ6N19ocUVNWTFxTHNRMExMd0EtSlhkOG9IbHNwaEJaSTB4RGJRMXJndF9reFNHMUpkbm4tbGFCWUxKeEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "click2houston.com",
      "latestSinceUpdate": 1796
    },
    {
      "date": "Aug 14",
      "text": "US military fires on cargo vessel attempting to break Iran blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxNVDZDSVYteFdRNE1CNmNDaDJBWUFkc1M1b21WalE1UDZaSnAybDJwNWZlZEhORVdmMC1JRVdRMk9MOHhWZjFCdXhudzN5dEdWdWNlck5PU0NJQ25fZDZOZXd2d1BoTXhtZlpMVW9HY1pQdzlOWTRCYlNHUTBNMUhCTjRBU29HbXI2dGdUeHhCbVlwM3VoZGU0TVFRNkdCRE5aSTl4VU12Y243WmVEMVVUbXNn0gG3AUFVX3lxTE5zMklBY3BGOEdfX0FtdkNXLUVER3NGVnRPU0REUkVfRjg4UDlTNkxoVUhVS1VJYnN2N2liZE95Wi1reWhXV25kOU5iWmlILTJCVVlKRklQOUM0ampTQzBqcWhnZmhwX2hLOG5UZlJ6bG5OWjU3QWVTR0Q2RWtPM3J5Mkt2RTVfT1Eta0JqWUExUktzMmRWWkZBVHE2c2huWG9RZG1oM3gyWWR5cEhlMTRYaG9zd25HQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1796
    },
    {
      "date": "Aug 14",
      "text": "US military has lost roughly 25% of its Reaper drones due to war depletion.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi0gFBVV95cUxNR2swcWNKLTdQX01uTFVzYmpGSGU4Q2VZcWZxWHFPLXk2aXVJQjBsVW9QNGVpdDVJLTk0blY2a1RJV1dGMlYxVlBETTdoY3BKNHB0SnBUcHM3X0NSSUtlMGtkOHpXUi1qZ3dTdm15ME5GOXQzM2lBRzBvQTJlNC1YaVJUMF9jUUw3cEt4WW04U1QyaWpqSU82OGxUZVU3X1lNdlRhVG9tbHlkV0NKVC1oa3RXRlBvRzJxMzhxbERvcGs2bWFFRl9Wdm9XWk00bkRuTXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1796
    },
    {
      "date": "Aug 14",
      "text": "Israel conducts strikes in Lebanon and Gaza.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1796
    },
    {
      "date": "Aug 14",
      "text": "Lebanese PM condemns Israeli strikes in south Lebanon as a violation of international law.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxPRnB4UF9QTFotQjZJTEhMQWhtX0VqQ2czNjlLMFBzYlJ6enBpQnE2anVNaGtNR0RnUEJoeFI2OW9EV1NvUUtZVHR2WkZWRU5NR0lzUnhrMnhUbm9XN2Z3aXZzV081cFV1YUVqVmF2bE1YS1NQX04yRmZhYXR6eWc3RnppZTlldDhTb3ZIY0dWYUJvamxZNjl1cG5SOFk3ck5waVNmSlhaRC16TlUtTkHSAbMBQVVfeXFMT3d0QnR0SEVDM3lfTWtxejVDOVotWGpCRFJsUHZyamZxVW1RWWVMMlBxT3IxUlFYaVF0aHVNTkNFdXVCY200RTZnN1M1V2pvZ3hoLTB5RnZxVDlPY2NpWmp1MURSUlZGYkZOX0pLX3RDd2RYdTBpblJyVjNJNmdRWHp6eGVVbGNkX21kT2lvV2pKeEVwMjRKWi1lci1VaUNIS1Z5cmF3WElBbV9iaFV0SmtibTA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1796
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
      "perspective": "US Administration",
      "headline": "Trump pivots to sanctions, claims oil flowing normally",
      "summary": "The Trump administration is reportedly pivoting back to sanctions for Iran, with claims that oil is flowing normally despite data casting doubt on US control of the Strait of Hormuz. Trump also states the Lebanon ceasefire is working.",
      "tone": "strained",
      "latestSinceUpdate": 1768
    },
    {
      "perspective": "Iran",
      "headline": "Iran demands war damages, elevates confrontational military",
      "summary": "Iran demands the U.S. pay for war damage before reopening the Strait of Hormuz. The supreme leader has elevated military veterans willing to confront the US, with an IRGC adviser stating the U.S. military is 'weaker than what we perceived'.",
      "tone": "defiant",
      "latestSinceUpdate": 1768
    },
    {
      "perspective": "International Mediators",
      "headline": "Pakistan pushes for US-Iran talks amid peace deal hopes",
      "summary": "Mediators, including Pakistan, are actively pushing for US-Iran talks, with Pakistan suggesting the two nations are close to a 'peace arrangement or a deal'.",
      "tone": "anxious",
      "latestSinceUpdate": 1768
    },
    {
      "perspective": "Skeptical Observers",
      "headline": "Iran war a 'quagmire', oil claims questioned, Lebanon ceasefire a 'prison'",
      "summary": "Commentary suggests the Iran War is a 'whole new level of quagmire for the US'. Claims by the Trump administration regarding normal oil flow are questioned, and the Lebanon ceasefire is described as a 'prison' by residents.",
      "tone": "skeptical",
      "latestSinceUpdate": 1768
    }
  ]
});

export default LATEST_SNAPSHOT;
