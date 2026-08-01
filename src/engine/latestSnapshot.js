export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1551,
  "lastUpdated": "2026-08-01",
  "lastSyncedAt": "2026-08-01T13:48:45.277Z",
  "warDay": 155,
  "summary": "The US-Iran conflict continues to expand, drawing in more regional actors like Egypt and Kuwait, while the US and Israel prepare to target Iranian energy infrastructure and tensions persist in Lebanon.",
  "lastNarrativeUpdate": "2026-08-01",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 21,
    "summary": "No active ceasefire is reported for the ongoing US-Iran conflict, though diplomatic efforts for Gaza peace are mentioned."
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.95
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 95,
    "oilDisruption": 90,
    "tradeImpact": 82,
    "sanctionsPressure": 65,
    "globalPressure": 88,
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
      "date": "Jul 30",
      "text": "Egypt struck for the first time as US-Iran conflict pulls in more countries.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBDZ0dMZk1tUGZDZlItTm1MSmR2ODExY2t6VFVCeC0xTy1IVENybUZIalVuSmw1cWI0ZlN3MTNvX3ZxMy1aUlFiSkg5ejVwQzhxc3loWmRRUEFoVnZIdUd6cWpaSFZyU1hPWWpLSFFB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1551
    },
    {
      "date": "Jul 30",
      "text": "Iran warns US will 'pay the price' for Qeshm civilians killed.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQc2hscnktWGwtTC1yNGhEZTBmb1NLNzk0OHFRamdxRUdFdE1TSzNCemRsVHRUVDNGRnROaUlYV0lYZ3Y5ZENna0JWd1g0bkZkeDhNeFppTGQwbWhfNS1iYW84ZmhyS3lfNTFiV1EzUGVuTlFzb0VRWFdxenlPNU03QkwzX2VJSGxzdTZtc0tDcFZYUlN2V056bXdWQXAtSDAxTVdYQ1NLWkhWVl9mX1lPSC1zanQ4SWdlZVJB0gHAAUFVX3lxTE1nczg2YVppb3k2UVRva2lOTEs5aTEtSU1GMm1DbnZNNF9iZGl6TC1CdHo5dTFhUUR3dWZ6RTk2c0hwTTZuOGJ0b2VpbTR6X25jcEIzSmt0NTF5bk1oWFhkTlprQTVpUUxEM0FKQ040djNRZE1MSzBOcTBqdTdUQ1pMLUYzN2JKU29EUXhyQnY1QjlyRnlFN2lPRFRHLXZJVXJrb2pmNGUxMjU1eE9tVDdGZkxDc19fS1FiUkdNZ3Z0Rg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1551
    },
    {
      "date": "Jul 30",
      "text": "Iran attacks Kuwait and threatens the region with 'flames of war'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxOdFZfbjV6VmtqVkVPRlJlRVg3ZkxjQmNZNlN4ak9qX0NsSnc1QmZYajVfUnJjbUdiZzd1aUZYSWVVcGxIanN1cURTOHdhLUUzQXN4Z1RuVjh1S3JsMEItSXpLN3AzSUwzRU5aOW94VDR2ZUVIS0hWSlNDQUtsdXZmTmlHdGhhRVBHc1ZPNWhwcTNDSDhQNzJZaTdKdjdzTlg1alprdXdwczU3VERIaV9RYjdVWkI2WUnSAbwBQVVfeXFMT0VBcVFNMTd2SURuWFBfMGxSNEtfZkhaX3haWGhaSndyMzZubWtMRGE0dmhSX0RZd19yRlM2MjFSM0JYRG5Rb1VHTXEtU0pfSURBTURNRVJLVlFHeVAxZ1pwWFpzdjlKTHozWnZ1aFpCZE0zeVdSYjhEaEpiejQ0WG5RR2NoSElSVzFYSWZYYnhvcXFwWm5Kc0pIVllHaVB4bXA4UWxvcmFNRHZqNnFTM2dDTzhvbVdyVERDOVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1551
    },
    {
      "date": "Jul 30",
      "text": "US and Israel are reportedly preparing to bombard energy-related targets in Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxPWlZrblhRajBMcWNtSEd2ZmhsUmN0ZmFpTVFoZWlsS2Q4c0VQbWhlUV92YU1vdTNoVEMyd0t4bjJWaERIQ2VKeWdYUnVxQ2JlUTQ1dkRLY3Z2ZlpOM0hHMkVfdXd5alpUMWk5R1ZGUjN3V240dXQzTnk2Yjk0b1QwYVBjSQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1551
    },
    {
      "date": "Jul 30",
      "text": "Iraq states it had 'no prior knowledge' of US-Saudi attacks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMi2AFBVV95cUxNUndhOUUzYVZnLTU2czFvMzduUEVsdllVRWo0SGNSWUNGNC1yV25nc1dMRU5KWVl2cmd3cW45Z3JlOHlxY0IzZkpxbzl3MFpGV3NaNTRtVTF1c2lkbnZTeGhsRDFkOGNMQXNXRDczVElxRWZGZlI5dnpnTzYxYlRhaHdRVWMxWW9CaF9nRWlaQ2VrUERyTThhdDBYVFRPc3R5VUxBRmVUdlNRc2lGLTk2WVJNQy1TRm96U0ZQLVhWaFpENEpMUVJzQ2VhM0VGbTZzV3hRNDZ5ak0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1551
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (18 headlines)"
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
