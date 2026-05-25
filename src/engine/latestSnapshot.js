export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 776,
  "lastUpdated": "2026-05-25",
  "lastSyncedAt": "2026-05-25T17:25:15.792Z",
  "warDay": 87,
  "summary": "Intense mediation efforts between the US and Iran are ongoing for a potential peace deal, while regional hostilities persist with Israeli strikes in Lebanon and Hezbollah drone attacks.",
  "lastNarrativeUpdate": "2026-05-25",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.3,
    "durationDays": 14,
    "summary": "A peace deal between the US and Iran is reportedly nearing completion, but significant obstacles remain and it is not yet active."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.65
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 78
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.6
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 72,
    "oilDisruption": 55,
    "tradeImpact": 53,
    "sanctionsPressure": 62,
    "globalPressure": 73,
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
      "date": "May 25",
      "text": "Reports highlight the lives of 13 US troops killed in connection with the Iran war.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 776
    },
    {
      "date": "May 25",
      "text": "Israel conducts strikes in south Lebanon, while Hezbollah reaffirms Iran's continued support.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 776
    },
    {
      "date": "May 25",
      "text": "A Hezbollah drone kills an IDF soldier and seriously wounds another in southern Lebanon.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 776
    },
    {
      "date": "May 25",
      "text": "Oil prices slide as ships are observed moving toward the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 776
    },
    {
      "date": "May 25",
      "text": "The U.S. is reportedly preparing for new military strikes against Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxOd0YydWZGVkNndld4N2RMN3pCNTB6U0lud2o1SlBBVDd6UjNPeUlYb2taRTl0UVBBY1ZmcEM2cUdPRVRoOFY2YnJZdGxYNHkzb0JCd0dTVWZqVVh5Z3ZnT2FvZk9maG4wbkFkdWQ4dEliMlBIemJsSlVQaTNkUXM5YdIBhgFBVV95cUxPbmoxbmJHMzhBdmdIYnVOaVNUME9GbktiTDdwazVqNVViUUtvYzRfUHVyWjNHMTVaNkxEYUpPcFNLcDF0Q25hSlcwaG9EYkFzN0c1eWZoLWtCMWFFYnNEZm5XRTFQYU9CR3hCNVVWYkE5ellhRHhCcGxmbVRzV3FiQk43UDdKQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 776
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
      "perspective": "US Administration",
      "headline": "Trump touts Iran breakthrough, but also weighs new strikes.",
      "summary": "The Trump administration indicates significant progress on an agreement with Iran, suggesting the Strait of Hormuz will open. However, reports also suggest the US is weighing new strikes for a 'decisive' victory.",
      "tone": "strained",
      "latestSinceUpdate": 772
    },
    {
      "perspective": "Iran",
      "headline": "Iran accuses US of ceasefire violation amidst peace talks.",
      "summary": "Tehran claims the US violated a ceasefire and targeted ships, even as negotiators have agreed to broad principles of a peace deal. Iran maintains its substantial missile capabilities.",
      "tone": "defiant",
      "latestSinceUpdate": 772
    },
    {
      "perspective": "Israel/Lebanon",
      "headline": "Israel strikes Lebanon after Hezbollah drone attack, issues evacuations.",
      "summary": "Following a Hezbollah drone attack that killed a soldier, Israel conducted strikes in southern Lebanon and issued evacuation orders. The fate of the conflict is seen as resting with outside powers.",
      "tone": "anxious",
      "latestSinceUpdate": 772
    },
    {
      "perspective": "Global Markets",
      "headline": "Oil prices fall on signs of US-Iran deal progress.",
      "summary": "Global oil prices have fallen significantly, reacting positively to news of constructive talks between the US and Iran. This indicates market optimism for a potential resolution and reduced supply disruption risks.",
      "tone": "neutral",
      "latestSinceUpdate": 772
    }
  ]
});

export default LATEST_SNAPSHOT;
