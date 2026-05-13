export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 628,
  "lastUpdated": "2026-05-13",
  "lastSyncedAt": "2026-05-13T15:28:59.343Z",
  "warDay": 75,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-13",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 15,
    "summary": "The ceasefire is described as 'on life support' and peace talks are in disarray, with the US rejecting Iran's response."
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
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
      "text": "Iran Update Special Report released.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxPcFRzcWVvM0p0c3hJS1h2RlR3V1RvbGNwUS0zRThsZDhoN3E5cVZKREpEc1d2cHhlLVgyZXB1QlpJYXpUZ01ZMTZWNWFEd28yekM5N1N1MFExUERuQ3ZQaXQtaG9WdElicEpZOGFBZkNoUnpaTVU2TkdtMUpRWlJoME5XSFdyNFdCSTcwVlVPY25zSVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 628
    },
    {
      "date": "May 13",
      "text": "President Trump rejects Iran’s response to the latest US proposal to end the war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxQejcyNndvcnR3cEVKNS1tUHVaZWpyN0tmUTJNSXNjTm9Ia056WC1TV2ZaLVVlSm9wcURZZ2EwWWJTWlIyQjV3VkoxUWZoblRpZXRmeERjb240SlJ3MzBpa003Qm8wenAxd2ZUR01ocTNQUE82TXBaWnloQUxwUlBkcDd5aFpSVzkwdjk5eHk1V3p4bGhj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 628
    },
    {
      "date": "May 13",
      "text": "Israel kills a dozen individuals in Lebanon as peace talks remain in disarray.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNNDNTVHIzQV9CZkVFNkxuZ2YxVGRUX3VsOFFMN2JFY0VCeVNob2o3YUdBbU5DUFFjTndDSmJIcnk3UVRMODFHNk15blgwSy1tX2xvUDh6NnN4ZXVVNXQxek91dExtTlJlMFh0Z0Z3ZDhDbEdtVmtFMTFUSnBNbW4xQURuR2hyTXJ0U0czaWFrVnhYSU1CQkY1S1lNVnJoN2tzaE51X3h0ZldiVjJUYmNlVDRPMnNKbWM2dTNKN3EySdIBxAFBVV95cUxPX1ZoMG9wT0owLWdmZjRCd3J4NEdydUtNS2M4OVpGYVZ6MDZOWDRnWmxZVmZXRDB2ZmVKaWVyTC0xM2d6Y3dKV09PU21HQ2Fya0Yyb052V3YwT0RmQUM2OEZDei1jQThPdjVUY3p2MGN3YWFyTTVIWWstTDVHVGFfdXNPTEYzTG5WQ2RiMWl1eFNTclNGaXhyRzdnQ1ZPOTlndWE3d2pubnNjUEN0WTFqUWwtZUo1Ymd0aHl4QUVHSk8ycHBs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 628
    },
    {
      "date": "May 13",
      "text": "President Trump states Iran must make a deal or face renewed attacks.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 628
    },
    {
      "date": "May 13",
      "text": "Report indicates UAE secretly launched strikes on Iran during the war, attacking an oil refinery.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQMGZaTHQ2QzNRV3F5M2gyMTdERzBxVC1jMzByLUtYYWN3Vl8xSXJZTFVKZ1pVNUxUTUllallITEVublhBUl9FWjFoWWU1WHlIalktR0thTk9sRTUzZnowV1Nqa0lOaS1yakNadnAzZElfWVhpWDJDaWxsRWZweTg0c1NHNVlwNVNORklnc2thci0ybUdDVlQyX1JuTGk0WlhHcUl6WDdiMNIBrAFBVV95cUxOOE1Tcm8xajVaTXp5U25RSjZ3T21jOVpldHBvOEVMemF4WnZxTF9IRGJNbVVyWnZscGlGNjRMM05NVzB6SUFMMk1Ec0ljODVXcUVFUEpPUVpXUU43b01vakVLdWdKLVAxOUxxRjRhQTVMNnFNWjdFWElxOG9HWWRaSG9EWGFpWEtQbTlsWi1URkhmTFd4SUFvdjFMcndPTlNackhWWnJoMDFBTWRH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 628
    },
    {
      "date": "May 13",
      "text": "Israel kills 24 individuals in Lebanon as the US awaits Tehran’s reply.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNZmpsanI2RlZnQW52VjcwN2w4RXNYN1RJOGNDaFJCSmhBOExiUzJuM3RIcjh4eVd5TC0zTHAwdHhtam5wZFRGX1I4WThJYklza3hlMGFBcThXaE1mWGFWaXM3WnY1YVY4aWxzS0Y3OGVucU43ejhNTEpWU3FjUy0zVkk0Q1VqUi1IeFFDZ2h5aTZCNDRkRkJHWTlqaklVVkJVMmZuUnFwSG1PU29tcTFBMUMyYTBKei1DVVZr0gHAAUFVX3lxTE15eEZPZjVBV0M1V2dQVXJ6X0EwdUhybzNjOEhmb2tiM1hxRTlpM0dCN29DV25jQ1oxb1U0UlcwMGNya2I3ZG5ERU53RGMxZ21WampsQWRwcXJDeUpxNG9MQWx0bjB4Wlh3c3JzdXBzVmFCQ3lOVUxqNzRzQm16RXZCY1pyV3R0Y2JUWFByN2N1WGVYakcwTXRmajFKRTZDc2xZV3E1emtMS3lhdFc1NEdSbjZuRGlDaHRkWUc4UzF6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 628
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
