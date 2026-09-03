export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2337,
  "lastUpdated": "2026-09-03",
  "lastSyncedAt": "2026-09-03T17:08:16.342Z",
  "warDay": 188,
  "summary": "The ongoing conflict in the Middle East continues to be the primary focus of international observers.",
  "lastNarrativeUpdate": "2026-09-03",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire or de-escalation efforts are currently reported."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.3
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 70,
    "oilDisruption": 60,
    "tradeImpact": 56,
    "sanctionsPressure": 61,
    "globalPressure": 74,
    "allianceInfluence": 51
  },
  "alliance": {
    "russiaIntelSupport": false,
    "chinaEconomicSupport": false,
    "s400Active": false,
    "mosaicDefense": false,
    "unscShield": true
  },
  "recentEvents": [],
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
      "perspective": "US Administration",
      "headline": "US Vows Strong Response to Iranian Aggression While Weighing Options",
      "summary": "The US administration, led by Trump, has responded to Iranian actions with military strikes and strong rhetoric, including threats to 'hit them hard.' However, there are also considerations for 'limited strikes' to curb attacks in the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 2320
    },
    {
      "perspective": "Iranian Leadership",
      "headline": "Iran Continues Retaliatory Strikes Against US Targets",
      "summary": "Iran's IRGC has attacked US bases in Jordan following US military actions, indicating a continued willingness to engage in direct conflict. Iranian actions, including mine warfare, aim to challenge US control in strategic waterways.",
      "tone": "defiant",
      "latestSinceUpdate": 2320
    },
    {
      "perspective": "US Military/Defense",
      "headline": "Pentagon Concerned About Sustaining Long-Term Conflict with Iran",
      "summary": "Leaked documents and reports indicate significant concern among American generals regarding the potential for a prolonged conflict with Iran. Questions are being raised about the US military's capacity to sustain such an engagement.",
      "tone": "anxious",
      "latestSinceUpdate": 2320
    },
    {
      "perspective": "Regional Stability (Israel/Lebanon)",
      "headline": "Hezbollah Poses Acute Challenge as Israel Expresses Discontent",
      "summary": "Hezbollah's use of FPV drones presents a significant threat to Israel, which is reportedly unhappy with the slow progress of Hezbollah disarmament efforts. Lebanon is also attempting to assert its influence against Iran's presence.",
      "tone": "strained",
      "latestSinceUpdate": 2320
    }
  ]
});

export default LATEST_SNAPSHOT;
