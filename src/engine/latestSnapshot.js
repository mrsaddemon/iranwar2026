export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 450,
  "lastUpdated": "2026-05-01",
  "lastSyncedAt": "2026-05-01T11:46:09.971Z",
  "warDay": 63,
  "summary": "A monitored ceasefire appears to be holding across the main fronts, though the wider regional picture remains fragile and reversible.",
  "lastNarrativeUpdate": "2026-05-01",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "Ceasefire language is present across the source mix with a reported duration around 60 days, but the model should still treat it as reversible under renewed violations or proxy attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 38,
    "oilDisruption": 62,
    "tradeImpact": 35,
    "sanctionsPressure": 53,
    "globalPressure": 58,
    "allianceInfluence": 73
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "May 01",
      "text": "Iran says US siege of ports ‘intolerable’; more Israeli attacks on Lebanon",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxOM3REbXZpSEtJeXgxbk4tdW1KM25Pc0NhQzR6NEcxSS1LSmE4VlVyM1dCQ1BPNjFtRU5ZcUhZNjZ1WTl1SmQtU0tZV0djNDFiWlRlVldkTVYxb0Y0OW9BMng5R2pXZmNzdUUweTNsdUZtVEtMNXp6eFp6aU9WbVJic0cybDQ3RjNhaS1IWTNYeHphNDFHMHd1YkZOLTlmQV9ROWJzXzNIVVFYckRlVV9uWTJROHJKNHRCRXRsbQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 450
    },
    {
      "date": "May 01",
      "text": "Oil rises as White House says Iran ceasefire halts 60-day war deadline",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiowFBVV95cUxQOGNMSWt5YmhaS2J4cVlvX2VFMDdDQWJxV01SOGZKbFEwOXpyS2E3MHBlYVh4c3FyUWY2V3NhbjhJSlp2Z0RnYkVMOW90Ymo4b3pnTk45SkJmTzJVTmJEMXNGalloOTRkNVNpZkFZMHNieWtpdlVDd1hFLW84Z3d5dHlLN3RaRXRoeGcyNjdjWXBiTjJRYnZIU3pzdEw1VXRRM2V30gGoAUFVX3lxTFA0cWZUdDBSVzBSVFRjck9kb0wtVnlfWHgwQ3F5aFV3SXN4NDFGTE51NUpUSTJXOXZ0VzdWT25LTDZsWnI3cFJOdC04TWU4VzJtaDFsVHFnX1ppTkVGQnRxRWNNRlVETjd6RFctaUlVbnpJdFBqTVNVeld5Q3lrbW5ZQXJrZUtqVVhfbFR3RFV4bVZlc3N3RE5SMEF5cW9idHFSYWxpWFNTRw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 450
    },
    {
      "date": "May 01",
      "text": "Pivotal US-Iran war deadline approaches with no end in sight for conflict",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxNSlVoZFkzV1B1ZjE5RXVLeVlnTm8xNlNvSVVKeFlOX1RxNE5iU3N5WGd5YVRfTzd0ZlQ1VGRiblpnZ2dLa19yZS01SUdVVWhoNmxDa2Vrb2MwR29Xb2FHV3dnOW1zRXdKRnp6QkZKeUxWdzZVcE11cE5Ka0RaQXBCb3N6Z1d2QW1QTUhoZ0JKQnZQcGZwdDVjTHEyVlNHTVhZUzFHTkpua1lIR2xUbzZXZg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 449
    },
    {
      "date": "May 01",
      "text": "U.S. Economy Grew 2 Percent in Early 2026 Even as War in Iran Began to Hit Energy Prices",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMie0FVX3lxTFA4SG1DWU5vWXoxSVl5ck5wOXZTeWpmejBKY1V0QzdueFdrVzBvdmNoT1pJRENVWkNiYW82UVJuXzd1LUJhLVlGcjV4QV9LbndaSlYtS0hTLTR6d3FNYWJaSFl1X0xDVXQzS09jNUl5NHZiYTkwcXVDNFRnZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 449
    },
    {
      "date": "May 01",
      "text": "Iran war updates: Trump doesn’t rule out resuming attacks",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxOZ3VJSDBsM2FwclJ6Q0dRMXNMUE5ZMHhJRXNHREpqaS1XMDBGelJWSGpUcHBPSTBwdDJ6SlpuVXlOOTdqcHdOdWI0RU5ZakwxaEVLVG9CWllqbzVLTmxJQTA4YzVRZi1IUU5MSXlJbjBsUWx3SHZHcU5LM1YySWVtS2xBV29lRHN1ZktzaTZUWFBnbWwwX0RiNXdrSFYySjNTUGtOTV9ESEc5MnMtVUFoRHBpd25CYlAzRkHSAb8BQVVfeXFMUDFyMWl1dXZXdjBWc0JuZ1VUR3pTMVl0WThiY1dUSDNsdGlaTVQ2MWZwNVNKdWNaekI4N0QwZDBqQWFrYk9IeXRMWU1hY0w3WklEeFY5WDFaZXJJdGlXU2RqX0R5V2VKYjFfbGZkYThhZXVGcFF2M29WbTBQVnBub2ljZlVIZnU1dTA5c3JWeWpJbzZpN29kWnZVM3Z6TWRxWkVsNXlPLUs1VzdXMktrem0tNVBMZTRPWEtTRE1YT3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 449
    },
    {
      "date": "May 01",
      "text": "Iran’s economy has been battered. Its leaders still think Trump will blink first",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxQM0ozZGk1UzNFZFlhdktCWnN3MnpWMVk0cC16OTYxR1pCWnA2NmFUb2JNNjVJV2JJazdWY1I1Z3IzX0Z6UHI4VVRpZGNBUE9jZ1d6RHJNbFdha2w4bjQyYklJdTlSOUczLTZDTFpoa3E4QTg0bzI1Vjljc0F1NXk0dkJ0YXhBamRBWDd1em9FMkJwYm9INXNBV3FfSkRkU2hMT1o5YWxOaUJiNzZ5QVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 449
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
