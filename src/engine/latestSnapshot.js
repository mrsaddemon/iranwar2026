export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 124,
  "lastUpdated": "2026-04-12",
  "lastSyncedAt": "2026-04-12T19:25:05.213Z",
  "warDay": 44,
  "summary": "Peace talks between the U.S. and Iran have failed, leading to a U.S. threat to blockade the Strait of Hormuz and reciprocal threats from Iran, while Israel continues operations against Hezbollah in Lebanon.",
  "lastNarrativeUpdate": "2026-04-12",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No active ceasefire is in effect; peace talks have failed and tensions are escalating."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
    "escalationLevel": 90,
    "oilDisruption": 95,
    "tradeImpact": 85,
    "sanctionsPressure": 64,
    "globalPressure": 87,
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
      "date": "Apr 12",
      "text": "U.S. and Iran fail to agree on a peace deal after 21 hours of talks.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 124
    },
    {
      "date": "Apr 12",
      "text": "Trump announces the U.S. will blockade the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxNS2hsNmdISmJxSGk4RjVtb0ZoTE4zT2lrcmh0NEpQbEVOSW1rNGRCMlk3X3hOVko0bHk0d2lIaVduLWNWRWtFZGItZGFaN0YyRE1tVWNuTFFBUTJzQWVMT0tWRTY1aGxnUXJid1lUbTVaTGdjN3NEQ19CbExPMGFfeVlxU243VEFWS0lucm5wX04xUGl4enRaVzBmRXUyLWZQNkNOVERLUEljWWhvTy1GS2pKdGgxd00yWHNldWtn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 124
    },
    {
      "date": "Apr 12",
      "text": "Iran threatens U.S. warships, insisting the Strait of Hormuz remains open.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxNNkdJVnpXa1phTS1YU25xS3RmVFowU2lCaDVwcmhlTlY0akNRUE1mOG1INU5UbFpPWFB3NXNqdUZUeEw2bGptaGZzcFNOWlZ1UWQyUGRjMzA1Rm9lZjB0LVd6bXQ2dG93YmFtMXU4NXV3OXJxbWh1YnZiMzVwUi03cXlEdUtzMWRQVzdjNjZuczVFaFVYajFacFpaaThNZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fortune",
      "latestSinceUpdate": 124
    },
    {
      "date": "Apr 12",
      "text": "IDF raids a hospital reportedly used by Hezbollah in Bint Jbeil stronghold.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxQWUxnWXBWMG9kdTBGRWpvWWk4Qk5wUXhuR0EtQVhVT0tvMUlWWUJYN3pWTTlmdnhSeG00NGZLd2VnT2UxRXdBb2FQWUhtNVg3VmxaOWI2SmJKUkhiOEZNNmFxTUtRSFBDUXBEUF9oRHE0Tm90QUJKUGpjQ1ZOZFdEZGtjZXlTX1hLMDd1cHBzazVHaDRybTlTWWpWanFOdjRwWFZJXzFBdXRublpI0gGyAUFVX3lxTE9HMTVRWmdsUEdxTndyeU9YY0lMYnZScWdhb0I2R0FaLU9aU0FFVzhRd2RBb0FnRFJIWkhaRXhVbzM5ZDZDRm1ZVm1yRFRXVFZ0MHd1M1pzb2pOVkwtSXY1aXNMWmdUOWdIQ3Fzd2dmelRzTVB1UU1yXzRLRHQ0OUZ6UDhFcGNXU1BsbzA4bjUyWEdXMFNCSU5oSjMtX2pMOHJCb2pKQ1RuV2VzWlU3T1ZHT3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 124
    },
    {
      "date": "Apr 12",
      "text": "UK states it 'won't be involved' in a U.S. blockade of the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxPY3YtWWJnVW54ZDFoaFBUM2hBZXQzT0tsV3d2MnZEbVlSX0Zsck5hWnd5bndqYmVEckwwTW83dGpQSm0zZzZ4X1ljSmI5V1FQc2s3aVcxYW9vQzI1cGVxNFFtY19HNEhZbHo2VEtYRW03YmlDMklSc1drUFJIMTlwYllxcFd5U3VHZGE3Ny11Nk93VmFUZC1PcUVLcUJmNHRtMnBvNTRaWldWOVpCQmJqRHhCaHpHdE8xTzRTb19PUVlHajFRSzJJWThYQ0w?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Sky News",
      "latestSinceUpdate": 124
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
