export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 215,
  "lastUpdated": "2026-04-18",
  "lastSyncedAt": "2026-04-18T01:04:44.272Z",
  "warDay": 50,
  "summary": "Peace talks between the US and Iran are scheduled amidst continued US blockade of Iranian shipping and regional hostilities between Israel and Hezbollah, despite a declared ceasefire.",
  "lastNarrativeUpdate": "2026-04-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 5,
    "summary": "A ceasefire between Israel and Lebanon is in effect, but its stability is threatened by recent Israeli strikes and Hezbollah rocket launches."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.5
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
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 65,
    "tradeImpact": 47,
    "sanctionsPressure": 54,
    "globalPressure": 61,
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
      "date": "Apr 18",
      "text": "Trump voices optimism about a deal with Iran, while Tehran remains cautious.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/trump-optimism-iran-deal",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 215
    },
    {
      "date": "Apr 18",
      "text": "The next round of US-Iran talks is scheduled to take place in Pakistan on Monday.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/us-iran-talks-pakistan",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 215
    },
    {
      "date": "Apr 18",
      "text": "Iran declares the Strait of Hormuz open, but the US states its blockade will remain.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/strait-hormuz-open-blockade",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 215
    },
    {
      "date": "Apr 18",
      "text": "Israeli strikes kill 4 Lebanese medics, threatening the existing ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/israel-strikes-lebanese-medics",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 215
    },
    {
      "date": "Apr 18",
      "text": "Hezbollah launches rockets at Israel following Israeli strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/hezbollah-rockets-israel",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 215
    },
    {
      "date": "Apr 18",
      "text": "The U.S. military announces it will target Iran-linked ships worldwide, broadening its scope beyond the blockade.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/us-military-target-iran-ships",
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 215
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
      "perspective": "US Perspective",
      "headline": "Trump's Optimism Amidst Continued Blockade",
      "summary": "Trump expresses optimism about a peace deal and the war's progress, while the US maintains its blockade of Iranian shipping and expands its military targeting of Iran-linked vessels globally.",
      "tone": "strained",
      "latestSinceUpdate": 215
    },
    {
      "perspective": "Iran Perspective",
      "headline": "Iran's Cautious Stance on Talks and Strait Access",
      "summary": "Iran expresses caution regarding peace talks and declares the Strait of Hormuz open, warning of strong responses to Israeli attacks despite facing continued US blockade.",
      "tone": "defiant",
      "latestSinceUpdate": 215
    },
    {
      "perspective": "Regional Conflict",
      "headline": "Fragile Israel-Lebanon Ceasefire Under Strain",
      "summary": "A ceasefire between Israel and Lebanon is in place, facilitating some returns, but has been violated by Israeli strikes and Hezbollah rocket launches, raising concerns about its durability.",
      "tone": "anxious",
      "latestSinceUpdate": 215
    }
  ]
});

export default LATEST_SNAPSHOT;
