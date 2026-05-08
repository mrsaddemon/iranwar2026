export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 552,
  "lastUpdated": "2026-05-08",
  "lastSyncedAt": "2026-05-08T03:55:43.138Z",
  "warDay": 70,
  "summary": "Despite a declared ceasefire, US and Iranian forces have traded strikes in the Strait of Hormuz, while Israel has conducted airstrikes in Beirut targeting Hezbollah commanders.",
  "lastNarrativeUpdate": "2026-05-08",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 15,
    "summary": "A ceasefire is officially declared but is being actively violated by both US-Iran and Israel-Hezbollah forces, leading to continued exchanges of fire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
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
        "precision": 0.55,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
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
      "date": "May 08",
      "text": "US military strikes sites in Iran after responding to attacks on navy ships.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE95RHFJYjM2ZkFnRXRTMlVqSmFob0NKdld0Z0ZwMWVhU0FZYmN2VVZtNmZiaEJCTjAxRTg3X2pSMEJqT1VwTWhjam93eGFEdXktM1VJWA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 552
    },
    {
      "date": "May 08",
      "text": "Israel launches precision airstrikes in Beirut, targeting a senior Hezbollah Radwan Force commander.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi1AFBVV95cUxNeEVlRWwyanItVVlGdE94QW1haEdENE54ZDBpRW1kNmhWZmZ4Z1FKbHpvTVFSRmwxaE1uLWNYRzFsT3U1czZCZVdPMEZsTG1IRzdSRWpuRmN1cldoOC1HbDdGWFN1MHg0dDNZMDZNS2dtOTVtSWRaQk9xNHFxb05zOUZaUVJUeTYxelgtelptQlFERVBOdlZ6dUp1VTI3aHpaSmIyXzNlakU4QndRQU5UYjVvNDV1TnNBRnd3dnlKa25BaVVncVJqOGlCbXRZWUNvTGNmNw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Foundation for Defense of Democracies",
      "latestSinceUpdate": 552
    },
    {
      "date": "May 07",
      "text": "US and Iran trade fire in Strait of Hormuz, despite Trump insisting ceasefire remains 'in effect'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi4AFBVV95cUxNcUVWcjFBaWVUSzRtUlhkaGlDdmtiZ3UyQmxqU2NHZlZ2ZUFMSGduRlROMlJTYlhfdTJvTkpjV2x3dXRQSG5QMXdCZmJOSU9Jcm04aE0zdXdJQkR4UnYxeEdYOWdWclQ1eEJmcGlSTnNFMW1jclcxLVNmYkRVY25DX3pvVUluUmpodXUzc2l3OTNHNVZUSklObUtSajFFb3dmQ0NrUkxXdU5qTGlyVnRsejJSb3ZLdEU2YVB5Um02QWVDZnJnNDVENlNDTGY1NVd3aEtXTnFBbEdQQ0dIS2Zrbw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 552
    },
    {
      "date": "May 07",
      "text": "US military says it intercepted Iranian attacks on 3 Navy ships in Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxQUkt3M3BQa3VLVHFKQTh3MEhnVHFhZ241MHo2cm8wdnd4S25vdzI5RXRIY3JHVEl4TkliUHgzNkdoZllvSGNUQkxWb093anEyQnZlM25EQzlQSDZuTW5GVzBob29YdktSWWxBUjBSY2l6TlA2dUM3Vk1UT05iZ3daclJ2amNRU0gzNVJfS3FSdXMxWXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 552
    },
    {
      "date": "May 07",
      "text": "Israel strikes Beirut for the first time since the Lebanon ceasefire, testing the truce.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxPTUU2emZXNHZiQ3V3dHVuMklCOHI3TzZRWTZRM2laZEZwZFdvcm14Qm1SaTJhbWhDcUdYZklQNnpBZ0laZmRZODhGbXF0NTNXUWV0aElZNVJDNG5EWmNQOHFFVjJTS0hnRTZLekhoUDhDUkxZX2dIUWVCa3pvcVJ6UFVwN29YQ2pxM1ZuTjJlRDBOOTRMYnoyY0VmZ00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "DW.com",
      "latestSinceUpdate": 552
    },
    {
      "date": "May 06",
      "text": "Trump threatens ‘much higher level’ attacks if no deal is reached with Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPQVJMYnBuUmwxaFpFSXhhNnRoTkQ4RGNIS29nbldTVHliSVlobjJnaWNlMmgzd1ViUVJlWHFDRmFkUmFYamVzSE9PMmRELUdncDVaVHpZZE03VDhiZkdHVWFnSGt2M051c3Z5bWdoZmhGQ2hwRThscEEtdjdWZk5nTHp5V2JseWNoSmhjdE5IVjN3cVNaTEZfTmx5ZkxkTWQ3NS1QZmJBVU8zQVpHSU9odU5JVWRMaUFwS2fSAb8BQVVfeXFMT2ljb0NuNjFFbUtjWFZmVks5RWNJZS0ydmRpVjhJY2d5dTBaM3FDUUg2Z0FqQ1d0bjNhOG9KSzR4bndQVGRILXRkVzhaWmdJQ1ZXb3dlZjB3eWFrSWNxR29Bd2Z6YmhKbEZXdVU3Umc2ejdSc002ZUZGV21HMVRUTUNTd2J4Z0RvRFZDbW5DMWJsVjg2SHpVRVUzZDk1YjNnMGVpa0JCMHhlTkRMcFludTBkRk9RWVFCZXlKR0hmd00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 552
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (16 headlines)"
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
      "perspective": "US Government",
      "headline": "US Responds to Attacks, Seeks De-escalation Amid Peace Talks",
      "summary": "The US military has conducted 'self-defense strikes' against Iranian targets following attacks on its warships in the Strait of Hormuz, while simultaneously asserting it does not seek escalation. President Trump indicates a peace deal with Iran could be imminent, with Tehran reviewing the latest US offer.",
      "tone": "strained",
      "latestSinceUpdate": 551
    },
    {
      "perspective": "Iranian Government",
      "headline": "US Violates Ceasefire, Iran Responds to Aggression",
      "summary": "Tehran accuses the US of violating the existing ceasefire by targeting Iranian sites and ships. Iran maintains its right to respond to 'unprovoked attacks' in the Strait of Hormuz, while also considering a US peace deal proposal.",
      "tone": "defiant",
      "latestSinceUpdate": 551
    },
    {
      "perspective": "Israeli Government",
      "headline": "Targeted Strikes in Lebanon Test Truce, Counter Hezbollah Threat",
      "summary": "Israel has launched precision airstrikes in Beirut, targeting and killing a senior Hezbollah commander, marking the first such strike since the Lebanon ceasefire. These actions are framed as necessary to counter Hezbollah's continued operational capabilities amidst the broader regional conflict.",
      "tone": "strained",
      "latestSinceUpdate": 551
    }
  ]
});

export default LATEST_SNAPSHOT;
