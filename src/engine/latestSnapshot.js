export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 691,
  "lastUpdated": "2026-05-18",
  "lastSyncedAt": "2026-05-18T01:30:29.270Z",
  "warDay": 80,
  "summary": "The US warns Iran as a fragile ceasefire in Lebanon is eroded by Israeli strikes and Hezbollah drone attacks, while tensions escalate around the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 5,
    "summary": "A ceasefire in Lebanon remains in effect but is severely undermined by ongoing Israeli strikes and Hezbollah drone attacks."
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "May 18",
      "text": "Trump warns Tehran ‘clock is ticking’ for deal with US",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxPS1N6LWkyaW1VbTREcm5Pcy12eWlBWDRJOENBN25SdmxKeE40MHBROUlIamc5T0NXRDlsMnFscXVaUHdNbDBzLVk2RkFNYk9ham92LUxxMzZCSk9VVFdnVjdUSkNHNlNBUjNWWnhHVmZhNUZFNlI4VmstQ2JvS1JMMGZkU1BTNFRNSkRKbUNoVWdicmZLWjZ1U0Rfb1E3ZU9BanQ2OFFFMEhZZklqZ3NCU25iTkJ2UVJablBkMdIBwgFBVV95cUxQQTdhWGVPRjJuOHZtRTNHTXk1UllpYkpBTFRWWUdQWGVfQ3U3b2JCWjZ5NDRoX1l1LVpXWUdsZ0tFajhlQjBJeklqSjUxMDhiWFBRa1N1U1JaSlJJbk9sbjVoLVl0XzBJb0V2TVBNaC01a0hCaU1QWUpHT2tvcWZJQV9aOEdseVNGU1R5dWEzVy1Cc1hWYi1kaDhtVGZISTVKM1owenBtMnRlX1BBNTFCV0dTY3FQLXdJRnFqejJBZ0VSUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 691
    },
    {
      "date": "May 18",
      "text": "Tehran says it will unveil Hormuz toll mechanism soon",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNa28tT0ZnSnBQZjlodFVfRU1DRk9xdGVnVXJVWjNpOWo2SmZha3JnMUF3U1dWVVZ3alY5cTJoQjFsdU92RWgzcmV4U2d4R2hrdDhicTFIRDFfMi1fYmJHT09OclRFeTNPNWk5OFZGY3FMblRlTXVjN3NjcHllRU0wQjBhVVRrS1dYalItbF94Y0RldlI3UE5lbV9Mbkk1d2w1RkRQNmh1UGkzZ3J2VG1GbWtjRi03Uk9zTlhmQmdfd9IBxAFBVV95cUxQZTFTTUlWd2RyeUlzUzRvMWVzRFp1U19zZ19rM1prNXlrZkM0R0ItcVp2bkZ0elRvcnNsWnFUM3FSbFNvd3ZwaW1qUi1mTFFURDh0aHBoSmxnMlM3QmJseUpQdXVQLU9mcnJXUEd2Mlo1Zk5MVVdUMlZUNkhqRlpzeGwtY2U1RUN1czRVWE1LazlCUlRpU1pMLTFDSEFudUt5c0FKMDVCNU1iSzlMcXdBWHVRckY1SExmUDNVUWt4MlF4RXdH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 691
    },
    {
      "date": "May 18",
      "text": "Lebanon ‘ceasefire’ extended, Israel launches new attacks",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNX253cS1CLXNmbVZtQ0Z5bzRudXhYNWVHNmU3QTZIZG0xbzdtRGw1UEYzR1pUdHFsRUdQQURIUllVVDhQekdwOWY2bGhyUU84aGlzV2tGcVRXRzVHU1JfTXFLdWowamtzZnZVVlZZaGpUb0dQMi1aNUFYNXdKamNDa1VabXdOMTJQbEZYcDhDVHVSZDdoaThwdS16allnVU9HNTJLWUViMEt1UjBYQTRVTkRJWWJvUExHbnfSAb8BQVVfeXFMTzkxQS1VbVFiSDZ0bFhCTm1DaHlnaHNUY2NXYVdlZDkweWQ5dUdKTUVCWG5ORi0yTG4tcWRxRjZkbkxLUGYzN3g4VER6aGMzaWVfRjA4RTUyUG9jVHRUbWladlVrZFhtMlcwOUZkblpxMlZmMGRibjA1NEM4UzhjMHdEQ1FSV1cxd0hpRTU2SXBzeXpnNHZSWUtTNGtaT0U0OW1sRXJrUVJRVGZ0UVo3dkZzRVI5eV9QVUt3dEZ0TUk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 691
    },
    {
      "date": "May 18",
      "text": "Deadly Israeli Strikes Erode Cease-Fire in Lebanon",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxPa19fSFd6d0FtRXBYVG5yaGZlQTE3aFFFc2paZEJ2Q0w5Nm54OWJJYkRPNEE0RjdhX1VVdGpNZ2VYY0VTQ3RMclRCN3BzUTJ3cHpHdzhNbDJ2Uzk1NFFkRUEweEhQQnJKbEF6eE1kOHAxbTJacy11SC00RWU1b3dTOGVvcnNONXJTYjRjbkRDazVXaEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 691
    },
    {
      "date": "May 18",
      "text": "IDF says infantry platoon commander killed by Hezbollah drone in southern Lebanon",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxOMVd0LWtBUlJRWm56TUhmN2NpNGlrMUdYWkh4YVNDel9OcmV2bHlMQzVkZUgxRGpHM3lTLTczeWw4UXJjc3FJaW8tLWQ3bHV4NEM2RVNkeEx5UW9aNDFsNWVQaGRBTWtQRDRnZWRROUdGMkpZVlZLWG1CQUt5emtSdDJUb2dqRDVpbkRoVG1zY0ZYejYyOEpONDV1UHFmN1VTOGZxWmNtc3NXdWgxbUg4SnBlSTNuQkRIUVJZRjRvVUVWckNOWUE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 691
    },
    {
      "date": "May 18",
      "text": "Hezbollah drone strike videos show evolving tactics against Israel",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1ZRlZ1bFFFWlc5SDVraHZwUTRxd1FFS2hTeWdiVUdLWnFiaHI0QVhPU2ZYckFaNFF3UW5vWGEtZWIwb1lmNGdtX1V3VVQzdXEwQjVrNDA5TTVRdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 691
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
      "perspective": "US Stance",
      "headline": "Trump Issues Ultimatum to Iran",
      "summary": "The US President has publicly stated that time is running out for Iran to reach a deal with the United States. This rhetoric suggests an impending decision on further US actions against Tehran.",
      "tone": "defiant",
      "latestSinceUpdate": 691
    },
    {
      "perspective": "Regional Security",
      "headline": "Hormuz Strait Tensions Escalate",
      "summary": "Iran is threatening to implement a new toll mechanism in the Strait of Hormuz, raising concerns about potential disruptions to global shipping. US officials view the current situation in the strait as detrimental to international interests.",
      "tone": "anxious",
      "latestSinceUpdate": 691
    },
    {
      "perspective": "Lebanon Conflict",
      "headline": "Lebanon Ceasefire Under Strain",
      "summary": "Despite an extended ceasefire, Israeli forces have launched new attacks in Lebanon, leading to casualties and eroding the fragile agreement. Hezbollah has also demonstrated evolving drone tactics, contributing to the instability.",
      "tone": "strained",
      "latestSinceUpdate": 691
    },
    {
      "perspective": "US Military Critique",
      "headline": "Concerns Over US Military Conduct",
      "summary": "Critics argue that the current US administration's policies are negatively impacting the military's effectiveness and ethical standards. Reports indicate the Pentagon has ceased a program designed to prevent civilian casualties, raising questions about operational precision.",
      "tone": "skeptical",
      "latestSinceUpdate": 691
    }
  ]
});

export default LATEST_SNAPSHOT;
