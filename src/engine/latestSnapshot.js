export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 220,
  "lastUpdated": "2026-04-18",
  "lastSyncedAt": "2026-04-18T08:32:36.506Z",
  "warDay": 50,
  "summary": "The US maintains a naval blockade on Iranian ports, prompting Iran to threaten closure of the Strait of Hormuz, while a fragile 10-day ceasefire between Israel and Lebanon is in effect.",
  "lastNarrativeUpdate": "2026-04-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A 10-day ceasefire between Israel and Lebanon is active but appears fragile due to recent military actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
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
      "date": "Apr 18",
      "text": "Iran demands an end to the US blockade of its ports, stating the Strait of Hormuz is open.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 220
    },
    {
      "date": "Apr 18",
      "text": "Iran threatens to shut down the Strait of Hormuz if the US blockade of its ports continues.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxNUDBkOHFDLS1BVFR6bDZPbHdsdXFPZlNlM1MzejJObjRJSkRKa2hMdWVyamdpWXFmMUJ4QjN2YU45TVB1ZGs2VDJSTWkybUdrR1NsOVE0elltcHBWOHlRWGxaZnZQUV9TTWhrTDF1N0xwanQxOFo2dW1QNlF2TURULVQ5NXg1Smt0QWE1MTBEZ0xaUEZiTFM3dFRR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The National",
      "latestSinceUpdate": 220
    },
    {
      "date": "Apr 18",
      "text": "The US military confirms it has halted economic trade with Iran by sea and is turning back ships.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 220
    },
    {
      "date": "Apr 18",
      "text": "The US military announces it will target Iran-linked ships worldwide, broadening its scope beyond the current blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxOSGJ6d0VPLVh3QXMyeVVEdDhhT3BSQ1ZGc1l2VFpFN2dtVndYNlJTdDdvTHQ5Nko2aEdYRUtmcUlYXzdVTkNRQmJzZThEWVp2MmRYZm9XUG84QU5IQVZnZGtWbzVzazVCamZJZWxCNzhHRUhva00zckwxWEZuak9zQ0xHWS1mSXNtM29JZnh2WVBzRTZt?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 220
    },
    {
      "date": "Apr 18",
      "text": "US military states it is 'locked and loaded' to strike Iran's power plants and energy industry if ordered.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOaEItbU9FVnJLN1l1RktWRkdtZGZiNGk1US1JTm0zRWN3MTNTNmpPVmJQYmV1bUxkRTV5WXBqVnVJWnhlM2tQbU54cXRMbF9IR0NyLW5STnV5WWl4MnM0bkJTdjhMejJwZHhuWXYwUVJaN0RZektTNHRTemtNbUdfSWpVV3dKZnFPMmdOeVVvR200c2swZFNVeHdEUnhGX0tHUGNtVDRxVHRBYTM2eG43bnJpMGlCQTAzLUVuaWwtbTc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 220
    },
    {
      "date": "Apr 18",
      "text": "Israel strikes kill 4 Lebanese medics, raising concerns about the stability of the ceasefire.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 220
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
