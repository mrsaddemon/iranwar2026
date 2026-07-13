export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1282,
  "lastUpdated": "2026-07-13",
  "lastSyncedAt": "2026-07-13T19:52:25.222Z",
  "warDay": 136,
  "summary": "The United States has renewed its blockade of Iran and launched new strikes, while threatening to charge tolls for passage through the Strait of Hormuz, leading to an exchange of fire with the IRGC.",
  "lastNarrativeUpdate": "2026-07-13",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is active; direct conflict and escalation are ongoing between the US and Iran."
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
        "precision": 0.7,
        "aggression": 0.5
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
    "nuclearIndex": 50,
    "escalationLevel": 90,
    "oilDisruption": 95,
    "tradeImpact": 85,
    "sanctionsPressure": 64,
    "globalPressure": 87,
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
      "text": "Trump renews Iran blockade and threatens to take control of the Strait of Hormuz, proposing a 20% toll for passage.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxQNWFGOFJuSzNYX1FIdUwzUlh3R3hEVDYxc2w5WmhaMWxfSFV0Q3lwU0poZXNfTzRzWmNwWjVULURYQzMyUHdlYV8yQUctLWQ1ZXdqalpuODBkd3FEWko2dFRjZGxaeTlwX3owSC1BVEpYRTZqUnNkaGpyMjhDeW03N3FOSFpsYUdmUEo4TUtzUDBEbVBGOUJrdmY0eFlIRi03UzNiVXpn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1282
    },
    {
      "date": "Jul 12",
      "text": "US and IRGC forces exchange fire over the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxPVjRMWlNaRDhUd1I4Y0pIa3ZQaDdqWUR2TUVCNGl5bDlVT0Y4LTF5LUhtTDR5Ynk5dkZ4bzJXRDBkSTg4VVoyTkdmU3o0bHZYLV9NZTVBaGlraGMxdWhEd3VjdFZNbXQ3SXlLcHkzMlNtR0lOMkxvWWo3ZlpnTTdIX2UtS1lMUGM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1282
    },
    {
      "date": "Jul 12",
      "text": "Iran rejects US claims over the Strait of Hormuz and mocks Trump's vow to charge tolls.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1282
    },
    {
      "date": "Jul 12",
      "text": "A Hezbollah lair built to attack Israel is reportedly unearthed beneath Beaufort's strategic bulwark.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPMG5BNnJkck5GOS0za01lWWhsVWc5X1M1OFI3NUtXOGMyckNpakFlU3FvVzlKRnkyVTg1V2FCMmpoRHhsRDBzM1lXNnpTQTZHcTB6bURsNkRIc0VUMWQ3cTNQdG1JNGt3Q2dWekNlcGxpWno3eTdidDR1X2hUdHI0WjNSa3FRckQxbk5OTkNWTG1WUVZaakRXUFF0cnRJWmREaWpwc3hoMmxoSk45QjhIMzR5X2ZENGx4dnM4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1282
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
