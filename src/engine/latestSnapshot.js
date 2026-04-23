export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 314,
  "lastUpdated": "2026-04-23",
  "lastSyncedAt": "2026-04-23T01:10:23.182Z",
  "warDay": 55,
  "summary": "Amid a fragile ceasefire, Israel has increased attacks in Lebanon, while Iran has seized multiple ships in the Strait of Hormuz, leading to increased US military presence and concerns over missile stockpiles.",
  "lastNarrativeUpdate": "2026-04-23",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 20,
    "summary": "A fragile ceasefire, recently extended, is in effect but faces significant challenges from increased attacks and reported breaches by multiple parties."
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
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.7,
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
      "date": "Apr 23",
      "text": "Israel increases attacks in Lebanon against Iran-backed Hezbollah.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 314
    },
    {
      "date": "Apr 23",
      "text": "Iranian forces claim to seize two ships near the Strait of Hormuz, with reports of three ships attacked.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 314
    },
    {
      "date": "Apr 23",
      "text": "Hezbollah fires at Israel, citing breaches of the existing truce.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxPOXM2T0JBYzk1V1E0d3VnOEIzYWwxV2hxaURxNVNUVDBIM1Z4OFZDOXlRTDRqdUpNNlloTzFKUkNxd25xR1prblVZTzR0dFAzZzRaakhNRG5laHBBaVg0QjRwUlRkYXJpVEEzUW42cDI0bDl6X2M2aVBoMGlleUo3V29UYmJlNmFtaHZlZ0lpMzA5Ynp2cHh5UUZDYkMwYkNicEc0T0NjemkxaXVOMGlib2NlNUxqS29NRDl4andjU2trdkNx?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 314
    },
    {
      "date": "Apr 23",
      "text": "Uncertainty surrounds U.S.-Iran talks as a cease-fire nears its end, despite a recent extension by Trump.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 314
    },
    {
      "date": "Apr 23",
      "text": "Thousands more U.S. forces are heading for the Middle East.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 314
    },
    {
      "date": "Apr 23",
      "text": "Concerns rise that the US military is at risk of running out of missiles after depleting stockpiles in Iran operations.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMieEFVX3lxTE9iZFQ5Rmh6S1VUWE5VbTUyXzNLSUgzMmJQT2Q1QmNQMzZrUmRuczBLSS1fUjV4SnZvY3hNT1pvQXJEUzhHT01BRVBBcFA5bC1nNWJtbGlXWlUycnRIakZQX1VzRldSemlkaGJYWWVtTW5HSlV5UklNVg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 314
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "US/Israel Military",
      "headline": "New Artillery Deployed, Missile Stockpile Concerns Mount",
      "summary": "Israel has unveiled new artillery against Hezbollah amid the fragile ceasefire, while the US military faces scrutiny over its use of expensive missiles against drones and concerns about depleting its stockpiles.",
      "tone": "strained",
      "latestSinceUpdate": 314
    },
    {
      "perspective": "Iran/Hezbollah",
      "headline": "Ships Seized, Disarmament Rejected Amid Truce Breaches",
      "summary": "Iranian forces have seized ships in the Strait of Hormuz, and Hezbollah has rejected disarmament while firing at Israel, citing truce breaches. Iran's president lists obstacles to a deal with the US.",
      "tone": "defiant",
      "latestSinceUpdate": 314
    },
    {
      "perspective": "International Law",
      "headline": "US Strikes on Iran Questioned as Potential War Crimes",
      "summary": "Over 100 international law experts warn that U.S. strikes on Iran may violate the UN Charter and constitute war crimes, raising questions about the legality of ongoing military actions.",
      "tone": "skeptical",
      "latestSinceUpdate": 314
    },
    {
      "perspective": "Geopolitical Impact",
      "headline": "Middle East Crisis Weakening Europe, US Talks Stalled",
      "summary": "Erdogan suggests the ongoing war is starting to weaken Europe, while US and Iran remain in a blockade stalemate, with uncertainty surrounding talks and Trump denying midterms influence decisions.",
      "tone": "anxious",
      "latestSinceUpdate": 314
    }
  ]
});

export default LATEST_SNAPSHOT;
