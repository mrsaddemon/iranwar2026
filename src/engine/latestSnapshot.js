export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1144,
  "lastUpdated": "2026-07-02",
  "lastSyncedAt": "2026-07-02T23:47:47.651Z",
  "warDay": 125,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-07-02",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.69,
    "durationDays": 5,
    "summary": "No active ceasefire is reported; discussions are ongoing but conflict persists."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
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
      "date": "Jul 01",
      "text": "Tehran rejects third-party intervention for the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxQeFZlSzkxMFJqN2I3LUtJb3hKUkt1UlR1Y29OUTdGdlV0VTFkV0JYdHRnZUFIMEFaQlp6RDVERFdaWXNVaFlWYWNhZXlodmw2TG5VeEJUczhvMElwa295QVItQ1FPRGtaMjZLd2U5eVJGQ3VtZzR6WVRWV1lNdmdWUnJVMlhQTi1KLVpFemY3MUZKem1yME5RaWhLUm1FTGY4bVZhcGU2LTJxWE1fSksw0gG0AUFVX3lxTE4tQ2pUSGw2N3UwdnBSSEczVl94ZU9iQWpnRzZCYnBBZDF0ZGxRei1iV3ZPUUVUYi1DWnR6a08xbjZsQzJQRmpEbTM4Vzh5TlhXU2RKRFlCQVd6eXlTZmgtOHdmRTluaURtaTRfR2NaSV9ETE0zZkEzd2drT09mbllXSmJjZktOazYwQzczd0dfNHU0VGNjTUhaRGJDc3ZSd0hNRjhnV2szb01RR3BiSTJnUlN3SQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1144
    },
    {
      "date": "Jun 30",
      "text": "Qatar's Emir discusses Iran talks and Lebanon ceasefire with US envoys.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxPMFhZUzZXdk80QVo2X0dLeWNKd0R2VGd5dDJqYmNrUGt1VGFrNjdNZnJXV3JSdU9TZENVVXZTV0RZWC1lZ0ZRUjRVSTBhdGw2cDNEcHljUHlJSVFvVEV5X0kyT3hFa0VvT0xfWXF3dE9YV2k2NnR6TmpkZXNiY1ptaDR0b3M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "thenationalnews.com",
      "latestSinceUpdate": 1142
    },
    {
      "date": "Recent",
      "text": "Trump's negotiators arrive for talks with Iran.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1144
    },
    {
      "date": "Recent",
      "text": "Iran claims to have targeted an American base following fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1144
    },
    {
      "date": "Recent",
      "text": "Israel conducts strikes in Iran, according to the IDF.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1144
    },
    {
      "date": "Recent",
      "text": "US hits Iran after a threat from Trump to respond to Gulf fire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQZUVsYmQzTWUxeEh5YmJHa21UaklQR1JEYUJPU0ZtNXFiZlYtZnpCNXdHMHNRdjFabUpRM1h3UVdkNzJlOFFrSHRWTmxWMTFHSlYwNnoxb21zeEw5NFE2SnB3d1RORE5HSVowV2FWeFVPZ2RqRHNGUDVSUnd5U0M0Ni1KTTdULWVlSVdlUlM4Slo0a0FPSUFIT3lBeS1IRFhONmtiR2o1ZnZya01zQXJQcUs0TU80emZPOE9R0gHAAUFVX3lxTE5oem5QSkhHa2pMODNPazB5VElnT0RmNVZkM1R0d0pFTW1mNjRGTFdtUW0ta1M4eUl6anE1SUxSMWJTWUpiYTNDUElEdmNuSzFRZ2tkUnNMWEJvZHZ6OVdBTnJZODBxQWVCTS1kQzNxRlgyb19kc0lvOXpmemluWjRsWnVudVVnZjgtZG1wSE9GeDRwcWNZWGlWd0pKTlBwaUR2YU1TOWtKNmgyUWR0M3dTMERhTEMxbVljVHBBSnRXNw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1144
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
      "perspective": "US/Allies",
      "headline": "Diplomacy Stalls Amidst Retaliatory Strikes",
      "summary": "The US continues diplomatic efforts in Doha to de-escalate tensions and secure shipping routes in the Strait of Hormuz, while responding to Iranian military actions. Efforts are also underway with Gulf allies to establish alternative shipping routes.",
      "tone": "strained",
      "latestSinceUpdate": 1133
    },
    {
      "perspective": "Iran",
      "headline": "Sovereignty and Readiness for Conflict",
      "summary": "Iran asserts its control over the Strait of Hormuz, rejecting external intervention, and declares readiness for war while engaging in talks. The Revolutionary Guards claim successful retaliatory strikes against US military sites.",
      "tone": "defiant",
      "latestSinceUpdate": 1133
    },
    {
      "perspective": "Regional Stability",
      "headline": "Escalation Risk High as Talks Fail",
      "summary": "The failure of Doha talks to achieve a breakthrough, coupled with continued military engagements involving the US, Iran, and Israel, signals a high risk of further regional escalation. The situation in the Strait of Hormuz remains a critical flashpoint.",
      "tone": "anxious",
      "latestSinceUpdate": 1133
    }
  ]
});

export default LATEST_SNAPSHOT;
