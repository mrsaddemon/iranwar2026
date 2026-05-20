export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 716,
  "lastUpdated": "2026-05-20",
  "lastSyncedAt": "2026-05-20T17:33:05.662Z",
  "warDay": 82,
  "summary": "US President Trump has indicated a pause in military action against Iran to pursue a potential nuclear deal, while Israeli forces continue strikes in Lebanon amidst ongoing clashes with Hezbollah despite a ceasefire.",
  "lastNarrativeUpdate": "2026-05-20",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 3,
    "summary": "A ceasefire is nominally in effect between Israel and Hezbollah, but significant clashes and casualties have been reported in Lebanon, indicating severe violations."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 60,
    "escalationLevel": 48,
    "oilDisruption": 40,
    "tradeImpact": 29,
    "sanctionsPressure": 54,
    "globalPressure": 57,
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
      "date": "May 20",
      "text": "Trump says he paused attack on Iran, signals a nuclear deal may be possible.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxNcDZKdU5Cb2tFNmNsTnFKeWlKRFJnZ3lHdGVMRnVBOUR5NnlLaW01eldjcG1YcHZjbndUamVLbV9QWlRhczB6TEt2cDY2bkJqdXB4QlhkQV9nd3dvamF2NnpDU0ptdUZxQXdOQlF5ODB2M0VKbmc4U0xFMVFuWW5Cb0VOeGVYaVA2amRzZ3JGejBGenBGUzh5dlcwM252T2R0cFY0U0U3MEc3Q2t3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 716
    },
    {
      "date": "May 20",
      "text": "Israeli strikes on Lebanon kill at least 19 as clashes with Hezbollah continue despite ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxPWmJQWGtnRWdqTlUtM1hoa3BoM1VtalYxc3Bsa2ZnTHhCZFBQN2p6R2VGVjBIM1FaQVpfNzF0YUtrRHVLa1lvMnh2M0QzV2JZb2xCQTdEcVpXOWJEWWtsWC1OaEticEJfb2M5YXpva1VXV0NvdTc4ZkxwaVdpRlJnM2x3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 716
    },
    {
      "date": "May 20",
      "text": "Iran claims it coordinated passage of 26 vessels out of Hormuz in 24 hours.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxPUnFmWjlicTVSMFR5dTE2UVlCNzFLNWtuVlpDU05zbE1Jc2hTWG5zNVA0d2o0WWUyeDVjRVdFdmlFc19MMUhudS1GdTVyVUlobUR6bzlONGxXZXpZakZoMWtxTXlybndaaC1kQzVJNU9PdDFDWEFkWmhOeUk5emtLSm5zN3hEaFFkN0N1NlRjVFNmMjFiMkFqeHloam1nNzJzd3dYa3VlUE1aS3EybThNZjVn0gG3AUFVX3lxTE1pbGRzYUxOZkRWUWozdFJJem9Qc25CV2pWV2ItUmpmYnZUY1hRNV9lZlFBX0JVWTV5ajV6bW40SENIbm42cUxjYTRLTDFNeHlkaEl0bDF2V19JX1RjQVEwbWIwamt3OHhjSDhEUFcxVGtEdU5GRW1fblMzRkxUdVB1UW93VVFMVEtRSkRzZklONHJSWWZpZnYyZ0pBcldYNWs3SV9TczdLQks4U1VOSTRRbHRxVERlbw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 716
    },
    {
      "date": "May 20",
      "text": "US Senate advances measure to end military action in Iran in rebuke to Trump.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxPelNYZEVHYTRsX0FQTUhVZXI1a1NvRzhHOXptdVctQUJPbFJtUkJ1TUJIU2RsQnEzMS01UC1Qa2JTbW02UGdqRV9VQnZBNmlwMXNtTnpRS3VtVjlxcmoxWkg0eXRHOXZjVTNkSWtqcU1oRHFSd3RVcnhuVk04UUtFcWhtdWFjbnFPU0VhZjUzUl9MZFFaY3NkT2swQUQ1LVVFNllXYUh1cENKNWhLUUxJ0gG0AUFVX3lxTE8yWWstMUl3NFRFaHRrOGhtUGczSzNrdmNYUHFmU2l0RTkwazRNWWMyc2Y1b3psbTVVVy1KNlFLQmFEQkVGbWlYQlNnc3pMZlhJaGdXZFFaWEdJdkdlT3cxUWJNSkxEcFEtb3VlcHhTT29pRkN1SVRtTUtCME91Z1N5ZHFWdXo4UzU0cUVjbG1USTlKTlFWM1ZTclFpWld0RzhLNGNuWWV1M1FSd2hBQ3pPemZIVw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 716
    },
    {
      "date": "May 20",
      "text": "JD Vance says US remains ‘locked and loaded’ to restart military campaign as Iran warns of ‘new fronts’.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi0gFBVV95cUxOS1hscWxkWjFhNndadUQ5LVByX0V0eG53bExSa21tM1J6dHYyNVFrTHpZVF81YWhTcXUyVVN3QVhsSWYxSFFxS1Z5eHMwRU5KSTJjT0VfZi0wbE5xZlkwWWluWDhoTU5YbnVDS0M2RnhsR3V4NTY0WEVpLVdJdWZsRTRDUkZpN3FxakFlYVhhaXkxbE5PQ3RoMWxLTGZwQmUwU1NlMklDQW9VaGxUemFmcVBXTV93NVhJNEFLOWJzU1ZzbUQ0am5idDVQaTYySkxlQ3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 716
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
      "perspective": "US Policy",
      "headline": "US warns Iran of imminent attacks, maintains readiness.",
      "summary": "US officials, including former President Trump and Senator JD Vance, have issued strong warnings to Iran, indicating a readiness for military action if a deal is not reached or if conflict resumes. Trump stated attacks could occur in 'two or three days' if no agreement is made.",
      "tone": "defiant",
      "latestSinceUpdate": 711
    },
    {
      "perspective": "Iranian Response",
      "headline": "Iran threatens 'new fronts' and massive missile retaliation.",
      "summary": "Iran has warned of opening 'new fronts' in response to potential conflict and threatened to fire hundreds of missiles daily at Israel if war resumes. This indicates a strong defensive and retaliatory posture from Tehran.",
      "tone": "defiant",
      "latestSinceUpdate": 711
    },
    {
      "perspective": "Israeli Security",
      "headline": "Israel prepares for Iran war, faces Hezbollah drone threat.",
      "summary": "Israel is reportedly preparing for a renewal of war with Iran while simultaneously dealing with significant challenges from Hezbollah drones, which are restricting military operations in southern Lebanon. The death toll from Israeli strikes in Lebanon has surpassed 3,000.",
      "tone": "strained",
      "latestSinceUpdate": 711
    },
    {
      "perspective": "Global Energy/Trade",
      "headline": "Strait of Hormuz incidents raise oil disruption fears.",
      "summary": "Incidents involving ships in the Strait of Hormuz, including a vessel meeting a 'hail of bullets,' and Chinese tankers exiting with crude oil, highlight the vulnerability of the critical waterway. This has led to blunt warnings from energy executives and concerns about global oil prices and supply disruptions.",
      "tone": "anxious",
      "latestSinceUpdate": 711
    }
  ]
});

export default LATEST_SNAPSHOT;
