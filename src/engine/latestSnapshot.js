export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 311,
  "lastUpdated": "2026-04-22",
  "lastSyncedAt": "2026-04-22T21:39:06.371Z",
  "warDay": 54,
  "summary": "The US has extended a ceasefire with Iran, but Iran has seized ships in the Strait of Hormuz while Israel's conflict with Hezbollah in Lebanon continues to intensify.",
  "lastNarrativeUpdate": "2026-04-22",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 7,
    "summary": "The US has extended a ceasefire with Iran, but Iran has stated no immediate intention to negotiate and has seized ships in the Strait of Hormuz."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
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
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
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
      "text": "US extends ceasefire with Iran while awaiting a proposal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE5taEZWTnFLWmpxaWVQR0dLOHRLT1A3dDFINmREVjFCRV9ucXdEY1dTRk02aVVnODh0bjB2MHZGRnVWdGhNY2hhdExIQXlSNGJXb1pSamFMUGNMY2hwWHFhS2FveVJGUFU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 311
    },
    {
      "date": "Apr 22",
      "text": "Iranian forces claim to seize two ships near the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 311
    },
    {
      "date": "Apr 22",
      "text": "Israel's attacks intensify on Lebanon, and Hezbollah fires at Israel citing truce breaches.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxPOXM2T0JBYzk1V1E0d3VnOEIzYWwxV2hxaURxNVNUVDBIM1Z4OFZDOXlRTDRqdUpNNlloTzFKUkNxd25xR1prblVZTzR0dFAzZzRaakhNRG5laHBBaVg0QjRwUlRkYXJpVEEzUW42cDI0bDl6X2M2aVBoMGlleUo3V29UYmJlNmFtaHZlZ0lpMzA5Ynp2cHh5UUZDYkMwYkNicEc0T0NjemkxaXVOMGlib2NlNUxqS29NRDl4andjU2trdkNx?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 311
    },
    {
      "date": "Apr 22",
      "text": "Pentagon accused of erasing wounded US troops from Iran War casualty list.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 311
    },
    {
      "date": "Apr 22",
      "text": "US military faces risk of running out of missiles after depleting stockpiles in Iran operations.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE9iZFQ5Rmh6S1VUWE5VbTUyXzNLSUgzMmJQT2Q1QmNQMzZrUmRuczBLSS1fUjV4SnZvY3hNT1pvQXJEUzhHT01BRVBBcFA5bC1nNWJtbGlXWlUycnRIakZQX1VzRldSemlkaGJYWWVtTW5HSlV5UklNVg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 311
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
