export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 629,
  "lastUpdated": "2026-05-13",
  "lastSyncedAt": "2026-05-13T17:36:20.415Z",
  "warDay": 75,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-13",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 1,
    "durationDays": 15,
    "summary": "Peace talks are in disarray and the ceasefire is reported to be on life support or collapsed, leading to renewed military actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "May 12",
      "text": "Israel killed a dozen individuals in Lebanon amidst disarray in peace talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNNDNTVHIzQV9CZkVFNkxuZ2YxVGRUX3VsOFFMN2JFY0VCeVNob2o3YUdBbU5DUFFjTndDSmJIcnk3UVRMODFHNk15blgwSy1tX2xvUDh6NnN4ZXVVNXQxek91dExtTlJlMFh0Z0Z3ZDhDbEdtVmtFMTFUSnBNbW4xQURuR2hyTXJ0U0czaWFrVnhYSU1CQkY1S1lNVnJoN2tzaE51X3h0ZldiVjJUYmNlVDRPMnNKbWM2dTNKN3EySdIBxAFBVV95cUxPX1ZoMG9wT0owLWdmZjRCd3J4NEdydUtNS2M4OVpGYVZ6MDZOWDRnWmxZVmZXRDB2ZmVKaWVyTC0xM2d6Y3dKV09PU21HQ2Fya0Yyb052V3YwT0RmQUM2OEZDei1jQThPdjVUY3p2MGN3YWFyTTVIWWstTDVHVGFfdXNPTEYzTG5WQ2RiMWl1eFNTclNGaXhyRzdnQ1ZPOTlndWE3d2pubnNjUEN0WTFqUWwtZUo1Ymd0aHl4QUVHSk8ycHBs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 629
    },
    {
      "date": "May 12",
      "text": "Israel killed 24 individuals in Lebanon as the US awaits Tehran’s reply.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNZmpsanI2RlZnQW52VjcwN2w4RXNYN1RJOGNDaFJCSmhBOExiUzJuM3RIcjh4eVd5TC0zTHAwdHhtam5wZFRGX1I4WThJYklza3hlMGFBcThXaE1mWGFWaXM3WnY1YVY4aWxzS0Y3OGVucU43ejhNTEpWU3FjUy0zVkk0Q1VqUi1IeFFDZ2h5aTZCNDRkRkJHWTlqaklVVkJVMmZuUnFwSG1PU29tcTFBMUMyYTBKei1DVVZr0gHAAUFVX3lxTE15eEZPZjVBV0M1V2dQVXJ6X0EwdUhybzNjOEhmb2tiM1hxRTlpM0dCN29DV25jQ1oxb1U0UlcwMGNya2I3ZG5ERU53RGMxZ21WampsQWRwcXJDeUpxNG9MQWx0bjB4Wlh3c3JzdXBzVmFCQ3lOVUxqNzRzQm16RXZCY1pyV3R0Y2JUWFByN2N1WGVYakcwTXRmajFKRTZDc2xZV3E1emtMS3lhdFc1NEdSbjZuRGlDaHRkWUc4UzF6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 629
    },
    {
      "date": "May 12",
      "text": "A report indicates the UAE secretly launched strikes on Iran during the war, attacking an oil refinery.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQMGZaTHQ2QzNRV3F5M2gyMTdERzBxVC1jMzByLUtYYWN3Vl8xSXJZTFVKZ1pVNUxUTUllallITEVublhBUl9FWjFoWWU1WHlIalktR0thTk9sRTUzZnowV1Nqa0lOaS1yakNadnAzZElfWVhpWDJDaWxsRWZweTg0c1NHNVlwNVNORklnc2thci0ybUdDVlQyX1JuTGk0WlhHcUl6WDdiMNIBrAFBVV95cUxOOE1Tcm8xajVaTXp5U25RSjZ3T21jOVpldHBvOEVMemF4WnZxTF9IRGJNbVVyWnZscGlGNjRMM05NVzB6SUFMMk1Ec0ljODVXcUVFUEpPUVpXUU43b01vakVLdWdKLVAxOUxxRjRhQTVMNnFNWjdFWElxOG9HWWRaSG9EWGFpWEtQbTlsWi1URkhmTFd4SUFvdjFMcndPTlNackhWWnJoMDFBTWRH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 629
    },
    {
      "date": "May 12",
      "text": "Trump stated Iran must make a deal or face renewed attacks, and threatened more strikes if a deal is not signed 'fast'.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 629
    },
    {
      "date": "May 12",
      "text": "Iran expanded its Strait definition and flexed control over Hormuz, striking energy deals with Iraq and Pakistan.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxPeEV0N2V1QmJhSWFBeG9JZE5EV3I1RFpoY3hicVNfeG1BVWdwcDFXSUEwRzQ0SDJLVk5wQnhCSWc3MWJNcnFkNGRoTERUT0d4ZXJVU05iTHgtU3RwbW5SUHZRbXdUbERCclpXRDV6WHpnaERHM2cyX2ZmVlg1cDJTUHlNMmozVVVkeVcxdm5WSzNHQ0s3Nkx4dndEaUlfUHNzcVVYZDFtYWhZVWp4ajZuemQtdnMxWDVkNFRDSEo4ZHFHQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 629
    },
    {
      "date": "May 12",
      "text": "Hezbollah's unjammable drones are posing a new threat to Israel, with the IDF intercepting an apparent drone.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxQU0NRRHljUFlnWTFlc3ppOThmbEtjWG5DNFFKNEhXMHViQ3hFVUdKQS1icTJtME8xTGZwX19WaEZMeVdwTXhtZmYyckgyT0ZkbzBidnlDZVZKRmRJMWN5dTE3Tjl0R2FmMlMzUWd1RjRjTWxlMHZ5Q1FhSzRmY3p4a2ZOQkJLZ29qaXpWQUlCZEFIWUwtcXp0ZXROQTZWbWVieXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 629
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
      "status": "unavailable"
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
