export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1817,
  "lastUpdated": "2026-08-15",
  "lastSyncedAt": "2026-08-15T04:14:57.021Z",
  "warDay": 169,
  "summary": "Mediators are pushing for US-Iran talks amidst ongoing conflict, Israeli strikes in Lebanon and Gaza, heightened tensions in the Strait of Hormuz following tanker attacks, and significant US drone losses.",
  "lastNarrativeUpdate": "2026-08-15",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect; mediators are pushing for talks while conflict continues and a proposed Lebanon-Israel deal was rejected."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
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
    "nuclearIndex": 20,
    "escalationLevel": 80,
    "oilDisruption": 85,
    "tradeImpact": 76,
    "sanctionsPressure": 63,
    "globalPressure": 82,
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
      "date": "Aug 13",
      "text": "Mediators push US-Iran talks as Israel hits Lebanon, Gaza.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNZ0YzeG5pTmVna25ZMW9GU0tYYTg2OHhtYWdVVldlSy1CcDRTT19HcGkxSzRwQTBwVUloRXlnQVVJMnQ0YWxjQ2R0djZ4Und0YzdTR3AxRks5UVZLNk8tLUY0QzVScmw5RW1iRzN3ci1YZG15ZXNwS2hwbkthcFlXLTZrNy01ZTk1U0M1STFva2VGX1UzSThTRlZ6U3dBMWNDSENqamZ4U0dJRzl2RmU2bGUwaHE5ZE9lZE530gHAAUFVX3lxTE05eGo4eEZ4dWg0bkZScF85cGJzRXFHaHlMeTN5T3F4X0ozNWNjT1pEN1B2ZW9fM3hjOU02TDBRNTM0ZGtSNzl4MEZQNkpzbzJyMzN6WXAzZ21FenVRQm1leWkzOFlPRWNObU05eG9QcmVqNnpKdTZRTzgzeUcwUGZWckxnSnJPRER1TFlrS2xJYlNTVnpUdFUyR3NLZ3MwMG1Zc3g4Tzc1QlpaZjFHUTlvMWpHQVJmUEFXS2twRDMtUg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1817
    },
    {
      "date": "Recent",
      "text": "US states it can maintain a blockade on Iran indefinitely.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNdHcweVRHY1ZlLVJVOU9WM0dVcUt6VHpPQVBlMlJTeEVYR1lIT08zRVZ3Y2c1LVZ3aUM5NGVoTmFXUFFISDh6Tk9XbVZYMUpXQTdCdnlHVWlpWDZlaXZoaWdvRGZ0VnBxbzFlbVlPMUhWNktWZVI4c0xmZEtDR3Bydi1LQ2FldDBfaFlOUC03dHVJajh3SHU5Z2hqNHZEb0ZhVkhkT19xZkNYOFBZMk5VWThzWHJHSENsaTNOUtIBwgFBVV95cUxNYVRwc2VzSUNtT2dtU1A2cGIxZEV1U1dlUWtLTDJHV2xzWlJHZUpwZXM2bU5wTlJFR3N1bHBLZXRnNllwQlNvWlRCTmFueU1qejlGalIxZ3kxOHh6WTVpSmR6LUs3Q3dvUDFKYUtTdmxfVVZWVmkxcWdNaEs2VUdDcDVhVTVSRkFyakNVQXJFVjV0V2hTUnpLQVFlUzYyWWw3TXpOU2tLZVZ1TUVhN2pWOTVFR3V4OW5tVjFURXpfRjNTdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1817
    },
    {
      "date": "Recent",
      "text": "Iran claims control of the Strait of Hormuz after Trump's threats to keep it.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1817
    },
    {
      "date": "Recent",
      "text": "US CENTCOM chief reportedly pushing for renewed strikes on Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxQSDJPbnFkODBmcFhzSC1lZlNKVm1xTEhNd0thMzhtQU16bmppVkhOM1VIdGU2TnlBSXFnZG9KdllZeWp3NU5ORllvZXZiVmxzeFZ6Z2V4RW1hQlAwb0FqcUFjNzZQd25ySlpaYm8waHF0R3RyVjVNcHR4bi0waW5FMDh6cklDcEoyeDdoZVR5enBHaEZUZGllcWUyN0loN2JYTHNBMWV5TXloY3NRamlKbkdHRmhGdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Anadolu Ajansı",
      "latestSinceUpdate": 1817
    },
    {
      "date": "Recent",
      "text": "Two UAE tankers attacked while transiting the Strait of Hormuz; UAE blames Iran for drone attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTE11SkdOenRYTGNZZUQxbmRaLXpKVjRkQ3JzZlUxVVh1WGFHVTZBWlpZTlU2ZTdkZmwwN3RoYVI3QkxMbE9Id0RlNV9BWEFMaEJpTFdLdzhKNHZwZEhaamZvQ25LeUJ4eUVrRTU5Zk1ucnRtLTBsRGVFRUJYSDBEZ9IBgwFBVV95cUxQUndhM3RvS2wzeGRjbGVrSkFjTjRWWWgzeTVlTmotRnl4ZEM5dUlXOXpvUW5rWXZJT09waDJWYWw2bFNhZnh3bG4xSjhTekVjcGh3VWY3Znl1LXpaNHoxVjRHekU1XzVyNm9sZ1E4WTVFRWNUY1ppaldGYjN4S0JwTWFrZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NewsNation",
      "latestSinceUpdate": 1817
    },
    {
      "date": "Recent",
      "text": "Hezbollah chief rejects US-led Lebanon-Israel deal, claiming it humiliates the nation, as Israel reportedly plans an assault.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxPa2twdmg3eDBpM05Hd3piS251eU5oYkxxNTFyc1NkdlZ4bFM0a2drbi0tTzVLbEhENncwQmhpakdUOU9GZFlJWWlRR1BSOWptN0xMU0RGdDJHbkNxWHlhR193d2NKWTBGV2EzUFM5bm5ZRmlwZC1NNjRmemZzaF9FVVh2Q2xyMjd1a0hwMVA1RWxQTE5zRzN5REduWWpJRzlsOURFMW9MaWoyQdIBrwFBVV95cUxNM0lvdDl0UWJMZ3FEMHExdko0WXQtcU9PSmsta2lQT2RRQTNfRUJENU5WN0NFOUtPeTVNWDJvLWNXMktrcThPaVFDNTdUYlNBbGVPMWZFbklLbWVqUjkxX01xMXFiWUkyczZqSnJGNTBSa05BTUkzaG5xTEVoMlQwN2VqYnloZVpkV005dnFndHdQWEFfMVY0eWZNdTlmYWRncTlfUGhQSGpWUzdJTHVR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1817
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
      "perspective": "US Administration",
      "headline": "Trump pivots to sanctions, claims oil flowing normally",
      "summary": "The Trump administration is reportedly pivoting back to sanctions for Iran, with claims that oil is flowing normally despite data casting doubt on US control of the Strait of Hormuz. Trump also states the Lebanon ceasefire is working.",
      "tone": "strained",
      "latestSinceUpdate": 1768
    },
    {
      "perspective": "Iran",
      "headline": "Iran demands war damages, elevates confrontational military",
      "summary": "Iran demands the U.S. pay for war damage before reopening the Strait of Hormuz. The supreme leader has elevated military veterans willing to confront the US, with an IRGC adviser stating the U.S. military is 'weaker than what we perceived'.",
      "tone": "defiant",
      "latestSinceUpdate": 1768
    },
    {
      "perspective": "International Mediators",
      "headline": "Pakistan pushes for US-Iran talks amid peace deal hopes",
      "summary": "Mediators, including Pakistan, are actively pushing for US-Iran talks, with Pakistan suggesting the two nations are close to a 'peace arrangement or a deal'.",
      "tone": "anxious",
      "latestSinceUpdate": 1768
    },
    {
      "perspective": "Skeptical Observers",
      "headline": "Iran war a 'quagmire', oil claims questioned, Lebanon ceasefire a 'prison'",
      "summary": "Commentary suggests the Iran War is a 'whole new level of quagmire for the US'. Claims by the Trump administration regarding normal oil flow are questioned, and the Lebanon ceasefire is described as a 'prison' by residents.",
      "tone": "skeptical",
      "latestSinceUpdate": 1768
    }
  ]
});

export default LATEST_SNAPSHOT;
