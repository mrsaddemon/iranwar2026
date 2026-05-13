export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 625,
  "lastUpdated": "2026-05-13",
  "lastSyncedAt": "2026-05-13T08:17:24.822Z",
  "warDay": 75,
  "summary": "Ongoing conflict between Iran and Israel continues with renewed strikes in Lebanon, while a US-Iran ceasefire is reported to be on 'life support' amidst diplomatic efforts and heightened tensions in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-13",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 20,
    "summary": "The US-Iran ceasefire is reported to be on 'life support' following an 'unacceptable' peace proposal from Tehran and renewed Israeli strikes in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "May 12",
      "text": "Trump and Xi to hold high-stakes talks amidst global tensions.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNNDNTVHIzQV9CZkVFNkxuZ2YxVGRUX3VsOFFMN2JFY0VCeVNob2o3YUdBbU5DUFFjTndDSmJIcnk3UVRMODFHNk15blgwSy1tX2xvUDh6NnN4ZXVVNXQxek91dExtTlJlMFh0Z0Z3ZDhDbEdtVmtFMTFUSnBNbW4xQURuR2hyTXJ0U0czaWFrVnhYSU1CQkY1S1lNVnJoN2tzaE51X3h0ZldiVjJUYmNlVDRPMnNKbWM2dTNKN3EySdIBxAFBVV95cUxPX1ZoMG9wT0owLWdmZjRCd3J4NEdydUtNS2M4OVpGYVZ6MDZOWDRnWmxZVmZXRDB2ZmVKaWVyTC0xM2d6Y3dKV09PU21HQ2Fya0Yyb052V3YwT0RmQUM2OEZDei1jQThPdjVUY3p2MGN3YWFyTTVIWWstTDVHVGFfdXNPTEYzTG5WQ2RiMWl1eFNTclNGaXhyRzdnQ1ZPOTlndWE3d2pubnNjUEN0WTFqUWwtZUo1Ymd0aHl4QUVHSk8ycHBs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 625
    },
    {
      "date": "May 12",
      "text": "Pentagon estimates Iran War cost at roughly $29 Billion.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 625
    },
    {
      "date": "May 12",
      "text": "Trump warns Iran to make a deal or face renewed attacks.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 625
    },
    {
      "date": "May 12",
      "text": "Report reveals UAE secretly launched strikes on Iran, targeting an oil refinery.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQMGZaTHQ2QzNRV3F5M2gyMTdERzBxVC1jMzByLUtYYWN3Vl8xSXJZTFVKZ1pVNUxUTUllallITEVublhBUl9FWjFoWWU1WHlIalktR0thTk9sRTUzZnowV1Nqa0lOaS1yakNadnAzZElfWVhpWDJDaWxsRWZweTg0c1NHNVlwNVNORklnc2thci0ybUdDVlQyX1JuTGk0WlhHcUl6WDdiMNIBrAFBVV95cUxOOE1Tcm8xajVaTXp5U25RSjZ3T21jOVpldHBvOEVMemF4WnZxTF9IRGJNbVVyWnZscGlGNjRMM05NVzB6SUFMMk1Ec0ljODVXcUVFUEpPUVpXUU43b01vakVLdWdKLVAxOUxxRjRhQTVMNnFNWjdFWElxOG9HWWRaSG9EWGFpWEtQbTlsWi1URkhmTFd4SUFvdjFMcndPTlNackhWWnJoMDFBTWRH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 625
    },
    {
      "date": "May 12",
      "text": "Israel kills 24 in Lebanon as US awaits Tehran’s reply to peace proposals.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNZmpsanI2RlZnQW52VjcwN2w4RXNYN1RJOGNDaFJCSmhBOExiUzJuM3RIcjh4eVd5TC0zTHAwdHhtam5wZFRGX1I4WThJYklza3hlMGFBcThXaE1mWGFWaXM3WnY1YVY4aWxzS0Y3OGVucU43ejhNTEpWU3FjUy0zVkk0Q1VqUi1IeFFDZ2h5aTZCNDRkRkJHWTlqaklVVkJVMmZuUnFwSG1PU29tcTFBMUMyYTBKei1DVVZr0gHAAUFVX3lxTE15eEZPZjVBV0M1V2dQVXJ6X0EwdUhybzNjOEhmb2tiM1hxRTlpM0dCN29DV25jQ1oxb1U0UlcwMGNya2I3ZG5ERU53RGMxZ21WampsQWRwcXJDeUpxNG9MQWx0bjB4Wlh3c3JzdXBzVmFCQ3lOVUxqNzRzQm16RXZCY1pyV3R0Y2JUWFByN2N1WGVYakcwTXRmajFKRTZDc2xZV3E1emtMS3lhdFc1NEdSbjZuRGlDaHRkWUc4UzF6LQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 625
    },
    {
      "date": "May 12",
      "text": "Israel strikes Beirut for the first time since the Lebanon ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxPTUU2emZXNHZiQ3V3dHVuMklCOHI3TzZRWTZRM2laZEZwZFdvcm14Qm1SaTJhbWhDcUdYZklQNnpBZ0laZmRZODhGbXF0NTNXUWV0aElZNVJDNG5EWmNQOHFFVjJTS0hnRTZLekhoUDhDUkxZX2dIUWVCa3pvcVJ6UFVwN29YQ2pxM1ZuTjJlRDBOOTRMYnoyY0VmZ00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 625
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
