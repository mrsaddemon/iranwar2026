export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1932,
  "lastUpdated": "2026-08-17",
  "lastSyncedAt": "2026-08-17T11:44:08.321Z",
  "warDay": 171,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-08-17",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "The 60-day negotiation period for an Iran peace deal has ended in a stalemate, and Israel has escalated attacks in southern Lebanon despite an existing ceasefire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.4,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 68,
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
      "date": "Aug 16",
      "text": "Kushner meets regional leaders as multiple conflicts continue in the Middle East.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE40V2dqMUJIcWdndGVfSXlVeDRKbmkzU3hrTTRyeXBrSWR3NGtUNzNkSm54X19kcDNBNzJBaVV0NEJTNVdLVVRrUlNHLXZETnFwMEIyekJhOTduVWxZQWZyVW5WQ0xua1ByTDc0OG1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1932
    },
    {
      "date": "Aug 16",
      "text": "Iran states the Strait of Hormuz is under its control; Israel bombs Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxNQzlkS0EwWUsxSGYtSjNaal92eVBWNjhwcnhzdS10VXNRd1NTdnZ6OFNxZ2xXdWZ4NWtwZ2pQcWdnbmJ3M3hrU0E1RVppcjR1WU8ydjlRdm91UVJjVDNndk0zSUR0a2VNZ0NNZmp1MkNBNHVpaGpwUy1VdTJnbzBQX2JZeDdwTXd2NEpZN3RhNzY2OWZGR052eUYxTzZ2emVfSWNCZ2VKTFc5X0MxU1JHdjNJVTbSAboBQVVfeXFMTTBCVzhpTmo0MFR2eXFDWktoY0pfVVVoeUVPcU9heS1FaVdwTEJsdDB0eU9HWkhKMkM4YzdJb0hoT2ljdl9vTXlMNFRkdFJQcmJRWDEtajh2VDMyLWpNYXRtd0NyUTJkUnVKZ09CRUVYSVQ5Z1IxUklWUnNYNE9zelpmUEZTNnE3SWY0X0VSYkpaNldjcjZPQkYzNmRlVUtWLUpYSUhmelpRRGxmOWRVcDR2NzY3WjR3WUVB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1932
    },
    {
      "date": "Aug 15",
      "text": "The 60-day negotiation period between the U.S. and Iran ends in a stalemate.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxQSjB6cEFBa2hwQ1ZKNUFmMmxtSEJhNnpITnQ0LTNzdUNoWUZvMy1tV3FxVkR3UlJ2VHpFQ1JVQlNiN2FhNVpvam1pZkNrY0pvajRCandGNjVYUG9QSUxyd3o4U1gzYWtHOE5xSmltVlVwY2lfcVlVVU0xaUwzdFZROURnTERwQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1932
    },
    {
      "date": "Aug 15",
      "text": "Israel escalates attacks in southern Lebanon despite an existing ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxQdlJXVVpubVFvQ0ZEdGozSWQxWUNVNTYwM3ZtaEw3NklHd3F2R0NJN1p3ZHBBaVN4VWNiVGhWaGwzaUw5NEtHZzEyM2xld2RteFhjcXZTejdLT2drTy1kWDViZ1MtanVuQm9kM1MyLTVkZVJpakFLSTFVWkZwbjl0OEpaV2Y5cEF4Vk5RM2xZUEVTV01CczlXSHRPdEEtaHVjYmswdHZjWkZjRUMtRjhSUtIBtgFBVV95cUxNS0tQa0NydXRYR0NONnFlRVBhRXlnOF9PZTBUUC1WbjhIMTZFNGVDQnhqaVBxT3kzR2k2UEVndWtRWndvdDBNR2FxeW8xcGNfVTI1TEpCR1A5dWFUcThLLVljSTg0aDg2UU9hWTBPdGhBaS1oQmFua2Y3T0Jlc2doWFYxVWZRYlJkenIwRTRvQVNwYWVxSnVHN2ZDOU1DUm0yWDRWNDcwQktnUUd3YXBGVEdoVzNrdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1932
    },
    {
      "date": "Aug 15",
      "text": "Diesel prices spike to $5.41 nationally due to pressures from the potential closure of the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxNZS0zV3NTVHhMNTMzRHZ0eUpjZnBjN1pvYVBHSnpZSS1WREtFU3JPTXQxSFZHalR4c3ZZYk5qTEsyQUhBb3FGdnVEM2FQSjliNzhzQmIzYnRHUmgzVDNxdjcxMGpHS3M1blZwNVRQVzI5SEJXY1hDaEVWdnU0Y1BaeEhmUUtYSFZyOGRxSk40WTZjZjhRaTlFSGxjWXNMcnphOWlmVzhIUnU5Vi1JRGwyS2lpRm52OTQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "WLUK",
      "latestSinceUpdate": 1932
    },
    {
      "date": "Aug 15",
      "text": "Iran offers a $30,000 bounty for killing or capturing U.S. soldiers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxOcUFVOVduVlZTWFpDYURxYjROVWdvd0pIX0tZRGItN2NaRlpWZy1DYTA5NERsOTJNRFBjYVl2VFZZdzRYWkZCZGFTYW9nOEM3UWx0XzdNZzJBRE11VFhhNms2aDRqcEFzaGE5QjZkcVlCWGt4UzVnMnh0cTBYQW9Qc1dZc0luTjBiSldoY0ZGZDRDbGFsOEVEcW5ZVkR1ZFVEM0JIeV9PTmdZNFF4LVlXWQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 1932
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
