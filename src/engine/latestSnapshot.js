export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 620,
  "lastUpdated": "2026-05-12",
  "lastSyncedAt": "2026-05-12T21:42:35.679Z",
  "warDay": 74,
  "summary": "Ceasefire talks between the US and Iran are stalled, with President Trump issuing renewed threats against Tehran amidst ongoing regional military actions and escalating tensions in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-12",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 3,
    "summary": "Ceasefire talks between the US and Iran have stalled, with President Trump stating the agreement is on 'life support' after rejecting Tehran's proposal and threatening further action."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
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
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 68,
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
      "date": "May 11",
      "text": "Trump states ceasefire with Tehran is on ‘life support’ and will be 'decimated' if peace deal isn't reached, rejecting Tehran’s proposal.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNdl9NX19SZFZUZzlTLTA4MEtocURLY2M2T2FKUy1qbW5QVzkzY3NGMC0tQ2d3SjRxMlZpak5TNnVDOFY2S19LcENGdk96TGcyTFV0YlVsOEV1YjAzU0tNQmZPYXF6aFk3RzNmWGlxN1hUZnlFUy15TEhRSkRZbkRLelBZLUJ6aVBUcDNPUFNhX2QxOF90S3pBV3hJY3had1JjclI2WVR2RWk5SE0zVlFBZzlVY1d5MTN0YnVLQXdfd9IBxAFBVV95cUxNdDdFOUxQMG5lNDdDczhJSGxxTG15LXRMVUdQTFdHYmFOR0pYYXhYS0c3YmI5ZmVfNkJIM3hXeERmanpYUGN5VDFkTk9YNXVOc1FYczNwSTVoYnRRbnBOWWF5QzE1dVF1ejJ4X2lnTHlJVjZFd0RiejJrWUZhWGpMM05mek1UQWt4SXNGbzJSZm45THpvd0xNYUdDVllUZVVSdU82dnR2QzJoeW9sMVZ5TWtkU2Iwb2tsSlpYYjNON3NFVkt4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 620
    },
    {
      "date": "May 11",
      "text": "Report indicates UAE secretly launched strikes on Iran during war, attacking an oil refinery.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxQMGZaTHQ2QzNRV3F5M2gyMTdERzBxVC1jMzByLUtYYWN3Vl8xSXJZTFVKZ1pVNUxUTUllallITEVublhBUl9FWjFoWWU1WHlIalktR0thTk9sRTUzZnowV1Nqa0lOaS1yakNadnAzZElfWVhpWDJDaWxsRWZweTg0c1NHNVlwNVNORklnc2thci0ybUdDVlQyX1JuTGk0WlhHcUl6WDdiMNIBrAFBVV95cUxOOE1Tcm8xajVaTXp5U25RSjZ3T21jOVpldHBvOEVMemF4WnZxTF9IRGJNbVVyWnZscGlGNjRMM05NVzB6SUFMMk1Ec0ljODVXcUVFUEpPUVpXUU43b01vakVLdWdKLVAxOUxxRjRhQTVMNnFNWjdFWElxOG9HWWRaSG9EWGFpWEtQbTlsWi1URkhmTFd4SUFvdjFMcndPTlNackhWWnJoMDFBTWRH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 620
    },
    {
      "date": "May 11",
      "text": "Israel kills 24 people in Lebanon, raising questions about the ceasefire's status.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 620
    },
    {
      "date": "May 11",
      "text": "UK announces it will send drones and a warship to secure the Strait of Hormuz as Tehran’s nuclear threats escalate.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxQSUtzS2lhSnYxX3ptRFh3dlNSbFZlX1FVNkt2STEwOWttdUJRN3ZrdGlkT1dydlhmd2ZlY2VCTkFNTlgzX3dGcEVkQ1BEdVdpQ3VWOGpxbGkybWRyV1BIMG9ELXQyU1Nab0R4bFJTaTJEakdxUm5qb3o0X0hPdUg5T2hnZk1RaVB1TTJ5M0tJaEhnZGYyN2c1Q1FPcGJsOVJMRzQ5ZS1PV3k3UTJaR2U2OGJ2S3VTSmdYU1pVbVJZZUVzRGdFb1E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 620
    },
    {
      "date": "May 11",
      "text": "An IRGC officer states Iran now defines the Strait of Hormuz as a far larger zone.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxONG9zdW1tRWZScUdVelBneWZwNUk2UlJ1ZGMzc2lZUXZaT19Ea1Y0Q1ZscjBKNUhSaXpfZEJ0YWxoWEkzQncxWlFWcllJdGFrajhsTFY0TVVsRWJyZDF2dC1oMzRvM3pXenIweFBqbGxveVFjSm1udVBMVHZqWUVCMFp4bXBCbkNqZnRXZ1AweTVNZUZiR3JscXNsTUtnY3J2SW1mQlA0cmRUSGh4aHdubmpyZEFxazRUcmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 620
    },
    {
      "date": "May 11",
      "text": "Pentagon estimates the Iran war cost at $29 billion.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 620
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
