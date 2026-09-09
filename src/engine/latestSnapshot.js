export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2381,
  "lastUpdated": "2026-09-09",
  "lastSyncedAt": "2026-09-09T15:20:14.575Z",
  "warDay": 194,
  "summary": "Direct conflict between the US and Iran has intensified with attacks on oil tankers and military targets, leading to surging oil prices, while Israel's military campaign in southern Lebanon continues to strain a US-backed ceasefire.",
  "lastNarrativeUpdate": "2026-09-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 2,
    "summary": "A US-backed ceasefire in southern Lebanon is active but severely strained by renewed fighting and intensified Israeli military operations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 55
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
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
      "date": "Sep 07",
      "text": "US and Iran attack oil tankers; crude hits $100 a barrel.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuAFBVV95cUxQVGRvY3RUVHlVT1NoWDA0d2pZLTV5TjF4TG5UOVRtZGhlcHAtVFVhY2pPVFk2MUJSdEl6U2ZZSjNTQjlJd1otUGNQMjNRT1BMa2NvNDlEdThYXy1DOVB0WGJEaS1FN0RzYVBmendOTkRXQ0hhdEVlSkpSMDRyMU5kUmprSWlwYVJJV0pMVWxXSVRMV195T2VJN0l3WGR0enhTbGN2N3BDbkR6a3pCV1hCZVFwM3lLQXVV0gG-AUFVX3lxTFBZVkRPczZnZnVlUEJVSFhpeUlhTDdvZWh6dHJ4M2VCd3VlbmtIXzVJdXhtdzhJczNpTWNjSmdsWU9KVWExWkZnbW1NdW5obUtJUDZZSlJqRkxocGJtNXJULUpmNWdfN1NER0dubG1BSm1XX2I4VVlsVnpNOWZEajZqSTlXOXdNNXNvMXhVc2tieE5rODhVWGtHQnFocDRmSWhUUXlIdmhJTHhXOUhzVTVVQjlrNlhrbWZMN2ZVZmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2381
    },
    {
      "date": "Sep 08",
      "text": "Former US defense secretary warns Iran war likely to drag on for another six months.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxNZXJQTHRSR3JvX1VldVlIdVI0OHFqa2x3VXBfMFpYNE1TcnA0dXdLTFV0bE40bFEteVN1Rnl3S2puRUMxZmlkbHRhQTBCQVloaW5HN2h2LTBjaUJ6QVZTU2NhWmQ3SjA4QmR3ZDIzZ3dnbGtTVGYtLUMyR1MzOEdOc1RzUWxkcnp4UllB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 2381
    },
    {
      "date": "Sep 09",
      "text": "Investigation reveals devastating civilian harm from US-Israeli strikes on Tehran neighbourhoods.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi8gFBVV95cUxNeWFlc1Zsem1ubmFHWTVtVXpYR0tiam9TYVphN1FzekNHdGUtVTNlRTd5OFBhQkFPNm5oMUpSUVItVjNHY3A1N3Bib1c1Qy04SzJKbUZ2UFZhU3dROGxIWnlzQ1BuNXgxWmpUSnFuRFBQbnBncHZldV9Uckw5Sl9NTzlIbVBpZExHTGYwMk1sb0tLYW1NRDNmaVZ1MjBvb244U3BnazNqWHdKTWktLTB1QWh1dGVvQVR0MmdnTEVlbmlkTUh0aW5wRHc4bWJZc1FWeGJLUXI0TDJsR21oS29NcXluWmw0N3JZd3FULW82ZWQ1QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "amnesty.org",
      "latestSinceUpdate": 2381
    },
    {
      "date": "Sep 09",
      "text": "US strikes Iranian tankers and destroys 5 more after missile attacks on Navy warship.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijAFBVV95cUxOUlN5b1FuNFl6ajd5T0Z0MVppWHZ5Y2hFOHJ4dkd0X1dqMGljMHlOX0FZNE9HSXU4SmoxVUVQVEs5OUg2OG8yM1NyazNZQ1VPU1dCS3p0NmNsUk5rVjBMY0xONjRQWGRtTk1vZkNFOC1PWElwcGZmbk9SUzVRS3JCeTlhN25heDc1b0dWbA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 2381
    },
    {
      "date": "Sep 09",
      "text": "Oil prices surge past $100 a barrel as US-Iran strikes intensify in Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxQcDlzUXFCcVJvUER3Ym1FeE9mREQ1a3FuaGV6T2hOdlV4WHU1bkRTN3V0eFVfNDJvYTRrSHFoMW9uSlBtaXNoQVJ2Sk42d1BNRmFjejAwaXg4a2swdTR4WFFnaVRBMFkzZUdjQmhfRnZIcGR3Qm9SYVZ5YkZQSDhJcUZOcDE3TlUyZTFaUnkwcWV5dWJOMXEwUGlTOFJhaGE5RXZHOW5qZDV2S0dM0gGyAUFVX3lxTE1xQXhqajhaRnRSRklMaUlJeWFCdU5Gb01qSXd6VmVNLUdaY0w5TTA2Rjk0bk9mdDgyZ0F2QTU4TkRXTzF3OUNnc3NxY2M5ZEVscXZBVXR5YXd4Z0hfVmtDMWQ5YThhMm5yY1RfcTFrTDFJaWFNalEybjk4SE1GRU1WTG5vdDNETEN6U0ZabThTQVdnNFpxR1dWM0VhYVJHSy1WMXo2Z0p1MkMwX1paQ0dpR3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 2381
    },
    {
      "date": "Sep 09",
      "text": "Iran attacks US forces in Jordan and sends wave of missiles toward US base.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMizAFBVV95cUxPYXl5NEhWdWhSUHJZanQ3LU5Jd0dyWHhUN1RYVVROUHFWcnV2WjEwNzl3VWtjX0cxanNGanNUV1NEZGZTeXYwNDh6T0tIT0hQYkVsTzZGNzA0SWlONVZWOEZwRmY1OWdGUmZLMmkyNWt2Uk5fQnFNWVF2ZlBXcmdfdmowSG9fUWJBWFE1MHU1bXdwYUpsb0EwSEVkSjEtYWFvRWpwd2lvdUpZZWdXOWNlRm5wRVV5N1plM1RUMGpXc1BwWTEwcWYyaDZ6emk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 2381
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
