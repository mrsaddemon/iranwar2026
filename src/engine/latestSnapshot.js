export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 619,
  "lastUpdated": "2026-05-12",
  "lastSyncedAt": "2026-05-12T20:11:27.136Z",
  "warDay": 74,
  "summary": "A fragile ceasefire between the US and Iran is under strain amidst ongoing Israeli strikes in Lebanon, Hezbollah attacks, and escalating nuclear threats from Tehran prompting a UK military deployment to the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-12",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 3,
    "summary": "A ceasefire between the US and Iran is described as being on 'life support' by President Trump, with ongoing hostilities in Lebanon and rejected peace proposals."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 55
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
    "oilDisruption": 60,
    "tradeImpact": 44,
    "sanctionsPressure": 54,
    "globalPressure": 61,
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
      "text": "President Trump states the ceasefire with Tehran is on 'life support' and threatens 'decimation' if a peace deal isn't reached.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNdl9NX19SZFZUZzlTLTA4MEtocURLY2M2T2FKUy1qbW5QVzkzY3NGMC0tQ2d3SjRxMlZpak5TNnVDOFY2S19LcENGdk96TGcyTFV0YlVsOEV1YjAzU0tNQmZPYXF6aFk3RzNmWGlxN1hUZnlFUy15TEhRSkRZbkRLelBZLUJ6aVBUcDNPUFNhX2QxOF90S3pBV3hJY3had1JjclI2WVR2RWk5SE0zVlFBZzlVY1d5MTN0YnVLQXdfd9IBxAFBVV95cUxNdDdFOUxQMG5lNDdDczhJSGxxTG15LXRMVUdQTFdHYmFOR0pYYXhYS0c3YmI5ZmVfNkJIM3hXeERmanpYUGN5VDFkTk9YNXVOc1FYczNwSTVoYnRRbnBOWWF5QzE1dVF1ejJ4X2lnTHlJVjZFd0RiejJrWUZhWGpMM05mek1UQWt4SXNGbzJSZm45THpvd0xNYUdDVllUZVVSdU82dnR2QzJoeW9sMVZ5TWtkU2Iwb2tsSlpYYjNON3NFVkt4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 619
    },
    {
      "date": "May 11",
      "text": "Israel conducts strikes in Lebanon, killing 24 and hitting Beirut for the first time since the Lebanon ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxPTUU2emZXNHZiQ3V3dHVuMklCOHI3TzZRWTZRM2laZEZwZFdvcm14Qm1SaTJhbWhDcUdYZklQNnpBZ0laZmRZODhGbXF0NTNXUWV0aElZNVJDNG5EWmNQOHFFVjJTS0hnRTZLekhoUDhDUkxZX2dIUWVCa3pvcVJ6UFVwN29YQ2pxM1ZuTjJlRDBOOTRMYnoyY0VmZ00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "DW.com",
      "latestSinceUpdate": 619
    },
    {
      "date": "May 11",
      "text": "Hezbollah fires rockets and conducts drone attacks, wounding an IDF NCO and reservist in southern Lebanon.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 619
    },
    {
      "date": "May 11",
      "text": "The UK announces deployment of jets, drones, and a warship to secure the Strait of Hormuz amid escalating Tehran nuclear threats.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxQSUtzS2lhSnYxX3ptRFh3dlNSbFZlX1FVNkt2STEwOWttdUJRN3ZrdGlkT1dydlhmd2ZlY2VCTkFNTlgzX3dGcEVkQ1BEdVdpQ3VWOGpxbGkybWRyV1BIMG9ELXQyU1Nab0R4bFJTaTJEakdxUm5qb3o0X0hPdUg5T2hnZk1RaVB1TTJ5M0tJaEhnZGYyN2c1Q1FPcGJsOVJMRzQ5ZS1PV3k3UTJaR2U2OGJ2S3VTSmdYU1pVbVJZZUVzRGdFb1E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 619
    },
    {
      "date": "May 11",
      "text": "The Pentagon reports the US cost of the Iran war is nearing $29 billion.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxPVlc0OWhvTFBPN1JLWm5ZRV8tUFFpU21iNzBBMWxyS1htSW5wNkpFM3hYOUFicmFMWDllYXp4bmV3NmtZSHBIUHVoY2R1QlRySTFLZVpjVXcwa3lPVzdVQkFVRGtBbHZYUkJRbHV5NDd3M3VKb0VzQlZjUTlqbEF0c3U2OXZ5bXRCTUlVY2JOekE1VUU4MWszcHh5c1ZmVFZs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 619
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
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
