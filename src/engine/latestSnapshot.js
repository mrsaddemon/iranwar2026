export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 461,
  "lastUpdated": "2026-05-01",
  "lastSyncedAt": "2026-05-01T23:30:56.549Z",
  "warDay": 63,
  "summary": "The US-Iran conflict continues with a declared 2-week ceasefire, though President Trump expresses dissatisfaction with peace proposals and does not rule out resuming attacks, while regional tensions persist between Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-05-01",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A 2-week ceasefire between the U.S. and Iran is in effect, but its stability is undermined by President Trump's dissatisfaction with peace proposals and ongoing regional conflicts."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 88
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "text": "US economic growth rebounds 2% as consumer spending slows amid Iran war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxNSTdsRUQ4N1J1UEExZGNoQ1d2WFJscUhneTcxZWlrZ01KTDFTckZfOGE5OVdHWWlyZTZ4TzhSRDFGRHJIUjI3Wk04bTJNb1laOXJBMjdtRnYxWUdkM2ZYZzBlM0pZZEFvZi1tSkpLVjZIdXl6UTVqaEUxUUk0b1RLSUw5Y3FicW02eFdKcTFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 458
    },
    {
      "date": "May 01",
      "text": "President Trump expresses dissatisfaction with Iran’s latest peace proposal.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 461
    },
    {
      "date": "May 01",
      "text": "President Trump tells Congress the Iran war has ‘terminated’ as legal deadline hits, but doesn’t rule out resuming attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxNN09iLUVlb2dJWi1SR3djX2N6YWM5T2hybmI4UnZkWkVMUVluRDc5Rk9wU1Zvb3lkLUJSR1BpaVNxWnlnMG9vNzBILTJxc0lNbnJxS1N6YnBWeFliRDhhVWg5RWdoSF9GR2RPYzRVZHpDUUtHQ0VzeHd1VmY5MWhyMUVSa1FrZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 461
    },
    {
      "date": "May 01",
      "text": "U.S. and Iran reach a 2-week ceasefire ahead of Trump's deadline.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOQWdMR2RQZEpSSnE3R1BPd1dPVVNvX21tYjhCbFZjcVJRMkozZVFxc3NKUFZid19fMTBZR2Zia3lhbmtLbDlXV21fSERfY3JNYkhEMktlNHZKVXdzaEk4UGlkcDBienpZWjl2OHpwQW9pRnBBaUh2aU5sQlBsVlNkM1FLLVowRXB4WFhWc2g3dmQxYjZzelJzNWhXRlROZjFmN2psUkJWbS1NcHF00gGyAUFVX3lxTE9YUXdxUGhSZ2lHV1p6cHJ1WExBTkFKRlgyQmZuaWRqMGFMTjUtamk2TnI3WGc0eWh5MkpNRTV3bEptbUhFMFdhTmlfZ1lMaFVBbEFseUxDLU9HdVNadkdBUHh1YUVuc1JKTzVJRTNLdXNGbGhYdnFMZlJmSlJfbUhoempHaVB2RjA3bVdFV1dvblpvUnVNRzFubFU0TTlNakk1R0xJTnIwNHFlcmc4VXhkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 461
    },
    {
      "date": "May 01",
      "text": "U.S. asks for help with opening Strait of Hormuz while Trump attacks allies.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxQWmhvQXhuQzhSRHlaRmhUSUdrMzc5Z3VSZDZfNWhoU3Y3ODdZbG5nMnp2S3dxSGZaT0hfZmEyWXVLTS13UDF5ZF9YZnB0VVdaOS1tY0hsN0ljWW1NQ3N1Z1BUNzB6eXQ4UXJud19pOGxOSWZPWDF2Nm1WcUNrVkd0VXhTTUZyeWZfeFlHTkFJVGlkYTBBQlJPYzk5UE9LRFVIU3U3a2lEWDAyOXBQMk84X0JCakhmYUxi?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 461
    },
    {
      "date": "May 01",
      "text": "Gas prices are on the rise again, with Florida seeing a 31-cent hike in the last week.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi4wFBVV95cUxOTWRaQ2hXZjhrWjc2dEhjU1djVFp3ejFWOC1uX0dUZmFWNFotLUplenFPMDdaNmluV3FNLWx2TnNRN1NoU0VoTXVQaDQzZGFLQkFiR00zdUd3alNXWHpVdUdNdFVqMzFjclRWNVJ5OVlLa3VUckpUYUxaLVhYSVpVbG1pXzIydDctMUsxel9NOWVLaGVHckVGeHVfelg2MDVlY21rcEw0QV9melpSUDFtVmhEMVBWeXdPeE0tUXh2bDJDbWFXYW5heXRKVU5QQ2xXQWgxZkRyOU93V1VuR2dxU09GMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 461
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
