export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 412,
  "lastUpdated": "2026-04-28",
  "lastSyncedAt": "2026-04-28T17:25:12.731Z",
  "warDay": 60,
  "summary": "The U.S. and Iran are in an awkward 'no war, no peace' limbo as a two-week ceasefire is set to expire, with ongoing tensions in the Strait of Hormuz and regional clashes involving Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-04-28",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A two-week ceasefire between the U.S. and Iran is active but highly fragile, with talks uncertain as its expiration approaches."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Apr 28",
      "text": "US-Iran ceasefire talks are uncertain as the two-week agreement is set to expire ahead of Trump's deadline.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/iran-us-ceasefire-uncertain",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 412
    },
    {
      "date": "Apr 28",
      "text": "Standoff continues in the Strait of Hormuz amid high tensions, with oil prices nearing $100 as tankers brave the route.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/hormuz-standoff-oil-prices",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 412
    },
    {
      "date": "Apr 28",
      "text": "Israel and Hezbollah continue to trade strikes in Lebanon, while Iran talks remain on hold.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/israel-hezbollah-strikes",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 412
    },
    {
      "date": "Apr 28",
      "text": "Iran's May 1 deadline for a legal showdown heats up a confrontation between Trump and Congress.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/iran-may1-deadline",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 412
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
      "perspective": "Iran's Diplomatic Stance",
      "headline": "Iran Links Hormuz Reopening to War End and Sanction Lift",
      "summary": "Iran is actively pursuing a diplomatic resolution, offering to reopen the Strait of Hormuz in exchange for the US lifting its blockade and ending the conflict. This strategy aims to leverage a critical global chokepoint for broader concessions.",
      "tone": "strained",
      "latestSinceUpdate": 405
    },
    {
      "perspective": "US/Israel Regional Security",
      "headline": "US Considers Iran Deal Amidst Israel-Hezbollah Escalation",
      "summary": "The U.S. is evaluating Iran's proposals while maintaining a firm stance against normalizing tolls on Hormuz passage. Concurrently, Israel is intensifying its military actions against Hezbollah in Lebanon, indicating continued regional conflict despite US-Iran ceasefire talks.",
      "tone": "anxious",
      "latestSinceUpdate": 405
    },
    {
      "perspective": "US Military Readiness Concerns",
      "headline": "Pentagon Underreporting War Damage, Munitions Depleted",
      "summary": "Concerns are emerging regarding the transparency of war reporting from the Pentagon, with suggestions that the full extent of damage to US bases by Iran is not publicly known. This comes as reports indicate significant depletion of expensive US military munitions.",
      "tone": "skeptical",
      "latestSinceUpdate": 405
    }
  ]
});

export default LATEST_SNAPSHOT;
