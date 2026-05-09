export const LATEST_SNAPSHOT = Object.freeze({
  "updateSequence": 578,
  "lastUpdated": "2026-05-09",
  "lastSyncedAt": "2026-05-09T18:07:26.455Z",
  "warDay": 71,
  "summary": "The US and Iran are engaged in naval confrontations in the Strait of Hormuz while awaiting Iran's response to a peace deal, concurrently with ongoing Israeli airstrikes and Hezbollah rocket fire in Lebanon despite a fragile ceasefire.",
  "lastNarrativeUpdate": "2026-05-09",
  "ceasefire": {
    "active": true,
    "status": "fragile",
    "confidence": 0.98,
    "durationDays": 30,
    "summary": "A month-long ceasefire is reportedly holding, though it has been tested by Israeli strikes in Lebanon and the killing of a Hezbollah chief."
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
        "militaryPower": 80
      },
      "behavior": {
        "precision": 0.8,
        "aggression": 0.9
      }
    },
    "iran": {
      "metrics": {
        "militaryPower": 65
      },
      "behavior": {
        "precision": 0.6,
        "aggression": 0.7
      }
    }
  },
  "global": {
    "nuclearIndex": 30,
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
      "date": "May 07",
      "text": "US fires on and disables 2 more Iranian tankers as tensions rise in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxOcExZcVpZYU4yU3oxSEpmajVmMktveG8zd1V3anRxdHhneVR1LUFuSUtSZGJpZUEwVEZTNkNZRlBGSzRQSVRkZVprMkp5dzhVUFJPMkdmTFVQMF9tOF8xVng2Qy01ZDlWNW5oTEhjeVcxd0ltQ3h2LUVBNVg1THRtUFp5Y3Ezd1MwUkR6elNoWHNDY00?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 578
    },
    {
      "date": "May 09",
      "text": "Israeli airstrikes kill five in southern Lebanon as Hezbollah rockets hit open areas in Israel.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMi3gFBVV95cUxNN19vV0hvR1lXbXI0WkhzTzlfbHhfVDZnbWRDOVZmaWpsS0RBUDd4ajBjWGhhOG9MNWlzVmFXRE9MUkxNaHV5eHlwcWtIYVA3T0ZTc01adjBpeHQwdkxSZlQ4aDV3dXN0VTlCRHRNaEc2OThWRGVZWHBpVmxjMkk2SGVyOVpMQjZJTWd2ME80c2RCcl9GVUZpN2FWZTdhWmpLWmEyMDZaQURnMnR0WFk2eDNuSzlmUTNQNWxIV1Bfdk1ieFZYbGNJV0N6eDVfakFCZGVkQkg0dEhEeHFTTHfSAeQBQVVfeXFMUDZzR0M5UzJWTHpfV1ByYVNLV3FidG5RX3pTOFhSekZUTmRpdVRDa2xsZzh0ZDFBSmV2R0U4U3kzd3pURXUzcGNZblo0RV9oQkxldkdYa2dFM1JhbXc5a2xFLWlxLTNZM2NqRW03VTlBeE9QOUhPUTFFRTJZMWcxLTI1ZjQwTkpRVkhtMklrSl8tV3NQX3VHdEpTTHBnV19YMF96TVpMeDBpcmVKQjB0b0V6eWNHTXN3RUEwd19xanhmMGdRTURZaTZmc1JzOU1DdHU0UTMzeTV6VlFmLTdYblVSODN1?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Hindu",
      "latestSinceUpdate": 578
    },
    {
      "date": "May 09",
      "text": "Israel says it killed a Hezbollah chief near Beirut, testing the truce.",
      "severity": "critical",
      "sourceUrl": null,
      "sourceName": "Google News RSS",
      "latestSinceUpdate": 578
    },
    {
      "date": "May 09",
      "text": "US military says it intercepted Iranian attacks on 3 Navy ships in the Strait of Hormuz.",
      "severity": "critical",
      "sourceUrl": "https://news.google.com/articles/CBMikwFBVV95cUxQUkt3M3BQa3VLVHFKQTh3MEhnVHFhZ241MHo2cm8wdnd4S25vdzI5RXRIY3JHVEl4TkliUHgzNkdoZllvSGNUQkxWb093anEyQnZlM25EQzlQSDZuTW5GVzBob29YdktSWWxBUjBSY2l6TlA2dUM3Vk1UT05iZ3daclJ2amNRU0gzNVJfS3FSdXMxWXc?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "AP News",
      "latestSinceUpdate": 578
    },
    {
      "date": "May 09",
      "text": "HMS Dragon heads to the Middle East for a potential Strait of Hormuz mission.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMiWkFVX3lxTFBQblVISmtYbzlfT1NTNG4zeTE4bUdobFhEVlVSMXdjd1F4ekl5VEJVRGNOdGJmZkpYQ2I4V0FycG11dDdwX0tIWEZzZWtRUW9ERlJnRDdSdWlldw?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "BBC",
      "latestSinceUpdate": 578
    },
    {
      "date": "May 09",
      "text": "UK sends warship to the Middle East as Trump awaits Iran’s response to a peace plan.",
      "severity": "warning",
      "sourceUrl": "https://news.google.com/articles/CBMivAFBVV95cUxQMXNPRGZ2WTh3dkR5S3RqQzc4WnBiazR2Ul9MZV9POXczaWJRMHJxaFQwUVp5MmROM19sNzZPSGtWaFJfMWc4a0pFZDFvbTNSZEFyYnRjMzlPai1tR3UzanM5dEcxSWFVLTRFdUF3N0R0SkdsNmlHVWJQZkVWTGdSS05KY3pFUjZfWGkzcXh2RWd3elg1NlpwRGdFZ0xJZmx5X2dOeXlJSGIxZjNIZ3hFWGlYNFA0WS0ya0dnUA?hl=en-US&gl=US&ceid=US:en",
      "sourceName": "The Independent",
      "latestSinceUpdate": 578
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
      "perspective": "Iran",
      "headline": "US actions in Hormuz are reckless and violate agreements",
      "summary": "Iran condemns recent US military actions in the Strait of Hormuz as a 'reckless military adventure' and a violation of an existing ceasefire, asserting that the US targeted its ships. Tehran indicates it will respond to external peace proposals.",
      "tone": "defiant",
      "latestSinceUpdate": 566
    },
    {
      "perspective": "United States",
      "headline": "US acts to enforce blockade, mediate regional tensions",
      "summary": "The US military engaged Iranian tankers for allegedly violating a blockade and conducted strikes on Iranian sites. Concurrently, the US is seeking to mediate talks between Israel and Lebanon to de-escalate regional tensions.",
      "tone": "strained",
      "latestSinceUpdate": 566
    },
    {
      "perspective": "Israel",
      "headline": "Strikes target militants, no immunity for threats",
      "summary": "Israel has conducted strikes in Lebanon, including Beirut, stating there is 'no immunity' for militants and confirming the killing of a Hezbollah chief. These actions are described as testing a truce and responding to ongoing threats.",
      "tone": "defiant",
      "latestSinceUpdate": 566
    },
    {
      "perspective": "Regional Analysis",
      "headline": "Escalation continues despite initial US military success",
      "summary": "While the initial military engagements between the US and Iran may have favored the US, the broader conflict remains difficult to conclude. Israeli actions in Lebanon are seen as potentially sowing division within the country.",
      "tone": "anxious",
      "latestSinceUpdate": 566
    }
  ]
});

export default LATEST_SNAPSHOT;
