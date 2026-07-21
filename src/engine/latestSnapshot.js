export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1406,
  "lastUpdated": "2026-07-21",
  "lastSyncedAt": "2026-07-21T22:39:26.786Z",
  "warDay": 144,
  "summary": "The US and Iran continue to exchange attacks, resulting in US troop deaths and tanker incidents in the Strait of Hormuz, while a security pilot begins in southern Lebanon.",
  "lastNarrativeUpdate": "2026-07-21",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 14,
    "summary": "No active ceasefire between US and Iran; a localized security pilot has been initiated in southern Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 95
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
      }
    }
  },
  "global": {
    "nuclearIndex": 75,
    "escalationLevel": 85,
    "oilDisruption": 90,
    "tradeImpact": 80,
    "sanctionsPressure": 64,
    "globalPressure": 84,
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
      "date": "Jul 20",
      "text": "Another tanker attacked in Strait of Hormuz, with crew abandoning the vessel.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQajNHTE9aUmxpa2RIMy1jNjZ4RmgzZlk2OXE3ZXBtRzdxaUpnQldzeUtxaHh6Z3VTQzZMUGNtZ1oxNE5lQzZwLVhnX3BTZWk1OVBVT1ZiNFFtMnoyRDhHbFBnV0pFdTdNcnBKdWVuT0RidVJoWXFCYkdlNDE2V1hmZ1VhUlZhLXExZTZjOHo1YmRYMm5ra1U4RE9DU29CMVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1406
    },
    {
      "date": "Jul 20",
      "text": "US completes more strikes against Iran for 10th consecutive night after Trump warning.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9vNkw0Q1VPUDBXanZUeUtTZFpFYmV1ZWJwazYzd29VY1dKM19EMmJsdEFCNFg5cU94MFZNNS1JbjZxRWZFd0p1T2NpWkNlWGl5M2FTa1hRa1dsTm1wNjZraHBzOXhBVnlYT2ZGcGhR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1406
    },
    {
      "date": "Jul 20",
      "text": "US announces another troop death, identifying two soldiers killed in Iranian attack in Jordan.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxNWXNJYmdvY0pfYnlkVm5aV1RZV2JrMl9FbkE4cElqZnJXR05ocDd0RERIVEFnMHRncEI1RUhaR2pxbGV6U1VEalNPM3dzTnZjcVduclhwNnNRZzR5cnIxMkZzaDJzV21zdHY4ZVhRTmVsRk4wNDY2MTFQX05zM21GVDNZaUY3b0tUckIzUTF3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1406
    },
    {
      "date": "Jul 20",
      "text": "Trump warns US will strike Iran nuclear sites if conflict escalates, as drones are shot down near US consulate.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxOYUQ0YUE0RkJQa1lJYzk3WG4yLVM1TlNFZ2VUNEhGLU1TUUJvMDFiTWpYSFZNek5BNW9CWHJqcVJDS0owdHVtVDdiVTBMelhIdTBEYnlXUV9yNXd0VDhSUTB4N1hkOFVSbWVlZkZSLUhVWDhsQkhPOUtTNmFQLW0yTS1ROFQ2UQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Fox News",
      "latestSinceUpdate": 1406
    },
    {
      "date": "Jul 20",
      "text": "Houthis announce Saudi blockade, prompting Trump's pledge to 'take care of' the group.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1406
    },
    {
      "date": "Jul 20",
      "text": "Israel and Lebanon begin US-backed security pilot in southern Lebanon after Israeli withdrawal.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1406
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (20 headlines)"
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
      "perspective": "US Government",
      "headline": "US Vows Retaliation for Soldier Deaths",
      "summary": "The US government, including former President Trump, has vowed strong retaliation against Iran following the deaths of US service members. Multiple strikes have been launched in response to these casualties.",
      "tone": "defiant",
      "latestSinceUpdate": 1394
    },
    {
      "perspective": "Iran",
      "headline": "Iran Declares 'Full-Scale War' Amid US Strikes",
      "summary": "Iran asserts it is in a 'full-scale war' with the US, continuing its actions and supporting regional proxies. Attacks on US forces and critical infrastructure targets are reported.",
      "tone": "defiant",
      "latestSinceUpdate": 1394
    },
    {
      "perspective": "US Lawmakers",
      "headline": "Lawmakers Demand End to Iran War After Casualties",
      "summary": "Some US lawmakers are calling for the termination of the conflict with Iran following recent US military deaths and injuries. Concerns are rising over the escalating human cost of the war.",
      "tone": "anxious",
      "latestSinceUpdate": 1394
    },
    {
      "perspective": "Israel",
      "headline": "Israel Targets Hezbollah Amid Regional Tensions",
      "summary": "Israel continues to conduct strikes against Hezbollah in Lebanon, warning of broader regional attacks from Tehran. Israeli forces are reportedly surrounding Hezbollah fighters in tunnel networks.",
      "tone": "strained",
      "latestSinceUpdate": 1394
    }
  ]
});

export default LATEST_SNAPSHOT;
