export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1525,
  "lastUpdated": "2026-07-30",
  "lastSyncedAt": "2026-07-30T15:19:03.717Z",
  "warDay": 153,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-30",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 21,
    "summary": "Peace efforts are under threat and hopes for a quick resolution have dimmed amidst widespread military actions, with a specific Lebanon truce also violated."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "Jul 30",
      "text": "IRGC claims strikes on Kuwait and Jordan following deadly US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQc2hscnktWGwtTC1yNGhEZTBmb1NLNzk0OHFRamdxRUdFdE1TSzNCemRsVHRUVDNGRnROaUlYV0lYZ3Y5ZENna0JWd1g0bkZkeDhNeFppTGQwbWhfNS1iYW84ZmhyS3lfNTFiV1EzUGVuTlFzb0VRWFdxenlPNU03QkwzX2VJSGxzdTZtc0tDcFZYUlN2V056bXdWQXAtSDAxTVdYQ1NLWkhWVl9mX1lPSC1zanQ4SWdlZVJB0gHAAUFVX3lxTE1nczg2YVppb3k2UVRva2lOTEs5aTEtSU1GMm1DbnZNNF9iZGl6TC1CdHo5dTFhUUR3dWZ6RTk2c0hwTTZuOGJ0b2VpbTR6X25jcEIzSmt0NTF5bk1oWFhkTlprQTVpUUxEM0FKQ040djNRZE1MSzBOcTBqdTdUQ1pMLUYzN2JKU29EUXhyQnY1QjlyRnlFN2lPRFRHLXZJVXJrb2pmNGUxMjU1eE9tVDdGZkxDc19fS1FiUkdNZ3Z0Rg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1525
    },
    {
      "date": "Jul 30",
      "text": "US launches heavy strikes on dozens of targets in Iran overnight.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1525
    },
    {
      "date": "Jul 29",
      "text": "US thwarts an Iranian missile attack on American forces and strikes Iranian proxies in Iraq with Saudi forces.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxQTHZOSmtoZTBQNGNtZUlocFVfLTNmdFpvWFdoN2ZwVmpZMDNrcXNSdTVUUjJRVWRSTzJGeFQ2TG52cnVYZFllWFlfTTctTllRSExPRDhGNXhieEV0Z2VqRk5CcWtROVF2ZGR1WDhjd0tGQkVZQTExZEFYVGRTenkxdk9YVGZlYkwxY2Zz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1525
    },
    {
      "date": "Jul 29",
      "text": "Israel carries out air strikes on Lebanon, according to state media.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9WbDM5eldoWW54T1NESmcxenViSnhRMk1VaWh2UjB5eF9Lb194QW1IUmt1QUxLLUc5VF9Vc1RHNS1iTENwcTNMaHVJV2haaGx2UXZhN04wSFNodw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1525
    },
    {
      "date": "Jul 29",
      "text": "Hezbollah drone hits an IDF bulldozer, violating a Lebanon truce.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxNMjEzaXZjNGI4M0xDVmNFdlgyYktyMkFld280MDhWaVhWY0RaaVVDazk5eWQtaEhkT3RselpXQkg4Y2hMdGU4YzJvQm9aUFRsM3doYVAyNG8yWVE0bDh3aFZVcF9UeEtYUmEyOUdzTkJNVU9VQnJLa3JIazZXZUhPNVZvLVMydGdEcnZsZEw0OHBPWDBHWlZBTHl2dWlyWWZVSkVJMk9VV2VuVTN30gGyAUFVX3lxTE9FOGFDVkVmTUllY2dZOXpTSUFyM0lzdGNQRlBidFZmWHdkOWkya0ZrSUp0SUpUYjdSbm5yNldPZWFwbHZRUDc5aUVhVWl3QzZDYmVtSjYtMXZTeGV5WDBSTmNsQ2J1S2oyT2Z2Q3d3WF9kX2stUC03bU85THdPcHFfOWhwM2djSm9kMFVGRTZHNmJtMk1KMndweHI4WHd6ekN6Y0lvVUZua2dWQ1V4QXJlWlE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1525
    },
    {
      "date": "Jul 30",
      "text": "US weapons stockpiles continue to dwindle with no end to the Iran war in sight.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxNUUpwOTVOaVlDYkdfV1I0Mmx2MXJfVHA1ZWJ0MUZOUWROYWgzdzBGYVlzeHJuV043UzhrVk10X3loTlFGY0MwbjNwWnIzRFR0Mms4c29UMUNpMkRibkd5ZzR5SVdXNXpMUFJ3UFNwWDRfMVRiUjlnazRMNThLck9qTGNJSEg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1525
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
      "perspective": "Iranian Defiance",
      "headline": "Iran Vows Hormuz Control, Urges Firmness Against Enemy",
      "summary": "Iranian leadership asserts control over the Strait of Hormuz and calls on its citizens to resist external pressures. This stance comes amidst ongoing conflict and diplomatic discussions involving the US.",
      "tone": "defiant",
      "latestSinceUpdate": 1519
    },
    {
      "perspective": "US Engagement & Force",
      "headline": "US Engages Diplomatically While Employing Military Force",
      "summary": "The US is engaged in both diplomatic talks with Iran, expressing hopes for positive outcomes, while simultaneously conducting strikes against Iranian proxies and threatening strong military action in response to attacks. This dual approach aims to manage escalation while protecting US interests.",
      "tone": "strained",
      "latestSinceUpdate": 1519
    },
    {
      "perspective": "Regional Instability & Economic Strain",
      "headline": "Middle East Conflict Spreads, Impacting Shipping and Economies",
      "summary": "The conflict is expanding geographically, drawing in more countries and causing significant shipping risks in crucial oil routes like the Strait of Hormuz. This instability is leading to economic strain felt by citizens and raising environmental concerns.",
      "tone": "anxious",
      "latestSinceUpdate": 1519
    }
  ]
});

export default LATEST_SNAPSHOT;
