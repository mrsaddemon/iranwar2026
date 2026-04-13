export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 136,
  "lastUpdated": "2026-04-13",
  "lastSyncedAt": "2026-04-13T11:44:22.755Z",
  "warDay": 45,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-13",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 1,
    "summary": "Despite some claims of a ceasefire holding, the announced US blockade and failed peace talks indicate a collapse of any prior de-escalation efforts."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
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
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 58
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
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
      "date": "Apr 13",
      "text": "US military states it will blockade all Iranian ports and the Strait of Hormuz starting today/Monday morning.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisAFBVV95cUxPQnBIVmsyTlNIa0FSQzlST1hkX0lBVlcwNlVQTU51ejdGX3E2OTdvRmJXT3FhYlQyRDVhaFU5bm9PeVVtV2tsZFBYVVJZN29SVkJabGJvc2lfd3NTeWJGV2xHWnBIcDYxRkdlN2M5aXhwTmV4aUQ1Wm1DTlJiNHc1NUF1Ym9zbFlYcFVDVXVuY0F4RFViVHJHekZHVXFpU2YzUHlmNzhLaWYxRUUwclN6ZtIBtgFBVV95cUxNZjQ3dlBWRlJjVU40WkJrVUl3aDdyeTBkelNOelJDcnB2M1lmYWNHWEYtTDByam5yaHFhWTJYS1ZYNzRsX0tKa3ZtNHJmdmhhQm5QTWFEWndLTDRtV3FzT2s5aXptWmF1VWlaVnlVazBNQlVMTjdramhhUHFSZkxycWhlS0l3bEFhT1gwM1E3cHBhaWwtN3JvN25hYUswMEl3UkZCcHBydWRJTk85Q1l0X1MybTFtZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 136
    },
    {
      "date": "Apr 13",
      "text": "Peace talks between Iranian delegation and US envoy Vance reportedly failed, with an Iranian minister stating no intention of negotiating.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 136
    },
    {
      "date": "Apr 13",
      "text": "IDF is reportedly planning for a return to war following the failure of peace talks.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 136
    },
    {
      "date": "Apr 13",
      "text": "Conflict between Israel and Hezbollah in Lebanon is described as ongoing and not stopped.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 136
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
