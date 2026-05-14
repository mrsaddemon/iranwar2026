export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 645,
  "lastUpdated": "2026-05-14",
  "lastSyncedAt": "2026-05-14T23:40:25.095Z",
  "warDay": 76,
  "summary": "The Iran war continues with US threats of renewed attacks, alleged ceasefire violations, and a ship seizure near the Strait of Hormuz, while Israel and Hezbollah engage in ongoing conflict despite ceasefire attempts in Lebanon, and China increases its regional influence.",
  "lastNarrativeUpdate": "2026-05-14",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 15,
    "summary": "Ceasefire attempts have largely failed, with Iran claiming US violations and fighting continuing between Israel and Hezbollah in Lebanon."
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
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 65,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 56,
    "globalPressure": 69,
    "allianceInfluence": 62
  },
  "alliance": {
    "russiaIntelSupport": false,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "May 13",
      "text": "Chinese vessels allowed to sail Hormuz as Trump meets Xi, who offered to help open the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxNZ1ItX3FLN3lDa096ZDFBakJITXpTNFl0UjItVXlFajlBVGlTWVpUMDh1a016Wk9NUjFVRUJuTFZteVRrN285YWVlVU1QVnFqcS1OMlpCOGl2UWZWZ0UzeVhfSWgzSllOc2YyMTk5cUxyaFJQRFdacHctN0R3NDhFb2JzTldPRW1rU1hKeWFaSnRwNU1jNllnWGdvM3ZQWGQzTXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "USA Today",
      "latestSinceUpdate": 645
    },
    {
      "date": "May 13",
      "text": "Trump states Iran must make a deal or face renewed attacks and threatens more strikes if a deal is not signed fast.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 645
    },
    {
      "date": "May 13",
      "text": "Tehran claims the US violated a ceasefire and targeted Iranian ships.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQWmMwcHRNRzF3SVdqU3A3dFJpS0YyUFp3aFhncHVDZ0FQd0xXSWJwdTFteUEya1d0VEkxazRtbkNyMi1hVV9SdTBBdktJM29GaHlOdThaS1M5cUlwdHo2RTFiSDNZLTlJb3VTTTFYdlVjemlYX2ZaWm9ubUhLOTdTUGdnMDZpVFh3RHlvbWZLODM3ZmlDeVFMRkJ0RlZNSDIzNWVNc3Z4UlpScGZheHdteTl2YUxlYnotWDFJ0gHAAUFVX3lxTE85dVRselp4VWZ0QXpJTXJTaEs2aS1tOUdGbXJjdVhiSXZ0TkxlMFI1RUdmZFVENFhQSjRQYk45ZzR4X2lpcU5XOHZwQ0JEcUtHaDZIS0FXNmlScjhhNUdmLXAwNmpqMkRPS3RTNGR2dFpHT3doWGVyTHRGUklYMm5qcDdjRTJKREQ2YmptMVctVVRsc08wUlNDRFBwOTFORUtaVTFSY1R2NDNJX28zZ3pLYzdNcXlWOGtwNVdpZ1Zxcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 645
    },
    {
      "date": "May 13",
      "text": "Israel strikes Beirut for the first time since the Lebanon ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxPTUU2emZXNHZiQ3V3dHVuMklCOHI3TzZRWTZRM2laZEZwZFdvcm14Qm1SaTJhbWhDcUdYZklQNnpBZ0laZmRZODhGbXF0NTNXUWV0aElZNVJDNG5EWmNQOHFFVjJTS0hnRTZLekhoUDhDUkxZX2dIUWVCa3pvcVJ6UFVwN29YQ2pxM1ZuTjJlRDBOOTRMYnoyY0VmZ00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "dw.com",
      "latestSinceUpdate": 645
    },
    {
      "date": "May 13",
      "text": "A ship was seized near the Strait of Hormuz by 'unauthorized personnel' and brought toward Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxNYkZadzB5QWczcS0zY0p3YWlLSEFjVTVnRzNYdEpSR0REY0wzbTNtLTVQcXpRc2U3QkdiNDA4RjVtNl81Z19Pb1VMeE5RazE5X1I2Z284UlJoR1NXQU9KaHdHR3ZHY1JESU9zNk1mYjB6V2NfVzZrRGNSeXBnQWJObFlkSm5GR2owVUE0RS1oS3A5TUhJQWhzWnkxMjJfZ2FxejI2YdIBqgFBVV95cUxOVms5NGlybVp0dGVQT002RkRaSUIxUTFhRUMyRHJHSWotOHBuU25KWmFZMVZZdHYzOW10LTVLbEJpSUtYaTBTWGZZZmJ6Rl82VlBpZ1o4bmFpMkpYTVgwQlZfNG1XR1Y3NWN2cENPSE9SLVFiNnpRRWR6LUxnNEMtTk4ydlVVaVZEdGxySTA2Y3dhNmxSMVo5MGtRcnk5d0VndmVRUFppbUdSUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 645
    },
    {
      "date": "May 13",
      "text": "Fighting between Israel and Hezbollah continues in south Lebanon, with Hezbollah's drones posing a new threat.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxQU0NRRHljUFlnWTFlc3ppOThmbEtjWG5DNFFKNEhXMHViQ3hFVUdKQS1icTJtME8xTGZwX19WaEZMeVdwTXhtZmYyckgyT0ZkbzBidnlDZVZKRmRJMWN5dTE3Tjl0R2FmMlMzUWd1RjRjTWxlMHZ5Q1FhSzRmY3p4a2ZOQkJLZ29qaXpWQUlCZEFIWUwtcXp0ZXROQTZWbWVieXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 645
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (19 headlines)"
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
      "perspective": "Iran",
      "headline": "Tehran Vows No Retreat, Prepares for Renewed Conflict",
      "summary": "Iran maintains a defiant stance, vowing 'no retreat' and actively preparing for renewed war through IRGC drills. It has also expanded its definition of the Strait of Hormuz and deployed fast-boat swarms, signaling readiness to repel attacks.",
      "tone": "defiant",
      "latestSinceUpdate": 634
    },
    {
      "perspective": "United States",
      "headline": "Trump Demands Deal, Threatens Renewed Strikes on Iran",
      "summary": "US President Trump has issued strong warnings, stating Iran must make a deal or face renewed attacks. US officials indicate 'making progress' in negotiations, but the Pentagon is considering renaming the war if a ceasefire collapses.",
      "tone": "strained",
      "latestSinceUpdate": 634
    },
    {
      "perspective": "Hezbollah/Lebanon",
      "headline": "Hezbollah Escalates Tensions, Threatens Beirut Occupation",
      "summary": "Hezbollah has introduced unjammable drones as a new threat to Israel and urged Lebanon to withdraw from direct talks. Reports suggest Hezbollah is planning to occupy Beirut, further complicating regional stability and normalization efforts.",
      "tone": "anxious",
      "latestSinceUpdate": 634
    },
    {
      "perspective": "Global Energy/Shipping",
      "headline": "Strait of Hormuz Tensions Threaten Oil Flow",
      "summary": "The world awaits the reopening of the Strait of Hormuz amidst Iran's expanded definition and deployment of fast-boat swarms. Despite an Eneos-linked tanker crossing, the attack on an Iranian oil refinery by the UAE highlights significant risks to global oil supply.",
      "tone": "anxious",
      "latestSinceUpdate": 634
    }
  ]
});

export default LATEST_SNAPSHOT;
