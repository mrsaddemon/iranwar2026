export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1871,
  "lastUpdated": "2026-08-16",
  "lastSyncedAt": "2026-08-16T04:51:50.684Z",
  "warDay": 170,
  "summary": "The Strait of Hormuz is experiencing multiple tanker attacks by Iran, while Israel and Hezbollah engage in escalating cross-border strikes, and the US deploys a carrier group amid threats of an indefinite blockade against Iran.",
  "lastNarrativeUpdate": "2026-08-16",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 7,
    "summary": "No ceasefire or de-escalation efforts are currently reported as active."
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
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.68,
        "aggression": 0.88
      }
    }
  },
  "global": {
    "nuclearIndex": 12,
    "escalationLevel": 82,
    "oilDisruption": 88,
    "tradeImpact": 78,
    "sanctionsPressure": 63,
    "globalPressure": 83,
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
      "text": "A US carrier group is headed to the Middle East to replace the USS Lincoln.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE50bHFXRTNsVkRFU3JmVVZjWExoWDlwZEdkLVJYNENoLWUtRlNBMkRFUjAzVTBNZzdpaHdKd1lpRTZTeXEtbF92MndpVlpZdl9RSUMzd2U3WG1TaFlPS2dIbTVrVXBSLVUtWTFsQUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1871
    },
    {
      "date": "Aug 14",
      "text": "Former President Trump states he will declare the Strait of Hormuz a US territory 'pretty soon' when the Iran war ends.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxPWTNPV2U3Vl9qZGxBWWptR3ZNalp3dDJheUxpNUIwSVVub1pSc2xqZEgtN2lPOGlqaUVEYlJuV1RyM2EtM1R2N1AxZ08xdXFWUjhCd2Ewa25UaGhSblpVcHYyc0RMZUpPdm5ZR1RVaDMxWHQ5MXE4MWJ5Z3NfTGJWb2EwN21TNXMtMDRzS1NvM2hRaU9TYW4yNVhCZFN2a0JYc1FxN2pnQ25LdzVrTHFxdWlrSDZMVWs1QkNRVTFB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "nbcnews.com",
      "latestSinceUpdate": 1871
    },
    {
      "date": "Aug 14",
      "text": "The US says it can maintain a blockade on Iran 'indefinitely'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNdHcweVRHY1ZlLVJVOU9WM0dVcUt6VHpPQVBlMlJTeEVYR1lIT08zRVZ3Y2c1LVZ3aUM5NGVoTmFXUFFISDh6Tk9XbVZYMUpXQTdCdnlHVWlpWDZlaXZoaWdvRGZ0VnBxbzFlbVlPMUhWNktWZVI4c0xmZEtDR3Bydi1LQ2FldDBfaFlOUC03dHVJajh3SHU5Z2hqNHZEb0ZhVkhkT19xZkNYOFBZMk5VWThzWHJHSENsaTNOUtIBwgFBVV95cUxNYVRwc2VzSUNtT2dtU1A2cGIxZEV1U1dlUWtLTDJHV2xzWlJHZUpwZXM2bU5wTlJFR3N1bHBLZXRnNllwQlNvWlRCTmFueU1qejlGalIxZ3kxOHh6WTVpSmR6LUs3Q3dvUDFKYUtTdmxfVVZWVmkxcWdNaEs2VUdDcDVhVTVSRkFyakNVQXJFVjV0V2hTUnpLQVFlUzYyWWw3TXpOU2tLZVZ1TUVhN2pWOTVFR3V4OW5tVjFURXpfRjNTdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1871
    },
    {
      "date": "Aug 14",
      "text": "Iran attacked a third UAE tanker within a week in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxPS3VQZHZGdDlJX2N0TlNubVV2QW9UdnUwMW1sTk1iUExtcFlQYlUtQ2dHMHNnaUkxbUJ6YnpscVd4WUFlZmd3WXJPbm1ZQjN2TGRzVDY4aUFCZ1ZlSk9KNFgxd3NJYlpGODNwOWVOSW93RUJVRGljcG9EblpDWTRPZUlxWlp0YkXSAYwBQVVfeXFMT1A3V3BJZlZWWFBYNnFlcVhqaVJYRjZFUVJORkxOTjRmVG91cmZGU0VTOVlKSWs4VENKR3hVZ3lhdV9GaW10QjB6RmtJb1J2cXVaRHQtelNCMmZMOGkzOGV0ZEduWEV5WFRmV2EyZzBnUS1sTmVxb1g4OVJyZy1XTTRkdGd4VnBPMzd3a0M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1871
    },
    {
      "date": "Aug 14",
      "text": "Israeli strikes in southern Lebanon killed at least 11 people.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBCRDVFUWZWd2tFVmZ6bm5fUld6aVBfSkhFTzZZYUhyYjl4M1pnc3pfUl82cTEtelV5cGxBem9JcWJQeXhxdVRtbWQxdFlSMXlsQUpOdUtwTzFRQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "bbc.com",
      "latestSinceUpdate": 1871
    },
    {
      "date": "Aug 14",
      "text": "Three IDF troops were seriously wounded by a Hezbollah drone attack, prompting an Israeli response.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipAJBVV95cUxPRENXRjk3a1FqZ3k2eWp1eWkycUxmV1Vkay0wUkZ5dXYzbXRIM1dQa3MyRDgyOFFFYWt3U3UyYUFiUzFacjJJVFF4eVR4amV3cDUtQ0NzLXhkV1ZZRzNUczJpU2RpOU9uU25pNXZvOVJ4cG1VWkdRSGlRdUVKdDlDc2Z1M3ZhcDV3cVNGdVJNa0s0dS1DQ2stZ0VONWtpVjRDdUNsa0ZNb3lGU21wWU8yWWJmSkp5dFpkWEM5TmFsWEJGMVl4QXNrLTFCLUxrYWJiN21VcURZVng5eVFEVXlrRUt5WDE3aVp1UU5aU2tQTEptZ1BYQkNQUzIzNV9LS1pDSXZxaDZxNFZDXzJEbmNkbW9YNFd3LXR5aTlsNnVTMzZCdVdY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Haaretz",
      "latestSinceUpdate": 1871
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
