export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 687,
  "lastUpdated": "2026-05-17",
  "lastSyncedAt": "2026-05-17T20:34:44.944Z",
  "warDay": 79,
  "summary": "Trump issues an ultimatum to Iran amidst ongoing Israeli strikes in Lebanon despite a ceasefire extension, while concerns rise over Iran's potential actions in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-17",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 7,
    "summary": "A ceasefire in Lebanon has been extended but remains shaky, with Israel launching new attacks against Hezbollah targets."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.6,
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
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
      "date": "May 17",
      "text": "Trump states 'clock is ticking' for Iran to make a deal with the US or face renewed attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPS1N6LWkyaW1VbTREcm5Pcy12eWlBWDRJOENBN25SdmxKeE40MHBROUlIamc5T0NXRDlsMnFscXVaUHdNbDBzLVk2RkFNYk9ham92LUxxMzZCSk9VVFdnVjdUSkNHNlNBUjNWWnhHVmZhNUZFNlI4VmstQ2JvS1JMMGZkU1BTNFRNSkRKbUNoVWdicmZLWjZ1U0Rfb1E3ZU9BanQ2OFFFMEhZZklqZ3NCU25iTkJ2UVJablBkMdIBwgFBVV95cUxQQTdhWGVPRjJuOHZtRTNHTXk1UllpYkpBTFRWWUdQWGVfQ3U3b2JCWjZ5NDRoX1l1LVpXWUdsZ0tFajhlQjBJeklqSjUxMDhiWFBRa1N1U1JaSlJJbk9sbjVoLVl0XzBJb0V2TVBNaC01a0hCaU1QWUpHT2tvcWZJQV9aOEdseVNGU1R5dWEzVy1Cc1hWYi1kaDhtVGZISTVKM1owenBtMnRlX1BBNTFCV0dTY3FQLXdJRnFqejJBZ0VSUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 687
    },
    {
      "date": "May 17",
      "text": "Tehran announces plans to unveil a Strait of Hormuz toll mechanism soon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNa28tT0ZnSnBQZjlodFVfRU1DRk9xdGVnVXJVWjNpOWo2SmZha3JnMUF3U1dWVVZ3alY5cTJoQjFsdU92RWgzcmV4U2d4R2hrdDhicTFIRDFfMi1fYmJHT09OclRFeTNPNWk5OFZGY3FMblRlTXVjN3NjcHllRU0wQjBhVVRrS1dYalItbF94Y0RldlI3UE5lbV9Mbkk1d2w1RkRQNmh1UGkzZ3J2VG1GbWtjRi03Uk9zTlhmQmdfd9IBxAFBVV95cUxQZTFTTUlWd2RyeUlzUzRvMWVzRFp1U19zZ19rM1prNXlrZkM0R0ItcVp2bkZ0elRvcnNsWnFUM3FSbFNvd3ZwaW1qUi1mTFFURDh0aHBoSmxnMlM3QmJseUpQdXVQLU9mcnJXUEd2Mlo1Zk5MVVdUMlZUNkhqRlpzeGwtY2U1RUN1czRVWE1LazlCUlRpU1pMLTFDSEFudUt5c0FKMDVCNU1iSzlMcXdBWHVRckY1SExmUDNVUWt4MlF4RXdH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 687
    },
    {
      "date": "May 17",
      "text": "Lebanon ceasefire extended, but Israel launches new attacks, killing five in Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNX253cS1CLXNmbVZtQ0Z5bzRudXhYNWVHNmU3QTZIZG0xbzdtRGw1UEYzR1pUdHFsRUdQQURIUllVVDhQekdwOWY2bGhyUU84aGlzV2tGcVRXRzVHU1JfTXFLdWowamtzZnZVVlZZaGpUb0dQMi1aNUFYNXdKamNDa1VabXdOMTJQbEZYcDhDVHVSZDdoaThwdS16allnVU9HNTJLWUViMEt1UjBYQTRVTkRJWWJvUExHbnfSAb8BQVVfeXFMTzkxQS1VbVFiSDZ0bFhCTm1DaHlnaHNUY2NXYVdlZDkweWQ5dUdKTUVCWG5ORi0yTG4tcWRxRjZkbkxLUGYzN3g4VER6aGMzaWVfRjA4RTUyUG9jVHRUbWladlVrZFhtMlcwOUZkblpxMlZmMGRibjA1NEM4UzhjMHdEQ1FSV1cxd0hpRTU2SXBzeXpnNHZSWUtTNGtaT0U0OW1sRXJrUVJRVGZ0UVo3dkZzRVI5eV9QVUt3dEZ0TUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 687
    },
    {
      "date": "May 17",
      "text": "Hezbollah releases drone strike videos showcasing evolving tactics against Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1ZRlZ1bFFFWlc5SDVraHZwUTRxd1FFS2hTeWdiVUdLWnFiaHI0QVhPU2ZYckFaNFF3UW5vWGEtZWIwb1lmNGdtX1V3VVQzdXEwQjVrNDA5TTVRdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 687
    },
    {
      "date": "May 17",
      "text": "G7 finance ministers to meet amid warnings of economic consequences from a prolonged Strait of Hormuz closure.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxQZldkUlJYb0FYcnhMWEo4VGZJRUFKY3JfNUg2bTFMOFNTT0ppcW1BVnJpeWhpdXo5R25lbTRQSzdKSlpzVEJXd19MZ1Q0Q2F6MWs4d1lVR25DWDdOVk55S0NoczM2WmdBbG9SUU4wbktLeDA5RjdneUYxZjZkQ2g3UVRHUmZvZUZlV2cwTjBhMlY4UVNmbE8xbXZjMjYtT0FlQ3fSAacBQVVfeXFMT2dPNEhwT3Z2R0xwRzhPUlI3enAyVTkwRHlSTC16dzk1bFNZNTZTWlI2WXZxcGZQaHE4TFppVHB6cWt4aV9UY3pvSV9KR3NNVG4zbHppZElFbGRrM3htbk4taUFZWjF6NHBKS2tXVDVQYTN5MXNWelZCUWwyTjZJRzRqcENPN0YzX2Z4QkE4ejA1dXlQYVY3ZjlNTV9qZ0dLWVQzOEp4VGM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 687
    },
    {
      "date": "May 17",
      "text": "Watchdog reports Pentagon quietly shut a legally required program to prevent civilian deaths by the military.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxNbWFpNHM3YWVJVGxpZVFSOExzQzFGRlJZblh0bXQtc2RtYUJKX3l1M1YyRFpuTlRqeHU5S2pYTUNtU2VHZGwtckYyU084d0VMR1NjSFdYN0ZRaHNfWHJPTjRzT3Ztd0k0MktuSU1zazZXb25IWGROekgyVDdnNjI0V0xrbE1sUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 687
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
      "perspective": "Iran's Defiance",
      "headline": "Iran asserts Hormuz control amid US distrust",
      "summary": "Iran plans to implement a toll mechanism for the Strait of Hormuz, asserting its sovereignty and signaling deep distrust towards the United States. This move is seen as a potential escalation of economic pressure in the region.",
      "tone": "defiant",
      "latestSinceUpdate": 675
    },
    {
      "perspective": "US/Israel Preparations",
      "headline": "US, Israel prepare for renewed strikes on Iran",
      "summary": "Reports indicate that the United States and Israel are preparing for renewed military strikes against Iran as diplomatic talks stall. This suggests a potential re-engagement in military action within days or the next week.",
      "tone": "anxious",
      "latestSinceUpdate": 675
    },
    {
      "perspective": "Lebanon Conflict",
      "headline": "Lebanon conflict persists despite ceasefire extension",
      "summary": "The conflict between Israel and Lebanon continues with Israeli strikes causing casualties and Hezbollah drones killing an IDF commander. This ongoing violence highlights the extreme fragility of the recently announced ceasefire extension.",
      "tone": "strained",
      "latestSinceUpdate": 675
    },
    {
      "perspective": "US Military Scrutiny",
      "headline": "US military faces internal scrutiny and leadership questions",
      "summary": "Internal reports question the state of the U.S. military under current leadership, with one watchdog finding the Pentagon quietly shut down a program to prevent civilian deaths. This raises concerns about military conduct and strategic effectiveness.",
      "tone": "skeptical",
      "latestSinceUpdate": 675
    }
  ]
});

export default LATEST_SNAPSHOT;
