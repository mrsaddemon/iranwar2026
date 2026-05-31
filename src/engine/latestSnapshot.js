export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 836,
  "lastUpdated": "2026-05-31",
  "lastSyncedAt": "2026-05-31T15:36:42.796Z",
  "warDay": 93,
  "summary": "The US and Iran are engaged in ongoing ceasefire talks while military actions persist, including US strikes on ships in the Strait of Hormuz and Israel's expanded invasion into Lebanon amid Hezbollah drone attacks.",
  "lastNarrativeUpdate": "2026-05-31",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 60,
    "summary": "A proposed 60-day ceasefire extension between the US and Iran awaits approval, but active military engagements and ongoing talks indicate a highly fragile situation."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
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
    "nuclearIndex": 40,
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
      "date": "May 29",
      "text": "US officials indicate they are nearing an arrangement to reopen the Strait of Hormuz.",
      "severity": "info",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 836
    },
    {
      "date": "May 29",
      "text": "The US Defense Secretary warns the military is ready to resume combat in the Gulf if necessary.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiekFVX3lxTFBvUVMwOFVMTmdjLW52a3JJdWRJc2JMN3lQOC1jZy1oa2ZpRGNZYWZEMFp5ZHB3OHZfRWFMVHBmS3FIeUt4alFuWG9KdXdhQXE5SmN0VEJMTVZRV0FNbFlUY0p2NFdVNGhMb0RHdUpZT0EyZXUwaTlsOE1B?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 836
    },
    {
      "date": "May 30",
      "text": "Iran states that a ceasefire deal with the US has not yet been reached.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxOc2tnMjh3LWhDb2RvT05wUUV6MGctd3hkekYzU1lGbU9VZzAyUU9IdFlldmx1eHdBcXdDM0ZwS0xacHZHZmdtMmZxYzNIV082YVBtN05iR1NsQy1paDBId0lpak9IN0wtY2tnZWtkaWlXc0w2TVJBRUtVTEpzMHEtaVRYRWZWLUJTR19YSm91TE9LVEVYTHlTN1ItWEROY1dzV1FCTGxEOHZKZ0R4U0xaaWlTSzhLbExRQzcybDUwa9IBxAFBVV95cUxQcThwU0NNYm45RWlOZlRvSXhBWXhHUzduWGF1TWZ1MHFVS21wRGd4RnliRFNSMVdNN2UyX0RGQmZuN1dCcFVEclVlVVBKYklZM09WVHhvcmJDM3QxZHhZR3hQeXMycXkwM3lHaEJXUlllMmNCb3RfRVNCVnl2UTA4X054ME1RZnJSLUh6M3BGYkNCdTc1VC01OXd6c0txMlFpWFZzdldYVFJoRE01THZaOGFNNjdVVmo2RGpCaGE0SDZIY3Rj?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 836
    },
    {
      "date": "May 30",
      "text": "Iran warns of 'utter ruin' if the war restarts, as diplomacy remains uncertain.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMihAFBVV95cUxOTVhnUnlzdGZkbDRWR3IyUDY2R3hqUkxpSHdGSlB2X21jdzNUdW9YNV9MbWxjMmtwWG9sejlkbGJFZGxybUI1a3lvT2N0Ul9ScGt2eDZob21RM3VnbE1hd2VORnVJdVdqdjlKekZMaE1wUnVXMC1ocUdIaDZXOUdObF9HVng?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "CNN",
      "latestSinceUpdate": 836
    },
    {
      "date": "May 30",
      "text": "Israel expands its invasion into Lebanon and strikes Gaza on the eve of Eid.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiaEFVX3lxTE5CY2syLXZIVUVCVFd1eGR5aTJyNUhNS0JxMTNjdlVtMTRjQWl3bFVqTFdlWEg3bEs1Rm9pSVJzUW51RVNWVmEwclNsQjN3QjNjS1ZPLUJ2MU5rUzMyMzAxbDdSUUExTmli0gFcQVVfeXFMT2xwaUF3VnV4LTNGRThkVXd1Z1A3RFAyQ01zcVpqTVRSRE9Iell6OFp5R2dZOUJPWkttSWpzWHg2QzJub3IxT0ZBbzVVSDZYTi1xckhUYk5HaWEzT2o?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Modern Ghana",
      "latestSinceUpdate": 836
    },
    {
      "date": "May 30",
      "text": "Iran claims to have targeted an American base following fresh US strikes.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE9UX2t0V3ZoNHlLbHNGNnBMT2JwYVY1TURaWFFYSS0xNFRNMjQ4LW5wLTRibHd1SzkzUGpYVkgyNmdDNkJwUzJ1SnNHSW5FMHlMYzNKeW9oTUFXUQ?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 836
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
