export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1906,
  "lastUpdated": "2026-08-16",
  "lastSyncedAt": "2026-08-16T20:32:24.532Z",
  "warDay": 170,
  "summary": "Tensions in the Middle East are escalating with renewed Israeli strikes in Lebanon, Iranian attacks on tankers in the Strait of Hormuz, and direct threats between the US and Iran following the apparent collapse of a ceasefire.",
  "lastNarrativeUpdate": "2026-08-16",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.9,
    "durationDays": 7,
    "summary": "The US-Iran ceasefire appears to have collapsed amidst renewed hostilities and direct threats."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
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
    "nuclearIndex": 20,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "date": "Aug 15",
      "text": "Shipping faces more disruptions in the Middle East.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE5jZlpLZGNVVU9BX2JPcU13ZWt1SXZPLWZmaUdhR05fcWdmUmtZMHRTNFZNdUllN2g3MHU0ejRidWVqSVRtUkRwSnlmOFI0U3BPX1FGaXEyQTl1VjVhNTh4Y1BRbU5kUGhvU2JfN1lR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "cnn.com",
      "latestSinceUpdate": 1906
    },
    {
      "date": "Aug 15",
      "text": "Trump threatens to declare Strait of Hormuz US territory.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxNNEVudV9fZFI2N0NBNnYwNlAzTjJfTGl2Zm9tNWgwU3RMb19Gd0VvZE1VbmlQbERPOXgwQ1JoUHRFNVZ0VUZlU3hVN2x4ajE0TWNqN05tVmhoNGNyV2J5WkxvMGhwMVhiSUxrT0pjdTBfT3ppSi1tRW1DR3hRellKdl9HU3UtSUFlZkR3WEFCanRTejVCNWJ0djF3anhXOVY1Y3VLV0cxR3pqR2vSAbABQVVfeXFMT01DTmVnOU9kYVE3RlhHcVg2YlEtVU9tdUFpZ1dwakdWa2t5V3dwb1h5NE1Gb2RzRm5GTXhtbHJiMUppNHJ4MFlKQTVGTnc4RVduY0R6eGsya08xdnoxNUVQVzVrbU9LVzVjZkpRd1RENDBHamp5aTBpSmxfTzlVRXBFOEFteGlyS1lST3FheTZvWEZuRm14eW9iU3MxMnpEaUFNMVYxMDgtSWYxWEhtQ3g?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1906
    },
    {
      "date": "Aug 15",
      "text": "Israeli strikes in southern Lebanon kill at least 11.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxPVXM0UF9hbGcwOHNUVUZ1Zms5RDF1UWhGVWVyRHRSbm5zdXpSSmxoMGhsLWNhUE90YkVCU2tESnBPTUFURDFFTkpzUFhRRElKdkJNQmpZV0RhOEhLS0FhSVFNUkd0dDhON0dicVl4OTc0X2RzN1gxVlJMbzJqMlNpRTl0QlVtdWp4eHQ3ZklZRXZsU205NG1Bdl9jXzhTa0xDcExkLUVQY0tUcXBpOWlHMk5n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1906
    },
    {
      "date": "Aug 15",
      "text": "Iran targets tankers in 'unprovoked attacks' in Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMif0FVX3lxTFBWbGN2eXRreVRtbzJ4SnZxOGZzNXkzNy1fMkNuUHFlSkx1RHJpMjFYUEJUVlFpUVRyV2V5Q013cUtaaGg4Y1VrYjZMd181dzF2LXNOX3pnZFNDajNETmJfaWh2cXZpMjdnODNzcExKWGVUSzBRUkI4YUVTOHJIZHM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1906
    },
    {
      "date": "Aug 15",
      "text": "U.S. military has lost roughly 25% of its Reaper drones.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi0gFBVV95cUxNR2swcWNKLTdQX01uTFVzYmpGSGU4Q2VZcWZxWHFPLXk2aXVJQjBsVW9QNGVpdDVJLTk0blY2a1RJV1dGMlYxVlBETTdoY3BKNHB0SnBUcHM3X0NSSUtlMGtkOHpXUi1qZ3dTdm15ME5GOXQzM2lBRzBvQTJlNC1YaVJUMF9jUUw3cEt4WW04U1QyaWpqSU82OGxUZVU3X1lNdlRhVG9tbHlkV0NKVC1oa3RXRlBvRzJxMzhxbERvcGs2bWFFRl9Wdm9XWk00bkRuTXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1906
    },
    {
      "date": "Aug 15",
      "text": "Iran’s army chief tells Trump ‘we’ll break your legs’ after Hormuz threat.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQd3lWQ2k3NWxXV1ZXWG5hUjhON0FzV0xGWmxmRC1YTEtFM0htWGZ3M3l4eDRGa244aTA2TGdrTmt5WDVtcFhQQ2pVZkNoNjU0eGZsQzlHOF92VmZoeTZ1dGk0NUdiazJJVTV5akNDbkRmRXZMOUs5NkJOaUk5ZDQ0VW1WNnUxRlZKZ3duRnFkbHlzZFZfcy1BdDFBeDZ4UlcxTmxEcWluWUJQWVA3aTQ5eGdYYzV1NlU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "independent.co.uk",
      "latestSinceUpdate": 1906
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
