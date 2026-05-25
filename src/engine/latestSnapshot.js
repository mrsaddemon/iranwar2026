export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 772,
  "lastUpdated": "2026-05-25",
  "lastSyncedAt": "2026-05-25T00:15:33.335Z",
  "warDay": 87,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 1,
    "summary": "Intense US-Iran negotiations are underway for a peace deal, but regional military actions and accusations of ceasefire violations indicate a fragile and unconfirmed de-escalation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
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
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 50,
    "tradeImpact": 37,
    "sanctionsPressure": 54,
    "globalPressure": 59,
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
      "date": "May 23",
      "text": "Trump states Iran agreement 'largely negotiated', Strait of Hormuz to open.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxOVWdfVmFGa2RfRzBlNmtBdVhRTWY1dkRxTGc5Y1g5RVRyMVFrVGRhXzNfcFdpQ19teS0wSDBrTkIzVEV3c2MwT2NyQzcyTGE1aXdZVUxsS0ZwU0hwVVAwVDlxZl9TNGJHVTVsSkNIbnJ4aGpoZm1aZWNnTzFoanNwS2NRTTVFQ18zbVRV?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 772
    },
    {
      "date": "May 24",
      "text": "Oil prices fall 5% on signs of U.S.-Iran deal progress.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxPZXZoS1U1dzU3OGVCNTBhd0JBVk4waDRfMkxjVm1PWXBUWUFOUy12Q1ZMV3daVFFFZkxkMTVVbGNlRlFURm8tbE15QWc4MU9xeUVEZ1gxNmd0ejU5RXA0M3d5RUxfOTRFNjdVeXJsOUNaeHIxeUxJclZJTVB2TUhpc2VNY3gxWDBVZ1BCQTBIeFFjQVFDLWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Axios",
      "latestSinceUpdate": 772
    },
    {
      "date": "May 24",
      "text": "Hezbollah drone kills soldier in northern Israel from Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMinAFBVV95cUxPRFlCSnR0UUtnTEpoX3gwVlZaLXBqQTVVdlRFZEJ0ZDBRODFBbDJBX0N5R3BiM1h4U2dVa2s4eVFoVkZ4Z1FEZ1NsbW9vUUlFM2dzZENILUs3MFhWMFlGSjVZUWV5bTNXMXJKdFJpZXlqRnowVnMyc1lHM3BpZk53LWVQUHdfNWNHRVgwRDM2Z2lqUE5JTnpJa0xvMVfSAaIBQVVfeXFMTVRNaExFS3VXblRvTTZjblowVEM2UzI3cXFjYjgtVjRya2VOcFhaZkQ3d3RjYWhrRDNhQWI4dG9iVW5vaHE1aEZGM2h3d2lLVThDOXYycTFpRzhGLV8xSldFWUJldHdUd1FWRlJMaEFiSlc4Q1dDamtIZGRNRXZJRElNa0xMVTFzUXdvZXZid2EzdzQwcTdEc0xvQ3B0OVJ1cEZR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 772
    },
    {
      "date": "May 24",
      "text": "Israeli strikes kill six in southern Lebanon; evacuation orders issued.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxPX3NyRURDSEZEQ0M3NjBHWFRhZFl6YUVLSTU0S3o5Qm9DT3dyUDBuSGZLd0pCRU9neDk0WF8tMDMxcjBuOGwtMzlnSmM1a2QwbzFUWHluRTVQWUdnMThqQVV0SjZVb2NyTFRKMXd1OWlpOXM3OTQtRlNNbFN6VTJMbnhvSnJ2SGNqenVaTENwRXU0UmRIVHRNVHhXa25IX3pxRE5Bc3NFSXNoU0ZEOHp5bWlaRVbSAboBQVVfeXFMT2VrYTU2QUlnTmpqQlpjRTNUcUVNUlAyOUFJYmVfU1B6bmRJNVhNbnZPWWZVZnJlVW4wTXJPZ19YTnJpOVpoVzdsTy1OTG1hNDRmbFVXeDhyVVAtM3QwNHdvUG1idHpNTVV3YmZzVnp1RFJFZlZ1WDhBd0RnUUxLSGo3UkxHUndjLUdBV3B2bDRHbHQ5ZjNOb1gzUGNGUWM0R0NGZEVhY1NOMjM5VzhIbWdpR2ZnaHJCeVVR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 772
    },
    {
      "date": "May 24",
      "text": "US targets Iranian military facilities after responding to attacks on navy ships.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE95RHFJYjM2ZkFnRXRTMlVqSmFob0NKdld0Z0ZwMWVhU0FZYmN2VVZtNmZiaEJCTjAxRTg3X2pSMEJqT1VwTWhjam93eGFEdXktM1VJWA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 772
    },
    {
      "date": "May 24",
      "text": "U.S. prepares for new military strikes against Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxOd0YydWZGVkNndld4N2RMN3pCNTB6U0lud2o1SlBBVDd6UjNPeUlYb2taRTl0UVBBY1ZmcEM2cUdPRVRoOFY2YnJZdGxYNHkzb0JCd0dTVWZqVVh5Z3ZnT2FvZk9maG4wbkFkdWQ4dEliMlBIemJsSlVQaTNkUXM5YdIBhgFBVV95cUxPbmoxbmJHMzhBdmdIYnVOaVNUME9GbktiTDdwazVqNVViUUtvYzRfUHVyWjNHMTVaNkxEYUpPcFNLcDF0Q25hSlcwaG9EYkFzN0c1eWZoLWtCMWFFYnNEZm5XRTFQYU9CR3hCNVVWYkE5ellhRHhCcGxmbVRzV3FiQk43UDdKQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 772
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
      "perspective": "US Administration",
      "headline": "Trump touts Iran breakthrough, but also weighs new strikes.",
      "summary": "The Trump administration indicates significant progress on an agreement with Iran, suggesting the Strait of Hormuz will open. However, reports also suggest the US is weighing new strikes for a 'decisive' victory.",
      "tone": "strained",
      "latestSinceUpdate": 772
    },
    {
      "perspective": "Iran",
      "headline": "Iran accuses US of ceasefire violation amidst peace talks.",
      "summary": "Tehran claims the US violated a ceasefire and targeted ships, even as negotiators have agreed to broad principles of a peace deal. Iran maintains its substantial missile capabilities.",
      "tone": "defiant",
      "latestSinceUpdate": 772
    },
    {
      "perspective": "Israel/Lebanon",
      "headline": "Israel strikes Lebanon after Hezbollah drone attack, issues evacuations.",
      "summary": "Following a Hezbollah drone attack that killed a soldier, Israel conducted strikes in southern Lebanon and issued evacuation orders. The fate of the conflict is seen as resting with outside powers.",
      "tone": "anxious",
      "latestSinceUpdate": 772
    },
    {
      "perspective": "Global Markets",
      "headline": "Oil prices fall on signs of US-Iran deal progress.",
      "summary": "Global oil prices have fallen significantly, reacting positively to news of constructive talks between the US and Iran. This indicates market optimism for a potential resolution and reduced supply disruption risks.",
      "tone": "neutral",
      "latestSinceUpdate": 772
    }
  ]
});

export default LATEST_SNAPSHOT;
