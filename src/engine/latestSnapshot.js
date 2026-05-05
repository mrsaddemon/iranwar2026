export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 525,
  "lastUpdated": "2026-05-05",
  "lastSyncedAt": "2026-05-05T23:13:57.895Z",
  "warDay": 67,
  "summary": "The US declares the offensive phase of the Iran war over, yet significant military engagements persist in the Strait of Hormuz, while a fragile ceasefire in Lebanon is violated by Israeli attacks and Hezbollah deploys new weapons.",
  "lastNarrativeUpdate": "2026-05-05",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.69,
    "durationDays": 7,
    "summary": "A ceasefire is reportedly in effect between Israel and Lebanon, and a US-Iran cease-fire is suggested to remain, but both are experiencing significant violations and escalations."
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
        "precision": 0.6,
        "aggression": 0.8
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
    "nuclearIndex": 15,
    "escalationLevel": 48,
    "oilDisruption": 90,
    "tradeImpact": 65,
    "sanctionsPressure": 54,
    "globalPressure": 66,
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
      "date": "May 04",
      "text": "US Secretary of State Marco Rubio states the offensive stage of the Iran war is 'over'.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 525
    },
    {
      "date": "May 04",
      "text": "A vessel is reportedly attacked in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxOZVNNNFNuaGY3ekVlTlJra3NuT3ItcGJycnBFSF9YSHpqSzFxR3YtYjVJQjRQbl8zSTNOOWRHRkVvQ1o0ZWQ1bjMyUkk5bXRIOF94RkNTYms2cjZsNEpIc010TzJKUHF6WXVmU0FtaUs1eERwUGxJZWNESVRiOWlORVc4UUdnR2VGb3dacFVHS2NhQWhjcjl4TWpiSU4xZVpId01HVXJoeUJiVWtnZjF3V1ljUG9GX19ib3hSVzZ2bW9lZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 525
    },
    {
      "date": "May 05",
      "text": "US and Iranian militaries trade shots as Strait of Hormuz tensions escalate.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMid0FVX3lxTE9BRHBLbV80eVhCWEdzNzRVZndFU19MM3B2STl2ME9vdnNySUE4Z05pYVI3SVIzUEc5NXA2QW5NQzZSbFRQVXhJTDdoMUlQY3VfcjBvNXBhaE9XLXBjbzZ0bzNvb1hoUnRkVzA2VHNxNHMtUVkyUWtN?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 525
    },
    {
      "date": "May 05",
      "text": "Iran launches missiles and drones as US forces enact Trump's 'Project Freedom'.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News",
      "latestSinceUpdate": 525
    },
    {
      "date": "May 05",
      "text": "Hezbollah pays steep price in battle and deploys a potent new weapon.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxPOW44VFRZOE1Sa2czY01kaFRUM3RHYnFnNEpHX3Q0S3NmcjZ2Z0ZMbzdVS0ZIUWg3bkhaNWlKdDktRGFrN2FCekNLOTlPejRubkVDRGJ2UEVEUzdCOEhPNjdXbVNsNllWcHVTSEE4MTVFOTVWem1JbjVVdHk3TFNnTXRzUzBkVFhnMy1ULXVhejZhbmgzREpXc2sySmhYbWZlZzh0YzJQMWpDWGh3S2c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 525
    },
    {
      "date": "May 05",
      "text": "Israeli attacks kill dozens within days in Lebanon despite a ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE5oX2lXbGN2TXhJM3FNU01wU1lPY09RQVF0X1M5SDBvQnR2T1RZdGc1NGVudURtNG5nSVNsZjFIZFEza0RUTXdTcUpLTkFmekJpQkJlRU5sQTVqdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Google News",
      "latestSinceUpdate": 525
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
      "perspective": "US/Trump",
      "headline": "Trump Issues Stark Warning Amid Strait of Hormuz Escalation",
      "summary": "The US, under Trump's directive, pledges to guide ships in the Strait of Hormuz and warns Iran of severe retaliation if US vessels are targeted, following direct military engagements.",
      "tone": "defiant",
      "latestSinceUpdate": 513
    },
    {
      "perspective": "Iran",
      "headline": "Iran Defiant Despite Economic Strain, Engages US and UAE Forces",
      "summary": "Despite a battered economy, Iran's leadership remains defiant, believing the US will eventually back down, while actively launching missile attacks on the UAE and engaging US warships.",
      "tone": "defiant",
      "latestSinceUpdate": 513
    },
    {
      "perspective": "Hezbollah/Lebanon",
      "headline": "Hezbollah Deploys New Weapons, Lebanon Rejects Ceasefire Talks",
      "summary": "Hezbollah has deployed a new weapon to evade Israeli detection, and Lebanon's parliament speaker, allied with Hezbollah, has rejected any ceasefire talks with Israel until the war concludes.",
      "tone": "defiant",
      "latestSinceUpdate": 513
    },
    {
      "perspective": "UAE",
      "headline": "UAE Under Attack: Missiles Intercepted, Oil Site Hit",
      "summary": "The UAE reports intercepting multiple missiles and drone threats, with one drone sparking a fire at an oil facility, indicating direct attacks on its territory.",
      "tone": "anxious",
      "latestSinceUpdate": 513
    }
  ]
});

export default LATEST_SNAPSHOT;
