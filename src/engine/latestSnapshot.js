export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 419,
  "lastUpdated": "2026-04-29",
  "lastSyncedAt": "2026-04-29T04:59:13.117Z",
  "warDay": 61,
  "summary": "The Iran-Israel-U.S. war continues on Day 61, marked by ongoing military actions, economic strain on Iran, a recently agreed 2-week ceasefire, and disputes over the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-04-29",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.81,
    "durationDays": 14,
    "summary": "A 2-week ceasefire has been reached between the U.S. and Iran, though its stability is uncertain amidst ongoing regional actions."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
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
        "precision": 0.5,
        "aggression": 0.7
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
    "nuclearIndex": 10,
    "escalationLevel": 48,
    "oilDisruption": 80,
    "tradeImpact": 58,
    "sanctionsPressure": 54,
    "globalPressure": 64,
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
      "date": "Apr 29",
      "text": "Iranian army declares it is 'still in war situation'.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxQRTI1VDUtQzgtZ3dvTzhkZnhpQ05LZGZzcHpqWi03aFZ2UHJWWXpYbGRHU2tCMmdrWFhpc01BMUNQdDFUaVFMLWI3Wjg4WE84Q3BRTWY0Q1lTZHhBN3pBcGs1X3czamRTZ29YcnF5ZmZDU0NPVGh1T2E0UnpmVVhfZFZ5STJuSGRjbUlYZ2N0Q2lJY3BfR09uRnp1Y0ZrbHdmYUdnY0xJLVExYUcwemFEZDA5RVI2VFh5V3fSAb8BQVVfeXFMTjdpWWFVWEJTczd2Y1pvV3cxajdHTENIbC11c2g0MS1ZbDFmUmNxMmFKSDNUVVBMbjhxSG5MemRUTGl5ejZFczhGeHo4VlFSVmRKWWJUU3JveXkzOVhwMm9LV3ZtTU9FdDJGYUE5QmxLTG5kOTlpa3ZocVZiOHh4Zi1GQU1LakhpSmtudnNZMDRDVlVBazZtOHdTOElOYlVzYUszbEdJRlFjaE83RllTMjBWLV9CZE1YZ3dvc3ZZczg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 419
    },
    {
      "date": "Apr 29",
      "text": "United Arab Emirates announces its intention to exit OPEC.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 419
    },
    {
      "date": "Apr 29",
      "text": "US-Iran negotiations have stalled.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 419
    },
    {
      "date": "Apr 29",
      "text": "Israel's attacks have increased in Lebanon.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 419
    },
    {
      "date": "Apr 29",
      "text": "Ships have been taken in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 419
    },
    {
      "date": "Apr 29",
      "text": "U.S. and Iran reach a 2-week ceasefire ahead of Trump's deadline.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOQWdMR2RQZEpSSnE3R1BPd1dPVVNvX21tYjhCbFZjcVJRMkozZVFxc3NKUFZid19fMTBZR2Zia3lhbmtLbDlXV21fSERfY3JNYkhEMktlNHZKVXdzaEk4UGlkcDBienpZWjl2OHpwQW9pRnBBaUh2aU5sQlBsVlNkM1FLLVowRXB4WFhWc2g3dmQxYjZzelJzNWhXRlROZjFmN2psUkJWbS1NcHF00gGyAUFVX3lxTE9YUXdxUGhSZ2lHV1p6cHJ1WExBTkFKRlgyQmZuaWRqMGFMTjUtamk2TnI3WGc0eWh5MkpNRTV3bEptbUhFMFdhTmlfZ1lMaFVBbEFseUxDLU9HdVNadkdBUHh1YUVuc1JKTzVJRTNLdXNGbGhYdnFMZlJmSlJfbUhoempHaVB2RjA3bVdFV1dvblpvUnVNRzFubFU0TTlNakk1R0xJTnIwNHFlcmc4VXhkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 419
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
      "perspective": "Iran's Stance",
      "headline": "Iran Offers Hormuz Reopening Amidst Economic Strain",
      "summary": "Iran, facing economic pressure, proposes reopening the Strait of Hormuz if the US lifts its blockade and the war concludes, while maintaining its military readiness and 'war situation' status.",
      "tone": "strained",
      "latestSinceUpdate": 418
    },
    {
      "perspective": "US Skepticism",
      "headline": "Trump Skeptical of Iran's Proposal, Cites Collapse",
      "summary": "The US, through President Trump, expresses skepticism regarding Iran's proposal for the Strait of Hormuz and asserts that Tehran is in a state of collapse.",
      "tone": "skeptical",
      "latestSinceUpdate": 418
    },
    {
      "perspective": "Israel's Security",
      "headline": "Israel Continues Hezbollah Engagement, Emphasizes Strength",
      "summary": "Israel continues to engage Hezbollah in Lebanon, with its UN ambassador emphasizing the IDF's morality and the necessity of a strong Israel to achieve peace.",
      "tone": "defiant",
      "latestSinceUpdate": 418
    },
    {
      "perspective": "Hezbollah's Resolve",
      "headline": "Hezbollah Vows to Keep Weapons Amidst Strikes",
      "summary": "Hezbollah continues its military actions against Israel, including drone strikes, and vows to retain its weapons despite ongoing conflict and Israeli attacks.",
      "tone": "defiant",
      "latestSinceUpdate": 418
    }
  ]
});

export default LATEST_SNAPSHOT;
