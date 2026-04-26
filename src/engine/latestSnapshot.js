export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 374,
  "lastUpdated": "2026-04-26",
  "lastSyncedAt": "2026-04-26T09:12:32.328Z",
  "warDay": 58,
  "summary": "A fragile 2-week ceasefire between the U.S. and Iran is in effect amid an ongoing Strait of Hormuz blockade, while Israel and Hezbollah continue to exchange attacks in Lebanon despite a separate ceasefire extension.",
  "lastNarrativeUpdate": "2026-04-26",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A 2-week ceasefire between the U.S. and Iran is in effect, but its stability is uncertain due to cancelled talks and ongoing Israeli-Hezbollah clashes in Lebanon."
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
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.5,
        "aggression": 0.7
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
      "text": "U.S. and Iran reach a 2-week ceasefire ahead of Trump's deadline.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOQWdMR2RQZEpSSnE3R1BPd1dPVVNvX21tYjhCbFZjcVJRMkozZVFxc3NKUFZid19fMTBZR2Zia3lhbmtLbDlXV21fSERfY3JNYkhEMktlNHZKVXdzaEk4UGlkcDBienpZWjl2OHpwQW9pRnBBaUh2aU5sQlBsVlNkM1FLLVowRXB4WFhWc2g3dmQxYjZzelJzNWhXRlROZjFmN2psUkJWbS1NcHF00gGyAUFVX3lxTE9YUXdxUGhSZ2lHV1p6cHJ1WExBTkFKRlgyQmZuaWRqMGFMTjUtamk2TnI3WGc0eWh5MkpNRTV3bEptbUhFMFdhTmlfZ1lMaFVBbEFseUxDLU9HdVNadkdBUHh1YUVuc1JKTzVJRTNLdXNGbGhYdnFMZlJmSlJfbUhoempHaVB2RjA3bVdFV1dvblpvUnVNRzFubFU0TTlNakk1R0xJTnIwNHFlcmc4VXhkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 374
    },
    {
      "date": "Apr 26",
      "text": "Trump cancels sending envoys for Iran talks, stating 'we have all the cards'.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTE9EZkM3NURlaHh0ZGtEdDZxSGNDQjcwRUlQc0JkUG1WNDFGMzFrX1M0Z0JmR21kS25NU3JqSWJseEszMllWelMxc09lNV9oZ3k5R2VqOFBndlRHWmZ1ZVJlclJuUG9lQ0E?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 374
    },
    {
      "date": "Apr 26",
      "text": "Israel kills four in southern Lebanon and escalates attacks despite a ceasefire extension.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMijwFBVV95cUxQdzNwb1FGUDJFT25pX283ZU1NN2NSRlpTakVjSDF0VmFfbC1waENMWno2U1RDSGlxc0dDOVR3cktQZC1LMmVsRzIyYm44QXhYNThpejFLRjdHblVicnNNVzNIRlpod2MwWTRGV1otbWl5Um9xeEZMaDdsVjI1cHhSd3lmQ3Q2MjREa0MxNmlrQdIBlAFBVV95cUxQY2t5Q3ZfNHNFUlVkY2VPYURydHdqZVBxT0Q2d0VwaE9vOHBUT092VTExLU9TQl9zVGZKdVpNMG9odUtJejZOTmxyNndDOTdxRVNlOXZwZ3F4dkdiamp6a0lIWWI1Z1JSUXdHdmplUHd5TUlXVi1zZ3ZLTHBjRXpCNjAxUG45MEZFdHdaVHVVekJLZ0lW?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 374
    },
    {
      "date": "Apr 26",
      "text": "U.S. blockade around the Strait of Hormuz continues, with drones used to reopen the strait.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 374
    },
    {
      "date": "Apr 26",
      "text": "Baker Hughes predicts Strait of Hormuz may not fully reopen until the second half of 2026.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihwFBVV95cUxQYlNYYVRkbkhyeUIzU1lTVFUtNUpzMTV2dnRHX0syRWhadmpGQUszd1daMm1DY1VOWDVaNVBFejRod1FMOW44TTdrVDFSelp3akM2STdzT0tHemszZ2F0MkxQTHlka1N1UVVaWDZIS285eV9IZlBkem0tQTdueVRHWlNHdVFURzDSAYwBQVVfeXFMT2FKaHozTUQ0b3lfdnRJd0ZOQThhNlpJV3M1cEFOaGFNdFNIckZINF9teGxiQUpCV1FEVmdLWFV5NGJwdTFsUWhVdXlOZk1QVko1Z1hHc29GQlFwR2czeGhpaS13UGNFRHpSQ25PYzd1eWd2OHRROTZyRmR5TUxGVi1HVEFLaWJiRkFrSEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 374
    },
    {
      "date": "Apr 26",
      "text": "Iran's Armed Forces Command threatens a response if the U.S. blockade continues.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 374
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
