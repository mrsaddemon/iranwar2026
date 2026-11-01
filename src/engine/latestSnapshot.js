export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2686,
  "lastUpdated": "2026-11-01",
  "lastSyncedAt": "2026-11-01T22:22:53.630Z",
  "warDay": 247,
  "summary": "Tensions are high in the Middle East with the US and Israel considering new strikes on Iran, while Iran warns against attacks and a potential longer conflict, amidst ongoing talks to de-escalate and reopen the Strait of Hormuz following a tanker explosion.",
  "lastNarrativeUpdate": "2026-11-01",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 2,
    "summary": "No active ceasefire is reported amidst ongoing tensions and conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 75,
    "escalationLevel": 80,
    "oilDisruption": 85,
    "tradeImpact": 76,
    "sanctionsPressure": 63,
    "globalPressure": 82,
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
      "date": "Nov 01",
      "text": "US considers new strikes on Iran amidst diplomatic outreach.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2686
    },
    {
      "date": "Nov 01",
      "text": "Fears grow of renewed US-Iran conflict post-midterms.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2686
    },
    {
      "date": "Nov 01",
      "text": "Qatari mediators facilitate third day of US-Iran talks to end conflict.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxPdXU0aVh0RXlJYm1BOUtMU2FncFZnaDY5dVo4LXR0OFhsUzl1V2s0ZHpoeU5VX2d4cjg0RWRXRkRLLVhRRFJ6QlVKd3dEQ3ZtNVF0c0laVUtZZU1DTFB2bVVpN01abDA1RDRBWXJLRzFSVzZpQmFaWFBVaVdhNG9GdEVranBrT2M5NzlmWFVKSXo5QjJla0JLZ2x3SG9pOE9mb0xOaUNaZmxxbzQ4RlVVY04tZnRxZWNLNVBoby1WMXQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2686
    },
    {
      "date": "Nov 01",
      "text": "Iranian army warns potential conflict could be prolonged.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2686
    },
    {
      "date": "Nov 01",
      "text": "Ayatollah Khamenei issues warning to US and Israel against further attacks.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2686
    },
    {
      "date": "Nov 01",
      "text": "Former President Trump suggests further attacks on Iran.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2686
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "US/Israel Deterrence",
      "headline": "US and Israel poised for action against Iran's nuclear ambitions",
      "summary": "The US is weighing new strikes against Iran, while Israel is ready to resume its own offensive to counter Iran's nuclear program. This stance is reinforced by US military deployments and briefings on military options, aiming to deter Iranian aggression and curb regional terrorism.",
      "tone": "defiant",
      "latestSinceUpdate": 2682
    },
    {
      "perspective": "Iran's Stance",
      "headline": "Iran warns against attacks, asserts regional influence",
      "summary": "Iran's supreme leader has issued strong warnings to the US and Israel against new attacks, while the country continues efforts to rebuild its nuclear program. Despite recent attacks on US bases and ongoing tensions in the Strait of Hormuz, Iran is also engaging in talks to manage the waterway.",
      "tone": "defiant",
      "latestSinceUpdate": 2682
    },
    {
      "perspective": "Regional Instability",
      "headline": "Middle East on edge as war fears mount",
      "summary": "Fears are mounting across the Middle East that the conflict with Iran could restart, especially after upcoming elections. The potential for a wider war is a significant concern, though Hezbollah is reportedly unlikely to join unless Iran faces an existential threat, indicating a complex web of regional alliances and red lines.",
      "tone": "anxious",
      "latestSinceUpdate": 2682
    }
  ]
});

export default LATEST_SNAPSHOT;
