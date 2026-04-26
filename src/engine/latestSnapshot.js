export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 384,
  "lastUpdated": "2026-04-26",
  "lastSyncedAt": "2026-04-26T17:53:32.021Z",
  "warDay": 58,
  "summary": "The Iran-Israel conflict continues with ongoing clashes between Israel and Hezbollah in Lebanon, a fragile 2-week ceasefire between the U.S. and Iran, and a significant, prolonged disruption to oil transit through the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-04-26",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A 2-week ceasefire between the U.S. and Iran is active, but ongoing Israel-Hezbollah clashes suggest its fragility and limited scope."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.7
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
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.8
      }
    }
  },
  "global": {
    "nuclearIndex": 20,
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
      "date": "Apr 24",
      "text": "An Iran Update Special Report was released, detailing ongoing developments in the conflict.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxPeXlOS0xsUTBPTVozZ3h3SWx4VHhSZk5ZVnRycnUwZzNaQzlGSC0wRG4zQy1DZXNSUnhySG5yazRJUUg3ZWFYTTg5amR4MXdGb0JGUHNPRFlGZE1ESGNHMjg5RHgxLXdNOHNyeVYyX1Nja3ZaVmpFMkEtTW1JX2V5ZDVHdmtFYWFGaVV5STA3bkJHS1h6ZFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 384
    },
    {
      "date": "Recent",
      "text": "The U.S. and Iran reached a 2-week ceasefire agreement ahead of a Trump deadline.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOQWdMR2RQZEpSSnE3R1BPd1dPVVNvX21tYjhCbFZjcVJRMkozZVFxc3NKUFZid19fMTBZR2Zia3lhbmtLbDlXV21fSERfY3JNYkhEMktlNHZKVXdzaEk4UGlkcDBienpZWjl2OHpwQW9pRnBBaUh2aU5sQlBsVlNkM1FLLVowRXB4WFhWc2g3dmQxYjZzelJzNWhXRlROZjFmN2psUkJWbS1NcHF00gGyAUFVX3lxTE9YUXdxUGhSZ2lHV1p6cHJ1WExBTkFKRlgyQmZuaWRqMGFMTjUtamk2TnI3WGc0eWh5MkpNRTV3bEptbUhFMFdhTmlfZ1lMaFVBbEFseUxDLU9HdVNadkdBUHh1YUVuc1JKTzVJRTNLdXNGbGhYdnFMZlJmSlJfbUhoempHaVB2RjA3bVdFV1dvblpvUnVNRzFubFU0TTlNakk1R0xJTnIwNHFlcmc4VXhkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 384
    },
    {
      "date": "Recent",
      "text": "President Trump called off dispatching envoys for Iran talks, stating the U.S. holds a strong negotiating position.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE9EZkM3NURlaHh0ZGtEdDZxSGNDQjcwRUlQc0JkUG1WNDFGMzFrX1M0Z0JmR21kS25NU3JqSWJseEszMllWelMxc09lNV9oZ3k5R2VqOFBndlRHWmZ1ZVJlclJuUG9lQ0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 384
    },
    {
      "date": "Recent",
      "text": "The Strait of Hormuz crisis continues, with reports suggesting it may not fully reopen until the second half of 2026, leading to a potential 'billion-barrel oil shock'.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxQYlNYYVRkbkhyeUIzU1lTVFUtNUpzMTV2dnRHX0syRWhadmpGQUszd1daMm1DY1VOWDVaNVBFejRod1FMOW44TTdrVDFSelp3akM2STdzT0tHemszZ2F0MkxQTHlka1N1UVVaWDZIS285eV9IZlBkem0tQTdueVRHWlNHdVFURzDSAYwBQVVfeXFMT2FKaHozTUQ0b3lfdnRJd0ZOQThhNlpJV3M1cEFOaGFNdFNIckZINF9teGxiQUpCV1FEVmdLWFV5NGJwdTFsUWhVdXlOZk1QVko1Z1hHc29GQlFwR2czeGhpaS13UGNFRHpSQ25PYzd1eWd2OHRROTZyRmR5TUxGVi1HVEFLaWJiRkFrSEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 384
    },
    {
      "date": "Recent",
      "text": "An IDF soldier was killed and six wounded in a Hezbollah drone attack in southern Lebanon.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxNWmVRZWJKYnBnaXNJam90SlVhZnRSSDgzWVNDT0t4UGhqUjRVcDF0dWJuZVNXdjZDQ0FjbGpHV01NVTlHV0x1S0hGSDBqNmhBUkV6dUYwU3pqRjc0MDAxbF9YMHVSWGFzTmZ2VDRWU1ZpMHNQc0lhZ0hvZkloWlNhcDBrckFhSWdtQllyaU9aYkRKaV9JZlUybEstU19YOHZkcVJ2M284ZzEwU3hDemlBY0FpRUZ5R3hRVDUxVA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Times of Israel",
      "latestSinceUpdate": 384
    },
    {
      "date": "Recent",
      "text": "Netanyahu ordered the army to 'vigorously attack' Hezbollah in Lebanon, following increased Israeli attacks and trade of strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE1UMjAxb3NrUFhMU0s0d3VzaGkyZjZ1NzV3aDR2OHM0bWlUVTIzNjNKOE4yMEZQSjhMdFlsOEJobXRzc1pibGE5dm5ybzFaR1lKWENWWGhJVDdSUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 384
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
      "perspective": "US Diplomatic Stance",
      "headline": "Trump Halts Iran Talks, Citing Strong US Position",
      "summary": "President Trump has canceled plans to send envoys for peace talks with Iran, stating the U.S. holds a strong negotiating position. This move follows Tehran's refusal of direct talks, contributing to ongoing uncertainty in the Middle East conflict.",
      "tone": "defiant",
      "latestSinceUpdate": 370
    },
    {
      "perspective": "Iranian Resistance",
      "headline": "Iran Rejects Direct Talks, Threatens Retaliation Amid Blockade",
      "summary": "Iran has refused direct talks with the U.S., maintaining a firm stance amidst the ongoing conflict and a U.S. blockade. The Iranian Armed Forces Command has threatened a strong response if the blockade persists, following reports of significant damage to U.S. bases.",
      "tone": "defiant",
      "latestSinceUpdate": 370
    },
    {
      "perspective": "Lebanon Front Escalation",
      "headline": "Israel Escalates Attacks in Lebanon, Hezbollah Remains Defiant",
      "summary": "Israel has intensified its strikes in southern Lebanon, killing four and escalating breaches of a nominal ceasefire. Hezbollah has expressed defiance, questioning the effectiveness of any ceasefire amidst continued cross-border attacks.",
      "tone": "strained",
      "latestSinceUpdate": 370
    },
    {
      "perspective": "Global Oil Market",
      "headline": "Hormuz Standoff Threatens Global Oil Supply and Demand",
      "summary": "The ongoing standoff in the Strait of Hormuz, marked by ship seizures, continues to pose a significant threat to global oil supplies. Analysts warn of a potential 'Billion-Barrel Hormuz Oil Shock' that could severely impact demand and market stability.",
      "tone": "anxious",
      "latestSinceUpdate": 370
    }
  ]
});

export default LATEST_SNAPSHOT;
