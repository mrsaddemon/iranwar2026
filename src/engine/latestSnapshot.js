export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 212,
  "lastUpdated": "2026-04-17",
  "lastSyncedAt": "2026-04-17T21:56:47.900Z",
  "warDay": 49,
  "summary": "A 10-day ceasefire between Israel and Lebanon is in effect, while conflicting reports emerge regarding the status of the Strait of Hormuz amidst ongoing US blockade and global targeting of Iran-linked ships.",
  "lastNarrativeUpdate": "2026-04-17",
  "ceasefire": {
    "active": true,
    "status": "active",
    "confidence": 0.98,
    "durationDays": 10,
    "summary": "A 10-day ceasefire between Israel and Lebanon has gone into effect, allowing thousands of Lebanese to begin returning home."
  },
  "actorOverrides": {
    "usa": {
      "metrics": {
        "militaryPower": 90
      },
      "behavior": {
        "precision": 0.7,
        "aggression": 0.8
      }
    },
    "israel": {
      "metrics": {
        "militaryPower": 75
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.6
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
    "escalationLevel": 38,
    "oilDisruption": 85,
    "tradeImpact": 52,
    "sanctionsPressure": 49,
    "globalPressure": 56,
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
      "date": "Apr 17",
      "text": "Israel and Lebanon agree to a 10-day ceasefire, which goes into effect.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMipgFBVV95cUxOczFQSjR1cG9GRUhvaXBtaWl6VGZZQjlEdGp6OXMydzVRR3NHUE9IVl9MYWZVNXdhQW83bjRaU2dUYThKMlJZWTZHcEpzQnNmUGdNSWYyUUJkT0JJRDJUcWJCSEJ6S1N1UzF4UVU1N2JITjMybU16Njg1UzNjcW93Y0JKODlRNU9DOWxTMUlSQ1pMRjM2UUJNZloweWdVRjl3UFR1MERB?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "NBC News",
      "latestSinceUpdate": 212
    },
    {
      "date": "Apr 17",
      "text": "Iran declares the Strait of Hormuz 'completely open,' but tracking shows few ships moving and the US blockade continues.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiVEFVX3lxTFBTVmxOcHd0cWE2SEtkMFNaM2ZUZzdvLTVBNWY2RnkxMXhmZWFFVThlVzRrcDRpbDhXeGNGcnp3WFBnRWl1TkNCZGNjZFpkSEZ5cEZFTg?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 212
    },
    {
      "date": "Apr 17",
      "text": "Pres. Trump announces the Strait of Hormuz is open, but also states the US blockade will continue.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMihgFBVV95cUxPY3BPT3hGLVJ0bHVrVzY2T3dteF9WUGNhNWRnYmNCQUVBQlg1NUlTZDhEdk9fZDZwVkVhRFItcEFvSlcwVmV5bDFNZWs3djFLQlhxQTlNaEVCeHhNWmwtM1U3VWttTnp6UDNOY2xuU0xOZVE2V2F3SjI2aHBLczRJS1N4WWdKQdIBmgFBVV95cUxPeWdsNU02NzVOT3hWeFBGRGhPQWcteFIyNzVhTWZndnZNdXBxYXc5X0xIYXRhRGhtRk4tTTZDeWc5ZUp6WFBjZW9tbGh0cl9QemM0Wk5vVGJYUk1Ic3hiX3M1YW9UcVM2V1dvV2J2SXcwUGpaT2wyekI0TzAya1JOUzRvUF84bXFBdVJpaTlxbnF5c3pBRUhaVDBn?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AZ Family",
      "latestSinceUpdate": 212
    },
    {
      "date": "Apr 17",
      "text": "US military announces it will target Iran-linked ships worldwide, broadening its scope beyond the blockade.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMilAFBVV95cUxOSGJ6d0VPLVh3QXMyeVVEdDhhT3BSQ1ZGc1l2VFpFN2dtVndYNlJTdDdvTHQ5Nko2aEdYRUtmcUlYXzdVTkNRQmJzZThEWVp2MmRYZm9XUG84QU5IQVZnZGtWbzVzazVCamZJZWxCNzhHRUhva00zckwxWEZuak9zQ0xHWS1mSXNtM29JZnh2WVBzRTZt?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 212
    },
    {
      "date": "Apr 17",
      "text": "Pakistani army chief visits Tehran in an attempt to restart US talks.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMivwFBVV95cUxNam43bTZtRlVmOGE4Rm56N3NoM1hmN0syZVJHUXVzRS1nVHZIQ1plVnBoRWxveHMyellqcE1sbXVIUWdPa1poVDVkVmItcUJvMFFWM3dRMW9VOGZEWmd4dWpUNGJJNnZJM2doWENiXzlPVlZfTTVPU1phWktJdmQ1UVRHaVBBSWhiUnlTS0dMbGwybXJMakxIbE1wVUNreTZJODNhR2cwdEVSbWdKQ2pXRy13U1FDSnlFVFllRERBWdIBxAFBVV95cUxPRlA0Q29kWHV0SE1rSXFLYXotUjVZZGZseWp1RFJpNXIxZlVnWG5ZeXJfVUFxcTJHRVVseWlSZXcxZlh3RmJoMmJySG5rc21USDluOHlRQnhxdGdBOUptLS1LXzhJYmtjRTk1ZnJ6S1lSaXJUMDA2eW5wSHczUnVsNklBNzU1b1FvcVUzZzhfTXZtQ0dGei1hTDUtSEstUzh1MVZoSnNRellhMEZJQXhSYVVfSEFwZHFiQ2tRUnBKTUVRVmxK?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "Al Jazeera",
      "latestSinceUpdate": 212
    },
    {
      "date": "Apr 17",
      "text": "A vote to stop the Iran war fails again in the US Senate.",
      "severity": "info",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTE0wYVdsTDRnSDZOV0k0OEdyQS1NYktOdTFNdzF3Rzhsck9tR1BRcXU3eHo2OV8xU0pyZnNBLUhFbnZITEFUTHJJNGlhaVZ6T293anFxVkhseDVYdw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 212
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
      "perspective": "US/Israel",
      "headline": "US military 'locked and loaded' for Iran strikes as Israel holds positions in Lebanon ceasefire",
      "summary": "The US military has declared readiness to strike Iran's energy infrastructure and target Iran-linked ships globally. This comes as Israel maintains its positions in Lebanon during a newly implemented 10-day ceasefire with Hezbollah.",
      "tone": "defiant",
      "latestSinceUpdate": 197
    },
    {
      "perspective": "Iran/Hezbollah",
      "headline": "Hormuz blockade persists as Hezbollah warns Israel on ceasefire terms",
      "summary": "Iran continues its gridlock of the Strait of Hormuz, raising international concerns about shipping. Concurrently, Hezbollah has accepted a ceasefire with Israel but explicitly stated it must not allow Israel freedom of movement in Lebanon.",
      "tone": "defiant",
      "latestSinceUpdate": 197
    },
    {
      "perspective": "International/Economic",
      "headline": "Global shipping concerns rise over Hormuz blockade, potential Malacca Strait impact",
      "summary": "The ongoing blockade of the Strait of Hormuz by Iran is causing significant tension and prompting discussions about potential missions for when the conflict ends. There are growing concerns that this disruption could impact other vital shipping lanes, such as the Malacca Strait near Singapore.",
      "tone": "anxious",
      "latestSinceUpdate": 197
    },
    {
      "perspective": "US Domestic Politics",
      "headline": "Trump seeks end to Iran war, but House rejects US troop withdrawal",
      "summary": "President Trump has expressed a desire for 'more compromises' to end the Iran war. However, efforts in the House to withdraw U.S. forces from the conflict were rejected, indicating continued congressional support for the current military posture.",
      "tone": "strained",
      "latestSinceUpdate": 197
    }
  ]
});

export default LATEST_SNAPSHOT;
