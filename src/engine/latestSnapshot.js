export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 618,
  "lastUpdated": "2026-05-12",
  "lastSyncedAt": "2026-05-12T18:09:18.189Z",
  "warDay": 74,
  "summary": "A fragile ceasefire between the US and Iran is on 'life support' following President Trump's rejection of Tehran's peace proposal, while Israel conducts strikes in Lebanon and tensions rise over the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-12",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 3,
    "summary": "A proposed ceasefire between the US and Iran is highly unstable, with President Trump rejecting Iran's peace proposal and ongoing military actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.3,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "May 11",
      "text": "President Trump rejected Iran's peace proposal, stating the ceasefire is on 'life support' and calling the proposal 'garbage'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNdl9NX19SZFZUZzlTLTA4MEtocURLY2M2T2FKUy1qbW5QVzkzY3NGMC0tQ2d3SjRxMlZpak5TNnVDOFY2S19LcENGdk96TGcyTFV0YlVsOEV1YjAzU0tNQmZPYXF6aFk3RzNmWGlxN1hUZnlFUy15TEhRSkRZbkRLelBZLUJ6aVBUcDNPUFNhX2QxOF90S3pBV3hJY3had1JjclI2WVR2RWk5SE0zVlFBZzlVY1d5MTN0YnVLQXdfd9IBxAFBVV95cUxNdDdFOUxQMG5lNDdDczhJSGxxTG15LXRMVUdQTFdHYmFOR0pYYXhYS0c3YmI5ZmVfNkJIM3hXeERmanpYUGN5VDFkTk9YNXVOc1FYczNwSTVoYnRRbnBOWWF5QzE1dVF1ejJ4X2lnTHlJVjZFd0RiejJrWUZhWGpMM05mek1UQWt4SXNGbzJSZm45THpvd0xNYUdDVllUZVVSdU82dnR2QzJoeW9sMVZ5TWtkU2Iwb2tsSlpYYjNON3NFVkt4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 618
    },
    {
      "date": "May 11",
      "text": "Israel killed 24 people in Lebanon and struck Beirut for the first time since the Lebanon ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxPTUU2emZXNHZiQ3V3dHVuMklCOHI3TzZRWTZRM2laZEZwZFdvcm14Qm1SaTJhbWhDcUdYZklQNnpBZ0laZmRZODhGbXF0NTNXUWV0aElZNVJDNG5EWmNQOHFFVjJTS0hnRTZLekhoUDhDUkxZX2dIUWVCa3pvcVJ6UFVwN29YQ2pxM1ZuTjJlRDBOOTRMYnoyY0VmZ00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "DW.com",
      "latestSinceUpdate": 618
    },
    {
      "date": "May 11",
      "text": "The Pentagon revealed the cost of the Iran war has increased to $29 billion and is seeking additional funding.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxON0M4M3NfWWRIOFFuYjBDUi13bmFxODJpdXM2QjVLaEpINldLc1JiN3pDTW5FRDJ4WWkzYlNpU0FSQTRpUU1yYUtrWS04Q3VGYnVteng5TFdxZ0gzX09RdzV5ekRRRUgwWjdnSTFySEkyVU1BWk03Rjc0ckdGcE9EUzhHZ0VGZFZhSDlQT0FoN2U2Wi0xakg3Q3NLRDhTWG4tTGgyQXRVUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "USA Today",
      "latestSinceUpdate": 618
    },
    {
      "date": "May 11",
      "text": "Iran defined the Strait of Hormuz as a far larger zone, leading to accusations of holding the world's economy hostage.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE1mb2FmV2Z1S1NyUGxCZlY3ZFVGT096LVZnd01XZHdrXzNMY1hYZmRiZ21pYWNpdnFEVzRFMmltSUs0bTgwU21KaVlOQ25zRTBZRU91eWNR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 618
    },
    {
      "date": "May 11",
      "text": "The UK pledged drone boats to help secure the Strait of Hormuz amid rising tensions.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxOZVhuZDNJWTVaUDZscndsa2dBTElUZVhmODVtT2tzQWx1ZW5saWFzaHJMNkRHYi15aFlJeDVNbkhEQ3JJR3ZocE5vZ2ZBMmZuRWZTNUk3NWxWbzRkYmVOaEVjcUcwbEdIWVJoRGFSQWM3OVZlOEFqWE5HNVU5a2JVNzNYVXhhS1VhMkgzT0t3QVY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "politico.eu",
      "latestSinceUpdate": 618
    },
    {
      "date": "May 11",
      "text": "Hezbollah leader urged Lebanon to quit direct talks with Israel and stated the group's weapons are not a subject of talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxNLWtFUjM1ZC03MExaZDBoZXBBOVhvV2NTbS01VmstcjdGYUlBNjQ3YUFOLVRBVDc4U2pYazlad1pfUDY1cEltTW1ja01XSzd1bnRfZVhNUEFkYmc4dFpVdmlLZU1kOGtRV1FjLVdsU2xYNlQ2cVJGc2FDSUNUaTZJeEt5MnpCN1VaY1lCZkd6bw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Yahoo",
      "latestSinceUpdate": 618
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
      "perspective": "US/Trump Administration",
      "headline": "Trump Rejects Iran's Offer, Threatens More Strikes",
      "summary": "President Trump has rejected Iran's latest peace counteroffer as 'totally unacceptable', stating the ceasefire is on 'massive life support'. He threatens more strikes if a deal is not signed 'fast'.",
      "tone": "defiant",
      "latestSinceUpdate": 611
    },
    {
      "perspective": "Iran",
      "headline": "Iran Vows Defiance Amid US 'Reckless Adventure'",
      "summary": "Iran states it will 'never bow' to pressure after the US rejected its peace proposal, accusing the US of 'reckless military adventure' and highlighting its military playbook to cripple Iran.",
      "tone": "defiant",
      "latestSinceUpdate": 611
    },
    {
      "perspective": "Lebanon",
      "headline": "Lebanon Seeks External Pressure for Ceasefire",
      "summary": "Amid rising Israeli killings, Lebanon is seeking US pressure on Israel to halt attacks and operations, also turning to Saudi Arabia in pursuit of a ceasefire.",
      "tone": "anxious",
      "latestSinceUpdate": 611
    },
    {
      "perspective": "Analysts/Observers",
      "headline": "Ceasefire Pretence Over, US Retreat Predicted",
      "summary": "Observers suggest the 'pretence of a ceasefire' is over following increased Israeli strikes in Lebanon. Some predict the war on Iran will likely end in an American retreat.",
      "tone": "skeptical",
      "latestSinceUpdate": 611
    }
  ]
});

export default LATEST_SNAPSHOT;
