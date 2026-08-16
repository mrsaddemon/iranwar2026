export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1870,
  "lastUpdated": "2026-08-16",
  "lastSyncedAt": "2026-08-16T04:16:48.357Z",
  "warDay": 170,
  "summary": "The Middle East conflict intensifies with US naval deployments, threats of an indefinite blockade against Iran, and ongoing Israeli strikes in Lebanon met with Hezbollah's rejection of a US-led deal, while Iran continues to target shipping in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-08-16",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire or de-escalation efforts are reported amidst ongoing military actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
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
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Aug 14",
      "text": "US carrier group headed to Middle East to replace USS Lincoln.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE50bHFXRTNsVkRFU3JmVVZjWExoWDlwZEdkLVJYNENoLWUtRlNBMkRFUjAzVTBNZzdpaHdKd1lpRTZTeXEtbF92MndpVlpZdl9RSUMzd2U3WG1TaFlPS2dIbTVrVXBSLVUtWTFsQUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1870
    },
    {
      "date": "Aug 14",
      "text": "Trump says he plans to declare the Strait of Hormuz a US territory.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxOSUJDRjVXSnZuZHNrblF2UkYwVzFUbVlFeXFJcGduNTRZaFpmR2wwRFlYdUZWb0Rta21CcHZTSjh6U0QzanUzM0ZRWjV2TllXMWx0T01TZ1lLRW9yNTVkLUs4Vk9FemJuN0JqaFpzQjRRb2ZoZzdQR3JVcUt5YWhrVWQzZTk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1870
    },
    {
      "date": "Aug 14",
      "text": "US says it can maintain an indefinite blockade on Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNdHcweVRHY1ZlLVJVOU9WM0dVcUt6VHpPQVBlMlJTeEVYR1lIT08zRVZ3Y2c1LVZ3aUM5NGVoTmFXUFFISDh6Tk9XbVZYMUpXQTdCdnlHVWlpWDZlaXZoaWdvRGZ0VnBxbzFlbVlPMUhWNktWZVI4c0xmZEtDR3Bydi1LQ2FldDBfaFlOUC03dHVJajh3SHU5Z2hqNHZEb0ZhVkhkT19xZkNYOFBZMk5VWThzWHJHSENsaTNOUtIBwgFBVV95cUxNYVRwc2VzSUNtT2dtU1A2cGIxZEV1U1dlUWtLTDJHV2xzWlJHZUpwZXM2bU5wTlJFR3N1bHBLZXRnNllwQlNvWlRCTmFueU1qejlGalIxZ3kxOHh6WTVpSmR6LUs3Q3dvUDFKYUtTdmxfVVZWVmkxcWdNaEs2VUdDcDVhVTVSRkFyakNVQXJFVjV0V2hTUnpLQVFlUzYyWWw3TXpOU2tLZVZ1TUVhN2pWOTVFR3V4OW5tVjFURXpfRjNTdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1870
    },
    {
      "date": "Aug 14",
      "text": "Iran attacks third UAE tanker within a week in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxPS3VQZHZGdDlJX2N0TlNubVV2QW9UdnUwMW1sTk1iUExtcFlQYlUtQ2dHMHNnaUkxbUJ6YnpscVd4WUFlZmd3WXJPbm1ZQjN2TGRzVDY4aUFCZ1ZlSk9KNFgxd3NJYlpGODNwOWVOSW93RUJVRGljcG9EblpDWTRPZUlxWlp0YkXSAYwBQVVfeXFMT1A3V3BJZlZWWFBYNnFlcVhqaVJYRjZFUVJORkxOTjRmVG91cmZGU0VTOVlKSWs4VENKR3hVZ3lhdV9GaW10QjB6RmtJb1J2cXVaRHQtelNCMmZMOGkzOGV0ZEduWEV5WFRmV2EyZzBnUS1sTmVxb1g4OVJyZy1XTTRkdGd4VnBPMzd3a0M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1870
    },
    {
      "date": "Aug 14",
      "text": "Israeli strikes kill at least 11 in southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxPVXM0UF9hbGcwOHNUVUZ1Zms5RDF1UWhGVWVyRHRSbm5zdXpSSmxoMGhsLWNhUE90YkVCU2tESnBPTUFURDFFTkpzUFhRRElKdkJNQmpZV0RhOEhLS0FhSVFNUkd0dDhON0dicVl4OTc0X2RzN1gxVlJMbzJqMlNpRTl0QlVtdWp4eHQ3ZklZRXZsU205NG1Bdl9jXzhTa0xDcExkLUVQY0tUcXBpOWlHMk5n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1870
    },
    {
      "date": "Aug 14",
      "text": "Hezbollah chief rejects US-led Lebanon deal, calls for reversal.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1870
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
