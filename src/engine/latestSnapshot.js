export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1252,
  "lastUpdated": "2026-07-11",
  "lastSyncedAt": "2026-07-11T18:10:16.184Z",
  "warDay": 134,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-11",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 2,
    "summary": "The ceasefire between the US and Iran is reported as 'over', with both sides engaged in tit-for-tat strikes, despite ongoing mediation efforts."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.4,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
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
      "date": "Jul 10",
      "text": "U.S. and Iran sink into a violent cycle after latest strikes, with Tehran launching more strikes and Iran claiming hits on U.S. military targets in the Gulf.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxOU0l1cEJNcjlUQjVYcXFjUVViTThKdnVqSGJMTUpEM2Jqem5HUGJyN1VvcEtyQUdrUnFBYWFhNXB3aEFUX2RmRHhCbXJxQ1JhX1Y1RXVyZUp3TXFlY1RFRXpLMWxHQnlQa3Q2OU1wekRWOEY4dGVzNVhQMnhYd1gyVEM0c080bUdGY01KNGJ2RW05MnlQMER1Q21EeUNfME1TVTh2aFk3TFZqMnpnOFowUzhmMWpXdUVHTmJtaXE1VkU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 1252
    },
    {
      "date": "Jul 10",
      "text": "Hormuz shipping halts amidst escalating tensions, while Israel reveals a plot by Tehran to kill Trump.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQY21BS0FGWk0zdG5EM200bGU5RW01Skh4cC1tZHM0SzBZWVliUWMyZ2dHNlhWUEdEaEtPcVBCX1R4UlFuZXNPR29qLVNkYzJvOUVxZUdKaV9MeXlKMjZYMEhxMGo1NHpRTEQ0Zi1tOTNqakVWcGxmRzJQMURhUUV6TmgzcHpWWm9vcGVhQTZCTURuY0VVTHlkbHAtWGZ6QkE1bmZnREJhcmZtQlRvQlFYelo4alJTZ1JFbklF?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 1252
    },
    {
      "date": "Jul 10",
      "text": "Israeli leadership signals readiness to strike Iran again 'with even greater force' as US negotiators head to Oman for talks.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxPX2lSb1hPcXFEVm1UUnhEZk1YTlFJZ0gwVmdPVWNwcXpEcVFwc0hUME9JOExHcGdMLXloYm1ISUFpRUk4N19vWWhmbUROZDgzdThuZEhvMkRMNmlVbHY4MWlVU2J4eVp5WjZzZ01KVFF0MFpWM3duT2JIaExRRm5kSl9IQUxpVkNGcEZVM0NZcXN6Z3JjUHBEVnQ0cw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1252
    },
    {
      "date": "Jul 10",
      "text": "Mediators work to de-escalate US-Iran tensions and revive talks, with Trump stating negotiations will continue despite the ceasefire being 'over'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBpaGF3XzYyR2V1VW9XRTB1NEtRRzZweFd3Snd3R3dJeEo3Ti03UHBqanAwXzN3ODBYRWhycGV6eTY2c2hHcnlwRHNxcVNfSUZuMm41a1p6NUFXbldMTG1MS2lJV0FPM0xUb2NaZW9n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1252
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
      "headline": "US Demands Open Strait, Continues Negotiations Amid Strikes",
      "summary": "The US maintains its right to respond to Iranian aggression while seeking to continue negotiations and ensure freedom of navigation in the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 1241
    },
    {
      "perspective": "Iran",
      "headline": "Iran Retaliates, Mourns Leader, Defies US Demands",
      "summary": "Iran asserts its right to retaliate against US strikes, mourns its leader, and views US demands as provocative amidst ongoing conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 1241
    },
    {
      "perspective": "Israel",
      "headline": "Israel Targets Hezbollah, Signals Readiness for Iran Action",
      "summary": "Israel continues its operations against Hezbollah in Lebanon and signals readiness to act against Iran, viewing the ceasefire's collapse as a critical development.",
      "tone": "anxious",
      "latestSinceUpdate": 1241
    }
  ]
});

export default LATEST_SNAPSHOT;
