export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 862,
  "lastUpdated": "2026-06-03",
  "lastSyncedAt": "2026-06-03T22:38:45.951Z",
  "warDay": 96,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-03",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 7,
    "summary": "A ceasefire between Iran and the US appears strained by recent strikes, while a US-mediated deal between Israel and Hezbollah is being tested by ongoing rocket fire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
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
      "date": "Jun 02",
      "text": "Iran launches deadly attack on Kuwait airport after U.S. strikes, straining ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxNWmVQTjduVEoyLVF3Ym84c25PRXR5dmFoMjlXUy10N3NMYjlEbWxoS0JtSW9Oc280eXRqWVNDOEZZLW1OWXRFdEVwUFl2NXNjSWVTdjNjOXpBcXZ1QUVjZEpiREZEM25YUlVlR1M0UTBUWVF0cVZGaUE4dzQ1cVZvTWFaREh0czBnX2Y5YXY1Mi1Ic3BOSGpRTXROMFhoSWtYU0dDYw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 862
    },
    {
      "date": "Jun 02",
      "text": "US forces shoot down Iranian missiles and drones in response to fresh attacks on Kuwait and Bahrain.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxQOUVBeXhfWkxfYWU4N1FOd2lGUl9iN256TWhLUUZXVUNjVWxhYnBRaDk2Qi1qUmE4ekNUN3FITS1RNThaclpyMGtidGFhNXJSUFpwVUM5QmxMOUdpckYtZGRnU2FJOFAxbHE2X0ZGYlEwb1NMZUlnQU5fR2hzYkRod1dFMkFjQWJMTF95cUVsYzhjX0NyRXFxOS1xRUJ0M2ZsVjc4U2lqZ0k5bXdnSHI0Zk5pUklHekZiZ2pzOVdtMDFEV1HSAcgBQVVfeXFMUGZkbzF2ZFkwRGg5OTQtcXpJZkhlczE5NTROWi1PWDZWa1hMM3NfY3Y0d196QkJudS1waGNHVXY1Um1neTlOcFc4a0hXcGpBRlpscG9zSk5MSlhMTUxKZncwVWRRXzVlNjlrT2t0WVNudjlxYm9xVU1qdVpFN2hLMFd1YnZiSmJCTUEzNTVSNzl1a1BHNENMVTdvS0NMLVRKa0tHRFRqSEktZkQtdHZkeEFzWEtIc1NsclFqeUVxbnluRnpoSENpenM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 861
    },
    {
      "date": "Jun 02",
      "text": "Iran targets US military vessel hosting command centre in Sea of Oman.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi4AFBVV95cUxOaFZxZ3llQlJYaVlCQTgwNjFIdkotaEU5aXRJVlZyaUU4aDNUWmdTdVNsNHI5c3F6d2QyVFQ1ZTFFcFN6NmxrSHlKMG1mZjFhbDN4dGhSSzBYY2tJcms3X0FGTWF3aTJDcFd3RkVBNW1xdWNfMFhvMzlMRFlOVUJfeWlsbU9icUdKcDQ4YlYzWGVlQ21rbHFhYjRFTFZzRDVadWVXRDI1RWFTblpQZS1iRjliZnlFVUdZR2pieUlVRmU0UkVSRUVrNkcwU0JXYXNycUhJREFKN2xBUjNidHd4T9IB5gFBVV95cUxNOGhkaF9Vc2tHbENld1ViY1oyVEhhdy1fQmt2MjlXRW1tZ3BJZ3pYcTh1NnBVdWcwTEN2Z3JFa3ZIYk94c0x5ajRkb3hVdk9XUlZHNFg3SUliTW5RYWFTcFRJcXh3dnNBX05wa0pVUWJSei1IMjcyRkRTM3hjQzNrTlFlb25jSHRYODV1d2dzTk5vdmdYVkZLNEdqTTZURC11ekNJLVN4ajR4MkZsUjBXWkxqNTdlc3NfMkxMamlOR2hCNGp1YWFtT1RhTUVNTVNLUV91MnZXUEdPa2lZU0dKOHk4VUFDdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "India Today",
      "latestSinceUpdate": 862
    },
    {
      "date": "Jun 02",
      "text": "Israeli strikes kill nine in Lebanon as Hezbollah fires rockets over border, testing U.S.-mediated deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFB5N3JBTXdxaG5jOU15NXJGSkQ4dk1SNkN3ZEpwVFBvQ1ZISjQ0VURDLXdoN1ZpMk5hUHlTTUFEd3NUZVFmZFVsVGt4Y3BNTGZRS0dsNGRBTWpGUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 862
    },
    {
      "date": "Jun 02",
      "text": "House approves war powers resolution to halt military action against Iran, in a rebuke of Trump.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxPMnR3dXhONnF2YWJ2MDY1TGhPVnJzMVVCRVJ6YzI4MmNGUzI5Mk5La1UxRDEyRmhEbkQxQ0tnVnVQb0lhUlgtNnhOYXBUU1lJREZIamt3SkFjUDh4akxaWU9YWmtUN0llYjN1MzdFM0J6RUJlSXNUekJqaWlxYjhCWDFJREVldkU5aTAyRlJldw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 862
    },
    {
      "date": "Jun 02",
      "text": "Trump states Israel and Hezbollah have agreed to dial back fighting, despite ongoing exchanges.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiyAFBVV95cUxNVVpVdS1EUXBJSVJ5OXF3WW8ybjhqUUhvbVl1NXBJS3JwYjQ0UXhLRHZwUXZpRzVITVR4amw0WFcwNVZPalJpV3ctU1hzOHB6Y0daY2l6M3V2ZXB1Z0thblRnVURodXFGRmtBbHpOSFlNVjJYRVRSM3VzYi1VQkNaU3dfSVpBUUlBTWgzOTJCN2djVV84Y3dhTUJHWUE5UGROTW1tdlljWmxvSjcyUEFFeUY1dk96ZjhZdUVxZFU5Mkg5OUdaWE5Bag?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 862
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
      "perspective": "US Policy",
      "headline": "US maintains military readiness and diplomatic engagement amidst Gulf tensions",
      "summary": "The US military asserts readiness for combat in the Gulf and conducts strikes against Iranian targets, while also guiding ships through the Strait of Hormuz. President Trump is actively seeking to finalize a US-Iran agreement, including on enriched uranium and the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 844
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran warns of 'utter ruin' while facing US strikes and blockade",
      "summary": "Iran warns of 'utter ruin' if conflict restarts, facing new US strikes on missile sites and boats, and a US military strike on a commercial ship attempting to breach an Iranian blockade. President Trump suggests Iran is 'negotiating on fumes' amid ongoing diplomatic efforts.",
      "tone": "defiant",
      "latestSinceUpdate": 844
    },
    {
      "perspective": "Israel-Hezbollah Conflict",
      "headline": "Israel expands Lebanon incursion as Hezbollah intensifies rocket attacks",
      "summary": "Netanyahu has ordered the Israeli army to expand its invasion and deepen its incursion into Lebanon to target Hezbollah. Concurrently, Hezbollah has launched persistent rocket barrages on northern Israel, utilizing a 'game changing' night-hunting weapon.",
      "tone": "anxious",
      "latestSinceUpdate": 844
    }
  ]
});

export default LATEST_SNAPSHOT;
