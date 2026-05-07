export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 550,
  "lastUpdated": "2026-05-07",
  "lastSyncedAt": "2026-05-07T23:14:27.056Z",
  "warDay": 69,
  "summary": "US and Iranian forces have exchanged strikes in the Strait of Hormuz despite an ongoing ceasefire, while Iran reviews a US peace proposal and Israel conducts strikes in Lebanon, testing a truce with Hezbollah.",
  "lastNarrativeUpdate": "2026-05-07",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 15,
    "summary": "A ceasefire between the US and Iran is active but being violated by mutual exchanges of fire in the Strait of Hormuz, while a truce between Israel and Lebanon is also under strain due to Israeli strikes."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.88,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 62
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.78
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 48,
    "oilDisruption": 88,
    "tradeImpact": 64,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "May 07",
      "text": "U.S. and Iran trade fire in Strait of Hormuz despite a cease-fire.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 550
    },
    {
      "date": "May 07",
      "text": "US military intercepted Iranian attacks on 3 Navy ships in Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxQUkt3M3BQa3VLVHFKQTh3MEhnVHFhZ241MHo2cm8wdnd4S25vdzI5RXRIY3JHVEl4TkliUHgzNkdoZllvSGNUQkxWb093anEyQnZlM25EQzlQSDZuTW5GVzBob29YdktSWWxBUjBSY2l6TlA2dUM3Vk1UT05iZ3daclJ2amNRU0gzNVJfS3FSdXMxWXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 550
    },
    {
      "date": "May 07",
      "text": "US strikes military targets in Iran after attacks on destroyers in Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxPclR6Qy1hR1lEazM4dllZZ1lPMnhxNy1aRTFwUVVkZWlIdXpFM0xPY1ZXVnlaRmFZdHdpVFVfb1pCb3VJSWV3aER6Rk1zMnY0YmFTcHBsaXFnNGVlVGRTSEdDNm5oU2NKNmpOVDNaMDVha2syS21lZUNCSW9HejBpUGhRaEk4TmM2LXFobjlKc9IBlAFBVV95cUxNVHhVanBWb1NMb0VLV0hXa2dORXAyWEtwQ1N3YzZKUlVLZ0hKWVJvQ2kzTHNtT0RRWjFRZmJCVGRoVlBSSFRXbUowbzlwc3h2VWZRanZDUVNDc0pWNWV2MEFZMDdrTXdOckZpekJBSUV5MVp4Q0R4TF9DcUl3WFRsZUtKNzNLRnFXdHdzQnZDeThKb1VD?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 550
    },
    {
      "date": "May 07",
      "text": "Iran is reviewing a US peace proposal, with both sides reportedly moving toward a memo to end the war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxPU0NNTnM1Vkp6QkQzNWF0dVZGUF9xNUZXYnp2Yms0TS1IZU5lLWVsem5MUmpZM2RTQlNSbVBmUWRLenNnSnZtRm10Q21GVjhYcHVMamt3ZEp3YWF4aWRnNkJYYVRGMVJCazZwbjNuY3BUNnJmaWJ0MzE3WHMtLWo1Q0p5UkI?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 550
    },
    {
      "date": "May 07",
      "text": "Trump threatens ‘much higher level’ attacks if no deal is reached with Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPQVJMYnBuUmwxaFpFSXhhNnRoTkQ4RGNIS29nbldTVHliSVlobjJnaWNlMmgzd1ViUVJlWHFDRmFkUmFYamVzSE9PMmRELUdncDVaVHpZZE03VDhiZkdHVWFnSGt2M051c3Z5bWdoZmhGQ2hwRThscEEtdjdWZk5nTHp5V2JseWNoSmhjdE5IVjN3cVNaTEZfTmx5ZkxkTWQ3NS1QZmJBVU8zQVpHSU9odU5JVWRMaUFwS2fSAb8BQVVfeXFMT2ljb0NuNjFFbUtjWFZmVks5RWNJZS0ydmRpVjhJY2d5dTBaM3FDUUg2Z0FqQ1d0bjNhOG9KSzR4bndQVGRILXRkVzhaWmdJQ1ZXb3dlZjB3eWFrSWNxR29Bd2Z6YmhKbEZXdVU3Umc2ejdSc002ZUZGV21HMVRUTUNTd2J4Z0RvRFZDbW5DMWJsVjg2SHpVRVUzZDk1YjNnMGVpa0JCMHhlTkRMcFludTBkRk9RWVFCZXlKR0hmd00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 550
    },
    {
      "date": "May 07",
      "text": "Israel strikes Beirut for the first time since the Lebanon ceasefire, killing a Hezbollah chief.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxPTUU2emZXNHZiQ3V3dHVuMklCOHI3TzZRWTZRM2laZEZwZFdvcm14Qm1SaTJhbWhDcUdYZklQNnpBZ0laZmRZODhGbXF0NTNXUWV0aElZNVJDNG5EWmNQOHFFVjJTS0hnRTZLekhoUDhDUkxZX2dIUWVCa3pvcVJ6UFVwN29YQ2pxM1ZuTjJlRDBOOTRMYnoyY0VmZ00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 550
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "US Administration",
      "headline": "Trump Declares War Over, Pauses Operations Amid Deal Progress",
      "summary": "The US administration, led by Trump, asserts the Iran War is concluded and has paused 'Project Freedom' in the Strait of Hormuz, citing progress on a peace deal. However, this stance is contradicted by ongoing military actions and threats of escalation.",
      "tone": "strained",
      "latestSinceUpdate": 539
    },
    {
      "perspective": "Iran",
      "headline": "Iran Reviews US Peace Proposal Amidst Ongoing Tensions",
      "summary": "Iran is actively reviewing a US proposal and is reportedly moving towards a memo to end the conflict, indicating a diplomatic path forward. Despite this, reports suggest Iran has hit more US assets than publicly acknowledged, maintaining a defensive posture.",
      "tone": "anxious",
      "latestSinceUpdate": 539
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Israel Strikes Beirut as Hezbollah Deploys New Drones",
      "summary": "Israel has launched air strikes on Beirut, marking a significant escalation since the Hezbollah ceasefire, which is now described as fraying. Hezbollah is reportedly using new FPV drones, posing challenges to Israeli forces and contributing to the instability in southern Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 539
    },
    {
      "perspective": "Global Security & Energy",
      "headline": "Strait of Hormuz Tensions Drive Oil Prices Up, France Deploys Carrier",
      "summary": "Tensions in the Strait of Hormuz, fueled by US-Iran confrontations, have led to a rise in oil prices and prompted France to deploy an aircraft carrier group to the region. This highlights global concerns over maritime security and energy supply disruptions.",
      "tone": "anxious",
      "latestSinceUpdate": 539
    }
  ]
});

export default LATEST_SNAPSHOT;
