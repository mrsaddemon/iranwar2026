export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 310,
  "lastUpdated": "2026-04-22",
  "lastSyncedAt": "2026-04-22T20:38:04.341Z",
  "warDay": 54,
  "summary": "A fragile ceasefire between the US and Iran is in effect amid ongoing Strait of Hormuz incidents and intensified Israeli attacks on Lebanon, while Iran expresses reluctance to negotiate.",
  "lastNarrativeUpdate": "2026-04-22",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 7,
    "summary": "The US has extended a ceasefire with Iran, but Iran expresses reluctance to negotiate, and Hezbollah has violated truce terms with Israel."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
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
      "date": "Apr 22",
      "text": "Trump announces extension of ceasefire with Iran, awaiting a proposal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE5taEZWTnFLWmpxaWVQR0dLOHRLT1A3dDFINmREVjFCRV9ucXdEY1dTRk02aVVnODh0bjB2MHZGRnVWdGhNY2hhdExIQXlSNGJXb1pSamFMUGNMY2hwWHFhS2FveVJGUFU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 310
    },
    {
      "date": "Apr 22",
      "text": "Iranian minister states no intention of negotiating with the US for now, citing obstacles.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE56dkx0c0Z3Umx4dlBzYzdrdGV6SHM3U3hLRnpDX0tFOC1UeHBiUEJLamlEalBVZUV6d0RsVS13UU5wUldEVm9hNVZ6ekRMOWtyamJMbQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 310
    },
    {
      "date": "Apr 22",
      "text": "Iran claims seizure of two ships in the Strait of Hormuz after attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPUTdJWGw0MnB0amZkdDE2aXVJckZnRlFYd0xfa3RYc2dmTHNFWXVLLWdRb0Nld2otX2tFc0dTclBJdFpYMEtPbnltRXREUV9jdVhTa01lMXl3Rzl2MFV5T29xOWR4b0l0SGpvTzROcWRzZFhpdjNVS0xNMDZjbGI4WXpGZW1USEdKQU9rSG80OWo1bjV0UnJLckh0ZlZPVTVLa2FNcjZmNmtzUEpydmFN0gG0AUFVX3lxTE1tc3Qxd1ZDQnhhcXU0TEs3aFB2aGZMVmhZRzQ2aGU4MkpTTG04YnU5QUpEbG9rTjhFOVBOTm5IMDFWaURnMHhWVXR1R1NSc2xEbktZRXpycUlOcVV1eEVkVEZSdVhneFNSdWF1dWZzWV9mTzlZQnEwa0tmX3hBUFZCWm5zb0dzMTZVbHkzQ09rVGM5dm5ocWc3ZEhtMFlHMTY2RXBuMVJNOXBmbWI1OXk5bFNnSw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 310
    },
    {
      "date": "Apr 22",
      "text": "Hezbollah fires at Israel, citing breaches of the truce.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxPOXM2T0JBYzk1V1E0d3VnOEIzYWwxV2hxaURxNVNUVDBIM1Z4OFZDOXlRTDRqdUpNNlloTzFKUkNxd25xR1prblVZTzR0dFAzZzRaakhNRG5laHBBaVg0QjRwUlRkYXJpVEEzUW42cDI0bDl6X2M2aVBoMGlleUo3V29UYmJlNmFtaHZlZ0lpMzA5Ynp2cHh5UUZDYkMwYkNicEc0T0NjemkxaXVOMGlib2NlNUxqS29NRDl4andjU2trdkNx?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 310
    },
    {
      "date": "Apr 22",
      "text": "Israel's attacks intensify on Lebanon, with the war reportedly not stopped.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxOSmFSSXN4Zk1HYWtoTEVIX3o4YjB5dkhvVFd6R1hsVEdobXN4RVdOenlEcnJwQTBJX0lBYm83eXh5S3RZNFd4WXB2MUhWMFUySTRWRHFQTlRrbl9TZEVfV0p3SGZycTRaNXAtS0JSZGZmc0RxU25Ib2tCaVJ0TnU4dmh5Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New Yorker",
      "latestSinceUpdate": 310
    },
    {
      "date": "Apr 22",
      "text": "U.S. Military stops and boards M/T Tifani, a tanker carrying Iranian oil.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 310
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
      "perspective": "US Policy",
      "headline": "Trump extends ceasefire, seeks talks, but maintains pressure.",
      "summary": "The US, under President Trump, has unilaterally extended the ceasefire to allow for continued peace discussions, yet maintains a naval blockade on Iranian ports, signaling sustained pressure.",
      "tone": "strained",
      "latestSinceUpdate": 297
    },
    {
      "perspective": "Iranian Resilience",
      "headline": "Iran faces sanctions and attacks, but demonstrates strategic resilience.",
      "summary": "Iran continues to face US-Israel strikes and sanctions, including the seizure of a sanctioned ship, but demonstrates strategic maneuvers like the Strait of Hormuz gambit and effective drone technology.",
      "tone": "defiant",
      "latestSinceUpdate": 297
    },
    {
      "perspective": "Regional Instability",
      "headline": "Lebanon-Israel conflict persists despite ceasefire efforts.",
      "summary": "Despite broader ceasefire efforts, conflict between Israel and Hezbollah in Lebanon continues, with reported truce breaches and questions surrounding Israel's long-term objectives in the region.",
      "tone": "anxious",
      "latestSinceUpdate": 297
    },
    {
      "perspective": "Global Energy Impact",
      "headline": "Hormuz disruption prompts search for alternative oil routes.",
      "summary": "Disruptions in the Strait of Hormuz have led to cruise ships being stranded and a push for alternative Middle East oil and gas routes, reflecting the conflict's impact on global energy security.",
      "tone": "neutral",
      "latestSinceUpdate": 297
    }
  ]
});

export default LATEST_SNAPSHOT;
