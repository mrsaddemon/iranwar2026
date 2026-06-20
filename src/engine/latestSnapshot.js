export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1019,
  "lastUpdated": "2026-06-20",
  "lastSyncedAt": "2026-06-20T21:25:12.332Z",
  "warDay": 113,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-20",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "A preliminary ceasefire agreement has collapsed due to continued Israeli-Hezbollah strikes in Lebanon, leading Iran to claim closure of the Strait of Hormuz."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
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
        "precision": 0.4,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
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
      "date": "Jun 20",
      "text": "Iran claims closure of Strait of Hormuz over ceasefire violations and continued Israeli strikes in Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimgFBVV95cUxNYWZLRUlHdXhuQXlwNkpEVUlGa2tQSEs5WmJzQUQwRFVzT3lsOG43LWNyOWNlQlFxM2VrQ2VaQVIwR0RGTWljb0JYSkFJeU9FZ3dERzdONnVrdmhXSlZpTjd4WFNnWno0OUdRV2QzbWVMSllVekxQel9PYkZhWlN0VHNkVGJyMGw4RVFkbk1lZ3ZKem14LWU0eWVn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1019
    },
    {
      "date": "Jun 20",
      "text": "US denies Iran's claim to have closed Strait of Hormuz and monitors the strait to ensure it stays open.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxQOEt1ZGR5cFBKRG1mSHlLQTc3TnpyMnVnaWltNHQ1eXpockxLYVhxeVlqdmRMeThjck83dVdad2s0eTJOblROeE1GNkJWeF94RTE3cEwyNEFSWTVIaTZITHAtbTNMeS13dmtXUFZrUzJHZjNMdW9ReHZpOFhELUJaX2hNU1BLblRBYno3UHVBT1djajVIdlVQQ1hGb0RuR19wZHA0dUZXX1VrSlJPQVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1019
    },
    {
      "date": "Jun 20",
      "text": "Vance heads to Switzerland for talks amidst re-emerging tensions over the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1019
    },
    {
      "date": "Jun 20",
      "text": "Israel and Hezbollah continue strikes despite a renewed ceasefire agreement, leading to postponed Iran peace talks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBwNjdCeHBnM3dhMmtPUDV0OEw4UHJ1T3gxV3IySy1mWkdHcl96emxtTExkZjBKTkpzRjBEejdJWnlBRjdRR29DYUxaUlVpenFLYkFhRHkyQnZodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1019
    },
    {
      "date": "Jun 20",
      "text": "Trump threatens to charge U.S. tolls in Strait of Hormuz if a final Iran deal is not reached in 60 days.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiywFBVV95cUxNWFY1NWhTUE02T2RGcjhuRlFOV2NxLUExN3g4MlZWdF9QV3JMQzBaZS1mbnhoWjVzWVlQb0ZNZ2I2ZWNCREMyUFIycXR6NWdTT2FEVXZvbDVYMHVrU2RiMHhIeURYZXF3bHVOWUFCZ1lnUmZvbzlOYm1kRzRFenREMURwUFkxSEs1Y084U3FGSGVBOHRjdzJ1dFc1MGpmUmM0emJTNHI3X2UtTjVjM2VCWjQ5NF9sRWlEdWNMejAtYzFyWXpRdEZVZG1Ld9IB0AFBVV95cUxNdGwyWU1HQVIwTEFaUlJ0TzJ2djBvNVZDME5Pd2NsN3lGRXBDUFFOaDFvMGtadEprRFpnUjlTSGV6c1VlYU5PeWtHQWlPcDV2MFNrbTdXOEpZcUpZaTdMTWh1TTlDLWljMGtVTXNicE1ZTzNCckdrVmFoOF8wMXlkWmhON0JOdm8yRnRIeGUxRW9kNU9wWTFidzZlSmIzT0hVYVV2VGpvVzJ1RS1zT2R5czRVNVBvbkxnWTI5YnhaMm0wbFd4M1o2ZzRDTFhJM0dV?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 1019
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
      "perspective": "US Diplomacy",
      "headline": "US Brokers Iran Deal Amid Regional Tensions",
      "summary": "The US has successfully brokered a 14-point agreement with Iran, aiming to de-escalate regional tensions and set the stage for nuclear negotiations. However, the process faces challenges from ongoing regional conflicts, as evidenced by the postponement of talks due to Israeli strikes.",
      "tone": "strained",
      "latestSinceUpdate": 1010
    },
    {
      "perspective": "Regional Stability",
      "headline": "Ceasefire Holds, But Assertions Remain",
      "summary": "While a ceasefire between Israel and Hezbollah has been agreed upon, the region remains tense with Israel maintaining troops in Lebanon and having conducted recent strikes. Iran, having implemented the deal, is also asserting control over the Strait of Hormuz through new insurance requirements.",
      "tone": "skeptical",
      "latestSinceUpdate": 1010
    },
    {
      "perspective": "Economic Outlook",
      "headline": "Hormuz Traffic Up, New Fees Emerge",
      "summary": "The costs of the recent conflict are significant, impacting lives and finances, while the Strait of Hormuz, a critical oil transit point, sees increased traffic but also new Iranian fees, signaling potential future economic friction.",
      "tone": "anxious",
      "latestSinceUpdate": 1010
    }
  ]
});

export default LATEST_SNAPSHOT;
