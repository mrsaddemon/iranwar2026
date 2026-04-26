export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 372,
  "lastUpdated": "2026-04-26",
  "lastSyncedAt": "2026-04-26T06:26:50.880Z",
  "warDay": 58,
  "summary": "US-Iran peace talks face uncertainty with Trump canceling envoys, while a two-week ceasefire is in effect, though regional conflicts persist in Lebanon and the Strait of Hormuz remains partially blocked.",
  "lastNarrativeUpdate": "2026-04-26",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A two-week ceasefire has been reached between the U.S. and Iran, but its regional stability is undermined by ongoing Israeli and Hezbollah attacks in Lebanon."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
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
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "Apr 24",
      "text": "Iran Update Special Report released.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxPeXlOS0xsUTBPTVozZ3h3SWx4VHhSZk5ZVnRycnUwZzNaQzlGSC0wRG4zQy1DZXNSUnhySG5yazRJUUg3ZWFYTTg5amR4MXdGb0JGUHNPRFlGZE1ESGNHMjg5RHgxLXdNOHNyeVYyX1Nja3ZaVmpFMkEtTW1JX2V5ZDVHdmtFYWFGaVV5STA3bkJHS1h6ZFE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 372
    },
    {
      "date": "Apr 26",
      "text": "Trump cancels dispatching envoys for Iran talks, stating 'we have all the cards'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE9EZkM3NURlaHh0ZGtEdDZxSGNDQjcwRUlQc0JkUG1WNDFGMzFrX1M0Z0JmR21kS25NU3JqSWJseEszMllWelMxc09lNV9oZ3k5R2VqOFBndlRHWmZ1ZVJlclJuUG9lQ0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 372
    },
    {
      "date": "Apr 26",
      "text": "U.S. and Iran reach a 2-week ceasefire ahead of Trump's deadline.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOQWdMR2RQZEpSSnE3R1BPd1dPVVNvX21tYjhCbFZjcVJRMkozZVFxc3NKUFZid19fMTBZR2Zia3lhbmtLbDlXV21fSERfY3JNYkhEMktlNHZKVXdzaEk4UGlkcDBienpZWjl2OHpwQW9pRnBBaUh2aU5sQlBsVlNkM1FLLVowRXB4WFhWc2g3dmQxYjZzelJzNWhXRlROZjFmN2psUkJWbS1NcHF00gGyAUFVX3lxTE9YUXdxUGhSZ2lHV1p6cHJ1WExBTkFKRlgyQmZuaWRqMGFMTjUtamk2TnI3WGc0eWh5MkpNRTV3bEptbUhFMFdhTmlfZ1lMaFVBbEFseUxDLU9HdVNadkdBUHh1YUVuc1JKTzVJRTNLdXNGbGhYdnFMZlJmSlJfbUhoempHaVB2RjA3bVdFV1dvblpvUnVNRzFubFU0TTlNakk1R0xJTnIwNHFlcmc4VXhkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 372
    },
    {
      "date": "Apr 26",
      "text": "Israel attacks increase in Lebanon, killing four, despite ceasefire extension.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 372
    },
    {
      "date": "Apr 26",
      "text": "Ships taken in the Strait of Hormuz amid ongoing crisis.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 372
    },
    {
      "date": "Apr 26",
      "text": "Strait of Hormuz may not fully reopen until second half of 2026, according to Baker Hughes.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxQYlNYYVRkbkhyeUIzU1lTVFUtNUpzMTV2dnRHX0syRWhadmpGQUszd1daMm1DY1VOWDVaNVBFejRod1FMOW44TTdrVDFSelp3akM2STdzT0tHemszZ2F0MkxQTHlka1N1UVVaWDZIS285eV9IZlBkem0tQTdueVRHWlNHdVFURzDSAYwBQVVfeXFMT2FKaHozTUQ0b3lfdnRJd0ZOQThhNlpJV3M1cEFOaGFNdFNIckZINF9teGxiQUpCV1FEVmdLWFV5NGJwdTFsUWhVdXlOZk1QVko1Z1hHc29GQlFwR2czeGhpaS13UGNFRHpSQ25PYzd1eWd2OHRROTZyRmR5TUxGVi1HVEFLaWJiRkFrSEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 372
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
