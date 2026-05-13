export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 631,
  "lastUpdated": "2026-05-13",
  "lastSyncedAt": "2026-05-13T21:00:20.968Z",
  "warDay": 75,
  "summary": "The Iran war continues on Day 75 with ongoing US involvement, escalating tensions in the Strait of Hormuz, and renewed Israeli strikes in Lebanon following a ceasefire collapse.",
  "lastNarrativeUpdate": "2026-05-13",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 15,
    "summary": "A previous Lebanon ceasefire has collapsed following Israeli strikes on Beirut, while no active ceasefire is in place for the broader Iran conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
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
      "date": "May 12",
      "text": "Tehran vows ‘no retreat’ in the ongoing Iran war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNNDNTVHIzQV9CZkVFNkxuZ2YxVGRUX3VsOFFMN2JFY0VCeVNob2o3YUdBbU5DUFFjTndDSmJIcnk3UVRMODFHNk15blgwSy1tX2xvUDh6NnN4ZXVVNXQxek91dExtTlJlMFh0Z0Z3ZDhDbEdtVmtFMTFUSnBNbW4xQURuR2hyTXJ0U0czaWFrVnhYSU1CQkY1S1lNVnJoN2tzaE51X3h0ZldiVjJUYmNlVDRPMnNKbWM2dTNKN3EySdIBxAFBVV95cUxPX1ZoMG9wT0owLWdmZjRCd3J4NEdydUtNS2M4OVpGYVZ6MDZOWDRnWmxZVmZXRDB2ZmVKaWVyTC0xM2d6Y3dKV09PU21HQ2Fya0Yyb052V3YwT0RmQUM2OEZDei1jQThPdjVUY3p2MGN3YWFyTTVIWWstTDVHVGFfdXNPTEYzTG5WQ2RiMWl1eFNTclNGaXhyRzdnQ1ZPOTlndWE3d2pubnNjUEN0WTFqUWwtZUo1Ymd0aHl4QUVHSk8ycHBs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 631
    },
    {
      "date": "May 12",
      "text": "Trump states Iran must make a deal or face renewed attacks.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 631
    },
    {
      "date": "May 12",
      "text": "Pentagon estimates Iran War cost at roughly $29 Billion.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 631
    },
    {
      "date": "May 12",
      "text": "UAE reportedly launched secret strikes on Iran during the war, attacking an oil refinery.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQMGZaTHQ2QzNRV3F5M2gyMTdERzBxVC1jMzByLUtYYWN3Vl8xSXJZTFVKZ1pVNUxUTUllallITEVublhBUl9FWjFoWWU1WHlIalktR0thTk9sRTUzZnowV1Nqa0lOaS1yakNadnAzZElfWVhpWDJDaWxsRWZweTg0c1NHNVlwNVNORklnc2thci0ybUdDVlQyX1JuTGk0WlhHcUl6WDdiMNIBrAFBVV95cUxOOE1Tcm8xajVaTXp5U25RSjZ3T21jOVpldHBvOEVMemF4WnZxTF9IRGJNbVVyWnZscGlGNjRMM05NVzB6SUFMMk1Ec0ljODVXcUVFUEpPUVpXUU43b01vakVLdWdKLVAxOUxxRjRhQTVMNnFNWjdFWElxOG9HWWRaSG9EWGFpWEtQbTlsWi1URkhmTFd4SUFvdjFMcndPTlNackhWWnJoMDFBTWRH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 631
    },
    {
      "date": "May 12",
      "text": "A Chinese tanker crosses the Strait of Hormuz amidst ongoing tensions.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 631
    },
    {
      "date": "May 12",
      "text": "Iran expands its definition of the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 631
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
