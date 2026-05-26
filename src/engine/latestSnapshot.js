export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 784,
  "lastUpdated": "2026-05-26",
  "lastSyncedAt": "2026-05-26T14:21:00.403Z",
  "warDay": 88,
  "summary": "US forces conducted strikes in Iran amidst ongoing peace talks in Qatar, which Iran condemned as a ceasefire violation, while Israel also launched strikes against Hezbollah in Beirut.",
  "lastNarrativeUpdate": "2026-05-26",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A proposed ceasefire is under severe strain and has been violated by recent US strikes, despite ongoing peace talks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 70,
    "tradeImpact": 51,
    "sanctionsPressure": 54,
    "globalPressure": 62,
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
      "date": "May 25",
      "text": "US conducts strikes on Iran's Gulf Coast, targeting boats and missile launchers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqgFBVV95cUxQb0wyQVNKWGxqWW8zczA0ZllhNmh4YWFxWFF5Q0oyWW0tMkpSTjQwZnJOSUllek80eHFxS3liTWotMjUzZVpWV2IzQUozcGhhTFM0ZmxzVkh2UU15WEhDdy1aelFZQk0zN2poakQ1Q1ZxYkhfUVZ5MVpEYlB3NzUzUDA5X2pFcHJoUC03Z256Mkx2NWpBVHYzU3NSOFJ1dlZZWVhuNUhpb3pIdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 784
    },
    {
      "date": "May 25",
      "text": "Delegations gather in Qatar for peace talks between US and Iran.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 784
    },
    {
      "date": "May 25",
      "text": "Israel launches air strike on Beirut, targeting Hezbollah.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 784
    },
    {
      "date": "May 26",
      "text": "Iran condemns US strikes as a 'gross violation' of ceasefire.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1DZTlZeWJUYWJ3bU85Y3dNQ2dxdmFIUDB0YjI5enBoZFNEeVNwWXRkLV84VU1uU2RDd0kzNFZSQlFHakFmYmZURjNjMFpLem5yN01Qa21DVVRXZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 784
    },
    {
      "date": "May 26",
      "text": "Prospects for an imminent end to the Iran war fade as attacks restart.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMic0FVX3lxTE1oNVZ3cG9SZTZkdWRhX0liS3BTYU41VFJuRTQyOUNxV3laM1o5LVhxWDRIWWd2RGo3M0d0Vlk0cGhTV1VlWWhBNmloTXBJWUNYTmxTN3ZISUVqRnZZeWxNYTdRVWpGVFB2eXV1czEwenVZbjg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 784
    },
    {
      "date": "May 26",
      "text": "Stocks gain on optimism over a potential US-Iran deal to open the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 784
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
      "perspective": "US/Trump Administration",
      "headline": "Progress on Iran Deal Amidst Strikes",
      "summary": "The US administration indicates progress on a potential peace agreement with Iran, with former President Trump suggesting a deal is largely negotiated, even as US forces conduct 'self-defense strikes' in Iran.",
      "tone": "strained",
      "latestSinceUpdate": 781
    },
    {
      "perspective": "Iran",
      "headline": "US Aggression and Regional Support",
      "summary": "Iran accuses the US of 'overt and covert' moves for attack and reaffirms its commitment to not abandon Hezbollah, despite US strikes within its territory.",
      "tone": "defiant",
      "latestSinceUpdate": 781
    },
    {
      "perspective": "Israel",
      "headline": "Intensifying Action Against Hezbollah",
      "summary": "Israel's leadership, including Prime Minister Netanyahu, has vowed to escalate and intensify strikes against Hezbollah in Lebanon following recent attacks.",
      "tone": "defiant",
      "latestSinceUpdate": 781
    },
    {
      "perspective": "International Observers",
      "headline": "Fragile Peace Prospects Amidst Escalation",
      "summary": "Hopes for an imminent breakthrough in a US-Iran peace deal are being played down, with ongoing military actions by both the US and Israel indicating a volatile and escalating regional conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 781
    }
  ]
});

export default LATEST_SNAPSHOT;
