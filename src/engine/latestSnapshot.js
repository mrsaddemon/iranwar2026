export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 268,
  "lastUpdated": "2026-04-20",
  "lastSyncedAt": "2026-04-20T10:18:42.435Z",
  "warDay": 52,
  "summary": "A ceasefire is currently holding, but the situation remains fragile amid unresolved regional tensions and the risk of renewed escalation.",
  "lastNarrativeUpdate": "2026-04-20",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 1,
    "summary": "No ceasefire is in effect for the primary US-Iran conflict, which is actively escalating."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.5
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
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
      "date": "Apr 19",
      "text": "US military seizes an Iran-flagged vessel near the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE93WEJXNmNtdG90Rm9RRm1VT1dmb3JUZ3V3OWw4ZGZEZmVOazhfX0ZkeDRkM3V5ckluMkxmM0FMSU5UR3c5eFdGOEZLRmNPNC1sYkcwNWxOc1dKY3JKelQzQnFtMjZaaWc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 268
    },
    {
      "date": "Apr 19",
      "text": "Iran vows swift response and retaliation after the US vessel seizure.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 268
    },
    {
      "date": "Apr 19",
      "text": "Iran reportedly launches drone strikes on US military vessels.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxPclI5dnpSdTM4ajFZRFl5THdQejNtTmd5d2pncmo4LW9ReDV2MlBLa1BYeWhnLWpUeTJHTFdlWGtLcHFkVE5QSFgyTlNnckNTc0JRNFZnVmZJb0V5cVphR1lJdXUwQk9xYXZUdHBDVDlBRUFhdzFHVTRIT2ZhQ2Q0QVU0Q01yTWczWnl6TGt5azhXaVpkbm5YdWdTcw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The National",
      "latestSinceUpdate": 268
    },
    {
      "date": "Apr 19",
      "text": "Iran closes the Strait of Hormuz until the US blockade lifts and reports ships being fired upon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxNZm9WRHN1VHF4X2lmVmQ3OFRLTzlUN3ZWLWtMbWhwMWV5T2JSLU9FbV8zMGE2UkFiZ2xBMEt4UG9yQWNsMHVKUnVBM1B2bGRVUU9IWnJ1TU5aYTEyTjFfMXJkMkVXRERmMEFmcC04VzU4Tk55REtrR3ZOR1h6aDhBMDhyZHp3NW1FbXZLMWNYbXNmN3JwemJ4MzN6amZGcjQy?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "PBS",
      "latestSinceUpdate": 268
    },
    {
      "date": "Apr 20",
      "text": "Oil prices rise as Iran vows retaliation for the U.S. attack on a cargo ship.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 268
    },
    {
      "date": "Apr 20",
      "text": "Iranian minister states no intention of negotiating for now, as US insists war goals almost met.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTE56dkx0c0Z3Umx4dlBzYzdrdGV6SHM3U3hLRnpDX0tFOC1UeHBiUEJLamlEalBVZUV6d0RsVS13UU5wUldEVm9hNVZ6ekRMOWtyamJMbQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 268
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
      "perspective": "US/Israel Stance",
      "headline": "US Enforces Maritime Order, Israel Prepares for Escalation",
      "summary": "The US asserts its right to enforce maritime order, seizing an Iranian vessel and claiming war goals are nearly met. Israel is reportedly ready to strike Iranian energy facilities if broader regional truces fail, indicating a readiness for further military action.",
      "tone": "defiant",
      "latestSinceUpdate": 264
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran Vows Response, Rejects Talks Amid Hardliner Shift",
      "summary": "Iran has vowed a swift response to the US vessel seizure and has rejected peace talks, with hardliners reportedly gaining influence in Tehran. The Strait of Hormuz has seen reversals on opening, signaling a hardened stance against US actions.",
      "tone": "defiant",
      "latestSinceUpdate": 264
    },
    {
      "perspective": "Regional Stability",
      "headline": "Strait of Hormuz Disruptions Fuel Oil Price Jumps",
      "summary": "The ongoing US blockade and Iranian actions in the Strait of Hormuz are causing significant disruptions to commercial shipping and have led to a jump in global oil prices. While a fragile truce holds in Lebanon, the broader region remains highly volatile.",
      "tone": "anxious",
      "latestSinceUpdate": 264
    }
  ]
});

export default LATEST_SNAPSHOT;
