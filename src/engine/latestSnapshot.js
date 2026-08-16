export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1914,
  "lastUpdated": "2026-08-16",
  "lastSyncedAt": "2026-08-16T23:01:06.893Z",
  "warDay": 170,
  "summary": "The Middle East faces heightened tensions with a US-Iran ceasefire lapse, renewed Israeli strikes in Lebanon, US military deployments, and direct threats between the US and Iran over the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-08-16",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.9,
    "durationDays": 7,
    "summary": "The US-Iran ceasefire has lapsed, leading to renewed military actions in the region."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
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
      "date": "Aug 15",
      "text": "Israeli strikes in southern Lebanon kill at least 11 people.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxPVXM0UF9hbGcwOHNUVUZ1Zms5RDF1UWhGVWVyRHRSbm5zdXpSSmxoMGhsLWNhUE90YkVCU2tESnBPTUFURDFFTkpzUFhRRElKdkJNQmpZV0RhOEhLS0FhSVFNUkd0dDhON0dicVl4OTc0X2RzN1gxVlJMbzJqMlNpRTl0QlVtdWp4eHQ3ZklZRXZsU205NG1Bdl9jXzhTa0xDcExkLUVQY0tUcXBpOWlHMk5n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1914
    },
    {
      "date": "Aug 15",
      "text": "A US-Iran ceasefire lapses, preceding renewed Israeli military action.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1914
    },
    {
      "date": "Aug 15",
      "text": "Shipping operations in the Middle East are experiencing increased disruptions.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1914
    },
    {
      "date": "Aug 14",
      "text": "A US carrier group is deploying to the Middle East to replace the USS Lincoln.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE50bHFXRTNsVkRFU3JmVVZjWExoWDlwZEdkLVJYNENoLWUtRlNBMkRFUjAzVTBNZzdpaHdKd1lpRTZTeXEtbF92MndpVlpZdl9RSUMzd2U3WG1TaFlPS2dIbTVrVXBSLVUtWTFsQUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1914
    },
    {
      "date": "Aug 15",
      "text": "Trump threatens to declare the Strait of Hormuz a US territory, drawing a defiant response from Iran's army chief.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxNNEVudV9fZFI2N0NBNnYwNlAzTjJfTGl2Zm9tNWgwU3RMb19Gd0VvZE1VbmlQbERPOXgwQ1JoUHRFNVZ0VUZlU3hVN2x4ajE0TWNqN05tVmhoNGNyV2J5WkxvMGhwMVhiSUxrT0pjdTBfT3ppSi1tRW1DR3hRellKdl9HU3UtSUFlZkR3WEFCanRTejVCNWJ0djF3anhXOVY1Y3VLV0cxR3pqR2vSAbABQVVfeXFMT01DTmVnOU9kYVE3RlhHcVg2YlEtVU9tdUFpZ1dwakdWa2t5V3dwb1h5NE1Gb2RzRm5GTXhtbHJiMUppNHJ4MFlKQTVGTnc4RVduY0R6eGsya08xdnoxNUVQVzVrbU9LVzVjZkpRd1RENDBHamp5aTBpSmxfTzlVRXBFOEFteGlyS1lST3FheTZvWEZuRm14eW9iU3MxMnpEaUFNMVYxMDgtSWYxWEhtQ3g?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1914
    },
    {
      "date": "Recent",
      "text": "Israel seizes a large arsenal of weapons linked to the Iran terror axis.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxNNk5TOUlncm9NeGJVX0k5TERTUVZjZERHR3ZiUzhJcnBJcXlrRjkzU0FoR3RNbHlpbEl1d3hjczJKR0F6Z196NXQwMC1JVFpKbGJoamlyOTJ5ZW1zRU16VXJBdS1IbUNBaEdEUmtkMjllZFVZak5hcnZNUWRlUkthWkd1VUFzbUhrbDFudlpGeXpzdE1YVVhUUEdVMnh2V18zdkpDSU9zZDVrTk5BV1Vj0gG0AUFVX3lxTFBhVVZmOHZWVEl4a3pUdzBTMHJfSmdua0hNRHk3al80STlyVm55UnJjSEpocGYtZEpYVldEMUhwZGZRQzc5TUZsdUdUaHNKaDJIbkF1eFd0WFRnYVVDU1pITm41b1Zfbk1KQkNiZHYwYVdxSnpmdm5fM1RvU214eGdRVm43WU5QUlR3bXRwWmJ3N0x6Y09oVDV3ZE5tM2JNeDZmczI0d2cwZmsxYXZDaVNTSF9PbA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1914
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
      "status": "unavailable"
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
