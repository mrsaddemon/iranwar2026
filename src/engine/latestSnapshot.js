export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 445,
  "lastUpdated": "2026-05-01",
  "lastSyncedAt": "2026-05-01T00:09:37.097Z",
  "warDay": 63,
  "summary": "A two-week ceasefire between the U.S. and Iran is set to expire amid ongoing uncertainty, with both sides considering future actions and the war continuing to impact energy prices and Iranian infrastructure.",
  "lastNarrativeUpdate": "2026-05-01",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A two-week ceasefire is set to expire, with U.S.-Iran talks uncertain and no clear extension in place."
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
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 55
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "May 01",
      "text": "U.S. and Iran reached a 2-week ceasefire, now set to expire, with talks uncertain.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxNMHg1TVIyZGUxTVJpVkhrYmhrN3d6dlk5M0h4STJMdlRYRGJSbGJnZjVEVndmOHBWMFpEYmJxWUphSWJWc2F6MEJiVTBOazRwR1IycFYwaVhxblFsRGs3OFBrTi15eFp4NVdqcFpaQmFZSE9CX041WTIwRE5oT3VjdE9WeG5zZ1EtN0p6NWs5Y3E0S2gyWG1nMXlkQjZyZG55d0F0ZWZR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 445
    },
    {
      "date": "May 01",
      "text": "U.S. economy grew 2 percent in early 2026, but the war in Iran began to affect energy prices.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 445
    },
    {
      "date": "May 01",
      "text": "Reports indicate billions of dollars worth of US military equipment has been destroyed in the Iran war.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPWWhGZ0hVRjM3SU1NeDQxbVJnTndIRVI3NHp4dHV5UjVYS2hOUXRzc3R2a3MwSXIyOFhKUURuRkNSX2NraVN1U2ZJcUp3enJoMzI2WV8zNjZoVmFCQ1hrOUJyVmhCM05KMThiRTdDdm5qUVFtSkhhQ290eGQ2a0pLS3J2alhfNmxMMlN4aFhYdXluYlZCanJkRkRRNW1hSFFzb2xZYTNqMHFPaXlrbnJr0gG0AUFVX3lxTE1DQlBGX00zWTRVTXRjTThoZWViWWxFNE9LSm9IUkV0T1hmUTVIVmVNX1JRb2owYWM0ckM2LUg0aGRtbkZ5cVJRazVQTjZLZ2N0T0FWUFpjRF9XZl85RXJ2TWJoME00MEx4REJOVVBCM3hJUXl1TGJQVnp2ZmF5SDRfWUJrb1NaVFdpZGs3N1FYaWtiS1NTZ05ybG9maEhEZGhLcENuaE1nT3cxYUFOVHByZjZoSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 445
    },
    {
      "date": "May 01",
      "text": "Iran's schools and hospitals are reported to be in ruins due to the conflict.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 445
    },
    {
      "date": "May 01",
      "text": "Oil prices have reached a 4-year high, and gas prices are spiking amid uncertainty regarding the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxPVGNuNm5RQllCNTBzay1JTVNSNlZ1WXpyVF96Zk1ISWhVbW5jcE1fOGt3NWNhUUZITy1zSk5Yc2VJeWxieFZyRlZrZUpoN0JFWGRnWXMyOElSYm9lRHVYZ1BKNVdZZWVXZUNsYnVwcXpxbEo3NXRRZEtveU5hMGhsLXFn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "KOAT",
      "latestSinceUpdate": 445
    },
    {
      "date": "May 01",
      "text": "Iran's Supreme Leader states Iran is planning for ongoing control of the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 445
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
