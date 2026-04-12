export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 128,
  "lastUpdated": "2026-04-12",
  "lastSyncedAt": "2026-04-12T21:53:49.228Z",
  "warDay": 44,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-12",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 1,
    "summary": "Peace talks between the US and Iran have failed, leading to a direct escalation, and the Israel-Hezbollah conflict continues without a truce."
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
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 50,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "text": "US and Iran fail to agree on a peace deal after 21 hours of talks.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 127
    },
    {
      "date": "Apr 12",
      "text": "Trump announces the US will blockade the Strait of Hormuz following the failure of peace talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxNS2hsNmdISmJxSGk4RjVtb0ZoTE4zT2lrcmh0NEpQbEVOSW1rNGRCMlk3X3hOVko0bHk0d2lIaVduLWNWRWtFZGItZGFaN0YyRE1tVWNuTFFBUTJzQWVMT0tWRTY1aGxnUXJid1lUbTVaTGdjN3NEQ19CbExPMGFfeVlxU243VEFWS0lucm5wX04xUGl4enRaVzBmRXUyLWZQNkNOVERLUEljWWhvTy1GS2pKdGgxd00yWHNldWtn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 128
    },
    {
      "date": "Apr 12",
      "text": "US military states naval blockade around Iran will begin Monday on Trump’s orders.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxOZWEyVHFmdUR6cDAxWjVJMTNlYmVfQ1NIUURtbkpjNGFWZlJCWDh6T1NBZzhiTF9SUzFvT3RmMFNEQWhHRWhrQm9KZlRBVmJ2YUZCOGZ5UFFKVGRNVDgtdlU3dXRhOFRIWFdvM1dqS3Vyc0NhejBnYmw2THY1UUpfTXcyMF94VmxVUlp0SkFaWWRIV3ppVkdSNFJ5ZjhpSFctX19MNTA1QlU0ZHBfWDJQX3FSejhsOExDVWNJY2RhSDN5cVg2?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 128
    },
    {
      "date": "Apr 12",
      "text": "Iran's IRGC insists the Strait of Hormuz will remain open, with negotiators stating they will not bow to threats.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 128
    },
    {
      "date": "Apr 12",
      "text": "Israel's war in Lebanon against Hezbollah has not stopped, with a commander describing ongoing battles.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 128
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
