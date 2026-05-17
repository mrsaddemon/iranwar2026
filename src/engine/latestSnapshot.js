export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 689,
  "lastUpdated": "2026-05-17",
  "lastSyncedAt": "2026-05-17T22:28:31.987Z",
  "warDay": 79,
  "summary": "Tensions remain high in the Middle East with ongoing Israel-Lebanon conflict despite a fragile ceasefire, while US President Trump issues warnings to Iran and addresses the Strait of Hormuz situation.",
  "lastNarrativeUpdate": "2026-05-17",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 7,
    "summary": "A ceasefire in Lebanon has been extended, but it remains fragile with reports of new Israeli attacks and casualties."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
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
    "nuclearIndex": 65,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "text": "Trump states 'clock is ticking' for Iran to make a deal with the US.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPS1N6LWkyaW1VbTREcm5Pcy12eWlBWDRJOENBN25SdmxKeE40MHBROUlIamc5T0NXRDlsMnFscXVaUHdNbDBzLVk2RkFNYk9ham92LUxxMzZCSk9VVFdnVjdUSkNHNlNBUjNWWnhHVmZhNUZFNlI4VmstQ2JvS1JMMGZkU1BTNFRNSkRKbUNoVWdicmZLWjZ1U0Rfb1E3ZU9BanQ2OFFFMEhZZklqZ3NCU25iTkJ2UVJablBkMdIBwgFBVV95cUxQQTdhWGVPRjJuOHZtRTNHTXk1UllpYkpBTFRWWUdQWGVfQ3U3b2JCWjZ5NDRoX1l1LVpXWUdsZ0tFajhlQjBJeklqSjUxMDhiWFBRa1N1U1JaSlJJbk9sbjVoLVl0XzBJb0V2TVBNaC01a0hCaU1QWUpHT2tvcWZJQV9aOEdseVNGU1R5dWEzVy1Cc1hWYi1kaDhtVGZISTVKM1owenBtMnRlX1BBNTFCV0dTY3FQLXdJRnFqejJBZ0VSUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 689
    },
    {
      "date": "May 17",
      "text": "Lebanon 'ceasefire' extended, but Israel launches new attacks and kills at least five in Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxQd1UwRnRjZURqLWFtbWNVS0hxaElkYV9nalpEQVVlSkVONG5VSTJDOWZzUnQtM0NCNmJNV1I4amFIbDczeFFMRnlNRnFPUXoxakpqX2lRX2c2dExQUjVGTnpvNVhrX1MtSGFycThZSVZ0b182c1Z1NElvc3BpNDhoTVRsX0xCbHdtd2lzNTc2Y0hpa2V6bUtCaW14QXdaWERMQnJaXzhGd0hiM1VmN0HSAbMBQVVfeXFMUENyVkM1cE5nNTg1bUZ6UE5KdWQ0VjQzcllBcGdwMDVrRk1kajBzX0x6S0hzWjEzRnliS1hDeUgtZGlsZXhIamJXRUxhaWplLWpsdXEyc0I5bnpsaDcwUGJldm1oYzVzdUk1TE50QVFNcmR4a1l1VlVPSTc2TERoWlVkeTBhRFBCd0lic1lLVjh2WGdWUkQxaFoxekZWZjcwM3JwbE9jTkRVUXRZbTZKWHhKVnM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 689
    },
    {
      "date": "May 17",
      "text": "Tehran announces plans to unveil a Hormuz toll mechanism soon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNa28tT0ZnSnBQZjlodFVfRU1DRk9xdGVnVXJVWjNpOWo2SmZha3JnMUF3U1dWVVZ3alY5cTJoQjFsdU92RWgzcmV4U2d4R2hrdDhicTFIRDFfMi1fYmJHT09OclRFeTNPNWk5OFZGY3FMblRlTXVjN3NjcHllRU0wQjBhVVRrS1dYalItbF94Y0RldlI3UE5lbV9Mbkk1d2w1RkRQNmh1UGkzZ3J2VG1GbWtjRi03Uk9zTlhmQmdfd9IBxAFBVV95cUxQZTFTTUlWd2RyeUlzUzRvMWVzRFp1U19zZ19rM1prNXlrZkM0R0ItcVp2bkZ0elRvcnNsWnFUM3FSbFNvd3ZwaW1qUi1mTFFURDh0aHBoSmxnMlM3QmJseUpQdXVQLU9mcnJXUEd2Mlo1Zk5MVVdUMlZUNkhqRlpzeGwtY2U1RUN1czRVWE1LazlCUlRpU1pMLTFDSEFudUt5c0FKMDVCNU1iSzlMcXdBWHVRckY1SExmUDNVUWt4MlF4RXdH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 689
    },
    {
      "date": "May 17",
      "text": "Trump to pause US effort to guide ships through Strait of Hormuz while blockade remains.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibEFVX3lxTFBjQmlHemxOdXowdXdPY0hCMzZnTXhJdnhIYkZxLUhaTng2anQzWmdhV1hUbFZpUndvZ3FCVHNBRklLTzhib1ZQU1l0SGJZVTlpeWMweUtTS2xuMTE0UXNTbXp3bjJRYkZTRGJyNg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 689
    },
    {
      "date": "May 17",
      "text": "UAE reports a drone strike on a nuclear facility amidst regional tensions.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxQVDNVeUExc1Z0TFppSTlyY0V5S29aRFpfeEswV1RiTHdhLTRmckN2eUw5SE9ZRmNhWVdKbEp6a0NaNHhoR0NCeXcxYmR6Qm1MT3Rwc000Vko5ZGtMLTZ2ZG1ib2dBMDFqV20zdU1ZOTluaXExRS1hUmo4QTRkdmNpUHRoT2pTNW56M0F3ZkJtMVJrRjNaTEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 689
    },
    {
      "date": "May 17",
      "text": "Hezbollah drone strike videos show evolving tactics against Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1ZRlZ1bFFFWlc5SDVraHZwUTRxd1FFS2hTeWdiVUdLWnFiaHI0QVhPU2ZYckFaNFF3UW5vWGEtZWIwb1lmNGdtX1V3VVQzdXEwQjVrNDA5TTVRdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 689
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
