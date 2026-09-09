export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2380,
  "lastUpdated": "2026-09-09",
  "lastSyncedAt": "2026-09-09T11:48:07.692Z",
  "warDay": 194,
  "summary": "Direct conflict between the US and Iran has intensified with attacks on oil tankers in the Strait of Hormuz, driving oil prices above $100, while Israel continues its military campaign in Lebanon.",
  "lastNarrativeUpdate": "2026-09-09",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 2,
    "summary": "No ceasefire is active; conflict is intensifying across multiple fronts."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
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
      "date": "Sep 07",
      "text": "US and Iran attack oil tankers; crude futures hit $100 a barrel.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxQVGRvY3RUVHlVT1NoWDA0d2pZLTV5TjF4TG5UOVRtZGhlcHAtVFVhY2pPVFk2MUJSdEl6U2ZZSjNTQjlJd1otUGNQMjNRT1BMa2NvNDlEdThYXy1DOVB0WGJEaS1FN0RzYVBmendOTkRXQ0hhdEVlSkpSMDRyMU5kUmprSWlwYVJJV0pMVWxXSVRMV195T2VJN0l3WGR0enhTbGN2N3BDbkR6a3pCV1hCZVFwM3lLQXVV0gG-AUFVX3lxTFBZVkRPczZnZnVlUEJVSFhpeUlhTDdvZWh6dHJ4M2VCd3VlbmtIXzVJdXhtdzhJczNpTWNjSmdsWU9KVWExWkZnbW1NdW5obUtJUDZZSlJqRkxocGJtNXJULUpmNWdfN1NER0dubG1BSm1XX2I4VVlsVnpNOWZEajZqSTlXOXdNNXNvMXhVc2tieE5rODhVWGtHQnFocDRmSWhUUXlIdmhJTHhXOUhzVTVVQjlrNlhrbWZMN2ZVZmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2380
    },
    {
      "date": "Sep 08",
      "text": "Ex-US defense secretary warns Iran war likely to continue for six months.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxNZXJQTHRSR3JvX1VldVlIdVI0OHFqa2x3VXBfMFpYNE1TcnA0dXdLTFV0bE40bFEteVN1Rnl3S2puRUMxZmlkbHRhQTBCQVloaW5HN2h2LTBjaUJ6QVZTU2NhWmQ3SjA4QmR3ZDIzZ3dnbGtTVGYtLUMyR1MzOEdOc1RzUWxkcnp4UllB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2380
    },
    {
      "date": "Sep 09",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighborhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Amnesty International",
      "latestSinceUpdate": 2380
    },
    {
      "date": "Sep 09",
      "text": "Iran claims capture of a US submarine drone in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxPM0VkUnd5VzlEZVhBUy1ja1Q0dFZ6RE0yZHp2dGdobTZHajY0ZTZ6MXdkVWtKV2hYal9nY2dRRUlxU0RlZmxyQ3dmMXpKMFVVNlh2Q25LRVp3LXZHWmtrbzZGM3djQlVtVWdQb0U5RFNTOVA2U1BUMlFWcDZqblV2MGZLdEZPQllselJKcm44eld0STZhTDdsd2R1RG1HT1RrNm53VTZXNXVWWDla?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2380
    },
    {
      "date": "Sep 09",
      "text": "US military reports destroying 5 Iranian oil tankers following attacks on a Navy warship.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxQUXVLR3ZpOTNWZWpyaVpnSkVfTWZ2bERWZ3NfM21rcFJzcjRjWmlHaG9KeVNaalNwSnR1cDZHSG5IZFotS2dtcXpLZjVrSjJEYTBpZHNsMjY2eTlsVklQaUFGSVhHOC1lZUZmMHVfZGJvcEJrZ3psNU90WldXQnhiSg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "npr.org",
      "latestSinceUpdate": 2380
    },
    {
      "date": "Sep 09",
      "text": "Israel launches deadly strikes in Lebanon, intensifying its military campaign.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2380
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
      "perspective": "US/Israel",
      "headline": "Countering Iran and Proxies Amidst Escalation",
      "summary": "US and Israeli forces are actively targeting Iranian assets and proxies, asserting freedom of navigation in critical waterways, and responding to regional threats. Operations aim to degrade Iranian capabilities and maintain regional stability despite increasing conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 2378
    },
    {
      "perspective": "Iran",
      "headline": "Asserting Sovereignty and Resisting Aggression",
      "summary": "Iran is asserting its regional influence through military actions against US forces and capturing advanced US drones, while facing significant strikes on its oil infrastructure. The nation emphasizes its right to defend its interests and territory against foreign aggression.",
      "tone": "defiant",
      "latestSinceUpdate": 2378
    },
    {
      "perspective": "Regional/International",
      "headline": "Growing Concerns Over Prolonged Conflict and Civilian Harm",
      "summary": "Concerns are rising over the escalating conflict's duration and humanitarian impact, particularly with increased civilian casualties in Lebanon and Tehran. The international community watches closely as direct engagements between major powers intensify, risking broader regional instability.",
      "tone": "anxious",
      "latestSinceUpdate": 2378
    }
  ]
});

export default LATEST_SNAPSHOT;
