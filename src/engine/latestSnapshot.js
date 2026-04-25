export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 348,
  "lastUpdated": "2026-04-25",
  "lastSyncedAt": "2026-04-25T04:10:05.539Z",
  "warDay": 57,
  "summary": "The ongoing conflict in the Middle East remains the primary focus of international observers.",
  "lastNarrativeUpdate": "2026-04-25",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 21,
    "summary": "No active ceasefire is reported amidst ongoing conflict."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.5
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "perspective": "US Military/Administration",
      "headline": "US Blockade on Hormuz to Persist, Hegseth Declares Victory While Preparing for More War",
      "summary": "The US maintains a firm stance on its blockade of the Strait of Hormuz, with Pentagon chief Hegseth declaring victory while simultaneously preparing for potential further conflict. Concerns are noted regarding the depletion of US advanced munitions supplies.",
      "tone": "defiant",
      "latestSinceUpdate": 347
    },
    {
      "perspective": "Iran/Hezbollah",
      "headline": "Hezbollah Defiant as Fighting Continues Despite Ceasefire Extension",
      "summary": "Hezbollah dismisses the ceasefire extension as 'meaningless' and continues fighting in southern regions. Iran faces a US blockade in the Strait of Hormuz, with reports of ships being taken.",
      "tone": "defiant",
      "latestSinceUpdate": 347
    },
    {
      "perspective": "International Law",
      "headline": "Experts Warn US Strikes on Iran May Constitute War Crimes",
      "summary": "Over 100 international law experts have issued a warning that US strikes on Iran violate the UN Charter and could be considered war crimes, raising questions about the legality of the ongoing campaign.",
      "tone": "skeptical",
      "latestSinceUpdate": 347
    },
    {
      "perspective": "Diplomatic/Economic",
      "headline": "Ceasefire Extended Amid Peace Talks and Global Economic Strain",
      "summary": "An Israel-Lebanon ceasefire has been extended for three weeks, with new peace talks involving Witkoff and Kushner heading to Pakistan. The ongoing conflict is noted to be impacting the world economy, and US re-arming efforts highlight long-term supply concerns.",
      "tone": "strained",
      "latestSinceUpdate": 347
    }
  ]
});

export default LATEST_SNAPSHOT;
