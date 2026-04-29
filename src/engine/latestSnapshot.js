export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 428,
  "lastUpdated": "2026-04-29",
  "lastSyncedAt": "2026-04-29T21:16:41.077Z",
  "warDay": 61,
  "summary": "US-Iran negotiations are stalled amidst a fragile and expiring ceasefire, with ongoing military threats, increased Israeli attacks in Lebanon, and significant disruption to Strait of Hormuz traffic.",
  "lastNarrativeUpdate": "2026-04-29",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 14,
    "summary": "A 2-week ceasefire between the U.S. and Iran is in effect but is set to expire soon amidst uncertain talks."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.9,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.85,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 60
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.75
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
      "text": "Iran Update Special Report published.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMilgFBVV95cUxOTDFVSGl6aEFKSUhhdVZsYlg4bmxENDZFeWRkNE1ZdVNBZWlOd1ZNZXd0ak9QWXpxR1BlLWZOSDgtMFk0MktoUWFRQWh3NlZySS1GZFBMWmlwNldUUUVNbklIYUZ3ckEzTmZPZXpSU3QtR2RubTNkN1d5a2NpSFdaVXRLd0xfZFFxckZKRVN5Zi02V2Uxdmc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Institute for the Study of War",
      "latestSinceUpdate": 428
    },
    {
      "date": "Apr 29",
      "text": "United Arab Emirates announces intent to exit OPEC.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiZ0FVX3lxTFBYdGFWQTUyN193ZzhtMEJRMTI3NG9PNDNxTFJwVEVCbkg3bjlDZVVDdGozdmlBRS1nWVZTenRBc25xNGxfVkQtb1FNdU1TYjc0NTRST0JBU3dBbDlHVlBhSkdGOWctdGM?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 428
    },
    {
      "date": "Apr 29",
      "text": "US-Iran negotiations stall, leading to an 'awkward limbo of no war, no peace'.",
      "severity": "warning",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 428
    },
    {
      "date": "Apr 29",
      "text": "Trump threatens Iran to 'get smart soon' amid stalled talks and weighs military options.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNazRKUUN0NHBUOU1xb2NOUmdsOW1LXy1pak80Z0VHallZb2MwV2g5UHVWcU1kRU9uTlpfVmJseDR4bUxjcWQza0t5LTVwNWJRNElob3N6d3ktWk5TSHZrQWZEbE9VMWRiUGtSbWJpdmZLVzRPNXE4MXQ5WlFneGs1ZmVWZlpZU2x4MVY4Rml1QlZOY1dSUGxZRWlPY196YlpUYzhOek1yT2ltLVYyeGluSElBaW1xWFdLS2FTTkJ1STfSAcYBQVVfeXFMUGJtN3Nka2dBOTR2ZjVFblhodXdlcmtVSHFKWElaSDQteDJLYUJoTkQ0UnVfY3RiTkpKVjNOeU92Q3NuN1hycmtrd0RmWFV4WW1sZ1JsQkV2TnhyV0k3MFJmRmFnZ0oxUm1nZGkyUWFLSndia0F0OTFkQ3ZTYnJCWmZfSHZVTHY0ZEMyWW1DdWFsYnZrcG9vMVphMTJZWGswdjU1SzVyak92NWdRNGpPSEQzS1lzWERmbDFOZE5BXzBFTmhFa2NR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 428
    },
    {
      "date": "Apr 29",
      "text": "Israel increases attacks in Lebanon; ships are taken in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiwAFBVV95cUxNX1ZsemdHcVMzM0pUbWpWQ3A1WUFwZzlKbG1YWGYwXzdESmNlUnl5MWRBdTN3YlpVQ3l1OHlkWVFVbDhkaFIyY2FkeWc5QmpkMldONXhGZ2IwRGVicVU3VFZhUTV1VXFmYVR2Z1NhOXJsMW9vS2VBd1hrSFRENHpoMlpuMEhXcmRLNUJoaS1IeU9GYjdFbnNPeHByeElWWDJsdE1LejkxWF81SG12TnJvVlNtRHlTNm1ONnM2VnUwTU7SAcYBQVVfeXFMT3llQkREbDlFMVpDaDRsdjVJYjhpdGpWeEdBX3N5ZUgtMWZxSExBMzZZbERlbFREcTQwZWl6V3FRRlAxdXk4OVlrQVBZTlM1X2ZVZXlLTzZKbjNiOUV5M0RqMkgtS0U0VDFjbmQtdTBpYXlid0Z1alY0clVVUWwtZHhIMTJPMFUxaGhvRkhUdGZWcy1XSG5IN2xGbGdQWllBUEdzVUhvd0tzZUM3bjdtSmQwTDVSSWpsbnJBcGlmaGFSeE5ybnh3?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 428
    },
    {
      "date": "Apr 29",
      "text": "A 2-week US-Iran ceasefire is set to expire, with talks uncertain.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxNMHg1TVIyZGUxTVJpVkhrYmhrN3d6dlk5M0h4STJMdlRYRGJSbGJnZjVEVndmOHBWMFpEYmJxWUphSWJWc2F6MEJiVTBOazRwR1IycFYwaVhxblFsRGs3OFBrTi15eFp4NVdqcFpaQmFZSE9CX041WTIwRE5oT3VjdE9WeG5zZ1EtN0p6NWs5Y3E0S2gyWG1nMXlkQjZyZG55d0F0ZWZR?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NPR",
      "latestSinceUpdate": 428
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
