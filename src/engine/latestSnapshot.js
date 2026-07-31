export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1538,
  "lastUpdated": "2026-07-31",
  "lastSyncedAt": "2026-07-31T16:27:07.283Z",
  "warDay": 154,
  "summary": "The US-Iran conflict has significantly escalated with direct strikes by both sides, the involvement of additional countries like Egypt and Saudi Arabia, and Iranian attacks on shipping in the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-07-31",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 21,
    "summary": "No active ceasefire is in effect for the broader US-Iran conflict, though a specific deal allows some Lebanese returns."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 83
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.78
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 63
      },
      "behavior": {
        "precision": 0.65,
        "aggression": 0.88
      }
    }
  },
  "global": {
    "nuclearIndex": 25,
    "escalationLevel": 93,
    "oilDisruption": 85,
    "tradeImpact": 78,
    "sanctionsPressure": 65,
    "globalPressure": 86,
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
      "date": "Jul 30",
      "text": "Egypt was struck for the first time as the US-Iran conflict expands to involve more countries.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBDZ0dMZk1tUGZDZlItTm1MSmR2ODExY2t6VFVCeC0xTy1IVENybUZIalVuSmw1cWI0ZlN3MTNvX3ZxMy1aUlFiSkg5ejVwQzhxc3loWmRRUEFoVnZIdUd6cWpaSFZyU1hPWWpLSFFB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1538
    },
    {
      "date": "Jul 30",
      "text": "US launched a 'heavy wave' of new attacks, hitting dozens of targets in Iran overnight.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxOZUJwNER6Z1d6T0p5aVBwUnpZM2JUQWFxR2pSdVB4cVhCVGZkRDBvcVV4WDMwS0hEUDhpNTdWaEszeURRc1otQnJ3Z0toUlF3bThfN1Zvam5EYlItMU5JVU0yalYyT0RFS29Ycl9WSXZzUnpkQ004SmRfMFR3SUZRdmg0a3FBckd0LVhFMlNB0gGTAUFVX3lxTE1id1NxcERIelVSWk9aamxvSE1tQ3duZkY5VFRPVm5hQzd4bEp6MENxeXNjRlhIczlvbG1ZQ19HeHJxY2JNOE5LVHVqMGhYeGhGa3Z6QjZnNjhQcjRBcHNXeVRObXN4a2l6WUtxcUpTalNYSEdRR3k5dEJKN3lFZjEwcFFzLVFzZkx1NXJsMFByQnJWZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1538
    },
    {
      "date": "Jul 30",
      "text": "Iran claims strikes on two ships in the Strait of Hormuz and a drone attack on a U.S. base in Kuwait.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimwFBVV95cUxPTExVbGpfeGpwRzZoYzd1SlBvaWhnZVJoUXc3ekdDWWZ6alQ2ckh2dzhSV3B5VWVJLWZlSkp4bDltM3pQaXN1MHJBUWQ2NnV1UnFQeG05SWQ3akZJczRxd0lmaDVvd2R4R2VXQWZ2T2pLWXQydGowVDMtUWhYUTBNMzd0emxJUldOcHJ3SVF6UjcxUU5Tdm9SdDNkUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1538
    },
    {
      "date": "Jul 30",
      "text": "Tehran states the US will 'pay the price' for civilians killed in Qeshm.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxQc2hscnktWGwtTC1yNGhEZTBmb1NLNzk0OHFRamdxRUdFdE1TSzNCemRsVHRUVDNGRnROaUlYV0lYZ3Y5ZENna0JWd1g0bkZkeDhNeFppTGQwbWhfNS1iYW84ZmhyS3lfNTFiV1EzUGVuTlFzb0VRWFdxenlPNU03QkwzX2VJSGxzdTZtc0tDcFZYUlN2V056bXdWQXAtSDAxTVdYQ1NLWkhWVl9mX1lPSC1zanQ4SWdlZVJB0gHAAUFVX3lxTE1nczg2YVppb3k2UVRva2lOTEs5aTEtSU1GMm1DbnZNNF9iZGl6TC1CdHo5dTFhUUR3dWZ6RTk2c0hwTTZuOGJ0b2VpbTR6X25jcEIzSmt0NTF5bk1oWFhkTlprQTVpUUxEM0FKQ040djNRZE1MSzBOcTBqdTdUQ1pMLUYzN2JKU29EUXhyQnY1QjlyRnlFN2lPRFRHLXZJVXJrb2pmNGUxMjU1eE9tVDdGZkxDc19fS1FiUkdNZ3Z0Rg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1538
    },
    {
      "date": "Jul 30",
      "text": "Iraq says it had 'no prior knowledge' of US-Saudi attacks, as more countries are drawn into fighting.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi2AFBVV95cUxNUndhOUUzYVZnLTU2czFvMzduUEVsdllVRWo0SGNSWUNGNC1yV25nc1dMRU5KWVl2cmd3cW45Z3JlOHlxY0IzZkpxbzl3MFpGV3NaNTRtVTF1c2lkbnZTeGhsRDFkOGNMQXNXRDczVElxRWZGZlI5dnpnTzYxYlRhaHdRVWMxWW9CaF9nRWlaQ2VrUERyTThhdDBYVFRPc3R5VUxBRmVUdlNRc2lGLTk2WVJNQy1TRm96U0ZQLVhWaFpENEpMUVJzQ2VhM0VGbTZzV3hRNDZ5ak0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1538
    },
    {
      "date": "Jul 30",
      "text": "Southern Lebanese towns near Beaufort Castle were hit by Israeli strikes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNS1RTYUVHd1dBYnRyXzczZ1NvTlNfZEVHN2ZlZGV0RERJMFk2RjNRM1k5UnJPMFp5M2E2cjdYa2tnSjhSelZKMTVmODkxTnppbll3cjFpV1FXTEJXQ01TeGZ2ODNOWlZPeGxVdzNGQVhJZkRDZTllckNTeXQxOG1SX0tiTTVxUmNrRlRNUmJMeTg4Q2RXU0RrZmVmdUV1SFpnNTdhR0NScEJMcFAyZmIzNm1wVEJRM094cElZ0gHAAUFVX3lxTFBEN2tZZW5aejRrUFB4Qzc2NHJjNEs0Rk1JTFVHSE1wcmJHQUlCQjlUS0VTODlodG5JRHlyRWU1bGxGTG9BQ0JDN0xONnJ4b3ZaeXpCVjlRR3dKdGVFV29fR2hLWWs4VUE1NG5ueW5xSUw0NWxPdTQ2cDNGQWdlYXZNdkFOcWNfcVRoY213U25DM0RkYkozNExwY0JpVE1TcDQ4Z21IZGhPWnlIWTFpSlB3OHR1MkpyMEEwUmR5N0wyVw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1538
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
      "perspective": "US/Allies",
      "headline": "US Responds to Attacks Amidst Regional Expansion",
      "summary": "American forces are actively responding to attacks on their troops by hitting Iranian targets, while also navigating the expansion of the conflict to new regional fronts. Concerns are being raised domestically regarding the treatment of wounded US personnel.",
      "tone": "strained",
      "latestSinceUpdate": 1532
    },
    {
      "perspective": "Iran",
      "headline": "Iran Vows Retaliation and Stands Firm Against Enemy",
      "summary": "Iran views recent US actions as requiring retaliation for civilian casualties and urges its population to remain steadfast against perceived enemies. Tehran also claims to be nearing a deal with the US, even as it tightens its control over the Strait of Hormuz.",
      "tone": "defiant",
      "latestSinceUpdate": 1532
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Israel Engages Hezbollah While Halting Iran Strikes",
      "summary": "Israel is conducting air strikes in Lebanon and engaging Hezbollah forces, including demolishing tunnels. Simultaneously, Israel temporarily halted strikes against Iran following US diplomatic claims, indicating a complex and multi-front security situation.",
      "tone": "anxious",
      "latestSinceUpdate": 1532
    }
  ]
});

export default LATEST_SNAPSHOT;
