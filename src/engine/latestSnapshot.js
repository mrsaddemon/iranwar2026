export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1552,
  "lastUpdated": "2026-08-01",
  "lastSyncedAt": "2026-08-01T14:47:54.418Z",
  "warDay": 155,
  "summary": "The US war with Iran is escalating, marked by regional attacks, threats to shipping in the Strait of Hormuz, and preparations for further strikes on energy targets, while Hezbollah remains active in southern Lebanon.",
  "lastNarrativeUpdate": "2026-08-01",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 21,
    "summary": "No ceasefire is currently active; hostilities between the US, Israel, and Iran are escalating."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.75
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
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
      "text": "Reports indicate the US war on Iran is spinning out of control, with Tehran accusing the US of escalating tensions.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxQd0RNakktUXBuUTQwNVBhMDd2TjhNbVI4YTRMR3BpSmt2d1JDTUY2TkItcmdPaWRRajRFdXpxUXVaUV9uMDdERDYzc1JPT0tnaWlIbGZlbWx0LVlHT3ZpWkpMazNwVHRiLXk2REJMdXpMZzFIN0pibHVZOXVaZTJVNW95eVpYRVVH?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1552
    },
    {
      "date": "Jul 31",
      "text": "Iran attacked Kuwait with drones and threatened the region with 'flames of war' in response to US-Saudi actions.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1552
    },
    {
      "date": "Jul 31",
      "text": "The US and Israel are reportedly preparing to bombard energy-related targets in Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigwFBVV95cUxPWlZrblhRajBMcWNtSEd2ZmhsUmN0ZmFpTVFoZWlsS2Q4c0VQbWhlUV92YU1vdTNoVEMyd0t4bjJWaERIQ2VKeWdYUnVxQ2JlUTQ1dkRLY3Z2ZlpOM0hHMkVfdXd5alpUMWk5R1ZGUjN3V240dXQzTnk2Yjk0b1QwYVBjSQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 1552
    },
    {
      "date": "Jul 31",
      "text": "Iran announced it stopped ships in the Strait of Hormuz, leading to a rise in oil prices and a drop in traffic.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1552
    },
    {
      "date": "Jul 31",
      "text": "The IDF demolished Hezbollah tunnels below southern Lebanon’s Beaufort Ridge, amidst ongoing Hezbollah drone activity.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxPa2xZNWtfdld2Vm9BUEhUWkp0ZnNGUmlDakVadXo3REwxbkR6aXFoMzV4bVpaMnNyN0xPR3Y4Qk41M3dPdjNONWg3b01yb2xOM1ljYjRPZ0dlMnVHSnotYVhSR0ZQREZHWXUtaDhDelpzeFlNTHR2N2VWNXA2UVloMTZ0b1ZNeXB4N0IybWw2cWdwdkdzRkNuSElDRXBrUkYyZGlvZtIBqgFBVV95cUxNOVVpemp2V2VFT1pnN0YxR3d6NnFubzBQRXBuUHBNQmxUWXVCT3dPSWZRaVNOZUJ6OVFiMEtmdnJiT0V6T3p2WHREQ1M4d2FYMXNuM2t1RUx1eUJYdTdmZWd0OWgtQk5mMUNHTzgyTmxxbFhrTGxrTE9tMW1qWm9wcVpMeGVBUk15NnI5UWF4YldfUkZ5YXlRMHc2MTVjc01hVnF2N3NXM3IyQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1552
    },
    {
      "date": "Jul 31",
      "text": "A U.S. general warned the Pentagon about insufficient forces to protect Israel amidst regional tensions.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwwFBVV95cUxQa3h1dDZtLURRWlJPYmlkLXc3UEZlaFhmUTJudm4wSTNtR1JyQk9BaC11VmtJZzE1NXR2MmYtaFphVzdpalpQSUh2WkJaUERLbUlMTWV1NEZWeVdrMDBDUGRLMG9mSGViRE5hazRTdk9RRFlWRklWeEtTNjhzRmVHOUd5YXBzdDBHUWIwblp1TXpOeVZxZFlvWGxkYlkycnpGQ3d1RENMR01zQjdOZ0ZuXzZzRmFSR2NMSlRxTmxnYVVnZHM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 1552
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
