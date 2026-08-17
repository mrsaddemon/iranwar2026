export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1925,
  "lastUpdated": "2026-08-17",
  "lastSyncedAt": "2026-08-17T07:27:37.108Z",
  "warDay": 171,
  "summary": "Multiple conflicts continue across the Middle East, with Israel striking Lebanon and Gaza, Iran asserting control over the Strait of Hormuz, and diplomatic efforts stalling amidst threats and sanctions.",
  "lastNarrativeUpdate": "2026-08-17",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 60,
    "summary": "No active ceasefire is in effect, with diplomatic talks stalled and military actions ongoing across multiple fronts."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
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
    "oilDisruption": 75,
    "tradeImpact": 69,
    "sanctionsPressure": 64,
    "globalPressure": 81,
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
      "text": "Kushner meets regional leaders as multiple conflicts roil Middle East.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE40V2dqMUJIcWdndGVfSXlVeDRKbmkzU3hrTTRyeXBrSWR3NGtUNzNkSm54X19kcDNBNzJBaVV0NEJTNVdLVVRrUlNHLXZETnFwMEIyekJhOTduVWxZQWZyVW5WQ0xua1ByTDc0OG1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1925
    },
    {
      "date": "Aug 16",
      "text": "Iran claims Hormuz under its control; Israel bombs Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNQzlkS0EwWUsxSGYtSjNaal92eVBWNjhwcnhzdS10VXNRd1NTdnZ6OFNxZ2xXdWZ4NWtwZ2pQcWdnbmJ3M3hrU0E1RVppcjR1WU8ydjlRdm91UVJjVDNndk0zSUR0a2VNZ0NNZmp1MkNBNHVpaGpwUy1VdTJnbzBQX2JZeDdwTXd2NEpZN3RhNzY2OWZGR052eUYxTzZ2emVfSWNCZ2VKTFc5X0MxU1JHdjNJVTbSAboBQVVfeXFMTTBCVzhpTmo0MFR2eXFDWktoY0pfVVVoeUVPcU9heS1FaVdwTEJsdDB0eU9HWkhKMkM4YzdJb0hoT2ljdl9vTXlMNFRkdFJQcmJRWDEtajh2VDMyLWpNYXRtd0NyUTJkUnVKZ09CRUVYSVQ5Z1IxUklWUnNYNE9zelpmUEZTNnE3SWY0X0VSYkpaNldjcjZPQkYzNmRlVUtWLUpYSUhmelpRRGxmOWRVcDR2NzY3WjR3WUVB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1925
    },
    {
      "date": "Aug 16",
      "text": "Israel strikes Lebanon, adding pressure to stalled US-Iran talks.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1925
    },
    {
      "date": "Aug 16",
      "text": "Oil struggles for direction as US-Iran talks stall, Hormuz shipping slows.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxPNmNqanA3WXVHU3JvRVRoZnVBYUpwUmRGbkxCYTNHLW9EeTFhbTdFcjFqM2JtZVctcTd6TzhEYnJUekhXQURDRXkzUXNNRlF4OEN3S2VQZ1ZIZ0c5OHo0d3RWdG01Z1o5amVMZFk0cGdUOGV1enVQYVVzTWtQVl9rTHhyM1RaeGxOd0RUNEM5NWJCMW91WFpITmp6TmlKOWF4RUYtMTRBQVpYX0pqZ0Q3UjNKVHIzZGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1925
    },
    {
      "date": "Aug 16",
      "text": "Trump threatens to make the Strait of Hormuz a US territory.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxNNEVudV9fZFI2N0NBNnYwNlAzTjJfTGl2Zm9tNWgwU3RMb19Gd0VvZE1VbmlQbERPOXgwQ1JoUHRFNVZ0VUZlU3hVN2x4ajE0TWNqN05tVmhoNGNyV2J5WkxvMGhwMVhiSUxrT0pjdTBfT3ppSi1tRW1DR3hRellKdl9HU3UtSUFlZkR3WEFCanRTejVCNWJ0djF3anhXOVY1Y3VLV0cxR3pqR2vSAbABQVVfeXFMT01DTmVnOU9kYVE3RlhHcVg2YlEtVU9tdUFpZ1dwakdWa2t5V3dwb1h5NE1Gb2RzRm5GTXhtbHJiMUppNHJ4MFlKQTVGTnc4RVduY0R6eGsya08xdnoxNUVQVzVrbU9LVzVjZkpRd1RENDBHamp5aTBpSmxfTzlVRXBFOEFteGlyS1lST3FheTZvWEZuRm14eW9iU3MxMnpEaUFNMVYxMDgtSWYxWEhtQ3g?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1925
    },
    {
      "date": "Aug 16",
      "text": "Israeli strikes kill 11 in south Lebanon after Hezbollah wounds 3 IDF soldiers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPT1ZKX0ZEbHRQMERUcWlMNzZYS2U5NGxFamRaS2dpQUFURk50b1VvN3ZVbm1acjdUYXR6UC03OTJBb0x2VGs1bVN2ZXMwVVVaWTRsb2tYTTZYWFNBbVFLb2FaUlJfUklqNzBwSWNSdVpJeFhoV2ZQTFRnS2tMMEtkenowUFdFMkVwelRiRWpjcGc0Z0pOUGdGT2UtSjQxX0hIVFNlbWJjOGN1MGl6aGJpZW9WOHU5bXlrYXfSAb8BQVVfeXFMT2RwX3hnaDZnanQyWWJlclZ1ZUdTTUJINl9tQnpzR292bDlfMnNlZjZuOVJZRkZJakV1SDg0Nmg4ang4anJlZXVqcVp0eXFrRy1xenJDZjhNall4TXBYTVpycm5FeXNfZzc4T04zMjZYcDV5LWpHb3d3Z3kyZGJReDNBWHZRc0Rsak5PRWlRQUU1TVJYQmZ4SFB6TW44d0dTdG9kZ0Nta2NMLTQxRXhNamNIS1hrWURMRmRaRVBieGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1925
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
