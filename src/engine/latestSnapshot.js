export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2578,
  "lastUpdated": "2026-10-14",
  "lastSyncedAt": "2026-10-14T06:44:18.354Z",
  "warDay": 229,
  "summary": "Tensions in the Middle East are escalating with Iran increasing attacks on shipping in the Strait of Hormuz, while US and Israeli leaders weigh military options amidst regional proxy actions and political deadlines.",
  "lastNarrativeUpdate": "2026-10-14",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 1,
    "summary": "No active ceasefire is in effect for the broader US-Iran conflict, though a previous ceasefire in Southern Lebanon appears to have collapsed."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
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
    "nuclearIndex": 30,
    "escalationLevel": 85,
    "oilDisruption": 80,
    "tradeImpact": 73,
    "sanctionsPressure": 64,
    "globalPressure": 82,
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
      "date": "Oct 13",
      "text": "President Trump states his administration will make a decision on Iran very soon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiZkFVX3lxTE1sUVVsRzk1YmJUaEJHNGVCRlVUWGE1T3lacU80aW1WYTRTYUJ3R1g3TnZEMXBNOHRXbXZZdWY4dmhRNVRZREI5ZXVaMm4yb3lvRnlyWTU5UTBIY3Fia3JxSEU4cG4xUdIBa0FVX3lxTE9uZk5LbGpDQTNEYWxaQ2VwX3hLc2ktWWU1SmRvUVlwbk4wUjJ4LUZ1MUZJSUsxNUFjWWhVSWFjNFRmVXpHa01rckRQMW1XTVdTWUJPTWVfQVZMZmJCVjg3M29lZVcwSlZacVBR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2578
    },
    {
      "date": "Oct 14",
      "text": "Iranian attacks target 6 ships near the Strait of Hormuz in one day, marking the highest number since the war with the US began.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi1AFBVV95cUxOOGxibXEtZ2FFRTM2RGpqU0FpNTRfb3RLakt5UENVc0pzUGNTWFl3dVA1ZDlFYkUwQWpnN3dCMkJuT0NIMU1JWkNrWkh1UUczZkE2M0Q4R3pEc3lwN2Y5QzdEQXdJc3RzUVBSOFhDbUdkZW5RZnJtREQ1ZUlmLUlNMFhRMWl2T1Z4NXg1SkJFZnY5NmdPVFE1TlN0RWFDRVNoSkhGOXJfT2JseGxtY1c4MW9lbzdmcjcycnh5VDVUNG9GallPMjQzLU1JZkxWNmluZVg1Rw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2578
    },
    {
      "date": "Oct 14",
      "text": "Oil prices rise following reported attacks on ships in the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiiAFBVV95cUxQR3RaUVhPOFNYbnB6QUtOZkdmQWwyS2FwajB3cFphZ3h2dVFGN1QxR2d4N3R5U2tkS0x0VE1RRm5KUTJRWlB4RzZFcmNIbXY3d0VadWhPSVlqcFd6NTlyYjE4NXRCX0Naelc0cVoyYk5xSzFFdWoxcC1YNkpwWFpxdVo0WWcyZTBj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2578
    },
    {
      "date": "Oct 14",
      "text": "A teenager was killed and 24 injured by Hezbollah munition found on a hike near the Lebanon border.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitAFBVV95cUxQSUtCZjhxcXBhSTFRWk5BZWo5Q2lJU3AyOC15aUd2OTNCdExKNms5dlg4Y04wMXAxd2NWV0N6NXFqV241STNDZ3VMZ1p5eDQtMXl1LVA1ZmlOdF9JdThNbnJYMllvbXBPVGN4dG45OVhMR2c3QjBCeWxjLXV4SWY0VXlRa0wzRi04TkptLUlnZnVlZXVySWNNYUdVYzJfOFgxRmNfVUxkWDNndzc2dHVzYjdCNWHSAboBQVVfeXFMUG5IazNhSFk0RUhNQ3dneFdnR3pBM0tIYktZRS1JLWg3dVF0S2ZKbURqdnd0SFV5SEJuYlR6d3FtTGQtd2VmWDFtMlBTN09nbDNrODN3UGZpUE9xMDFfWFdtb0hDZC1pdGJkYUgyS2hWcm1FbFhDLXdtdFJoS0NMOTZ3ZVlXQ1VEejcyeFBCZC1RN0hhdTNkM1JQcGV2aC0taEh0R19qZnhnNHF5SUNIaGZNYjB6SFBKSkF3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2578
    },
    {
      "date": "Oct 14",
      "text": "Hezbollah is reportedly preparing for war with Israel and upgrading its explosive drone capabilities.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiXEFVX3lxTFBSdXA5WmFoRnRPcUx2UU9sU0JOcFlGa3R1Y0t6Mk5fV3lnbGVDampPY0c3ZVVuSENPUDhpVWd6ekZVZGdPRTRvNnprU3lucHRtWFlOUnI0TEx3eDlv?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 2578
    },
    {
      "date": "Oct 14",
      "text": "Israel’s destruction of Southern Lebanon intensified after a previous ceasefire.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 2578
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
      "perspective": "Iran's Resilience/Defiance",
      "headline": "Iran's Regime Stands Firm Amidst Conflict",
      "summary": "Six months into the conflict, Iran's regime maintains its stance, rejecting U.S. proposals as insufficient while its leadership defies external pressures. The country continues to support regional proxies and adapt its tactics.",
      "tone": "defiant",
      "latestSinceUpdate": 2577
    },
    {
      "perspective": "US/Israel Strategic Dilemma",
      "headline": "Pre-Election Strike Dilemma for US and Israel",
      "summary": "U.S. and Israeli leaders face a complex decision regarding potential strikes on Iran, weighing pre-election timing against the ongoing conflict and Iran's evolving tactics in shipping lanes. This highlights a strategic impasse.",
      "tone": "strained",
      "latestSinceUpdate": 2577
    },
    {
      "perspective": "Regional Escalation & Proxy Actions",
      "headline": "Middle East Sees Continued Escalation and Proxy Attacks",
      "summary": "The Middle East experiences continued escalation with Houthi missile strikes on Saudi Arabia, a tanker attack in the Strait of Hormuz, and increased U.S. casualties. Suspected Iranian-directed plots at U.S. bases further contribute to regional instability.",
      "tone": "anxious",
      "latestSinceUpdate": 2577
    },
    {
      "perspective": "Humanitarian Impact & Support",
      "headline": "Civilian Casualties and Proxy-Led Aid Efforts",
      "summary": "The conflict continues to result in civilian casualties, including an Israeli child, while Hezbollah initiates housing compensation programs in Lebanon. This aid is reportedly backed by Iranian funds, highlighting the humanitarian consequences and proxy support.",
      "tone": "neutral",
      "latestSinceUpdate": 2577
    }
  ]
});

export default LATEST_SNAPSHOT;
