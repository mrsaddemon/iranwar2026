export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 679,
  "lastUpdated": "2026-05-17",
  "lastSyncedAt": "2026-05-17T12:00:00.000Z",
  "warDay": 79,
  "summary": "As talks stall, the US and Israel are reportedly preparing to renew strikes against Iran, while Israel conducts strikes in Lebanon amid ongoing Hezbollah drone activity and Iran prepares a mechanism for Hormuz traffic.",
  "lastNarrativeUpdate": "2026-05-17",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 45,
    "summary": "No active ceasefire is in effect, with reports indicating preparations for renewed conflict and ongoing hostilities."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 82
      },
      "behavior": {
        "precision": 0.78,
        "aggression": 0.88
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 63
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.78
      }
    }
  },
  "global": {
    "nuclearIndex": 12,
    "escalationLevel": 85,
    "oilDisruption": 75,
    "tradeImpact": 69,
    "sanctionsPressure": 64,
    "globalPressure": 81,
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
      "date": "May 17",
      "text": "US and Israel are reportedly prepping to renew war as soon as next week.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNaVhvbjZFQ2JoR0ViVlZKZTBFZ1Q5b0tkeS1CR3I4aEpqeUhJaVoyOVI1ZDc4T2laMWR4T09VbEdhUG9XVnZ6cHQwMTMyTjd6blZXTE85amdBSXVwdS13dzZ4NlVXRGNHSTgtMFFBdWNEd1VXcHc1cVM1Nm1MS3FfcjJ2ZjdHNURCcEhsSy1QUWxpQ0lDODZTRzVHTnpsTkxydlk3UnFQSGlhSEJ0dEk4bmx6NG_SAboBQVVfeXFMTlg4ZVdGZUZ4YWlTbVczdUd3clRSUnpOaEpYcjkzb1RXRV9NUTBNY0NvUWJYR2NWSDg0dFFGTng0ZnNFRFZYVEluVldhZDhEeVJGZGRMbTd5bXRKck9rWXJHSHBGcTgySV9nMVR2SXJaWDVXT0dkS3VGUUVNRk9lWWtvbGF0MzRxaXRVVXRQUHRLUUh0VzNvYU9faGUyaVpGc3dkV1JYODFsX1ZzUzM2QlkwQzJCYmNhQ2ZB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 679
    },
    {
      "date": "May 17",
      "text": "Iran states it will unveil a Hormuz toll mechanism soon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNa28tT0ZnSnBQZjlodFVfRU1DRk9xdGVnVXJVWjNpOWo2SmZha3JnMUF3U1dWVVZ3alY5cTJoQjFsdU92RWgzcmV4U2d4R2hrdDhicTFIRDFfMi1fYmJHT09OclRFeTNPNWk5OFZGY3FMblRlTXVjN3NjcHllRU0wQjBhVVRrS1dYalItbF94Y0RldlI3UE5lbV9Mbkk1d2w1RkRQNmh1UGkzZ3J2VG1GbWtjRi03Uk9zTlhmQmdfd9IBxAFBVV95cUxQZTFTTUlWd2RyeUlzUzRvMWVzRFp1U19zZ19rM1prNXlrZkM0R0ItcVp2bkZ0elRvcnNsWnFUM3FSbFNvd3ZwaW1qUi1mTFFURDh0aHBoSmxnMlM3QmJseUpQdXVQLU9mcnJXUEd2Mlo1Zk5MVVdUMlZUNkhqRlpzeGwtY2U1RUN1czRVWE1LazlCUlRpU1pMLTFDSEFudUt5c0FKMDVCNU1iSzlMcXdBWHVRckY1SExmUDNVUWt4MlF4RXdH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 679
    },
    {
      "date": "May 17",
      "text": "Israel attacks Lebanon, with reports of a drone hitting a UAE power plant.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPS1N6LWkyaW1VbTREcm5Pcy12eWlBWDRJOENBN25SdmxKeE40MHBROUlIamc5T0NXRDlsMnFscXVaUHdNbDBzLVk2RkFNYk9ham92LUxxMzZCSk9VVFdnVjdUSkNHNlNBUjNWWnhHVmZhNUZFNlI4VmstQ2JvS1JMMGZkU1BTNFRNSkRKbUNoVWdicmZLWjZ1U0Rfb1E3ZU9BanQ2OFFFMEhZZklqZ3NCU25iTkJ2UVJablBkMdIBwgFBVV95cUxQQTdhWGVPRjJuOHZtRTNHTXk1UllpYkpBTFRWWUdQWGVfQ3U3b2JCWjZ5NDRoX1l1LVpXWUdsZ0tFajhlQjBJeklqSjUxMDhiWFBRa1N1U1JaSlJJbk9sbjVoLVl0XzBJb0V2TVBNaC01a0hCaU1QWUpHT2tvcWZJQV9aOEdseVNGU1R5dWEzVy1Cc1hWYi1kaDhtVGZISTVKM1owenBtMnRlX1BBNTFCV0dTY3FQLXdJRnFqejJBZ0VSUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 679
    },
    {
      "date": "May 17",
      "text": "An IDF infantry platoon commander was killed by a Hezbollah drone in southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxOZ01NY2Fablk0c1YyOUw0c2dSd1BMOFB4M2ZaQUNES0Z3UUxDNE91M28wYWZlYWZHcDRBTi04c3ltMU1yU3ZjYVpIOGJtVngwSzlkSXVhWTcyanhGbWJfcC1UcG05by0tVnV6QW1fRDlhZVRoS1NLZlRXQmFUWm5tXzZaZ1ZfWFZrclJRSzRkWmlzUFZEVFVJX1hDVnNLQ2o1VE9BN0duSDdpbzjSAbABQVVfeXFMUE5oV0pOMG1DZmkzUHo5LVN5THB6ejV3S3JEQkFFLUhaZGRLQzhWYjVwTTlTQ0M1T1Jkd0FXZkplRGp6SEJaY3VwWTVoeGI1RDNVTm5JUWRVS0NZWFk3aUQwbi1CYlViLXAzT1k4VVZhak8zSUozbEtrdU15SGgzUUFwLVRrZFJoZl9jeFRpRTFLSUV1bmpWdm9MM1JFQVFRLTByZTRrbFRacjBIalNSYlU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 679
    },
    {
      "date": "May 17",
      "text": "The Pentagon quietly shut down a legally required program to prevent civilian deaths by the military.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxNbWFpNHM3YWVJVGxpZVFSOExzQzFGRlJZblh0bXQtc2RtYUJKX3l1M1YyRFpuTlRqeHU5S2pYTUNtU2VHZGwtckYyU084d0VMR1NjSFdYN0ZRaHNfWHJPTjRzT3Ztd0k0MktuSU1zazZXb25IWGROekgyVDdnNjI0V0xrbE1sUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 679
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
