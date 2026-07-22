export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1410,
  "lastUpdated": "2026-07-22",
  "lastSyncedAt": "2026-07-22T07:17:49.315Z",
  "warDay": 145,
  "summary": "Ongoing conflict in the Middle East remains the primary focus of international observers.",
  "lastNarrativeUpdate": "2026-07-22",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or de-escalation efforts are currently reported in the region."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.4
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
    "escalationLevel": 70,
    "oilDisruption": 60,
    "tradeImpact": 56,
    "sanctionsPressure": 65,
    "globalPressure": 80,
    "allianceInfluence": 73
  },
  "alliance": {
    "russiaIntelSupport": true,
    "chinaEconomicSupport": true,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [
    {
      "date": "Jul 22",
      "text": "International observers continue to focus on the ongoing conflict in the Middle East.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "General Assessment",
      "latestSinceUpdate": 1410
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "no recent items"
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
      "perspective": "US Resolve",
      "headline": "US Intensifies Strikes, Issues Nuclear Warning to Iran",
      "summary": "The US continues its military strikes against Iran, emphasizing its commitment to action despite ongoing costs and threats. President Trump has issued strong warnings regarding potential strikes on Iran's nuclear facilities.",
      "tone": "defiant",
      "latestSinceUpdate": 1408
    },
    {
      "perspective": "Iranian Pressure",
      "headline": "Iran Faces Sustained US Pressure Amid Regional Tensions",
      "summary": "Iran faces sustained US military pressure and economic threats, while also navigating regional tensions by supporting proxies and threatening shipping. An expert suggests Iran avoids direct attacks on Israel due to fear of retaliation.",
      "tone": "strained",
      "latestSinceUpdate": 1408
    },
    {
      "perspective": "Regional De-escalation Efforts",
      "headline": "Ceasefire Push and Lebanon Security Pilot Underway",
      "summary": "Amidst escalating conflict, mediators are pushing for a 10-day ceasefire. Separately, a US-backed security pilot involving Lebanese army deployment in southern Lebanon is underway following an Israeli withdrawal, indicating some efforts towards localized stability.",
      "tone": "neutral",
      "latestSinceUpdate": 1408
    }
  ]
});

export default LATEST_SNAPSHOT;
