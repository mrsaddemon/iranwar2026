export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 901,
  "lastUpdated": "2026-06-07",
  "lastSyncedAt": "2026-06-07T15:02:48.491Z",
  "warDay": 100,
  "summary": "The 100-day Iran war continues with a collapsed ceasefire, marked by direct strikes between the US and Iran, escalating conflict between Israel and Hezbollah in Beirut, and increased tensions around the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-06-07",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 100,
    "summary": "An attempted ceasefire has collapsed due to direct military exchanges between the US and Iran, Israel's strikes in Beirut, and Hezbollah's rejection of the truce."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.7
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.75
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "Jun 06",
      "text": "US and Iran launch strikes, further straining ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxOaThld29lUFRLdTRVVlNPOV94LUxWVko2UkRZbXVpWGpVZnAxV2tLNDkzMHZuSEdyQzhSZXRLblhWanRyTG4yNE5VQjEzMFk0ODQybTBidEVWQzVaSlI5T2dfNWJwS241ZXVnRU5rZS14X0VndzJRWnJhNGJNbGFPWk13?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 901
    },
    {
      "date": "Jun 06",
      "text": "Israel strikes Beirut’s southern suburbs, claiming to hit Hezbollah sites.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMirwFBVV95cUxNZ0wzWXQ1SVBDUkVycWowRndFSWx5UUtqM2lMR2QzZ3JqTy1lb1kzamw2MTRaYmdyNFJQNW9MYmFjbmtNZEQtZ3lqQXVVSTF3R0hhYVgtWHk4Y2p2VTB5YlhDMmY0M2R4S3dHOEs1QUtNZWY2Y1ZHR29FWXF1LVZGd3NWTnRTVEZEMjIydUxpQWRiRlRiampEQ284LWo1RkJpOTdNSndSdVo1bFc0VlVJ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 901
    },
    {
      "date": "Jun 06",
      "text": "Hezbollah rejects US-backed Israel-Lebanon ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBDX19HLUpiZ2wzMzJfd0VNaUxxazNlXzJXMkRrM2tkUkk5MmtVYllkUUZSWWR3d2RydXRNSzdKdHRqQ281Mkk5ZWpRamlrM3lqTll5LWNQQW5rUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 901
    },
    {
      "date": "Jun 06",
      "text": "Iran launches missiles and drones toward Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxNMnhrZmU1dEJXQzRJQWFaelI4LVZlUE01ZERhS3VKUzhsRXNEa3N1elZRc3VTRXlnclJvNTNyM1FUOFpLdjUxNmplY0xub29CUzRmZFQ1ZThsT0hsT29IcU96TjlJeVk2Y2s3eHUtN0FVekRhRnhuVG0xMTBTSC1sal9JVkVGalY4UTFvOS12UXppY1RJdHVHaUFpOEJOenJiV1RZdmp1aVpqS2xVOElPYWh2VHJuZ3M?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 901
    },
    {
      "date": "Jun 06",
      "text": "U.S. military shoots down Iranian drones launched toward Gulf allies and Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiigFBVV95cUxPSzNfZ04xZUVycUZLbW4xTERjZFVfMlZIdXphTXotR1pna2JaZ2pHM1ZxcTVvekpHOE0zZVlRSndFTDRJcHdVRmlxZXphc2lFQXNhajc1aFJudGREZ0l5blhQTXh1Zl9ZWXc0NUtKUjBURlFBV3JvOHBFYkZtUlE0Zzk0WXEtV2tGaVE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 901
    },
    {
      "date": "Jun 06",
      "text": "OPEC Plus announces plans to boost oil production as ceasefire remains elusive.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 901
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
      "perspective": "Iran",
      "headline": "US Lacks Will, Iran Warns of Wider War",
      "summary": "Iran asserts the US lacks the will for regional stability following recent clashes and accuses the US of violating a ceasefire. Tehran warns that the ongoing conflict could escalate into a wider war.",
      "tone": "defiant",
      "latestSinceUpdate": 896
    },
    {
      "perspective": "Hezbollah",
      "headline": "Hezbollah Rejects Truce, Finds New Purpose",
      "summary": "Hezbollah has rejected a US-backed ceasefire deal between Lebanon and Israel. The group states that the ongoing Israeli offensive in Lebanon has provided it with renewed purpose.",
      "tone": "defiant",
      "latestSinceUpdate": 896
    },
    {
      "perspective": "United States",
      "headline": "US Secures Hormuz, Seeks Regional Stability",
      "summary": "The US military is providing naval overwatch in the Strait of Hormuz, having intercepted Iranian drones targeting shipping. The US also plans to use Iranian assets for rebuilding in Gulf states, signaling a complex approach to regional stability.",
      "tone": "neutral",
      "latestSinceUpdate": 896
    },
    {
      "perspective": "Lebanon",
      "headline": "Lebanese President Criticizes Iran",
      "summary": "Lebanon's president has publicly criticized Iran amidst ongoing Israeli attacks on Lebanese territory. This indicates growing internal pressure and potential shifts in regional alliances.",
      "tone": "strained",
      "latestSinceUpdate": 896
    }
  ]
});

export default LATEST_SNAPSHOT;
