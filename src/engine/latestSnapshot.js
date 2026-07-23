export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1434,
  "lastUpdated": "2026-07-23",
  "lastSyncedAt": "2026-07-23T23:31:04.879Z",
  "warDay": 146,
  "summary": "The US-Iran conflict continues with intensified US strikes and threats from President Trump, while oil prices rise due to regional attacks and the US House attempts to limit presidential war powers.",
  "lastNarrativeUpdate": "2026-07-23",
  "ceasefire": {
    "active": false,
    "status": "collapsed",
    "confidence": 0.14,
    "durationDays": 10,
    "summary": "A previous ceasefire has broken down, and the conflict between the US and Iran is ongoing."
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
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Jul 23",
      "text": "US troops killed in Trump’s Iran war are remembered for lives of service.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTE9nY2lST0RnYklyRk9Bam85NVZMNEREVHlQZFBFV3NjeHdOMVpuWkFqMllKcVQ4eEs5eGtTWGFYZHRENzd0cTd0azh4cE5hMU1sQmdKcGlRZGI0NVlEX0g3aUJVYjRCOXBieXNDMkZLQXhxQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1434
    },
    {
      "date": "Jul 23",
      "text": "Oil tops $100 a barrel as Houthi attack on Saudi vessels in Red Sea marks new escalation.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAwS09NMm0xR0ZNSU9VRV9lSkdpdW9QRGF1VHZZakt0VWdMN0tzRWRmYVM4SlZKRGc5c2UzLS1CWEU5VWdnSFZNQ1l5VVpZa05WTF9yVUE1Z3BkcncyVlltZXFPMXNrVFlOb3VSYWVB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1434
    },
    {
      "date": "Jul 23",
      "text": "Trump warns of unprecedented ‘massive attack’ on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOQVI2TFJjMFduMWRzZ1B6dEYtWWVTcHYyWFJ6NjVaNlpzaWxleklxUmNRMVFfMzlCNjhhU21mMmNoTk9zTjZ2NGZZbGxNR3FXYzQyM29uc3N1bkNXLURCTmwtNHF5RU5xNHVNQWlnR0hYanhOeXV1SzgyN1dVam5vZElpZ2NENktUTUFhX2RLdi15UXBZZTRWUkZNT3Q5bW9melEtN0R1Z0ZPeldvOFl5WS10czRjbVE0TXpWR2RIZ9IBxAFBVV95cUxOYTJ6dmJvYTV3RkFscUNkQVNjMEVLZUN5TGVydTVEd2VHeXp3YkU1blpTX1Vrb2Q1SVBUaTVYSm4wV2VjUWlsMmwzZWRKYkpiaEdSSEpGaUVlSEpuRzMzX09nczZ5RGVqTWgzRGpCQ09rWEpPQjduQnJkdVZOanFldk84aHZyZEc5UE5LU1dkUnpxUDlVUEtBTmtQZUVhaW9hWVp6d2xuYm55a0ZsUnU1ak5RMFFyejU2ZEdRdlVpSDh5dEh1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1434
    },
    {
      "date": "Jul 23",
      "text": "US says new strikes under way; Trump threatens bridges.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOd2d4ajBjWjdUZEplZjlpNS1mWkRLZ2hqU0VUNUx4TXFsVEhVd25ZWWxENGNsWUNidVNiVThJQWhyRHpHYjhZRXFhQ2tQbGxwSFRiZHJ4YmFLZFFaNWVlQ1piRVYwYUtXcGZGaTBZaEp1a2J3X2VseGpRUmUwZEU3Mm1oVzN2TnZwU05pLVFBOExkUVI4YlBJLWhIbEp0ME43VXlHeGhKNEJUVy03WEZROUtJeXJqVmUzaDBCONIBwgFBVV95cUxNZnlKX1pwZUQxSFo1NnE3ZF85MmRwWE84UmhaaEdvQmtXYmtxTEI4dVRFU19XSGZtU1VTdkQtajN1Q3pkNEN5akcwalBUTlNYUTJYbVZOZkQtX21ET3c3U19ZaUwwTHY3M2o4b1NsYUpEcnhtTEpaOWZLVlhNcUF3X0RMNzNRdzFxbzFoQ2FoNkluS1ZHVllwb3o0d092UWY2dVB3UEQwOHNZMEVwR3pvdWJaeWJSTkNQbnpyLWhSTzB4QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1434
    },
    {
      "date": "Jul 23",
      "text": "US informs Israel of plans to intensify Iran strikes in coming days.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxPenNFZ2Y4ZWh6dUpKVXQxQjFKLV82amRrTVJMckptdElIaEhVQmNsWC0taGRZNjdzclpKNkVicWZ6OFR5YVNIaENRQnAzdEdHSXBLRmdtTlFHZi1CTGVQOVh2OWtpak82RVFjOVgxYzB1WEMtVF9tMWlHdmVqOXNmdkQ4TDFSQUd6SDM5dE5qR3o4Ni0xRm1HbklYME9rbGc0SEsxU3VVNmJTV0xHV0xwYkd2QTd6LUU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1432
    },
    {
      "date": "Jul 23",
      "text": "Iran's FM Araghchi describes surviving Israel's opening strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiXEFVX3lxTE56M3NPT25BaFFEcmZYWThOZTZ5UlRFVjNnQXRJMEZPb2U2VXhLWWlmUjFjZDl6ME5rZW1KWWtNOWRyWUE4TElRLWttZDRkWTNBc3M2SlRTeGROM1U4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 1434
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "US Stance",
      "headline": "US warns Iran on Hormuz, continues strikes",
      "summary": "US officials warn Iran's demands over the Strait of Hormuz are a dangerous precedent, while the US continues military strikes and threatens further heavy attacks in response to Iranian actions and troop deaths.",
      "tone": "defiant",
      "latestSinceUpdate": 1422
    },
    {
      "perspective": "Iranian Actions",
      "headline": "Iran continues attacks, avoids Israel",
      "summary": "Iran continues its attacks and makes demands regarding the Strait of Hormuz, while reportedly avoiding direct attacks on Israel due to fears of retaliatory strikes on its leadership.",
      "tone": "defiant",
      "latestSinceUpdate": 1422
    },
    {
      "perspective": "Regional Stability",
      "headline": "Lebanese army deploys in pilot zone",
      "summary": "The Lebanese army has deployed in a southern 'pilot zone' following an Israeli withdrawal, indicating a localized de-escalation in that specific area amidst broader regional tensions.",
      "tone": "strained",
      "latestSinceUpdate": 1422
    }
  ]
});

export default LATEST_SNAPSHOT;
