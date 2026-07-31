export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1539,
  "lastUpdated": "2026-07-31",
  "lastSyncedAt": "2026-07-31T18:06:52.885Z",
  "warDay": 154,
  "summary": "The US-Iran conflict has escalated significantly, drawing in Egypt and Saudi Arabia, with Iran striking tankers in the Strait of Hormuz, leading to rising oil prices and continued regional instability.",
  "lastNarrativeUpdate": "2026-07-31",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 21,
    "summary": "No active ceasefire or de-escalation efforts are reported in the ongoing US-Iran conflict, despite some regional deals."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
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
        "aggression": 0.7
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
    "nuclearIndex": 40,
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
      "date": "Jul 30",
      "text": "Egypt was struck for the first time as the US-Iran conflict expanded.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFBDZ0dMZk1tUGZDZlItTm1MSmR2ODExY2t6VFVCeC0xTy1IVENybUZIalVuSmw1cWI0ZlN3MTNvX3ZxMy1aUlFiSkg5ejVwQzhxc3loWmRRUEFoVnZIdUd6cWpaSFZyU1hPWWpLSFFB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1539
    },
    {
      "date": "Jul 30",
      "text": "The US launched a 'heavy wave' of new attacks, hitting dozens of targets in Iran overnight.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxOZUJwNER6Z1d6T0p5aVBwUnpZM2JUQWFxR2pSdVB4cVhCVGZkRDBvcVV4WDMwS0hEUDhpNTdWaEszeURRc1otQnJ3Z0toUlF3bThfN1Zvam5EYlItMU5JVU0yalYyT0RFS29Ycl9WSXZzUnpkQ004SmRfMFR3SUZRdmg0a3FBckd0LVhFMlNB0gGTAUFVX3lxTE1id1NxcERIelVSWk9aamxvSE1tQ3duZkY5VFRPVm5hQzd4bEp6MENxeXNjRlhIczlvbG1ZQ19HeHJxY2JNOE5LVHVqMGhYeGhGa3Z6QjZnNjhQcjRBcHNXeVRObXN4a2l6WUtxcUpTalNYSEdRR3k5dEJKN3lFZjEwcFFzLVFzZkx1NXJsMFByQnJWZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1539
    },
    {
      "date": "Jul 30",
      "text": "Iran struck tankers under US escort in the Strait of Hormuz, leading to an oil price rise.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1539
    },
    {
      "date": "Jul 30",
      "text": "Iraq stated it had 'no prior knowledge' of US-Saudi attacks, indicating widening regional involvement.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMi2AFBVV95cUxNUndhOUUzYVZnLTU2czFvMzduUEVsdllVRWo0SGNSWUNGNC1yV25nc1dMRU5KWVl2cmd3cW45Z3JlOHlxY0IzZkpxbzl3MFpGV3NaNTRtVTF1c2lkbnZTeGhsRDFkOGNMQXNXRDczVElxRWZGZlI5dnpnTzYxYlRhaHdRVWMxWW9CaF9nRWlaQ2VrUERyTThhdDBYVFRPc3R5VUxBRmVUdlNRc2lGLTk2WVJNQy1TRm96U0ZQLVhWaFpENEpMUVJzQ2VhM0VGbTZzV3hRNDZ5ak0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1539
    },
    {
      "date": "Jul 30",
      "text": "Southern Lebanese towns near Beaufort Castle were hit by Israeli strikes, while Hezbollah's use of FPV drones was noted.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxNS1RTYUVHd1dBYnRyXzczZ1NvTlNfZEVHN2ZlZGV0RERJMFk2RjNRM1k5UnJPMFp5M2E2cjdYa2tnSjhSelZKMTVmODkxTnppbll3cjFpV1FXTEJXQ01TeGZ2ODNOWlZPeGxVdzNGQVhJZkRDZTllckNTeXQxOG1SX0tiTTVxUmNrRlRNUmJMeTg4Q2RXU0RrZmVmdUV1SFpnNTdhR0NScEJMcFAyZmIzNm1wVEJRM094cElZ0gHAAUFVX3lxTFBEN2tZZW5aejRrUFB4Qzc2NHJjNEs0Rk1JTFVHSE1wcmJHQUlCQjlUS0VTODlodG5JRHlyRWU1bGxGTG9BQ0JDN0xONnJ4b3ZaeXpCVjlRR3dKdGVFV29fR2hLWWs4VUE1NG5ueW5xSUw0NWxPdTQ2cDNGQWdlYXZNdkFOcWNfcVRoY213U25DM0RkYkozNExwY0JpVE1TcDQ4Z21IZGhPWnlIWTFpSlB3OHR1MkpyMEEwUmR5N0wyVw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1539
    },
    {
      "date": "Jul 30",
      "text": "President Trump declared Hamas to disarm as Saudi military readied for a potential Houthi ground offensive.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxPNDNZZ1IzbDlvbkRLRjJWbXNlYVI1cUh2eUVZUmxPUzJON2hDV2xiYVFyRTR2TWcyQ05YM0hRaGdrUzRBcFN1Ti1YV3I5WG5tdG0takNaMEp6WER1TzFXNEpQR2NFeHN4WFNnTFMwZDhUVkE1dGpWVnpDdG1FVG15c0wwa2I3UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1539
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
