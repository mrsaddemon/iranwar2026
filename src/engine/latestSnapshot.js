export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 701,
  "lastUpdated": "2026-05-19",
  "lastSyncedAt": "2026-05-19T01:31:47.747Z",
  "warDay": 81,
  "summary": "Tensions remain high between the US and Iran following a paused US strike, while the Israel-Hezbollah conflict persists despite a truce, and Iran threatens shipping in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 10,
    "summary": "A ceasefire between Israel and Hezbollah has been extended but fighting continues to intensify, leading to significant casualties in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
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
      "date": "May 17",
      "text": "Trump says planned attack on Iran was held off upon Gulf states’ request, confirming a paused strike.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNQ3BDQ1VQdWtIeDFYbkN6aFNpdDdsdEszTkl3aEN6b2pma05MOFNnZHRSNzdFZmJrQzAzY0ZTTEZXVDhfWXQ0b1J4TW95V25KbFEtdXBlaUo3a1R3OGdmQWZIaFJ1N3FxOV9FRnhMZlNPUzBZbXNzZHZxUzRQaldBcDlKQURGVHlLaXV0YlB3ZEVvVEttTjRLd0NKc2E2Nk5zYS05eDE0MWNibldKX3Q5QUZFWWMtM2NrR2JfNA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 701
    },
    {
      "date": "May 19",
      "text": "Iran announces it will unveil a mechanism for charging tolls for passage through the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNa28tT0ZnSnBQZjlodFVfRU1DRk9xdGVnVXJVWjNpOWo2SmZha3JnMUF3U1dWVVZ3alY5cTJoQjFsdU92RWgzcmV4U2d4R2hrdDhicTFIRDFfMi1fYmJHT09OclRFeTNPNWk5OFZGY3FMblRlTXVjN3NjcHllRU0wQjBhVVRrS1dYalItbF94Y0RldlI3UE5lbV9Mbkk1d2w1RkRQNmh1UGkzZ3J2VG1GbWtjRi03Uk9zTlhmQmdfd9IBxAFBVV95cUxQZTFTTUlWd2RyeUlzUzRvMWVzRFp1U19zZ19rM1prNXlrZkM0R0ItcVp2bkZ0elRvcnNsWnFUM3FSbFNvd3ZwaW1qUi1mTFFURDh0aHBoSmxnMlM3QmJseUpQdXVQLU9mcnJXUEd2Mlo1Zk5MVVdUMlZUNkhqRlpzeGwtY2U1RUN1czRVWE1LazlCUlRpU1pMLTFDSEFudUt5c0FKMDVCNU1iSzlMcXdBWHVRckY1SExmUDNVUWt4MlF4RXdH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 701
    },
    {
      "date": "May 19",
      "text": "Iran initiates Bitcoin-backed shipping insurance for vessels transiting the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 701
    },
    {
      "date": "May 19",
      "text": "Israel attacks Lebanon, and a drone hits a UAE power plant amidst ongoing regional conflict.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi0AFBVV95cUxOaFBYYi1xZGg2dUdYTWJVa2RFdjZqTFRqUUdjYW1TeVA1VHM0WGoxZUdmZV9IVExWUm80dlBkUTlCOTAwQlNVYUk0YV81ZW11RzRKVTF6TmlYM1FtZFR1ZFc3RUFYUlg4aUJXMDc0UDNibkZwXzNmdHZmcG1FTnNZRU1LalZ3UktOSGpPTnpYQWNoWC0zbVdTVkg0aXBEdkRKUFd4TWtndjZhMXQ1dmpLSHVsMlZJVTBObHgxZ1YxN2plNXREQUtMcFd0dERudUd60gHCAUFVX3lxTFBBN2FYZU9GMm44dm1FM0dNeTVSWWliSkFMVFZZR1BYZV9DdTdvYkJaNnk0NGhfWXUtWldZR2xnS0VqOGVCMEl6SWpKNTEwOGJYUFFrU3VTUlpKUkluT2xuNWgtWXRfMElvRXZNUE1oLTVrSEJpTVBZSkdPa29xZklBX1o4R2x5U0ZTVHl1YTNXLUJzWFZiLWRoOG1UZkhJNUozWjB6cG0ydGVfUEE1MUJXR1NjcVAtd0lGcWp6MkFnRVJR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 701
    },
    {
      "date": "May 19",
      "text": "The Israel-Hezbollah war persists despite a truce extension, with fighting intensifying and Lebanon's death toll passing 3,000.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMizgFBVV95cUxNcHFmUWF1aGxtQjJHWWlHOHNDM0xSRVE5ZFRRWno5Skt4VUZ5VHBhanNfWklwbl9qdFo4dm9ZclVEa2tGWS1rY2dWNHNIUXNOMVJHX1RNR1ZfWjdELTlkdkRmZXNzSXZoSTFmbmk1WjR6czBmLU04THBiTDNuUlc3WjJyUi1IV29VTHVZWkYzRUdTQkVmVmR0WUJqc1I4UEFSdlh2YnBjeFhLMGNoTWhwc3UxRUpPUXZlUjA0eURxM0JGUGdNd3ZwaGhkejI4dw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 701
    },
    {
      "date": "May 19",
      "text": "Reports question the U.S. military's weapon reserves amidst ongoing global commitments.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 701
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
      "perspective": "US-Iran Tensions",
      "headline": "Trump's Mixed Signals on Iran Strike",
      "summary": "President Trump publicly revealed a planned military strike on Iran but stated he called it off, citing requests from Gulf states and ongoing negotiations. He warns Tehran that 'the clock is ticking' for a deal.",
      "tone": "strained",
      "latestSinceUpdate": 701
    },
    {
      "perspective": "Strait of Hormuz Control",
      "headline": "Iran's Economic Leverage Over Hormuz",
      "summary": "Iran is moving to assert economic control over the Strait of Hormuz, announcing plans for a toll mechanism and launching Bitcoin-backed shipping insurance, potentially disrupting global shipping and internet cables.",
      "tone": "defiant",
      "latestSinceUpdate": 701
    },
    {
      "perspective": "Israel-Hezbollah Conflict",
      "headline": "Intensifying War Despite Truce",
      "summary": "The conflict between Israel and Hezbollah continues to escalate despite a truce extension, with Israel attacking Lebanon and Hezbollah employing evolving drone tactics, resulting in a high death toll in Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 701
    },
    {
      "perspective": "US-European Alliance",
      "headline": "Iran War Strains US-European Alliance",
      "summary": "The ongoing situation with Iran is reportedly causing a significant strain on the strategic alliance between the United States and European nations, indicating diverging interests or approaches.",
      "tone": "skeptical",
      "latestSinceUpdate": 701
    }
  ]
});

export default LATEST_SNAPSHOT;
