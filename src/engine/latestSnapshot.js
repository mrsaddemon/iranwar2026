export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2569,
  "lastUpdated": "2026-10-12",
  "lastSyncedAt": "2026-10-12T01:49:05.500Z",
  "warDay": 227,
  "summary": "The Iran war continues on day 227 with increasing U.S. casualties, intensified attacks in the Strait of Hormuz, and stalled diplomatic efforts as Iran rejects U.S. peace proposals.",
  "lastNarrativeUpdate": "2026-10-12",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 3,
    "summary": "No active ceasefire is in place, and diplomatic efforts to end the war have stalled with Iran rejecting U.S. proposals."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Oct 10",
      "text": "Pentagon again increases number of U.S. casualties in Iran War.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2569
    },
    {
      "date": "Oct 10",
      "text": "12 killed in an attack on Riyadh airport, according to Saudi authorities.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPM2hKQnU0RnNlWmR5M0dpZy1GdkEybmxWRm1scHZNMlREbG52WmpkLWlRUnI4M3hRQkZKUXAtX3doSGxHbnZ5Tl9ybGp2SHVSLTlvUC0wUG9rOFVZeG81UmxvZ0hzNTZsa25fMTF5Y0V1Q1QwbjdjQnVScGdfZlUzQzg0TXo3aVFnSGVuWlRyazZ6M2N2NzItYnNhMHJrNDg5dGxhUlNoNVU3OGZva3djcmQ2eGQyOU43N21Z0gHAAUFVX3lxTFB0ZXVSYWwwdm1HYnp0cWY5eWNRXzRYb1BaOVRjcXBZVUpDOEpPUmFxeVJZT2x4U01Ma2ljMmN6Z2N0S19kZTVXekp6dTZFamp0NGRZMHp2UzhrcmJVOENPd3N3d3RXR2E2aU55TEN6QWpSVHZsbjhHUUxPU25YREd1MmFtMXUtVmNvLXdHTEY3NWpBZm5MZ0RBandXcS0xZkpVbVZtQkZEeFN6OHlMOTZlcWo2Q2FVVHFuN0hkcVU0SQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2568
    },
    {
      "date": "Oct 08",
      "text": "Iran calls the latest U.S. proposal to end the war 'insufficient'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMixwFBVV95cUxNLXRjcFVOT0JlLXZweVZyNTFOcy1CUUV2ck1uekRRUFRTN0JlemlmTlREc0VRT2w0QllyUnRHS1JSWUI2Yld3QzNMOVdKMFJmQ2dtcHR5QVZxb2staWdoMkJJMFo0XzhaRjZuVi02NDFJZTZOV2s2ZDN5cGN0b2RpY3pyU3JzanZLX2V2R1l3ZjVUS1ZfTHY5Um5heEU2UHRTcjhpLVgycThkMFhiYTNQOXdBaVR1VGcyTndhak1qa2JXa2pBTk5n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 2569
    },
    {
      "date": "Oct 12",
      "text": "Hormuz attacks intensify as efforts to end the war on Iran stall.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxOajZFRE5qcjI5WGVBUWVORmRYZ01xNzFGS0RvR01PLVY4UEx1dUFwQ3FkZlA4QWNOeTJSR0NUVUZQcVR1UjdaVmNBRU1yZ1ZuT2gyWDkzRlA1MUE0MXkwU3NEdWJWbzNodU9nY1pLU0VyT0pRQ0FjbVdEcFFSVEMxNnNHSjRHdmNUZmVGNjd3ZV9YTTJpc2U4dTRJUHBJOUlMendhONIBqgFBVV95cUxOVTdCRlJ6b1lUaVNqQlB0cERHWTB3TG5sRl9nSURfalAzZEJOTi1Ba3dkNmQ5ZGFoelJVMUhDY0l3QzQ2bWhFcUlfalkycDIyRFFiNGpaMGdSRl9pRHFpTGh6YXZJb0MwdGx1T1E1SDd3NjhkNmc0QlZibTdVbzBQNUdYQ0k4eHQ2TjJ6Y05lMW5FRHVEd3Nfdi1KZE1CdmthbDNMeHZjelVoUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2569
    },
    {
      "date": "Oct 12",
      "text": "Tanker attacks in Strait of Hormuz surge to wartime high as Iran tries to choke off oil exports.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxQLXQ5SXNEMzB0UFVEM09pZjB6S29PbXBPZWdwQ1VUei1iSkJ4RWx6d0pvOUhRVXdiVTZKeHUzUkVVSUE5bmtENm5OOXFrN24zYjhYdlN5R1VfckRfaGt3eXJlLXVNSFR6OE5lTTdWT19mRGVRNDQ5QTltV09OdXdSd2h6c9IBiAFBVV95cUxOeXViRmlFc2pYOS1vS3htNzF6Q0hLcEt1Vm1VUEJkb0NrWENIcFRtSXNiUDUxMk5DbFVQbXpBaTdsU25vajNhd3lQTW93bk05RGVWdlNkWFRtRkZxa1M5c3ZBTkxRWGxHOEwyM1dYS1hTczRJNjNZUk5MUXVGS0ROcWlYX0lzdkVD?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2569
    },
    {
      "date": "Oct 12",
      "text": "Trump states he will 'look at' joining Saudi Arabia in the fight against Iran-backed Houthis after a deadly airport strike.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE51bzM0YzNwbUhGUUpVMHhPQWNZenkwZDdQM3QxdVdpQ2xOYjROVkZpVHU5cko1VDFUMnRVd3o0S3dmZVdlTlZ6cldhZ0RqTEgzREZhSXA3d1hFakpMYnNiaUxja2hyTThCejJOVEhnSFEzcGR3eF9N0gF8QVVfeXFMTVZ4YzZyc1U3S2NyVFBIVXpPZ3BJenI3T1lTZ0tGZ0ozcDZRZGJ0SEM0a21KTDhXdjN3VGxocXEteUlhbnJVRVhTRGlNRkdrb25NaEdfNVFYc0J6ZUN6b2pTUHNYcDdIY3c2T1dTekwxYUJReTlwS2NoSFBZOQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2569
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
      "status": "unavailable"
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
      "headline": "US Peace Proposals Insufficient Amidst Escalating Hormuz Tensions",
      "summary": "Iran views U.S. proposals to end the war as insufficient, indicating a lack of progress in diplomatic solutions. Concurrently, Iran is intensifying attacks in the Strait of Hormuz, aiming to disrupt oil exports and exert economic pressure.",
      "tone": "defiant",
      "latestSinceUpdate": 2569
    },
    {
      "perspective": "United States",
      "headline": "Casualties Rise, Military Preparedness Heightened as Trump Weighs Houthi Intervention",
      "summary": "The Pentagon reports increasing U.S. casualties in the Iran War, signaling ongoing military engagement. President Trump is considering direct involvement with Saudi Arabia against Iran-backed Houthis, indicating a potential expansion of U.S. military action.",
      "tone": "anxious",
      "latestSinceUpdate": 2569
    },
    {
      "perspective": "Israel",
      "headline": "Targeting Hezbollah Leadership Amidst Regional Instability",
      "summary": "Israel is reportedly engaged in operations targeting Hezbollah leadership, including a plot to kill its chief and a 'pager operation' to undermine its influence. This indicates a proactive stance against regional adversaries, particularly in Lebanon.",
      "tone": "strained",
      "latestSinceUpdate": 2569
    }
  ]
});

export default LATEST_SNAPSHOT;
