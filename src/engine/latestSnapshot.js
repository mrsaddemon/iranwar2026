export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2571,
  "lastUpdated": "2026-10-12",
  "lastSyncedAt": "2026-10-12T17:47:21.959Z",
  "warDay": 227,
  "summary": "The Iran War continues with increased U.S. casualties, an attack on Riyadh airport, stalled peace talks, and heightened tensions in the Strait of Hormuz and Southern Lebanon.",
  "lastNarrativeUpdate": "2026-10-12",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 3,
    "summary": "Talks to end the Iran war remain stalled, with Iran deeming U.S. proposals insufficient, indicating no active ceasefire for the main conflict."
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
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 64,
    "globalPressure": 82,
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
      "date": "Oct 10",
      "text": "Pentagon increases reported U.S. casualties in the Iran War.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2571
    },
    {
      "date": "Oct 10",
      "text": "12 killed in an attack on Riyadh airport, according to Saudi authorities.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxPM2hKQnU0RnNlWmR5M0dpZy1GdkEybmxWRm1scHZNMlREbG52WmpkLWlRUnI4M3hRQkZKUXAtX3doSGxHbnZ5Tl9ybGp2SHVSLTlvUC0wUG9rOFVZeG81UmxvZ0hzNTZsa25fMTF5Y0V1Q1QwbjdjQnVScGdfZlUzQzg0TXo3aVFnSGVuWlRyazZ6M2N2NzItYnNhMHJrNDg5dGxhUlNoNVU3OGZva3djcmQ2eGQyOU43N21Z0gHAAUFVX3lxTFB0ZXVSYWwwdm1HYnp0cWY5eWNRXzRYb1BaOVRjcXBZVUpDOEpPUmFxeVJZT2x4U01Ma2ljMmN6Z2N0S19kZTVXekp6dTZFamp0NGRZMHp2UzhrcmJVOENPd3N3d3RXR2E2aU55TEN6QWpSVHZsbjhHUUxPU25YREd1MmFtMXUtVmNvLXdHTEY3NWpBZm5MZ0RBandXcS0xZkpVbVZtQkZEeFN6OHlMOTZlcWo2Q2FVVHFuN0hkcVU0SQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2571
    },
    {
      "date": "Oct 06",
      "text": "Iran calls the latest U.S. proposal to end the war 'insufficient' as Netanyahu's corruption trial resumes.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMixwFBVV95cUxNLXRjcFVOT0JlLXZweVZyNTFOcy1CUUV2ck1uekRRUFRTN0JlemlmTlREc0VRT2w0QllyUnRHS1JSWUI2Yld3QzNMOVdKMFJmQ2dtcHR5QVZxb2staWdoMkJJMFo0XzhaRjZuVi02NDFJZTZOV2s2ZDN5cGN0b2RpY3pyU3JzanZLX2V2R1l3ZjVUS1ZfTHY5Um5heEU2UHRTcjhpLVgycThkMFhiYTNQOXdBaVR1VGcyTndhak1qa2JXa2pBTk5n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 2571
    },
    {
      "date": "Recent",
      "text": "Iran threatens 'US-UAE' oil shuttle operations in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxObWp5UElEV2piTFkzc3NRUTR4NDJfM0trT2wybWw5U2pkeGdpdlg2NHVCN1lCZWN3MGIwX3F3OWtDc1lwOG1LQmhENVVPT0s1T1FGZjNwNDczSE9WczU4SkN3QlVVRTlpOFcwTGp0ZFU4ZjRLcG5HRm1tOTdjUUMyOXZDLUlFMUgzZlhzTlp1LXN2dDhycE1lS1pGYXNlaTMtLTNiOFZwcFR3ZkNwaVJEUdIBtgFBVV95cUxNLU5pTjR5VVVpNEZJYjRfVVRuZ1lTZ0Y5OWd5LXFocDdJc1YyNFc4T1ZWMVRhTWxIUXhxNG5qQUtoeWdqdWtxM2J6SGhIQkVDMk1iZ0o5U2tCZmZRcC1tRDNkRUFBcUxFRGRfWlVPTU9jVjJjQ2RDNDNrRWpvbjREYklOVnEtZlpFdlhkUjZHeVlFWmpSWnNNd1NYRXZ4NUg0bDJVN2NFeU5RTGFNLTRvT1BHV3Brdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2571
    },
    {
      "date": "Recent",
      "text": "U.S. forces disable a cargo vessel attempting to run an Iran blockade in the Gulf of Oman.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxNNW9FeS0xY0pkWHlqMHYyZnVvVUUxd3RSOG5fdlFrY2pqcmt3T3htTXQxNjk1VHdVX3ZZZ0l2SmZSdE50UzZld3lYNWlDMk5kbnBFcTNPUjVrOXN4R1pNc3VnVkVHcmozZVpUSG9XT2tYWk1OZjI2M1RPU3ZkRHF0M3BkQ0J5dWN5c2NqOEUtWl9UOE0tNFpuZmVDZTRFVHRsTXlLUm9iOTFsbGtoQ0NLSDhR0gG3AUFVX3lxTE5oeXI0NjB5enlxWHA5LVQ1X3l6SU9CV2xzN2Jxa0tNbkVyX0VtZ1FTY21RMFh3M2plMUV4cUpzNC1aVkFYZHVxbGVWNHAwSDRBQ01QRXBnU1dyZFJ1SENOQjNWMmlzTF9tWmpReHdDeWhjOHE2RUdCbHJWamRRa3RCSV8yQkNLNGsxc1NoTU5mRlBlbm5VVnU4aXRYVW44Yzh1QTg4S2F6ZldxODhGMmMyLWk0VUtpSQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2571
    },
    {
      "date": "Recent",
      "text": "A teen was killed and 24 injured by an unexploded Hezbollah munition near the Lebanon border.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxQSUtCZjhxcXBhSTFRWk5BZWo5Q2lJU3AyOC15aUd2OTNCdExKNms5dlg4Y04wMXAxd2NWV0N6NXFqV241STNDZ3VMZ1p5eDQtMXl1LVA1ZmlOdF9JdThNbnJYMllvbXBPVGN4dG45OVhMR2c3QjBCeWxjLXV4SWY0VXlRa0wzRi04TkptLUlnZnVlZXVySWNNYUdVYzJfOFgxRmNfVUxkWDNndzc2dHVzYjdCNWHSAboBQVVfeXFMUG5IazNhSFk0RUhNQ3dneFdnR3pBM0tIYktZRS1JLWg3dVF0S2ZKbURqdnd0SFV5SEJuYlR6d3FtTGQtd2VmWDFtMlBTN09nbDNrODN3UGZpUE9xMDFfWFdtb0hDZC1pdGJkYUgyS2hWcm1FbFhDLXdtdFJoS0NMOTZ3ZVlXQ1VEejcyeFBCZC1RN0hhdTNkM1JQcGV2aC0taEh0R19qZnhnNHF5SUNIaGZNYjB6SFBKSkF3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 2571
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
