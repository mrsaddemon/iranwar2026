export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 943,
  "lastUpdated": "2026-06-12",
  "lastSyncedAt": "2026-06-12T09:17:16.312Z",
  "warDay": 105,
  "summary": "Trump claims a deal to end the war with Iran is close and has canceled planned strikes, though Iran states no deal is finalized, amidst ongoing US strikes on Iran and Israeli military actions in Lebanon.",
  "lastNarrativeUpdate": "2026-06-12",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 100,
    "summary": "Despite claims of a deal and canceled strikes, active conflict continues between the US and Iran, and Israel and Hezbollah."
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 85,
    "oilDisruption": 75,
    "tradeImpact": 69,
    "sanctionsPressure": 64,
    "globalPressure": 81,
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
      "date": "Jun 11",
      "text": "Trump cancels planned strikes and claims progress on a deal with Iran.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifEFVX3lxTE1QY0JRWVhUT2wwN2h5ZFRETDRoUktOYngxcTFZVXNLQlIwNTBfN1JBaE9qLXlPT096VF9leUFHOVZMUEx4WnRVT1JscW1fRnlvRU02eFhRODZZY1UyU0pYakFfbWtiWmtPSnppQW9yeE1CSFBRaXdnZElJZGs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 943
    },
    {
      "date": "Jun 11",
      "text": "Iran states no deal has been finalized despite Trump's claims.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 943
    },
    {
      "date": "Jun 11",
      "text": "US launches new strikes on Iran, which retaliates by firing back at Gulf states and Jordan.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxPU25kWmtrYVNpdHBud0dxUDhZdUx0OFMyQUxOWER5cXowaW8zWk9pdWNBeWdycUNTTXp4VjlmSWF1UDRzOEpBdl9RRTlYeno2cXBHUEJuVDJaTk05dldzaEwza29fR2I1NmpsZU5JZUlUWjNoWlZUTXFiaFFLYm9oSHR5Ukk4X2s5X193eU5fVm5KWjZmSHBsTnJ2U29JU1lVb3ZtLUZuTUpDNHM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 943
    },
    {
      "date": "Jun 11",
      "text": "Kuwait closes its airspace; Israel warns of launches from Lebanon after US strikes in Iran.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMickFVX3lxTE5JRzk3dDJ5dEFyWGw2dGY2Z0hxUy12c29QVElKMUxxNUYzeVdMVXBiWm9vZUlxYzBzakpMOGsyMVhLZ2p1WnByX2dkVWVwNi1uNmt2UWZwdU5ZaG90Vm9DQWs5OGhUSWtfdGlYTjU2TVA3d9IBd0FVX3lxTE1MeFk0ZWNVVUM5X2xWaVRCN1IyVDFxMjcwWERtUjlXWS10UmFMdVBpMlZ4akhDSWRBR09QVjA4SjBUX0VhVnl6YTMtOFdwVEd6Q1R5S2tVSmJQZ1c4YlNCTXIxemM5Z2w1RWljYl9zQ21EWFc0bGxN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 943
    },
    {
      "date": "Jun 11",
      "text": "IDF is poised for an offensive against Hezbollah in southern Lebanon; Israeli air strikes hit Tyre, killing 12.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 943
    },
    {
      "date": "Jun 11",
      "text": "US bases in the Middle East face a second night of retaliatory Iranian attacks.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE1SZDdKa1gxeUJSNTBHc1hsN2preWRiM1RqbjRlVDlYUzRjc0twS01jX25uWG83dk1ScmlnSUZpLUE3ckVOSGJRZmxjSXo1dXRYdmMtLWZ1OEY3SFRWU1Y2SERvZmpHeFZUanRqdTc1c2pDMjFzdUVz?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 943
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
      "perspective": "US Administration",
      "headline": "Trump claims imminent Iran peace deal, cancels strikes",
      "summary": "President Trump has announced the cancellation of planned strikes on Iran, citing a breakthrough in talks. He claims a 'settlement' has been reached and a peace deal could be signed soon, potentially opening the Strait of Hormuz.",
      "tone": "hopeful",
      "latestSinceUpdate": 941
    },
    {
      "perspective": "Iran",
      "headline": "Iran denies final decision on deal amidst retaliatory attacks",
      "summary": "While President Trump speaks of an imminent deal, Iran has stated that no final decision has been made regarding a settlement. Iranian forces are reportedly engaged in retaliatory attacks against US bases and exchanged fire with US forces in Hormuz.",
      "tone": "skeptical",
      "latestSinceUpdate": 941
    },
    {
      "perspective": "Regional Security",
      "headline": "Middle East remains volatile despite de-escalation claims",
      "summary": "Despite claims of a potential US-Iran deal, the region remains highly volatile. Kuwait has closed its airspace, Israel warns of launches from Lebanon, and Israeli air strikes continue against Hezbollah targets in Lebanon.",
      "tone": "anxious",
      "latestSinceUpdate": 941
    }
  ]
});

export default LATEST_SNAPSHOT;
