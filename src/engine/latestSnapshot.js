export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1872,
  "lastUpdated": "2026-08-16",
  "lastSyncedAt": "2026-08-16T05:15:03.035Z",
  "warDay": 170,
  "summary": "A US carrier group is deploying to the Middle East amidst escalating tensions, including US threats of an indefinite blockade against Iran, multiple Iranian attacks on UAE tankers in the Strait of Hormuz, and deadly Israeli strikes in southern Lebanon following Hezbollah attacks.",
  "lastNarrativeUpdate": "2026-08-16",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No active ceasefire or de-escalation agreement is currently in effect, with hostilities ongoing across multiple fronts."
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
        "militaryPower": 72
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.87
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 85,
    "oilDisruption": 88,
    "tradeImpact": 79,
    "sanctionsPressure": 68,
    "globalPressure": 90,
    "allianceInfluence": 73
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Aug 14",
      "text": "US official says carrier group headed to Middle East to replace USS Lincoln.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE50bHFXRTNsVkRFU3JmVVZjWExoWDlwZEdkLVJYNENoLWUtRlNBMkRFUjAzVTBNZzdpaHdKd1lpRTZTeXEtbF92MndpVlpZdl9RSUMzd2U3WG1TaFlPS2dIbTVrVXBSLVUtWTFsQUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "cnn.com",
      "latestSinceUpdate": 1872
    },
    {
      "date": "Aug 14",
      "text": "Trump says he plans to declare the Strait of Hormuz a US territory 'pretty soon'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxOSUJDRjVXSnZuZHNrblF2UkYwVzFUbVlFeXFJcGduNTRZaFpmR2wwRFlYdUZWb0Rta21CcHZTSjh6U0QzanUzM0ZRWjV2TllXMWx0T01TZ1lLRW9yNTVkLUs4Vk9FemJuN0JqaFpzQjRRb2ZoZzdQR3JVcUt5YWhrVWQzZTk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "cnn.com",
      "latestSinceUpdate": 1872
    },
    {
      "date": "Aug 14",
      "text": "US says it can maintain blockade on Iran 'indefinitely'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNdHcweVRHY1ZlLVJVOU9WM0dVcUt6VHpPQVBlMlJTeEVYR1lIT08zRVZ3Y2c1LVZ3aUM5NGVoTmFXUFFISDh6Tk9XbVZYMUpXQTdCdnlHVWlpWDZlaXZoaWdvRGZ0VnBxbzFlbVlPMUhWNktWZVI4c0xmZEtDR3Bydi1LQ2FldDBfaFlOUC03dHVJajh3SHU5Z2hqNHZEb0ZhVkhkT19xZkNYOFBZMk5VWThzWHJHSENsaTNOUtIBwgFBVV95cUxNYVRwc2VzSUNtT2dtU1A2cGIxZEV1U1dlUWtLTDJHV2xzWlJHZUpwZXM2bU5wTlJFR3N1bHBLZXRnNllwQlNvWlRCTmFueU1qejlGalIxZ3kxOHh6WTVpSmR6LUs3Q3dvUDFKYUtTdmxfVVZWVmkxcWdNaEs2VUdDcDVhVTVSRkFyakNVQXJFVjV0V2hTUnpLQVFlUzYyWWw3TXpOU2tLZVZ1TUVhN2pWOTVFR3V4OW5tVjFURXpfRjNTdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1872
    },
    {
      "date": "Aug 14",
      "text": "Iran attacks third UAE tanker within a week while transiting Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxPS3VQZHZGdDlJX2N0TlNubVV2QW9UdnUwMW1sTk1iUExtcFlQYlUtQ2dHMHNnaUkxbUJ6YnpscVd4WUFlZmd3WXJPbm1ZQjN2TGRzVDY4aUFCZ1ZlSk9KNFgxd3NJYlpGODNwOWVOSW93RUJVRGljcG9EblpDWTRPZUlxWlp0YkXSAYwBQVVfeXFMT1A3V3BJZlZWWFBYNnFlcVhqaVJYRjZFUVJORkxOTjRmVG91cmZGU0VTOVlKSWs4VENKR3hVZ3lhdV9GaW10QjB6RmtJb1J2cXVaRHQtelNCMmZMOGkzOGV0ZEduWEV5WFRmV2EyZzBnUS1sTmVxb1g4OVJyZy1XTTRkdGd4VnBPMzd3a0M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1872
    },
    {
      "date": "Aug 14",
      "text": "Israeli strikes kill 11 in southern Lebanon after Hezbollah wounds 3 IDF soldiers in attack.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxPT1ZKX0ZEbHRQMERUcWlMNzZYS2U5NGxFamRaS2dpQUFURk50b1VvN3ZVbm1acjdUYXR6UC03OTJBb0x2VGs1bVN2ZXMwVVVaWTRsb2tYTTZYWFNBbVFLb2FaUlJfUklqNzBwSWNSdVpJeFhoV2ZQTFRnS2tMMEtkenowUFdFMkVwelRiRWpjcGc0Z0pOUGdGT2UtSjQxX0hIVFNlbWJjOGN1MGl6aGJpZW9WOHU5bXlrYXfSAb8BQVVfeXFMT2RwX3hnaDZnanQyWWJlclZ1ZUdTTUJINl9tQnpzR292bDlfMnNlZjZuOVJZRkZJakV1SDg0Nmg4ang4anJlZXVqcVp0eXFrRy1xenJDZjhNall4TXBYTVpycm5FeXNfZzc4T04zMjZYcDV5LWpHb3d3Z3kyZGJReDNBWHZRc0Rsak5PRWlRQUU1TVJYQmZ4SFB6TW44d0dTdG9kZ0Nta2NMLTQxRXhNamNIS1hrWURMRmRaRVBieGc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1872
    },
    {
      "date": "Aug 14",
      "text": "Hezbollah chief rejects U.S.-led Lebanon deal, calling to reverse 'mistake' of direct talks with Israel.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxNa2xoRVcwMzNOOXE4dDN2LUlVSFRKVkdQdE5mS093b0cyWlFOcW9rZzNfS3JDLTZYS2RWdEpMU1I3R21FTm5FaEZNYXc0VzB3aGlJaktSTjVxZG01cWUtVUdycDFOMC1lMU55cnAtcWExSEFNV0NiU1UtUlI4ZWt5TkVBM0kzSlBKb1NodjNXOGE5WmFMUUs1NkdjVVRoUUh1bWdIakplbGduSGoxaHlmQXFiVWF6bVU0TFHSAb8BQVVfeXFMTVVlbmZpdDdSaHBZMFZrNlloQ3NBMTlfcUwzOElXR0FVNkE1Yl9pdTlMOFNRc29MZklpV1JWQUNXNmM0UVdxRzBRNEpud0tscTVsNDRMbmdUZHJDV2xxOHdraGhGVG83MHZUMlNFSTFYSUNlSldacXFiSHVfT2ZzLVc5LW4wU2V2MF83ZUhONkVTQWF1dzlYMDVRc0I0WGN3Q3dLLVhPSVBHRmdsVkwyNU1XZTlHQ3p2blMtV3BhVHc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "upi.com",
      "latestSinceUpdate": 1872
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
