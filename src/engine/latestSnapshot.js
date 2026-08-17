export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1933,
  "lastUpdated": "2026-08-17",
  "lastSyncedAt": "2026-08-17T12:01:46.803Z",
  "warDay": 171,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-08-17",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 60,
    "summary": "A 60-day negotiation period between the U.S. and Iran has ended in stalemate, and a ceasefire deal has expired, indicating a collapse of peace efforts."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "Aug 16",
      "text": "Kushner meets Netanyahu after talks with Hamas on stalled Gaza peace plan.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9HMS1FenJqYXZEVWlWMHdLX0lUSzdnMmdNVG9rakl3ck5wVGNCVEJHZWc0TlM3dnpvS2lxYldUR1lBek1WUWhOc2ZpbTFZM0w1M1pPOER6czIyWUhTdkl3SmpSMlptTnZUZWU1aXNB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1933
    },
    {
      "date": "Aug 16",
      "text": "Kushner meets regional leaders as multiple conflicts roil Middle East.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE40V2dqMUJIcWdndGVfSXlVeDRKbmkzU3hrTTRyeXBrSWR3NGtUNzNkSm54X19kcDNBNzJBaVV0NEJTNVdLVVRrUlNHLXZETnFwMEIyekJhOTduVWxZQWZyVW5WQ0xua1ByTDc0OG1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1933
    },
    {
      "date": "Aug 17",
      "text": "Israel strikes Lebanon, killing 11, after Hezbollah wounds 3 IDF soldiers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPT1ZKX0ZEbHRQMERUcWlMNzZYS2U5NGxFamRaS2dpQUFURk50b1VvN3ZVbm1acjdUYXR6UC03OTJBb0x2VGs1bVN2ZXMwVVVaWTRsb2tYTTZYWFNBbVFLb2FaUlJfUklqNzBwSWNSdVpJeFhoV2ZQTFRnS2tMMEtkenowUFdFMkVwelRiRWpjcGc0Z0pOUGdGT2UtSjQxX0hIVFNlbWJjOGN1MGl6aGJpZW9WOHU5bXlrYXfSAb8BQVVfeXFMT2RwX3hnaDZnanQyWWJlclZ1ZUdTTUJINl9tQnpzR292bDlfMnNlZjZuOVJZRkZJakV1SDg0Nmg4ang4anJlZXVqcVp0eXFrRy1xenJDZjhNall4TXBYTVpycm5FeXNfZzc4T04zMjZYcDV5LWpHb3d3Z3kyZGJReDNBWHZRc0Rsak5PRWlRQUU1TVJYQmZ4SFB6TW44d0dTdG9kZ0Nta2NMLTQxRXhNamNIS1hrWURMRmRaRVBieGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1933
    },
    {
      "date": "Aug 17",
      "text": "Iran claims the Strait of Hormuz is under its control.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNQzlkS0EwWUsxSGYtSjNaal92eVBWNjhwcnhzdS10VXNRd1NTdnZ6OFNxZ2xXdWZ4NWtwZ2pQcWdnbmJ3M3hrU0E1RVppcjR1WU8ydjlRdm91UVJjVDNndk0zSUR0a2VNZ0NNZmp1MkNBNHVpaGpwUy1VdTJnbzBQX2JZeDdwTXd2NEpZN3RhNzY2OWZGR052eUYxTzZ2emVfSWNCZ2VKTFc5X0MxU1JHdjNJVTbSAboBQVVfeXFMTTBCVzhpTmo0MFR2eXFDWktoY0pfVVVoeUVPcU9heS1FaVdwTEJsdDB0eU9HWkhKMkM4YzdJb0hoT2ljdl9vTXlMNFRkdFJQcmJRWDEtajh2VDMyLWpNYXRtd0NyUTJkUnVKZ09CRUVYSVQ5Z1IxUklWUnNYNE9zelpmUEZTNnE3SWY0X0VSYkpaNldjcjZPQkYzNmRlVUtWLUpYSUhmelpRRGxmOWRVcDR2NzY3WjR3WUVB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1933
    },
    {
      "date": "Aug 17",
      "text": "U.S. prepares fresh sanctions against Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxNRXhvNkxYc1FyX0YxVzZZTXBLeW9GVnhVT21GNjlrbmhQSTZpZkdxVmhubVZPcTIxeEVwLUZnMUdiTUYwc3BERmxoWXBNVm5BNGxQOWVwcldhcDFWMC16aXdKVjJrUzlmNVV6SXVtV3dsLVpOcGgzWm1SNkZ1MTBiOGdVaWpJYzlvMEVlOQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Japan Times",
      "latestSinceUpdate": 1933
    },
    {
      "date": "Aug 17",
      "text": "Trump threatens to declare the Strait of Hormuz a U.S. territory.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxNNEVudV9fZFI2N0NBNnYwNlAzTjJfTGl2Zm9tNWgwU3RMb19Gd0VvZE1VbmlQbERPOXgwQ1JoUHRFNVZ0VUZlU3hVN2x4ajE0TWNqN05tVmhoNGNyV2J5WkxvMGhwMVhiSUxrT0pjdTBfT3ppSi1tRW1DR3hRellKdl9HU3UtSUFlZkR3WEFCanRTejVCNWJ0djF3anhXOVY1Y3VLV0cxR3pqR2vSAbABQVVfeXFMT01DTmVnOU9kYVE3RlhHcVg2YlEtVU9tdUFpZ1dwakdWa2t5V3dwb1h5NE1Gb2RzRm5GTXhtbHJiMUppNHJ4MFlKQTVGTnc4RVduY0R6eGsya08xdnoxNUVQVzVrbU9LVzVjZkpRd1RENDBHamp5aTBpSmxfTzlVRXBFOEFteGlyS1lST3FheTZvWEZuRm14eW9iU3MxMnpEaUFNMVYxMDgtSWYxWEhtQ3g?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1933
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
      "perspective": "International Community",
      "headline": "Calls for De-escalation Persist Amidst Ongoing Conflict",
      "summary": "International observers continue to emphasize the need for diplomatic solutions to prevent further regional instability. Concerns remain high regarding humanitarian impacts and the potential for wider escalation.",
      "tone": "anxious",
      "latestSinceUpdate": 1867
    },
    {
      "perspective": "Israel",
      "headline": "Security Operations Continue to Address Persistent Threats",
      "summary": "Security operations are framed as essential for national defense against ongoing threats in the region. The focus remains on neutralizing perceived dangers and ensuring long-term national security.",
      "tone": "defiant",
      "latestSinceUpdate": 1867
    },
    {
      "perspective": "Iran",
      "headline": "Regional Actors Assert Influence Amidst Geopolitical Tensions",
      "summary": "Regional actors continue to assert their influence, supporting various groups in what they describe as resistance against foreign intervention. The narrative emphasizes sovereignty and regional power dynamics.",
      "tone": "defiant",
      "latestSinceUpdate": 1867
    }
  ]
});

export default LATEST_SNAPSHOT;
