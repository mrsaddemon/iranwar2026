export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1818,
  "lastUpdated": "2026-08-15",
  "lastSyncedAt": "2026-08-15T04:49:33.056Z",
  "warDay": 169,
  "summary": "Ongoing conflict between the US and Iran continues, marked by diplomatic efforts, Israeli military actions in Lebanon and Gaza, heightened tensions in the Strait of Hormuz following tanker attacks, and significant US drone losses.",
  "lastNarrativeUpdate": "2026-08-15",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire is reported amidst ongoing hostilities and military actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Aug 13",
      "text": "Mediators push for US-Iran talks amidst ongoing Israeli strikes in Lebanon and Gaza.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNZ0YzeG5pTmVna25ZMW9GU0tYYTg2OHhtYWdVVldlSy1CcDRTT19HcGkxSzRwQTBwVUloRXlnQVVJMnQ0YWxjQ2R0djZ4Und0YzdTR3AxRks5UVZLNk8tLUY0QzVScmw5RW1iRzN3ci1YZG15ZXNwS2hwbkthcFlXLTZrNy01ZTk1U0M1STFva2VGX1UzSThTRlZ6U3dBMWNDSENqamZ4U0dJRzl2RmU2bGUwaHE5ZE9lZE530gHAAUFVX3lxTE05eGo4eEZ4dWg0bkZScF85cGJzRXFHaHlMeTN5T3F4X0ozNWNjT1pEN1B2ZW9fM3hjOU02TDBRNTM0ZGtSNzl4MEZQNkpzbzJyMzN6WXAzZ21FenVRQm1leWkzOFlPRWNObU05eG9QcmVqNnpKdTZRTzgzeUcwUGZWckxnSnJPRER1TFlrS2xJYlNTVnpUdFUyR3NLZ3MwMG1Zc3g4Tzc1QlpaZjFHUTlvMWpHQVJmUEFXS2twRDMtUg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1818
    },
    {
      "date": "Aug 13",
      "text": "US states it can maintain a blockade on Iran 'indefinitely'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNdHcweVRHY1ZlLVJVOU9WM0dVcUt6VHpPQVBlMlJTeEVYR1lIT08zRVZ3Y2c1LVZ3aUM5NGVoTmFXUFFISDh6Tk9XbVZYMUpXQTdCdnlHVWlpWDZlaXZoaWdvRGZ0VnBxbzFlbVlPMUhWNktWZVI4c0xmZEtDR3Bydi1LQ2FldDBfaFlOUC03dHVJajh3SHU5Z2hqNHZEb0ZhVkhkT19xZkNYOFBZMk5VWThzWHJHSENsaTNOUtIBwgFBVV95cUxNYVRwc2VzSUNtT2dtU1A2cGIxZEV1U1dlUWtLTDJHV2xzWlJHZUpwZXM2bU5wTlJFR3N1bHBLZXRnNllwQlNvWlRCTmFueU1qejlGalIxZ3kxOHh6WTVpSmR6LUs3Q3dvUDFKYUtTdmxfVVZWVmkxcWdNaEs2VUdDcDVhVTVSRkFyakNVQXJFVjV0V2hTUnpLQVFlUzYyWWw3TXpOU2tLZVZ1TUVhN2pWOTVFR3V4OW5tVjFURXpfRjNTdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1818
    },
    {
      "date": "Aug 13",
      "text": "Two UAE tankers attacked while transiting the Strait of Hormuz; UAE blames Iran for drone attack.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMifkFVX3lxTE11SkdOenRYTGNZZUQxbmRaLXpKVjRkQ3JzZlUxVVh1WGFHVTZBWlpZTlU2ZTdkZmwwN3RoYVI3QkxMbE9Id0RlNV9BWEFMaEJpTFdLdzhKNHZwZEhaamZvQ25LeUJ4eUVrRTU5Zk1ucnRtLTBsRGVFRUJYSDBEZ9IBgwFBVV95cUxQUndhM3RvS2wzeGRjbGVrSkFjTjRWWWgzeTVlTmotRnl4ZEM5dUlXOXpvUW5rWXZJT09waDJWYWw2bFNhZnh3bG4xSjhTekVjcGh3VWY3Znl1LXpaNHoxVjRHekU1XzVyNm9sZ1E4WTVFRWNUY1ppaldGYjN4S0JwTWFrZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NewsNation",
      "latestSinceUpdate": 1818
    },
    {
      "date": "Aug 13",
      "text": "Trump states he will declare the Strait of Hormuz a US territory.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxPVzFraWFiZjd3WFg5eEpZNXRMdDFPZUlvTmpHYkM2QXNBUkQ2TjR5NUctNUJPZ1hKMnFtdWtKOFFNTkFTc0s0R3hYZFdfQ3ZHLWlMTFE3RWRranQ4aExKMkMzZzl4SWt2UGQzYjRJbHo5UVhINWVpX25rUzhKdkV0LW5WTG5nRUtTTmJwUU0wd2IzZnpKM296NtIBngFBVV95cUxQbUI0ZVg5NHQ4T05ScnpPVHptMHY2RFZReVp3NGdlbWtjMGlVMDNSVk8tN0M1N1BpUkU0b2pmcDRKM1ZRSl9XekxfYjExdHNtWVdVTklCMkpyd0RWVmZ6SGdTdUxyV2l0ZTU5ZFM4YWZFZndRaklFdzZkVU82cFB3RjQyOUtBbWs5aDFXRFEwZkpLMFNVbVJSeVlqT3h6Zw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1818
    },
    {
      "date": "Aug 13",
      "text": "Hezbollah chief rejects a US-led Lebanon deal, calling it humiliating.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1818
    },
    {
      "date": "Aug 13",
      "text": "US military has lost approximately 25% of its Reaper drone fleet in the Iran war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi0gFBVV95cUxNR2swcWNKLTdQX01uTFVzYmpGSGU4Q2VZcWZxWHFPLXk2aXVJQjBsVW9QNGVpdDVJLTk0blY2a1RJV1dGMlYxVlBETTdoY3BKNHB0SnBUcHM3X0NSSUtlMGtkOHpXUi1qZ3dTdm15ME5GOXQzM2lBRzBvQTJlNC1YaVJUMF9jUUw3cEt4WW04U1QyaWpqSU82OGxUZVU3X1lNdlRhVG9tbHlkV0NKVC1oa3RXRlBvRzJxMzhxbERvcGs2bWFFRl9Wdm9XWk00bkRuTXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1818
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
