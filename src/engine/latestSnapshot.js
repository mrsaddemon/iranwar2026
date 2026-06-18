export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 995,
  "lastUpdated": "2026-06-18",
  "lastSyncedAt": "2026-06-18T09:49:21.220Z",
  "warDay": 111,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-06-18",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 2,
    "summary": "A peace agreement has been signed between the US and Iran, but its stability is undermined by ongoing Israeli military actions and new threats from Iran regarding shipping."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.3
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.4
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "date": "Jun 16",
      "text": "The United States and Iran signed a peace agreement to end their conflict and reopen shipping routes.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 995
    },
    {
      "date": "Jun 18",
      "text": "Israel continues air strikes in Lebanon and conducts strikes in Iran despite the US-Iran peace agreement.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiqAFBVV95cUxNZjV1cGh5RmM4VnBKVU1xMlFjb0VyV2dvNDVfLWRTcm5rcV84eENKREEzVnpCQXF5TmxqR29HVTVER21WVHE0WjZ6czU0ekVTUDhhaXJfUVVjNXk3dzFhc0RrOGhDSnVKeDlGTktvX09rX2Y3ekxBTkJDOWI3dlVjb3BJa1l6YTlVdmxCTjQwdWdPWVItenoyY01aaDZuNlBiZG1tRVN2UXQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 995
    },
    {
      "date": "Jun 18",
      "text": "Iran announced it will begin charging ships in the Strait of Hormuz after 60 days.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 995
    },
    {
      "date": "Jun 18",
      "text": "An average of 12 children are killed or maimed daily in Lebanon, despite an existing Hezbollah-Israel truce.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiV0FVX3lxTE1zVmFSYnIxSjgyN2ZKakVJejg2bnI3enJIQ0c0MDFZdjd0ekJkbDIxMTlrbkhaSi0wRnUxYnZtTnVINWEyMlhrdGMtRFZXZnJVZ0doZnp3MA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "UN News",
      "latestSinceUpdate": 995
    },
    {
      "date": "Jun 18",
      "text": "The Pentagon revealed that Musk's AI, Grok, was utilized in recent strikes in Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi2wFBVV95cUxQOWVsVmZONEYtNXNyajhscnZGTTREY2xnV2I1Q2pOdmNCQ1lWX2gxRThnZjRRYkdFMjBMRHRYcXdFMFl2XzFqSV9yMnUtR29meG8ySEV5MGFJYXhvR2h5UHlYQkhIZkNfYXhsa2pqQXlReTE4RHlJMWQydlJ0WmtKakpkTm9TVHF4OUZOUmhUMWR6NmNiX2RodGFUQ2xzMXI5SnJZOTRjUWFZelZjV3ZuUE11b1ZxVEtnQmlYdVozU21CQUFQWnZYeTJQNXhwZ2gyQUREQVlmNDFaaE0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Le Monde.fr",
      "latestSinceUpdate": 995
    },
    {
      "date": "Recent",
      "text": "Months have passed without answers regarding a previous U.S. strike on an Iranian girls' school.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 995
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
      "summary": "The US, led by Trump, has brokered an initial agreement with Iran to end the conflict and reopen shipping lanes. This effort comes despite immediate challenges regarding the deal's implementation and continued Israeli military actions.",
      "tone": "strained",
      "latestSinceUpdate": 993
    },
    {
      "perspective": "Iranian Assertiveness",
      "headline": "Iran Sets Conditions, Asserts Hormuz Control",
      "summary": "Iran has signed a deal with the US but immediately set conditions for Israeli withdrawal from Lebanon and asserted its right to charge transit fees in the Strait of Hormuz. Iranian tankers have also moved past a US blockade, signaling renewed assertiveness.",
      "tone": "defiant",
      "latestSinceUpdate": 993
    },
    {
      "perspective": "Israeli Autonomy",
      "headline": "Israel Continues Lebanon Strikes Despite US Criticism",
      "summary": "Israel continues its military operations in Lebanon, launching fresh strikes despite US criticism. This indicates a continued focus on its security objectives, seemingly independent of the US-Iran agreement's immediate implications.",
      "tone": "defiant",
      "latestSinceUpdate": 993
    },
    {
      "perspective": "Global Shipping Concerns",
      "headline": "Hormuz Reopening Met with Wary Disbelief",
      "summary": "Shipowners are observing the reopening of the Strait of Hormuz with 'wary disbelief' following the US-Iran agreement. This highlights ongoing uncertainty about maritime security and potential new transit costs imposed by Iran.",
      "tone": "anxious",
      "latestSinceUpdate": 993
    }
  ]
});

export default LATEST_SNAPSHOT;
