export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 526,
  "lastUpdated": "2026-05-06",
  "lastSyncedAt": "2026-05-06T00:07:12.465Z",
  "warDay": 68,
  "summary": "The US claims its offensive phase in the Iran war is over and a ceasefire holds, despite ongoing attacks in the Strait of Hormuz, missile and drone threats against the UAE, and persistent clashes involving Hezbollah in Lebanon.",
  "lastNarrativeUpdate": "2026-05-06",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 15,
    "summary": "A ceasefire is claimed to be in effect by the US, but is frequently violated by attacks in the Strait of Hormuz and ongoing clashes in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.6
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "May 06",
      "text": "US states the offensive phase of the war is over and Tehran will not control Hormuz.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMitwFBVV95cUxQdmRpRkhuTGluWFQ4endRY0lSaW1BVG1KTDdOLTZEQVc1QXlmaXd5Q2ZsMlJNa3cyMHEwR05HZFRRUFBDS0syaWRPdGdBel9fRkdqNzk1anNuN2JvdW9Id19KZURKVjkzb2V4bE9lczBwU3lHSjMzS2k2TXZDRlFxbFFLbUx3NDVhVVJ6T0E4cjBGTHJrOUtYS3JwVDNCRGhWNm04SnNwTmY4N0g1T1VTSzhTdXJvT2fSAbwBQVVfeXFMT1gzTVdUbGZIZE9vVU9PelBYSkNYQzdJcGJ5WUdqQlhTeGdEMkZOZmZQbVo2UDF6ZWpYNDJlb1JodlhId2dnVTdBNUhZSG9SQ09iMy1ES2VCRkJQNDVUbUFuNVNuNUtfRlc5SFVuMmlwWUUzdEp5UmtVZjRsVkZmLUdUVElLUTdnc0tScy04RmxjNlhsRXJvLUE2UlcyRHJ4UlV0WWZTdE1XWXlKcTZqdVltWmRvWlRsa0hvcW0?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 526
    },
    {
      "date": "May 06",
      "text": "UAE reports missile and drone threats.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 526
    },
    {
      "date": "May 06",
      "text": "A vessel is reportedly attacked in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwgFBVV95cUxOZVNNNFNuaGY3ekVlTlJra3NuT3ItcGJycnBFSF9YSHpqSzFxR3YtYjVJQjRQbl8zSTNOOWRHRkVvQ1o0ZWQ1bjMyUkk5bXRIOF94RkNTYms2cjZsNEpIc010TzJKUHF6WXVmU0FtaUs1eERwUGxJZWNESVRiOWlORVc4UUdnR2VGb3dacFVHS2NhQWhjcjl4TWpiSU4xZVpId01HVXJoeUJiVWtnZjF3V1ljUG9GX19ib3hSVzZ2bW9lZw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Guardian",
      "latestSinceUpdate": 526
    },
    {
      "date": "May 06",
      "text": "US says the Iran ceasefire holds despite attacks in Strait of Hormuz and against UAE.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTFByNXFLNkstYXBSUk1mczcxMWRSZHpFclRuYktzalFQVlh5dXpIMTFveXdJMzl2WFVFMm1uT0t3Z2Y5NnJhcTZtbThsTVY0d2FQVDJvVEhBS29GTlR1aHNvek9jQjNwTlNKeEF6T0hR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 526
    },
    {
      "date": "May 06",
      "text": "Trump suggests US-Iran ceasefire remains despite Strait of Hormuz escalations.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 526
    },
    {
      "date": "May 06",
      "text": "Trump to pause US effort to guide ships through Strait of Hormuz while blockade remains.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMibEFVX3lxTFBjQmlHemxOdXowdXdPY0hCMzZnTXhJdnhIYkZxLUhaTng2anQzWmdhV1hUbFZpUndvZ3FCVHNBRklLTzhib1ZQU1l0SGJZVTlpeWMweUtTS2xuMTE0UXNTbXp3bjJRYkZTRGJyNg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 526
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
