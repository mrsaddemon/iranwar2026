export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 459,
  "lastUpdated": "2026-05-01",
  "lastSyncedAt": "2026-05-01T21:31:16.082Z",
  "warDay": 63,
  "summary": "The US-Iran conflict continues with an expiring two-week ceasefire, stalled peace talks, and ongoing military tensions, including Iran's blockade of the Strait of Hormuz and damage to US military sites.",
  "lastNarrativeUpdate": "2026-05-01",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A two-week ceasefire between the U.S. and Iran is set to expire, with talks stalled and Trump expressing dissatisfaction with Iran's latest proposal."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
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
      "text": "US economic growth rebounds 2% as consumer spending slows amid Iran war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxNSTdsRUQ4N1J1UEExZGNoQ1d2WFJscUhneTcxZWlrZ01KTDFTckZfOGE5OVdHWWlyZTZ4TzhSRDFGRHJIUjI3Wk04bTJNb1laOXJBMjdtRnYxWUdkM2ZYZzBlM0pZZEFvZi1tSkpLVjZIdXl6UTVqaEUxUUk0b1RLSUw5Y3FicW02eFdKcTFR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 458
    },
    {
      "date": "May 01",
      "text": "Trump expresses dissatisfaction with Iran’s latest peace proposal, despite a recent two-week ceasefire.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 459
    },
    {
      "date": "May 01",
      "text": "Trump tells Congress the Iran war has 'terminated' as a legal deadline hits, but doesn't rule out resuming attacks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxNN09iLUVlb2dJWi1SR3djX2N6YWM5T2hybmI4UnZkWkVMUVluRDc5Rk9wU1Zvb3lkLUJSR1BpaVNxWnlnMG9vNzBILTJxc0lNbnJxS1N6YnBWeFliRDhhVWg5RWdoSF9GR2RPYzRVZHpDUUtHQ0VzeHd1VmY5MWhyMUVSa1FrZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Politico",
      "latestSinceUpdate": 459
    },
    {
      "date": "May 01",
      "text": "Times Analysis shows Iran’s schools and hospitals are in ruins.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 459
    },
    {
      "date": "May 01",
      "text": "U.S. and Iran reached a 2-week ceasefire, but talks are uncertain as it is set to expire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxNMHg1TVIyZGUxTVJpVkhrYmhrN3d6dlk5M0h4STJMdlRYRGJSbGJnZjVEVndmOHBWMFpEYmJxWUphSWJWc2F6MEJiVTBOazRwR1IycFYwaVhxblFsRGs3OFBrTi15eFp4NVdqcFpaQmFZSE9CX041WTIwRE5oT3VjdE9WeG5zZ1EtN0p6NWs5Y3E0S2gyWG1nMXlkQjZyZG55d0F0ZWZR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 459
    },
    {
      "date": "May 01",
      "text": "Iran delivers a new talks proposal to the USA as the Strait of Hormuz remains shut.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 459
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
