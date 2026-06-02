export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 852,
  "lastUpdated": "2026-06-02",
  "lastSyncedAt": "2026-06-02T11:06:34.863Z",
  "warDay": 95,
  "summary": "The region is experiencing heightened military activity with direct US-Iran confrontations, Israeli strikes in Lebanon, and the collapse of ceasefire talks, alongside Iranian threats to block the Strait of Hormuz.",
  "lastNarrativeUpdate": "2026-06-02",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.93,
    "durationDays": 60,
    "summary": "Ceasefire talks between the US and Iran have collapsed, with Iran suspending negotiations and renewed attacks occurring between Israel and Hezbollah."
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
        "militaryPower": 75
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
        "precision": 0.5,
        "aggression": 0.9
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
      "date": "May 31",
      "text": "Israel and Iran step back from threats after a day of tension.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 852
    },
    {
      "date": "Recent",
      "text": "Iran breaks off ceasefire talks over Israeli attacks on Lebanon.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMioAFBVV95cUxPQm0zc1ZESDFjVVJZcUZiOUhhQVFfUjdIV3V4b0FoQkJVb3Z3dHBfVEl1SGNGaUdsQTQxN2U3OWtUelQwbmdKOHI2VUZ5bjVMWWNSTDB5dTdmcFl2Vk1mUnVmVndOQ05hVTlfVzNYOEFmeFlYOXJFd05XMnVkTUFERWprWWZYOTlNaTdiMmctUllpNE91WXk1M0RRNzFTVXYt?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Washington Post",
      "latestSinceUpdate": 852
    },
    {
      "date": "Recent",
      "text": "Israel strikes Southern Lebanon after pulling back from threat to Beirut.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 852
    },
    {
      "date": "Recent",
      "text": "US strikes Iranian radar sites; Iran targets American forces in Kuwait.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE0wc3lMT3hUc01OVVUtMzFXb29BREozUmQ5UEFrYW5UbFlwbjE1TDFiczZoQWFBSkxDNXgzdVFaREp0TVdBNmZGOGw2QVlyQjhSRVI1MEdmUjJndw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 852
    },
    {
      "date": "Recent",
      "text": "Iran vows to block Strait of Hormuz and stops negotiations with the U.S.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMif0FVX3lxTFBSUHpKdFZmVERQYzNIejV5MWdFZ1B0eVdlOEVqek04RHZ4cnNkM1Y3eEZMS04yblJ5VmZRSWRxOVJxZkRDSHdYMTB2U3djSGFKTXFuc04zeGx5UTdPQ1dDdjdGa05WLUxFR0JvdXpRWnRLNmkzYXlwR0EzS0hDOE3SAYQBQVVfeXFMT0Z1aDdzejZNN2dHNW5mUnZxWnZ5RUtPXzA1VS1KSWZNWUItSTJRTThvS2pZLVctOFFvRGdDRHBfVmxMZV91Ti1tTjY5dzE3V3RGR3VLd0wzQkhXNkJLMlhvb2M1R0RsZUE2ckhrWmFEeWdQNV9QVlB1c2RTZVRidlpsVjJp?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNBC",
      "latestSinceUpdate": 852
    },
    {
      "date": "Recent",
      "text": "Israel and Hezbollah trade new attacks despite Trump intervention.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxNV195UHZJZ2NFWWs1c0tqT21IdTlyb2F4YVNtWWNSNHFWbDJmMDVqWVJMXzBjaV9QUTVHOXBHc3VrYzJkQnlrQm8xM3cwa2s1ZmJTajY0RE5Vd2Nnak9IQ3dLcE05bmE4d1ZTVmgtTExWQkFHVlpZYVB0QTh2TjdNNGJ4dW9BM2txdTl4VmFXRm9ZREVGWUJ4b3JUSEp3SVphQlViQ05ITk9TS05O?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 852
    }
  ],
  "sourceStatuses": [
    {
      "source": "Google News RSS",
      "status": "ok (17 headlines)"
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
      "perspective": "US Policy",
      "headline": "US maintains military readiness and diplomatic engagement amidst Gulf tensions",
      "summary": "The US military asserts readiness for combat in the Gulf and conducts strikes against Iranian targets, while also guiding ships through the Strait of Hormuz. President Trump is actively seeking to finalize a US-Iran agreement, including on enriched uranium and the Strait of Hormuz.",
      "tone": "strained",
      "latestSinceUpdate": 844
    },
    {
      "perspective": "Iranian Stance",
      "headline": "Iran warns of 'utter ruin' while facing US strikes and blockade",
      "summary": "Iran warns of 'utter ruin' if conflict restarts, facing new US strikes on missile sites and boats, and a US military strike on a commercial ship attempting to breach an Iranian blockade. President Trump suggests Iran is 'negotiating on fumes' amid ongoing diplomatic efforts.",
      "tone": "defiant",
      "latestSinceUpdate": 844
    },
    {
      "perspective": "Israel-Hezbollah Conflict",
      "headline": "Israel expands Lebanon incursion as Hezbollah intensifies rocket attacks",
      "summary": "Netanyahu has ordered the Israeli army to expand its invasion and deepen its incursion into Lebanon to target Hezbollah. Concurrently, Hezbollah has launched persistent rocket barrages on northern Israel, utilizing a 'game changing' night-hunting weapon.",
      "tone": "anxious",
      "latestSinceUpdate": 844
    }
  ]
});

export default LATEST_SNAPSHOT;
