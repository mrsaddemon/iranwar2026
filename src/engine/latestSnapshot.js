export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 2009,
  "lastUpdated": "2026-08-19",
  "lastSyncedAt": "2026-08-19T09:17:17.626Z",
  "warDay": 173,
  "summary": "The US-Iran deal deadline expired, escalating tensions over the Strait of Hormuz, while Israel conducts strikes in Lebanon and Gaza amidst reports of a challenged ceasefire and Iranian threats against US targets in Europe.",
  "lastNarrativeUpdate": "2026-08-19",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 60,
    "summary": "A ceasefire in southern Lebanon is reportedly in place but has been challenged by recent Israeli strikes, indicating its fragility."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.75
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
        "aggression": 0.85
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Aug 17",
      "text": "Deadline to reach US-Iran deal expires, with President Trump threatening Oman and claiming the Strait of Hormuz as 'New U.S. Territory'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE9HMS1FenJqYXZEVWlWMHdLX0lUSzdnMmdNVG9rakl3ck5wVGNCVEJHZWc0TlM3dnpvS2lxYldUR1lBek1WUWhOc2ZpbTFZM0w1M1pPOER6czIyWUhTdkl3SmpSMlptTnZUZWU1aXNB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 2009
    },
    {
      "date": "Aug 17",
      "text": "Iran denies targeting UAE with missiles, but reports indicate Iran's attacks on ships in Hormuz are mounting, testing U.S. military restraint.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2009
    },
    {
      "date": "Aug 17",
      "text": "Israel strikes Lebanon and kills six in Gaza following a meeting between Kushner and Netanyahu, despite questions about an existing ceasefire.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMixgFBVV95cUxNWUljaVdkdjZZMngxR1FnWEVjQ25STWQxNDRtVVNGV0dUdFkzN0tVWUh6UmtPTlZVZU14eTBuWW13Um9WUzZ1QzlBS0tHcFhhakc3aUZOVnc5QlJ2aFpqSF9fejNPd3ZUMFpMN2Q0RVhSVFM3ZHVJWHlka05acUpTY3lQdFFSSDZHbzJzLWxTOXdOdk9QbUI5Rm4yd1ZGUzJ1UTNwbjRhRXpNTkxnZG9LbzVTRGdfbEd0VGw3M1FGRzdoRW1CY3c?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Reuters",
      "latestSinceUpdate": 2009
    },
    {
      "date": "Aug 17",
      "text": "Iran reportedly weighs attacks on U.S. targets in Europe if Donald Trump escalates the war, as UAE severs trade with Tehran.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMibkFVX3lxTE4xWXltSkJ1VVdJSDBqRktHbUd0bjg0cG5KcjhudGFwaUFCLUk2cUxndEpIalBiUndYRzM2azBKU1Q3VUdwTjZhNjM3SHVCS0Y1Ym9qSy1rSzlMUDMxb0lSLUxfekhvdHdPVlUtdnln0gFzQVVfeXFMTklBNnA3QkJxbGljbGpEei1oYnVWeWJ2Z1hjRjNaY0M0ZGlMR0xHa3ZlUEJrcEhBWG5qWHZ2Tk5KMWJPMkpQZFl1U0R2cnI1TngyQWVrY1NadEx6YUR3dTUxdGEtY2V3S3REdDA5bHNzRHZOVQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 2009
    },
    {
      "date": "Aug 17",
      "text": "Oil prices rise due to persistent uncertainty and escalating tensions in the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 2009
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
      "headline": "Iran's Aggression Prompts Sanctions, Deconfliction Efforts",
      "summary": "The US is responding to Iran's escalating actions, including missile launches and Strait of Hormuz incidents, with fresh sanctions and diplomatic efforts to deconflict regional tensions. There is also consideration for adjusting the US military footprint in the Gulf post-conflict.",
      "tone": "anxious",
      "latestSinceUpdate": 1998
    },
    {
      "perspective": "Iranian",
      "headline": "Defiance Amidst US Pressure and Regional Strikes",
      "summary": "Iran continues to assert its regional influence, including missile launches and claims over the Strait of Hormuz, in defiance of US pressure and sanctions. The nation is responding to US-Israel strikes and perceived threats to its sovereignty.",
      "tone": "defiant",
      "latestSinceUpdate": 1998
    },
    {
      "perspective": "Israeli/Regional",
      "headline": "Escalation in Lebanon and Iran Amidst Regional Instability",
      "summary": "Israel has escalated attacks in southern Lebanon despite a ceasefire, citing ongoing security concerns and threats from groups like Hezbollah. The broader West Asia conflict sees US-Israel strikes hitting Iran, contributing to regional instability.",
      "tone": "strained",
      "latestSinceUpdate": 1998
    }
  ]
});

export default LATEST_SNAPSHOT;
