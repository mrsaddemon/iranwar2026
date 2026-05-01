export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 446,
  "lastUpdated": "2026-05-01",
  "lastSyncedAt": "2026-05-01T04:32:11.475Z",
  "warDay": 63,
  "summary": "The war in Iran continues on Day 63 with a fragile 2-week ceasefire nearing expiration, while oil prices have reached a 4-year high amid economic strain and geopolitical tensions over the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-05-01",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A 2-week ceasefire between the U.S. and Iran was reached but is now uncertain as it approaches expiration."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
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
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "text": "U.S. and Iran reached a 2-week ceasefire, but talks are uncertain as it is set to expire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxNMHg1TVIyZGUxTVJpVkhrYmhrN3d6dlk5M0h4STJMdlRYRGJSbGJnZjVEVndmOHBWMFpEYmJxWUphSWJWc2F6MEJiVTBOazRwR1IycFYwaVhxblFsRGs3OFBrTi15eFp4NVdqcFpaQmFZSE9CX041WTIwRE5oT3VjdE9WeG5zZ1EtN0p6NWs5Y3E0S2gyWG1nMXlkQjZyZG55d0F0ZWZR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 446
    },
    {
      "date": "May 01",
      "text": "Iran's Supreme Leader signals plans to maintain control over the Strait of Hormuz, while a blockade rattles oil markets.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 446
    },
    {
      "date": "May 01",
      "text": "Iran war pushes oil prices to a 4-year high, impacting the U.S. economy which grew 2 percent in early 2026.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 446
    },
    {
      "date": "May 01",
      "text": "US military equipment worth billions of dollars has been destroyed in the Iran war.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPWWhGZ0hVRjM3SU1NeDQxbVJnTndIRVI3NHp4dHV5UjVYS2hOUXRzc3R2a3MwSXIyOFhKUURuRkNSX2NraVN1U2ZJcUp3enJoMzI2WV8zNjZoVmFCQ1hrOUJyVmhCM05KMThiRTdDdm5qUVFtSkhhQ290eGQ2a0pLS3J2alhfNmxMMlN4aFhYdXluYlZCanJkRkRRNW1hSFFzb2xZYTNqMHFPaXlrbnJr0gG0AUFVX3lxTE1DQlBGX00zWTRVTXRjTThoZWViWWxFNE9LSm9IUkV0T1hmUTVIVmVNX1JRb2owYWM0ckM2LUg0aGRtbkZ5cVJRazVQTjZLZ2N0T0FWUFpjRF9XZl85RXJ2TWJoME00MEx4REJOVVBCM3hJUXl1TGJQVnp2ZmF5SDRfWUJrb1NaVFdpZGs3N1FYaWtiS1NTZ05ybG9maEhEZGhLcENuaE1nT3cxYUFOVHByZjZoSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 446
    },
    {
      "date": "May 01",
      "text": "Iran's economy is battered and its schools and hospitals are in ruins, according to analysis.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 446
    },
    {
      "date": "May 01",
      "text": "Trump mulls action and doesn't rule out resuming attacks, with commanders set to brief him on new military options.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxOZ3VJSDBsM2FwclJ6Q0dRMXNMUE5ZMHhJRXNHREpqaS1XMDBGelJWSGpUcHBPSTBwdDJ6SlpuVXlOOTdqcHdOdWI0RU5ZakwxaEVLVG9CWllqbzVLTmxJQTA4YzVRZi1IUU5MSXlJbjBsUWx3SHZHcU5LM1YySWVtS2xBV29lRHN1ZktzaTZUWFBnbWwwX0RiNXdrSFYySjNTUGtOTV9ESEc5MnMtVUFoRHBpd25CYlAzRkHSAb8BQVVfeXFMUDFyMWl1dXZXdjBWc0JuZ1VUR3pTMVl0WThiY1dUSDNsdGlaTVQ2MWZwNVNKdWNaekI4N0QwZDBqQWFrYk9IeXRMWU1hY0w3WklEeFY5WDFaZXJJdGlXU2RqX0R5V2VKYjFfbGZkYThhZXVGcFF2M29WbTBQVnBub2ljZlVIZnU1dTA5c3JWeWpJbzZpN29kWnZVM3Z6TWRxWkVsNXlPLUs1VzdXMktrem0tNVBMZTRPWEtTRE1YT3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 446
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
