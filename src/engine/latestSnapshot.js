export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1428,
  "lastUpdated": "2026-07-23",
  "lastSyncedAt": "2026-07-23T16:09:47.531Z",
  "warDay": 146,
  "summary": "The US and Iran are engaged in direct military conflict, with both sides trading threats against civilian infrastructure, leading to rising oil prices and shipping disruptions as the conflict expands regionally.",
  "lastNarrativeUpdate": "2026-07-23",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No ceasefire is active; direct conflict and threats between the US and Iran are escalating."
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
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
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
      "date": "Jul 22",
      "text": "Trump attends dignified transfer of US soldiers killed in the Iran war.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTFBRMWdUYldNM3B6UDFrSXpEd21GbzRtVklxWEFtVi1vclBYVHlNN3NmVVVwcnZPUlY5aHVBN19vbTE4b0VJUXJWXzU4TTBJdVc1UGVSR3BBWWRDeVZIdTYydE1JU1dLcHVIYTZSZ0NsQ29Hdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1428
    },
    {
      "date": "Jul 22",
      "text": "Iran attacks Kuwait-Iraq border crossing, Jordan, and Bahrain.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOQVI2TFJjMFduMWRzZ1B6dEYtWWVTcHYyWFJ6NjVaNlpzaWxleklxUmNRMVFfMzlCNjhhU21mMmNoTk9zTjZ2NGZZbGxNR3FXYzQyM29uc3N1bkNXLURCTmwtNHF5RU5xNHVNQWlnR0hYanhOeXV1SzgyN1dVam5vZElpZ2NENktUTUFhX2RLdi15UXBZZTRWUkZNT3Q5bW9melEtN0R1Z0ZPeldvOFl5WS10czRjbVE0TXpWR2RIZ9IBxAFBVV95cUxOYTJ6dmJvYTV3RkFscUNkQVNjMEVLZUN5TGVydTVEd2VHeXp3YkU1blpTX1Vrb2Q1SVBUaTVYSm4wV2VjUWlsMmwzZWRKYkpiaEdSSEpGaUVlSEpuRzMzX09nczZ5RGVqTWgzRGpCQ09rWEpPQjduQnJkdVZOanFldk84aHZyZEc5UE5LU1dkUnpxUDlVUEtBTmtQZUVhaW9hWVp6d2xuYm55a0ZsUnU1ak5RMFFyejU2ZEdRdlVpSDh5dEh1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1428
    },
    {
      "date": "Jul 22",
      "text": "US military carries out strikes on Iran for the 12th straight night.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxQSTE4NEl0QlphNDg2Z3VzWFlvd3cxQjBmVzYtOC1HS18tRTNNUWJodlRhUzI4M05DN1lhLWZJWkJCU2wzaXVfVEdqWTBJSmtjeTI1M1BmRkdOclRtOGtCQ3B4bWpxbFVSeXMxRWtwdUtpdFRCOFNLVGFHaFFYRGUtOHZZbFdpRlNScTI5TVZBbi1uMVRvWDlHSWx2RlYxWkFrVGItb1RsdkRpQThH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1428
    },
    {
      "date": "Jul 22",
      "text": "President Trump threatens 'heavy attacks' on Pickaxe Mountain and warns US will strike Iranian bridges and power plants.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxORlZ5bEhMQlpYV2JLZTRpUkJTblJYa0VGeFhhblVfUkp1TDIzMFl6ZnlIZ2gxbDZJUXBpQmdZXzc0RjQtRmU1cjhXblRCN3lwbG5YNThjR0xLMnRJTklldUNYYzlrLXRjeUJDM0dPTjFBcVZQdUQyU1VZbmtYQ1ZfSld3cUppa1ZaVk4yWVNCYnFpbEJZVkxFaHdjcDVoMWplN2tRV3pTaWJodV9zZGloY0JRYjVTSXpMbUpV0gHAAUFVX3lxTE5Sb3VwbFB3cUlwMkoxU3VEZjBEUjBLZkxyVDFpNUp1WG5PektuUGw4Z1hTWEUzbE14dEd5X3RWMmxiRG4weVJoWHY2emd1N0NFSFY4QzlwZmQ4Q0s3d2NudG9CNTZjRUZxSDMxV0QwaEkxOF9qaTZ2cGJtOFRZVHJSYTR5TTc5b3NWMkJWbThFRnNJdUxJNExpa1M4NlFLN2dWVzJKX25RV2U0a0kwam15Wm8xZU1lTHJpUHVfNkZ1OA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1428
    },
    {
      "date": "Jul 22",
      "text": "Iran responds to Trump's threats regarding strikes on bridges and power plants.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1428
    },
    {
      "date": "Jul 22",
      "text": "Oil prices top $100 for the first time since May amid conflict escalation.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1428
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
      "perspective": "US Stance",
      "headline": "US warns Iran on Hormuz, continues strikes",
      "summary": "US officials warn Iran's demands over the Strait of Hormuz are a dangerous precedent, while the US continues military strikes and threatens further heavy attacks in response to Iranian actions and troop deaths.",
      "tone": "defiant",
      "latestSinceUpdate": 1422
    },
    {
      "perspective": "Iranian Actions",
      "headline": "Iran continues attacks, avoids Israel",
      "summary": "Iran continues its attacks and makes demands regarding the Strait of Hormuz, while reportedly avoiding direct attacks on Israel due to fears of retaliatory strikes on its leadership.",
      "tone": "defiant",
      "latestSinceUpdate": 1422
    },
    {
      "perspective": "Regional Stability",
      "headline": "Lebanese army deploys in pilot zone",
      "summary": "The Lebanese army has deployed in a southern 'pilot zone' following an Israeli withdrawal, indicating a localized de-escalation in that specific area amidst broader regional tensions.",
      "tone": "strained",
      "latestSinceUpdate": 1422
    }
  ]
});

export default LATEST_SNAPSHOT;
