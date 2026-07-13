export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1280,
  "lastUpdated": "2026-07-13",
  "lastSyncedAt": "2026-07-13T16:08:16.789Z",
  "warDay": 136,
  "summary": "The United States launched a second night of strikes on Iran and reinstated a naval blockade of the Strait of Hormuz, as a ceasefire disintegrated and Iran declared diplomacy futile.",
  "lastNarrativeUpdate": "2026-07-13",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 10,
    "summary": "A previously active ceasefire has disintegrated following renewed US strikes and the reinstatement of a naval blockade."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 48,
    "oilDisruption": 95,
    "tradeImpact": 69,
    "sanctionsPressure": 54,
    "globalPressure": 67,
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
      "date": "Jul 12",
      "text": "US launches strikes on Iran for a second night.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE91YV9WLTU4cXN4cjF5RWVKc3lJUlpWQ1BjS2RqUURnTzVRN1VhTUthTjBsdjNHZ1FRam1KMHM3Tkh4ZTJBdlhYZTVXeENUWDVkWnQ2NDBHY2xoZGJSOEtmaEp3Y0M5NTMzbDB5QUl3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1280
    },
    {
      "date": "Jul 12",
      "text": "Trump says US will reinstate Strait of Hormuz blockade and impose 20% charge on cargo.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE1LQ2IyTmsyTXlsYjJHR0NpMEFCT2Q0Z3UwS0JzSXRlTFRpZ3hzc3dzOW9rak1NWVd5ZllBR1Z3Q1I4LUVLamVTbHBCWlVkcTY2RTI1Ng?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 1280
    },
    {
      "date": "Jul 12",
      "text": "Ceasefire disintegrates as Trump says US will reinstate blockade of Iranian ships in Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBnVjhScnVheUNnYXhMcjVVRlZuS2RiMGgwQTNxRWxtU1AxWlM1elZTRGxjU0xwVFNwb3A3YkluVzN4WGlsUlVrbmZtT0hwRlVsYnozb2Q1cXhHTXU2QlFyMlNzaHFQUzh1cVVmWW1n?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1280
    },
    {
      "date": "Jul 12",
      "text": "Hezbollah insists on linking Lebanon to Iran-US negotiations.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1280
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (14 headlines)"
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
      "status": "unavailable"
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
      "headline": "Holding Iran Accountable Amid Strait Tensions",
      "summary": "The United States is conducting strikes to hold Iranian forces accountable for attacks on shipping and to ensure freedom of navigation in the Strait of Hormuz. President Trump has agreed to talks but declared a previous ceasefire 'over'.",
      "tone": "defiant",
      "latestSinceUpdate": 1275
    },
    {
      "perspective": "Iranian",
      "headline": "Retaliation and Strait Closure Claims",
      "summary": "Iran claims to have closed the Strait of Hormuz and is targeting Gulf states in response to intense US and Israeli strikes. Iranian forces continue to engage in exchanges with US military.",
      "tone": "defiant",
      "latestSinceUpdate": 1275
    },
    {
      "perspective": "Israeli",
      "headline": "Strikes in Iran and Lebanon Presence",
      "summary": "Israel has conducted strikes in Iran and is preparing for a prolonged presence in Lebanon to counter Hezbollah, despite a local ceasefire. This comes as a Hezbollah lair was reportedly unearthed.",
      "tone": "strained",
      "latestSinceUpdate": 1275
    }
  ]
});

export default LATEST_SNAPSHOT;
