export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1392,
  "lastUpdated": "2026-07-20",
  "lastSyncedAt": "2026-07-20T22:41:05.498Z",
  "warDay": 143,
  "summary": "The United States and Iran are engaged in escalating military exchanges, including US airstrikes and Iranian attacks on US personnel and maritime targets, while Israel continues operations against Hezbollah in Lebanon.",
  "lastNarrativeUpdate": "2026-07-20",
  "ceasefire": {
    "active": false,
    "status": "collapsed",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "The US-Iran MoU on June 17 appears to have collapsed following renewed military exchanges and attacks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.9
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.9
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
      "date": "Jul 20",
      "text": "U.S. military identifies 2 soldiers killed in Iranian attack in Jordan.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijgFBVV95cUxNWXNJYmdvY0pfYnlkVm5aV1RZV2JrMl9FbkE4cElqZnJXR05ocDd0RERIVEFnMHRncEI1RUhaR2pxbGV6U1VEalNPM3dzTnZjcVduclhwNnNRZzR5cnIxMkZzaDJzV21zdHY4ZVhRTmVsRk4wNDY2MTFQX05zM21GVDNZaUY3b0tUckIzUTF3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 1392
    },
    {
      "date": "Jul 20",
      "text": "US launches more airstrikes against Iran after announcing another death of a service member.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMinwFBVV95cUxQOVVPQXpIUjAzU1c2TG1GcXJUU19aU2FodDRTVWV4RVdVN2stQ1NueUtIRC03M2hXNFZLRkQzUUdqMWNQOVBMbzFmc1NGejY3bXFNSnJYMXNNRTIyMlNMYjFPbXVOcXJCSkFPVHNsMkRvblBzcjc5aXJhbHlndGlrek9RbmVBTlN4SHI3N1VHLUpGVlNmTE4tSlAwSktTd1k?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 1392
    },
    {
      "date": "Jul 20",
      "text": "Iran: 2 oil tankers in Strait of Hormuz have exploded.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiggFBVV95cUxNS0xHeEJHSTQ2MjA3N1htcDR3WS11Y0U2QjNXUHU4Zkd6Z0lNNXNKYmcxM2VEaVR3ejV1YkhNVXZqdC1kY2p3eUxHamJ5RmljQzZRRlc5bmlHM2RTdDc5R0VDcEp2QTVsQ2JPN0xqX01rNkUzMVlkMkZ5dTNlZ3IwY3dn0gGHAUFVX3lxTE5kQlpxOGp1NDdZbmJqdW15T0VhZ2JKRGtZSUtURVlmV1B4YldxQUFhckxNcU5YUjRKVkJaaGtsZzFDMk0zVXA5ZF9idV9JOUtJeVJ5MVJWLVpBV2xWMkY3Z3NUQkpVVEpBdEhiZ1I3V25PM192aHd6NzM5SmhsMnZod1F2ZTRzMA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hill",
      "latestSinceUpdate": 1392
    },
    {
      "date": "Jul 20",
      "text": "US attacks nuclear site in Iran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxOQ0x3a0wzS2pXQVZJdHBKUTVyRjNncVV1cGtrLWdjWGRDVDFMV3l2YWkxN2E3bE8xWmpXV2kxN0pqdHdpanMyamZIdjB0ZDhGUWtXbmVPQjcySlZRT2dEdWJ0Qks0aVM3WkVuQXlYUTVybW0xSHdNcENlRFc2Z2pKQ2NDOHZHN1ZIblR3RmplVDJsVjAtTzB6am5ZVHZ5T3U1NHhrOUtJbTNpRV9zRFR2VUNPZjFRYkHSAbwBQVVfeXFMUGNmdVE0ZTFwOU5EclpJZm9pS0s2NjhvWkRmUHlwVWMzaXlaOFZPOG1iUXQ5aWVFamZjbldSMjVyR251ZzNOLWx6RUlFaTNWSFA5eTc4eTdtMm5ib3BTZEkxZk9wLUl0WVlVMHBUOHBjWi1qM1puc05oTzFwcWV1X25GTmx6TzNweER2SE1DbXg0SkVYSzNwaklkcGZYWE9tamE3M2xjZzZ0WWpBVmRESjlqNFIwcGR6NG9mRXo?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 1392
    },
    {
      "date": "Jul 20",
      "text": "Kuwait desalination plant hit.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1392
    },
    {
      "date": "Jul 20",
      "text": "Israeli Forces Surround Hezbollah Fighters In Tunnel Network in Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiuwFBVV95cUxOVnNOTHNFVUI2QzRyZElfU1ZybnhGV2VMZExiYjlheDJLcElQdWNwVElpM2tpNDBKUjNEM1ZBVGZ1ZUVRa1Y1R09nanYzeG1lRW5kOFhvVS0xbnhrWUYxcVdfLThVVHhtVDdBYk1rVVJUX1hoWmVFT3VJb3ZHTHFoYURrQnBFelh3N09lSUlxNW9nUmI1VGxtNlZfWVNBUVdCS3BEMTJzeHJfLUxjSGV2bkZwM2l1TDZ2bmdj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "i24NEWS",
      "latestSinceUpdate": 1392
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
      "perspective": "US/Western",
      "headline": "US Retaliates for Troop Deaths Amid Escalating Iranian Aggression",
      "summary": "The United States is conducting retaliatory strikes against Iran, including a nuclear site, following increased US casualties. Concerns are high regarding Iranian attacks on maritime shipping and the potential for wider regional conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 1382
    },
    {
      "perspective": "Iranian/Allies",
      "headline": "Iran Prepares for Wider Conflict as US Strikes Continue",
      "summary": "Iran is reportedly preparing its allies, including Hezbollah, for a broader conflict as the US continues its strikes. Iranian forces have stepped up attacks on shipping in the Strait of Hormuz and targeted regional infrastructure.",
      "tone": "defiant",
      "latestSinceUpdate": 1382
    },
    {
      "perspective": "Israeli/Regional",
      "headline": "Israel Engages Hezbollah Amid Warnings of Broader Conflict",
      "summary": "Israel is actively striking Hezbollah targets in southern Lebanon and issuing warnings to Tehran as the regional conflict intensifies. A former prime minister expressed concerns about repeating past mistakes.",
      "tone": "strained",
      "latestSinceUpdate": 1382
    },
    {
      "perspective": "Global Energy/Shipping",
      "headline": "Strait of Hormuz Attacks Threaten Global Oil Supply",
      "summary": "Attacks on oil tankers and a ship ablaze in the Strait of Hormuz are creating a 'worst case scenario' for maritime risk. The escalating conflict poses a significant threat to global oil supply and shipping routes.",
      "tone": "anxious",
      "latestSinceUpdate": 1382
    }
  ]
});

export default LATEST_SNAPSHOT;
