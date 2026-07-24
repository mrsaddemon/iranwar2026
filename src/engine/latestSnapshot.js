export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1439,
  "lastUpdated": "2026-07-24",
  "lastSyncedAt": "2026-07-24T11:14:12.619Z",
  "warDay": 147,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-24",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 10,
    "summary": "A ceasefire deal in South Lebanon is in effect, with Israeli forces withdrawing and Lebanese troops deploying, though localized Israeli blasts have been reported."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
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
      "date": "Jul 23",
      "text": "Oil tops $100 a barrel, Houthi attack in Red Sea marks new escalation.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFAwS09NMm0xR0ZNSU9VRV9lSkdpdW9QRGF1VHZZakt0VWdMN0tzRWRmYVM4SlZKRGc5c2UzLS1CWEU5VWdnSFZNQ1l5VVpZa05WTF9yVUE1Z3BkcncyVlltZXFPMXNrVFlOb3VSYWVB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1438
    },
    {
      "date": "Jul 23",
      "text": "Iranian drones target Erbil, as 4 dead in US strike on Ahvaz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxOOTd2aWM4cUZhUU9yNEthRk5KMEcta21uU2l3cm52ZGRNSFdPLW1RUk1WdGJtdXdqR0dtWlZlcHBFMUxiQVBhbkdvTVBfZDJxLThWdUhhNmhaZENwVHkwa2c5THNSc0toYW94RE54SklUUDRHQ042dk9GX294bVpYZXpiUDBOQXVCVXJLeEMxUzZ3M1NtX3J6c05NQ1BGckIw0gGmAUFVX3lxTE5JNWg1RnF3U2tkRzF6QWsxLTEwTFNza2owc1Y5dUZEcnpsXzBSc0g2ZlZjWFFNVHJrazdab2pqU0U0Q3lGcXhJc3hkcmRyMXhlVTVSWGNKSGtIQjhlTjM3bGtFUmZGTWJ2Yjhha0JGMlZlb3luaG5LQ3RjSVVjSWJWVzc3dHBmRE1sOU9iQ3NkbDZKbmI3YnZGWjJhTXM3d01jQ2pNR3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1439
    },
    {
      "date": "Jul 23",
      "text": "US military carries out strikes on Iran as both sides threaten civilian infrastructure.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQVkxVRHNEai1jeXMzeVdPZVZqZmJvUjBqdTY5ZVZyWEp5bC0yWFJTWldhSlhlbFhoRmEwcFBnNkk0UWdDdHZMWFRXMk5acElxZEFSQ0otZzFQRElSMXdER1NlT0ptZUxVbTRPT3dFM25rOGtsb08yLUdXRll4SkhUZk9QejZ2RWZrb1hLcmhBYktXeEhrTTZIR3FTSTN6RUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1439
    },
    {
      "date": "Jul 23",
      "text": "Trump threatens to hit bridges and power plants if Iran strikes in Strait.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOd2d4ajBjWjdUZEplZjlpNS1mWkRLZ2hqU0VUNUx4TXFsVEhVd25ZWWxENGNsWUNidVNiVThJQWhyRHpHYjhZRXFhQ2tQbGxwSFRiZHJ4YmFLZFFaNWVlQ1piRVYwYUtXcGZGaTBZaEp1a2J3X2VseGpRUmUwZEU3Mm1oVzN2TnZwU05pLVFBOExkUVI4YlBJLWhIbEp0ME43VXlHeGhKNEJUVy03WEZROUtJeXJqVmUzaDBCONIBwgFBVV95cUxNZnlKX1pwZUQxSFo1NnE3ZF85MmRwWE84UmhaaEdvQmtXYmtxTEI4dVRFU19XSGZtU1VTdkQtajN1Q3pkNEN5akcwalBUTlNYUTJYbVZOZkQtX21ET3c3U19ZaUwwTHY3M2o4b1NsYUpEcnhtTEpaOWZLVlhNcUF3X0RMNzNRdzFxbzFoQ2FoNkluS1ZHVllwb3o0d092UWY2dVB3UEQwOHNZMEVwR3pvdWJaeWJSTkNQbnpyLWhSTzB4QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1438
    },
    {
      "date": "Jul 23",
      "text": "U.S. Concludes 13th Night of Strikes on Iranian Military Targets.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxOVS1CM2pSUG1ZUkt3TEc0b3pxVFEtYmtZUHZCeGdhamFVV2dROXVtM0l5VlZiUFBYVWlMalZNOURfTUtaTUo5Tk5ZVnVKbTZRaUhpUFVQV3N3a213UGd1ZFVTbk91Y3dFZzNQNlhfZ3RJcjd3bzlCRVZkTVB1SzNoTDZ1YW5DTk9SNTlrMWhEQTFJd1pLSXVQdGpsZ0RWdmtjYlpnQ0xOZ2NmVkViQmZiN0lWeHN3eUVfTzVWbmNDZDB0Q0U?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "centcom.mil",
      "latestSinceUpdate": 1439
    },
    {
      "date": "Jul 23",
      "text": "UN urges evacuation of 6,000 sailors stranded in Hormuz strait.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMif0FVX3lxTE5QelAwSk40N2V6VXhndktKT2U2dHpRSzBZMnZhYTRKUHNZZEFrV0NNeDlpZF9tdDhWOEVaZ0YwOU1OZTkwZlZHVDFvX2VIajVSMjRTQ0FRakhXZTdtLXFOR2hOQ3lXdGVBZjREbnlRRVhMa000QTdFUUFsczdyeXM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Yahoo Finance UK",
      "latestSinceUpdate": 1439
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
      "perspective": "US Administration Stance",
      "headline": "Trump Vows Escalation Amidst Ongoing Strikes",
      "summary": "The Trump administration maintains a defiant posture, continuing military strikes and issuing threats of further escalation against Iran, while honoring fallen soldiers. There is a reported split in Congress regarding the administration's actions.",
      "tone": "defiant",
      "latestSinceUpdate": 1435
    },
    {
      "perspective": "Iranian Perspective",
      "headline": "Iran Recounts Damage, Navigates Regional Pressures",
      "summary": "Iran acknowledges significant damage from initial Israeli strikes and faces ongoing US military action. The Iranian foreign minister describes the impact of these strikes, while Iran also expresses concern over Hezbollah's stability in Lebanon.",
      "tone": "strained",
      "latestSinceUpdate": 1435
    },
    {
      "perspective": "Global Energy Market Concern",
      "headline": "Oil Producers Race to Bypass Hormuz",
      "summary": "Amid escalating tensions and military clashes impacting shipping routes, Mideast oil producers are actively developing alternative export routes to bypass the Strait of Hormuz. Oil prices have reached $100, reflecting market anxieties.",
      "tone": "anxious",
      "latestSinceUpdate": 1435
    },
    {
      "perspective": "Lebanese Security Transition",
      "headline": "Lebanese Army Deploys Post-Israeli Withdrawal",
      "summary": "Following an Israeli withdrawal, the Lebanese army is deploying to southern villages, indicating a shift in regional security arrangements under a US-backed framework. This move suggests a localized de-escalation or new security posture.",
      "tone": "neutral",
      "latestSinceUpdate": 1435
    }
  ]
});

export default LATEST_SNAPSHOT;
