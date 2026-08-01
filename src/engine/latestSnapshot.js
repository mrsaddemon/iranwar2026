export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1548,
  "lastUpdated": "2026-08-01",
  "lastSyncedAt": "2026-08-01T09:24:09.304Z",
  "warDay": 155,
  "summary": "The US-Iran war continues with heavy US strikes and Iranian retaliation, including attacks on tankers in the Strait of Hormuz, while President Trump brokers a Hamas disarmament deal.",
  "lastNarrativeUpdate": "2026-08-01",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 21,
    "summary": "No active ceasefire is in effect for the US-Iran conflict, though a Hamas disarmament deal is being brokered."
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
        "militaryPower": 80
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
        "precision": 0.4,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Jul 31",
      "text": "US launches 'heavy wave' of new attacks on Iran after attempted attack on American troops.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxOZUJwNER6Z1d6T0p5aVBwUnpZM2JUQWFxR2pSdVB4cVhCVGZkRDBvcVV4WDMwS0hEUDhpNTdWaEszeURRc1otQnJ3Z0toUlF3bThfN1Zvam5EYlItMU5JVU0yalYyT0RFS29Ycl9WSXZzUnpkQ004SmRfMFR3SUZRdmg0a3FBckd0LVhFMlNB0gGTAUFVX3lxTE1id1NxcERIelVSWk9aamxvSE1tQ3duZkY5VFRPVm5hQzd4bEp6MENxeXNjRlhIczlvbG1ZQ19HeHJxY2JNOE5LVHVqMGhYeGhGa3Z6QjZnNjhQcjRBcHNXeVRObXN4a2l6WUtxcUpTalNYSEdRR3k5dEJKN3lFZjEwcFFzLVFzZkx1NXJsMFByQnJWZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1548
    },
    {
      "date": "Jul 31",
      "text": "Iran attacks Kuwait and threatens the region with ‘flames of war’.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxOdFZfbjV6VmtqVkVPRlJlRVg3ZkxjQmNZNlN4ak9qX0NsSnc1QmZYajVfUnJjbUdiZzd1aUZYSWVVcGxIanN1cURTOHdhLUUzQXN4Z1RuVjh1S3JsMEItSXpLN3AzSUwzRU5aOW94VDR2ZUVIS0hWSlNDQUtsdXZmTmlHdGhhRVBHc1ZPNWhwcTNDSDhQNzJZaTdKdjdzTlg1alprdXdwczU3VERIaV9RYjdVWkI2WUnSAbwBQVVfeXFMT0VBcVFNMTd2SURuWFBfMGxSNEtfZkhaX3haWGhaSndyMzZubWtMRGE0dmhSX0RZd19yRlM2MjFSM0JYRG5Rb1VHTXEtU0pfSURBTURNRVJLVlFHeVAxZ1pwWFpzdjlKTHozWnZ1aFpCZE0zeVdSYjhEaEpiejQ0WG5RR2NoSElSVzFYSWZYYnhvcXFwWm5Kc0pIVllHaVB4bXA4UWxvcmFNRHZqNnFTM2dDTzhvbVdyVERDOVU?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1548
    },
    {
      "date": "Jul 31",
      "text": "Tankers targeted in twin incidents near Strait of Hormuz off Oman, with one struck by 'unknown projectile'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitgFBVV95cUxOMnAtNkJ3RUgyTDh6cHV5eU4za0JjZl9XZF9SdDFHUmplbFZGdHBLUFRoR2tMUkM5cVV5bGhvZDd3eHlkVktXRl9VdjBIOVdCSjJiai1Rc2V4NlByVUpTTng1RjBHOFFMUjFGYlNsOFc3THI3aHZFU0dkV0JOdXQ0MmdsN29EYk1DR29mX3ZGWkIzeW0zUUQzRElGcXl2cGl4V19leGNoV2ozNVctSlU3amdJQTFDd9IBtgFBVV95cUxObmVHVDVyTTBLaWc2QkNxQjEycDJXOEVicnlLY3lqVmIyS1o4MGhnRnhJdVlpSkxUa19QTkhOdFRFQUJsc3JDZFJYcVhKY2dHOExBc2VWSnpYeWI3eFJOWWF2OUhuWDBKQXNYYkplY3o3emR6elRCRDEyYWl2UEdsd0RrSXBaR1hWRERUVF9SVUJXNllVR3VPekFhdDZmT1ZMTktiRG04ZGppUnN2d2NIUWp6Q1RoUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "South China Morning Post",
      "latestSinceUpdate": 1548
    },
    {
      "date": "Jul 31",
      "text": "Iran strikes tankers under US escort in Hormuz strait as Trump gathers cabinet to discuss war.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxQa0Nlc3FFeTZIM0dHUG8wYm9yaXhpOFBRSzJNQ09nZW9aUHlCWU5hU1ZZOE1XVXdhcXVmZnJiZzgtaGdSbkU2Y2FsZXlWOXp1LXdGT2t3MHhGZGlwS095dURvODFaSUlSRER3aHl1Z3ZMbVlPWThNUExqTnZuZ2ZwZmxOUmJ2bXo4d1RwX3VILXpiLW1fTEgxMm5NQ0RrZjQ3cUlGZG5DY2FGRmQwdHkwcjJn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1548
    },
    {
      "date": "Jul 31",
      "text": "Trump touts progress on Gaza peace effort and brokers a Hamas disarmament deal.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9iVnVVVTJXMFNiMEdId3ZvWWhnYVNhUHZTOU0xc2VfQ3ZCZUhfVzlCaldRWFJCXzJzOUQ0SUh3b0tpVUtmNzZwbEphNVpPVkh1eWRfd21rdGhScEFvUmVrUGFSbWZOMTdIX2Y3bGh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 1548
    },
    {
      "date": "Jul 31",
      "text": "IDF demolishes Hezbollah tunnels below southern Lebanon’s Beaufort Ridge.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipAFBVV95cUxPa2xZNWtfdld2Vm9BUEhUWkp0ZnNGUmlDakVadXo3REwxbkR6aXFoMzV4bVpaMnNyN0xPR3Y4Qk41M3dPdjNONWg3b01yb2xOM1ljYjRPZ0dlMnVHSnotYVhSR0ZQREZHWXUtaDhDelpzeFlNTHR2N2VWNXA2UVloMTZ0b1ZNeXB4N0IybWw2cWdwdkdzRkNuSElDRXBrUkYyZGlvZtIBqgFBVV95cUxNOVVpemp2V2VFT1pnN0YxR3d6NnFubzBQRXBuUHBNQmxUWXVCT3dPSWZRaVNOZUJ6OVFiMEtmdnJiT0V6T3p2WHREQ1M4d2FYMXNuM2t1RUx1eUJYdTdmZWd0OWgtQk5mMUNHTzgyTmxxbFhrTGxrTE9tMW1qWm9wcVpMeGVBUk15NnI5UWF4YldfUkZ5YXlRMHc2MTVjc01hVnF2N3NXM3IyQQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 1548
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
