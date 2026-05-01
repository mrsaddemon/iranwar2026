export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 447,
  "lastUpdated": "2026-05-01",
  "lastSyncedAt": "2026-05-01T07:15:09.266Z",
  "warDay": 63,
  "summary": "A two-week ceasefire between the U.S. and Iran is set to expire amidst ongoing threats, discussions of military options, and significant damage to U.S. military sites, pushing oil prices to a four-year high.",
  "lastNarrativeUpdate": "2026-05-01",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "A two-week ceasefire between the U.S. and Iran is currently active but is set to expire very soon, with talks on its extension uncertain."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "May 01",
      "text": "US military equipment worth billions of dollars reportedly destroyed in the Iran war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPWWhGZ0hVRjM3SU1NeDQxbVJnTndIRVI3NHp4dHV5UjVYS2hOUXRzc3R2a3MwSXIyOFhKUURuRkNSX2NraVN1U2ZJcUp3enJoMzI2WV8zNjZoVmFCQ1hrOUJyVmhCM05KMThiRTdDdm5qUVFtSkhhQ290eGQ2a0pLS3J2alhfNmxMMlN4aFhYdXluYlZCanJkRkRRNW1hSFFzb2xZYTNqMHFPaXlrbnJr0gG0AUFVX3lxTE1DQlBGX00zWTRVTXRjTThoZWViWWxFNE9LSm9IUkV0T1hmUTVIVmVNX1JRb2owYWM0ckM2LUg0aGRtbkZ5cVJRazVQTjZLZ2N0T0FWUFpjRF9XZl85RXJ2TWJoME00MEx4REJOVVBCM3hJUXl1TGJQVnp2ZmF5SDRfWUJrb1NaVFdpZGs3N1FYaWtiS1NTZ05ybG9maEhEZGhLcENuaE1nT3cxYUFOVHByZjZoSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 447
    },
    {
      "date": "May 01",
      "text": "President Trump is scheduled to hear military options as part of efforts to pressure Iran into a deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibEFVX3lxTFAtZm9xZk8wQ0tTZmlGUkViYk5zZkJWbVVrTVRjQlVnb0dwQnhLdDdBdmNVb21YeVgtdHRfRFdBYUpuNGs5RlZLNVp1TDJic0ZESkFNSGhGZ290MS1NYXNNM2RhNVRDMFlsYlJidg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 447
    },
    {
      "date": "May 01",
      "text": "A pivotal US-Iran war deadline approaches with no end in sight for the conflict.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxNSlVoZFkzV1B1ZjE5RXVLeVlnTm8xNlNvSVVKeFlOX1RxNE5iU3N5WGd5YVRfTzd0ZlQ1VGRiblpnZ2dLa19yZS01SUdVVWhoNmxDa2Vrb2MwR29Xb2FHV3dnOW1zRXdKRnp6QkZKeUxWdzZVcE11cE5Ka0RaQXBCb3N6Z1d2QW1QTUhoZ0JKQnZQcGZwdDVjTHEyVlNHTVhZUzFHTkpua1lIR2xUbzZXZg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 447
    },
    {
      "date": "May 01",
      "text": "Tehran states that a US ports siege would be 'intolerable' as Trump mulls action.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOM3REbXZpSEtJeXgxbk4tdW1KM25Pc0NhQzR6NEcxSS1LSmE4VlVyM1dCQ1BPNjFtRU5ZcUhZNjZ1WTl1SmQtU0tZV0djNDFiWlRlVldkTVYxb0Y0OW9BMng5R2pXZmNzdUUweTNsdUZtVEtMNXp6eFp6aU9WbVJic0cybDQ3RjNhaS1IWTNYeHphNDFHMHd1YkZOLTlmQV9ROWJzXzNIVVFYckRlVV9uWTJROHJKNHRCRXRsbdIBwgFBVV95cUxPR0dxVFdTRHJrTjlNMGYzV3J2N2QyYzc5OEo0b203NC1DRUh5VFBsYWgzRDBmYzYtd0p2c282bm1yenRxbllpZlZ5aldTWlRJbjFyWnFMWDVpT0JGclhlTEQtOUNqOWl2S0l2YVJ5UUpUbWxJZkJLcnV1VmZiYXhidk5DdERwTm8xRklFNmZXdDA4OW12TDZIVjliYVI0SzRXZVhZTng3eE9nT3hNakk2TGxRNGo2VDdab09wbzN6ZlYyZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 447
    },
    {
      "date": "May 01",
      "text": "Trump does not rule out resuming attacks against Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxOZ3VJSDBsM2FwclJ6Q0dRMXNMUE5ZMHhJRXNHREpqaS1XMDBGelJWSGpUcHBPSTBwdDJ6SlpuVXlOOTdqcHdOdWI0RU5ZakwxaEVLVG9CWllqbzVLTmxJQTA4YzVRZi1IUU5MSXlJbjBsUWx3SHZHcU5LM1YySWVtS2xBV29lRHN1ZktzaTZUWFBnbWwwX0RiNXdrSFYySjNTUGtOTV9ESEc5MnMtVUFoRHBpd25CYlAzRkHSAb8BQVVfeXFMUDFyMWl1dXZXdjBWc0JuZ1VUR3pTMVl0WThiY1dUSDNsdGlaTVQ2MWZwNVNKdWNaekI4N0QwZDBqQWFrYk9IeXRMWU1hY0w3WklEeFY5WDFaZXJJdGlXU2RqX0R5V2VKYjFfbGZkYThhZXVGcFF2M29WbTBQVnBub2ljZlVIZnU1dTA5c3JWeWpJbzZpN29kWnZVM3Z6TWRxWkVsNXlPLUs1VzdXMktrem0tNVBMZTRPWEtTRE1YT3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 447
    },
    {
      "date": "May 01",
      "text": "Oil prices hit a four-year high amidst the ongoing Iran war.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 447
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
      "headline": "Trump Considers New Military Options to Pressure Iran",
      "summary": "President Trump is being briefed on new military options to pressure Iran into a deal, and has not ruled out resuming attacks. There are debates in the Senate regarding the accuracy of claims about US military triumph.",
      "tone": "strained",
      "latestSinceUpdate": 445
    },
    {
      "perspective": "Iran Leadership",
      "headline": "Iran Defiant Despite Economic Strain, Plans Strait Control",
      "summary": "Despite its economy being battered and infrastructure in ruins, Iran's leaders remain defiant, believing Trump will eventually back down. The Supreme Leader has stated plans for ongoing control of the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 445
    },
    {
      "perspective": "Regional Actors (Hezbollah/Israel)",
      "headline": "Hezbollah Rejects Disarmament, Tests Israeli Defenses",
      "summary": "Hezbollah's leadership has rejected disarmament and called for Israeli withdrawal, while actively testing Israel's radar systems with fibre optic drones. Israel maintains its military is the 'most moral in the world'.",
      "tone": "anxious",
      "latestSinceUpdate": 445
    },
    {
      "perspective": "Global Economy/Energy",
      "headline": "War Pushes Oil Prices to 4-Year High Amid Strait Uncertainty",
      "summary": "The war in Iran has significantly impacted global energy markets, pushing oil prices to a four-year high and causing gas price spikes. Uncertainty surrounding the Strait of Hormuz is a primary driver of these price increases.",
      "tone": "anxious",
      "latestSinceUpdate": 445
    }
  ]
});

export default LATEST_SNAPSHOT;
