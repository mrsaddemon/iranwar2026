export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1377,
  "lastUpdated": "2026-07-19",
  "lastSyncedAt": "2026-07-19T19:44:58.596Z",
  "warDay": 142,
  "summary": "The US and Iran are engaged in direct military conflict following the killing of US service members, with the US conducting retaliatory strikes on Iranian targets, including a nuclear site, and Iran striking US allies and preparing for a wider regional conflict.",
  "lastNarrativeUpdate": "2026-07-19",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No ceasefire is active; direct military conflict is ongoing between the US and Iran."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 75,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 68,
    "globalPressure": 91,
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
      "date": "Jul 18",
      "text": "US attacks an Iran nuclear site.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxOQ0x3a0wzS2pXQVZJdHBKUTVyRjNncVV1cGtrLWdjWGRDVDFMV3l2YWkxN2E3bE8xWmpXV2kxN0pqdHdpanMyamZIdjB0ZDhGUWtXbmVPQjcySlZRT2dEdWJ0Qks0aVM3WkVuQXlYUTVybW0xSHdNcENlRFc2Z2pKQ2NDOHZHN1ZIblR3RmplVDJsVjAtTzB6am5ZVHZ5T3U1NHhrOUtJbTNpRV9zRFR2VUNPZjFRYkHSAbwBQVVfeXFMUGNmdVE0ZTFwOU5EclpJZm9pS0s2NjhvWkRmUHlwVWMzaXlaOFZPOG1iUXQ5aWVFamZjbldSMjVyR251ZzNOLWx6RUlFaTNWSFA5eTc4eTdtMm5ib3BTZEkxZk9wLUl0WVlVMHBUOHBjWi1qM1puc05oTzFwcWV1X25GTmx6TzNweER2SE1DbXg0SkVYSzNwaklkcGZYWE9tamE3M2xjZzZ0WWpBVmRESjlqNFIwcGR6NG9mRXo?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1377
    },
    {
      "date": "Jul 18",
      "text": "Kuwait desalination plant hit amidst regional tensions.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1377
    },
    {
      "date": "Jul 18",
      "text": "US service members killed in Jordan by an Iranian attack.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1377
    },
    {
      "date": "Jul 18",
      "text": "US concludes 8th straight night of strikes on Iran in retaliation for troop deaths.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxNTms5S29XQzlnbjNtVi1RXzJ6WUtBLTVIVlJZVnhMbFVfemxMdmpxNlhqV2k4dkRHemU2QnpLcFNjTWRjN2NzLW4zTk9vbmFSOUQ2ejYzRVBGbC1hN2RaQWhVaE9EalhzUl9mbFY4WVFPeDRwVkNETGtEQnl3VHNpc0steHVaT3lLdFdESi1kWlIyUHla?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1377
    },
    {
      "date": "Jul 18",
      "text": "Iran hits US allies as conflict escalates.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1377
    },
    {
      "date": "Jul 18",
      "text": "Israel warns missiles headed for Jordan could land on its territory.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1377
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
      "perspective": "US/Western",
      "headline": "US Retaliates Against Iran for Troop Deaths and Maritime Attacks",
      "summary": "The United States is conducting sustained retaliatory strikes against Iran to punish for the killing of American troops and deter further aggression. Concurrently, the US is addressing Iranian maritime threats in the Strait of Hormuz by revoking oil sales permits.",
      "tone": "defiant",
      "latestSinceUpdate": 1365
    },
    {
      "perspective": "Iranian",
      "headline": "Iran Prepares for Wider Conflict Amid US Strikes and Regional Tensions",
      "summary": "Iran is escalating its actions in response to perceived aggression, including attacks on shipping and preparing regional allies for a broader confrontation with the US and Israel. This comes as the US launches multiple nights of strikes against Iranian targets.",
      "tone": "defiant",
      "latestSinceUpdate": 1365
    },
    {
      "perspective": "Regional (Israel/Hezbollah)",
      "headline": "Israel Intensifies Strikes in Southern Lebanon Amid Border Escalation",
      "summary": "Israel is actively engaging Hezbollah targets in southern Lebanon, responding to drone incursions and planted explosives, and has destroyed infrastructure. This indicates a heightened state of conflict along the border, with potential for wider regional involvement.",
      "tone": "strained",
      "latestSinceUpdate": 1365
    }
  ]
});

export default LATEST_SNAPSHOT;
