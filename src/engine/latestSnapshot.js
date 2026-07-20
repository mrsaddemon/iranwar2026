export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 1383,
  "lastUpdated": "2026-07-20",
  "lastSyncedAt": "2026-07-20T04:55:09.226Z",
  "warDay": 143,
  "summary": "The conflict between the US and Iran has intensified, marked by reciprocal strikes, US troop casualties, Iranian threats to oil transit, and an expanding regional involvement including Israel and Hezbollah.",
  "lastNarrativeUpdate": "2026-07-20",
  "ceasefire": {
    "active": false,
    "status": "none",
    "confidence": 0.08,
    "durationDays": 1,
    "summary": "No ceasefire is active; the conflict is actively escalating."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 92
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.75,
        "aggression": 0.85
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 68
      },
      "behavior": {
        "precision": 0.55,
        "aggression": 0.95
      }
    }
  },
  "global": {
    "nuclearIndex": 75,
    "escalationLevel": 90,
    "oilDisruption": 95,
    "tradeImpact": 85,
    "sanctionsPressure": 64,
    "globalPressure": 87,
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
      "date": "Jul 17",
      "text": "US and Iran widen attacks, with the US conducting strikes for the 9th night in a row and announcing another troop death in Iraq.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikAFBVV95cUxOQi0zUlByVmtyRkFtTHBDM1BhNUt0eGNPVG5ocG5nOHRPUFpWcmZzVGxEeFN5XzdkZTNRSkVvclBnam1LdjZkSTF1VG93Zl9XdDIwRDdlcmpzRC0yQk9KTk5zYVg2VFNlSUlxMUh6elZCU0twZnV3ZUFLMU1sUTdxeHJmMjdGREd0RHIzLVR4WnY?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "DW.com",
      "latestSinceUpdate": 1383
    },
    {
      "date": "Jul 17",
      "text": "Iran reportedly attacks a nuclear site and a Kuwaiti desalination plant, while also targeting vessels in the Strait of Hormuz, leading to reports of halted or exploded oil tankers.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiqwFBVV95cUxOeDJKbzJhVUt2WlhPRVlGY2xKX21weTJuUUZLNGlaZ0RBWGpva21BUGh2OUYxSE5vVHlpTFdaNXJOQ21FYUctWUZxaV9jdHlEY1BmWXdrWEpOREpZNlVIaFRpRThObFlGWXFnUmVya29XbVdUM3pSVUdXamgtQzJubVZLRVR5dl9VZndTYVZOMUF1X25TYjFRNkY4WWlneUJsbVNSdVl4aEg2WVk?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AFR",
      "latestSinceUpdate": 1383
    },
    {
      "date": "Jul 17",
      "text": "Iran vows that not a 'single drop' of oil or gas will pass the Strait of Hormuz and tells Hezbollah and allies to prepare for a wider conflict.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 1383
    },
    {
      "date": "Jul 17",
      "text": "Israel warns Tehran's attacks are coming close and threatens a 'full force' response, while also striking Hezbollah fighters and destroying three schools in southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMimAFBVV95cUxOVHFLaklRSVdGWFlqcWlwY1otdVY0RExtSkhnakpkck1KcFo5MG44ejdfWjFkZU1ZWHJTd0xrSm9DTnBQTWJEVTZMQ3RKRjZMNVpMYXFmcmVHT3NMakhfSHhfT3U0bk1JLXNRa2psTUdIUEYyNjFWcm5vSTFNSHY3Ty0xYldJTE9lbEhFeU10ZU9XQnZfd3ZqVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 1383
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
