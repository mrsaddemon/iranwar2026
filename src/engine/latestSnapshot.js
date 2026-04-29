export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 430,
  "lastUpdated": "2026-04-29",
  "lastSyncedAt": "2026-04-29T23:13:03.984Z",
  "warDay": 61,
  "summary": "A two-week ceasefire between the U.S. and Iran is nearing expiration amidst ongoing tensions over the Strait of Hormuz, where Iran has taken ships and threatened further action, while the U.S. considers military options.",
  "lastNarrativeUpdate": "2026-04-29",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A two-week ceasefire between the U.S. and Iran is active but faces uncertainty as its expiration approaches and talks remain unresolved."
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
        "precision": 0.8,
        "aggression": 0.7
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
    "nuclearIndex": 30,
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
      "date": "Apr 28",
      "text": "Iran's army remains in a 'war situation' as Gulf leaders meet to discuss regional developments.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiugFBVV95cUxQRTI1VDUtQzgtZ3dvTzhkZnhpQ05LZGZzcHpqWi03aFZ2UHJWWXpYbGRHU2tCMmdrWFhpc01BMUNQdDFUaVFMLWI3Wjg4WE84Q3BRTWY0Q1lTZHhBN3pBcGs1X3czamRTZ29YcnF5ZmZDU0NPVGh1T2E0UnpmVVhfZFZ5STJuSGRjbUlYZ2N0Q2lJY3BfR09uRnp1Y0ZrbHdmYUdnY0xJLVExYUcwemFEZDA5RVI2VFh5V3fSAb8BQVVfeXFMTjdpWWFVWEJTczd2Y1pvV3cxajdHTENIbC11c2g0MS1ZbDFmUmNxMmFKSDNUVVBMbjhxSG5MemRUTGl5ejZFczhGeHo4VlFSVmRKWWJUU3JveXkzOVhwMm9LV3ZtTU9FdDJGYUE5QmxLTG5kOTlpa3ZocVZiOHh4Zi1GQU1LakhpSmtudnNZMDRDVlVBazZtOHdTOElOYlVzYUszbEdJRlFjaE83RllTMjBWLV9CZE1YZ3dvc3ZZczg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 430
    },
    {
      "date": "Apr 28",
      "text": "Iran offers to reopen the Strait of Hormuz if the U.S. lifts its blockade and the conflict ends.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMilwFBVV95cUxPNUwwbkhOQXFtOVZOTFVReWo2bzNMWnhieUlSQllyaE5EUmtqVU5FX0N5QkVfaXBYY2wtRVNCMGgxTGdaR3IwOEZ3RFRqSTBmZ1NVTkppTWh6QkxtWVdEb0hxcTM4QWxZYzRwZjJiRnlWYnhvby1iRjhOZ1VfOXRydHRBVlRuQ1pUMVpYdjdld2g2ZS02S1hn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 430
    },
    {
      "date": "Apr 28",
      "text": "The U.S. and Iran are described as being in an 'awkward limbo of no war, no peace'.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 430
    },
    {
      "date": "Apr 28",
      "text": "Israel has increased attacks in Lebanon, and ships have been taken in the Strait of Hormuz.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 430
    },
    {
      "date": "Apr 28",
      "text": "The U.S. and Iran reached a two-week ceasefire ahead of a Trump deadline.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirAFBVV95cUxOQWdMR2RQZEpSSnE3R1BPd1dPVVNvX21tYjhCbFZjcVJRMkozZVFxc3NKUFZid19fMTBZR2Zia3lhbmtLbDlXV21fSERfY3JNYkhEMktlNHZKVXdzaEk4UGlkcDBienpZWjl2OHpwQW9pRnBBaUh2aU5sQlBsVlNkM1FLLVowRXB4WFhWc2g3dmQxYjZzelJzNWhXRlROZjFmN2psUkJWbS1NcHF00gGyAUFVX3lxTE9YUXdxUGhSZ2lHV1p6cHJ1WExBTkFKRlgyQmZuaWRqMGFMTjUtamk2TnI3WGc0eWh5MkpNRTV3bEptbUhFMFdhTmlfZ1lMaFVBbEFseUxDLU9HdVNadkdBUHh1YUVuc1JKTzVJRTNLdXNGbGhYdnFMZlJmSlJfbUhoempHaVB2RjA3bVdFV1dvblpvUnVNRzFubFU0TTlNakk1R0xJTnIwNHFlcmc4VXhkZEE?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 430
    },
    {
      "date": "Apr 28",
      "text": "A U.S. aircraft carrier involved in the Iran conflict is expected to leave the Middle East, with the conflict's estimated cost at $25 billion.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMirgFBVV95cUxQTWdKUkZnNkxNSGtMMTh1eTZPN3IzaXlvRnlFejVEZkRBdEhMbHZDT0Exd3dLZWZNVHljbnliTmlKald6RHlDczA3UXQ4andVbno3dFFsdXRoZzNhaV9NQVJJU1lUdVR2R0pEcFBwcjIwYkxFMHQtQXctUmlBLVZyeU16d2JiSDNMWFUwYTRWZmNDakw4QXduLUszQjAtclJFRnEwWFg1M3VnYy1KVXfSAbMBQVVfeXFMUGJxLXFqY05XSlBFVWpRSTQxcjB2cjNOVUU4WWR0eUJCdjB2ZXAtOXlNSFZfZTBvbTNJd1gwLVRyZkNmTHhDSGFrUWlpbHFXalY1QXhGR3FXa0RNaHJhY0lEek5UMjkxS0lkaW9jU2h1RnZUY3ZOS0ZBbHowUzB3LW5zRVpFSGp6QVJ5MjVTQ1hFdXp4Nkl6UkVLRS01VHFNeXJsMzBHdzVGVEw0T3IwczBhSXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CBS News",
      "latestSinceUpdate": 430
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
