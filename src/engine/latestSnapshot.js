export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 774,
  "lastUpdated": "2026-05-25",
  "lastSyncedAt": "2026-05-25T12:39:57.570Z",
  "warDay": 87,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-05-25",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 14,
    "summary": "A previously attempted ceasefire appears fragile or collapsed, with Iran accusing the US of violations, while broader peace deal negotiations continue."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
    "allianceInfluence": 46
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
      "date": "May 24",
      "text": "US and Iran continue negotiating peace deal terms, with officials reporting agreement on broad principles.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 774
    },
    {
      "date": "May 24",
      "text": "President Trump states an Iran agreement has been largely negotiated but also weighs new strikes to achieve a 'decisive' victory.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNVGdjcGZxc0xlUWVqMTFnSE5PWHhfTktWV1FienhRUXprYWxtT0c3dnQ5dEJGUFNQUVNVRURXcm4tNDl4SEFoQ3U3Y3Jpc0VDbGlGS0dtTHIwdDBDeTd1MVQzQlhvUzhlNU1nS0s1bl9vVURnTzdvanVXdkwxNjlZMEZCTm9OYXhkc2xLeE9USlIyMU1ERUVqNHpHRXpaamZra2VFcEgtUDBBY1Yxem1yYmZCNmNoN29HckdN0gHAAUFVX3lxTFBIbkd1N3VodWpvUElmRHpXTHJxUkdqNjNwdzhkejVNZGwtSlhnb1dGUVFTUENnemJuZWt0dVhBVW5FYmt0Q2dtaWtGekxrV1hqOTJXUC1iam5SVVdyVk9EMU9qazEwY1N0d3hUVXZqMDVIRkhCcGtWR0NDUVRXNUNNMmgzXzRWUHhPM3V0QjEzeU5Ccmp4V28yVnZuYTI2TDR4aEtmaGFBM1k5TFNJMGJ5VVhBZG5EN0piQ2c1bXFxcA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 774
    },
    {
      "date": "May 24",
      "text": "Israeli Prime Minister Netanyahu is reportedly frozen out of US-Iran peace talks.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 774
    },
    {
      "date": "May 24",
      "text": "Israel conducts strikes in Lebanon amidst intense US-Iran mediation efforts.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxQRnVzY24tZ0NvMXpwYWVkLS1mbWdnV0ZBSjdZbF9pOURweXBmTWF5Q1FaVTV2NkRDVUZsdy1ET093Nng3aHhUUXNHTC1yeWQtdGxEdnBHS09GanFBcWJHN1Fwd2haMG9jU25nYTNzeHA2aHQ5Z2lqVkxMaEd0WDFreVpHX2tSNnpwZjcwRXlKVFNDMDDSAZgBQVVfeXFMTklOVGIwNmtjUE81eWhTQkpaTmhKNGc1VVFWVC13eWIxNjdYWnNfMjdpV1lxck83ajNPdGRkaXFXNE95dnlza0VVM3d5S3VQQzhPUUQwM2t6MjlhX1FHcG5CcUhEQUdvb1draUotMXktSjc1X2VSWEZSSUN5UWtfRUItNm5jc3YwOXRmSFNtTHJDU3M4MGtmRl8?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New Arab",
      "latestSinceUpdate": 774
    },
    {
      "date": "May 24",
      "text": "Tehran claims the US violated a ceasefire and targeted Iranian ships.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQWmMwcHRNRzF3SVdqU3A3dFJpS0YyUFp3aFhncHVDZ0FQd0xXSWJwdTFteUEya1d0VEkxazRtbkNyMi1hVV9SdTBBdktJM29GaHlOdThaS1M5cUlwdHo2RTFiSDNZLTlJb3VTTTFYdlVjemlYX2ZaWm9ubUhLOTdTUGdnMDZpVFh3RHlvbWZLODM3ZmlDeVFMRkJ0RlZNSDIzNWVNc3Z4UlpScGZheHdteTl2YUxlYnotWDFJ0gHAAUFVX3lxTE85dVRselp4VWZ0QXpJTXJTaEs2aS1tOUdGbXJjdVhiSXZ0TkxlMFI1RUdmZFVENFhQSjRQYk45ZzR4X2lpcU5XOHZwQ0JEcUtHaDZIS0FXNmlScjhhNUdmLXAwNmpqMkRPS3RTNGR2dFpHT3doWGVyTHRGUklYMm5qcDdjRTJKREQ2YmptMVctVVRsc08wUlNDRFBwOTFORUtaVTFSY1R2NDNJX28zZ3pLYzdNcXlWOGtwNVdpZ1Zxcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 774
    },
    {
      "date": "May 24",
      "text": "Oil prices slide as ships move toward the Strait of Hormuz, prompting the UK to ready a mine-clearing mission.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 774
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
