export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 141,
  "lastUpdated": "2026-04-13",
  "lastSyncedAt": "2026-04-13T18:18:51.626Z",
  "warDay": 45,
  "summary": "The United States has initiated a naval blockade of the Strait of Hormuz, leading to heightened tensions and threats against Iranian vessels, while regional conflicts persist.",
  "lastNarrativeUpdate": "2026-04-13",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No active ceasefire or de-escalation efforts are currently in effect amidst escalating regional tensions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
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
    "nuclearIndex": 45,
    "escalationLevel": 90,
    "oilDisruption": 95,
    "tradeImpact": 85,
    "sanctionsPressure": 64,
    "globalPressure": 87,
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
      "date": "Apr 12",
      "text": "US President Trump announces intention to blockade the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 141
    },
    {
      "date": "Apr 13",
      "text": "US naval blockade of Iranian ports in the Strait of Hormuz officially takes effect.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 141
    },
    {
      "date": "Apr 13",
      "text": "Trump warns Iranian ships challenging the Hormuz blockade will be 'eliminated'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQYUd5aGlUTV8yNEw1cVJkV0pFTGN3bXhOcW5lVDJ3cHBLcExFOXVzcU5adVpLMEZpTzRnT2k2bGV0X0syOU0zQWRnOVRSeUl2UndocDh0YmNYTVRnTGR1QUZXMjV0S1NwSl9PcG5qd1Q1bUxFQTJhNlk1ZjNSNmJaSmk5Z2swTFVxeEFwZWJVeU1zWjd4V0s3VjNGZ3p1cFB2aTd2XzNxQzA0VklyaVN1eFVqZmEtd3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 141
    },
    {
      "date": "Apr 13",
      "text": "Iran's IRGC insists the Strait of Hormuz remains open despite US blockade.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 141
    },
    {
      "date": "Apr 13",
      "text": "Reports indicate Israel's war in Lebanon against Hezbollah has not stopped.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxOSmFSSXN4Zk1HYWtoTEVIX3o4YjB5dkhvVFd6R1hsVEdobXN4RVdOenlEcnJwQTBJX0lBYm83eXh5S3RZNFd4WXB2MUhWMFUySTRWRHFQTlRrbl9TZEVfV0p3SGZycTRaNXAtS0JSZGZmc0RxU25Ib2tCaVJ0TnU4dmh5Yw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 141
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
      "perspective": "United States",
      "headline": "Trump's Firm Stance on Iran Negotiations",
      "summary": "President Trump maintains a strong military presence near Iran, warning of further strikes if negotiations fail and asserting readiness for future conquests. He emphasizes that the military will remain until a 'real agreement' is honored.",
      "tone": "defiant",
      "latestSinceUpdate": 103
    },
    {
      "perspective": "Iran",
      "headline": "Diplomacy Amidst Strait of Hormuz Threats",
      "summary": "Iran engaged in direct talks with the U.S. in Pakistan but also issued stern warnings to American warships in the Strait of Hormuz, signaling a dual approach of negotiation and deterrence. The delegation arrived for talks, but no agreement was reached.",
      "tone": "strained",
      "latestSinceUpdate": 103
    },
    {
      "perspective": "Israel",
      "headline": "Continued Offensive Against Hezbollah",
      "summary": "Israel continues its military operations against Hezbollah, rejecting ceasefire calls and asserting its intent to counter perceived threats from the group and Hamas. Netanyahu insists Israel 'will deal with' Hamas and Hezbollah's plans to invade Galilee.",
      "tone": "defiant",
      "latestSinceUpdate": 103
    }
  ]
});

export default LATEST_SNAPSHOT;
