export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2336,
  "lastUpdated": "2026-09-03",
  "lastSyncedAt": "2026-09-03T13:30:14.055Z",
  "warDay": 188,
  "summary": "Recent signals indicate renewed hostilities between Iran and the US, with Iran striking Kuwait and both sides involved in strikes, while tensions also escalate between Israel and Hezbollah in southern Lebanon.",
  "lastNarrativeUpdate": "2026-09-03",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 10,
    "summary": "No active ceasefire is in effect as hostilities have resumed between key actors."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.78
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 83
      },
      "behavior": {
        "precision": 0.82,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.88
      }
    }
  },
  "global": {
    "nuclearIndex": 35,
    "escalationLevel": 85,
    "oilDisruption": 88,
    "tradeImpact": 79,
    "sanctionsPressure": 68,
    "globalPressure": 90,
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
      "date": "Sep 01",
      "text": "Iran strikes Kuwait with missiles and drones, resuming hostilities with the U.S.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMipwFBVV95cUxOallJNTBESkZZUGJPSldNM2tCZFlGcHc2UkdOX3hPYjN6NzI0WXVidGJNbHpaRjhKWTRBWGxoZEg2WXp3em55QUpOVVh4RFpleEVYd0ZvcGF4OWp1dFNqVnYxU29Nc3ZJbkVEMUd1QWhKaGRNSi1UempFVHo1Z0FiM29GeVEtUlRweUNYWFFCcnlXX3RkNlkyWGt2UThVT1Nkemp1N2lVOA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 2336
    },
    {
      "date": "Sep 01",
      "text": "US-Iran strikes raise fears of renewed war across the Middle East.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiogFBVV95cUxORjZ4d3JRTk1WcXR6eThpVm1wcVpzQV8wMm42eDB4bDJRMVhxelJpdmZTYXVPQ0JTUmtiNXFVWEZyb1NBTTZibmZJTkk4bjlRNGwtWTU1OF8zXzhENVZhWDN4TUwzekdfVG8xWUpmY3hmcHBDQk5TUzBLSERGbFJ0c05nekFpclo3cFdMcm93dHlEUXctVTY2MjJIMkkxSTRGWnc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2336
    },
    {
      "date": "Recent",
      "text": "Iran accuses the US of a 'war crime' after a strike reportedly killed four at a wedding; the US denies targeting civilians.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFByamU5TjBFcHB1R2ZhQ0UtQ2pKTHY1Y09IQ045YlRBNEtMUjV3MVJISGdMZ0dLZ0lzTkR3QTRNdGo2ZDBSVFdObXhySXBvNVYyeDBHLXptQXBxUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 2336
    },
    {
      "date": "Recent",
      "text": "Iran warns the US against an Israeli offensive on a Hezbollah-held ridge in southern Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiakFVX3lxTE44VEI5N3I4alhMYWpOMEFMeTZIWWw4d1QzeDVIR25UMDNxMzhxN0N6Q1NuN0JuNkZnbHhEZ3NoMm15TTlCaUh5Z25odEpXSldNVlMzTFFXSWhUMHNXTXJyQ3NVSVhBT2htM0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Jerusalem Post",
      "latestSinceUpdate": 2336
    },
    {
      "date": "Recent",
      "text": "Hezbollah launches explosive drones at IDF troops in southern Lebanon, prompting Israeli strikes.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2336
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (11 headlines)"
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
