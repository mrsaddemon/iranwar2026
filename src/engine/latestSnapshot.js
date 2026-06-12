export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 945,
  "lastUpdated": "2026-06-12",
  "lastSyncedAt": "2026-06-12T15:49:32.419Z",
  "warDay": 105,
  "summary": "The United States and Iran are engaged in ongoing military exchanges and negotiations, with conflicting reports on the proximity of a peace deal, while Israel conducts strikes in Lebanon.",
  "lastNarrativeUpdate": "2026-06-12",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.1,
    "durationDays": 100,
    "summary": "Despite claims of progress by the US, Iran states no deal is finalized, and military exchanges continue, indicating no active ceasefire."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 15,
    "escalationLevel": 80,
    "oilDisruption": 85,
    "tradeImpact": 76,
    "sanctionsPressure": 63,
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
      "date": "Jun 11",
      "text": "Trump cancels planned strikes and touts progress, Iran says no deal finalized.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMifEFVX3lxTE1QY0JRWVhUT2wwN2h5ZFRETDRoUktOYngxcTFZVXNLQlIwNTBfN1JBaE9qLXlPT096VF9leUFHOVZMUEx4WnRVT1JscW1fRnlvRU02eFhRODZZY1UyU0pYakFfbWtiWmtPSnppQW9yeE1CSFBRaXdnZElJZGs?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 945
    },
    {
      "date": "Jun 11",
      "text": "U.S. Launches Strikes on Iran; Tehran Claims Attacks on U.S. Fleet.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMigAFBVV95cUxNSmVTQlBBU2hybzN1RVMzZUZuU19hbTYtRm5GdW9kUU9Kd19KOThfbUE2aHRyNFU3NnZSS2RjREJUbW14NTZXMEVxNDJNdnlLd1I0SXh4U1JmTlVQRU9GNEhlUkRxRWc4Sm14LUdkWm0yU3dYaU8taVVGYkV0TEFGZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The New York Times",
      "latestSinceUpdate": 945
    },
    {
      "date": "Jun 11",
      "text": "Proposed Iran-U.S. deal would reopen Hormuz strait and lift oil sanctions, Iran state media says.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiiwFBVV95cUxQUjdwVzFuOHR6UGJvVVV3bk4zQ3EwLXBLb3F4Q0FRZUFQSFFlT19jMUtNdWxQRnlqdDE0eEtsU0dLZnFYZHJySVdfUlZBZVJiUTR2X3J2bVF0MUlKeGZFMTl4YWdqRHoxQTFXU1luSE5YWmlpekxZbzhEeVZKTksydExyUXJVMmdWQnVv0gGQAUFVX3lxTE9mRTlPYWh0Tm81cXFmM1BYVk1BanU2RVVCMFJnZFdzV0lTMkVSMnFQZ0NXQmY5Nmhma2JCcm51dDktQndxX0pESnc5d0ZIODdfUUNlN1A1YjBJWjJNZmFKZWpzZlFLLURzdjR6OUkxWXRqVTk5bGsxYXMwV2pFeF94dEJ5Y0dkSDRPM2w1LUJRUg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Iran state media (via Google News RSS)",
      "latestSinceUpdate": 945
    },
    {
      "date": "Jun 11",
      "text": "U.S. shoots down Iranian drones; Tehran says no final decision as Trump touts imminent deal.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMisgFBVV95cUxOVVB6emdrMERVSzlUSHJIalFLQTNhWFYwMEZUeEZhVllLbHVzenQ4UVZlbW1JMEVMdG9ISGNHandJbE05ZUlmSTZORUdqcFlERXFteUtrLWZXdlE4dFJEUmdhU1U3RS1mMzE4czR3QWdnUE9EbXlGWUx1WXdXSktsZk9KOUxuak5zamVYVVdobGRIM1htWFgtZmxXdVc1NWJQdmY2VEdGTXJTNjZzb3FNMWFn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 945
    },
    {
      "date": "Jun 11",
      "text": "Israeli strikes kill 12 in Lebanon as Netanyahu urges fight against Hezbollah.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixAFBVV95cUxQMjJkdEg0d3BTbzVnTzZIaVQzR1UzRUtFRnRTOHhUd1FWQUFjdWVFODdtYWlCNWdCNkJ5VFRKQm5XVEFSWlRWckFkUkJPMjd0NkFYY1Bmd0FKc1RrLU0zRlFvYUR5ZlFfRzcydFNWQ1FVdHZNVmhUNUVpd2liTll4eDZRLVlLNXZuUU1FVFdfTzI5UHdBMXhCTE5PbjVDaVROUDRUa0E3eWJUUE5CalU4SlpwUkxCTmtCVVhpUUVCM1FSUThu?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "France 24",
      "latestSinceUpdate": 945
    },
    {
      "date": "Jun 11",
      "text": "US and Iran exchange fire after American patrol helicopter downed in Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBsMU5qNmNLREM0TFZjR2hkZ1ZTSlZFNktlWjhZX0Z0YnM0UFRicUNkaUxxTzRvM195emt5aWhYX2FONkFUR1ZwNHdwQVphYm5YVnJ4RHJjbEh0QQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 945
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
