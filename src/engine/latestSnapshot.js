export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 561,
  "lastUpdated": "2026-05-08",
  "lastSyncedAt": "2026-05-08T18:58:05.457Z",
  "warDay": 70,
  "summary": "Direct military engagements have escalated between the US and Iran, including strikes on tankers and sites, while Israel and Hezbollah have also exchanged fire despite declared ceasefires.",
  "lastNarrativeUpdate": "2026-05-08",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 7,
    "summary": "Multiple declared ceasefires and truces have been violated by all parties, leading to renewed military engagements between the US and Iran, and Israel and Hezbollah."
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
        "militaryPower": 80
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
      "date": "May 07",
      "text": "US fires on and disables two Iranian tankers in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxOcExZcVpZYU4yU3oxSEpmajVmMktveG8zd1V3anRxdHhneVR1LUFuSUtSZGJpZUEwVEZTNkNZRlBGSzRQSVRkZVprMkp5dzhVUFJPMkdmTFVQMF9tOF8xVng2Qy01ZDlWNW5oTEhjeVcxd0ltQ3h2LUVBNVg1THRtUFp5Y3Ezd1MwUkR6elNoWHNDY00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 561
    },
    {
      "date": "May 07",
      "text": "US military strikes sites within Iran as countries exchange fire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxOWXUwRGdlNmJ0QlZ4YlNseHlhRFRoZlhxWG1jM0xMZnB0R1lyUVhBcjk2U0Y3U214Yzhib0o2RFF6dW5Hb0lZSkhCRXhBRU9XaTI5RWRMNXdER2RZdDBtT2ZMb01XZU9tRnhJLUNOd0dQTXRzdnNVTGhpcW9LSVF6c3hYSmU1MEN0aWo1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 561
    },
    {
      "date": "Recent",
      "text": "U.S. and Iran exchange fire amid a declared truce.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 561
    },
    {
      "date": "Recent",
      "text": "Israel launches strike on Beirut for the first time since the Lebanon ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxPTUU2emZXNHZiQ3V3dHVuMklCOHI3TzZRWTZRM2laZEZwZFdvcm14Qm1SaTJhbWhDcUdYZklQNnpBZ0laZmRZODhGbXF0NTNXUWV0aElZNVJDNG5EWmNQOHFFVjJTS0hnRTZLekhoUDhDUkxZX2dIUWVCa3pvcVJ6UFVwN29YQ2pxM1ZuTjJlRDBOOTRMYnoyY0VmZ00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "DW.com",
      "latestSinceUpdate": 561
    },
    {
      "date": "Recent",
      "text": "Hezbollah fires rockets deep into northern Israel, triggering sirens.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiVkFVX3lxTE5nOFRnaHV6TVJFVVVFUXhrOWVwdzhXLW9qdlNPSlhrMFVUNVRnV3RVam1JYWowTUlvdy1uX0diN2Fza1NyLVdzQ1VvSUg3ZkU5UjVyYk5B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "ynetnews",
      "latestSinceUpdate": 561
    },
    {
      "date": "Recent",
      "text": "Iran accuses the US of 'reckless military adventure' and violating ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxNNWZhUzVmUUNudHFiYzR6WFItRllzWEJ3ejdGOTVEQ0R3TzJrY3BEYUNtY3NHV0hRb2lVTXd5SGpXSHVVVmQ1V2dkSnVCNExRaGRrbWYxUHREdmx2dk1RVlkyNE5wYUFET1BLV2pSbTI2akVESndfWTRBeU5hc3lWUlRrMUp5OWd1YlRDRU1KaG5nQXdHZGhHd3lwNThLUE83a0t5dDl3ZWViRmp6b3dCcUJVeWNreE3SAbwBQVVfeXFMUGxycEpfd3RGUHo4NzBmUkREQ2RheTZmRjJreHZXRzJZbWJFbloyZjdVRzJOY0Y3X0RiNG5vN2dndVVTSWt0NXFyd28yZkdMWUttUXdRRENQbXc2c2RibnJoaXIwQjRqNEZUWHlsRjRFWnpwajBQX0Z1MV9sMm9ERl9MNFBRb3l2TDI4WExSQzZSSUE0TjJfSEdrai1DbVdScFhHdjZJMWhQMTllSTdBdUNKS3R5Y1ZrcDBoaXA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 561
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
      "status": "unavailable"
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
