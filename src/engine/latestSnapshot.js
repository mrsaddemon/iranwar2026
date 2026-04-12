export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 129,
  "lastUpdated": "2026-04-12",
  "lastSyncedAt": "2026-04-12T22:47:54.126Z",
  "warDay": 44,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-12",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 1,
    "summary": "Peace talks between the US and Iran have failed to reach an agreement, indicating no active ceasefire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 55,
    "escalationLevel": 38,
    "oilDisruption": 90,
    "tradeImpact": 56,
    "sanctionsPressure": 49,
    "globalPressure": 57,
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
      "text": "US President Trump announces a naval blockade of the Strait of Hormuz after peace talks with Iran fail.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivgFBVV95cUxNS2hsNmdISmJxSGk4RjVtb0ZoTE4zT2lrcmh0NEpQbEVOSW1rNGRCMlk3X3hOVko0bHk0d2lIaVduLWNWRWtFZGItZGFaN0YyRE1tVWNuTFFBUTJzQWVMT0tWRTY1aGxnUXJid1lUbTVaTGdjN3NEQ19CbExPMGFfeVlxU243VEFWS0lucm5wX04xUGl4enRaVzBmRXUyLWZQNkNOVERLUEljWWhvTy1GS2pKdGgxd00yWHNldWtn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 129
    },
    {
      "date": "Apr 12",
      "text": "US military confirms the naval blockade around Iran will begin Monday morning.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxOZWEyVHFmdUR6cDAxWjVJMTNlYmVfQ1NIUURtbkpjNGFWZlJCWDh6T1NBZzhiTF9SUzFvT3RmMFNEQWhHRWhrQm9KZlRBVmJ2YUZCOGZ5UFFKVGRNVDgtdlU3dXRhOFRIWFdvM1dqS3Vyc0NhejBnYmw2THY1UUpfTXcyMF94VmxVUlp0SkFaWWRIV3ppVkdSNFJ5ZjhpSFctX19MNTA1QlU0ZHBfWDJQX3FSejhsOExDVWNJY2RhSDN5cVg2?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 129
    },
    {
      "date": "Apr 12",
      "text": "Iran's IRGC insists the Strait of Hormuz remains open and states Iran will not 'surrender'.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 129
    },
    {
      "date": "Apr 12",
      "text": "Israel's conflict with Hezbollah in Lebanon continues, with a Hezbollah commander describing ongoing battles.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMingFBVV95cUxNa1FheGp5UzlVUy00eWMwUk5yaEZzXy1LSWhkUWtGLTV1UEdCanhUT0xQNGpHbDlaalJ2OHJLRGZ5dnFjVkQwWWRQMndzeG1FNmNFVDFQNlN0QXE4NTRkaFF3b0tVblZ4NV9qVnJ2NnA3UnFTZExTbUNSNXhOUTh0QlUwUHVHNXQySUltSHZzQnlaV0ZKZWlkTktZNHlLUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "DW.com",
      "latestSinceUpdate": 129
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
