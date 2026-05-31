export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 837,
  "lastUpdated": "2026-05-31",
  "lastSyncedAt": "2026-05-31T16:43:19.743Z",
  "warDay": 93,
  "summary": "Conflict persists between the US, Israel, and Iran/Hezbollah, marked by mutual attacks and an Israeli incursion into Lebanon, while a potential US-Iran ceasefire extension remains unapproved and in limbo.",
  "lastNarrativeUpdate": "2026-05-31",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "A tentative 60-day ceasefire extension between the US and Iran has been reported but remains unapproved by Trump and is in limbo, with active hostilities continuing."
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
        "militaryPower": 85
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 70
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 40,
    "escalationLevel": 48,
    "oilDisruption": 85,
    "tradeImpact": 62,
    "sanctionsPressure": 54,
    "globalPressure": 65,
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
      "date": "May 29-30",
      "text": "US defense secretary warns military is ready to resume combat in the Gulf if needed.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMidEFVX3lxTFB1QXlGRWt2N1daSW9BM01MUW1VNmJtNElYdXFxRU52UEVWaGwxQmJCZE5wb1pQTzg1SjlYTFJsYndEX29saWxjLWItUlE0WU5XOTQ3VVRMZ1dJY3VvYlVna3RIc1lEajZZT2txdk8zYkxOQnk4?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 837
    },
    {
      "date": "May 29-30",
      "text": "Reports indicate a tentative agreement for a 60-day US-Iran ceasefire extension, pending Trump's approval, though Tehran states no deal has been reached.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOc2tnMjh3LWhDb2RvT05wUUV6MGctd3hkekYzU1lGbU9VZzAyUU9IdFlldmx1eHdBcXdDM0ZwS0xacHZHZmdtMmZxYzNIV082YVBtN05iR1NsQy1paDBId0lpak9IN0wtY2tnZWtkaWlXc0w2TVJBRUtVTEpzMHEtaVRYRWZWLUJTR19YSm91TE9LVEVYTHlTN1ItWEROY1dzV1FCTGxEOHZKZ0R4U0xaaWlTSzhLbExRQzcybDUwa9IBxAFBVV95cUxQcThwU0NNYm45RWlOZlRvSXhBWXhHUzduWGF1TWZ1MHFVS21wRGd4RnliRFNSMVdNN2UyX0RGQmZuN1dCcFVEclVlVVBKYklZM09WVHhvcmJDM3QxZHhZR3hQeXMycXkwM3lHaEJXUlllMmNCb3RfRVNCVnl2UTA4X054ME1RZnJSLUh6M3BGYkNCdTc1VC01OXd6c0txMlFpWFZzdldYVFJoRE01THZaOGFNNjdVVmo2RGpCaGE0SDZIY3Rj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 837
    },
    {
      "date": "May 29-30",
      "text": "US and Iran trade attacks, with Iran claiming to target an American base after fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 837
    },
    {
      "date": "May 29-30",
      "text": "US military fires at a ship in the Strait of Hormuz and hits a commercial blockade runner's engine room after warnings.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 837
    },
    {
      "date": "May 29-30",
      "text": "Israel expands its invasion into Lebanon, striking Lebanon and Gaza, capturing a key castle, and ordering a deeper incursion against Hezbollah.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiaEFVX3lxTE5CY2syLXZIVUVCVFd1eGR5aTJyNUhNS0JxMTNjdlVtMTRjQWl3bFVqTFdlWEg3bEs1Rm9pSVJzUW51RVNWVmEwclNsQjN3QjNjS1ZPLUJ2MU5rUzMyMzAxbDdSUUExTmli0gFcQVVfeXFMT2xwaUF3VnV4LTNGRThkVXd1Z1A3RFAyQ01zcVpqTVRSRE9Iell6OFp5R2dZOUJPWkttSWpzWHg2QzJub3IxT0ZBbzVVSDZYTi1xckhUYk5HaWEzT2o?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Modern Ghana",
      "latestSinceUpdate": 837
    },
    {
      "date": "May 29-30",
      "text": "Hezbollah uses fibre-optic drones and persistent rocket/drone attacks against northern Israel, leading to school closures near the border.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 837
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
      "perspective": "US Administration",
      "headline": "Trump's Demands Shape Iran Truce",
      "summary": "President Trump has outlined demands for Iran and has yet to give final approval to a tentative 60-day truce agreement, with US officials emphasizing the military's capability to resume strikes if necessary. Negotiations are ongoing, but the administration maintains a firm stance.",
      "tone": "strained",
      "latestSinceUpdate": 830
    },
    {
      "perspective": "Iran",
      "headline": "Iran Responds to US Strikes Amid Truce Talks",
      "summary": "Iran has agreed to a tentative 60-day truce but continues to target American bases in response to fresh US strikes, including a US military hit on a commercial ship attempting to reach Iran. This indicates a volatile situation despite diplomatic efforts.",
      "tone": "defiant",
      "latestSinceUpdate": 830
    },
    {
      "perspective": "Israel/Hezbollah",
      "headline": "Hezbollah's Drone Threat Escalates Border Conflict",
      "summary": "Hezbollah has intensified its attacks on northern Israel using rockets and advanced fibre-optic drones, prompting Israel to shut schools near the border. This regional conflict continues to escalate, posing a significant security challenge for Israel.",
      "tone": "anxious",
      "latestSinceUpdate": 830
    }
  ]
});

export default LATEST_SNAPSHOT;
