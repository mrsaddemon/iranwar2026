export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1550,
  "lastUpdated": "2026-08-01",
  "lastSyncedAt": "2026-08-01T12:07:27.036Z",
  "warDay": 155,
  "summary": "The US-Iran war continues to escalate with Iran attacking Kuwait and US forces, a tanker strike in the Strait of Hormuz, and US preparations for further strikes, while Israel conducts operations against Hezbollah in Lebanon.",
  "lastNarrativeUpdate": "2026-08-01",
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 45,
    "escalationLevel": 90,
    "oilDisruption": 85,
    "tradeImpact": 77,
    "sanctionsPressure": 64,
    "globalPressure": 85,
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
      "date": "Jul 31",
      "text": "Trump touts progress on Gaza peace effort as war with Iran drags on.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9iVnVVVTJXMFNiMEdId3ZvWWhnYVNhUHZTOU0xc2VfQ3ZCZUhfVzlCaldRWFJCXzJzOUQ0SUh3b0tpVUtmNzZwbEphNVpPVkh1eWRfd21rdGhScEFvUmVrUGFSbWZOMTdIX2Y3bGh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1549
    },
    {
      "date": "Jul 31",
      "text": "Iran attacks Kuwait and threatens the region with 'flames of war'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxOdFZfbjV6VmtqVkVPRlJlRVg3ZkxjQmNZNlN4ak9qX0NsSnc1QmZYajVfUnJjbUdiZzd1aUZYSWVVcGxIanN1cURTOHdhLUUzQXN4Z1RuVjh1S3JsMEItSXpLN3AzSUwzRU5aOW94VDR2ZUVIS0hWSlNDQUtsdXZmTmlHdGhhRVBHc1ZPNWhwcTNDSDhQNzJZaTdKdjdzTlg1alprdXdwczU3VERIaV9RYjdVWkI2WUnSAbwBQVVfeXFMT0VBcVFNMTd2SURuWFBfMGxSNEtfZkhaX3haWGhaSndyMzZubWtMRGE0dmhSX0RZd19yRlM2MjFSM0JYRG5Rb1VHTXEtU0pfSURBTURNRVJLVlFHeVAxZ1pwWFpzdjlKTHozWnZ1aFpCZE0zeVdSYjhEaEpiejQ0WG5RR2NoSElSVzFYSWZYYnhvcXFwWm5Kc0pIVllHaVB4bXA4UWxvcmFNRHZqNnFTM2dDTzhvbVdyVERDOVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1550
    },
    {
      "date": "Jul 31",
      "text": "Iran's war with the US continues amidst mounting internal crises.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1550
    },
    {
      "date": "Jul 31",
      "text": "US allies show reluctance to intervene in the escalating Iran war.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1550
    },
    {
      "date": "Jul 31",
      "text": "Iran accuses the U.S. of escalating tensions as Washington prepares new strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxPTExVbGpfeGpwRzZoYzd1SlBvaWhnZVJoUXc3ekdDWWZ6alQ2ckh2dzhSV3B5VWVJLWZlSkp4bDltM3pQaXN1MHJBUWQ2NnV1UnFQeG05SWQ3akZJczRxd0lmaDVvd2R4R2VXQWZ2T2pLWXQydGowVDMtUWhYUTBNMzd0emxJUldOcHJ3SVF6UjcxUU5Tdm9SdDNkUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1550
    },
    {
      "date": "Jul 31",
      "text": "Iraq states it had no prior knowledge of US-Saudi attacks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi2AFBVV95cUxNUndhOUUzYVZnLTU2czFvMzduUEVsdllVRWo0SGNSWUNGNC1yV25nc1dMRU5KWVl2cmd3cW45Z3JlOHlxY0IzZkpxbzl3MFpGV3NaNTRtVTF1c2lkbnZTeGhsRDFkOGNMQXNXRDczVElxRWZGZlI5dnpnTzYxYlRhaHdRVWMxWW9CaF9nRWlaQ2VrUERyTThhdDBYVFRPc3R5VUxBRmVUdlNRc2lGLTk2WVJNQy1TRm96U0ZQLVhWaFpENEpMUVJzQ2VhM0VGbTZzV3hRNDZ5ak0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "theguardian.com",
      "latestSinceUpdate": 1550
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
      "perspective": "US/Israel",
      "headline": "US and Israel Intensify Strikes on Iran, Target Hezbollah",
      "summary": "The US is planning and executing fresh, heavy strikes on Iran, often in coordination with Israel, while also targeting Hezbollah infrastructure. President Trump is reportedly pressuring Israel regarding a Hamas disarmament deal amidst the widening conflict.",
      "tone": "strained",
      "latestSinceUpdate": 1545
    },
    {
      "perspective": "Iran",
      "headline": "Iran Vows Retaliation, Threatens Hormuz Passage Amid US Strikes",
      "summary": "Iran has vowed to make the US 'pay the price' for civilian casualties and has responded to US strikes by attacking tankers in the Strait of Hormuz, declaring passage 'not feasible.' Iranian leadership urges citizens to stand firm against the enemy as strikes intensify.",
      "tone": "defiant",
      "latestSinceUpdate": 1545
    },
    {
      "perspective": "Regional Impact",
      "headline": "Hezbollah Adapts Tactics as Regional Conflict Widens",
      "summary": "Hezbollah is increasingly employing FPV drones, requiring Israeli overmatch, while the IDF continues to destroy its tunnel networks in South Lebanon. Iraq has denied prior knowledge of US-Saudi attacks, highlighting the complex regional dynamics of the escalating conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 1545
    }
  ]
});

export default LATEST_SNAPSHOT;
