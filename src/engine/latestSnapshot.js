export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 623,
  "lastUpdated": "2026-05-13",
  "lastSyncedAt": "2026-05-13T01:31:29.565Z",
  "warDay": 75,
  "summary": "The ceasefire between the US and Iran is described as being on 'life support' by President Trump, who threatens renewed attacks if a deal is not reached, while regional conflicts and control over the Strait of Hormuz intensify.",
  "lastNarrativeUpdate": "2026-05-13",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 15,
    "summary": "The ceasefire is described by President Trump as being on 'life support' and 'weak' after he rejected Tehran's proposal, with threats of renewed attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.78,
        "aggression": 0.82
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.78
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 88,
    "tradeImpact": 64,
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
      "date": "May 11",
      "text": "Trump states ceasefire with Tehran is on 'life support' and threatens renewed attacks if a deal is not made.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNdl9NX19SZFZUZzlTLTA4MEtocURLY2M2T2FKUy1qbW5QVzkzY3NGMC0tQ2d3SjRxMlZpak5TNnVDOFY2S19LcENGdk96TGcyTFV0YlVsOEV1YjAzU0tNQmZPYXF6aFk3RzNmWGlxN1hUZnlFUy15TEhRSkRZbkRLelBZLUJ6aVBUcDNPUFNhX2QxOF90S3pBV3hJY3had1JjclI2WVR2RWk5SE0zVlFBZzlVY1d5MTN0YnVLQXdfd9IBxAFBVV95cUxNdDdFOUxQMG5lNDdDczhJSGxxTG15LXRMVUdQTFdHYmFOR0pYYXhYS0c3YmI5ZmVfNkJIM3hXeERmanpYUGN5VDFkTk9YNXVOc1FYczNwSTVoYnRRbnBOWWF5QzE1dVF1ejJ4X2lnTHlJVjZFd0RiejJrWUZhWGpMM05mek1UQWt4SXNGbzJSZm45THpvd0xNYUdDVllUZVVSdU82dnR2QzJoeW9sMVZ5TWtkU2Iwb2tsSlpYYjNON3NFVkt4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 623
    },
    {
      "date": "May 11",
      "text": "UAE reportedly launched secret strikes on an Iranian oil refinery during the war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQMGZaTHQ2QzNRV3F5M2gyMTdERzBxVC1jMzByLUtYYWN3Vl8xSXJZTFVKZ1pVNUxUTUllallITEVublhBUl9FWjFoWWU1WHlIalktR0thTk9sRTUzZnowV1Nqa0lOaS1yakNadnAzZElfWVhpWDJDaWxsRWZweTg0c1NHNVlwNVNORklnc2thci0ybUdDVlQyX1JuTGk0WlhHcUl6WDdiMNIBrAFBVV95cUxOOE1Tcm8xajVaTXp5U25RSjZ3T21jOVpldHBvOEVMemF4WnZxTF9IRGJNbVVyWnZscGlGNjRMM05NVzB6SUFMMk1Ec0ljODVXcUVFUEpPUVpXUU43b01vakVLdWdKLVAxOUxxRjRhQTVMNnFNWjdFWElxOG9HWWRaSG9EWGFpWEtQbTlsWi1URkhmTFd4SUFvdjFMcndPTlNackhWWnJoMDFBTWRH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 623
    },
    {
      "date": "May 11",
      "text": "Israel kills 24 in Lebanon as the US awaits Tehran’s reply to a proposal.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNZmpsanI2RlZnQW52VjcwN2w4RXNYN1RJOGNDaFJCSmhBOExiUzJuM3RIcjh4eVd5TC0zTHAwdHhtam5wZFRGX1I4WThJYklza3hlMGFBcThXaE1mWGFWaXM3WnY1YVY4aWxzS0Y3OGVucU43ejhNTEpWU3FjUy0zVkk0Q1VqUi1IeFFDZ2h5aTZCNDRkRkJHWTlqaklVVkJVMmZuUnFwSG1PU29tcTFBMUMyYTBKei1DVVZr0gHAAUFVX3lxTE15eEZPZjVBV0M1V2dQVXJ6X0EwdUhybzNjOEhmb2tiM1hxRTlpM0dCN29DV25jQ1oxb1U0UlcwMGNya2I3ZG5ERU53RGMxZ21WampsQWRwcXJDeUpxNG9MQWx0bjB4Wlh3c3JzdXBzVmFCQ3lOVUxqNzRzQm16RXZCY1pyV3R0Y2JUWFByN2N1WGVYakcwTXRmajFKRTZDc2xZV3E1emtMS3lhdFc1NEdSbjZuRGlDaHRkWUc4UzF6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 623
    },
    {
      "date": "May 11",
      "text": "Iraq and Pakistan strike energy deals with Iran as Tehran asserts control over the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxPeEV0N2V1QmJhSWFBeG9JZE5EV3I1RFpoY3hicVNfeG1BVWdwcDFXSUEwRzQ0SDJLVk5wQnhCSWc3MWJNcnFkNGRoTERUT0d4ZXJVU05iTHgtU3RwbW5SUHZRbXdUbERCclpXRDV6WHpnaERHM2cyX2ZmVlg1cDJTUHlNMmozVVVkeVcxdm5WSzNHQ0s3Nkx4dndEaUlfUHNzcVVYZDFtYWhZVWp4ajZuemQtdnMxWDVkNFRDSEo4ZHFHQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 622
    },
    {
      "date": "May 11",
      "text": "The UK pledges jets, drones, and a warship for a Strait of Hormuz defence mission amid concerns over safe passage.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE5GY1h3MEZaTHlkZFFOUHhJOHZqNnU0eVNyOV9oM1ZOR1IwOGZWSnB0UG80bFdwX29rQXlaaExtVEx0OU5fSWttS2ZHN3dZdjJqcWdRTGZNS1JEQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 623
    },
    {
      "date": "May 11",
      "text": "Hezbollah fires explosive drones at Israel after two Lebanon medics were reportedly killed.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilgJBVV95cUxPNzNUQkx3dkJPQ3NfVHVhcTdfWkotajRSZEI4WTlDa2FSbWxYUzIxWjNNUy0wRG9UUWJZQVlVczhmZWJKMDcxS0NmbzNVSFlDNC1idWI0a3ZSRXJvYXVsbDBLbE5UaFI0QjJRTktRRjNGYzJsanZaazVvMU5rMXM4RzZEbmVIR3BBNFZja2l0Qkg1QVVwUlc0c2lsUlF4d0I5Q3RTVjRCaE1kRjJFRGxxSzNmM1YzdG81RUUyWGh6c3F6cFJydXNNNmU0bHEwcDBGdm96RXZnX3BLRUNKLXFKWm5MVC1IaktFTlJnVjI2UHJ0X29LWnVuQzBGcVhJTkVZNHpCTEdwcTZPb29hcHZDMURCek1FUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Haaretz",
      "latestSinceUpdate": 623
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
